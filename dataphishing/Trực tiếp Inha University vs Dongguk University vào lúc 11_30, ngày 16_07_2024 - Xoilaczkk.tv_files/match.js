var jq = jQuery.noConflict();

class MatchManager {
  constructor(elementId) {
    this.element = jq(elementId);
    this.windowWidth = jq(window).width();
    this.match = null;
    this.stats = null;
    this.season_id = null;
    this.fetchedData = null;
    this.listIncidents = {
      1: { label: "Ghi bàn", iconName: "icongoal" },
      8: { label: "Penalty", iconName: "iconPenalty" },
      16: { label: "Penalty missed", iconName: "iconPenaltySaved" },
      17: { label: "Phản lưới", iconName: "iconown-goal" },
      3: { label: "Thẻ vàng", iconName: "iconyellowcard" },
      4: { label: "Thẻ đỏ", iconName: "iconredcard" },
      15: { label: "Thẻ vàng thứ 2", iconName: "icontwoyellow-red" },
    };
    this.handleGMR = null;
    // this.handleGMR2 = null;
    this.init();
  }
  init() {
    this.handleGMR = setInterval(this.xbdGetMachResult.bind(this), 20 * 1000);
    if (
      this.element.attr("data-status") !== "" &&
      this.element.attr("data-status") !== "NS"
    ) {
      // this.handleGMR2 = setInterval(
      //   this.xbdGetStatistics.bind(this),
      //   10 * 1000
      // );
    }
  }

  buildTags(htmlTemple, data) {
    return htmlTemple.replace(/\{\$(\w+)\}/g, function (a, b) {
      return b in data ? data[b] : "";
    });
  }

  getMatchState(mState, startTime) {
    var unixTime = Math.ceil(new Date() / 1000);
    var ms = "";
    switch (mState) {
      case 5:
        ms = "Pen";
        break;
      case 4:
        ms = "Phụ";
        break;
      case 3:
        ms = "Hiệp 2";
        break;
      case 2:
        ms = "HT";
        break;
      case 1:
        ms = "Hiệp 1";
        break;
      case 0:
        ms = "Chưa bắt đầu" || "&nbsp;";
        break;
      case -1:
        ms = "Hết";
        break;
      case -10:
        ms = "Hủy";
        break;
      case -11:
        ms = "Treo";
        break;
      case -12:
        ms = "Cắt";
        break;
      case -13:
        ms = "Dừng";
        break;
      case -14:
        ms = "Hoãn";
        break;
    }
    var mIcon = "'";
    if (mState == 1) {
      var df = (unixTime - startTime) / 60;
      df = Math.ceil(df);
      if (df <= 0) {
        ms = "1" + mIcon;
      } else if (df <= 45) {
        ms = df.toString() + mIcon;
      } else {
        ms = "45+" + mIcon;
      }
    } else if (mState == 3) {
      var df$1 = (unixTime - startTime) / 60 + 46;
      df$1 = Math.ceil(df$1);
      if (df$1 <= 46) {
        ms = "46" + mIcon;
      } else if (df$1 <= 90) {
        ms = df$1.toString() + mIcon;
      } else {
        ms = "90+" + mIcon;
      }
    }
    return ms;
  }

  xbdGetMachResult() {
    var self = this;
    return new Promise((resolve, reject) => {
      var fid = jq("#match").attr("data-fid"),
        homeid = jq("#match").attr("data-homeid"),
        player = [],
        awayid = jq("#match").attr("data-awayid");
      if(fid === undefined) return;
      jq.getJSON(`${ajax_object.apiUrl}/match/${fid}`, function (res) {
        // update statistics tab
        resolve(res);
        var args = {
          league: {
            icon: "iconleague",
            name: "Giải đấu",
            value:
              res.data?.competition?.name !== ""
                ? res.data?.competition?.name
                : null,
          },
          round: {
            icon: "iconround",
            name: "Vòng thi đấu",
            value:
              res.data?.round?.round_num !== 0
                ? res.data?.round?.round_num
                : null,
          },
          stadium: {
            icon: "iconstadium",
            name: "Sân vận động",
            value: res.data.venue?.name,
          },
          temperature: {
            icon: "icontemperature",
            name: "Nhiệt độ",
            value: res.data.environment?.temperature,
          },
          referee: {
            icon: "iconreferee",
            name: "Trọng tài",
            value: res.data.referee?.name,
          },
        };
        var html = [];
        for (var key in args) {
          if (
            args.hasOwnProperty(key) &&
            args[key].value !== undefined &&
            args[key].value !== null
          ) {
            var template = jq("#match-info-template").html();
            var data = args[key];
            template = template.replace("{$icon}", data.icon);
            template = template.replace("{$name}", data.name);
            template = template.replace("{$value}", data.value);
            html.push(template);
          }
        }
        jq(".box-match-info").html(html.join(""));
        jq(".home-name").text(res.data.home_team?.name);
        jq(".home-logo").attr(
          "src",
          `${ajax_object.cdn}team/${res.data.home_team_id}/image`
        );
        jq(".away-name").text(res.data.away_team?.name);
        jq(".away-logo").attr(
          "src",
          `${ajax_object.cdn}team/${res.data.away_team_id}/image`
        );
      });
    });
  }

  xbdGetStatistics(matchId) {
    var self = this;
    var userSelectedTab = null;
    const currentActiveTab = jq(".match_statistics .nav-tabs .active").attr(
      "href"
    );
    jq(".match_statistics .nav-tabs").on("click", "a", function () {
      userSelectedTab = jq(this).attr("href");
    });
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = urlParams.has("dev");
    const selectedApiUrl = isDev ? ajax_object.apiUrl : ajax_object.apiUrl2;
    jq.getJSON(
      `${ajax_object.apiUrl}/match/${matchId}/statistics`,
      function (res) {
        if (!res || !res.data || res.data.length === 0) return;
        const getTypeName = (type) => {
          switch (type) {
            case 0:
              return "Tất cả";
            case 1:
              return "Hiệp 1";
            case 2:
              return "Hiệp 2";
            case 3:
              return "Hiệp phụ";
            default:
              return "";
          }
        };
        const techKind = {
          ball_possession: "TL kiểm soát bóng",
          corner_kicks: "Phạt góc",
          goals: "Bàn thắng",
          penalty: "Phạt đền",
          assists: "Kiến tạo",
          red_cards: "Thẻ đỏ",
          yellow_cards: "Thẻ vàng",
          shots: "Sút bóng",
          shots_on_target: "Sút cầu môn",
          passes: "Chuyền bóng",
          passes_accuracy: "Chuyền bóng thành công",
          dribble: "Rê bóng",
          dribble_succ: "Rê bóng thành công",
          clearances: "Đánh chặn",
          blocked_shots: "Cản bóng",
          shots_off_target: "Sút ngoài cầu môn",
          attacks: "Tấn công",
          dangerous_attack: "Tấn công nguy hiểm",
          interceptions: "Cắt bóng",
          tackles: "Tắc bóng",
          key_passes: "Chuyền bóng quan trọng",
          crosses: "Tạt bóng",
          crosses_accuracy: "Tạt bóng thành công",
          long_balls: "Chuyền dài",
          long_balls_accuracy: "Chuyền dài chính xác",
          duels: "Đối đầu",
          duels_won: "Đối đầu thành công",
          fouls: "Phạm lỗi",
          was_fouled: "Bị phạm lỗi",
          goals_against: "Bàn thua",
          offsides: "Việt vị",
          yellow2red_cards: "Thẻ vàng biến thành thẻ đỏ",
          freekicks: "Đá phạt trực tiếp",
          freekick_goals: "Bàn từ đá phạt",
          hit_woodwork: "Sút trúng cột dọc",
          fastbreaks: "Phản công nhanh",
          fastbreak_shots: "Sút trong phản công nhanh",
          fastbreak_goals: "Bàn từ phản công nhanh",
          poss_losts: "Mất bóng",
        };
        const calculatePercentage = (value, total) => {
          return total === 0 ? "0%" : ((value / total) * 100).toFixed(2) + "%";
        };
        const statsToHtml = (stats) => {
          let html = [];
          const homeStat = stats.filter(
            (stat) => stat.team_id === self.match.home_team_id
          )[0];
          const awayStat = stats.filter(
            (stat) => stat.team_id === self.match.away_team_id
          )[0];
          for (const key in techKind) {
            if (homeStat[key] !== undefined && awayStat[key] !== undefined) {
              const template = jq("#teamTechRowTemplate").html();

              const totalValue = homeStat[key] + awayStat[key];
              if (totalValue === 0) continue;
              const winHome = homeStat[key] > awayStat[key] ? "winHome" : "";
              const winAway = homeStat[key] < awayStat[key] ? "winAway" : "";
              const showHomePre = calculatePercentage(
                homeStat[key],
                totalValue
              );
              const showGuestPre = calculatePercentage(
                awayStat[key],
                totalValue
              );
              const args = {
                type: techKind[key],
                home:
                  key == "ball_possession"
                    ? homeStat[key] + "%"
                    : homeStat[key],
                away:
                  key == "ball_possession"
                    ? awayStat[key] + "%"
                    : awayStat[key],
                showHomePre: showHomePre,
                showGuestPre: showGuestPre,
                winHome: winHome,
                winAway: winAway,
              };
              html.push(self.buildTags(template, args));
            }
          }
          return html.join("");
        };
        let tabsHtml =
          '<ul class="nav nav-tabs statistics-head mb-2 px-2 gap-3 border-0">';
        let contentHtml = '<div class="tab-content">';
        res.data.forEach(function (item) {
          const typeName = getTypeName(item.type);
          const tabId = `#type${item.type}`;
          const shouldDefaultActive =
            item.type == 0 && !userSelectedTab && !currentActiveTab;
          const isActive =
            (userSelectedTab && userSelectedTab === tabId) ||
            tabId === currentActiveTab ||
            shouldDefaultActive;
          tabsHtml += `<li class="nav-item"><a class="${
            isActive ? "active" : ""
          }" data-bs-toggle="tab" href="${tabId}">${typeName}</a></li>`;
          contentHtml += `<div id="type${item.type}" class="${
            isActive ? "show active" : "fade"
          } tab-pane"><div class="d-flex flex-column row-gap-4">${statsToHtml(
            item.stats
          )}</div></div>`;
        });
        tabsHtml += "</ul>";
        contentHtml += "</div>";
        jq(".match_statistics").html(tabsHtml + contentHtml);
      }
    );
    if (self.match.status_id !== 8) {
      setTimeout(function () {
        self.xbdGetStatistics(matchId);
      }, 10000);
    }
  }

  xbdGetAnalyses(matchId) {
    var self = this;
    function processMatches(
      matches,
      teams,
      competitions,
      template,
      homeTeamId
    ) {
      var html = [];
      matches.forEach(function (match) {
        const homeTeam = teams.find((team) => team.id === match[5][0]);
        const awayTeam = teams.find((team) => team.id === match[6][0]);
        const competition = competitions.find(
          (competition) => competition.id === match[1]
        );
        const baseFields = {
          homeTeamName: homeTeam?.name || "",
          homeTeamLogo: `${ajax_object.cdn}team/${match[5][0]}/image`,
          homeScore: match[5][2],
          homeHalfScore: match[5][3],
          homeCorner: match[5][6],
          awayTeamName: awayTeam?.name || "",
          awayTeamLogo: `${ajax_object.cdn}team/${match[6][0]}/image`,
          awayScore: match[6][2],
          awayHalfScore: match[6][3],
          awayCorner: match[6][6],
          date: self.formatDate("DD/MM/YYYY", match[3]),
          status: self.determineMatchOutcome(match, homeTeamId).charAt(0),
          league: competition?.short_name || "",
        };
        html.push(self.buildTags(template, baseFields));
      });
      return html.join("");
    }

    jq.getJSON(
      `${ajax_object.apiUrl2}/match/${matchId}/h2h`,
      function (response) {
        if (response.data === undefined) {
          jq('a[href="#tab-doi-dau"]').hide();
          jq('a[data-bs-target="#tab-3-tran-sap-toi-pane"]').hide();
        }
        if (
          response.data?.vs.length === 0 ||
          response.data?.vs.length === undefined
        ) {
          jq('a[href="#tab-h2h"]').hide();
          jq('a[href="#tab-home-recent"]').trigger("click");
        }
        if (
          response.data?.home.length === 0 ||
          response.data?.home.length === undefined
        )
          jq('a[href="#tab-home-recent"]').hide();
        if (
          response.data?.away.length === 0 ||
          response.data?.away.length === undefined
        )
          jq('a[href="#tab-away-recent"]').hide();
        if (!response) return;
        try {
          const lastMatchesTemplate = jq("#lastMatchesTemplate").html();
          const threeMatchesTemplate = jq("#threeMatchesTemplate").html();
          jq("#history").html(
            processMatches(
              response.data.vs,
              response.data.teams,
              response.data.competitions,
              lastMatchesTemplate,
              self.match.home_team_id
            )
          );
          jq("#home_recent").html(
            processMatches(
              response.data.home,
              response.data.teams,
              response.data.competitions,
              lastMatchesTemplate,
              self.match.home_team_id
            )
          );
          jq("#away_recent").html(
            processMatches(
              response.data.away,
              response.data.teams,
              response.data.competitions,
              lastMatchesTemplate,
              self.match.away_team_id
            )
          );
          if (
            response.data.future.home.length == 0 &&
            response.data.future.away.length == 0
          ) {
            jq('a[data-bs-target="#tab-3-tran-sap-toi-pane"]').parent().hide();
          }
          if (response.data.future.home.length > 0) {
            jq("#home_three").html(
              processMatches(
                response.data.future.home,
                response.data.teams,
                response.data.competitions,
                threeMatchesTemplate
              )
            );
          }

          if (response.data.future.away.length > 0) {
            jq("#away_three").html(
              processMatches(
                response.data.future.away,
                response.data.teams,
                response.data.competitions,
                threeMatchesTemplate
              )
            );
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  }

  xbdGetMatchAnother() {
    var self = this;
    jq.getJSON(
      "/vb-ajax.php?action=filter_match&filter=all&league=",
      function (response) {
        jq("#match-another").html(response.data.html);
      }
    );
  }

  determineMatchOutcome = (matchData, homeTeamId) => {
    // Trích xuất số bàn thắng từ dữ liệu trận đấu
    const homeGoalsRegularTime = matchData[5][2];
    const awayGoalsRegularTime = matchData[6][2];
    const homeGoalsOvertime = matchData[5][7] === -1 ? 0 : matchData[5][7]; // -1 nghĩa là không có dữ liệu
    const awayGoalsOvertime = matchData[6][7] === -1 ? 0 : matchData[6][7]; // -1 nghĩa là không có dữ liệu

    // Tổng số bàn thắng sau cả trận chính và hiệp phụ
    const totalHomeGoals = homeGoalsRegularTime + homeGoalsOvertime;
    const totalAwayGoals = awayGoalsRegularTime + awayGoalsOvertime;
    const isActualHomeTeam = matchData[5][0] === homeTeamId;
    // Xác định trạng thái trận đấu dựa trên tổng số bàn thắng
    if (totalHomeGoals > totalAwayGoals) {
      return isActualHomeTeam ? "win" : "lose"; // Kiểm tra đội nhà có phải là đội mình quan tâm không
    } else if (totalHomeGoals === totalAwayGoals) {
      return "draw"; // Hòa
    } else {
      return isActualHomeTeam ? "lose" : "win"; // Đảo ngược kết quả nếu đội mình quan tâm không phải là đội nhà
    }
  };

  formatDate(format, timestamp) {
    var date = new Date(timestamp * 1000);
    var replacements = {
      DD: ("0" + date.getDate()).slice(-2),
      MM: ("0" + (date.getMonth() + 1)).slice(-2),
      YYYY: date.getFullYear().toString(),
      HH: ("0" + date.getHours()).slice(-2),
      mm: ("0" + date.getMinutes()).slice(-2),
    };
    for (var key in replacements) {
      format = format.replace(key, replacements[key]);
    }
    return format;
  }

  anotherFunction() {
    var self = this;
    this.xbdGetMachResult()
      .then((res) => {
        // Sử dụng 'data' ở đây
        const matchId = res.data.id;
        self.match = res.data;
        self.season_id = res.data.season_id;

        self.xbdGetLineups(matchId);
        self.xbdGetStanding(self.season_id);
        self.xbdGetAnalyses(matchId);
        // self.xbdGetMatchAnother();
        self.xbdGetIncident(matchId);
        // self.xbdGetRealTime(matchId);
        self.xbdGetStatistics(matchId);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  }

  getContrastColor(hexcolor) {
    // Remove the hash if it's there
    hexcolor = hexcolor.replace("#", "");

    // Parse r, g, b values
    let r = parseInt(hexcolor.substring(0, 2), 16); // hex to integer
    let g = parseInt(hexcolor.substring(2, 4), 16);
    let b = parseInt(hexcolor.substring(4, 6), 16);

    // Determine the brightness of the background
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // If brightness is under 128, return white, otherwise return black
    return brightness < 128 ? "white" : "black";
  }

  xbdGetStanding(seasonId, filter = "all") {
    var self = this;
    const determineMatchResult = (match, teamId) => {
      if (match.home_team.id === teamId) {
        if (match.home_scores[0] > match.away_scores[0]) return "w";
        if (match.home_scores[0] < match.away_scores[0]) return "l";
      } else if (match.away_team.id === teamId) {
        if (match.home_scores[0] < match.away_scores[0]) return "w";
        if (match.home_scores[0] > match.away_scores[0]) return "l";
      }
      return "d";
    };
    jq.getJSON(`${ajax_object.apiUrl}/standing/${seasonId}`)
      .done(function (response) {
        if (!response) return;
        try {
          const data = response.data;
          if (data.standings.tables.length === 0)
            jq('a[id="tab-bxh"]').parent().hide();
          let standingHTML = "";
          let stagePhasesHTML = "";
          let standingFilter = "";
          const groupName = ["A", "B", "C", "D", "E", "F", "G", "H","I","J"];
          // Populate rows and standings
          data.standings.tables
            .filter((item) => item.stage_id === self.match.round.stage_id)
            .forEach((item) => {
              let rowsHTML = "";
              const rowsTemplate = jq("#standing-row-template").html();
              item.rows.sort((a, b) => {
                if (filter === "all") {
                  return a.position - b.position;
                } else {
                  return a[`${filter}_position`] - b[`${filter}_position`];
                }
              });
              item.rows.forEach((standing) => {
                let filterFields;
                let formHTML = "";
                let highlightClass = "";
                let isWinning = false;
                let isLosing = false;
                let isDraw = false;
                let scores = '';

                const homeScore = standing?.live_score?.home_scores[0];
                const awayScore = standing?.live_score?.away_scores[0];
                if (standing?.live_score?.home_team_id === standing.team_id) {
                  scores = standing.live_score?.home_scores[0] + "-" + standing.live_score?.away_scores[0];
                  if (homeScore > awayScore) isWinning = true;
                  else if (homeScore < awayScore) isLosing = true; 
                  else isDraw = true;
                } else if (
                  standing?.live_score?.away_team_id === standing.team_id
                ) {
                  scores = standing.live_score?.home_scores[0] + "-" + standing.live_score?.away_scores[0];
                  if (awayScore > homeScore) {
                    isWinning = true;
                    scores = standing.live_score?.away_scores[0] + "-" + standing.live_score?.home_scores[0];
                  }
                  else if (awayScore < homeScore) {
                    isLosing = true;
                    scores = standing.live_score?.away_scores[0] + "-" + standing.live_score?.home_scores[0];
                  }
                  else isDraw = true;
                }
                if (self.match.home_team_id === standing.team_id) {
                  highlightClass = "highlight-home";
                } else if (self.match.away_team_id === standing.team_id) {
                  highlightClass = "highlight-away";
                }

                if (isWinning)
                  highlightClass += " liveScore liveScore--isWinning";
                else if (isLosing)
                  highlightClass += " liveScore liveScore--isLosing";
                else if (isDraw)
                  highlightClass += " liveScore liveScore--isDraw";
                const team = data.teams.find(
                  (team) => team.id === standing.team_id
                );
                const promotion = data.standings.promotions.find(
                  (promotion) => promotion.id == standing.promotion_id
                );
                // console.log(team)
                // console.log(standing.team_id)
                const baseFields = {
                  short_name: team.name,
                  team_id: standing.team_id,
                };
                if (filter === "all") {
                  filterFields = {
                    position_style: promotion?.color
                      ? `background-color: ${
                          promotion?.color ?? ""
                        };color: ${self.getContrastColor(promotion.color)}`
                      : "",
                    highlight: highlightClass,
                    position: standing.position,
                    total: standing.total,
                    won: standing.won,
                    draw: standing.draw,
                    loss: standing.loss,
                    goal_diff: standing.goal_diff,
                    points: standing.points,
                    goals: standing.goals,
                    goals_against: standing.goals_against,
                    team_logo: `${ajax_object.cdn}team/${standing.team_id}/image`,
                    scores: standing.live_score ? scores : "",
                  };
                  if (
                    standing.recent_matches &&
                    standing.recent_matches.length > 0
                  ) {
                    standing.recent_matches.forEach((result) => {
                      const title = `${result.home_scores[0]}:${
                        result.away_scores[0]
                      }&nbsp; (${result.home_team.name} - ${
                        result.away_team.name
                      }) ${self.formatDate("DD/MM/YYYY", result.match_time)}`;
                      formHTML += `<div class="formIcon formIcon--${determineMatchResult(
                        result,
                        standing.team_id
                      )}" title="${title}">${determineMatchResult(
                        result,
                        standing.team_id
                      )}</div>`;
                    });
                  }
                } else {
                  // home or away
                  filterFields = {
                    position_style: "",
                    highlight: highlightClass,
                    position: standing[`${filter}_position`],
                    total: standing[`${filter}_total`],
                    won: standing[`${filter}_won`],
                    draw: standing[`${filter}_draw`],
                    loss: standing[`${filter}_loss`],
                    goal_diff: standing[`${filter}_goal_diff`],
                    points: standing[`${filter}_points`],
                    goals: standing[`${filter}_goals`],
                    goals_against: standing[`${filter}_goals_against`],
                    team_logo: `${ajax_object.cdn}team/${standing.team_id}/image`,
                    scores: standing.live_score ? scores : "",
                  };
                  if (
                    standing[`${filter}_matches`] &&
                    standing[`${filter}_matches`].length > 0
                  ) {
                    standing[`${filter}_matches`].forEach((result) => {
                      const title = `${result.home_scores[0]}:${
                        result.away_scores[0]
                      }&nbsp; (${result.home_team.name} - ${
                        result.away_team.name
                      }) ${self.formatDate("DD/MM/YYYY", result.match_time)}`;
                      formHTML += `<div class="formIcon formIcon--${determineMatchResult(
                        result,
                        standing.team_id
                      )}" title="${title}">${determineMatchResult(
                        result,
                        standing.team_id
                      )}</div>`;
                    });
                  }
                }
                const populatedRow = self.buildTags(rowsTemplate, {
                  ...baseFields,
                  ...filterFields,
                  form: formHTML,
                });
                rowsHTML += populatedRow;
              });
              standingHTML += jq("#standing-template")
                .html()
                .replace(
                  "{$league_name}",
                  data.competition.type == 1 && item.group == 0
                    ? "Team"
                    : "Group " + groupName[item.group - 1]
                )
                .replace("{$rows}", rowsHTML);
            });
          data.standings.promotions.forEach((stagePhase) => {
            stagePhasesHTML += jq("#standing-stage-phase-template")
              .html()
              .replace("{$color}", stagePhase.color)
              .replace("{$name}", stagePhase.name);
          });
          standingFilter = jq("#standing-filter").html();
          jq(".standings").html(standingHTML).append(stagePhasesHTML);
        } catch (error) {
          console.log(error);
          jq('a[href="#tab-bxh"]').hide();
        }
        if (self.match.status_id !== 8) {
          setTimeout(function () {
            self.xbdGetStanding(self.season_id);
          }, 60000);
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(jqXHR.status);
        if (jqXHR.status == 404) {
          // Xử lý khi trạng thái là 404 (không tìm thấy)
          console.log("File không tìm thấy");
        } else {
          // Xử lý lỗi khác
          jq("#tab-bxh").parent().hide();
          console.log("Lỗi: " + textStatus);
        }
      });
  }

  xbdGetRealTime(matchId) {
    var self = this;
    jq.getJSON(`${ajax_object.apiUrl2}/match/${matchId}/realtime`, (res) => {
      const html = [];
      const data = res.data;
      self.stats = data.stats;
      const template = jq("#eventRowTemplate").html();
      let homeScore = 0;
      let awayScore = 0;
      let injuryStartTime = null;
      let startHalfTime = 0;
      if (!data.incidents) return;
      data.incidents.forEach((incident) => {
        if (incident.type === 19) {
          // Thời gian bắt đầu bù giờ
          injuryStartTime = incident.time;
        } else if (incident.type === 11) {
          // Thời gian kết thúc bù giờ
          injuryStartTime = null;
          startHalfTime = 1;
        }
        if (incident.type !== 19) {
          homeScore = incident.home_score ?? homeScore;
          awayScore = incident.away_score ?? awayScore;
          const args = {
            matchTime: injuryStartTime
              ? injuryStartTime + "+" + (incident.time - injuryStartTime)
              : startHalfTime && incident.time == 45
              ? incident.time + 1
              : incident.time,
            matchTimeExtra: "",
            isHome:
              incident.position === 1
                ? "homeEvent"
                : incident.position === 2
                ? "awayEvent"
                : "midfield",
            type: incident.type,
            eventIcon: getEventIcon(incident, homeScore, awayScore),
            playerName: incident.player?.short_name || incident.player?.name,
            playerLogo: incident.player ? getPlayerAvatar(incident.player) : "",
            assistName: incident.assist1?.short_name || incident.assist1?.name,
            assistLogo: incident.assist1
              ? getPlayerAvatar(incident.assist1)
              : "",
            icon: incident.playerIn ? "iconout1" : "",
          };
          if (incident.playerIn) {
            args.playerName =
              incident.playerIn.short_name || incident.playerIn.name;
            args.playerLogo = getPlayerAvatar(
              incident.playerIn,
              "object-fit-contain rounded-pill ring-2 ring-green-400"
            );
          }
          if (incident.playerOut) {
            args.assistName =
              incident.playerOut.short_name || incident.playerOut.name;
            args.assistLogo = getPlayerAvatar(
              incident.playerOut,
              "object-fit-contain rounded-pill ring-2 ring-red-600"
            );
          }
          if (incident.type === 1) {
            args.assistLogo = "";
          }
          self.removeEmptyProperties(args);
          html.push(self.buildTags(template, args));
        }
      });

      jq(".summary_blockWrapper").html(html.reverse().join(""));

      function getEventIcon(incident, homeScore, awayScore) {
        if (incident.position === 0) {
          switch (incident.type) {
            case 11:
              return `<div class="d-flex midfield" style="background-color: #0154d4;">HT ${homeScore} - ${awayScore}</div>`;
            case 12:
              return `<div class="d-flex midfield" style="background-color: #0154d4;">FT ${homeScore} - ${awayScore}</div>`;
            default:
              return `<svg aria-hidden="true" width="20px" height="20px" class="icon fs-12"><use xlink:href="#iconEvent${incident.type}"></use></svg>`;
          }
        }
        return `<svg aria-hidden="true" width="20px" height="20px" class="icon fs-12"><use xlink:href="#iconEvent${incident.type}"></use></svg>`;
      }

      function getPlayerAvatar(
        player,
        className = "object-fit-contain rounded-pill ring-2"
      ) {
        const $avatar = self.createImage(className, {
          src: ajax_object.cdn + `player/${player.id}/image`,
          alt: player.name,
          width: "32px",
          height: "32px",
        });
        return self.createDiv("cursor-pointer bg-white rounded-pill", null, [
          $avatar,
        ]);
      }
      if (self.match.status_id !== 8) {
        setTimeout(function () {
          self.xbdGetRealTime(matchId);
        }, 10000);
      }
    }).fail(() => {
      console.error("Error fetching realtime data for match:", matchId);
    });
  }

  xbdGetIncident(matchId) {
    try {
      var self = this;
      jq.getJSON(`${ajax_object.apiUrl}/match/${matchId}/incidents`, (res) => {
        const html = [];
        const data = res.data;
        const template = jq("#eventRowTemplate").html();
        let homeScore = 0;
        let awayScore = 0;
        let injuryStartTime = null;
        let startHalfTime = 0;
        let endHalfTime = 0;
        let extraTime = false;
        let endTime = false;
        if (!data) return;
        data.forEach((incident) => {
          if (incident.type === 19) {
            injuryStartTime = incident.time; // Thời gian bắt đầu bù giờ
          } else if (incident.type === 11) {
            injuryStartTime = null; // Reset thời gian bắt đầu bù giờ
            startHalfTime = 1; // Hiệp 2 bắt đầu
          } else if (incident.type === 10) {
            startHalfTime = incident.time; // Ghi lại thời gian bắt đầu của hiệp
          } else if (incident.type === 12) {
            injuryStartTime = null;
          } else if (incident.type === 12 || incident.time >= 105) {
            endHalfTime = incident.time; // Ghi lại thời gian kết thúc của hiệp
            extraTime = true; // Hiệp phụ bắt đầu
          }
          let displayTime = incident.time;
          if (
            incident.type == 12 ||
            incident.type == 26 ||
            incident.type == 11
          ) {
            displayTime = "";
          } else if (injuryStartTime !== null && !extraTime) {
            let addedTime = Math.abs(incident.time - injuryStartTime);
            displayTime =
              addedTime === 0
                ? injuryStartTime
                : `${Math.min(injuryStartTime, incident.time)}+${addedTime}`; // Thời gian bù giờ nếu addedTime không bằng 0
          }
          if (incident.type !== 19) {
            homeScore = incident.home_score ?? homeScore;
            awayScore = incident.away_score ?? awayScore;
            const args = {
              matchTime: displayTime,
              matchTimeExtra: "",
              isHome:
                incident.position === 1
                  ? "homeEvent"
                  : incident.position === 2
                  ? "awayEvent"
                  : "midfield",
              type: incident.type,
              eventIcon: getEventIcon(incident, homeScore, awayScore),
              playerName: incident.player?.short_name || incident.player?.name,
              playerLogo: incident.player
                ? getPlayerAvatar(incident.player)
                : "",
              assistName:
                incident.assist1?.short_name || incident.assist1?.name,
              assistLogo: incident.assist1
                ? getPlayerAvatar(incident.assist1)
                : "",
              icon: incident.playerIn ? "iconout1" : "",
            };
            if (incident.playerIn) {
              args.playerName =
                incident.playerIn.short_name || incident.playerIn.name;
              args.playerLogo = getPlayerAvatar(
                incident.playerIn,
                "object-fit-contain rounded-pill ring-2 ring-green-400"
              );
            }
            if (incident.playerOut) {
              args.assistName =
                incident.playerOut.short_name || incident.playerOut.name;
              args.assistLogo = getPlayerAvatar(
                incident.playerOut,
                "object-fit-contain rounded-pill ring-2 ring-red-600"
              );
            }
            if (incident.type === 1) {
              args.assistLogo = "";
            }
            if (
              (incident.home_score || incident.away_score) &&
              typeof incident.home_score == "number" &&
              typeof incident.away_score == "number"
            )
              args.scores = `${incident.home_score} - ${incident.away_score}`;
            self.removeEmptyProperties(args);
            html.push(self.buildTags(template, args));
          }
        });
        jq(".summary_blockWrapper").html(html.reverse().join(""));
        function getEventIcon(incident, homeScore, awayScore) {
          if (incident.position === 0) {
            switch (incident.type) {
              case 11:
                return `<div class="d-flex midfield" style="background-color: #0154d4;">HT ${homeScore} - ${awayScore}</div>`;
              case 12:
                return `<div class="d-flex midfield" style="background-color: #0154d4;">FT ${homeScore} - ${awayScore}</div>`;
              case 26:
                return `<div class="d-flex midfield" style="background-color: #0154d4;">ET ${homeScore} - ${awayScore}</div>`;
              case 27:
                return `<div class="d-flex midfield" style="background-color: #0154d4;">PEN ${homeScore} - ${awayScore}</div>`;
              default:
                return `<svg aria-hidden="true" width="20px" height="20px" class="icon fs-12"><use xlink:href="#iconEvent${incident.type}"></use></svg>`;
            }
          }
          return `<svg aria-hidden="true" width="20px" height="20px" class="icon fs-12"><use xlink:href="#iconEvent${incident.type}"></use></svg>`;
        }

        function getPlayerAvatar(
          player,
          className = "object-fit-contain rounded-pill ring-2"
        ) {
          const $avatar = self.createImage(className, {
            src: ajax_object.cdn + `player/${player.id}/image`,
            alt: player.name,
            width: "32px",
            height: "32px",
          });
          return self.createDiv("cursor-pointer bg-white rounded-pill", null, [
            $avatar,
          ]);
        }
        if (self.match.status_id !== 8) {
          setTimeout(function () {
            self.xbdGetIncident(matchId);
          }, 10000);
        }
      }).fail(() => {
        setTimeout(function () {
          self.xbdGetIncident(matchId);
        }, 10000);
        console.error("Error fetching incident data for match:", matchId);
      });
    } catch (error) {
      console.log(error);
    }
  }

  xbdGetLineups(matchId) {
    var self = this;
    jq.getJSON(`${ajax_object.apiUrl}/match/${matchId}/lineups`)
      .done(function (res) {
        if (!res.data) {
          jq('a[id="tab-doi-hinh"]').hide();
          return;
        }
        if (
          res.data.injury.home.length === 0 &&
          res.data.injury.away.length === 0
        ) {
          jq('a[href="#tab-injured-or-suspended"]').hide();
        }
        const teams = ["home", "away"];
        jq(".groundBox").html("");
        jq.each(teams, function (index, e) {
          const $div = jq("<div>", {
            class: "w-100 halfBox",
            key: e,
          });
          if (e === "away") {
            $div.css("transform", "rotateX(180deg)");
          }
          jq(".groundBox").append($div);
          const $divSquare2 = jq("<div>").addClass("square2");
          const $divSquare1 = jq("<div>").addClass("square1");
          $div.append($divSquare2.append($divSquare1));
          $div.append(
            jq("<div>")
              .addClass("w-100")
              .css({ height: "46px", overflow: "hidden" })
              .append(jq("<div>").addClass("circle"))
          );
          const playerDefault = [
            { x: 50, y: 12 },
            { x: 12, y: 32 },
            { x: 31, y: 32 },
            { x: 50, y: 32 },
            { x: 69, y: 32 },
            { x: 88, y: 32 },
            { x: 24, y: 60 },
            { x: 50, y: 60 },
            { x: 76, y: 60 },
            { x: 35, y: 90 },
            { x: 65, y: 90 },
          ];
          jq.each(
            self.lineupsHomeAway(res.data.lineup)[e],
            function (index, player) {
              const $lineupPlayersDiv = jq("<div>", {
                class: "lineupPlayers",
                key: player.id,
              });
              const $flexDiv = jq("<div>", {
                class: "flex",
                css: {
                  width: "0.85em",
                  height: "0.85em",
                  position: "absolute",
                  ...self.playerStyle(
                    player.x || playerDefault[index].x,
                    player.y || playerDefault[index].y,
                    e
                  ),
                },
              });
              const $shirtNumberDiv = jq("<div>", {
                class: "shirtNumber",
              }).append(
                jq("<div>", {
                  class: "",
                  style: "transform: scale(0.75)",
                }).text(player.shirt_number)
              );
              const $ratingDiv = jq("<div>", {
                class: "rating",
                style: "background:" + self.formatRateColor(player.rating),
              }).append(
                jq("<div>", {
                  class: "w-100 h-100 ratingText",
                }).text(Number(player.rating).toFixed(1))
              );
              const $playerName = jq("<span>", {
                class: "playerName w-o-h",
              }).text(player.short_name || player.name);
              $flexDiv.append(
                jq("<img>", {
                  alt: player.name,
                  src: `${ajax_object.cdn}player/${player.id}/image`,
                  css: {
                    background: "#fff",
                  },
                })
              );
              let incidentsForPlayer = self.sortIn2(
                player.incidents,
                player.id
              ); // Define your sortIncidentsForPlayer function
              let $rightBottomBox = jq("<div>", {
                class: "rightBottomBox",
              });
              jq.each(incidentsForPlayer, function (index, incident) {
                let $incidentDiv = jq("<div>")
                  .addClass("h-100 d-flex align-items-center")
                  .attr("data-key", index);
                if (
                  incident.type === 1 &&
                  incident.num !== 0
                ) {
                  self.appendIncidentToDiv($incidentDiv, "goal", incident.num);
                }else if (incident.type === 8 && incident.num !== 0) {
                  self.appendIncidentToDiv(
                    $incidentDiv,
                    "Penalty",
                    incident.num
                  );
                }else if (incident.type === 17 && incident.num !== 0) {
                  self.appendIncidentToDiv(
                    $incidentDiv,
                    "own-goal",
                    incident.num
                  );
                }
                $rightBottomBox.append($incidentDiv);
              });
              let $leftBottomBox = jq("<div>", {
                class: "leftTopBox",
              });
              jq.each(
                self.sortIn1(player.incidents),
                function (index, incident) {
                  let $incidentDiv = jq("<div>")
                    .addClass("h-100 d-flex align-items-center")
                    .attr("data-key", index);
                  if (incident.type === 9) {
                    self.appendIncidentToDiv(
                      $incidentDiv,
                      "out1",
                      incident.time
                    );
                  }
                  if (incident.type === 3) {
                    self.appendIncidentToDiv($incidentDiv, "yellowcard");
                  }
                  if (incident.type === 4) {
                    self.appendIncidentToDiv($incidentDiv, "redcard");
                  }
                  if (incident.type === 15) {
                    self.appendIncidentToDiv($incidentDiv, "twoyellow-red");
                  }
                  $leftBottomBox.append($incidentDiv);
                }
              );
              $flexDiv.append($leftBottomBox);
              $flexDiv.append($shirtNumberDiv);
              if (player.rating !== "0.0" && player.rating !== 0) $flexDiv.append($ratingDiv);
              $flexDiv.append($playerName);
              $flexDiv.append($rightBottomBox);

              $lineupPlayersDiv.append($flexDiv);
              $div.append($lineupPlayersDiv);
            }
          );
        });
        try {
          jq.each(
            self.homeAwayStartingPlayers(res.data),
            function (index, playerInfo) {
              const container = jq("<div>")
                .addClass("w-100")
                .attr("key", playerInfo.type);

              if (
                playerInfo.type === "Starting Lineups" ||
                (playerInfo.data.home.length === 0 &&
                  playerInfo.data.away.length === 0)
              ) {
              } else {
                // const $divTeam = self.createDiv(
                //   "table tab-pane " + self.sanitizeTitle(playerInfo.type),
                //   "",
                //   [],
                //   "tab-" + self.sanitizeTitle(playerInfo.type)
                // );
                let $divTeam = jq("<div>")
                  .addClass(
                    `table tab-pane ${self.sanitizeTitle(playerInfo.type)}`
                  )
                  .attr("id", `tab-${self.sanitizeTitle(playerInfo.type)}`);
                const $divFlex = jq("<div>").addClass(
                  "w-100 d-flex overflow-hidden"
                );
                const logoURL =
                  "https://img0.aiscore.com/football/team/42396d18444156e640c37476c2b41b93.png!w60";
                jq.each(["home", "away"], function (index, team) {
                  const $div = jq("<div>").addClass(
                    "fs-12 flex-1 d-flex flex-column text-white"
                  );
                  jq.each(playerInfo.data[team], function (index, player) {
                    if (playerInfo.type == "Injured or suspended") {
                      $div.append(self.renderInjuryCard(player));
                    } else {
                      player.lastItem = self.setTeamBorderStyle(
                        playerInfo.data["home"].length,
                        playerInfo.data["away"].length,
                        team,
                        index
                      );
                      $div.append(self.renderPlayerCard(player));
                    }
                  });
                  $divFlex.append($div);
                  $divTeam.append($divFlex);
                });
                jq("#lineUpInfo").append($divTeam);
              }
            }
          );
        } catch (error) {
          console.log(error);
        }
        jq(".backGreen").css(
          "font-size",
          jq(".play_main_right .tab-content").width() / 10 + "px"
        );
        jq(".formationHome").text(res.data.home_formation);
        jq(".formationAway").text(res.data.away_formation);
        if (
          res.data.coach?.home?.name !== undefined &&
          res.data.coach?.away?.name !== undefined
        ) {
          jq(".coachHome").text(
            `Huấn luyện viên : ${res.data.coach?.home?.name}`
          );
          jq(".coachAway").text(
            `Huấn luyện viên : ${res.data.coach?.away?.name}`
          );
        }
        if (self.match.status_id !== 8) {
          setTimeout(function () {
            self.xbdGetLineups(matchId);
          }, 30000);
        }
      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        if (jqXHR.status == 404) {
          // Xử lý khi trạng thái là 404 (không tìm thấy)
          console.log("File không tìm thấy");
        } else {
          // Xử lý lỗi khác
          jq('a[id="tab-doi-hinh"]').parent().hide();
        }
      });
  }

  playerStyle(x, y, direction) {
    const left = ((9.5 * x) / 100 - 0.425).toFixed(3) + "em";
    const top = ((9.5 * y) / 100 - 0.425).toFixed(3) + "em";
    const transform = direction === "away" ? "rotateX(180deg)" : "";

    return {
      left: left,
      top: top,
      transform: transform,
    };
  }

  sortIn2(incidents, playerId) {
    if (!incidents || jq.isEmptyObject(incidents)) return false;

    let typeCounts = {
      1: 0,
      8: 0,
      17: 0,
    };

    jq.each(incidents, function (index, incident) {
      if (typeCounts.hasOwnProperty(incident.type) && incident?.player?.id == playerId) {
        typeCounts[incident.type]++;
      }
    });

    return jq.map([1, 8, 17], function (type) {
      return {
        type: type,
        num: typeCounts[type],
      };
    });
  }

  sortIn1(t) {
    if (!t || t.length === 0) return [];
    var e = [];
    t.forEach(function (incident) {
      if ([9, 3, 4, 15].includes(incident.type)) {
        switch (incident.type) {
          case 3:
            incident.weight = 4;
            break;
          case 4:
            incident.weight = 3;
            break;
          case 15:
            incident.weight = 2;
            break;
          default:
            incident.weight = 1;
        }
        e.push(incident);
      }
    });
    e.sort((a, b) => b.weight - a.weight);
    return e;
  }

  appendIncidentToDiv($div, iconType, num = "") {
    $div.append(
      '<svg class="icon fs-16" aria-hidden="true"><use xlink:href="#icon' +
        iconType +
        '"></use></svg>'
    );
    if (num > 1) {
      $div.append(
        '<span style="font-size: 0.27em; color: #fff; margin-right: 2px;">' +
          num +
          "'" +
          "</span>"
      );
    }
  }

  formatRateColor(e) {
    var colors = [
      "#FF203C",
      "#FF6600",
      "#FFAE0F",
      "#C1CC01",
      "#5CB400",
      "#0E8604",
    ];
    if (e < 6) return colors[0];
    if (e >= 6 && e <= 6.49) return colors[1];
    if (e >= 6.5 && e <= 6.99) return colors[2];
    if (e >= 7 && e <= 7.99) return colors[3];
    if (e >= 8 && e <= 8.99) return colors[4];
    if (e >= 9) return colors[5];
    return void 0;
  }

  lineupsHomeAway(lineup) {
    const filterByStatus = (team) => {
      return team && Array.isArray(team)
        ? team.filter((player) => player.first === 1)
        : [];
    };
    let home = [],
      away = [];
    try {
      home = filterByStatus(lineup.home);
      away = filterByStatus(lineup.away);
    } catch (error) {
      console.error("Error filtering lineups:", error);
    }
    return {
      home,
      away,
    };
  }

  setTeamBorderStyle(homeTeamCount, awayTeamCount, teamType, currentTeamIndex) {
    if (
      (teamType === "home" &&
        currentTeamIndex == homeTeamCount - 1 &&
        homeTeamCount > awayTeamCount) ||
      (teamType === "away" &&
        currentTeamIndex == awayTeamCount - 1 &&
        awayTeamCount > homeTeamCount)
    ) {
      return true;
    }
    return false;
  }

  homeAwayStartingPlayers(lineups) {
    try {
      var result = [
        { type: "Starting Lineups", data: { home: [], away: [] } },
        { type: "Substitutes", data: { home: [], away: [] } },
        { type: "Injured or suspended", data: { home: [], away: [] } },
      ];

      var flag = false;
      try {
        jq.each(["home", "away"], function (_, side) {
          var lineupSide = lineups.lineup[side];
          if (lineupSide) {
            jq.each(lineupSide, function (_, player) {
              if (player.first === 1) {
                result[0].data[side].push(player);
                flag = true;
              } else if ([-1, 2, 3].indexOf(player.first) === -1) {
                result[1].data[side].push(player);
                flag = true;
              }
            });
          }
        });
        if (lineups.injury.home) {
          result[2].data.home = lineups.injury.home;
          flag = true;
        }
        if (lineups.injury.away) {
          result[2].data.away = lineups.injury.away;
          flag = true;
        }
      } catch (e) {
        console.error(e);
      }
      self.renderLen = flag || (lineups && lineups.hasCoordinates);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  sanitizeTitle(title) {
    return jq
      .trim(title) // Trim whitespace
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^a-z0-9\-]/g, "") // Remove any characters that aren't a-z, 0-9, or -
      .replace(/\-{2,}/g, "-"); // Replace multiple dashes with a single dash
  }

  createTeamSection(logoSrc, teamName) {
    const logo = createImage("teamLogo", { src: logoSrc });
    const nameDiv = createDiv("teamName", teamName);

    return createDiv("d-flex flex-1 align-items-center h-100", null, [
      logo,
      nameDiv,
    ]).css({
      height: "1.28rem",
      "border-left": "1px solid #eeeeee",
    });
  }

  createElement({
    tag = "div",
    classes,
    id,
    styles,
    content,
    children = [],
    attributes = {},
  }) {
    const $element = jq(`<${tag}>`);
    id && $element.attr("id", id);
    classes && $element.addClass(classes);
    styles && $element.css(styles);
    content && $element.text(content);

    Object.entries(attributes).forEach(([key, value]) => {
      $element.attr(key, value);
    });
    children.forEach((child) => $element.append(child));
    return $element;
  }
  createDiv(classes, content, children, id) {
    const $element = this.createElement({
      tag: "div",
      classes,
      id,
      content,
      children,
    });
    return $element.prop("outerHTML");
  }

  createImage(classes, attributes) {
    const $element = this.createElement({
      tag: "img",
      classes,
      attributes,
    });
    return $element.prop("outerHTML");
  }

  formatIcon(t, e, r) {
    switch (t) {
      case 1:
        return "#icongoal";
      case 3:
        return "#iconyellowcard";
      case 4:
        return "#iconredcard";
      case 8:
        return "#iconPenalty";
      case 16:
        return "#iconPenaltySaved";
      case 17:
        return "#iconown-goal";
      case 15:
        return "#icontwoyellow-red";
      case 9:
        if (e.in_player && r == e.in_player.id) return "#iconin";
        if (e.out_player && r == e.out_player.id) return "#iconout";
        return "#iconsubstitution";
      default:
        return "";
    }
  }

  renderPlayerCard({
    id,
    shirt_number,
    playerLink,
    logo,
    name,
    rating,
    minute,
    incidents,
    lastItem,
  }) {
    let iconHtml = "";
    if (incidents) {
      iconHtml = incidents
        .map((incident) => {
          return `
          <span class="align-items-center" style="display:inline-flex;vertical-align:middle;float:right" data-v-1fe4fa13="">
            <svg aria-hidden="true" class="icon fs-12" data-v-1fe4fa13="">
              <use xlink:href="${this.formatIcon(
                incident.type,
                incident,
                id
              )}" data-v-1fe4fa13=""></use>
            </svg>
            ${
              incident.type === 9
                ? `<span class="color-9lue fs-12 color-999" style="margin:0 2px">${incident.minute}'</span>`
                : ""
            }
          </span>
        `;
        })
        .join("");
    }
    return `
      <div class="w-100 w-bar-100 align-items-center d-flex gap-2 item-player" ${
        lastItem ? `style="border-bottom:0px"` : ""
      }>
          <a href="javascript:void(0)" style="position:relative">
            <div itemprop="logo" class="br-50 player-logo van-image van-image--round" style="overflow:hidden;border-radius:50%;">
              <img src="${
                ajax_object.cdn
              }player/${id}/image" alt="${name}" class="img-fluid" style="object-fit:contain;">
            </div>
            ${
              rating !== "0.0"
                ? `<div class="playerRating" style="background:${this.formatRateColor(
                    rating
                  )};">
              <div class="ratingtext">${rating}</div>
            </div>`
                : ""
            }
          </a>
          <div class="desc descMax" style="max-width: 9rem;">
            <a itemprop="name" href="javascript:void(0)" class="name color-333 cur-pointer descMax">${
              shirt_number ? shirt_number + " -" : "-"
            } ${name}</a>
          </div>
          <div class="d-flex ml-auto gap-2 align-items-center">
            ${incidents ? iconHtml : ""}
          </div>
      </div>
      `;
  }
  renderInjuryCard({
    id,
    shirt_number,
    logo,
    name,
    rating,
    minute,
    reason,
    iconLink = "iconInjured",
    lastItem,
  }) {
    return `
        <div class="w-100 w-bar-100 align-items-center d-flex gap-2 item-player" ${
          lastItem ? `style="border-bottom:0px"` : ""
        }>
          <a href="javascript:void(0)" style="position:relative">
            <div itemprop="logo" class="br-50 player-logo van-image van-image--round" style="overflow:hidden;border-radius:50%;">
              <img src="${
                ajax_object.cdn
              }player/${id}/image" alt="${name}" class="img-fluid" style="object-fit:contain;">
            </div>
          </a>
          <div class="desc descMax">
            <a itemprop="name" href="javascript:void(0)" class="name color-333 cur-pointer descMax">${name}</a>
            <div class="text-secondary descMax">${
              shirt_number ?? "-"
            } ${reason}</div>
          </div>
          <svg aria-hidden="true" class="icon fs-12">
            <use xlink:href="${iconLink}"></use>
          </svg>
        </div>
      `;
  }
  removeEmptyProperties(obj) {
    Object.keys(obj).forEach((key) => {
      if (!obj[key] || obj[key] === "") {
        delete obj[key];
      }
    });
  }
}

jQuery(document).ready(function ($) {
  // Tạo một instance của MatchManager cho phần tử #match
  const matchInstance = new MatchManager("#match");
  matchInstance.anotherFunction();
  // console.log(jQuery(document).height());
  jq(".scrolling").css("height", jQuery(document).height() - 36);
  jq(".chat-player iframe").css("height", jQuery(document).height() - 36);
  jq(document).on("click", ".subFilter__group a", function (e) {
    e.preventDefault();
    const filterValue = jq(this).data("filter");
    // Add/remove active class
    jq(".subFilter__group a").removeClass("active");
    jq(this).addClass("active");
    matchInstance.xbdGetStanding(matchInstance.season_id, filterValue);
  });
  jq(".tournamentTableSimplified").click(function () {
    jq(this).toggleClass("tournamentTableMobileResolver__icon--selected");
    if(jq(".tournament-table-tabs-and-content").hasClass('tournamentTableMobileResolver--show')) {
      jq(".table__cell--value").addClass("d-none");
      jq(".ui-table__header--value").addClass('d-none');
      // jq('.ui-table__header').toggleClass('ui-table__header--short');
      // jq('.ui-table__row').toggleClass('ui-table__row--short');
      // jq(".table__cell--value").removeClass("d-none");
      // jq(".ui-table__header--value").removeClass('d-none');
      // // jq(".ui-table__header--value").toggleClass("d-none");
      // // jq(".ui-table__headerCell,.table__cell--value").toggleClass('d-none');
      // // jq(".table__cell--goalsForAgainstDiff").toggleClass('d-none');
      // jq(".table__headerCell--form").toggleClass("d-none");
      jq(".ui-table__header--totals").toggleClass('d-none');
      jq(".table__cell--total").toggleClass('d-none');
      jq(".table__cell--score").toggleClass('d-none');
      jq(".table__cell--points").toggleClass('d-none');
      // jq(".ui-table__header--score").toggleClass("d-none");
      // jq(".ui-table__header--totals").toggleClass("d-none");
      // jq(".table__cell--form").addc("d-none");
      jq(".table__headerCell--form").addClass("d-none");
      jq(".table__cell--form").addClass("d-none");
      jq(".tournament-table-tabs-and-content").removeClass(
        "tournamentTableMobileResolver--show"
      );
    } else {
      jq(".table__cell--value").removeClass("d-none");
      jq(".ui-table__header--value").removeClass('d-none');
      // jq('.table__cell--value').addClass('d-none');
      // jq(".table__cell--score").removeClass('d-none');
      jq(".table__cell--points").removeClass('d-none');
      jq(".ui-table__header--totals").removeClass('d-none');
      jq(".table__cell--total").removeClass('d-none');
      jq(".table__headerCell--form").removeClass("d-none");
      jq(".table__cell--form").removeClass("d-none");
      jq(".tournament-table-tabs-and-content").addClass(
        "tournamentTableMobileResolver--show"
      );
    }
    
  });
});
