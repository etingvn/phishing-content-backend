var companyID = 23;
var oddData = [];
var oddDataOld = [];
var oddDataLeague = [];
var oddDataOldLeague = [];

// convert
var _handicapTypeArray = ["/-", "+/-", "/*", "让/受让"];
var _defaultOddsType = "5";
var _oddsOrder = '1-2-3';
var _handicapType = 1;
var _handicapAccept = "-";
var _handicapGive = "";
var _oddsType = GetOddType(), _timeZone = GetTimeZone();
var GoalCn = ["0", "0/{0}0.5", "{0}0.5", "{0}0.5/1", "{0}1", "{0}1/1.5", "{0}1.5", "{0}1.5/2", "{0}2", "{0}2/2.5", "{0}2.5", "{0}2.5/3", "{0}3", "{0}3/3.5", "{0}3.5", "{0}3.5/4", "{0}4", "{0}4/4.5", "{0}4.5", "{0}4.5/5", "{0}5", "{0}5/5.5", "{0}5.5", "{0}5.5/6", "{0}6", "{0}6/6.5", "{0}6.5", "{0}6.5/7", "{0}7", "{0}7/7.5", "{0}7.5", "{0}7.5/8", "{0}8", "{0}8/8.5", "{0}8.5", "{0}8.5/9", "{0}9", "{0}9/9.5", "{0}9.5", "{0}9.5/10", "{0}10", "{0}10/10.5", "{0}10.5", "{0}10.5/11", "{0}11", "{0}11/11.5", "{0}11.5", "{0}11.5/12", "{0}12", "{0}12/12.5", "{0}12.5", "{0}12.5/13", "{0}13", "{0}13/13.5", "{0}13.5", "{0}13.5/14", "{0}14"];


function FilterEmpty(val) {
    if (typeof (val) == "undefined" || val == "")
        return "";
    else return val;
}

function CheckEmpty(str) {
    if (typeof (str) == 'undefined' || str == 'undefined' || !str || !/[^\s]/.test(str)) {
        return true;
    } else {
        return false;
    }
}

function GetOddType() {
    var detault = _defaultOddsType;//默认是赔率类型
    var oddsType = getCookie("Odds_Type");
    if (!oddsType != null && oddsType != "" && oddsType != undefined && !isNaN(oddsType)) detault = parseInt(oddsType);
    return detault;
}
function Goal2CnOU(goal) { //ou conversion
    if ((!goal && goal != "0") || isNaN(goal))
        return "";
    else {
        if (goal > 10 || goal < -10) return _ouTrimEndZero ? parseFloat(goal).toString() : goal;
        var newGoal = GoalCnOU[Math.abs(parseInt(goal * 4))];
        // if (_ouTrimEndZero) return parseFloat(newGoal).toString();
        return newGoal
    }
}

function Goal2Num(goal) {
    if (typeof (goal) == "undefined") return "";
    if (!isNaN(goal) || goal.indexOf("/") == -1) return parseFloat(goal);
    var isMinus = false;
    if (goal.indexOf("-") > -1) isMinus = true;
    goal = goal.replace("+", "").replace("-", "");
    var nums = goal.split('/');
    goal = (parseFloat(nums[0]) + parseFloat(nums[1])) / 2;
    return isMinus ? (0 - goal) : goal;
}
function GetTimeZone() {
    var defaultTimeZone = 0 - ((new Date()).getTimezoneOffset()) / 60;
    var detault = defaultTimeZone;//默认是系统时区
    var value = getCookie("Time_Zone");
    if (value != null && value != "" && value != undefined && !isNaN(value)) detault = parseInt(value);
    return detault;
}

var oTool = {
    USJson: { 0.22: -450, 0.28: -350, 0.33: -300, 0.36: -275, 0.38: -267, 0.44: -225, 0.47: -212.5, 0.53: -187.5, 0.57: -175, 0.62: -162.5, 0.63: -160, 0.66: -150, 0.72: -137.5, 0.83: -120, 0.88: -114, 0.91: -110, 0.95: -105 },
    fractionJson: { 0.22: "2/9", 0.28: "2/7", 0.33: "1/3", 0.36: "4/11", 0.38: "3/8", 0.44: "4/9", 0.47: "40/85", 0.53: "8/15", 0.57: "4/7", 0.62: "8/13", 0.63: "5/8", 0.66: "4/6", 0.72: "8/11", 0.83: "5/6", 0.88: "7/8", 0.91: "10/11", 0.95: "20/21" },
    getPL: function (ot, hVal, pVal, gVal, isEu) {
        if (isEu && ot != 3 && ot != '3' && ot != 6 && ot != '6') return [this.toFixZero(hVal), this.toFixZero(pVal), this.toFixZero(gVal)];
        switch (ot) {
            case 1: case '1'://HK
                return [hVal, pVal, gVal];
                break;
            case 2: case '2'://Ind
                return [this.toIN(hVal), pVal, this.toIN(gVal)];
                break;
            case 3: case '3'://US
                if (isEu) return [this.toUSEu(hVal), this.toUSEu(pVal), this.toUSEu(gVal)];
                return [this.toUS(hVal), pVal, this.toUS(gVal)];
                break;
            case 4: case '4'://Europe
                return [this.toEU(hVal), pVal, this.toEU(gVal)];
                break;
            case 5: case '5'://ML
                return [this.toML(hVal), pVal, this.toML(gVal)];
                break;
            case 6: case '6'://Fraciton
                if (isEu) return [this.toFractionEu(hVal), this.toFractionEu(pVal), this.toFractionEu(gVal)];
                return [this.toFraction(hVal), pVal, this.toFraction(gVal)];
                break;
        }
    },
    changePL: function (ot, val, isEu) {
        if (isEu && ot != 3 && ot != '3' && ot != 6 && ot != '6') return this.toFixZero(val);
        switch (ot) {
            case 1: case '1'://HK
                return val;
                break;
            case 2: case '2'://Ind
                return this.toIN(val);
                break;
            case 3: case '3'://US
                if (isEu) return this.toUSEu(val);
                return this.toUS(val);
                break;
            case 4: case '4'://Europe
                return this.toEU(val);
                break;
            case 5: case '5'://ML
                return this.toML(val);
                break;
            case 6: case '6'://Fraciton
                if (isEu) return this.toFractionEu(val);
                return this.toFraction(val);
                break;
        }
    },
    toIN: function (val) {
        if (!val) return "";
        var fVal = parseFloat(val);
        return (fVal < 1) ? (0 - 1 / fVal).toFixed(2) : val;
    },
    toML: function (val) {
        if (!val) return "";
        var fVal = parseFloat(val);
        return (fVal > 1) ? (0 - 1 / fVal).toFixed(2) : val;
    },
    toEU: function (val) {
        if (!val) return "";
        var fVal = parseFloat(val);
        return (fVal + 1).toFixed(2);
    },
    toUS: function (val) {
        if (!val) return "";
        var fVal = parseFloat(val);
        var oJson = oTool.USJson;
        if (fVal in oJson)
            return oJson[fVal];

        if (fVal <= 0)
            return 0;
        else if (fVal < 1)
            return Math.round(0 - 100 * ((1 / fVal).toFixed(2)));
        else
            return Math.round(100 * fVal);
    },
    toUSEu: function (val) {
        if (!val) return "";
        var fVal = parseFloat(val);
        if (!fVal || isNaN(fVal)) return "";
        fVal = FloatHelper.Operator(fVal, 1, "-");
        var oJson = oTool.USJson;
        if (fVal in oJson)
            return oJson[fVal];
        if (fVal == 0) return "0";

        if (fVal < 1)
            return Math.round(0 - 100 * ((1 / fVal).toFixed(2)));
        else
            return Math.round(100 * fVal);
    },
    toFraction: function (val) {//Fractional conversion
        var fVal = parseFloat(val);
        if (fVal.toString() == "NaN") return "";

        var f = fVal < 0;
        if (f) fVal = Math.abs(fVal);
        var fra = { n: 0, m: 1 };//n/m
        var num = 0;
        if (fVal > 1)
            fVal = FloatHelper.Operator(fVal, num = fVal | 0, "-");

        var oJson = oTool.fractionJson;
        if (fVal in oJson) {
            var arr = oJson[fVal].split("/");
            fra.n = parseInt(arr[0]);
            fra.m = parseInt(arr[1]);
        }
        else if (fVal > 0) {
            var GCD = function (a, b) { return b == 0 ? a : GCD(b, a % b); }//Greatest Common Divisor
            var m = Math.pow(10, FloatHelper.DecimalLength(fVal));
            var n = parseInt(fVal * m);
            var d = GCD(m, n);
            fra.n = n / d;
            fra.m = m / d;
        }
        return (f ? "-" : "") + (num * fra.m + fra.n) + "/" + fra.m;
    },
    toFractionEu: function (val) {//Fractional conversion
        var fVal = parseFloat(val);
        if (fVal.toString() == "NaN") return "";
        fVal = FloatHelper.Operator(fVal, 1, "-");
        var f = fVal < 0;
        if (f) fVal = Math.abs(fVal);
        var fra = { n: 0, m: 1 };//n/m
        var num = 0;
        if (fVal > 1)
            fVal = FloatHelper.Operator(fVal, num = fVal | 0, "-");

        var oJson = oTool.fractionJson;
        if (fVal in oJson) {
            var arr = oJson[fVal].split("/");
            fra.n = parseInt(arr[0]);
            fra.m = parseInt(arr[1]);
        }
        else if (fVal > 0) {
            var GCD = function (a, b) { return b == 0 ? a : GCD(b, a % b); }//Greatest Common Divisor
            var m = Math.pow(10, FloatHelper.DecimalLength(fVal));
            var n = parseInt(fVal * m);
            var d = GCD(m, n);
            fra.n = n / d;
            fra.m = m / d;
        }
        return (f ? "-" : "") + (num * fra.m + fra.n) + "/" + fra.m;
    },
    toFixZero: function (val, num) {
        if (!num) num = 2;
        var fVal = parseFloat(val);
        if (fVal.toString() == "NaN") return val;
        return fVal.toFixed(num)
    }
};

function GetHandicapType() {
    var detault = 1;
    var handicapType = getCookie("Handicap_Type");
    if (handicapType) detault = parseInt(handicapType);
    return detault;
}


function initHandicap() {
    _handicapType = GetHandicapType();
    if (_handicapType <= _handicapTypeArray.length) {
      _handicapGive = _handicapTypeArray[_handicapType - 1].split('/')[0];
      _handicapAccept = _handicapTypeArray[_handicapType - 1].split('/')[1];
    }
}

function Goal2GoalCn(goal) {
    //handicap conversion
    if ((!goal && goal != '0') || isNaN(goal)) return '';
    else {
        if (goal > 10) return _handicapGive + Math.abs(goal);
        if (goal < -10) return _handicapAccept + Math.abs(goal);
        var i = Math.abs(parseInt(goal * 4));
        if (goal >= 0) return GoalCn[i].replace('{0}', _handicapGive);
        else return GoalCn[i].replace('{0}', _handicapAccept);
    }
}
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    return null;
}

function writeShareCookie(name, value, expireVal) {
    var expire = expireVal;
    var hours = 365;
    if (expire == undefined)
        expire = new Date((new Date()).getTime() + hours * 3600000);
    expire = ";path=/;expires=" + expire.toGMTString() + ";domain=" + getDoMain();
    document.cookie = name + "=" + escape(value) + expire;
}
// End: convert

/**
 * 0 -> 9
 */
const NUMERIC = {
    min: 48,
    max: 57,
}

/**
 * a -> z
 */
const ALPHABET = {
    min: 97,
    max: 122,
}

const OFFSET_CHAR = [3, 1, 5, 9, 6, 2, 4, 7, 8, 0];

const isNumber = (value) => {
    return !isNaN(parseFloat(value));
}

const decodeChar = (char, offset) => {
    const CHARTYPE = isNumber(Number(char)) ? NUMERIC : ALPHABET;
    const code = char.charCodeAt(0) - offset;

    if (code >= CHARTYPE.min)
        return String.fromCharCode(code);

    const dis = Math.abs(CHARTYPE.min - code);

    return String.fromCharCode(CHARTYPE.max - dis + 1);
}

const decodeId = (id) => {
    if (id === undefined || id === '')
        return '';

    // if (!shouldEncode())
    //   return id;

    const newId = [];

    for (let i = 0; i < id.length; i++)
        newId.push(decodeChar(id[i], OFFSET_CHAR[i % OFFSET_CHAR.length]));

    return newId.join('');
}

function getOddValue(odd, oddOld, key) {
    let type = 'normal';
    if (!odd || !odd[key]) {
        return {
            type,
            value: '-',
        };
    }

    if (oddOld && oddOld[key]) {
        if (oddOld[key] > odd[key]) {
            type = 'down';
        } else if (oddOld[key] < odd[key]) {
            type = 'up';
        }
    }

    return {
        type,
        value: odd[key] ? odd[key] : '-',
    };
}

function parseOddMatchDataArray(oddDataString) {
    if (!oddDataString || oddDataString.length <= 0) {
      return [];
    }

    const matchOddDataArray = oddDataString.split('!');
    const matchesOdd = matchOddDataArray
      .filter((match) => match)
      .map((match) => {
            const [theSport, ISports, oddAsian, oddEuro, oddOverUnder] =
            match.split('^');
            const [asian_hdp, asian_hdp_home, asian_hdp_away, asian_close] =
            oddAsian.split(':');
            const [european_home, european_draw, european_away, european_close] =
            oddEuro.split(':');
            const [over_under_hdp, over, under, over_under_close] =
            oddOverUnder.split(':');

            return {
                id: decodeId(theSport),
                encode_is_id: ISports,
                asian_hdp: asian_hdp,
                asian_hdp_home: asian_hdp_home,
                asian_hdp_away: asian_hdp_away,
                asian_close: asian_close,
                european_home: european_home,
                european_draw: european_draw,
                european_away: european_away,
                european_close: european_close,
                over_under_hdp: over_under_hdp,
                over: over,
                under: under,
                over_under_close: over_under_close,
            };
      });

    return matchesOdd;
}

function getOddData(odd, oddOld) {
    const data = {
        isShowOdd: false,
    };

    for (const key of [
        'asian_hdp',
        'asian_hdp_home',
        'asian_hdp_away',
        'asian_close',
        'european_home',
        'european_draw',
        'european_away',
        'european_close',
        'over_under_hdp',
        'over',
        'under',
        'over_under_close',
    ]) {
        const ov = getOddValue(odd, oddOld, key);
        data[key] = ov;
        if (ov.value != '-') {
            data.isShowOdd = true;
        }
    }

    return data;
}

function showOdds() {
    initHandicap();

    for (const odd of oddData) {
        const tr = document.querySelector(`#match-child-${odd.id}`);

        if (!tr) {
            continue;
        }

        const oddOld = oddDataOld.find((item) => item.id === odd.id);

        const oddsAttribute = tr.getAttribute('odds');
        if (oddsAttribute === null) {
            console.log('The odds attribute does not exist on this element.');
            continue;
        }

        const footerRight = tr.querySelector('.grid-match__odds');
        if (!footerRight) {
            console.error('The element with class grid-match__footer-right was not found.');
            continue;
        }

        const data = getOddData(odd, oddOld);
        if(!data.isShowOdd) {
            tr.setAttribute('odds', '');
            continue;
        }
        const html = `
        <div class='grid-match__odds-item d-flex'>
            <p>
                <span class='${data.asian_hdp_home.type}'>
                    ${data.asian_close == '1' ? 'Đóng' : data.asian_hdp_home.value}
                </span>
            </p>
            <p>
                <span class='${data.asian_hdp.type}'>
                    ${data.asian_close == '1' ? 'Đóng' : Goal2GoalCn(data.asian_hdp.value)}
                </span>
            </p>
            <p>
                <span class='${data.asian_hdp_away.type}'>
                    ${data.asian_close == '1' ? 'Đóng' : data.asian_hdp_away.value}
                </span>
            </p>
        </div>
        <div class='grid-match__odds-item d-flex'>
            <p>
                <span class='${data.over.type}'>
                    ${data.over_under_close == '1' ? 'Đóng' : data.over.value}
                </span>
            </p>
            <p>
                <span class='${data.over_under_hdp.type}'>
                    ${data.over_under_close == '1' ? 'Đóng' : Goal2GoalCn(data.over_under_hdp.value)}
                </span>
            </p>
            <p>
                <span class='${data.under.type}'>
                    ${data.over_under_close == '1' ? 'Đóng' : data.under.value}
                </span>
            </p>
        </div>
        `;

        tr.setAttribute('odds', '- - -');
        footerRight.innerHTML = html;
    }

    // league slide
    for (const odd of oddDataLeague) {
        const tr = document.querySelector(`#match-carousel-${odd.id}`);

        if (!tr) {
            continue;
        }

        const oddsBtn = tr.querySelector('.odds-btn');
        if (!oddsBtn) {
            console.error('The element with class odds-btn was not found.');
            continue;
        }

        const oddOld = oddDataOldLeague.find((item) => item.id === odd.id);

        const data = getOddData(odd, oddOld);

        if(!data.isShowOdd) {
            oddsBtn.classList.add('d-none');
            continue;
        }

        const html= `
            <div class='odds-item'>
                <span class='${data.asian_hdp_home.type}'>
                    ${ data.asian_close == '1' ? 'Đóng' : data.asian_hdp_home.value }
                </span>
                <span class='${data.asian_hdp.type}'>
                    ${data.asian_close == '1' ? 'Đóng' : Goal2GoalCn(data.asian_hdp.value) }
                </span>
                <span class='${data.asian_hdp_away.type}'>
                    ${ data.asian_close == '1' ? 'Đóng' : data.asian_hdp_away.value }
                </span>
            </div>
            <div class='odds-item odds-item-center'>
                <span class='${data.european_home.type}'>
                    ${ data.european_close == '1' ? 'Đóng' : data.european_home.value }
                </span>
                <span class='${data.european_draw.type}'>
                    ${data.european_close == '1' ? 'Đóng' : Goal2GoalCn(data.european_draw.value) }
                </span>
                <span class='${data.european_away.type}'>
                    ${ data.european_close == '1' ? 'Đóng' : data.european_away.value }
                </span>
            </div>
            <div class='odds-item'>
                <span class='${data.over.type}'>
                    ${data.over_under_close == '1' ? 'Đóng' : data.over.value }
                </span>
                <span class='${data.over_under_hdp.type}'>
                    ${ data.over_under_close == '1' ? 'Đóng' : Goal2GoalCn(data.over_under_hdp.value) }
                </span>
                <span class='${data.under.type}'>
                    ${ data.over_under_close == '1' ? 'Đóng' : data.under.value }
                </span>
            </div>
        `;

        oddsBtn.innerHTML = html;
        oddsBtn.classList.remove('d-none');
    }
}

function getOddSport() {
    const dateObj = new Date();
    dateObj.setHours(dateObj.getHours() + 7);
    const month   = dateObj.getUTCMonth() + 1; // months from 1-12
    const day     = dateObj.getUTCDate();
    const year    = dateObj.getUTCFullYear();
    const date = `${year}-${month}-${day}`;

    const url = `https://odds.vbfast.xyz/v1/football/odds/${companyID}/${date}`;
    jQuery.getJSON(url, function (res) {
        const odds = parseOddMatchDataArray(res.data.odds);
        oddData = odds;
        showOdds();
    });

    const urlEuro = `https://odds.vbfast.xyz/v1/football/odds/league/y3d7s6do1ktm560/season/c9dxsq8ot6cr5s2/provider/${companyID}`;
    jQuery.getJSON(urlEuro, function (res) {
        const odds = parseOddMatchDataArray(res.data.odds);
        oddDataLeague = odds;
        showOdds();
    });
}

function getoddsLive() {
    const url = `https://odds.vbfast.xyz/v1/football/odds-live-changes/${companyID}`;

    jQuery.getJSON(url, function (res) {
        const oddLive = parseOddMatchDataArray(res.data.odds);
        const datas = [];
        // Thêm dữ liệu live vào
        for (const item of oddData) {
            const itemLive = oddLive.find(
              (oddLive) => oddLive.id === item.id
            );
            if (itemLive) {
                datas.push(itemLive);
            } else {
                datas.push(item);
            }
        }
        // Thêm trân đang live mà trong danh sách không có
        for (const itemLive of oddLive) {
            const itemOld = datas.find(
              (odd) => odd.id === itemLive.id
            );
            if (!itemOld) {
                datas.push(itemLive);
            }
        }
        oddDataOld = oddData;
        oddData = datas;

        const datasLeague = [];
        // Thêm dữ liệu live vào
        for (const item of oddDataLeague) {
            const itemLive = oddLive.find(
              (oddLive) => oddLive.id === item.id
            );
            if (itemLive) {
                datasLeague.push(itemLive);
            } else {
                datasLeague.push(item);
            }
        }
        // Thêm trân đang live mà cho trong danh sách vào
        for (const itemLive of oddLive) {
            const itemOld = datasLeague.find(
              (odd) => odd.id === itemLive.id
            );
            if (!itemOld) {
                datasLeague.push(itemLive);
            }
        }
        oddDataOldLeague = oddDataLeague;
        oddDataLeague = datasLeague;

        showOdds();

        window.setTimeout('getoddsLive()', 3000);
    });
}

getOddSport();

window.setTimeout('getoddsLive()', 3000);
