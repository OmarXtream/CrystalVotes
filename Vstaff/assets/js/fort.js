! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (E, e) {
    "use strict";

    function g(e, t, n) {
        var i, r = (t = t || X)
            .createElement("script");
        if (r.text = e, n)
            for (i in de) n[i] && (r[i] = n[i]);
        t.head.appendChild(r)
            .parentNode.removeChild(r)
    }

    function m(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[re.call(e)] || "object" : typeof e
    }

    function s(e) {
        var t = !!e && "length" in e && e.length,
            n = m(e);
        return !ce(e) && !ue(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function c(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function t(e, n, i) {
        return ce(n) ? fe.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? fe.grep(e, function (e) {
            return e === n !== i
        }) : "string" != typeof n ? fe.grep(e, function (e) {
            return -1 < ne.call(n, e) !== i
        }) : fe.filter(n, e, i)
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        return e
    }

    function d(e) {
        throw e
    }

    function l(e, t, n, i) {
        var r;
        try {
            e && ce(r = e.promise) ? r.call(e)
                .done(t)
                .fail(n) : e && ce(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function i() {
        X.removeEventListener("DOMContentLoaded", i), E.removeEventListener("load", i), fe.ready()
    }

    function r(e, t) {
        return t.toUpperCase()
    }

    function f(e) {
        return e.replace(je, "ms-")
            .replace(Se, r)
    }

    function o() {
        this.expando = fe.expando + o.uid++
    }

    function h(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(Oe, "-$&")
                .toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Ie.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                Ne.set(e, t, n)
            } else n = void 0;
        return n
    }

    function p(e, t, n, i) {
        var r, o, a = 20,
            s = i ? function () {
                return i.cur()
            } : function () {
                return fe.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
            u = (fe.cssNumber[t] || "px" !== c && +l) && He.exec(fe.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--;) fe.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
            u *= 2, fe.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function v(e, t) {
        for (var n, i, r = [], o = 0, a = e.length; o < a; o++)(i = e[o])
            .style && (n = i.style.display, t ? ("none" === n && (r[o] = De.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Qe(i) && (r[o] = (d = c = l = void 0, c = (s = i)
                .ownerDocument, u = s.nodeName, (d = Re[u]) || (l = c.body.appendChild(c.createElement(u)), d = fe.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), Re[u] = d)))) : "none" !== n && (r[o] = "none", De.set(i, "display", n)));
        var s, l, c, u, d;
        for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && c(e, t) ? fe.merge([e], n) : n
    }

    function b(e, t) {
        for (var n = 0, i = e.length; n < i; n++) De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
    }

    function _(e, t, n, i, r) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === m(o)) fe.merge(f, o.nodeType ? [o] : o);
                else if ($e.test(o)) {
            for (a = a || d.appendChild(t.createElement("div")), s = (We.exec(o) || ["", ""])[1].toLowerCase(), l = Be[s] || Be._default, a.innerHTML = l[1] + fe.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
            fe.merge(f, a.childNodes), (a = d.firstChild)
                .textContent = ""
        } else f.push(t.createTextNode(o));
        for (d.textContent = "", h = 0; o = f[h++];)
            if (i && -1 < fe.inArray(o, i)) r && r.push(o);
            else if (c = fe.contains(o.ownerDocument, o), a = y(d.appendChild(o), "script"), c && b(a), n)
            for (u = 0; o = a[u++];) qe.test(o.type || "") && n.push(o);
        return d
    }

    function a() {
        return !0
    }

    function w() {
        return !1
    }

    function C() {
        try {
            return X.activeElement
        } catch (e) {}
    }

    function T(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (i = i || n, n = void 0), t) T(e, s, n, i, t[s], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = w;
        else if (!r) return e;
        return 1 === o && (a = r, (r = function (e) {
                return fe()
                    .off(e), a.apply(this, arguments)
            })
            .guid = a.guid || (a.guid = fe.guid++)), e.each(function () {
            fe.event.add(this, t, r, i, n)
        })
    }

    function x(e, t) {
        return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && fe(e)
            .children("tbody")[0] || e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function j(e) {
        return "true/" === (e.type || "")
            .slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function S(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (De.hasData(e) && (o = De.access(e), a = De.set(t, o), c = o.events))
                for (r in delete a.handle, a.events = {}, c)
                    for (n = 0, i = c[r].length; n < i; n++) fe.event.add(t, r, c[r][n]);
            Ne.hasData(e) && (s = Ne.access(e), l = fe.extend({}, s), Ne.set(t, l))
        }
    }

    function A(n, i, r, o) {
        i = ee.apply([], i);
        var e, t, a, s, l, c, u = 0,
            d = n.length,
            f = d - 1,
            h = i[0],
            p = ce(h);
        if (p || 1 < d && "string" == typeof h && !le.checkClone && Ze.test(h)) return n.each(function (e) {
            var t = n.eq(e);
            p && (i[0] = h.call(this, e, t.html())), A(t, i, r, o)
        });
        if (d && (t = (e = _(i, n[0].ownerDocument, !1, n, o))
                .firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = fe.map(y(e, "script"), k))
                .length; u < d; u++) l = e, u !== f && (l = fe.clone(l, !0, !0), s && fe.merge(a, y(l, "script"))), r.call(n[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument, fe.map(a, j), u = 0; u < s; u++) l = a[u], qe.test(l.type || "") && !De.access(l, "globalEval") && fe.contains(c, l) && (l.src && "module" !== (l.type || "")
                    .toLowerCase() ? fe._evalUrl && fe._evalUrl(l.src) : g(l.textContent.replace(et, ""), c, l))
        }
        return n
    }

    function D(e, t, n) {
        for (var i, r = t ? fe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || fe.cleanData(y(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function N(e, t, n) {
        var i, r, o, a, s = e.style;
        return (n = n || nt(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (a = fe.style(e, t)), !le.pixelBoxStyles() && tt.test(a) && it.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function I(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t)
                    .apply(this, arguments);
                delete this.get
            }
        }
    }

    function O(e) {
        var t = fe.cssProps[e];
        return t || (t = fe.cssProps[e] = function (e) {
            if (e in ct) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--;)
                if ((e = lt[n] + t) in ct) return e
        }(e) || e), t
    }

    function L(e, t, n) {
        var i = He.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function H(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (l += fe.css(e, n + Pe[a], !0, r)), i ? ("content" === n && (l -= fe.css(e, "padding" + Pe[a], !0, r)), "margin" !== n && (l -= fe.css(e, "border" + Pe[a] + "Width", !0, r))) : (l += fe.css(e, "padding" + Pe[a], !0, r), "padding" !== n ? l += fe.css(e, "border" + Pe[a] + "Width", !0, r) : s += fe.css(e, "border" + Pe[a] + "Width", !0, r));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), l
    }

    function P(e, t, n) {
        var i = nt(e),
            r = N(e, t, i),
            o = "border-box" === fe.css(e, "boxSizing", !1, i),
            a = o;
        if (tt.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return a = a && (le.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === fe.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + H(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
    }

    function Q(e, t, n, i, r) {
        return new Q.prototype.init(e, t, n, i, r)
    }

    function M() {
        dt && (!1 === X.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(M) : E.setTimeout(M, fe.fx.interval), fe.fx.tick())
    }

    function R() {
        return E.setTimeout(function () {
            ut = void 0
        }), ut = Date.now()
    }

    function F(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = Pe[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function W(e, t, n) {
        for (var i, r = (q.tweeners[t] || [])
                .concat(q.tweeners["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function q(o, e, t) {
        var n, a, i = 0,
            r = q.prefilters.length,
            s = fe.Deferred()
            .always(function () {
                delete l.elem
            }),
            l = function () {
                if (a) return !1;
                for (var e = ut || R(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
                return s.notifyWith(o, [c, n, t]), n < 1 && r ? t : (r || s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c]), !1)
            },
            c = s.promise({
                elem: o,
                props: fe.extend({}, e),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: ut || R(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = fe.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [c, 1, 0]), s.resolveWith(o, [c, e])) : s.rejectWith(o, [c, e]), this
                }
            }),
            u = c.props;
        for (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (r = t[i = f(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = fe.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); i < r; i++)
            if (n = q.prefilters[i].call(c, o, u, c.opts)) return ce(n.stop) && (fe._queueHooks(c.elem, c.opts.queue)
                .stop = n.stop.bind(n)), n;
        return fe.map(u, W, c), ce(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always), fe.fx.timer(fe.extend(l, {
                elem: o,
                anim: c,
                queue: c.opts.queue
            })), c
    }

    function B(e) {
        return (e.match(Ee) || [])
            .join(" ")
    }

    function U(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function V(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ee) || []
    }

    function $(n, e, i, r) {
        var t;
        if (Array.isArray(e)) fe.each(e, function (e, t) {
            i || kt.test(n) ? r(n, t) : $(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
        });
        else if (i || "object" !== m(e)) r(n, e);
        else
            for (t in e) $(n + "[" + t + "]", e[t], i, r)
    }

    function Y(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase()
                .match(Ee) || [];
            if (ce(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || [])
                        .unshift(t)) : (o[n] = o[n] || [])
                    .push(t)
        }
    }

    function z(t, r, o, a) {
        function s(e) {
            var i;
            return l[e] = !0, fe.each(t[e] || [], function (e, t) {
                var n = t(r, o, a);
                return "string" != typeof n || c || l[n] ? c ? !(i = n) : void 0 : (r.dataTypes.unshift(n), s(n), !1)
            }), i
        }
        var l = {},
            c = t === Qt;
        return s(r.dataTypes[0]) || !l["*"] && s("*")
    }

    function K(e, t) {
        var n, i, r = fe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && fe.extend(!0, e, i), e
    }
    var G = [],
        X = E.document,
        J = Object.getPrototypeOf,
        Z = G.slice,
        ee = G.concat,
        te = G.push,
        ne = G.indexOf,
        ie = {},
        re = ie.toString,
        oe = ie.hasOwnProperty,
        ae = oe.toString,
        se = ae.call(Object),
        le = {},
        ce = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        ue = function (e) {
            return null != e && e === e.window
        },
        de = {
            type: !0,
            src: !0,
            noModule: !0
        },
        fe = function (e, t) {
            return new fe.fn.init(e, t)
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    fe.fn = fe.prototype = {
        jquery: "3.3.1",
        constructor: fe,
        length: 0,
        toArray: function () {
            return Z.call(this)
        },
        get: function (e) {
            return null == e ? Z.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return fe.each(this, e)
        },
        map: function (n) {
            return this.pushStack(fe.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(Z.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: te,
        sort: G.sort,
        splice: G.splice
    }, fe.extend = fe.fn.extend = function () {
        var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ce(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (fe.isPlainObject(i) || (r = Array.isArray(i))) ? (o = r ? (r = !1, n && Array.isArray(n) ? n : []) : n && fe.isPlainObject(n) ? n : {}, a[t] = fe.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }, fe.extend({
        expando: "jQuery" + ("3.3.1" + Math.random())
            .replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== re.call(e) || (t = J(e)) && ("function" != typeof (n = oe.call(t, "constructor") && t.constructor) || ae.call(n) !== se))
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            g(e)
        },
        each: function (e, t) {
            var n, i = 0;
            if (s(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "")
                .replace(he, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (s(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : te.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : ne.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function (e, t, n) {
            var i, r, o = 0,
                a = [];
            if (s(e))
                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
            else
                for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
            return ee.apply([], a)
        },
        guid: 1,
        support: le
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = G[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ie["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = function (n) {
        function _(e, t, n, i) {
            var r, o, a, s, l, c, u, d = t && t.ownerDocument,
                f = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
            if (!i && ((t ? t.ownerDocument || t : Q) !== A && S(t), t = t || A, N)) {
                if (11 !== f && (l = he.exec(e)))
                    if (r = l[1]) {
                        if (9 === f) {
                            if (!(a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a), n
                        } else if (d && (a = d.getElementById(r)) && H(t, a) && a.id === r) return n.push(a), n
                    } else {
                        if (l[2]) return z.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && m.getElementsByClassName && t.getElementsByClassName) return z.apply(n, t.getElementsByClassName(r)), n
                    } if (m.qsa && !q[e + " "] && (!I || !I.test(e))) {
                    if (1 !== f) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, ye) : t.setAttribute("id", s = P), o = (c = E(e))
                            .length; o--;) c[o] = "#" + s + " " + p(c[o]);
                        u = c.join(","), d = pe.test(e) && h(t.parentNode) || t
                    }
                    if (u) try {
                        return z.apply(n, d.querySelectorAll(u)), n
                    } catch (e) {} finally {
                        s === P && t.removeAttribute("id")
                    }
                }
            }
            return T(e.replace(ie, "$1"), t, n, i)
        }

        function e() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > C.cacheLength && delete e[i.shift()], e[t + " "] = n
            }
        }

        function l(e) {
            return e[P] = !0, e
        }

        function r(e) {
            var t = A.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function c(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function i(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && _e(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function o(a) {
            return l(function (o) {
                return o = +o, l(function (e, t) {
                    for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function h(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function a() {}

        function p(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function d(s, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                d = t && "parentNode" === u,
                f = R++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || d) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var i, r, o, a = [M, f];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || d) && s(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || d)
                            if (r = (o = e[P] || (e[P] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = r[u]) && i[0] === M && i[1] === f) return a[2] = i[2];
                                if ((r[u] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function f(r) {
            return 1 < r.length ? function (e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function w(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
            return a
        }

        function y(h, p, g, m, v, e) {
            return m && !m[P] && (m = y(m)), v && !v[P] && (v = y(v, e)), l(function (e, t, n, i) {
                var r, o, a, s = [],
                    l = [],
                    c = t.length,
                    u = e || function (e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) _(e, t[i], n);
                        return n
                    }(p || "*", n.nodeType ? [n] : n, []),
                    d = !h || !e && p ? u : w(u, s, h, n, i),
                    f = g ? v || (e ? h : c || m) ? [] : t : d;
                if (g && g(d, f, n, i), m)
                    for (r = w(f, l), m(r, [], n, i), o = r.length; o--;)(a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
                if (e) {
                    if (v || h) {
                        if (v) {
                            for (r = [], o = f.length; o--;)(a = f[o]) && r.push(d[o] = a);
                            v(null, f = [], r, i)
                        }
                        for (o = f.length; o--;)(a = f[o]) && -1 < (r = v ? G(e, a) : s[o]) && (e[r] = !(t[r] = a))
                    }
                } else f = w(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : z.apply(t, f)
            })
        }

        function g(e) {
            for (var r, t, n, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, l = d(function (e) {
                    return e === r
                }, a, !0), c = d(function (e) {
                    return -1 < G(r, e)
                }, a, !0), u = [function (e, t, n) {
                    var i = !o && (n || t !== x) || ((r = t)
                        .nodeType ? l(e, t, n) : c(e, t, n));
                    return r = null, i
                }]; s < i; s++)
                if (t = C.relative[e[s].type]) u = [d(f(u), t)];
                else {
                    if ((t = C.filter[e[s].type].apply(null, e[s].matches))[P]) {
                        for (n = ++s; n < i && !C.relative[e[n].type]; n++);
                        return y(1 < s && f(u), 1 < s && p(e.slice(0, s - 1)
                                .concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                }))
                            .replace(ie, "$1"), t, s < n && g(e.slice(s, n)), n < i && g(e = e.slice(n)), n < i && p(e))
                    }
                    u.push(t)
                } return f(u)
        }
        var s, m, C, u, v, E, b, T, x, k, j, S, A, D, N, I, O, L, H, P = "sizzle" + 1 * new Date,
            Q = n.document,
            M = 0,
            R = 0,
            F = e(),
            W = e(),
            q = e(),
            B = function (e, t) {
                return e === t && (j = !0), 0
            },
            U = {}.hasOwnProperty,
            V = [],
            $ = V.pop,
            Y = V.push,
            z = V.push,
            K = V.slice,
            G = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            X = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            J = "[\\x20\\t\\r\\n\\f]",
            Z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ee = "\\[" + J + "*(" + Z + ")(?:" + J + "*([*^$|!~]?=)" + J + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Z + "))|)" + J + "*\\]",
            te = ":(" + Z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ee + ")*)|.*)\\)|)",
            ne = new RegExp(J + "+", "g"),
            ie = new RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"),
            re = new RegExp("^" + J + "*," + J + "*"),
            oe = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"),
            ae = new RegExp("=" + J + "*([^\\]'\"]*?)" + J + "*\\]", "g"),
            se = new RegExp(te),
            le = new RegExp("^" + Z + "$"),
            ce = {
                ID: new RegExp("^#(" + Z + ")"),
                CLASS: new RegExp("^\\.(" + Z + ")"),
                TAG: new RegExp("^(" + Z + "|[*])"),
                ATTR: new RegExp("^" + ee),
                PSEUDO: new RegExp("^" + te),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + X + ")$", "i"),
                needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
            },
            ue = /^(?:input|select|textarea|button)$/i,
            de = /^h\d$/i,
            fe = /^[^{]+\{\s*\[native \w/,
            he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            pe = /[+~]/,
            ge = new RegExp("\\\\([\\da-f]{1,6}" + J + "?|(" + J + ")|.)", "ig"),
            me = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ve = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ye = function (e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1)
                    .toString(16) + " " : "\\" + e
            },
            be = function () {
                S()
            },
            _e = d(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            z.apply(V = K.call(Q.childNodes), Q.childNodes), V[Q.childNodes.length].nodeType
        } catch (n) {
            z = {
                apply: V.length ? function (e, t) {
                    Y.apply(e, K.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (s in m = _.support = {}, v = _.isXML = function (e) {
                var t = e && (e.ownerDocument || e)
                    .documentElement;
                return !!t && "HTML" !== t.nodeName
            }, S = _.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : Q;
                return i !== A && 9 === i.nodeType && i.documentElement && (D = (A = i)
                    .documentElement, N = !v(A), Q !== A && (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), m.attributes = r(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), m.getElementsByTagName = r(function (e) {
                        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*")
                            .length
                    }), m.getElementsByClassName = fe.test(A.getElementsByClassName), m.getById = r(function (e) {
                        return D.appendChild(e)
                            .id = P, !A.getElementsByName || !A.getElementsByName(P)
                            .length
                    }), m.getById ? (C.filter.ID = function (e) {
                        var t = e.replace(ge, me);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }, C.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && N) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }) : (C.filter.ID = function (e) {
                        var n = e.replace(ge, me);
                        return function (e) {
                            var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return t && t.value === n
                        }
                    }, C.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && N) {
                            var n, i, r, o = t.getElementById(e);
                            if (o) {
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                            }
                            return []
                        }
                    }), C.find.TAG = m.getElementsByTagName ? function (e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" !== e) return o;
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }, C.find.CLASS = m.getElementsByClassName && function (e, t) {
                        if (void 0 !== t.getElementsByClassName && N) return t.getElementsByClassName(e)
                    }, O = [], I = [], (m.qsa = fe.test(A.querySelectorAll)) && (r(function (e) {
                        D.appendChild(e)
                            .innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']")
                            .length && I.push("[*^$]=" + J + "*(?:''|\"\")"), e.querySelectorAll("[selected]")
                            .length || I.push("\\[" + J + "*(?:value|" + X + ")"), e.querySelectorAll("[id~=" + P + "-]")
                            .length || I.push("~="), e.querySelectorAll(":checked")
                            .length || I.push(":checked"), e.querySelectorAll("a#" + P + "+*")
                            .length || I.push(".#.+[+~]")
                    }), r(function (e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = A.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t)
                            .setAttribute("name", "D"), e.querySelectorAll("[name=d]")
                            .length && I.push("name" + J + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled")
                            .length && I.push(":enabled", ":disabled"), D.appendChild(e)
                            .disabled = !0, 2 !== e.querySelectorAll(":disabled")
                            .length && I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (m.matchesSelector = fe.test(L = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function (e) {
                        m.disconnectedMatch = L.call(e, "*"), L.call(e, "[s!='']:x"), O.push("!=", te)
                    }), I = I.length && new RegExp(I.join("|")), O = O.length && new RegExp(O.join("|")), t = fe.test(D.compareDocumentPosition), H = t || fe.test(D.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, B = t ? function (e, t) {
                        if (e === t) return j = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === Q && H(Q, e) ? -1 : t === A || t.ownerDocument === Q && H(Q, t) ? 1 : k ? G(k, e) - G(k, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return j = !0, 0;
                        var n, i = 0,
                            r = e.parentNode,
                            o = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!r || !o) return e === A ? -1 : t === A ? 1 : r ? -1 : o ? 1 : k ? G(k, e) - G(k, t) : 0;
                        if (r === o) return c(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[i] === s[i];) i++;
                        return i ? c(a[i], s[i]) : a[i] === Q ? -1 : s[i] === Q ? 1 : 0
                    }), A
            }, _.matches = function (e, t) {
                return _(e, null, null, t)
            }, _.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== A && S(e), t = t.replace(ae, "='$1']"), m.matchesSelector && N && !q[t + " "] && (!O || !O.test(t)) && (!I || !I.test(t))) try {
                    var n = L.call(e, t);
                    if (n || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < _(t, A, null, [e])
                    .length
            }, _.contains = function (e, t) {
                return (e.ownerDocument || e) !== A && S(e), H(e, t)
            }, _.attr = function (e, t) {
                (e.ownerDocument || e) !== A && S(e);
                var n = C.attrHandle[t.toLowerCase()],
                    i = n && U.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
                return void 0 !== i ? i : m.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, _.escape = function (e) {
                return (e + "")
                    .replace(ve, ye)
            }, _.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, _.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (j = !m.detectDuplicates, k = !m.sortStable && e.slice(0), e.sort(B), j) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return k = null, e
            }, u = _.getText = function (e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += u(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += u(t);
                return n
            }, (C = _.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: ce,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(ge, me), e[3] = (e[3] || e[4] || e[5] || "")
                            .replace(ge, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || _.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && _.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return ce.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && se.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ge, me)
                            .toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = F[e + " "];
                        return t || (t = new RegExp("(^|" + J + ")" + e + "(" + J + "|$)")) && F(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, r) {
                        return function (e) {
                            var t = _.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(ne, " ") + " ")
                                .indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function (p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var i, r, o, a, s, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                d = b && e.nodeName.toLowerCase(),
                                f = !n && !b,
                                h = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (a = e; a = a[c];)
                                            if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                        l = c = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && f) {
                                    for (h = (s = (i = (r = (o = (a = u)[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === M && i[1]) && i[2], a = s && u.childNodes[s]; a = ++s && a && a[c] || (h = s = 0) || l.pop();)
                                        if (1 === a.nodeType && ++h && a === e) {
                                            r[p] = [M, s, h];
                                            break
                                        }
                                } else if (f && (h = s = (i = (r = (o = (a = e)[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === M && i[1]), !1 === h)
                                    for (;
                                        (a = ++s && a && a[c] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++h || (f && ((r = (o = a[P] || (a[P] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [M, h]), a !== e)););
                                return (h -= m) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = C.pseudos[e] || C.setFilters[e.toLowerCase()] || _.error("unsupported pseudo: " + e);
                        return a[P] ? a(o) : 1 < a.length ? (t = [e, e, "", o], C.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function (e, t) {
                            for (var n, i = a(e, o), r = i.length; r--;) e[n = G(e, i[r])] = !(t[n] = i[r])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: l(function (e) {
                        var i = [],
                            r = [],
                            s = b(e.replace(ie, "$1"));
                        return s[P] ? l(function (e, t, n, i) {
                            for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r))
                        }) : function (e, t, n) {
                            return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: l(function (t) {
                        return function (e) {
                            return 0 < _(t, e)
                                .length
                        }
                    }),
                    contains: l(function (t) {
                        return t = t.replace(ge, me),
                            function (e) {
                                return -1 < (e.textContent || e.innerText || u(e))
                                    .indexOf(t)
                            }
                    }),
                    lang: l(function (n) {
                        return le.test(n || "") || _.error("unsupported lang: " + n), n = n.replace(ge, me)
                            .toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === D
                    },
                    focus: function (e) {
                        return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: i(!1),
                    disabled: i(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function (e) {
                        return de.test(e.nodeName)
                    },
                    input: function (e) {
                        return ue.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: o(function () {
                        return [0]
                    }),
                    last: o(function (e, t) {
                        return [t - 1]
                    }),
                    eq: o(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: o(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: o(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: o(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: o(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            })
            .pseudos.nth = C.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[s] = function (t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(s);
        for (s in {
                submit: !0,
                reset: !0
            }) C.pseudos[s] = function (n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(s);
        return a.prototype = C.filters = C.pseudos, C.setFilters = new a, E = _.tokenize = function (e, t) {
                var n, i, r, o, a, s, l, c = W[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, s = [], l = C.preFilter; a;) {
                    for (o in n && !(i = re.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = oe.exec(a)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(ie, " ")
                        }), a = a.slice(n.length)), C.filter) !(i = ce[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                        value: n,
                        type: o,
                        matches: i
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? _.error(e) : W(e, s)
                    .slice(0)
            }, b = _.compile = function (e, t) {
                var n, m, v, y, b, i, r = [],
                    o = [],
                    a = q[e + " "];
                if (!a) {
                    for (t || (t = E(e)), n = t.length; n--;)(a = g(t[n]))[P] ? r.push(a) : o.push(a);
                    (a = q(e, (m = o, v = r, y = 0 < v.length, b = 0 < m.length, i = function (e, t, n, i, r) {
                        var o, a, s, l = 0,
                            c = "0",
                            u = e && [],
                            d = [],
                            f = x,
                            h = e || b && C.find.TAG("*", r),
                            p = M += null == f ? 1 : Math.random() || .1,
                            g = h.length;
                        for (r && (x = t === A || t || r); c !== g && null != (o = h[c]); c++) {
                            if (b && o) {
                                for (a = 0, t || o.ownerDocument === A || (S(o), n = !N); s = m[a++];)
                                    if (s(o, t || A, n)) {
                                        i.push(o);
                                        break
                                    } r && (M = p)
                            }
                            y && ((o = !s && o) && l--, e && u.push(o))
                        }
                        if (l += c, y && c !== l) {
                            for (a = 0; s = v[a++];) s(u, d, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; c--;) u[c] || d[c] || (d[c] = $.call(i));
                                d = w(d)
                            }
                            z.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && _.uniqueSort(i)
                        }
                        return r && (M = p, x = f), u
                    }, y ? l(i) : i)))
                    .selector = e
                }
                return a
            }, T = _.select = function (e, t, n, i) {
                var r, o, a, s, l, c = "function" == typeof e && e,
                    u = !i && E(e = c.selector || e);
                if (n = n || [], 1 === u.length) {
                    if (2 < (o = u[0] = u[0].slice(0))
                        .length && "ID" === (a = o[0])
                        .type && 9 === t.nodeType && N && C.relative[o[1].type]) {
                        if (!(t = (C.find.ID(a.matches[0].replace(ge, me), t) || [])[0])) return n;
                        c && (t = t.parentNode), e = e.slice(o.shift()
                            .value.length)
                    }
                    for (r = ce.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !C.relative[s = a.type]);)
                        if ((l = C.find[s]) && (i = l(a.matches[0].replace(ge, me), pe.test(o[0].type) && h(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && p(o))) return z.apply(n, i), n;
                            break
                        }
                }
                return (c || b(e, u))(i, t, !N, n, !t || pe.test(e) && h(t.parentNode) || t), n
            }, m.sortStable = P.split("")
            .sort(B)
            .join("") === P, m.detectDuplicates = !!j, S(), m.sortDetached = r(function (e) {
                return 1 & e.compareDocumentPosition(A.createElement("fieldset"))
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || t("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), m.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || t("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), r(function (e) {
                return null == e.getAttribute("disabled")
            }) || t(X, function (e, t, n) {
                var i;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), _
    }(E);
    fe.find = pe, fe.expr = pe.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = pe.uniqueSort, fe.text = pe.getText, fe.isXMLDoc = pe.isXML, fe.contains = pe.contains, fe.escapeSelector = pe.escape;
    var ge = function (e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && fe(e)
                        .is(n)) break;
                    i.push(e)
                } return i
        },
        me = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ve = fe.expr.match.needsContext,
        ye = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    fe.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(fe(e)
                .filter(function () {
                    for (t = 0; t < i; t++)
                        if (fe.contains(r[t], this)) return !0
                }));
            for (n = this.pushStack([]), t = 0; t < i; t++) fe.find(e, r[t], n);
            return 1 < i ? fe.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function (e) {
            return !!t(this, "string" == typeof e && ve.test(e) ? fe(e) : e || [], !1)
                .length
        }
    });
    var be, _e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (fe.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || be, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : ce(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : _e.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n)
            .find(e) : this.constructor(t)
            .find(e);
        if (i[1]) {
            if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), ye.test(i[1]) && fe.isPlainObject(t))
                for (i in t) ce(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (r = X.getElementById(i[2])) && (this[0] = r, this.length = 1), this
    })
    .prototype = fe.fn, be = fe(X);
    var we = /^(?:parents|prev(?:Until|All))/,
        Ce = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function (e) {
            var t = fe(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (fe.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && fe(e);
            if (!ve.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? fe.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ne.call(fe(e), this[0]) : ne.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first()
                .prevAll()
                .length : -1
        },
        add: function (e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ge(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ge(e, "parentNode", n)
        },
        next: function (e) {
            return n(e, "nextSibling")
        },
        prev: function (e) {
            return n(e, "previousSibling")
        },
        nextAll: function (e) {
            return ge(e, "nextSibling")
        },
        prevAll: function (e) {
            return ge(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ge(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ge(e, "previousSibling", n)
        },
        siblings: function (e) {
            return me((e.parentNode || {})
                .firstChild, e)
        },
        children: function (e) {
            return me(e.firstChild)
        },
        contents: function (e) {
            return c(e, "iframe") ? e.contentDocument : (c(e, "template") && (e = e.content || e), fe.merge([], e.childNodes))
        }
    }, function (i, r) {
        fe.fn[i] = function (e, t) {
            var n = fe.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = fe.filter(t, n)), 1 < this.length && (Ce[i] || fe.uniqueSort(n), we.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var Ee = /[^\x20\t\r\n\f]+/g;
    fe.Callbacks = function (i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, fe.each(e.match(Ee) || [], function (e, t) {
            n[t] = !0
        }), n) : fe.extend({}, i);
        var r, t, o, a, s = [],
            l = [],
            c = -1,
            u = function () {
                for (a = a || i.once, o = r = !0; l.length; c = -1)
                    for (t = l.shift(); ++c < s.length;) !1 === s[c].apply(t[0], t[1]) && i.stopOnFalse && (c = s.length, t = !1);
                i.memory || (t = !1), r = !1, a && (s = t ? [] : "")
            },
            d = {
                add: function () {
                    return s && (t && !r && (c = s.length - 1, l.push(t)), function n(e) {
                        fe.each(e, function (e, t) {
                            ce(t) ? i.unique && d.has(t) || s.push(t) : t && t.length && "string" !== m(t) && n(t)
                        })
                    }(arguments), t && !r && u()), this
                },
                remove: function () {
                    return fe.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = fe.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < fe.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = l = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = l = [], t || r || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || [])
                        .slice ? t.slice() : t
                    ], l.push(t), r || u()), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return d
    }, fe.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
                    ["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                a = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return s.done(arguments)
                            .fail(arguments), this
                    },
                    catch: function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var r = arguments;
                        return fe.Deferred(function (i) {
                                fe.each(o, function (e, t) {
                                    var n = ce(r[t[4]]) && r[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && ce(e.promise) ? e.promise()
                                            .progress(i.notify)
                                            .done(i.resolve)
                                            .fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), r = null
                            })
                            .promise()
                    },
                    then: function (t, n, i) {
                        function l(r, o, a, s) {
                            return function () {
                                var n = this,
                                    i = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(r < c)) {
                                            if ((e = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, ce(t) ? s ? t.call(e, l(c, o, u, s), l(c, o, d, s)) : (c++, t.call(e, l(c, o, u, s), l(c, o, d, s), l(c, o, u, o.notifyWith))) : (a !== u && (n = void 0, i = [e]), (s || o.resolveWith)(n, i))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, t.stackTrace), c <= r + 1 && (a !== d && (n = void 0, i = [e]), o.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (fe.Deferred.getStackHook && (t.stackTrace = fe.Deferred.getStackHook()), E.setTimeout(t))
                            }
                        }
                        var c = 0;
                        return fe.Deferred(function (e) {
                                o[0][3].add(l(0, e, ce(i) ? i : u, e.notifyWith)), o[1][3].add(l(0, e, ce(t) ? t : u)), o[2][3].add(l(0, e, ce(n) ? n : d))
                            })
                            .promise()
                    },
                    promise: function (e) {
                        return null != e ? fe.extend(e, a) : a
                    }
                },
                s = {};
            return fe.each(o, function (e, t) {
                var n = t[2],
                    i = t[5];
                a[t[1]] = n.add, i && n.add(function () {
                    r = i
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                r = Z.call(arguments),
                o = fe.Deferred(),
                a = function (t) {
                    return function (e) {
                        i[t] = this, r[t] = 1 < arguments.length ? Z.call(arguments) : e, --n || o.resolveWith(i, r)
                    }
                };
            if (n <= 1 && (l(e, o.done(a(t))
                    .resolve, o.reject, !n), "pending" === o.state() || ce(r[t] && r[t].then))) return o.then();
            for (; t--;) l(r[t], a(t), o.reject);
            return o.promise()
        }
    });
    var Te = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    fe.Deferred.exceptionHook = function (e, t) {
        E.console && E.console.warn && e && Te.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, fe.readyException = function (e) {
        E.setTimeout(function () {
            throw e
        })
    };
    var xe = fe.Deferred();
    fe.fn.ready = function (e) {
        return xe.then(e)
            .catch(function (e) {
                fe.readyException(e)
            }), this
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --fe.readyWait : fe.isReady) || ((fe.isReady = !0) !== e && 0 < --fe.readyWait || xe.resolveWith(X, [fe]))
        }
    }), fe.ready.then = xe.then, "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? E.setTimeout(fe.ready) : (X.addEventListener("DOMContentLoaded", i), E.addEventListener("load", i));
    var ke = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == n;
            if ("object" === m(n))
                for (s in r = !0, n) ke(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, ce(i) || (a = !0), c && (t = a ? (t.call(e, i), null) : (c = t, function (e, t, n) {
                    return c.call(fe(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        je = /^-ms-/,
        Se = /-([a-z])/g,
        Ae = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    o.uid = 1, o.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[f(t)] = n;
            else
                for (i in t) r[f(i)] = t[i];
            return r
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in i ? [t] : t.match(Ee) || [])
                        .length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !fe.isEmptyObject(t)
        }
    };
    var De = new o,
        Ne = new o,
        Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Oe = /[A-Z]/g;
    fe.extend({
        hasData: function (e) {
            return Ne.hasData(e) || De.hasData(e)
        },
        data: function (e, t, n) {
            return Ne.access(e, t, n)
        },
        removeData: function (e, t) {
            Ne.remove(e, t)
        },
        _data: function (e, t, n) {
            return De.access(e, t, n)
        },
        _removeData: function (e, t) {
            De.remove(e, t)
        }
    }), fe.fn.extend({
        data: function (n, e) {
            var t, i, r, o = this[0],
                a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function () {
                Ne.set(this, n)
            }) : ke(this, function (e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = Ne.get(o, n))) return t;
                    if (void 0 !== (t = h(o, n))) return t
                } else this.each(function () {
                    Ne.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = Ne.get(o), 1 === o.nodeType && !De.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (i = a[t].name)
                    .indexOf("data-") && (i = f(i.slice(5)), h(o, i, r[i]));
                De.set(o, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function (e) {
            return this.each(function () {
                Ne.remove(this, e)
            })
        }
    }), fe.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = De.get(e, t), n && (!i || Array.isArray(n) ? i = De.access(e, t, fe.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = fe.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = fe._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function () {
                fe.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return De.get(e, n) || De.access(e, n, {
                empty: fe.Callbacks("once memory")
                    .add(function () {
                        De.remove(e, [t + "queue", n])
                    })
            })
        }
    }), fe.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? fe.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = fe.queue(this, t, n);
                fe._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && fe.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                r = fe.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = De.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Le = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + Le + ")([a-z%]*)$", "i"),
        Pe = ["Top", "Right", "Bottom", "Left"],
        Qe = function (e, t) {
            return "none" === (e = t || e)
                .style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
        },
        Me = function (e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
            return r
        },
        Re = {};
    fe.fn.extend({
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Qe(this) ? fe(this)
                    .show() : fe(this)
                    .hide()
            })
        }
    });
    var Fe = /^(?:checkbox|radio)$/i,
        We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        qe = /^$|^module$|\/(?:java|ecma)script/i,
        Be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
    var Ue, Ve, $e = /<|&#?\w+;/;
    Ue = X.createDocumentFragment()
        .appendChild(X.createElement("div")), (Ve = X.createElement("input"))
        .setAttribute("type", "radio"), Ve.setAttribute("checked", "checked"), Ve.setAttribute("name", "t"), Ue.appendChild(Ve), le.checkClone = Ue.cloneNode(!0)
        .cloneNode(!0)
        .lastChild.checked, Ue.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!Ue.cloneNode(!0)
        .lastChild.defaultValue;
    var Ye = X.documentElement,
        ze = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ge = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = De.get(t);
            if (m)
                for (n.handler && (n = (o = n)
                        .handler, r = o.selector), r && fe.find.matchesSelector(Ye, r), n.guid || (n.guid = fe.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
                        return void 0 !== fe && fe.event.triggered !== e.type ? fe.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "")
                        .match(Ee) || [""])
                    .length; c--;) h = g = (s = Ge.exec(e[c]) || [])[1], p = (s[2] || "")
                    .split(".")
                    .sort(), h && (d = fe.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = fe.event.special[h] || {}, u = fe.extend({
                        type: h,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && fe.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (f = l[h]) || ((f = l[h] = [])
                        .delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), fe.event.global[h] = !0)
        },
        remove: function (e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, h, p, g, m = De.hasData(e) && De.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "")
                        .match(Ee) || [""])
                    .length; c--;)
                    if (h = g = (s = Ge.exec(t[c]) || [])[1], p = (s[2] || "")
                        .split(".")
                        .sort(), h) {
                        for (d = fe.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || fe.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) fe.event.remove(e, h + t[c], n, i, !0);
                fe.isEmptyObject(l) && De.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, r, o, a, s = fe.event.fix(e),
                l = new Array(arguments.length),
                c = (De.get(this, "events") || {})[s.type] || [],
                u = fe.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = fe.event.handlers.call(this, s, c), t = 0;
                    (r = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((fe.event.special[o.origType] || {})
                            .handle || o.handler)
                        .apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function (e, t) {
            var n, i, r, o, a, s = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n])
                            .selector + " "] && (a[r] = i.needsContext ? -1 < fe(r, this)
                            .index(c) : fe.find(r, this, null, [c])
                            .length), a[r] && o.push(i);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(fe.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ce(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[fe.expando] ? e : new fe.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== C() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === C() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && c(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return c(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, fe.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, fe.Event = function (e, t) {
        if (!(this instanceof fe.Event)) return new fe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? a : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[fe.expando] = !0
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = a, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = a, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = a, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, fe.event.addProp), fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, r) {
        fe.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || fe.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), fe.fn.extend({
        on: function (e, t, n, i) {
            return T(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return T(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget)
                .off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), this.each(function () {
                fe.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Je = /<script|<style|<link/i,
        Ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fe.extend({
        htmlPrefilter: function (e) {
            return e.replace(Xe, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, r, o, a, s, l, c, u = e.cloneNode(!0),
                d = fe.contains(e.ownerDocument, e);
            if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (a = y(u), i = 0, r = (o = y(e))
                    .length; i < r; i++) s = o[i], "input" === (c = (l = a[i])
                    .nodeName.toLowerCase()) && Fe.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(u), i = 0, r = o.length; i < r; i++) S(o[i], a[i]);
                else S(e, u);
            return 0 < (a = y(u, "script"))
                .length && b(a, !d && y(e, "script")), u
        },
        cleanData: function (e) {
            for (var t, n, i, r = fe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ae(n)) {
                    if (t = n[De.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
                        n[De.expando] = void 0
                    }
                    n[Ne.expando] && (n[Ne.expando] = void 0)
                }
        }
    }), fe.fn.extend({
        detach: function (e) {
            return D(this, e, !0)
        },
        remove: function (e) {
            return D(this, e)
        },
        text: function (e) {
            return ke(this, function (e) {
                return void 0 === e ? fe.text(this) : this.empty()
                    .each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
            }, null, e, arguments.length)
        },
        append: function () {
            return A(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || x(this, e)
                    .appendChild(e)
            })
        },
        prepend: function () {
            return A(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = x(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return A(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return fe.clone(this, e, t)
            })
        },
        html: function (e) {
            return ke(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Je.test(e) && !Be[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {})
                            .nodeType && (fe.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty()
                    .append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return A(this, arguments, function (e) {
                var t = this.parentNode;
                fe.inArray(this, n) < 0 && (fe.cleanData(y(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        fe.fn[e] = function (e) {
            for (var t, n = [], i = fe(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), fe(i[o])[a](t), te.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var tt = new RegExp("^(" + Le + ")(?!px)[a-z%]+$", "i"),
        nt = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = E), t.getComputedStyle(e)
        },
        it = new RegExp(Pe.join("|"), "i");
    ! function () {
        function e() {
            if (l) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ye.appendChild(s)
                    .appendChild(l);
                var e = E.getComputedStyle(l);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", Ye.removeChild(s), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, r, o, a, s = X.createElement("div"),
            l = X.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0)
            .style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, fe.extend(le, {
                boxSizingReliable: function () {
                    return e(), i
                },
                pixelBoxStyles: function () {
                    return e(), o
                },
                pixelPosition: function () {
                    return e(), n
                },
                reliableMarginLeft: function () {
                    return e(), a
                },
                scrollboxSize: function () {
                    return e(), r
                }
            }))
    }();
    var rt = /^(none|table(?!-c[ea]).+)/,
        ot = /^--/,
        at = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        st = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        lt = ["Webkit", "Moz", "ms"],
        ct = X.createElement("div")
        .style;
    fe.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = N(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = f(t),
                        l = ot.test(t),
                        c = e.style;
                    if (l || (t = O(s)), a = fe.cssHooks[t] || fe.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
                    "string" == (o = typeof n) && (r = He.exec(n)) && r[1] && (n = p(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (fe.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                }
            },
            css: function (e, t, n, i) {
                var r, o, a, s = f(t);
                return ot.test(t) || (t = O(s)), (a = fe.cssHooks[t] || fe.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = N(e, t, i)), "normal" === r && t in st && (r = st[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
            }
        }), fe.each(["height", "width"], function (e, s) {
            fe.cssHooks[s] = {
                get: function (e, t, n) {
                    if (t) return !rt.test(fe.css(e, "display")) || e.getClientRects()
                        .length && e.getBoundingClientRect()
                        .width ? P(e, s, n) : Me(e, at, function () {
                            return P(e, s, n)
                        })
                },
                set: function (e, t, n) {
                    var i, r = nt(e),
                        o = "border-box" === fe.css(e, "boxSizing", !1, r),
                        a = n && H(e, s, n, o, r);
                    return o && le.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - H(e, s, "border", !1, r) - .5)), a && (i = He.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = fe.css(e, s)), L(0, t, a)
                }
            }
        }), fe.cssHooks.marginLeft = I(le.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect()
                .left - Me(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect()
                        .left
                })) + "px"
        }), fe.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (r, o) {
            fe.cssHooks[r + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + Pe[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, "margin" !== r && (fe.cssHooks[r + o].set = L)
        }), fe.fn.extend({
            css: function (e, t) {
                return ke(this, function (e, t, n) {
                    var i, r, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (i = nt(e), r = t.length; a < r; a++) o[t[a]] = fe.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), ((fe.Tween = Q)
            .prototype = {
                constructor: Q,
                init: function (e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (fe.cssNumber[n] ? "" : "px")
                },
                cur: function () {
                    var e = Q.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Q.propHooks._default.get(this)
                },
                run: function (e) {
                    var t, n = Q.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Q.propHooks._default.set(this), this
                }
            })
        .init.prototype = Q.prototype, (Q.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        })
        .scrollTop = Q.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, fe.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, fe.fx = Q.prototype.init, fe.fx.step = {};
    var ut, dt, ft, ht, pt = /^(?:toggle|show|hide)$/,
        gt = /queueHooks$/;
    fe.Animation = fe.extend(q, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, He.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                for (var n, i = 0, r = (e = ce(e) ? (t = e, ["*"]) : e.match(Ee))
                        .length; i < r; i++) n = e[i], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                var i, r, o, a, s, l, c, u, d = "width" in t || "height" in t,
                    f = this,
                    h = {},
                    p = e.style,
                    g = e.nodeType && Qe(e),
                    m = De.get(e, "fxshow");
                for (i in n.queue || (null == (a = fe._queueHooks(e, "fx"))
                        .unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                            a.unqueued || s()
                        }), a.unqueued++, f.always(function () {
                            f.always(function () {
                                a.unqueued--, fe.queue(e, "fx")
                                    .length || a.empty.fire()
                            })
                        })), t)
                    if (r = t[i], pt.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i]) continue;
                            g = !0
                        }
                        h[i] = m && m[i] || fe.style(e, i)
                    } if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(h))
                    for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = De.get(e, "display")), "none" === (u = fe.css(e, "display")) && (c ? u = c : (v([e], !0), c = e.style.display || c, u = fe.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === fe.css(e, "float") && (l || (f.done(function () {
                            p.display = c
                        }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                        })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = De.access(e, "fxshow", {
                        display: c
                    }), o && (m.hidden = !g), g && v([e], !0), f.done(function () {
                        for (i in g || v([e]), De.remove(e, "fxshow"), h) fe.style(e, i, h[i])
                    })), l = W(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function (e, t) {
                t ? q.prefilters.unshift(e) : q.prefilters.push(e)
            }
        }), fe.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? fe.extend({}, e) : {
                complete: n || !n && t || ce(e) && e,
                duration: e,
                easing: n && t || t && !ce(t) && t
            };
            return fe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ce(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
            }, i
        }, fe.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(Qe)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({
                        opacity: t
                    }, e, n, i)
            },
            animate: function (t, e, n, i) {
                var r = fe.isEmptyObject(t),
                    o = fe.speed(e, n, i),
                    a = function () {
                        var e = q(this, fe.extend({}, t), o);
                        (r || De.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (r, e, o) {
                var a = function (e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                };
                return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function () {
                    var e = !0,
                        t = null != r && r + "queueHooks",
                        n = fe.timers,
                        i = De.get(this);
                    if (t) i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && gt.test(t) && a(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || fe.dequeue(this, r)
                })
            },
            finish: function (a) {
                return !1 !== a && (a = a || "fx"), this.each(function () {
                    var e, t = De.get(this),
                        n = t[a + "queue"],
                        i = t[a + "queueHooks"],
                        r = fe.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, fe.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), fe.each(["toggle", "show", "hide"], function (e, i) {
            var r = fe.fn[i];
            fe.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(F(i, !0), e, t, n)
            }
        }), fe.each({
            slideDown: F("show"),
            slideUp: F("hide"),
            slideToggle: F("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, i) {
            fe.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), fe.timers = [], fe.fx.tick = function () {
            var e, t = 0,
                n = fe.timers;
            for (ut = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || fe.fx.stop(), ut = void 0
        }, fe.fx.timer = function (e) {
            fe.timers.push(e), fe.fx.start()
        }, fe.fx.interval = 13, fe.fx.start = function () {
            dt || (dt = !0, M())
        }, fe.fx.stop = function () {
            dt = null
        }, fe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fe.fn.delay = function (i, e) {
            return i = fe.fx && fe.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
                var n = E.setTimeout(e, i);
                t.stop = function () {
                    E.clearTimeout(n)
                }
            })
        }, ft = X.createElement("input"), ht = X.createElement("select")
        .appendChild(X.createElement("option")), ft.type = "checkbox", le.checkOn = "" !== ft.value, le.optSelected = ht.selected, (ft = X.createElement("input"))
        .value = "t", ft.type = "radio", le.radioValue = "t" === ft.value;
    var mt, vt = fe.expr.attrHandle;
    fe.fn.extend({
        attr: function (e, t) {
            return ke(this, fe.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (r = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = fe.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!le.radioValue && "radio" === t && c(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                r = t && t.match(Ee);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), mt = {
        set: function (e, t, n) {
            return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = vt[t] || fe.find.attr;
        vt[t] = function (e, t, n) {
            var i, r, o = t.toLowerCase();
            return n || (r = vt[o], vt[o] = i, i = null != a(e, t, n) ? o : null, vt[o] = r), i
        }
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function (e, t) {
            return ke(this, fe.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[fe.propFix[e] || e]
            })
        }
    }), fe.extend({
        prop: function (e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), le.optSelected || (fe.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fe.propFix[this.toLowerCase()] = this
    }), fe.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (ce(t)) return this.each(function (e) {
                fe(this)
                    .addClass(t.call(this, e, U(this)))
            });
            if ((e = V(t))
                .length)
                for (; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                        for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (s = B(i)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, a, s, l = 0;
            if (ce(t)) return this.each(function (e) {
                fe(this)
                    .removeClass(t.call(this, e, U(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = V(t))
                .length)
                for (; n = this[l++];)
                    if (r = U(n), i = 1 === n.nodeType && " " + B(r) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                        r !== (s = B(i)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (r, t) {
            var o = typeof r,
                a = "string" === o || Array.isArray(r);
            return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : ce(r) ? this.each(function (e) {
                fe(this)
                    .toggleClass(r.call(this, e, U(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if (a)
                    for (t = 0, n = fe(this), i = V(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" !== o || ((e = U(this)) && De.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : De.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + B(U(n)) + " ")
                    .indexOf(t)) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    fe.fn.extend({
        val: function (n) {
            var i, e, r, t = this[0];
            return arguments.length ? (r = ce(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, fe(this)
                    .val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = fe.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = fe.valHooks[t.type] || fe.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(_t, "") : null == e ? "" : e : void 0
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : B(fe.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        l = a ? o + 1 : r.length;
                    for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                        if (((n = r[i])
                                .selected || i === o) && !n.disabled && (!n.parentNode.disabled || !c(n.parentNode, "optgroup"))) {
                            if (t = fe(n)
                                .val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    for (var n, i, r = e.options, o = fe.makeArray(t), a = r.length; a--;)((i = r[a])
                        .selected = -1 < fe.inArray(fe.valHooks.option.get(i), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function () {
        fe.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < fe.inArray(fe(e)
                    .val(), t)
            }
        }, le.checkOn || (fe.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), le.focusin = "onfocusin" in E;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function (e) {
            e.stopPropagation()
        };
    fe.extend(fe.event, {
        trigger: function (e, t, n, i) {
            var r, o, a, s, l, c, u, d, f = [n || X],
                h = oe.call(e, "type") ? e.type : e,
                p = oe.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = a = n = n || X, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(h + fe.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split("."))
                        .shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[fe.expando] ? e : new fe.Event(h, "object" == typeof e && e))
                    .isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : fe.makeArray(t, [e]), u = fe.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !ue(n)) {
                    for (s = u.delegateType || h, wt.test(s + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
                    a === (n.ownerDocument || X) && f.push(a.defaultView || a.parentWindow || E)
                }
                for (r = 0;
                    (o = f[r++]) && !e.isPropagationStopped();) d = o, e.type = 1 < r ? s : u.bindType || h, (c = (De.get(o, "events") || {})[e.type] && De.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && Ae(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !Ae(n) || l && ce(n[h]) && !ue(n) && ((a = n[l]) && (n[l] = null), fe.event.triggered = h, e.isPropagationStopped() && d.addEventListener(h, Ct), n[h](), e.isPropagationStopped() && d.removeEventListener(h, Ct), fe.event.triggered = void 0, a && (n[l] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var i = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(i, null, t)
        }
    }), fe.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0)
        }
    }), le.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        var r = function (e) {
            fe.event.simulate(i, e.target, fe.event.fix(e))
        };
        fe.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = De.access(e, i);
                t || e.addEventListener(n, r, !0), De.access(e, i, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = De.access(e, i) - 1;
                t ? De.access(e, i, t) : (e.removeEventListener(n, r, !0), De.remove(e, i))
            }
        }
    });
    var Et = E.location,
        Tt = Date.now(),
        xt = /\?/;
    fe.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new E.DOMParser)
                .parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror")
            .length || fe.error("Invalid XML: " + e), t
    };
    var kt = /\[\]$/,
        jt = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    fe.param = function (e, t) {
        var n, i = [],
            r = function (e, t) {
                var n = ce(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (n in e) $(n, e[n], t, r);
        return i.join("&")
    }, fe.fn.extend({
        serialize: function () {
            return fe.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                    var e = fe.prop(this, "elements");
                    return e ? fe.makeArray(e) : this
                })
                .filter(function () {
                    var e = this.type;
                    return this.name && !fe(this)
                        .is(":disabled") && At.test(this.nodeName) && !St.test(e) && (this.checked || !Fe.test(e))
                })
                .map(function (e, t) {
                    var n = fe(this)
                        .val();
                    return null == n ? null : Array.isArray(n) ? fe.map(n, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(jt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(jt, "\r\n")
                    }
                })
                .get()
        }
    });
    var Dt = /%20/g,
        Nt = /#.*$/,
        It = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Pt = {},
        Qt = {},
        Mt = "*/".concat("*"),
        Rt = X.createElement("a");
    Rt.href = Et.href, fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? K(K(e, fe.ajaxSettings), t) : K(fe.ajaxSettings, e)
        },
        ajaxPrefilter: Y(Pt),
        ajaxTransport: Y(Qt),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var r, o, a, s, l, c = t;
                p || (p = !0, h && E.clearTimeout(h), u = void 0, f = i || "", C.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in s)
                            if (s[r] && s[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            a || (a = r)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(m, C, n)), s = function (e, t, n, i) {
                    var r, o, a, s, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                    !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, s, C, r), r ? (m.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (fe.lastModified[d] = l), (l = C.getResponseHeader("etag")) && (fe.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, r = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || c) + "", r ? b.resolveWith(v, [o, c, C]) : b.rejectWith(v, [C, c, a]), C.statusCode(w), w = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [C, m, r ? o : a]), _.fireWith(v, [C, c]), g && (y.trigger("ajaxComplete", [C, m]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var u, d, f, i, h, r, p, g, o, a, m = fe.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? fe(v) : fe.event,
                b = fe.Deferred(),
                _ = fe.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                l = {},
                c = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (p) {
                            if (!i)
                                for (i = {}; t = Ot.exec(f);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return p ? f : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == p && (e = l[e.toLowerCase()] = l[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (p) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || c;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (b.promise(C), m.url = ((e || m.url || Et.href) + "")
                .replace(Ht, Et.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*")
                .toLowerCase()
                .match(Ee) || [""], null == m.crossDomain) {
                r = X.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Rt.protocol + "//" + Rt.host != r.protocol + "//" + r.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = fe.param(m.data, m.traditional)), z(Pt, m, t, C), p) return C;
            for (o in (g = fe.event && m.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Lt.test(m.type), d = m.url.replace(Nt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "")
                .indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Dt, "+")) : (a = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (xt.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(It, "$1"), a = (xt.test(d) ? "&" : "?") + "_=" + Tt++ + a), m.url = d + a), m.ifModified && (fe.lastModified[d] && C.setRequestHeader("If-Modified-Since", fe.lastModified[d]), fe.etag[d] && C.setRequestHeader("If-None-Match", fe.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && C.setRequestHeader("Content-Type", m.contentType), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : m.accepts["*"]), m.headers) C.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, C, m) || p)) return C.abort();
            if (c = "abort", _.add(m.complete), C.done(m.success), C.fail(m.error), u = z(Qt, m, t, C)) {
                if (C.readyState = 1, g && y.trigger("ajaxSend", [C, m]), p) return C;
                m.async && 0 < m.timeout && (h = E.setTimeout(function () {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, u.send(s, n)
                } catch (e) {
                    if (p) throw e;
                    n(-1, e)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function (e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function (e, r) {
        fe[r] = function (e, t, n, i) {
            return ce(t) && (i = i || n, n = t, t = void 0), fe.ajax(fe.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function (e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, fe.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ce(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument)
                .eq(0)
                .clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                })
                .append(this)), this
        },
        wrapInner: function (n) {
            return ce(n) ? this.each(function (e) {
                fe(this)
                    .wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = fe(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = ce(t);
            return this.each(function (e) {
                fe(this)
                    .wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e)
                .not("body")
                .each(function () {
                    fe(this)
                        .replaceWith(this.childNodes)
                }), this
        }
    }), fe.expr.pseudos.hidden = function (e) {
        return !fe.expr.pseudos.visible(e)
    }, fe.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects()
            .length)
    }, fe.ajaxSettings.xhr = function () {
        try {
            return new E.XMLHttpRequest
        } catch (e) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        Wt = fe.ajaxSettings.xhr();
    le.cors = !!Wt && "withCredentials" in Wt, le.ajax = Wt = !!Wt, fe.ajaxTransport(function (r) {
        var o, a;
        if (le.cors || Wt && !r.crossDomain) return {
            send: function (e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ft[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function () {
                    4 === i.readyState && E.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), fe.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), fe.ajaxTransport("script", function (n) {
        var i, r;
        if (n.crossDomain) return {
            send: function (e, t) {
                i = fe("<script>")
                    .prop({
                        charset: n.scriptCharset,
                        src: n.url
                    })
                    .on("load error", r = function (e) {
                        i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), X.head.appendChild(i[0])
            },
            abort: function () {
                r && r()
            }
        }
    });
    var qt, Bt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Bt.pop() || fe.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, r, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "")
            .indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ce(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return o || fe.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", r = E[i], E[i] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === r ? fe(E)
                .removeProp(i) : E[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Bt.push(i)), o && ce(r) && r(o[0]), o = r = void 0
        }), "script"
    }), le.createHTMLDocument = ((qt = X.implementation.createHTMLDocument("")
            .body)
        .innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), fe.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((i = (t = X.implementation.createHTMLDocument(""))
                .createElement("base"))
            .href = X.location.href, t.head.appendChild(i)) : t = X), o = !n && [], (r = ye.exec(e)) ? [t.createElement(r[1])] : (r = _([e], t, o), o && o.length && fe(o)
            .remove(), fe.merge([], r.childNodes)));
        var i, r, o
    }, fe.fn.load = function (e, t, n) {
        var i, r, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (i = B(e.slice(s)), e = e.slice(0, s)), ce(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && fe.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            })
            .done(function (e) {
                o = arguments, a.html(i ? fe("<div>")
                    .append(fe.parseHTML(e))
                    .find(i) : e)
            })
            .always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        fe.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), fe.expr.pseudos.animated = function (t) {
        return fe.grep(fe.timers, function (e) {
                return t === e.elem
            })
            .length
    }, fe.offset = {
        setOffset: function (e, t, n) {
            var i, r, o, a, s, l, c = fe.css(e, "position"),
                u = fe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = fe.css(e, "top"), l = fe.css(e, "left"), r = ("absolute" === c || "fixed" === c) && -1 < (o + l)
                .indexOf("auto") ? (a = (i = u.position())
                    .top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), ce(t) && (t = t.call(e, n, fe.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, fe.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                fe.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects()
                .length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === fe.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === fe.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = fe(e)
                            .offset())
                        .top += fe.css(e, "borderTopWidth", !0), r.left += fe.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - fe.css(i, "marginTop", !0),
                    left: t.left - r.left - fe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, r) {
        var o = "pageYOffset" === r;
        fe.fn[t] = function (e) {
            return ke(this, function (e, t, n) {
                var i;
                if (ue(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), fe.each(["top", "left"], function (e, n) {
        fe.cssHooks[n] = I(le.pixelPosition, function (e, t) {
            if (t) return t = N(e, n), tt.test(t) ? fe(e)
                .position()[n] + "px" : t
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        fe.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (i, o) {
            fe.fn[o] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return ke(this, function (e, t, n) {
                    var i;
                    return ue(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? fe.css(e, t, r) : fe.style(e, t, n, r)
                }, s, n ? e : void 0, n)
            }
        })
    }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        fe.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), fe.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e)
                .mouseleave(t || e)
        }
    }), fe.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.proxy = function (e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), ce(e)) return i = Z.call(arguments, 2), (r = function () {
                return e.apply(t || this, i.concat(Z.call(arguments)))
            })
            .guid = e.guid = e.guid || fe.guid++, r
    }, fe.holdReady = function (e) {
        e ? fe.readyWait++ : fe.ready(!0)
    }, fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = c, fe.isFunction = ce, fe.isWindow = ue, fe.camelCase = f, fe.type = m, fe.now = Date.now, fe.isNumeric = function (e) {
        var t = fe.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return fe
    });
    var Vt = E.jQuery,
        $t = E.$;
    return fe.noConflict = function (e) {
        return E.$ === fe && (E.$ = $t), e && E.jQuery === fe && (E.jQuery = Vt), fe
    }, e || (E.jQuery = E.$ = fe), fe
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function (e, t) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function c(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o)
                .filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e)
                        .enumerable
                }))), t.forEach(function (e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }

    function s(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function _(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function f(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function p(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = _(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : p(f(e))
    }

    function g(e) {
        return 11 === e ? Qe : 10 === e ? Me : Qe || Me
    }

    function y(e) {
        if (!e) return document.documentElement;
        for (var t = g(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling)
            .offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === _(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e
    }

    function h(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a, s, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (s = (a = l)
            .nodeName) || "HTML" !== s && y(a.firstElementChild) !== a ? y(l) : l;
        var c = u(e);
        return c.host ? h(c.host, t) : h(e, u(t)
            .host)
    }

    function m(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" !== n && "HTML" !== n) return e[t];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[t]
    }

    function d(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function r(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], g(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function v() {
        var e = document.body,
            t = document.documentElement,
            n = g(10) && getComputedStyle(t);
        return {
            height: r("Height", e, t, n),
            width: r("Width", e, t, n)
        }
    }

    function w(e) {
        return We({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function b(e) {
        var t = {};
        try {
            if (g(10)) {
                t = e.getBoundingClientRect();
                var n = m(e, "top"),
                    i = m(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? v() : {},
            a = o.width || e.clientWidth || r.right - r.left,
            s = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - a,
            c = e.offsetHeight - s;
        if (l || c) {
            var u = _(e);
            l -= d(u, "x"), c -= d(u, "y"), r.width -= l, r.height -= c
        }
        return w(r)
    }

    function C(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = g(10),
            r = "HTML" === t.nodeName,
            o = b(e),
            a = b(t),
            s = p(e),
            l = _(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var d = w({
            top: o.top - a.top - c,
            left: o.left - a.left - u,
            width: o.width,
            height: o.height
        });
        if (d.marginTop = 0, d.marginLeft = 0, !i && r) {
            var f = parseFloat(l.marginTop, 10),
                h = parseFloat(l.marginLeft, 10);
            d.top -= c - f, d.bottom -= c - f, d.left -= u - h, d.right -= u - h, d.marginTop = f, d.marginLeft = h
        }
        return (i && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (d = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = m(t, "top"),
                r = m(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(d, t)), d
    }

    function E(e) {
        if (!e || !e.parentElement || g()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === _(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function T(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            a = r ? E(e) : h(e, t);
        if ("viewport" === i) o = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = C(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                a = t ? 0 : m(n),
                s = t ? 0 : m(n, "left");
            return w({
                top: a - i.top + i.marginTop,
                left: s - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(a, r);
        else {
            var s = void 0;
            "scrollParent" === i ? "BODY" === (s = p(f(t)))
                .nodeName && (s = e.ownerDocument.documentElement) : s = "window" === i ? e.ownerDocument.documentElement : i;
            var l = C(s, a, r);
            if ("HTML" !== s.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === _(t, "position") || e(f(t)))
                }(a)) o = l;
            else {
                var c = v(),
                    u = c.height,
                    d = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = d + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function l(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = T(i, n, o, r),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s)
            .map(function (e) {
                return We({
                    key: e
                }, s[e], {
                    area: (t = s[e])
                        .width * t.height
                });
                var t
            })
            .sort(function (e, t) {
                return t.area - e.area
            }),
            c = l.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function x(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return C(n, i ? E(t) : h(t, n), i)
    }

    function k(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function j(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function S(e, t, n) {
        n = n.split("-")[0];
        var i = k(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[j(s)], r
    }

    function A(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function D(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function (e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function (e) {
                    return e.name === n
                });
                var i = A(e, function (e) {
                    return e.name === n
                });
                return e.indexOf(i)
            }(e, 0, t)))
            .forEach(function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var t = e.function || e.fn;
                e.enabled && s(t) && (n.offsets.popper = w(n.offsets.popper), n.offsets.reference = w(n.offsets.reference), n = t(n, e))
            }), n
    }

    function n(e, n) {
        return e.some(function (e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function N(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0)
                .toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o
        }
        return null
    }

    function I(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function O(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function L(n, i) {
        Object.keys(i)
            .forEach(function (e) {
                var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && O(i[e]) && (t = "px"), n.style[e] = i[e] + t
            })
    }

    function H(e, t, n) {
        var i = A(e, function (e) {
                return e.name === t
            }),
            r = !!i && e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }

    function o(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = Be.indexOf(e),
            i = Be.slice(n + 1)
            .concat(Be.slice(0, n));
        return t ? i.reverse() : i
    }
    for (var P, Q, M, R, F, W, q, B, U, V, $, Y, z, K, G, X, J, Z, ee, te, ne, ie, re, oe, ae, se, le, ce, ue, de, fe, he, pe, ge, me, ve, ye, be, _e, we, Ce, Ee, Te, xe, ke, je = function (i) {
            var t = "transitionend",
                l = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                        for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                        return e
                    },
                    getSelectorFromElement: function (e) {
                        var t = e.getAttribute("data-target");
                        t && "#" !== t || (t = e.getAttribute("href") || "");
                        try {
                            return 0 < i(document)
                                .find(t)
                                .length ? t : null
                        } catch (e) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function (e) {
                        if (!e) return 0;
                        var t = i(e)
                            .css("transition-duration");
                        return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
                    },
                    reflow: function (e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function (e) {
                        i(e)
                            .trigger(t)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(t)
                    },
                    isElement: function (e) {
                        return (e[0] || e)
                            .nodeType
                    },
                    typeCheckConfig: function (e, t, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var r = n[i],
                                    o = t[i],
                                    a = o && l.isElement(o) ? "element" : (s = o, {}.toString.call(s)
                                        .match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(r)
                                    .test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
                            } var s
                    }
                };
            return i.fn.emulateTransitionEnd = function (e) {
                var t = this,
                    n = !1;
                return i(this)
                    .one(l.TRANSITION_END, function () {
                        n = !0
                    }), setTimeout(function () {
                        n || l.triggerTransitionEnd(t)
                    }, e), this
            }, i.event.special[l.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function (e) {
                    if (i(e.target)
                        .is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(t = t && t.hasOwnProperty("default") ? t.default : t), Se = (Q = "alert", R = "." + (M = "bs.alert"), F = (P = t)
            .fn[Q], W = {
                CLOSE: "close" + R,
                CLOSED: "closed" + R,
                CLICK_DATA_API: "click" + R + ".data-api"
            }, q = function () {
                function i(e) {
                    this._element = e
                }
                var e = i.prototype;
                return e.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t)
                        .isDefaultPrevented() || this._removeElement(t)
                }, e.dispose = function () {
                    P.removeData(this._element, M), this._element = null
                }, e._getRootElement = function (e) {
                    var t = je.getSelectorFromElement(e),
                        n = !1;
                    return t && (n = P(t)[0]), n || (n = P(e)
                        .closest(".alert")[0]), n
                }, e._triggerCloseEvent = function (e) {
                    var t = P.Event(W.CLOSE);
                    return P(e)
                        .trigger(t), t
                }, e._removeElement = function (t) {
                    var n = this;
                    if (P(t)
                        .removeClass("show"), P(t)
                        .hasClass("fade")) {
                        var e = je.getTransitionDurationFromElement(t);
                        P(t)
                            .one(je.TRANSITION_END, function (e) {
                                return n._destroyElement(t, e)
                            })
                            .emulateTransitionEnd(e)
                    } else this._destroyElement(t)
                }, e._destroyElement = function (e) {
                    P(e)
                        .detach()
                        .trigger(W.CLOSED)
                        .remove()
                }, i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var e = P(this),
                            t = e.data(M);
                        t || (t = new i(this), e.data(M, t)), "close" === n && t[n](this)
                    })
                }, i._handleDismiss = function (t) {
                    return function (e) {
                        e && e.preventDefault(), t.close(this)
                    }
                }, a(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }]), i
            }(), P(document)
            .on(W.CLICK_DATA_API, '[data-dismiss="alert"]', q._handleDismiss(new q)), P.fn[Q] = q._jQueryInterface, P.fn[Q].Constructor = q, P.fn[Q].noConflict = function () {
                return P.fn[Q] = F, q._jQueryInterface
            }, q), Ae = (U = "button", $ = "." + (V = "bs.button"), Y = ".data-api", z = (B = t)
            .fn[U], K = "active", G = '[data-toggle^="button"]', '[data-toggle="buttons"]', ".active", ".btn", X = {
                CLICK_DATA_API: "click" + $ + Y,
                FOCUS_BLUR_DATA_API: "focus" + $ + Y + " blur" + $ + Y
            }, J = function () {
                function n(e) {
                    this._element = e
                }
                var e = n.prototype;
                return e.toggle = function () {
                    var e = !0,
                        t = !0,
                        n = B(this._element)
                        .closest('[data-toggle="buttons"]')[0];
                    if (n) {
                        var i = B(this._element)
                            .find("input")[0];
                        if (i) {
                            if ("radio" === i.type)
                                if (i.checked && B(this._element)
                                    .hasClass(K)) e = !1;
                                else {
                                    var r = B(n)
                                        .find(".active")[0];
                                    r && B(r)
                                        .removeClass(K)
                                } if (e) {
                                if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                i.checked = !B(this._element)
                                    .hasClass(K), B(i)
                                    .trigger("change")
                            }
                            i.focus(), t = !1
                        }
                    }
                    t && this._element.setAttribute("aria-pressed", !B(this._element)
                            .hasClass(K)), e && B(this._element)
                        .toggleClass(K)
                }, e.dispose = function () {
                    B.removeData(this._element, V), this._element = null
                }, n._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = B(this)
                            .data(V);
                        e || (e = new n(this), B(this)
                            .data(V, e)), "toggle" === t && e[t]()
                    })
                }, a(n, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }]), n
            }(), B(document)
            .on(X.CLICK_DATA_API, G, function (e) {
                e.preventDefault();
                var t = e.target;
                B(t)
                    .hasClass("btn") || (t = B(t)
                        .closest(".btn")), J._jQueryInterface.call(B(t), "toggle")
            })
            .on(X.FOCUS_BLUR_DATA_API, G, function (e) {
                var t = B(e.target)
                    .closest(".btn")[0];
                B(t)
                    .toggleClass("focus", /^focus(in)?$/.test(e.type))
            }), B.fn[U] = J._jQueryInterface, B.fn[U].Constructor = J, B.fn[U].noConflict = function () {
                return B.fn[U] = z, J._jQueryInterface
            }, J), De = (ee = "carousel", ne = "." + (te = "bs.carousel"), ie = ".data-api", re = (Z = t)
            .fn[ee], oe = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0
            }, ae = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, se = "next", le = "prev", ce = {
                SLIDE: "slide" + ne,
                SLID: "slid" + ne,
                KEYDOWN: "keydown" + ne,
                MOUSEENTER: "mouseenter" + ne,
                MOUSELEAVE: "mouseleave" + ne,
                TOUCHEND: "touchend" + ne,
                LOAD_DATA_API: "load" + ne + ie,
                CLICK_DATA_API: "click" + ne + ie
            }, "carousel", ue = "active", "carousel-item-right", "carousel-item-left", "carousel-item-next", "carousel-item-prev", de = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, fe = function () {
                function o(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = Z(e)[0], this._indicatorsElement = Z(this._element)
                        .find(de.INDICATORS)[0], this._addEventListeners()
                }
                var e = o.prototype;
                return e.next = function () {
                    this._isSliding || this._slide(se)
                }, e.nextWhenVisible = function () {
                    !document.hidden && Z(this._element)
                        .is(":visible") && "hidden" !== Z(this._element)
                        .css("visibility") && this.next()
                }, e.prev = function () {
                    this._isSliding || this._slide(le)
                }, e.pause = function (e) {
                    e || (this._isPaused = !0), Z(this._element)
                        .find(de.NEXT_PREV)[0] && (je.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, e.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next)
                        .bind(this), this._config.interval))
                }, e.to = function (e) {
                    var t = this;
                    this._activeElement = Z(this._element)
                        .find(de.ACTIVE_ITEM)[0];
                    var n = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding) Z(this._element)
                            .one(ce.SLID, function () {
                                return t.to(e)
                            });
                        else {
                            if (n === e) return this.pause(), void this.cycle();
                            var i = n < e ? se : le;
                            this._slide(i, this._items[e])
                        }
                }, e.dispose = function () {
                    Z(this._element)
                        .off(ne), Z.removeData(this._element, te), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, e._getConfig = function (e) {
                    return e = c({}, oe, e), je.typeCheckConfig(ee, e, ae), e
                }, e._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && Z(this._element)
                        .on(ce.KEYDOWN, function (e) {
                            return t._keydown(e)
                        }), "hover" === this._config.pause && (Z(this._element)
                            .on(ce.MOUSEENTER, function (e) {
                                return t.pause(e)
                            })
                            .on(ce.MOUSELEAVE, function (e) {
                                return t.cycle(e)
                            }), "ontouchstart" in document.documentElement && Z(this._element)
                            .on(ce.TOUCHEND, function () {
                                t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                                    return t.cycle(e)
                                }, 500 + t._config.interval)
                            }))
                }, e._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                    }
                }, e._getItemIndex = function (e) {
                    return this._items = Z.makeArray(Z(e)
                        .parent()
                        .find(de.ITEM)), this._items.indexOf(e)
                }, e._getItemByDirection = function (e, t) {
                    var n = e === se,
                        i = e === le,
                        r = this._getItemIndex(t),
                        o = this._items.length - 1;
                    if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                    var a = (r + (e === le ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, e._triggerSlideEvent = function (e, t) {
                    var n = this._getItemIndex(e),
                        i = this._getItemIndex(Z(this._element)
                            .find(de.ACTIVE_ITEM)[0]),
                        r = Z.Event(ce.SLIDE, {
                            relatedTarget: e,
                            direction: t,
                            from: i,
                            to: n
                        });
                    return Z(this._element)
                        .trigger(r), r
                }, e._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        Z(this._indicatorsElement)
                            .find(de.ACTIVE)
                            .removeClass(ue);
                        var t = this._indicatorsElement.children[this._getItemIndex(e)];
                        t && Z(t)
                            .addClass(ue)
                    }
                }, e._slide = function (e, t) {
                    var n, i, r, o = this,
                        a = Z(this._element)
                        .find(de.ACTIVE_ITEM)[0],
                        s = this._getItemIndex(a),
                        l = t || a && this._getItemByDirection(e, a),
                        c = this._getItemIndex(l),
                        u = Boolean(this._interval);
                    if (r = e === se ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right"), l && Z(l)
                        .hasClass(ue)) this._isSliding = !1;
                    else if (!this._triggerSlideEvent(l, r)
                        .isDefaultPrevented() && a && l) {
                        this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                        var d = Z.Event(ce.SLID, {
                            relatedTarget: l,
                            direction: r,
                            from: s,
                            to: c
                        });
                        if (Z(this._element)
                            .hasClass("slide")) {
                            Z(l)
                                .addClass(i), je.reflow(l), Z(a)
                                .addClass(n), Z(l)
                                .addClass(n);
                            var f = je.getTransitionDurationFromElement(a);
                            Z(a)
                                .one(je.TRANSITION_END, function () {
                                    Z(l)
                                        .removeClass(n + " " + i)
                                        .addClass(ue), Z(a)
                                        .removeClass(ue + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                                            return Z(o._element)
                                                .trigger(d)
                                        }, 0)
                                })
                                .emulateTransitionEnd(f)
                        } else Z(a)
                            .removeClass(ue), Z(l)
                            .addClass(ue), this._isSliding = !1, Z(this._element)
                            .trigger(d);
                        u && this.cycle()
                    }
                }, o._jQueryInterface = function (i) {
                    return this.each(function () {
                        var e = Z(this)
                            .data(te),
                            t = c({}, oe, Z(this)
                                .data());
                        "object" == typeof i && (t = c({}, t, i));
                        var n = "string" == typeof i ? i : t.slide;
                        if (e || (e = new o(this, t), Z(this)
                                .data(te, e)), "number" == typeof i) e.to(i);
                        else if ("string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        } else t.interval && (e.pause(), e.cycle())
                    })
                }, o._dataApiClickHandler = function (e) {
                    var t = je.getSelectorFromElement(this);
                    if (t) {
                        var n = Z(t)[0];
                        if (n && Z(n)
                            .hasClass("carousel")) {
                            var i = c({}, Z(n)
                                    .data(), Z(this)
                                    .data()),
                                r = this.getAttribute("data-slide-to");
                            r && (i.interval = !1), o._jQueryInterface.call(Z(n), i), r && Z(n)
                                .data(te)
                                .to(r), e.preventDefault()
                        }
                    }
                }, a(o, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return oe
                    }
                }]), o
            }(), Z(document)
            .on(ce.CLICK_DATA_API, de.DATA_SLIDE, fe._dataApiClickHandler), Z(window)
            .on(ce.LOAD_DATA_API, function () {
                Z(de.DATA_RIDE)
                    .each(function () {
                        var e = Z(this);
                        fe._jQueryInterface.call(e, e.data())
                    })
            }), Z.fn[ee] = fe._jQueryInterface, Z.fn[ee].Constructor = fe, Z.fn[ee].noConflict = function () {
                return Z.fn[ee] = re, fe._jQueryInterface
            }, fe), Ne = (pe = "collapse", me = "." + (ge = "bs.collapse"), ve = (he = t)
            .fn[pe], ye = {
                toggle: !0,
                parent: ""
            }, be = {
                toggle: "boolean",
                parent: "(string|element)"
            }, _e = {
                SHOW: "show" + me,
                SHOWN: "shown" + me,
                HIDE: "hide" + me,
                HIDDEN: "hidden" + me,
                CLICK_DATA_API: "click" + me + ".data-api"
            }, we = "show", Ce = "collapse", Ee = "collapsing", Te = "collapsed", "width", xe = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            }, ke = function () {
                function s(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = he.makeArray(he('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = he(xe.DATA_TOGGLE), i = 0; i < n.length; i++) {
                        var r = n[i],
                            o = je.getSelectorFromElement(r);
                        null !== o && 0 < he(o)
                            .filter(e)
                            .length && (this._selector = o, this._triggerArray.push(r))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var e = s.prototype;
                return e.toggle = function () {
                    he(this._element)
                        .hasClass(we) ? this.hide() : this.show()
                }, e.show = function () {
                    var e, t, n = this;
                    if (!(this._isTransitioning || he(this._element)
                            .hasClass(we) || (this._parent && 0 === (e = he.makeArray(he(this._parent)
                                    .find(xe.ACTIVES)
                                    .filter('[data-parent="' + this._config.parent + '"]')))
                                .length && (e = null), e && (t = he(e)
                                    .not(this._selector)
                                    .data(ge)) && t._isTransitioning))) {
                        var i = he.Event(_e.SHOW);
                        if (he(this._element)
                            .trigger(i), !i.isDefaultPrevented()) {
                            e && (s._jQueryInterface.call(he(e)
                                    .not(this._selector), "hide"), t || he(e)
                                .data(ge, null));
                            var r = this._getDimension();
                            he(this._element)
                                .removeClass(Ce)
                                .addClass(Ee), (this._element.style[r] = 0) < this._triggerArray.length && he(this._triggerArray)
                                .removeClass(Te)
                                .attr("aria-expanded", !0), this.setTransitioning(!0);
                            var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                                a = je.getTransitionDurationFromElement(this._element);
                            he(this._element)
                                .one(je.TRANSITION_END, function () {
                                    he(n._element)
                                        .removeClass(Ee)
                                        .addClass(Ce)
                                        .addClass(we), n._element.style[r] = "", n.setTransitioning(!1), he(n._element)
                                        .trigger(_e.SHOWN)
                                })
                                .emulateTransitionEnd(a), this._element.style[r] = this._element[o] + "px"
                        }
                    }
                }, e.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && he(this._element)
                        .hasClass(we)) {
                        var t = he.Event(_e.HIDE);
                        if (he(this._element)
                            .trigger(t), !t.isDefaultPrevented()) {
                            var n = this._getDimension();
                            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", je.reflow(this._element), he(this._element)
                                .addClass(Ee)
                                .removeClass(Ce)
                                .removeClass(we), 0 < this._triggerArray.length)
                                for (var i = 0; i < this._triggerArray.length; i++) {
                                    var r = this._triggerArray[i],
                                        o = je.getSelectorFromElement(r);
                                    null !== o && (he(o)
                                        .hasClass(we) || he(r)
                                        .addClass(Te)
                                        .attr("aria-expanded", !1))
                                }
                            this.setTransitioning(!0), this._element.style[n] = "";
                            var a = je.getTransitionDurationFromElement(this._element);
                            he(this._element)
                                .one(je.TRANSITION_END, function () {
                                    e.setTransitioning(!1), he(e._element)
                                        .removeClass(Ee)
                                        .addClass(Ce)
                                        .trigger(_e.HIDDEN)
                                })
                                .emulateTransitionEnd(a)
                        }
                    }
                }, e.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, e.dispose = function () {
                    he.removeData(this._element, ge), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, e._getConfig = function (e) {
                    return (e = c({}, ye, e))
                        .toggle = Boolean(e.toggle), je.typeCheckConfig(pe, e, be), e
                }, e._getDimension = function () {
                    return he(this._element)
                        .hasClass("width") ? "width" : "height"
                }, e._getParent = function () {
                    var n = this,
                        e = null;
                    je.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = he(this._config.parent)[0];
                    var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return he(e)
                        .find(t)
                        .each(function (e, t) {
                            n._addAriaAndCollapsedClass(s._getTargetFromElement(t), [t])
                        }), e
                }, e._addAriaAndCollapsedClass = function (e, t) {
                    if (e) {
                        var n = he(e)
                            .hasClass(we);
                        0 < t.length && he(t)
                            .toggleClass(Te, !n)
                            .attr("aria-expanded", n)
                    }
                }, s._getTargetFromElement = function (e) {
                    var t = je.getSelectorFromElement(e);
                    return t ? he(t)[0] : null
                }, s._jQueryInterface = function (i) {
                    return this.each(function () {
                        var e = he(this),
                            t = e.data(ge),
                            n = c({}, ye, e.data(), "object" == typeof i && i ? i : {});
                        if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new s(this, n), e.data(ge, t)), "string" == typeof i) {
                            if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                            t[i]()
                        }
                    })
                }, a(s, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ye
                    }
                }]), s
            }(), he(document)
            .on(_e.CLICK_DATA_API, xe.DATA_TOGGLE, function (e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var n = he(this),
                    t = je.getSelectorFromElement(this);
                he(t)
                    .each(function () {
                        var e = he(this),
                            t = e.data(ge) ? "toggle" : n.data();
                        ke._jQueryInterface.call(e, t)
                    })
            }), he.fn[pe] = ke._jQueryInterface, he.fn[pe].Constructor = ke, he.fn[pe].noConflict = function () {
                return he.fn[pe] = ve, ke._jQueryInterface
            }, ke), Ie = "undefined" != typeof window && "undefined" != typeof document, Oe = ["Edge", "Trident", "Firefox"], Le = 0, He = 0; He < Oe.length; He += 1)
        if (Ie && 0 <= navigator.userAgent.indexOf(Oe[He])) {
            Le = 1;
            break
        } var Pe = Ie && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve()
                    .then(function () {
                        t = !1, e()
                    }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, Le))
            }
        },
        Qe = Ie && !(!window.MSInputMethodContext || !document.documentMode),
        Me = Ie && /MSIE 10/.test(navigator.userAgent),
        Re = function () {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        Fe = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        We = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        },
        qe = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Be = qe.slice(3),
        Ue = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                a = r.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                c = s ? "width" : "height",
                                u = {
                                    start: Fe({}, l, o[l]),
                                    end: Fe({}, l, o[l] + o[c] - a[c])
                                };
                            e.offsets.popper = We({}, a, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n, i = t.offset,
                            r = e.placement,
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            u = r.split("-")[0];
                        return n = O(+i) ? [+i, 0] : function (e, r, o, t) {
                            var a = [0, 0],
                                s = -1 !== ["right", "left"].indexOf(u),
                                n = e.split(/(\+|\-)/)
                                .map(function (e) {
                                    return e.trim()
                                }),
                                i = n.indexOf(A(n, function (e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                c = -1 !== i ? [n.slice(0, i)
                                    .concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))
                                ] : [n];
                            return (c = c.map(function (e, t) {
                                    var n = (1 === t ? !s : s) ? "height" : "width",
                                        i = !1;
                                    return e.reduce(function (e, t) {
                                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                                        }, [])
                                        .map(function (e) {
                                            return function (e, t, n, i) {
                                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                    o = +r[1],
                                                    a = r[2];
                                                if (!o) return e;
                                                if (0 !== a.indexOf("%")) return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o;
                                                var s = void 0;
                                                switch (a) {
                                                case "%p":
                                                    s = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    s = i
                                                }
                                                return w(s)[t] / 100 * o
                                            }(e, n, r, o)
                                        })
                                }))
                                .forEach(function (n, i) {
                                    n.forEach(function (e, t) {
                                        O(e) && (a[i] += e * ("-" === n[t - 1] ? -1 : 1))
                                    })
                                }), a
                        }(i, a, s), "left" === u ? (a.top += n[0], a.left -= n[1]) : "right" === u ? (a.top += n[0], a.left += n[1]) : "top" === u ? (a.left += n[0], a.top -= n[1]) : "bottom" === u && (a.left += n[0], a.top += n[1]), e.popper = a, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, i) {
                        var t = i.boundariesElement || y(e.instance.popper);
                        e.instance.reference === t && (t = y(t));
                        var n = N("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            a = r.left,
                            s = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = T(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = a, r[n] = s, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            d = {
                                primary: function (e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Fe({}, e, t)
                                },
                                secondary: function (e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Fe({}, t, n)
                                }
                            };
                        return c.forEach(function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = We({}, u, d[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(r),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            c = a ? "width" : "height";
                        return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, t) {
                        var n;
                        if (!H(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            d = u.toLowerCase(),
                            f = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = k(i)[c];
                        s[h] - p < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - p)), s[d] + p > a[h] && (e.offsets.popper[d] += s[d] + p - a[h]), e.offsets.popper = w(e.offsets.popper);
                        var g = s[d] + s[c] / 2 - p / 2,
                            m = _(e.instance.popper),
                            v = parseFloat(m["margin" + u], 10),
                            y = parseFloat(m["border" + u + "Width"], 10),
                            b = g - e.offsets.popper[d] - v - y;
                        return b = Math.max(Math.min(a[c] - p, b), 0), e.arrowElement = i, e.offsets.arrow = (Fe(n = {}, d, Math.round(b)), Fe(n, f, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (p, g) {
                        if (n(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var m = T(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                            v = p.placement.split("-")[0],
                            y = j(v),
                            b = p.placement.split("-")[1] || "",
                            _ = [];
                        switch (g.behavior) {
                        case "flip":
                            _ = [v, y];
                            break;
                        case "clockwise":
                            _ = o(v);
                            break;
                        case "counterclockwise":
                            _ = o(v, !0);
                            break;
                        default:
                            _ = g.behavior
                        }
                        return _.forEach(function (e, t) {
                            if (v !== e || _.length === t + 1) return p;
                            v = p.placement.split("-")[0], y = j(v);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                a = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom),
                                s = o(i.left) < o(m.left),
                                l = o(i.right) > o(m.right),
                                c = o(i.top) < o(m.top),
                                u = o(i.bottom) > o(m.bottom),
                                d = "left" === v && s || "right" === v && l || "top" === v && c || "bottom" === v && u,
                                f = -1 !== ["top", "bottom"].indexOf(v),
                                h = !!g.flipVariations && (f && "start" === b && s || f && "end" === b && l || !f && "start" === b && c || !f && "end" === b && u);
                            (a || d || h) && (p.flipped = !0, (a || d) && (v = _[t + 1]), h && (b = "end" === (n = b) ? "start" : "start" === n ? "end" : n), p.placement = v + (b ? "-" + b : ""), p.offsets.popper = We({}, p.offsets.popper, S(p.instance.popper, p.offsets.reference, p.placement)), p = D(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = j(t), e.offsets.popper = w(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!H(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = A(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            })
                            .boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = A(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            })
                            .gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a, s, l = void 0 !== o ? o : t.gpuAcceleration,
                            c = b(y(e.instance.popper)),
                            u = {
                                position: r.position
                            },
                            d = {
                                left: Math.floor(r.left),
                                top: Math.round(r.top),
                                bottom: Math.round(r.bottom),
                                right: Math.floor(r.right)
                            },
                            f = "bottom" === n ? "top" : "bottom",
                            h = "right" === i ? "left" : "right",
                            p = N("transform");
                        if (s = "bottom" === f ? -c.height + d.bottom : d.top, a = "right" === h ? -c.width + d.right : d.left, l && p) u[p] = "translate3d(" + a + "px, " + s + "px, 0)", u[f] = 0, u[h] = 0, u.willChange = "transform";
                        else {
                            var g = "bottom" === f ? -1 : 1,
                                m = "right" === h ? -1 : 1;
                            u[f] = s * g, u[h] = a * m, u.willChange = f + ", " + h
                        }
                        var v = {
                            "x-placement": e.placement
                        };
                        return e.attributes = We({}, v, e.attributes), e.styles = We({}, u, e.styles), e.arrowStyles = We({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        var t, n;
                        return L(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n)
                            .forEach(function (e) {
                                !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                            }), e.arrowElement && Object.keys(e.arrowStyles)
                            .length && L(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, i, r) {
                        var o = x(r, t, e, n.positionFixed),
                            a = l(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), L(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ve = function () {
            function o(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, o), this.scheduleUpdate = function () {
                        return requestAnimationFrame(n.update)
                    }, this.update = Pe(this.update.bind(this)), this.options = We({}, o.Defaults, i), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(We({}, o.Defaults.modifiers, i.modifiers))
                    .forEach(function (e) {
                        n.options.modifiers[e] = We({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers)
                    .map(function (e) {
                        return We({
                            name: e
                        }, n.options.modifiers[e])
                    })
                    .sort(function (e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function (e) {
                        e.enabled && s(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                    }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Re(o, [{
                key: "update",
                value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = x(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = l(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = S(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = D(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, n(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[N("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = function (e, t, n, i) {
                            n.updateBound = i, I(e)
                                .addEventListener("resize", n.updateBound, {
                                    passive: !0
                                });
                            var r = p(e);
                            return function e(t, n, i, r) {
                                var o = "BODY" === t.nodeName,
                                    a = o ? t.ownerDocument.defaultView : t;
                                a.addEventListener(n, i, {
                                    passive: !0
                                }), o || e(p(a.parentNode), n, i, r), r.push(a)
                            }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                        }(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return function () {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, I(e)
                            .removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                                e.removeEventListener("scroll", t.updateBound)
                            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }.call(this)
                }
            }]), o
        }();
    Ve.Utils = ("undefined" != typeof window ? window : global)
        .PopperUtils, Ve.placements = qe, Ve.Defaults = Ue;
    var $e, Ye, ze, Ke, Ge, Xe, Je, Ze, et, tt, nt, it, rt, ot, at, st, lt, ct, ut, dt, ft, ht, pt, gt, mt, vt, yt, bt, _t, wt, Ct, Et, Tt, xt, kt, jt, St, At, Dt, Nt, It, Ot, Lt, Ht, Pt, Qt, Mt, Rt, Ft, Wt, qt, Bt, Ut, Vt, $t, Yt, zt, Kt, Gt, Xt, Jt, Zt, en, tn, nn, rn, on, an, sn, ln, cn, un, dn, fn, hn, pn, gn, mn, vn = (Ye = "dropdown", Ke = "." + (ze = "bs.dropdown"), Ge = ".data-api", Xe = ($e = t)
            .fn[Ye], Je = new RegExp("38|40|27"), Ze = {
                HIDE: "hide" + Ke,
                HIDDEN: "hidden" + Ke,
                SHOW: "show" + Ke,
                SHOWN: "shown" + Ke,
                CLICK: "click" + Ke,
                CLICK_DATA_API: "click" + Ke + Ge,
                KEYDOWN_DATA_API: "keydown" + Ke + Ge,
                KEYUP_DATA_API: "keyup" + Ke + Ge
            }, et = "disabled", tt = "show", "dropright", "dropleft", nt = "dropdown-menu-right", "position-static", it = '[data-toggle="dropdown"]', ".dropdown form", rt = ".dropdown-menu", ".navbar-nav", ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", "top-start", "top-end", "bottom-start", "bottom-end", "right-start", "left-start", ot = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            }, at = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, st = function () {
                function l(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var e = l.prototype;
                return e.toggle = function () {
                    if (!this._element.disabled && !$e(this._element)
                        .hasClass(et)) {
                        var e = l._getParentFromElement(this._element),
                            t = $e(this._menu)
                            .hasClass(tt);
                        if (l._clearMenus(), !t) {
                            var n = {
                                    relatedTarget: this._element
                                },
                                i = $e.Event(Ze.SHOW, n);
                            if ($e(e)
                                .trigger(i), !i.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === Ve) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var r = this._element;
                                    "parent" === this._config.reference ? r = e : je.isElement(this._config.reference) && (r = this._config.reference, void 0 !== this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && $e(e)
                                        .addClass("position-static"), this._popper = new Ve(r, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === $e(e)
                                    .closest(".navbar-nav")
                                    .length && $e(document.body)
                                    .children()
                                    .on("mouseover", null, $e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), $e(this._menu)
                                    .toggleClass(tt), $e(e)
                                    .toggleClass(tt)
                                    .trigger($e.Event(Ze.SHOWN, n))
                            }
                        }
                    }
                }, e.dispose = function () {
                    $e.removeData(this._element, ze), $e(this._element)
                        .off(Ke), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
                }, e.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, e._addEventListeners = function () {
                    var t = this;
                    $e(this._element)
                        .on(Ze.CLICK, function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle()
                        })
                }, e._getConfig = function (e) {
                    return e = c({}, this.constructor.Default, $e(this._element)
                        .data(), e), je.typeCheckConfig(Ye, e, this.constructor.DefaultType), e
                }, e._getMenuElement = function () {
                    if (!this._menu) {
                        var e = l._getParentFromElement(this._element);
                        this._menu = $e(e)
                            .find(rt)[0]
                    }
                    return this._menu
                }, e._getPlacement = function () {
                    var e = $e(this._element)
                        .parent(),
                        t = "bottom-start";
                    return e.hasClass("dropup") ? (t = "top-start", $e(this._menu)
                            .hasClass(nt) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : $e(this._menu)
                        .hasClass(nt) && (t = "bottom-end"), t
                }, e._detectNavbar = function () {
                    return 0 < $e(this._element)
                        .closest(".navbar")
                        .length
                }, e._getPopperConfig = function () {
                    var t = this,
                        e = {};
                    "function" == typeof this._config.offset ? e.fn = function (e) {
                        return e.offsets = c({}, e.offsets, t._config.offset(e.offsets) || {}), e
                    } : e.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: e,
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {
                        enabled: !1
                    }), n
                }, l._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = $e(this)
                            .data(ze);
                        if (e || (e = new l(this, "object" == typeof t ? t : null), $e(this)
                                .data(ze, e)), "string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, l._clearMenus = function (e) {
                    if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                        for (var t = $e.makeArray($e(it)), n = 0; n < t.length; n++) {
                            var i = l._getParentFromElement(t[n]),
                                r = $e(t[n])
                                .data(ze),
                                o = {
                                    relatedTarget: t[n]
                                };
                            if (r) {
                                var a = r._menu;
                                if ($e(i)
                                    .hasClass(tt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && $e.contains(i, e.target))) {
                                    var s = $e.Event(Ze.HIDE, o);
                                    $e(i)
                                        .trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && $e(document.body)
                                            .children()
                                            .off("mouseover", null, $e.noop), t[n].setAttribute("aria-expanded", "false"), $e(a)
                                            .removeClass(tt), $e(i)
                                            .removeClass(tt)
                                            .trigger($e.Event(Ze.HIDDEN, o)))
                                }
                            }
                        }
                }, l._getParentFromElement = function (e) {
                    var t, n = je.getSelectorFromElement(e);
                    return n && (t = $e(n)[0]), t || e.parentNode
                }, l._dataApiKeydownHandler = function (e) {
                    if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || $e(e.target)
                            .closest(rt)
                            .length)) : Je.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !$e(this)
                            .hasClass(et))) {
                        var t = l._getParentFromElement(this),
                            n = $e(t)
                            .hasClass(tt);
                        if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                            var i = $e(t)
                                .find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")
                                .get();
                            if (0 !== i.length) {
                                var r = i.indexOf(e.target);
                                38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                            }
                        } else {
                            if (27 === e.which) {
                                var o = $e(t)
                                    .find(it)[0];
                                $e(o)
                                    .trigger("focus")
                            }
                            $e(this)
                                .trigger("click")
                        }
                    }
                }, a(l, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ot
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return at
                    }
                }]), l
            }(), $e(document)
            .on(Ze.KEYDOWN_DATA_API, it, st._dataApiKeydownHandler)
            .on(Ze.KEYDOWN_DATA_API, rt, st._dataApiKeydownHandler)
            .on(Ze.CLICK_DATA_API + " " + Ze.KEYUP_DATA_API, st._clearMenus)
            .on(Ze.CLICK_DATA_API, it, function (e) {
                e.preventDefault(), e.stopPropagation(), st._jQueryInterface.call($e(this), "toggle")
            })
            .on(Ze.CLICK_DATA_API, ".dropdown form", function (e) {
                e.stopPropagation()
            }), $e.fn[Ye] = st._jQueryInterface, $e.fn[Ye].Constructor = st, $e.fn[Ye].noConflict = function () {
                return $e.fn[Ye] = Xe, st._jQueryInterface
            }, st),
        yn = (ct = "modal", dt = "." + (ut = "bs.modal"), ft = (lt = t)
            .fn[ct], ht = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            }, pt = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            }, gt = {
                HIDE: "hide" + dt,
                HIDDEN: "hidden" + dt,
                SHOW: "show" + dt,
                SHOWN: "shown" + dt,
                FOCUSIN: "focusin" + dt,
                RESIZE: "resize" + dt,
                CLICK_DISMISS: "click.dismiss" + dt,
                KEYDOWN_DISMISS: "keydown.dismiss" + dt,
                MOUSEUP_DISMISS: "mouseup.dismiss" + dt,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + dt,
                CLICK_DATA_API: "click" + dt + ".data-api"
            }, "modal-scrollbar-measure", "modal-backdrop", mt = "modal-open", vt = "fade", yt = "show", bt = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            }, _t = function () {
                function r(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = lt(e)
                        .find(bt.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
                }
                var e = r.prototype;
                return e.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, e.show = function (e) {
                    var t = this;
                    if (!this._isTransitioning && !this._isShown) {
                        lt(this._element)
                            .hasClass(vt) && (this._isTransitioning = !0);
                        var n = lt.Event(gt.SHOW, {
                            relatedTarget: e
                        });
                        lt(this._element)
                            .trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), lt(document.body)
                                .addClass(mt), this._setEscapeEvent(), this._setResizeEvent(), lt(this._element)
                                .on(gt.CLICK_DISMISS, bt.DATA_DISMISS, function (e) {
                                    return t.hide(e)
                                }), lt(this._dialog)
                                .on(gt.MOUSEDOWN_DISMISS, function () {
                                    lt(t._element)
                                        .one(gt.MOUSEUP_DISMISS, function (e) {
                                            lt(e.target)
                                                .is(t._element) && (t._ignoreBackdropClick = !0)
                                        })
                                }), this._showBackdrop(function () {
                                    return t._showElement(e)
                                }))
                    }
                }, e.hide = function (e) {
                    var t = this;
                    if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                        var n = lt.Event(gt.HIDE);
                        if (lt(this._element)
                            .trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = lt(this._element)
                                .hasClass(vt);
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), lt(document)
                                .off(gt.FOCUSIN), lt(this._element)
                                .removeClass(yt), lt(this._element)
                                .off(gt.CLICK_DISMISS), lt(this._dialog)
                                .off(gt.MOUSEDOWN_DISMISS), i) {
                                var r = je.getTransitionDurationFromElement(this._element);
                                lt(this._element)
                                    .one(je.TRANSITION_END, function (e) {
                                        return t._hideModal(e)
                                    })
                                    .emulateTransitionEnd(r)
                            } else this._hideModal()
                        }
                    }
                }, e.dispose = function () {
                    lt.removeData(this._element, ut), lt(window, document, this._element, this._backdrop)
                        .off(dt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, e.handleUpdate = function () {
                    this._adjustDialog()
                }, e._getConfig = function (e) {
                    return e = c({}, ht, e), je.typeCheckConfig(ct, e, pt), e
                }, e._showElement = function (e) {
                    var t = this,
                        n = lt(this._element)
                        .hasClass(vt);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && je.reflow(this._element), lt(this._element)
                        .addClass(yt), this._config.focus && this._enforceFocus();
                    var i = lt.Event(gt.SHOWN, {
                            relatedTarget: e
                        }),
                        r = function () {
                            t._config.focus && t._element.focus(), t._isTransitioning = !1, lt(t._element)
                                .trigger(i)
                        };
                    if (n) {
                        var o = je.getTransitionDurationFromElement(this._element);
                        lt(this._dialog)
                            .one(je.TRANSITION_END, r)
                            .emulateTransitionEnd(o)
                    } else r()
                }, e._enforceFocus = function () {
                    var t = this;
                    lt(document)
                        .off(gt.FOCUSIN)
                        .on(gt.FOCUSIN, function (e) {
                            document !== e.target && t._element !== e.target && 0 === lt(t._element)
                                .has(e.target)
                                .length && t._element.focus()
                        })
                }, e._setEscapeEvent = function () {
                    var t = this;
                    this._isShown && this._config.keyboard ? lt(this._element)
                        .on(gt.KEYDOWN_DISMISS, function (e) {
                            27 === e.which && (e.preventDefault(), t.hide())
                        }) : this._isShown || lt(this._element)
                        .off(gt.KEYDOWN_DISMISS)
                }, e._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? lt(window)
                        .on(gt.RESIZE, function (e) {
                            return t.handleUpdate(e)
                        }) : lt(window)
                        .off(gt.RESIZE)
                }, e._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                        lt(document.body)
                            .removeClass(mt), e._resetAdjustments(), e._resetScrollbar(), lt(e._element)
                            .trigger(gt.HIDDEN)
                    })
                }, e._removeBackdrop = function () {
                    this._backdrop && (lt(this._backdrop)
                        .remove(), this._backdrop = null)
                }, e._showBackdrop = function (e) {
                    var t = this,
                        n = lt(this._element)
                        .hasClass(vt) ? vt : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && lt(this._backdrop)
                            .addClass(n), lt(this._backdrop)
                            .appendTo(document.body), lt(this._element)
                            .on(gt.CLICK_DISMISS, function (e) {
                                t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                            }), n && je.reflow(this._backdrop), lt(this._backdrop)
                            .addClass(yt), !e) return;
                        if (!n) return void e();
                        var i = je.getTransitionDurationFromElement(this._backdrop);
                        lt(this._backdrop)
                            .one(je.TRANSITION_END, e)
                            .emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        lt(this._backdrop)
                            .removeClass(yt);
                        var r = function () {
                            t._removeBackdrop(), e && e()
                        };
                        if (lt(this._element)
                            .hasClass(vt)) {
                            var o = je.getTransitionDurationFromElement(this._backdrop);
                            lt(this._backdrop)
                                .one(je.TRANSITION_END, r)
                                .emulateTransitionEnd(o)
                        } else r()
                    } else e && e()
                }, e._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, e._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, e._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, e._setScrollbar = function () {
                    var r = this;
                    if (this._isBodyOverflowing) {
                        lt(bt.FIXED_CONTENT)
                            .each(function (e, t) {
                                var n = lt(t)[0].style.paddingRight,
                                    i = lt(t)
                                    .css("padding-right");
                                lt(t)
                                    .data("padding-right", n)
                                    .css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                            }), lt(bt.STICKY_CONTENT)
                            .each(function (e, t) {
                                var n = lt(t)[0].style.marginRight,
                                    i = lt(t)
                                    .css("margin-right");
                                lt(t)
                                    .data("margin-right", n)
                                    .css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                            }), lt(bt.NAVBAR_TOGGLER)
                            .each(function (e, t) {
                                var n = lt(t)[0].style.marginRight,
                                    i = lt(t)
                                    .css("margin-right");
                                lt(t)
                                    .data("margin-right", n)
                                    .css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
                            });
                        var e = document.body.style.paddingRight,
                            t = lt(document.body)
                            .css("padding-right");
                        lt(document.body)
                            .data("padding-right", e)
                            .css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
                    }
                }, e._resetScrollbar = function () {
                    lt(bt.FIXED_CONTENT)
                        .each(function (e, t) {
                            var n = lt(t)
                                .data("padding-right");
                            void 0 !== n && lt(t)
                                .css("padding-right", n)
                                .removeData("padding-right")
                        }), lt(bt.STICKY_CONTENT + ", " + bt.NAVBAR_TOGGLER)
                        .each(function (e, t) {
                            var n = lt(t)
                                .data("margin-right");
                            void 0 !== n && lt(t)
                                .css("margin-right", n)
                                .removeData("margin-right")
                        });
                    var e = lt(document.body)
                        .data("padding-right");
                    void 0 !== e && lt(document.body)
                        .css("padding-right", e)
                        .removeData("padding-right")
                }, e._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                    var t = e.getBoundingClientRect()
                        .width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, r._jQueryInterface = function (n, i) {
                    return this.each(function () {
                        var e = lt(this)
                            .data(ut),
                            t = c({}, ht, lt(this)
                                .data(), "object" == typeof n && n ? n : {});
                        if (e || (e = new r(this, t), lt(this)
                                .data(ut, e)), "string" == typeof n) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n](i)
                        } else t.show && e.show(i)
                    })
                }, a(r, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return ht
                    }
                }]), r
            }(), lt(document)
            .on(gt.CLICK_DATA_API, bt.DATA_TOGGLE, function (e) {
                var t, n = this,
                    i = je.getSelectorFromElement(this);
                i && (t = lt(i)[0]);
                var r = lt(t)
                    .data(ut) ? "toggle" : c({}, lt(t)
                        .data(), lt(this)
                        .data());
                "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                var o = lt(t)
                    .one(gt.SHOW, function (e) {
                        e.isDefaultPrevented() || o.one(gt.HIDDEN, function () {
                            lt(n)
                                .is(":visible") && n.focus()
                        })
                    });
                _t._jQueryInterface.call(lt(t), r, this)
            }), lt.fn[ct] = _t._jQueryInterface, lt.fn[ct].Constructor = _t, lt.fn[ct].noConflict = function () {
                return lt.fn[ct] = ft, _t._jQueryInterface
            }, _t),
        bn = (Ct = "tooltip", Tt = "." + (Et = "bs.tooltip"), xt = (wt = t)
            .fn[Ct], kt = "bs-tooltip", jt = new RegExp("(^|\\s)" + kt + "\\S+", "g"), Dt = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: (At = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                }, !1),
                selector: (St = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)"
                }, !1),
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, "out", It = {
                HIDE: "hide" + Tt,
                HIDDEN: "hidden" + Tt,
                SHOW: (Nt = "show") + Tt,
                SHOWN: "shown" + Tt,
                INSERTED: "inserted" + Tt,
                CLICK: "click" + Tt,
                FOCUSIN: "focusin" + Tt,
                FOCUSOUT: "focusout" + Tt,
                MOUSEENTER: "mouseenter" + Tt,
                MOUSELEAVE: "mouseleave" + Tt
            }, Ot = "fade", Lt = "show", ".tooltip-inner", Ht = "hover", Pt = "focus", Qt = function () {
                function i(e, t) {
                    if (void 0 === Ve) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }
                var e = i.prototype;
                return e.enable = function () {
                    this._isEnabled = !0
                }, e.disable = function () {
                    this._isEnabled = !1
                }, e.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, e.toggle = function (e) {
                    if (this._isEnabled)
                        if (e) {
                            var t = this.constructor.DATA_KEY,
                                n = wt(e.currentTarget)
                                .data(t);
                            n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), wt(e.currentTarget)
                                .data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                        } else {
                            if (wt(this.getTipElement())
                                .hasClass(Lt)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                }, e.dispose = function () {
                    clearTimeout(this._timeout), wt.removeData(this.element, this.constructor.DATA_KEY), wt(this.element)
                        .off(this.constructor.EVENT_KEY), wt(this.element)
                        .closest(".modal")
                        .off("hide.bs.modal"), this.tip && wt(this.tip)
                        .remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, e.show = function () {
                    var t = this;
                    if ("none" === wt(this.element)
                        .css("display")) throw new Error("Please use show on visible elements");
                    var e = wt.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        wt(this.element)
                            .trigger(e);
                        var n = wt.contains(this.element.ownerDocument.documentElement, this.element);
                        if (e.isDefaultPrevented() || !n) return;
                        var i = this.getTipElement(),
                            r = je.getUID(this.constructor.NAME);
                        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && wt(i)
                            .addClass(Ot);
                        var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                            a = this._getAttachment(o);
                        this.addAttachmentClass(a);
                        var s = !1 === this.config.container ? document.body : wt(this.config.container);
                        wt(i)
                            .data(this.constructor.DATA_KEY, this), wt.contains(this.element.ownerDocument.documentElement, this.tip) || wt(i)
                            .appendTo(s), wt(this.element)
                            .trigger(this.constructor.Event.INSERTED), this._popper = new Ve(this.element, i, {
                                placement: a,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: ".arrow"
                                    },
                                    preventOverflow: {
                                        boundariesElement: this.config.boundary
                                    }
                                },
                                onCreate: function (e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                },
                                onUpdate: function (e) {
                                    t._handlePopperPlacementChange(e)
                                }
                            }), wt(i)
                            .addClass(Lt), "ontouchstart" in document.documentElement && wt(document.body)
                            .children()
                            .on("mouseover", null, wt.noop);
                        var l = function () {
                            t.config.animation && t._fixTransition();
                            var e = t._hoverState;
                            t._hoverState = null, wt(t.element)
                                .trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                        };
                        if (wt(this.tip)
                            .hasClass(Ot)) {
                            var c = je.getTransitionDurationFromElement(this.tip);
                            wt(this.tip)
                                .one(je.TRANSITION_END, l)
                                .emulateTransitionEnd(c)
                        } else l()
                    }
                }, e.hide = function (e) {
                    var t = this,
                        n = this.getTipElement(),
                        i = wt.Event(this.constructor.Event.HIDE),
                        r = function () {
                            t._hoverState !== Nt && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), wt(t.element)
                                .trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                        };
                    if (wt(this.element)
                        .trigger(i), !i.isDefaultPrevented()) {
                        if (wt(n)
                            .removeClass(Lt), "ontouchstart" in document.documentElement && wt(document.body)
                            .children()
                            .off("mouseover", null, wt.noop), this._activeTrigger.click = !1, this._activeTrigger[Pt] = !1, this._activeTrigger[Ht] = !1, wt(this.tip)
                            .hasClass(Ot)) {
                            var o = je.getTransitionDurationFromElement(n);
                            wt(n)
                                .one(je.TRANSITION_END, r)
                                .emulateTransitionEnd(o)
                        } else r();
                        this._hoverState = ""
                    }
                }, e.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, e.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, e.addAttachmentClass = function (e) {
                    wt(this.getTipElement())
                        .addClass(kt + "-" + e)
                }, e.getTipElement = function () {
                    return this.tip = this.tip || wt(this.config.template)[0], this.tip
                }, e.setContent = function () {
                    var e = wt(this.getTipElement());
                    this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(Ot + " " + Lt)
                }, e.setElementContent = function (e, t) {
                    var n = this.config.html;
                    "object" == typeof t && (t.nodeType || t.jquery) ? n ? wt(t)
                        .parent()
                        .is(e) || e.empty()
                        .append(t) : e.text(wt(t)
                            .text()) : e[n ? "html" : "text"](t)
                }, e.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, e._getAttachment = function (e) {
                    return At[e.toUpperCase()]
                }, e._setListeners = function () {
                    var i = this;
                    this.config.trigger.split(" ")
                        .forEach(function (e) {
                            if ("click" === e) wt(i.element)
                                .on(i.constructor.Event.CLICK, i.config.selector, function (e) {
                                    return i.toggle(e)
                                });
                            else if ("manual" !== e) {
                                var t = e === Ht ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                                    n = e === Ht ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                wt(i.element)
                                    .on(t, i.config.selector, function (e) {
                                        return i._enter(e)
                                    })
                                    .on(n, i.config.selector, function (e) {
                                        return i._leave(e)
                                    })
                            }
                            wt(i.element)
                                .closest(".modal")
                                .on("hide.bs.modal", function () {
                                    return i.hide()
                                })
                        }), this.config.selector ? this.config = c({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                }, e._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, e._enter = function (e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || wt(e.currentTarget)
                        .data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), wt(e.currentTarget)
                        .data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Pt : Ht] = !0), wt(t.getTipElement())
                        .hasClass(Lt) || t._hoverState === Nt ? t._hoverState = Nt : (clearTimeout(t._timeout), t._hoverState = Nt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                            t._hoverState === Nt && t.show()
                        }, t.config.delay.show) : t.show())
                }, e._leave = function (e, t) {
                    var n = this.constructor.DATA_KEY;
                    (t = t || wt(e.currentTarget)
                        .data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), wt(e.currentTarget)
                        .data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Pt : Ht] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                        "out" === t._hoverState && t.hide()
                    }, t.config.delay.hide) : t.hide())
                }, e._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                    return !1
                }, e._getConfig = function (e) {
                    return "number" == typeof (e = c({}, this.constructor.Default, wt(this.element)
                            .data(), "object" == typeof e && e ? e : {}))
                        .delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), je.typeCheckConfig(Ct, e, this.constructor.DefaultType), e
                }, e._getDelegateConfig = function () {
                    var e = {};
                    if (this.config)
                        for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, e._cleanTipClass = function () {
                    var e = wt(this.getTipElement()),
                        t = e.attr("class")
                        .match(jt);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, e._handlePopperPlacementChange = function (e) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, e._fixTransition = function () {
                    var e = this.getTipElement(),
                        t = this.config.animation;
                    null === e.getAttribute("x-placement") && (wt(e)
                        .removeClass(Ot), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                }, i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var e = wt(this)
                            .data(Et),
                            t = "object" == typeof n && n;
                        if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), wt(this)
                                .data(Et, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, a(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Dt
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Ct
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return Et
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return It
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return Tt
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return St
                    }
                }]), i
            }(), wt.fn[Ct] = Qt._jQueryInterface, wt.fn[Ct].Constructor = Qt, wt.fn[Ct].noConflict = function () {
                return wt.fn[Ct] = xt, Qt._jQueryInterface
            }, Qt),
        _n = (Rt = "popover", Wt = "." + (Ft = "bs.popover"), qt = (Mt = t)
            .fn[Rt], Bt = "bs-popover", Ut = new RegExp("(^|\\s)" + Bt + "\\S+", "g"), Vt = c({}, bn.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), $t = c({}, bn.DefaultType, {
                content: "(string|element|function)"
            }), ".popover-header", ".popover-body", Yt = {
                HIDE: "hide" + Wt,
                HIDDEN: "hidden" + Wt,
                SHOW: "show" + Wt,
                SHOWN: "shown" + Wt,
                INSERTED: "inserted" + Wt,
                CLICK: "click" + Wt,
                FOCUSIN: "focusin" + Wt,
                FOCUSOUT: "focusout" + Wt,
                MOUSEENTER: "mouseenter" + Wt,
                MOUSELEAVE: "mouseleave" + Wt
            }, zt = function (e) {
                function i() {
                    return e.apply(this, arguments) || this
                }
                var t, n;
                n = e, (t = i)
                    .prototype = Object.create(n.prototype), (t.prototype.constructor = t)
                    .__proto__ = n;
                var r = i.prototype;
                return r.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, r.addAttachmentClass = function (e) {
                    Mt(this.getTipElement())
                        .addClass(Bt + "-" + e)
                }, r.getTipElement = function () {
                    return this.tip = this.tip || Mt(this.config.template)[0], this.tip
                }, r.setContent = function () {
                    var e = Mt(this.getTipElement());
                    this.setElementContent(e.find(".popover-header"), this.getTitle());
                    var t = this._getContent();
                    "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
                }, r._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, r._cleanTipClass = function () {
                    var e = Mt(this.getTipElement()),
                        t = e.attr("class")
                        .match(Ut);
                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                }, i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var e = Mt(this)
                            .data(Ft),
                            t = "object" == typeof n ? n : null;
                        if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Mt(this)
                                .data(Ft, e)), "string" == typeof n)) {
                            if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                            e[n]()
                        }
                    })
                }, a(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return Vt
                    }
                }, {
                    key: "NAME",
                    get: function () {
                        return Rt
                    }
                }, {
                    key: "DATA_KEY",
                    get: function () {
                        return Ft
                    }
                }, {
                    key: "Event",
                    get: function () {
                        return Yt
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function () {
                        return Wt
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return $t
                    }
                }]), i
            }(bn), Mt.fn[Rt] = zt._jQueryInterface, Mt.fn[Rt].Constructor = zt, Mt.fn[Rt].noConflict = function () {
                return Mt.fn[Rt] = qt, zt._jQueryInterface
            }, zt),
        wn = (Gt = "scrollspy", Jt = "." + (Xt = "bs.scrollspy"), Zt = (Kt = t)
            .fn[Gt], en = {
                offset: 10,
                method: "auto",
                target: ""
            }, tn = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            }, nn = {
                ACTIVATE: "activate" + Jt,
                SCROLL: "scroll" + Jt,
                LOAD_DATA_API: "load" + Jt + ".data-api"
            }, "dropdown-item", rn = "active", on = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, an = "position", sn = function () {
                function n(e, t) {
                    var n = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + on.NAV_LINKS + "," + this._config.target + " " + on.LIST_ITEMS + "," + this._config.target + " " + on.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Kt(this._scrollElement)
                        .on(nn.SCROLL, function (e) {
                            return n._process(e)
                        }), this.refresh(), this._process()
                }
                var e = n.prototype;
                return e.refresh = function () {
                    var t = this,
                        e = this._scrollElement === this._scrollElement.window ? "offset" : an,
                        r = "auto" === this._config.method ? e : this._config.method,
                        o = r === an ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Kt.makeArray(Kt(this._selector))
                        .map(function (e) {
                            var t, n = je.getSelectorFromElement(e);
                            if (n && (t = Kt(n)[0]), t) {
                                var i = t.getBoundingClientRect();
                                if (i.width || i.height) return [Kt(t)[r]()
                                    .top + o, n
                                ]
                            }
                            return null
                        })
                        .filter(function (e) {
                            return e
                        })
                        .sort(function (e, t) {
                            return e[0] - t[0]
                        })
                        .forEach(function (e) {
                            t._offsets.push(e[0]), t._targets.push(e[1])
                        })
                }, e.dispose = function () {
                    Kt.removeData(this._element, Xt), Kt(this._scrollElement)
                        .off(Jt), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, e._getConfig = function (e) {
                    if ("string" != typeof (e = c({}, en, "object" == typeof e && e ? e : {}))
                        .target) {
                        var t = Kt(e.target)
                            .attr("id");
                        t || (t = je.getUID(Gt), Kt(e.target)
                            .attr("id", t)), e.target = "#" + t
                    }
                    return je.typeCheckConfig(Gt, e, tn), e
                }, e._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, e._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, e._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect()
                        .height
                }, e._process = function () {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), n <= e) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, e._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var e = this._selector.split(",");
                    e = e.map(function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    });
                    var n = Kt(e.join(","));
                    n.hasClass("dropdown-item") ? (n.closest(on.DROPDOWN)
                            .find(on.DROPDOWN_TOGGLE)
                            .addClass(rn), n.addClass(rn)) : (n.addClass(rn), n.parents(on.NAV_LIST_GROUP)
                            .prev(on.NAV_LINKS + ", " + on.LIST_ITEMS)
                            .addClass(rn), n.parents(on.NAV_LIST_GROUP)
                            .prev(on.NAV_ITEMS)
                            .children(on.NAV_LINKS)
                            .addClass(rn)), Kt(this._scrollElement)
                        .trigger(nn.ACTIVATE, {
                            relatedTarget: t
                        })
                }, e._clear = function () {
                    Kt(this._selector)
                        .filter(on.ACTIVE)
                        .removeClass(rn)
                }, n._jQueryInterface = function (t) {
                    return this.each(function () {
                        var e = Kt(this)
                            .data(Xt);
                        if (e || (e = new n(this, "object" == typeof t && t), Kt(this)
                                .data(Xt, e)), "string" == typeof t) {
                            if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                            e[t]()
                        }
                    })
                }, a(n, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return en
                    }
                }]), n
            }(), Kt(window)
            .on(nn.LOAD_DATA_API, function () {
                for (var e = Kt.makeArray(Kt(on.DATA_SPY)), t = e.length; t--;) {
                    var n = Kt(e[t]);
                    sn._jQueryInterface.call(n, n.data())
                }
            }), Kt.fn[Gt] = sn._jQueryInterface, Kt.fn[Gt].Constructor = sn, Kt.fn[Gt].noConflict = function () {
                return Kt.fn[Gt] = Zt, sn._jQueryInterface
            }, sn),
        Cn = (un = "." + (cn = "bs.tab"), dn = (ln = t)
            .fn.tab, fn = {
                HIDE: "hide" + un,
                HIDDEN: "hidden" + un,
                SHOW: "show" + un,
                SHOWN: "shown" + un,
                CLICK_DATA_API: "click" + un + ".data-api"
            }, "dropdown-menu", hn = "active", "disabled", "show", ".dropdown", ".nav, .list-group", pn = ".active", gn = "> li > .active", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', ".dropdown-toggle", "> .dropdown-menu .active", mn = function () {
                function i(e) {
                    this._element = e
                }
                var e = i.prototype;
                return e.show = function () {
                    var n = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && ln(this._element)
                            .hasClass(hn) || ln(this._element)
                            .hasClass("disabled"))) {
                        var e, i, t = ln(this._element)
                            .closest(".nav, .list-group")[0],
                            r = je.getSelectorFromElement(this._element);
                        if (t) {
                            var o = "UL" === t.nodeName ? gn : pn;
                            i = (i = ln.makeArray(ln(t)
                                .find(o)))[i.length - 1]
                        }
                        var a = ln.Event(fn.HIDE, {
                                relatedTarget: this._element
                            }),
                            s = ln.Event(fn.SHOW, {
                                relatedTarget: i
                            });
                        if (i && ln(i)
                            .trigger(a), ln(this._element)
                            .trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                            r && (e = ln(r)[0]), this._activate(this._element, t);
                            var l = function () {
                                var e = ln.Event(fn.HIDDEN, {
                                        relatedTarget: n._element
                                    }),
                                    t = ln.Event(fn.SHOWN, {
                                        relatedTarget: i
                                    });
                                ln(i)
                                    .trigger(e), ln(n._element)
                                    .trigger(t)
                            };
                            e ? this._activate(e, e.parentNode, l) : l()
                        }
                    }
                }, e.dispose = function () {
                    ln.removeData(this._element, cn), this._element = null
                }, e._activate = function (e, t, n) {
                    var i = this,
                        r = ("UL" === t.nodeName ? ln(t)
                            .find(gn) : ln(t)
                            .children(pn))[0],
                        o = n && r && ln(r)
                        .hasClass("fade"),
                        a = function () {
                            return i._transitionComplete(e, r, n)
                        };
                    if (r && o) {
                        var s = je.getTransitionDurationFromElement(r);
                        ln(r)
                            .one(je.TRANSITION_END, a)
                            .emulateTransitionEnd(s)
                    } else a()
                }, e._transitionComplete = function (e, t, n) {
                    if (t) {
                        ln(t)
                            .removeClass("show " + hn);
                        var i = ln(t.parentNode)
                            .find("> .dropdown-menu .active")[0];
                        i && ln(i)
                            .removeClass(hn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    if (ln(e)
                        .addClass(hn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), je.reflow(e), ln(e)
                        .addClass("show"), e.parentNode && ln(e.parentNode)
                        .hasClass("dropdown-menu")) {
                        var r = ln(e)
                            .closest(".dropdown")[0];
                        r && ln(r)
                            .find(".dropdown-toggle")
                            .addClass(hn), e.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var e = ln(this),
                            t = e.data(cn);
                        if (t || (t = new i(this), e.data(cn, t)), "string" == typeof n) {
                            if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                            t[n]()
                        }
                    })
                }, a(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.1"
                    }
                }]), i
            }(), ln(document)
            .on(fn.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
                e.preventDefault(), mn._jQueryInterface.call(ln(this), "show")
            }), ln.fn.tab = mn._jQueryInterface, ln.fn.tab.Constructor = mn, ln.fn.tab.noConflict = function () {
                return ln.fn.tab = dn, mn._jQueryInterface
            }, mn);
    ! function (e) {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = je, e.Alert = Se, e.Button = Ae, e.Carousel = De, e.Collapse = Ne, e.Dropdown = vn, e.Modal = yn, e.Popover = _n, e.Scrollspy = wn, e.Tab = Cn, e.Tooltip = bn, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function (C) {
    C.fn.extend({
        slimScroll: function (_) {
            var w = C.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, _);
            return this.each(function () {
                function e(e) {
                    if (a) {
                        var t = 0;
                        (e = e || window.event)
                        .wheelDelta && (t = -e.wheelDelta / 120), e.detail && (t = e.detail / 3), C(e.target || e.srcTarget || e.srcElement)
                            .closest("." + w.wrapperClass)
                            .is(g.parent()) && i(t, !0), e.preventDefault && !p && e.preventDefault(), p || (e.returnValue = !1)
                    }
                }

                function i(e, t, n) {
                    p = !1;
                    var i = g.outerHeight() - v.outerHeight();
                    t && (t = parseInt(v.css("top")) + e * parseInt(w.wheelStep) / 100 * v.outerHeight(), t = Math.min(Math.max(t, 0), i), t = 0 < e ? Math.ceil(t) : Math.floor(t), v.css({
                        top: t + "px"
                    })), t = (f = parseInt(v.css("top")) / (g.outerHeight() - v.outerHeight())) * (g[0].scrollHeight - g.outerHeight()), n && (e = (t = e) / g[0].scrollHeight * g.outerHeight(), e = Math.min(Math.max(e, 0), i), v.css({
                        top: e + "px"
                    })), g.scrollTop(t), g.trigger("slimscrolling", ~~t), r(), o()
                }

                function n() {
                    d = Math.max(g.outerHeight() / g[0].scrollHeight * g.outerHeight(), 30), v.css({
                        height: d + "px"
                    });
                    var e = d == g.outerHeight() ? "none" : "block";
                    v.css({
                        display: e
                    })
                }

                function r() {
                    n(), clearTimeout(c), f == ~~f ? (p = w.allowPageScroll, h != f && g.trigger("slimscroll", 0 == ~~f ? "top" : "bottom")) : p = !1, h = f, d >= g.outerHeight() ? p = !0 : (v.stop(!0, !0)
                        .fadeIn("fast"), w.railVisible && y.stop(!0, !0)
                        .fadeIn("fast"))
                }

                function o() {
                    w.alwaysVisible || (c = setTimeout(function () {
                        w.disableFadeOut && a || s || l || (v.fadeOut("slow"), y.fadeOut("slow"))
                    }, 1e3))
                }
                var a, s, l, c, u, d, f, h, p = !1,
                    g = C(this);
                if (g.parent()
                    .hasClass(w.wrapperClass)) {
                    var m = g.scrollTop(),
                        v = g.siblings("." + w.barClass),
                        y = g.siblings("." + w.railClass);
                    if (n(), C.isPlainObject(_)) {
                        if ("height" in _ && "auto" == _.height ? (g.parent()
                                .css("height", "auto"), g.css("height", "auto"), b = g.parent()
                                .parent()
                                .height(), g.parent()
                                .css("height", b), g.css("height", b)) : "height" in _ && (b = _.height, g.parent()
                                .css("height", b), g.css("height", b)), "scrollTo" in _) m = parseInt(w.scrollTo);
                        else if ("scrollBy" in _) m += parseInt(w.scrollBy);
                        else if ("destroy" in _) return v.remove(), y.remove(), void g.unwrap();
                        i(m, !1, !0)
                    }
                } else if (!(C.isPlainObject(_) && "destroy" in _)) {
                    w.height = "auto" == w.height ? g.parent()
                        .height() : w.height, m = C("<div></div>")
                        .addClass(w.wrapperClass)
                        .css({
                            position: "relative",
                            overflow: "hidden",
                            width: w.width,
                            height: w.height
                        }), g.css({
                            overflow: "hidden",
                            width: w.width,
                            height: w.height
                        }), y = C("<div></div>")
                        .addClass(w.railClass)
                        .css({
                            width: w.size,
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            display: w.alwaysVisible && w.railVisible ? "block" : "none",
                            "border-radius": w.railBorderRadius,
                            background: w.railColor,
                            opacity: w.railOpacity,
                            zIndex: 90
                        }), v = C("<div></div>")
                        .addClass(w.barClass)
                        .css({
                            background: w.color,
                            width: w.size,
                            position: "absolute",
                            top: 0,
                            opacity: w.opacity,
                            display: w.alwaysVisible ? "block" : "none",
                            "border-radius": w.borderRadius,
                            BorderRadius: w.borderRadius,
                            MozBorderRadius: w.borderRadius,
                            WebkitBorderRadius: w.borderRadius,
                            zIndex: 99
                        });
                    var b = "right" == w.position ? {
                        right: w.distance
                    } : {
                        left: w.distance
                    };
                    y.css(b), v.css(b), g.wrap(m), g.parent()
                        .append(v), g.parent()
                        .append(y), w.railDraggable && v.bind("mousedown", function (e) {
                            var n = C(document);
                            return l = !0, t = parseFloat(v.css("top")), pageY = e.pageY, n.bind("mousemove.slimscroll", function (e) {
                                currTop = t + e.pageY - pageY, v.css("top", currTop), i(0, v.position()
                                    .top, !1)
                            }), n.bind("mouseup.slimscroll", function (e) {
                                l = !1, o(), n.unbind(".slimscroll")
                            }), !1
                        })
                        .bind("selectstart.slimscroll", function (e) {
                            return e.stopPropagation(), e.preventDefault(), !1
                        }), y.hover(function () {
                            r()
                        }, function () {
                            o()
                        }), v.hover(function () {
                            s = !0
                        }, function () {
                            s = !1
                        }), g.hover(function () {
                            a = !0, r(), o()
                        }, function () {
                            a = !1, o()
                        }), g.bind("touchstart", function (e, t) {
                            e.originalEvent.touches.length && (u = e.originalEvent.touches[0].pageY)
                        }), g.bind("touchmove", function (e) {
                            p || e.originalEvent.preventDefault(), e.originalEvent.touches.length && (i((u - e.originalEvent.touches[0].pageY) / w.touchScrollStep, !0), u = e.originalEvent.touches[0].pageY)
                        }), n(), "bottom" === w.start ? (v.css({
                            top: g.outerHeight() - v.outerHeight()
                        }), i(0, !0)) : "top" !== w.start && (i(C(w.start)
                            .position()
                            .top, null, !0), w.alwaysVisible || v.hide()), window.addEventListener ? (this.addEventListener("DOMMouseScroll", e, !1), this.addEventListener("mousewheel", e, !1)) : document.attachEvent("onmousewheel", e)
                }
            }), this
        }
    }), C.fn.extend({
        slimscroll: C.fn.slimScroll
    })
}(jQuery),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (c) {
    "use strict";
    var e, r = function (e, t) {
            var n, i, r = t.scrollTop(),
                o = t.prop("scrollHeight"),
                a = t.prop("clientHeight"),
                s = e.originalEvent.wheelDelta || -1 * e.originalEvent.detail || -1 * e.originalEvent.deltaY,
                l = 0;
            return "wheel" === e.type ? (n = t.height() / c(window)
                .height(), l = e.originalEvent.deltaY * n) : this.options.touch && "touchmove" === e.type && (s = e.originalEvent.changedTouches[0].clientY - this.startClientY), {
                prevent: (i = 0 < s && r + l <= 0) || s < 0 && o - a <= r + l,
                top: i,
                scrollTop: r,
                deltaY: l
            }
        },
        o = function (e, t) {
            var n, i, r = t.scrollTop(),
                o = {
                    top: !1,
                    bottom: !1
                };
            return o.top = 0 === r && (33 === e.keyCode || 36 === e.keyCode || 38 === e.keyCode), o.top || (n = t.prop("scrollHeight"), i = t.prop("clientHeight"), o.bottom = n === r + i && (32 === e.keyCode || 34 === e.keyCode || 35 === e.keyCode || 40 === e.keyCode)), o
        },
        a = function (e, t) {
            this.$element = e, this.options = c.extend({}, a.DEFAULTS, this.$element.data(), t), this.enabled = !0, this.startClientY = 0, this.options.unblock && this.$element.on(a.CORE.wheelEventName + a.NAMESPACE, this.options.unblock, c.proxy(a.CORE.unblockHandler, this)), this.$element.on(a.CORE.wheelEventName + a.NAMESPACE, this.options.selector, c.proxy(a.CORE.handler, this)), this.options.touch && (this.$element.on("touchstart" + a.NAMESPACE, this.options.selector, c.proxy(a.CORE.touchHandler, this)), this.$element.on("touchmove" + a.NAMESPACE, this.options.selector, c.proxy(a.CORE.handler, this)), this.options.unblock && this.$element.on("touchmove" + a.NAMESPACE, this.options.unblock, c.proxy(a.CORE.unblockHandler, this))), this.options.keyboard && (this.$element.attr("tabindex", this.options.keyboard.tabindex || 0), this.$element.on("keydown" + a.NAMESPACE, this.options.selector, c.proxy(a.CORE.keyboardHandler, this)), this.options.unblock && this.$element.on("keydown" + a.NAMESPACE, this.options.unblock, c.proxy(a.CORE.unblockHandler, this)))
        };
    a.NAME = "ScrollLock", a.VERSION = "3.1.2", a.NAMESPACE = ".scrollLock", a.ANIMATION_NAMESPACE = a.NAMESPACE + ".effect", a.DEFAULTS = {
        strict: !1,
        strictFn: function (e) {
            return e.prop("scrollHeight") > e.prop("clientHeight")
        },
        selector: !1,
        animation: !1,
        touch: "ontouchstart" in window,
        keyboard: !1,
        unblock: !1
    }, a.CORE = {
        wheelEventName: "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
        animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(a.ANIMATION_NAMESPACE + " ") + a.ANIMATION_NAMESPACE,
        unblockHandler: function (e) {
            e.__currentTarget = e.currentTarget
        },
        handler: function (e) {
            var t, n, i;
            this.enabled && !e.ctrlKey && (t = c(e.currentTarget), (!0 !== this.options.strict || this.options.strictFn(t)) && (e.stopPropagation(), n = c.proxy(r, this)(e, t), e.__currentTarget && (n.prevent &= c.proxy(r, this)(e, c(e.__currentTarget))
                .prevent), n.prevent && (e.preventDefault(), n.deltaY && t.scrollTop(n.scrollTop + n.deltaY), i = n.top ? "top" : "bottom", this.options.animation && setTimeout(a.CORE.animationHandler.bind(this, t, i), 0), t.trigger(c.Event(i + a.NAMESPACE)))))
        },
        touchHandler: function (e) {
            this.startClientY = e.originalEvent.touches[0].clientY
        },
        animationHandler: function (e, t) {
            var n = this.options.animation[t],
                i = this.options.animation.top + " " + this.options.animation.bottom;
            e.off(a.ANIMATION_NAMESPACE)
                .removeClass(i)
                .addClass(n)
                .one(a.CORE.animationEventName, function () {
                    e.removeClass(n)
                })
        },
        keyboardHandler: function (e) {
            var t, n = c(e.currentTarget),
                i = (n.scrollTop(), o(e, n));
            return e.__currentTarget && (t = o(e, c(e.__currentTarget)), i.top &= t.top, i.bottom &= t.bottom), i.top ? (n.trigger(c.Event("top" + a.NAMESPACE)), this.options.animation && setTimeout(a.CORE.animationHandler.bind(this, n, "top"), 0), !1) : i.bottom ? (n.trigger(c.Event("bottom" + a.NAMESPACE)), this.options.animation && setTimeout(a.CORE.animationHandler.bind(this, n, "bottom"), 0), !1) : void 0
        }
    }, a.prototype.toggleStrict = function () {
        this.options.strict = !this.options.strict
    }, a.prototype.enable = function () {
        this.enabled = !0
    }, a.prototype.disable = function () {
        this.enabled = !1
    }, a.prototype.destroy = function () {
        this.disable(), this.$element.off(a.NAMESPACE), this.$element = null, this.options = null
    }, e = c.fn.scrollLock, c.fn.scrollLock = function (i) {
        return this.each(function () {
            var e = c(this),
                t = "object" == typeof i && i,
                n = e.data(a.NAME);
            (n || "destroy" !== i) && (n || e.data(a.NAME, n = new a(e, t)), "string" == typeof i && n[i]())
        })
    }, c.fn.scrollLock.defaults = a.DEFAULTS, c.fn.scrollLock.noConflict = function () {
        return c.fn.scrollLock = e, this
    }
}),
function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : e.jQuery)
}(this, function (i) {
    i.fn.appear = function (n, e) {
        var h = i.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, e);
        return this.each(function () {
            var d = i(this);
            if (d.appeared = !1, n) {
                var f = i(window),
                    t = function () {
                        if (d.is(":visible")) {
                            var e = f.scrollLeft(),
                                t = f.scrollTop(),
                                n = d.offset(),
                                i = n.left,
                                r = n.top,
                                o = h.accX,
                                a = h.accY,
                                s = d.height(),
                                l = f.height(),
                                c = d.width(),
                                u = f.width();
                            t <= r + s + a && r <= t + l + a && e <= i + c + o && i <= e + u + o ? d.appeared || d.trigger("appear", h.data) : d.appeared = !1
                        } else d.appeared = !1
                    },
                    e = function () {
                        if (d.appeared = !0, h.one) {
                            f.unbind("scroll", t);
                            var e = i.inArray(t, i.fn.appear.checks);
                            0 <= e && i.fn.appear.checks.splice(e, 1)
                        }
                        n.apply(this, arguments)
                    };
                h.one ? d.one("appear", h.data, e) : d.bind("appear", h.data, e), f.scroll(t), i.fn.appear.checks.push(t), t()
            } else d.trigger("appear", h.data)
        })
    }, i.extend(i.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function () {
            var e = i.fn.appear.checks.length;
            if (0 < e)
                for (; e--;) i.fn.appear.checks[e]()
        },
        run: function () {
            i.fn.appear.timeout && clearTimeout(i.fn.appear.timeout), i.fn.appear.timeout = setTimeout(i.fn.appear.checkAll, 20)
        }
    }), i.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (e, t) {
        var n = i.fn[t];
        n && (i.fn[t] = function () {
            var e = n.apply(this, arguments);
            return i.fn.appear.run(), e
        })
    })
}),
function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (o) {
    var a = function (e, t) {
        this.$element = o(e), this.options = o.extend({}, a.DEFAULTS, this.dataOptions(), t), this.init()
    };
    a.DEFAULTS = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function (e, t) {
            return e.toFixed(t.decimals)
        },
        onUpdate: null,
        onComplete: null
    }, a.prototype.init = function () {
        this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
    }, a.prototype.dataOptions = function () {
        var e = {
                from: this.$element.data("from"),
                to: this.$element.data("to"),
                speed: this.$element.data("speed"),
                refreshInterval: this.$element.data("refresh-interval"),
                decimals: this.$element.data("decimals")
            },
            t = Object.keys(e);
        for (var n in t) {
            var i = t[n];
            void 0 === e[i] && delete e[i]
        }
        return e
    }, a.prototype.update = function () {
        this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
    }, a.prototype.render = function () {
        var e = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(e)
    }, a.prototype.restart = function () {
        this.stop(), this.init(), this.start()
    }, a.prototype.start = function () {
        this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
    }, a.prototype.stop = function () {
        this.interval && clearInterval(this.interval)
    }, a.prototype.toggle = function () {
        this.interval ? this.stop() : this.start()
    }, o.fn.countTo = function (r) {
        return this.each(function () {
            var e = o(this),
                t = e.data("countTo"),
                n = "object" == typeof r ? r : {},
                i = "string" == typeof r ? r : "start";
            (!t || "object" == typeof r) && (t && t.stop(), e.data("countTo", t = new a(this, n))), t[i].call(t)
        })
    }
}),
function (e) {
    var t = !1;
    if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
        var n = window.Cookies,
            i = window.Cookies = e();
        i.noConflict = function () {
            return window.Cookies = n, i
        }
    }
}(function () {
    function g() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) t[i] = n[i]
        }
        return t
    }
    return function e(h) {
        function p(e, t, n) {
            var i;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if ("number" == typeof (n = g({
                            path: "/"
                        }, p.defaults, n))
                        .expires) {
                        var r = new Date;
                        r.setMilliseconds(r.getMilliseconds() + 864e5 * n.expires), n.expires = r
                    }
                    n.expires = n.expires ? n.expires.toUTCString() : "";
                    try {
                        i = JSON.stringify(t), /^[\{\[]/.test(i) && (t = i)
                    } catch (e) {}
                    t = h.write ? h.write(t, e) : encodeURIComponent(String(t))
                        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e)))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent))
                        .replace(/[\(\)]/g, escape);
                    var o = "";
                    for (var a in n) n[a] && (o += "; " + a, !0 !== n[a] && (o += "=" + n[a]));
                    return document.cookie = e + "=" + t + o
                }
                e || (i = {});
                for (var s = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, c = 0; c < s.length; c++) {
                    var u = s[c].split("="),
                        d = u.slice(1)
                        .join("=");
                    this.json || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                    try {
                        var f = u[0].replace(l, decodeURIComponent);
                        if (d = h.read ? h.read(d, f) : h(d, f) || d.replace(l, decodeURIComponent), this.json) try {
                            d = JSON.parse(d)
                        } catch (e) {}
                        if (e === f) {
                            i = d;
                            break
                        }
                        e || (i[f] = d)
                    } catch (e) {}
                }
                return i
            }
        }
        return (p.set = p)
            .get = function (e) {
                return p.call(p, e)
            }, p.getJSON = function () {
                return p.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, p.defaults = {}, p.remove = function (e, t) {
                p(e, "", g(t, {
                    expires: -1
                }))
            }, p.withConverter = e, p
    }(function () {})
});
var wseet = function () {
    var r, i, a, n, o, s, l, c, t, u, d, f, h, p, g = function () {
            r = jQuery("html"), i = jQuery("body"), a = jQuery("#page-container"), n = jQuery("#sidebar"), o = jQuery("#sidebar-scroll"), s = jQuery("#side-overlay"), l = jQuery("#side-overlay-scroll"), c = jQuery("#page-header"), t = jQuery("#page-header-search"), u = jQuery("#page-header-search-input"), d = jQuery("#page-header-loader"), f = jQuery("#main-container"), h = jQuery("#page-footer")
        },
        m = function (e) {
            var t;
            p = x(), "www.masafat.co" !== location.hostname && "masafat.co" !== location.hostname && (jQuery("body")
                .html(""), location.href = "www.masafat.co"), "init" === e ? (jQuery(window)
                .off("resize.cb.scroll orientationchange.cb.scroll"), jQuery(window)
                .on("resize.cb.scroll orientationchange.cb.scroll", function () {
                    clearTimeout(t), t = setTimeout(function () {
                        m()
                    }, 150)
                })
                .triggerHandler("resize.cb.scroll")) : 991 < p && a.hasClass("side-scroll") ? (jQuery(n)
                .add(s)
                .scrollLock("disable"), o.length && !o.parent(".slimScrollDiv")
                .length ? o.slimScroll({
                    height: n.outerHeight(),
                    color: "#cdcdcd",
                    size: "4px",
                    opacity: .9,
                    wheelStep: 15,
                    distance: "0",
                    railVisible: !1,
                    railOpacity: 1
                }) : o.add(o.parent())
                .css("height", n.outerHeight()), o.mouseover(), l.length && !l.parent(".slimScrollDiv")
                .length ? l.slimScroll({
                    height: s.outerHeight(),
                    color: "#cdcdcd",
                    size: "4px",
                    opacity: .9,
                    wheelStep: 15,
                    distance: "0",
                    railVisible: !1,
                    railOpacity: 1
                }) : l.add(l.parent())
                .css("height", s.outerHeight())) : (jQuery(n)
                .add(s)
                .scrollLock("enable"), o.length && o.parent(".slimScrollDiv")
                .length && (o.slimScroll({
                    destroy: !0
                }), o.attr("style", "")), l.length && l.parent(".slimScrollDiv")
                .length && (l.slimScroll({
                    destroy: !0
                }), l.attr("style", "")))
        },
        v = function () {
            var e;
            jQuery(window)
                .off("resize.cb.main orientationchange.cb.main"), f.length && jQuery(window)
                .on("resize.cb.main orientationchange.cb.main", function () {
                    clearTimeout(e), e = setTimeout(function () {
                        var e = jQuery(window)
                            .height(),
                            t = c.outerHeight() || 0,
                            n = h.outerHeight() || 0;
                        a.hasClass("page-header-fixed") || a.hasClass("page-header-glass") ? f.css("min-height", e - n) : f.css("min-height", e - t - n), h.fadeTo(1e3, 1)
                    }, 150)
                })
                .triggerHandler("resize.cb.main"), a.addClass("side-trans-enabled")
        },
        y = function () {
            jQuery(window)
                .off("scroll.cb.header"), a.hasClass("page-header-glass") && a.hasClass("page-header-fixed") && jQuery(window)
                .on("scroll.cb.header", function () {
                    60 < jQuery(this)
                        .scrollTop() ? a.addClass("page-header-scroll") : a.removeClass("page-header-scroll")
                })
                .trigger("scroll.cb.header")
        },
        b = function () {
            a.off("click.cb.menu"), a.on("click.cb.menu", '[data-toggle="nav-submenu"]', function (e) {
                var t = jQuery(this),
                    n = t.parent("li");
                return n.hasClass("open") ? n.removeClass("open") : (t.closest("ul")
                    .children("li")
                    .removeClass("open"), n.addClass("open")), r.hasClass("no-focus") && t.blur(), !1
            })
        },
        _ = function () {
            jQuery(".form-material.floating > .form-control")
                .each(function () {
                    var e = jQuery(this),
                        t = e.parent(".form-material");
                    setTimeout(function () {
                            e.val() && t.addClass("open")
                        }, 150), e.off("change.cb.inputs")
                        .on("change.cb.inputs", function () {
                            e.val() ? t.addClass("open") : t.removeClass("open")
                        })
                })
        },
        w = function () {
            var t = jQuery("#css-theme"),
                n = !!a.hasClass("enable-cookies");
            if (n) {
                var e = Cookies.get("cbThemeName") || !1;
                e && C(t, e), t = jQuery("#css-theme")
            }
            jQuery('[data-toggle="theme"][data-theme="' + (t.length ? t.attr("href") : "default") + '"]')
                .parent("li")
                .addClass("active"), a.off("click.cb.themes"), a.on("click.cb.themes", '[data-toggle="theme"]', function () {
                    var e = jQuery(this)
                        .data("theme");
                    jQuery('[data-toggle="theme"]')
                        .parent("li")
                        .removeClass("active"), jQuery('[data-toggle="theme"][data-theme="' + e + '"]')
                        .parent("li")
                        .addClass("active"), C(t, e), t = jQuery("#css-theme"), n && Cookies.set("cbThemeName", e, {
                            expires: 7
                        })
                })
        },
        C = function (e, t) {
            "default" === t ? e.length && e.remove() : e.length ? e.attr("href", t) : jQuery("#css-main")
                .after('<link rel="stylesheet" id="css-theme" href="' + t + '">')
        },
        E = function (e) {
            switch (p = x(), e) {
            case "init":
                a.off("click.cb.layout"), a.on("click.cb.layout", '[data-toggle="layout"]', function () {
                    var e = jQuery(this);
                    E(e.data("action")), r.hasClass("no-focus") && e.blur()
                }), a.hasClass("enable-page-overlay") && (a.prepend('<div id="page-overlay"></div>'), jQuery("#page-overlay")
                    .on("click.pixelcave.overlay", function (e) {
                        E("side_overlay_close")
                    }));
                break;
            case "sidebar_pos_toggle":
                a.toggleClass("sidebar-r");
                break;
            case "sidebar_pos_left":
                a.removeClass("sidebar-r");
                break;
            case "sidebar_pos_right":
                a.addClass("sidebar-r");
                break;
            case "sidebar_toggle":
                991 < p ? a.toggleClass("sidebar-o") : a.toggleClass("sidebar-o-xs");
                break;
            case "sidebar_open":
                991 < p ? a.addClass("sidebar-o") : a.addClass("sidebar-o-xs");
                break;
            case "sidebar_close":
                991 < p ? a.removeClass("sidebar-o") : a.removeClass("sidebar-o-xs");
                break;
            case "sidebar_mini_toggle":
                991 < p && a.toggleClass("sidebar-mini");
                break;
            case "sidebar_mini_on":
                991 < p && a.addClass("sidebar-mini");
                break;
            case "sidebar_mini_off":
                991 < p && a.removeClass("sidebar-mini");
                break;
            case "sidebar_style_inverse_toggle":
                a.toggleClass("sidebar-inverse");
                break;
            case "sidebar_style_inverse_on":
                a.addClass("sidebar-inverse");
                break;
            case "sidebar_style_inverse_off":
                a.removeClass("sidebar-inverse");
                break;
            case "side_overlay_toggle":
                E(a.hasClass("side-overlay-o") ? "side_overlay_close" : "side_overlay_open");
                break;
            case "side_overlay_open":
                jQuery(document)
                    .on("keydown.cb.sideOverlay", function (e) {
                        27 === e.which && (e.preventDefault(), E("side_overlay_close"))
                    }), a.addClass("side-overlay-o");
                break;
            case "side_overlay_close":
                jQuery(document)
                    .off("keydown.cb.sideOverlay"), a.removeClass("side-overlay-o");
                break;
            case "side_overlay_hoverable_toggle":
                a.toggleClass("side-overlay-hover");
                break;
            case "side_overlay_hoverable_on":
                a.addClass("side-overlay-hover");
                break;
            case "side_overlay_hoverable_off":
                a.removeClass("side-overlay-hover");
                break;
            case "header_fixed_toggle":
                a.toggleClass("page-header-fixed"), y(), v();
                break;
            case "header_fixed_on":
                a.addClass("page-header-fixed"), y(), v();
                break;
            case "header_fixed_off":
                a.removeClass("page-header-fixed"), y(), v();
                break;
            case "header_style_modern":
                a.removeClass("page-header-glass page-header-inverse")
                    .addClass("page-header-modern"), y(), v();
                break;
            case "header_style_classic":
                a.removeClass("page-header-glass page-header-modern"), y(), v();
                break;
            case "header_style_glass":
                a.removeClass("page-header-modern")
                    .addClass("page-header-glass"), y(), v();
                break;
            case "header_style_inverse_toggle":
                a.hasClass("page-header-modern") || a.toggleClass("page-header-inverse");
                break;
            case "header_style_inverse_on":
                a.hasClass("page-header-modern") || a.addClass("page-header-inverse");
                break;
            case "header_style_inverse_off":
                a.hasClass("page-header-modern") || a.removeClass("page-header-inverse");
                break;
            case "header_search_on":
                t.addClass("show"), u.focus(), jQuery(document)
                    .on("keydown.cb.header.search", function (e) {
                        27 === e.which && (e.preventDefault(), console.log("test"), E("header_search_off"))
                    });
                break;
            case "header_search_off":
                t.removeClass("show"), u.blur(), jQuery(document)
                    .off("keydown.cb.header.search");
                break;
            case "header_loader_on":
                d.addClass("show");
                break;
            case "header_loader_off":
                d.removeClass("show");
                break;
            case "side_scroll_toggle":
                a.toggleClass("side-scroll"), m();
                break;
            case "side_scroll_on":
                a.addClass("side-scroll"), m();
                break;
            case "side_scroll_off":
                a.removeClass("side-scroll"), m();
                break;
            case "content_layout_toggle":
                E(a.hasClass("main-content-boxed") ? "content_layout_narrow" : a.hasClass("main-content-narrow") ? "content_layout_full_width" : "content_layout_boxed");
                break;
            case "content_layout_boxed":
                a.removeClass("main-content-narrow")
                    .addClass("main-content-boxed");
                break;
            case "content_layout_narrow":
                a.removeClass("main-content-boxed")
                    .addClass("main-content-narrow");
                break;
            case "content_layout_full_width":
                a.removeClass("main-content-boxed main-content-narrow");
            default:
                return !1
            }
        },
        T = function (e, t) {
            var n = "si si-size-fullscreen";
            if ("init" === t) jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]')
                .each(function () {
                    var e = jQuery(this);
                    e.html('<i class="' + (jQuery(e)
                        .closest(".block")
                        .hasClass("block-mode-fullscreen") ? "si si-size-actual" : n) + '"></i>')
                }), jQuery('[data-toggle="block-option"][data-action="content_toggle"]')
                .each(function () {
                    var e = jQuery(this);
                    e.html('<i class="' + (e.closest(".block")
                        .hasClass("block-mode-hidden") ? "si si-arrow-down" : "si si-arrow-up") + '"></i>')
                }), a.off("click.cb.blocks"), a.on("click.cb.blocks", '[data-toggle="block-option"]', function () {
                    T(jQuery(this)
                        .closest(".block"), jQuery(this)
                        .data("action"))
                });
            else {
                var i = e instanceof jQuery ? e : jQuery(e);
                if (i.length) {
                    var r = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', i),
                        o = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', i);
                    switch (t) {
                    case "fullscreen_toggle":
                        i.removeClass("block-mode-pinned")
                            .toggleClass("block-mode-fullscreen"), i.hasClass("block-mode-fullscreen") ? jQuery(i)
                            .scrollLock("enable") : jQuery(i)
                            .scrollLock("disable"), r.length && (i.hasClass("block-mode-fullscreen") ? jQuery("i", r)
                                .removeClass(n)
                                .addClass("si si-size-actual") : jQuery("i", r)
                                .removeClass("si si-size-actual")
                                .addClass(n));
                        break;
                    case "fullscreen_on":
                        i.removeClass("block-mode-pinned")
                            .addClass("block-mode-fullscreen"), jQuery(i)
                            .scrollLock("enable"), r.length && jQuery("i", r)
                            .removeClass(n)
                            .addClass("si si-size-actual");
                        break;
                    case "fullscreen_off":
                        i.removeClass("block-mode-fullscreen"), jQuery(i)
                            .scrollLock("disable"), r.length && jQuery("i", r)
                            .removeClass("si si-size-actual")
                            .addClass(n);
                        break;
                    case "content_toggle":
                        i.toggleClass("block-mode-hidden"), o.length && (i.hasClass("block-mode-hidden") ? jQuery("i", o)
                            .removeClass("si si-arrow-up")
                            .addClass("si si-arrow-down") : jQuery("i", o)
                            .removeClass("si si-arrow-down")
                            .addClass("si si-arrow-up"));
                        break;
                    case "content_hide":
                        i.addClass("block-mode-hidden"), o.length && jQuery("i", o)
                            .removeClass("si si-arrow-up")
                            .addClass("si si-arrow-down");
                        break;
                    case "content_show":
                        i.removeClass("block-mode-hidden"), o.length && jQuery("i", o)
                            .removeClass("si si-arrow-down")
                            .addClass("si si-arrow-up");
                        break;
                    case "state_toggle":
                        i.toggleClass("block-mode-loading"), jQuery('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]', i)
                            .length && setTimeout(function () {
                                i.removeClass("block-mode-loading")
                            }, 2e3);
                        break;
                    case "state_loading":
                        i.addClass("block-mode-loading");
                        break;
                    case "state_normal":
                        i.removeClass("block-mode-loading");
                        break;
                    case "pinned_toggle":
                        i.removeClass("block-mode-fullscreen")
                            .toggleClass("block-mode-pinned");
                        break;
                    case "pinned_on":
                        i.removeClass("block-mode-fullscreen")
                            .addClass("block-mode-pinned");
                        break;
                    case "pinned_off":
                        i.removeClass("block-mode-pinned");
                        break;
                    case "close":
                        i.hide();
                        break;
                    case "open":
                        i.show();
                        break;
                    default:
                        return !1
                    }
                }
            }
        },
        x = function () {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        },
        k = function () {
            jQuery('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled)')
                .on("click.cb.helpers.core", function () {
                    var e = jQuery(this);
                    e.addClass("js-class-toggle-enabled"), jQuery(e.data("target")
                            .toString())
                        .toggleClass(e.data("class")
                            .toString()), r.hasClass("no-focus") && e.blur()
                })
        },
        j = function () {
            jQuery('[data-toggle="scroll-to"]:not(.js-scroll-to-enabled)')
                .on("click.cb.helpers.core", function (e) {
                    e.stopPropagation();
                    var t = jQuery(this),
                        n = t.data("target") || t.attr("href"),
                        i = t.data("speed") || 1e3,
                        r = c.length && a.hasClass("page-header-fixed") ? c.outerHeight() : 0;
                    t.addClass("js-scroll-to-enabled"), jQuery("html, body")
                        .animate({
                            scrollTop: jQuery(n)
                                .offset()
                                .top - r
                        }, i)
                })
        },
        S = function () {
            var e = jQuery(".js-year-copy");
            if (0 < e.length) {
                var t = (new Date)
                    .getFullYear(),
                    n = 0 < e.html()
                    .length ? e.html() : t;
                parseInt(n) >= t ? e.html(t) : e.html(n + "-" + t.toString()
                    .substr(2, 2))
            }
        },
        A = function () {
            jQuery('[data-toggle="tooltip"]:not(.js-tooltip-enabled)')
                .add(".js-tooltip:not(.js-tooltip-enabled)")
                .each(function () {
                    var e = jQuery(this);
                    e.addClass("js-tooltip-enabled"), e.tooltip({
                        container: e.data("container") || "body",
                        animation: e.data("animation") || !1
                    })
                })
        },
        D = function () {
            jQuery('[data-toggle="popover"]:not(.js-popover-enabled)')
                .add(".js-popover:not(.js-popover-enabled)")
                .each(function () {
                    var e = jQuery(this);
                    e.addClass("js-popover-enabled"), e.popover({
                        container: e.data("container") || "body",
                        animation: e.data("animation") || !1,
                        trigger: e.data("trigger") || "hover focus"
                    })
                })
        },
        N = function () {
            jQuery('[data-toggle="tabs"]:not(.js-tabs-enabled)')
                .add(".js-tabs:not(.js-tabs-enabled)")
                .each(function () {
                    var e = jQuery(this);
                    e.addClass("js-tabs-enabled"), e.find("a")
                        .on("click.cb.helpers.core", function (e) {
                            e.preventDefault(), jQuery(this)
                                .tab("show")
                        })
                })
        },
        I = function () {
            jQuery('[data-toggle="appear"]:not(.js-appear-enabled)')
                .each(function () {
                    p = x();
                    var e = jQuery(this),
                        t = e.data("class") || "animated fadeIn",
                        n = e.data("offset") || 0,
                        i = r.hasClass("ie9") || p < 992 ? 0 : e.data("timeout") ? e.data("timeout") : 0;
                    e.addClass("js-appear-enabled"), e.appear(function () {
                        setTimeout(function () {
                            e.removeClass("invisible")
                                .addClass(t)
                        }, i)
                    }, {
                        accY: n
                    })
                })
        },
        O = function () {
            jQuery('[data-toggle="countTo"]:not(.js-count-to-enabled)')
                .each(function () {
                    var e = jQuery(this),
                        t = e.data("after"),
                        n = e.data("before");
                    e.addClass("js-count-to-enabled"), e.appear(function () {
                        e.countTo({
                            speed: e.data("speed") || 1500,
                            refreshInterval: e.data("refresh-interval") || 15,
                            onComplete: function () {
                                t ? e.html(e.html() + t) : n && e.html(n + e.html())
                            }
                        })
                    })
                })
        },
        L = function () {
            jQuery('[data-toggle="slimscroll"]:not(.js-slimscroll-enabled)')
                .each(function () {
                    var e = jQuery(this);
                    e.addClass("js-slimscroll-enabled"), e.slimScroll({
                        height: e.data("height") || "200px",
                        size: e.data("size") || "5px",
                        position: e.data("position") || "right",
                        color: e.data("color") || "#000",
                        opacity: e.data("opacity") || ".25",
                        distance: e.data("distance") || "0",
                        alwaysVisible: !!e.data("always-visible"),
                        railVisible: !!e.data("rail-visible"),
                        railColor: e.data("rail-color") || "#999",
                        railOpacity: e.data("rail-opacity") || .3
                    })
                })
        },
        H = function (e, t) {
            var n = jQuery("#page-loader");
            return "show" === e ? n.length ? (t && n.removeClass()
                .addClass(t), n.addClass("show")) : t ? i.prepend('<div id="page-loader" class="show ' + t + '"></div>') : i.prepend('<div id="page-loader" class="show"></div>') : "hide" === e && n.length && n.removeClass("show"), !1
        },
        P = function () {
            jQuery('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)')
                .each(function () {
                    var o = jQuery(this);
                    o.addClass("js-click-ripple-enabled"), o.css({
                        overflow: "hidden",
                        position: "relative",
                        "z-index": 1
                    }), o.on("click.cb.helpers.core", function (e) {
                        var t, n, i, r;
                        0 === o.children(".click-ripple")
                            .length ? o.prepend('<span class="click-ripple"></span>') : o.children(".click-ripple")
                            .removeClass("animate"), (t = o.children(".click-ripple"))
                            .height() || t.width() || (n = Math.max(o.outerWidth(), o.outerHeight()), t.css({
                                height: n,
                                width: n
                            })), i = e.pageX - o.offset()
                            .left - t.width() / 2, r = e.pageY - o.offset()
                            .top - t.height() / 2, t.css({
                                top: r + "px",
                                left: i + "px"
                            })
                            .addClass("animate")
                    })
                })
        },
        Q = function () {
            jQuery('[data-toggle="custom-file-input"]:not(.js-custom-file-input-enabled)')
                .each(function (e, t) {
                    var n = jQuery(t);
                    n.addClass("js-custom-file-input-enabled")
                        .on("change", function (e) {
                            var t = 1 < e.target.files.length ? e.target.files.length + " " + (n.data("lang-files") || "Files") : e.target.files[0].name;
                            n.next(".custom-file-label")
                                .css("overflow-x", "hidden")
                                .html(t)
                        })
                })
        },
        M = function (e, t) {
            t ? e.closest("tr")
                .addClass("table-active") : e.closest("tr")
                .removeClass("table-active")
        };
    return {
        init: function () {
            g(), m("init"), v(), y(), b(), _(), w(), E("init"), T(!1, "init"), k(), j(), S(), A(), D(), N(), I(), O(), L(), H("hide"), P(), Q()
        },
        layout: function (e) {
            E(e)
        },
        blocks: function (e, t) {
            T(e, t)
        },
        loader: function (e, t) {
            H(e, t)
        },
        helper: function (e) {
            switch (e) {
            case "core-fn-uiInit":
                g();
                break;
            case "core-fn-uiHandleScrollInit":
                m("init");
                break;
            case "core-fn-uiHandleScroll":
                m();
                break;
            case "core-fn-uiHandleMain":
                v();
                break;
            case "core-fn-uiHandleHeader":
                y();
                break;
            case "core-fn-uiHandleNav":
                b();
                break;
            case "core-fn-uiHandleForms":
                _();
                break;
            case "core-fn-uiHandleTheme":
                w();
                break;
            case "core-fn-uiApiLayout":
                E("init");
                break;
            case "core-fn-uiApiBlocks":
                T(!1, "init");
                break;
            case "core-tooltip":
                A();
                break;
            case "core-popover":
                D();
                break;
            case "core-tab":
                N();
                break;
            case "core-scrollTo":
                j();
                break;
            case "core-toggle-class":
                k();
                break;
            case "core-year-copy":
                S();
                break;
            case "core-appear":
                I();
                break;
            case "core-appear-countTo":
                O();
                break;
            case "core-slimscroll":
                L();
                break;
            case "core-ripple":
                P();
                break;
            case "core-page-loader":
                H("hide");
                break;
            case "core-custom-file-input":
                Q();
                break;
            case "print-page":
                t = a.prop("class"), a.prop("class", ""), window.print(), a.prop("class", t);
                break;
            case "table-tools":
                jQuery(".js-table-sections:not(.js-table-sections-enabled)")
                    .each(function () {
                        var n = jQuery(this);
                        n.addClass("js-table-sections-enabled"), jQuery(".js-table-sections-header > tr", n)
                            .on("click.cb.helpers", function (e) {
                                if (!("checkbox" === e.target.type || "button" === e.target.type || "a" === e.target.tagName.toLowerCase() || jQuery(e.target)
                                        .parent("a")
                                        .length || jQuery(e.target)
                                        .parent("button")
                                        .length || jQuery(e.target)
                                        .parent(".custom-control")
                                        .length || jQuery(e.target)
                                        .parent("label")
                                        .length)) {
                                    var t = jQuery(this)
                                        .parent("tbody");
                                    t.hasClass("show") || jQuery("tbody", n)
                                        .removeClass("show table-active"), t.toggleClass("show table-active")
                                }
                            })
                    }), jQuery(".js-table-checkable:not(.js-table-checkable-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-table-checkable-enabled"), jQuery("thead input:checkbox", e)
                            .on("click.cb.helpers", function () {
                                var t = jQuery(this)
                                    .prop("checked");
                                jQuery("tbody input:checkbox", e)
                                    .each(function () {
                                        var e = jQuery(this);
                                        e.prop("checked", t), M(e, t)
                                    })
                            }), jQuery("tbody input:checkbox", e)
                            .on("click.cb.helpers", function () {
                                var e = jQuery(this);
                                M(e, e.prop("checked"))
                            }), jQuery("tbody > tr", e)
                            .on("click.cb.helpers", function (e) {
                                if (!("checkbox" === e.target.type || "button" === e.target.type || "a" === e.target.tagName.toLowerCase() || jQuery(e.target)
                                        .parent("a")
                                        .length || jQuery(e.target)
                                        .parent("button")
                                        .length || jQuery(e.target)
                                        .parent(".custom-control")
                                        .length || jQuery(e.target)
                                        .parent("label")
                                        .length)) {
                                    var t = jQuery("input:checkbox", this),
                                        n = t.prop("checked");
                                    t.prop("checked", !n), M(t, !n)
                                }
                            })
                    });
                break;
            case "content-filter":
                jQuery(".js-filter:not(.js-filter-enabled)")
                    .each(function () {
                        var e, t = jQuery(this),
                            n = jQuery(".nav-pills", t),
                            i = jQuery("a[data-category-link]", t),
                            r = jQuery("[data-category]", t),
                            o = t.data("speed") || 200;
                        t.addClass("js-filter-enabled"), n.length && jQuery(window)
                            .on("resize.cb.helpers", function () {
                                clearTimeout(e), e = setTimeout(function () {
                                    x() < 768 ? n.addClass("flex-column") : n.removeClass("flex-column")
                                }, 150)
                            })
                            .trigger("resize.cb.helpers"), t.data("numbers") && i.each(function () {
                                var e = jQuery(this),
                                    t = e.data("category-link");
                                "all" === t ? e.append(" (" + r.length + ")") : e.append(" (" + r.filter('[data-category="' + t + '"]')
                                    .length + ")")
                            }), i.on("click.cb.helpers", function () {
                                var e, t = jQuery(this);
                                return t.hasClass("active") || (i.removeClass("active"), t.addClass("active"), "all" === (e = t.data("category-link")) ? r.filter(":visible")
                                    .length ? r.filter(":visible")
                                    .fadeOut(o, function () {
                                        r.fadeIn(o)
                                    }) : r.fadeIn(o) : r.filter(":visible")
                                    .length ? r.filter(":visible")
                                    .fadeOut(o, function () {
                                        r.filter('[data-category="' + e + '"]')
                                            .fadeIn(o)
                                    }) : r.filter('[data-category="' + e + '"]')
                                    .fadeIn(o)), !1
                            })
                    });
                break;
            case "slimscroll":
                uiHelperSlimscroll();
                break;
            case "magnific-popup":
                jQuery(".js-gallery:not(.js-gallery-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-gallery-enabled"), e.magnificPopup({
                            delegate: "a.img-lightbox",
                            type: "image",
                            gallery: {
                                enabled: !0
                            }
                        })
                    });
                break;
            case "ckeditor":
                jQuery("#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)")
                    .length && (jQuery("#js-ckeditor-inline")
                        .attr("contenteditable", "true"), CKEDITOR.inline("js-ckeditor-inline"), jQuery("#js-ckeditor-inline")
                        .addClass("js-ckeditor-inline-enabled")), jQuery("#js-ckeditor:not(.js-ckeditor-enabled)")
                    .length && (CKEDITOR.replace("js-ckeditor"), jQuery("#js-ckeditor")
                        .addClass("js-ckeditor-enabled"));
                break;
            case "simplemde":
                jQuery(".js-simplemde:not(.js-simplemde-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-simplemde-enabled"), new SimpleMDE({
                            element: e[0]
                        })
                    });
                break;
            case "slick":
                jQuery(".js-slider:not(.js-slider-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-slider-enabled"), e.slick({
                            arrows: e.data("arrows") || !1,
                            dots: e.data("dots") || !1,
                            slidesToShow: e.data("slides-to-show") || 1,
                            slidesToScroll: e.data("slides-to-scroll") || 1,
                            centerMode: e.data("center-mode") || !1,
                            autoplay: e.data("autoplay") || !1,
                            autoplaySpeed: e.data("autoplay-speed") || 3e3,
                            infinite: void 0 === e.data("infinite") || e.data("infinite")
                        })
                    });
                break;
            case "datepicker":
                jQuery(".js-datepicker:not(.js-datepicker-enabled)")
                    .add(".input-daterange:not(.js-datepicker-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-datepicker-enabled"), e.datepicker({
                            weekStart: e.data("week-start") || 0,
                            autoclose: e.data("autoclose") || !1,
                            todayHighlight: e.data("today-highlight") || !1,
                            orientation: "bottom"
                        })
                    });
                break;
            case "colorpicker":
                jQuery(".js-colorpicker:not(.js-colorpicker-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-colorpicker-enabled"), e.colorpicker()
                    });
                break;
            case "tags-inputs":
                jQuery(".js-tags-input:not(.js-tags-input-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-tags-input-enabled"), e.tagsInput({
                            height: e.data("height") || !1,
                            width: e.data("width") || "100%",
                            defaultText: e.data("default-text") || "Add tag",
                            removeWithBackspace: e.data("remove-with-backspace") || !0,
                            delimiter: [","]
                        })
                    });
                break;
            case "masked-inputs":
                jQuery(".js-masked-date:not(.js-masked-enabled)")
                    .mask("99/99/9999"), jQuery(".js-masked-date-dash:not(.js-masked-enabled)")
                    .mask("99-99-9999"), jQuery(".js-masked-phone:not(.js-masked-enabled)")
                    .mask("(999) 999-9999"), jQuery(".js-masked-phone-ext:not(.js-masked-enabled)")
                    .mask("(999) 999-9999? x99999"), jQuery(".js-masked-taxid:not(.js-masked-enabled)")
                    .mask("99-9999999"), jQuery(".js-masked-ssn:not(.js-masked-enabled)")
                    .mask("999-99-9999"), jQuery(".js-masked-pkey:not(.js-masked-enabled)")
                    .mask("a*-999-a999"), jQuery(".js-masked-time:not(.js-masked-enabled)")
                    .mask("99:99"), jQuery(".js-masked-date")
                    .add(".js-masked-date-dash")
                    .add(".js-masked-phone")
                    .add(".js-masked-phone-ext")
                    .add(".js-masked-taxid")
                    .add(".js-masked-ssn")
                    .add(".js-masked-pkey")
                    .add(".js-masked-time")
                    .addClass("js-masked-enabled");
                break;
            case "select2":
                jQuery(".js-select2:not(.js-select2-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-select2-enabled"), e.select2()
                    });
                break;
            case "highlightjs":
                hljs.isHighlighted || hljs.initHighlighting();
                break;
            case "notify":
                jQuery(".js-notify:not(.js-notify-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-notify-enabled"), e.on("click.cb.helpers", function () {
                            var e = jQuery(this);
                            jQuery.notify({
                                icon: e.data("icon") || "",
                                message: e.data("message"),
                                url: e.data("url") || ""
                            }, {
                                element: "body",
                                type: e.data("type") || "info",
                                allow_dismiss: !0,
                                newest_on_top: !0,
                                showProgressbar: !1,
                                placement: {
                                    from: e.data("from") || "top",
                                    align: e.data("align") || "right"
                                },
                                offset: 20,
                                spacing: 10,
                                z_index: 1033,
                                delay: 5e3,
                                timer: 1e3,
                                template: '<div data-notify="container" class="col-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">Ã—</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
                                animate: {
                                    enter: "animated fadeIn",
                                    exit: "animated fadeOutDown"
                                }
                            })
                        })
                    });
                break;
            case "draggable-items":
                jQuery(".js-draggable-items:not(.js-draggable-items-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-draggable-items-enabled"), e.children(".draggable-column")
                            .sortable({
                                connectWith: ".draggable-column",
                                items: ".draggable-item",
                                dropOnEmpty: !0,
                                opacity: .75,
                                handle: ".draggable-handler",
                                placeholder: "draggable-placeholder",
                                tolerance: "pointer",
                                start: function (e, t) {
                                    t.placeholder.css({
                                        height: t.item.outerHeight(),
                                        "margin-bottom": t.item.css("margin-bottom")
                                    })
                                }
                            })
                    });
                break;
            case "easy-pie-chart":
                jQuery(".js-pie-chart:not(.js-pie-chart-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-pie-chart-enabled"), e.easyPieChart({
                            barColor: e.data("bar-color") || "#777777",
                            trackColor: e.data("track-color") || "#eeeeee",
                            lineWidth: e.data("line-width") || 3,
                            size: e.data("size") || "80",
                            animate: e.data("animate") || 750,
                            scaleColor: e.data("scale-color") || !1
                        })
                    });
                break;
            case "maxlength":
                jQuery(".js-maxlength:not(.js-maxlength-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-maxlength-enabled"), e.maxlength({
                            alwaysShow: !!e.data("always-show"),
                            threshold: e.data("threshold") || 10,
                            warningClass: e.data("warning-class") || "badge badge-warning",
                            limitReachedClass: e.data("limit-reached-class") || "badge badge-danger",
                            placement: e.data("placement") || "bottom",
                            preText: e.data("pre-text") || "",
                            separator: e.data("separator") || "/",
                            postText: e.data("post-text") || ""
                        })
                    });
                break;
            case "rangeslider":
                jQuery(".js-rangeslider:not(.js-rangeslider-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-rangeslider-enabled"), e.ionRangeSlider({
                            input_values_separator: ";"
                        })
                    });
                break;
            case "summernote":
                jQuery(".js-summernote-air:not(.js-summernote-air-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-summernote-air-enabled"), e.summernote({
                            airMode: !0,
                            tooltip: !1
                        })
                    }), jQuery(".js-summernote:not(.js-summernote-enabled)")
                    .each(function () {
                        var e = jQuery(this);
                        e.addClass("js-summernote-enabled"), e.summernote({
                            height: 350,
                            minHeight: null,
                            maxHeight: null
                        })
                    });
                break;
            default:
                return !1
            }
            var t
        },
        helpers: function (e) {
            if (e instanceof Array)
                for (var t in e) wseet.helper(e[t]);
            else wseet.helper(e)
        }
    }
}();
jQuery(function () {
    "undefined" == typeof angular && wseet.init()
});
