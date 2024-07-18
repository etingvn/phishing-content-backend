/*!
   JW Player version 8.4.1
   Copyright (c) 2018, JW Player, All Rights Reserved 
   This source code and its use and distribution is subject to the terms 
   and conditions of the applicable license agreement. 
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.4.1/notice.txt
*/
window.jwplayer = function (e) {
    function t(t) {
        for (var n, i, o = t[0], u = t[1], a = 0, s = []; a < o.length; a++) i = o[a], r[i] && s.push(r[i][0]), r[i] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (c && c(t); s.length;) s.shift()()
    }
    var n = {},
        r = {
            16: 0
        };

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.e = function (e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var o = new Promise(function (t, i) {
                    n = r[e] = [t, i]
                });
                t.push(n[2] = o);
                var u = document.getElementsByTagName("head")[0],
                    a = document.createElement("script");
                a.charset = "utf-8", a.timeout = 35, i.nc && a.setAttribute("nonce", i.nc), a.src = i.p + "" + ({
                    0: "provider.html5",
                    1: "jwplayer.controls",
                    2: "polyfills.intersection-observer",
                    3: "jwplayer.core",
                    4: "jwplayer.core.controls",
                    5: "jwplayer.core.controls.polyfills",
                    6: "jwplayer.core.controls.html5",
                    7: "jwplayer.core.controls.polyfills.html5",
                    8: "provider.flash",
                    9: "provider.hlsjs",
                    10: "provider.shaka",
                    11: "polyfills.webvtt",
                    12: "jwplayer.vr",
                    13: "provider.airplay",
                    14: "provider.cast",
                    15: "vttparser"
                } [e] || e) + ".js";
                var c = setTimeout(function () {
                    s({
                        type: "timeout",
                        target: a
                    })
                }, 35e3);

                function s(t) {
                    a.onerror = a.onload = null, clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src,
                                u = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + o + ")");
                            u.type = i, u.request = o, n[1](u)
                        }
                        r[e] = void 0
                    }
                }
                a.onerror = a.onload = s, u.appendChild(a)
            } return Promise.all(t)
    }, i.m = e, i.c = n, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i.oe = function (e) {
        throw console.error(e), e
    };
    var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [],
        u = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var a = 0; a < o.length; a++) t(o[a]);
    var c = u;
    return i(i.s = 57)
}([function (e, t, n) {
    "use strict";
    n.d(t, "i", function () {
        return C
    }), n.d(t, "A", function () {
        return x
    }), n.d(t, "F", function () {
        return S
    }), n.d(t, "l", function () {
        return L
    }), n.d(t, "k", function () {
        return M
    }), n.d(t, "a", function () {
        return _
    }), n.d(t, "b", function () {
        return I
    }), n.d(t, "G", function () {
        return B
    }), n.d(t, "n", function () {
        return Q
    }), n.d(t, "H", function () {
        return W
    }), n.d(t, "e", function () {
        return X
    }), n.d(t, "J", function () {
        return U
    }), n.d(t, "m", function () {
        return J
    }), n.d(t, "h", function () {
        return K
    }), n.d(t, "p", function () {
        return $
    }), n.d(t, "c", function () {
        return G
    }), n.d(t, "C", function () {
        return te
    }), n.d(t, "I", function () {
        return ie
    }), n.d(t, "q", function () {
        return ae
    }), n.d(t, "g", function () {
        return ce
    }), n.d(t, "j", function () {
        return se
    }), n.d(t, "D", function () {
        return le
    }), n.d(t, "w", function () {
        return de
    }), n.d(t, "t", function () {
        return me
    }), n.d(t, "v", function () {
        return ge
    }), n.d(t, "x", function () {
        return be
    }), n.d(t, "s", function () {
        return ye
    }), n.d(t, "u", function () {
        return je
    }), n.d(t, "r", function () {
        return we
    }), n.d(t, "y", function () {
        return Oe
    }), n.d(t, "o", function () {
        return ke
    }), n.d(t, "d", function () {
        return xe
    }), n.d(t, "E", function () {
        return Ee
    }), n.d(t, "B", function () {
        return Se
    }), n.d(t, "z", function () {
        return Pe
    });
    var r = n(21),
        i = {},
        o = Array.prototype,
        u = Object.prototype,
        a = Function.prototype,
        c = o.slice,
        s = o.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        d = o.map,
        p = o.reduce,
        v = o.forEach,
        h = o.filter,
        m = o.every,
        g = o.some,
        b = o.indexOf,
        y = Array.isArray,
        j = Object.keys,
        w = a.bind,
        O = window.isFinite,
        C = function (e, t, n) {
            var r = void 0,
                o = void 0;
            if (null == e) return e;
            if (v && e.forEach === v) e.forEach(t, n);
            else if (e.length === +e.length) {
                for (r = 0, o = e.length; r < o; r++)
                    if (t.call(n, e[r], r, e) === i) return
            } else {
                var u = oe(e);
                for (r = 0, o = u.length; r < o; r++)
                    if (t.call(n, e[u[r]], u[r], e) === i) return
            }
            return e
        },
        k = C,
        x = function (e, t, n) {
            var r = [];
            return null == e ? r : d && e.map === d ? e.map(t, n) : (C(e, function (e, i, o) {
                r.push(t.call(n, e, i, o))
            }), r)
        },
        E = x,
        S = function (e, t, n, r) {
            var i = arguments.length > 2;
            if (null == e && (e = []), p && e.reduce === p) return r && (t = G(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            if (C(e, function (e, o, u) {
                    i ? n = t.call(r, n, e, o, u) : (n = e, i = !0)
                }), !i) throw new TypeError("Reduce of empty array with no initial value");
            return n
        },
        T = S,
        P = S,
        L = function (e, t, n) {
            var r = void 0;
            return I(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return r = e, !0
            }), r
        },
        A = L,
        M = function (e, t, n) {
            var r = [];
            return null == e ? r : h && e.filter === h ? e.filter(t, n) : (C(e, function (e, i, o) {
                t.call(n, e, i, o) && r.push(e)
            }), r)
        },
        N = M,
        _ = function (e, t, n) {
            t || (t = ke);
            var r = !0;
            return null == e ? r : m && e.every === m ? e.every(t, n) : (C(e, function (e, o, u) {
                if (!(r = r && t.call(n, e, o, u))) return i
            }), !!r)
        },
        F = _,
        I = function (e, t, n) {
            t || (t = ke);
            var r = !1;
            return null == e ? r : g && e.some === g ? e.some(t, n) : (C(e, function (e, o, u) {
                if (r || (r = t.call(n, e, o, u))) return i
            }), !!r)
        },
        R = I,
        B = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : oe(e).length
        },
        D = function (e, t) {
            var n = void 0;
            return function () {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        },
        z = function (e) {
            return null == e ? ke : me(e) ? e : Ee(e)
        },
        q = function (e) {
            return function (t, n, r) {
                var i = {};
                return n = z(n), C(t, function (o, u) {
                    var a = n.call(r, o, u, t);
                    e(i, a, o)
                }), i
            }
        },
        Q = q(function (e, t, n) {
            Ce(e, t) ? e[t].push(n) : e[t] = [n]
        }),
        V = q(function (e, t, n) {
            e[t] = n
        }),
        W = function (e, t, n, r) {
            for (var i = (n = z(n)).call(r, t), o = 0, u = e.length; o < u;) {
                var a = o + u >>> 1;
                n.call(r, e[a]) < i ? o = a + 1 : u = a
            }
            return o
        },
        X = function (e, t) {
            return null != e && (e.length !== +e.length && (e = ue(e)), $(e, t) >= 0)
        },
        H = X,
        U = function (e, t) {
            return M(e, Se(t))
        },
        J = function (e, t) {
            return L(e, Se(t))
        },
        K = function (e) {
            var t = s.apply(o, c.call(arguments, 1));
            return M(e, function (e) {
                return !X(t, e)
            })
        },
        $ = function (e, t, n) {
            if (null == e) return -1;
            var r = 0,
                i = e.length;
            if (n) {
                if ("number" != typeof n) return e[r = W(e, t)] === t ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (b && e.indexOf === b) return e.indexOf(t, n);
            for (; r < i; r++)
                if (e[r] === t) return r;
            return -1
        },
        Y = function () {},
        G = function (e, t) {
            var n = void 0,
                r = void 0;
            if (w && e.bind === w) return w.apply(e, c.call(arguments, 1));
            if (!me(e)) throw new TypeError;
            return n = c.call(arguments, 2), r = function () {
                if (!(this instanceof r)) return e.apply(t, n.concat(c.call(arguments)));
                Y.prototype = e.prototype;
                var i = new Y;
                Y.prototype = null;
                var o = e.apply(i, n.concat(c.call(arguments)));
                return Object(o) === o ? o : i
            }
        },
        Z = function (e) {
            var t = c.call(arguments, 1);
            return function () {
                for (var n = 0, r = t.slice(), i = 0, o = r.length; i < o; i++) Ce(r[i], "partial") && (r[i] = arguments[n++]);
                for (; n < arguments.length;) r.push(arguments[n++]);
                return e.apply(this, r)
            }
        },
        ee = Z(D, 2),
        te = function (e, t) {
            var n = {};
            return t || (t = ke),
                function () {
                    var r = t.apply(this, arguments);
                    return Ce(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                }
        },
        ne = function (e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        },
        re = Z(ne, {
            partial: Z
        }, 1),
        ie = function (e, t, n) {
            var r = void 0,
                i = void 0,
                o = void 0,
                u = null,
                a = 0;
            n || (n = {});
            var c = function () {
                a = !1 === n.leading ? 0 : Te(), u = null, o = e.apply(r, i), r = i = null
            };
            return function () {
                a || !1 !== n.leading || (a = Te);
                var s = t - (Te - a);
                return r = this, i = arguments, s <= 0 ? (clearTimeout(u), u = null, a = Te, o = e.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)), o
            }
        },
        oe = function (e) {
            if (!de(e)) return [];
            if (j) return j(e);
            var t = [];
            for (var n in e) Ce(e, n) && t.push(n);
            return t
        },
        ue = function (e) {
            for (var t = oe(e), n = oe.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
            return r
        },
        ae = function (e) {
            for (var t = {}, n = oe(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t
        },
        ce = function (e) {
            return C(c.call(arguments, 1), function (t) {
                if (t)
                    for (var n in t) void 0 === e[n] && (e[n] = t[n])
            }), e
        },
        se = Object.assign || function (e) {
            return C(c.call(arguments, 1), function (t) {
                if (t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }), e
        },
        le = function (e) {
            var t = {},
                n = s.apply(o, c.call(arguments, 1));
            return C(n, function (n) {
                n in e && (t[n] = e[n])
            }), t
        },
        fe = y || function (e) {
            return "[object Array]" == l.call(e)
        },
        de = function (e) {
            return e === Object(e)
        },
        pe = [];
    C(["Function", "String", "Number", "Date", "RegExp"], function (e) {
        pe[e] = function (t) {
            return l.call(t) == "[object " + e + "]"
        }
    }), pe.Function = function (e) {
        return "function" == typeof e
    };
    var ve = pe.Date,
        he = pe.RegExp,
        me = pe.Function,
        ge = pe.Number,
        be = pe.String,
        ye = function (e) {
            return O(e) && !je(parseFloat(e))
        },
        je = function (e) {
            return ge(e) && e != +e
        },
        we = function (e) {
            return !0 === e || !1 === e || "[object Boolean]" == l.call(e)
        },
        Oe = function (e) {
            return void 0 === e
        },
        Ce = function (e, t) {
            return f.call(e, t)
        },
        ke = function (e) {
            return e
        },
        xe = function (e) {
            return function () {
                return e
            }
        },
        Ee = function (e) {
            return function (t) {
                return t[e]
            }
        },
        Se = function (e) {
            return function (t) {
                if (t === e) return !0;
                for (var n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        },
        Te = r.a,
        Pe = function (e) {
            return ge(e) && !je(e)
        };
    t.f = {
        after: function (e, t) {
            return function () {
                if (--e < 1) return t.apply(this, arguments)
            }
        },
        all: _,
        any: I,
        before: D,
        bind: G,
        clone: function (e) {
            return de(e) ? fe(e) ? e.slice() : se({}, e) : e
        },
        collect: E,
        compact: function (e) {
            return M(e, ke)
        },
        constant: xe,
        contains: X,
        defaults: ce,
        defer: re,
        delay: ne,
        detect: A,
        difference: K,
        each: C,
        every: F,
        extend: se,
        filter: M,
        find: L,
        findWhere: J,
        foldl: T,
        forEach: k,
        groupBy: Q,
        has: Ce,
        identity: ke,
        include: H,
        indexBy: V,
        indexOf: $,
        inject: P,
        invert: ae,
        isArray: fe,
        isBoolean: we,
        isDate: ve,
        isFinite: ye,
        isFunction: me,
        isNaN: je,
        isNull: function (e) {
            return null === e
        },
        isNumber: ge,
        isObject: de,
        isRegExp: he,
        isString: be,
        isUndefined: Oe,
        isValidNumber: Pe,
        keys: oe,
        last: function (e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : c.call(e, Math.max(e.length - t, 0))
        },
        map: x,
        matches: Se,
        max: function (e, t, n) {
            if (!t && fe(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var r = -1 / 0,
                i = -1 / 0;
            return C(e, function (e, o, u) {
                var a = t ? t.call(n, e, o, u) : e;
                a > i && (r = e, i = a)
            }), r
        },
        memoize: te,
        now: Te,
        omit: function (e) {
            var t = {},
                n = s.apply(o, c.call(arguments, 1));
            for (var r in e) X(n, r) || (t[r] = e[r]);
            return t
        },
        once: ee,
        partial: Z,
        pick: le,
        pluck: function (e, t) {
            return x(e, Ee(t))
        },
        property: Ee,
        propertyOf: function (e) {
            return null == e ? function () {} : function (t) {
                return e[t]
            }
        },
        reduce: S,
        reject: function (e, t, n) {
            return M(e, function (e, r, i) {
                return !t.call(n, e, r, i)
            }, n)
        },
        result: function (e, t) {
            if (null != e) {
                var n = e[t];
                return me(n) ? n.call(e) : n
            }
        },
        select: N,
        size: B,
        some: R,
        sortedIndex: W,
        throttle: ie,
        where: U,
        without: function (e) {
            return K(e, c.call(arguments, 1))
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "w", function () {
        return o
    }), n.d(t, "v", function () {
        return u
    }), n.d(t, "r", function () {
        return a
    }), n.d(t, "q", function () {
        return c
    }), n.d(t, "p", function () {
        return s
    }), n.d(t, "s", function () {
        return l
    }), n.d(t, "t", function () {
        return f
    }), n.d(t, "a", function () {
        return d
    }), n.d(t, "u", function () {
        return p
    }), n.d(t, "b", function () {
        return v
    }), n.d(t, "d", function () {
        return h
    }), n.d(t, "c", function () {
        return m
    }), n.d(t, "g", function () {
        return g
    }), n.d(t, "e", function () {
        return b
    }), n.d(t, "f", function () {
        return y
    }), n.d(t, "k", function () {
        return j
    }), n.d(t, "h", function () {
        return w
    }), n.d(t, "i", function () {
        return O
    }), n.d(t, "j", function () {
        return C
    }), n.d(t, "l", function () {
        return k
    }), n.d(t, "m", function () {
        return x
    }), n.d(t, "n", function () {
        return E
    }), n.d(t, "o", function () {
        return S
    }), n.d(t, "y", function () {
        return T
    }), n.d(t, "x", function () {
        return P
    });
    var r = n(0),
        i = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
    var o = 1e5,
        u = 100001,
        a = 100011,
        c = 100012,
        s = 100013,
        l = 101e3,
        f = 102e3,
        d = 202e3,
        p = 104e3,
        v = 203e3,
        h = 203640,
        m = 204e3,
        g = 210001,
        b = 21e4,
        y = 214e3,
        j = "cantPlayVideo",
        w = "badConnection",
        O = "cantLoadPlayer",
        C = "cantPlayInBrowser",
        k = "liveStreamDown",
        x = "protectedContent",
        E = "technicalError",
        S = function () {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.code = Object(r.z)(n) ? n : 0, this.key = t, this.sourceError = i
            }
            return i(e, null, [{
                key: "logMessage",
                value: function (e) {
                    var t = e % 1e3,
                        n = Math.floor((e - t) / 1e3),
                        r = e;
                    return t >= 400 && t < 600 && (r = n + "400-" + n + "599"), "JW Player Error " + e + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
                }
            }]), e
        }();

    function T(e, t, n) {
        return n instanceof S && n.code ? n : new S(e, t, n)
    }

    function P(e, t) {
        var n = T(E, t, e);
        return n.code = (e.code || 0) + t, n
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "h", function () {
        return o
    }), n.d(t, "d", function () {
        return u
    }), n.d(t, "i", function () {
        return a
    }), n.d(t, "a", function () {
        return c
    }), n.d(t, "b", function () {
        return s
    }), n.d(t, "f", function () {
        return l
    }), n.d(t, "c", function () {
        return f
    }), n.d(t, "e", function () {
        return d
    }), n.d(t, "g", function () {
        return p
    });
    var r = n(0),
        i = window.parseFloat;

    function o(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function u(e, t, n) {
        for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
        return e
    }

    function a(e, t) {
        for (var n = e.attributes, r = 0; r < n.length; r++)
            if (n[r].name && n[r].name.toLowerCase() === t.toLowerCase()) return n[r].value.toString();
        return ""
    }

    function c(e) {
        if (!e || "rtmp" === e.substr(0, 4)) return "";
        var t = /[(,]format=(m3u8|mpd)-/i.exec(e);
        return t ? t[1] : (e = e.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : void 0
    }

    function s(e) {
        var t = (e / 60 | 0) % 60,
            n = e % 60;
        return u(e / 3600 | 0, 2) + ":" + u(t, 2) + ":" + u(n.toFixed(3), 6)
    }

    function l(e, t) {
        if (!e) return 0;
        if (Object(r.z)(e)) return e;
        var n = e.replace(",", "."),
            o = n.slice(-1),
            u = n.split(":"),
            a = u.length,
            c = 0;
        if ("s" === o) c = i(n);
        else if ("m" === o) c = 60 * i(n);
        else if ("h" === o) c = 3600 * i(n);
        else if (a > 1) {
            var s = a - 1;
            4 === a && (t && (c = i(u[s]) / t), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
        } else c = i(n);
        return Object(r.z)(c) ? c : 0
    }

    function f(e, t, n) {
        if (Object(r.x)(e) && "%" === e.slice(-1)) {
            var o = i(e);
            return t && Object(r.z)(t) && Object(r.z)(o) ? t * o / 100 : null
        }
        return l(e, n)
    }

    function d(e, t) {
        return e.map(function (e) {
            return t + e
        })
    }

    function p(e, t) {
        return e.map(function (e) {
            return e + t
        })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "Ia", function () {
        return r
    }), n.d(t, "La", function () {
        return i
    }), n.d(t, "Ja", function () {
        return o
    }), n.d(t, "Na", function () {
        return u
    }), n.d(t, "Oa", function () {
        return a
    }), n.d(t, "Ka", function () {
        return c
    }), n.d(t, "Ma", function () {
        return s
    }), n.d(t, "Pa", function () {
        return l
    }), n.d(t, "s", function () {
        return f
    }), n.d(t, "u", function () {
        return d
    }), n.d(t, "t", function () {
        return p
    }), n.d(t, "n", function () {
        return v
    }), n.d(t, "q", function () {
        return h
    }), n.d(t, "Qa", function () {
        return m
    }), n.d(t, "r", function () {
        return g
    }), n.d(t, "X", function () {
        return b
    }), n.d(t, "U", function () {
        return y
    }), n.d(t, "v", function () {
        return j
    }), n.d(t, "W", function () {
        return w
    }), n.d(t, "w", function () {
        return O
    }), n.d(t, "a", function () {
        return C
    }), n.d(t, "b", function () {
        return k
    }), n.d(t, "c", function () {
        return x
    }), n.d(t, "d", function () {
        return E
    }), n.d(t, "e", function () {
        return S
    }), n.d(t, "h", function () {
        return T
    }), n.d(t, "E", function () {
        return P
    }), n.d(t, "Fa", function () {
        return L
    }), n.d(t, "O", function () {
        return A
    }), n.d(t, "B", function () {
        return M
    }), n.d(t, "A", function () {
        return N
    }), n.d(t, "D", function () {
        return _
    }), n.d(t, "p", function () {
        return F
    }), n.d(t, "Aa", function () {
        return I
    }), n.d(t, "m", function () {
        return R
    }), n.d(t, "F", function () {
        return B
    }), n.d(t, "G", function () {
        return D
    }), n.d(t, "L", function () {
        return z
    }), n.d(t, "M", function () {
        return q
    }), n.d(t, "P", function () {
        return Q
    }), n.d(t, "Ha", function () {
        return V
    }), n.d(t, "Z", function () {
        return W
    }), n.d(t, "C", function () {
        return X
    }), n.d(t, "Q", function () {
        return H
    }), n.d(t, "N", function () {
        return U
    }), n.d(t, "R", function () {
        return J
    }), n.d(t, "T", function () {
        return K
    }), n.d(t, "K", function () {
        return $
    }), n.d(t, "J", function () {
        return Y
    }), n.d(t, "H", function () {
        return G
    }), n.d(t, "I", function () {
        return Z
    }), n.d(t, "S", function () {
        return ee
    }), n.d(t, "o", function () {
        return te
    }), n.d(t, "x", function () {
        return ne
    }), n.d(t, "Ga", function () {
        return re
    }), n.d(t, "Ba", function () {
        return ie
    }), n.d(t, "Ca", function () {
        return oe
    }), n.d(t, "f", function () {
        return ue
    }), n.d(t, "g", function () {
        return ae
    }), n.d(t, "Y", function () {
        return ce
    }), n.d(t, "z", function () {
        return se
    }), n.d(t, "l", function () {
        return le
    }), n.d(t, "k", function () {
        return fe
    }), n.d(t, "Da", function () {
        return de
    }), n.d(t, "Ea", function () {
        return pe
    }), n.d(t, "Ra", function () {
        return ve
    }), n.d(t, "y", function () {
        return he
    }), n.d(t, "j", function () {
        return me
    }), n.d(t, "V", function () {
        return ge
    }), n.d(t, "i", function () {
        return be
    });
    var r = "buffering",
        i = "idle",
        o = "complete",
        u = "paused",
        a = "playing",
        c = "error",
        s = "loading",
        l = "stalled",
        f = "drag",
        d = "dragStart",
        p = "dragEnd",
        v = "click",
        h = "doubleClick",
        m = "tap",
        g = "doubleTap",
        b = "over",
        y = "move",
        j = "enter",
        w = "out",
        O = c,
        C = "adClick",
        k = "adPause",
        x = "adPlay",
        E = "adSkipped",
        S = "adTime",
        T = "autostartNotAllowed",
        P = o,
        L = "ready",
        A = "seek",
        M = "beforePlay",
        N = "beforeComplete",
        _ = "bufferFull",
        F = "displayClick",
        I = "playlistComplete",
        R = "cast",
        B = "mediaError",
        D = "firstFrame",
        z = "playAttempt",
        q = "playAttemptFailed",
        Q = "seeked",
        V = "setupError",
        W = "state",
        X = "bufferChange",
        H = "time",
        U = "ratechange",
        J = "mediaType",
        K = "volume",
        $ = "mute",
        Y = "meta",
        G = "levels",
        Z = "levelsChanged",
        ee = "visualQuality",
        te = "controls",
        ne = "fullscreen",
        re = "resize",
        ie = "playlistItem",
        oe = "playlist",
        ue = "audioTracks",
        ae = "audioTrackChanged",
        ce = "playbackRateChanged",
        se = "logoClick",
        le = "captionsList",
        fe = "captionsChanged",
        de = "providerChanged",
        pe = "providerFirstFrame",
        ve = "userAction",
        he = "instreamClick",
        me = "breakpoint",
        ge = "fullscreenchange",
        be = "bandwidthEstimate"
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return i
    }), n.d(t, "d", function () {
        return o
    }), n.d(t, "a", function () {
        return u
    }), n.d(t, "c", function () {
        return a
    });
    var r = n(2);

    function i(e) {
        var t = "";
        return e && (e.localName ? t = e.localName : e.baseName && (t = e.baseName)), t
    }

    function o(e) {
        var t = "";
        return e && (e.textContent ? t = Object(r.h)(e.textContent) : e.text && (t = Object(r.h)(e.text))), t
    }

    function u(e, t) {
        return e.childNodes[t]
    }

    function a(e) {
        return e.childNodes ? e.childNodes.length : 0
    }
}, function (e, t, n) {
    "use strict";
    var r = setTimeout;

    function i() {}

    function o(e) {
        if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(e, this)
    }

    function u(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, o._immediateFn(function () {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void c(t.promise, e)
                }
                a(t.promise, r)
            } else(1 === e._state ? a : c)(t.promise, e._value)
        })) : e._deferreds.push(t)
    }

    function a(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof o) return e._state = 3, e._value = t, void s(e);
                if ("function" == typeof n) return void l((r = n, i = t, function () {
                    r.apply(i, arguments)
                }), e)
            }
            e._state = 1, e._value = t, s(e)
        } catch (t) {
            c(e, t)
        }
        var r, i
    }

    function c(e, t) {
        e._state = 2, e._value = t, s(e)
    }

    function s(e) {
        2 === e._state && 0 === e._deferreds.length && o._immediateFn(function () {
            e._handled || o._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) u(e, e._deferreds[t]);
        e._deferreds = null
    }

    function l(e, t) {
        var n = !1;
        try {
            e(function (e) {
                n || (n = !0, a(t, e))
            }, function (e) {
                n || (n = !0, c(t, e))
            })
        } catch (e) {
            if (n) return;
            n = !0, c(t, e)
        }
    }
    o.prototype.catch = function (e) {
        return this.then(null, e)
    }, o.prototype.then = function (e, t) {
        var n = new this.constructor(i);
        return u(this, new function (e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }(e, t, n)), n
    }, o.prototype.finally = function (e) {
        var t = this.constructor;
        return this.then(function (n) {
            return t.resolve(e()).then(function () {
                return n
            })
        }, function (n) {
            return t.resolve(e()).then(function () {
                return t.reject(n)
            })
        })
    }, o.all = function (e) {
        return new o(function (t, n) {
            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var a = u.then;
                        if ("function" == typeof a) return void a.call(u, function (t) {
                            o(e, t)
                        }, n)
                    }
                    r[e] = u, 0 == --i && t(r)
                } catch (e) {
                    n(e)
                }
            }
            for (var u = 0; u < r.length; u++) o(u, r[u])
        })
    }, o.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === o ? e : new o(function (t) {
            t(e)
        })
    }, o.reject = function (e) {
        return new o(function (t, n) {
            n(e)
        })
    }, o.race = function (e) {
        return new o(function (t, n) {
            for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
        })
    }, o._immediateFn = "function" == typeof setImmediate && function (e) {
        setImmediate(e)
    } || function (e) {
        r(e, 0)
    }, o._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var f = o;
    n.d(t, "b", function () {
        return p
    });
    var d = window.Promise || (window.Promise = f),
        p = d.resolve();
    t.a = d
}, function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
        return o
    }), n.d(t, "d", function () {
        return u
    }), n.d(t, "b", function () {
        return a
    }), n.d(t, "e", function () {
        return c
    }), n.d(t, "f", function () {
        return s
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = [].slice;

    function o(e, t, n) {
        if (!f(this, "on", e, [t, n]) || !t) return this;
        var r = this._events || (this._events = {});
        return (r[e] || (r[e] = [])).push({
            callback: t,
            context: n
        }), this
    }

    function u(e, t, n) {
        if (!f(this, "once", e, [t, n]) || !t) return this;
        var r = 0,
            i = this,
            o = function n() {
                r++ || (i.off(e, n), t.apply(this, arguments))
            };
        return o._callback = t, this.on(e, o, n)
    }

    function a(e, t, n) {
        if (!this._events || !f(this, "off", e, [t, n])) return this;
        if (!e && !t && !n) return delete this._events, this;
        for (var r = e ? [e] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
            e = r[i];
            var u = this._events[e];
            if (u) {
                var a = this._events[e] = [];
                if (t || n)
                    for (var c = 0, s = u.length; c < s; c++) {
                        var l = u[c];
                        (t && t !== l.callback && t !== l.callback._callback || n && n !== l.context) && a.push(l)
                    }
                a.length || delete this._events[e]
            }
        }
        return this
    }

    function c(e) {
        if (!this._events) return this;
        var t = i.call(arguments, 1);
        if (!f(this, "trigger", e, t)) return this;
        var n = this._events[e],
            r = this._events.all;
        return n && d(n, t, this), r && d(r, arguments, this), this
    }

    function s(e) {
        if (!this._events) return this;
        var t = i.call(arguments, 1);
        if (!f(this, "trigger", e, t)) return this;
        var n = this._events[e],
            r = this._events.all;
        return n && d(n, t, this, e), r && d(r, arguments, this, e), this
    }
    var l = /\s+/;

    function f(e, t, n, i) {
        if (!n) return !0;
        if ("object" === (void 0 === n ? "undefined" : r(n))) {
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && e[t].apply(e, [o, n[o]].concat(i));
            return !1
        }
        if (l.test(n)) {
            for (var u = n.split(l), a = 0, c = u.length; a < c; a++) e[t].apply(e, [u[a]].concat(i));
            return !1
        }
        return !0
    }

    function d(e, t, n, r) {
        for (var i = -1, o = e.length; ++i < o;) {
            var u = e[i];
            if (r) try {
                u.callback.apply(u.context || n, t)
            } catch (e) {
                console.log('Error in "' + r + '" event handler:', e)
            } else u.callback.apply(u.context || n, t)
        }
    }
    t.a = {
        on: o,
        once: u,
        off: a,
        trigger: c
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(8);

    function i(e, t) {
        if (e && e.length > t) return e[t]
    }
    var o = n(0);
    n.d(t, "Browser", function () {
        return a
    }), n.d(t, "OS", function () {
        return c
    }), n.d(t, "Features", function () {
        return s
    });
    var u = navigator.userAgent;
    var a = {},
        c = {},
        s = {};
    Object.defineProperties(a, {
        androidNative: {
            get: Object(o.C)(r.c),
            enumerable: !0
        },
        chrome: {
            get: Object(o.C)(r.d),
            enumerable: !0
        },
        edge: {
            get: Object(o.C)(r.e),
            enumerable: !0
        },
        facebook: {
            get: Object(o.C)(r.g),
            enumerable: !0
        },
        firefox: {
            get: Object(o.C)(r.f),
            enumerable: !0
        },
        ie: {
            get: Object(o.C)(r.i),
            enumerable: !0
        },
        msie: {
            get: Object(o.C)(r.n),
            enumerable: !0
        },
        safari: {
            get: Object(o.C)(r.q),
            enumerable: !0
        },
        version: {
            get: Object(o.C)(function (e, t) {
                var n = void 0,
                    r = void 0,
                    i = void 0,
                    o = void 0;
                return e.chrome ? n = -1 !== t.indexOf("Chrome") ? t.substring(t.indexOf("Chrome") + 7) : t.substring(t.indexOf("CriOS") + 6) : e.safari ? n = t.substring(t.indexOf("Version") + 8) : e.firefox ? n = t.substring(t.indexOf("Firefox") + 8) : e.edge ? n = t.substring(t.indexOf("Edge") + 5) : e.ie && (-1 !== t.indexOf("rv:") ? n = t.substring(t.indexOf("rv:") + 3) : -1 !== t.indexOf("MSIE") && (n = t.substring(t.indexOf("MSIE") + 5))), n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
                    version: n,
                    major: r,
                    minor: i
                }
            }.bind(void 0, a, u)),
            enumerable: !0
        }
    }), Object.defineProperties(c, {
        android: {
            get: Object(o.C)(r.b),
            enumerable: !0
        },
        iOS: {
            get: Object(o.C)(r.j),
            enumerable: !0
        },
        mobile: {
            get: Object(o.C)(r.o),
            enumerable: !0
        },
        mac: {
            get: Object(o.C)(r.p),
            enumerable: !0
        },
        iPad: {
            get: Object(o.C)(r.k),
            enumerable: !0
        },
        iPhone: {
            get: Object(o.C)(r.l),
            enumerable: !0
        },
        windows: {
            get: Object(o.C)(function () {
                return u.indexOf("Windows") > -1
            }),
            enumerable: !0
        },
        version: {
            get: Object(o.C)(function (e, t) {
                var n = void 0,
                    r = void 0,
                    o = void 0;
                if (e.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(t), 1)) {
                case "6.1":
                    n = "7.0";
                    break;
                case "6.2":
                    n = "8.0";
                    break;
                case "6.3":
                    n = "8.1"
                } else e.android ? n = i(/Android ([._\d]+)/.exec(t), 1) : e.iOS ? n = i(/OS ([._\d]+)/.exec(t), 1) : e.mac && (n = i(/Mac OS X (10[._\d]+)/.exec(t), 1));
                if (n) {
                    r = parseInt(n, 10);
                    var u = n.split(/[._]/);
                    u && (o = parseInt(u[1], 10))
                }
                return {
                    version: n,
                    major: r,
                    minor: o
                }
            }.bind(void 0, c, u)),
            enumerable: !0
        }
    }), Object.defineProperties(s, {
        flash: {
            get: Object(o.C)(r.h),
            enumerable: !0
        },
        flashVersion: {
            get: Object(o.C)(r.a),
            enumerable: !0
        },
        iframe: {
            get: Object(o.C)(r.m),
            enumerable: !0
        },
        passiveEvents: {
            get: Object(o.C)(function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
                } catch (e) {}
                return e
            }),
            enumerable: !0
        },
        backgroundLoading: {
            get: Object(o.C)(function () {
                return !(c.iOS || a.safari)
            }),
            enumerable: !0
        }
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "h", function () {
        return u
    }), n.d(t, "f", function () {
        return a
    }), n.d(t, "l", function () {
        return s
    }), n.d(t, "k", function () {
        return l
    }), n.d(t, "p", function () {
        return f
    }), n.d(t, "g", function () {
        return d
    }), n.d(t, "e", function () {
        return p
    }), n.d(t, "n", function () {
        return v
    }), n.d(t, "d", function () {
        return h
    }), n.d(t, "i", function () {
        return m
    }), n.d(t, "q", function () {
        return g
    }), n.d(t, "j", function () {
        return b
    }), n.d(t, "c", function () {
        return y
    }), n.d(t, "b", function () {
        return j
    }), n.d(t, "o", function () {
        return w
    }), n.d(t, "m", function () {
        return O
    }), n.d(t, "a", function () {
        return C
    });
    var r = navigator.userAgent;

    function i(e) {
        return null !== r.match(e)
    }

    function o(e) {
        return function () {
            return i(e)
        }
    }

    function u() {
        var e = C();
        return !!(e && e >= 18)
    }
    var a = o(/gecko\//i),
        c = o(/trident\/.+rv:\s*11/i),
        s = o(/iP(hone|od)/i),
        l = o(/iPad/i),
        f = o(/Macintosh/i),
        d = o(/FBAV/i);

    function p() {
        return i(/\sEdge\/\d+/i)
    }

    function v() {
        return i(/msie/i)
    }

    function h() {
        return i(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !p() && !i(/UCBrowser/i)
    }

    function m() {
        return p() || c() || v()
    }

    function g() {
        return i(/safari/i) && !i(/(?:Chrome|CriOS|chromium|android|phantom)/i)
    }

    function b() {
        return i(/iP(hone|ad|od)/i)
    }

    function y() {
        return !(i(/chrome\/[123456789]/i) && !i(/chrome\/18/i) && !a()) && j()
    }

    function j() {
        return i(/Android/i) && !i(/Windows Phone/i)
    }

    function w() {
        return b() || j() || i(/Windows Phone/i)
    }

    function O() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }

    function C() {
        if (j()) return 0;
        var e = navigator.plugins,
            t = void 0;
        if (e && (t = e["Shockwave Flash"]) && t.description) return parseFloat(t.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) {
            try {
                if (t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(t.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
            } catch (e) {
                return 0
            }
            return t
        }
        return 0
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "h", function () {
        return o
    }), n.d(t, "e", function () {
        return u
    }), n.d(t, "o", function () {
        return a
    }), n.d(t, "d", function () {
        return l
    }), n.d(t, "a", function () {
        return f
    }), n.d(t, "l", function () {
        return d
    }), n.d(t, "m", function () {
        return p
    }), n.d(t, "p", function () {
        return v
    }), n.d(t, "n", function () {
        return h
    }), n.d(t, "g", function () {
        return m
    }), n.d(t, "b", function () {
        return g
    }), n.d(t, "f", function () {
        return b
    }), n.d(t, "c", function () {
        return y
    }), n.d(t, "j", function () {
        return j
    }), n.d(t, "i", function () {
        return w
    }), n.d(t, "k", function () {
        return O
    });
    var r = n(2),
        i = n(0);

    function o(e, t) {
        return e.classList.contains(t)
    }

    function u(e) {
        var t = document.createElement("div");
        return t.innerHTML = e, t.firstChild
    }

    function a(e) {
        return e + (e.toString().indexOf("%") > 0 ? "" : "px")
    }

    function c(e) {
        return Object(i.x)(e.className) ? e.className.split(" ") : []
    }

    function s(e, t) {
        t = Object(r.h)(t), e.className !== t && (e.className = t)
    }

    function l(e) {
        return e.classList ? e.classList : c(e)
    }

    function f(e, t) {
        var n = c(e);
        (Array.isArray(t) ? t : t.split(" ")).forEach(function (e) {
            Object(i.e)(n, e) || n.push(e)
        }), s(e, n.join(" "))
    }

    function d(e, t) {
        var n = c(e),
            r = Array.isArray(t) ? t : t.split(" ");
        s(e, Object(i.h)(n, r).join(" "))
    }

    function p(e, t, n) {
        var r = e.className || "";
        t.test(r) ? r = r.replace(t, n) : n && (r += " " + n), s(e, r)
    }

    function v(e, t, n) {
        var r = o(e, t);
        (n = Object(i.r)(n) ? n : !r) !== r && (n ? f(e, t) : d(e, t))
    }

    function h(e, t, n) {
        e.setAttribute(t, n)
    }

    function m(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function g(e) {
        var t = document.createElement("link");
        t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
    }

    function b(e) {
        e && m(e)
    }

    function y(e) {
        var t = {
            left: 0,
            right: 0,
            width: 0,
            height: 0,
            top: 0,
            bottom: 0
        };
        if (!e || !document.body.contains(e)) return t;
        var n = e.getBoundingClientRect(),
            r = window.pageYOffset,
            i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (t.left = n.left + i, t.right = n.right + i, t.top = n.top + r, t.bottom = n.bottom + r, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
    }

    function j(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function w(e) {
        return e.nextElementSibling
    }

    function O(e) {
        return e.previousElementSibling
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return f
    }), n.d(t, "c", function () {
        return d
    }), n.d(t, "b", function () {
        return p
    });
    var r = n(24),
        i = n(27),
        o = n(15),
        u = n(14),
        a = n(35),
        c = n(5),
        s = n(1),
        l = null,
        f = {};

    function d(e) {
        return l || (l = function (e) {
            var t = e.get("controls"),
                l = v(),
                d = function (e, t) {
                    var n = e.get("playlist");
                    if (Array.isArray(n) && n.length)
                        for (var u = Object(i.c)(Object(r.a)(n[0]), e), a = 0; a < u.length; a++)
                            for (var c = u[a], s = e.getProviders(), l = 0; l < o.a.length; l++) {
                                var f = o.a[l];
                                if (s.providerSupports(f, c)) return f.name === t
                            }
                    return !1
                }(e, "html5");
            if (t && l && d) return h = n.e(7).then(function (e) {
                n(33);
                var t = n(17).default;
                return a.a.controls = n(18).default, Object(u.a)(n(118).default), t
            }.bind(null, n)).catch(p(s.s + 105)), f.html5 = h, h;
            var h;
            if (t && d) return function () {
                var e = n.e(6).then(function (e) {
                    var t = n(17).default;
                    return a.a.controls = n(18).default, Object(u.a)(n(118).default), t
                }.bind(null, n)).catch(p(s.s + 104));
                return f.html5 = e, e
            }();
            if (t && l) return n.e(5).then(function (e) {
                n(33);
                var t = n(17).default;
                return a.a.controls = n(18).default, t
            }.bind(null, n)).catch(p(s.s + 103));
            if (t) return n.e(4).then(function (e) {
                var t = n(17).default;
                return a.a.controls = n(18).default, t
            }.bind(null, n)).catch(p(s.s + 102));
            return (v() ? n.e(2).then(function (e) {
                return n(33)
            }.bind(null, n)).catch(p(s.s + 120)) : c.b).then(function () {
                return n.e(3).then(function (e) {
                    return n(17).default
                }.bind(null, n)).catch(p(s.s + 101))
            })
        }(e)), l
    }

    function p(e, t) {
        return function () {
            throw new s.o(s.i, e, t)
        }
    }

    function v() {
        var e = window.IntersectionObserverEntry;
        return !(e && "IntersectionObserver" in window && "intersectionRatio" in e.prototype)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "exists", function () {
        return i
    }), n.d(t, "isHTTPS", function () {
        return o
    }), n.d(t, "isRtmp", function () {
        return u
    }), n.d(t, "isYouTube", function () {
        return a
    }), n.d(t, "typeOf", function () {
        return c
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

    function i(e) {
        switch (void 0 === e ? "undefined" : r(e)) {
        case "string":
            return e.length > 0;
        case "object":
            return null !== e;
        case "undefined":
            return !1;
        default:
            return !0
        }
    }

    function o() {
        return "https:" === window.location.protocol
    }

    function u(e, t) {
        return 0 === e.indexOf("rtmp:") || "rtmp" === t
    }

    function a(e, t) {
        return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
    }

    function c(e) {
        if (null === e) return "null";
        var t = void 0 === e ? "undefined" : r(e);
        return "object" === t && Array.isArray(e) ? "array" : t
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getAbsolutePath", function () {
        return o
    }), n.d(t, "isAbsolutePath", function () {
        return u
    }), n.d(t, "parseXML", function () {
        return c
    }), n.d(t, "serialize", function () {
        return s
    }), n.d(t, "parseDimension", function () {
        return l
    }), n.d(t, "timeFormat", function () {
        return f
    });
    var r = n(11),
        i = n(0);

    function o(e, t) {
        if (Object(r.exists)(t) || (t = document.location.href), Object(r.exists)(e)) {
            if (u(e)) return e;
            var n = t.substring(0, t.indexOf("://") + 3),
                i = t.substring(n.length, t.indexOf("/", n.length + 1)),
                o = void 0;
            if (0 === e.indexOf("/")) o = e.split("/");
            else {
                var a = t.split("?")[0];
                o = (a = a.substring(n.length + i.length + 1, a.lastIndexOf("/"))).split("/").concat(e.split("/"))
            }
            for (var c = [], s = 0; s < o.length; s++) o[s] && Object(r.exists)(o[s]) && "." !== o[s] && (".." === o[s] ? c.pop() : c.push(o[s]));
            return n + i + "/" + c.join("/")
        }
    }

    function u(e) {
        return /^(?:(?:https?|file):)?\/\//.test(e)
    }

    function a(e) {
        return Object(i.b)(e, function (e) {
            return "parsererror" === e.nodeName
        })
    }

    function c(e) {
        var t = null;
        try {
            (a((t = (new window.DOMParser).parseFromString(e, "text/xml")).childNodes) || t.childNodes && a(t.childNodes[0].childNodes)) && (t = null)
        } catch (e) {}
        return t
    }

    function s(e) {
        if (void 0 === e) return null;
        if ("string" == typeof e && e.length < 6) {
            var t = e.toLowerCase();
            if ("true" === t) return !0;
            if ("false" === t) return !1;
            if (!Object(i.u)(Number(e)) && !Object(i.u)(parseFloat(e))) return Number(e)
        }
        return e
    }

    function l(e) {
        return "string" == typeof e ? "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10) : e
    }

    function f(e, t) {
        if (e <= 0 && !t || Object(i.u)(parseInt(e))) return "00:00";
        var n = e < 0 ? "-" : "";
        e = Math.abs(e);
        var r = Math.floor(e / 3600),
            o = Math.floor((e - 3600 * r) / 60),
            u = Math.floor(e % 60);
        return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
    }
}, function (e, t, n) {
    "use strict";
    t.a = []
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    });
    var r = n(32),
        i = n(15),
        o = n(52),
        u = n(0);

    function a(e) {
        var t = e.getName().name;
        if (!r.a[t]) {
            if (!Object(u.l)(i.a, Object(u.B)({
                    name: t
                }))) {
                if (!Object(u.t)(e.supports)) throw new Error("Tried to register a provider with an invalid object");
                i.a.unshift({
                    name: t,
                    supports: e.supports
                })
            }
            Object(u.g)(e.prototype, o.a), r.a[t] = e
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(28),
        i = n(7),
        o = n(22),
        u = n(0),
        a = n(11),
        c = n(34),
        s = Object(u.l)(r.a, Object(u.B)({
            name: "html5"
        })),
        l = s.supports;
    s.supports = function (e, t) {
        var n = l.apply(this, arguments);
        if (n && e.drm && "hls" === e.type) {
            var r = Object(o.a)(t)("drm");
            if (r && e.drm.fairplay) {
                var i = window.WebKitMediaKeys;
                return i && i.isTypeSupported && i.isTypeSupported("com.apple.fps.1_0", "video/mp4")
            }
            return r
        }
        return n
    }, r.a.push({
        name: "shaka",
        supports: function (e) {
            if (e.drm && !Object(c.a)(e.drm)) return !1;
            var t = window.MediaSource;
            if (!window.HTMLVideoElement || !t) return !1;
            var n = !0;
            return e.mediaTypes && (n = Object(u.a)(e.mediaTypes, function (e) {
                return t.isTypeSupported(e)
            })), n && ("dash" === e.type || "mpd" === e.type || (e.file || "").indexOf("mpd-time-csf") > -1)
        }
    }), r.a.splice(0, 0, {
        name: "hlsjs",
        supports: function (e) {
            if (e.drm) return !1;
            var t = e.file.indexOf(".m3u8") > -1,
                n = "hls" === e.type || "m3u8" === e.type;
            if (!t && !n) return !1;
            var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major,
                o = i.OS.android && !1 === e.hlsjsdefault,
                u = i.Browser.safari && !!e.safarihlsjs;
            return !!window.MediaSource && !!window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"') && (r || u) && !o
        }
    }), r.a.push({
        name: "flash",
        supports: function (e) {
            if (!i.Features.flash || e.drm) return !1;
            var t = e.type;
            return "hls" === t || "m3u8" === t || !Object(a.isRtmp)(e.file, t) && ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(t) > -1
        }
    }), t.a = r.a
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getScriptPath", function () {
        return i
    }), n.d(t, "repo", function () {
        return o
    }), n.d(t, "versionCheck", function () {
        return u
    }), n.d(t, "loadFrom", function () {
        return a
    });
    var r = n(26),
        i = function (e) {
            for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                var r = t[n].src;
                if (r) {
                    var i = r.lastIndexOf("/" + e);
                    if (i >= 0) return r.substr(0, i + 1)
                }
            }
            return ""
        },
        o = function () {
            var e = document.location.origin+'/jwplayer/8.4.1/';
            return "" + ("file:" === window.location.protocol ? "https:" : "") + e
        },
        u = function (e) {
            var t = ("0" + e).split(/\W/),
                n = r.a.split(/\W/),
                i = parseFloat(t[0]),
                o = parseFloat(n[0]);
            return !(i > o) && !(i === o && parseFloat("0" + t[1]) > parseFloat(n[1]))
        },
        a = function () {
            return o()
        }
}, , , function (e, t, n) {
    "use strict";
    t.a = {
        debug: !1
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return a
    }), n.d(t, "b", function () {
        return c
    }), n.d(t, "d", function () {
        return s
    }), n.d(t, "e", function () {
        return d
    }), n.d(t, "c", function () {
        return v
    });
    var r = n(2),
        i = n(38),
        o = n.n(i),
        u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        a = o.a.clear;

    function c(e, t, n, r) {
        n = n || "all-players";
        var i = "";
        if ("object" === (void 0 === t ? "undefined" : u(t))) {
            var a = document.createElement("div");
            s(a, t);
            var c = a.style.cssText;
            r && c && (c = c.replace(/;/g, " !important;")), i = "{" + c + "}"
        } else "string" == typeof t && (i = t);
        "" !== i && "{}" !== i ? o.a.style([
            [e, e + i]
        ], n) : o.a.clear(n, e)
    }

    function s(e, t) {
        if (void 0 !== e && null !== e) {
            void 0 === e.length && (e = [e]);
            var n = void 0,
                r = {};
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = f(n, t[n]));
            for (var i = 0; i < e.length; i++) {
                var o = e[i],
                    u = void 0;
                if (void 0 !== o && null !== o)
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
            }
        }
    }

    function l(e) {
        e = e.split("-");
        for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
        return e.join("")
    }

    function f(e, t) {
        return "" === t || void 0 === t || null === t ? "" : "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && t.indexOf("url") < 0 ? "url(" + t + ")" : t : 0 === t || "z-index" === e || "opacity" === e ? "" + t : /color/i.test(e) ? "#" + Object(r.d)(t.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(t) + "px"
    }

    function d(e, t) {
        s(e, {
            transform: t,
            webkitTransform: t,
            msTransform: t,
            mozTransform: t,
            oTransform: t
        })
    }
    var p = void 0;

    function v(e, t) {
        var n = "rgb",
            r = void 0 !== t && 100 !== t;
        if (r && (n += "a"), !p) {
            var i = document.createElement("canvas");
            i.height = 1, i.width = 1, p = i.getContext("2d")
        }
        e ? isNaN(parseInt(e, 16)) || (e = "#" + e) : e = "#000000", p.clearRect(0, 0, 1, 1), p.fillStyle = e, p.fillRect(0, 0, 1, 1);
        var o = p.getImageData(0, 0, 1, 1).data;
        return n += "(" + o[0] + ", " + o[1] + ", " + o[2], r && (n += ", " + t / 100), n + ")"
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return r
    });
    var r = Date.now || function () {
        return (new Date).getTime()
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return v
    });
    var r = "free",
        i = "starter",
        o = "business",
        u = "premium",
        a = "enterprise",
        c = "platinum",
        s = "ads",
        l = "unlimited",
        f = "trial",
        d = "invalid",
        p = "expired";

    function v(e) {
        var t = {
            setup: [r, i, o, u, a, s, l, f, c],
            drm: [a, s, l, f],
            ads: [s, l, f, c, a],
            jwpsrv: [r, i, o, u, a, s, f, c, d, p],
            discovery: [s, a, f, l]
        };
        return function (n) {
            return t[n] && t[n].indexOf(e) > -1
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(5),
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
    var u = function () {
            this.load = function (e, t, n, u) {
                return n && "object" === (void 0 === n ? "undefined" : o(n)) ? i.a.all(Object.keys(n).filter(function (e) {
                    return e
                }).map(function (i) {
                    var o = t.addPlugin(i, !0),
                        a = n[i];
                    return o.load().then(function () {
                        u.attributes._destroyed || function (e, t, n) {
                            var i = e.name,
                                o = document.createElement("div");
                            o.id = n.id + "_" + i, o.className = "jw-plugin jw-reset";
                            var u = Object(r.j)({}, t),
                                a = e.getNewInstance(n, u, o);
                            n.addPlugin(i, a)
                        }(o, a, e)
                    }).catch(function (e) {
                        return e instanceof Error ? e : new Error("Error in " + i + ' "' + e + '"')
                    })
                })) : i.b
            }
        },
        a = n(29),
        c = n(12),
        s = n(2),
        l = 0,
        f = 1,
        d = function (e) {
            if ("string" == typeof e) {
                var t = (e = e.split("?")[0]).indexOf("://");
                if (t > 0) return l;
                var n = e.indexOf("/"),
                    r = Object(s.a)(e);
                return !(t < 0 && n < 0) || r && isNaN(r) ? f : 2
            }
        };
    var p = function (e) {
        this.url = e
    };
    Object(r.j)(p.prototype, {
        load: function () {
            if (2 === d(this.url)) return i.b;
            var e = new a.a(function (e) {
                switch (d(e)) {
                case l:
                    return e;
                case f:
                    return Object(c.getAbsolutePath)(e, window.location.href)
                }
            }(this.url));
            return this.loader = e, e.load()
        },
        registerPlugin: function (e, t, n) {
            this.name = e, this.target = t, this.js = n
        },
        getNewInstance: function (e, t, n) {
            var r = new(0, this.js)(e, t, n);
            return r.addToPlayer = function () {
                var t = e.getContainer().querySelector(".jw-overlays");
                t && (n.left = t.style.left, n.top = t.style.top, t.appendChild(n), r.displayArea = t)
            }, r.resizeHandler = function () {
                var e = r.displayArea;
                e && r.resize(e.clientWidth, e.clientHeight)
            }, r
        }
    });
    var v = p,
        h = n(30),
        m = {},
        g = function () {
            this.addPlugin = function (e, t) {
                var n = function (e) {
                        return e.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
                    }(e),
                    r = m[n];
                return r ? t && r.url !== e && Object(h.a)('JW Plugin "' + n + '" already loaded from "' + r.url + '". Ignoring "' + e + '."') : (r = new v(e), m[n] = r), r
            }, this.getPlugins = function () {
                return m
            }
        };
    n.d(t, "b", function () {
        return y
    }), n.d(t, "a", function () {
        return j
    });
    var b = new g,
        y = function (e, t, n) {
            var r = b.addPlugin(e);
            r.js || r.registerPlugin(e, t, n)
        };

    function j(e, t) {
        var n = e.get("plugins");
        return window.jwplayerPluginJsonp = y, (e.pluginLoader = e.pluginLoader || new u).load(t, b, n, e).then(function (t) {
            e.attributes._destroyed || (t && t.forEach(function (e) {
                e instanceof Error && Object(h.a)(e.message)
            }), delete window.jwplayerPluginJsonp)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(31),
        o = function (e) {
            if (e && e.file) return Object(r.j)({}, {
                kind: "captions",
                default: !1
            }, e)
        },
        u = Array.isArray;
    t.a = function (e) {
        u((e = e || {}).tracks) || delete e.tracks;
        var t = Object(r.j)({}, {
            sources: [],
            tracks: [],
            minDvrWindow: 120,
            dvrSeekLimit: 25
        }, e);
        t.dvrSeekLimit < 5 && (t.dvrSeekLimit = 5), t.sources !== Object(t.sources) || u(t.sources) || (t.sources = [Object(i.a)(t.sources)]), u(t.sources) && 0 !== t.sources.length || (e.levels ? t.sources = e.levels : t.sources = [Object(i.a)(e)]);
        for (var n = 0; n < t.sources.length; n++) {
            var a = t.sources[n];
            if (a) {
                var c = a.default;
                a.default = !!c && "true" === c.toString(), t.sources[n].label || (t.sources[n].label = n.toString()), t.sources[n] = Object(i.a)(t.sources[n])
            }
        }
        return t.sources = t.sources.filter(function (e) {
            return !!e
        }), u(t.tracks) || (t.tracks = []), u(t.captions) && (t.tracks = t.tracks.concat(t.captions), delete t.captions), t.tracks = t.tracks.map(o).filter(function (e) {
            return !!e
        }), t
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(21),
        o = window.performance || {
            timing: {}
        },
        u = o.timing.navigationStart || Object(i.a)();

    function a() {
        return u + o.now()
    }
    "now" in o || (o.now = function () {
        return Object(i.a)() - u
    });
    t.a = function () {
        var e = {},
            t = {},
            n = {},
            i = {};
        return {
            start: function (t) {
                e[t] = a(), n[t] = n[t] + 1 || 1
            },
            end: function (n) {
                if (e[n]) {
                    var r = a() - e[n];
                    delete e[n], t[n] = t[n] + r || r
                }
            },
            dump: function () {
                var o = Object(r.j)({}, t);
                for (var u in e)
                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                        var c = a() - e[u];
                        o[u] = o[u] + c || c
                    } return {
                    counts: Object(r.j)({}, n),
                    sums: o,
                    events: Object(r.j)({}, i)
                }
            },
            tick: function (e) {
                i[e] = a()
            },
            clear: function (e) {
                delete i[e]
            },
            between: function (e, t) {
                return i[t] && i[e] ? i[t] - i[e] : null
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return r
    });
    var r = "8.4.1+commercial_v8-4-1.272.commercial.8191c23.hlsjs..jwplayer.8d5edc3.dai.ac94f63.freewheel.b827d95.googima.622bba8.vast.fb6bb49.analytics.e3a97de.gapro.f664e4e.related.2ce7dd3"
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = {
            none: !0,
            metadata: !0,
            auto: !0
        };

    function o(e, t) {
        return i[e] ? e : i[t] ? t : "metadata"
    }
    var u = n(24),
        a = n(31),
        c = n(39),
        s = n(1);
    n.d(t, "b", function () {
        return l
    }), n.d(t, "d", function () {
        return f
    }), n.d(t, "c", function () {
        return d
    });

    function l(e, t, n) {
        var i = [],
            u = t.getProviders(),
            a = t.get("preload"),
            c = Object(r.j)({}, n);
        return delete c.playlist, e.forEach(function (e) {
            (e = Object(r.j)({}, e)).preload = o(e.preload, a), e.allSources = p(e, t), e.sources = v(e.allSources, u), e.sources.length && (e.file = e.sources[0].file, n && (e.feedData = c), i.push(e))
        }), i
    }

    function f(e) {
        if (!Array.isArray(e) || 0 === e.length) throw new s.o(s.k, 630)
    }
    var d = function (e, t) {
        return v(p(e, t), t.getProviders())
    };

    function p(e, t) {
        var n = t.attributes,
            r = e.sources,
            i = e.allSources,
            u = e.preload,
            c = e.drm,
            s = h(e.withCredentials, n.withCredentials);
        return (i || r).map(function (e) {
            if (e !== Object(e)) return null;
            m(e, n, "androidhls"), m(e, n, "hlsjsdefault"), m(e, n, "safarihlsjs"), e.preload = o(e.preload, u);
            var t = e.drm || c || n.drm;
            t && (e.drm = t);
            var r = h(e.withCredentials, s);
            return void 0 !== r && (e.withCredentials = r), Object(a.a)(e)
        }).filter(function (e) {
            return !!e
        })
    }

    function v(e, t) {
        t && t.choose || (t = new c.a);
        var n = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    i = t.choose(r),
                    o = i.providerToCheck;
                if (o) return {
                    type: r.type,
                    provider: o
                }
            }
            return null
        }(e, t);
        if (!n) return [];
        var r = n.provider,
            i = n.type;
        return e.filter(function (e) {
            return e.type === i && t.providerSupports(r, e)
        })
    }

    function h(e, t) {
        return void 0 === e ? t : e
    }

    function m(e, t, n) {
        n in t && (e[n] = t[n])
    }
    t.a = function (e) {
        return (Array.isArray(e) ? e : [e]).map(u.a)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return c
    });
    var r = n(56),
        i = n(11),
        o = n(36),
        u = {
            aac: "audio/mp4",
            mp4: "video/mp4",
            f4v: "video/mp4",
            m4v: "video/mp4",
            mov: "video/mp4",
            mp3: "audio/mpeg",
            mpeg: "audio/mpeg",
            ogv: "video/ogg",
            ogg: "video/ogg",
            oga: "video/ogg",
            vorbis: "video/ogg",
            webm: "video/webm",
            f4a: "video/aac",
            m3u8: "application/vnd.apple.mpegurl",
            m3u: "application/vnd.apple.mpegurl",
            hls: "application/vnd.apple.mpegurl"
        },
        a = [{
            name: "html5",
            supports: c
        }];

    function c(e) {
        if (!1 === Object(r.a)(e)) return !1;
        if (!o.a.canPlayType) return !1;
        var t = e.file,
            n = e.type;
        if (Object(i.isRtmp)(t, n)) return !1;
        var a = e.mimeType || u[n];
        return !!a && !!o.a.canPlayType(a)
    }
    t.a = a
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(6),
        o = n(3),
        u = n(5),
        a = {},
        c = 15e3,
        s = 2,
        l = 3;

    function f(e) {
        var t = document.createElement("link");
        return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
    }

    function d(e) {
        var t = document.createElement("script");
        return t.type = "text/javascript", t.charset = "utf-8", t.async = !0, t.timeout = c, t.src = e, t
    }
    var p = function (e, t) {
        var n = this,
            r = 0;

        function i(e) {
            r = s, n.trigger(o.w, e).off()
        }

        function p(e) {
            r = l, n.trigger(o.Ja, e).off()
        }
        this.getStatus = function () {
            return r
        }, this.load = function () {
            var n = a[e];
            return 0 !== r ? n : (n && n.then(p).catch(i), r = 1, n = new u.a(function (n, r) {
                var o = (t ? f : d)(e),
                    u = function () {
                        o.onerror = o.onload = null, clearTimeout(s)
                    },
                    a = function (e) {
                        u(), i(e), r(e)
                    },
                    s = setTimeout(function () {
                        a(new Error("Network timeout " + e))
                    }, c);
                o.onerror = function () {
                    a(new Error("Failed to load " + e))
                }, o.onload = function (e) {
                    u(), p(e), n(e)
                };
                var l = document.getElementsByTagName("head")[0] || document.documentElement;
                l.insertBefore(o, l.firstChild)
            }), a[e] = n, n)
        }
    };
    Object(r.j)(p.prototype, i.a), t.a = p
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return r
    });
    var r = "function" == typeof console.log ? console.log.bind(console) : function () {}
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(11),
        o = n(2);
    t.a = function (e) {
        if (e && e.file) {
            var t = Object(r.j)({}, {
                default: !1
            }, e);
            t.file = Object(o.h)("" + t.file);
            var n = /^[^/]+\/(?:x-)?([^/]+)$/;
            if (n.test(t.type) && (t.mimeType = t.type, t.type = t.type.replace(n, "$1")), Object(i.isYouTube)(t.file) ? t.type = "youtube" : Object(i.isRtmp)(t.file) ? t.type = "rtmp" : t.type || (t.type = Object(o.a)(t.file)), t.type) {
                switch (t.type) {
                case "m3u8":
                case "vnd.apple.mpegurl":
                    t.type = "hls";
                    break;
                case "dash+xml":
                    t.type = "dash";
                    break;
                case "m4a":
                    t.type = "aac";
                    break;
                case "smil":
                    t.type = "rtmp"
                }
                return Object.keys(t).forEach(function (e) {
                    "" === t[e] && delete t[e]
                }), t
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    t.a = {}
}, , function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return s
    }), n.d(t, "d", function () {
        return l
    }), n.d(t, "c", function () {
        return f
    }), n.d(t, "a", function () {
        return d
    });
    var r = n(22),
        i = n(5),
        o = [{
            configName: "clearkey",
            keyName: "org.w3.clearkey"
        }, {
            configName: "widevine",
            keyName: "com.widevine.alpha"
        }, {
            configName: "playready",
            keyName: "com.microsoft.playready"
        }],
        u = [],
        a = {},
        c = void 0;

    function s(e) {
        return e.some(function (e) {
            return !!e.drm || e.sources.some(function (e) {
                return !!e.drm
            })
        })
    }

    function l(e) {
        return c || ((navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(r.a)(e)("drm") ? (o.forEach(function (e) {
            var t, n, r = (t = e.keyName, n = [{
                initDataTypes: ["cenc"],
                videoCapabilities: [{
                    contentType: 'video/mp4;codecs="avc1.4d401e"'
                }],
                audioCapabilities: [{
                    contentType: 'audio/mp4;codecs="mp4a.40.2"'
                }]
            }], navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(t, n) : new i.a(function (e, n) {
                var r = void 0;
                try {
                    r = new window.MSMediaKeys(t)
                } catch (e) {
                    return void n(e)
                }
                e(r)
            })).then(function () {
                a[e.configName] = !0
            }).catch(function () {
                a[e.configName] = !1
            });
            u.push(r)
        }), c = i.a.all(u)) : i.b)
    }

    function f(e) {
        return a[e]
    }

    function d(e) {
        if (c) return Object.keys(e).some(function (e) {
            return f(e)
        })
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return o
    }), n.d(t, "b", function () {
        return u
    });
    var r = n(10),
        i = null,
        o = {};

    function u() {
        return i || (i = n.e(1).then(function (e) {
            var t = n(18).default;
            return o.controls = t, t
        }.bind(null, n)).catch(function () {
            i = null, Object(r.b)(130)()
        })), i
    }
}, function (e, t, n) {
    "use strict";
    var r = document.createElement("video");
    t.a = r
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return m
    });
    var r = n(0),
        i = n(12),
        o = n(1),
        u = 1,
        a = 2,
        c = 3,
        s = 4,
        l = 5,
        f = 6,
        d = 601,
        p = 602,
        v = 611,
        h = function () {};

    function m(e, t, n, d) {
        e === Object(e) && (e = (d = e).url);
        var j = void 0,
            w = Object(r.j)({
                xhr: null,
                url: e,
                withCredentials: !1,
                retryWithoutCredentials: !1,
                timeout: 6e4,
                timeoutId: -1,
                oncomplete: t || h,
                onerror: n || h,
                mimeType: d && !d.responseType ? "text/xml" : "",
                requireValidXML: !1,
                responseType: d && d.plainText ? "text" : "",
                useDomParser: !1,
                requestFilter: null
            }, d),
            O = function (e, t) {
                return function (e, n) {
                    var i = e.currentTarget || t.xhr;
                    if (clearTimeout(t.timeoutId), t.retryWithoutCredentials && t.xhr.withCredentials) {
                        g(i);
                        var u = Object(r.j)({}, t, {
                            xhr: null,
                            withCredentials: !1,
                            retryWithoutCredentials: !1
                        });
                        m(u)
                    } else !n && i.status >= 400 && i.status < 600 && (n = i.status), b(t, n ? o.k : o.n, n || f, e)
                }
            }(0, w);
        if ("XMLHttpRequest" in window) {
            if (j = w.xhr = w.xhr || new window.XMLHttpRequest, "function" == typeof w.requestFilter) {
                var C = void 0;
                try {
                    C = w.requestFilter({
                        url: e,
                        xhr: j
                    })
                } catch (e) {
                    return O(e, l), j
                }
                C && "open" in C && "send" in C && (j = w.xhr = C)
            }
            j.onreadystatechange = function (e) {
                return function (t) {
                    var n = t.currentTarget || e.xhr;
                    if (4 === n.readyState) {
                        if (clearTimeout(e.timeoutId), n.status >= 400) return void b(e, o.k, n.status < 600 ? n.status : f);
                        if (200 === n.status) return function (e) {
                            return function (t) {
                                var n = t.currentTarget || e.xhr;
                                if (clearTimeout(e.timeoutId), e.responseType) {
                                    if ("json" === e.responseType) return function (e, t) {
                                        if (!e.response || "string" == typeof e.response && '"' !== e.responseText.substr(1)) try {
                                            e = Object(r.j)({}, e, {
                                                response: JSON.parse(e.responseText)
                                            })
                                        } catch (e) {
                                            return void b(t, o.k, v, e)
                                        }
                                        return t.oncomplete(e)
                                    }(n, e)
                                } else {
                                    var u = n.responseXML,
                                        a = void 0;
                                    if (u) try {
                                        a = u.firstChild
                                    } catch (e) {}
                                    if (u && a) return y(n, u, e);
                                    if (e.useDomParser && n.responseText && !u && (u = Object(i.parseXML)(n.responseText)) && u.firstChild) return y(n, u, e);
                                    if (e.requireValidXML) return void b(e, o.k, p)
                                }
                                e.oncomplete(n)
                            }
                        }(e)(t)
                    }
                }
            }(w), j.onerror = O, "overrideMimeType" in j ? w.mimeType && j.overrideMimeType(w.mimeType) : w.useDomParser = !0;
            try {
                e = e.replace(/#.*$/, ""), j.open("GET", e, !0)
            } catch (e) {
                return O(e, c), j
            }
            if (w.responseType) try {
                j.responseType = w.responseType
            } catch (e) {}
            w.timeout && (w.timeoutId = setTimeout(function () {
                g(j), b(w, o.n, u)
            }, w.timeout), j.onabort = function () {
                clearTimeout(w.timeoutId)
            });
            try {
                w.withCredentials && "withCredentials" in j && (j.withCredentials = !0), j.send()
            } catch (e) {
                O(e, s)
            }
            return j
        }
        b(w, o.n, a)
    }

    function g(e) {
        e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
    }

    function b(e, t, n, r) {
        e.onerror(t, e.url, e.xhr, new o.o(t, n, r))
    }

    function y(e, t, n) {
        var i = t.documentElement;
        if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return e.responseXML || (e = Object(r.j)({}, e, {
            responseXML: t
        })), n.oncomplete(e);
        b(n, o.k, d)
    }
}, function (e, t) {
    var n, r, i = {},
        o = {},
        u = (n = function () {
            return document.head || document.getElementsByTagName("head")[0]
        }, function () {
            return void 0 === r && (r = n.apply(this, arguments)), r
        });

    function a(e) {
        var t = document.createElement("style");
        return t.type = "text/css", t.setAttribute("data-jwplayer-id", e),
            function (e) {
                u().appendChild(e)
            }(t), t
    }

    function c(e, t) {
        var n, r, i, u = o[e];
        u || (u = o[e] = {
            element: a(e),
            counter: 0
        });
        var c = u.counter++;
        return n = u.element, i = function () {
                f(n, c, "")
            }, (r = function (e) {
                f(n, c, e)
            })(t.css),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media) return;
                    r((t = e).css)
                } else i()
            }
    }
    e.exports = {
        style: function (e, t) {
            ! function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n],
                        o = (i[e] || {})[r.id];
                    if (o) {
                        for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
                        for (; u < r.parts.length; u++) o.parts.push(c(e, r.parts[u]))
                    } else {
                        for (var a = [], u = 0; u < r.parts.length; u++) a.push(c(e, r.parts[u]));
                        i[e] = i[e] || {}, i[e][r.id] = {
                            id: r.id,
                            parts: a
                        }
                    }
                }
            }(t, function (e) {
                for (var t = [], n = {}, r = 0; r < e.length; r++) {
                    var i = e[r],
                        o = i[0],
                        u = i[1],
                        a = i[2],
                        c = {
                            css: u,
                            media: a
                        };
                    n[o] ? n[o].parts.push(c) : t.push(n[o] = {
                        id: o,
                        parts: [c]
                    })
                }
                return t
            }(e))
        },
        clear: function (e, t) {
            var n = i[e];
            if (!n) return;
            if (t) {
                var r = n[t];
                if (r)
                    for (var o = 0; o < r.parts.length; o += 1) r.parts[o]();
                return
            }
            for (var u = Object.keys(n), a = 0; a < u.length; a += 1)
                for (var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
            delete i[e]
        }
    };
    var s, l = (s = [], function (e, t) {
        return s[e] = t, s.filter(Boolean).join("\n")
    });

    function f(e, t, n) {
        if (e.styleSheet) e.styleSheet.cssText = l(t, n);
        else {
            var r = document.createTextNode(n),
                i = e.childNodes[t];
            i ? e.replaceChild(r, i) : e.appendChild(r)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(15),
        o = n(14),
        u = n(32),
        a = n(10),
        c = n(5);

    function s(e) {
        this.config = e || {}
    }
    var l = {
        html5: function () {
            return n.e(0).then(function (e) {
                var t = n(118).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(152))
        }
    };
    Object(r.j)(s.prototype, {
        load: function (e) {
            var t = l[e],
                n = function () {
                    return c.a.reject(new Error("Failed to load media"))
                };
            return t ? t().then(function () {
                var t = u.a[e];
                return t || n()
            }) : n()
        },
        providerSupports: function (e, t) {
            return e.supports(t)
        },
        choose: function (e) {
            if (e === Object(e))
                for (var t = i.a.length, n = 0; n < t; n++) {
                    var r = i.a[n];
                    if (this.providerSupports(r, e)) return {
                        priority: t - n - 1,
                        name: r.name,
                        type: e.type,
                        providerToCheck: r,
                        provider: u.a[r.name]
                    }
                }
            return {}
        }
    });
    var f = s,
        d = void 0;
    Object(r.j)(l, {
        shaka: function () {
            return n.e(10).then(function (e) {
                var t = n(128).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(154))
        },
        hlsjs: function () {
            return n.e(9).then(function (e) {
                var t = n(129).default;
                return t.setEdition && t.setEdition(d), Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(153))
        },
        flash: function () {
            return n.e(8).then(function (e) {
                var t = n(126).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(151))
        }
    }), f.prototype.providerSupports = function (e, t) {
        return d = this.config.edition, e.supports(t, d)
    };
    t.a = f
}, function (e, t, n) {
    "use strict";
    var r = function (e, t, n, r) {
            var i = r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : "";
            return '<div id="' + e + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + e + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + e + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + e + '"] .jw-error-text{color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset">' + (t || "") + '<span class="jw-break jw-reset"></span>' + i + "</div></div></div></div>"
        },
        i = n(9),
        o = n(20);

    function u(e, t) {
        var n = t.message,
            u = t.code,
            a = r(e.get("id"), n, e.get("localization").errors.errorCode, u),
            c = e.get("width"),
            s = e.get("height"),
            l = Object(i.e)(a);
        return Object(o.d)(l, {
            width: c.toString().indexOf("%") > 0 ? c : c + "px",
            height: s.toString().indexOf("%") > 0 ? s : s + "px"
        }), l
    }
    n.d(t, "a", function () {
        return u
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return r
    });
    var r = window.atob
}, function (e, t, n) {
    "use strict";
    var r = n(4),
        i = n(2);

    function o(e) {
        for (var t = [], n = 0; n < Object(r.c)(e); n++) {
            var i = e.childNodes[n];
            "jwplayer" === i.prefix && "mediatypes" === Object(r.b)(i).toLowerCase() && t.push(Object(r.d)(i))
        }
        return t
    }
    var u = function e(t, n) {
            var u, a, c = [];
            for (var s = 0; s < Object(r.c)(t); s++) {
                var l = t.childNodes[s];
                if ("media" === l.prefix) {
                    if (!Object(r.b)(l)) continue;
                    switch (Object(r.b)(l).toLowerCase()) {
                    case "content":
                        if (Object(i.i)(l, "duration") && (n.duration = Object(i.f)(Object(i.i)(l, "duration"))), Object(i.i)(l, "url")) {
                            n.sources || (n.sources = []);
                            var f = {
                                    file: Object(i.i)(l, "url"),
                                    type: Object(i.i)(l, "type"),
                                    width: Object(i.i)(l, "width"),
                                    label: Object(i.i)(l, "label")
                                },
                                d = o(l);
                            d.length && (f.mediaTypes = d), n.sources.push(f)
                        }
                        Object(r.c)(l) > 0 && (n = e(l, n));
                        break;
                    case "title":
                        n.title = Object(r.d)(l);
                        break;
                    case "description":
                        n.description = Object(r.d)(l);
                        break;
                    case "guid":
                        n.mediaid = Object(r.d)(l);
                        break;
                    case "thumbnail":
                        n.image || (n.image = Object(i.i)(l, "url"));
                        break;
                    case "group":
                        e(l, n);
                        break;
                    case "subtitle":
                        var p = {};
                        p.file = Object(i.i)(l, "url"), p.kind = "captions", Object(i.i)(l, "lang").length > 0 && (p.label = (u = Object(i.i)(l, "lang"), (a = {
                            zh: "Chinese",
                            nl: "Dutch",
                            en: "English",
                            fr: "French",
                            de: "German",
                            it: "Italian",
                            ja: "Japanese",
                            pt: "Portuguese",
                            ru: "Russian",
                            es: "Spanish"
                        })[u] ? a[u] : u)), c.push(p)
                    }
                }
            }
            n.hasOwnProperty("tracks") || (n.tracks = []);
            for (var v = 0; v < c.length; v++) n.tracks.push(c[v]);
            return n
        },
        a = n(12),
        c = function (e, t) {
            for (var n = "default", o = [], u = [], c = 0; c < e.childNodes.length; c++) {
                var s = e.childNodes[c];
                if ("jwplayer" === s.prefix) {
                    var l = Object(r.b)(s);
                    "source" === l ? (delete t.sources, o.push({
                        file: Object(i.i)(s, "file"),
                        default: Object(i.i)(s, n),
                        label: Object(i.i)(s, "label"),
                        type: Object(i.i)(s, "type")
                    })) : "track" === l ? (delete t.tracks, u.push({
                        file: Object(i.i)(s, "file"),
                        default: Object(i.i)(s, n),
                        kind: Object(i.i)(s, "kind"),
                        label: Object(i.i)(s, "label")
                    })) : (t[l] = Object(a.serialize)(Object(r.d)(s)), "file" === l && t.sources && delete t.sources)
                }
                t.file || (t.file = t.link)
            }
            if (o.length) {
                t.sources = [];
                for (var f = 0; f < o.length; f++) o[f].file.length > 0 && (o[f][n] = "true" === o[f][n], o[f].label.length || delete o[f].label, t.sources.push(o[f]))
            }
            if (u.length) {
                t.tracks = [];
                for (var d = 0; d < u.length; d++) u[d].file.length > 0 && (u[d][n] = "true" === u[d][n], u[d].kind = u[d].kind.length ? u[d].kind : "captions", u[d].label.length || delete u[d].label, t.tracks.push(u[d]))
            }
            return t
        },
        s = n(24);

    function l(e) {
        var t = [];
        t.feedData = {};
        for (var n = 0; n < Object(r.c)(e); n++) {
            var i = Object(r.a)(e, n);
            if ("channel" === Object(r.b)(i).toLowerCase())
                for (var o = 0; o < Object(r.c)(i); o++) {
                    var u = Object(r.a)(i, o),
                        a = Object(r.b)(u).toLowerCase();
                    "item" === a ? t.push(f(u)) : a && (t.feedData[a] = Object(r.d)(u))
                }
        }
        return t
    }

    function f(e) {
        for (var t = {}, n = 0; n < e.childNodes.length; n++) {
            var o = e.childNodes[n],
                a = Object(r.b)(o);
            if (a) switch (a.toLowerCase()) {
            case "enclosure":
                t.file = Object(i.i)(o, "url");
                break;
            case "title":
                t.title = Object(r.d)(o);
                break;
            case "guid":
                t.mediaid = Object(r.d)(o);
                break;
            case "pubdate":
                t.date = Object(r.d)(o);
                break;
            case "description":
                t.description = Object(r.d)(o);
                break;
            case "link":
                t.link = Object(r.d)(o);
                break;
            case "category":
                t.tags ? t.tags += Object(r.d)(o) : t.tags = Object(r.d)(o)
            }
        }
        return new s.a(c(e, u(e, t)))
    }
    n.d(t, "a", function () {
        return l
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return o
    });
    var r = n(41);

    function i(e) {
        for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
        return t
    }

    function o(e, t) {
        if (e = String(e), t = String(t), 0 === e.length) return "";
        for (var n, o = i(Object(r.a)(e)), u = i((n = t, unescape(encodeURIComponent(n))).slice(0, 16)), a = o.length, c = o[a - 1], s = o[0], l = void 0, f = void 0, d = 2654435769 * Math.floor(6 + 52 / a); d;) {
            f = d >>> 2 & 3;
            for (var p = a - 1; p >= 0; p--) l = ((c = o[p > 0 ? p - 1 : a - 1]) >>> 5 ^ s << 2) + (s >>> 3 ^ c << 4) ^ (d ^ s) + (u[3 & p ^ f] ^ c), s = o[p] -= l;
            d -= 2654435769
        }
        return function (e) {
            try {
                return decodeURIComponent(escape(e))
            } catch (t) {
                return e
            }
        }(function (e) {
            for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
            return t.join("")
        }(o).replace(/\0+$/, ""))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(43),
        i = n(22),
        o = n(41),
        u = "invalid";
    t.a = function (e) {
        var t = void 0,
            n = void 0,
            a = void 0;
        this.edition = function () {
                return a && a.getTime() < (new Date).getTime() ? "expired" : t
            }, this.token = function () {
                return n
            }, this.expiration = function () {
                return a
            },
            function (e, c) {
                try {
                    var s = Object(r.a)(e, Object(o.a)(c)).split("/");
                    "pro" === (t = s[0]) && (t = "premium");
                    var l = Object(i.a)(t);
                    if (s.length > 2 && l("setup")) {
                        n = s[1];
                        var f = parseInt(s[2]);
                        f > 0 && (a = new Date).setTime(f)
                    } else t = u
                } catch (e) {
                    t = u
                }
            }(e || "", "NDh2aU1Cb0NHRG5hcDFRZQ==")
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return r
    }), n.d(t, "a", function () {
        return i
    });
    var r = {
            audioMode: !1,
            flashBlocked: !1,
            item: 0,
            itemMeta: {},
            playbackRate: 1,
            playRejected: !1,
            state: n(3).La,
            itemReady: !1
        },
        i = {
            position: 0,
            duration: 0,
            buffer: 0,
            currentTime: 0
        }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return i
    }), n.d(t, "a", function () {
        return o
    });
    var r = n(19);

    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (r.a.debug) return e.apply(t || this, n);
        try {
            return e.apply(t || this, n)
        } catch (t) {
            return new o(e.name, t)
        }
    }

    function o(e, t) {
        this.name = e, this.message = t.message || t.toString(), this.error = t
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
        return b
    });
    var r = n(0),
        i = n(7),
        o = n(3),
        u = n(6),
        a = n(21),
        c = window.TouchEvent,
        s = window.PointerEvent,
        l = "PointerEvent" in window && !i.OS.android,
        f = "ontouchstart" in window,
        d = !(l || f && i.OS.mobile),
        p = i.Browser.firefox && i.OS.mac;

    function v(e, t) {
        return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + t] : e["page" + t]
    }

    function h(e, t, n) {
        var r = void 0;
        return r = t instanceof MouseEvent || !t.touches && !t.changedTouches ? t : t.touches && t.touches.length ? t.touches[0] : t.changedTouches[0], {
            type: e,
            sourceEvent: t,
            target: t.target,
            currentTarget: n,
            pageX: r.pageX,
            pageY: r.pageY
        }
    }

    function m(e) {
        (e instanceof MouseEvent || e instanceof c) && (e.preventManipulation && e.preventManipulation(), e.preventDefault && e.preventDefault())
    }
    var g = function (e, t) {
        var n = e,
            r = !1,
            u = 0,
            c = 0,
            s = 0,
            f = 300,
            g = void 0,
            b = void 0,
            y = void 0,
            j = 500;
        t = t || {};
        var w = !!i.Features.passiveEvents && {
                passive: !t.preventScrolling
            },
            O = function (e) {
                return A(e)
            };

        function C(e) {
            "touch" !== e.pointerType && N(o.X, e)
        }

        function k(e) {
            "touch" !== e.pointerType && N(o.U, e)
        }

        function x(t) {
            if ("touch" !== t.pointerType && "x" in t) {
                var n = t.x,
                    r = t.y,
                    i = document.elementFromPoint(n, r);
                e.contains(i) || N(o.W, t)
            }
        }

        function E(e) {
            N(o.W, e)
        }

        function S(e) {
            (function (e) {
                var t = e || window.event;
                return t instanceof KeyboardEvent && 13 === t.keyCode && (e.stopPropagation(), !0)
            })(e) && N(o.v, e)
        }

        function T(e, t, n) {
            e.removeEventListener(t, n), e.addEventListener(t, n)
        }

        function P(n) {
            g = n.target, u = v(n, "X"), c = v(n, "Y"),
                function (e) {
                    var t = e || window.event;
                    return e instanceof MouseEvent && ("which" in t ? 3 === t.which : "button" in t && 2 === t.button)
                }(n) || ("pointerdown" === n.type && n.isPrimary ? (t.preventScrolling && (b = n.pointerId, e.setPointerCapture(b)), T(e, "pointermove", L), T(e, "pointercancel", A), "mouse" === n.pointerType && "OBJECT" === g.nodeName ? T(document, "mouseup", O) : T(e, "pointerup", A)) : "mousedown" === n.type ? (T(document, "mousemove", L), p && "object" === n.target.nodeName.toLowerCase() ? T(e, "click", A) : T(document, "mouseup", O)) : "touchstart" === n.type && (y = setTimeout(function () {
                    g && (g.removeEventListener("touchmove", L), g.removeEventListener("touchcancel", A), g.removeEventListener("touchend", A), g = null)
                }, j), T(g, "touchmove", L), T(g, "touchcancel", A), T(g, "touchend", A)), t.preventScrolling && m(n))
        }

        function L(e) {
            clearTimeout(y);
            if (r) N(o.s, e);
            else {
                var n = v(e, "X"),
                    i = v(e, "Y"),
                    a = n - u,
                    s = i - c;
                a * a + s * s > 36 && (N(o.u, e), r = !0, N(o.s, e))
            }
            t.preventScrolling && m(e)
        }

        function A(n) {
            clearTimeout(y);
            var i = "pointerup" === n.type || "pointercancel" === n.type;
            i && t.preventScrolling && e.releasePointerCapture(b), e.removeEventListener("pointermove", L), e.removeEventListener("pointercancel", A), e.removeEventListener("pointerup", A), document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", O), g && (g.removeEventListener("touchmove", L), g.removeEventListener("touchcancel", A), g.removeEventListener("touchend", A)), r ? N(o.t, n) : t.directSelect && n.target !== e || -1 !== n.type.indexOf("cancel") || ("mouseup" === n.type || "click" === n.type || i && "mouse" === n.pointerType ? N(o.n, n) : (N(o.Qa, n), "touchend" === n.type && m(n))), g = null, r = !1
        }
        l ? (e.addEventListener("pointerdown", P, w), t.useHover && (e.addEventListener("pointerover", C), e.addEventListener("pointerout", x)), t.useMove && e.addEventListener("pointermove", k)) : (d && (e.addEventListener("mousedown", P, w), t.useHover && (e.addEventListener("mouseover", C), e.addEventListener("mouseout", E)), t.useMove && e.addEventListener("mousemove", k)), e.addEventListener("touchstart", P, w)), e.addEventListener("keydown", S), t.useFocus && (e.addEventListener("focus", C), e.addEventListener("blur", E));
        var M = this;

        function N(e, r) {
            var i = void 0;
            if (t.enableDoubleTap && (e === o.n || e === o.Qa))
                if (Object(a.a)() - s < f) {
                    var u = e === o.n ? o.q : o.r;
                    i = h(u, r, n), M.trigger(u, i), s = 0
                } else s = Object(a.a)();
            i = h(e, r, n), M.trigger(e, i)
        }
        return this.triggerEvent = N, this.destroy = function () {
            this.off(), e.removeEventListener("touchstart", P), e.removeEventListener("mousedown", P), e.removeEventListener("keydown", S), g && (g.removeEventListener("touchmove", L), g.removeEventListener("touchcancel", A), g.removeEventListener("touchend", A), g = null), l && (t.preventScrolling && e.releasePointerCapture(b), e.removeEventListener("pointerover", C), e.removeEventListener("pointerdown", P), e.removeEventListener("pointermove", L), e.removeEventListener("pointermove", k), e.removeEventListener("pointercancel", A), e.removeEventListener("pointerout", x), e.removeEventListener("pointerup", A)), e.removeEventListener("click", A), e.removeEventListener("mouseover", C), e.removeEventListener("mousemove", k), e.removeEventListener("mouseout", E), document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", O), t.useFocus && (e.removeEventListener("focus", C), e.removeEventListener("blur", E))
        }, this
    };

    function b(e) {
        return f && e instanceof c || l && e instanceof s && "touch" === e.pointerType ? "touch" : "mouse"
    }
    Object(r.j)(g.prototype, u.a), t.a = g
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return r
    });
    var r = function (e, t, n) {
        return Math.max(Math.min(e, n), t)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(6),
        i = {
            on: r.a.on,
            once: r.a.once,
            off: r.a.off,
            trigger: r.a.trigger,
            get: function (e) {
                return this.attributes = this.attributes || {}, this.attributes[e]
            },
            set: function (e, t) {
                if (this.attributes = this.attributes || {}, this.attributes[e] !== t) {
                    var n = this.attributes[e];
                    this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
                }
            },
            clone: function () {
                var e = {},
                    t = this.attributes;
                if (t)
                    for (var n in t) e[n] = t[n];
                return e
            },
            change: function (e, t, n) {
                this.on("change:" + e, t, n);
                var r = this.get(e);
                return t.call(n, this, r, r), this
            }
        };
    t.a = i
}, function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
        return r
    }), n.d(t, "b", function () {
        return i
    }), n.d(t, "a", function () {
        return o
    });
    var r = 4,
        i = 2,
        o = 1
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = [],
            i = {};

        function o() {
            for (; r.length > 0;) {
                var t = r.shift(),
                    n = t.command,
                    o = t.args;
                (i[n] || e[n]).apply(e, o)
            }
        }
        t.forEach(function (t) {
            var u = e[t];
            i[t] = u, e[t] = function () {
                var e = Array.prototype.slice.call(arguments, 0);
                n() ? r.push({
                    command: t,
                    args: e
                }) : (o(), u && u.apply(this, e))
            }
        }), Object.defineProperty(this, "queue", {
            enumerable: !0,
            get: function () {
                return r
            }
        }), this.flush = o, this.empty = function () {
            r.length = 0
        }, this.off = function () {
            t.forEach(function (t) {
                var n = i[t];
                n && (e[t] = n, delete i[t])
            })
        }, this.destroy = function () {
            this.off(), this.empty()
        }
    }
    n.d(t, "a", function () {
        return r
    })
}, function (e, t, n) {
    "use strict";
    var r = n(3),
        i = function () {},
        o = function () {
            return !1
        },
        u = {
            name: "default"
        },
        a = {
            supports: o,
            play: i,
            pause: i,
            preload: i,
            load: i,
            stop: i,
            volume: i,
            mute: i,
            seek: i,
            resize: i,
            remove: i,
            destroy: i,
            eventsOn_: i,
            eventsOff_: i,
            setVisibility: i,
            setFullscreen: i,
            getFullscreen: o,
            supportsFullscreen: o,
            getContainer: i,
            setContainer: i,
            getName: function () {
                return u
            },
            getQualityLevels: i,
            getCurrentQuality: i,
            setCurrentQuality: i,
            getAudioTracks: i,
            getCurrentAudioTrack: i,
            setCurrentAudioTrack: i,
            getSeekRange: function () {
                return {
                    start: 0,
                    end: this.getDuration()
                }
            },
            setPlaybackRate: i,
            getPlaybackRate: function () {
                return 1
            },
            getBandwidthEstimate: function () {
                return null
            },
            setControls: i,
            attachMedia: i,
            detachMedia: i,
            init: i,
            setState: function (e) {
                this.state = e, this.trigger(r.Z, {
                    newstate: e
                })
            },
            sendMediaType: function (e) {
                var t = e[0],
                    n = t.type,
                    i = t.mimeType,
                    o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
                this.trigger(r.R, {
                    mediaType: o ? "audio" : "video"
                })
            }
        };
    t.a = a
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(51),
        o = n(16),
        u = n(12),
        a = n(7),
        c = {
            autostart: !1,
            bandwidthEstimate: null,
            bitrateSelection: null,
            castAvailable: !1,
            controls: !0,
            defaultPlaybackRate: 1,
            displaydescription: !0,
            displaytitle: !0,
            height: 360,
            liveTimeout: null,
            localization: {
                airplay: "AirPlay",
                audioTracks: "Audio Tracks",
                buffer: "Loading",
                cast: "Chromecast",
                cc: "Closed Captions",
                close: "Close",
                copied: "Copied",
                errors: {
                    badConnection: "This video cannot be played because of a problem with your internet connection.",
                    cantLoadPlayer: "Sorry, the video player failed to load.",
                    cantPlayInBrowser: "The video cannot be played in this browser.",
                    cantPlayVideo: "This video file cannot be played.",
                    errorCode: "Error Code",
                    liveStreamDown: "The live stream is either down or has ended.",
                    protectedContent: "There was a problem providing access to protected content.",
                    technicalError: "This video cannot be played because of a technical error."
                },
                fullscreen: "Fullscreen",
                hd: "Quality",
                liveBroadcast: "Live",
                loadingAd: "Loading ad",
                more: "More",
                next: "Next",
                nextUp: "Next Up",
                nextUpClose: "Next Up Close",
                pause: "Pause",
                player: "Video Player",
                play: "Play",
                playback: "Start Playback",
                playbackRates: "Playback Rates",
                playlist: "Playlist",
                prev: "Previous",
                related: "More Videos",
                replay: "Replay",
                rewind: "Rewind 10 Seconds",
                settings: "Settings",
                stop: "Stop",
                unmute: "Unmute",
                videoInfo: "About This Video",
                volume: "Volume"
            },
            mute: !1,
            nextUpDisplay: !0,
            playbackRateControls: !1,
            playbackRates: [.5, 1, 1.25, 1.5, 2],
            renderCaptionsNatively: !1,
            repeat: !1,
            stretching: "uniform",
            volume: 90,
            width: 640
        };

    function s(e) {
        return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
    }
    var l = function (e, t) {
            var i = Object(r.j)({}, (window.jwplayer || {}).defaults, t, e);
            ! function (e) {
                Object.keys(e).forEach(function (t) {
                    "id" !== t && (e[t] = Object(u.serialize)(e[t]))
                })
            }(i), i.localization = Object(r.j)({}, c.localization, i.localization), i.localization.errors = Object(r.j)({}, c.localization.errors, i.localization.errors);
            var l = Object(r.j)({}, c, i);
            "." === l.base && (l.base = Object(o.getScriptPath)("jwplayer.js")), l.base = (l.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), n.p = l.base, l.width = s(l.width), l.height = s(l.height), l.aspectratio = function (e, t) {
                if (-1 === t.toString().indexOf("%")) return 0;
                if ("string" != typeof e || !e) return 0;
                if (/^\d*\.?\d+%$/.test(e)) return e;
                var n = e.indexOf(":");
                if (-1 === n) return 0;
                var r = parseFloat(e.substr(0, n)),
                    i = parseFloat(e.substr(n + 1));
                return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
            }(l.aspectratio, l.width), l.volume = Object(r.z)(l.volume) ? Math.min(Math.max(0, l.volume), 100) : c.volume, l.mute = !!l.mute;
            var f = l.playbackRateControls;
            if (f) {
                var d = l.playbackRates;
                Array.isArray(f) && (d = f), (d = d.filter(function (e) {
                    return Object(r.v)(e) && e >= .25 && e <= 4
                }).map(function (e) {
                    return Math.round(4 * e) / 4
                })).indexOf(1) < 0 && d.push(1), d.sort(), l.playbackRateControls = !0, l.playbackRates = d
            }(!l.playbackRateControls || l.playbackRates.indexOf(l.defaultPlaybackRate) < 0) && (l.defaultPlaybackRate = 1), l.playbackRate = l.defaultPlaybackRate, l.aspectratio || delete l.aspectratio;
            var p = l.playlist;
            if (p) Array.isArray(p.playlist) && (l.feedData = p, l.playlist = p.playlist);
            else {
                var v = Object(r.D)(l, ["title", "description", "type", "mediaid", "image", "file", "sources", "tracks", "preload", "duration"]);
                l.playlist = [v]
            }
            l.qualityLabels = l.qualityLabels || l.hlslabels, delete l.duration;
            var h = l.liveTimeout;
            null !== h && (Object(r.z)(h) ? 0 !== h && (h = Math.max(30, h)) : h = null, l.liveTimeout = h);
            var m, g, b = parseFloat(l.bandwidthEstimate),
                y = parseFloat(l.bitrateSelection);
            return l.bandwidthEstimate = Object(r.z)(b) ? b : (m = l.defaultBandwidthEstimate, g = parseFloat(m), Object(r.z)(g) ? Math.max(g, 1) : c.bandwidthEstimate), l.bitrateSelection = Object(r.z)(y) ? y : c.bitrateSelection, l.backgroundLoading = Object(r.r)(l.backgroundLoading) ? l.backgroundLoading : a.Features.backgroundLoading, l
        },
        f = n(44),
        d = n(1),
        p = n(22);

    function v(e) {
        var t = "file:" === window.location.protocol ? "https:" : "",
            n = {
                jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.4.1/jwpsrv.js",
                dai: "//ssl.p.jwpcdn.com/player/plugins/dai/v/0.4.1/dai.js",
                vast: "//ssl.p.jwpcdn.com/player/plugins/vast/v/8.4.2/vast.js",
                googima: "//ssl.p.jwpcdn.com/player/plugins/googima/v/8.4.1/googima.js",
                freewheel: "//ssl.p.jwpcdn.com/player/plugins/freewheel/v/2.1.7/freewheel.js",
                related: "//ssl.p.jwpcdn.com/player/plugins/related/v/6.2.6/related.js",
                gapro: "//ssl.p.jwpcdn.com/player/plugins/gapro/v/2.1.3/gapro.js"
            } [e];
        return n ? t + n : ""
    }

    function h(e, t, n) {
        t && (e[t.client || v(n)] = t, delete t.client)
    }
    var m = function (e, t) {
            var i = l(e, t),
                u = i.key || window.jwplayer && window.jwplayer.key,
                a = new f.a(u).edition();
            if (i.key = u, i.edition = a, i.error = null, "unlimited" === a) {
                var c = Object(o.getScriptPath)("jwplayer.js");
                if (!c) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
                n.p = c
            }
            if ("invalid" === a || "expired" === a) {
                var s = void 0 === u ? "missing" : a;
                i.error = new d.o(d.i, function (e) {
                    switch (e) {
                    case "missing":
                        return d.r;
                    case "expired":
                        return d.p;
                    default:
                        return d.q
                    }
                }(s))
            }
            i.flashplayer = function (e) {
                var t = e.flashplayer;
                return t || (t = (Object(o.getScriptPath)("jwplayer.js") || e.base) + "jwplayer.flash.swf"), "http:" === window.location.protocol && (t = t.replace(/^https/, "http")), t
            }(i), i.plugins = function (e) {
                var t = Object(r.j)({}, e.plugins),
                    n = e.edition,
                    i = Object(p.a)(n);
                if (i("ads")) {
                    var o = Object(r.j)({}, e.advertising),
                        u = o.client;
                    if (u) {
                        var a = v(u) || u;
                        t[a] = o, delete o.client
                    }
                }
                if (i("jwpsrv")) {
                    var c = e.analytics;
                    c !== Object(c) && (c = {}), h(t, c, "jwpsrv")
                }
                h(t, e.ga, "gapro");
                var s = e.related,
                    l = s === Object(s) && i("discovery");
                if (!1 !== e.controls || l) {
                    var f = !1 !== e.visualplaylist || l;
                    l || ((s = {
                        disableRelated: !0
                    }).client = s.client), s.showButton = f, h(t, s, "related")
                }
                return t
            }(i);
            var m = i.ab;
            return m && Object.keys(m.tests).forEach(function (e) {
                m.tests[e].forEach(function (e) {
                    e.addConfig && e.addConfig(i, e.selection)
                })
            }), i
        },
        g = n(10),
        b = n(3),
        y = n(5),
        j = n(55),
        w = n(27),
        O = n(29);

    function C(e) {
        var t = e.get("playlist");
        if ("string" == typeof t) return new y.a(function (n, r) {
            var i = new j.a;
            i.on(b.Ca, function (t) {
                var r = t.playlist;
                delete t.playlist, k(e, r, t), n()
            }), i.on(b.w, function (t) {
                k(e, [], {}), r(Object(d.x)(t, d.t))
            }), i.load(t)
        });
        var n = e.get("feedData") || {};
        return k(e, t, n), y.b
    }

    function k(e, t, n) {
        var r = e.attributes;
        r.playlist = Object(w.a)(t), r.feedData = n
    }

    function x(e) {
        var t = e.get("skin") ? e.get("skin").url : void 0;
        if ("string" == typeof t && ! function (e) {
                for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++)
                    if (t[n].href === e) return !0;
                return !1
            }(t)) {
            return new O.a(t, !0).load().catch(function (e) {
                return e
            })
        }
        return y.b
    }

    function E(e) {
        return e.attributes._destroyed
    }
    var S = function (e) {
            return E(e) ? y.a.reject() : y.a.all([function (e) {
                return C(e).then(function () {
                    if (!E(e)) {
                        var t = Object(w.b)(e.get("playlist"), e);
                        e.attributes.playlist = t;
                        try {
                            Object(w.d)(t)
                        } catch (e) {
                            throw e.code += d.t, e
                        }
                        var n = e.getProviders(),
                            r = n.choose(t[0].sources[0]),
                            i = r.provider,
                            o = r.name;
                        return "function" == typeof i ? i : g.a.html5 && "html5" === o ? g.a.html5 : n.load(o).catch(function (e) {
                            throw Object(d.x)(e, d.u)
                        })
                    }
                })
            }(e), x(e)])
        },
        T = n(34);

    function P(e) {
        return (t = e, C(t).then(function () {
            return t.get("drm") || Object(T.b)(t.get("playlist")) ? Object(T.d)(t.get("edition")) : y.b
        })).then(function () {
            return S(e)
        });
        var t
    }
    var L = n(23),
        A = function (e) {
            var t = void 0;
            this.start = function (n) {
                var r = y.a.all([Object(g.c)(e), P(e), Object(L.a)(e, n)]),
                    i = new y.a(function (e, n) {
                        t = setTimeout(function () {
                            var e = new d.o(d.i, d.v);
                            n(e)
                        }, 3e4);
                        var i = function () {
                            clearTimeout(t), e()
                        };
                        r.then(i).catch(i)
                    });
                return y.a.race([r, i])
            }, this.destroy = function () {
                clearTimeout(t), e.set("_destroyed", !0), e = null
            }
        },
        M = n(39),
        N = n(25),
        _ = n(19),
        F = {
            removeItem: function () {}
        };
    try {
        F = window.localStorage || F
    } catch (e) {}

    function I(e, t) {
        this.namespace = e, this.items = t
    }
    Object(r.j)(I.prototype, {
        getAllItems: function () {
            var e = this;
            return this.items.reduce(function (t, n) {
                var r = F[e.namespace + "." + n];
                return r && (t[n] = Object(u.serialize)(r)), t
            }, {})
        },
        track: function (e) {
            var t = this;
            this.items.forEach(function (n) {
                e.on("change:" + n, function (e, r) {
                    try {
                        F[t.namespace + "." + n] = r
                    } catch (e) {
                        _.a.debug && console.error(e)
                    }
                })
            })
        },
        clear: function () {
            var e = this;
            this.items.forEach(function (t) {
                F.removeItem(e.namespace + "." + t)
            })
        }
    });
    var R = I,
        B = n(49),
        D = n(45),
        z = n(6),
        q = n(40),
        Q = n(50);

    function V(e) {
        e.src || e.load()
    }

    function W() {
        var e = document.createElement("video");
        return e.className = "jw-video jw-reset", e.setAttribute("tabindex", "-1"), e.setAttribute("disableRemotePlayback", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("playsinline", ""), e
    }
    var X = n(54);
    n.d(t, "b", function () {
        return K
    });
    var H = function () {};
    Object(r.j)(H.prototype, B.a);
    var U = function (e) {
        this._events = {}, this.modelShim = new H, this.modelShim._qoeItem = new N.a, this.mediaShim = {}, this.setup = new A(this.modelShim), this.currentContainer = this.originalContainer = e, this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "setCues", "resize", "setCaptions", "setControls"], function () {
            return !0
        })
    };

    function J(e, t) {
        t && t.code && (t.sourceError && console.error(t.sourceError), console.error(d.o.logMessage(t.code)))
    }

    function K(e, t) {
        if (!document.body.contains(e.currentContainer)) {
            var n = document.getElementById(e.get("id"));
            n && (e.currentContainer = n)
        }
        e.currentContainer.parentElement && e.currentContainer.parentElement.replaceChild(t, e.currentContainer), e.currentContainer = t
    }
    Object(r.j)(U.prototype, {
        on: z.a.on,
        once: z.a.once,
        off: z.a.off,
        trigger: z.a.trigger,
        init: function (e, t) {
            var n = this,
                i = this.modelShim,
                o = new R("jwplayer", ["volume", "mute", "captionLabel", "bandwidthEstimate", "bitrateSelection", "qualityLabel"]),
                u = o && o.getAllItems();
            i.attributes = i.attributes || {}, Object(r.j)(this.mediaShim, D.a);
            var a = e,
                c = m(Object(r.j)({}, e), u);
            c.id = t.id, c.setupConfig = a, Object(r.j)(i.attributes, c, D.b), i.getProviders = function () {
                return new M.a(c)
            }, i.setProvider = function () {};
            var s = function () {
                for (var e = Q.c, t = [], n = [], r = 0; r < e; r++) {
                    var i = W();
                    t.push(i), n.push(i)
                }
                var o = n.shift(),
                    u = n.shift();
                return {
                    prime: function () {
                        t.forEach(V)
                    },
                    getPrimedElement: function () {
                        return n.length ? n.shift() : null
                    },
                    getAdElement: function () {
                        return o
                    },
                    getTestElement: function () {
                        return u
                    },
                    clean: function (e) {
                        if (e.src) {
                            e.removeAttribute("src");
                            try {
                                e.load()
                            } catch (e) {}
                        }
                    },
                    recycle: function (e) {
                        e && !n.some(function (t) {
                            return t === e
                        }) && (this.clean(e), n.push(e))
                    },
                    syncVolume: function (e) {
                        var n = Math.min(Math.max(0, e / 100), 1);
                        t.forEach(function (e) {
                            e.volume = n
                        })
                    },
                    syncMute: function (e) {
                        t.forEach(function (t) {
                            t.muted = e
                        })
                    }
                }
            }();
            return i.get("backgroundLoading") || (s = Object(X.a)(s.getPrimedElement(), s)), s.prime(), i.on("change:errorEvent", J), this.setup.start(t).then(function (e) {
                var u = e[0];
                if (n.setup) {
                    var a = n.modelShim.clone();
                    if (a.error) throw a.error;
                    var c = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(), Object(r.j)(n, u.prototype), n.setup(a, t, n.originalContainer, n._events, c, s);
                    var l = n._model;
                    return i.off("change:errorEvent", J), l.on("change:errorEvent", J), o.track(l), n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch(function (e) {
                        throw Object(d.x)(e, d.t)
                    })
                }
            }).then(function () {
                n.setup && n.playerReady()
            }).catch(function (e) {
                n.setup && function (e, t) {
                    y.b.then(function () {
                        var n = Object(d.y)(d.n, d.w, t),
                            r = e._model || e.modelShim;
                        n.message = n.message || r.get("localization").errors[n.key], delete n.key;
                        var i = Object(q.a)(e, n);
                        q.a.cloneIcon && i.querySelector(".jw-icon").appendChild(q.a.cloneIcon("error")), K(e, i), r.set("errorEvent", n), r.set("state", b.Ka), e.trigger(b.Ha, n)
                    })
                }(n, e)
            })
        },
        playerDestroy: function () {
            this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.off(), this._events = this._model = this.modelShim = this.originalContainer = this.apiQueue = this.setup = null
        },
        getContainer: function () {
            return this.currentContainer
        },
        get: function (e) {
            return e in this.mediaShim ? this.mediaShim[e] : this.modelShim.get(e)
        },
        getItemQoe: function () {
            return this.modelShim._qoeItem
        },
        getConfig: function () {
            return Object(r.j)({}, this.modelShim.attributes, this.mediaShim)
        },
        getCurrentCaptions: function () {
            return this.get("captionsIndex")
        },
        getWidth: function () {
            return this.get("containerWidth")
        },
        getHeight: function () {
            return this.get("containerHeight")
        },
        getMute: function () {
            return this.get("mute")
        },
        getProvider: function () {
            return this.get("provider")
        },
        getState: function () {
            return this.get("state")
        },
        getAudioTracks: function () {
            return null
        },
        getCaptionsList: function () {
            return null
        },
        getQualityLevels: function () {
            return null
        },
        getVisualQuality: function () {
            return null
        },
        getCurrentQuality: function () {
            return -1
        },
        getCurrentAudioTrack: function () {
            return -1
        },
        getSafeRegion: function () {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        },
        isBeforeComplete: function () {
            return !1
        },
        isBeforePlay: function () {
            return !1
        },
        createInstream: function () {
            return null
        },
        skipAd: function () {},
        attachMedia: function () {},
        detachMedia: function () {
            return null
        }
    });
    t.a = U
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    });
    var r = n(0);

    function i(e, t) {
        return Object(r.j)({}, t, {
            prime: function () {
                e.src || e.load()
            },
            getPrimedElement: function () {
                return e
            },
            clean: function () {
                t.clean(e)
            },
            recycle: function () {
                t.clean(e)
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = n(3),
        o = n(4),
        u = n(42),
        a = n(37),
        c = n(6),
        s = n(1);
    t.a = function () {
        var e = Object(r.j)(this, c.a);

        function t(t) {
            try {
                var a = t.responseXML ? t.responseXML.childNodes : null,
                    c = "",
                    l = void 0;
                if (a) {
                    for (var f = 0; f < a.length && 8 === (c = a[f]).nodeType; f++);
                    if ("xml" === Object(o.b)(c) && (c = c.nextSibling), "rss" === Object(o.b)(c)) {
                        var d = Object(u.a)(c);
                        l = Object(r.j)({
                            playlist: d
                        }, d.feedData)
                    }
                }
                if (!l) try {
                    var p = JSON.parse(t.responseText);
                    if (Array.isArray(p)) l = {
                        playlist: p
                    };
                    else {
                        if (!Array.isArray(p.playlist)) throw Error("Playlist is not an array");
                        l = p
                    }
                } catch (e) {
                    throw new s.o(s.k, 621, e)
                }
                e.trigger(i.Ca, l)
            } catch (e) {
                n(e)
            }
        }

        function n(t) {
            t.code || (t = new s.o(s.k, 0)), e.trigger(i.w, t)
        }
        this.load = function (e) {
            Object(a.a)(e, t, function (e, t, r, i) {
                n(i)
            })
        }, this.destroy = function () {
            this.off()
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
        return i
    });
    var r = n(7);

    function i(e) {
        return "hls" === e.type && r.OS.android ? !1 !== e.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version) >= 4.4) : null
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
        i = n(16),
        o = n(13),
        u = n(15),
        a = n(14),
        c = {
            availableProviders: u.a,
            registerProvider: a.a
        },
        s = n(23);
    c.registerPlugin = function (e, t, n) {
        "jwpsrv" !== e && Object(s.b)(e, t, n)
    };
    var l = c,
        f = n(26),
        d = n(19),
        p = n(7),
        v = n(53),
        h = n(3),
        m = n(25),
        g = n(6),
        b = n(11),
        y = n(12),
        j = n(2),
        w = n(46),
        O = n(8),
        C = n(9),
        k = n(20),
        x = n(37),
        E = n(48),
        S = n(30);
    var T = Object(r.j)({}, y, b, i, {
            addClass: C.a,
            hasClass: C.h,
            removeClass: C.l,
            replaceClass: C.m,
            toggleClass: C.p,
            classList: C.d,
            styleDimension: C.o,
            createElement: C.e,
            emptyElement: C.g,
            addStyleSheet: C.b,
            bounds: C.c,
            css: k.b,
            clearCss: k.a,
            style: k.d,
            transform: k.e,
            getRgba: k.c,
            ajax: x.a,
            crossdomain: function (e) {
                var t = document.createElement("a"),
                    n = document.createElement("a");
                t.href = location.href;
                try {
                    return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
                } catch (e) {}
                return !0
            },
            tryCatch: w.b,
            Error: w.a,
            Timer: m.a,
            log: S.a,
            between: E.a,
            foreach: function (e, t) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
            },
            flashVersion: O.a,
            isIframe: O.m,
            indexOf: r.p,
            trim: j.h,
            pad: j.d,
            extension: j.a,
            hms: j.b,
            seconds: j.f,
            prefix: j.e,
            suffix: j.g,
            noop: function () {}
        }),
        P = 0;

    function L(e, t) {
        var n = new v.a(t);
        return n.on(h.Fa, function (t) {
            e._qoe.tick("ready"), t.setupTime = e._qoe.between("setup", "ready")
        }), n.on("all", function (t, n) {
            e.trigger(t, n)
        }), n
    }

    function A(e, t) {
        var n = e.plugins;
        Object.keys(n).forEach(function (e) {
            delete n[e]
        }), e.off(), t.playerDestroy(), t.getContainer().removeAttribute("data-jwplayer-id")
    }

    function M(e) {
        var t = ++P,
            n = e.id || "player-" + t,
            i = new m.a,
            u = {},
            a = L(this, e);
        i.tick("init"), e.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
            id: {
                get: function () {
                    return n
                }
            },
            uniqueId: {
                get: function () {
                    return t
                }
            },
            plugins: {
                get: function () {
                    return u
                }
            },
            _qoe: {
                get: function () {
                    return i
                }
            },
            version: {
                get: function () {
                    return f.a
                }
            },
            Events: {
                get: function () {
                    return g.a
                }
            },
            utils: {
                get: function () {
                    return T
                }
            },
            _: {
                get: function () {
                    return r.f
                }
            }
        }), Object(r.j)(this, {
            _events: {},
            setup: function (t) {
                return i.clear("ready"), i.tick("setup"), A(this, a), (a = L(this, e)).init(t, this), this.on(t.events, null, this)
            },
            remove: function () {
                return function (e) {
                    for (var t = o.a.length; t--;)
                        if (o.a[t].uniqueId === e.uniqueId) {
                            o.a.splice(t, 1);
                            break
                        }
                }(this), this.trigger("remove"), A(this, a), this
            },
            qoe: function () {
                var e = a.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: e.dump()
                }
            },
            getAudioTracks: function () {
                return a.getAudioTracks()
            },
            getBuffer: function () {
                return a.get("buffer")
            },
            getCaptions: function () {
                return a.get("captions")
            },
            getCaptionsList: function () {
                return a.getCaptionsList()
            },
            getConfig: function () {
                return a.getConfig()
            },
            getContainer: function () {
                return a.getContainer()
            },
            getControls: function () {
                return a.get("controls")
            },
            getCurrentAudioTrack: function () {
                return a.getCurrentAudioTrack()
            },
            getCurrentCaptions: function () {
                return a.getCurrentCaptions()
            },
            getCurrentQuality: function () {
                return a.getCurrentQuality()
            },
            getCurrentTime: function () {
                return a.get("currentTime")
            },
            getDuration: function () {
                return a.get("duration")
            },
            getEnvironment: function () {
                return p
            },
            getFullscreen: function () {
                return a.get("fullscreen")
            },
            getHeight: function () {
                return a.getHeight()
            },
            getItemMeta: function () {
                return a.get("itemMeta") || {}
            },
            getMute: function () {
                return a.getMute()
            },
            getPlaybackRate: function () {
                return a.get("playbackRate")
            },
            getPlaylist: function () {
                return a.get("playlist")
            },
            getPlaylistIndex: function () {
                return a.get("item")
            },
            getPlaylistItem: function (e) {
                if (!T.exists(e)) return a.get("playlistItem");
                var t = this.getPlaylist();
                return t ? t[e] : null
            },
            getPosition: function () {
                return a.get("position")
            },
            getProvider: function () {
                return a.getProvider()
            },
            getQualityLevels: function () {
                return a.getQualityLevels()
            },
            getSafeRegion: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return a.getSafeRegion(e)
            },
            getState: function () {
                return a.getState()
            },
            getStretching: function () {
                return a.get("stretching")
            },
            getViewable: function () {
                return a.get("viewable")
            },
            getVisualQuality: function () {
                return a.getVisualQuality()
            },
            getVolume: function () {
                return a.get("volume")
            },
            getWidth: function () {
                return a.getWidth()
            },
            setCaptions: function (e) {
                return a.setCaptions(e), this
            },
            setConfig: function (e) {
                return a.setConfig(e), this
            },
            setControls: function (e) {
                return a.setControls(e), this
            },
            setCurrentAudioTrack: function (e) {
                a.setCurrentAudioTrack(e)
            },
            setCurrentCaptions: function (e) {
                a.setCurrentCaptions(e)
            },
            setCurrentQuality: function (e) {
                a.setCurrentQuality(e)
            },
            setFullscreen: function (e) {
                return a.setFullscreen(e), this
            },
            setMute: function (e) {
                return a.setMute(e), this
            },
            setPlaybackRate: function (e) {
                return a.setPlaybackRate(e), this
            },
            setCues: function (e) {
                return a.setCues(e), this
            },
            setVolume: function (e) {
                return a.setVolume(e), this
            },
            load: function (e, t) {
                return a.load(e, t), this
            },
            play: function (e) {
                return a.play(e), this
            },
            pause: function (e) {
                return a.pause(e), this
            },
            playToggle: function (e) {
                switch (this.getState()) {
                case h.Oa:
                case h.Ia:
                    return this.pause(e);
                default:
                    return this.play(e)
                }
            },
            seek: function (e, t) {
                return a.seek(e, t), this
            },
            playlistItem: function (e, t) {
                return a.playlistItem(e, t), this
            },
            playlistNext: function (e) {
                return a.playlistNext(e), this
            },
            playlistPrev: function (e) {
                return a.playlistPrev(e), this
            },
            next: function () {
                return a.next(), this
            },
            castToggle: function () {
                return a.castToggle(), this
            },
            createInstream: function () {
                return a.createInstream()
            },
            skipAd: function () {
                return a.skipAd(), this
            },
            stop: function () {
                return a.stop(), this
            },
            resize: function (e, t) {
                return a.resize(e, t), this
            },
            addButton: function (e, t, n, r, i) {
                return a.addButton(e, t, n, r, i), this
            },
            removeButton: function (e) {
                return a.removeButton(e), this
            },
            attachMedia: function () {
                return a.attachMedia(), this
            },
            detachMedia: function () {
                return a.detachMedia(), this
            },
            isBeforeComplete: function () {
                return a.isBeforeComplete()
            },
            isBeforePlay: function () {
                return a.isBeforePlay()
            }
        })
    }
    Object(r.j)(M.prototype, {
        on: function (e, t, n) {
            return g.c.call(this, e, t, n)
        },
        once: function (e, t, n) {
            return g.d.call(this, e, t, n)
        },
        off: function (e, t, n) {
            return g.b.call(this, e, t, n)
        },
        trigger: function (e, t) {
            return (t = r.f.isObject(t) ? Object(r.j)({}, t) : {}).type = e, d.a.debug ? g.e.call(this, e, t) : g.f.call(this, e, t)
        },
        getPlugin: function (e) {
            return this.plugins[e]
        },
        addPlugin: function (e, t) {
            this.plugins[e] = t, this.on("ready", t.addToPlayer), t.resize && this.on("resize", t.resizeHandler)
        },
        registerPlugin: function (e, t, n) {
            Object(s.b)(e, t, n)
        },
        getAdBlock: function () {
            return !1
        },
        playAd: function (e) {},
        pauseAd: function (e) {}
    }), n.p = Object(i.loadFrom)();
    var N = function (e) {
        var t = void 0,
            n = void 0;
        if (e ? "string" == typeof e ? (t = _(e)) || (n = document.getElementById(e)) : "number" == typeof e ? t = o.a[e] : e.nodeType && (t = _((n = e).id || n.getAttribute("data-jwplayer-id"))) : t = o.a[0], t) return t;
        if (n) {
            var r = new M(n);
            return o.a.push(r), r
        }
        return {
            registerPlugin: s.b
        }
    };

    function _(e) {
        for (var t = 0; t < o.a.length; t++)
            if (o.a[t].id === e) return o.a[t];
        return null
    }
    Object.defineProperties(N, {
        api: {
            get: function () {
                return l
            },
            set: function () {}
        },
        version: {
            get: function () {
                return f.a
            },
            set: function () {}
        },
        debug: {
            get: function () {
                return d.a.debug
            },
            set: function (e) {
                d.a.debug = !!e
            }
        }
    });
    var F = N,
        I = n(47),
        R = n(44),
        B = n(29),
        D = n(43),
        z = n(42),
        q = n(36),
        Q = r.f.extend,
        V = {};
    V.api = l, V._ = r.f, V.version = "8.4.1+commercial_v8-4-1.272.commercial.8191c23.hlsjs..jwplayer.8d5edc3.dai.ac94f63.freewheel.b827d95.googima.622bba8.vast.fb6bb49.analytics.e3a97de.gapro.f664e4e.related.2ce7dd3", V.utils = Object(r.j)(T, {
        key: R.a,
        extend: Q,
        scriptloader: B.a,
        rssparser: {
            parse: z.a
        },
        tea: D.a,
        UI: I.a
    }), V.utils.css.style = V.utils.style, V.vid = q.a;
    var W = V,
        X = window;
    Object(r.j)(F, W), "function" == typeof X.define && X.define.amd && X.define([], function () {
        return F
    });
    var H = F;
    X.jwplayer && (H = X.jwplayer);
    t.default = H
}]).default;