<!doctype html>
<html lang="ja" xml:lang="ja">

<head>
    <meta charset="UTF-8">
    <script type="text/javascript">
        (window.NREUM || (NREUM = {})).loader_config = {
            xpid: "VQYDUlVRARACXFlRAAIHVlw=",
            licenseKey: "9779865044",
            applicationID: "288373008"
        };
        window.NREUM || (NREUM = {}), __nr_require = function(t, n, e) {
            function r(e) {
                if (!n[e]) {
                    var o = n[e] = {
                        exports: {}
                    };
                    t[e][0].call(o.exports, function(n) {
                        var o = t[e][1][n];
                        return r(o || n)
                    }, o, o.exports)
                }
                return n[e].exports
            }
            if ("function" == typeof __nr_require) return __nr_require;
            for (var o = 0; o < e.length; o++) r(e[o]);
            return r
        }({
            1: [function(t, n, e) {
                function r(t) {
                    try {
                        s.console && console.log(t)
                    } catch (n) {}
                }
                var o, i = t("ee"),
                    a = t(21),
                    s = {};
                try {
                    o = localStorage.getItem("__nr_flags").split(","), console && "function" == typeof console.log && (s.console = !0, o.indexOf("dev") !== -1 && (s.dev = !0), o.indexOf("nr_dev") !== -1 && (s.nrDev = !0))
                } catch (c) {}
                s.nrDev && i.on("internal-error", function(t) {
                    r(t.stack)
                }), s.dev && i.on("fn-err", function(t, n, e) {
                    r(e.stack)
                }), s.dev && (r("NR AGENT IN DEVELOPMENT MODE"), r("flags: " + a(s, function(t, n) {
                    return t
                }).join(", ")))
            }, {}],
            2: [function(t, n, e) {
                function r(t, n, e, r, s) {
                    try {
                        p ? p -= 1 : o(s || new UncaughtException(t, n, e), !0)
                    } catch (f) {
                        try {
                            i("ierr", [f, c.now(), !0])
                        } catch (d) {}
                    }
                    return "function" == typeof u && u.apply(this, a(arguments))
                }

                function UncaughtException(t, n, e) {
                    this.message = t || "Uncaught error with no additional information", this.sourceURL = n, this.line = e
                }

                function o(t, n) {
                    var e = n ? null : c.now();
                    i("err", [t, e])
                }
                var i = t("handle"),
                    a = t(22),
                    s = t("ee"),
                    c = t("loader"),
                    f = t("gos"),
                    u = window.onerror,
                    d = !1,
                    l = "nr@seenError",
                    p = 0;
                c.features.err = !0, t(1), window.onerror = r;
                try {
                    throw new Error
                } catch (h) {
                    "stack" in h && (t(9), t(8), "addEventListener" in window && t(5), c.xhrWrappable && t(10), d = !0)
                }
                s.on("fn-start", function(t, n, e) {
                    d && (p += 1)
                }), s.on("fn-err", function(t, n, e) {
                    d && !e[l] && (f(e, l, function() {
                        return !0
                    }), this.thrown = !0, o(e))
                }), s.on("fn-end", function() {
                    d && !this.thrown && p > 0 && (p -= 1)
                }), s.on("internal-error", function(t) {
                    i("ierr", [t, c.now(), !0])
                })
            }, {}],
            3: [function(t, n, e) {
                t("loader").features.ins = !0
            }, {}],
            4: [function(t, n, e) {
                function r(t) {}
                if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
                    var o = t("ee"),
                        i = t("handle"),
                        a = t(9),
                        s = t(8),
                        c = "learResourceTimings",
                        f = "addEventListener",
                        u = "resourcetimingbufferfull",
                        d = "bstResource",
                        l = "resource",
                        p = "-start",
                        h = "-end",
                        m = "fn" + p,
                        w = "fn" + h,
                        v = "bstTimer",
                        g = "pushState",
                        y = t("loader");
                    y.features.stn = !0, t(7), "addEventListener" in window && t(5);
                    var x = NREUM.o.EV;
                    o.on(m, function(t, n) {
                        var e = t[0];
                        e instanceof x && (this.bstStart = y.now())
                    }), o.on(w, function(t, n) {
                        var e = t[0];
                        e instanceof x && i("bst", [e, n, this.bstStart, y.now()])
                    }), a.on(m, function(t, n, e) {
                        this.bstStart = y.now(), this.bstType = e
                    }), a.on(w, function(t, n) {
                        i(v, [n, this.bstStart, y.now(), this.bstType])
                    }), s.on(m, function() {
                        this.bstStart = y.now()
                    }), s.on(w, function(t, n) {
                        i(v, [n, this.bstStart, y.now(), "requestAnimationFrame"])
                    }), o.on(g + p, function(t) {
                        this.time = y.now(), this.startPath = location.pathname + location.hash
                    }), o.on(g + h, function(t) {
                        i("bstHist", [location.pathname + location.hash, this.startPath, this.time])
                    }), f in window.performance && (window.performance["c" + c] ? window.performance[f](u, function(t) {
                        i(d, [window.performance.getEntriesByType(l)]), window.performance["c" + c]()
                    }, !1) : window.performance[f]("webkit" + u, function(t) {
                        i(d, [window.performance.getEntriesByType(l)]), window.performance["webkitC" + c]()
                    }, !1)), document[f]("scroll", r, {
                        passive: !0
                    }), document[f]("keypress", r, !1), document[f]("click", r, !1)
                }
            }, {}],
            5: [function(t, n, e) {
                function r(t) {
                    for (var n = t; n && !n.hasOwnProperty(u);) n = Object.getPrototypeOf(n);
                    n && o(n)
                }

                function o(t) {
                    s.inPlace(t, [u, d], "-", i)
                }

                function i(t, n) {
                    return t[1]
                }
                var a = t("ee").get("events"),
                    s = t("wrap-function")(a, !0),
                    c = t("gos"),
                    f = XMLHttpRequest,
                    u = "addEventListener",
                    d = "removeEventListener";
                n.exports = a, "getPrototypeOf" in Object ? (r(document), r(window), r(f.prototype)) : f.prototype.hasOwnProperty(u) && (o(window), o(f.prototype)), a.on(u + "-start", function(t, n) {
                    var e = t[1],
                        r = c(e, "nr@wrapped", function() {
                            function t() {
                                if ("function" == typeof e.handleEvent) return e.handleEvent.apply(e, arguments)
                            }
                            var n = {
                                object: t,
                                "function": e
                            } [typeof e];
                            return n ? s(n, "fn-", null, n.name || "anonymous") : e
                        });
                    this.wrapped = t[1] = r
                }), a.on(d + "-start", function(t) {
                    t[1] = this.wrapped || t[1]
                })
            }, {}],
            6: [function(t, n, e) {
                function r(t, n, e) {
                    var r = t[n];
                    "function" == typeof r && (t[n] = function() {
                        var t = i(arguments),
                            n = {};
                        o.emit(e + "before-start", [t], n);
                        var a;
                        n[m] && n[m].dt && (a = n[m].dt);
                        var s = r.apply(this, t);
                        return o.emit(e + "start", [t, a], s), s.then(function(t) {
                            return o.emit(e + "end", [null, t], s), t
                        }, function(t) {
                            throw o.emit(e + "end", [t], s), t
                        })
                    })
                }
                var o = t("ee").get("fetch"),
                    i = t(22),
                    a = t(21);
                n.exports = o;
                var s = window,
                    c = "fetch-",
                    f = c + "body-",
                    u = ["arrayBuffer", "blob", "json", "text", "formData"],
                    d = s.Request,
                    l = s.Response,
                    p = s.fetch,
                    h = "prototype",
                    m = "nr@context";
                d && l && p && (a(u, function(t, n) {
                    r(d[h], n, f), r(l[h], n, f)
                }), r(s, "fetch", c), o.on(c + "end", function(t, n) {
                    var e = this;
                    if (n) {
                        var r = n.headers.get("content-length");
                        null !== r && (e.rxSize = r), o.emit(c + "done", [null, n], e)
                    } else o.emit(c + "done", [t], e)
                }))
            }, {}],
            7: [function(t, n, e) {
                var r = t("ee").get("history"),
                    o = t("wrap-function")(r);
                n.exports = r;
                var i = window.history && window.history.constructor && window.history.constructor.prototype,
                    a = window.history;
                i && i.pushState && i.replaceState && (a = i), o.inPlace(a, ["pushState", "replaceState"], "-")
            }, {}],
            8: [function(t, n, e) {
                var r = t("ee").get("raf"),
                    o = t("wrap-function")(r),
                    i = "equestAnimationFrame";
                n.exports = r, o.inPlace(window, ["r" + i, "mozR" + i, "webkitR" + i, "msR" + i], "raf-"), r.on("raf-start", function(t) {
                    t[0] = o(t[0], "fn-")
                })
            }, {}],
            9: [function(t, n, e) {
                function r(t, n, e) {
                    t[0] = a(t[0], "fn-", null, e)
                }

                function o(t, n, e) {
                    this.method = e, this.timerDuration = isNaN(t[1]) ? 0 : +t[1], t[0] = a(t[0], "fn-", this, e)
                }
                var i = t("ee").get("timer"),
                    a = t("wrap-function")(i),
                    s = "setTimeout",
                    c = "setInterval",
                    f = "clearTimeout",
                    u = "-start",
                    d = "-";
                n.exports = i, a.inPlace(window, [s, "setImmediate"], s + d), a.inPlace(window, [c], c + d), a.inPlace(window, [f, "clearImmediate"], f + d), i.on(c + u, r), i.on(s + u, o)
            }, {}],
            10: [function(t, n, e) {
                function r(t, n) {
                    d.inPlace(n, ["onreadystatechange"], "fn-", s)
                }

                function o() {
                    var t = this,
                        n = u.context(t);
                    t.readyState > 3 && !n.resolved && (n.resolved = !0, u.emit("xhr-resolved", [], t)), d.inPlace(t, g, "fn-", s)
                }

                function i(t) {
                    y.push(t), h && (b ? b.then(a) : w ? w(a) : (E = -E, O.data = E))
                }

                function a() {
                    for (var t = 0; t < y.length; t++) r([], y[t]);
                    y.length && (y = [])
                }

                function s(t, n) {
                    return n
                }

                function c(t, n) {
                    for (var e in t) n[e] = t[e];
                    return n
                }
                t(5);
                var f = t("ee"),
                    u = f.get("xhr"),
                    d = t("wrap-function")(u),
                    l = NREUM.o,
                    p = l.XHR,
                    h = l.MO,
                    m = l.PR,
                    w = l.SI,
                    v = "readystatechange",
                    g = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
                    y = [];
                n.exports = u;
                var x = window.XMLHttpRequest = function(t) {
                    var n = new p(t);
                    try {
                        u.emit("new-xhr", [n], n), n.addEventListener(v, o, !1)
                    } catch (e) {
                        try {
                            u.emit("internal-error", [e])
                        } catch (r) {}
                    }
                    return n
                };
                if (c(p, x), x.prototype = p.prototype, d.inPlace(x.prototype, ["open", "send"], "-xhr-", s), u.on("send-xhr-start", function(t, n) {
                        r(t, n), i(n)
                    }), u.on("open-xhr-start", r), h) {
                    var b = m && m.resolve();
                    if (!w && !m) {
                        var E = 1,
                            O = document.createTextNode(E);
                        new h(a).observe(O, {
                            characterData: !0
                        })
                    }
                } else f.on("fn-end", function(t) {
                    t[0] && t[0].type === v || a()
                })
            }, {}],
            11: [function(t, n, e) {
                function r(t) {
                    if (!i(t)) return null;
                    var n = window.NREUM;
                    if (!n.loader_config) return null;
                    var e = (n.loader_config.accountID || "").toString() || null,
                        r = (n.loader_config.agentID || "").toString() || null,
                        s = (n.loader_config.trustKey || "").toString() || null;
                    if (!e || !r) return null;
                    var c = a.generateCatId(),
                        f = a.generateCatId(),
                        u = Date.now(),
                        d = o(c, f, u, e, r, s);
                    return {
                        header: d,
                        guid: c,
                        traceId: f,
                        timestamp: u
                    }
                }

                function o(t, n, e, r, o, i) {
                    var a = "btoa" in window && "function" == typeof window.btoa;
                    if (!a) return null;
                    var s = {
                        v: [0, 1],
                        d: {
                            ty: "Browser",
                            ac: r,
                            ap: o,
                            id: t,
                            tr: n,
                            ti: e
                        }
                    };
                    return i && r !== i && (s.d.tk = i), btoa(JSON.stringify(s))
                }

                function i(t) {
                    var n = !1,
                        e = !1,
                        r = {};
                    if ("init" in NREUM && "distributed_tracing" in NREUM.init && (r = NREUM.init.distributed_tracing, e = !!r.enabled), e)
                        if (t.sameOrigin) n = !0;
                        else if (r.allowed_origins instanceof Array)
                        for (var o = 0; o < r.allowed_origins.length; o++) {
                            var i = s(r.allowed_origins[o]);
                            if (t.hostname === i.hostname && t.protocol === i.protocol && t.port === i.port) {
                                n = !0;
                                break
                            }
                        }
                    return e && n
                }
                var a = t(19),
                    s = t(13);
                n.exports = {
                    generateTracePayload: r,
                    shouldGenerateTrace: i
                }
            }, {}],
            12: [function(t, n, e) {
                function r(t) {
                    var n = this.params,
                        e = this.metrics;
                    if (!this.ended) {
                        this.ended = !0;
                        for (var r = 0; r < l; r++) t.removeEventListener(d[r], this.listener, !1);
                        n.aborted || (e.duration = a.now() - this.startTime, this.loadCaptureCalled || 4 !== t.readyState ? null == n.status && (n.status = 0) : i(this, t), e.cbTime = this.cbTime, u.emit("xhr-done", [t], t), s("xhr", [n, e, this.startTime]))
                    }
                }

                function o(t, n) {
                    var e = c(n),
                        r = t.params;
                    r.host = e.hostname + ":" + e.port, r.pathname = e.pathname, t.parsedOrigin = c(n), t.sameOrigin = t.parsedOrigin.sameOrigin
                }

                function i(t, n) {
                    t.params.status = n.status;
                    var e = w(n, t.lastSize);
                    if (e && (t.metrics.rxSize = e), t.sameOrigin) {
                        var r = n.getResponseHeader("X-NewRelic-App-Data");
                        r && (t.params.cat = r.split(", ").pop())
                    }
                    t.loadCaptureCalled = !0
                }
                var a = t("loader");
                if (a.xhrWrappable) {
                    var s = t("handle"),
                        c = t(13),
                        f = t(11).generateTracePayload,
                        u = t("ee"),
                        d = ["load", "error", "abort", "timeout"],
                        l = d.length,
                        p = t("id"),
                        h = t(17),
                        m = t(16),
                        w = t(14),
                        v = window.XMLHttpRequest;
                    a.features.xhr = !0, t(10), t(6), u.on("new-xhr", function(t) {
                        var n = this;
                        n.totalCbs = 0, n.called = 0, n.cbTime = 0, n.end = r, n.ended = !1, n.xhrGuids = {}, n.lastSize = null, n.loadCaptureCalled = !1, t.addEventListener("load", function(e) {
                            i(n, t)
                        }, !1), h && (h > 34 || h < 10) || window.opera || t.addEventListener("progress", function(t) {
                            n.lastSize = t.loaded
                        }, !1)
                    }), u.on("open-xhr-start", function(t) {
                        this.params = {
                            method: t[0]
                        }, o(this, t[1]), this.metrics = {}
                    }), u.on("open-xhr-end", function(t, n) {
                        "loader_config" in NREUM && "xpid" in NREUM.loader_config && this.sameOrigin && n.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid);
                        var e = f(this.parsedOrigin);
                        e && e.header && (n.setRequestHeader("newrelic", e.header), this.dt = e)
                    }), u.on("send-xhr-start", function(t, n) {
                        var e = this.metrics,
                            r = t[0],
                            o = this;
                        if (e && r) {
                            var i = m(r);
                            i && (e.txSize = i)
                        }
                        this.startTime = a.now(), this.listener = function(t) {
                            try {
                                "abort" !== t.type || o.loadCaptureCalled || (o.params.aborted = !0), ("load" !== t.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof n.onload)) && o.end(n)
                            } catch (e) {
                                try {
                                    u.emit("internal-error", [e])
                                } catch (r) {}
                            }
                        };
                        for (var s = 0; s < l; s++) n.addEventListener(d[s], this.listener, !1)
                    }), u.on("xhr-cb-time", function(t, n, e) {
                        this.cbTime += t, n ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof e.onload || this.end(e)
                    }), u.on("xhr-load-added", function(t, n) {
                        var e = "" + p(t) + !!n;
                        this.xhrGuids && !this.xhrGuids[e] && (this.xhrGuids[e] = !0, this.totalCbs += 1)
                    }), u.on("xhr-load-removed", function(t, n) {
                        var e = "" + p(t) + !!n;
                        this.xhrGuids && this.xhrGuids[e] && (delete this.xhrGuids[e], this.totalCbs -= 1)
                    }), u.on("addEventListener-end", function(t, n) {
                        n instanceof v && "load" === t[0] && u.emit("xhr-load-added", [t[1], t[2]], n)
                    }), u.on("removeEventListener-end", function(t, n) {
                        n instanceof v && "load" === t[0] && u.emit("xhr-load-removed", [t[1], t[2]], n)
                    }), u.on("fn-start", function(t, n, e) {
                        n instanceof v && ("onload" === e && (this.onload = !0), ("load" === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = a.now()))
                    }), u.on("fn-end", function(t, n) {
                        this.xhrCbStart && u.emit("xhr-cb-time", [a.now() - this.xhrCbStart, this.onload, n], n)
                    }), u.on("fetch-before-start", function(t) {
                        var n, e = t[1] || {};
                        "string" == typeof t[0] ? n = t[0] : t[0] && t[0].url && (n = t[0].url), n && (this.parsedOrigin = c(n), this.sameOrigin = this.parsedOrigin.sameOrigin);
                        var r = f(this.parsedOrigin);
                        if (r && r.header) {
                            var o = r.header;
                            if ("string" == typeof t[0]) {
                                var i = {};
                                for (var a in e) i[a] = e[a];
                                i.headers = new Headers(e.headers || {}), i.headers.set("newrelic", o), this.dt = r, t.length > 1 ? t[1] = i : t.push(i)
                            } else t[0] && t[0].headers && (t[0].headers.append("newrelic", o), this.dt = r)
                        }
                    })
                }
            }, {}],
            13: [function(t, n, e) {
                var r = {};
                n.exports = function(t) {
                    if (t in r) return r[t];
                    var n = document.createElement("a"),
                        e = window.location,
                        o = {};
                    n.href = t, o.port = n.port;
                    var i = n.href.split("://");
                    !o.port && i[1] && (o.port = i[1].split("/")[0].split("@").pop().split(":")[1]), o.port && "0" !== o.port || (o.port = "https" === i[0] ? "443" : "80"), o.hostname = n.hostname || e.hostname, o.pathname = n.pathname, o.protocol = i[0], "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
                    var a = !n.protocol || ":" === n.protocol || n.protocol === e.protocol,
                        s = n.hostname === document.domain && n.port === e.port;
                    return o.sameOrigin = a && (!n.hostname || s), "/" === o.pathname && (r[t] = o), o
                }
            }, {}],
            14: [function(t, n, e) {
                function r(t, n) {
                    var e = t.responseType;
                    return "json" === e && null !== n ? n : "arraybuffer" === e || "blob" === e || "json" === e ? o(t.response) : "text" === e || "document" === e || "" === e || void 0 === e ? o(t.responseText) : void 0
                }
                var o = t(16);
                n.exports = r
            }, {}],
            15: [function(t, n, e) {
                function r() {}

                function o(t, n, e) {
                    return function() {
                        return i(t, [f.now()].concat(s(arguments)), n ? null : this, e), n ? void 0 : this
                    }
                }
                var i = t("handle"),
                    a = t(21),
                    s = t(22),
                    c = t("ee").get("tracer"),
                    f = t("loader"),
                    u = NREUM;
                "undefined" == typeof window.newrelic && (newrelic = u);
                var d = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"],
                    l = "api-",
                    p = l + "ixn-";
                a(d, function(t, n) {
                    u[n] = o(l + n, !0, "api")
                }), u.addPageAction = o(l + "addPageAction", !0), u.setCurrentRouteName = o(l + "routeName", !0), n.exports = newrelic, u.interaction = function() {
                    return (new r).get()
                };
                var h = r.prototype = {
                    createTracer: function(t, n) {
                        var e = {},
                            r = this,
                            o = "function" == typeof n;
                        return i(p + "tracer", [f.now(), t, e], r),
                            function() {
                                if (c.emit((o ? "" : "no-") + "fn-start", [f.now(), r, o], e), o) try {
                                    return n.apply(this, arguments)
                                } catch (t) {
                                    throw c.emit("fn-err", [arguments, this, t], e), t
                                } finally {
                                    c.emit("fn-end", [f.now()], e)
                                }
                            }
                    }
                };
                a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function(t, n) {
                    h[n] = o(p + n)
                }), newrelic.noticeError = function(t, n) {
                    "string" == typeof t && (t = new Error(t)), i("err", [t, f.now(), !1, n])
                }
            }, {}],
            16: [function(t, n, e) {
                n.exports = function(t) {
                    if ("string" == typeof t && t.length) return t.length;
                    if ("object" == typeof t) {
                        if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength) return t.byteLength;
                        if ("undefined" != typeof Blob && t instanceof Blob && t.size) return t.size;
                        if (!("undefined" != typeof FormData && t instanceof FormData)) try {
                            return JSON.stringify(t).length
                        } catch (n) {
                            return
                        }
                    }
                }
            }, {}],
            17: [function(t, n, e) {
                var r = 0,
                    o = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                o && (r = +o[1]), n.exports = r
            }, {}],
            18: [function(t, n, e) {
                function r(t, n) {
                    var e = t.getEntries();
                    e.forEach(function(t) {
                        "first-paint" === t.name ? c("timing", ["fp", Math.floor(t.startTime)]) : "first-contentful-paint" === t.name && c("timing", ["fcp", Math.floor(t.startTime)])
                    })
                }

                function o(t, n) {
                    var e = t.getEntries();
                    e.length > 0 && c("lcp", [e[e.length - 1]])
                }

                function i(t) {
                    if (t instanceof u && !l) {
                        var n, e = Math.round(t.timeStamp);
                        n = e > 1e12 ? Date.now() - e : f.now() - e, l = !0, c("timing", ["fi", e, {
                            type: t.type,
                            fid: n
                        }])
                    }
                }
                if (!("init" in NREUM && "page_view_timing" in NREUM.init && "enabled" in NREUM.init.page_view_timing && NREUM.init.page_view_timing.enabled === !1)) {
                    var a, s, c = t("handle"),
                        f = t("loader"),
                        u = NREUM.o.EV;
                    if ("PerformanceObserver" in window && "function" == typeof window.PerformanceObserver) {
                        a = new PerformanceObserver(r), s = new PerformanceObserver(o);
                        try {
                            a.observe({
                                entryTypes: ["paint"]
                            }), s.observe({
                                entryTypes: ["largest-contentful-paint"]
                            })
                        } catch (d) {}
                    }
                    if ("addEventListener" in document) {
                        var l = !1,
                            p = ["click", "keydown", "mousedown", "pointerdown", "touchstart"];
                        p.forEach(function(t) {
                            document.addEventListener(t, i, !1)
                        })
                    }
                }
            }, {}],
            19: [function(t, n, e) {
                function r() {
                    function t() {
                        return n ? 15 & n[e++] : 16 * Math.random() | 0
                    }
                    var n = null,
                        e = 0,
                        r = window.crypto || window.msCrypto;
                    r && r.getRandomValues && (n = r.getRandomValues(new Uint8Array(31)));
                    for (var o, i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", a = "", s = 0; s < i.length; s++) o = i[s], "x" === o ? a += t().toString(16) : "y" === o ? (o = 3 & t() | 8, a += o.toString(16)) : a += o;
                    return a
                }

                function o() {
                    function t() {
                        return n ? 15 & n[e++] : 16 * Math.random() | 0
                    }
                    var n = null,
                        e = 0,
                        r = window.crypto || window.msCrypto;
                    r && r.getRandomValues && Uint8Array && (n = r.getRandomValues(new Uint8Array(31)));
                    for (var o = [], i = 0; i < 16; i++) o.push(t().toString(16));
                    return o.join("")
                }
                n.exports = {
                    generateUuid: r,
                    generateCatId: o
                }
            }, {}],
            20: [function(t, n, e) {
                function r(t, n) {
                    if (!o) return !1;
                    if (t !== o) return !1;
                    if (!n) return !0;
                    if (!i) return !1;
                    for (var e = i.split("."), r = n.split("."), a = 0; a < r.length; a++)
                        if (r[a] !== e[a]) return !1;
                    return !0
                }
                var o = null,
                    i = null,
                    a = /Version\/(\S+)\s+Safari/;
                if (navigator.userAgent) {
                    var s = navigator.userAgent,
                        c = s.match(a);
                    c && s.indexOf("Chrome") === -1 && s.indexOf("Chromium") === -1 && (o = "Safari", i = c[1])
                }
                n.exports = {
                    agent: o,
                    version: i,
                    match: r
                }
            }, {}],
            21: [function(t, n, e) {
                function r(t, n) {
                    var e = [],
                        r = "",
                        i = 0;
                    for (r in t) o.call(t, r) && (e[i] = n(r, t[r]), i += 1);
                    return e
                }
                var o = Object.prototype.hasOwnProperty;
                n.exports = r
            }, {}],
            22: [function(t, n, e) {
                function r(t, n, e) {
                    n || (n = 0), "undefined" == typeof e && (e = t ? t.length : 0);
                    for (var r = -1, o = e - n || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = t[n + r];
                    return i
                }
                n.exports = r
            }, {}],
            23: [function(t, n, e) {
                n.exports = {
                    exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart
                }
            }, {}],
            ee: [function(t, n, e) {
                function r() {}

                function o(t) {
                    function n(t) {
                        return t && t instanceof r ? t : t ? c(t, s, i) : i()
                    }

                    function e(e, r, o, i) {
                        if (!l.aborted || i) {
                            t && t(e, r, o);
                            for (var a = n(o), s = m(e), c = s.length, f = 0; f < c; f++) s[f].apply(a, r);
                            var d = u[y[e]];
                            return d && d.push([x, e, r, a]), a
                        }
                    }

                    function p(t, n) {
                        g[t] = m(t).concat(n)
                    }

                    function h(t, n) {
                        var e = g[t];
                        if (e)
                            for (var r = 0; r < e.length; r++) e[r] === n && e.splice(r, 1)
                    }

                    function m(t) {
                        return g[t] || []
                    }

                    function w(t) {
                        return d[t] = d[t] || o(e)
                    }

                    function v(t, n) {
                        f(t, function(t, e) {
                            n = n || "feature", y[e] = n, n in u || (u[n] = [])
                        })
                    }
                    var g = {},
                        y = {},
                        x = {
                            on: p,
                            addEventListener: p,
                            removeEventListener: h,
                            emit: e,
                            get: w,
                            listeners: m,
                            context: n,
                            buffer: v,
                            abort: a,
                            aborted: !1
                        };
                    return x
                }

                function i() {
                    return new r
                }

                function a() {
                    (u.api || u.feature) && (l.aborted = !0, u = l.backlog = {})
                }
                var s = "nr@context",
                    c = t("gos"),
                    f = t(21),
                    u = {},
                    d = {},
                    l = n.exports = o();
                l.backlog = u
            }, {}],
            gos: [function(t, n, e) {
                function r(t, n, e) {
                    if (o.call(t, n)) return t[n];
                    var r = e();
                    if (Object.defineProperty && Object.keys) try {
                        return Object.defineProperty(t, n, {
                            value: r,
                            writable: !0,
                            enumerable: !1
                        }), r
                    } catch (i) {}
                    return t[n] = r, r
                }
                var o = Object.prototype.hasOwnProperty;
                n.exports = r
            }, {}],
            handle: [function(t, n, e) {
                function r(t, n, e, r) {
                    o.buffer([t], r), o.emit(t, n, e)
                }
                var o = t("ee").get("handle");
                n.exports = r, r.ee = o
            }, {}],
            id: [function(t, n, e) {
                function r(t) {
                    var n = typeof t;
                    return !t || "object" !== n && "function" !== n ? -1 : t === window ? 0 : a(t, i, function() {
                        return o++
                    })
                }
                var o = 1,
                    i = "nr@id",
                    a = t("gos");
                n.exports = r
            }, {}],
            loader: [function(t, n, e) {
                function r() {
                    if (!E++) {
                        var t = b.info = NREUM.info,
                            n = p.getElementsByTagName("script")[0];
                        if (setTimeout(u.abort, 3e4), !(t && t.licenseKey && t.applicationID && n)) return u.abort();
                        f(y, function(n, e) {
                            t[n] || (t[n] = e)
                        }), c("mark", ["onload", a() + b.offset], null, "api");
                        var e = p.createElement("script");
                        e.src = "https://" + t.agent, n.parentNode.insertBefore(e, n)
                    }
                }

                function o() {
                    "complete" === p.readyState && i()
                }

                function i() {
                    c("mark", ["domContent", a() + b.offset], null, "api")
                }

                function a() {
                    return O.exists && performance.now ? Math.round(performance.now()) : (s = Math.max((new Date).getTime(), s)) - b.offset
                }
                var s = (new Date).getTime(),
                    c = t("handle"),
                    f = t(21),
                    u = t("ee"),
                    d = t(20),
                    l = window,
                    p = l.document,
                    h = "addEventListener",
                    m = "attachEvent",
                    w = l.XMLHttpRequest,
                    v = w && w.prototype;
                NREUM.o = {
                    ST: setTimeout,
                    SI: l.setImmediate,
                    CT: clearTimeout,
                    XHR: w,
                    REQ: l.Request,
                    EV: l.Event,
                    PR: l.Promise,
                    MO: l.MutationObserver
                };
                var g = "" + location,
                    y = {
                        beacon: "bam.nr-data.net",
                        errorBeacon: "bam.nr-data.net",
                        agent: "js-agent.newrelic.com/nr-1167.min.js"
                    },
                    x = w && v && v[h] && !/CriOS/.test(navigator.userAgent),
                    b = n.exports = {
                        offset: s,
                        now: a,
                        origin: g,
                        features: {},
                        xhrWrappable: x,
                        userAgent: d
                    };
                t(15), t(18), p[h] ? (p[h]("DOMContentLoaded", i, !1), l[h]("load", r, !1)) : (p[m]("onreadystatechange", o), l[m]("onload", r)), c("mark", ["firstbyte", s], null, "api");
                var E = 0,
                    O = t(23)
            }, {}],
            "wrap-function": [function(t, n, e) {
                function r(t) {
                    return !(t && t instanceof Function && t.apply && !t[a])
                }
                var o = t("ee"),
                    i = t(22),
                    a = "nr@original",
                    s = Object.prototype.hasOwnProperty,
                    c = !1;
                n.exports = function(t, n) {
                    function e(t, n, e, o) {
                        function nrWrapper() {
                            var r, a, s, c;
                            try {
                                a = this, r = i(arguments), s = "function" == typeof e ? e(r, a) : e || {}
                            } catch (f) {
                                l([f, "", [r, a, o], s])
                            }
                            u(n + "start", [r, a, o], s);
                            try {
                                return c = t.apply(a, r)
                            } catch (d) {
                                throw u(n + "err", [r, a, d], s), d
                            } finally {
                                u(n + "end", [r, a, c], s)
                            }
                        }
                        return r(t) ? t : (n || (n = ""), nrWrapper[a] = t, d(t, nrWrapper), nrWrapper)
                    }

                    function f(t, n, o, i) {
                        o || (o = "");
                        var a, s, c, f = "-" === o.charAt(0);
                        for (c = 0; c < n.length; c++) s = n[c], a = t[s], r(a) || (t[s] = e(a, f ? s + o : o, i, s))
                    }

                    function u(e, r, o) {
                        if (!c || n) {
                            var i = c;
                            c = !0;
                            try {
                                t.emit(e, r, o, n)
                            } catch (a) {
                                l([a, e, r, o])
                            }
                            c = i
                        }
                    }

                    function d(t, n) {
                        if (Object.defineProperty && Object.keys) try {
                            var e = Object.keys(t);
                            return e.forEach(function(e) {
                                Object.defineProperty(n, e, {
                                    get: function() {
                                        return t[e]
                                    },
                                    set: function(n) {
                                        return t[e] = n, n
                                    }
                                })
                            }), n
                        } catch (r) {
                            l([r])
                        }
                        for (var o in t) s.call(t, o) && (n[o] = t[o]);
                        return n
                    }

                    function l(n) {
                        try {
                            t.emit("internal-error", n)
                        } catch (e) {}
                    }
                    return t || (t = o), e.inPlace = f, e.flag = a, e
                }
            }, {}]
        }, {}, ["loader", 2, 12, 4, 3]);
    </script>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="-1">
    <meta name="format-detection" content="telephone=no">
    <title>アイドルマスター シンデレラガールズ</title>
    <link rel="stylesheet" type="text/css" href="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcss%2Frich%2Fnew_mypage_common.css%3Fv%3D20200214144621" media="all">
    <link rel="apple-touch-icon-precomposed" href="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Ficon_bookmark.png%3Fv%3D20191128144726">
    <script>
        (function() {
            window.console.log = function() {};
        })();
    </script>
    <script type="text/javascript">
        if (window.localStorage) {
            var displaySet = localStorage.getItem('DisplayPositionSet');
            if (displaySet == 1) {
                if (navigator.userAgent.indexOf('Android') > 0) {
                    document.write('<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">');
                    document.getElementsByTagName('html')[0].style.zoom = document.documentElement.clientWidth / 320;
                } else {
                    document.write('<meta name="viewport" content="width=320, user-scalable=no">');
                }
                window.addEventListener('resize', function() {
                    if (navigator.userAgent.indexOf('Android') > 0) document.getElementsByTagName('html')[0].style.zoom = document.documentElement.clientWidth / 320;
                });
            } else {
                document.write('<meta name="viewport" content="width=device-width, user-scalable=no">');
            }
        } else {
            document.write('<meta name="viewport" content="width=device-width, user-scalable=no">');
        }
    </script>
    <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fjquery-2.2.2.min.js%3Fv%3D20101001000000"></script>
    <script>
        (function() {
            window.viewer_id = 150483778;
            var _url = "http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fgame_error%2Freport_js_error%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D506976450";
            var _path = location.href;
            var _spec_obj;
            var _spec = 'none';
            var version = 1;
            // access方法検出
            _spec_obj = {
                'isNative': false,
                'isAndApp': false,
                'isShellApp': false,
                'isIosApp': false,
                'isChromeApp': false
            };
            window._spec = _spec_obj;
            if (_spec.isAndApp) {
                _spec = 'andapp'
            } else if (_spec.isIosApp) {
                _spec = 'iosApp';
            } else if (_spec.isShellApp) {
                _spec = 'shellapp';
            } else {
                _spec = 'browser?';
            }
            var _ua = window.navigator.userAgent.toLowerCase();
            window.onerror = function(msg, file, line, col, error) {
                $.ajax({
                    url: _url,
                    type: 'post',
                    data: {
                        'ua': _ua,
                        'viewer_id': window.viewer_id,
                        'path': _path,
                        'line': line,
                        'column': col,
                        'error': error,
                        'spec': _spec,
                        'spec_obj': _spec_obj,
                        'version': version
                    }
                })
            };
        })();
    </script>
    <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Funderscore-min.js%3Fv%3D20101001000000"></script>
    <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Frequire.js%3Fv%3D20101001000000"></script>
    <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Frequire.js%3Fv%3D20101001000000"></script>
    <script>
        requirejs.config({
            paths: {
                easeljs: "http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Feaseljs-0.8.2.min.js%3Fv%3D20101001000000",
                easeljs_0_7_1: "http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Feaseljs-0.7.1.min.js%3Fv%3D20101001000000", //スプライトを読むためのバージョン
                tweenjs: "http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Ftweenjs-0.6.2.min.js%3Fv%3D20101001000000",
                movieclipjs: "http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fmovieclip-0.7.1.min.js%3Fv%3D20190524145756",
                createjs: "http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcreatejs-2015.11.26.min.js%3Fv%3D20190909144732",
            }
        })
    </script>
    <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcommon.js%3Fv%3D20191018114616"></script>
    <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcommon_new.js%3Fv%3D20191212144612"></script>
    <script>
        $(function() {
            window.$ibox = $('.ibox').ibox();
        });
    </script>
    <script>
        $(document).ready(function() {
            if (typeof newrelic === 'object' && typeof newrelic.setPageViewName === 'function') {
                newrelic.setPageViewName('/idolmaster/index.php/idol_gallery/idol_detail/c55d799ec6a7189b86c2c61309ff705e');
            }
        });
    </script>
    <script type='text/javascript'>
        var se_flg = 0,
            bgm_flg = 0,
            chrome_app_flg = 0,
            chrome_app_extension_id = 'dnacabmnfmejgfffmcehejcmiciinpej';
    </script>
    <script type='text/javascript' src='http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fapp_sound.js%3Fv%3D20101001000000'></script>
    <link rel="stylesheet" type="text/css" href="http://sp.pf-img-a.mbga.jp/css/base.css?20171116" />
</head>

<body id="idol_gallery" class="idol_detail">
    <div id="top" class="page_container jsOnBtn">
        <nav class="area_menu_header">
            <div class="area_menu_header_6btn">
                <h1 id="JtextLimit">アイドルギャラリー</h1>
                <ul>
                    <li><a class="head_menu_01" href="http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmypage%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D788598964">
                            <div></div>
                        </a></li>
                    <li><a class="head_menu_02" href="http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fpetit_cg%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D729952481">
                            <div></div>
                        </a></li>
                    <li><a class="head_menu_03" href="http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fgacha%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D618530016">
                            <div></div>
                        </a></li>
                    <li><a class="head_menu_04" href="http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcard_str%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D221685289">
                            <div></div>
                        </a></li>
                    <li><a class="head_menu_05" href="http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fauction%2Fauction_top%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D70622214">
                            <div></div>
                        </a></li>
                    <li><a class="head_menu_06 se_000" href="#" id="headerAcd">
                            <div></div>
                        </a></li>
                </ul>
            </div>
            <div id="headerPopupMenu" class="headerPopupMenu">
                <div class="m-Top10 t-Cnt">
                    <a href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fevent_jam%2Findex%3Fbanner_id%3D0002003%26img%3D0%26l_frm%3DIdol_gallery_idol_detail_1%26rnd%3D771668213' class="jsOnDesignBtn"><img src='http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fevent%2F2003%2Fbanner_event_01.png%3Fv%3D20200207144614' width="280" height="60"></a>
                </div>
                <div class="area_menu_header_main4">
                    <ul>
                        <li><a class="btn_menu_header_lesson" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcard_str%3Fl_frm%3DIdol_gallery_idol_detail_2%26rnd%3D812185450'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_work" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fquests%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D594268981'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_livebattle" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fbattles%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D21056876'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_deck" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fdeck%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D958384289'>
                                <div></div>
                            </a></li>
                    </ul>
                </div>
                <h3 class="icon_menu_header_01"></h3>
                <div class="area_menu_header_4">
                    <ul>
                        <li><a class="btn_menu_header_shop" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fshop%2Findex%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D776136356'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_item" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fitem%2Findex%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D94718212'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_present" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fpresent%2Frecieve%2F%3Fview_auth_type%3D1%26cache%3D1%26l_frm%3DIdol_gallery_idol_detail_1%26rnd%3D775523984'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_change" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fexchange%2Fmedal_list%2F999999%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D197698069'>
                                <div></div>
                            </a></li>
                    </ul>
                </div>
                <h3 class="icon_menu_header_02"></h3>
                <div class="area_menu_header_5">
                    <ul>
                        <li><a class="btn_menu_header_idollist" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcard_list%2Findex%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D906765966'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_trainer" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcard_storage%2Findex%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D6837887'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_production" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fknights%2Fnot_join_knights_top%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D438431339'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_pra" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fp_ranking_award%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D925691125'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_profile" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fresults%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D129909826'>
                                <div></div>
                            </a></li>
                    </ul>
                </div>
                <h3 class="icon_menu_header_03"></h3>
                <div class="area_menu_header_4">
                    <ul>
                        <li><a class="btn_menu_header_favorite" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Ffriend%2Findex%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D723675854'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_memory" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmemorial%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D665058910'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_gamecenter" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fgame_center%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D174425062'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_sound" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fs_booth%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D271701316'>
                                <div></div>
                            </a></li>
                    </ul>
                </div>
                <h3 class="icon_menu_header_04"></h3>
                <div class="area_menu_header_3">
                    <ul>
                        <li><a class="btn_menu_header_setting" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fpersonal_option%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D496986753'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_help" href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fadvise%2Findex%2Ftop%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D776679025'>
                                <div></div>
                            </a></li>
                        <li><a class="btn_menu_header_top" href='http://sp.pf.mbga.jp/12008305/?guid=ON'>
                                <div></div>
                            </a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <input id="delay" type="hidden" value="0">
        <link rel="stylesheet" type="text/css" href="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcss%2Frich%2Fidol_gallery.css%3Fv%3D20190709144646" media="all">
        <style>
            .idolProfile {
                margin-bottom: 0;
            }
        </style>
        <div id="idol-base-content" class="m-Btm10">
        </div>
        <div class="idolList" style="height:66px;overflow:hidden;position:relative;top:-5px;">
            <ul class="slides">
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fc55d799ec6a7189b86c2c61309ff705e.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="0">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Faf03f83edd3f6081e7a94f7dee76c69c.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="1">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F366697976ec9eadf5d9af8aa05627c06.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="2">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F0704a849a66af4661b4b5fca9bdd29d8.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="3">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F8e63cd4a640f8f1d81aa58b0f5b965e1.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="4">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F206627c86b320778aa94bb336021a57f.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="5">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fffb2c98591b0c9c025db8d210b9eceb7.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="6">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F1bad11e08f6d67660858e2a625af9706.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="7">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Ffb45408d80ff8a8e68f9cfec61234780.jpg%3Fv%3D20190524145642) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="8">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F7ccda474194bb3f8016aa424f79476e2.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="9">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F8c991c6f3c84bca4c63100d6cc99a040.jpg%3Fv%3D20190524145642) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="10">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F4201c7600dcea270874eacee8ecfd9c7.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="11">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fcefc8b04bb8f382379fa66d63aab3243.jpg%3Fv%3D20190524145642) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="12">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F42dceae39ac53e024fb6db76cc26f411.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="13">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="14">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="15">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="16">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="17">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="18">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="19">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="20">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="21">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="22">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="23">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="24">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="25">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="26">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="27">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="28">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="29">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="30">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="31">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="32">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145643) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="33">
                        </div>
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="34">
                        </div>
                    </div>
                </li>
                <li style="width: 318px;padding-left: 2px">
                    <div class="displayBox">
                        <div class="idol" style="background:url(http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631) no-repeat; background-size:54px 54px;width:54px;height:54px;position:relative;" data-index="35">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <ol class="icon_navi" style="position:relative;margin-bottom: -1px;margin-top: -7px;">
            <li><a>1</a></li>
            <li><a>2</a></li>
            <li><a>3</a></li>
            <li><a>4</a></li>
            <li><a>5</a></li>
            <li><a>6</a></li>
            <li><a>7</a></li>
            <li><a>8</a></li>
        </ol>
        <div id="tab-content" style="position:relative;z-index:1">
        </div>
        <div class="area_tab_1">
            <div id="profile-content">
            </div>
            <div class="displayBox" style="-webkit-box-pack:center;width:300px;">
                <div style="width:50%">
                    <a class="btn_3rd_anniversary js_submit_check_idol_comment_3rd m-Top10 t-Cnt jsOnDesignBtn"></a>
                    <form method="post" action='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcampaign%2Fcheck_idol_comment%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D847849181' class="form_check_idol_comment_3rd" style="display:none;">
                        <input type="hidden" name="character_id" value="158">
                        <input type="hidden" name="select_card_hash" value="">
                    </form>
                </div>
                <div style="width:50%">
                    <a class="btn_5th_anniversary js_submit_check_idol_comment_5th m-Top10 t-Cnt jsOnDesignBtn"></a>
                    <form method="post" action='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcampaign_present%2Fredirect_flash_idol_comment_replay%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D60963303' class="form_check_idol_comment_5th" style="display:none;">
                        <input type="hidden" name="card_hash" value="">
                        <input type="hidden" name="redirect_url" value="">
                        <input type="hidden" name="campaign_id" value="114">
                        <input type="hidden" name="chapter_id" value="1">
                    </form>
                </div>
            </div>
        </div>
        <div class="area_tab_2">
            <div id="comment-content">
            </div>
        </div>
        <div class="area_tab_3">
            <div id="story-content" class="jsOnDesignBtn-wrap">
            </div>
        </div>
        <div class="area_tab_4">
            <div id="parameter-content" class="jsOnBtn-wrap">
            </div>
        </div>
        <style type="text/css">
            <!--
            .checkForm {
                width: 260px;
                height: 32px;
                position: relative;
                margin: 5px 10px;
                text-align: center;
                line-height: 34px;
                float: left;
                padding-left: 28px;
            }

            .ep_on {
                background: url('http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Frich%2Ficon%2Ficon_checkbox_on.png%3Fv%3D20101001000000') no-repeat 35px 5px;
                background-size: 21px;
            }

            .ep_off {
                background: url('http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Frich%2Ficon%2Ficon_checkbox_off.png%3Fv%3D20101001000000') no-repeat 35px 5px;
                background-size: 21px;
            }
            -->
        </style>
        <script type="text/template" id="tab-4-template">
            <div id="contents_tab" class="tab_common-large m-Top4 m-Btm8" style="font-size:11px">
<a name="tab_1" href="#" class="tab_line_4 tab_text selected" style="font-size:11px;">プロフィール</a>
<a name="tab_2" href="#" class="tab_line_4 tab_text js_tab_comment_list" style="font-size:11px;">セリフ一覧</a>
<a name="tab_3" href="#" class="tab_line_4 tab_text" style="font-size:11px;">エピソード</a>
<a name="tab_4" href="#" class="tab_line_4 tab_text" style="font-size:11px;">アイドル情報</a>
</div>
</script>
        <script type="text/template" id="tab-3-template">
            <div id="contents_tab" class="tab_common-large m-Top4 m-Btm8">
<a name="tab_1" class="tab_line_3 tab_text" href="#">プロフィール</a>
<a name="tab_2" class="tab_line_3 tab_text js_tab_comment_list" href="#">セリフ一覧</a>
<a name="tab_3" href="#" style='display:none;'>エピソード</a>
<a name="tab_4" class="tab_line_3 tab_text" href="#">アイドル情報</a>
</div>
</script>
        <script type="text/template" id="idol-base-template">
            <div style="position:relative;top:-20px;padding-top:24px;height:312px;margin-bottom:-143px;">
<div style="background-image:url(<%- idol_image_bg_attribute[idol_detail.data.rarity][idol_detail.data.attribute.substr(0, 2)] %>);background-size:320px;position:absolute;top:0;width:100%;height:100%;"></div>
<% if(idol_detail.data.rarity <= 2) { %>
<% opacity = 0.5 %>
<% } else if (idol_detail.data.rarity <= 4) { %>
<% opacity = 0.6 %>
<% } else { %>
<% opacity = 0 %>
<% } %>
<div style="background:white;width:100%;height:100%;opacity:<%- opacity %>;position:absolute;top:0;"></div>
<div class="displayBox m-Top5 t-Lft" style="width:304px;position:relative;">
<div class="t-Lft" style="width:50%">
<% if(idol_detail.is_exist_archive) { %>
<a class="js_btn_expansion"><img src='<%- idol_image %>' style="width:148px;height:185px;box-shadow: 2px 2px 2px #555555;" /></a>
<% } else { %>
<img src='http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fblank_l.jpg%3Fv%3D20101001000000' style="width:148px;height:185px;box-shadow: 2px 2px 2px #555555;" />
<% } %>
</div>
<div class="t-Rft" style="width:50%">
<div class="detail_idol_name_plate_<%- idol_detail.data.attribute %>">
<div class="detail_idol_alias_name"><%- idol_detail.data.alias_name %></div>
<div class="detail_idol_real_name" <% if(idol_detail.data.alias_name == "") { %>style="top:19px;"<% } %>><%- idol_detail.data.real_name %></div>
</div>
<div class="detail_idol_num_<%- idol_detail.data.attribute %>">
<div class="detail_idol_register_num"><span class="yellow">36</span> / 36</div>
<div class="detail_idol_love_num"><span class="yellow">36</span> / 36</div>
</div>
<% if(birthday_flag) { %>
<div class="icon_birthday"></div>
<% } %>
<% if(+idol_detail.archive.premium && +idol_detail.archive.normal) { %>
<% if(idol_detail.show_card_type == "l_premium") { %>
<a id="btn_normal_sign" class="js_btn_change_card_type"></a>
<% } else { %>
<a id="btn_premium_sign" class="js_btn_change_card_type"></a>
<% } %>
<% } %>
</div>
</div>
</div>
</script>
        <script type="text/template" id="profile-template">
            <section class="idolProfile deck m-Btm5">
<div class="profile_top"></div>
<div class="profile_content">
<div class="profile_box detail_<%- data.attribute %>">
<div class="data_list">
<div class="title kana"></div><div class="pr"><%- profile.card_kana %></div>
</div>
<div class="data_list">
<div class="blk">
<div class="title hgt"></div><div class="pr"><%- profile.card_height %>cm</div>
</div>
<div class="blk">
<div class="title age"></div><div class="pr"><%- profile.card_age %>歳</div>
</div>
</div>
<div class="data_list">
<div class="blk">
<div class="title wgt"></div>
<div class="pr wgt">
<%- profile.card_weight %>
<% if ( /[0-9.]/.test(profile.card_weight) ) { %>
kg
<% } %>
</div>
</div>
<div class="blk">
<div class="title size"></div><div class="pr size"><%- profile.card_bust %>/<%- profile.card_waist %>/<%- profile.card_hip %></div>
</div>
</div>
<div class="data_list">
<div class="blk">
<div class="title bd"></div><div class="pr"><%- profile.card_birthday %></div>
</div>
<div class="blk">
<div class="title cns"></div><div class="pr cns"><%- profile.card_constellation %></div>
</div>
</div>
<div class="data_list">
<div class="blk">
<div class="title bld"></div><div class="pr"><%- profile.card_blood %>型</div>
</div>
<div class="blk">
<div class="title arm"></div><div class="pr"><%- profile.card_arm %></div>
</div>
</div>
<div class="data_list">
<div class="title from"></div><div class="pr"><%- profile.card_from %></div>
</div>
<div class="data_list">
<div class="title hby"></div><div class="pr hby"><%- profile.card_hobby %></div>
</div>
<% if (profile.card_cv) { %> 
<div class="data_list">
<div class="title cv"></div><div class="pr"><%- profile.card_cv %></div>
</div>
<% } %>
</div>
</div>
<div class="profile_bottom"></div>
</section>
</script>
        <script type="text/template" id="comment-template">
            <div class="selectArea type_02 m-Btm8">
<% Object.keys(filtered_comments).forEach(function (key) { %>
<div class="selectArea_accordion">
<div class="selectArea_accordion_title"><div><%- category_names[key] %></div></div>
<div class="selectArea_accordion_body t-Lft">
<div class="selectArea_accordion_body_inner">
<% Object.keys(filtered_comments[key]).forEach(function (key4) { %>
<div class="comment_title_<%- data.attribute %>"><%- type_names[key4] %></div>
<div class="comment_frame_wrapper_<%- data.attribute %> m-Btm8">
<% Object.keys(filtered_comments[key][key4]).forEach(function (key2) { %>
<% var attribute = data.attribute %>
<% if(voice[key2]) { %>
<div class="comment_frame<% if(comments[key2] == "???") { %> _disable<% } %>">
<div><%- filtered_comments[key][key4][key2] %></div>
<% if(voice_enable) { %>
<a class="btn_idol_voice se_000 attribute_<%- attribute.match(/^../) %>_voice_mark_02" id="jsBtnIdolVoice<%= key2 %>"  data-voice-key="<%- key2 %>"><div></div></a>
<% } else { %>
<div class="btn_idol_voice se_000 attribute_<%- attribute.match(/^../) %>_voice_mark_03">
</div>
<% } %>
</div>
<% } else { %>
<div class="comment_frame<% if(comments[key2] == "???") { %> _disable<% } %>">
<div><%- filtered_comments[key][key4][key2] %></div>
<% if(comments[key2] != "???") { %>
<div class="star_<%- attribute %>"></div>
<% } %>
</div>
<% } %>
<% }); %>
</div>
<% }); %>
</div>
</div>
</div>
<% }); %>
</div>
</script>
        <script type="text/template" id="story-template">
            <% for(var i = paging_info.current_page * paging_info.contents_num; i < paging_info.current_page * (paging_info.contents_num) + paging_info.contents_num ; i++) { %>
<% val = idol_story_list[i] %>
<% if(val == undefined) { %>
<% continue; %>
<% } %>
<div class="area-frame_common _hd_blue _bd_black m-Btm10">
    <div class="area-frame_wrap">
        <h3 class="area-frame_header">
            <div class="area-frame_title" style="font-size:14px;"><%- val.story_title %></div>
        </h3>
<div style="width:280px; margin:0 auto; padding:10px 0 0; overflow:hidden;">
<ul class="displayBox t-Cnt">
<% Object.keys(val.icon).forEach(function (key2) { %>
<% total = Object.keys(val.icon).length; %>
<% val2 = val.icon[key2] %>
<% if (+val.open_flag[key2]) { %>
<li style="<% if (total == 2) { %>width:50%;<% } else if(total == 3) { %> width:33%; <% } else { %>margin:0 5px;<% } %>">
<form method="post" action="<%- val.flash_path[key2].replace('__hash_card_id__', idol_detail.data.hash_card_id) %>" style="height:90px;">
<input type="image" src="<%- val2 %>" height="75" class="jsOnDesignBtn"><br>
<% if (+val.voice_enable[key2]) { %>
<input class="movie_name jsOnDesignBtn" type="image" src="<%- val.movie_name_voice[key2] %>" width="77" style="width:77px;position:relative;top:-15px;"><br>
<% } else { %>
<input type="image" src="<%- val.movie_name[key2] %>" width="77" style="width:77px;position:relative;top:-15px;"><br>
<% } %>
<% if (val.story_id > 0 && +val.voice_enable[key2]) { %><input type="hidden" name="voice" value="0"><% } %>
</form>
<% if (+val.voice_enable[key2]) { %>
<% if (!val.voice_attention || !+val.voice_attention[key2]) { %>
<a href='<%- val.voice_url[key2].replace('__hash_card_id__', idol_detail.data.hash_card_id) %>' class="jsOnDesignBtn">
<div style="text-align:center; height:45px; margin:10px 0 5px;">
<img src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_voicepage.jpg%3Fv%3D20101001000000" width="84"><br>
</div>
</a>
<% } %>
<% } %>
</li>
<% } else { %>
<li style="<% if (total == 2) { %> width:50%; <% } else if (total == 3) { %> width:33%;<% } else { %>margin:0 5px;<% } %>">
<div style="height:90px;">
<img src="<%- val2 %>" height="75"><br>
<% if (+val.voice_enable[key2]) { %>
<input class="movie_name" type="image" src="<%- val.movie_name_voice[key2] %>" width="77" style="width:77px;position:relative;top:-15px;"><br>
<% } else { %>
<input type="image" src="<%- val.movie_name[key2] %>" width="77" style="width:77px;position:relative;top:-15px;"><br>
<% } %>
</div>
<% if (+val.voice_enable[key2]) { %>
<% if (!val.voice_attention || !+val.voice_attention[key2]) { %>
<div style="text-align:center; height:45px; margin:10px 0 5px;">
<img src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_voicepage_gray.jpg%3Fv%3D20101001000000" width="84"><br>
</div>
<% } %>
<% } %>
</li>
<% } %>
<% last = key2; %>
<% }); %>
</ul>
<% if (!ios_app_flg || !apple_review) { %>
<% if (val.story_id > 0 && +val.voice_enable[last]) { %>
<div class="checkForm ep_off" style="margin-top:0;margin-bottom:0">
エピソードでボイスを再生させる
</div>
<% } %>
<% } %>
</div>
        <div class="area-frame_bg_image"></div>
    </div>
</div>
<% } %>
<% if (paging_info.max_page_num > 0) { %>
<div class="pager_area" style="height:auto;">
<div class="pager_panel_area">
<% if (paging_info.current_page != 0) { %>
<input type="submit" class="btn_pager_first">
<% } else { %>
<div class="btn_pager_first _disabled"></div>
<% } %>
<% if (paging_info.current_page > 0) { %>
<input type="submit" class="btn_pager_back">
<% } else { %>
<div class="btn_pager_back _disabled"></div>
<% } %>
<% if (paging_info.current_page != paging_info.max_page_num) { %>
<input type="submit" class="btn_pager_next">
<% } else { %>
<div class="btn_pager_next _disabled"></div>
<% } %>
<% if (paging_info.current_page != paging_info.max_page_num) { %>
<input type="submit" class="btn_pager_last">
<% } else { %>
<div class="btn_pager_last _disabled"></div>
<% } %>
<%- paging_info.current_page+1 %> / <%- paging_info.max_page_num+1 %>
</div>
</div>
<% } %>
</script>
        <script type="text/template" id="parameter-template">
            <section class="idolStatus deck m-Btm10">
<div class="data_list">
<div class="wrap">
<div class="title cost"></div><div class="pr" style="width: 42px;"><%- data.cost %></div>
</div>
<div class="wrap" style="margin-left:4px;">
<div class="title att"></div><div class="pr" style="width: 42px;"><%- data.default_attack %></div>
</div>
<div class="wrap" style="margin-left:4px;">
<div class="title def"></div><div class="pr" style="width: 42px;"><%- data.default_defense %></div>
</div>
</div>
<% if (data.skill_effect) { %>
<div class="data_list line">
<div class="wrap">
<div class="title skl"></div><div class="pr"><%- data.skill_name %></div>
</div>
</div>
<%if (!data.grow_idol_flag) { %>
<div class="data_list line">
<div class="wrap">
<div class="title skl_ef"></div><div class="pr"><%- data.skill_effect %></div>
</div>
</div>
<%if ( ! $.isEmptyObject(data.skill_effect_2)) { %>
<div class="data_list line">
<div class="wrap">
<div class="title skl_ef"></div><div class="pr"><%- data.skill_effect_2 %></div>
</div>
</div>
<% } %>
<% } %>
<% } %>
</section>
<% if(trade_prohibition.is_trade_limit) { %>
<div class="t-Cnt red <% if(is_exist_archive) { %>m-Btm8<% } %>">
このアイドルはトレード、フリートレード、贈り物ができません。
</div>
<% } %>
<div class="area-btn-common _base-width">
<% if(!trade_prohibition.is_trade_limit) { %>
<a href='<%- url_trade.replace("__hash_card_id__", data.hash_card_id) %>' class="btn_normal_line_2 <% if(!is_exist_archive) { %>m-Cnt<% } %>" style="font-size:12px">フリートレード検索</a>
<% } %>
<% if(is_exist_archive) { %>
<a href='<%- url_album.replace("__hash_card_id__", data.hash_card_id) %>' class="btn_normal_line_2 <% if(trade_prohibition.is_trade_limit) { %>m-Cnt<% } %>">アルバム</a>
<% } %>
</div>
<% if (event) { %>
<h3 class="title_hanyo m-Top8 m-Btm8">
<div>登場イベント</div>
</h3>
<% Object.keys(event).forEach(function (key) { %>
<div class="t-Cnt m-Btm5">
<% if (event[key].event_name.indexOf("<br />") != -1) { %>
<%- event[key].event_name.slice(0,event[key].event_name.indexOf("<br />")) %><br>
<%- event[key].event_name.slice(event[key].event_name.indexOf("<br />")+6) %>
<% } else if (key == 1908) { %>
<span style="font-size:11px;"><%- event[key].event_name %>(リメイク版)</span>
<% } else { %>
<%- event[key].event_name %>
<% } %>
</div>
<div class="area-btn-common _base-width m-Btm8">
<a href='<%- url_event_memory.replace("__event_id__", event[key].event_id).replace("__category_id__", event[key].category_id) %>' class="btn_normal_line_2 _line_2">イベントメモリー<br>を見る</a>
<a href='<%- url_other_event.replace("__category_id__", event[key].category_id).replace("__event_id__", event[key].event_id) %>' class="btn_normal_line_2 _line_2">他のイベント登場<br>アイドルを検索する</a>
</div>
<% }); %>
<% } %>
</script>
        <script type="text/template" id="popup-expansion-template">
            <div class="js_card_rotate" style="position:relative;z-index:1;margin-bottom:12px;height:380px;">
    <div class="js_current rotate_img" <% if(idol_image_mask_l_p || idol_image_mask_l) { %>twinkle="1"<% } %> style="width:100%">
    <img id="expansion_idol_image" class="js_replace_premium " src='<%- idol_image %>' style="width:100%;" />
    </div>
    <% if(idol_image_nosign) { %>
    <img id="expansion_idol_image_nosign" class="rotate_img" src='<%- idol_image_nosign %>' style="width:100%;" />
    <% } %>
       <% if(idol_image_noframe) { %>
    <img id="expansion_idol_image_noframe" class="rotate_img" src='<%- idol_image_noframe %>' style="width:100%;" />
    <% } %>
        <div class="mask01 cardFrame01">
            <div class="mask02 cardFrame02"></div>
        </div>
    </div>
</script>
        <style type='text/css'>
            .rotate_appear {
                -webkit-animation-name: anime1b;
                -webkit-animation-duration: 200ms;
                -webkit-animation-timing-function: ease-out;
                -webkit-animation-fill-mode: forwards;
            }

            .rotate_disappear {
                -webkit-animation-name: anime1;
                -webkit-animation-duration: 200ms;
                -webkit-animation-timing-function: ease-out;
                -webkit-animation-fill-mode: forwards;
            }

            @-webkit-keyframes anime1 {
                from {
                    -webkit-transform: scale(1, 1);
                    transform: scale(1, 1);
                }

                50% {
                    -webkit-transform: scale(0.5, 1);
                    transform: scale(0.5, 1);
                }

                to {
                    -webkit-transform: scale(0, 1);
                    transform: scale(0, 1);
                }
            }

            @-webkit-keyframes anime1b {
                from {
                    -webkit-transform: scale(0, 1);
                    transform: scale(0, 1);
                }

                50% {
                    -webkit-transform: scale(0.5, 1);
                    transform: scale(0.5, 1);
                }

                to {
                    -webkit-transform: scale(1, 1);
                    transform: scale(1, 1);
                }
            }

            .card_rotate {
                -webkit-user-select: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            }

            .card_img {
                position: absolute;
            }
        </style>
        <style type="text/css">
            .cardSize_l {
                width: 320px;
                height: 400px;
            }

            .cardSize_l .card_img {
                position: absolute;
            }

            .mask01 {
                -webkit-mask-size: 304px 380px;
            }

            .mask02 {
                -webkit-mask-size: 304px 380px;
                -webkit-transition: background-position 0.1s linear;
            }

            .cardFrame01 {
                width: 304px;
                height: 380px;
                overflow: hidden;
                position: absolute;
                top: 0;
                background-size: 304px 380px;
            }

            .cardFrame02 {
                width: 304px;
                height: 380px;
                overflow: hidden;
                position: absolute;
                top: 0;
                background: url('http://125.6.169.35/idolmaster/image_sp/ui/rich/effect/card_effect_01.png') center center;
                background-size: 608px 506px;
            }
        </style>
        <script type="text/javascript">
            (function() {
                var idol = {};
                idol.detail_list = [{
                    "data": {
                        "card_name": "\u5800\u88d5\u5b50",
                        "rarity": "1",
                        "cost": "11",
                        "attribute": "passion",
                        "skill_name": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff88\uff72\uff84\uff71\uff78\uff84",
                        "skill_effect": "",
                        "grow_idol_flag": "",
                        "default_attack": "920",
                        "default_defense": "1360",
                        "hash_card_id": "c55d799ec6a7189b86c2c61309ff705e",
                        "alias_name": "",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3003301",
                        "card_name": "\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff71\uff70\uff64\uff71\uff70\uff64\u79c1\u306f\u8d85\u80fd\u529b\u8005\uff83\uff9e\uff70\uff7d\uff61\u3053\u306e\uff7d\uff8c\uff9f\uff70\uff9d\u3092\u66f2\u3052\u308b\uff83\uff9e\uff70\u2026\u3048? \u3042\uff64\u666e\u901a\u306b\u81ea\u5df1\u7d39\u4ecb\u3067\u3059\u304b? \uff7a\uff8e\uff9d\u2026\u5800\u88d5\u5b50\uff6416\u624d\uff64\u7279\u6280\u306f\u8d85\u80fd\u529b\u3067\u3059\u3063\uff61\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u307e\u3059\u3088! \uff7b\uff72\uff77\uff6f\uff78\uff71\uff72\uff84\uff9e\uff99\uff64\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u3092\u3054\u89a7\u3042\u308c! \u3048\u3044\u3063!",
                        "comments_my_1": "\u6bce\u65e5\u8a13\u7df4\u3057\u3066\u307e\u3059\u304b\u3089\u3063!",
                        "comments_my_2": "\u307f\u3093\u306a\u306b\u3082\u898b\u305b\u3066\u3042\u3052\u3088\u3046\u3063\u266a",
                        "comments_my_3": "\u66f2\u304c\u3089\u306a\u3044\u2026\u3044\u3084\u307e\u3055\u304b\u305d\u3093\u306a",
                        "comments_my_4": "\u3053\u3046\u3057\u3066\u5ff5\u3058\u308b\u3068\u2026\u2026\u2026\u2026\uff91\uff9d\uff6f! \u307b\u3089\u66f2\u304c\u308a\u307e\u3057\u305f! \u306d? \u306d?",
                        "comments_my_max": "\u3082\u3057\u304b\u3057\u3066\uff64\u79c1\u3092\uff71\uff72\uff84\uff9e\uff99\u306b\u3057\u3061\u3083\u3046\u8d85\u80fd\u529b\u3092\u6301\u3063\u3066\u308b\u3093\u3067\u3059\u304b!?",
                        "comments_work_1": "\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u304a\u9858\u3044\u3057\u307e\u3059\u3063!",
                        "comments_work_2": "\u900f\u8996\u80fd\u529b\u306f\u307e\u3060\u8a13\u7df4\u4e2d\u306a\u3093\u3067\u2026",
                        "comments_work_3": "\uff7d\uff8c\uff9f\uff70\uff9d\u306f\u3044\u3064\u3082\u6301\u3061\u6b69\u3044\u3066\u307e\u3059!",
                        "comments_work_4": "\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u304c\u51fa\u6765\u308c\u3070\u55b6\u696d\u3060\u3063\u3066\uff8a\uff9e\uff6f\uff81\uff98\u3067\u3059\u3088\uff64\u4efb\u305b\u3066\u304f\u3060\u3055\u3044!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304b\u3089\uff8a\uff9f\uff9c\uff70\u3082\u3089\u3048\u3070\u3082\u3063\u3068\u51c4\u3044\u3053\u3068\u304c\u2026!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u79c1\u306e\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u3092\u4e16\u9593\u306b\u5e83\u3081\u3088\u3046\u3063!",
                        "comments_live": "\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u307e\u2026LIVE?!",
                        "comments_love_max": "\uff71\uff72\uff84\uff9e\uff99\u3063\u3066\u3059\u3054\u304f\u5927\u5909\u306a\u3093\u3067\u3059\u306d\uff61\u3067\u3082\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u529b\u3068\u79c1\u306e\u8d85\u80fd\u529b\u3092\u5408\u308f\u305b\u308c\u3070\uff84\uff6f\uff8c\uff9f\uff71\uff72\uff84\uff9e\uff99\u3082\u5922\u3058\u3083\u306a\u3044\u306f\u305a\u3063!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/74e73fe1bb98956328ec4a557020c453.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/ded8b376273e77f59280934e979ec120.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/57f693a6f11d593b43ccd4b108323585.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/20034f0b694c052453e48a6ad4d36e96.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/e3dd7fffdfe9147aac1ac6cb979e9ccc.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/30100be6cf5e6d81afd3a94b6c53e8ff.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/c2d50f6dfd2aa974b5050db275eba27a.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/f8996715e19d1032e94f0df14526062e.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/65d78dfae017e30350294b9da00d8c10.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/2b431d0d7e2680d7ef1ae9c283abfabb.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/db5cf52d44b58602db6eeb1efdcee135.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/5291bff263e9772ac98d1d2d5f74e6f1.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/8ca7c52820ac78e0d1e389fee4bc48fa.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3003301\/e2703e6d0d2d3936172b56e51d8dfcd0.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "\u5800\u88d5\u5b50+",
                        "rarity": "2",
                        "cost": "11",
                        "attribute": "passion",
                        "skill_name": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff88\uff72\uff84\uff71\uff78\uff84",
                        "skill_effect": "",
                        "grow_idol_flag": "",
                        "default_attack": "1104",
                        "default_defense": "1632",
                        "hash_card_id": "af03f83edd3f6081e7a94f7dee76c69c",
                        "alias_name": "",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3103302",
                        "card_name": "\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3075\u3063\u3075\u3063\u3075\u3063\uff64\uff7b\uff72\uff77\uff6f\uff78\uff71\uff72\uff84\uff9e\uff99\uff95\uff6f\uff7a\u306e\u767b\u5834\u3067\u3059\u3088! \u5ff5\u529b\u306f\u2026\u307e\uff64\u307e\u3060\u4f7f\u3048\u307e\u305b\u3093\u304c\uff64\uff7d\uff8c\uff9f\uff70\uff9d\u3092\u66f2\u3052\u3089\u308c\u308b\u79c1\u306a\u3089\u305d\u308c\u3082\u6642\u9593\u306e\u554f\u984c\u3063! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u306f\u5947\u8de1\u306e\u77ac\u9593\u3092\u898b\u305b\u3066\u3042\u3052\u307e\u3059\u3088\u3063!",
                        "comments_my_1": "\u6bce\u65e5\u8a13\u7df4\u3057\u3066\u307e\u3059\u304b\u3089\u3063!",
                        "comments_my_2": "\u307f\u3093\u306a\u306b\u3082\u898b\u305b\u3066\u3042\u3052\u3088\u3046\u3063\u266a",
                        "comments_my_3": "\u79c1\u306e\u3053\u306e\u624b\u306b\u306f\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u304c\u3063!",
                        "comments_my_4": "\uff86\uff7e\uff93\uff89\u3067\u306f\u306a\u3044\u3067\u3059\u304b\u3089! \u3060\u3063\u3066\u307b\u3089\uff64\u3053\u3046\u2026\uff7d\uff8c\uff9f\uff70\uff9d\u3092\u3067\u3059\u306d\u2026\uff71\uff9a",
                        "comments_my_max": "\u79c1\u306e\u9b45\u529b\u306b\u6c17\u4ed8\u3044\u3066\u304f\u308c\u305f\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u76ee\u306f\u78ba\u304b\u3067\u3059\u3088\u3063\u266a",
                        "comments_work_1": "\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u304a\u9858\u3044\u3057\u307e\u3059\u3063!",
                        "comments_work_2": "\u900f\u8996\u80fd\u529b\u306f\u307e\u3060\u8a13\u7df4\u4e2d\u306a\u3093\u3067\u2026",
                        "comments_work_3": "\u65b0\u3057\u3044\u80fd\u529b\u304c\u2026\u6b32\u3057\u3044\u2026\u3063",
                        "comments_work_4": "\u307f\u3093\u306a\u3092\u559c\u3070\u305b\u308b\u8d85\u80fd\u529b\u304c\u79c1\u306b\u306f\u3042\u308b\u3093\u3067\u3059\u3088\u2026\u3075\u3075\u3075\u3075\u3063!",
                        "comments_work_max": "\u79c1\u306f\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u3060\u3051\u3058\u3083\u306a\u3044\u3063\u3066\uff64\u307f\u3093\u306a\u306b\u898b\u305b\u3064\u3051\u307e\u3059\u3088\u3063!",
                        "comments_work_love_up": "\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\u4e00\u7dd2\u306b\u8d85\u80fd\u529b\u306e\u7279\u8a13\u3057\u307e\u3057\u3087\u3046\u3088\uff64\u307e\u305a\u306f\u3067\u3059\u306d\u2026",
                        "comments_live": "\u3055\uff64\u3055\u3044\u304d\u3063\u304f\u3071\u308f\uff70!",
                        "comments_love_max": "\u3058\u3083\u3042\uff64\u4eca\u304b\u3089\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u79c1\u306e\u6c17\u6301\u3061\u3092\u4f1d\u3048\u307e\u3059! \u2026\u2026\u2026\u2026\uff91\uff91\uff91\uff9d! \u4eca\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u9001\u308a\u307e\u3057\u305f\uff61\u3075\u3075\u3075 \u20262\u4eba\u3060\u3051\u306e\u79d8\u5bc6\u3067\u3059\u3088\u3063!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/174ec4b9e0f65f9d5d6ecd58015e41c0.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/fd29e862ae6732efb1e7b49dd79c4924.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/fdaca740e9b8279c78adee9ac194a655.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/92d2b4991b11717be712ef87c3a61054.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/53b74242bb4895d72120ccf5072ec535.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/7d68382b35779e9be7a44b6b2696d48c.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/9f26e275aa2887b7f3d7dd05fe3d89f8.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/688d83cf5de33ca122898c98a069a0c3.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/1bc7946c85530343316cb3a4459f5818.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/a0f6ddab36d4ce672823782cf90902b7.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/90ff78d24c5a624c42783eab56117b2a.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/08b21b112122335b22ad5c01549d5b6f.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/54cdf9e481d9e810f7c87567ff70e722.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3103302\/919f95fd8b5691b743aefdbcacf3ed8e.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff7d\uff8a\uff9f\uff86\uff6f\uff7c\uff6d\uff7d\uff80\uff72\uff99]\u5800\u88d5\u5b50",
                        "rarity": "3",
                        "cost": "10",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff76\uff9d\uff83",
                        "skill_effect": "\u5168\uff80\uff72\uff8c\uff9f\u306e\u653b\u5b88 \u5c0f\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "1860",
                        "default_defense": "1760",
                        "hash_card_id": "366697976ec9eadf5d9af8aa05627c06",
                        "alias_name": "\uff7d\uff8a\uff9f\uff86\uff6f\uff7c\uff6d\uff7d\uff80\uff72\uff99",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3210001",
                        "card_name": "[\u30b9\u30d1\u30cb\u30c3\u30b7\u30e5\u30b9\u30bf\u30a4\u30eb]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff71\uff72\uff84\uff9e\uff99\uff7b\uff72\uff77\uff6f\uff76\uff70\uff64\uff7d\uff8d\uff9f\uff72\uff9d\u306b\u3042\u3089\u308f\u308b!! \uff7d\uff8d\uff9f\uff72\uff9d\u306e\u4eba\u305f\u3061\u306f\u5e78\u305b\u3067\u3059\u306d\uff64\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff61\u3053\u306e\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306e\u8d85\u80fd\u529b\u3092\u751f\u3067\u898b\u3089\u308c\u308b\u3093\u3067\u3059\u304b\u3089! \u5947\u8de1\u3092\u62ab\u9732\u3059\u308b\u524d\u306b\u3068\u308a\u3042\u3048\u305a\u8a18\u5ff5\u5199\u771f\u3092\uff64\u305d\uff70\u308c\uff8a\uff9f\uff81\uff98\uff6f!",
                        "comments_my_1": "\u3042\uff64\u3042\u3044\u3042\u3080\uff7c\uff9e\uff6c\uff8a\uff9f\uff86\uff70\uff7d\uff9e\uff65\uff7b\uff72\uff77\uff6f\uff76\uff70!",
                        "comments_my_2": "\uff8a\uff9e\uff97\u3092\u66f2\u3052\u308b\u3093\u3063! \u2026\u3057\u304a\u308c\u305f?",
                        "comments_my_3": "\u3053\u306e\u5730\u306b\u3082\u2026\uff7b\uff72\uff77\uff6f\uff76\uff70\u304c\u2026?",
                        "comments_my_4": "\u3075\u3063\u3075\u3063\u3075\u3063\uff64\uff7b\uff78\uff9e\uff97\uff80\uff9e\uff65\uff8c\uff67\uff90\uff98\uff71\u306b\uff83\uff9a\uff8e\uff9f\uff70\uff84! \u2026\u306f\u307e\u3060\u7df4\u7fd2\u4e2d\u3067\u3059!",
                        "comments_my_max": "\u6d6e\u304b\u3079\uff64\uff72\uff8d\uff9e\uff98\uff7a\u8c5a\u306e\u751f\uff8a\uff91! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u306f\u3044\uff64\u3042\uff70\u3093!",
                        "comments_work_1": "\u3053\u308c\u3053\u305d\u8d85\u80fd\u529b! \u591a\u5206!",
                        "comments_work_2": "\uff7d\uff8d\uff9f\uff72\uff9d\u4eba\u3082\uff8b\uff9e\uff6f\uff78\uff98!",
                        "comments_work_3": "(\uff8a\uff9e\uff97\u3092\u304f\u308f\u3048\u3066\uff64\u4ed5\u4e8b\u306a\u3093\u3066\u2026)",
                        "comments_work_4": "\uff7d\uff8d\uff9f\uff72\uff9d\u306e\u4eba\u306e\u5fc3\u3082\uff64\u3059\u3063\u304b\u308a\u79c1\u306e\u8d85\u80fd\u529b\u306e\uff84\uff98\uff7a\u3067\u3059\u3063\uff64\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70",
                        "comments_work_max": "\u4ed5\u4e8b\u4e2d\u3082\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306f\uff8c\uff68\uff70\uff99\uff84\uff9e\u3067\u5b88\u3063\u3066\u307e\u3059\u304b\u3089!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\uff74\uff88\uff99\uff77\uff9e\uff70\u3092\u88dc\u7d66\u3055\u305b\u3066\u304f\u3060\u3055\u3044! \uff91\uff9d\uff6f!",
                        "comments_live": "\u7d50\u679c\u306f\u4e88\u77e5\u3067\u304d\u3066\u307e\u3059!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u305b\u3063\u304b\u304f\u306e\uff7d\uff8d\uff9f\uff72\uff9d\u3067\u3059\u3057\uff84\uff8f\uff84\u796d\u308a\u3092\u898b\u306b\u3044\u304d\u307e\u3057\u3087\u3046! \u5927\u4e08\u592b\uff64\u79c1\u306e\uff7b\uff72\uff77\uff6f\uff78\uff8c\uff68\uff70\uff99\uff84\uff9e\u3067\uff84\uff8f\uff84\u306f\u5f3e\u304d\u8fd4\u3057\u307e\u3059!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/9470b54fc9442728676c089ac606b8a9.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/36d799b7ca30eeb27b69e55d789a4304.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/1a6777b73c7450e82e754c4aaef683fb.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/94e04d2ebbfa23a2885213df9cd3c232.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/a4b4c40a859e7290084674288d2647e8.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/1e6e4e966a0003478458c724ad56176d.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/ed3977c5d563391a742bfe47c93d6f58.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/ad5b0c3e43aa8180f9aff645d2b5d606.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/48c4da6e5d65e0881b4ad1196b42237d.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/9786e1bddc00c0c9b161c2c62b9da5c0.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/e967a12fce026947954980ede6700e20.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/b331abbc75d2ebc4a18bfd84396f7ef7.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/778e3e67a33050a4ca9bf45ca40be814.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3210001\/ea3bd3e7f41605049ea7ead72f1fa37e.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff7d\uff8a\uff9f\uff86\uff6f\uff7c\uff6d\uff7d\uff80\uff72\uff99]\u5800\u88d5\u5b50+",
                        "rarity": "4",
                        "cost": "10",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff76\uff9d\uff83",
                        "skill_effect": "\u5168\uff80\uff72\uff8c\uff9f\u306e\u653b\u5b88 \u4e2d\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "2232",
                        "default_defense": "2112",
                        "hash_card_id": "0704a849a66af4661b4b5fca9bdd29d8",
                        "alias_name": "\uff7d\uff8a\uff9f\uff86\uff6f\uff7c\uff6d\uff7d\uff80\uff72\uff99",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3310002",
                        "card_name": "[\u30b9\u30d1\u30cb\u30c3\u30b7\u30e5\u30b9\u30bf\u30a4\u30eb]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3080\u3080\u3080\u3063\uff64\u3084\u308a\u307e\u3059\u306d! \u3053\u306e\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u3092\u3053\u3053\u307e\u3067\u83ef\u9e97\u306b\u5909\u8eab\u3055\u305b\u308b\u306a\u3093\u3066\uff61\u3055\u3059\u304c\u306f\u79c1\u306e150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3067\u3059! \u3055\u3042\uff64\uff7d\uff8d\uff9f\uff72\uff9d\u8d85\u80fd\u529bLIVE\u306f\u307e\u3060\u307e\u3060\u3053\u308c\u304b\u3089\u304c\u672c\u756a\u3067\u3059\u3088\u3063! \uff75\uff70\uff9a\uff72!",
                        "comments_my_1": "\u3042\uff64\u3042\u3044\u3042\u3080\uff7c\uff9e\uff6c\uff8a\uff9f\uff86\uff70\uff7d\uff9e\uff65\uff7b\uff72\uff77\uff6f\uff76\uff70!",
                        "comments_my_2": "\uff8a\uff9e\uff97\u3092\u66f2\u3052\u308b\u3093\u3063! \u2026\u3057\u304a\u308c\u305f?",
                        "comments_my_3": "\u307b\u3089\uff64\u8d85\u80fd\u529b\u3067\uff7d\uff76\uff70\uff84\u304c!",
                        "comments_my_4": "\u3055\u3042\uff64\u3069\u3053\u304b\u3089\u3067\u3082\u304b\u304b\u3063\u3066\u304d\u306a\u3055\u3044! \uff7d\uff8d\uff9f\uff72\uff9d\u306e\uff7b\uff72\uff77\uff6f\uff76\uff70\u305f\u3061\uff70!",
                        "comments_my_max": "\u5371\u306a\u3044\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \uff7d\uff76\uff70\uff84\u306e\u5f8c\u308d\u306b\u96a0\u308c\u3066!",
                        "comments_work_1": "\u3053\u308c\u3053\u305d\u8d85\u80fd\u529b! \u591a\u5206!",
                        "comments_work_2": "\uff7d\uff8d\uff9f\uff72\uff9d\u4eba\u3082\uff8b\uff9e\uff6f\uff78\uff98!",
                        "comments_work_3": "\u3080\u3064\u307f\u3061\u3083\u3093\u306b\u3082\u3071\u308f\uff70\u304c\u2026!?",
                        "comments_work_4": "\u304a\u4ed5\u4e8b\u7d42\u308f\uff98\uff70\uff89\uff70!!\u3000\u3042\u3063\uff64\uff9b\uff79\u5f01\u304c\uff8a\uff9f\uff74\uff98\uff71\u3060\uff61\u3055\u3063\u3059\u304c\uff70!",
                        "comments_work_max": "\u79c1\u3068150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff64\uff7a\uff9d\uff8b\uff9e\uff88\uff70\uff7c\uff6e\uff9d\uff65\u3071\u308f\uff70!!",
                        "comments_work_love_up": "\u3057\uff70\u3063\uff64\u8d85\u80fd\u529b\u3067\u4ed5\u4e8b\u3057\u305f\u306e\uff85\uff72\uff7c\uff6e\u3067\u3059\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\u2026\u304a\uff70\u308c\u3044!!",
                        "comments_love_max": "\uff7d\uff8d\uff9f\uff72\uff9d\u4e2d\u306b\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306e\u540d\u306f\u5e83\u307e\u308a\u307e\u3057\u305f\u3063\uff61\u79c1\u306e\u8d85\u80fd\u529b\u3092\u4fe1\u3058\u308b150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306f\uff7b\uff72\uff77\uff6f\uff76\uff70\u306e\u7d20\u8cea\u304c\u3042\u308b\u306b\u9055\u3044\u306a\u3044!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/2f3000973d69eed877efb32b11c450e3.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/9cceec6a9a9ae73c46ebc516df298bae.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/ac44cb0af951c7ae165294855862d3b4.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/7abf0d2609a354fe3093111301cdac34.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/0bf33757b3af75852d7fce5355b13442.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/5f3b8ef81fa85978bca60b118f569ea1.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/586458a161691223184bc0409afd73a5.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/86273a231c353a58c3b576269aabdf4a.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/596ef8659d1769f1808853934c4cbcdd.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/eaba2f87d607e9287ccb025a50bce478.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/5d49320304f82dcc446e87cf010de231.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/879559682b551db407fc8db65eb19afc.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/13426033598af902297eba48ea3f321f.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3310002\/e523c792a62729037430d0934c1b9be3.mp4"
                    },
                    "event": {
                        "504": {
                            "event_id": 504,
                            "category_id": "10030",
                            "event_name": "\u30a2\u30a4\u30c9\u30ebLIVE\u30c4\u30a2\u30fcin\u30b9\u30da\u30a4\u30f3"
                        }
                    },
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u304a\u3061\u3083\u3081\u306a\uff7b\uff72\uff77\uff6f\uff76\uff70]\u5800\u88d5\u5b50",
                        "rarity": "3",
                        "cost": "13",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u529b\u6280",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b \u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3000",
                        "default_defense": "1940",
                        "hash_card_id": "8e63cd4a640f8f1d81aa58b0f5b965e1",
                        "alias_name": "\u304a\u3061\u3083\u3081\u306a\uff7b\uff72\uff77\uff6f\uff76\uff70",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3211801",
                        "card_name": "[\u304a\u3061\u3083\u3081\u306a\u30b5\u30a4\u30ad\u30c3\u30ab\u30fc]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u304d\u3087\uff64\u4eca\u65e5\u306f\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\uff7b\uff72\uff77\uff6f\uff78\uff84\uff9a\uff70\uff86\uff9d\uff78\uff9e\u3092\u304a\u898b\u305b\u3057\u3088\u3046\u2026! \u3053\u3046\u3084\u3063\u3066\u5ff5\u3092\u9001\u308b\u3068\uff64\u4e00\u77ac\u3067\u77e5\u6075\u306e\u8f2a\u304c\u3067\u3059\u306d\u2026\uff61\uff91\uff70\uff9d\uff64\uff91\uff91\uff91\uff70\uff9d\uff64\u304a\u304b\u3057\u3044\u3067\u3059\u306d\uff64\u3061\u3087\u3063\u3068\u8abf\u5b50\u304c\u2026\uff61\u3053\u308c\u2026\u3050\u306c\u306c\u2026\u56fa\u3044\u2026",
                        "comments_my_1": "\u5ff5\u52d5\u3071\u308f\uff70! \u4eba\u6c17\u3088\u4e0a\u304c\u308c!",
                        "comments_my_2": "\u3055\u3044\u304d\u3063\u304f\u2026\u304a\u306f\u3088\u3046!",
                        "comments_my_3": "\u3082\u3063\u3068\u7c21\u5358\u306a\u306e\u306b\u3057\u3068\u3051\u3070\u2026",
                        "comments_my_4": "\u4eca\u5916\u3057\u307e\u3059\u304b\u3089! \u3053\u3046\u306a\u3063\u305f\u3089\uff64\u3055\u3044\u304d\u3063\u304f\u529b\u6280! \uff8c\uff9d! \uff78\uff9e\uff87\uff87\uff70\uff6f!",
                        "comments_my_max": "\u79c1\uff64\u672a\u719f\u3067\u3059\u306d\u2026\uff61\u7279\u8a13\u304a\u9858\u3044\u3057\u307e\u3059\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_work_1": "\uff8c\uff67\uff9d\u306e\u305f\u3081\u306b\u6771\u3078\u897f\u3078!",
                        "comments_work_2": "\u540d\u4e57\u308b\u307b\u3069\u3067\u306f\u2026\uff95\uff6f\uff7a\u3067\u3059!",
                        "comments_work_3": "\u3053\u308c\u5916\u3057\u305f\u3089\u304a\u4ed5\u4e8b\u3057\u307e\u3059!",
                        "comments_work_4": "\uff91\uff91\uff91\u2026\u8d85\u80fd\u529b\u3067\u3067\u304d\u306a\u3044\u4ed5\u4e8b\u306f\u306a\u3044\u8a2d\u5b9a\u306a\u3093\u3067\u3059\u304c\u2026",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306a\u3089\uff64\u3046\u307e\u304f\u8a00\u3044\u8a33\u3057\u3066\u304f\u308c\u308b\u4e88\u611f\u304c!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u7247\u65b9\u5f15\u3063\u5f35\u3063\u3066\u304f\u308c\u308b\u3093\u3067\u3059\u306d!?",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\u2026\u5927\u5f31\u308a!",
                        "comments_love_max": "\uff71\uff72\uff84\uff9e\uff99\u306f\u3061\u3087\u3063\u3068\uff7d\uff77\u304c\u3042\u308b\u65b9\u304c\u4eba\u6c17\u51fa\u308b\u3063\u3066\u8a00\u3044\u307e\u3059\u3088\u306d? \u3060\u304b\u3089150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u305f\u3081\u306b\uff64\u5916\u305b\u306a\u3044\uff8c\uff98\u3092\u2026\uff8c\uff64\uff8c\uff98\u3067\u3059!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/a0af511317d77c72aa73a7904b75df04.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/4246603d1ea3b401dca8b949857eb9cd.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/43fef3db24a65015ed3560604be858bf.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/60f11080a0947d9077f4fb2adcac4636.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/e861bfd93014006f931262d29bb32054.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/f43b01b0624f66ee7f3bfa3a6220a733.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/a9359d2cc009bff5f1a689071b13fa86.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/fca42fb1e647a502226322ac8391c29c.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/ccb299e9f8cab327e7df8acc2656412a.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/494b88f29a00d2c6bebd2d9e903f4d24.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/c76345342654006b43f13af3e94a3ea7.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/da1a453db43efcbe430dbbfd61f042e2.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/75e86e3cc6e6f7ed09ffa243662bfff0.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3211801\/07e803804114e3486413a96f25fecb74.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u304a\u3061\u3083\u3081\u306a\uff7b\uff72\uff77\uff6f\uff76\uff70]\u5800\u88d5\u5b50+",
                        "rarity": "4",
                        "cost": "13",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u529b\u6280",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b \u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3600",
                        "default_defense": "2328",
                        "hash_card_id": "206627c86b320778aa94bb336021a57f",
                        "alias_name": "\u304a\u3061\u3083\u3081\u306a\uff7b\uff72\uff77\uff6f\uff76\uff70",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3311802",
                        "card_name": "[\u304a\u3061\u3083\u3081\u306a\u30b5\u30a4\u30ad\u30c3\u30ab\u30fc]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3064\u3044\u306b\u771f\u306e\u80fd\u529b\u304c\u767a\u52d5\u3057\u307e\u3057\u305f! \uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306e\uff71\uff72\uff84\uff9e\uff99\u3071\u308f\uff70\u6025\u4e0a\u6607\u3067\u3059! \u3048\u3063\uff64\uff9a\uff6f\uff7d\uff9d\u306e\u6210\u679c\u304c\u51fa\u305f\u3060\u3051? \u3061\uff64\u9055\u3044\u307e\u3059\u3088\uff64\u3053\u308c\u3082\u8d85\u80fd\u529b\u3067\u3059\u3063\u3066\u3070! \u3055\u3042\uff64\u4e00\u7dd2\u306b\uff84\uff6f\uff8c\uff9f\uff71\uff72\uff84\uff9e\uff99\u306e\u5ea7\u307e\u3067\uff83\uff9a\uff8e\uff9f\uff70\uff84\u3067\u3059!!",
                        "comments_my_1": "\u5ff5\u52d5\u3071\u308f\uff70! \u4eba\u6c17\u3088\u4e0a\u304c\u308c!",
                        "comments_my_2": "\u3055\u3044\u304d\u3063\u304f\u2026\u304a\u306f\u3088\u3046!",
                        "comments_my_3": "\u5927\u4e88\u8a00! \uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\uff64\u5927\uff8c\uff9e\uff9a\uff72\uff78!",
                        "comments_my_4": "\u3055\u3044\u304d\u3063\u304f\uff7d\uff83\uff70\uff6f\uff77!! \u3042\u308c? \u3053\u308c\uff64\u3082\u3057\u304b\u3057\u3066LIVE\u306e\u5c0f\u9053\u5177?",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u60a9\u307f\u306f\uff64\u6d88\u6ec5\u3055\u305b\u3066\u3042\u3052\u307e\u3059! \uff91\uff9d\uff6f!",
                        "comments_work_1": "\uff8c\uff67\uff9d\u306e\u305f\u3081\u306b\u6771\u3078\u897f\u3078!",
                        "comments_work_2": "\u540d\u4e57\u308b\u307b\u3069\u3067\u306f\u2026\uff95\uff6f\uff7a\u3067\u3059!",
                        "comments_work_3": "\u5931\u6557\u3057\u305f\u3089\u2026\u8a18\u61b6\u3092\u6d88\u53bb\u2026",
                        "comments_work_4": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u3064\u304e\u306e\u73fe\u5834\u3078\u77ac\u9593\u79fb\u52d5\u3067\u3059! \uff8d\uff72\uff64\uff80\uff78\uff7c\uff70!",
                        "comments_work_max": "\u3055\u3059\u304c\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u3055\u3044\u304d\u3063\u304f\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7d!",
                        "comments_work_love_up": "\u5b89\u5fc3\u3092! \uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u3066\u3082\uff64\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7d\u65b9\u91dd\u306f\u66f2\u3052\u306a\u3044\u3067\u3044\u3044\u304b\u3089!",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff7f\uff70\uff9d\uff78\uff9e!! ",
                        "comments_love_max": "\u4eca\u306e\u79c1\u306a\u3089\u672a\u6765\u3092\u66f8\u304d\u63db\u3048\u308b\u306e\u3082\uff64\u305f\u3084\u3059\u3044\u3053\u3068\u3067\u3059! \uff91\uff91\uff91\uff9d\uff6f\uff64\u3053\u308c\u3067\u3088\u3057\u3068\uff61150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u306e\u7d04\u675f\u306f\u6c38\u9060\u3067\u3059\u304b\u3089!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/8c73c8953f73cd67cdbabe405d7d68fb.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/2d30871f78f2fc63e5234d05c5daa367.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/5fec808c8783c3d3279cc8799bd4fda9.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/60c9fe7e3b46b2e548355adeb3aed5da.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/1ce37e0ff5e73c262a6e9d737dc04ab0.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/8a194218003dd6d456c956df19366696.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/bd7fa3be845f228a57f5aa2e6df2cad0.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/779f75bad17b5f19f91c323281c5aabe.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/d76e2065296c2696b0d3b9790ea8d309.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/714d8f019d3576241f47df80426e9fbd.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/d869f363dd4fe2a41fe1b577f2121e18.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/0542481db5b1ad61c5a599ed30592378.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/f48e0f92cf0b35b5ab20ad619170c82c.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3311802\/99b678d5100feb96adc6a5c078098f31.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff8b\uff9e\uff80\uff70&\uff7d\uff73\uff68\uff70\uff84]\u5800\u88d5\u5b50",
                        "rarity": "3",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u7a81\u6483",
                        "skill_effect": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d2\uff5e3\u4eba\u306e\u653b \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3280",
                        "default_defense": "2240",
                        "hash_card_id": "ffb2c98591b0c9c025db8d210b9eceb7",
                        "alias_name": "\uff8b\uff9e\uff80\uff70&\uff7d\uff73\uff68\uff70\uff84",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3227501",
                        "card_name": "[\u30d3\u30bf\u30fc&\u30b9\u30a6\u30a3\u30fc\u30c8]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3055\uff64\u3055\u3044\u304d\u3063\u304f\uff78\uff6f\uff77\uff70\u3092\u3069\u3046\u305e! \u624b\u4f5c\u308a\u3067\u3059\u304c\u2026\u7802\u7cd6\u591a\u3081\u306a\u306e\u3067\u7f8e\u5473\u3057\u3044\u306f\u305a\u3067\u3059! \u305d\u308c\u3068\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3078\u306e\u6c17\u6301\u3061\u2026\uff8a\uff9f\uff9c\uff70\u3082\u8fbc\u3081\u307e\u3057\u305f! \u3048\uff64\u9854\u304c\u8d64\u3044? \u3061\u3087\uff64\u8d85\u80fd\u529b\u306e\u526f\u4f5c\u7528\u3067\u3059!",
                        "comments_my_1": "\uff74\uff7d\uff8a\uff9f\uff70\u3060\u3063\u3066\uff64\u3072\u3068\u308a\u306e\u5973\u306e\u5b50!",
                        "comments_my_2": "\u3042\u3063\u307e\uff70\u3044\u6642\u7a7a\u3078\uff64\u3088\u3046\u3053\u305d!",
                        "comments_my_3": "\uff7a\uff79\uff9e\u306f\u2026\u3071\uff64\u3071\u3044\u308d\u304d\u306d\u3057\u3059\u304c\u2026",
                        "comments_my_4": "\uff78\uff6f\uff77\uff70\u306b\u8fbc\u3081\u305f\u6c17\u6301\u3061\u306f\u2026\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306e\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067! \u2026\u3069\u3046\u3067\u3059\u304b!?",
                        "comments_my_max": "\u65e5\u9803\u306e\u611f\u8b1d\u306f\uff8c\uff99\uff8a\uff9f\uff9c\uff70\u306e\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u4f1d\u3048\u307e\u3059! \u3080\uff70\u3093\uff64\u7cbe\u795e\u96c6\u4e2d!",
                        "comments_work_1": "\u6cb9\u65ad\u3059\u308b\u3068\uff64\u307b\u3063\u307a\u304c\u843d\u3061\u307e\u3059!",
                        "comments_work_2": "\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u2026\uff8a\uff9e\uff9a\uff9d\uff80\uff72\uff9d\uff65\uff93\uff70\uff84\uff9e!",
                        "comments_work_3": "\uff78\uff6f\uff77\uff70\u306f\uff64\u3055\u3044\u304d\u3063\u304f6\u5272\uff64\u52aa\u529b4\u5272",
                        "comments_work_4": "\u65e5\u672c\u4e2d\u306e\u307f\u3093\u306a! \uff95\uff6f\uff7a\u306b\u5973\u5b50\u529b\u3092\u308f\u3051\u3066\u304f\u3060\u3055\u3044! \u304a\u9858\u3044\u3067\u3059!",
                        "comments_work_max": "\u3075\u305f\u308a\u306e\uff8a\uff9e\uff9a\uff9d\uff80\uff72\uff9d\uff64\u4f55\u304c\u8d77\u3053\u308b\u304b\u4e88\u77e5\u3057\u307e\u3059! \u7d50\u679c\u306f\u2026\u3048\uff70\u3068\u2026",
                        "comments_work_love_up": "\u307e\uff64\u9593\u306b\u5408\u3063\u305f\uff70! \uff80\uff9e\uff6f\uff7c\uff6d\u3067\u2026\u3044\u3048\uff64\uff83\uff9a\uff8e\uff9f\uff70\uff83\uff70\uff7c\uff6e\uff9d\u3057\u3066\u304d\u307e\u3057\u305f!",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff8a\uff6f\uff8b\uff9f\uff70\uff8a\uff9e\uff9a\uff9d\uff80\uff72\uff9d!",
                        "comments_love_max": "\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u305d\u3063\u3068\u2026\uff62\u3042\u308a\u304c\u3068\u3046\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u305a\u3063\u3068\u4e00\u7dd2\u3067\u3059!\uff63\u2026\u3088\u3057! \u5c4a\u304d\u307e\u3057\u305f\u304b? \u2026\u3048\u3063\uff64\u53e3\u304b\u3089\u6f0f\u308c\u3066\u305f?"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/dcf37c7e665895595a43200ac8db8cfa.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/5dd352bef7520f6f97c0a57c9d723ad1.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/be6f50f97c8a4bfeb0bb23ba7a93f09f.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/f3a43341e862e03cab4788bd11fac44e.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/9c3351a4c47e4279c520e0b1840a7c6a.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/e01864e3a7db81acf2466caf7d9c5d22.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/99174e840675954944b47e5012bb838b.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/f3e7cd7672255f3bb5ee4cbb6ac017cc.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/5f5dd3ce7219b24668097de6e5188334.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/ad0f1663b5acdf11f52ddc530bc0421c.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/7f175c447d9a4957415be8555a7e30c3.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/04a0405ed8f16bb07ca7792bb2631264.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/d24354446c873d25c9e2ee04fdd845a4.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3227501\/2ecd82faa3d3c117a12014157e846ee6.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff8b\uff9e\uff80\uff70&\uff7d\uff73\uff68\uff70\uff84]\u5800\u88d5\u5b50+",
                        "rarity": "4",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u7a81\u6483",
                        "skill_effect": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d3\u4eba\u306e\u653b \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3936",
                        "default_defense": "2688",
                        "hash_card_id": "1bad11e08f6d67660858e2a625af9706",
                        "alias_name": "\uff8b\uff9e\uff80\uff70&\uff7d\uff73\uff68\uff70\uff84",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3327502",
                        "card_name": "[\u30d3\u30bf\u30fc&\u30b9\u30a6\u30a3\u30fc\u30c8]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3055\u3044\u304d\u3063\u304f\u53ef\u611b\u3044\uff8e\uff9f\uff70\uff7d\uff9e! \u3069\u3046\u3067\u3059\uff64\u7518\u3044\u6c17\u5206\u306b\u306a\u3063\u3066\u304d\u307e\u3057\u305f\u306d\uff70? \uff8c\uff8c\uff8c\uff64\u305d\u308c\u306f\u79c1\u304c150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u8133\u3092\u8d85\u80fd\u529b\u3067\u523a\u6fc0\u3057\u3066\u3044\u308b\u304b\u3089\u306a\u306e\u3067\u3059! \u3055\u3041\uff64\u7518\u304f\u306a\uff70\u308b\u7518\u304f\u306a\uff70\u308b\u2026!",
                        "comments_my_1": "\uff74\uff7d\uff8a\uff9f\uff70\u3060\u3063\u3066\uff64\u3072\u3068\u308a\u306e\u5973\u306e\u5b50!",
                        "comments_my_2": "\u3042\u3063\u307e\uff70\u3044\u6642\u7a7a\u3078\uff64\u3088\u3046\u3053\u305d!",
                        "comments_my_3": "\uff81\uff6e\uff7a\uff9a\uff70\uff84\u306e\u610f\u8b58\u3068\uff7c\uff9d\uff78\uff9b\u6210\u529f\u3063!",
                        "comments_my_4": "\uff8a\uff9e\uff9a\uff9d\uff80\uff72\uff9d\u306f\uff64\uff84\uff9e\uff77\uff84\uff9e\uff77\u3067\u3055\u3044\u304d\u3063\u304f\uff8a\uff9f\uff9c\uff70\u304c\u5f37\u304f\u306a\u308a\u307e\u3059! \u305f\u3076\u3093!",
                        "comments_my_max": "\uff95\uff6f\uff7a\u304c\u7d76\u4e16\u306e\u7f8e\u5973\u306b\u898b\u3048\u308b\u3055\u3044\u304d\u3063\u304f\u2026\u3080\uff70\u3093! \u3069\uff64\u3069\u3046\u3067\u3059?",
                        "comments_work_1": "\u6cb9\u65ad\u3059\u308b\u3068\uff64\u307b\u3063\u307a\u304c\u843d\u3061\u307e\u3059!",
                        "comments_work_2": "\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u2026\uff8a\uff9e\uff9a\uff9d\uff80\uff72\uff9d\uff65\uff93\uff70\uff84\uff9e!",
                        "comments_work_3": "\u5c11\u3057\u6642\u304c\u6b62\u307e\u3089\u306a\u3044\u3067\u3059\u304b\u306d\uff5e",
                        "comments_work_4": "\uff95\uff6f\uff7a\u306e\u59ff\u3092\uff64\u5ff5\u5199\u3067\uff8c\uff68\uff99\uff91\u306b\u713c\u304d\u3064\u3051\u307e\u3059! \u2026\uff83\uff9e\uff7c\uff9e\uff76\uff92? \u3060\uff64\u5927\u4e08\u592b!",
                        "comments_work_max": "\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff95\uff6f\uff7a\u3078\u306e\u6c17\u6301\u3061\uff64\uff8a\uff9e\uff6f\uff81\uff98\u53d7\u3051\u6b62\u3081\u307e\u3057\u305f! \uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067!",
                        "comments_work_love_up": "\u3080\u3080! \u611f\u3058\u307e\u3059\u3088! \uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\uff95\uff6f\uff7a\u3068\uff81\uff6e\uff7a\u304c\uff7c\uff9d\uff78\uff9b\u3057\u3066\u3044\u308b\u306e\u3092!",
                        "comments_live": "\uff7d\uff73\uff68\uff70\uff84\u6642\u7a7a\u3078\u2026\uff9a\uff6f\uff82\uff65\uff80\uff9e\uff72\uff8c\uff9e!",
                        "comments_love_max": "\u3075\u305f\u308a\u306e\u6c17\u6301\u3061\u304c\u901a\u3058\u5408\u3046\u306e\u306f\uff64\u304d\u3063\u3068150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff74\uff7d\uff8a\uff9f\uff70\u306b\u899a\u9192\u3057\u305f\u304b\u3089! \u3053\u306e\u529b\uff64\u4e00\u7dd2\u306b\u9ad8\u3081\u3066\u3044\u304d\u307e\u3057\u3087\u3046!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/da707ef077cdbb5b66f3f6fc736185be.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/678524244346d2184bc3bd05c76185db.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/8a26c448d75ebfe2d27cb0e4a6637dc4.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/0d4ea50e6a88d59c43f1c8e102a5ed6b.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/d3e1661917158a4f9e6049854eb3e058.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/f86f4610cee2a7afc4cd93effbe1adc6.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/6b1783115eec92352a7d3c6c270e2a00.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/bcc1ae445e41bb3489b8554778b4bc88.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/af6f403b6d27e2aa34e9c8bef2937fb8.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/85ff6cb147f73743692db3080bbdc1fd.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/4346d9ae677731556b7da8f696c6f4b4.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/b7d4230ac32bfe6c213b0533f811d789.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/247fc26d111b09e761075695a244a3ac.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3327502\/76eccd521f45f6d7392e2c69db2dbf49.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff8c\uff99\uff70\uff83\uff68\uff75\uff70\uff80\uff91]\u5800\u88d5\u5b50",
                        "rarity": "3",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff71\uff6f\uff8e\uff9f\uff70",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d4\u4eba\u306e\u653b \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3260",
                        "default_defense": "2280",
                        "hash_card_id": "fb45408d80ff8a8e68f9cfec61234780",
                        "alias_name": "\uff8c\uff99\uff70\uff83\uff68\uff75\uff70\uff80\uff91",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3241801",
                        "card_name": "[\u30d5\u30eb\u30fc\u30c6\u30a3\u30aa\u30fc\u30bf\u30e0]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u5c0f\u3055\u3058\u4e00\u676f\u304f\u3089\u3044\u6e1b\u3089\u3057\u3066\u2026\u3044\u3048\u3063\uff64\u3080\u3057\u308d\uff84\uff9e\uff8a\uff9e\uff6f\u3068\u8ffd\u52a0\u3067\u3063! \u3075\u3080\uff64\u5927\u4f53\u3053\u3093\u306a\u3068\u3053\u308d\u3067\u3057\u3087\u3046! \u3069\u3046\u3067\u3059\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \uff95\uff6f\uff7a\u306e\u3055\u3044\u304d\u3063\u304f\u8a08\u91cf\u3067\uff64\u304a\u83d3\u5b50\u4f5c\u308a\u3082\uff8a\uff9f\uff70\uff8c\uff6a\uff78\uff84\u3067\u3059\u3088\u266a",
                        "comments_my_1": "\u5b8c\u74a7\u306b\uff64\u9593\u9055\u3044\u306a\u304f\uff61\u305d\u308c\u304c\uff95\uff6f\uff7a!",
                        "comments_my_2": "\u899a\u9192! \uff86\uff6d\uff70\u3055\u3044\u304d\u3063\u304f\uff8a\uff9f\uff9c\uff70\u266a",
                        "comments_my_3": "\u3055\u3041\uff64\u5343\u679d\u3061\u3083\u3093! \u725b\u4e73IN\u3067\u3059!",
                        "comments_my_4": "\u6df7\u305c\u3066\uff64\u3053\u306d\u3066\uff64\u713c\u3044\u3066\u2026\uff95\uff6f\uff7a\u306e\u5922\u306e\u3088\u3046\u306b\u5927\u304d\u304f\u81a8\u3089\u307f\u307e\u3059\u266a",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u305f\u3081\u306b\uff64\u3082\u3046\u4e00\u676f! \u5c0f\u9ea6\u7c89\u5897\u91cf\uff7b\uff70\uff8b\uff9e\uff7d!",
                        "comments_work_1": "\u81ea\u4fe1\u3042\u308a\u307e\u3059! \u898b\u3066\u304f\u3060\u3055\u3044\u266a",
                        "comments_work_2": "\u3072\u3068\u5473\u3082\u3075\u305f\u5473\u3082\u9055\u3044\u307e\u3059\u3088!",
                        "comments_work_3": "\u7f8e\u5c11\u5973\u3055\u3044\u304d\u3063\u304f\uff8a\uff9f\uff83\uff68\uff7c\uff74\uff65\uff95\uff6f\uff7a!",
                        "comments_work_4": "\u3048\u3063? \u304a\u7802\u7cd6\u3068\u5375? \u305d\uff64\u305d\u306e\u5206\u91cf\u306f\u2026\u3080\u3080\u3080\u3063\uff64\u8a08\u7b97\u5916\u2026!",
                        "comments_work_max": "\u307e\uff64\u307e\u3041\uff9a\uff7c\uff8b\uff9f\u306f\u3060\u3044\u305f\u3044\u898b\u307e\u3057\u305f\u3057\uff64\u3042\u3068\u306f\u2026\u305d\u3046\uff64\u611b\u60c5\u3067\uff76\uff8a\uff9e\uff70!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\u5ff5\u3058\u3066\u304f\u3060\u3055\u3044! \u7f8e\u5473\u3057\u3044\uff8a\uff9f\uff9c\uff70\u5897\u5927!",
                        "comments_live": "\u3042\u306a\u305f\u3082\u8a08\u3063\u3066\u3042\u3052\u307e\u3059!",
                        "comments_love_max": "\u2026\u3075\u3080! \u3055\u3044\u304d\u3063\u304f\u304c\u5f37\u3059\u304e\u3066\uff64\u6570\u5b57\u306b\u8aa4\u5dee\u304c\u51fa\u307e\u3057\u305f\u304b\uff61\u3057\u304b\u3057\uff64\uff9c\uff9d\uff93\uff71\uff95\uff6f\uff7a! \u6b21\u306f\u5fc5\u305a\uff8b\uff9f\uff6f\uff80\uff98\u5408\u308f\u305b\u307e\u3059\uff61\u3054\u671f\u5f85\u304f\u3060\u3055\u3044\u266a"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/725da6c2793a509350a9d468bae50327.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/4d16a3af2dd34342690657a69d7289a7.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/19f4b91ce76d91dff8f903d60321e665.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/bcfe95950e983f5c8b937112081edb61.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/edab7e1b161982465a306f04755a6e83.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/3036413d4d64a8c20897fa360eaf6e69.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/1cbefad77951ecef3648ed2c18b9b6ae.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/eb3e8106815c9a4385f58b6b44313e15.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/e818a7198c0c49648ea82cd7ac89ace6.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/2fa1013f728d80844edacb0bc154314b.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/9ab26f5c95bdd4f65146fd819b93bd45.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/6be40fe38b284767ee4ff9a3a25f2a90.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/625cf1bce24a5a50c376984555a52690.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3241801\/ec10c4693d69c541f27e27ba992d4016.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff8c\uff99\uff70\uff83\uff68\uff75\uff70\uff80\uff91]\u5800\u88d5\u5b50+",
                        "rarity": "4",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff71\uff6f\uff8e\uff9f\uff70",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d4\u4eba\u306e\u653b \uff97\uff9d\uff80\uff9e\uff91\u3067\u7279\u5927\uff5e\u6975\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3912",
                        "default_defense": "2736",
                        "hash_card_id": "7ccda474194bb3f8016aa424f79476e2",
                        "alias_name": "\uff8c\uff99\uff70\uff83\uff68\uff75\uff70\uff80\uff91",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3341802",
                        "card_name": "[\u30d5\u30eb\u30fc\u30c6\u30a3\u30aa\u30fc\u30bf\u30e0]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3046\u3075\u266a\u3053\u308c\u305e\uff64\u3055\u3044\u304d\u3063\u304f\u6c17\u54c1\u3067\u3059\u308f! \u307f\u3093\u306a\u3092\uff84\uff98\uff7a\u306b\u3059\u308b\uff8a\uff72\uff9a\uff8d\uff9e\uff99\u306a\u8d85\u80fd\u529b\u3067\u3059\uff61\u4eca\u65e5\u306e\uff95\uff6f\uff7a\u306f\u53ef\u6190\u306a\uff71\uff6f\uff8c\uff9f\uff99\u2026\u3044\u3048\uff64\uff71\uff8e\uff9f\uff70\uff61\u3055\uff64\uff83\uff68\uff70\uff8a\uff9f\uff70\uff98\uff70\u306b\u53c2\u308a\u307e\u3057\u3087\u3046\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff61\u304a\u307b\u307b\u307b\u307b\u2026\u266a",
                        "comments_my_1": "\u5b8c\u74a7\u306b\uff64\u9593\u9055\u3044\u306a\u304f\uff61\u305d\u308c\u304c\uff95\uff6f\uff7a!",
                        "comments_my_2": "\u899a\u9192! \uff86\uff6d\uff70\u3055\u3044\u304d\u3063\u304f\uff8a\uff9f\uff9c\uff70\u266a",
                        "comments_my_3": "\uff8f\uff85\uff70\u306e\u52c9\u5f37\u3057\u3066\u304d\u307e\u3057\u305f\uff61\u3078\u3078\u2026",
                        "comments_my_4": "\u7981\u65ad\u306e\u679c\u5b9f? \u3089\u3057\u304f\uff64\u306a\u3093\u304b\u3053\u3046\u7981\u65ad\u306e\u9b45\u529b\u63a8\u3057\u3067! \uff71\uff8e\uff9f\uff70\uff95\uff6f\uff7a!",
                        "comments_my_max": "\u672a\u6765\u4e88\u77e5! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u306e\uff82\uff70\uff7c\uff6e\uff6f\uff84\u306f\u7d75\u306b\u306a\u308b\u4e88\u611f!",
                        "comments_work_1": "\u81ea\u4fe1\u3042\u308a\u307e\u3059! \u898b\u3066\u304f\u3060\u3055\u3044\u266a",
                        "comments_work_2": "\u3072\u3068\u5473\u3082\u3075\u305f\u5473\u3082\u9055\u3044\u307e\u3059\u3088!",
                        "comments_work_3": "\u3055\u3044\u304d\u3063\u304f\uff9a\uff83\uff9e\uff68\u3068\u304a\u547c\u3073\u3042\u308c\u266a",
                        "comments_work_4": "\u307b\u3089\u3063\u79c1\u3060\u3063\u3066\uff64\u304a\u6dd1\u3084\u304b\u306b\u306a\u308c\u3066\u307e\u3059\u3088\u306d? \u3069\u3093\u306a\u3082\u3093\u3067\u3059!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u65e5\u5098\u3092\u3055\u3057\u3066\u3082\u3089\u3046\u306e\u3082\uff7d\uff83\uff77\u3067\u3059\u306d\u266a",
                        "comments_work_love_up": "\u3042\u3063\uff64\u4eca\u306e\u8868\u60c5! \u6211\u306a\u304c\u3089\uff9a\uff83\uff9e\uff68\u3067\u3059! \u4f55\u679a\u3082\u64ae\u3063\u3066\u304f\u3060\u3055\u3044\u266a",
                        "comments_live": "\uff74\uff9a\uff76\uff9e\uff9d\uff84\uff65\uff95\uff6f\uff7a\uff64\u3067\u3059\u306e\u3088\u266a",
                        "comments_love_max": "\u304a\u3059\u307e\u3057\u9854\u3067150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u96a3\u306b\u7acb\u3063\u3066\u308b\u3068\u2026\u6c17\u6301\u3061\u304c\u304f\u3059\u3050\u3063\u305f\u304f\u306a\u3063\u3066\u304d\u307e\u3059\u306d! \u3053\u308c\u3082\uff64\u3055\u3044\u304d\u3063\u304f\u52b9\u679c\u2026?"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/6e878974a821332b2e04f5cb665dcdc3.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/af874d948d8ef528d2533757ebb10d43.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/e66fa1ff536eb3c6ebb7f54434f10c22.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/0aa95432cec73583c51af089e8991c26.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/a54117cbbdd5a0300d93eb7bb3913f00.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/bae9a805c5232451868bfadd1cd33e9b.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/0b015f2b70767a8802fe1c5fe0664146.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/c92e4ffd0a8956f310a10aa4fec618d5.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/72702bb8825f0eeb8d2d5b7863b3a447.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/f86f8c6b2eb6645e3c0d69f29c32d7c6.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/b077d11b7ca9072acc82470d94e34a21.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/3ecff389f66989db2b88a9eaf2c7a8f7.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/7f06df33834fcfab647fe86de65736c1.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3341802\/f95c81ede75311b4f5fe65ab5f69a5b9.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84]\u5800\u88d5\u5b50",
                        "rarity": "3",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u5927\u6d77\u539f",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d1\u4eba\u306e\u653b \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "2940",
                        "default_defense": "2160",
                        "hash_card_id": "8c991c6f3c84bca4c63100d6cc99a040",
                        "alias_name": "\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3243601",
                        "card_name": "[\u30af\u30eb\u30fc\u30b8\u30f3\u30b0\u30ea\u30dd\u30fc\u30c8]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": null
                    },
                    "comments": {
                        "comment": "\u307b\uff70\u3063\u307b\u307b\u307b! \u3044\u3088\u3044\u3088\u6d77\u5916\uff7e\uff9a\uff8c\uff9e\u306e\u4ef2\u9593\u5165\u308a\u3067\u3059\u306d\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u3053\u306e\u624b\u306b\u8f1d\u304f\uff64\u8c6a\u83ef\u5ba2\u8239\u306e\uff81\uff79\uff6f\uff84\u3053\u305d\u304c\u8a3c! \uff8b\uff9e\uff7c\uff8b\uff9e\uff7c\u611f\u3058\u307e\u3059\u3088\u2026\uff7a\uff9e\uff70\uff7c\uff9e\uff6c\uff7d\u3067\uff9c\uff9d\uff80\uff9e\uff8c\uff99\u306a\u65c5\u8def\u306b\u306a\u308b\uff64\u305d\u3093\u306a\u4e88\u611f\u3092!",
                        "comments_my_1": "\u307e\u3055\u306b\uff64\u5927\u6d77\u539f\u304c\u547c\u3093\u3067\u3044\u307e\u3059!",
                        "comments_my_2": "\uff8d\uff72\uff64\uff95\uff70! \uff84\uff9e\uff69\uff70\uff95\uff70\uff97\uff72\uff78\uff64\uff7b\uff72\uff77\uff6f\uff78? \uff9c\uff70\uff75!",
                        "comments_my_3": "\u3053\u306e\u9ad8\u7b11\u3044\u306f\u2026? \u3042\uff64\uff76\uff93\uff92\u3067\u3059\u304b",
                        "comments_my_4": "\u307e\u305a\u306f\uff64\uff73\uff6a\uff99\uff76\uff91\uff84\uff9e\uff98\uff9d\uff78! \u305d\u306e\u5f8c\u306f\u8d05\u6ca2\u306b\u2026\u3055\u3044\u304d\u3063\u304f\uff8c\uff9f\uff70\uff99\u904a\u3073\u3092!",
                        "comments_my_max": "\uff7c\uff6f\uff78\uff7d\uff7e\uff9d\uff7d\u3092\u78e8\u304d\u307e\u3057\u3087\u3046\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u7570\u56fd\u306e\u98a8\u3067!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\uff78\uff99\uff70\uff7d\uff9e\u3078\uff64\u3054\u62db\u5f85\u266a",
                        "comments_work_2": "\u6ce2\u306b\u63c9\u307e\u308c\uff64\uff8a\uff9f\uff9c\uff70\uff71\uff6f\uff8c\uff9f\u3057\u307e\u3057\u305f!",
                        "comments_work_3": "\u4e16\u754c\u3078\u7fbd\u3070\u305f\u304f\uff64\uff95\uff6f\uff7a\uff9c\uff70\uff99\uff84\uff9e!",
                        "comments_work_4": "\u3059\u3079\u3066\u306e\uff78\uff9e\uff97\uff7b\uff9d\u306f\uff64\uff7e\uff9a\uff8c\uff9e\u306b\u901a\u305a\u308b\uff61\u3084\u306f\u308a\u6301\u3063\u3066\u304d\u3066\u6b63\u89e3\u3067\u3057\u305f!",
                        "comments_work_max": "\u672a\u6765\u4e88\u77e5! \u5fc5\u305a\u826f\u3044\u65c5\u306b\u306a\u308a\u307e\u3059\u3063\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_work_love_up": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff7e\uff9a\uff8c\uff9e\uff65\uff95\uff6f\uff7a\u3068\u547c\u3093\u3067\u304f\u3060\u3055\u3044\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_live": "\uff9a\uff6f\uff82! \uff7a\uff9e\uff70\uff7c\uff9e\uff6c\uff7d\uff65\uff7b\uff72\uff77\uff6f\uff78\uff65\uff82\uff71\uff70!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u8003\u3048\u304c\u8aad\u3081\u307e\u3057\u305f! \uff76\uff9c\uff72\uff72\u5b50\u3068\u306f\u65c5\u3092\u305b\u3088\u3068\u304b\u8a00\u3046\uff71\uff9a\u3067\u3059\u306d! \u306a\u3089\u3070\u5171\u306b\u6f15\u304e\u51fa\u3057\u307e\u3057\u3087\u3046\u2026\uff76\uff98\uff8c\uff9e\u3078!"
                    },
                    "voice": {
                        "comment": null,
                        "comments_my_1": null,
                        "comments_my_2": null,
                        "comments_my_3": null,
                        "comments_my_4": null,
                        "comments_my_max": null,
                        "comments_work_1": null,
                        "comments_work_2": null,
                        "comments_work_3": null,
                        "comments_work_4": null,
                        "comments_work_max": null,
                        "comments_work_love_up": null,
                        "comments_live": null,
                        "comments_love_max": null
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84]\u5800\u88d5\u5b50+",
                        "rarity": "4",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u5927\u6d77\u539f",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d1\uff5e2\u4eba\u306e\u653b \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "3528",
                        "default_defense": "2592",
                        "hash_card_id": "4201c7600dcea270874eacee8ecfd9c7",
                        "alias_name": "\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3343602",
                        "card_name": "[\u30af\u30eb\u30fc\u30b8\u30f3\u30b0\u30ea\u30dd\u30fc\u30c8]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": null
                    },
                    "comments": {
                        "comment": "\u3054\u7d39\u4ecb\u3057\u307e\u3057\u3087\u3046\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u79c1\u306e\u65b0\u305f\u306a\u53cb\u4eba\uff64\uff90\uff7d\uff80\uff70\uff65\uff8a\uff9f\uff72\uff9a\uff70\uff82\u3067\u3059! \uff76\uff98\uff8c\uff9e\u6d77\u306b\u751f\u304d\uff64\u6570\u5947\u306a\u904b\u547d\u306e\u679c\u3066\uff64\u3053\u306e\u571f\u7523\u5e97\u3078\u6d41\u308c\u7740\u3044\u305f\u3068\u304b\u2026\u3059\u3079\u3066\u83ef\u9e97\u306a\u308b\uff7b\uff72\uff7a\uff77\uff88\uff7c\uff7d\u3067\u304a\u805e\u304d\u3057\u307e\u3057\u305f!",
                        "comments_my_1": "\u307e\u3055\u306b\uff64\u5927\u6d77\u539f\u304c\u547c\u3093\u3067\u3044\u307e\u3059!",
                        "comments_my_2": "\uff8d\uff72\uff64\uff95\uff70! \uff84\uff9e\uff69\uff70\uff95\uff70\uff97\uff72\uff78\uff64\uff7b\uff72\uff77\uff6f\uff78? \uff9c\uff70\uff75!",
                        "comments_my_3": "\uff74\uff77\uff7f\uff9e\uff81\uff6f\uff78\u6e80\u8f09! \u76ee\u79fb\u308a\u3057\u307e\u3059\u306d!",
                        "comments_my_4": "\u3048\uff64\uff9a\uff8c\uff9f\uff98\uff76? \uff81\uff6f\uff81\uff6f\uff81\u2026\uff7b\uff72\uff77\uff6f\uff76\uff70\u3092\u304b\u3089\u304b\u3063\u3066\u3082\u7121\u99c4\u3067\u3059\u3088\uff64\u5e97\u54e1\u3055\u3093",
                        "comments_my_max": "\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u6b32\u3057\u3044\u3082\u306e\uff64\u5f53\u3066\u3066\u307f\u305b\u307e\u3057\u3087\u3046! \uff91\uff9d\uff6f!!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\uff78\uff99\uff70\uff7d\uff9e\u3078\uff64\u3054\u62db\u5f85\u266a",
                        "comments_work_2": "\u6ce2\u306b\u63c9\u307e\u308c\uff64\uff8a\uff9f\uff9c\uff70\uff71\uff6f\uff8c\uff9f\u3057\u307e\u3057\u305f!",
                        "comments_work_3": "\u3057\u3066\uff64\u8ca1\u5b9d\u306e\u5728\u308a\u51e6\u306f\u2026\uff8c\uff91\uff8c\uff91!",
                        "comments_work_4": "\u9583\u304d\u307e\u3057\u305f! \u3053\u306e\u6d77\u8cca\u3092\u756a\u7d44\u306e\uff8f\uff7d\uff7a\uff6f\uff84\u306b\u3057\u307e\u3057\u3087\u3046! \u2026\uff80\uff9e\uff92?",
                        "comments_work_max": "\uff7a\uff8e\uff9d\u2026150\u5104\u8239\u9577\u306f\uff64\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3067\u5b88\u308a\u307e\u3059\u3063! \u3054\u5b89\u5fc3\u3092!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u8239\u9577\u306a\u3089\uff64\u3069\u3053\u307e\u3067\u3082\u304a\u4f9b\u3057\u307e\u3059\u3088!",
                        "comments_live": "\uff91\uff91! \u3053\u306e\u65b9\u3082\uff64\u529b\u3092\u8cb8\u3059\u3068!",
                        "comments_love_max": "\u304a\u3084? \uff90\uff7d\uff80\uff70\uff65\uff8a\uff9f\uff72\uff9a\uff70\uff82\u304c\u76f8\u68d2\u306b\u306a\u308a\u305f\u3044\u305d\u3046\u3067\u3059\u3088\uff61\u3057\u304b\u3057\u6b8b\u5ff5! \u79c1\u306e\u96a3\u306f\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u3059\u3067\u306b\u4e88\u7d04\u6e08\u307f\u3067\u3059!"
                    },
                    "voice": {
                        "comment": null,
                        "comments_my_1": null,
                        "comments_my_2": null,
                        "comments_my_3": null,
                        "comments_my_4": null,
                        "comments_my_max": null,
                        "comments_work_1": null,
                        "comments_work_2": null,
                        "comments_work_3": null,
                        "comments_work_4": null,
                        "comments_work_max": null,
                        "comments_work_love_up": null,
                        "comments_live": null,
                        "comments_love_max": null
                    },
                    "event": {
                        "1717": {
                            "event_id": 1717,
                            "category_id": "10020",
                            "event_name": "\u30a2\u30a4\u30c9\u30eb\u30d7\u30ed\u30c7\u30e5\u30fc\u30b9<br \/>\u8c6a\u83ef\u5ba2\u8239\u30ab\u30ea\u30d3\u30a2\u30f3\u30af\u30eb\u30fc\u30ba"
                        }
                    },
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84\uff65S]\u5800\u88d5\u5b50",
                        "rarity": "3",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u5927\u6d77\u539f",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d1\uff5e2\u4eba\u306e\u5b88 \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "2440",
                        "default_defense": "2920",
                        "hash_card_id": "cefc8b04bb8f382379fa66d63aab3243",
                        "alias_name": "\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84\uff65S",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3243701",
                        "card_name": "[\u30af\u30eb\u30fc\u30b8\u30f3\u30b0\u30ea\u30dd\u30fc\u30c8\u30fbS]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": null
                    },
                    "comments": {
                        "comment": "\u307b\uff70\u3063\u307b\u307b\u307b! \u3044\u3088\u3044\u3088\u6d77\u5916\uff7e\uff9a\uff8c\uff9e\u306e\u4ef2\u9593\u5165\u308a\u3067\u3059\u306d\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u3053\u306e\u624b\u306b\u8f1d\u304f\uff64\u8c6a\u83ef\u5ba2\u8239\u306e\uff81\uff79\uff6f\uff84\u3053\u305d\u304c\u8a3c! \uff8b\uff9e\uff7c\uff8b\uff9e\uff7c\u611f\u3058\u307e\u3059\u3088\u2026\uff7a\uff9e\uff70\uff7c\uff9e\uff6c\uff7d\u3067\uff9c\uff9d\uff80\uff9e\uff8c\uff99\u306a\u65c5\u8def\u306b\u306a\u308b\uff64\u305d\u3093\u306a\u4e88\u611f\u3092!",
                        "comments_my_1": "\u307e\u3055\u306b\uff64\u5927\u6d77\u539f\u304c\u547c\u3093\u3067\u3044\u307e\u3059!",
                        "comments_my_2": "\uff8d\uff72\uff64\uff95\uff70! \uff84\uff9e\uff69\uff70\uff95\uff70\uff97\uff72\uff78\uff64\uff7b\uff72\uff77\uff6f\uff78? \uff9c\uff70\uff75!",
                        "comments_my_3": "\u3053\u306e\u9ad8\u7b11\u3044\u306f\u2026? \u3042\uff64\uff76\uff93\uff92\u3067\u3059\u304b",
                        "comments_my_4": "\u307e\u305a\u306f\uff64\uff73\uff6a\uff99\uff76\uff91\uff84\uff9e\uff98\uff9d\uff78! \u305d\u306e\u5f8c\u306f\u8d05\u6ca2\u306b\u2026\u3055\u3044\u304d\u3063\u304f\uff8c\uff9f\uff70\uff99\u904a\u3073\u3092!",
                        "comments_my_max": "\uff7c\uff6f\uff78\uff7d\uff7e\uff9d\uff7d\u3092\u78e8\u304d\u307e\u3057\u3087\u3046\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u7570\u56fd\u306e\u98a8\u3067!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\uff78\uff99\uff70\uff7d\uff9e\u3078\uff64\u3054\u62db\u5f85\u266a",
                        "comments_work_2": "\u6ce2\u306b\u63c9\u307e\u308c\uff64\uff8a\uff9f\uff9c\uff70\uff71\uff6f\uff8c\uff9f\u3057\u307e\u3057\u305f!",
                        "comments_work_3": "\u4e16\u754c\u3078\u7fbd\u3070\u305f\u304f\uff64\uff95\uff6f\uff7a\uff9c\uff70\uff99\uff84\uff9e!",
                        "comments_work_4": "\u3059\u3079\u3066\u306e\uff78\uff9e\uff97\uff7b\uff9d\u306f\uff64\uff7e\uff9a\uff8c\uff9e\u306b\u901a\u305a\u308b\uff61\u3084\u306f\u308a\u6301\u3063\u3066\u304d\u3066\u6b63\u89e3\u3067\u3057\u305f!",
                        "comments_work_max": "\u672a\u6765\u4e88\u77e5! \u5fc5\u305a\u826f\u3044\u65c5\u306b\u306a\u308a\u307e\u3059\u3063\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_work_love_up": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff7e\uff9a\uff8c\uff9e\uff65\uff95\uff6f\uff7a\u3068\u547c\u3093\u3067\u304f\u3060\u3055\u3044\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_live": "\uff9a\uff6f\uff82! \uff7a\uff9e\uff70\uff7c\uff9e\uff6c\uff7d\uff65\uff7b\uff72\uff77\uff6f\uff78\uff65\uff82\uff71\uff70!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u8003\u3048\u304c\u8aad\u3081\u307e\u3057\u305f! \uff76\uff9c\uff72\uff72\u5b50\u3068\u306f\u65c5\u3092\u305b\u3088\u3068\u304b\u8a00\u3046\uff71\uff9a\u3067\u3059\u306d! \u306a\u3089\u3070\u5171\u306b\u6f15\u304e\u51fa\u3057\u307e\u3057\u3087\u3046\u2026\uff76\uff98\uff8c\uff9e\u3078!"
                    },
                    "voice": {
                        "comment": null,
                        "comments_my_1": null,
                        "comments_my_2": null,
                        "comments_my_3": null,
                        "comments_my_4": null,
                        "comments_my_max": null,
                        "comments_work_1": null,
                        "comments_work_2": null,
                        "comments_work_3": null,
                        "comments_work_4": null,
                        "comments_work_max": null,
                        "comments_work_love_up": null,
                        "comments_live": null,
                        "comments_love_max": null
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84\uff65S]\u5800\u88d5\u5b50+",
                        "rarity": "4",
                        "cost": "14",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u5927\u6d77\u539f",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d2\u4eba\u306e\u5b88 \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "2928",
                        "default_defense": "3504",
                        "hash_card_id": "42dceae39ac53e024fb6db76cc26f411",
                        "alias_name": "\uff78\uff99\uff70\uff7c\uff9e\uff9d\uff78\uff9e\uff98\uff8e\uff9f\uff70\uff84\uff65S",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3343702",
                        "card_name": "[\u30af\u30eb\u30fc\u30b8\u30f3\u30b0\u30ea\u30dd\u30fc\u30c8\u30fbS]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": null
                    },
                    "comments": {
                        "comment": "\u3054\u7d39\u4ecb\u3057\u307e\u3057\u3087\u3046\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u79c1\u306e\u65b0\u305f\u306a\u53cb\u4eba\uff64\uff90\uff7d\uff80\uff70\uff65\uff8a\uff9f\uff72\uff9a\uff70\uff82\u3067\u3059! \uff76\uff98\uff8c\uff9e\u6d77\u306b\u751f\u304d\uff64\u6570\u5947\u306a\u904b\u547d\u306e\u679c\u3066\uff64\u3053\u306e\u571f\u7523\u5e97\u3078\u6d41\u308c\u7740\u3044\u305f\u3068\u304b\u2026\u3059\u3079\u3066\u83ef\u9e97\u306a\u308b\uff7b\uff72\uff7a\uff77\uff88\uff7c\uff7d\u3067\u304a\u805e\u304d\u3057\u307e\u3057\u305f!",
                        "comments_my_1": "\u307e\u3055\u306b\uff64\u5927\u6d77\u539f\u304c\u547c\u3093\u3067\u3044\u307e\u3059!",
                        "comments_my_2": "\uff8d\uff72\uff64\uff95\uff70! \uff84\uff9e\uff69\uff70\uff95\uff70\uff97\uff72\uff78\uff64\uff7b\uff72\uff77\uff6f\uff78? \uff9c\uff70\uff75!",
                        "comments_my_3": "\uff74\uff77\uff7f\uff9e\uff81\uff6f\uff78\u6e80\u8f09! \u76ee\u79fb\u308a\u3057\u307e\u3059\u306d!",
                        "comments_my_4": "\u3048\uff64\uff9a\uff8c\uff9f\uff98\uff76? \uff81\uff6f\uff81\uff6f\uff81\u2026\uff7b\uff72\uff77\uff6f\uff76\uff70\u3092\u304b\u3089\u304b\u3063\u3066\u3082\u7121\u99c4\u3067\u3059\u3088\uff64\u5e97\u54e1\u3055\u3093",
                        "comments_my_max": "\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u6b32\u3057\u3044\u3082\u306e\uff64\u5f53\u3066\u3066\u307f\u305b\u307e\u3057\u3087\u3046! \uff91\uff9d\uff6f!!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\uff78\uff99\uff70\uff7d\uff9e\u3078\uff64\u3054\u62db\u5f85\u266a",
                        "comments_work_2": "\u6ce2\u306b\u63c9\u307e\u308c\uff64\uff8a\uff9f\uff9c\uff70\uff71\uff6f\uff8c\uff9f\u3057\u307e\u3057\u305f!",
                        "comments_work_3": "\u3057\u3066\uff64\u8ca1\u5b9d\u306e\u5728\u308a\u51e6\u306f\u2026\uff8c\uff91\uff8c\uff91!",
                        "comments_work_4": "\u9583\u304d\u307e\u3057\u305f! \u3053\u306e\u6d77\u8cca\u3092\u756a\u7d44\u306e\uff8f\uff7d\uff7a\uff6f\uff84\u306b\u3057\u307e\u3057\u3087\u3046! \u2026\uff80\uff9e\uff92?",
                        "comments_work_max": "\uff7a\uff8e\uff9d\u2026150\u5104\u8239\u9577\u306f\uff64\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3067\u5b88\u308a\u307e\u3059\u3063! \u3054\u5b89\u5fc3\u3092!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u8239\u9577\u306a\u3089\uff64\u3069\u3053\u307e\u3067\u3082\u304a\u4f9b\u3057\u307e\u3059\u3088!",
                        "comments_live": "\uff91\uff91! \u3053\u306e\u65b9\u3082\uff64\u529b\u3092\u8cb8\u3059\u3068!",
                        "comments_love_max": "\u304a\u3084? \uff90\uff7d\uff80\uff70\uff65\uff8a\uff9f\uff72\uff9a\uff70\uff82\u304c\u76f8\u68d2\u306b\u306a\u308a\u305f\u3044\u305d\u3046\u3067\u3059\u3088\uff61\u3057\u304b\u3057\u6b8b\u5ff5! \u79c1\u306e\u96a3\u306f\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u3059\u3067\u306b\u4e88\u7d04\u6e08\u307f\u3067\u3059!"
                    },
                    "voice": {
                        "comment": null,
                        "comments_my_1": null,
                        "comments_my_2": null,
                        "comments_my_3": null,
                        "comments_my_4": null,
                        "comments_my_max": null,
                        "comments_work_1": null,
                        "comments_work_2": null,
                        "comments_work_3": null,
                        "comments_work_4": null,
                        "comments_work_max": null,
                        "comments_work_love_up": null,
                        "comments_live": null,
                        "comments_love_max": null
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u6e6f\u3051\u3080\u308a\uff7b\uff72\uff77\uff6f\uff76\uff70]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "18",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u98a8\u304a\u3053\u3057",
                        "skill_effect": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b\u5b88 \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "4300",
                        "default_defense": "4360",
                        "hash_card_id": "0662af7af3c7bf97ba34266f06737dd4",
                        "alias_name": "\u6e6f\u3051\u3080\u308a\uff7b\uff72\uff77\uff6f\uff76\uff70",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3409501",
                        "card_name": "[\u6e6f\u3051\u3080\u308a\u30b5\u30a4\u30ad\u30c3\u30ab\u30fc]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3053\u3053\u306f\uff7b\uff72\uff77\uff6f\uff78\u80fd\u529b\u958b\u767a\u6e29\u6cc9!! \u3068\u3044\u3046\u306e\u306f\uff73\uff7f\u3067\u3059\u304c\uff64\u307b\u3089! \u98a8\u306f\u8d77\u304d\u308b\u3093\u3067\u3059! \u304d\u3063\u3068\u305d\u306e\u3046\u3061\uff7b\uff72\uff7a\uff77\uff88\uff7c\uff7d\u3068\u304b\uff64\u7f8e\u58f0\u3068\u304b\uff64\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3068\u304b\uff64\u7f8e\u58f0\u3068\u304b\uff64\u3042\u3068\u3055\u3044\u304d\u3063\u304f\u7f8e\u58f0\u3068\u304b\u304c\u8eab\u306b\u3064\u304d\u307e\u3059! \u591a\u5206!",
                        "comments_my_1": "\u52b9\u80fd\u306b\uff64\u8d85\u80fd\u529b\u5f37\u5316\u2026\u306f\u306a\u3044\u304b",
                        "comments_my_2": "\uff8a\uff9e\uff7d\uff80\uff75\uff99\u3067\u96a0\u3057\u3066\u3082\uff64\u900f\u8996!?",
                        "comments_my_3": "\u6e6f\u306e\u6e29\u5ea6\uff64\u4e0a\u304c\u308c\uff70! \u6e6f\u53e3\uff71\uff82\u3063!",
                        "comments_my_4": "\u3055\u3044\u304d\u3063\u304f\u9593\u6b20\u6cc9!! \u3044\uff64\u3044\u3048\uff64\u8db3\u3067\u8e74\u3063\u305f\u308a\u3057\u3066\u306a\u3044\u3067\u3059\u2026",
                        "comments_my_max": "\u8d85\u80fd\u529b\u3092\u306f\u3058\u3044\u305f!? \u3055\u3059\u304c150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u7f8e\u808c\uff8a\uff9f\uff9c\uff70",
                        "comments_work_1": "\u6e29\u6cc9\u304b\u3089\uff83\uff9a\uff8e\uff9f\uff70\uff84! \u3042\uff64\u7740\u66ff\u3048\u2026",
                        "comments_work_2": "\u3069\u3046\uff64\u3058\u3093\u308f\u308a\u52b9\u3044\u3066\u304d\u305f?",
                        "comments_work_3": "\u843d\u3061\u306a\u3044! \u5ff5\u52d5\uff8a\uff9e\uff7d\uff80\uff75\uff99!",
                        "comments_work_4": "\u308f\u304b\u3063\u3066\u307e\u3059\uff61\uff7e\uff78\uff7c\uff70\u7cfb\u3067\u3059\u3088\u306d\u3063\uff61\u3053\u3046\u3067\u3059\u304b\uff64\u3082\u3063\u3068\u2026\uff91\uff9d!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u898b\u3089\u308c\u308b\u3068\u2026\u6e29\u5ea6\u6025\u4e0a\u6607! \uff8a\uff9f\uff72\uff9b\uff77\uff88\uff7c\uff7d?",
                        "comments_work_love_up": "\u9732\u5929\u98a8\u5442\u3067\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u2026\u3055\u3044\u304d\u3063\u304f\u5fc3\u306e\u4ea4\u6d41!",
                        "comments_live": "\u6e29\u6cc9\uff74\uff7a\uff70! \u307c\u3048\u3048\u3048\u3048\u3048\u3063!",
                        "comments_love_max": "\u305b\u3063\u304b\u304f\u306e\u6e29\u6cc9\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u5168\u80fd\u529b\u3092\u304a\u898b\u305b\u3057\u307e\u3059! \u3055\u3044\u304d\u3063\u304f\u80cc\u4e2d\u6d41\u3057\uff64\u3055\u3044\u304d\u3063\u304f\u6669\u914c\uff64\u3055\u3044\u304d\u3063\u304f\u7f8e\u808c\uff5e!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/76a8901d23d5f23f6437cf8ad6d93935.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/173934ed9ba2f484b51a86adee93c575.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/6fa2550bf89623a60d61f280ae6137a3.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/83244fa374f5506e655f4eeb7193cf2a.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/4f43481c6857107f8fb7ac35e3c30eed.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/97964f69d9e40cfaba39572a651f7a2e.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/933c7bdf6bb1e283ddc58137dccee450.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/808ca73996ba75aaf067865ff4978f85.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/6493da76a61d6ff2d98d525b70a167b1.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/6f949688366e02ba63d86558ef550d8b.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/136cd31c1baed4bb7c6d5d7f822d565c.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/55abbfb4a3c8160ea787b3b02d590785.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/673dea853882782fa546754a24be9af7.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3409501\/4eb08feb9f8014e46f4b696c2bb21a8b.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u6e6f\u3051\u3080\u308a\uff7b\uff72\uff77\uff6f\uff76\uff70]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "18",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u98a8\u304a\u3053\u3057",
                        "skill_effect": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b\u5b88 \u6975\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "5160",
                        "default_defense": "5232",
                        "hash_card_id": "756110c37e69d992aa3a8d4ba539f3e8",
                        "alias_name": "\u6e6f\u3051\u3080\u308a\uff7b\uff72\uff77\uff6f\uff76\uff70",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3509502",
                        "card_name": "[\u6e6f\u3051\u3080\u308a\u30b5\u30a4\u30ad\u30c3\u30ab\u30fc]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3055\u3044\u304d\u3063\u304f\u5927\uff65\u5bb4\uff65\u4f1a\uff70!! \u6e29\u6cc9\u306b\u5165\u308a\u307e\u304f\u3063\u305f\u3089\uff64\uff95\uff6f\uff7a\u306e\uff71\uff72\uff84\uff9e\uff99\uff8a\uff9f\uff9c\uff70\u304c\u4e00\u6c17\u306b\u5674\u304d\u51fa\u3057\u307e\u3057\u305f\u3088! \uff7d\uff83\uff70\uff7c\uff9e\u306b\u306f\uff64\u79c1\u306e\u4ed6\u306b\u3082\u8272\u3068\u308a\u3069\u308a\u306e\uff71\uff72\uff84\uff9e\uff99\u304c\u52e2\u305e\u308d\u3044! \u307f\u3093\u306a\u30673\uff652\uff651\uff65\uff7c\uff9e\uff6c\uff70\uff9d\uff8c\uff9f!!\u3000",
                        "comments_my_1": "\u52b9\u80fd\u306b\uff64\u8d85\u80fd\u529b\u5f37\u5316\u2026\u306f\u306a\u3044\u304b",
                        "comments_my_2": "\uff8a\uff9e\uff7d\uff80\uff75\uff99\u3067\u96a0\u3057\u3066\u3082\uff64\u900f\u8996!?",
                        "comments_my_3": "\u7a7a\u4e2d\u6d6e\u904a! \u307b\u3089\u6d6e\u3044\u305f! \u307b\u3089!",
                        "comments_my_4": "\u3044\u3064\u306e\u9593\u306b\u2026\u90e8\u5c4b\u306b\u5e03\u56e3\u304c!? \u3042\u306e\u4ef2\u5c45\u3055\u3093\uff64\u3082\u3057\u3084\u2026\u8d85\u2026",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u6795\u3092\u98db\u3070\u3057\u307e\u3059\u3063\uff61\uff91\uff91\uff91\uff91\uff70\uff9d\u2026\uff84\uff72\uff94\uff70\uff6f!!",
                        "comments_work_1": "\u6e29\u6cc9\u304b\u3089\uff83\uff9a\uff8e\uff9f\uff70\uff84! \u3042\uff64\u7740\u66ff\u3048\u2026",
                        "comments_work_2": "\u3069\u3046\uff64\u3058\u3093\u308f\u308a\u52b9\u3044\u3066\u304d\u305f?",
                        "comments_work_3": "\uff8a\uff9e\uff7b\uff7b\uff7b\uff70\uff6f\uff64\uff7f\uff83\uff9e\u3088\u8e0a\u308c! \u5ff5\u52d5\uff80\uff9e\uff9d\uff7d!",
                        "comments_work_4": "\u898b\u305f\u304b\u6e29\u6cc9\uff8a\uff9f\uff9c\uff70! \u3042\uff64\u3044\u3084\uff64\u6e29\u6cc9\u3068\u8d85\u80fd\u529b\u306e\uff80\uff9e\uff8c\uff9e\uff99\uff8a\uff9f\uff9c\uff70!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u3044\u308c\u3070\u79c1\u306e\uff8a\uff9f\uff9c\uff70\u306f\u6e67\u304d\u7d9a\u3051\u307e\u3059\u304b\u3089!",
                        "comments_work_love_up": "\u898b\u3048\u305f! \u6b21\u306e\uff75\uff8c\u3082150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u6e29\u6cc9\u65c5\u884c\u2026!?",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff84\uff9e\uff9d\uff81\uff6c\uff9d\u9a12\u304e\uff70!",
                        "comments_love_max": "\u6e29\u6cc9\u3067\u3053\u308c\u3060\u3051\u5143\u6c17\u3082\u3089\u3048\u308c\u3070\uff64\u8d85\u80fd\u529b\u306f\u2026\uff61\u3042\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u306a\u3093\u3067\u3082\u306a\u3044\u3067\u3059! \u3048\u3044\uff64\u3055\u3044\u304d\u3063\u304f\u53e3\u5c01\u3058\uff5e!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/bca8803ab9db31bd52782121d5b6ceaa.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/b15ad3d041a4b3755186c9d81f27c80a.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/1a82550bccd08c0dd986f03ba05e4750.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/d96afd5d03bdf63c8bb3c6f3fc3a819e.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/835fc3c05309905676b959495bf85fe5.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/efb477656a7e623f20d55028c66b929a.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/7060fd36c5d22b9b231e58652a34b1b7.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/b064d57aa6575b784f7d2f62efd85a10.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/001754c013412697caefa15833e402b3.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/36e98c8d2fa73f9c441b02e66fe0dafd.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/a29c38e651db8b8f0de7217f3363badc.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/76bccdf463345ecc5b742e906514fa39.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/c2854e9b5ee7d9ed36d5edf511e90441.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3509502\/520531c639132d64bee9f5b72a9e353e.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[CD\uff83\uff9e\uff8b\uff9e\uff6d\uff70]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "12",
                        "attribute": "passion",
                        "skill_name": "\uff90\uff97\uff78\uff99\uff83\uff9a\uff8a\uff9f\uff7c\uff70",
                        "skill_effect": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b\u5b88 \u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "2260",
                        "default_defense": "2800",
                        "hash_card_id": "3d3269835487382b0df4e3c8579bb76a",
                        "alias_name": "CD\uff83\uff9e\uff8b\uff9e\uff6d\uff70",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3413701",
                        "card_name": "[CD\u30c7\u30d3\u30e5\u30fc]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": null
                    },
                    "comments": {
                        "comment": "CD\uff83\uff9e\uff8b\uff9e\uff6d\uff70\u3068\u3044\u3046\u3053\u3068\u306f\uff64\u3068\u3046\u3068\u3046\u79c1\u306e\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u304c\u4e16\u306b\u8a8d\u3081\u3089\u308c\u305f\u3093\u3067\u3059\u306d\u3063! \u2026\u3048\uff64\u9055\u3046? \u3068\uff64\u3068\u306b\u304b\u304f! \u3053\u306eCD\u3067\u3082\u3063\u3068\u6ca2\u5c71\u306e\u4eba\u306b\uff64\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u3092\u77e5\u3089\u3057\u3081\u307e\u3057\u3087\u3046\u3063!",
                        "comments_my_1": "\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306e\uff83\uff70\uff8f\uff7f\uff9d\uff78\uff9e! \u805e\u3044\u3066\u306d!",
                        "comments_my_2": "\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u8133\u5185\u306b\u76f4\u63a5\u6b4c\u3092\u2026",
                        "comments_my_3": "\u632f\u308a\u3080\u304d\u3056\u307e\u306e\u2026\uff95\uff6f\uff7a\u3067\u3059!",
                        "comments_my_4": "\u3080\uff5e\u3093\u2026\u3053\u306e\uff76\uff70\uff84\uff9e\u306f\u2026\u661f\u3067\u3059\u3063! \u3048\u3063\uff64\u307f\uff64\u898b\u3048\u3066\uff85\uff72\uff83\uff9e\uff7d\uff96\uff70",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u3055\u3044\u304d\u3063\u304f\uff8e\uff9e\uff72\uff84\uff9a\u306e\u304a\u304b\u3052\u3067\u3059\u3063!",
                        "comments_work_1": "\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3067\uff77\uff92\u307e\u3059\u3088\u3063!",
                        "comments_work_2": "\u6b4c\u3044\u306a\u304c\u3089\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u3092\u2026\uff91\uff98\u304b",
                        "comments_work_3": "\u5ff5\u52d5\u3071\u308f\uff70! \uff8f\uff9d\uff84\u3070\u3055\uff70\u3063!",
                        "comments_work_4": "\u3075\u3063\u3075\u3063\u3075\u2026\u8863\u88c5\u306b\uff7d\uff8c\uff9f\uff70\uff9d\u3092\u4ed5\u8fbc\u3093\u3067\u304a\u304d\u307e\u3057\u305f\u3063! \u2026\u5916\u305b?",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\uff7c\uff9e\uff6c\uff79\uff6f\uff84\u306b\u3082\uff7b\uff72\uff77\uff6f\uff78\u3092\u53d6\u308a\u5165\u308c\u307e\u3057\u3087\u3046!",
                        "comments_work_love_up": "\uff90\uff97\uff78\uff99\uff83\uff9a\uff8a\uff9f\uff7c\uff70! \u79c1\u306e\u8003\u3048\u3066\u308b\u3053\u3068\uff64\u308f\u304b\u308a\u307e\u3059\u304b\u3063!?",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f! \uff8e\uff9e\uff72\uff84\uff9a\u306e\u6210\u679c!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff9a\uff6f\uff7d\uff9d\u2026\u3082\u3068\u3044\uff64\uff74\uff85\uff7c\uff9e\uff70\u3067\uff64\u3061\u3083\u3093\u3068\u6b4c\u3048\u3066CD\u3082\u51fa\u305b\u307e\u3057\u305f\u3063! \u3068\u306b\u304b\u304f\uff64\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3063!"
                    },
                    "voice": {
                        "comment": null,
                        "comments_my_1": null,
                        "comments_my_2": null,
                        "comments_my_3": null,
                        "comments_my_4": null,
                        "comments_my_max": null,
                        "comments_work_1": null,
                        "comments_work_2": null,
                        "comments_work_3": null,
                        "comments_work_4": null,
                        "comments_work_max": null,
                        "comments_work_love_up": null,
                        "comments_live": null,
                        "comments_love_max": null
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "1",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[CD\uff83\uff9e\uff8b\uff9e\uff6d\uff70]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "12",
                        "attribute": "passion",
                        "skill_name": "\uff90\uff97\uff78\uff99\uff83\uff9a\uff8a\uff9f\uff7c\uff70",
                        "skill_effect": "\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b\u5b88 \u7279\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "2712",
                        "default_defense": "3360",
                        "hash_card_id": "753c417a7ec341db7cea1b1310039afe",
                        "alias_name": "CD\uff83\uff9e\uff8b\uff9e\uff6d\uff70",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3513702",
                        "card_name": "[CD\u30c7\u30d3\u30e5\u30fc]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": null
                    },
                    "comments": {
                        "comment": "\u3075\u3063\u3075\u3063\u3075! \u3064\u3044\u306b\u79c1\u306e\u96a0\u3055\u308c\u3057\u80fd\u529b\u304c\u899a\u9192\u3057\u307e\u3057\u305f\u3088\u3063! \uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a! \uff75\uff9d\uff7d\uff83\uff70\uff7c\uff9e! \uff7d\uff83\uff70\uff7c\uff9e\u306e\u71b1\u91cf\u306f\u6025\u4e0a\u6607! \u3053\u308c\u305e\uff64\uff71\uff72\uff84\uff9e\uff99\uff8a\uff9f\uff72\uff9b\uff77\uff88\uff7c\uff7d! \u71c3\u3048\u3042\u304c\u308c! \u4f1a\u5834\u306e\u4e00\u756a\u5f8c\u308d\u307e\u3067\uff70!",
                        "comments_my_1": "\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306e\uff83\uff70\uff8f\uff7f\uff9d\uff78\uff9e! \u805e\u3044\u3066\u306d!",
                        "comments_my_2": "\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u8133\u5185\u306b\u76f4\u63a5\u6b4c\u3092\u2026",
                        "comments_my_3": "\u5ff5\u52d5\u3071\u308f\uff70! \uff79\uff70\uff8c\uff9e\uff99\u3076\u308f\uff70!",
                        "comments_my_4": "\u307f\u3093\u306a\u3067\u6b4c\u3044\u307e\u3057\u3087\uff70! \u3055\u3044\u304d\u3063\u304f! \u5927\uff95\uff86\uff7f\uff9e\uff9d-!",
                        "comments_my_max": "\u7f8e\u58f0\u2026\u3067\u306f\u306a\u3044\u304b\u3082\u3067\u3059\u304c\u3063! \u3061\u3083\u3093\u3068\u6b4c\u3048\u3066\u307e\u3059\u3088\u306d\u3063!?",
                        "comments_work_1": "\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3067\uff77\uff92\u307e\u3059\u3088\u3063!",
                        "comments_work_2": "\u6b4c\u3044\u306a\u304c\u3089\uff7d\uff8c\uff9f\uff70\uff9d\u66f2\u3052\u3092\u2026\uff91\uff98\u304b",
                        "comments_work_3": "\u6b4c\u3044\u306a\u304c\u3089\u2026\uff8f\uff72\uff78\u306a\u3089\u66f2\u3052\u308c\u308b!",
                        "comments_work_4": "\u3082\u3063\u3068\u3082\u3063\u3068\u79c1\u306e\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3067\u307f\u3093\u306a\u3092\u71c3\u3048\u3042\u304c\u3089\u305b\u307e\u3059\u3063!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u3082\u5c4a\u3051! \u3048\uff64\u3082\u3046\u5c4a\u3044\u3066\u308b? \u4f55\u304c\u3063!?",
                        "comments_work_love_up": "\u3055\u3042! 150\u5104\u3055\u3093\u3082\u4e00\u7dd2\u306b\u71c3\u3048\u3042\u304c\u308a\u307e\u3057\u3087\u3046!",
                        "comments_live": "\u307f\u3093\u306a\u306e\u60f3\u3044\u3092\u4e00\u3064\u306b!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u898b\u3048\u307e\u3059\u3063! \uff8c\uff67\uff9d\u306e\u59ff\u304c! \u5b09\u3057\u3044\u3067\u3059\u3063! \u3042\u308c\uff64\u3060\u3093\u3060\u3093\u898b\u3048\u306a\u304f\u2026\uff8a\uff9d\uff76\uff81\u501f\u308a\u307e\u3059\u3063! \uff7d\uff9e\uff8b\uff9e\uff8b\uff9e-!"
                    },
                    "voice": {
                        "comment": null,
                        "comments_my_1": null,
                        "comments_my_2": null,
                        "comments_my_3": null,
                        "comments_my_4": null,
                        "comments_my_max": null,
                        "comments_work_1": null,
                        "comments_work_2": null,
                        "comments_work_3": null,
                        "comments_work_4": null,
                        "comments_work_max": null,
                        "comments_work_love_up": null,
                        "comments_live": null,
                        "comments_love_max": null
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff7b\uff72\uff77\uff6f\uff78\uff8f\uff7c\uff9e\uff7c\uff6c\uff9d]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "19",
                        "attribute": "passion",
                        "skill_name": "\u3055\u3044\u304d\u3063\u304f\u2606\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b \u6975\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "5260",
                        "default_defense": "4060",
                        "hash_card_id": "6b9c0707971d95fd191fea1138c10722",
                        "alias_name": "\uff7b\uff72\uff77\uff6f\uff78\uff8f\uff7c\uff9e\uff7c\uff6c\uff9d",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3414001",
                        "card_name": "[\u30b5\u30a4\u30ad\u30c3\u30af\u30de\u30b8\u30b7\u30e3\u30f3]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3055\u3044\u304d\u3063\u304f\uff8f\uff7c\uff9e\uff6f\uff78\u3092\u4f1a\u5f97\u3057\u305f\u3053\u306e\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\uff64\uff8f\uff7c\uff9e\uff7c\uff6c\uff9d\uff95\uff6f\uff7a\u3068\u3057\u3066\u3082\u3084\u3063\u3066\u3044\u3051\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093! \uff8a\uff9f\uff70\uff83\uff68\uff70\u3067\u5927\uff73\uff79\u9593\u9055\u3044\u306a\u3057\u3067\u3059\u3088\u306d! \u3063\u3066\uff64\u3053\u308c\u306f\u5bb4\u4f1a\u82b8\u3067\u306f\u306a\u304f\u3066\uff64\u6b21\u306e\u5fc5\u6bba\u6280\u306a\u3093\u3067\u3059\u3051\u3069!",
                        "comments_my_1": "\u3055\u3044\u304d\u3063\u304f\u00d7\uff8f\uff7c\uff9e\uff6f\uff78\uff64\u304d\u3066\u307e\u3059\u306d",
                        "comments_my_2": "\u81ea\u5206\u306e\u80fd\u529b\u304c\u6050\u308d\u3057\u3044\u2026\u3063!",
                        "comments_my_3": "\u4ed5\u8fbc\u307f? \u306a\u3093\u306e\u3053\u3068\u3067\u3059\u304b\u306d\u2026",
                        "comments_my_4": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff8f\uff7c\uff9e\uff6f\uff78\u3084\u3063\u3066\u307f\u307e\u3059\u304b? \u6559\u3048\u307e\u3059\u3088!",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306f\uff8f\uff7c\uff9e\uff6f\uff78\u304c\u5fc5\u8981\u306a\u3044\u304f\u3089\u3044\uff72\uff79\u3066\u307e\u3059\u3088",
                        "comments_work_1": "\uff8f\uff7c\uff9e\uff6f\uff78\u65e9\u7740\u66ff\u3048! \u2026\u3057\u307e\u305b\u3093\u3088",
                        "comments_work_2": "\u304d\u3066\u307e\u3059\u304d\u3066\u307e\u3059! \u2026\u3069\u3053\u306b?",
                        "comments_work_3": "\uff91\uff91\uff91\u2026\u96c6\u4e2d\u3057\u3059\u304e\u3066\u77e5\u6075\u71b1\u304c\u2026",
                        "comments_work_4": "\uff9a\uff83\uff9e\uff68\uff70\uff7d\uff71\uff70\uff9d\uff7c\uff9e\uff6a\uff9d\uff84\uff99\uff92\uff70\uff9d! \uff95\uff6f\uff7a\u306e\u3055\u3044\u304d\u3063\u304f\uff8f\uff7c\uff9e\uff6f\uff78\uff7c\uff6e\uff70\u3078\u3088\u3046\u3053\u305d!",
                        "comments_work_max": "\uff8f\uff7c\uff9e\uff6f\uff78\u306f\uff71\uff7c\uff7d\uff80\uff9d\uff84\u3082\u5fc5\u8981\u306a\u3093\u3067\u3059\u3088\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u2026\uff81\uff97\uff6f",
                        "comments_work_love_up": "\uff8f\uff7c\uff9e\uff6f\uff78\u304c\u4e0a\u624b\u306b\u306a\u308a\u3059\u304e\u305f\u3089\uff64\uff7b\uff72\uff77\uff6f\uff76\uff70\u3092\u540d\u4e57\u308c\u306a\u304f\u306a\u3063\u3061\u3083\u3046!?",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff8f\uff7c\uff9e\uff6f\uff78\u2026\u3072\u3088\u3053!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u524d\u3067\u306f\uff76\uff70\uff84\uff9e\uff8f\uff7c\uff9e\uff6f\uff78\u306f\u5c01\u5370\u3067\u3059! \u3060\u3063\u3066\u2026\u307b\u3089\u2026\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u4f1d\u308f\u3063\u3061\u3083\u3046\u3058\u3083\u306a\u3044\u3067\u3059\u304b! \u3042\uff64\u3042\u306f\u306f!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/acfc5114e1aec09d569843f9b9b487d8.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/d044d419c603d27283c47dcc9b9e639b.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/67d1c2a6a79ed7010371af49d27a0cd8.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/aa6fa06eb620c487c29d8e869f3b1eba.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/277c5c5f747ffd1f33e5fb207d5ff653.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/971a4ed39aa531c30fe57d1e1fe2d0e2.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/6064c065a6bb05c625a8d8136095f162.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/5e81c45f8ca50cd6b44039ea2565cb55.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/73eceff5c5838f507ac777123d36f8e3.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/0ae051f78c15db86679f3a651ee9627f.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/d07a8e558fabd08b548a8bec6c29d8ec.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/edf1ff8b0c5eb0e1f7992f44b01af5d7.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/32e276cf1f2fbfd5b93bbc258e13b408.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3414001\/b525417851f8ffff70803287a5376fe2.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff7b\uff72\uff77\uff6f\uff78\uff8f\uff7c\uff9e\uff7c\uff6c\uff9d]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "19",
                        "attribute": "passion",
                        "skill_name": "\u3055\u3044\u304d\u3063\u304f\u2606\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\uff80\uff72\uff8c\uff9f\u306e\u653b \u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "6312",
                        "default_defense": "4872",
                        "hash_card_id": "cab748d4dfb5cbe80afb594b3c3f3a2c",
                        "alias_name": "\uff7b\uff72\uff77\uff6f\uff78\uff8f\uff7c\uff9e\uff7c\uff6c\uff9d",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3514002",
                        "card_name": "[\u30b5\u30a4\u30ad\u30c3\u30af\u30de\u30b8\u30b7\u30e3\u30f3]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3055\u3041\uff64\uff8c\uff67\uff9d\u306e\u307f\u306a\u3055\u3093! \uff95\uff6f\uff7a\u306e\u3055\u3044\u304d\u3063\u304f\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d! \u5ff5\u52d5\u2606\u6d6e\u904a\u3092\u3054\u89a7\u3044\u305f\u3060\u304d\u307e\u3057\u3087\u3046! \u3044\u304d\u307e\u3059\u3088\uff70\u3063! \u2026\uff91\uff91\uff91\uff9d\uff6f!! \u3042\u3063\uff64\u3042\u308c\u3063\uff64\u3053\u308c\uff64\u3061\u3087\u3063\u3068\u3053\u308f\u3044\uff64\u304b\u3082! \u3067\u2026\u3067\u3082\u2026\u304b\u3063\u2026\u5feb\u611f\u2026!",
                        "comments_my_1": "\u3055\u3044\u304d\u3063\u304f\u00d7\uff8f\uff7c\uff9e\uff6f\uff78\uff64\u304d\u3066\u307e\u3059\u306d",
                        "comments_my_2": "\u81ea\u5206\u306e\u80fd\u529b\u304c\u6050\u308d\u3057\u3044\u2026\u3063!",
                        "comments_my_3": "\u3053\u308c\u304c\uff8e\uff9d\uff93\uff89\u306e\u529b\u3067\u3059! \u3075\u306f\u306f!",
                        "comments_my_4": "\uff7b\uff72\uff77\uff6f\uff78\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d\u2026\uff71\uff72\uff84\uff9e\uff99\u754c\u306b\u6fc0\u9707\u304c\u8d70\u3063\u3061\u3083\u3044\u307e\u3059\u3088\u306d\uff64\u3075\u3075",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\u98db\u3093\u3067\u307f\u305f\u304b\u3063\u305f\u3089\u2026\u307b\u3089\uff64\u4e00\u7dd2\u306b!",
                        "comments_work_1": "\uff8f\uff7c\uff9e\uff6f\uff78\u65e9\u7740\u66ff\u3048! \u2026\u3057\u307e\u305b\u3093\u3088",
                        "comments_work_2": "\u304d\u3066\u307e\u3059\u304d\u3066\u307e\u3059! \u2026\u3069\u3053\u306b?",
                        "comments_work_3": "\u9a5a\u304d\u3059\u304e\u3066\uff71\uff7a\uff9e\u5916\u3055\u306a\u3044\u3067!",
                        "comments_work_4": "\u4e00\u5927\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d! \u773c\u3092\u304b\u3063\u307d\u3058\u3063\u3066\u898b\u3066\u304f\u3060\u3055\u3044! \u3048\uff64\u9055\u3046? \u8033?",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\uff84\uff6f\uff8c\uff9f\u306e\u5ea7\u307e\u3067\u6d6e\u904a\u3057\u3061\u3083\u3044\u307e\u3057\u3087\u3046!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff8a\uff70\uff84\u3082\uff8c\uff9c\uff8c\uff9c\u6d6e\u904a\u3055\u305b\u3061\u3083\u3044\u307e\u3059\u3063!",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d!",
                        "comments_love_max": "\u3053\u306e\uff95\uff6f\uff7a\uff64\u3055\u3044\u304d\u3063\u304f\u3071\u308f\uff70\u3082\uff8f\uff7c\uff9e\uff6f\uff78\u3082\u4f7f\u3044\u3053\u306a\u3057\u3066\uff64\u307f\u3093\u306a\u306e\uff8a\uff70\uff84\u3092\u304c\u3063\u3061\u308a\u63b4\u3093\u3067\u307f\u305b\u307e\u3059\u304b\u3089\u306d! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/03b29216eb7591039225e630af0ff32d.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/c92bc0c0d05802666eafc141a3234aee.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/3292c747a0a7b4edbeec7951fa0043f6.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/8cb754f5c50480ee57f1d0e9e4e6914f.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/89e074175a46ac3cef67904751138948.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/83dfabbf51e1120ceecf69fb85d37588.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/9cafdb1c61136465f651146c0c467bf5.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/b893b165d8fb18a803314461f700cbfe.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/1e413f966ccdac5907ce3a9932447884.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/0ba16c89fc7fdaef70ccf28ece4d4cee.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/49423e7bca400d95990f3d3ff040620b.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/847eadc8dcb456f1c0cd3c9c20c44bbd.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/33be7618a7ca72f5c5eb5159bd31aabf.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3514002\/6f9ade60e3d00e2b79db4c5019e7ff1f.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u5927\u5730\u306e\u3071\u308f\uff70\u2606]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "20",
                        "attribute": "passion",
                        "skill_name": "\uff90\uff97\uff78\uff99\uff80\uff9e\uff73\uff7c\uff9e\uff9d\uff78\uff9e",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d1\u4eba\u306e\u653b \u6975\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "5840",
                        "default_defense": "4020",
                        "hash_card_id": "99264bf5143c8ef20d5799bcee877921",
                        "alias_name": "\u5927\u5730\u306e\u3071\u308f\uff70\u2606",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3417101",
                        "card_name": "[\u5927\u5730\u306e\u3071\u308f\u30fc\u2606]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3053\u306e\uff8d\uff9f\uff9d\uff83\uff9e\uff6d\uff97\uff91\u306e\u63fa\u308c\u306f\uff64\u5927\u5730\u306e\uff8a\uff9f\uff9c\uff70\u304c\u79c1\u306b\u5165\u3063\u3066\u304d\u305f\u8a3c\u62e0\u3067\u3059! \u3075\u3075\u3075\u2026\u2026\u3053\u306e\u307e\u307e\u3044\u3051\u3070\uff64\u6700\u5f37\u306e\u3055\u3044\u304d\u3063\u304f\uff71\uff72\uff84\uff9e\uff99\u306b\u306a\u308b\u65e5\u3082\u8fd1\u3044\u3067\u3059\u306d! \u305d\u3093\u306a\u672a\u6765\u3082\u4e88\u77e5\u3057\u3061\u3083\u3044\u307e\u3059\u3088\uff5e!",
                        "comments_my_1": "\u3055\u3044\u304d\u3063\u304f\u2026\u88dc\u7d66\u4e2d\uff5e\u3075\u3045\uff5e",
                        "comments_my_2": "\u80fd\u529b\u304c\u6210\u9577\u671f! \u304b\uff64\u8eab\u4f53\u3082\u2026!",
                        "comments_my_3": "\u3048\uff64\u82f1\u8a9e\u306f\u307b\u3089\u2026\uff89\uff98\u3067\u3059\u3088!",
                        "comments_my_4": "\u3053\u306e\uff8d\uff9f\uff9d\uff83\uff9e\uff6d\uff97\uff91\u306f\uff64\u96d1\u8a8c\u306e\u901a\u8ca9\u3067\u624b\u306b\u5165\u308c\u305f\u7531\u7dd2\u6b63\u3057\u304d\uff93\uff89\u3067\u3059!",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082P\u529b\u3092\u88dc\u7d66\u3057\u307e\u305b\u3093\u304b? \uff77\uff9e\uff6d\uff77\uff9e\uff6d\uff6f\u3068!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\u7f8e\u5c11\u5973\uff64\uff95\uff6f\uff7a\u3067\u3059!",
                        "comments_work_2": "\u9053\u306b\u8ff7\u3063\u305f\u3089\u2026\uff80\uff9e\uff73\uff7c\uff9e\uff9d\uff78\uff9e!",
                        "comments_work_3": "\u71b1\u3044\u98a8\u304c\u2026\u304d\u3066\u307e\u3059\u304d\u3066\u307e\u3059!",
                        "comments_work_4": "\u3084\u306f\u308a\uff64\uff8a\uff9f\uff9c\uff70\uff71\uff6f\uff8c\uff9f\u306b\u306f\uff8c\uff67\uff9d\u306e\u5fdc\u63f4\u304c\u4e00\u756a\u52b9\u304f\u306e\u304b\u3082\u3057\u308c\u307e\u305b\u3093!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff64\u3055\u3044\u304d\u3063\u304f\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u306a\u308a\u307e\u305b\u3093?",
                        "comments_work_love_up": "UFO\u304c\u898b\u3048\u305f\u3089\uff64\u304a\u7948\u308a\u3057\u306a\u304d\u3083! \u3042\uff64\u6d41\u308c\u661f\u3068\u306f\u9055\u3044\u307e\u3059?",
                        "comments_live": "\u3044\u307e\u306f\uff8a\uff9f\uff9c\uff70\u304c\u8db3\u308a\u306a\u3044\u3063!",
                        "comments_love_max": "\u79c1\uff64\uff8e\uff9d\uff84\u306f\u6c17\u4ed8\u3044\u3066\u307e\u3057\u305f\uff61\u81ea\u5206\u3060\u3051\u3067\u306f\u80fd\u529b\u306e\u9650\u754c\u3082\u6765\u307e\u3059\u3088\u306d\uff61\u3051\u3069\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u3044\u308b\u304b\u3089\u5fc3\u914d\u306a\u3044\u3063\u3066\u3053\u3068!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/c3a321ad2d1fb1a6dd19812d08c8f660.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/9e45db8cfbc909d964c43c3ed7e320f9.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/3ec1e711117202040865871a3718f980.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/df2ce7137b193e4379cc9d9a644daaae.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/30e8febae8bca214466c186372aace33.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/425bba6854f47529a0b10824aaccb917.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/d0b7355f5a1aa341c172f3e0279d2217.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/e360dc1bae4c351229077bb63b34e657.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/e1abac84fcedd3e3403236268a2972c1.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/10fba69e5ca79f917422e626fcf82a41.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/b928fdc731ac24702fb36319569af4f9.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/f747c6df9ae65e27b3f8a5cd839259a9.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/6dc500731d57c2d437704b42a583e1bf.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3417101\/a25527ebbb231840502b9d1c1db4160c.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "1",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u5927\u5730\u306e\u3071\u308f\uff70\u2606]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "20",
                        "attribute": "passion",
                        "skill_name": "\uff90\uff97\uff78\uff99\uff80\uff9e\uff73\uff7c\uff9e\uff9d\uff78\uff9e",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d1\u4eba\u306e\u653b \u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "7008",
                        "default_defense": "4824",
                        "hash_card_id": "9549306aa4c5394f93ee2eb93809485d",
                        "alias_name": "\u5927\u5730\u306e\u3071\u308f\uff70\u2606",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3517102",
                        "card_name": "[\u5927\u5730\u306e\u3071\u308f\u30fc\u2606]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3055\u3044\u304d\u3063\u304f\u7f8e\u5c11\u5973\uff95\uff6f\uff7a\u306f\u52d5\u7269\u306b\u3082\u597d\u304b\u308c\u3061\u3083\u3046\u3093\u3067\u3059\uff61\u8a00\u8449\u306f\u308f\u304b\u3089\u306a\u304f\u3066\u3082\uff64\u5fc3\u3067\u5ff5\u3058\u308c\u3070\u4f1d\u308f\u308b\u3063\u3066\u4fe1\u3058\u3066\u307e\u3059\u304b\u3089\u306d! \u3078\u3078\u3063\u266a\u3055\u3041\uff64\u52d5\u7269\u305f\u3061\u307f\u3093\u306a\uff64\u3064\u3044\u3066\u304a\u3044\u3067\uff5e!",
                        "comments_my_1": "\u3055\u3044\u304d\u3063\u304f\u2026\u88dc\u7d66\u4e2d\uff5e\u3075\u3045\uff5e",
                        "comments_my_2": "\u80fd\u529b\u304c\u6210\u9577\u671f! \u304b\uff64\u8eab\u4f53\u3082\u2026!",
                        "comments_my_3": "\u53f3\u624b\u306b\u306f\uff64\uff8a\uff9f\uff9c\uff70\u3042\u308a\u305d\u3046\u306a\u4eba\u5f62!",
                        "comments_my_4": "\uff74\uff7b\u3092\u4ed5\u8fbc\u3093\u3067\u308b? \u306a\u3093\u306e\u3053\u3068\u3067\u3059\u304b\u306d\u2026\u79c1\u306f\u5ff5\u8a71\u3067\u5bfe\u8a71\u3092\u2026",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\u5ff5\u8a71\u3057\u307e\u3057\u3087\u3046! \u3084\u308c\u3070\u3067\u304d\u307e\u3059\u3063!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\u7f8e\u5c11\u5973\uff64\uff95\uff6f\uff7a\u3067\u3059!",
                        "comments_work_2": "\u9053\u306b\u8ff7\u3063\u305f\u3089\u2026\uff80\uff9e\uff73\uff7c\uff9e\uff9d\uff78\uff9e!",
                        "comments_work_3": "\u5de6\u624b\u306b\u306f\uff64\u306a\u3093\u3068\u306a\u304f\uff8c\uff9e\uff70\uff92\uff97\uff9d!",
                        "comments_work_4": "\uff7b\uff72\uff77\uff6f\uff78\u5ff5\u8a71\u3092\u4f7f\u3048\u3070\uff64\u52d5\u7269\u3068\u3060\u3063\u3066\u8a71\u305b\u308b\u3093\u3067\u3059\u3088\uff64\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u306f\u901a\u3058\u3042\u3063\u3066\u307e\u3059! \uff8a\uff9f\uff9c\uff70\u304c\u306a\u304f\u3066\u3082!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306f\u8ffd\u3044\u304b\u3051\u3089\u308c\u308b\u5074\u3067\u3044\u3066\u304f\u3060\u3055\u3044!",
                        "comments_live": "\u307f\u3093\u306a\u3067\u3044\u304f\u305e\uff70\u3063!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306f\uff64\u52d5\u7269\u305f\u3061\u306e\uff71\uff72\uff84\uff9e\uff99\u306b\u3082\u306a\u308c\u305f\u307f\u305f\u3044\u3067\u3059! \u3053\u306e\u307e\u307e\u5730\u7403\u4e0a\u307f\u3093\u306a\u306e\uff71\uff72\uff84\uff9e\uff99\u306b\u306a\u308a\u305f\u3044\u306a!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/277da719f2a75d83bd32b740364a638f.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/a68ca59245fafd600d7c38b98e49ccc9.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/946f458854032dfcb6a8f41e7c169e55.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/3016142dd8ea7d9f405e1046047b1736.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/a93c6dbf26d32596c80261a8ca047adf.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/15eb7164bfdaaee0e39c0757d063a93e.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/fd309249d63f646e9104f07d2a59f301.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/d6749da64b0b09398cafb48e21a465d2.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/c34979736eceb57166032145814773c2.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/6217f831a4466ba54ecf509330b9465e.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/260be9e1d129bcf699e40c6e4993456d.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/bd8f003b397062f7ae1a348b3d0085d0.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/5796415a70f7fb359474f3832e373647.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3517102\/87bd3a5b4d55afb44dea1d357fd789f5.mp4"
                    },
                    "event": {
                        "414": {
                            "event_id": 414,
                            "category_id": "10020",
                            "event_name": "\u3069\u3046\u3076\u3064\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc \u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u7de8"
                        }
                    },
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u3055\u3044\u304d\u3063\u304f\u2606\uff8e\uff9e\uff72\uff7d]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "20",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u672c\u756a",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d3\u4eba\u306e\u653b \u6975\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "5920",
                        "default_defense": "4220",
                        "hash_card_id": "4d914ac85a06f7643c5b327242a6c30b",
                        "alias_name": "\u3055\u3044\u304d\u3063\u304f\u2606\uff8e\uff9e\uff72\uff7d",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3422201",
                        "card_name": "[\u3055\u3044\u304d\u3063\u304f\u2606\u30dc\u30a4\u30b9]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3044\u3084\u3041\uff64\uff7b\uff72\uff77\uff6f\uff78\u306b\u983c\u3063\u3066\uff64\u5927\u4e8b\u306a\u3053\u3068\u3092\u3054\u307e\u304b\u3057\u3061\u3083\u3044\u3051\u306a\u3044\u306a\u3063\u3066\u601d\u3063\u305f\u3093\u3067\u3059\uff61\u3060\u304b\u3089\uff64\u3053\u306e\uff71\uff72\uff83\uff91\u306e\u529b\u3092\u501f\u308a\u3066\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u4f1d\u3048\u305f\u3044\u306a\u3063\u3066\u601d\u3044\u307e\u3057\u3066! \u4f1d\u308f\u308a\u307e\u3057\u305f?",
                        "comments_my_1": "\u3084\u306f\u308a\u3053\u308c\u3082\uff95\uff6f\uff7a\u3089\u3057\u3055\u304b\u3068!",
                        "comments_my_2": "\u5927\u4e8b\u306a\u306e\u306f\u5fc3\u3067\u3059\u304b\u3089\u306d!",
                        "comments_my_3": "\u5fc3\u306e\u58f0\u306f\u4f1d\u308f\u308a\u307e\u3059! \u306f\u3044!",
                        "comments_my_4": "\u5730\u7344\u306e\uff7b\uff72\uff77\uff6f\uff78\uff84\uff9a\uff70\uff86\uff9d\uff78\uff9e\u306f\uff64\u9b3c\uff84\uff9a\uff70\uff85\uff70\uff95\uff6f\uff7a\u304c\u304a\u9001\u308a\u3057\u307e\u3059! \u306a\u3093\u3066!",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306a\u3089\uff64\u8a00\u308f\u306a\u304f\u3066\u3082\u4f1d\u308f\u308b\u306e\u304c\u4e00\u756a\u3067\u3059",
                        "comments_work_1": "\u898b\u3066\u304f\u3060\u3055\u3044\uff64\uff95\uff6f\uff7a\u306e\u672c\u9818\u767a\u63ee!",
                        "comments_work_2": "\u304d\u3066\u307e\u3059\u304d\u3066\u307e\u3059! \u307b\u3089! \u4eca!",
                        "comments_work_3": "\u4eca\u56de\u306f\uff7b\uff72\uff77\uff6f\uff78\uff71\uff72\uff83\uff91\u3092\u5c01\u5370\u3063!",
                        "comments_work_4": "\u3082\u3061\u308d\u3093\u304a\u4ed5\u4e8b\u306a\u3089\uff64\u5927\u304d\u306a\u58f0\u3067\u4f1d\u3048\u307e\u3059! \uff8c\uff67\uff9d\u306e\u7686\u3055\u3093\u306b\u306f!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u304a\u8fd4\u4e8b\u306f\uff64\u7b11\u9854\u4e00\u3064\u3067\u5341\u5206\u3067\u3059\u3063!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff64\u672c\u5fc3\u805e\u304b\u305b\u3066\u304f\u3060\u3055\u3044\u3063\uff61\u3044\u3064\u3067\u3082!",
                        "comments_live": "\uff83\uff9a\uff9a\uff9a\uff70\uff64\u305f\u3060\u306e\u7cf8\u3067\u3093\u308f\uff5e!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\uff64\u65e5\u9803\u306e\u60f3\u3044\u3092\u4f1d\u3048\u3089\u308c\u3066\u826f\u304b\u3063\u305f! \u304a\uff8a\uff9e\uff76\uff77\uff6c\uff97\u306e\uff95\uff6f\uff7a\u3058\u3083\uff64\u3064\u3044\uff80\uff72\uff90\uff9d\uff78\uff9e\u3092\u9003\u3057\u3061\u3083\u3044\u307e\u3059\u304b\u3089\uff61\u3048\u3078\u3078!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/edbb9d4f553e6bddd3c32f228c9a66e8.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/0c8c0a58c7b25113c62fd44747833558.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/020e6a8d09939571fd10b40f14b93950.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/ccc4ec085e7f0bb67226e3b96aa2e6a7.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/793e126e314794e8a908ab33f54c063b.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/08164c302b353161b4d1f0942cc16dd6.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/484caee56e28271f152fe998f9366145.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/c0bd1f59221913a5cb8e2272b19fda6f.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/da77ff443b49815f2cd5263d1475f3b4.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/184a201e78c9b66a03e996400dc5d121.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/fc19e3e302705b7a613b325f8821d6cb.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/54ce84cd7abb5da50cf29d4dd390e2cc.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/8c68393dba299f6bd3c471debaef6829.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3422201\/35ae292b2de4b1e4f56d61a661d27917.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u3055\u3044\u304d\u3063\u304f\u2606\uff8e\uff9e\uff72\uff7d]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "20",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u672c\u756a",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d3\u4eba\u306e\u653b \u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "7104",
                        "default_defense": "5064",
                        "hash_card_id": "210300780515553e62e96bea844e9a8d",
                        "alias_name": "\u3055\u3044\u304d\u3063\u304f\u2606\uff8e\uff9e\uff72\uff7d",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3522202",
                        "card_name": "[\u3055\u3044\u304d\u3063\u304f\u2606\u30dc\u30a4\u30b9]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff9a\uff83\uff9e\uff68\uff70\uff7d\uff71\uff70\uff9d\uff84\uff9e\uff7c\uff9e\uff6a\uff9d\uff84\uff99\uff92\uff70\uff9d! \u4eca\u65e5\u306f\uff95\uff6f\uff7a\u306e\uff7d\uff8d\uff9f\uff7c\uff6c\uff99\uff8a\uff9f\uff8c\uff6b\uff70\uff8f\uff9d\uff7d\u3092\u3054\u89a7\u306b\u5165\u308c\u307e\u3057\u3087\u3046! \u8d85\u80fd\u529b\u3092\u62ab\u9732\u3057\u307e\u3059\u304b\u3089\u306d! \uff91\uff91\uff91\uff91\uff70\uff9d! \u3053\uff70\u3044\uff64\uff83\uff9a\uff8e\uff9f\uff70\uff83\uff70\uff7c\uff6e\uff9d\uff6f!! \uff8a\uff9e\uff8a\uff9e\uff70\uff9d! \u3069\uff70\u3067\u3059\uff64\u3053\u308c\u305e\u3068\u3063\u3066\u304a\u304d\u306e\uff74\uff7d\uff8a\uff9f\uff70\u2606",
                        "comments_my_1": "\u3084\u306f\u308a\u3053\u308c\u3082\uff95\uff6f\uff7a\u3089\u3057\u3055\u304b\u3068!",
                        "comments_my_2": "\u5927\u4e8b\u306a\u306e\u306f\u5fc3\u3067\u3059\u304b\u3089\u306d!",
                        "comments_my_3": "\uff90\uff97\uff78\uff99\u8d77\u304d\u307e\u3059! \u8d77\u3053\u3057\u307e\u3059!",
                        "comments_my_4": "\u5927\u4e08\u592b\uff64\uff81\uff6c\uff70\uff7c\uff9e\u3057\u3066\u304d\u307e\u3057\u305f! \u5bdd\u6e9c\u3081! \u98df\u3044\u6e9c\u3081! \uff7b\uff72\uff77\uff6f\uff78\u6e9c\u3081\u2606",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff64\u9593\u9055\u3048\u3066\uff7d\uff83\uff70\uff7c\uff9e\u306b\uff83\uff9a\uff8e\uff9f\uff70\uff83\uff70\uff7c\uff6e\uff9d\u3057\u307e\u3059?",
                        "comments_work_1": "\u898b\u3066\u304f\u3060\u3055\u3044\uff64\uff95\uff6f\uff7a\u306e\u672c\u9818\u767a\u63ee!",
                        "comments_work_2": "\u304d\u3066\u307e\u3059\u304d\u3066\u307e\u3059! \u307b\u3089! \u4eca!",
                        "comments_work_3": "\u307f\u306a\u3055\u3093\u3053\u3061\u3089\u306b\u3054\u6ce8\u76ee\uff5e\u266a",
                        "comments_work_4": "\u3053\uff70\u3044! \u2026\u2026\u3042\uff64\uff71\uff9a\u3063!? \uff7b\uff72\uff77\uff6f\uff78\u306e\u8abf\u5b50\u304c\u60aa\u3044\u307f\u305f\u3044\u3060\u2026\u3066\u3078!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u3044\u3063\u3057\u3087\u306b\uff64\uff84\uff6f\uff8c\uff9f\u307e\u3067\uff83\uff9a\uff8e\uff9f\uff70\uff83\uff70\uff7c\uff6e\uff9d!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff8a\uff70\uff84\u306b\u3082\uff64\uff90\uff97\uff78\uff99\u8d77\u3053\u3057\u3066\u307f\u305b\u307e\u3059\u3088!",
                        "comments_live": "\uff90\uff97\uff78\uff99\uff95\uff6f\uff7a\u306e\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff8c\uff6b\uff70\uff8f\uff9d\uff7d!",
                        "comments_love_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u79c1\u3082\uff64\u58f0\u63f4\u306e\u529b\u3067\u3082\u3063\u3068\uff8a\uff9f\uff9c\uff70\uff71\uff6f\uff8c\uff9f\u3067\u304d\u308b\u3063\u3066\u77e5\u308c\u307e\u3057\u305f! \u6b21\u306e\uff90\uff97\uff78\uff99\u3082\u8d77\u3053\u3057\u307e\u3057\u3087\u3046! \u7d76\u5bfe\u3067\u3059\u2606"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/67241e8d68d755a31d0467c72732311c.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/6b63c87586e998226cf5325633b9265b.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/c9d5f2b8684d69741c904f95fa401832.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/01d1668699a8812cd9b3a1911f297494.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/7ed7198cf5dc59107a46d6ffd4be6b38.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/5a640b1d23f0041bda84ebd395f40003.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/9539232cc2e1675530c8833a9f7ac9dd.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/b55b377bebd518f1e2aeb07f83f7b56b.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/7e51f5d1e36b6ef1b54706004cf2f043.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/69f922a58c4c0b7fab15d7cc84042afb.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/8320050a2d10318033ed24c0dd14d555.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/94054ba82e07eab6474d9f0dd140d1c6.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/bc307e3b032ef014f585a81c7ee8836a.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3522202\/8e11e54e566aa7fd248cfd10321ee0c8.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff90\uff97\uff78\uff99\uff8a\uff9f\uff83\uff68\uff7c\uff74\uff70\uff99\u2606]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "21",
                        "attribute": "passion",
                        "skill_name": "\u5ff5\u529b\uff8d\uff9e\uff98\uff70!!",
                        "skill_effect": "\u5168\uff80\uff72\uff8c\uff9f\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d4\u4eba\u306e\u653b\u5b88 \u6975\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "5540",
                        "default_defense": "5500",
                        "hash_card_id": "e60c6c9469235806c84c200bd1336dc6",
                        "alias_name": "\uff90\uff97\uff78\uff99\uff8a\uff9f\uff83\uff68\uff7c\uff74\uff70\uff99\u2606",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3426301",
                        "card_name": "[\u30df\u30e9\u30af\u30eb\u30d1\u30c6\u30a3\u30b7\u30a8\u30fc\u30eb\u2606]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff91\uff91\uff91\u2026\uff8e\uff72! \u307b\u3089\uff64\u5927\u53ce\u7a6b\u3067\u3059! \u3055\u3089\u306b\uff64\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3092\u9001\u308a\u3053\u3093\u3067\uff64\u901a\u5e38\u306e3\u500d\uff64\u7518\u304f\u3057\u3061\u3083\u3044\u307e\u3057\u305f\u304b\u3089! \uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u3072\u3068\u3064\u5473\u898b\u3057\u3066\u307f\u307e\u3059? \u7f8e\u5473\u3057\u304f\u3066\u982c\u3063\u307a\u305f\u843d\u3061\u3061\u3083\u3044\u307e\u3059\u3088!?",
                        "comments_my_1": "\u3055\u3044\u304d\u3063\u304f\u2026\u3064\u307e\u307f\u98df\u3044\uff5e! ",
                        "comments_my_2": "\u4eca\u65e5\u306f\u2026\uff7c\uff9e\uff6c\uff70\uff9d! \uff72\uff81\uff7a\uff9e\u306e\uff7d\uff8c\uff9f\uff70\uff9d!",
                        "comments_my_3": "\uff95\uff6f\uff7a\u3068\u540c\u3058\u3067\u3059\u306d\uff61\u98df\u3079\u3054\u308d!",
                        "comments_my_4": "\u3055\u3044\u304d\u3063\u304f\u2026\u5149\u5408\u6210\u3063! \uff72\uff81\uff7a\uff9e\u3061\u3083\u3093\uff64\u7f8e\u5473\u3057\u304f\u80b2\u3063\u3066\u306d\u3063\u266a",
                        "comments_my_max": "\u307f\u305a\u307f\u305a\u3057\u304f\u3066\uff64\u4eca\u304c\u65ec! \u307e\u308b\u3067\uff95\uff6f\uff7a\u307f\u305f\u3044\u3067\u3059\u306d! \u3066\u3078\u3078\u2026",
                        "comments_work_1": "\u306f\uff5e\uff64\u7d76\u5bfe\u306b\u7f8e\u5473\u3057\u3044\u2026\u4e88\u8a00 ! ",
                        "comments_work_2": "\u3053\u3093\u306a\u3093\u51fa\u307e\u3057\u305f\u3051\u3069\uff5e!",
                        "comments_work_3": "\u98df\uff9a\uff8e\uff9f\u306f\uff71\uff72\uff84\uff9e\uff99\u306e\u57fa\u672c\u2026\u3046\u307e\u3044!",
                        "comments_work_4": "\u7a76\u6975\u306e\uff79\uff70\uff77\u306b\uff8a\uff9e\uff6f\uff81\uff98\u5408\u3046\uff64\u6700\u9ad8\u7d1a\u306e\uff72\uff81\uff7a\uff9e\u3092\u2026\u900f\u8996\u3063! \u3048\u3044\u3063! ",
                        "comments_work_max": "\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u53e3\u958b\u3051\u3066\u304f\u3060\u3055\u3044! \u306f\u3044\uff64\u5ff5\u52d5\u529b\u3067\u2026\u3042\uff5e\u3093!",
                        "comments_work_love_up": "\u756a\u7d44\u306e\u4f01\u753b\u3067\u3042\u3063\u3066\u3082\uff64\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u306f\u624b\u3092\u629c\u304d\u307e\u305b\u3093! \uff91\uff91\uff91\uff70\uff9d!",
                        "comments_live": "\uff8d\uff9e\uff98\uff70\uff65\uff8d\uff9e\uff98\uff70\uff65\uff83\uff9a\uff8a\uff9f\uff7c\uff70!",
                        "comments_love_max": "\u306f\uff5e\uff64\u3064\u3044\u5922\u4e2d\u306b\u306a\u3063\u3066\u63a1\u308a\u3059\u304e\u307e\u3057\u305f\u2026\uff61\u3067\u3082\u5b89\u5fc3\u3092! \u53b3\u9078\u3057\u305f\uff72\uff81\uff7a\uff9e\u306f\u2026\uff78\uff6f\uff77\uff9d\uff78\uff9e\uff7d\uff80\uff7c\uff9e\uff75\u306b\uff83\uff9a\uff8e\uff9f\uff70\uff84! \u6b8b\u308a\u306f\u5168\u90e8\u3044\u305f\u3060\u304d\u307e\u3059\u306d!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/fdcfe8f6143a555d4973ada70b2ff941.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/e4ded4818b4c41cab73527c39aa120a0.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/8d69607893c26c404cdde1a1c6df8332.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/aa9c0b0af6cfd3abfb2dc65ea64f39dd.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/af7a4717b598d5e8e767c9a0064d8974.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/aef80f401f2ad3337fe0995c429138b9.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/a80ac1476c8efa845e68630a2fc8a8e4.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/d85ac01127372b65347c9ebda3aa8cb5.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/19d994081b9e3e2e2b202ec5dc8ad431.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/ce830440e82bccd6863bd03078af4c53.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/8159ef05e8882f560816d16a820f0bb2.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/5bc7ed5d6859d3f96ec4909e8b781577.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/6437cdbc4beb4d5a37a75b977c0da914.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3426301\/2d4812cc19f3f79c715d4073e313c90e.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\uff90\uff97\uff78\uff99\uff8a\uff9f\uff83\uff68\uff7c\uff74\uff70\uff99\u2606]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "21",
                        "attribute": "passion",
                        "skill_name": "\u5ff5\u529b\uff8d\uff9e\uff98\uff70!!",
                        "skill_effect": "\u5168\uff80\uff72\uff8c\uff9f\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d4\u4eba\u306e\u653b\u5b88 \u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "6648",
                        "default_defense": "6600",
                        "hash_card_id": "cd82605167df5280f7a1496dfb819801",
                        "alias_name": "\uff90\uff97\uff78\uff99\uff8a\uff9f\uff83\uff68\uff7c\uff74\uff70\uff99\u2606",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3526302",
                        "card_name": "[\u30df\u30e9\u30af\u30eb\u30d1\u30c6\u30a3\u30b7\u30a8\u30fc\u30eb\u2606]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3075\u3075\u3075\uff64\u4eba\u547c\u3093\u3067\uff74\uff7d\uff8a\uff9f\uff70\uff65\uff8a\uff9f\uff83\uff68\uff7c\uff74\uff70\uff99\u767b\u5834\uff5e! \u6700\u9ad8\u7d1a\u306e\uff72\uff81\uff7a\uff9e\u3092\u4f7f\u3063\u305f\u7a76\u6975\u306e\uff79\uff70\uff77\u306b\uff64\u6975\u9650\u307e\u3067\uff75\uff70\uff97\u3092\u9ad8\u3081\u305f\uff7b\uff72\uff77\uff6f\uff78\uff65\uff8a\uff9f\uff9c\uff70\u3092\u6ce8\u5165\u3063! \u3069\u308c\u3069\u308c\uff64\uff8d\uff9f\uff9b\uff6f! \u3053\uff64\u3053\u308c\u306f\u2026! \u3055\uff64\u3055\u3044\u304d\u3063\u304f\uff65\u3046\u307e\u3044\uff5e\u3063!!",
                        "comments_my_1": "\u3055\u3044\u304d\u3063\u304f\u2026\u3064\u307e\u307f\u98df\u3044\uff5e! ",
                        "comments_my_2": "\u4eca\u65e5\u306f\u2026\uff7c\uff9e\uff6c\uff70\uff9d! \uff72\uff81\uff7a\uff9e\u306e\uff7d\uff8c\uff9f\uff70\uff9d!",
                        "comments_my_3": "\u3055\u3044\u304d\u3063\u304f\u2026\u304f\u3063\u304d\u3093\u3050\u3063!",
                        "comments_my_4": "\uff95\uff6f\uff7a\u306e\u3055\u3044\u304d\u3063\u304f\uff65\u308c\u3057\u3074! \u96a0\u3057\u5473\u306f\u2026\u611b\u60c5\u3068\u5ff5\u529b\u3092\u5c11\u3005!",
                        "comments_my_max": "\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\u5473\u898b\u3057\u305f\u3044\u3067\u3059\u304b? \u3075\u3075\u3075\uff64\u5fc3\u3092\u8aad\u307f\u307e\u3057\u305f!",
                        "comments_work_1": "\u306f\uff5e\uff64\u7d76\u5bfe\u306b\u7f8e\u5473\u3057\u3044\u2026\u4e88\u8a00 ! ",
                        "comments_work_2": "\u3053\u3093\u306a\u3093\u51fa\u307e\u3057\u305f\u3051\u3069\uff5e!",
                        "comments_work_3": "\u5ff5\u529b\u3067\uff64\u751f\uff78\uff98\uff70\uff91\u304b\u304d\u6df7\u305c\u307e\u3057\u305f!",
                        "comments_work_4": "\uff72\uff81\uff7a\uff9e\u306e\u914d\u7f6e\u304c\uff64\u672a\u77e5\u306e\uff8a\uff9f\uff9c\uff70\u3092\u5f15\u304d\u51fa\u3057\u2026\u7f8e\u5473\u3057\u304f\u306a\u308b! \u2026\u4e88\u5b9a!",
                        "comments_work_max": "\u3055\u3041\uff64\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u53ec\u3057\u4e0a\u304c\u308c! \u3063\u3068\uff64\u66f2\u304c\u3063\u3066\u306a\u3044\uff8c\uff6b\uff70\uff78\u3092\u2026",
                        "comments_work_love_up": "\u3071\u308f\uff70\u3092\u4f7f\u3046\u3068\u304a\u8179\u304c\u3059\u304f\u3093\u3067\u3059\uff61\u3060\u304b\u3089\u5473\u898b\u306f\u5fc5\u8981\u306a\u306e\u3067\u3059!",
                        "comments_live": "\u7518\u304f\u3068\u308d\u3051\u308b\u8d85\u80fd\u529b\u3063\u266a",
                        "comments_love_max": "\u306f\u3041\uff5e\uff64\u5e78\u305b! \u3053\u3093\u306a\u7f8e\u5473\u3057\u3044\u5c55\u958b\uff64\uff95\uff6f\uff7a\u306e\u4e88\u77e5\u80fd\u529b\u3067\u3082\u898b\u900f\u305b\u307e\u305b\u3093\u3067\u3057\u305f\u3088! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u2026\u3055\u3044\u304d\u3063\u304f\u611f\u8b1d!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/0b9a01894e51f4263ead1c4ab8339235.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/155211c45e821a35965b04c71a61bde4.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/a46106ed71008b87ccebc7e706eabfee.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/4be1c0bf071478100902be46ff5366b9.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/a520033c131c3a7c4631a6f3e5d788a0.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/84330c72a9f514c166981dca7747f284.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/a74c1562a169c24d6c012be1ff265130.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/c0f2b547d99a20ce25e1ea758a4d77ec.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/2efd5c180848a0f20bc600b002445052.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/48714f774dd2e16fc1ef7ef7ca718519.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/311cefcd0486889857b4e605bd8bab44.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/6b5fd814af21043038c44173bf48b55a.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/14f174d33c38559944eb1edeb53b2e27.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3526302\/46c83300251e800375000b43660e50a9.mp4"
                    },
                    "event": {
                        "1801": {
                            "event_id": 1801,
                            "category_id": "10110",
                            "event_name": "\u30a2\u30a4\u30c9\u30eb\u30d0\u30e9\u30a8\u30c6\u30a3 \u7a76\u6975\u306e\u30b7\u30e7\u30fc\u30c8\u30b1\u30fc\u30ad\u3092\u4f5c\u308d\u3046!"
                        }
                    },
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u6d77\u306e\u3071\u308f\uff70\u2606]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "22",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u6d77\u3042\u305d\u3073",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \uff97\uff9d\uff80\uff9e\uff91\u3067\u6975\u5927\uff5e\u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "6800",
                        "default_defense": "4960",
                        "hash_card_id": "fcadcbebe66c5cbafbfcda3fde7aed3c",
                        "alias_name": "\u6d77\u306e\u3071\u308f\uff70\u2606",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3434301",
                        "card_name": "[\u6d77\u306e\u3071\u308f\u30fc\u2606]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff7d\uff72\uff76\u5272\u308a\u306f\u304a\u4efb\u305b\u304f\u3060\u3055\u3044! \uff7b\uff72\uff77\uff6f\uff76\uff70\u306b\u76ee\u96a0\u3057\u306f\u7121\u52b9\u3067\u3059\u304b\u3089\u306d\uff61\uff8b\uff9e\uff70\uff81\u306e\u5947\u8de1\u3092\u304a\u898b\u305b\u3057\u307e\u3059\u3088! \uff91\uff91\uff91\u2026\uff7b\uff72\uff77\uff6f\uff78\uff65\uff78\uff9a\uff94\uff8e\uff9e\uff94\uff9d\uff7d! \u304b\u3089\u306e\uff5e\u2026\uff7b\uff72\uff77\uff6f\uff78\uff65\uff7d\uff72\uff76\u771f\u3063\u4e8c\u3064! \u624b\u5fdc\u3048\u3042\u308a\u3063! \u2026\u3063\u3066\u3042\u308c\u3047\u3047\u3047!?",
                        "comments_my_1": "\u6d77\u306e\uff7b\uff72\uff77\uff6f\uff76\uff70\uff64\u3042\u308a\u304b\u3082?",
                        "comments_my_2": "\u6c34\u304c\u900f\u8996\u3067\u304d\u305f! \u2026\u5f53\u305f\u308a\u524d\u304b",
                        "comments_my_3": "\u306f\u3041\u2026\uff7d\uff72\uff76\u7f8e\u5473\u3057\u3044\u2026\u4e88\u5b9a\u2026",
                        "comments_my_4": "\u6f6e\u98a8\u3068\u304b\uff64\u76f4\u5c04\u65e5\u5149\u3068\u304b\u2026\u8d85\u80fd\u529b\u3068\u306f\u76f8\u6027\u60aa\u3044\u3093\u3067\u3059\u3088\u306d!",
                        "comments_my_max": "\uff91\uff91\uff64\uff8a\uff9f\uff9c\uff70\u4e0d\u8db3\u2026150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\uff8a\uff9f\uff9c\uff70\u3092\u5206\u3051\u3066\u304f\u3060\u3055\u3044!",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\uff65\u590f\u771f\u3063\u76db\u308a\u266a",
                        "comments_work_2": "\u5fdc\u63f4\u4e0b\u3055\u3044! \uff74\uff7d\uff8a\uff9f\uff70\u3067\u3082\u58f0\u3067\u3082!",
                        "comments_work_3": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u5165\u9053\u96f2\u2026\uff91\uff78\uff91\uff78\u6765\u3066\u307e\u3059!",
                        "comments_work_4": "\u6c34\u7740\u306f\u5bb6\u304b\u3089\u7740\u3066\u304d\u307e\u3057\u305f\u304b\u3089\uff64\u6e96\u5099\u306f\uff76\uff9d\uff8d\uff9f\uff77! \u7740\u66ff\u3048? \u3042\u3063\u2026",
                        "comments_work_max": "\u306f\u3075\uff64\u96c6\u4e2d\u3057\u3059\u304e\u3066\u3061\u3087\u3063\u3068\uff8c\uff97\uff8c\uff97\u2026\u4e00\u7dd2\u306b\u65e5\u9670\u3067\u4f11\u307f\u307e\u3057\u3087\u3046",
                        "comments_work_love_up": "\u524d\u304c\u898b\u3048\u306a\u2026\u308f\u3076\u3063! \u3059\uff64\u3059\u307f\u307e\u305b\u3093\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_live": "\uff7d\uff72\uff76\u306f\u3069\u3053? \u3042\uff64\u305d\u3063\u3061!?",
                        "comments_love_max": "\u4eca\u65e5\u8abf\u5b50\u60aa\u3044\u3060\u3051\u3067\uff64\u6b21\u306f\u5fc5\u305a\u2026! \u306a\u306e\u3067150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u307e\u305f\u6d77\u306b\u884c\u304f\u306a\u3089\uff95\uff6f\uff7a\u3082\u9023\u308c\u3066\u3063\u3066\u304f\u3060\u3055\u3044\uff61\u7d04\u675f\u3067\u3059\u3088\u266a"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/968cff4e061690bca2394a01954733af.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/9a5a69dcf57fda01c9d51f470331a808.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/dc4eaea636c52b7c6950a3ab6d676fd5.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/2e2f79c91132374560eb48be06b30259.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/cdcf1f48a4d6fda8cf1fa8804e49aef1.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/a1f72f51cf10ef14b4e5adfd45becfbd.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/eb93a223d1c077e0b6c7d269b4d3c0e1.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/95f50d313f49e69021590921170ed701.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/938c1d71eb3715fe15092876a2e548ee.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/39a1a640a27f4c0a7f34befec30d4cb9.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/696d6a705524be438d28e55939f1de43.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/6f36b9ddd32199e17c5f415dae3b4f1d.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/f0e59c32c1168d041dc35e16161f39c1.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3434301\/6579985e7ed657e28612f2c0ba9b97ad.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "1",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u6d77\u306e\u3071\u308f\uff70\u2606]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "22",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u6d77\u3042\u305d\u3073",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \uff97\uff9d\uff80\uff9e\uff91\u3067\u7d76\u5927\uff5e\u8d85\u7d76\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "8160",
                        "default_defense": "5952",
                        "hash_card_id": "c45a6475300f696474afa6e473eaef75",
                        "alias_name": "\u6d77\u306e\u3071\u308f\uff70\u2606",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3534302",
                        "card_name": "[\u6d77\u306e\u3071\u308f\u30fc\u2606]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3075\u3063\u3075\u3063\u3075\u2026\u672c\u7269\u306e\uff8f\uff70\uff92\uff72\uff84\uff9e\u306b\u306a\u3063\u305f\u6c17\u5206\u3067\u3059! \u3055\u3059\u304c150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u307e\u3055\u3057\u304f\uff74\uff7d\uff8a\uff9f\uff70\u3067\u3059\u306d! \u3053\u308c\u306a\u3089\u5168\u529b\u3067\uff7b\uff72\uff77\uff6f\uff78\uff65\uff74\uff70\uff99\u3092\u98db\u3070\u305b\u307e\u3059! \u4e03\u3064\u306e\u6d77\u306e\u5411\u3053\u3046\u307e\u3067\uff64\u97ff\u3051\uff95\uff6f\uff7a\u306e\uff8a\uff9f\uff9c\uff70!!",
                        "comments_my_1": "\u6d77\u306e\uff7b\uff72\uff77\uff6f\uff76\uff70\uff64\u3042\u308a\u304b\u3082?",
                        "comments_my_2": "\u6c34\u304c\u900f\u8996\u3067\u304d\u305f! \u2026\u5f53\u305f\u308a\u524d\u304b",
                        "comments_my_3": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u751f\u6f14\u594f! \uff8e\uff9f\uff9b\uff9b\uff9b\uff70\uff9d\u266a",
                        "comments_my_4": "\uff8a\uff70\uff8c\uff9f\u3063\u3066\uff64\u308f\u308a\u3068\uff7d\uff9e\uff6f\uff7c\uff98\u304d\u307e\u3059\u306d\u2026\u3055\u3044\u304d\u3063\u304f\u3067\u5e73\u6c17\u3067\u3059\u3051\u3069!",
                        "comments_my_max": "\u6d77\u306e\u4e2d\u3067\u3082\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u306f\uff83\uff9a\uff8a\uff9f\uff7c\uff70\u3067\u7e4b\u304c\u3063\u3066\u307e\u3059",
                        "comments_work_1": "\u3055\u3044\u304d\u3063\u304f\uff65\u590f\u771f\u3063\u76db\u308a\u266a",
                        "comments_work_2": "\u5fdc\u63f4\u4e0b\u3055\u3044! \uff74\uff7d\uff8a\uff9f\uff70\u3067\u3082\u58f0\u3067\u3082!",
                        "comments_work_3": "\uff74\uff7d\uff8a\uff9f\uff70\uff95\uff6f\uff7a\u6539\u3081\uff64\uff8f\uff70\uff92\uff72\uff84\uff9e\uff95\uff6f\uff7a\u3067\u3059!",
                        "comments_work_4": "\u65b0\u9bae\u3067\uff8b\uff9f\uff6f\uff81\uff8b\uff9f\uff81\u306a\uff95\uff6f\uff7a\u306e\u59ff\u3092\uff64\u307f\u306a\u3055\u3093\u306b\u304a\u5c4a\u3051\u3057\u307e\u3059\u3088\u3063!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u8239\u65c5\u3082\uff95\uff6f\uff7a\u304c\uff8a\uff9e\uff6f\uff81\uff98\uff7b\uff8e\uff9f\uff70\uff84\u3057\u307e\u3059! \uff74\uff8d\uff9d!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u529b\u3092\u5408\u308f\u305b\u308c\u3070\uff64\u8352\u6ce2\u3067\u3082\u5927\u4e08\u592b!!",
                        "comments_live": "\u3046\u305a\u3057\u304a\uff8a\uff9f\uff9c\uff70\u3092\u3054\u89a7\u3042\u308c!",
                        "comments_love_max": "\uff8f\uff70\uff92\uff72\uff84\uff9e\uff95\uff6f\uff7a\u3067\uff64\u65b0\u305f\u306a\uff90\uff97\uff78\uff99\u2026150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u304a\u304b\u3052\u3067\uff95\uff6f\uff7a\u306e\u9b45\u529b\u3082\u6025\u4e0a\u6607\u3067\u3059! \uff7b\uff8f\uff70\uff93\uff70\uff84\uff9e\u306e\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7d\uff64\u304a\u898b\u4e8b\u3063!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/3f1279a0d71f9e490ff68438a32a89f9.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/159c49c5e5d4e7393acfe9cfffedc707.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/1c8184db3f6c9fc8cfe4439aadaf484c.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/524422abbdfda87f0f2141e6bb3806ac.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/15545af0d4d6f0f28c12ded572f2ce2d.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/6af235afe4b150fbb6980bfa45e28ff3.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/6da3e1969481d249b6c335a5bd133158.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/1bf9ce137f5a4379b8eefdefcae752a9.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/7232a2903591357e241aca4d6bf397da.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/65299e80dcfef3850f64288bd8a4089c.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/9e0775208d44f0298c7e01c516a53b6e.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/e1a828623c06bd57fb869324ee16c518.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/e42353a5f64a4fc64e453868457a20dc.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3534302\/2e399e78ca2ca541ebb47c46cfa5f5b9.mp4"
                    },
                    "event": {
                        "1508": {
                            "event_id": 1508,
                            "category_id": "10080",
                            "event_name": "\u30c1\u30fc\u30e0\u5bfe\u6297\u30c8\u30fc\u30af\u30d0\u30c8\u30eb\u30b7\u30e7\u30fc in SUMMER"
                        }
                    },
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "archive": {
                        "normal": "1",
                        "premium": "0"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u5915\u713c\u3051\uff83\uff9a\uff8a\uff9f\uff7c\uff70]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "23",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u672a\u6765\u4e88\u77e5",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "7140",
                        "default_defense": "5340",
                        "hash_card_id": "b0c6e9c33f363fe1bfea05c3d007983c",
                        "alias_name": "\u5915\u713c\u3051\uff83\uff9a\uff8a\uff9f\uff7c\uff70",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3438201",
                        "card_name": "[\u5915\u713c\u3051\u30c6\u30ec\u30d1\u30b7\u30fc]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff91\uff91\uff91\uff64\u3057\u3070\u3089\u304f\u898b\u306c\u9593\u306b\u624b\u5f37\u304f\u306a\u3063\u305f\u306a\uff64\u6570\u5b66! \u2026\u3046\u3045\uff64\u3069\u3046\u3057\u3088\u3046\uff61\u5168\u3063\u7136\uff64\u308f\u304b\u3093\u306a\u3044\uff61\u3067\u3082\uff64\u65e9\u304f\u89e3\u304b\u306a\u304d\u3083\u304a\u4ed5\u4e8b\u884c\u3051\u306a\u3044\u3057\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3092\u56f0\u3089\u305b\u3066\u3057\u307e\u3046\u2026\u3088\u3057\uff64\u304c\u3093\u3070\u308d\uff5e!",
                        "comments_my_1": "\u6b63\u3057\u3044\u7b54\u3048\u3092\u898b\u3064\u3051\u306a\u304d\u3083!",
                        "comments_my_2": "\u3061\u3087\u3063\u3068\u4f11\u61a9\u2026\uff7b\uff72\uff77\uff6f\uff78\uff81\uff6c\uff70\uff7c\uff9e!",
                        "comments_my_3": "\u3075\uff5e\u3059\u3050\u306b\u7d42\u308f\u308b\u3068\u601d\u3063\u305f\u3077\uff5e",
                        "comments_my_4": "\u52c9\u5f37\u4e2d\u306f\uff64\u8d85\u80fd\u529b\u5c01\u5370! \u5b9f\u529b\u3067\u89e3\u304b\u306a\u3044\u3068! \u5b9f\u529b\u2026\u5b9f\u529b\u3067\u308d\uff5e",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306a\u3089\uff64\uff7b\uff7b\uff6f\u3068\u89e3\u3051\u3061\u3083\u3046\u3093\u3060\u308d\u3046\u306a\uff5e",
                        "comments_work_1": "\u4eca\u306f\u6559\u5ba4\u304c\uff7d\uff83\uff70\uff7c\uff9e\uff64\u307f\u305f\u3044\u306a?",
                        "comments_work_2": "\u3082\u3063\u3068\u96c6\u4e2d\u96c6\u4e2d! \uff91\uff91\uff91\uff5e\uff9d!",
                        "comments_work_3": "\uff7b\uff8e\uff9e\u308b\u308f\u3051\u306b\u306f\u3044\u304b\u306a\u3044\u3057!",
                        "comments_work_4": "\uff71\uff72\uff84\uff9e\uff99\u3068\u5b66\u751f\u3068\uff7b\uff72\uff77\uff6f\uff76\uff70\u3092\u4e21\u7acb\u3057\u306a\u3044\u3068\u306d! \u2026\u4e21\u7acb? \u4e09\u7acb\u2026?",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\uff92\uff70\uff99\u3057\u3088\u2026\u5c45\u6b8b\u308a\u52c9\u5f37\u4e2d\u3067\u3059\uff91\uff91\uff91\uff64\u3068",
                        "comments_work_love_up": "\u5ff5\u3058\u308c\u3070150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u52a9\u3051\u306b\u6765\u3066\u304f\u308c\u308b\u2026\u304b\u3082?",
                        "comments_live": "\u6210\u7e3e\u5411\u4e0a! \u3055\u305b\u305f\u3044\u306a\u2026",
                        "comments_love_max": "\u3075\u304a\u3063!? 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u8fce\u3048\u306b\u6765\u3066\u304f\u308c\u305f\u3093\u3067\u3059\u304b! \u3048\u3078\u3078\u2026\u3067\u3082! \u8ab2\u984c\u304c\u7247\u4ed8\u304f\u307e\u3067\u2026\u898b\u5b88\u3063\u3066\u3044\u3066\u304f\u3060\u3055\uff5e\u3044!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/954a5c44628fe239667c1df229a0eab0.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/ba7ae625dff1c26884f816c133e76176.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/0d3c7b58932b785ba7d1cef32b3ea7f6.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/d7c716df2cbdd4cf6b544866daec3b61.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/97a6791d55d5f067a9e2f677f873cb8d.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/ee34b40017ca2c22a5e9fae7280e3340.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/c9d94cd9f358d6cd7df08ad9a47c8e6b.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/c988abf9dbe1e82a5fe050ce9890955e.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/fb6e23aaadc9328dc85131973d9e506c.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/e73ebf0f96310e52e98d019ac82c0c1e.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/25639a440a44737e71815a412eba8909.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/47b193662f84f1e6f2106593805d3a04.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/7f6f4ef87d5dde7611390435afc5c168.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3438201\/cc903e235eaab4cd2e72d1f06657c4b3.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "0",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u5915\u713c\u3051\uff83\uff9a\uff8a\uff9f\uff7c\uff70]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "23",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u672a\u6765\u4e88\u77e5",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \u8d85\u7d76\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "8568",
                        "default_defense": "6408",
                        "hash_card_id": "64bfd146a17bcae9c53f47b939d3199a",
                        "alias_name": "\u5915\u713c\u3051\uff83\uff9a\uff8a\uff9f\uff7c\uff70",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3538202",
                        "card_name": "[\u5915\u713c\u3051\u30c6\u30ec\u30d1\u30b7\u30fc]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff91\uff91\uff70\uff9d\u2026\uff91\uff6f! \u898b\u3048\u305f\u3063! \u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059! \u3042\u306a\u305f\u306e\u672a\u6765\uff64\uff8a\uff9e\uff6f\uff81\uff98\u5e78\u305b100\uff05\u3067\u3057\u305f\uff5e! \u7d20\u6575\u306a\uff73\uff9e\uff68\uff7c\uff9e\uff6e\uff9d\u3092\u898b\u3066\uff64\uff95\uff6f\uff7a\u3082\u5e78\u305b\u306e\u304a\u3059\u305d\u5206\u3051\u3092\u3082\u3089\u3063\u305f\u6c17\u5206\u3067\u3059\u266a\u3067\u306f\uff64\u6b21\u306f\u4f55\u3092\u5360\u3044\u307e\u3057\u3087\u3046\u304b!",
                        "comments_my_1": "\u6b63\u3057\u3044\u7b54\u3048\u3092\u898b\u3064\u3051\u306a\u304d\u3083!",
                        "comments_my_2": "\u3061\u3087\u3063\u3068\u4f11\u61a9\u2026\uff7b\uff72\uff77\uff6f\uff78\uff81\uff6c\uff70\uff7c\uff9e!",
                        "comments_my_3": "\u3042\u306a\u305f\u306e\u904b\u547d\uff64\u898b\u305b\u3066\u304f\u3060\u3055\u3044!",
                        "comments_my_4": "\uff7b\uff72\uff77\uff6f\uff78\u6c34\u6676\u7389\uff64\uff7b\uff72\uff77\uff6f\uff78\uff80\uff9b\uff6f\uff84\uff64\uff7b\uff72\uff77\uff6f\uff78\uff7d\uff8c\uff9f\uff70\uff9d\u2026\u8272\u3093\u306a\u5360\u3044\u3092\u3054\u7528\u610f!",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u672a\u6765\u306f\u2026\u96a3\u306b\uff95\uff6f\uff7a\u3082\u3044\u307e\u3059\u306d\uff641000\uff05!",
                        "comments_work_1": "\u4eca\u306f\u6559\u5ba4\u304c\uff7d\uff83\uff70\uff7c\uff9e\uff64\u307f\u305f\u3044\u306a?",
                        "comments_work_2": "\u3082\u3063\u3068\u96c6\u4e2d\u96c6\u4e2d! \uff91\uff91\uff91\uff5e\uff9d!",
                        "comments_work_3": "\u308f\u308f\u3063\uff64\u5927\u884c\u5217!? \u5b09\u3057\u3044\u3067\u3059!",
                        "comments_work_4": "\uff71\uff72\uff84\uff9e\uff99\u5b66\u5712\u796d\u306e\u76ee\u7389\u306e\u3072\u3068\u3064! \u305d\u308c\u304c\uff64\uff7b\uff72\uff77\uff6f\uff78\u5360\u3044\u306e\u9928\u3067\u3059\u3088!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u898b\u305f\u3044\u672a\u6765\uff64\uff95\uff6f\uff7a\u304c\u5f15\u304d\u5bc4\u305b\u307e\u3059\u3088\u3063!",
                        "comments_work_love_up": "\u79c1\u81ea\u8eab\u306e\u672a\u6765\u306f\u898b\u3048\u307e\u305b\u3093\uff61150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u6b21\u7b2c\u3067\u3059\u3057",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff5e\u904b\u547d\u6539\u5909\u3063!",
                        "comments_love_max": "\u5360\u3044\u306e\u9928\uff64\u5927\u597d\u8a55\u3067\u3059\u306d! \u307f\u3093\u306a\uff72\uff72\u7b11\u9854\u306b\u306a\u308b\u3093\u3067\u3059\u3088\u266a\u3067\u306f\uff64\u3044\u3088\u3044\u3088150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u756a! \u79c1\u306b\u5360\u308f\u308c\u3066\u304f\u3060\u3055\u3044!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/6b2d501c55d351af01c3a4182ea1a07a.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/f36a4ae52dbc976ad1475bb926b3eea6.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/20c771299808430652485855898b568a.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/c5791bb99303701b19faac1d2554e013.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/e3bd38e6ecb5b38075f5e5dc3e895e6a.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/4d1b1a6a65c552bda996d24d046a8643.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/e12f79c521ce88d5cccab7b0067b3936.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/b80952545a266bb9c9da47a8ecf1f7ae.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/0852e9375388263b518d68d1a74e2e30.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/9ea9607137dde3d14414d5db3052abc4.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/f436e6ebf489e9231d488273848e30b5.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/76e950c4df419ee9da23847cfde9b661.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/bc174bb173a9d5e4edf6cf6221318fe3.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3538202\/00041f6a1ba86b63bf08af58e9453f0f.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "1",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u6708\u591c\u898b\uff74\uff7d\uff8a\uff9f\uff70]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "23",
                        "attribute": "passion",
                        "skill_name": "\uff91\uff91\uff91\uff65\uff91\uff70\uff9d\uff8a\uff9f\uff9c\uff70",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b\u5b88 \u7d76\u5927\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "6560",
                        "default_defense": "6520",
                        "hash_card_id": "c37ad1a9f858e0a034cea14f390e4a8f",
                        "alias_name": "\u6708\u591c\u898b\uff74\uff7d\uff8a\uff9f\uff70",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3442501",
                        "card_name": "[\u6708\u591c\u898b\u30a8\u30b9\u30d1\u30fc]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3044\u304d\u307e\u3059\uff64\u3088\u3044\u3057\u3087\u3063! \u2026\u3048\u3078\u3078\uff64\u3069\u3046\u3067\u3057\u3087\u3046! \u79c1\u306e\u6775\u3064\u304d\u3068150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u5408\u3044\u306e\u624b\u3067\uff64\u304a\u9905\u304c\u3069\u3093\u3069\u3093\uff93\uff81\uff93\uff81\u306b\u306a\u3063\u3066\u307e\u3059\u3088! \u79c1\u305f\u3061\u306a\u3089\uff64\u6700\u9ad8\u306e\u304a\u9905\u304c\u3067\u304d\u308b\u3053\u3068\u9593\u9055\u3044\u306a\u3057!",
                        "comments_my_1": "\uff8a\uff9f\uff9c\uff70\u3092\u8fbc\u3081\u3066\u2026\u3044\u304d\u307e\u3059\u3088!",
                        "comments_my_2": "\u4eca\u65e5\u306e\uff95\uff6f\uff7a\u306f\uff64\u6708\u306e\u3046\u3055\u304e\u306b\u2026!",
                        "comments_my_3": "\u3055\u3044\u304d\u3063\u304f\uff65\u304a\u3044\u3057\u304f\u306a\uff70\u308c!",
                        "comments_my_4": "\u4ed6\u306e\u307f\u306a\u3055\u3093\u3082\uff64\u79c1\u305f\u3061\u306b\u6ce8\u76ee\u3057\u3066\u307e\u3059\u306d\uff61\u671f\u5f85\uff64\u611f\u3058\u307e\u3059!",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u5fdc\u63f4\uff8a\uff9f\uff9c\uff70\u3082\uff64\u304a\u9905\u306b\u8fbc\u3081\u307e\u3059\u3088!",
                        "comments_work_1": "\uff7d\uff83\uff77\u306a\u97f3\u304c\u805e\u3053\u3048\u307e\u3059\u306d\u266a",
                        "comments_work_2": "\u3053\u306e\uff8c\uff9c\uff8c\uff9c\u2026\u307e\u3055\u3057\u304f\uff74\uff78\uff84\uff8c\uff9f\uff97\uff7d\uff9e\uff91!",
                        "comments_work_3": "\u697d\u3057\u3044\u304a\u6708\u898b\u306e\u305f\u3081\u306b\u2026\uff91\uff9d\uff6f!",
                        "comments_work_4": "\uff91\uff91\uff91\uff6f\u2026\u6765\u3066\u307e\u3059\u6765\u3066\u307e\u3059! \u6775\u306e\u91cd\u3055\u304c\uff64\u8155\u306b! \u305a\u3063\u3057\u308a\u3068!!",
                        "comments_work_max": "\u4ea4\u4ee3\u3067\u3059\u304b? \u6b21\u306f\u79c1\u304c150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3092\uff7b\uff8e\uff9f\uff70\uff84\u3057\u307e\u3059!",
                        "comments_work_love_up": "\u79c1\u3068150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306a\u3089\uff64\uff80\uff72\uff90\uff9d\uff78\uff9e\u306f\uff8a\uff9e\uff6f\uff81\uff98\u3067\u3059! \u306d\u3063\u266a",
                        "comments_live": "\u7f8e\u5473\u3057\u3044\u304a\u9905\uff64\u3053\u3046\u3054\u671f\u5f85!",
                        "comments_love_max": "\u6775\u3064\u304d\u3082\u5408\u3044\u306e\u624b\u3082\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u304c\u76f8\u624b\u306a\u3089\u5b89\u5fc3\u3067\u304d\u307e\u3059\u2026\uff61\u3053\u306e\u304a\u9905\u306f\uff64\u79c1\u305f\u3061\u3092\u7e4b\u3050\u7d46! \uff83\uff9a\uff8a\uff9f\uff7c\uff70\u306e\u8a3c\u3067\u3059\u306d!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/cfdfda9762716718e10b30dde257bfe4.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/19c44ea843e9dd0f8f940dbf1b0df7b1.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/d865d7b40c8bc6fe1afbcc038bf14c98.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/8a4be84056d7b997289086bf891e4e8e.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/668f133761d768925d74e56af726814d.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/e724c6932bfd145412f4013292c72676.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/afe6e54c40cdcb2e96f229f1747745c7.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/4e8005f5a8c6457409795f966f165d68.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/77afaa28a3ac61e2111615dd66a729d4.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/047456952aea72985a150f4139e80eb8.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/fc0d98fdbc1127f7a76d85aa02486596.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/f60440e13a2fe3e338ebdcaa040cbf00.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/8bece39fea012ef17079ec0092ecf54b.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3442501\/2ebb18435b47ec46449edce9c9cf3fbe.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "3442501",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_3442501.js%3Fv%3D20190524145756",
                    "archive": {
                        "normal": "0",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u6708\u591c\u898b\uff74\uff7d\uff8a\uff9f\uff70]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "23",
                        "attribute": "passion",
                        "skill_name": "\uff91\uff91\uff91\uff65\uff91\uff70\uff9d\uff8a\uff9f\uff9c\uff70",
                        "skill_effect": "\uff78\uff70\uff99\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b\u5b88 \u8d85\u7d76\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "7872",
                        "default_defense": "7824",
                        "hash_card_id": "087f6dbd91ce36b87cede27e7d9979a4",
                        "alias_name": "\u6708\u591c\u898b\uff74\uff7d\uff8a\uff9f\uff70",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3542502",
                        "card_name": "[\u6708\u591c\u898b\u30a8\u30b9\u30d1\u30fc]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\uff8c\uff6f\uff8c\uff6f\uff8c\u2026\u266a\u6708\u591c\u306b\u306f\u3073\u3053\u308b\u5996\u602a\u305f\u3061\u3082\uff64\u83ef\u9e97\u306b\u6210\u6557\u3057\u3066\u307f\u305b\u307e\u3057\u3087\u3046! \u6e80\u6708\u306e\u5149\u3092\uff8a\uff9f\uff9c\uff70\u306b\u5909\u3048\u3066\uff64\uff7b\uff72\uff77\uff6f\uff78\u3046\u3055\u304e\u9670\u967d\u5e2b\uff65\uff95\uff6f\uff7a\u306e\u767b\u5834\u3067\u3059! \u3081\u304f\u308b\u3081\u304f\uff72\uff98\uff6d\uff70\uff7c\uff9e\uff6e\uff9d\uff64\uff74\uff7d\uff8a\uff9f\uff70\u970a\u8853\uff7c\uff6e\uff70\u3092\u3069\u3046\u305e\u3054\u89a7\u3042\u308c!",
                        "comments_my_1": "\uff8a\uff9f\uff9c\uff70\u3092\u8fbc\u3081\u3066\u2026\u3044\u304d\u307e\u3059\u3088!",
                        "comments_my_2": "\u4eca\u65e5\u306e\uff95\uff6f\uff7a\u306f\uff64\u6708\u306e\u3046\u3055\u304e\u306b\u2026!",
                        "comments_my_3": "\u6025\u3005\u5982\u5f8b\u4ee4\uff70! \u2026\u3044\uff64\u8a00\u3048\u305f!",
                        "comments_my_4": "\u5996\u602a\u305f\u3061\u306e\u60aa\u884c\u3082\uff64\uff95\uff6f\uff7a\u306e\u9670\u967d\uff71\uff72\u306a\u3089\u3059\u3079\u3066\u304a\u898b\u901a\u3057\u3067\u3059!",
                        "comments_my_max": "\uff7b\uff72\uff77\uff6f\uff78\uff65\uff73\uff7b\uff90\uff90\u3067\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\uff98\uff9d\uff78\u3057\u3066\u307e\u3059\uff61\u307b\u3089\u3063!",
                        "comments_work_1": "\uff7d\uff83\uff77\u306a\u97f3\u304c\u805e\u3053\u3048\u307e\u3059\u306d\u266a",
                        "comments_work_2": "\u3053\u306e\uff8c\uff9c\uff8c\uff9c\u2026\u307e\u3055\u3057\u304f\uff74\uff78\uff84\uff8c\uff9f\uff97\uff7d\uff9e\uff91!",
                        "comments_work_3": "\u6708\u591c\u306e\uff95\uff6f\uff7a\u306f\u2026\u4e00\u5473\u9055\u3044\u307e\u3059!",
                        "comments_work_4": "\u3044\u3051\uff64\uff7b\uff72\uff77\uff6f\uff78\u5f0f\u795e! \uff73\uff8c\uff8c\uff64\u3069\u3046\u3067\u3059?\u624b\u54c1\u3084\uff84\uff98\uff6f\uff78\u3058\u3083\u3042\u308a\u307e\u305b\u3093\u3088!",
                        "comments_work_max": "\uff8c\uff9c\uff8c\uff9c\uff64\u89e6\u3063\u3066\u3044\u3044\u3067\u3059\u3088\u266a\u2026\u3075\u308f\u3041!? \u308f\uff64\u79c1\u3058\u3083\u306a\u304f\u3066\u5f0f\u795e\u3092!",
                        "comments_work_love_up": "\u3044\u3064\u3082\u3088\u308a\uff76\uff6f\uff7a\uff72\uff72\u79c1\u2026150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u3055\u3059\u304c\u3067\u3059!",
                        "comments_live": "\u970a\u80fd\u529b? \u3044\u3048\uff64\uff7b\uff72\uff77\uff6f\uff78\u3067\u3059!",
                        "comments_love_max": "\uff76\uff6f\uff7a\uff72\uff72\u6f14\u6280\u3067\uff64\u3044\u3064\u306b\u306a\u304f\u80f8\u304c\u9ad8\u9cf4\u3063\u3066\u307e\u3059! \u3067\u3082\u3053\u308c\u306f\uff64\u5b09\u3057\u3044\uff84\uff9e\uff77\uff84\uff9e\uff77\u3067\u3059\u304b\u3089\u2026150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u3082\u5c4a\u3051\u305f\u3044\u3067\u3059!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/7970d7d06209368bd642e81c2185bd03.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/4ecc8d855b2f2a718c0a1a27bb215256.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/102d536af4fe51b118a50883f7b506a4.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/58c500b6b380e0fb794ba0569ed9b4cc.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/570d959b172071bc0f7be605164e80d1.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/de4ddaf14b19194f3f25ca0e7271e580.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/6c02f21bf362fa2f77cd097376dc35ba.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/a093645b56a55273e0bb641947c37c4e.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/8c53a69a94f26280b5293ba55354260c.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/e6fa2acdf312ddd009afe3ead373f5dc.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/bdd2f3a8788067248c7f431b77055f4c.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/1ce3765ac190c699726633d3e42982f4.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/1fad0ef387c6ccf59f68a03eb78de15f.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3542502\/3e0d7ed092bc6b1d368b01c24456972f.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "3542502",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_3542502.js%3Fv%3D20190524145756",
                    "archive": {
                        "normal": "0",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u8d85\u5e38\uff8a\uff72\uff7d\uff78\uff70\uff99]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "24",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u6700\u5f37\u4f1d\u8aac",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \u8d85\u7d76\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "7780",
                        "default_defense": "6100",
                        "hash_card_id": "41e0408ac7bf19a6fd0e65089e8e997a",
                        "alias_name": "\u8d85\u5e38\uff8a\uff72\uff7d\uff78\uff70\uff99",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3447201",
                        "card_name": "[\u8d85\u5e38\u30cf\u30a4\u30b9\u30af\u30fc\u30eb]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u3088\u304f\u6765\u307e\u3057\u305f\u306d\u2026\u3058\u3083\u306a\u304f\u3066\uff64\u3088\u304f\u6765\u305f\u306a! \u3053\u306e\u5b66\u5712\u306e\uff83\uff6f\uff8d\uff9f\uff9d\uff64\uff95\uff6f\uff7a\u304c\u304a\u76f8\u624b\u3057\u307e\u3059! \uff80\uff72\uff91\uff98\uff90\uff6f\uff84\u306f\uff64\u3042\u306e\u5915\u65e5\u304c\u6c88\u3080\u307e\u3067\u2026\u3055\u3041\uff64\u6c7a\u7740\u3092\u3064\u3051\u3088\u3046\u3058\u3083\u3042\u308a\u307e\u305b\u3093\u304b! ",
                        "comments_my_1": "\u304b\u304b\u3063\u3066\u304d\u306a\u3055\uff70\u3044\u3063!",
                        "comments_my_2": "\u592a\u967d\u3092\u80cc\u306b\uff64\uff7b\uff9d\uff7b\uff9d\u3068\u8f1d\u304d\u307e\u3059\u3088!",
                        "comments_my_3": "\uff8c\uff8c\uff8c\u2026\u8fd4\u308a\u8a0e\u3061\u304c\u304a\u671b\u307f\u3067\u3059\u304b?",
                        "comments_my_4": "\u4f11\u61a9\u4e2d\u306f150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3068\u8a9e\u308a\u5408\u3046\u2026\u9752\u6625\u3063\u307d\u3044\u3067\u3059!",
                        "comments_my_max": "\uff9c\uff99\u306a150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\uff64\uff9c\uff99\u306a\uff7b\uff72\uff77\uff6f\uff78\u7f8e\u5c11\u5973\u2026\uff71\uff98\u3067\u3059\u306d!",
                        "comments_work_1": "\u5236\u670d\uff7b\uff72\uff77\uff6f\uff76\uff70\uff64\u53c2\u4e0a\u3063!",
                        "comments_work_2": "\u611f\u3058\u307e\u3059\u304b\uff64\u307f\u306a\u304e\u308b\uff8a\uff9f\uff9c\uff70\u3092!",
                        "comments_work_3": "\u79c1\u3068\uff83\uff6f\uff8d\uff9f\uff9d\uff64\u76ee\u6307\u3057\u307e\u3057\u3087\u3046\u304b!",
                        "comments_work_4": "\uff8c\uff8c\uff8c\u2026\uff8a\uff9d\uff83\uff9e\u3068\u3057\u3066\uff64\uff7b\uff72\uff77\uff6f\uff78\uff8a\uff9f\uff9c\uff70\u3092\u5c01\u5370\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3088!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u79c1\u3068\uff80\uff72\uff8f\uff9d\u3067\u2026\u304a\u558b\u308a\u3057\u307e\u3057\u3087\u3046!",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff9c\uff99\u306b\u306a\u3063\u3066\u307f\u305f\u3089\u2026\uff80\uff9e\uff81\u306b\u306a\u308c\u308b\u305c\u266a",
                        "comments_live": "\u3055\u3044\u304d\u3063\u304f\uff5e\u4e0a\u7b49\u3063!",
                        "comments_love_max": "\u52dd\u8ca0\u306f\u4e92\u89d2\u2026! \u3067\u3082\uff64\u8a9e\u308a\u5408\u3063\u305f\u5206\u3060\u3051\u7d46\u304c\u6df1\u307e\u308a\u307e\u3057\u305f\u306d\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70! \u3055\u3041\uff64\u53cb\u60c5\u306e\u63e1\u624b\u3092\u4ea4\u308f\u3057\u307e\u3057\u3087\u3046\u3063!"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/08aabbfe1c9126448fe7c515f1d77072.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/d8dad85565b985b7df5404c357bac5a9.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/6804928f2c51ca0d687ad050de37af84.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/daa2afae0632bfdce094b5bc4a439fbd.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/bf8cb51cd684d14b1a08161db5b5a324.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/1c1903006ff99051495452e4406bb575.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/1df7a3c9dee08d47f38f2f3af6f748ce.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/a5093b80f1ce7ecd81d941830cc530e6.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/263d6e4aa32ddc27c8c2e30f8eaa37d6.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/330a6ccc739829344a19c6faea7f6fed.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/ee25161239e50eb7bf0ab882dc7c47e7.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/4514a0c8d7e0475c8e0f8d909879aa60.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/77d23d4b38fce26cadc2e2c950b3427e.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3447201\/cb5186cae84810de8e0222c4755e3f15.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "3447201",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_3447201.js%3Fv%3D20190524145756",
                    "archive": {
                        "normal": "1",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u8d85\u5e38\uff8a\uff72\uff7d\uff78\uff70\uff99]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "24",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u6700\u5f37\u4f1d\u8aac",
                        "skill_effect": "\uff77\uff6d\uff70\uff84\uff65\uff8a\uff9f\uff6f\uff7c\uff6e\uff9d\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \u7a76\u6975\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "9336",
                        "default_defense": "7320",
                        "hash_card_id": "d0522c5c2afa7c553596e8b78ba25c66",
                        "alias_name": "\u8d85\u5e38\uff8a\uff72\uff7d\uff78\uff70\uff99",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3547202",
                        "card_name": "[\u8d85\u5e38\u30cf\u30a4\u30b9\u30af\u30fc\u30eb]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u307f\u306a\u3055\uff70\u3093\uff64\u6625\u3092\u6e80\u55ab\u3057\u3066\u307e\u3059\u304b\u3063? \uff7d\uff76\uff70\uff84\u3092\uff8b\uff97\uff98\u3068\u3072\u308b\u304c\u3048\u3057\uff64\u5b66\u5712\u306e\u7f8e\u5c11\u5973\uff71\uff72\uff84\uff9e\uff99\uff65\uff95\uff6f\uff7a\u306e\u767b\u5834\u3067\u3059! \u5b66\u751f\u306e\u672c\u5206\u306f\u52c9\u5f37\uff61\u3067\u3082\u4eca\u3060\u3051\u306f\uff64\uff91\uff7d\uff9e\u304b\u3057\u3044\u9854\u306f\uff85\uff7c\u3067\u3059! \u5236\u670dLIVE\uff64\u697d\u3057\u307f\u307e\u3057\u3087\u3046\u3063\u266a",
                        "comments_my_1": "\u304b\u304b\u3063\u3066\u304d\u306a\u3055\uff70\u3044\u3063!",
                        "comments_my_2": "\u592a\u967d\u3092\u80cc\u306b\uff64\uff7b\uff9d\uff7b\uff9d\u3068\u8f1d\u304d\u307e\u3059\u3088!",
                        "comments_my_3": "\u6625\u3089\u3093\u307e\u3093\uff64\u7b11\u9854\u6e80\u958b! \u3067\u3059\u306d!",
                        "comments_my_4": "\u52c9\u5f37\u306e\u3053\u3068\u306f\uff64\u4eca\u306f\u5fd8\u308c\u307e\u3057\u3087\u3046! \u79c1\u3082\u5fd8\u308c\u307e\u3059\u304b\u3089\u3063!",
                        "comments_my_max": "\u5b66\u5712\u306e\uff71\uff72\uff84\uff9e\uff99\u306f\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\u5922\u4e2d\u306b\u3055\u305b\u307e\u3059\u3088!",
                        "comments_work_1": "\u5236\u670d\uff7b\uff72\uff77\uff6f\uff76\uff70\uff64\u53c2\u4e0a\u3063!",
                        "comments_work_2": "\u611f\u3058\u307e\u3059\u304b\uff64\u307f\u306a\u304e\u308b\uff8a\uff9f\uff9c\uff70\u3092!",
                        "comments_work_3": "\uff91\uff91\uff91\uff70\uff9d! \u98a8\u8239\u3088\uff64\u98db\u3093\u3067\u3051\uff5e!",
                        "comments_work_4": "\u900f\u8996\u306b\u3088\u308b\u3068\u2026\u5b66\u5712\u4e2d\u304c\uff64\uff95\uff6f\uff7a\u306e\u96a3\u306e\u5e2d\u3092\u72d9\u3063\u3066\u3044\u308b\u3088\u3046\u3067\u3059!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\uff64\u3055\u3044\u304d\u3063\u304f\uff65\uff8a\uff70\uff84\u308f\u3057\u63b4\u307f! \u3048\u3044\u3063\u266a",
                        "comments_work_love_up": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3082\uff64\u5b66\u751f\u6c17\u5206\u3067\uff8a\uff7c\uff9e\u3051\u3066\u304f\u3060\u3055\u3044!",
                        "comments_live": "\u7b11\u9854\u304c\uff8a\uff9f\uff9c\uff70\u306e\u79d8\u5bc6\u3067\u3059!",
                        "comments_love_max": "\u79c1\u306e\u9b45\u529b\u306e\uff84\uff98\uff7a\u306b\u306a\u3063\u3061\u3083\u3044\u307e\u3057\u305f? \u3048\u3078\u3078\uff64\u3054\u5b89\u5fc3\u3092! \uff95\uff6f\uff7a\u306e\u96a3\u306f\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\u6307\u5b9a\u5e2d\u306b\u3057\u3066\u304a\u304d\u307e\u3059\u304b\u3089\u306d\u266a"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/4195841b12081aafea27d3ec27a7d863.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/9871f65c15afff930f09a0dbd31477bb.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/b058c8e2685bc85901617221f0894453.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/8392d2c3cad688b213bacd1b13465290.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/380c6d337671b8a6c3d0c5d24c18a274.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/54c05864642f58f90615fe3f05685ff8.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/95146ad7fa27e6a993e222ab633bdd3e.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/060f18eb6bbf3576c5396e351ad46841.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/038298d733e99afecfcd54acaae33252.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/60a1ab4d0101135b46f2c8339bca1c6d.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/21b517699d4c67da2d81c3b69d710493.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/37714a595e53ffe9d3b7270c0313bff2.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/5286b720d2d8fc3f029570d6f888d8fb.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3547202\/88a925b57fd2426dfdbb59697c15f6cf.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "3547202",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_3547202.js%3Fv%3D20190524145756",
                    "archive": {
                        "normal": "0",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u5fc3\u67d3\u307e\u308b\u5ff5\u529b]\u5800\u88d5\u5b50",
                        "rarity": "5",
                        "cost": "26",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u79cb\u3046\u3089\u3089",
                        "skill_effect": "\u5168\uff80\uff72\uff8c\uff9f\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \u7a76\u6975\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "8540",
                        "default_defense": "6580",
                        "hash_card_id": "f0133fbfa13423e93f44b651e2feb2a3",
                        "alias_name": "\u5fc3\u67d3\u307e\u308b\u5ff5\u529b",
                        "real_name": "\u5800\u88d5\u5b50"
                    },
                    "profile": {
                        "card_id": "3457501",
                        "card_name": "[\u5fc3\u67d3\u307e\u308b\u5ff5\u529b]\u5800\u88d5\u5b50",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u304a\u3084? \u3053\u3061\u3089\u306e\u6728\u304b\u3089\u4f55\u3084\u3089\u5f37\u3044\uff8a\uff9f\uff9c\uff70\u3092\u611f\u3058\u307e\u3059\u306d\uff61\u2026\uff91\uff91\uff9d! \u306a\u3093\u3068\uff64\uff72\uff81\uff6e\uff73\u578b\u306e\u624b\u7d19\u3067\u3059\u3088! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u5b9b\u3066\u306b\u66f8\u304b\u308c\u305f\u3088\u3046\u3067\u3059\uff61\u3075\u3075\u3063\u2026\u3055\u3041\u3055\u3041\uff64\u65e9\u304f\u8aad\u3093\u3067\u307f\u3066\u304f\u3060\u3055\u3044\u266a",
                        "comments_my_1": "\uff95\uff6f\uff7a\u3060\u3063\u3066\uff64\u4e59\u5973\u3067\u3059\u304b\u3089\u266a",
                        "comments_my_2": "\u611f\u3058\u307e\u3059\u304b? \u512a\u3057\u3044\u601d\u3044\u3092\u2026!",
                        "comments_my_3": "(\u3084\u3063\u305f! \u7df4\u7fd2\u901a\u308a\u306b\u3067\u304d\u305f\u266a)",
                        "comments_my_4": "\u898b\u7834\u308a\u307e\u3057\u305f! \u624b\u7d19\u306f\uff7d\uff9e\uff8a\uff9e\uff98\uff64\uff72\uff81\uff6e\uff73\u306e\u7cbe\u304c\u904b\u3093\u3067\u304d\u305f\u3088\u3046\u3067\u3059!",
                        "comments_my_max": "\u5dee\u51fa\u4eba\u306f\u2026\uff95\uff6f\uff7a? 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff7b\uff72\uff77\uff6f\uff78\uff64\u6050\u308b\u3079\u3057!",
                        "comments_work_1": "\u81ea\u7136\u306e\u529b\u304c\uff64\u6d41\u308c\u8fbc\u3093\u3067\u304d\u307e\u3059!",
                        "comments_work_2": "\u5927\u5207\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u306d\uff61\u7d04\u675f\u266a",
                        "comments_work_3": "\u8a08\u753b\u901a\u308a? \u3044\u3044\u3048\uff64\uff7b\uff72\uff77\uff6f\uff78\u3067\u3059!",
                        "comments_work_4": "\u60f3\u3044\u3092\u8a00\u8449\u306b\u3059\u308b\u306e\u306f\u96e3\u3057\u304f\u2026\u4e09\u65e5\u4e09\u6669\uff64\u5bdd\u308b\u9593\u3082\u60a9\u307f\u307e\u3057\u305f!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306b\u559c\u3093\u3067\u3082\u3089\u3048\u305f\u306a\u3089\uff64\u5927\u6210\u529f\u3067\u3059\u266a",
                        "comments_work_love_up": "\u3058\u3063\u304f\u308a\u8aad\u3093\u3067\u304f\u3060\u3055\u3044\u306d! \u7b11\u9854\u3067\u601d\u3044\u3092\u8fbc\u3081\u307e\u3057\u305f\u306e\u3067\u266a",
                        "comments_live": "\uff91\uff91\uff91\uff9d! \u3044\u3044\u3082\u306e\u767a\u898b\u3063!",
                        "comments_love_max": "\u9762\u3068\u5411\u304b\u3063\u3066\u4f1d\u3048\u308b\u306e\u306f\uff64\u3061\u3087\u3063\u3074\u308a\u6065\u305a\u304b\u3057\u3044\u306e\u3067\u2026! 150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u3078\u306e\u6ea2\u308c\u308b\u611f\u8b1d\u306e\u6c17\u6301\u3061\uff64\u7db4\u3063\u3066\u307f\u307e\u3057\u305f\u266a"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/4ad8c9c2c2e9a326b163215e4211af6d.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/792e304fc4e470c1cc86e644c267d0dd.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/00fcc99e33c2269643ed6216cb048c51.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/39c0112bf787e2a07b0904f7f8b1108a.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/027d0f61e086e382b8ec3667d400192f.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/0c6b79ff8ddc4eaddfbeb4c998e2ad7a.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/0b4cfbcc42090f45892df08462579762.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/ad2e3e50a6c0c58d8952d0f40021ab0e.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/3f2648b9c82305f6f944d78b3039d3e8.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/3e6aa65db4925affd50575aaffc4c026.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/6f0b855e582d8e56783afe39a7dc31ee.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/e4a5f746bdb60ab745ed656f067a9fe2.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/8906cd57b9d9b3c3c4a1e45ab5525674.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3457501\/34f3eca769be71e6fb42cf8c82f69851.mp4"
                    },
                    "event": null,
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "1",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }, {
                    "data": {
                        "card_name": "[\u5fc3\u67d3\u307e\u308b\u5ff5\u529b]\u5800\u88d5\u5b50+",
                        "rarity": "6",
                        "cost": "26",
                        "attribute": "passion",
                        "skill_name": "\uff7b\uff72\uff77\uff6f\uff78\uff65\u79cb\u3046\u3089\u3089",
                        "skill_effect": "\u5168\uff80\uff72\uff8c\uff9f\u306e\uff8c\uff9b\uff9d\uff84\uff92\uff9d\uff8a\uff9e\uff70\u53ca\u3073\uff8a\uff9e\uff6f\uff78\uff92\uff9d\uff8a\uff9e\uff70\u4e0a\u4f4d5\u4eba\u306e\u653b \u7a76\u6975\uff71\uff6f\uff8c\uff9f",
                        "grow_idol_flag": "",
                        "default_attack": "10248",
                        "default_defense": "7896",
                        "skill_effect_2": "\u81ea\u5206\u306e\u653b \u6975\u5c0f\uff71\uff6f\uff8c\uff9f",
                        "hash_card_id": "8b1951a846a99ccff84f6882fa764eef",
                        "alias_name": "\u5fc3\u67d3\u307e\u308b\u5ff5\u529b",
                        "real_name": "\u5800\u88d5\u5b50+"
                    },
                    "profile": {
                        "card_id": "3557502",
                        "card_name": "[\u5fc3\u67d3\u307e\u308b\u5ff5\u529b]\u5800\u88d5\u5b50+",
                        "card_kana": "\u307b\u308a\u3086\u3046\u3053",
                        "card_age": "16",
                        "card_from": "\u798f\u4e95",
                        "card_height": "157",
                        "card_weight": "44",
                        "card_bust": "81",
                        "card_waist": "58",
                        "card_hip": "80",
                        "card_birthday": "3\u670813\u65e5",
                        "card_constellation": "\u9b5a\u5ea7",
                        "card_blood": "O",
                        "card_arm": "\u53f3",
                        "card_hobby": "\u30b5\u30a4\u30ad\u30c3\u30af\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0",
                        "card_cv": "\u9234\u6728\u7d75\u7406"
                    },
                    "comments": {
                        "comment": "\u3054\u5b58\u77e5\u3067\u3059\u304b? \u304a\u82b1\u306b\u306f\u4e0d\u601d\u8b70\u306a\u529b\u304c\u3042\u308b\u3093\u3067\u3059\u3088\uff61\u4eba\u3092\u52b1\u307e\u3057\u305f\u308a\uff64\u6170\u3081\u305f\u308a\u2026\u6642\u306b\u306f\u5c0f\u3055\u306a\u5947\u8de1\u3092\u8d77\u3053\u3059\u3053\u3068\u3082\uff61\u307f\u306a\u3055\u3093\u3082\uff64\uff7b\uff72\uff77\uff6f\uff78\uff8c\uff97\uff9c\uff70\uff65\uff95\uff6f\uff7a\u3092\u611b\u3067\u3066\u307f\u3066\u306f? \u304d\u3063\u3068\u5e78\u305b\u304c\u8a2a\u308c\u307e\u3059\u3088\u266a",
                        "comments_my_1": "\uff95\uff6f\uff7a\u3060\u3063\u3066\uff64\u4e59\u5973\u3067\u3059\u304b\u3089\u266a",
                        "comments_my_2": "\u611f\u3058\u307e\u3059\u304b? \u512a\u3057\u3044\u601d\u3044\u3092\u2026!",
                        "comments_my_3": "\u3082\u3063\u3068\u304a\u6dd1\u3084\u304b\u306b? \u3067\u306f\u2026\uff91\uff9d\uff6f!",
                        "comments_my_4": "\u3044\u3044\u9999\u308a\u306b\u982d\u304c\u3075\u308f\u3075\u308f\u2026\u3057\u304b\u3057\uff64\uff7b\uff72\uff77\uff6f\uff76\uff70\u306f\u60d1\u308f\u3055\u308c\u307e\u305b\u3093!",
                        "comments_my_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\uff64\u8912\u3081\u3059\u304e\u3067\u3059\u266a\u82b1\u3082\u6065\u3089\u3046\uff95\uff6f\uff7a\u3067\u3059\u3088?",
                        "comments_work_1": "\u81ea\u7136\u306e\u529b\u304c\uff64\u6d41\u308c\u8fbc\u3093\u3067\u304d\u307e\u3059!",
                        "comments_work_2": "\u5927\u5207\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u306d\uff61\u7d04\u675f\u266a",
                        "comments_work_3": "\u53ef\u611b\u3044\u3067\u3059\u304b? \u3066\u3078\u3078\u3063\u266a",
                        "comments_work_4": "\u3059\u3063\u304b\u308a\u865c\u3067\u3059\u306d\uff61\u3075\u3075\u3075\uff64\uff8a\uff70\uff84\u3092\u63b4\u3080\uff8a\uff9f\uff9c\uff70\u304c\u52b9\u3044\u3066\u308b\u3088\u3046\u3067\u3059!",
                        "comments_work_max": "150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u306e\uff8a\uff9f\uff9c\uff70\u3067\uff64\uff95\uff6f\uff7a\u306e\u9b45\u529b\u306f\u8272\u892a\u305b\u307e\u305b\u3093!",
                        "comments_work_love_up": "\u3046\u3075\u3063\u266a\u305f\u304f\u3055\u3093\u611b\u3067\u3066\u304f\u3060\u3055\u3044\u306d\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70!",
                        "comments_live": "\u82b1\u3088\u308a\uff95\uff6f\uff7a\uff61\u5e38\u8b58\u3067\u3059\u266a",
                        "comments_love_max": "\u7d04\u675f\u3057\u307e\u3057\u3087\u3046! \uff95\uff6f\uff7a\u306f\u611b\u3067\u3089\u308c\u305f\u5206\u3060\u3051\uff64\u5947\u8de1\u3092\u8d77\u3053\u3057\u3066\u307f\u305b\u307e\u3059\u3088\uff61\u697d\u3057\u307f\u306b\u3057\u3066\u3066\u304f\u3060\u3055\u3044\uff64150\u5104\uff8c\uff9f\uff9b\uff83\uff9e\uff6d\uff70\uff7b\uff70\u266a"
                    },
                    "voice": {
                        "comment": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/8d8dc0faf12dbd5efc8d90a4dc42b671.mp4",
                        "comments_my_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/d98c555c7376104a458d01e6276d0c1f.mp4",
                        "comments_my_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/3ef2c5d32a09de0010ad12343fbbef29.mp4",
                        "comments_my_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/894f4d652e5744cdca8653c13c0cbaa3.mp4",
                        "comments_my_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/f449db9bef0ec1f07ee438cb27843af1.mp4",
                        "comments_my_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/9736d8c51cd57472b6f0a929af433808.mp4",
                        "comments_work_1": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/217fa6f02b26ed8a185388acad467c1a.mp4",
                        "comments_work_2": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/b4ea2f3524915279eadf8cae03a47267.mp4",
                        "comments_work_3": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/588390e68fa14cb6dcf93aafe08725d8.mp4",
                        "comments_work_4": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/700f2240ed7890bd677fe682c94657c9.mp4",
                        "comments_work_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/7e3f5d30c1c041baa31d9d401033d8e2.mp4",
                        "comments_work_love_up": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/1f20125d94d992bc6f3e26c84de3e649.mp4",
                        "comments_live": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/2c13798376f938f34dbc1712c0e1f4bc.mp4",
                        "comments_love_max": "http:\/\/idolmaster.edgesuite.net\/idolmaster\/sound\/3557502\/1e4250d9c401177c0dc7ae4bb4307eee.mp4"
                    },
                    "event": {
                        "748": {
                            "event_id": 748,
                            "category_id": "10040",
                            "event_name": "\u7b2c48\u56de\u30c9\u30ea\u30fc\u30e0LIVE\u30d5\u30a7\u30b9\u30c6\u30a3\u30d0\u30eb"
                        }
                    },
                    "release": "",
                    "trade_prohibition": {
                        "is_trade_limit": false
                    },
                    "idol_search_param": "keyword=%E3%81%BB%E3%82%8A%E3%82%86%E3%81%86%E3%81%93",
                    "premium_sign_idol_base_id": "158",
                    "js_premium_sign": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fcjs%2Fpremium%2Fsign_effect_158.js%3Fv%3D20101001000000",
                    "archive": {
                        "normal": "0",
                        "premium": "1"
                    },
                    "is_exist_archive": true,
                    "is_max_love": true
                }];
                idol.idol_story_list = [{
                    "story_id": "313",
                    "story_title": "\u7518\u5473\u306a\u8a98\u60d1\u266a\u30d5\u30eb\u30fc\u30c6\u30a3\u30aa\u30fc\u30bf\u30e0",
                    "voice_enable": ["0", "0"],
                    "flash_path": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F313%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D831454001", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F313%2F2%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D152416958"],
                    "voice_url": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F313%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D440075883", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F313%2F2%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D994980671"],
                    "open_flag": ["1", "1"],
                    "icon": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_313_1.jpg%3Fv%3D20190524145750", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_313_2.jpg%3Fv%3D20190524145750"],
                    "movie_name": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_r_early.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_r_late.png%3Fv%3D20101001000000"]
                }, {
                    "story_id": "277",
                    "story_title": "\u9752\u6625\u4e0a\u7b49! \u30c9\u30ad\u30c9\u30ad\u5b66\u5712",
                    "voice_enable": {
                        "0": "1",
                        "3": "1"
                    },
                    "flash_path": {
                        "0": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F277%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D84584565",
                        "3": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F277%2F4%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D726678976"
                    },
                    "voice_url": {
                        "0": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F277%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D494051550",
                        "3": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F277%2F4%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D38956434"
                    },
                    "open_flag": {
                        "0": "1",
                        "3": "1"
                    },
                    "icon": {
                        "0": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fbase%2F158.jpg%3Fv%3D20101001000000",
                        "3": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_277_4.jpg%3Fv%3D20190524145749"
                    },
                    "movie_name_voice": {
                        "0": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000",
                        "3": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"
                    }
                }, {
                    "story_id": "229",
                    "story_title": "\u79cb\u306e\u591c\u9577\u3068\u540d\u6708\u3046\u3055\u304e",
                    "voice_enable": {
                        "2": "1",
                        "5": "1"
                    },
                    "flash_path": {
                        "2": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F229%2F3%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D470214250",
                        "5": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F229%2F6%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D946261403"
                    },
                    "voice_url": {
                        "2": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F229%2F3%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D812214540",
                        "5": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F229%2F6%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D253926113"
                    },
                    "open_flag": {
                        "2": "1",
                        "5": "1"
                    },
                    "icon": {
                        "2": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fbase%2F158.jpg%3Fv%3D20101001000000",
                        "5": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_229_6.jpg%3Fv%3D20190524145749"
                    },
                    "movie_name_voice": {
                        "2": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000",
                        "5": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"
                    }
                }, {
                    "story_id": "196",
                    "story_title": "\u5915\u713c\u3051\u30c6\u30ec\u30d1\u30b7\u30fc",
                    "voice_enable": ["1", "1"],
                    "flash_path": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F196%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D201245143", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F196%2F2%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D850168406"],
                    "voice_url": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F196%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D993723257", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F196%2F2%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D224082581"],
                    "open_flag": ["1", "1"],
                    "icon": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_yuko.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_196_2.jpg%3Fv%3D20101001000000"],
                    "movie_name_voice": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"]
                }, {
                    "story_id": "125",
                    "story_title": "\u30d3\u30bf\u30fc&\u30b9\u30a4\u30fc\u30c8 \u3068\u3073\u304d\u308a\u30d0\u30ec\u30f3\u30bf\u30a4\u30f3",
                    "voice_enable": ["0", "0"],
                    "flash_path": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F125%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D57106024", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F125%2F2%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D75105863"],
                    "voice_url": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F125%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D992894635", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F125%2F2%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D103421618"],
                    "open_flag": ["1", "1"],
                    "icon": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_125_1.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_125_2.jpg%3Fv%3D20101001000000"],
                    "movie_name": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_r_early.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_r_late.png%3Fv%3D20101001000000"]
                }, {
                    "story_id": "75",
                    "story_title": "\u3055\u3044\u304d\u3063\u304f\u2606\u30dc\u30a4\u30b9",
                    "voice_enable": ["1", "1"],
                    "flash_path": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F75%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D754288758", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F75%2F2%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D201495633"],
                    "voice_url": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F75%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D594505788", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F75%2F2%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D313028502"],
                    "open_flag": ["1", "1"],
                    "icon": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_075_1.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_075_2.jpg%3Fv%3D20101001000000"],
                    "movie_name_voice": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"]
                }, {
                    "story_id": "48",
                    "story_title": "\u3069\u3046\u3076\u3064\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc \u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u7de8",
                    "voice_enable": ["1", "1"],
                    "flash_path": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F48%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D7436425", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F48%2F2%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D331227346"],
                    "voice_url": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F48%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D313597741", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F48%2F2%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D582617411"],
                    "open_flag": ["1", "1"],
                    "icon": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_033_3.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_048_2.jpg%3Fv%3D20101001000000"],
                    "movie_name_voice": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_special.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_special_2.png%3Fv%3D20101001000000"]
                }, {
                    "story_id": "47",
                    "story_title": "\u3069\u3046\u3076\u3064\u30a2\u30c9\u30d9\u30f3\u30c1\u30e3\u30fc \u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2\u7de8",
                    "voice_enable": ["1", "1"],
                    "flash_path": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F47%2F1%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D233801947", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F47%2F2%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D3246522"],
                    "voice_url": ["http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F47%2F1%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D544368386", "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F47%2F2%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D570904779"],
                    "open_flag": ["1", "1"],
                    "icon": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_033_3.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_047_2.jpg%3Fv%3D20101001000000"],
                    "movie_name_voice": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"]
                }, {
                    "story_id": "33",
                    "story_title": "\u30a2\u30a4\u30c9\u30eb\u4e03\u5909\u5316\u2606\u304a\u4ed5\u4e8b\u30c1\u30e3\u30ec\u30f3\u30b8",
                    "voice_enable": {
                        "2": "1",
                        "5": "1"
                    },
                    "flash_path": {
                        "2": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F33%2F3%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D470575782",
                        "5": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F33%2F6%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D292694128"
                    },
                    "voice_url": {
                        "2": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F33%2F3%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D153289518",
                        "5": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F33%2F6%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D428115193"
                    },
                    "open_flag": {
                        "2": "1",
                        "5": "1"
                    },
                    "icon": {
                        "2": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_033_3.jpg%3Fv%3D20101001000000",
                        "5": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_033_6.jpg%3Fv%3D20101001000000"
                    },
                    "movie_name_voice": {
                        "2": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000",
                        "5": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"
                    }
                }, {
                    "story_id": "10",
                    "story_title": "\u6708\u591c\u306e\u6e29\u6cc9",
                    "voice_enable": {
                        "2": "0",
                        "5": "0"
                    },
                    "flash_path": {
                        "2": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F10%2F3%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D293698735",
                        "5": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fmovie_play%2F10%2F6%2Fidol_gallery--idol_detail--__hash_card_id__--2%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D660509191"
                    },
                    "voice_url": {
                        "2": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F10%2F3%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D456073967",
                        "5": "http:\/\/sp.pf.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_story%2Fsound_play%2F10%2F6%2Fidol_gallery%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D394389588"
                    },
                    "open_flag": {
                        "2": "1",
                        "5": "1"
                    },
                    "icon": {
                        "2": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_010_5.jpg%3Fv%3D20101001000000",
                        "5": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_movie_010_6.jpg%3Fv%3D20101001000000"
                    },
                    "movie_name": {
                        "2": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_early.png%3Fv%3D20101001000000",
                        "5": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fepisode%2Fepi_button_moviename_passion_late.png%3Fv%3D20101001000000"
                    }
                }];
                idol.images = {
                    "bg": {
                        "1": {
                            "cu": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_1_cu.jpg%3Fv%3D20101001000000",
                            "co": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_1_co.jpg%3Fv%3D20101001000000",
                            "pa": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_1_pa.jpg%3Fv%3D20101001000000",
                            "tr": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_f_pa.jpg%3Fv%3D20101001000000"
                        },
                        "2": {
                            "cu": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_2_cu.jpg%3Fv%3D20101001000000",
                            "co": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_2_co.jpg%3Fv%3D20101001000000",
                            "pa": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_2_pa.jpg%3Fv%3D20101001000000"
                        },
                        "3": {
                            "cu": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_3_cu.jpg%3Fv%3D20101001000000",
                            "co": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_3_co.jpg%3Fv%3D20101001000000",
                            "pa": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_3_pa.jpg%3Fv%3D20101001000000",
                            "tr": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_f2_pa.jpg%3Fv%3D20101001000000"
                        },
                        "4": {
                            "cu": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_4_cu.jpg%3Fv%3D20101001000000",
                            "co": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_4_co.jpg%3Fv%3D20101001000000",
                            "pa": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fmypage_new%2Fbg%2Fbg_idol_reality_4_pa.jpg%3Fv%3D20101001000000"
                        },
                        "5": {
                            "cu": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_cute.jpg%3Fv%3D20101001000000",
                            "co": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_cool.jpg%3Fv%3D20101001000000",
                            "pa": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_passion.jpg%3Fv%3D20101001000000",
                            "tr": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_trainer.jpg%3Fv%3D20101001000000"
                        },
                        "6": {
                            "cu": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_cute.jpg%3Fv%3D20101001000000",
                            "co": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_cool.jpg%3Fv%3D20101001000000",
                            "pa": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fgallery%2Fbg_sr_passion.jpg%3Fv%3D20101001000000"
                        }
                    },
                    "l": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fc55d799ec6a7189b86c2c61309ff705e.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Faf03f83edd3f6081e7a94f7dee76c69c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F366697976ec9eadf5d9af8aa05627c06.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F0704a849a66af4661b4b5fca9bdd29d8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F8e63cd4a640f8f1d81aa58b0f5b965e1.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F206627c86b320778aa94bb336021a57f.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fffb2c98591b0c9c025db8d210b9eceb7.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F1bad11e08f6d67660858e2a625af9706.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Ffb45408d80ff8a8e68f9cfec61234780.jpg%3Fv%3D20191029144618", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F7ccda474194bb3f8016aa424f79476e2.jpg%3Fv%3D20191029144618", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F8c991c6f3c84bca4c63100d6cc99a040.jpg%3Fv%3D20190524145548", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F4201c7600dcea270874eacee8ecfd9c7.jpg%3Fv%3D20190524145548", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fcefc8b04bb8f382379fa66d63aab3243.jpg%3Fv%3D20190524145548", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F42dceae39ac53e024fb6db76cc26f411.jpg%3Fv%3D20190524145548", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000", "", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000", "", "", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145617", "", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_b%2Fl%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631", ""],
                    "l_premium": {
                        "16": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000",
                        "20": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000",
                        "26": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000",
                        "28": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000",
                        "29": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000",
                        "30": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145632",
                        "31": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145632",
                        "32": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145632",
                        "33": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145632",
                        "34": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631",
                        "35": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_p%2Fl%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"
                    },
                    "l_nosign": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145548", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145549", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145549", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145549", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"],
                    "l_nosign_p": {
                        "16": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000",
                        "20": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000",
                        "26": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000",
                        "28": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000",
                        "29": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000",
                        "30": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145625",
                        "31": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145625",
                        "32": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145625",
                        "33": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145625",
                        "34": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631",
                        "35": "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard_sign_no_p%2Fl%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"
                    },
                    "l_noframe": [null, null, null, null, null, null, null, null, null, null, null, null, null, null, "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145550", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145550", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145550", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145550", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fl_noframe%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"],
                    "mask_l": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                    "mask_l2": ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
                    "mask_l_p": [],
                    "mask_l2_p": [],
                    "xs": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fc55d799ec6a7189b86c2c61309ff705e.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Faf03f83edd3f6081e7a94f7dee76c69c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F366697976ec9eadf5d9af8aa05627c06.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F0704a849a66af4661b4b5fca9bdd29d8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F8e63cd4a640f8f1d81aa58b0f5b965e1.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F206627c86b320778aa94bb336021a57f.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fffb2c98591b0c9c025db8d210b9eceb7.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F1bad11e08f6d67660858e2a625af9706.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Ffb45408d80ff8a8e68f9cfec61234780.jpg%3Fv%3D20190524145642", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F7ccda474194bb3f8016aa424f79476e2.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F8c991c6f3c84bca4c63100d6cc99a040.jpg%3Fv%3D20190524145642", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F4201c7600dcea270874eacee8ecfd9c7.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fcefc8b04bb8f382379fa66d63aab3243.jpg%3Fv%3D20190524145642", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F42dceae39ac53e024fb6db76cc26f411.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145643", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fxs%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"],
                    "m2": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fc55d799ec6a7189b86c2c61309ff705e.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Faf03f83edd3f6081e7a94f7dee76c69c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F366697976ec9eadf5d9af8aa05627c06.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F0704a849a66af4661b4b5fca9bdd29d8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F8e63cd4a640f8f1d81aa58b0f5b965e1.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F206627c86b320778aa94bb336021a57f.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fffb2c98591b0c9c025db8d210b9eceb7.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F1bad11e08f6d67660858e2a625af9706.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Ffb45408d80ff8a8e68f9cfec61234780.jpg%3Fv%3D20191029144618", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F7ccda474194bb3f8016aa424f79476e2.jpg%3Fv%3D20191029144618", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F8c991c6f3c84bca4c63100d6cc99a040.jpg%3Fv%3D20190524145604", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F4201c7600dcea270874eacee8ecfd9c7.jpg%3Fv%3D20190524145604", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fcefc8b04bb8f382379fa66d63aab3243.jpg%3Fv%3D20190524145604", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F42dceae39ac53e024fb6db76cc26f411.jpg%3Fv%3D20190524145604", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145604", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145605", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145605", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145605", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fm2%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"],
                    "quest": ["http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fc55d799ec6a7189b86c2c61309ff705e.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Faf03f83edd3f6081e7a94f7dee76c69c.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F366697976ec9eadf5d9af8aa05627c06.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F0704a849a66af4661b4b5fca9bdd29d8.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F8e63cd4a640f8f1d81aa58b0f5b965e1.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F206627c86b320778aa94bb336021a57f.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fffb2c98591b0c9c025db8d210b9eceb7.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F1bad11e08f6d67660858e2a625af9706.png%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Ffb45408d80ff8a8e68f9cfec61234780.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F7ccda474194bb3f8016aa424f79476e2.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F8c991c6f3c84bca4c63100d6cc99a040.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F4201c7600dcea270874eacee8ecfd9c7.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fcefc8b04bb8f382379fa66d63aab3243.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F42dceae39ac53e024fb6db76cc26f411.png%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F0662af7af3c7bf97ba34266f06737dd4.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F756110c37e69d992aa3a8d4ba539f3e8.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F3d3269835487382b0df4e3c8579bb76a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F753c417a7ec341db7cea1b1310039afe.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F6b9c0707971d95fd191fea1138c10722.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fcab748d4dfb5cbe80afb594b3c3f3a2c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F99264bf5143c8ef20d5799bcee877921.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F9549306aa4c5394f93ee2eb93809485d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F4d914ac85a06f7643c5b327242a6c30b.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F210300780515553e62e96bea844e9a8d.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fe60c6c9469235806c84c200bd1336dc6.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fcd82605167df5280f7a1496dfb819801.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Ffcadcbebe66c5cbafbfcda3fde7aed3c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fc45a6475300f696474afa6e473eaef75.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fb0c6e9c33f363fe1bfea05c3d007983c.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F64bfd146a17bcae9c53f47b939d3199a.jpg%3Fv%3D20101001000000", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fc37ad1a9f858e0a034cea14f390e4a8f.jpg%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F087f6dbd91ce36b87cede27e7d9979a4.jpg%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F41e0408ac7bf19a6fd0e65089e8e997a.jpg%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Fd0522c5c2afa7c553596e8b78ba25c66.jpg%3Fv%3D20190524145612", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2Ff0133fbfa13423e93f44b651e2feb2a3.jpg%3Fv%3D20190930144631", "http:\/\/sp.pf-img-a.mbga.jp\/12008305\/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fcard%2Fquest%2F8b1951a846a99ccff84f6882fa764eef.jpg%3Fv%3D20190930144631"]
                };
                idol.ios_app_flg = false;
                idol.apple_review = null;
                window.idol = idol;
            })();
            var birthday_flag = false;
            var select_card_index = "0";
            var selected_num = null;
            var url_trade = 'http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fauction%2Fsearch_top%2F0%2F__hash_card_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D163061767';
            var url_album = 'http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Farchive%2Fview%2F__hash_card_id__%2F0%2F0%2F0%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D211445905';
            var url_event_memory = 'http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fmemory%2Fdetail%2F__event_id__%2F__category_id__%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D124698116';
            var url_other_event = 'http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_gallery%2Findex%2F0%2F0%2F2%2F0%3Fis_search%3D1%26event_category%3D__category_id__%26event_id%3D__event_id__%26l_frm%3DIdol_gallery_idol_detail_1%26rnd%3D189812493';
            var url_cartoon = 'http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fcartoon%2Fsearch%3F__idol_search_param__%26l_frm%3DIdol_gallery_idol_detail_1%26rnd%3D88648842';
            var url_comment_5th_redirect = "idol_gallery/idol_detail/__hash_card_id__";
            var slider_pos = 0;
            var select_tab = 0;
            var comments_info = {
                "comment": {
                    "category": "greeting",
                    "type": "idol",
                    "conditions": "none"
                },
                "comments_my_1": {
                    "category": "greeting",
                    "type": "my",
                    "conditions": "get_idol"
                },
                "comments_my_2": {
                    "category": "greeting",
                    "type": "my",
                    "conditions": "get_idol"
                },
                "comments_my_3": {
                    "category": "greeting",
                    "type": "my",
                    "conditions": "get_idol"
                },
                "comments_my_4": {
                    "category": "greeting",
                    "type": "my",
                    "conditions": "get_idol"
                },
                "comments_work_1": {
                    "category": "work",
                    "type": "work",
                    "conditions": "get_idol"
                },
                "comments_work_2": {
                    "category": "work",
                    "type": "work",
                    "conditions": "get_idol"
                },
                "comments_work_3": {
                    "category": "work",
                    "type": "work",
                    "conditions": "get_idol"
                },
                "comments_work_4": {
                    "category": "work",
                    "type": "work",
                    "conditions": "get_idol"
                },
                "comments_work_love_up": {
                    "category": "work",
                    "type": "work_love_up",
                    "conditions": "get_idol"
                },
                "comments_live": {
                    "category": "work",
                    "type": "live",
                    "conditions": "get_idol"
                },
                "comments_my_max": {
                    "category": "love_max",
                    "type": "my_max",
                    "conditions": "love_max"
                },
                "comments_work_max": {
                    "category": "love_max",
                    "type": "work_max",
                    "conditions": "love_max"
                },
                "comments_love_max": {
                    "category": "love_max",
                    "type": "love_max",
                    "conditions": "love_max"
                }
            };
            var type_names = {
                "idol": "\u30a2\u30a4\u30c9\u30eb\u30b3\u30e1\u30f3\u30c8",
                "my": "\u30de\u30a4\u30b9\u30bf\u30b8\u30aa",
                "my_max": "\u30de\u30a4\u30b9\u30bf\u30b8\u30aa(\u89aa\u611b\u5ea6MAX)",
                "work": "\u304a\u4ed5\u4e8b",
                "work_love_up": "\u304a\u4ed5\u4e8b(\u89aa\u611b\u5ea6UP)",
                "work_max": "\u304a\u4ed5\u4e8b(\u89aa\u611b\u5ea6MAX)",
                "live": "LIVE\u30d0\u30c8\u30eb",
                "love_max": "\u89aa\u611b\u5ea6MAX\u6f14\u51fa"
            };
            var category_names = {
                "greeting": "\u3042\u3044\u3055\u3064",
                "work": "\u304a\u4ed5\u4e8b",
                "love_max": "\u89aa\u611b\u5ea6MAX"
            };
            var conditions_names = {
                "none": "\u6761\u4ef6\u7121\u3057",
                "get_idol": "\u30a2\u30a4\u30c9\u30eb\u304c\u6240\u5c5e\u3059\u308b\u3068\u95b2\u89a7\u3067\u304d\u307e\u3059",
                "love_max": "\u89aa\u611b\u5ea6\u3092MAX\u306b\u3059\u308b\u3068\u95b2\u89a7\u3067\u304d\u307e\u3059"
            };
            var comment_tab_start = null;
            var show_premium = true;
        </script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Funderscore-min.js%3Fv%3D20101001000000"></script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fbackbone-min.js%3Fv%3D20101001000000"></script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Filibrary.js%3Fv%3D20190524145756" type="text/javascript"></script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fislider.js%3Fv%3D20191108144617" type="text/javascript"></script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fboombox.min.js%3Fv%3D20101001000000" type="text/javascript"></script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fmin%2Fgallery.min.js%3Fv%3D20190524145756" type="text/javascript"></script>
        <script src="http://sp.pf-img-a.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fjs%2Fmin%2Fbb_loader.min.js%3Fv%3D20190524145756" type="text/javascript"></script>
        <div class="m-Top8 m-Btm8">
            <img src="http://sp.pf-img-a.mbga.jp/12008305?url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fimage_sp%2Fui%2Fline_hoshi.jpg" width="100%">
        </div>
        <a id="search_cartoon" href='#' class="btn_normal_line_2 m-Cnt m-Btm12">劇場で検索</a>
        <a href='http://sp.pf.mbga.jp/12008305/?guid=ON&amp;url=http%3A%2F%2F125.6.169.35%2Fidolmaster%2Fidol_gallery%3Fl_frm%3DIdol_gallery_idol_detail_1%26rnd%3D752650743'>
            <div class="backLink">アイドルギャラリーTOP</div>
        </a>
        <footer>
            <div class="line_idolmaster"></div><a href="#top" id="toPageTop" class="mypage_under">
                <div></div>
            </a>
            <div class="t-Cnt">(C)窪岡俊之 (C)2011 BNEI</div>
        </footer>
    </div>
    <script>
        window._tarminal = {
            'native_app_flg': false,
            'android_app_flg': false,
            'ios_app_flg': false,
            'shell_app_flg': false
        };
    </script>
    <script>
        window._tarminal = {
            'native_app_flg': false,
            'android_app_flg': false,
            'ios_app_flg': false,
            'shell_app_flg': false
        };
    </script>
    <script type="text/javascript">
        window.NREUM || (NREUM = {});
        NREUM.info = {
            "beacon": "bam.nr-data.net",
            "licenseKey": "9779865044",
            "applicationID": "288373008",
            "transactionName": "Y1ADN0oHDxVUWkNcXloaIABMDw4IGnBTWl1rUgAPVAMTHxpQU1pda1EEF1kPDQ==",
            "queueTime": 0,
            "applicationTime": 65,
            "atts": "TxcAQQIdHBs=",
            "errorBeacon": "bam.nr-data.net",
            "agent": ""
        }
    </script>
    <div id="mbga-pf-footer">
        <div class="mbga-pf-footer-container odd-lines mbga-pf-footer-white">
            <ul>
                <li class="mbga-pf-footer-list">
                    <div class="mbga-pf-fotter-content">
                        <a class="mbga-pf-footer-arrow" href="http://sp.mbga.jp/_grp_view?g=32095227">
                            <span class="mbga-pf-footer-caption">公式サークル</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div id="mbga-pf-footer-navbar">
            <ul class="mbga-pf-box-h">
                <li id="mbga-pf-footer-navbar-icon-grid" class="mbga-pf-footer-li">
                    <a class="mbga-pf-footer-a mbga-pf-footer-home-w" href="http://sp.mbga.jp/?_from=globalfooter">
                        <span class="mbga-pf-footer-txt">ホーム</span>
                    </a>
                </li>
                <li id="mbga-pf-footer-navbar-icon-mypage" class="mbga-pf-footer-li">
                    <a class="mbga-pf-footer-a mbga-pf-footer-mypage-w" href="http://sp.mbga.jp/_my0?_from=globalfooter">
                        <span class="mbga-pf-footer-txt">マイページ</span>
                    </a>
                </li>
                <li id="mbga-pf-footer-navbar-icon-mygame" class="mbga-pf-footer-li">
                    <a class="mbga-pf-footer-a mbga-pf-footer-mygame-w" href="http://sp.mbga.jp/_game_my_top?_from=globalfooter">
                        <span class="mbga-pf-footer-txt">マイゲーム</span>
                    </a>
                </li>
                <li id="mbga-pf-footer-navbar-icon-notification" class="mbga-pf-footer-li">
                    <a class="mbga-pf-footer-a mbga-pf-footer-game-w" href="http://sp.mbga.jp/_game_top?_from=globalfooter">
                        <span class="mbga-pf-footer-txt">ゲーム</span>
                    </a>
                </li>
            </ul>
        </div>
        <script type="text/javascript" charset="UTF-8">
            (function() {
                document.addEventListener('DOMContentLoaded', function() {
                    var list = document.getElementsByClassName('mbga-pf-footer-li');
                    var i = 0,
                        l = list.length;
                    for (; i < l; i++) {
                        var elem = list[i];
                        elem.addEventListener('touchstart', function(e) {
                            e.currentTarget.className = e.currentTarget.className.replace(/$/, ' mbga-pf-tapped');
                        });
                        elem.addEventListener('touchend', function(e) {
                            e.currentTarget.className = e.currentTarget.className.replace(/ mbga-pf-tapped/, '');
                        });
                        elem.addEventListener('touchmove', function(e) {});
                    }
                });
            })();
        </script>
    </div>
</body>

</html>