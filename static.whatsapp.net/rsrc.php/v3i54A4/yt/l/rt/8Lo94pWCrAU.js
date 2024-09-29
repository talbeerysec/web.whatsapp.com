; /*FB_PKG_DELIM*/

__d("CometQPLPayloadStore", [], (function (a, b, c, d, e, f) {
    "use strict";
    var g = null;

    function a(a) {
        g = a
    }

    function b() {
        var a;
        return (a = g) != null ? a : window.pldmp
    }
    var h = null;

    function c(a) {
        h = a
    }

    function d() {
        var a;
        return (a = h) != null ? a : window.plbs
    }
    f.storePayloadMap = a;
    f.getPayloadMap = b;
    f.storePayloadBytesSent = c;
    f.getPayloadBytesSent = d
}), 66);
__d("IntlCLDRNumberType01", ["IntlVariations"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getVariation: function (a) {
            return c("IntlVariations").NUMBER_OTHER
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("IntlCLDRNumberType04", ["IntlVariations"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getVariation: function (a) {
            if (a >= 0 && a <= 1) return c("IntlVariations").NUMBER_ONE;
            else return c("IntlVariations").NUMBER_OTHER
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("IntlCLDRNumberType05", ["IntlVariations"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getVariation: function (a) {
            if (a === 1) return c("IntlVariations").NUMBER_ONE;
            else return c("IntlVariations").NUMBER_OTHER
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("IntlCLDRNumberType09", ["IntlVariations"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getVariation: function (a) {
            if (a === 1) return c("IntlVariations").NUMBER_ONE;
            else return c("IntlVariations").NUMBER_OTHER
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("WADynamicRouterAsync", ["Promise", "WALogger", "err"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["", " is not defined for ", ""]);
        i = function () {
            return a
        };
        return a
    }
    var j = {
            sentinel: "RESPONSE_NAMESPACE"
        },
        k = {
            sentinel: "NOT_HANDLED"
        };
    a = function () {
        function a() {
            var a = this;
            this.$2 = (h || (h = b("Promise"))).resolve();
            this.$3 = new Map();
            this.$5 = 0;
            this.$6 = null;
            this.$7 = null;
            this.$8 = null;
            this.fireAndForget = function (b, c, d, e) {
                e === void 0 && (e = !1), a.$4 == null ? void 0 : a.$4(b, c, d), a.$10(b, c, d, null, e)
            };
            this.sendAndReceive = function (c, d, e, f) {
                f === void 0 && (f = !1);
                a.$4 == null ? void 0 : a.$4(c, d, e);
                return new(h || (h = b("Promise")))(function (b, g) {
                    a.$10(c, d, e, function (c) {
                        try {
                            var d = n(c);
                            d ? d.call(c, function (c) {
                                a.$10(j, "", c, b, f)
                            }, function (b) {
                                a.$10(j, "", b, g, !1)
                            }) : a.$10(j, "", c, b, f)
                        } catch (b) {
                            a.$10(j, "", b, g, !1)
                        }
                    }, f)
                })
            };
            this.$9 = function () {
                var b = a.$7;
                if (!b) return;
                var c = a.$3,
                    d;
                while (b && !(d = l(c, b))) a.$7 = b = b.nextRoute;
                if (!b || !d) return;
                c = a.$11(d, b);
                var e = !0;
                if (c !== k) {
                    var f = b.prevRoute,
                        g = b.nextRoute;
                    a.$7 === b && (a.$7 = g);
                    f ? f.nextRoute = g : a.$6 = g;
                    g ? g.prevRoute = f : (e = !1, a.$8 = f)
                }
                e && a.$2.then(a.$9)["finally"](function () {});
                return c
            }
        }
        var e = a.prototype;
        e.setAckPayload = function (a) {
            this.$1 = a
        };
        e.getAckPayoad = function () {
            return this.$1
        };
        e.hasHandlerForNamespace = function (a) {
            return this.$3.has(a)
        };
        e.getHandledNamespaces = function () {
            return Array.from(this.$3.keys())
        };
        e.setOnRouteCalled = function (a) {
            this.$4 = a
        };
        e.setNamespaceHandler = function (a, b) {
            var c = this.$3,
                d = c.get(a);
            if (d === b) return;
            ++this.$5;
            c.set(a, b);
            if (!d) {
                c = this.$6;
                c && (this.$7 || this.$2.then(this.$9)["finally"](function () {}), this.$7 = c)
            }
        };
        e.setHandlers = function (a, b) {
            function e(e, f, g) {
                if (b[e] == null) {
                    d("WALogger").ERROR(i(), e, a);
                    throw c("err")(e + " is not defined for " + a)
                }
                e = b[e](f);
                g && g(e)
            }
            this.setNamespaceHandler(a, e)
        };
        e.$10 = function (a, b, c, d, e) {
            var f = this.$8;
            a = {
                namespace: a,
                route: b,
                arg: c,
                resolver: d,
                prevRoute: f,
                nextRoute: null,
                silentLog: e
            };
            this.$8 = a;
            b = !0;
            f ? (f.nextRoute = a, b = !this.$7) : this.$6 = a;
            b && l(this.$3, a) && (this.$7 = a, this.$2.then(this.$9)["finally"](function () {}))
        };
        e.$11 = function (a, d) {
            var e = d.route,
                f = d.arg,
                g = d.resolver;
            d = d.silentLog;
            var i = this.$5,
                j = null,
                l = null;
            try {
                j = a(e, f, g, d)
            } catch (a) {
                l = (h || (h = b("Promise"))).reject(a)
            }
            if (j === k)
                if (i === this.$5) l = (h || (h = b("Promise"))).reject(c("err")("DynamicRouter: NOT_HANDLED can only be used when updating handlers"));
                else return k;
            if (g) {
                l && g(l);
                return
            } else return l
        };
        return a
    }();

    function l(a, b) {
        b = b.namespace;
        return b === j ? m : a.get(b)
    }

    function m(a, b, c) {
        c(b)
    }

    function n(a) {
        if (a != null && (typeof a === "object" || typeof a === "function")) {
            a = a.then;
            return typeof a === "function" ? a : null
        }
        return null
    }
    g.NOT_HANDLED = k;
    g.DynamicRouter = a
}), 98);
__d("WAWeb-modernizr", [], (function (a, b, c, d, e, f) {
    ! function (a, b, c, d) {
        function e(a, b) {
            return typeof a === b
        }

        function f(a) {
            var b = y.className,
                c = w._config.classPrefix || "";
            if (z && (b = b.baseVal), w._config.enableJSClass) {
                var d = new RegExp("(^|\\s)" + c + "no-js(\\s|$)");
                b = b.replace(d, "$1" + c + "js$2")
            }
            w._config.enableClasses && (a.length > 0 && (b += " " + c + a.join(" " + c)), z ? y.className.baseVal = b : y.className = b)
        }

        function g() {
            return "function" != typeof c.createElement ? c.createElement(arguments[0]) : z ? c.createElementNS.call(c, "http://www.w3.org/2000/svg", arguments[0]) : c.createElement.apply(c, arguments)
        }

        function h(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function i() {
            var a = c.body;
            return a || (a = g(z ? "svg" : "body"), a.fake = !0), a
        }

        function j(a, b, d, e) {
            var f, h, o = "modernizr",
                p = g("div"),
                q = i();
            if (parseInt(d, 10))
                for (; d--;) f = g("div"), f.id = e ? e[d] : o + (d + 1), p.appendChild(f);
            return f = g("style"), f.type = "text/css", f.id = "s" + o, (q.fake ? q : p).appendChild(f), q.appendChild(p), f.styleSheet ? f.styleSheet.cssText = a : f.appendChild(c.createTextNode(a)), p.id = o, q.fake && (q.style.background = "", q.style.overflow = "hidden", h = y.style.overflow, y.style.overflow = "hidden", y.appendChild(q)), e = b(p, a), q.fake ? (q.parentNode.removeChild(q), y.style.overflow = h, y.offsetHeight) : p.parentNode.removeChild(p), !!e
        }

        function k(a) {
            return a.replace(/([A-Z])/g, function (a, b) {
                return "-" + b.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }

        function l(a, c, d) {
            var e;
            if ("getComputedStyle" in b) {
                e = getComputedStyle.call(b, a, c);
                var f = b.console;
                if (null !== e) d && (e = e.getPropertyValue(d));
                else if (f) {
                    var h = f.error ? "error" : "log";
                    f[h].call(f, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else e = !c && a.currentStyle && a.currentStyle[d];
            return e
        }

        function m(a, c) {
            var e = a.length;
            if ("CSS" in b && "supports" in b.CSS) {
                for (; e--;)
                    if (b.CSS.supports(k(a[e]), c)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in b) {
                for (var f = []; e--;) f.push("(" + k(a[e]) + ":" + c + ")");
                return f = f.join(" or "), j("@supports (" + f + ") { #modernizr { position: absolute; } }", function (a) {
                    return "absolute" === l(a, null, "position")
                })
            }
            return d
        }

        function n(a) {
            return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
                return b + c.toUpperCase()
            }).replace(/^-/, "")
        }

        function o(a, b, c, f) {
            function o() {
                s && (delete G.style, delete G.modElem)
            }
            if (f = !e(f, "undefined") && f, !e(c, "undefined")) {
                var r = m(a, c);
                if (!e(r, "undefined")) return r
            }
            for (var s, t, r, u, v, r = ["modernizr", "tspan", "samp"]; !G.style && r.length;) s = !0, G.modElem = g(r.shift()), G.style = G.modElem.style;
            for (r = a.length, t = 0; t < r; t++)
                if (u = a[t], v = G.style[u], h(u, "-") && (u = n(u)), G.style[u] !== d) {
                    if (f || e(c, "undefined")) return o(), "pfx" !== b || u;
                    try {
                        G.style[u] = c
                    } catch (a) {}
                    if (G.style[u] !== v) return o(), "pfx" !== b || u
                } return o(), !1
        }

        function p(a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }

        function q(a, b, c) {
            var d;
            for (var f in a)
                if (a[f] in b) return !1 === c ? a[f] : (d = b[a[f]], e(d, "function") ? p(d, c || b) : d);
            return !1
        }

        function r(a, b, c, d, f) {
            var i = a.charAt(0).toUpperCase() + a.slice(1),
                j = (a + " " + E.join(i + " ") + i).split(" ");
            return e(b, "string") || e(b, "undefined") ? o(j, b, d, f) : (j = (a + " " + B.join(i + " ") + i).split(" "), q(j, b, c))
        }

        function s(a, b, c) {
            return r(a, d, d, b, c)
        }

        function t(a, b) {
            if ("object" == typeof a)
                for (var c in a) I(a, c) && t(c, a[c]);
            else {
                a = a.toLowerCase();
                c = a.split(".");
                var d = w[c[0]];
                if (2 === c.length && (d = d[c[1]]), void 0 !== d) return w;
                b = "function" == typeof b ? b() : b, 1 === c.length ? w[c[0]] = b : (!w[c[0]] || w[c[0]] instanceof Boolean || (w[c[0]] = new Boolean(w[c[0]])), w[c[0]][c[1]] = b), f([(b && !1 !== b ? "" : "no-") + c.join("-")]), w._trigger(a, b)
            }
            return w
        }
        var u = [],
            v = {
                _version: "3.11.4",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function (a, b) {
                    var c = this;
                    setTimeout(function () {
                        b(c[a])
                    }, 0)
                },
                addTest: function (a, b, c) {
                    u.push({
                        name: a,
                        fn: b,
                        options: c
                    })
                },
                addAsyncTest: function (a) {
                    u.push({
                        name: null,
                        fn: a
                    })
                }
            },
            w = function () {};
        w.prototype = v, w = new w;
        var x = [],
            y = c.documentElement,
            z = "svg" === y.nodeName.toLowerCase(),
            A = "Moz O ms Webkit",
            B = v._config.usePrefixes ? A.toLowerCase().split(" ") : [];
        v._domPrefixes = B;
        var C = v._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        v._prefixes = C;
        var D = function () {
            function a(a, c) {
                var e;
                return !!a && (c && "string" != typeof c || (c = g(c || "div")), a = "on" + a, e = a in c, !e && b && (c.setAttribute || (c = g("div")), c.setAttribute(a, ""), e = "function" == typeof c[a], c[a] !== d && (c[a] = d), c.removeAttribute(a)), e)
            }
            var b = !("onblur" in y);
            return a
        }();
        v.hasEvent = D;
        var E = v._config.usePrefixes ? A.split(" ") : [];
        v._cssomPrefixes = E;
        var F = {
            elem: g("modernizr")
        };
        w._q.push(function () {
            delete F.elem
        });
        var G = {
            style: F.elem.style
        };
        w._q.unshift(function () {
            delete G.style
        }), v.testAllProps = r;
        var H = function (a) {
            var c, e = C.length,
                f = b.CSSRule;
            if (void 0 === f) return d;
            if (!a) return !1;
            if (a = a.replace(/^@/, ""), (c = a.replace(/-/g, "_").toUpperCase() + "_RULE") in f) return "@" + a;
            for (var i = 0; i < e; i++) {
                var j = C[i];
                if (j.toUpperCase() + "_" + c in f) return "@-" + j.toLowerCase() + "-" + a
            }
            return !1
        };
        v.atRule = H;
        v.prefixed = function (a, b, c) {
            return 0 === a.indexOf("@") ? H(a) : (-1 !== a.indexOf("-") && (a = n(a)), b ? r(a, b, c) : r(a, "pfx"))
        };
        v.testAllProps = s;
        var I;
        v.testProp = function (a, b, c) {
            return o([a], d, b, c)
        };
        ! function () {
            var a = {}.hasOwnProperty;
            I = e(a, "undefined") || e(a.call, "undefined") ? function (a, b) {
                return b in a && e(a.constructor.prototype[b], "undefined")
            } : function (b, c) {
                return a.call(b, c)
            }
        }(), v._l = {}, v.on = function (a, b) {
            this._l[a] || (this._l[a] = []), this._l[a].push(b), w.hasOwnProperty(a) && setTimeout(function () {
                w._trigger(a, w[a])
            }, 0)
        }, v._trigger = function (a, b) {
            if (this._l[a]) {
                var c = this._l[a];
                setTimeout(function () {
                    var a;
                    for (a = 0; a < c.length; a++) c[a](b)
                }, 0), delete this._l[a]
            }
        }, w._q.push(function () {
            v.addTest = t
        }), w.addAsyncTest(function () {
            function a(a, b, c) {
                function d(b) {
                    var d = !(!b || "load" !== b.type) && 1 === e.width;
                    t(a, "webp" === a && d ? new Boolean(d) : d), c && c(b)
                }
                var e = new Image;
                e.onerror = d, e.onload = d, e.src = b
            }
            var b = [{
                    uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                    name: "webp"
                }, {
                    uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                    name: "webp.alpha"
                }, {
                    uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                    name: "webp.animation"
                }, {
                    uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                    name: "webp.lossless"
                }],
                c = b.shift();
            a(c.name, c.uri, function (c) {
                if (c && "load" === c.type)
                    for (c = 0; c < b.length; c++) a(b[c].name, b[c].uri)
            })
        }), w.addTest("serviceworker", "serviceWorker" in navigator), w.addTest("adownload", !b.externalHost && "download" in g("a")), w.addTest("cssanimations", s("animationName", "a", !0)), w.addTest("csstransitions", s("transition", "all", !0)), (function () {
            var a, b, c, d;
            for (var f in u)
                if (u.hasOwnProperty(f)) {
                    if (a = [], b = u[f], b.name && (a.push(b.name.toLowerCase()), b.options && b.options.aliases && b.options.aliases.length))
                        for (c = 0; c < b.options.aliases.length; c++) a.push(b.options.aliases[c].toLowerCase());
                    for (c = e(b.fn, "function") ? b.fn() : b.fn, b = 0; b < a.length; b++) d = a[b], d = d.split("."), 1 === d.length ? w[d[0]] = c : (w[d[0]] && (!w[d[0]] || w[d[0]] instanceof Boolean) || (w[d[0]] = new Boolean(w[d[0]])), w[d[0]][d[1]] = c), x.push((c ? "" : "no-") + d.join("-"))
                }
        })(), f(x), delete v.addTest, delete v.addAsyncTest;
        for (D = 0; D < w._q.length; D++) w._q[D]();
        a.Modernizr = w
    }(window, window, document)
}), null);
__d("WAWebAgentSync", ["Promise", "WALogger", "WASyncdAction", "WASyncdConst", "WAWebAgentCollection", "WAWebAgentModelUtils", "WAWebMsgCollection", "WAWebSchemaAgent", "WAWebSyncdActionUtils", "WAWebUnattributedMessageCollection", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["agent:syncd: operation not supported"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["agent:syncd: agentAction.name is empty"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["agent:syncd: malformed mutation"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["agent:delayed-attribution: couldn't find Agent for message id::", " with device id::", ""]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["agent:delayed-attribution: couldn't find message id::", ""]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        (h || (h = b("Promise"))).resolve().then(function () {
            d("WAWebUnattributedMessageCollection").UnattributedMessageCollection.getModelsArray().forEach(function (a) {
                var b = a.id;
                a = a.deviceId;
                var c = d("WAWebMsgCollection").MsgCollection.get(b);
                if (c == null) {
                    d("WALogger").DEV(m(), b);
                    return
                }
                var e = d("WAWebAgentCollection").AgentCollection.getByDeviceId(a);
                if (e == null) {
                    d("WALogger").DEV(l(), b, a);
                    return
                }
                c.agentId = String(e.id);
                d("WAWebUnattributedMessageCollection").UnattributedMessageCollection.remove(b)
            })
        })
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.Agent
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b = [],
                    c = [];
                a = a.map(function (a) {
                    try {
                        var e = a.indexParts;
                        e = e[1];
                        e || d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                        if (a.operation === "remove") {
                            c.push(e);
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        if (a.operation === "set") {
                            var f;
                            a = a.value.agentAction;
                            if (!a) {
                                d("WALogger").DEV(k());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            f = d("WAWebAgentModelUtils").getFormattedAgentName((f = a.name) != null ? f : "", (f = a.deviceID) != null ? f : -1);
                            f === "" && d("WALogger").DEV(j());
                            b.push({
                                id: e,
                                name: f,
                                deviceId: (e = a.deviceID) != null ? e : -1,
                                isDeleted: Boolean(a.isDeleted)
                            });
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        d("WALogger").DEV(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    } catch (a) {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    }
                });
                yield d("WAWebSchemaAgent").getAgentTable().bulkCreateOrMerge(b);
                d("WAWebAgentCollection").AgentCollection.add(b, {
                    merge: !0
                });
                yield d("WAWebSchemaAgent").getAgentTable().bulkRemove(c);
                d("WAWebAgentCollection").AgentCollection.remove(c);
                n();
                return a
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebApp.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        wrapper: "_aiwn",
        stripe: "_ap4q",
        isQR: "_aiwl",
        draggableHeader: "_aiwo",
        isMain: "_aiwm"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebBridgeInitialization", ["WADynamicRouterAsync"], (function (a, b, c, d, e, f, g) {
    function a() {
        return new(d("WADynamicRouterAsync").DynamicRouter)()
    }
    g.makeBridge = a
}), 98);
__d("WAWebModelStorageInit", ["WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsKeys", "WAWebUserPrefsLocalStorage", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a() {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = [],
                b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.ROUTING_INFO);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ROUTING_INFO,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.INITIAL_HISTORY_SYNCED);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.INITIAL_HISTORY_SYNCED,
                value: b != null
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.HISTORY_SYNC_STATUS);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.HISTORY_SYNC_STATUS,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.BLOCKLIST_HASH);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.BLOCKLIST_HASH,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.CRITICAL_DATA_SYNCED);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CRITICAL_DATA_SYNCED,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.SHOULD_CHECK_CONTACT_SYNC_STATUS,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.ADV_SECRET_KEY);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ADV_SECRET_KEY,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.MD_UPGRADE_WAM_FLAG);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_UPGRADE_WAM_FLAG,
                value: b === !0
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_HISTORY_LAST_CHUNK_PROCESSED,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.UNARCHIVE_CHATS_SETTING);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.UNARCHIVE_CHATS_SETTING,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.ARCHIVE_V2_ENABLED_SETTING);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.ARCHIVE_V2_ENABLED_SETTING,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_SYNC_ACTIONS_ACTION_SANITIZED,
                value: b === !0
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.CHAT_THREAD_LOGGING_OFFSET);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_OFFSET,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.CHAT_THREAD_LOGGING_SECRET);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_SECRET,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.CHAT_THREAD_LOGGING_LAST_UPLOADED_START_TS,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.PAIRING_TIMESTAMP);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.PAIRING_TIMESTAMP,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.RECENT_MAILBOX_AGE_DAYS);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.RECENT_MAILBOX_AGE_DAYS,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.LAST_PERIODIC_APP_STATE_SYNC_TS);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.LAST_PERIODIC_APP_STATE_SYNC_TS,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").MD_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MD_LOGIN_COOKIE_REQUEST_COMPLETE,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").KEYS.MOBILE_PLATFORM_DEPRECATED);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").KEYS.PRIMARY_FEATURES,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
                value: b
            });
            b = c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").KEYS.INITIAL_HIST_BOUNDARY);
            b = i(b);
            b != null && a.push({
                key: d("WAWebUserPrefsKeys").HASHED_KEYS.INITIAL_HIST_BOUNDARY,
                value: b
            });
            return d("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.bulkSetItemsToIndexedDB(a)
        });
        return h.apply(this, arguments)
    }

    function i(a) {
        if (typeof a === "object") return a;
        if (typeof a !== "string") return null;
        var b;
        try {
            b = JSON.parse(a)
        } catch (a) {
            return null
        }
        if (b == null || typeof b !== "object" || b instanceof Array) return null;
        b;
        var c = {};
        Object.entries(b).forEach(function (a) {
            var b = a[0];
            a = a[1];
            typeof a === "number" && (c[b] = a)
        });
        return c
    }
    g.migrateMDUserPrefsToIndexedDB = a
}), 98);
__d("WAWebRegistration", ["Promise", "WALogger", "WAWebCryptoCurve25519", "WAWebCryptoLibraryUtilsApi", "WAWebSignalKeyApi", "WAWebSignalStoreApi", "WAWebUserPrefsInfoStore", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["failed to refreshSignalCredentials: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function a() {
        var a = d("WAWebCryptoCurve25519").keyPair(),
            c = new Uint8Array(24);
        self.crypto.getRandomValues(c);
        return (h || (h = b("Promise"))).resolve(d("WAWebUserPrefsInfoStore").waNoiseInfo.set({
            recoveryToken: c.buffer,
            staticKeyPair: a,
            certificateChainBuffer: void 0
        }))
    }

    function j() {
        return c("WAWebCryptoLibraryUtilsApi").makeRegistrationId()
    }

    function e() {
        return k.apply(this, arguments)
    }

    function k() {
        k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = j();
            yield d("WAWebSignalStoreApi").waSignalStore.clearCredential();
            var c = (yield d("WAWebSignalKeyApi").generateIdentityKeyPair());
            try {
                yield(h || (h = b("Promise"))).all([d("WAWebSignalStoreApi").waSignalStore.setRegistrationInfo({
                    registrationId: a,
                    identityKeyPair: c
                }), d("WAWebSignalStoreApi").waSignalStore.rotateSignedPreKey(d("WAWebCryptoCurve25519").toSignalCurveKeyPair(c), d("WAWebSignalKeyApi").generateSignedKeyPair)])
            } catch (a) {
                d("WALogger").ERROR(i(), a);
                throw a
            }
        });
        return k.apply(this, arguments)
    }
    g.refreshNoiseCredentials = a;
    g.refreshSignalCredentials = e
}), 98);
__d("WAWebLaunchSocket", ["Promise", "WAComms", "WAGzip", "WALogger", "WAWebABPropsUpdateFromStorage", "WAWebApiContact", "WAWebBackendApi", "WAWebBridgeInitialization", "WAWebBrokerGlobalAppState", "WAWebBuildConstants", "WAWebCmd", "WAWebCommsConfig", "WAWebCommsHandleStanza", "WAWebCryptoEncKeyHelper", "WAWebDbRolloutUtil", "WAWebEventSamplingCache", "WAWebFtsClient", "WAWebInitFromStorage", "WAWebInvocationInterface", "WAWebModelStorage", "WAWebModelStorageInit", "WAWebPageLoadLogging", "WAWebPushNotificationsOfflineBbApi", "WAWebRegistration", "WAWebSchemaVersions", "WAWebSignalStorage", "WAWebSocketModel", "WAWebStartBackend", "WAWebUserPrefsGeneral", "WAWebUserPrefsIsLoggedIn", "WAWebUserPrefsMultiDevice", "WAWebWamOfflineResumeReporter", "WAWebWorkerStorage", "asyncToGeneratorRuntime", "err", "gkx", "requireDeferred"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[storage] send schema versions to fts worker"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[socket] launchSocket for registration"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[socket] launchSocket for login"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[socket] storageInitializationError triggered logout: ", "."]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[socket] entered legacy launchSocket flow"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[socket] entered eager launchSocket flow"]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[socket] start launchSocket flow with mutexComplete promise ", ""]);
        o = function () {
            return a
        };
        return a
    }

    function p() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["reconnect_socket triggered, resetting socket loop"]);
        p = function () {
            return a
        };
        return a
    }
    var q = c("requireDeferred")("WAWebSetFrontendHandlerApi").__setRef("WAWebLaunchSocket"),
        r = c("requireDeferred")("WAWebSetWorkerSafeHandlerApi").__setRef("WAWebLaunchSocket");
    d("WAWebCmd").Cmd.on("md_refresh_qr", function () {
        d("WAComms").stopComms(), s()
    });
    d("WAWebCmd").Cmd.on("reconnect_socket", function () {
        d("WALogger").LOG(p()), d("WAComms").closeSocket()
    });

    function s() {
        return t.apply(this, arguments)
    }

    function t() {
        t = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = d("WAWebCommsConfig").getCommsConfig(void 0);
            d("WAComms").startComms(c("WAWebCommsHandleStanza"), a, function (a) {
                return (h || (h = b("Promise"))).resolve(d("WAGzip").inflate(a))
            });
            yield d("WAComms").waitForConnection();
            return d("WAComms").startHandlingRequests()
        });
        return t.apply(this, arguments)
    }

    function a(a) {
        d("WALogger").LOG(o(), a == null ? "NULL" : "not null");
        c("gkx")("26258") || (a != null ? d("WALogger").LOG(n()).sendLogs("intern-launchSocket-eager", {
            sampling: 0
        }) : d("WALogger").LOG(m()).sendLogs("intern-launchSocket-legacy", {
            sampling: 0
        }));
        d("WAWebPageLoadLogging").startPageLoadQplMeasure("launchSocket");
        var e = d("WAWebBridgeInitialization").makeBridge();
        d("WAWebBackendApi").setApi(e);
        void q.load().then(function (a) {
            a = a.setFrontendHandlers;
            return a(e)
        });
        void r.load().then(function (a) {
            a = a.setWorkerSafeHandlers;
            return a(e)
        });
        d("WAWebFtsClient").ftsClient.initialize();
        return d("WAWebDbRolloutUtil").loadSchemaVersions().then(function () {
            return u()
        }).then(function () {
            return d("WAWebCryptoEncKeyHelper").initEncSalt()
        }).then(function () {
            return d("WAWebCryptoEncKeyHelper").initEncSaltForInvoker()
        }).then(function () {
            return d("WAWebSignalStorage").initialize()
        }).then(function () {
            return (h || (h = b("Promise"))).all([d("WAWebModelStorage").initialize(), a]).then(function () {
                return d("WAWebModelStorageInit").migrateMDUserPrefsToIndexedDB()
            })
        }).then(function () {
            return (h || (h = b("Promise"))).all([d("WAWebUserPrefsGeneral").getLogoutReason(), d("WAWebWorkerStorage").initialize(), d("WAWebUserPrefsGeneral").setAppVersionBase(d("WAWebBuildConstants").VERSION_BASE)])
        })["catch"](function (a) {
            d("WALogger").ERROR(l(), (a == null ? void 0 : a.message) || (a == null ? void 0 : a.name)).tags("launch-socket"), d("WAWebCmd").Cmd.storageInitializationError()
        }).then(function (a) {
            a = a == null ? void 0 : a[0];
            a && d("WAWebSocketModel").Socket.logout(a.reason);
            if (c("WAWebBrokerGlobalAppState").isLogoutInProgress) throw c("err")("aborting launchSocket due to logout");
            if (d("WAWebUserPrefsMultiDevice").isRegistered()) {
                d("WALogger").LOG(k());
                d("WAWebUserPrefsIsLoggedIn").setIsConnectedAsRegistered(!0);
                d("WAWebCmd").Cmd.initialLoadReady();
                return d("WAWebModelStorage").initialize()["catch"](function () {
                    return d("WAWebCmd").Cmd.storageInitializationError()
                }).then(function () {
                    return (h || (h = b("Promise"))).all([d("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(), d("WAWebEventSamplingCache").updateEventSamplingFromStorage()])
                }).then(function () {
                    d("WAWebCmd").Cmd.abPropsLoaded(), d("WAWebInitFromStorage").restoreImportantMetaData()
                }).then(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var a = function () {
                        d("WAWebPageLoadLogging").startPageLoadQplMeasure("lidCacheWarmup");
                        var a = d("WAWebApiContact").warmUpAllLidPnMappings();
                        d("WAWebPageLoadLogging").endPageLoadQplMeasure("lidCacheWarmup");
                        return a
                    };
                    yield(h || (h = b("Promise"))).all([d("WAWebInitFromStorage").restoreBlocklist(), a()])
                })).then(function () {
                    d("WAWebPushNotificationsOfflineBbApi").setStartCommsT(), d("WAWebPageLoadLogging").endPageLoadQplMeasure("launchSocket"), d("WAWebStartBackend").startBackend()
                })
            }
            d("WALogger").LOG(j());
            d("WAWebWamOfflineResumeReporter").OfflineResumeReporter.setIsInitialSync();
            return (h || (h = b("Promise"))).all([d("WAWebRegistration").refreshNoiseCredentials(), d("WAWebRegistration").refreshSignalCredentials()]).then(function () {
                d("WAWebPageLoadLogging").endPageLoadQplMeasure("launchSocket"), s()
            })
        })
    }

    function u() {
        d("WALogger").LOG(i()), void d("WAWebInvocationInterface").get().setSchemaVersions(d("WAWebSchemaVersions").getSchemaVersions())
    }
    g.launchSocket = a
}), 98);
__d("WAWebAppMutex", ["Promise", "WACustomError", "WAFilteredCatch", "WALogger", "WAPromiseTimeout", "WAResolvable", "WAWebABProps", "WAWebAlarm", "WAWebCmd", "WAWebEventsWaitForEvent", "WAWebL10N", "WAWebLaunchSocket", "WAWebPageLoadLogging", "WAWebSocketModel", "WAWebUserPrefsKeys", "WAWebUserPrefsStore", "WAWebUserPrefsTabMutex", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[mutex] setMutexBlockStrategy: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[mutex] setPingTimeoutSeconds: ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[mutex] getPingTimeoutSeconds: missing value in userprefs, using default"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] _pingForOtherLocalSession mutex timeout after ", "ms"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] _pingForOtherLocalSession stale mutex"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[mutex] shut down an existing instance of WA Web"]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] takeoverLocal timeout"]);
        o = function () {
            return a
        };
        return a
    }

    function p() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] AppMutex setting shouldLaunchSocket: ", ""]);
        p = function () {
            return a
        };
        return a
    }
    var q = 10 * 60 * 1e3,
        r = {
            INIT: "init",
            PING: "ping",
            PONG: "pong",
            TAKEOVER: "local-takeover"
        };
    a = function () {
        function a() {
            var a = this;
            this.$3 = !1;
            this.$4 = !0;
            this.$5 = new(d("WAResolvable").Resolvable)();
            this.$7 = function () {
                a.$8();
                var b = Date.now();
                d("WAWebUserPrefsTabMutex").setMutex(a.$1 = r.INIT + "_" + b);
                a.$2 = c("WAWebAlarm").setLocalTimeout(a.$7, b + q)
            };
            d("WAWebCmd").Cmd.on("ab_props_loaded", v);
            d("WAWebCmd").Cmd.on("on_ab_props_update", v)
        }
        var e = a.prototype;
        e.waitForCompletion = function () {
            return this.$5.promise
        };
        e.setShouldLaunchSocket = function (a) {
            d("WALogger").DEV(p(), a), this.$4 = a
        };
        e.init = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a === void 0 && (a = 0);
                this.$3 || (d("WAWebPageLoadLogging").startPageLoadQplMeasure("acquire_mutex"), this.$3 = !0);
                a = a + 1;
                if (a > 3) return !0;
                var b = d("WAWebUserPrefsTabMutex").getNoTakeover();
                d("WAWebUserPrefsTabMutex").setNoTakeover();
                var e = (yield this.$6());
                if (e) {
                    this.$7();
                    d("WAWebPageLoadLogging").endPageLoadQplMeasure("acquire_mutex");
                    this.$4 && (yield d("WAWebLaunchSocket").launchSocket(null));
                    this.$5.resolve();
                    void c("WAWebL10N").checkForLocaleMismatchBetweenCookieAndUserPref();
                    return !1
                }
                if (b) return !0;
                throw a
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        e.takeoverLocal = function (a) {
            var b = this;
            if (d("WAWebUserPrefsTabMutex").getMutex()) {
                d("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_takeover");
                d("WAWebUserPrefsTabMutex").setMutex(r.TAKEOVER);
                return d("WAPromiseTimeout").promiseTimeout(c("WAWebEventsWaitForEvent")(window, "storage", d("WAWebUserPrefsTabMutex").takeoverFilter), 3e4, "takeoverLocalTimeout").then(function (c) {
                    d("WAWebSocketModel").Socket.mustExitLoop = !1;
                    d("WAWebUserPrefsTabMutex").removeMutex();
                    d("WAWebPageLoadLogging").endPageLoadQplMeasure("mutex_takeover");
                    return b.init(a)
                })["catch"](d("WAFilteredCatch").filteredCatch(d("WACustomError").TimeoutError, function () {
                    d("WALogger").WARN(o());
                    d("WAWebSocketModel").Socket.mustExitLoop = !1;
                    d("WAWebUserPrefsTabMutex").removeMutex();
                    d("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                        mutex_takeover_timeout: !0
                    });
                    d("WAWebPageLoadLogging").endPageLoadQplMeasure("mutex_takeover");
                    return b.init(a)
                }))["finally"](function () {
                    d("WALogger").ERROR(n())
                })
            }
            return this.init(a)
        };
        e.unloadMutex = function () {
            var a = d("WAWebUserPrefsTabMutex").getMutex();
            a && this.$1 && a.includes(this.$1) && d("WAWebUserPrefsTabMutex").removeMutex()
        };
        e.storagePong = function (a) {
            if (!d("WAWebUserPrefsTabMutex").mutexFilter(a)) return;
            a = d("WAWebUserPrefsTabMutex").parseMutex(a.newValue);
            if (!a) return;
            if (a === r.TAKEOVER) {
                this.$8();
                d("WAWebSocketModel").Socket.exitLoop();
                d("WAWebUserPrefsTabMutex").localTakeoverSuccess();
                return !0
            } else a.indexOf(r.PING) === 0 && d("WAWebUserPrefsTabMutex").setMutex(r.PONG + Math.random())
        };
        e.$8 = function () {
            this.$2 && c("WAWebAlarm").clearTimeout(this.$2)
        };
        e.$6 = function () {
            var a = d("WAWebUserPrefsTabMutex").getMutex();
            if (a) {
                d("WAWebPageLoadLogging").startPageLoadQplMeasure("mutex_ping");
                a += "";
                var e = t() * 1e3;
                if (a.indexOf("_") > 0) {
                    a = a.split(".");
                    a = parseInt(a[a.length - 1], 10);
                    if (Number.isFinite(a)) {
                        var f = Date.now() - q * 1.5;
                        a < f && (d("WALogger").LOG(m()), e = 1e3)
                    }
                }
                a = d("WAPromiseTimeout").promiseTimeout(c("WAWebEventsWaitForEvent")(window, "storage", d("WAWebUserPrefsTabMutex").mutexFilter), e, "waitForOtherLocalSessionTimeout").then(function () {
                    return !1
                })["catch"](d("WAFilteredCatch").filteredCatch(d("WACustomError").TimeoutError, function () {
                    d("WALogger").WARN(l(), e);
                    d("WAWebPageLoadLogging").addPageLoadQplAnnotation({
                        mutex_ping_timeout: !0
                    });
                    return !0
                }));
                a["finally"](function () {
                    return d("WAWebPageLoadLogging").endPageLoadQplMeasure("mutex_ping")
                });
                d("WAWebUserPrefsTabMutex").setMutex(r.PING + Math.random());
                return a
            }
            return (h || (h = b("Promise"))).resolve(!0)
        };
        return a
    }();
    var s = 10;

    function t() {
        var a = c("WAWebUserPrefsStore").get(d("WAWebUserPrefsKeys").KEYS.MUTEX_PING_TIMEOUT_SECONDS);
        if (typeof a === "number") return a;
        d("WALogger").DEV(k());
        return s
    }

    function u(a) {
        d("WALogger").DEV(j(), a), c("WAWebUserPrefsStore").set(d("WAWebUserPrefsKeys").KEYS.MUTEX_PING_TIMEOUT_SECONDS, a)
    }

    function v() {
        var a = d("WAWebABProps").getABPropConfigValue("web_mutex_ping_timeout_seconds");
        a != null && u(a);
        a = d("WAWebABProps").getABPropConfigValue("web_mutex_block_strategy");
        d("WALogger").LOG(i(), a);
        c("WAWebUserPrefsStore").set(d("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy, a)
    }
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebClientExpiredDialog.react", ["fbt", "WAWebModal.react", "WAWebSpinner.react", "WAWebUpdater", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect;

    function a() {
        l(function () {
            d("WAWebUpdater").Updater.restart(!0).then(function () {
                d("WAWebUpdater").Updater.restart()
            })
        }, []);
        return k.jsxs(d("WAWebModal.react").Modal, {
            cover: !0,
            title: h._("__JHASH__bWpZgxUFgC9__JHASH__"),
            children: [k.jsx("div", {
                children: h._("__JHASH__L10niJOvrf4__JHASH__")
            }), k.jsx("div", {
                className: "x78zum5 xl56j7k x11fxgd9 x5th0yj x4n8cb0 x8zvzrc",
                children: k.jsx(d("WAWebSpinner.react").Spinner, {
                    stroke: 4,
                    size: 40,
                    color: "highlight"
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebConflict.react", ["WAWebConfirmPopup.react", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react");

    function a(a) {
        var b = a.cancelText,
            c = a.children,
            e = a.okText,
            f = a.onCancel;
        a = a.onOK;
        return i.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            cover: !0,
            children: c,
            cancelText: b,
            onCancel: f,
            okText: e,
            onOK: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebUimUieItem.react", ["react"], (function (a, b, c, d, e, f, g) {
    var h, i;
    b = i || d("react");
    var j = h || (h = c("react")),
        k = b.useImperativeHandle,
        l = b.useRef;
    e = j.forwardRef(a);

    function a(a, b) {
        a = a.children;
        var c = l();
        k(b, function () {
            return {
                getElement: function () {
                    return c.current
                }
            }
        });
        return j.jsx("div", {
            ref: c,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = e;
    g["default"] = d
}), 98);
__d("WAWebContextMenuManager.react", ["WAWebCmd", "WAWebDropdown.react", "WAWebL10N", "WAWebUimContext", "WAWebUimUieItem.react", "WAWebVelocityTransitionGroup", "react", "useWAWebListener"], (function (a, b, c, d, e, f, g) {
    var h, i;
    b = i || d("react");
    var j = h || (h = c("react")),
        k = b.cloneElement,
        l = b.useCallback,
        m = b.useImperativeHandle,
        n = b.useLayoutEffect,
        o = b.useRef,
        p = b.useState,
        q = {
            MENU: "MENU",
            TOOLTIP: "TOOLTIP"
        };
    e = j.forwardRef(a);

    function a(a, b) {
        a = a.type;
        var e = o(null),
            f = o(null),
            g = p(null),
            h = g[0],
            i = g[1];
        g = p(null);
        var s = g[0],
            t = g[1];
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, a === q.MENU ? "open_context_menu" : "open_tooltip", function (a, b) {
            var e, g;
            h == null ? void 0 : h.uim.pop();
            f.current = b;
            b = a.menuOptions;
            a = a.uim;
            var j = b.event;
            j == null ? void 0 : j.stopPropagation();
            var k = j == null ? 0 : 10;
            t(null);
            e = typeof (j == null ? void 0 : j.clientX) === "number" ? j.clientX : (e = b.offsetX) != null ? e : 0;
            j = typeof (j == null ? void 0 : j.clientY) === "number" ? j.clientY : (j = b.offsetY) != null ? j : 0;
            i(babelHelpers["extends"]({}, b, {
                type: (g = b.type) != null ? g : d("WAWebDropdown.react").MenuType.Dropdown,
                originX: e,
                originY: j,
                offsetX: (g = b.offsetX) != null ? g : k,
                offsetY: (e = b.offsetY) != null ? e : k,
                dirX: (j = b.dirX) != null ? j : c("WAWebL10N").isRTL() ? d("WAWebDropdown.react").DirX.LEFT : d("WAWebDropdown.react").DirX.RIGHT,
                dirY: (g = b.dirY) != null ? g : d("WAWebDropdown.react").DirY.BOTTOM,
                key: Math.random(),
                uim: a
            }))
        });
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, a === q.MENU ? "close_context_menu" : "close_tooltip", function (a) {
            (a == null || (h == null ? void 0 : h.uim) === a) && (i(null), t(null))
        });
        n(function () {
            var a = e.current;
            if (h == null || a == null) return;
            if (s != null) return;
            var b = a.clientWidth;
            a = a.clientHeight + 10;
            t(r({
                anchor: h.anchor,
                temporaryMenuPosition: h,
                menuWidth: b,
                menuHeight: a
            }))
        }, [h, s]);
        m(b, function () {
            return {
                isOpen: function () {
                    return h != null
                }
            }
        });
        g = l(function (a) {
            if (a == null) return;
            f.current == null ? void 0 : f.current(a.getElement());
            f.current = null
        }, []);
        var u;
        if (h == null) u = j.jsx(c("WAWebVelocityTransitionGroup"), {
            transitionName: "dropdown"
        });
        else {
            var v;
            a = h.menu;
            b = h.key;
            var w = h.type,
                x = h.autoFocus,
                y = h.findFirstItem,
                z = h.horizontal,
                A = h.theme,
                B = h.tooltipColorScheme;
            v = (v = s) != null ? v : h;
            var C = v.originX,
                D = v.originY,
                E = v.offsetX,
                F = v.offsetY,
                G = v.dirX;
            v = v.dirY;
            a = Array.isArray(a) ? a.map(function (a) {
                return k(a, {
                    theme: A
                })
            }) : a;
            u = j.jsx(c("WAWebVelocityTransitionGroup"), {
                transitionName: w === d("WAWebDropdown.react").MenuType.Picker ? "dropdown-picker" : "dropdown",
                children: j.jsx(d("WAWebDropdown.react").Dropdown, {
                    ref: e,
                    origin: {
                        x: C + E,
                        y: D + F
                    },
                    type: w,
                    dirX: G,
                    dirY: v,
                    horizontal: z,
                    autoFocus: x,
                    findFirstItem: y,
                    isTemporaryRender: s == null,
                    tooltipColorScheme: B,
                    children: j.jsx(c("WAWebUimUieItem.react"), {
                        ref: g,
                        children: a
                    })
                }, "key-" + b)
            })
        }
        return j.jsx(c("WAWebUimContext").Consumer, {
            children: function (a) {
                return j.jsx(c("WAWebUimContext").Provider, {
                    value: (h == null ? void 0 : h.uim) || a,
                    children: u
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;

    function r(a) {
        var b = a.anchor,
            c = a.temporaryMenuPosition,
            e = a.menuWidth;
        a = a.menuHeight;
        var f = window.innerWidth,
            g = window.innerHeight,
            h = c.originX,
            i = c.originY,
            j = c.offsetX,
            k = c.offsetY,
            l = c.dirX;
        c = c.dirY;
        var m = h;
        h = h;
        var n = i;
        i = i;
        var o = 0;
        if (b && b instanceof HTMLElement) {
            var p = b.getBoundingClientRect();
            m = p.left;
            h = p.right;
            i = p.bottom;
            n = p.top;
            o = b.offsetWidth
        }
        p = l;
        p === d("WAWebDropdown.react").DirX.RIGHT && m + e > f && h - e > 0 ? p = d("WAWebDropdown.react").DirX.LEFT : p === d("WAWebDropdown.react").DirX.LEFT && h - e < 0 && m + e < f ? p = d("WAWebDropdown.react").DirX.RIGHT : p === d("WAWebDropdown.react").DirX.CENTER && (h + e / 2 > f ? p = d("WAWebDropdown.react").DirX.LEFT : m - e / 2 < 0 && (p = d("WAWebDropdown.react").DirX.RIGHT));
        l = c;
        l === d("WAWebDropdown.react").DirY.BOTTOM && i + a + k > g && n - a > 0 ? l = d("WAWebDropdown.react").DirY.TOP : l === d("WAWebDropdown.react").DirY.TOP && n - a < 0 && i + a + k < g && (l = d("WAWebDropdown.react").DirY.BOTTOM);
        l === d("WAWebDropdown.react").DirY.TOP ? f = n : f = i;
        e = j;
        c = k;
        b || (p === d("WAWebDropdown.react").DirX.LEFT && (e = 0), l === d("WAWebDropdown.react").DirY.TOP && (c = 0));
        return {
            dirX: p,
            dirY: l,
            originX: s(p, m, h, o),
            originY: f,
            offsetX: e,
            offsetY: c
        }
    }

    function s(a, b, c, e) {
        switch (a) {
            case d("WAWebDropdown.react").DirX.RIGHT:
                return b;
            case d("WAWebDropdown.react").DirX.LEFT:
                return c;
            case d("WAWebDropdown.react").DirX.CENTER:
                return b + e / 2
        }
    }
    g.Type = q;
    g.ContextMenuManager = b
}), 98);
__d("WAWebDeepLinkClickWamEvent", ["WAWebWamCodegenUtils"], (function (a, b, c, d, e, f, g) {
    b = (a = d("WAWebWamCodegenUtils")).defineEvents({
        DeepLinkClick: [1156, {
                deepLinkHasPhoneNumber: [2, a.TYPES.BOOLEAN],
                deepLinkHasText: [1, a.TYPES.BOOLEAN],
                deepLinkSessionId: [3, a.TYPES.STRING]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        DeepLinkClick: []
    });
    g.DeepLinkClickWamEvent = b
}), 98);
__d("WAWebDeprecated.react", ["fbt", "WAWebConfirmPopup.react", "WAWebLogoutReasonConstants", "WAWebSocketModel", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = function () {
            d("WAWebSocketModel").Socket.logout(d("WAWebLogoutReasonConstants").LogoutReason.UserInitiated)
        };

    function a() {
        return j.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            cover: !0,
            cancelText: h._("__JHASH__3n1bF_cZdZK__JHASH__"),
            onCancel: k,
            okText: h._("__JHASH___sw1w0g68lI__JHASH__"),
            children: h._("__JHASH__xp5_DV0xD6g__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebNotificationIcon", ["WAAbortError", "WALogger", "WAWebAssetLoader", "WAWebAssetLoaderSingleton", "WAWebFbtCommon", "WAWebL10N", "WAWebPwaDocumentMetadataUtils", "WAWebUA", "justknobx"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Error updating favicon: ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[favicon] update aborted: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[favicon] updated: ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[favicon] skipped: ", " because of newer favicon: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function a(a) {
        var b = [];
        a > 0 && b.push("(" + c("WAWebL10N").n(a) + ")");
        b.push(c("WAWebFbtCommon")("WhatsApp").toString());
        b = b.join(" ");
        d("WAWebPwaDocumentMetadataUtils").setDocumentTitle(b);
        d("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa() && d("WAWebPwaDocumentMetadataUtils").setAppBadge(a);
        c("justknobx")._("2268") && m(a)
    }
    var l;

    function m(a) {
        if (d("WAWebUA").UA.isSafari) return;
        var b;
        a === -1 ? b = "favicon-error2" : a === 0 ? b = "favicon" : a < 10 ? b = "f0" + a : a < 100 ? b = "f" + a : b = "f00";
        l = b;
        (a = document.getElementById("favicon")) == null ? void 0 : a.remove();
        a = {
            id: b,
            low: {
                "default": "/favicon/1x/" + b + "/"
            },
            high: {
                "default": "/favicon/2x/" + b + "/"
            }
        };
        void d("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(a, d("WAWebAssetLoader").LOAD_PRIORITY.NOTIFICATION_ICON, !1).then(function (a) {
            if (l !== b) {
                d("WALogger").LOG(k(), b, l);
                return
            }
            var c = document.createElement("link");
            c.setAttribute("id", "favicon");
            c.setAttribute("rel", "icon");
            c.setAttribute("type", "image/png");
            c.setAttribute("href", a);
            a = document.getElementsByTagName("head");
            (a == null ? void 0 : a[0]) && a[0].appendChild(c);
            d("WALogger").LOG(j(), b)
        })["catch"](d("WAAbortError").catchAbort(function () {
            d("WALogger").LOG(i(), b)
        }))["catch"](function (a) {
            d("WALogger").ERROR(h(), a).sendLogs("favicon-fetch-error")
        })
    }
    g.setTitleAndIcon = a
}), 98);
__d("WAWebFavicon.react", ["WAWebNotificationIcon", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = (h || d("react")).useEffect;

    function a(a) {
        a = a.children;
        i(function () {
            d("WAWebNotificationIcon").setTitleAndIcon(0)
        }, []);
        return a
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a) {
        a = a.children;
        i(function () {
            d("WAWebNotificationIcon").setTitleAndIcon(-1)
        }, []);
        return a
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.DefaultFavicon = a;
    g.ErrorFavicon = b
}), 98);
__d("WAWebDownloadOutlineIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "download-outline";

    function a(a) {
        var b = a.iconXstyle,
            e = a.height,
            f = a.width,
            g = a.viewBox;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["iconXstyle", "height", "width", "viewBox"]);
        var h;
        if (g) {
            var l = g.x;
            l = l === void 0 ? 0 : l;
            var m = g.y;
            m = m === void 0 ? 0 : m;
            var n = g.width;
            n = n === void 0 ? 0 : n;
            g = g.height;
            g = g === void 0 ? 0 : g;
            h = [l, m, n, g].join(" ")
        }
        l = 24;
        m = 24;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 24 24",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.625 20.625C20.625 21.2463 20.1213 21.75 19.5 21.75L4.5 21.75C3.87868 21.75 3.375 21.2463 3.375 20.625C3.375 20.0037 3.87868 19.5 4.5 19.5H19.5C20.1213 19.5 20.625 20.0037 20.625 20.625Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.125 3C13.125 2.37868 12.6213 1.875 12 1.875C11.3787 1.875 10.875 2.37868 10.875 3V14.3093L4.79045 8.27174C4.34942 7.8341 3.63711 7.83686 3.19948 8.2779C2.76184 8.71894 2.7646 9.43125 3.20564 9.86888L11.2056 17.8071C11.6443 18.2424 12.3518 18.2424 12.7905 17.8071L20.7905 9.86888C21.2315 9.43125 21.2343 8.71894 20.7966 8.2779C20.359 7.83687 19.6467 7.83411 19.2056 8.27174L13.125 14.3054L13.125 3Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.DownloadOutlineIcon = a
}), 98);
__d("WAWebNativeAppDownloadButton.react", ["fbt", "WAWebDesktopUpsellPlatformAwareHooks", "WAWebDesktopUpsellStoreOpener", "WAWebDesktopUpsellUtils", "WAWebDownloadOutlineIcon", "WAWebFlex.react", "WAWebUISpacing", "WAWebUnstyledButton.react", "WAWebWamEnumWebcNativeUpsellCtaSourceType", "asyncToGeneratorRuntime", "react", "useWAWebDesktopUpsellWamImpression"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            downloadButton: {
                color: "x1hql6x6",
                fontWeight: "xk50ysn",
                borderTopWidth: "x178xt8z",
                borderEndWidth: "xm81vs4",
                borderBottomWidth: "xso031l",
                borderStartWidth: "xy80clv",
                borderTopStyle: "x13fuv20",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderStartStyle: "x26u7qi",
                borderTopColor: "xsrozwr",
                borderEndColor: "xsu93b8",
                borderBottomColor: "xmigjs0",
                borderStartColor: "x1b1j5rn",
                borderTopStartRadius: "x1z11no5",
                borderTopEndRadius: "xjy5m1g",
                borderBottomEndRadius: "x1mnwbp6",
                borderBottomStartRadius: "x4pb5v6",
                fontSize: "x1jchvi3",
                lineHeight: "x1d3mw78",
                height: "xsdox4t",
                whiteSpace: "x126k92a",
                backgroundColor: "xy7xkci",
                ":hover_color": "xr8f6zs",
                ":hover_backgroundColor": "x10j0mou",
                $$css: !0
            }
        };

    function a() {
        var a = d("WAWebDesktopUpsellUtils").getUserDesktopOs();
        a = d("WAWebDesktopUpsellPlatformAwareHooks").useWAWebDesktopUpsellPlatformAwareOsVersionCheck(a) === !0;
        var e = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                d("WAWebDesktopUpsellStoreOpener").openExternalWhatsAppDesktopDownloadUrl(d("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER)
            });
            return function () {
                return a.apply(this, arguments)
            }
        }();
        d("useWAWebDesktopUpsellWamImpression").useWAWebDesktopUpsellWamImpression({
            source: d("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER,
            isCtaVisible: a
        });
        return a !== !0 ? null : j.jsx(c("WAWebUnstyledButton.react"), {
            xstyle: [k.downloadButton, d("WAWebUISpacing").uiPadding.vert10, d("WAWebUISpacing").uiPadding.horiz24],
            onClick: e,
            children: j.jsxs(d("WAWebFlex.react").FlexRow, {
                align: "center",
                children: [j.jsx(d("WAWebFlex.react").FlexItem, {
                    children: h._("__JHASH__kMeNf2ZLsCO__JHASH__")
                }), j.jsx(d("WAWebFlex.react").FlexItem, {
                    xstyle: d("WAWebUISpacing").uiPadding.start8,
                    children: j.jsx(d("WAWebDownloadOutlineIcon").DownloadOutlineIcon, {
                        width: 16,
                        height: 16
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebWaLogoIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "wa-logo";

    function a(a) {
        var b = a.iconXstyle,
            e = a.height,
            f = a.width,
            g = a.viewBox;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["iconXstyle", "height", "width", "viewBox"]);
        var h;
        if (g) {
            var l = g.x;
            l = l === void 0 ? 0 : l;
            var m = g.y;
            m = m === void 0 ? 0 : m;
            var n = g.width;
            n = n === void 0 ? 0 : n;
            g = g.height;
            g = g === void 0 ? 0 : g;
            h = [l, m, n, g].join(" ")
        }
        l = 30;
        m = 31;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 31 30",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M30.3139 14.3245C30.174 10.4932 28.5594 6.864 25.8073 4.1948C23.0552 1.52559 19.3784 0.0227244 15.5446 4.10118e-06H15.4722C12.8904 -0.00191309 10.3527 0.668375 8.10857 1.94491C5.86449 3.22145 3.99142 5.06026 2.67367 7.28039C1.35592 9.50053 0.6389 12.0255 0.593155 14.6068C0.547411 17.1882 1.17452 19.737 2.41278 22.0024L1.09794 29.8703C1.0958 29.8865 1.09712 29.9029 1.10182 29.9185C1.10651 29.9341 1.11448 29.9485 1.12518 29.9607C1.13588 29.973 1.14907 29.9828 1.16387 29.9896C1.17867 29.9964 1.19475 29.9999 1.21103 30H1.23365L9.01561 28.269C11.0263 29.2344 13.2282 29.7353 15.4586 29.7346C15.6004 29.7346 15.7421 29.7346 15.8838 29.7346C17.8458 29.6786 19.7773 29.2346 21.5667 28.4282C23.3562 27.6218 24.9682 26.469 26.3098 25.0363C27.6514 23.6036 28.696 21.9194 29.3832 20.0809C30.0704 18.2423 30.3867 16.2859 30.3139 14.3245ZM15.8099 27.1487C15.6923 27.1487 15.5747 27.1487 15.4586 27.1487C13.4874 27.1511 11.5444 26.6795 9.79366 25.7735L9.39559 25.5654L4.11815 26.8124L5.09221 21.4732L4.86604 21.0902C3.78579 19.2484 3.20393 17.157 3.17778 15.0219C3.15163 12.8869 3.68208 10.7819 4.71689 8.91419C5.75171 7.0465 7.25518 5.48059 9.07924 4.37067C10.9033 3.26076 12.985 2.64514 15.1194 2.58444C15.238 2.58444 15.3571 2.58444 15.4767 2.58444C18.6992 2.59399 21.7889 3.86908 24.0802 6.13498C26.3715 8.40087 27.681 11.4762 27.7265 14.6984C27.7719 17.9205 26.5498 21.0316 24.3234 23.3612C22.0969 25.6909 19.0444 27.0527 15.8235 27.1532L15.8099 27.1487Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M10.2894 7.69007C10.1057 7.69366 9.92456 7.73407 9.75673 7.80892C9.5889 7.88377 9.43779 7.99154 9.31236 8.12584C8.95801 8.48923 7.96736 9.36377 7.91006 11.2003C7.85277 13.0369 9.13594 14.8538 9.31537 15.1086C9.49481 15.3635 11.7686 19.3306 15.5141 20.9395C17.7156 21.8879 18.6806 22.0507 19.3063 22.0507C19.5642 22.0507 19.7587 22.0236 19.9622 22.0115C20.6483 21.9693 22.1969 21.1762 22.5346 20.3137C22.8724 19.4512 22.895 18.6973 22.806 18.5465C22.7171 18.3957 22.4728 18.2872 22.1049 18.0942C21.737 17.9012 19.9321 16.9361 19.5928 16.8004C19.467 16.7419 19.3316 16.7066 19.1932 16.6964C19.1031 16.7011 19.0155 16.7278 18.938 16.774C18.8605 16.8203 18.7954 16.8847 18.7484 16.9618C18.4469 17.3372 17.7548 18.153 17.5225 18.3882C17.4718 18.4466 17.4093 18.4938 17.3392 18.5265C17.2691 18.5592 17.1928 18.5768 17.1154 18.5782C16.9728 18.5719 16.8333 18.5344 16.7068 18.4681C15.6135 18.0038 14.6167 17.339 13.768 16.5079C12.975 15.7263 12.3022 14.8315 11.7716 13.8526C11.5666 13.4726 11.7716 13.2766 11.9586 13.0987C12.1456 12.9208 12.3461 12.675 12.5391 12.4624C12.6975 12.2808 12.8295 12.0777 12.9312 11.8593C12.9838 11.7578 13.0104 11.6449 13.0085 11.5307C13.0067 11.4165 12.9765 11.3045 12.9206 11.2048C12.8317 11.0149 12.1667 9.14664 11.8546 8.39725C11.6013 7.75642 11.2997 7.73531 11.0358 7.7157C10.8187 7.70062 10.5699 7.69309 10.3211 7.68555H10.2894",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.WaLogoIcon = a
}), 98);
__d("WAWebWaWordmarkIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "wa-wordmark";

    function a(a) {
        var b = a.iconXstyle,
            e = a.height,
            f = a.width,
            g = a.viewBox;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["iconXstyle", "height", "width", "viewBox"]);
        var h;
        if (g) {
            var l = g.x;
            l = l === void 0 ? 0 : l;
            var m = g.y;
            m = m === void 0 ? 0 : m;
            var n = g.width;
            n = n === void 0 ? 0 : n;
            g = g.height;
            g = g === void 0 ? 0 : g;
            h = [l, m, n, g].join(" ")
        }
        l = 21;
        m = 103;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 103 21",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M13.0691 16.3425L10.3885 5.57555H10.3439L7.70791 16.3425H4.18613L0 0.523438H2.98136L5.83876 12.6207H5.88836L8.97381 0.523438H11.8015L14.7994 12.6207H14.8176L17.8601 0.523438H20.7753L16.5231 16.3425H13.0674H13.0691Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M34.6722 6.57208C34.9945 6.08455 35.4095 5.69288 35.9117 5.3987C36.4142 5.10453 36.9777 4.893 37.6075 4.7674C38.2337 4.64178 38.6865 4.57898 39.3212 4.57898C39.8962 4.57898 40.4797 4.6203 41.0697 4.70128C41.6597 4.78225 42.0347 4.94093 42.5225 5.17725C43.0082 5.41358 43.4082 5.74245 43.7172 6.16388C44.028 6.58363 44.1832 7.14058 44.1832 7.83633V13.7958C44.1832 14.3147 44.213 14.8088 44.2725 15.2798C44.3302 15.7541 44.4345 16.1078 44.5832 16.3425H41.559C41.4995 16.1656 41.4515 15.9838 41.415 15.8004C41.3787 15.617 41.3522 15.4269 41.3375 15.2352C40.835 15.7525 40.2435 16.1144 39.5642 16.3226C38.8865 16.5292 38.1925 16.6317 37.4835 16.6317C36.9365 16.6317 36.5927 16.5656 36.12 16.4317C35.6475 16.2978 35.2342 16.0913 34.8805 15.8103C34.5252 15.5294 34.2492 15.1757 34.0492 14.746C33.8492 14.318 33.7502 13.809 33.7502 13.2173C33.7502 12.5678 33.8642 12.0324 34.0922 11.611C34.322 11.1895 34.6162 10.8541 34.978 10.6012C35.34 10.3517 35.7547 10.1616 36.2192 10.0377C36.6835 9.91205 36.9877 9.8129 37.4602 9.73853C37.933 9.6658 38.3975 9.6063 38.8552 9.56003C39.313 9.51708 39.8847 9.45095 40.2385 9.36173C40.5937 9.27413 40.873 9.14523 41.0797 8.97335C41.2862 8.80313 41.382 8.55688 41.3672 8.23133C41.3672 7.89253 41.311 7.62315 41.2002 7.42318C41.0895 7.2232 40.9425 7.06785 40.7572 6.95713C40.5722 6.8464 40.1922 6.7737 39.9492 6.73568C39.7047 6.69933 39.4435 6.68115 39.1625 6.68115C38.5412 6.68115 37.9165 6.81335 37.5627 7.07943C37.2075 7.3455 37.001 7.7884 36.9415 8.4098H34.1137C34.1585 7.67108 34.3417 7.05795 34.6675 6.57043L34.6722 6.57208ZM40.7062 11.0144C40.5062 11.0805 40.293 11.1367 40.0632 11.1813C39.8352 11.2243 39.5955 11.2623 39.3427 11.292C39.0932 11.3218 38.8402 11.3598 38.5907 11.4027C38.3545 11.4474 37.9562 11.5069 37.728 11.5796C37.5 11.6539 37.3 11.7531 37.1297 11.8787C36.9595 12.0043 36.8225 12.1646 36.72 12.3547C36.6175 12.5464 36.5645 12.791 36.5645 13.0868C36.5645 13.3826 36.6175 13.6024 36.72 13.7941C36.824 13.9858 36.9645 14.1379 37.1415 14.2486C37.3182 14.3593 37.5247 14.437 37.7612 14.4799C37.9975 14.5246 38.242 14.5477 38.4915 14.5477C39.113 14.5477 39.9227 14.4436 40.2615 14.237C40.6002 14.0304 40.8515 13.7825 41.0152 13.495C41.1772 13.2074 41.278 12.9166 41.3142 12.6191C41.3522 12.3249 41.3705 12.0886 41.3705 11.9101V10.7367C41.2367 10.8557 40.906 10.9466 40.7077 11.0127L40.7062 11.0144Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M73.5243 10.1154L71.26 3.52298H71.184L68.8473 10.1104L73.5258 10.1154H73.5243ZM72.7078 0.523438L78.621 16.3425H75.666L74.2365 12.1283H68.1383L66.6558 16.3425H63.7473L69.7265 0.523438H72.7078Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M86.1785 13.9709C86.527 13.766 86.808 13.495 87.0213 13.1628C87.2345 12.8306 87.3865 12.4439 87.4758 11.9993C87.5633 11.5564 87.6063 11.1053 87.6063 10.6491C87.6063 10.193 87.56 9.74018 87.4625 9.29563C87.3668 8.8527 87.208 8.45773 86.9865 8.11068C86.765 7.76363 86.4808 7.48268 86.1338 7.26948C85.7885 7.05463 85.362 6.94723 84.8595 6.94723C84.3573 6.94723 83.911 7.0563 83.5655 7.26948C83.217 7.48268 82.936 7.76033 82.7228 8.0991C82.508 8.4412 82.3575 8.83123 82.2683 9.27413C82.179 9.71703 82.136 10.1732 82.136 10.6475C82.136 11.1218 82.1823 11.5548 82.2798 11.9977C82.3758 12.4406 82.531 12.8273 82.7443 13.1611C82.959 13.4933 83.2433 13.7644 83.597 13.9693C83.9523 14.1759 84.3788 14.28 84.881 14.28C85.3835 14.28 85.8298 14.1759 86.175 13.9693L86.1785 13.9709ZM82.1048 4.88803V6.35063H82.1493C82.5328 5.73088 83.0185 5.2797 83.6103 4.99875C84.2003 4.7178 84.6845 4.57898 85.3935 4.57898C86.294 4.57898 86.9023 4.74755 87.5535 5.088C88.203 5.4268 88.7433 5.87795 89.1698 6.43985C89.5978 7.00175 89.915 7.65455 90.1233 8.39988C90.3283 9.14688 90.4323 9.92528 90.4323 10.7384C90.4323 11.5069 90.3283 12.2439 90.1233 12.9546C89.915 13.6635 89.6028 14.2899 89.1813 14.8369C88.7598 15.3839 88.236 15.8202 87.608 16.1442C86.98 16.4681 86.4115 16.6317 85.5703 16.6317C84.8613 16.6317 84.372 16.4863 83.7755 16.1987C83.1773 15.9111 82.6848 15.4881 82.3013 14.9262H82.2583V20.3551H79.4308V4.88968H82.1013L82.1048 4.88803Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M98.3832 13.9709C98.732 13.766 99.013 13.495 99.226 13.1628C99.4392 12.8306 99.5912 12.4439 99.6805 11.9993C99.7682 11.5564 99.8112 11.1053 99.8112 10.6491C99.8112 10.193 99.7648 9.74018 99.6673 9.29563C99.5715 8.8527 99.4127 8.45773 99.1915 8.11068C98.97 7.76363 98.6858 7.48268 98.3388 7.26948C97.9933 7.05463 97.5667 6.94723 97.0645 6.94723C96.562 6.94723 96.1158 7.0563 95.7705 7.26948C95.4218 7.48268 95.1407 7.76033 94.9275 8.0991C94.7127 8.4412 94.5622 8.83123 94.473 9.27413C94.384 9.71703 94.341 10.1732 94.341 10.6475C94.341 11.1218 94.3872 11.5548 94.4847 11.9977C94.5805 12.4406 94.736 12.8273 94.949 13.1611C95.164 13.4933 95.4483 13.7644 95.8018 13.9693C96.1573 14.1759 96.5835 14.28 97.086 14.28C97.5882 14.28 98.0345 14.1759 98.38 13.9693L98.3832 13.9709ZM94.3095 4.88803V6.35063H94.3542C94.7375 5.73088 95.2235 5.2797 95.815 4.99875C96.405 4.7178 96.8893 4.57898 97.5983 4.57898C98.499 4.57898 99.107 4.74755 99.7582 5.088C100.408 5.4268 100.948 5.87795 101.374 6.43985C101.802 7.00175 102.12 7.65455 102.328 8.39988C102.533 9.14688 102.637 9.92528 102.637 10.7384C102.637 11.5069 102.533 12.2439 102.328 12.9546C102.12 13.6635 101.808 14.2899 101.386 14.8369C100.965 15.3839 100.441 15.8202 99.8128 16.1442C99.1848 16.4681 98.6163 16.6317 97.775 16.6317C97.066 16.6317 96.577 16.4863 95.9802 16.1987C95.382 15.9111 94.8895 15.4881 94.5062 14.9262H94.4632V20.3551H91.6355V4.88968H94.3063L94.3095 4.88803Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M55.9548 13.5941C56.0953 13.8387 56.277 14.037 56.4985 14.1924C56.72 14.3477 56.9745 14.4618 57.2638 14.5361C57.5513 14.6105 58.138 14.6469 58.4485 14.6469C58.67 14.6469 58.9445 14.6204 59.189 14.5692C59.432 14.518 59.7758 14.437 59.9773 14.3263C60.1755 14.2155 60.3425 14.0684 60.4748 13.8833C60.6085 13.6983 60.673 13.4388 60.673 13.1578C60.673 12.7298 60.2368 12.2605 59.6088 12.0241C58.9825 11.7862 58.1065 11.5515 56.9828 11.3151C56.5265 11.211 56.0788 11.0904 55.644 10.9483C55.2095 10.8094 54.821 10.6243 54.4808 10.3946C54.1418 10.1649 53.8675 9.879 53.6625 9.5303C53.456 9.18323 53.352 8.7585 53.352 8.2561C53.352 7.51903 53.4958 6.9125 53.7848 6.43985C54.074 5.9672 54.4525 5.5937 54.9268 5.32103C55.3995 5.04833 55.93 4.85498 56.5218 4.74425C57.11 4.63518 57.5513 4.57898 58.1728 4.57898C58.794 4.57898 59.227 4.63683 59.8105 4.75583C60.3938 4.8748 60.916 5.07313 61.3723 5.35408C61.83 5.63503 62.21 6.00688 62.5125 6.47125C62.815 6.9373 62.9968 7.52398 63.0545 8.23298H60.3955C60.3525 7.6281 60.1228 7.1538 59.7095 6.9406C59.2948 6.72578 58.6635 6.59685 58.1015 6.59685C57.9248 6.59685 57.4373 6.63653 57.239 6.66463C57.0405 6.6927 56.8093 6.75055 56.639 6.82328C56.4688 6.89765 56.325 7.00505 56.206 7.14553C56.087 7.286 56.0293 7.5372 56.0293 7.77353C56.0293 8.05448 56.1315 8.28255 56.3383 8.45938C56.5448 8.63788 56.8143 8.78165 57.1463 8.89238C57.4785 9.0031 57.8603 9.10225 58.2883 9.1915C58.7163 9.28075 59.455 9.48733 59.8963 9.59143C60.354 9.69555 60.635 9.8195 61.0713 9.96658C61.506 10.1153 61.8943 10.312 62.2348 10.5549C62.5735 10.7995 62.848 11.102 63.0545 11.4639C63.261 11.8258 63.3635 12.2704 63.3635 12.8042C63.3635 13.5578 63.2133 14.1891 62.9108 14.6998C62.6068 15.2104 62.2133 15.6203 61.7258 15.9293C61.2383 16.24 60.8465 16.3193 60.2185 16.4449C59.5905 16.5689 58.951 16.6333 58.3015 16.6333C57.652 16.6333 57.153 16.5672 56.52 16.4334C55.8838 16.2995 55.3185 16.0781 54.8245 15.769C54.3285 15.4583 53.9238 15.0485 53.6065 14.5394C53.2875 14.0304 53.1155 13.3909 53.0843 12.6224H55.7433C55.7433 12.9628 55.8143 13.3529 55.9548 13.5958V13.5941Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M52.2035 4.89629V6.83484H49.8997V12.8372C49.8997 13.3694 49.989 13.7247 50.1642 13.9015C50.341 14.0784 50.6962 14.1676 51.2285 14.1676C51.4052 14.1676 51.5755 14.1593 51.7375 14.1445C51.901 14.1312 52.0547 14.1081 52.2035 14.0783V16.3507C51.9375 16.397 51.6415 16.4251 51.3177 16.44C50.9922 16.4532 50.6765 16.4615 50.3642 16.4615C49.8782 16.4615 49.4137 16.4284 48.981 16.3623C48.5445 16.2962 48.3017 16.1888 47.9827 15.9657C47.7232 15.7839 47.5035 15.5095 47.348 15.146C47.1927 14.7824 47.0737 14.3262 47.0737 13.7495V6.82659H45.17V4.88804H47.0737V1.45386L49.9015 1.46212V4.89629H52.2052H52.2035Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M24.6491 0.523438V6.42501H24.7152C25.1135 5.76066 25.7447 5.25493 26.3645 4.95251C26.986 4.64843 27.6355 4.57736 28.2255 4.57736C29.0665 4.57736 29.427 4.69138 29.9657 4.91946C30.5045 5.14918 30.9292 5.46648 31.2382 5.87303C31.5487 6.27958 31.767 6.77536 31.8925 7.35708C32.0182 7.94213 32.081 8.58831 32.081 9.29563V16.3408H29.2665V9.87076C29.2665 8.92546 29.1195 8.21978 28.8237 7.75538C28.5277 7.28933 28.0022 6.94558 27.252 6.89106C26.2852 6.82163 25.6092 7.21496 25.226 7.72398C24.8408 8.23463 24.6491 9.16838 24.6491 10.3352V16.3392H21.8214V0.523438H24.6491Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.WaWordmarkIcon = a
}), 98);
__d("WAWebLandingHeader.react", ["WAWebEnvironment", "WAWebFbtCommon", "WAWebFlex.react", "WAWebLinkDeviceScreenGating", "WAWebNativeAppDownloadButton.react", "WAWebUISpacing", "WAWebWaLogoIcon", "WAWebWaWordmarkIcon", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react"),
        j = {
            brandColor: {
                color: "x1knego9",
                $$css: !0
            }
        };

    function a() {
        if (c("WAWebEnvironment").isWindows) return i.jsx("div", {
            className: "landing-header"
        });
        if (d("WAWebLinkDeviceScreenGating").linkDeviceScreenRefreshEnabled()) {
            var a;
            return i.jsxs((a = d("WAWebFlex.react")).FlexRow, {
                align: "center",
                children: [i.jsx(a.FlexItem, {
                    grow: 0,
                    xstyle: d("WAWebUISpacing").uiPadding.end10,
                    children: i.jsx(d("WAWebWaLogoIcon").WaLogoIcon, {
                        height: 42,
                        iconXstyle: j.brandColor
                    })
                }), i.jsx(a.FlexItem, {
                    grow: 1,
                    children: i.jsx(d("WAWebWaWordmarkIcon").WaWordmarkIcon, {
                        height: 24,
                        iconXstyle: j.brandColor
                    })
                }), i.jsx(a.FlexItem, {
                    grow: 0,
                    children: i.jsx(c("WAWebNativeAppDownloadButton.react"), {})
                })]
            })
        }
        return i.jsxs("div", {
            className: "landing-header",
            children: [i.jsx(k, {}), i.jsx("div", {
                className: "landing-headerTitle",
                children: c("WAWebFbtCommon")("WhatsApp Web")
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var k = function () {
        return i.jsx("span", {
            className: "x1rg5ohu x16dsc37",
            children: i.jsxs("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "39",
                height: "39",
                viewBox: "0 0 39 39",
                children: [i.jsx("path", {
                    fill: "#00E676",
                    d: "M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"
                }), i.jsx("path", {
                    fill: "#FFF",
                    d: "M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"
                })]
            })
        })
    };
    g["default"] = a
}), 98);
__d("WAWebLockScreen.react", ["fbt", "WAPromiseDelays", "WAWebABProps", "WAWebButton.react", "WAWebCmd", "WAWebConnModel", "WAWebDetailImage.react", "WAWebEmojiText.react", "WAWebFlex.react", "WAWebFlexItem.react", "WAWebLandingHeader.react", "WAWebLockScreenResolver", "WAWebPasswordInput.react", "WAWebProfileImage.react", "WAWebScreenLockErrorMessages", "WAWebSocketModel", "WAWebUISpacing", "WAWebUserPrefsMultiDevice", "WAWebUserPrefsScreenLock", "WAWebWDSText.react", "asyncToGeneratorRuntime", "react", "useWAWebListener", "useWAWebPersistentCounterAsync"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useState,
        m = {
            pushnameText: {
                marginBottom: "x14ler8",
                $$css: !0
            },
            passcodeContainer: {
                width: "xdzyupr",
                $$css: !0
            },
            incorrectPasscode: {
                height: "x1qx5ct2",
                $$css: !0
            },
            logoutButton: {
                marginTop: "x1tfhste",
                $$css: !0
            }
        },
        n = 82;

    function a() {
        var a = l(""),
            e = a[0],
            f = a[1];
        a = l(null);
        var g = a[0],
            i = a[1];
        a = l(!1);
        var j = a[0],
            o = a[1];
        a = l(!1);
        var p = a[0],
            q = a[1];
        a = c("useWAWebPersistentCounterAsync")(d("WAWebUserPrefsScreenLock").getScreenUnlockTryCount, d("WAWebUserPrefsScreenLock").setScreenUnlockTryCount);
        var r = a[0],
            s = r.count,
            t = r.loading;
        r = r.error;
        var u = a[1],
            v = a[2];
        s = (a = s) != null ? a : 0;
        var w = s >= d("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
        a = s + 1 === d("WAWebABProps").getABPropConfigValue("web_screen_lock_max_retries");
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, "correct_passcode_lock_screen", b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            v()
        }));
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, "incorrect_passcode_lock_screen", b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            u(), o(!0), q(!1)
        }));
        s = function (a) {
            f(a.currentTarget.value)
        };
        var x = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    q(!0);
                    yield d("WAPromiseDelays").delayMs(400);
                    if (e === "") {
                        i(!0);
                        q(!1);
                        return
                    }
                    i(!1);
                    d("WAWebLockScreenResolver").LockScreenResolvable.enterPasscode(e)
                });
                return function () {
                    return a.apply(this, arguments)
                }
            }(),
            y = function (a) {
                !w && a.key === "Enter" && x()
            };
        w && d("WAWebSocketModel").Socket.logout();
        return k.jsxs("div", {
            className: "landing-wrapper",
            children: [k.jsx("div", {
                className: "landing-wrapper-before"
            }), k.jsx(c("WAWebLandingHeader.react"), {}), k.jsx("div", {
                className: "landing-window",
                "data-testid": void 0,
                children: k.jsx("div", {
                    className: "xa03szm x24d7kb x3urnb8 xay0mn9 xt48urr",
                    children: k.jsxs(d("WAWebFlex.react").FlexColumn, {
                        align: "center",
                        className: "landing-main",
                        children: [k.jsx(c("WAWebFlexItem.react"), {
                            xstyle: [d("WAWebUISpacing").uiMargin.top16, d("WAWebUISpacing").uiMargin.bottom24],
                            children: k.jsx(c("WAWebProfileImage.react"), {
                                thumb: d("WAWebUserPrefsMultiDevice").getCachedProfilePicEURL(),
                                size: n,
                                quality: d("WAWebDetailImage.react").DetailImageQuality.High
                            })
                        }), k.jsx(d("WAWebWDSText.react").WDSTextLarge, {
                            xstyle: m.pushnameText,
                            children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                                text: d("WAWebConnModel").Conn.pushname,
                                ellipsify: !0,
                                titlify: !0
                            })
                        }), k.jsx(c("WAWebFlexItem.react"), {
                            xstyle: d("WAWebUISpacing").uiMargin.bottom16,
                            children: k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                                xstyle: d("WAWebUISpacing").uiMargin.bottom6,
                                children: h._("__JHASH__qgIdFJ97fdy__JHASH__")
                            })
                        }), k.jsxs(c("WAWebFlexItem.react"), {
                            xstyle: [m.passcodeContainer, d("WAWebUISpacing").uiMargin.bottom24],
                            children: [k.jsx(c("WAWebPasswordInput.react"), {
                                onChange: s,
                                onKeyDown: y,
                                required: !0,
                                placeholder: h._("__JHASH__xKJi4GvQVx9__JHASH__").toString(),
                                focusOnMount: !0,
                                enableShowPassword: !0,
                                testid: void 0
                            }), k.jsx(d("WAWebWDSText.react").WDSTextSmall, {
                                color: "critical",
                                xstyle: [m.incorrectPasscode, d("WAWebUISpacing").uiMargin.top4, d("WAWebUISpacing").uiMargin.bottom10],
                                role: "alert",
                                children: d("WAWebScreenLockErrorMessages").getErrorMessage({
                                    emptyInputEntered: g,
                                    incorrectPasscode: j,
                                    onlyOneTryRemaining: a,
                                    triesExceeded: w
                                })
                            })]
                        }), k.jsx(c("WAWebFlexItem.react"), {
                            xstyle: d("WAWebUISpacing").uiMargin.bottom24,
                            children: k.jsx(c("WAWebButton.react"), {
                                type: "primary",
                                onClick: function () {
                                    x()
                                },
                                disabled: p || w || t || r != null,
                                spinner: p,
                                testid: void 0,
                                children: h._("__JHASH__ODe3uHsIv1F__JHASH__")
                            })
                        }), k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                            xstyle: d("WAWebUISpacing").uiMargin.bottom6,
                            children: h._("__JHASH__4IOi_WOkdPh__JHASH__")
                        }), k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                            xstyle: d("WAWebUISpacing").uiMargin.bottom6,
                            children: h._("__JHASH__cbGxantkmY7__JHASH__")
                        }), k.jsx(c("WAWebFlexItem.react"), {
                            xstyle: m.logoutButton,
                            children: k.jsx(c("WAWebButton.react"), {
                                type: "secondary",
                                onClick: function () {
                                    return d("WAWebSocketModel").Socket.logout()
                                },
                                children: h._("__JHASH__wtXSWvFZiBX__JHASH__")
                            })
                        })]
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebLogoutLoadingScreen.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        background: "_al_7",
        mainWrapper: "_al_8",
        logoutTitle: "_al_9"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebLogoutLoadingScreen.react", ["fbt", "WAWebLogoutLoadingScreen.scss", "WAWebSpinner.react", "WAWebText_DONOTUSE.react", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        return j.jsx("div", {
            className: c("WAWebLogoutLoadingScreen.scss").background,
            children: j.jsxs("div", {
                className: c("WAWebLogoutLoadingScreen.scss").mainWrapper,
                children: [j.jsx(d("WAWebSpinner.react").Spinner, {
                    size: 50,
                    stroke: 4,
                    color: "highlight"
                }), j.jsx(d("WAWebText_DONOTUSE.react").TextDiv, {
                    className: c("WAWebLogoutLoadingScreen.scss").logoutTitle,
                    size: "32",
                    children: h._("__JHASH__Hbv3GKTwSY-__JHASH__")
                }), j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                    children: h._("__JHASH__U5XvKl53dy4__JHASH__")
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebKeyboardRotateFocusModal.react", ["WAWebKeyboardConstants", "WAWebKeyboardTabUtils", "react", "stylex", "useMergeRefs"], (function (a, b, c, d, e, f, g) {
    var h, i, j, k = j || c("react"),
        l = (h || (h = d("react"))).useRef,
        m = {
            container: {
                position: "x10l6tqk",
                top: "x13vifvy",
                end: "xds687c",
                bottom: "x1ey2m1c",
                start: "x17qophe",
                $$css: !0
            }
        };
    b = k.forwardRef(a);

    function a(a, b) {
        var e = a.children,
            f = a.onBlur;
        a = a.xstyle;
        var g = l(null);
        b = c("useMergeRefs")(b, g);
        var h = function (a) {
                var b = g.current;
                if (!b) return;
                var c = a.shiftKey ? d("WAWebKeyboardTabUtils").TabDirection.BACKWARD : d("WAWebKeyboardTabUtils").TabDirection.FORWARD;
                b = d("WAWebKeyboardTabUtils").getNextTabbableElement(b, c, d("WAWebKeyboardTabUtils").FocusType.TABBABLE);
                if (b == null) return;
                a.preventDefault();
                b.focus()
            },
            j = function (a) {
                if (a.metaKey || a.ctrlKey) return;
                if (a.key === d("WAWebKeyboardConstants").KEYBOARD_EVENT_KEY_VALUE.TAB) return h(a)
            };
        return k.jsx("div", {
            ref: b,
            className: (i || (i = c("stylex")))(m.container, a),
            onKeyDown: j,
            tabIndex: "-1",
            onBlur: f,
            children: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 98);
__d("WAWebModalManagerImpl.react", ["WAUpperFirst", "WAWebFocusTracer", "WAWebKeyboardRotateFocusModal.react", "WAWebModalManager", "WAWebPopover.react", "WAWebUimContext", "WAWebUimUie.react", "WAWebVelocityTransitionGroup", "lodash", "react", "useWAWebListener"], (function (a, b, c, d, e, f, g) {
    var h, i;
    b = i || d("react");
    var j = h || (h = c("react")),
        k = b.cloneElement,
        l = b.useRef,
        m = b.useState,
        n = {
            DEFAULT: "modal",
            NONE: "none"
        },
        o = "modal";
    e = "media";
    b = "alert";

    function a(a) {
        var b, e, f = a.type,
            g = a.contextMenuRef,
            h = l(null),
            i = l(!1),
            p = m(void 0),
            q = p[0],
            r = p[1];
        p = m(null);
        var s = p[0],
            t = p[1];
        p = m(n.DEFAULT);
        var u = p[0],
            v = p[1];
        p = m(void 0);
        var w = p[0],
            x = p[1];
        p = m(!1);
        var y = p[0],
            z = p[1],
            A = function () {
                if (!h.current) return;
                var a = h.current.getElement();
                if (!a || a.contains(document.activeElement)) return;
                c("WAWebFocusTracer").focus(a)
            },
            B = function () {
                if (!h.current) return;
                var a = h.current.getElement();
                if (!a) return;
                c("WAWebFocusTracer").focus(a)
            },
            C = function (a) {
                var b;
                return (b = document.getElementById(d("WAWebPopover.react").ANCHOR_PORTAL_ID)) == null ? void 0 : b.contains(a)
            },
            D = function (a) {
                var b = a.relatedTarget,
                    c = g == null ? void 0 : g.current;
                c = c ? c.isOpen() : !1;
                return b instanceof HTMLElement && !a.currentTarget.contains(b) && !C(b) && !c && i.current === !1
            };
        p = function (a) {
            D(a) && A()
        };
        var E = function (a, b) {
                b === void 0 && (b = {});
                var d = b.transition || n.DEFAULT;
                b = b;
                var e = b.uim;
                b = b.blockClose;
                q && (d = n.NONE);
                var g = c("lodash").uniqueId("ModalManager" + f),
                    h = a;
                f === o && (h = k(a, {
                    requestFocus: B
                }));
                i.current = !1;
                r(h);
                t(g);
                v(d);
                x(e);
                z((a = b) != null ? a : !1)
            },
            F = function (a) {
                a(i.current === !0 ? !1 : !!q)
            },
            G = function (a) {
                if (!q) return;
                r(void 0);
                t(null);
                a && v(a);
                i.current = !0
            },
            H = function (a) {
                a === s && (G(), d("WAWebModalManager").ModalManager.trigger("close_" + f))
            },
            I = function (a) {
                a((a = h.current) == null ? void 0 : a.getElement())
            };
        (b = d("useWAWebListener")).useListener((e = d("WAWebModalManager")).ModalManager, "open_" + f, E);
        b.useListener(e.ModalManager, "exists_" + f, F);
        b.useListener(e.ModalManager, "close_" + f, G);
        b.useListener(e.ModalManager, "get_ref", I);
        var J;
        q && (J = j.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "Modal" + c("WAUpperFirst")(a.type),
            escapable: !y,
            ref: h,
            requestFocus: A,
            requestDismiss: H.bind(null, s),
            children: j.jsx(c("WAWebKeyboardRotateFocusModal.react"), {
                onBlur: p,
                children: q
            })
        }, s));
        return j.jsx(c("WAWebUimContext").Consumer, {
            children: function (a) {
                return j.jsx(c("WAWebUimContext").Provider, {
                    value: w || a,
                    children: j.jsx(c("WAWebVelocityTransitionGroup"), {
                        transitionName: u,
                        children: J
                    })
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ModalType = o;
    g.MediaType = e;
    g.AlertType = b;
    g.ModalManagerComponent = a
}), 98);
__d("WAWebOffline.react", ["fbt", "WAWebModal.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        return j.jsx(d("WAWebModal.react").Modal, {
            title: h._("__JHASH__OhLnEH2nl6O__JHASH__"),
            cover: !0,
            children: h._("__JHASH__wGw1nGH5taU__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProxied.react", ["fbt", "WAWebConfirmPopup.react", "WAWebExternalLink.react", "WAWebFaqUrl", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function k() {
        d("WAWebExternalLink.react").openExternalLink(d("WAWebFaqUrl").getCannotConnectFaqUrl())
    }

    function a() {
        return j.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            cover: !0,
            title: h._("__JHASH__9rkzpxJk0r2__JHASH__"),
            okText: h._("__JHASH__RR1bpeluTQm__JHASH__"),
            onOK: k,
            children: h._("__JHASH__jiAY6CW3tYp__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebWamEnumWebcPwaActionType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        INSTALL: 1
    });
    f.WEBC_PWA_ACTION_TYPE = a
}), 66);
__d("WAWebWebcPwaEventWamEvent", ["WAWebWamCodegenUtils", "WAWebWamEnumWebcPwaActionType"], (function (a, b, c, d, e, f, g) {
    a = d("WAWebWamCodegenUtils").defineEvents({
        WebcPwaEvent: [4116, {
                webcPwaAction: [2, d("WAWebWamEnumWebcPwaActionType").WEBC_PWA_ACTION_TYPE]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        WebcPwaEvent: []
    });
    g.WebcPwaEventWamEvent = a
}), 98);
__d("WAWebPwaEventListeners", ["WAWebPwaDocumentMetadataUtils", "WAWebWamEnumWebcPwaActionType", "WAWebWamEnumWebcWebPlatformType", "WAWebWamGlobals", "WAWebWamPlatform", "WAWebWebcPwaEventWamEvent"], (function (a, b, c, d, e, f, g) {
    function a() {
        window.addEventListener("appinstalled", function () {
            new(d("WAWebWebcPwaEventWamEvent").WebcPwaEventWamEvent)({
                webcPwaAction: d("WAWebWamEnumWebcPwaActionType").WEBC_PWA_ACTION_TYPE.INSTALL
            }).commit()
        })
    }

    function b() {
        window.matchMedia("(display-mode: standalone)").addListener(function () {
            d("WAWebPwaDocumentMetadataUtils").setDocumentTitle(null), d("WAWebPwaDocumentMetadataUtils").setAppBadge(null), d("WAWebWamGlobals").Global.set({
                webcWebPlatform: d("WAWebWamEnumWebcWebPlatformType").WEBC_WEB_PLATFORM_TYPE[d("WAWebWamPlatform").getWamPlatform()]
            })
        })
    }
    g.registerPwaInstallListener = a;
    g.registerPwaDisplayModeListener = b
}), 98);
__d("WAWebPwaManifest", ["WAWebBuildConstants", "WAWebUA"], (function (a, b, c, d, e, f, g) {
    function a() {
        if (d("WAWebUA").UA.os === d("WAWebUA").OS_TYPE.MAC) {
            var a;
            (a = document.getElementById("whatsapp-pwa-manifest-link")) == null ? void 0 : a.setAttribute("href", d("WAWebBuildConstants").WEB_PUBLIC_PATH + "manifest-apple.json")
        }
    }
    g.updatePwaManifestOnMacOS = a
}), 98);
__d("WAWebSafariTakeover", ["WALogger", "WAWebSWBus", "WAWebSWBusActions", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""]);
        h = function () {
            return a
        };
        return a
    }
    var i = !1;

    function a() {
        i = !0
    }

    function e() {
        return i
    }

    function f() {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = navigator.serviceWorker;
            if (a == null ? void 0 : a.controller) try {
                a = (yield c("WAWebSWBus").request(a.controller, c("WAWebSWBusActions").ACTIVE_TAB));
                return a.some(function (a) {
                    return a.isActive === !0
                })
            } catch (a) {
                d("WALogger").ERROR(h(), a).sendLogs("ACTIVE_TAB service worker call failed");
                return !1
            }
            return !1
        });
        return j.apply(this, arguments)
    }
    g.setTabActive = a;
    g.getIsTabActive = e;
    g.isAnotherTabActive = f
}), 98);
__d("WAWebSWBusInit", ["Promise", "WALogger", "WAWebCmd", "WAWebCrashlog", "WAWebFeatureDetectionSwSupport", "WAWebLoggerImpl", "WAWebNoop", "WAWebSWBus", "WAWebSWBusActions", "WAWebSafariTakeover", "WAWebSocketConstants", "WAWebSocketModel", "asyncToGeneratorRuntime", "err", "gkx", "requireDeferred"], (function (a, b, c, d, e, f, g) {
    var h;

    function a() {
        var b = babelHelpers.taggedTemplateLiteralLoose(['Unable to add "error" event listener to service worker container, error: ', ""]);
        a = function () {
            return b
        };
        return b
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ServiceWorker container error: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function e() {
        var a = babelHelpers.taggedTemplateLiteralLoose(['Unable to add "controllerchange" event listener to service worker container, error: ', ""]);
        e = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(['Unable to add "error" event listener to service worker, error: ', ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ServiceWorker controller error: ", ""]);
        k = function () {
            return a
        };
        return a
    }
    var l = c("requireDeferred")("WAWebPipVideoStreaming").__setRef("WAWebSWBusInit");

    function m() {
        return n.apply(this, arguments)
    }

    function n() {
        n = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (c("gkx")("26262")) return (yield l.load()).handleVideoStreamingRequest
        });
        return n.apply(this, arguments)
    }
    if (c("WAWebFeatureDetectionSwSupport").supported) {
        var o = function () {
            try {
                var a = navigator.serviceWorker;
                (a == null ? void 0 : a.controller) && a.controller.addEventListener("error", function (a) {
                    if (d("WAWebSocketModel").Socket.state === d("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED) return;
                    d("WALogger").WARN(k(), a.error)
                })
            } catch (a) {
                d("WALogger").WARN(j(), a)
            }
        };
        try {
            f = navigator.serviceWorker;
            f && f.addEventListener("controllerchange", function (a) {
                o()
            })
        } catch (a) {
            d("WALogger").WARN(e(), a)
        }
        try {
            g = navigator.serviceWorker;
            g && g.addEventListener("error", function (a) {
                if (d("WAWebSocketModel").Socket.state === d("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED) return;
                d("WALogger").WARN(i(), a.error)
            })
        } catch (b) {
            d("WALogger").WARN(a(), b)
        }
        o();
        var p = function (a, b) {
            a.buffer.forEach(function (a) {
                var c;
                c = (c = a.message[0]) != null ? c : "";
                c = "ServiceWorker (" + b + "): " + c;
                var e = a.level.match(/^(.*?)(?:Verbose)?$/i);
                e = q(e[1]);
                d("WAWebLoggerImpl").Logger.logImpl(e, c, a.error, a.attachedToSendLogs, a.extraTags)
            })
        };
        f = new(c("WAWebSWBus"))(function (a) {
            var e, f = a.action,
                g = a.message;
            a = a.version;
            switch (f) {
                case c("WAWebSWBusActions").REQUEST_STREAMING_INFO:
                case c("WAWebSWBusActions").EXP_BACKOFF:
                case c("WAWebSWBusActions").REQUEST_RMR:
                case c("WAWebSWBusActions").SEND_STREAMING_CHUNK:
                    return (e = m()) == null ? void 0 : e.then(function (a) {
                        return a == null ? void 0 : a({
                            action: f,
                            message: g
                        })
                    });
                case c("WAWebSWBusActions").LOG:
                    if (d("WAWebSocketModel").Socket.state === d("WAWebSocketConstants").SOCKET_STATE.UNLAUNCHED) return;
                    g && p(g, a);
                    return {
                        test: !0
                    };
                case c("WAWebSWBusActions").UPLOAD_LOGS:
                    g && p(g, a);
                    return d("WAWebCrashlog").upload({
                        reason: "Requested by Service Worker"
                    }).then(c("WAWebNoop"));
                case c("WAWebSWBusActions").ACTIVE_TAB:
                    return {
                        isActive: d("WAWebSafariTakeover").getIsTabActive()
                    };
                case c("WAWebSWBusActions").HEARTBEAT:
                    return g;
                default:
                    return (h || (h = b("Promise"))).reject(c("err")("Invalid Action: " + f))
            }
        });
        f.init();
        d("WAWebCmd").Cmd.on("logout", function () {
            var a = navigator.serviceWorker;
            (a == null ? void 0 : a.controller) && c("WAWebSWBus").request(a.controller, c("WAWebSWBusActions").LOGOUT)["catch"](c("WAWebNoop"))
        })
    }

    function q(a) {
        switch (a) {
            case "info":
                return 1;
            case "log":
                return 2;
            case "warn":
                return 3;
            case "error":
                return 4
        }
        throw c("err")("Invalid level: " + a)
    }
}), 34);
__d("WAWebServiceUnavailable.react", ["fbt", "WAWebModal.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        return j.jsx(d("WAWebModal.react").Modal, {
            title: h._("__JHASH__iqYqAmIomEj__JHASH__"),
            cover: !0,
            children: h._("__JHASH__exOMohO_Z4k__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebSmbLearnMore.react", ["fbt", "WAWebClickableLink.react", "WAWebExternalLink.react", "WAWebL10N", "WAWebURLUtils", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = "https://www.whatsapp.com/legal/small-business-terms/";

    function a() {
        var a = c("WAWebURLUtils").build(k, {
                lg: c("WAWebL10N").getNormalizedLocale()
            }),
            b = function (b) {
                b.preventDefault(), self.setTimeout(function () {
                    return d("WAWebExternalLink.react").openExternalLink(a)
                }, 10)
            };
        return j.jsx(c("WAWebClickableLink.react"), {
            href: a,
            onClick: b,
            children: h._("__JHASH__RR1bpeluTQm__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebLoadingScreen.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        container: "_alyo",
        web: "_alyp",
        containerFixed: "_alyq",
        graphic: "_alyr",
        logo: "_alys",
        dots: "_alyt",
        laptop: "_alyu",
        shimmering: "_alyv",
        shimmeringWWW: "_aqdy",
        initialLoad: "_alyw",
        logout: "_alyx",
        didYouKnow: "_alyy",
        organizing: "_alyz",
        progress: "_aly-",
        main: "_aly_",
        secondary: "_alz0",
        warning: "_alz1",
        showWarning: "_alz2",
        connecting: "_alz3",
        downloading: "_alz4"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebLoadingScreen.react", ["fbt", "$InternalEnum", "WAWebButton.react", "WAWebClassnames", "WAWebFbtCommon", "WAWebHistorySyncUIText", "WAWebL10N", "WAWebLoadingScreen.scss", "WAWebProgressBar.react", "WAWebThemeContext", "cr:10212", "react", "useForceUpdate", "useWAWebListener"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react");
    e = (i || (i = d("react"))).memo;
    var l = b("$InternalEnum").Mirrored(["INITIAL_LOAD", "CONNECTING", "DOWNLOADING", "ORGANIZING"]),
        m = b("$InternalEnum").Mirrored(["MULTI_STAGE", "UNIFIED", "UNIFIED_WITH_PROGRESS", "LOGO"]);

    function a(a) {
        var e, f, g = c("useForceUpdate")();
        d("useWAWebListener").useListener(c("WAWebL10N"), "locale_change", g);
        g = a.stage === l.INITIAL_LOAD;
        var i = a.stage === l.CONNECTING,
            j = a.stage === l.DOWNLOADING,
            r = a.stage === l.ORGANIZING,
            s = a.theme;
        s = s === void 0 ? m.MULTI_STAGE : s;
        i = s === m.LOGO ? d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebLoadingScreen.scss").container, c("WAWebLoadingScreen.scss").initialLoad) : d("WAWebClassnames").classnamesConvertMeToStylexPlease((e = {}, e[c("WAWebLoadingScreen.scss").containerFixed] = !a.debug, e[c("WAWebLoadingScreen.scss").initialLoad] = g, e[c("WAWebLoadingScreen.scss").connecting] = i, e[c("WAWebLoadingScreen.scss").downloading] = j, e[c("WAWebLoadingScreen.scss").organizing] = r, e[c("WAWebLoadingScreen.scss").web] = !0, e[c("WAWebLoadingScreen.scss").container] = !0, e));
        e = d("WAWebClassnames").classnamesConvertMeToStylexPlease((e = {}, e[c("WAWebLoadingScreen.scss").showWarning] = j, e[c("WAWebLoadingScreen.scss").logout] = !0, e));
        j = d("WAWebClassnames").classnamesConvertMeToStylexPlease((f = {}, f[c("WAWebLoadingScreen.scss").showWarning] = j, f[c("WAWebLoadingScreen.scss").warning] = !0, f));
        var t, u;
        switch (s) {
            case m.MULTI_STAGE:
                switch (a.stage) {
                    case l.INITIAL_LOAD:
                        t = c("WAWebFbtCommon")("WhatsApp");
                        break;
                    case l.CONNECTING:
                        t = h._("__JHASH__IRiaYmEAXw8__JHASH__");
                        break;
                    case l.DOWNLOADING:
                        t = h._("__JHASH__mYOJjeEIq2e__JHASH__", [h._param("progress", a.progress)]);
                        break;
                    case l.ORGANIZING:
                        t = h._("__JHASH__v76B1V7Bf3v__JHASH__");
                        break
                }
                u = k.jsx(n, {});
                break;
            case m.UNIFIED:
                t = d("WAWebHistorySyncUIText").SYNC_LOADING();
                u = d("WAWebThemeContext").isLightTheme() ? k.jsx(p, {}) : k.jsx(q, {});
                break;
            case m.UNIFIED_WITH_PROGRESS:
                u = d("WAWebThemeContext").isLightTheme() ? k.jsx(p, {}) : k.jsx(q, {});
                switch (a.stage) {
                    case l.INITIAL_LOAD:
                    case l.CONNECTING:
                        t = d("WAWebHistorySyncUIText").SYNC_LOADING();
                        break;
                    case l.DOWNLOADING:
                    case l.ORGANIZING:
                        t = h._("__JHASH__fvoc12_jVo0__JHASH__", [h._param("percentage", a.progress, [0])])
                }
                break;
            case m.LOGO:
                u = k.jsx(n, {});
                t = c("WAWebFbtCommon")("WhatsApp");
                break
        }
        return k.jsxs("div", {
            "data-testid": void 0,
            className: i,
            children: [k.jsx("div", {
                className: d("WAWebClassnames").classnamesConvertMeToStylexPlease((f = {}, f[c("WAWebLoadingScreen.scss").shimmeringWWW] = s === m.LOGO || s === m.MULTI_STAGE && (g || r), f[c("WAWebLoadingScreen.scss").graphic] = !0, f)),
                children: u
            }), k.jsx("div", {
                className: s !== m.MULTI_STAGE ? "x1n2onr6 x1m258z3 xuoj239 x1tfhste xk82a7y" : c("WAWebLoadingScreen.scss").progress,
                children: k.jsx(c("WAWebProgressBar.react"), {
                    value: a.progress,
                    max: 100
                })
            }), k.jsx("div", {
                className: c("WAWebLoadingScreen.scss").main,
                children: t
            }), k.jsxs("div", {
                className: c("WAWebLoadingScreen.scss").secondary,
                children: [k.jsx(o, {}), "\xa0", c("WAWebFbtCommon")("End-to-end encrypted")]
            }), b("cr:10212") ? k.jsx("div", {
                className: c("WAWebLoadingScreen.scss").didYouKnow,
                children: k.jsx(b("cr:10212"), {})
            }) : null, a.onLogout != null && k.jsx("div", {
                className: e,
                children: k.jsx(c("WAWebButton.react"), {
                    type: "plain-white",
                    onClick: a.onLogout,
                    children: h._("__JHASH__3n1bF_cZdZK__JHASH__")
                })
            }), k.jsx("div", {
                className: j,
                children: h._("__JHASH__W3Kv9n3KpTs__JHASH__")
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var n = function () {
            return k.jsx("span", {
                children: k.jsxs("svg", {
                    width: "250px",
                    height: "52px",
                    viewBox: "0 0 250 52",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [k.jsxs("g", {
                        className: c("WAWebLoadingScreen.scss").dots,
                        children: [k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "65.7636689",
                            cy: "21.1046108",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "81.0791876",
                            cy: "19.3283142",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "96.3947063",
                            cy: "17.7846275",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "111.710225",
                            cy: "17.5274031",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "127.025744",
                            cy: "17.6118619",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "142.341262",
                            cy: "18.4196288",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "157.656781",
                            cy: "19.9893339",
                            r: "3.65625"
                        }), k.jsx("circle", {
                            fill: "#B6B6B6",
                            cx: "172.9723",
                            cy: "22.0657859",
                            r: "3.65625"
                        })]
                    }), k.jsx("path", {
                        className: c("WAWebLoadingScreen.scss").laptop,
                        d: "M190.14097 4.7518926h48.227869l.281462-.00596781c1.058365-.00288774 2.664865.25185461 2.695721 2.87464716.142823 12.13996425 0 22.28077555 0 34.40910725 0 .06028-.024112.168784-.036168.217008l-16.394805-.0086927c-12.47317.0007215-24.136918.0136044-37.78743-.0033633l-.010915-6.2953341c-.030319-9.5718533-.105914-18.2714581.010915-28.31872515.033356-2.86867935 1.976535-2.91690333 3.013351-2.86867935zm20.097267 4.28597465l-19.256815-.00079524.002426 4.98254029c-.000422 6.5558423-.012657 12.8111695-.002954 19.3619492l.011919 4.9777941h46.536157l.008754-4.9777414c.010547-8.1882109.002637-15.913459.002637-24.3331514l-27.302124-.01059555zM179.195421 44.6572387c.397848-.036168.807752-.024112 1.2056-.024112 9.620684 0 19.241369-.012056 28.862053 0 .132616.4701838.54252 1.6393289 1.036816 1.6393289 3.255119.012056 4.510238 0 7.765357 0 .542519.036168.988591-1.1450331 1.133263-1.6513849 9.910029 0 19.820057.012056 29.730086.012056.084392.012056.265232.036168.349624.048224-.016075.2571945-.016075 1.0085894 0 2.2541846 0 1.4209691-1.193544 1.8201689-1.965128 2.1215688-.421959.1205599-.868031.1326159-1.289991.1928959h-63.560505c-.651024-.072336-1.350272-.108504-1.916904-.4701838-.566631-.2893439-1.000647-.7595278-1.350271-1.2779356v-2.8446419z",
                        fill: "currentColor"
                    }), k.jsx("path", {
                        className: c("WAWebLoadingScreen.scss").logo,
                        d: "M37.7314595,31.1612046 C37.0876293,30.8391042 33.9223475,29.2816062 33.332139,29.0666255 C32.7419305,28.8517683 32.3127104,28.7444016 31.8834903,29.3887258 C31.4542703,30.0332973 30.2204788,31.4835521 29.8447567,31.91339 C29.4692818,32.3428571 29.0936834,32.3968494 28.4499768,32.0745019 C27.8060232,31.7521544 25.7314595,31.0723707 23.272278,28.8787027 C21.3582085,27.171583 20.0661004,25.0632896 19.6905019,24.4185946 C19.315027,23.7741467 19.6505946,23.4257297 19.9729421,23.1046178 C20.2625483,22.8161235 20.6167722,22.352556 20.9386255,21.9767104 C21.2606023,21.6007413 21.3678456,21.3320154 21.5824556,20.9026718 C21.7970657,20.472834 21.6898224,20.0968649 21.528834,19.7746409 C21.3678456,19.452417 20.0801853,16.2831815 19.543722,14.993915 C19.0210965,13.7387491 18.4903166,13.9087567 18.0950733,13.8887413 C17.7199691,13.870085 17.2902548,13.8661313 16.8611583,13.8661313 C16.4319382,13.8661313 15.7343629,14.0272433 15.144278,14.6716911 C14.5540695,15.3163861 12.8908108,16.8740077 12.8908108,20.0429961 C12.8908108,23.2121081 15.1978996,26.2734826 15.5198765,26.7031969 C15.8417297,27.1330348 20.0597992,33.6360772 26.5184865,36.4250193 C28.05461,37.0883707 29.2539305,37.4846023 30.1888494,37.7811274 C31.7312742,38.2713822 33.1348263,38.2021931 34.2440772,38.0363861 C35.4810811,37.8515521 38.0533127,36.478888 38.5898996,34.9750116 C39.1263629,33.470888 39.1263629,32.1818687 38.9653745,31.91339 C38.8045097,31.6447876 38.3752896,31.4835521 37.7314595,31.1612046 M25.9838765,47.2013591 L25.9752278,47.2013591 C22.1322625,47.1998763 18.3629343,46.1674749 15.0745946,44.2160926 L14.2926332,43.7519074 L6.18674906,45.8782394 L8.35027028,37.9751042 L7.84111198,37.1648494 C5.69723552,33.7549343 4.56500386,29.8139923 4.56660833,25.767166 C4.57130502,13.9587954 14.1789652,4.35187645 25.9924016,4.35187645 C31.7128649,4.35385328 37.0902239,6.58458689 41.1338378,10.6327722 C45.1773282,14.680834 47.4028724,20.0618996 47.4007737,25.7843398 C47.3959539,37.5936988 37.7882934,47.2013591 25.9838765,47.2013591 M44.2112742,7.556695 C39.3464092,2.68614672 32.8767258,0.00271814672 25.9836293,0 C11.7809421,0 0.221652509,11.5584247 0.215969112,25.7654363 C0.21411583,30.3069652 1.40058687,34.7397683 3.65553668,38.6475984 L-4.61852778e-14,52 L13.6596757,48.4167413 C17.4233205,50.4695597 21.6607876,51.5516293 25.9733745,51.5531121 L25.9838765,51.5531121 L25.984,51.5531121 C40.1852046,51.5531121 51.7456062,39.9934517 51.7512912,25.7860695 C51.7538842,18.9011274 49.0761392,12.4271197 44.2112742,7.556695",
                        fill: "currentColor"
                    })]
                })
            })
        },
        o = function () {
            return k.jsx("span", {
                children: k.jsx("svg", {
                    width: "10px",
                    height: "12px",
                    viewBox: "0 0 10 12",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: k.jsx("path", {
                        d: "M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z",
                        fill: "currentColor"
                    })
                })
            })
        },
        p = function () {
            return k.jsxs("svg", {
                width: "360",
                height: "189",
                viewBox: "0 0 360 189",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [k.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M263.973 169.512C296.928 158.399 321.88 127.034 318.305 81.6873C312.874 12.7907 246.61 -4.29994 205.331 15.9952C149.334 43.5266 142.242 48.0401 102.134 48.0401C72.2614 48.0401 41.8454 62.4603 38.0434 101.448C35.2875 129.708 46.373 154.375 87.3951 166.97C162.054 189.892 232.127 180.251 263.973 169.512Z",
                    fill: "#DAF7F3"
                }), k.jsx("rect", {
                    x: "0.350314",
                    y: "0.491301",
                    width: "36.3309",
                    height: "71.7205",
                    rx: "6.39808",
                    transform: "matrix(0.986206 0.165525 -0.16491 0.986309 53.5541 83.2331)",
                    fill: "#42CBA5",
                    stroke: "#316474",
                    strokeWidth: "0.853077"
                }), k.jsx("rect", {
                    x: "0.353963",
                    y: "0.496419",
                    width: "36.322",
                    height: "71.7116",
                    rx: "6.39363",
                    transform: "matrix(0.986206 0.165525 -0.16491 0.986309 53.9368 80.9482)",
                    fill: "white",
                    stroke: "#316474",
                    strokeWidth: "0.861963"
                }), k.jsx("path", {
                    d: "M86.853 93.0759L77.0579 151.659C76.6995 153.803 74.6715 155.249 72.5281 154.889L48.7185 150.893C46.5752 150.533 45.1282 148.504 45.4866 146.36L55.2817 87.7769C55.6401 85.6334 57.6681 84.1873 59.8115 84.5471L63.6109 85.1848L79.8216 87.9056L83.6211 88.5433C85.7644 88.903 87.2114 90.9323 86.853 93.0759Z",
                    fill: "#EEFEFA",
                    stroke: "#316474",
                    strokeWidth: "0.861963"
                }), k.jsx("path", {
                    d: "M58.4726 88.8221C58.3721 89.4244 58.7846 90.0018 59.3926 90.1059C60.0037 90.2105 60.5863 89.7985 60.6873 89.193C60.7878 88.5907 60.3753 88.0133 59.7674 87.9092C59.1562 87.8046 58.5736 88.2166 58.4726 88.8221Z",
                    fill: "white",
                    stroke: "#316474",
                    strokeWidth: "0.853077"
                }), k.jsx("path", {
                    d: "M111.421 117.587C111.208 115.535 109.372 114.046 107.321 114.262L80.1959 117.113C78.1442 117.329 76.6535 119.167 76.8665 121.219L77.9482 131.641C78.1612 133.693 79.9971 135.182 82.0488 134.966L119.624 131.017C119.884 130.99 119.976 130.658 119.767 130.501L120.285 129.811L119.767 130.501L114.076 126.232C112.861 125.321 112.081 123.944 111.924 122.433L111.421 117.587Z",
                    fill: "#42CBA5",
                    stroke: "#316474",
                    strokeWidth: "1.72407"
                }), k.jsx("path", {
                    d: "M81.8041 122.275C81.3306 122.324 80.9866 122.749 81.0358 123.222C81.0849 123.696 81.5086 124.039 81.9821 123.989L81.8041 122.275ZM105.64 121.503C106.113 121.453 106.457 121.029 106.408 120.555C106.359 120.082 105.935 119.738 105.462 119.788L105.64 121.503ZM81.9821 123.989L105.64 121.503L105.462 119.788L81.8041 122.275L81.9821 123.989Z",
                    fill: "#33AF8D"
                }), k.jsx("path", {
                    d: "M82.3842 127.866C81.9107 127.916 81.5667 128.34 81.6158 128.814C81.665 129.287 82.0887 129.631 82.5621 129.581L82.3842 127.866ZM106.22 127.094C106.693 127.045 107.037 126.62 106.988 126.147C106.939 125.673 106.515 125.33 106.042 125.38L106.22 127.094ZM82.5621 129.581L106.22 127.094L106.042 125.38L82.3842 127.866L82.5621 129.581Z",
                    fill: "#33AF8D"
                }), k.jsx("path", {
                    d: "M125.463 42.5443L286.19 25.6512L297.132 129.758L136.405 146.652L125.463 42.5443Z",
                    fill: "#EEFEFA"
                }), k.jsx("path", {
                    d: "M295.928 130.484L138.655 147.014C135.404 147.356 132.479 144.995 132.138 141.75L121.537 40.8838C121.196 37.6393 123.564 34.7219 126.816 34.3801L284.089 17.85C287.343 17.508 290.265 19.8695 290.606 23.114L301.207 123.981C301.548 127.225 299.182 130.142 295.928 130.484Z",
                    fill: "white"
                }), k.jsx("path", {
                    d: "M138.655 147.014C135.404 147.356 132.479 144.995 132.138 141.75L121.537 40.8838C121.196 37.6393 123.564 34.7219 126.816 34.3801L284.089 17.85C287.343 17.508 290.265 19.8695 290.606 23.114L301.207 123.981C301.548 127.225 299.182 130.142 295.928 130.484",
                    stroke: "#316474"
                }), k.jsx("path", {
                    d: "M290.245 125.898L143.148 141.359C140.368 141.651 137.899 139.694 137.619 137.032L127.978 45.2988C127.698 42.6368 129.705 40.2098 132.486 39.9174L279.583 24.457C282.366 24.1645 284.832 26.1212 285.112 28.7833L294.754 120.517C295.033 123.179 293.028 125.606 290.245 125.898Z",
                    fill: "#EEFEFA",
                    stroke: "#316474"
                }), k.jsx("path", {
                    d: "M235.259 137.428L312.949 129.263L313.671 136.134C313.765 137.031 313.618 137.844 313.33 138.429C313.038 139.021 312.643 139.314 312.259 139.354L125.358 158.998C124.974 159.039 124.527 158.835 124.118 158.316C123.714 157.803 123.401 157.039 123.307 156.142L122.585 149.271L200.276 141.105C200.601 142.008 201.075 142.789 201.654 143.357C202.316 144.008 203.148 144.405 204.048 144.31L232.236 141.347C233.135 141.253 233.866 140.692 234.379 139.919C234.827 139.243 235.129 138.38 235.259 137.428Z",
                    fill: "#42CBA5",
                    stroke: "#316474"
                }), k.jsx("path", {
                    d: "M235.423 136.375L314.707 128.042L315.153 132.281C315.256 133.261 314.544 134.14 313.564 134.243L122.992 154.273C122.012 154.376 121.133 153.664 121.03 152.684L120.585 148.445L199.87 140.112C200.564 141.391 201.971 142.206 203.517 142.043L232.258 139.023C233.802 138.86 235.009 137.772 235.423 136.375Z",
                    fill: "white",
                    stroke: "#316474"
                }), k.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M210.616 68.862C214.35 68.4875 218.104 69.5614 221.067 71.8379C224.102 74.1693 226.061 77.5173 226.598 81.2882C227.123 84.9707 226.202 88.7389 224.024 91.7717C221.635 95.0981 218.05 97.241 213.993 97.7845C213.854 97.8031 213.715 97.8198 213.575 97.8344C211.383 98.0649 209.159 97.8031 207.092 97.0715L199.621 99.5614C199.614 99.5636 199.607 99.565 199.6 99.5658C199.533 99.5727 199.473 99.5204 199.475 99.4512L199.962 91.6506C198.649 89.7697 197.797 87.5847 197.49 85.3032C196.972 81.4482 198 77.6213 200.383 74.5271C202.855 71.319 206.478 69.2968 210.544 68.8696L210.616 68.862ZM210.799 71.3833C210.682 71.3955 210.566 71.4094 210.449 71.4252C203.812 72.314 199.133 78.3879 200.017 84.9648C200.287 86.9731 201.068 88.8902 202.274 90.5089L202.536 90.8598L202.125 96.1616L207.191 94.4008L207.604 94.5618C209.408 95.2644 211.374 95.5254 213.311 95.3218C213.426 95.3097 213.541 95.2959 213.656 95.2805C220.292 94.3917 224.972 88.3179 224.088 81.7409C223.219 75.28 217.299 70.7001 210.799 71.3833ZM206.255 76.8888L206.27 76.8876C206.515 76.8694 206.761 76.8505 206.976 76.8437C207.239 76.8348 207.529 76.8254 207.85 77.4125C208.23 78.1097 209.078 79.8609 209.184 80.0365C209.289 80.2121 209.366 80.4206 209.262 80.6734C209.157 80.9259 209.107 81.0825 208.939 81.3091C208.771 81.5359 208.588 81.8135 208.435 81.9892C208.263 82.1849 208.087 82.3967 208.328 82.7458C208.57 83.095 209.396 84.2344 210.561 85.1202C212.058 86.2585 213.195 86.5666 213.65 86.7216C213.814 86.7776 213.948 86.7983 214.062 86.7864C214.218 86.7699 214.336 86.6921 214.443 86.5598C214.647 86.3064 215.25 85.4395 215.501 85.0434C215.633 84.8363 215.762 84.7541 215.911 84.7384C216.03 84.7259 216.162 84.756 216.316 84.7989C216.662 84.8955 218.535 85.6437 218.916 85.7988C219.298 85.9538 219.55 86.0269 219.653 86.172C219.756 86.3178 219.81 87.0481 219.567 87.9227C219.323 88.7976 217.882 89.7311 217.212 89.8421C217.016 89.8745 216.825 89.9223 216.572 89.9489C215.961 90.0131 214.992 89.9537 212.731 89.2576C208.884 88.0733 206.243 84.4473 206.041 84.2178C205.839 83.9878 204.393 82.3511 204.26 80.5558C204.128 78.7607 205.013 77.8072 205.323 77.4171C205.62 77.0429 205.993 76.9162 206.239 76.8903C206.25 76.8892 206.26 76.8883 206.27 76.8876C206.263 76.8881 206.258 76.8885 206.255 76.8888Z",
                    fill: "#316474",
                    fillOpacity: "0.24"
                }), k.jsx("path", {
                    d: "M118.422 64.6861C118.641 62.6346 120.481 61.1464 122.533 61.3621L153.583 64.6256C155.635 64.8413 157.122 66.6791 156.903 68.7306L155.569 81.2676C155.351 83.3191 153.51 84.8073 151.459 84.5917L109.005 80.1296C108.745 80.1023 108.654 79.7705 108.864 79.6139L108.348 78.9241L108.864 79.6139L115.614 74.564C116.831 73.6532 117.614 72.2767 117.775 70.7657L118.422 64.6861Z",
                    fill: "#42CBA5",
                    stroke: "#316474",
                    strokeWidth: "1.72407"
                }), k.jsx("path", {
                    d: "M151.271 70.4778C151.745 70.5276 152.088 70.9517 152.037 71.4251C151.987 71.8986 151.562 72.242 151.089 72.1922L151.271 70.4778ZM124.871 69.4366C124.397 69.3868 124.054 68.9627 124.104 68.4893C124.155 68.0158 124.579 67.6724 125.053 67.7222L124.871 69.4366ZM151.089 72.1922L124.871 69.4366L125.053 67.7222L151.271 70.4778L151.089 72.1922Z",
                    fill: "#33AF8D"
                }), k.jsx("path", {
                    d: "M150.613 76.6728C151.086 76.7225 151.429 77.1467 151.379 77.6201C151.328 78.0935 150.904 78.4369 150.43 78.3872L150.613 76.6728ZM124.212 75.6315C123.738 75.5817 123.395 75.1576 123.446 74.6842C123.496 74.2108 123.921 73.8673 124.394 73.9171L124.212 75.6315ZM150.43 78.3872L124.212 75.6315L124.394 73.9171L150.613 76.6728L150.43 78.3872Z",
                    fill: "#33AF8D"
                })]
            })
        },
        q = function () {
            return k.jsxs("svg", {
                width: "360",
                height: "189",
                viewBox: "0 0 360 189",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [k.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M263.973 169.512C296.928 158.399 321.88 127.034 318.305 81.6873C312.874 12.7907 246.61 -4.29994 205.331 15.9952C149.334 43.5266 142.242 48.0401 102.134 48.0401C72.2614 48.0401 41.8454 62.4603 38.0434 101.448C35.2875 129.708 46.373 154.375 87.3951 166.97C162.054 189.892 232.127 180.251 263.973 169.512Z",
                    fill: "white",
                    fillOpacity: "0.1"
                }), k.jsx("rect", {
                    x: "0.350314",
                    y: "0.491301",
                    width: "36.3309",
                    height: "71.7205",
                    rx: "6.39808",
                    transform: "matrix(0.986206 0.165525 -0.16491 0.986309 53.5536 83.2332)",
                    fill: "#42CBA5",
                    stroke: "#316474",
                    strokeWidth: "0.853077"
                }), k.jsx("rect", {
                    x: "0.353963",
                    y: "0.496419",
                    width: "36.322",
                    height: "71.7116",
                    rx: "6.39363",
                    transform: "matrix(0.986206 0.165525 -0.16491 0.986309 53.9364 80.9482)",
                    fill: "white",
                    stroke: "#316474",
                    strokeWidth: "0.861963"
                }), k.jsx("path", {
                    d: "M86.8525 93.0759L77.0574 151.659C76.699 153.803 74.671 155.249 72.5277 154.889L48.718 150.893C46.5747 150.533 45.1277 148.504 45.4861 146.36L55.2812 87.777C55.6396 85.6334 57.6676 84.1873 59.811 84.5471L63.6105 85.1848L79.8212 87.9056L83.6206 88.5433C85.764 88.903 87.2109 90.9323 86.8525 93.0759Z",
                    fill: "#EEFEFA",
                    stroke: "#316474",
                    strokeWidth: "0.861963"
                }), k.jsx("path", {
                    d: "M58.4721 88.822C58.3716 89.4244 58.7841 90.0017 59.3921 90.1058C60.0032 90.2105 60.5858 89.7985 60.6868 89.193C60.7873 88.5906 60.3749 88.0133 59.7669 87.9092C59.1557 87.8046 58.5731 88.2166 58.4721 88.822Z",
                    fill: "white",
                    stroke: "#316474",
                    strokeWidth: "0.853077"
                }), k.jsx("path", {
                    d: "M111.421 117.587C111.208 115.535 109.372 114.046 107.321 114.262L80.1959 117.113C78.1442 117.329 76.6535 119.167 76.8665 121.219L77.9482 131.641C78.1612 133.693 79.9971 135.182 82.0488 134.966L119.624 131.017C119.884 130.99 119.976 130.658 119.767 130.501L120.285 129.811L119.767 130.501L114.076 126.232C112.861 125.321 112.081 123.944 111.924 122.433L111.421 117.587Z",
                    fill: "#42CBA5",
                    stroke: "#316474",
                    strokeWidth: "1.72407"
                }), k.jsx("path", {
                    d: "M81.8036 122.275C81.3301 122.324 80.9861 122.749 81.0353 123.222C81.0844 123.696 81.5081 124.039 81.9816 123.99L81.8036 122.275ZM105.639 121.503C106.113 121.453 106.457 121.029 106.407 120.555C106.358 120.082 105.935 119.738 105.461 119.788L105.639 121.503ZM81.9816 123.99L105.639 121.503L105.461 119.788L81.8036 122.275L81.9816 123.99Z",
                    fill: "#33AF8D"
                }), k.jsx("path", {
                    d: "M82.3837 127.866C81.9102 127.916 81.5662 128.34 81.6153 128.814C81.6645 129.287 82.0882 129.631 82.5616 129.581L82.3837 127.866ZM106.219 127.094C106.693 127.045 107.037 126.62 106.988 126.147C106.938 125.673 106.515 125.33 106.041 125.38L106.219 127.094ZM82.5616 129.581L106.219 127.094L106.041 125.38L82.3837 127.866L82.5616 129.581Z",
                    fill: "#33AF8D"
                }), k.jsx("path", {
                    d: "M125.463 42.5442L286.19 25.6511L297.132 129.758L136.405 146.651L125.463 42.5442Z",
                    fill: "#EEFEFA"
                }), k.jsx("path", {
                    d: "M295.927 130.484L138.654 147.015C135.404 147.356 132.479 144.995 132.138 141.751L121.536 40.8839C121.195 37.6393 123.564 34.7219 126.816 34.3801L284.089 17.85C287.343 17.508 290.264 19.8695 290.605 23.114L301.207 123.981C301.548 127.225 299.181 130.142 295.927 130.484Z",
                    fill: "white"
                }), k.jsx("path", {
                    d: "M138.654 147.015C135.404 147.356 132.479 144.995 132.138 141.751L121.536 40.8839C121.195 37.6393 123.564 34.7219 126.816 34.3801L284.089 17.85C287.343 17.508 290.264 19.8695 290.605 23.114L301.207 123.981C301.548 127.225 299.181 130.142 295.927 130.484",
                    stroke: "#316474"
                }), k.jsx("path", {
                    d: "M290.245 125.898L143.148 141.359C140.368 141.651 137.899 139.694 137.619 137.032L127.978 45.2989C127.698 42.6369 129.705 40.2098 132.486 39.9175L279.583 24.457C282.366 24.1645 284.832 26.1213 285.112 28.7834L294.754 120.517C295.033 123.179 293.028 125.606 290.245 125.898Z",
                    fill: "#EEFEFA",
                    stroke: "#316474"
                }), k.jsx("path", {
                    d: "M235.259 137.428L312.949 129.263L313.671 136.134C313.765 137.031 313.618 137.844 313.33 138.429C313.038 139.021 312.643 139.314 312.259 139.354L125.358 158.998C124.974 159.039 124.527 158.835 124.118 158.316C123.714 157.803 123.401 157.039 123.307 156.142L122.585 149.271L200.276 141.105C200.601 142.008 201.075 142.789 201.654 143.357C202.316 144.008 203.148 144.405 204.048 144.31L232.236 141.347C233.135 141.253 233.866 140.692 234.379 139.919C234.827 139.243 235.129 138.38 235.259 137.428Z",
                    fill: "#42CBA5",
                    stroke: "#316474"
                }), k.jsx("path", {
                    d: "M235.423 136.375L314.707 128.042L315.153 132.281C315.256 133.261 314.544 134.14 313.564 134.243L122.992 154.273C122.012 154.376 121.133 153.664 121.03 152.684L120.585 148.445L199.87 140.112C200.564 141.391 201.971 142.206 203.517 142.043L232.258 139.023C233.802 138.86 235.009 137.772 235.423 136.375Z",
                    fill: "white",
                    stroke: "#316474"
                }), k.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M210.617 68.8619C214.35 68.4875 218.105 69.5614 221.068 71.8378C224.102 74.1693 226.062 77.5173 226.599 81.2882C227.123 84.9707 226.203 88.7389 224.024 91.7717C221.635 95.0981 218.051 97.241 213.993 97.7845C213.854 97.8031 213.715 97.8197 213.576 97.8344C211.383 98.0649 209.159 97.8031 207.093 97.0715L199.622 99.5614C199.614 99.5636 199.607 99.565 199.6 99.5658C199.534 99.5727 199.474 99.5204 199.476 99.4512L199.962 91.6506C198.65 89.7697 197.798 87.5847 197.491 85.3032C196.973 81.4482 198 77.6213 200.384 74.5271C202.856 71.319 206.479 69.2968 210.544 68.8696L210.617 68.8619ZM210.799 71.3833C210.683 71.3955 210.566 71.4094 210.449 71.4252C203.813 72.314 199.133 78.3879 200.018 84.9648C200.288 86.9731 201.068 88.8902 202.274 90.5089L202.536 90.8598L202.126 96.1615L207.191 94.4007L207.604 94.5618C209.408 95.2644 211.374 95.5254 213.311 95.3218C213.426 95.3097 213.542 95.2959 213.656 95.2805C220.293 94.3917 224.972 88.3179 224.088 81.7409C223.219 75.28 217.299 70.7001 210.799 71.3833ZM206.255 76.8888L206.271 76.8876C206.516 76.8694 206.761 76.8505 206.976 76.8437C207.239 76.8348 207.53 76.8254 207.85 77.4125C208.231 78.1097 209.079 79.8609 209.184 80.0365C209.29 80.2121 209.367 80.4206 209.262 80.6734C209.157 80.9259 209.107 81.0825 208.94 81.3091C208.771 81.5359 208.588 81.8135 208.435 81.9892C208.264 82.1849 208.087 82.3967 208.329 82.7458C208.57 83.095 209.396 84.2344 210.561 85.1202C212.059 86.2585 213.196 86.5666 213.651 86.7216C213.815 86.7776 213.949 86.7983 214.062 86.7863C214.218 86.7699 214.336 86.6921 214.443 86.5598C214.647 86.3064 215.251 85.4395 215.502 85.0434C215.633 84.8363 215.763 84.7541 215.912 84.7384C216.031 84.7259 216.162 84.756 216.316 84.7989C216.662 84.8955 218.536 85.6437 218.917 85.7988C219.298 85.9538 219.55 86.0269 219.654 86.172C219.757 86.3178 219.81 87.0481 219.567 87.9227C219.323 88.7976 217.882 89.7311 217.213 89.8421C217.016 89.8745 216.825 89.9223 216.572 89.9489C215.962 90.0131 214.992 89.9537 212.731 89.2576C208.885 88.0733 206.243 84.4473 206.042 84.2178C205.84 83.9878 204.394 82.3511 204.261 80.5558C204.128 78.7607 205.013 77.8072 205.324 77.4171C205.621 77.0429 205.993 76.9162 206.24 76.8903C206.25 76.8892 206.261 76.8883 206.271 76.8876C206.264 76.8881 206.259 76.8885 206.255 76.8888Z",
                    fill: "#316474",
                    fillOpacity: "0.24"
                }), k.jsx("path", {
                    d: "M118.423 64.686C118.641 62.6345 120.481 61.1463 122.533 61.3619L153.584 64.6255C155.636 64.8412 157.122 66.679 156.904 68.7305L155.569 81.2675C155.351 83.319 153.511 84.8072 151.459 84.5915L109.006 80.1295C108.746 80.1022 108.655 79.7704 108.864 79.6138L108.348 78.924L108.864 79.6138L115.614 74.5639C116.832 73.653 117.615 72.2766 117.776 70.7656L118.423 64.686Z",
                    fill: "#42CBA5",
                    stroke: "#316474",
                    strokeWidth: "1.72407"
                }), k.jsx("path", {
                    d: "M151.271 70.4778C151.744 70.5275 152.087 70.9517 152.037 71.4251C151.987 71.8985 151.562 72.2419 151.088 72.1922L151.271 70.4778ZM124.87 69.4365C124.397 69.3867 124.054 68.9626 124.104 68.4892C124.154 68.0158 124.579 67.6723 125.052 67.7221L124.87 69.4365ZM151.088 72.1922L124.87 69.4365L125.052 67.7221L151.271 70.4778L151.088 72.1922Z",
                    fill: "#33AF8D"
                }), k.jsx("path", {
                    d: "M150.613 76.6727C151.086 76.7225 151.429 77.1466 151.379 77.62C151.328 78.0934 150.904 78.4369 150.43 78.3871L150.613 76.6727ZM124.212 75.6314C123.738 75.5817 123.395 75.1575 123.446 74.6841C123.496 74.2107 123.921 73.8673 124.394 73.917L124.212 75.6314ZM150.43 78.3871L124.212 75.6314L124.394 73.917L150.613 76.6727L150.43 78.3871Z",
                    fill: "#33AF8D"
                })]
            })
        };
    f = e(a);
    g.Stage = l;
    g.LoadingScreenTheme = m;
    g.LoadingScreen = f
}), 226);
__d("WAWebDebouncedLoadingScreen.react", ["$InternalEnum", "WALogger", "WAPromiseDelays", "WAWebCmd", "WAWebLoadingScreen.react", "WAWebOfflineHandler", "WAWebSocketModel", "WAWebUserPrefsHistorySync", "asyncToGeneratorRuntime", "react", "useWAWebListener", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g) {
    var h, i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["DebouncedLoadingScreen: ", " - ends minimum display time"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["DebouncedLoadingScreen: ", " - starts minimum display time"]);
        k = function () {
            return a
        };
        return a
    }
    e = i || d("react");
    var l = h || (h = c("react")),
        m = e.useCallback,
        n = e.useEffect,
        o = e.useRef,
        p = e.useState,
        q = 500,
        r = 1500,
        s = 450,
        t = 800,
        u = 450,
        v = b("$InternalEnum").Mirrored(["INITIAL_LOAD", "CONNECTING", "FAKE_FILL", "DOWNLOADING", "ORGANIZING"]),
        w = b("$InternalEnum").Mirrored(["NOT_STARTED", "STARTED", "PAST_MIN_TIME"]);

    function a(a) {
        var e = a.initialLoadReady,
            f = a.onLogout,
            g = a.onReady,
            h = c("useWAWebUnmountSignal")(),
            i = o(!1);
        a = p(e ? d("WAWebLoadingScreen.react").Stage.CONNECTING : d("WAWebLoadingScreen.react").Stage.INITIAL_LOAD);
        var x = a[0],
            y = a[1];
        a = p(d("WAWebUserPrefsHistorySync").getInitialHistorySyncCompleteLocalStorage());
        a = a[0];
        var z = p({
                INITIAL_LOAD: e ? w.PAST_MIN_TIME : w.NOT_STARTED,
                CONNECTING: w.NOT_STARTED,
                FAKE_FILL: w.NOT_STARTED,
                DOWNLOADING: w.NOT_STARTED,
                ORGANIZING: w.NOT_STARTED
            }),
            A = z[0],
            B = z[1];
        z = p(0);
        var C = z[0],
            D = z[1];
        z = p(null);
        var E = z[0],
            F = z[1];
        z = function () {
            var a = d("WAWebOfflineHandler").OfflineMessageHandler.getHasMessagesToDownload();
            E == null && a != null && F(a);
            a === !0 && (A.CONNECTING === w.PAST_MIN_TIME && D(d("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress()))
        };
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, "offline_progress_update", z);
        var G = m(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
                    B(function (b) {
                        return babelHelpers["extends"]({}, b, (b = {}, b[a] = w.STARTED, b))
                    });
                    d("WALogger").LOG(k(), a);
                    yield d("WAPromiseDelays").delayMs(b);
                    if (h.aborted) return;
                    B(function (b) {
                        return babelHelpers["extends"]({}, b, (b = {}, b[a] = w.PAST_MIN_TIME, b))
                    });
                    d("WALogger").LOG(j(), a)
                });
                return function (b, c) {
                    return a.apply(this, arguments)
                }
            }(), [h]),
            H = A.CONNECTING,
            I = A.DOWNLOADING,
            J = A.ORGANIZING,
            K = A.FAKE_FILL,
            L = A.INITIAL_LOAD;
        n(function () {
            if (J === w.PAST_MIN_TIME) i.current || (g(), i.current = !0);
            else if (I === w.PAST_MIN_TIME && C >= 100 && J === w.NOT_STARTED) d("WAPromiseDelays").delayMs(u).then(function () {
                if (h.aborted) return;
                y(d("WAWebLoadingScreen.react").Stage.ORGANIZING);
                G(v.ORGANIZING, t)
            });
            else if (H === w.PAST_MIN_TIME && E != null && I === w.NOT_STARTED && K === w.NOT_STARTED) {
                var a = d("WAWebOfflineHandler").OfflineMessageHandler.getFinishedDownloading();
                E && !a ? (y(d("WAWebLoadingScreen.react").Stage.DOWNLOADING), D(d("WAWebOfflineHandler").OfflineMessageHandler.getOfflineDeliveryProgress()), G(v.DOWNLOADING, s)) : (D(100), G(v.FAKE_FILL, u).then(function () {
                    if (h.aborted) return;
                    d("WAWebSocketModel").Socket.hasSynced ? i.current || (g(), i.current = !0) : (y(d("WAWebLoadingScreen.react").Stage.ORGANIZING), G(v.ORGANIZING, t))
                }))
            } else e && L === w.PAST_MIN_TIME && H === w.NOT_STARTED ? (y(d("WAWebLoadingScreen.react").Stage.CONNECTING), G(v.CONNECTING, r)) : L === w.NOT_STARTED && G(v.INITIAL_LOAD, q)
        }, [C, g, E, G, h, e, H, I, J, K, L]);
        z = d("WAWebLoadingScreen.react").LoadingScreenTheme.MULTI_STAGE;
        e && (!a ? z = d("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED : E === !0 ? z = d("WAWebLoadingScreen.react").LoadingScreenTheme.UNIFIED_WITH_PROGRESS : z = d("WAWebLoadingScreen.react").LoadingScreenTheme.LOGO);
        return l.jsx(d("WAWebLoadingScreen.react").LoadingScreen, {
            stage: x,
            progress: C,
            onLogout: f,
            theme: z
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebStartup.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        startup: "_ari2",
        textTip: "_ari0",
        divider: "_ari3"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebStartup.react", ["fbt", "WALogger", "WAWebConfirmPopup.react", "WAWebDebouncedLoadingScreen.react", "WAWebSocketModel", "WAWebStartup.scss", "WAWebStreamModel", "react", "useForceUpdate", "useWAWebInterval", "useWAWebListener", "useWAWebTimeout"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Startup: user selected logout"]);
        k = function () {
            return a
        };
        return a
    }
    var l = j || c("react"),
        m = (i || (i = d("react"))).useEffect;

    function a(a) {
        var b = a.initialLoadReady;
        a = a.onReady;
        var e = c("useForceUpdate")(),
            f, g;
        d("useWAWebListener").useListener(d("WAWebStreamModel").Stream, "change:displayInfo", e);
        e = c("useWAWebInterval")(e, 1e3);
        e = e[0];
        e = d("useWAWebTimeout").useTimeout(e, 6e3);
        var i = e[0];
        e = d("WAWebStreamModel").Stream.displayInfo;
        m(function () {
            i()
        }, []);
        var j = function () {
            d("WALogger").LOG(k()), d("WAWebSocketModel").Socket.logout()
        };
        switch (e) {
            case d("WAWebStreamModel").StreamInfo.OPENING:
            case d("WAWebStreamModel").StreamInfo.PAIRING:
            case d("WAWebStreamModel").StreamInfo.TIMEOUT:
                f = h._("__JHASH__weKSIEgSRNQ__JHASH__");
                g = h._("__JHASH__wGw1nGH5taU__JHASH__");
                break;
            case d("WAWebStreamModel").StreamInfo.SYNCING:
            case d("WAWebStreamModel").StreamInfo.CONNECTING:
                return l.jsx(c("WAWebDebouncedLoadingScreen.react"), {
                    initialLoadReady: b,
                    onReady: a,
                    onLogout: j
                });
            default:
                return d("WAWebStreamModel").Stream.mode === d("WAWebStreamModel").StreamMode.MAIN ? l.jsx(c("WAWebDebouncedLoadingScreen.react"), {
                    initialLoadReady: b,
                    onReady: a,
                    onLogout: j
                }) : null
        }
        return l.jsxs(d("WAWebConfirmPopup.react").ConfirmPopup, {
            cover: !0,
            title: f,
            cancelText: h._("__JHASH__3n1bF_cZdZK__JHASH__"),
            onCancel: j,
            children: [l.jsx("hr", {
                className: c("WAWebStartup.scss").divider
            }), l.jsx("div", {
                className: c("WAWebStartup.scss").textTip,
                children: g
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebTempBanScreen.react", ["fbt", "WALogger", "WAWeb-moment", "WAWebConflict.react", "WAWebFaqUrl", "WAWebFavicon.react", "WAWebSocketModel", "WAWebUserPrefsMeUser", "react"], (function (a, b, c, d, e, f, g, h) {
    var i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Banned accounts: user selected logout"]);
        j = function () {
            return a
        };
        return a
    }
    var k = i || d("react");

    function a(a) {
        a = a.banData;
        a = a || {};
        var b = a.code,
            e = a.expire,
            f = a.message;
        a = a.url;
        f = (f = f) != null ? f : l(b);
        b = c("WAWeb-moment").duration(e, "seconds").humanize();
        return k.jsx(d("WAWebFavicon.react").ErrorFavicon, {
            children: k.jsxs(c("WAWebConflict.react"), {
                cancelText: h._("__JHASH__3n1bF_cZdZK__JHASH__"),
                onCancel: function () {
                    d("WALogger").LOG(j()), d("WAWebSocketModel").Socket.logout()
                },
                okText: h._("__JHASH__ofSKbj4p0iW__JHASH__"),
                onOK: window.open.bind(window, (e = a) != null ? e : d("WAWebFaqUrl").getFaqUrl()),
                children: [k.jsx("div", {
                    children: f
                }), k.jsx("div", {
                    children: h._("__JHASH__MMb6-pq3iee__JHASH__", [h._param("duration", b)])
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function l(a) {
        var b = d("WAWebUserPrefsMeUser").getMaybeMeUser().user;
        switch (a) {
            case 101:
                return h._("__JHASH__91QlvH6APxR__JHASH__", [h._param("phone", b)]);
            case 102:
                return h._("__JHASH__tNPU5EfuExD__JHASH__");
            case 103:
                return h._("__JHASH__4L6P-fwJYcF__JHASH__", [h._param("phone", b)]);
            case 104:
                return h._("__JHASH__-o2jIJ6VTm6__JHASH__");
            case 106:
                return h._("__JHASH__ZcYd7lTRWIR__JHASH__");
            default:
                return h._("__JHASH__q_tlnqAVgeu__JHASH__")
        }
    }
    g["default"] = a
}), 226);
__d("WAWebCreateBugnubTaskUrl", ["WAWebBuildConstants", "WAWebConnModel", "WAWebMobilePlatforms", "WAWebUA", "WAWebUserPrefsGeneral", "WAWebUserPrefsMeUser", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b;
            b = (b = d("WAWebUserPrefsMeUser").getMaybeMeUser()) == null ? void 0 : b.user;
            var c = null;
            switch (d("WAWebConnModel").Conn.platform) {
                case d("WAWebMobilePlatforms").PLATFORMS.ANDROID:
                    c = "Android";
                    break;
                case d("WAWebMobilePlatforms").PLATFORMS.IPHONE:
                    c = "iPhone";
                    break;
                case d("WAWebMobilePlatforms").PLATFORMS.SMBA:
                    c = "SMB - Android";
                    break;
                case d("WAWebMobilePlatforms").PLATFORMS.SMBI:
                    c = "SMB - iPhone";
                    break;
                default:
                    c = "Choose an option"
            }
            var e = "";
            switch (d("WAWebUA").UA.browser) {
                case d("WAWebUA").BROWSER_TYPE.CHROME:
                    e = "Chrome";
                    break;
                case d("WAWebUA").BROWSER_TYPE.SAFARI:
                    e = "Safari";
                    break;
                case d("WAWebUA").BROWSER_TYPE.FIREFOX:
                    e = "Firefox";
                    break;
                case d("WAWebUA").BROWSER_TYPE.EDGE:
                    e = "Microsoft Edge";
                    break;
                case d("WAWebUA").BROWSER_TYPE.OPERA:
                    e = "Opera"
            }
            var f = "Web (Browser)";
            c = ["Description:\n", "Link to crash logs", "https://www.internalfb.com/intern/bunny/?q=waflb+" + b, "time of log: " + new Date().toString() + "\n", "Primary Platform: " + c];
            e !== "" && c.push("Browser: " + e);
            a != null && c.push("Error string:", "" + a);
            e = (yield d("WAWebUserPrefsGeneral").getWhatsAppWebExternalBetaJoinedIdb());
            f = {
                first_question: "Messaging",
                platform: f,
                version: "" + d("WAWebBuildConstants").VERSION_STR + (e ? " (joined beta)" : ""),
                bug: c.join("\n"),
                logs: "I understand and give consent",
                number: (a = b) != null ? a : ""
            };
            e = encodeURIComponent(JSON.stringify(f));
            return "https://www.internalfb.com/butterfly/form/777724432837431?default_responses=" + e
        });
        return h.apply(this, arguments)
    }
    g.createBugnubTaskUrl = a
}), 98);
__d("WAWebOpenBugReportForm", ["WAWebCrashlog", "WAWebCreateBugnubTaskUrl", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            d("WAWebCrashlog").upload({
                reason: "Manual task creation",
                immediate: !0,
                isHighPri: !0
            }), window.open(yield d("WAWebCreateBugnubTaskUrl").createBugnubTaskUrl(a))
        });
        return h.apply(this, arguments)
    }
    g.openBugReportForm = a
}), 98);
__d("WAWebToastManagerImpl", ["WAHash", "WAWebCmd", "WAWebCopyToClipboard", "WAWebL10N", "WAWebOpenBugReportForm", "WAWebSetRefCache", "WAWebToast.react", "WAWebToastManager", "WAWebUA", "WAWebVelocityTransitionGroup", "asyncToGeneratorRuntime", "lodash", "react", "stylex", "useLazyRef", "useWAWebListener", "useWAWebOnUnmount", "useWAWebPrevious"], (function (a, b, c, d, e, f, g) {
    var h, i, j;
    e = j || d("react");
    var k = h || (h = c("react")),
        l = e.cloneElement,
        m = e.useEffect,
        n = e.useRef,
        o = e.useState,
        p = {
            slide0: {
                transform: "xnn1q72",
                $$css: !0
            },
            slide1: {
                transform: "xvav9fi",
                $$css: !0
            },
            slide2: {
                transform: "x8r675y",
                $$css: !0
            },
            slide3: {
                opacity: "xg01cxk",
                transform: "x1o6clbr",
                $$css: !0
            },
            wrapper: {
                opacity: "x1hc1fzr",
                bottom: "x1ey2m1c",
                lineHeight: "xzl6hoh",
                marginTop: "xw7yly9",
                marginEnd: "xktsk01",
                marginBottom: "x1yztbdb",
                marginStart: "x1d52u69",
                minHeight: "xjwf9q1",
                position: "x10l6tqk",
                zIndex: "x1omtkq1",
                transition: "x1alf9jy",
                $$css: !0
            },
            center: {
                start: "xtzzx4i",
                left: null,
                right: null,
                marginStart: "x1mh8g0r",
                marginEnd: "x11i5rnm",
                maxWidth: "x65f84u",
                $$css: !0
            },
            transformLeft: {
                transform: "xuuh30",
                $$css: !0
            },
            transformRight: {
                transform: "xitnhlw",
                $$css: !0
            },
            right: {
                end: "xds687c",
                left: null,
                right: null,
                $$css: !0
            }
        },
        q = 3,
        r = 5 * 1e3;

    function a() {
        var a = c("useLazyRef")(function () {
                return new Map()
            }),
            e = function (b, c) {
                c ? a.current.set(b, c) : a.current["delete"](b)
            },
            f = c("useLazyRef")(function () {
                return new(c("WAWebSetRefCache"))(e)
            }),
            g = n(null),
            h = o({}),
            j = h[0],
            s = h[1],
            t = c("useWAWebPrevious")(j),
            w = function (b, c) {
                var d, e = (d = b.props.id) != null ? d : v();
                d = a.current.get(e);
                d ? d.restartDelay == null ? void 0 : d.restartDelay() : s(function (a) {
                    return babelHelpers["extends"]({}, a, (a = {}, a[e] = {
                        toast: b,
                        position: c,
                        id: e
                    }, a))
                })
            };
        h = function (a) {
            j[a] && s(function (b) {
                return c("lodash").omit(b, a)
            })
        };
        d("useWAWebListener").useListener(d("WAWebToastManager").ToastManager, "open_toast", w);
        d("useWAWebListener").useListener(d("WAWebToastManager").ToastManager, "close_toast", h);
        h = null;
        var x = c("useLazyRef")(function () {
            return new Map()
        });
        c("useWAWebOnUnmount")(function () {
            x.current.forEach(function (a) {
                return self.clearTimeout(a)
            })
        });
        d("useWAWebListener").useListener(h, "window_error", function (a) {
            var e = c("WAHash")(a);
            if (x.current.has(e)) return;
            var f = self.setTimeout(function () {
                x.current["delete"](e)
            }, r);
            x.current.set(e, f);
            w(k.jsx(d("WAWebToast.react").Toast, {
                msg: u(a),
                action: [{
                    actionText: "Copy",
                    onAction: function () {
                        void d("WAWebCopyToClipboard").copyTextToClipboard(a)
                    }
                }, {
                    actionText: "Report",
                    onAction: function () {
                        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                            yield d("WAWebOpenBugReportForm").openBugReportForm(a)
                        });

                        function e() {
                            return c.apply(this, arguments)
                        }
                        return e
                    }()
                }]
            }))
        });
        m(function () {
            var a;
            g.current = Object.keys((a = t) != null ? a : {}).length > Object.keys(j).length
        }, [j, t]);
        var y = g.current;
        h = c("lodash").sortBy(j, ["toast", "id"]).reverse().map(function (a, b) {
            var e = a.toast,
                g = a.position;
            a = a.id;
            return k.jsx("div", {
                className: (i || (i = c("stylex")))(p.wrapper, g === d("WAWebToastManager").ToastPosition.CENTER && p.center, g === d("WAWebToastManager").ToastPosition.RIGHT && p.right, b === 0 && y && p.slide0, b === 1 && p.slide1, b === 2 && p.slide2, b >= q && p.slide3),
                children: k.jsx("div", {
                    className: i(g === d("WAWebToastManager").ToastPosition.CENTER && (c("WAWebL10N").isRTL() ? p.transformRight : p.transformLeft)),
                    children: l(e, {
                        ref: f.current.getRefSetter(a),
                        id: a
                    })
                })
            }, a)
        });
        var z = d("WAWebUA").UA.isTrident ? "fade_sifo" : "toast-transition";
        return k.jsx(c("WAWebVelocityTransitionGroup"), {
            transitionName: z,
            children: h
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var s = "\ud83d\uded1",
        t = 200;

    function u(a) {
        a = a.length > t ? a.slice(0, t) + "..." : a;
        return s + " " + a
    }

    function v(a) {
        return c("lodash").uniqueId(a || "toast")
    }
    g.ToastManagerComponent = a
}), 98);
__d("WAWebTos.react", ["fbt", "WAWebConfirmPopup.react", "WAWebLogoutReasonConstants", "WAWebSocketModel", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = function () {
            d("WAWebSocketModel").Socket.logout(d("WAWebLogoutReasonConstants").LogoutReason.UserInitiated)
        };

    function a(a) {
        var b = a.children;
        a = a.description;
        return j.jsxs(d("WAWebConfirmPopup.react").ConfirmPopup, {
            cover: !0,
            cancelText: h._("__JHASH__3n1bF_cZdZK__JHASH__"),
            onCancel: k,
            okText: h._("__JHASH___sw1w0g68lI__JHASH__"),
            children: [a, "\xa0", b]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebApp.react", ["fbt", "invariant", "Promise", "WAComms", "WALogger", "WAMemoizeOne", "WANullthrows", "WAPromiseTimeout", "WAShiftTimer", "WAWeb-moment", "WAWebAlarm", "WAWebApi", "WAWebApiParse", "WAWebApp.scss", "WAWebAppMutex", "WAWebAppScreen", "WAWebAssetLoader", "WAWebAssetLoaderSingleton", "WAWebBizGatingUtils", "WAWebBrokerGlobalAppState", "WAWebChatPreferenceCollection", "WAWebClassnames", "WAWebClientExpiredDialog.react", "WAWebClock", "WAWebCmd", "WAWebConfirmPopup.react", "WAWebConflict.react", "WAWebConnModel", "WAWebContextMenuManager.react", "WAWebCrashlog", "WAWebDeepLinkClickWamEvent", "WAWebDeprecated.react", "WAWebEmojiAssetLoaderCompletionTracker", "WAWebErrorBoundary.react", "WAWebEventsWaitForEvent", "WAWebExternalLink.react", "WAWebFavicon.react", "WAWebFbtCommon", "WAWebKeyboardContext", "WAWebKeyboardHotKeys.react", "WAWebL10N", "WAWebLaunchSocket", "WAWebListenerHoc_DEPRECATED", "WAWebLockScreen.react", "WAWebLoggerImpl", "WAWebLogoutLoadingScreen.react", "WAWebLogoutReasonConstants", "WAWebModalManager", "WAWebModalManagerImpl.react", "WAWebMsgCollection", "WAWebNoop", "WAWebOffline.react", "WAWebPopover.react", "WAWebProxied.react", "WAWebPwaEventListeners", "WAWebPwaManifest", "WAWebSWBusInit", "WAWebSafariTakeover", "WAWebServiceUnavailable.react", "WAWebSmbLearnMore.react", "WAWebSocketModel", "WAWebStartup.react", "WAWebStorageCmd", "WAWebStreamModel", "WAWebStylesEnv", "WAWebSystemTheme", "WAWebTempBanScreen.react", "WAWebThemeContext", "WAWebToastManagerImpl", "WAWebTos.react", "WAWebUA", "WAWebUIRefreshGatingUtils", "WAWebURLUtils", "WAWebUim", "WAWebUimUie.react", "WAWebUpdater", "WAWebUpdaterUpdatePoll", "WAWebUserPrefsGeneral", "WAWebUserPrefsInfoStore", "WAWebUserPrefsKeys", "WAWebUserPrefsScreenLock", "WAWebUserPrefsStore", "WAWebWAWCStorage", "WAWebWallpaper", "WAWebWamOfflineResumeReporter", "WAWebWamPageLoadReporter", "asyncToGeneratorRuntime", "cr:6167", "deferredLoadComponent", "gkx", "react", "requireDeferred"], (function (a, b, c, d, e, f, g, h, i) {
    var j, k, l;

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Local Clock: ", ", Skew: ", ""]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] registerYesterdayTimer:rerenderUI relative timestamps"]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[storage] closed due to take over"]);
        o = function () {
            return a
        };
        return a
    }

    function p() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Failed to open indexeddb: ", ""]);
        p = function () {
            return a
        };
        return a
    }

    function q() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Modified a created iframe element to include sandbox attributes for security fix."]);
        q = function () {
            return a
        };
        return a
    }

    function r() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app]  prerendering: page is active"]);
        r = function () {
            return a
        };
        return a
    }

    function s() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app]  prerendering: error while listening for prerenderingchange"]);
        s = function () {
            return a
        };
        return a
    }

    function t() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app]  prerendering: waiting for page to activate"]);
        t = function () {
            return a
        };
        return a
    }

    function u() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] componentDidMount:visibilityState: ", ""]);
        u = function () {
            return a
        };
        return a
    }

    function v() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] componentDidMount:rerenderUI locale change"]);
        v = function () {
            return a
        };
        return a
    }

    function w() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[md takeover] tab taken over. stopping comms"]);
        w = function () {
            return a
        };
        return a
    }

    function x() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[unsupported takeover] refreshing page with unsupported takeover"]);
        x = function () {
            return a
        };
        return a
    }

    function y() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["DebouncedLoadingScreen: Ready for main screen"]);
        y = function () {
            return a
        };
        return a
    }

    function z() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[md takeover] refreshing page on takeover"]);
        z = function () {
            return a
        };
        return a
    }

    function A() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["UIM Print Failed!"]);
        A = function () {
            return a
        };
        return a
    }

    function B() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Focus at time of upload:"]);
        B = function () {
            return a
        };
        return a
    }

    function C() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["main:execApiCmd:", ""]);
        C = function () {
            return a
        };
        return a
    }
    var D = l || d("react"),
        E = k || (k = c("react")),
        F = D.Component,
        G = D.createRef,
        H = c("requireDeferred")("WAWebEmojiAssetLoader").__setRef("WAWebApp.react"),
        I = c("requireDeferred")("WAWebEmojiAssetLoaderConfig").__setRef("WAWebApp.react"),
        J = c("requireDeferred")("WAWebMainWrapper").__setRef("WAWebApp.react"),
        K = c("deferredLoadComponent")(c("requireDeferred")("WAWebLinkDeviceScreen.react").__setRef("WAWebApp.react"));
    c("gkx")("26262") && b("WAWebSWBusInit");
    var L = c("WAWebUserPrefsStore").get(d("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy) === 1,
        M;

    function a() {
        return M != null && M.hasPending()
    }

    function N(a) {
        var b = a.cmdAndData,
            c = a.isExternal;
        a = a.sessionId;
        var e = b.resultType,
            f = b.data;
        d("WALogger").LOG(C(), e).devConsole(f);
        M != null || i(0, 56382);
        if (e === "ADVERTISE" || e === "MANAGE_ADS" || e === "OPEN_CATALOG") return !1;
        e;
        return M.execApiCmd({
            cmdData: b,
            isExternal: c,
            sessionId: a
        })
    }

    function O(a) {
        a = a;
        while (a) {
            var b;
            b = a instanceof HTMLElement && ((b = a.dataset) == null ? void 0 : b.nohandle);
            if (b) return !1;
            a = a.parentElement
        }
        return !0
    }

    function P() {
        d("WAWebCmd").Cmd.logSocketSummary();
        d("WALogger").LOG(B());
        try {
            d("WAWebUim").UIM.pprint(!0)
        } catch (a) {
            d("WALogger").WARN(A()).devConsole(a)
        }
        return {
            platform: d("WAWebConnModel").Conn.platform,
            ref: d("WAWebConnModel").Conn.ref
        }
    }
    D = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, e;
            for (var f = arguments.length, g = new Array(f), h = 0; h < f; h++) g[h] = arguments[h];
            return (b = e = a.call.apply(a, [this].concat(g)) || this, e.contextMenuRef = G(), e.animate = !0, e.state = {
                mode: d("WAWebStreamModel").Stream.mode,
                updating: d("WAWebStreamModel").Stream.clientExpired,
                hardExpired: d("WAWebStreamModel").Stream.hardExpired,
                anotherSession: !1,
                takingOver: !1,
                isUnsupportedTakeover: !1,
                apiCmd: void 0,
                locale: c("WAWebL10N").getLocale(),
                mainLoaded: !1,
                theme: d("WAWebThemeContext").getTheme(),
                systemThemeMode: d("WAWebUserPrefsGeneral").getSystemThemeMode(),
                isKeyboardUser: !1,
                initialLoadReady: !1,
                startLogout: !1,
                stayInSync: !d("WAWebSocketModel").Socket.hasSynced,
                screenLocked: !1
            }, e.$8 = function (a) {
                e.state.isKeyboardUser !== a && e.setState({
                    isKeyboardUser: a
                })
            }, e.$11 = {
                up: function () {
                    return e.$8(!0)
                },
                down: function () {
                    return e.$8(!0)
                },
                left: function () {
                    return e.$8(!0)
                },
                right: function () {
                    return e.$8(!0)
                },
                home: function () {
                    return e.$8(!0)
                },
                end: function () {
                    return e.$8(!0)
                },
                "command+up": function () {
                    return e.$8(!0)
                },
                "command+down": function () {
                    return e.$8(!0)
                },
                pageUp: function () {
                    return e.$8(!0)
                },
                pageDown: function () {
                    return e.$8(!0)
                },
                tab: function () {
                    return e.$8(!0)
                },
                "shift+tab": function () {
                    return e.$8(!0)
                },
                "shift+?": function () {
                    return e.$8(!0)
                }
            }, e.$12 = new(d("WAShiftTimer").ShiftTimer)(function (a) {
                a !== e.state.mode && e.setState({
                    mode: a
                })
            }), e.$3 = function () {
                var a = d("WAWebStreamModel").Stream.mode;
                if (e.state.mode === d("WAWebStreamModel").StreamMode.MAIN) {
                    e.$12.forceRunNow(a);
                    return
                }
                e.$12.onOrBefore(0, a)
            }, e.$1 = function () {
                e.state.updating !== d("WAWebStreamModel").Stream.clientExpired && e.setState({
                    updating: d("WAWebStreamModel").Stream.clientExpired
                })
            }, e.$2 = function () {
                e.setState({
                    hardExpired: d("WAWebStreamModel").Stream.hardExpired
                })
            }, e.$15 = function (a) {
                a.detail !== 0 && e.$8(!1), d("WAWebCmd").Cmd.windowMouseDown(a)
            }, e.$16 = function (a) {
                d("WAWebCmd").Cmd.windowClick(a)
            }, e.$7 = function (a) {
                var b = a.target;
                if (!b) return;
                if (b.nodeName !== "A") return;
                var c = b.getAttribute("href");
                if (!c) return;
                if (!O(b)) return;
                b = d("WAWebApiParse").parseAPICmd(c);
                if (b.resultType === "INVALID" || b.resultType === "ADVERTISE" || b.resultType === "MANAGE_ADS" || b.resultType === "PAYMENT_LINK" || b.resultType === "OPEN_CATALOG") return;
                b.resultType;
                c = e.$14();
                e.$13() && N({
                    cmdAndData: b,
                    isExternal: !0,
                    sessionId: c
                }) && (e.$17(b, c), a.preventDefault())
            }, e.$17 = function (a, b) {
                if (a.resultType === d("WAWebApi").APICmd.GROUP_INVITE) new(d("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)({
                    deepLinkHasPhoneNumber: !1,
                    deepLinkHasText: !0
                }).commit();
                else if (a.resultType === d("WAWebApi").APICmd.MSG_SEND) {
                    var c = a.data.phone,
                        e = a.data.text;
                    new(d("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)({
                        deepLinkHasPhoneNumber: !!c,
                        deepLinkHasText: !!e,
                        deepLinkSessionId: b
                    }).commit()
                } else a.resultType === d("WAWebApi").APICmd.CATALOG ? new(d("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)({
                    deepLinkHasPhoneNumber: !0,
                    deepLinkHasText: !1
                }).commit() : a.resultType === d("WAWebApi").APICmd.PRODUCT && new(d("WAWebDeepLinkClickWamEvent").DeepLinkClickWamEvent)({
                    deepLinkHasPhoneNumber: !0,
                    deepLinkHasText: !1
                }).commit()
            }, e.$10 = function (a) {
                if (e.state.theme === a) return;
                for (var b of d("WAWebThemeContext").THEME_ASSETS[a]) d("WAWebAssetLoaderSingleton").AssetLoader.loadAsset(b, d("WAWebAssetLoader").LOAD_PRIORITY.THEME_ASSET_LOAD, !1);
                b = c("WAWebChatPreferenceCollection").get("defaultPreference");
                if (b && d("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER !== b.wallpaper) {
                    var f = d("WAWebWallpaper").toggleWallpaperColor(b.wallpaper, e.state.theme);
                    b.set("wallpaper", f)
                }
                d("WAWebThemeContext").setTheme(a);
                e.setState({
                    theme: a
                })
            }, e.$18 = function (a) {
                d("WAWebUserPrefsGeneral").setSystemThemeMode(a), e.setState({
                    systemThemeMode: a
                })
            }, e.$19 = function () {
                d("WALogger").LOG(z()), window.location.reload()
            }, e.$20 = function () {
                d("WALogger").LOG(y()), e.setState({
                    stayInSync: !1
                })
            }, e.$21 = function () {
                d("WALogger").LOG(x()), window.location.reload()
            }, e.$23 = c("WAMemoizeOne")(function (a) {
                var b = a.theme;
                a = a.systemThemeMode;
                return {
                    theme: b,
                    setTheme: e.$10,
                    systemThemeMode: a,
                    setSystemThemeMode: e.$18
                }
            }), b) || babelHelpers.assertThisInitialized(e)
        }
        var f = e.prototype;
        f.componentDidMount = function () {
            var a = this;
            d("WAWebCrashlog").registerCrashlogUploadInformationalLoggingFunction(P);
            d("WAWebPwaEventListeners").registerPwaDisplayModeListener();
            d("WAWebPwaEventListeners").registerPwaInstallListener();
            d("WAWebPwaManifest").updatePwaManifestOnMacOS();
            c("gkx")("26258") || d("WAWebLoggerImpl").Logger.registerErrorNotificationListener(function (a) {
                d("WAWebCmd").Cmd.windowError(a)
            });
            c("WAWebAppMutex").setShouldLaunchSocket(!L);
            L && void d("WAWebLaunchSocket").launchSocket(c("WAWebAppMutex").waitForCompletion());
            var e = this.state.theme;
            d("WAWebThemeContext").applyThemeToUI(e);
            T().then(function (a) {
                d("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(a), d("WAWebAssetLoaderSingleton").AssetLoader.loadInitialAssets(d("WAWebThemeContext").THEME_ASSETS[e])
            });
            R().then(function () {
                d("WAWebCmd").Cmd.mainLoaded(), a.setState({
                    mainLoaded: !0
                })
            }).then(function () {
                return (j || (j = b("Promise"))).all([H.load(), I.load(), T()])
            }).then(function (a) {
                var b = a[0],
                    c = a[1];
                a = a[2];
                d("WAWebAssetLoaderSingleton").AssetLoader.setPlatform(a);
                d("WAWebAssetLoaderSingleton").AssetLoader.initEmojiAsset(b.emojiAssetMapCreator(c()));
                d("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker.beginPreloadFallback()
            });
            var f = this.props.listeners;
            f.add(d("WAWebCmd").Cmd, "initial_load_ready", function () {
                a.setState({
                    initialLoadReady: !0
                })
            });
            f.add(d("WAWebStorageCmd").StorageCmd, "storage_not_enough_space", b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (yield d("WAWebModalManager").ModalManager.existsAsync()) return;
                d("WAWebModalManager").ModalManager.open(E.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOverlayClick: function (a) {
                        a.preventDefault()
                    },
                    onOK: function () {
                        d("WAWebSocketModel").Socket.logout(d("WAWebLogoutReasonConstants").LogoutReason.StorageQuotaExceeded)
                    },
                    okText: c("WAWebFbtCommon")("OK"),
                    children: h._("__JHASH__RUpeYjV5Hel__JHASH__")
                }), {
                    blockClose: !0
                })
            }));
            f.add(d("WAWebCmd").Cmd, "account_temporarily_banned", function (b) {
                a.setState({
                    temporaryBan: b
                })
            });
            f.add(d("WAWebCmd").Cmd, "service_unavailable_503", function () {
                a.setState({
                    serviceUnavailable: !0
                })
            });
            f.add(d("WAWebCmd").Cmd, "starting_logout", function () {
                a.setState({
                    startLogout: !0
                })
            });
            d("WAWebWamOfflineResumeReporter").OfflineResumeReporter.logOfflineStartT();
            f.add(window, "beforeunload", function () {
                (d("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab == null ? void 0 : d("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab()) || c("WAWebAppMutex").unloadMutex()
            });
            f.add(window, "unload", function () {
                (d("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab == null ? void 0 : d("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab()) || c("WAWebAppMutex").unloadMutex()
            });
            f.add(window, "storage", function (b) {
                b = c("WAWebAppMutex").storagePong(b);
                b && (d("WALogger").LOG(w()), d("WAComms").closeSocketAndPreventRetry(), d("WAWebLoggerImpl").Logger.onTakeOver(), a.setState({
                    takingOver: !1,
                    anotherSession: !0
                }))
            });
            f.add(d("WAWebStreamModel").Stream, "change:clientExpired", this.$1);
            f.add(d("WAWebStreamModel").Stream, "change:hardExpired", this.$2);
            f.add(d("WAWebStreamModel").Stream, "change:mode", this.$3);
            f.add(d("WAWebCmd").Cmd, "open_lock_screen_modal", function () {
                a.setState({
                    screenLocked: !0
                })
            });
            f.add(d("WAWebCmd").Cmd, "correct_passcode_lock_screen", function () {
                var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
                    yield d("WAWebMsgCollection").MsgCollection.decryptAndSetModels(b), a.setState({
                        screenLocked: !1,
                        stayInSync: !1
                    })
                });
                return function (a) {
                    return c.apply(this, arguments)
                }
            }());
            d("WAWebUserPrefsScreenLock").getScreenLockEnabled() && d("WAWebUserPrefsInfoStore").waNoiseInfo.cachedPasscodeDerivedKey == null && this.setState({
                screenLocked: !0
            });
            if (c("WAWebURLUtils").canMuckHistory()) {
                var g = d("WAWebApiParse").parseAPICmd(window.location.href);
                if (g.resultType !== d("WAWebApi").APICmd.INVALID && g.resultType !== "ADVERTISE" && g.resultType !== "MANAGE_ADS" && g.resultType !== "MESSAGE_YOURSELF" && g.resultType !== "EDIT_PROFILE_PICTURE" && g.resultType !== "STATUS_POST" && g.resultType !== "PAYMENT_LINK" && g.resultType !== "OPEN_CATALOG") {
                    var i, k = g.data.url;
                    ((i = g.data) == null ? void 0 : i.url) != null && delete g.data.url;
                    this.$4(g);
                    window.history.replaceState({}, "", (i = k) != null ? i : "/")
                }
            }
            f.add(c("WAWebL10N"), "locale_change", function () {
                d("WALogger").LOG(v()), d("WAWebClock").Clock.initIs24HourBasedOnLocale(), a.animate = !1, a.setState({
                    locale: c("WAWebL10N").getLocale() + "#" + c("WAWeb-moment").locale()
                })
            });
            this.$5();
            d("WALogger").LOG(u(), document.visibilityState);
            document.prerendering === !0 ? (d("WALogger").LOG(t()), c("WAWebEventsWaitForEvent")(document, "prerenderingchange")["catch"](function () {
                d("WALogger").LOG(s())
            })["finally"](function () {
                d("WALogger").LOG(r()), void a.$6(0)
            })) : document.visibilityState !== "visible" ? d("WAPromiseTimeout").promiseTimeout(c("WAWebEventsWaitForEvent")(document, "visibilitychange"), 5e3).then(function () {
                return a.$6(0)
            })["catch"](function () {
                return a.$6(0)
            }) : this.$6(0);
            this.props.listeners.add(window, "click", this.$7, {
                capture: !0
            });
            this.props.listeners.add(window, "blur", function () {
                a.$8(!1)
            });
            d("WAWebUpdaterUpdatePoll").updatePoll.poll(d("WAWebUpdaterUpdatePoll").checkForUpdates);
            this.$9();
            document.createElement = function (a) {
                return function (b, c) {
                    c === void 0 && (c = {});
                    if (b.toLowerCase() === "iframe") {
                        d("WALogger").WARN(q());
                        var e = a(b, c);
                        e.sandbox = "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox";
                        return e
                    }
                    return a(b, c)
                }
            }(document.createElement.bind(document));
            this.props.listeners.add(c("WAWebSystemTheme"), "system_theme_change", function (b) {
                a.state.systemThemeMode && a.$10(b)
            });
            g = document.getElementById("wa_web_initial_startup");
            (g == null ? void 0 : g.parentNode) && g.parentNode.removeChild(g)
        };
        f.componentDidUpdate = function (a, b) {
            b.anotherSession === !0 && this.state.anotherSession === !1 ? c("WAWebWAWCStorage").openDB()["catch"](function (a) {
                d("WALogger").WARN(p(), a)
            }) : b.anotherSession === !1 && this.state.anotherSession === !0 && c("WAWebWAWCStorage").idb().then(function (a) {
                c("WAWebBrokerGlobalAppState").takeOver = !0, a.close(), d("WALogger").LOG(o())
            })["catch"](c("WAWebNoop")), this.$4(this.state.apiCmd), this.state.mode !== d("WAWebStreamModel").StreamMode.MAIN && (this.animate = !0), this.$9()
        };
        f.componentWillUnmount = function () {
            this.$12.cancel()
        };
        f.$6 = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
                var e = this;
                b === void 0 && (b = !1);
                if (d("WAWebUA").UA.isLocalStorageBroken) {
                    var f = (yield d("WAWebSafariTakeover").isAnotherTabActive());
                    if (f) {
                        d("WAWebLoggerImpl").Logger.onTakeOver();
                        this.setState({
                            isUnsupportedTakeover: !0
                        });
                        try {
                            d("WAComms").stopComms()
                        } catch (a) {}
                        return
                    }
                }
                d("WAWebSafariTakeover").setTabActive();
                b && d("WAWebUpdater").Updater.shouldForceUpdateOnTakeOver() && d("WAWebUpdater").Updater.restart();
                f = b ? c("WAWebAppMutex").takeoverLocal(a) : c("WAWebAppMutex").init(a);
                b = (yield f["catch"](function (a) {
                    e.setState({
                        takingOver: !0
                    });
                    return e.$6(a, !0)
                }));
                d("WAWebLoggerImpl").Logger.isTakeOver = b;
                this.setState({
                    takingOver: !1,
                    anotherSession: b
                })
            });

            function e(b, c) {
                return a.apply(this, arguments)
            }
            return e
        }();
        f.$4 = function (a) {
            if (!a) return;
            if (a.resultType === "ADVERTISE" || a.resultType === "MANAGE_ADS" || a.resultType === "OPEN_CATALOG") return;
            a.resultType;
            if (this.$13()) {
                var b = this.$14();
                N({
                    cmdAndData: a,
                    isExternal: !0,
                    sessionId: b
                });
                this.state.apiCmd != null && this.setState({
                    apiCmd: null
                });
                return
            }
            a !== this.state.apiCmd && this.setState({
                apiCmd: a
            })
        };
        f.$13 = function () {
            return M != null && d("WAWebAppScreen").getScreen(this.state) === d("WAWebAppScreen").AppScreen.MAIN
        };
        f.$9 = function () {
            this.state.mode !== d("WAWebStreamModel").StreamMode.SYNCING && d("WAWebWamPageLoadReporter").logFirstRenderMountTimeOnce()
        };
        f.$5 = function () {
            var a = this;
            c("WAWebAlarm").setLocalTimeout(function () {
                d("WALogger").LOG(n()), d("WALogger").LOG(m(), Date.now(), d("WAWebClock").Clock.getSkew()), d("WAWebCmd").Cmd.midnight(), a.$5()
            }, c("WAWeb-moment")().endOf("day").valueOf())
        };
        f.$22 = function () {
            var a = this,
                e = d("WAWebAppScreen").getScreen(this.state);
            b("cr:6167") == null ? void 0 : b("cr:6167").setAppScreen(e);
            switch (e) {
                case d("WAWebAppScreen").AppScreen.CLIENT_EXPIRED_DIALOG:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").DefaultFavicon, {
                            children: E.jsx(c("WAWebClientExpiredDialog.react"), {})
                        }), requiresBackendCheck: !1
                    };
                case d("WAWebAppScreen").AppScreen.ANOTHER_SESSION:
                    var f;
                    this.state.takingOver ? (e = c("WAWebNoop"), f = h._("__JHASH__IRiaYmEAXw8__JHASH__")) : (e = function () {
                        a.$19()
                    }, f = h._("__JHASH__1R6w_U9TBBp__JHASH__"));
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebConflict.react"), {
                                cancelText: c("WAWebFbtCommon")("Close"),
                                onCancel: window.open.bind(window, "https://www.whatsapp.com/", "_self"),
                                okText: f,
                                onOK: e,
                                children: h._("__JHASH__ycGhtbp8Bgc__JHASH__")
                            })
                        }), requiresBackendCheck: !1
                    };
                case d("WAWebAppScreen").AppScreen.UNSUPPORTED_TAKEOVER:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebConflict.react"), {
                                okText: h._("__JHASH__zbNMtbyTq97__JHASH__"),
                                onOK: this.$21,
                                children: h._("__JHASH__wwtwk3nCUOr__JHASH__")
                            })
                        }), requiresBackendCheck: !1
                    };
                case d("WAWebAppScreen").AppScreen.SERVICE_UNAVAILABLE:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebServiceUnavailable.react"), {})
                        }), requiresBackendCheck: !1
                    };
                case d("WAWebAppScreen").AppScreen.TEMP_BAN:
                    return {
                        ui: E.jsx(c("WAWebTempBanScreen.react"), {
                            banData: this.state.temporaryBan
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.QR:
                    return {
                        ui: E.jsxs(d("WAWebFavicon.react").DefaultFavicon, {
                            children: [E.jsx(d("WAWebModalManagerImpl.react").ModalManagerComponent, {
                                type: d("WAWebModalManagerImpl.react").ModalType
                            }, "modal-manager"), E.jsx(K, {
                                apiCmd: this.state.apiCmd
                            }, "qr-code")]
                        }), extraClasses: c("WAWebApp.scss").isQR, requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.STARTUP:
                case d("WAWebAppScreen").AppScreen.SYNCING:
                    f = E.jsx(c("WAWebStartup.react"), {
                        initialLoadReady: this.state.initialLoadReady,
                        onReady: this.$20
                    });
                    c("gkx")("26258") || (f = [E.jsx(d("WAWebModalManagerImpl.react").ModalManagerComponent, {
                        type: d("WAWebModalManagerImpl.react").ModalType
                    }, "modal-manager"), E.jsx(c("WAWebStartup.react"), {
                        initialLoadReady: this.state.initialLoadReady,
                        onReady: this.$20
                    }, "start-up")]);
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").DefaultFavicon, {
                            children: f
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.OFFLINE:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebOffline.react"), {})
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.PROXYBLOCK:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebProxied.react"), {})
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.CONFLICT:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebConflict.react"), {
                                cancelText: h._("__JHASH__3n1bF_cZdZK__JHASH__"),
                                onCancel: function () {
                                    return d("WAWebSocketModel").Socket.logout()
                                },
                                okText: h._("__JHASH__1R6w_U9TBBp__JHASH__"),
                                onOK: function () {
                                    return d("WAWebSocketModel").Socket.takeover()
                                },
                                children: h._("__JHASH__imlCCn7AkN2__JHASH__")
                            })
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.TOS_BLOCK:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebTos.react"), {
                                description: h._("__JHASH__ZKk5BXEY1xF__JHASH__")
                            })
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.SMB_TOS_BLOCK:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebTos.react"), {
                                description: h._("__JHASH__ENyJ8_tocpV__JHASH__"),
                                children: E.jsx(c("WAWebSmbLearnMore.react"), {})
                            })
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.DEPRECATED_VERSION:
                    return {
                        ui: E.jsx(d("WAWebFavicon.react").ErrorFavicon, {
                            children: E.jsx(c("WAWebDeprecated.react"), {})
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.LOGOUT:
                    return {
                        ui: E.jsxs(d("WAWebFavicon.react").DefaultFavicon, {
                            children: [E.jsx(d("WAWebModalManagerImpl.react").ModalManagerComponent, {
                                type: d("WAWebModalManagerImpl.react").ModalType
                            }, "modal-manager"), E.jsx(c("WAWebLogoutLoadingScreen.react"), {}, "logout")]
                        }), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.SCREEN_LOCK:
                    return {
                        ui: E.jsx(c("WAWebLockScreen.react"), {}), requiresBackendCheck: !0
                    };
                case d("WAWebAppScreen").AppScreen.MAIN:
                    e = c("WANullthrows")(M);
                    f = e.MainComponent;
                    return {
                        ui: [E.jsx(d("WAWebToastManagerImpl").ToastManagerComponent, {}, "toast-manager"), E.jsx((e = d("WAWebModalManagerImpl.react")).ModalManagerComponent, {
                            contextMenuRef: this.contextMenuRef,
                            type: e.ModalType
                        }, "main-modal-manager"), E.jsx(e.ModalManagerComponent, {
                            contextMenuRef: this.contextMenuRef,
                            type: e.MediaType
                        }, "media-modal-manager"), E.jsx(e.ModalManagerComponent, {
                            type: e.AlertType
                        }, "alert-modal-manager"), E.jsx((e = d("WAWebContextMenuManager.react")).ContextMenuManager, {
                            ref: this.contextMenuRef,
                            type: e.Type.MENU
                        }, "context-menu-manager"), E.jsx(e.ContextMenuManager, {
                            type: e.Type.TOOLTIP
                        }, "tooltip-manager"), E.jsx(d("WAWebEmojiAssetLoaderCompletionTracker").InitialEmojisCompletionContext.Provider, {
                            value: d("WAWebEmojiAssetLoaderCompletionTracker").emojiCompletionTracker,
                            children: E.jsx(f, {
                                conn: d("WAWebConnModel").Conn,
                                animate: this.animate
                            })
                        }, "main")], extraClasses: c("WAWebApp.scss").isMain, requiresBackendCheck: !0
                    }
            }
        };
        f.$14 = function () {
            var a = d("WAWebBizGatingUtils").smbClickToChatLoggingEnabled() ? Math.floor(2147483648 * Math.random()).toString() : void 0;
            return a
        };
        f.render = function () {
            var a = d("WAWebAppScreen").getScreen(this.state);
            d("WAWebWamPageLoadReporter").maybeLogInitialScreenRenderStart(a);
            var b = this.state.isKeyboardUser,
                e = this.$22(),
                f = e.ui,
                g = e.extraClasses;
            e = e.requiresBackendCheck;
            var h = d("WAWebUIRefreshGatingUtils").materialRefreshEnabled();
            h = d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebApp.scss").wrapper, g, (g = {
                "app-wrapper-web": !0,
                "safari-fix": (g = d("WAWebStylesEnv")).hasSafariFix,
                "font-fix": g.hasFontFix,
                "os-mac": g.isOSMac,
                "os-win": g.isOSWin,
                "keyboard-user": b
            }, g[c("WAWebApp.scss").stripe] = !h, g));
            e && M != null && M.notificationBackend.shutdownAsNeeded();
            g = a === d("WAWebAppScreen").AppScreen.STARTUP || a === d("WAWebAppScreen").AppScreen.SYNCING;
            e = g ? "loading-screen" : this.state.locale;
            return E.jsx(d("WAWebThemeContext").ThemeContext.Provider, {
                value: this.$23({
                    theme: this.state.theme,
                    systemThemeMode: this.state.systemThemeMode
                }),
                children: E.jsx(c("WAWebKeyboardContext").Provider, {
                    value: {
                        isKeyboardUser: b,
                        setIsKeyboardUser: this.$8
                    },
                    children: E.jsx(d("WAWebErrorBoundary.react").ErrorBoundary, {
                        name: "app-wrapper",
                        children: E.jsx(d("WAWebUimUie.react").UIE, {
                            displayName: "App",
                            uimState: d("WAWebUim").UIMState.INACTIVE,
                            children: E.jsxs(d("WAWebKeyboardHotKeys.react").HotKeys, {
                                handlers: this.$11,
                                className: h,
                                tabIndex: null,
                                onMouseDownCapture: this.$15,
                                onClickCapture: this.$16,
                                children: [E.jsx(d("WAWebPopover.react").PopoverPortalBucket, {}), f]
                            }, e)
                        })
                    })
                })
            })
        };
        return e
    }(F);
    var Q = d("WAWebListenerHoc_DEPRECATED").ListenerHOC(D);

    function e() {
        return E.jsx(Q, {})
    }
    e.displayName = e.name + " [from " + f.id + "]";

    function R() {
        return S.apply(this, arguments)
    }

    function S() {
        S = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = (yield(j || (j = b("Promise"))).all([J.load(), T()])),
                c = a[0];
            a = a[1];
            d("WAWebWamPageLoadReporter").mainScriptTimer.start();
            M = c(a);
            d("WAWebWamPageLoadReporter").mainScriptTimer.end()
        });
        return S.apply(this, arguments)
    }

    function T() {
        return d("WAWebConnModel").Conn.platform ? (j || (j = b("Promise"))).resolve(d("WAWebConnModel").Conn.platform) : new(j || (j = b("Promise")))(function (a) {
            var b = function b() {
                var c = d("WAWebConnModel").Conn.platform;
                if (c == null) return;
                d("WAWebConnModel").Conn.off("change:platform", b);
                a(c)
            };
            d("WAWebConnModel").Conn.on("change:platform", b)
        })
    }
    g.hasPending = a;
    g.App = e
}), 226);
__d("WAWebAppSwInitializer", ["Promise", "WALogger", "WAWebABProps", "WAWebFeatureDetectionSwSupport", "WAWebPwaDocumentMetadataUtils", "WAWebSwUpdater", "WAWebUA", "asyncToGeneratorRuntime", "gkx", "justknobx"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["service-worker-unregistration-failure: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["service-worker-unregistration-failure: ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Unregister invalid service worker: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["service-worker-registration-failure: ", ""]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["service-worker-unregistration-failure: ", ""]);
        m = function () {
            return a
        };
        return a
    }

    function a() {
        return n.apply(this, arguments)
    }

    function n() {
        n = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a;
            if (!c("gkx")("26262") || s()) return q();
            if (!c("WAWebFeatureDetectionSwSupport").supported || window.navigator.serviceWorker == null) return;
            ((a = window.navigator.serviceWorker) == null ? void 0 : a.controller) && (yield d("WAWebSwUpdater").updateSw());
            if (!c("gkx")("26258") && ((a = window.navigator.serviceWorker) == null ? void 0 : a.controller)) {
                a = (yield window.navigator.serviceWorker.getRegistrations == null ? void 0 : window.navigator.serviceWorker.getRegistrations());
                if (a) {
                    var e = [];
                    for (a of a) a.scope !== window.location.origin + window.location.pathname && e.push(a.unregister()["catch"](function (a) {
                        d("WALogger").ERROR(m(), a.stack).devConsole(a).sendLogs("service-worker-unregistration-failure")
                    }));
                    yield(h || (h = b("Promise"))).all(e)
                }
            }
            c("justknobx")._("2157") && (yield o());
            if (!((a = window.navigator.serviceWorker) == null ? void 0 : a.controller)) try {
                e = "/sw.js";
                yield window.navigator.serviceWorker.register(e, {
                    scope: "/",
                    updateViaCache: "all"
                })
            } catch (a) {
                d("WALogger").ERROR(l(), a.stack).devConsole(a).sendLogs("service-worker-registration-failure", {
                    sampling: .01
                })
            }
        });
        return n.apply(this, arguments)
    }

    function o() {
        return p.apply(this, arguments)
    }

    function p() {
        p = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a;
            a = (yield(a = window.navigator.serviceWorker) == null ? void 0 : a.getRegistrations == null ? void 0 : a.getRegistrations());
            if (a) {
                var c = [];
                for (a of a) {
                    var e;
                    if ((e = a.active) == null ? void 0 : (e = e.scriptURL) == null ? void 0 : e.endsWith("/serviceworker.js")) {
                        d("WALogger").LOG(k(), (e = a.active) == null ? void 0 : e.scriptURL);
                        c.push(a.unregister()["catch"](function (a) {
                            d("WALogger").ERROR(j(), a.stack).devConsole(a).sendLogs("service-worker-unregistration-failure")
                        }))
                    }
                }
                yield(h || (h = b("Promise"))).all(c)
            }
        });
        return p.apply(this, arguments)
    }

    function q() {
        return r.apply(this, arguments)
    }

    function r() {
        r = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a;
            a = (yield(a = window.navigator.serviceWorker) == null ? void 0 : a.getRegistrations == null ? void 0 : a.getRegistrations());
            if (a) {
                var c = [];
                for (a of a) c.push(a.unregister()["catch"](function (a) {
                    d("WALogger").ERROR(i(), a.stack).devConsole(a).sendLogs("service-worker-unregistration-failure")
                }));
                yield(h || (h = b("Promise"))).all(c)
            }
        });
        return r.apply(this, arguments)
    }

    function s() {
        return d("WAWebABProps").getABPropConfigValue("web_disable_sw_on_safari_pwa") && d("WAWebUA").UA.isSafari && d("WAWebPwaDocumentMetadataUtils").isCurrentWebSessionInsidePwa()
    }
    g.initializeSw = a
}), 98);
__d("WAWebBrokerBackendInterface", ["WAWebBrokerGlobalAppState", "WAWebCrashlog", "WAWebInvocationDispatcher"], (function (a, b, c, d, e, f, g) {
    a = {
        setLogoutState: function (a) {
            c("WAWebBrokerGlobalAppState").isLogoutInProgress = a;
            return c("WAWebInvocationDispatcher").invoke("setLogoutState", [a])
        },
        sendLogs: function (a, b) {
            return d("WAWebCrashlog").sendLogs(a, {
                sampling: b == null ? void 0 : b.sampling
            })
        },
        deleteDbEncKeyCache: function () {
            return c("WAWebInvocationDispatcher").invoke("deleteDbEncKeyCache", [])
        },
        initDatabaseEncnKey: function (a) {
            return c("WAWebInvocationDispatcher").invoke("initDatabaseEncnKey", [a])
        },
        generateFinalDbEncryptionAndFtsKey: function (a) {
            return c("WAWebInvocationDispatcher").invoke("generateFinalDbEncryptionAndFtsKey", [a])
        },
        setSchemaVersions: function (a) {
            return c("WAWebInvocationDispatcher").invoke("setSchemaVersions", [a])
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebArchiveSettingSync", ["Promise", "WALogger", "WASyncAction.pb", "WASyncdAction", "WASyncdConst", "WAWebAndroidUnsupportedActionsSync", "WAWebApiActiveMessageRanges", "WAWebChatCollection", "WAWebMessageRangeUtils", "WAWebModelStorageUtils", "WAWebSchemaActiveMessageRanges", "WAWebSchemaChat", "WAWebSettingsGetters", "WAWebSettingsModel", "WAWebSyncdDb", "WAWebUserPrefsMultiDevice", "WAWebWidFactory", "asyncToGeneratorRuntime", "decodeProtobuf", "err"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Archive_Setting_Sync: Update some chats as side effects for setting 'off'"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Archive_Setting_Sync: Updating chats side effects for setting 'off'"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Archive_Setting_Sync: Update some chats as side effects for setting 'on'"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Archive_Setting_Sync: Update chats side effects for setting 'on': Iteration took ", "ms"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Archive_Setting_Sync: Unsupported rangeEnclosedType ", ""]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["unarchive ", " as ", ""]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Archive_Setting_Sync: Updating chats side effects for setting 'on'"]);
        o = function () {
            return a
        };
        return a
    }

    function p() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["archive setting sync: no mutations"]);
        p = function () {
            return a
        };
        return a
    }

    function q() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["archive setting sync: operation not supported"]);
        q = function () {
            return a
        };
        return a
    }

    function r() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: successfully set unarchiveChatsSetting to ", ""]);
        r = function () {
            return a
        };
        return a
    }

    function s() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: successfully set ArchiveV2Enabled to true"]);
        s = function () {
            return a
        };
        return a
    }

    function t() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["archive setting sync: malformed mutation"]);
        t = function () {
            return a
        };
        return a
    }

    function u() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["binarySyncAction should not be null"]);
        u = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 4
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.UnarchiveChatsSetting
        };
        f.decodeValue = function (a) {
            if (a.binarySyncData) {
                var b = d("decodeProtobuf").decodeProtobuf(d("WASyncAction.pb").SyncActionDataSpec, a.binarySyncData);
                if (b.value) return b.value
            } else {
                if (!a.binarySyncAction) {
                    d("WALogger").ERROR(u()).tags("syncd").sendLogs("syncd binarySyncAction should not be null");
                    throw c("err")("binarySyncAction should not be null")
                }
                return d("decodeProtobuf").decodeProtobuf(d("WASyncAction.pb").SyncActionValueSpec, a.binarySyncAction)
            }
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e) {
                var f = this;
                c("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("other mutation");
                var g = e.setMutationsPendingToPersist;
                if (a.length > 0) {
                    e = a[a.length - 1];
                    try {
                        a = [];
                        if (e.operation === "set") {
                            e = e.value;
                            e = e.unarchiveChatsSetting;
                            if ((e == null ? void 0 : e.unarchiveChats) == null) {
                                d("WALogger").WARN(t());
                                return [{
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }]
                            }
                            var h = e.unarchiveChats;
                            e = (yield d("WAWebUserPrefsMultiDevice").getArchiveV2EnabledSetting());
                            e || (yield d("WAWebUserPrefsMultiDevice").setArchiveV2EnabledSetting(!0), c("WAWebSettingsModel").archive = babelHelpers["extends"]({}, d("WAWebSettingsGetters").getArchive(c("WAWebSettingsModel")), {
                                enabled: !0
                            }), d("WALogger").DEV(s()));
                            yield d("WAWebUserPrefsMultiDevice").setUnarchiveChatsSetting(h);
                            c("WAWebSettingsModel").archive = babelHelpers["extends"]({}, d("WAWebSettingsGetters").getArchive(c("WAWebSettingsModel")), {
                                classic: h
                            });
                            d("WALogger").DEV(r(), h);
                            yield d("WAWebModelStorageUtils").getStorage().lock(["message", "chat", "sync-actions", "active-message-ranges"], b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                                a = (yield f.updateSideEffectOnChats(h, g)), yield d("WAWebSchemaChat").getChatTable().bulkCreateOrMerge(a)
                            }));
                            a.forEach(function (a) {
                                var b = d("WAWebWidFactory").createWid(a.id);
                                b = d("WAWebChatCollection").ChatCollection.get(b);
                                b && (b.archive = a.archive)
                            });
                            return [{
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }]
                        }
                        d("WALogger").WARN(q());
                        return [{
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }]
                    } catch (a) {
                        return [{
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }]
                    }
                }
                d("WALogger").WARN(p());
                return [{
                    actionState: d("WASyncdConst").SyncActionState.Failed
                }]
            });

            function e(b, c) {
                return a.apply(this, arguments)
            }
            return e
        }();
        f.$ArchiveSettingSync1 = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var c = this,
                    e = [];
                d("WALogger").DEV(o());
                var f = self.performance.now(),
                    g = (yield d("WAWebSchemaChat").getChatTable().all());
                g = g.filter(function (a) {
                    return a.archive
                }).map(function (a) {
                    return a.id
                });
                var i = (yield(h || (h = b("Promise"))).all(g.map(function (a) {
                        return d("WAWebApiActiveMessageRanges").getActiveMessageRanges(a)
                    }))),
                    j = i.flat().filter(function (a) {
                        return a.action === d("WAWebSchemaActiveMessageRanges").ActiveRangeAction.Archive
                    }).map(function (a) {
                        return a.chatId
                    });
                i = g.filter(function (a) {
                    return !j.includes(a)
                });
                g = (yield h.all(i.map(function (c) {
                    c = d("WAWebWidFactory").createWid(c);
                    var e = JSON.stringify([d("WASyncdConst").Actions.Archive, c.toString({
                        legacy: !0
                    })]);
                    c = a.find(function (a) {
                        return a.index === e
                    });
                    return c ? (h || (h = b("Promise"))).resolve(c) : d("WAWebSyncdDb").getSyncAction(e)
                })));
                i = g.filter(function (a) {
                    if (!a) return !1;
                    var b = c.decodeValue(a).archiveChatAction;
                    return [d("WASyncdConst").SyncActionState.Success, d("WASyncdConst").SyncActionState.Orphan].includes(a.actionState) && (b == null ? void 0 : b.archived) && b.messageRange
                }).map(function (a) {
                    var b = a && c.decodeValue(a).archiveChatAction;
                    a = a ? JSON.parse(a.index)[1] : "";
                    return [a, b == null ? void 0 : b.messageRange]
                });
                var p = new Map(i);
                g = Array.from(p.keys());
                var q = (yield h.all(g.map(function (a) {
                    return d("WAWebMessageRangeUtils").constructMessageRange(d("WAWebWidFactory").createWid(a), {
                        forOutgoingMutation: !1
                    })
                })));
                g.forEach(function (a, b) {
                    b = q[b];
                    var c = p.get(a);
                    if (c) {
                        b = d("WAWebMessageRangeUtils").compareMessageRanges(b, c);
                        if (b === d("WAWebMessageRangeUtils").MessageRangeEncloseType.RangeAEnclosesRangeB || b === d("WAWebMessageRangeUtils").MessageRangeEncloseType.RangesNotEnclosing) {
                            d("WALogger").DEV(n(), a, b);
                            c = d("WAWebWidFactory").createWid(a);
                            e.push({
                                id: c.toString({
                                    legacy: !1
                                }),
                                archive: !1
                            })
                        } else d("WALogger").WARN(m(), b).sendLogs("ArchiveSettingSync setting true rangeEnclosedType unsupported")
                    }
                });
                i = self.performance.now();
                d("WALogger").DEV(l(), i - f);
                e.length > 0 && d("WALogger").DEV(k());
                return e
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        f.$ArchiveSettingSync2 = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b = this,
                    c = [];
                d("WALogger").DEV(j());
                var e = (yield d("WAWebSyncdDb").getSyncActionsRows(["action"], [d("WASyncdConst").Actions.Archive]));
                a = a.filter(function (a) {
                    return a.action === d("WASyncdConst").Actions.Archive
                });
                var f = a.map(function (a) {
                    return a.index
                });
                e = e.filter(function (a) {
                    return !f.includes(a.index)
                });
                e = [].concat(e, a);
                a = e.filter(function (a) {
                    if (a.actionState === d("WASyncdConst").SyncActionState.Success) {
                        a = b.decodeValue(a);
                        return (a = a.archiveChatAction) == null ? void 0 : a.archived
                    }
                    return !1
                });
                a.forEach(function (a) {
                    a = JSON.parse(a.index)[1];
                    a = d("WAWebWidFactory").createWid(a);
                    c.push({
                        id: a.toString({
                            legacy: !1
                        }),
                        archive: !0
                    })
                });
                c.length > 0 && d("WALogger").DEV(i());
                return c
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        f.updateSideEffectOnChats = function (a, b) {
            return a ? this.$ArchiveSettingSync1(b) : this.$ArchiveSettingSync2(b)
        };
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebChatLockSettingsSync", ["WALogger", "WAProtobufsUserPassword.pb", "WASyncdAction", "WASyncdConst", "WAWebChatLockSettings", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: received mutations but could not parse"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: saving chatlock settings"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: malformed mutation: transformer args missing"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: malformed mutation: transformer type incompatible"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: malformed mutation: secret data missing"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: malformed mutation: hideLockedChats is null"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: malformed mutation: settings is null"]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["ChatLockSettingsSync: operation not supported: ", ""]);
        o = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.ChatLockSettings
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b, c = a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(o(), a.operation);
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    a = a.value.chatLockSettings;
                    if (a == null) {
                        d("WALogger").WARN(n());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    var c = a.secretCode;
                    a = a.hideLockedChats;
                    if (a == null) {
                        d("WALogger").WARN(m());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    b = {
                        hideLockedChats: a,
                        secretCode: null
                    };
                    if (c != null) {
                        a = c.transformedData;
                        var e = c.transformer,
                            f = c.transformerArg;
                        c = c.encoding;
                        if (f == null || e == null || a == null || c == null) {
                            d("WALogger").WARN(l());
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Malformed
                            }
                        }
                        if (e !== d("WAProtobufsUserPassword.pb").UserPassword$Transformer.PBKDF2_HMAC_SHA512) {
                            d("WALogger").WARN(k());
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Malformed
                            }
                        }
                        f = f.reduce(function (a, b) {
                            if (b.value == null) return a;
                            b.key === "iterations" ? a.iterations = b.value.asUnsignedInteger : b.key === "salt" && (a.salt = b.value.asBlob);
                            return a
                        }, {});
                        if (f.iterations == null || f.salt == null) {
                            d("WALogger").WARN(j());
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Malformed
                            }
                        }
                        b.secretCode = {
                            iterations: f.iterations,
                            encoding: c,
                            salt: f.salt,
                            transformer: e,
                            data: a
                        }
                    }
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                });
                if (b != null) {
                    d("WALogger").LOG(i()).devConsole({
                        chatlockSettings: b,
                        mutations: a
                    });
                    var e = d("WAWebChatLockSettings").getChatLockSettings();
                    e.updateAndSave(b)
                } else d("WALogger").WARN(h()).devConsole(a);
                return c
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebCustomPaymentMethodsSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebABProps", "WAWebBackendApi", "WAWebMobilePlatforms", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Custom Payment Methods sync: successfully synced payment methods"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Custom Payment Methods sync: malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Custom Payment Methods sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Custom Payment Methods sync: operation not supported, user does not pass ABProp"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Custom Payment Methods sync: operation not supported, app is not SMB"]);
        l = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.CustomPaymentMethods
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (d("WAWebMobilePlatforms").isSMB() !== !0) {
                    d("WALogger").WARN(l());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                if (d("WAWebABProps").getABPropConfigValue("payments_br_pix_phase_1_seller_sync_enabled") !== !0) {
                    d("WALogger").WARN(k());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                return a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    }
                    a = (a = a.value.customPaymentMethodsAction) == null ? void 0 : a.customPaymentMethods;
                    if (a == null) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    d("WAWebBackendApi").frontendFireAndForget("setCustomPaymentMethods", {
                        customPaymentMethods: a
                    });
                    d("WALogger").DEV(h());
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                })
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebDeviceCapabilitiesSync", ["Promise", "WALogger", "WAServerSync.pb", "WASyncAction.pb", "WASyncdAction", "WASyncdActionUtils", "WASyncdConst", "WATimeUtils", "WAWebABProps", "WAWebSyncd", "WAWebSyncdDb", "WAWebUserPrefsMeUser", "asyncToGeneratorRuntime", "decodeProtobuf"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["DeviceCapabilitiesSync: not syncing capabilities due to no change"]);
        i = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.DeviceCapabilities
        };
        e.getJidIndex = function () {
            return d("WAWebUserPrefsMeUser").assertGetMe().toString({
                legacy: !0
            })
        };
        e.capabilitiesHaveChanged = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b = (yield d("WAWebSyncdDb").getSyncActionsRows(["index"], [a.index]));
                b = b.reduce(function (a, b) {
                    if (b.actionState === d("WASyncdConst").SyncActionState.Success) {
                        a = d("decodeProtobuf").decodeProtobuf(d("WASyncAction.pb").SyncActionDataSpec, b.binarySyncData);
                        b = a.value;
                        if (b == null ? void 0 : b.deviceCapabilities) return b.deviceCapabilities
                    }
                }, {});
                a = d("decodeProtobuf").decodeProtobuf(d("WASyncAction.pb").SyncActionValueSpec, a.binarySyncAction);
                a = a.deviceCapabilities;
                return {
                    hasChanged: JSON.stringify(b) !== JSON.stringify(a),
                    currentCapabilities: b,
                    newCapabilities: a
                }
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                return a.map(function () {
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                })
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        e.getMutation = function (a, b) {
            return d("WASyncdActionUtils").buildPendingMutation({
                collection: d("WASyncdConst").CollectionName.RegularLow,
                indexArgs: [this.getJidIndex()],
                value: {
                    deviceCapabilities: babelHelpers["extends"]({}, b)
                },
                version: this.getVersion(),
                operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: a,
                action: this.getAction()
            })
        };
        e.sendMutation = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (!d("WAWebABProps").getABPropConfigValue("device_capabilities_sync_enabled")) return;
                a = this.getMutation(d("WATimeUtils").unixTimeMs(), a);
                var c = (yield this.capabilitiesHaveChanged(a));
                if (!c.hasChanged) {
                    d("WALogger").LOG(i()).devConsole(c);
                    return
                }
                yield d("WAWebSyncd").lockForSync([], [a], function () {
                    return (h || (h = b("Promise"))).resolve()
                })
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebDBFavoriteDatabaseApi", ["WAWebSchemaFavorite", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            yield d("WAWebSchemaFavorite").getFavoriteTable().bulkCreateOrReplace(a)
        });
        return h.apply(this, arguments)
    }

    function c(a) {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            yield d("WAWebSchemaFavorite").getFavoriteTable().clear(), yield d("WAWebSchemaFavorite").getFavoriteTable().bulkCreateOrReplace(a)
        });
        return i.apply(this, arguments)
    }

    function e(a) {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            yield d("WAWebSchemaFavorite").getFavoriteTable().bulkRemove(a)
        });
        return j.apply(this, arguments)
    }

    function f() {
        return k.apply(this, arguments)
    }

    function k() {
        k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = (yield d("WAWebSchemaFavorite").getFavoriteTable().all());
            if (a.length === 0) return 0;
            a = Math.max.apply(Math, a.map(function (a) {
                a = a.orderIndex;
                return a
            }));
            return a + 1
        });
        return k.apply(this, arguments)
    }
    g.addOrEditFavorites = a;
    g.setFavorites = c;
    g.removeFavorites = e;
    g.getNextFavoriteOrderIndex = f
}), 98);
__d("WAWebFavoritesSync", ["WALogger", "WAServerSync.pb", "WASyncdAction", "WASyncdActionUtils", "WASyncdConst", "WAWebDBFavoriteDatabaseApi", "WAWebFavoriteCollection", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Favorites sync: successfully set favorites to"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["favorites sync: malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["favorites sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 1
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.Favorites
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b, c;
                a = a.map(function (a) {
                    var b;
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    if (((b = a.value.favoritesAction) == null ? void 0 : b.favorites) == null) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }(c == null || a.timestamp > c.timestamp) && (c = a);
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                });
                b = (b = c) == null ? void 0 : (b = b.value.favoritesAction) == null ? void 0 : b.favorites;
                if (b != null) {
                    var e = 0;
                    b = b.reduce(function (a, b) {
                        b = b.id;
                        b != null && a.push({
                            id: b,
                            orderIndex: e++
                        });
                        return a
                    }, []);
                    yield d("WAWebDBFavoriteDatabaseApi").setFavorites(b);
                    d("WAWebFavoriteCollection").FavoriteCollection.set(b.map(function (a) {
                        return {
                            id: a.id,
                            orderIndex: a.orderIndex
                        }
                    }));
                    d("WALogger").DEV(h()).devConsole(b)
                }
                return a
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        e.getFavoritesMutation = function (a, b) {
            return d("WASyncdActionUtils").buildPendingMutation({
                collection: d("WASyncdConst").CollectionName.RegularHigh,
                indexArgs: [],
                operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                timestamp: b,
                action: this.getAction(),
                value: {
                    favoritesAction: {
                        favorites: a.sort(function (a, b) {
                            return a.orderIndex - b.orderIndex
                        }).map(function (a) {
                            a = a.id;
                            return {
                                id: a
                            }
                        })
                    }
                }
            })
        };
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebLabelJidSync", ["Promise", "WALogger", "WASyncdAction", "WASyncdConst", "WAWebBizLabelItemParentType", "WAWebBizLabelUtils", "WAWebChatCollection", "WAWebChatModel", "WAWebSchemaChat", "WAWebSchemaLabelAssociation", "WAWebSyncdActionUtils", "WAWebSyncdUtils", "WAWebWamEnumMdSyncdCriticalEventCode", "WAWebWid", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["label jid sync: unsupported operation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["label jid sync: malformed mutation"]);
        j = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = 2, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return d("WASyncdConst").LABEL_ASSOCIATION_SYNC_VERSION
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.LabelJid
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var e = new Set(),
                    f = [],
                    g = [];
                a = (yield(h || (h = b("Promise"))).all(a.map(function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                        try {
                            if (a.operation === "set") {
                                var b = a.indexParts;
                                a = a.value;
                                var h = b[1];
                                b = b[2];
                                (!h || !b) && d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                                a = (a = a.labelAssociationAction) == null ? void 0 : a.labeled;
                                if (a == null) {
                                    d("WALogger").WARN(j());
                                    return {
                                        actionState: d("WASyncdConst").SyncActionState.Malformed
                                    }
                                }
                                if (!c("WAWebWid").isWid(b)) {
                                    d("WAWebSyncdUtils").uploadCriticalEventMetric(d("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
                                    return {
                                        actionState: d("WASyncdConst").SyncActionState.Malformed
                                    }
                                }
                                b = d("WAWebWidFactory").createWid(b);
                                var k = b.toString(),
                                    l = {
                                        labelId: h,
                                        associationId: k,
                                        type: d("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
                                    };
                                if (a) {
                                    a = e.has(k);
                                    if (!a) {
                                        var m = (yield d("WAWebSchemaChat").getChatTable().get(k, !1));
                                        m && (e.add(k), a = !0)
                                    }
                                    m = a ? null : new(d("WAWebChatModel").Chat)({
                                        id: b
                                    });
                                    f.push(l);
                                    m && (d("WAWebSchemaChat").getChatTable().create(babelHelpers["extends"]({}, m.toJSON(), {
                                        id: k
                                    })), e.add(k), d("WAWebChatCollection").ChatCollection.add(m));
                                    d("WAWebBizLabelUtils").addToLabelCollection(k, [h], d("WAWebBizLabelItemParentType").LabelItemParentType.Chat)
                                } else g.push(l), d("WAWebBizLabelUtils").removeLabelFromCollection(k, h, d("WAWebBizLabelItemParentType").LabelItemParentType.Chat);
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Success
                                }
                            }
                            d("WALogger").WARN(i());
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Unsupported
                            }
                        } catch (a) {
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Failed
                            }
                        }
                    });
                    return function (b) {
                        return a.apply(this, arguments)
                    }
                }())));
                yield d("WAWebSchemaLabelAssociation").getLabelAssociationTable().bulkRemove(g.map(function (a) {
                    return [a.labelId, a.associationId, a.type]
                }));
                yield d("WAWebSchemaLabelAssociation").getLabelAssociationTable().bulkCreateOrReplace(f);
                return a
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebLabelMessageSync", ["Promise", "WALogger", "WASyncdAction", "WASyncdConst", "WAWebBizLabelItemParentType", "WAWebBizLabelUtils", "WAWebSchemaLabelAssociation", "WAWebSchemaMessage", "WAWebSyncdActionUtils", "WAWebSyncdUtils", "WAWebWamEnumMdSyncdCriticalEventCode", "WAWebWid", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["label message sync: operation not supported"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["label message sync: malformed mutation"]);
        j = function () {
            return a
        };
        return a
    }

    function k(a) {
        return l.apply(this, arguments)
    }

    function l() {
        l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b = new Set();
            yield d("WAWebSchemaMessage").getMessageTable().bulkGet(a.map(function (a) {
                a = a.indexParts;
                var b = a[2],
                    e = a[3],
                    f = a[4];
                a = a[5];
                if (!b || !e || !f || !a) return null;
                return !c("WAWebWid").isWid(b) ? null : (b = d("WAWebSyncdActionUtils").syncKeyToMsgKey(b, e, f, a)) == null ? void 0 : b.toString()
            }).filter(Boolean)).then(function (a) {
                return a.forEach(function (a) {
                    a && b.add(a.id)
                })
            });
            return b
        });
        return l.apply(this, arguments)
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = 2, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return d("WASyncdConst").LABEL_ASSOCIATION_SYNC_VERSION
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.LabelMessage
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var c = [],
                    e = [],
                    f = (yield k(a));
                a = (yield(h || (h = b("Promise"))).all(a.map(function (a) {
                    try {
                        if (a.operation === "set") {
                            var b = a.indexParts;
                            a = a.value;
                            var g = b[1],
                                h = b[2],
                                k = b[3],
                                l = b[4];
                            b = b[5];
                            (!g || !h || !k || !l || !b) && d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                            a = (a = a.labelAssociationAction) == null ? void 0 : a.labeled;
                            if (a == null) {
                                d("WALogger").WARN(j());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            h = d("WAWebSyncdActionUtils").syncKeyToMsgKey(h, k, l, b);
                            if (!h) {
                                d("WAWebSyncdUtils").uploadCriticalEventMetric(d("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            if (!f.has(h.toString())) return {
                                actionState: d("WASyncdConst").SyncActionState.Orphan,
                                orphanModel: {
                                    modelId: h.toString(),
                                    modelType: d("WASyncdConst").SyncModelType.Msg
                                }
                            };
                            k = {
                                labelId: g,
                                associationId: h.toString(),
                                type: d("WAWebSchemaLabelAssociation").LabelAssociationType.Message
                            };
                            a ? (c.push(k), d("WAWebBizLabelUtils").addToLabelCollection(h.toString(), [g], d("WAWebBizLabelItemParentType").LabelItemParentType.Msg)) : (e.push(k), d("WAWebBizLabelUtils").removeLabelFromCollection(h.toString(), g, d("WAWebBizLabelItemParentType").LabelItemParentType.Msg));
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    } catch (a) {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    }
                })));
                yield d("WAWebSchemaLabelAssociation").getLabelAssociationTable().bulkRemove(e.map(function (a) {
                    return [a.labelId, a.associationId, a.type]
                }));
                yield d("WAWebSchemaLabelAssociation").getLabelAssociationTable().bulkCreateOrReplace(c);
                return a
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebDBLabelsReorder", ["Promise", "WALogger", "WAWebModelStorageUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[Label] updateLabelsSortOrder: updating storage failed"]);
        i = function () {
            return a
        };
        return a
    }

    function a(a) {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            yield d("WAWebModelStorageUtils").getStorage().lock(["label"], function () {
                var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (c) {
                    var e = c[0],
                        f = a.reduce(function (a, b, c) {
                            a.set(b, c);
                            return a
                        }, new Map([]));
                    try {
                        c = a.map(function (a) {
                            return String(a)
                        });
                        c = (yield e.bulkGet(c));
                        var g = [];
                        c.forEach(function (a) {
                            if (a == null) return;
                            var b = f.get(Number(a.id));
                            b != null && g.push(e.merge(a.id, {
                                orderIndex: b
                            }))
                        });
                        return (h || (h = b("Promise"))).all(g)
                    } catch (a) {
                        d("WALogger").ERROR(i()).devConsole(a).tags("labels").sendLogs("labels-db-update-failed");
                        throw a
                    }
                });
                return function (a) {
                    return c.apply(this, arguments)
                }
            }())
        });
        return j.apply(this, arguments)
    }
    g.updateLabelsSortOrder = a
}), 98);
__d("WAWebLabelReorderingSync", ["Promise", "WALogger", "WAPromiseEach", "WASyncdAction", "WASyncdConst", "WAWebBackendApi", "WAWebBizGatingUtils", "WAWebDBLabelsReorder", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[Label] reordering sync: operation failed"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[Label] reordering sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[Label] reordering sync: operation successful"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[Label] reordering sync: malformed mutation"]);
        l = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 3
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.LabelReordering
        };
        e.applyMutations = function (a) {
            return !d("WAWebBizGatingUtils").isLabelReorderingSyncFromPrimaryEnabled() ? (h || (h = b("Promise"))).resolve([{
                actionState: d("WASyncdConst").SyncActionState.Skipped
            }]) : d("WAPromiseEach").promiseEach(a, function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    try {
                        if (a.operation === "set") {
                            a = a.value;
                            a = a == null ? void 0 : a.labelReorderingAction;
                            if (a == null || a.sortedLabelIds == null || Array.isArray(a.sortedLabelIds) === !1 || a.sortedLabelIds.length === 0) {
                                d("WALogger").WARN(l());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            yield d("WAWebDBLabelsReorder").updateLabelsSortOrder(a.sortedLabelIds);
                            d("WALogger").LOG(k());
                            d("WAWebBackendApi").frontendFireAndForget("reorderLabels", {
                                sortedLabelIds: a.sortedLabelIds
                            });
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    } catch (a) {
                        d("WALogger").WARN(i()).verbose().devConsole(a);
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    }
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }())
        };
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebLocaleSettingSync", ["Promise", "WALogger", "WASyncdAction", "WASyncdConst", "WAWebL10N", "WAWebL10NConstants", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["locale setting sync: operation not supported"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: successfully set locale to ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["locale setting sync: malformed mutation"]);
        k = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 3
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.LocaleSetting
        };
        f.applyMutations = function (a) {
            return (h || (h = b("Promise"))).all(a.map(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    try {
                        if (a.operation === "set") {
                            a = a.value;
                            a = a.localeSetting;
                            if (!a) {
                                d("WALogger").WARN(k());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            var b = a.locale;
                            yield c("WAWebL10N").setLocale(b, d("WAWebL10NConstants").L10N_PRIORITY.PHONE, !1);
                            d("WALogger").DEV(j(), a.locale);
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    } catch (a) {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    }
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }()))
        };
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebUserPrefsMerchantPaymentPartner", ["WASyncAction.pb", "WAWebUserPrefsCustomPaymentMethods", "WAWebUserPrefsKeys", "WAWebUserPrefsLocalStorage", "WAWebUserPrefsTypes"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = c("WAWebUserPrefsLocalStorage") == null ? void 0 : c("WAWebUserPrefsLocalStorage").getItemFromLocalStorage(d("WAWebUserPrefsKeys").KEYS.MERCHANT_PAYMENT_PARTNER);
        return a
    }

    function a() {
        var a = h();
        return i(a) && a ? a : null
    }

    function i(a) {
        if (!a) return !1;
        var b = a.status,
            c = a.country,
            e = a.credential_id;
        a = a.gateway_name;
        if (b === d("WAWebUserPrefsTypes").PaymentPartnerStatusType.ACTIVE) return d("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(c) && d("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(e) && d("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(a);
        else if (b === d("WAWebUserPrefsTypes").PaymentPartnerStatusType.INACTIVE) return d("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(c) && d("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(e, !0) && d("WAWebUserPrefsCustomPaymentMethods").isStringFieldValid(a, !0);
        return !1
    }

    function b(a) {
        var b = a.status === d("WASyncAction.pb").SyncActionValue$MerchantPaymentPartnerAction$Status.ACTIVE ? d("WAWebUserPrefsTypes").PaymentPartnerStatusType.ACTIVE : d("WAWebUserPrefsTypes").PaymentPartnerStatusType.INACTIVE;
        b = {
            status: b,
            country: a.country,
            gateway_name: a.gatewayName,
            credential_id: a.credentialId
        };
        c("WAWebUserPrefsLocalStorage").setItemToLocalStorage(d("WAWebUserPrefsKeys").KEYS.MERCHANT_PAYMENT_PARTNER, b)
    }

    function e() {
        var a = h();
        return i(a)
    }
    f = {
        getPaymentPartner: a,
        isPaymentPartnerValid: e,
        setMerchantPaymentPartner: b
    };
    g["default"] = f
}), 98);
__d("WAWebMerchantPaymentPartnerSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebABProps", "WAWebMobilePlatforms", "WAWebUserPrefsMerchantPaymentPartner", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Merchant Payment Partner sync: successfully synced payment methods"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Merchant Payment Partner sync:malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Merchant Payment Partner sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Merchant Payment Partner sync: operation not supported, user does not pass ABProp"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Merchant Payment Partner sync: operation not supported, app is not SMB"]);
        l = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 7
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.MerchantPaymentPartner
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (d("WAWebMobilePlatforms").isSMB() !== !0) {
                    d("WALogger").WARN(l());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                if (d("WAWebABProps").getABPropConfigValue("payments_br_merchant_psp_account_status_sync") !== !0) {
                    d("WALogger").WARN(k());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                return a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    }
                    a = a.value.merchantPaymentPartnerAction;
                    if (a == null) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    c("WAWebUserPrefsMerchantPaymentPartner").setMerchantPaymentPartner(a);
                    d("WALogger").DEV(h());
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                })
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    Object.freeze(e);
    f = e;
    g["default"] = f
}), 98);
__d("WAWebPaymentInfoSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebABProps", "WAWebBackendApi", "WAWebMobilePlatforms", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["payment info sync: successfully set cpi info"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["cpi payment info sync: malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["payment info sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["payment info sync: operation not supported, user does not pass ABProp"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["payment info sync: operation not supported, app is not SMB"]);
        l = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.PaymentInfo
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (d("WAWebMobilePlatforms").isSMB() !== !0) {
                    d("WALogger").WARN(l());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                if (d("WAWebABProps").getABPropConfigValue("order_details_payment_instructions_sync_enabled") !== !0) {
                    d("WALogger").WARN(k());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                return a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    }
                    a = (a = a.value.paymentInfoAction) == null ? void 0 : a.cpi;
                    if (typeof a !== "string") {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    d("WAWebBackendApi").frontendFireAndForget("setCPIInfo", {
                        cpiInfo: a
                    });
                    d("WALogger").DEV(h());
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                })
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebPnForLidChatSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebABProps", "WAWebDBCreateLidPnMappings", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["pn_for_lid_chat sync: successfully updated the lidXPn mapping}"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["pn_for_lid_chat sync: malformed mutation - invalid pnJid"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["pn_for_lid_chat sync: malformed mutation - invalid key"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["pn_for_lid_chat sync: operation not supported"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["pn_for_lid_chat sync: operation not supported"]);
        l = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 8
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.PnForLidChat
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (d("WAWebABProps").getABPropConfigValue("pnh_pn_for_lid_chat_sync") !== !0) {
                    d("WALogger").WARN(l());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                var b = [];
                a = a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(k());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    var c = a.indexParts[1];
                    if (!d("WAWebWidFactory").isWidlike(c)) {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    a = (a = a.value.pnForLidChatAction) == null ? void 0 : a.pnJid;
                    if (a == null || !d("WAWebWidFactory").isWidlike(a)) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    a = d("WAWebWidFactory").createUserWid(a);
                    c = d("WAWebWidFactory").createUserWid(c);
                    b.push({
                        lid: c,
                        pn: a
                    });
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                });
                yield d("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: b,
                    flushImmediately: !0
                });
                d("WALogger").DEV(h());
                return a
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebPremiumMessageAddSendAction", ["WAWebPremiumMessageCollection", "WAWebPremiumMessageSchema", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b = [];
            for (a of a) {
                var c = d("WAWebPremiumMessageCollection").PremiumMessageCollection.get(a.premiumMessageId);
                if (c) {
                    var e = new Set(c.sentMessageIds);
                    e.add(a.messageId);
                    b.push(c);
                    c.set("sentMessageIds", e)
                }
            }
            yield d("WAWebPremiumMessageSchema").getPremiumMessageTable().bulkCreateOrMerge(b.map(function (a) {
                return {
                    id: a.id,
                    name: a.name,
                    type: a.type,
                    isDeleted: a.isDeleted,
                    mediaId: a.mediaId,
                    sentMessageIds: a.sentMessageIds
                }
            }))
        });
        return h.apply(this, arguments)
    }
    g["default"] = a
}), 98);
__d("WAWebPremiumMessageBroadcastSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebPremiumMessageAddSendAction", "WAWebPremiumMessageCollection", "WAWebSyncdActionUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["premium_message_broadcast:syncd: operation not supported"]);
        h = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 7
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.MarketingMessageBroadcast
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b = [];
                a = a.map(function (a) {
                    try {
                        var c = a.indexParts,
                            e = c[1];
                        c = c[2];
                        (!e || !c) && d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                        if (a.operation === "set") {
                            if (d("WAWebPremiumMessageCollection").PremiumMessageCollection.find(e) == null) return {
                                actionState: d("WASyncdConst").SyncActionState.Orphan
                            };
                            b.push({
                                messageId: c,
                                premiumMessageId: e
                            });
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        d("WALogger").DEV(h());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    } catch (a) {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    }
                });
                yield c("WAWebPremiumMessageAddSendAction")(b);
                return a
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebPremiumMessageSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebPremiumMessageCollection", "WAWebPremiumMessageSchema", "WAWebSyncdActionUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["premium_message:syncd: operation not supported"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["premium_message:syncd: malformed mutation - missing type"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["premium_message:syncd: malformed mutation"]);
        j = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.MarketingMessage
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b = [];
                a = a.map(function (a) {
                    try {
                        var c = a.indexParts;
                        c = c[1];
                        c || d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                        if (a.operation === "set") {
                            a = a.value.marketingMessageAction;
                            if (!a) {
                                d("WALogger").DEV(j());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            var e = a.name,
                                f = a.type,
                                g = a.message,
                                k = a.isDeleted;
                            a = a.mediaId;
                            if (f == null) {
                                d("WALogger").DEV(i());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            b.push({
                                id: c,
                                name: e,
                                type: f,
                                isDeleted: k,
                                message: g,
                                mediaId: a,
                                sentMessageIds: new Set()
                            });
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Success
                            }
                        }
                        d("WALogger").DEV(h());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    } catch (a) {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    }
                });
                yield d("WAWebPremiumMessageSchema").getPremiumMessageTable().bulkCreateOrMerge(b);
                d("WAWebPremiumMessageCollection").PremiumMessageCollection.add(b);
                return a
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebPrimaryFeatureSync", ["WALogger", "WANullthrows", "WASyncdAction", "WASyncdConst", "WAWebPrimaryFeatures", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["primary feature sync: successfully set flags to ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["primary feature sync: malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["primary feature sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(e, a);

        function e() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 7
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.PrimaryFeature
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var b;
                a = a.map(function (a) {
                    var c;
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    c = (c = a.value.primaryFeature) == null ? void 0 : c.flags;
                    if (c == null) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }(b == null || a.timestamp > b.timestamp) && (b = a);
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                });
                if (b != null) {
                    var e;
                    e = c("WANullthrows")((e = b.value.primaryFeature) == null ? void 0 : e.flags);
                    yield d("WAWebPrimaryFeatures").setPrimaryFeatures(e);
                    d("WALogger").DEV(h(), e)
                }
                return a
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebPrimaryVersionSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebSyncdActionUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: primary version sync, successfully get primary version ", "\n      with value ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: primary version sync, malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: primary version sync, operation not supported"]);
        j = function () {
            return a
        };
        return a
    }
    var k = {
        CURRENT: "current",
        SESSION_START: "session_start"
    };
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.PrimaryVersion
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                return a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    }
                    var b = a.indexParts;
                    a = a.value;
                    b = b[1];
                    (!b || b !== k.CURRENT && b !== k.SESSION_START) && d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                    a = (a = a.primaryVersionAction) == null ? void 0 : a.version;
                    if (a == null) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    d("WALogger").DEV(h(), b, a);
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                })
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebShareOwnPnSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebABProps", "WAWebUpdateLidMetadataJob", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["share_own_pn sync: successfully updated shareOwnPn value}"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["share_own_pn sync: malformed mutation - invalid key"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["share_own_pn sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["share_own_pn sync: operation not supported"]);
        k = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 8
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.ShareOwnPn
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (d("WAWebABProps").getABPropConfigValue("share_own_pn_sync") !== !0) {
                    d("WALogger").WARN(k());
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    })
                }
                var b = [];
                a = a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    a = a.indexParts[1];
                    if (!d("WAWebWidFactory").isWidlike(a)) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    a = d("WAWebWidFactory").createUserWid(a);
                    b.push({
                        lid: a,
                        data: {
                            shareOwnPn: !0
                        }
                    });
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                });
                yield d("WAWebUpdateLidMetadataJob").updateLidMetadataJob(b);
                d("WALogger").DEV(h());
                return a
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebTimeFormatSync", ["WALogger", "WASyncdAction", "WASyncdConst", "WAWebClock", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["time format sync: successfully set time format to ", " hour"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["time format sync: malformed mutation"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["time format sync: operation not supported"]);
        j = function () {
            return a
        };
        return a
    }
    a = function (a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = null, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.getVersion = function () {
            return 7
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.TimeFormat
        };
        e.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                return a.map(function (a) {
                    if (a.operation !== "set") {
                        d("WALogger").WARN(j());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Unsupported
                        }
                    }
                    a = (a = a.value.timeFormatAction) == null ? void 0 : a.isTwentyFourHourFormatEnabled;
                    if (a == null) {
                        d("WALogger").WARN(i());
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    }
                    d("WAWebClock").Clock.setIs24Hour(a, d("WAWebClock").TimeFormatSource.PhoneTimeFormat);
                    d("WALogger").DEV(h(), a ? "24" : "12");
                    return {
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }
                })
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebCollectionHandlerActions", ["WASentinelMutationSync", "WAWebAgentSync", "WAWebAndroidUnsupportedActionsSync", "WAWebArchiveChatSync", "WAWebArchiveSettingSync", "WAWebBotWelcomeRequestSync", "WAWebChatAssignmentOpenedStatusSync", "WAWebChatAssignmentSync", "WAWebChatLockSettingsSync", "WAWebClearChatSync", "WAWebContactSync", "WAWebCustomPaymentMethodsSync", "WAWebDeleteChatSync", "WAWebDeleteMessageForMeSync", "WAWebDeviceCapabilitiesSync", "WAWebDisableLinkPreviewsSync", "WAWebExternalWebBetaSync", "WAWebFavoritesSync", "WAWebLabelJidSync", "WAWebLabelMessageSync", "WAWebLabelReorderingSync", "WAWebLabelSync", "WAWebLocaleSettingSync", "WAWebLockChatSync", "WAWebMarkChatAsReadSync", "WAWebMerchantPaymentPartnerSync", "WAWebMuteChatSync", "WAWebNoteSync", "WAWebNuxSync", "WAWebPaymentInfoSync", "WAWebPinChatSync", "WAWebPnForLidChatSync", "WAWebPremiumMessageBroadcastSync", "WAWebPremiumMessageSync", "WAWebPrimaryFeatureSync", "WAWebPrimaryVersionSync", "WAWebPushNameSync", "WAWebQuickRepliesSync", "WAWebShareOwnPnSync", "WAWebStarMessageSync", "WAWebStatusPrivacySettingSync", "WAWebStickersFavoriteSyncAction", "WAWebStickersRemoveRecentSyncAction", "WAWebTimeFormatSync", "WAWebUserStatusMuteSync"], (function (a, b, c, d, e, f, g) {
    a = [c("WAWebStarMessageSync"), c("WAWebContactSync"), c("WAWebMuteChatSync"), c("WAWebLabelSync"), c("WAWebLabelReorderingSync"), c("WAWebAgentSync"), c("WAWebLabelMessageSync"), c("WAWebLabelJidSync"), c("WAWebQuickRepliesSync"), c("WAWebLocaleSettingSync"), c("WAWebPushNameSync"), c("WAWebArchiveChatSync"), c("WAWebMarkChatAsReadSync"), c("WAWebClearChatSync"), c("WAWebDeleteMessageForMeSync"), c("WASentinelMutationSync"), c("WAWebArchiveSettingSync"), d("WAWebPinChatSync").PinChatSync, c("WAWebDeleteChatSync"), c("WAWebAndroidUnsupportedActionsSync"), c("WAWebPrimaryFeatureSync"), c("WAWebNuxSync"), c("WAWebTimeFormatSync"), c("WAWebUserStatusMuteSync"), c("WAWebPrimaryVersionSync"), c("WAWebStickersRemoveRecentSyncAction"), c("WAWebChatAssignmentSync"), c("WAWebChatAssignmentOpenedStatusSync"), c("WAWebStickersFavoriteSyncAction"), c("WAWebShareOwnPnSync"), c("WAWebPnForLidChatSync"), c("WAWebExternalWebBetaSync"), c("WAWebPremiumMessageSync"), c("WAWebPremiumMessageBroadcastSync"), c("WAWebStatusPrivacySettingSync"), c("WAWebBotWelcomeRequestSync"), c("WAWebPaymentInfoSync"), c("WAWebCustomPaymentMethodsSync"), c("WAWebLockChatSync"), c("WAWebChatLockSettingsSync"), c("WAWebDisableLinkPreviewsSync"), c("WAWebNoteSync"), c("WAWebFavoritesSync"), c("WAWebMerchantPaymentPartnerSync"), c("WAWebDeviceCapabilitiesSync")];
    g.ActionHandlers = a
}), 98);
__d("WAWebKeyManagementUtils", ["WALogger", "WAWebApiDeviceList", "WAWebUserPrefsMeUser", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: getPeerDevices: error ", ". Future key requests will only be sent to primary device."]);
        h = function () {
            return a
        };
        return a
    }

    function a() {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = [],
                b = d("WAWebUserPrefsMeUser").assertGetMe();
            try {
                var c = (yield d("WAWebApiDeviceList").getMyDeviceList());
                c.devices.forEach(function (c) {
                    c.id !== b.getDeviceId() && a.push(d("WAWebWidFactory").createDeviceWidFromUserAndDevice(b.user, b.server, c.id))
                })
            } catch (a) {
                d("WALogger").WARN(h(), a).sendLogs(a.toString());
                return [d("WAWebWidFactory").createDeviceWidFromUserAndDevice(b.user, b.server, 0)]
            }
            return a
        });
        return i.apply(this, arguments)
    }
    g.getPeerDevices = a
}), 98);
__d("WAWebConfig", ["WAWebABProps", "WAWebBrokerGlobalAppState", "WAWebCollectionHandlerActions", "WAWebConnModel", "WAWebCurrentUser", "WAWebKeyManagementUtils", "WAWebOfflineHandler", "WAWebServerPropsModel", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    a = {
        isCompanion: function () {
            return !0
        },
        logoutInProgress: function () {
            return c("WAWebBrokerGlobalAppState").isLogoutInProgress
        },
        mediaImagePreviewHkdfInfo: function () {
            throw c("err")("config: No config for mediaImagePreviewHkdfInfo")
        },
        mediaVideoPreviewHkdfInfo: function () {
            throw c("err")("config: No config for mediaVideoPreviewHkdfInfo")
        },
        offlineProcessingState: function () {
            return d("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete() ? "idle" : "processing"
        },
        orchestratorVersion: function () {
            return "default"
        },
        primaryPlatform: function () {
            return d("WAWebConnModel").Conn.platform
        },
        syncdActionHandlers: function () {
            return d("WAWebCollectionHandlerActions").ActionHandlers
        },
        syncdAdditionalMutations: function () {
            return d("WAWebABProps").getABPropConfigValue("syncd_additional_mutations_count")
        },
        syncShouldCalculateLtHashFromScratch: function () {
            return d("WAWebABProps").getABPropConfigValue("web_recalculate_app_state_sync_lthash")
        },
        syncdDisabled: function () {
            return !1
        },
        syncdInlineMutationsMaxCount: function () {
            return d("WAWebServerPropsModel").ServerProps.syncdInlineMutationsMaxCount
        },
        syncdKeyMaxUseDays: function () {
            return d("WAWebServerPropsModel").ServerProps.syncdKeyMaxUseDays
        },
        syncdMaxMutationsToProcessDuringResume: function () {
            return d("WAWebABProps").getABPropConfigValue("web_syncd_max_mutations_to_process_during_resume")
        },
        syncdPatchDeviceIndexIncluded: function () {
            return !0
        },
        syncdPatchProtobufMaxSize: function () {
            return d("WAWebServerPropsModel").ServerProps.syncdPatchProtobufMaxSize
        },
        syncdQPLLoggingEnabled: function () {
            return d("WAWebServerPropsModel").ServerProps.syncdQPLLoggingEnabled
        },
        syncdShouldFatalOnMissingPatch: function () {
            return d("WAWebABProps").getABPropConfigValue("web_should_fatal_on_missing_patch")
        },
        syncdShouldNotFatalOnSnapshotMacMismatchInPatches: function () {
            return d("WAWebABProps").getABPropConfigValue("syncd_do_not_fatal_on_snapshot_mac_mismatch_in_patches")
        },
        syncdShouldParsePatchDebugData: function () {
            return d("WAWebABProps").getABPropConfigValue("enable_syncd_debug_data_in_patch")
        },
        syncdWaitForKeyTimeoutDays: function () {
            return d("WAWebServerPropsModel").ServerProps.syncdWaitForKeyTimeoutDays
        },
        syncShouldMinimizeWriteIndividualMutation: function () {
            return d("WAWebABProps").getABPropConfigValue("enable_minimize_individual_mutation_write")
        },
        syncShouldUseCachedIndexMac: function () {
            return d("WAWebABProps").getABPropConfigValue("enabled_cached_indexmac")
        },
        syncShouldPersistOnlyUpdatedIndividualMutation: function () {
            return d("WAWebABProps").getABPropConfigValue("enable_persisting_only_updated_syncd_individual_mutations")
        },
        syncShouldAllowOverrideKey: function () {
            return d("WAWebABProps").getABPropConfigValue("enable_override_syncd_key")
        },
        maxPrekeysToUpload: function () {
            return d("WAWebServerPropsModel").ServerProps.maxKeys
        },
        forceNonPersistedJobs: function () {
            return !1
        },
        ignoreForceNonPersistedJobList: function () {
            return []
        },
        orchestratorConfig: function () {
            return void 0
        },
        waitForConnection: function () {
            return !1
        },
        isUseridAnnotationEnabled: function () {
            return !1
        },
        isEmployee: function () {
            return d("WAWebCurrentUser").isEmployee()
        },
        useUpdatedSenderKeySession: function () {
            return !1
        },
        getAreThereMoreCompanions: function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var a = (yield d("WAWebKeyManagementUtils").getPeerDevices());
                return a.length > 1
            });

            function c() {
                return a.apply(this, arguments)
            }
            return c
        }(),
        getSignalFutureMessagesMax: function () {
            return 2e3
        }
    };
    g.ConfigImpl = a
}), 98);
__d("WAWebConfigureWindowEvents", ["WAComms", "WALogger", "WATypeUtils", "WAWebApp.react", "WAWebBuildConstants", "WAWebExternalLink.react", "WAWebMiscBrowserUtils", "fbs"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["error while force restarting comms after unload failure: ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["unload failed, force restarting comms"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Prompt onbeforeunload due to pending draft message"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["onbeforeunload triggered, version: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["error while stopping comms onbeforeunload: ", ""]);
        l = function () {
            return a
        };
        return a
    }

    function a() {
        m(), window.onbeforeunload = function () {
            var a = !1,
                b = d("WAWebApp.react").hasPending();
            if (!b && !d("WAWebExternalLink.react").isOpeningDeeplinkInCurrentTab()) try {
                a = !0, d("WAComms").closeSocketAndPreventRetry()
            } catch (a) {
                d("WALogger").ERROR(l(), a)
            }
            if (c("WAWebMiscBrowserUtils").isDownloading()) {
                c("WAWebMiscBrowserUtils").clearDownloading();
                return void 0
            }
            d("WALogger").LOG(k(), d("WAWebBuildConstants").VERSION_STR);
            if (c("WAWebMiscBrowserUtils").promptUnloadGuards > 0) return void 0;
            if (b) {
                d("WALogger").LOG(j());
                return c("fbs")._("__JHASH__S9GSq_XN45B__JHASH__").toString()
            }
            if (a) {
                b = 15e3;
                self.setTimeout(function () {
                    try {
                        d("WALogger").ERROR(i()), void d("WAComms").socketLoopIteration()
                    } catch (a) {
                        d("WALogger").ERROR(h(), a)
                    }
                }, b)
            }
        }, window.addEventListener("dragover", function (a) {
            a.preventDefault()
        }), window.addEventListener("drop", function (a) {
            a.preventDefault()
        })
    }

    function m() {
        ["getSelection", "open", "focus"].forEach(function (a) {
            var b = Object.getPrototypeOf(window)[a];
            d("WATypeUtils").isFunction(b) && window[a] !== b && (window[a] = b)
        })
    }
    g.configureWindowEvents = a
}), 226);
__d("WAWebSyncdFatalExceptionNotificationApi", ["WATimeUtils", "WAWebApiPeerMessageStore", "WAWebMsgKey", "WAWebMsgType", "WAWebSendAppStateSyncMsgJob", "WAWebUserPrefsMeUser", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            a = {
                collectionNames: a,
                timestamp: d("WATimeUtils").unixTimeMs()
            };
            var b = new(c("WAWebMsgKey"))({
                fromMe: !0,
                remote: d("WAWebUserPrefsMeUser").getMeUser(),
                id: yield c("WAWebMsgKey").newId()
            });
            b = {
                id: b,
                to: d("WAWebWidFactory").createDeviceWidFromUserAndDevice(d("WAWebUserPrefsMeUser").assertGetMe().user, d("WAWebUserPrefsMeUser").assertGetMe().server, 0),
                type: "protocol",
                subtype: "app_state_fatal_exception_notification",
                kind: d("WAWebMsgType").MsgKind.PeerMessage,
                appStateFatalExceptionNotification: a
            };
            yield d("WAWebApiPeerMessageStore").storePeerMessages([b]);
            return d("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg(b)
        });
        return h.apply(this, arguments)
    }
    g.sendAppStateFatalExceptionNotification = a
}), 98);
__d("WAWebSyncdLogs", ["WALogger", "WASyncdConst", "WAWebPriorLogs", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: cannot log unknown cagtegory ", ""]);
        h = function () {
            return a
        };
        return a
    }
    a = function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            var c = d("WAWebPriorLogs").WAWebLogCategory.cast(a);
            if (c != null) return d("WAWebPriorLogs").writePriorLog(c, b);
            d("WALogger").WARN(h(), a)
        });
        return function (b, c) {
            return a.apply(this, arguments)
        }
    }();
    c = function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = [].concat(Array.from(d("WASyncdConst").CollectionName.members()), [""]).map(function (a) {
                return d("WAWebPriorLogs").WAWebLogCategory.cast(a)
            }).filter(Boolean);
            return d("WAWebPriorLogs").printPriorLogs(a)
        });
        return function () {
            return a.apply(this, arguments)
        }
    }();
    g.writeSyncdLogImpl = a;
    g.printSyncdLogs = c
}), 98);
__d("WAWebSyncdFatal", ["Promise", "WAAsyncSleep", "WABaseGlobals", "WALogger", "WATimeUtils", "WAWebLogoutReasonConstants", "WAWebSocketLogoutJob", "WAWebSyncdFatalExceptionNotificationApi", "WAWebSyncdLogs", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: Received fatal error and logged out"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: end notifying primary on fatal error. tsBeforeSleep: ", ", tsBeforeSendToPrimary: ", ", currTs: ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: end notifying primary on fatal error"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: error when sending fatal message to primary: ", ""]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: start notifying primary on fatal error"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: fatal flow: before sleep"]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: starting fatal flow for ", ""]);
        o = function () {
            return a
        };
        return a
    }
    var p = 5e3;

    function a(a) {
        return q.apply(this, arguments)
    }

    function q() {
        q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            d("WALogger").LOG(o(), a);
            a ? yield r(a, "handleFatalError for collection"): yield d("WABaseGlobals").getDbImpls().writeSyncdLog("", "handleFatalError without collection");
            var b = [];
            a != null && (b = a.map(function (a) {
                return String(a)
            }));
            var c = d("WATimeUtils").castMilliSecondsToUnixTime(d("WATimeUtils").unixTimeMs());
            d("WALogger").LOG(n());
            yield d("WAAsyncSleep").asyncSleep(p);
            yield r(a, "handleFatalError before notify primary");
            var e = d("WATimeUtils").castMilliSecondsToUnixTime(d("WATimeUtils").unixTimeMs());
            d("WALogger").LOG(m());
            try {
                yield d("WAWebSyncdFatalExceptionNotificationApi").sendAppStateFatalExceptionNotification(b)
            } catch (a) {
                d("WALogger").ERROR(l(), a).sendLogs("syncd: could not send fatal to primary")
            }
            d("WALogger").LOG(k());
            yield r(a, "handleFatalError after notify primary");
            b = d("WATimeUtils").castMilliSecondsToUnixTime(d("WATimeUtils").unixTimeMs());
            d("WALogger").LOG(j(), d("WATimeUtils").toHttpHeaderDate(c), d("WATimeUtils").toHttpHeaderDate(e), d("WATimeUtils").toHttpHeaderDate(b));
            yield d("WAWebSyncdLogs").printSyncdLogs();
            d("WALogger").ERROR(i()).verbose().tags("syncd", "logout").sendLogs("syncd: fatal error and logged out");
            yield d("WAWebSocketLogoutJob").socketLogout(d("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure)
        });
        return q.apply(this, arguments)
    }

    function r(a, c) {
        return (h || (h = b("Promise"))).all(((a = a) != null ? a : [""]).map(function (a) {
            return d("WABaseGlobals").getDbImpls().writeSyncdLog(a, c)
        }))
    }
    g.handleFatalError = a
}), 98);
__d("WAWebSyncdDbCallbacksApi", ["Promise", "WAWebAndroidUnsupportedActionsSync", "WAWebCmd", "WAWebEventsWaitForOfflineDeliveryEnd", "WAWebLid1X1MigrationGating", "WAWebMsgKey", "WAWebSchemaChat", "WAWebSyncdFatal", "WAWebSyncdLogs", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;
    f = function (a) {
        a.deviceIndex === 0 && c("WAWebAndroidUnsupportedActionsSync").updatePrimaryAllowsAllMutationsFlag("device index");
        return (h || (h = b("Promise"))).resolve()
    };
    var i = function (a) {
            d("WAWebCmd").Cmd.trigger(d("WAWebCmd").APP_STATE_SYNC_COMPLETED, a);
            return (h || (h = b("Promise"))).resolve()
        },
        j = function () {
            return d("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd().then(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {}))
        },
        k = function (a) {
            return d("WAWebSyncdFatal").handleFatalError(a == null ? void 0 : a.collections)
        };

    function a(a) {
        return d("WAWebSchemaChat").getChatTable().bulkGet(a).then(function (a) {
            return a.map(function (a) {
                return a == null ? void 0 : a.accountLid
            })
        })
    }

    function e(a) {
        return l.apply(this, arguments)
    }

    function l() {
        l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            if (!d("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isAccountLidFieldMigrated()) return [];
            a = a.map(function (a) {
                return c("WAWebMsgKey").fromString(a)
            }).filter(function (a) {
                return a.remote.isUser() && !a.remote.isLid()
            });
            var b = (yield d("WAWebSchemaChat").getChatTable().bulkGet(a.map(function (a) {
                    return a.remote.toString()
                }))).map(function (a) {
                    return a == null ? void 0 : a.accountLid
                }),
                e = [];
            for (var f = 0; f < a.length; f++) {
                var g = b[f];
                if (g != null) {
                    var h = a[f];
                    e.push(new(c("WAWebMsgKey"))({
                        fromMe: h.fromMe,
                        remote: d("WAWebWidFactory").createWid(g),
                        id: h.id
                    }).toString())
                }
            }
            return e
        });
        return l.apply(this, arguments)
    }
    g.handleSyncBeforeApplyPatch = f;
    g.handleSyncCompleted = i;
    g.handleSyncDelayApplyingPatchUntilUIUnblocks = j;
    g.handleSyncdFatal = k;
    g.writeSyncdLog = d("WAWebSyncdLogs").writeSyncdLogImpl;
    g.printSyncdLog = d("WAWebSyncdLogs").printSyncdLogs;
    g.bulkGetAccountLid = a;
    g.getAdditionalLidMsgKeys = e
}), 98);
__d("WAWebKeyManagementSendKeyRequestApi", ["Promise", "WALogger", "WASyncdCryptoUtils", "WASyncdKeyTypes", "WAWebApiPeerMessageStore", "WAWebKeyManagementUtils", "WAWebMsgKey", "WAWebMsgType", "WAWebSendAppStateSyncMsgJob", "WAWebSyncdCriticalBootstrapProcessingApi", "WAWebUserPrefsMeUser", "WAWebWamEnumBootstrapAppStateDataStageCode", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: send key request key id ", " to peer deviceIds ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function a(a) {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var e = (yield d("WAWebKeyManagementUtils").getPeerDevices()),
                f = a.map(function (a) {
                    return {
                        keyId: d("WASyncdKeyTypes").fromSyncKeyId(a)
                    }
                }),
                g = {
                    keyIds: f
                };
            f = e.map(function (a) {
                var b = new(c("WAWebMsgKey"))({
                    fromMe: !0,
                    remote: d("WAWebUserPrefsMeUser").assertGetMeUser(),
                    id: c("WAWebMsgKey").newId_DEPRECATED()
                });
                return {
                    id: b,
                    to: a,
                    type: "protocol",
                    subtype: "app_state_sync_key_request",
                    kind: d("WAWebMsgType").MsgKind.PeerMessage,
                    appStateSyncKeyRequest: g
                }
            });
            e = e.map(function (a) {
                return a.getDeviceId()
            });
            a = a.map(function (a) {
                return d("WASyncdCryptoUtils").syncKeyIdToHex(a)
            });
            d("WALogger").LOG(i(), a, e);
            yield d("WAWebApiPeerMessageStore").storePeerMessages(f);
            yield(h || (h = b("Promise"))).all(f.map(function (a) {
                return d("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg(a)
            }));
            d("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_REQUESTED);
            return e
        });
        return j.apply(this, arguments)
    }
    g.sendAppStateSyncKeyRequest = a
}), 98);
__d("WAWebKeyManagementSendKeyShareApi", ["Promise", "WALogger", "WASyncdCryptoUtils", "WASyncdKeyTypes", "WAWebApiPeerMessageStore", "WAWebKeyManagementUtils", "WAWebMsgKey", "WAWebMsgType", "WAWebSendAppStateSyncMsgJob", "WAWebUserPrefsMeUser", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: send key share key id ", " to peer deviceIds ", " due to ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function a(a) {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var e, f;
            a.type === "key_rotation" ? (e = k(a.keys), f = (yield d("WAWebKeyManagementUtils").getPeerDevices())) : a.type === "missing_key" && (e = k(a.keys, a.orphanKeys), f = [a.peerDeviceId]);
            if (f == null) return (h || (h = b("Promise"))).resolve();
            var g = f,
                j = g.map(function (a) {
                    var b = new(c("WAWebMsgKey"))({
                        fromMe: !0,
                        remote: d("WAWebUserPrefsMeUser").assertGetMeUser(),
                        id: c("WAWebMsgKey").newId_DEPRECATED()
                    });
                    return {
                        id: b,
                        to: a,
                        type: "protocol",
                        subtype: "app_state_sync_key_share",
                        kind: d("WAWebMsgType").MsgKind.PeerMessage,
                        appStateSyncKeyShare: e
                    }
                });
            g = g.map(function (a) {
                return a.getDeviceId()
            });
            var l = a.keys.map(function (a) {
                return d("WASyncdCryptoUtils").syncKeyIdToHex(a.keyId)
            });
            d("WALogger").LOG(i(), l, g, a.type);
            yield d("WAWebApiPeerMessageStore").storePeerMessages(j);
            yield(h || (h = b("Promise"))).all(j.map(function (a) {
                return d("WAWebSendAppStateSyncMsgJob").encryptAndSendKeyMsg(a)
            }))
        });
        return j.apply(this, arguments)
    }

    function k(a, b) {
        a = a.map(function (a) {
            return {
                keyId: {
                    keyId: d("WASyncdKeyTypes").fromSyncKeyId(a.keyId)
                },
                keyData: {
                    keyData: d("WASyncdKeyTypes").fromSyncKeyData(a.keyData),
                    fingerprint: {
                        rawId: a.fingerprint.rawId,
                        currentIndex: a.fingerprint.currentIndex,
                        deviceIndexes: a.fingerprint.deviceIndexes
                    },
                    timestamp: a.timestamp
                }
            }
        });
        if (b) {
            b = b.map(function (a) {
                return {
                    keyId: {
                        keyId: d("WASyncdKeyTypes").fromSyncKeyId(a)
                    },
                    keyData: void 0
                }
            });
            a = a.concat(b)
        }
        return {
            keys: a
        }
    }
    g.sendAppStateSyncKeyShare = a
}), 98);
__d("WAWebSyncdKeyCallbacksApi", ["WAWebApiDeviceList", "WAWebKeyManagementSendKeyRequestApi", "WAWebKeyManagementSendKeyShareApi", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    a = function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = (yield d("WAWebApiDeviceList").getMyDeviceList()),
                b = a.currentIndex,
                e = a.devices;
            a = a.rawId;
            if (b == null) throw c("err")("syncd: missing current index for own device");
            return {
                currentIndex: b,
                deviceIndexes: e.map(function (a) {
                    return a.keyIndex
                }),
                rawId: a
            }
        });
        return function () {
            return a.apply(this, arguments)
        }
    }();
    e = function (a) {
        return d("WAWebKeyManagementSendKeyShareApi").sendAppStateSyncKeyShare({
            type: "key_rotation",
            keys: a
        })
    };
    g.getDeviceFingerprint = a;
    g.sendSyncdKeyRequest = d("WAWebKeyManagementSendKeyRequestApi").sendAppStateSyncKeyRequest;
    g.sendSyncdKeyRotation = e
}), 98);
__d("WAWebSyncdNetCallbacksApi", ["WABase64", "WALogger", "WASyncdError", "WAWebDownloadManager", "WAWebMmsClientErrors", "WAWebSyncdUploadFatalErrorMetric", "WAWebUploadManager", "WAWebWamEnumMdSyncdFatalErrorCode", "WAWebWamEnumUploadOriginType", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: error downloading ", " of expected size ", " with expected hash b64 length of ", " for collection ", ""]);
        h = function () {
            return a
        };
        return a
    }
    a = function (a) {
        return c("WAWebUploadManager").encryptAndUpload({
            blob: a,
            signal: new AbortController().signal,
            type: "md-app-state",
            uploadOrigin: d("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
            userUploadAttemptCount: 0,
            forwardedFromWeb: !1,
            isViewOnce: !1
        }).then(function (a) {
            var b = a.mediaKey,
                e = a.directPath,
                f = a.encFilehash;
            a = a.handle;
            if (a == null) throw c("err")("Missing handle after uploading external patch to mms4");
            return {
                mediaKey: d("WABase64").decodeB64(b),
                directPath: e,
                encFilehash: d("WABase64").decodeB64(f),
                handle: a
            }
        })
    };
    e = function () {
        var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
            var e = a.mediaKey,
                f = a.directPath,
                g = a.fileSha256,
                i = a.fileEncSha256;
            f = {
                directPath: f,
                encFilehash: d("WABase64").encodeB64(i),
                filehash: d("WABase64").encodeB64(g),
                mediaKey: d("WABase64").encodeB64(e),
                type: "md-app-state",
                userDownloadAttemptCount: 0
            };
            try {
                return yield d("WAWebDownloadManager").downloadManager.downloadAndMaybeDecrypt(babelHelpers["extends"]({
                    signal: new AbortController().signal
                }, f))
            } catch (e) {
                d("WALogger").LOG(h(), b, a.fileSizeBytes, d("WABase64").encodeB64(a.fileEncSha256).length, c);
                if (e instanceof d("WAWebMmsClientErrors").MediaNotFoundError) {
                    d("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric(b === "patch" ? d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_PATCH_EXPIRED : d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_EXPIRED, c);
                    throw new(d("WASyncdError").SyncdFatalError)("external patch expired")
                }
                throw e
            }
        });
        return function (b, c, d) {
            return a.apply(this, arguments)
        }
    }();
    g.uploadSyncExternalPatch = a;
    g.downloadSyncBlob = e
}), 98);
__d("WAWebDbCallbacks", ["WAWebSyncdDbCallbacksApi", "WAWebSyncdKeyCallbacksApi", "WAWebSyncdNetCallbacksApi"], (function (a, b, c, d, e, f, g) {
    b = {
        downloadSyncBlob: d("WAWebSyncdNetCallbacksApi").downloadSyncBlob,
        getDeviceFingerprint: d("WAWebSyncdKeyCallbacksApi").getDeviceFingerprint,
        handleSyncBeforeApplyPatch: (a = d("WAWebSyncdDbCallbacksApi")).handleSyncBeforeApplyPatch,
        handleSyncCompleted: a.handleSyncCompleted,
        handleSyncDelayApplyingPatchUntilUIUnblocks: a.handleSyncDelayApplyingPatchUntilUIUnblocks,
        handleSyncdFatal: a.handleSyncdFatal,
        sendSyncdKeyRequest: d("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest,
        sendSyncdKeyRotation: d("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRotation,
        uploadSyncExternalPatch: d("WAWebSyncdNetCallbacksApi").uploadSyncExternalPatch,
        writeSyncdLog: a.writeSyncdLog,
        printSyncdLog: a.printSyncdLog,
        bulkGetAccountLid: a.bulkGetAccountLid,
        getAdditionalLidMsgKeys: a.getAdditionalLidMsgKeys
    };
    g.dbCallbacks = b
}), 98);
__d("WAWebDebugSetup", ["WAWebBuildConstants", "cr:10195", "cr:10234"], (function (a, b, c, d, e, f, g) {
    function a() {
        window.Debug = {
            VERSION: d("WAWebBuildConstants").VERSION_STR
        }, b("cr:10234") && (window.Debug.pinClientToCdev = function (a) {
            b("cr:10234").setDebugRoutingToken(a)
        }), b("cr:10195") && (window.Debug.overrideDefaultBotForTest = function (a) {
            b("cr:10195").setDebugDefaultBotOverride(a)
        })
    }
    g.setupDebugGlobal = a
}), 98);
__d("WAWebFeatureDetectionCryptoSupport", ["Promise", "WALogger"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] AES-CBC: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] AES-CBC key generation failed: ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] AES-CBC decryption failed: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] AES-CBC encryption/decryption is incorrect"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] AES-CBC encryption/decryption is correct"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] AES-CBC encryption failed: ", ""]);
        n = function () {
            return a
        };
        return a
    }

    function o() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] HMAC-SHA256: ", ""]);
        o = function () {
            return a
        };
        return a
    }

    function p() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] HMAC-SHA256 key generation failed: ", ""]);
        p = function () {
            return a
        };
        return a
    }

    function q() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] HMAC-SHA256 verification failed: ", ""]);
        q = function () {
            return a
        };
        return a
    }

    function r() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] HMAC-SHA256 is not verified"]);
        r = function () {
            return a
        };
        return a
    }

    function s() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] HMAC-SHA256 is verified"]);
        s = function () {
            return a
        };
        return a
    }

    function t() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[crypto] HMAC-SHA256 signing failed: ", ""]);
        t = function () {
            return a
        };
        return a
    }
    var u = "whatsapp is da best",
        v = e(u),
        w = {
            name: "HMAC",
            hash: "SHA-256"
        },
        x = {
            name: "AES-CBC",
            length: 256
        };

    function y() {
        return (h || (h = b("Promise"))).resolve().then(function () {
            return self.crypto.subtle || self.crypto.webkitSubtle
        })
    }

    function a() {
        return y().then(function (a) {
            return a.generateKey(w, !1, ["sign", "verify"]).then(function (b) {
                return a.sign(w, b, v).then(function (c) {
                    return a.verify(w, b, c, v.buffer)
                })["catch"](function (a) {
                    d("WALogger").LOG(t(), a);
                    return !1
                }).then(function (a) {
                    if (a) {
                        d("WALogger").LOG(s());
                        return !0
                    }
                    d("WALogger").LOG(r());
                    return !1
                })["catch"](function (a) {
                    d("WALogger").LOG(q(), a);
                    return !1
                })
            })["catch"](function (a) {
                d("WALogger").LOG(p(), a);
                return !1
            })
        })["catch"](function (a) {
            d("WALogger").LOG(o(), a);
            return !1
        })
    }

    function c() {
        return y().then(function (a) {
            return a.generateKey(x, !1, ["encrypt", "decrypt"]).then(function (c) {
                return (h || (h = b("Promise"))).resolve(self.crypto).then(function (a) {
                    a = a.getRandomValues(new Uint8Array(16));
                    a = {
                        name: "AES-CBC",
                        iv: a
                    };
                    return a
                }).then(function (b) {
                    return a.encrypt(b, c, v).then(function (d) {
                        return a.decrypt(b, c, d)
                    })["catch"](function (a) {
                        d("WALogger").LOG(n(), a);
                        return !1
                    }).then(function (a) {
                        a = new Uint8Array(a);
                        if (z(a) === u) {
                            d("WALogger").LOG(m());
                            return !0
                        }
                        d("WALogger").LOG(l());
                        return !1
                    })["catch"](function (a) {
                        d("WALogger").LOG(k(), a);
                        return !1
                    })
                })
            })["catch"](function (a) {
                d("WALogger").LOG(j(), a);
                return !1
            })
        })["catch"](function (a) {
            d("WALogger").LOG(i(), a);
            return !1
        })
    }

    function e(a) {
        return new Uint8Array(a.split("").map(function (a) {
            return a.charCodeAt(0)
        }))
    }

    function z(a) {
        a = Array.prototype.slice.call(a);
        return a.map(function (a) {
            return String.fromCharCode(a)
        }).join("")
    }
    g.supportsHmacSha256 = a;
    g.supportsAesCbc = c
}), 98);
__d("WAWebFeatureDetectionRedirectIfMissingCapabilities", ["WAPromiseProps", "WAWebBuildConstants", "WAWebFeatureDetectionCryptoSupport", "WAWebLocalStorage", "WAWebSessionStorage"], (function (a, b, c, d, e, f, g) {
    var h = d("WAWebBuildConstants").DYN_ORIGIN + "browsers.html",
        i = {
            getRandomValues: !!self.crypto.getRandomValues,
            subtleCrypto: !!(self.crypto && (self.crypto.subtle || self.crypto.webkitSubtle)),
            localstorage: !!c("WAWebLocalStorage"),
            sessionstorage: !!c("WAWebSessionStorage"),
            url: !!self.URL,
            websocket: !!self.WebSocket,
            worker: !!self.Worker
        };

    function a() {
        if (j(i)) return !0;
        d("WAPromiseProps").promiseProps({
            cryptoSha256: d("WAWebFeatureDetectionCryptoSupport").supportsHmacSha256(),
            cryptoAesCbc: d("WAWebFeatureDetectionCryptoSupport").supportsAesCbc()
        }).then(j);
        return !1
    }

    function j(a) {
        var b = [];
        for (var c in a) a[c] || b.push(c);
        if (b.length > 0) {
            c = h + "?missing=" + b.join(",");
            window.location.replace ? window.location.replace(c) : window.location.href = c;
            return !0
        }
        return !1
    }
    g["default"] = a
}), 98);
__d("WAWebCookieManager", [], (function (a, b, c, d, e, f) {
    function a(a, b) {
        b = ["name", "value", "domain", "path", "secure", "session", "expirationDate"];
        a.session && delete a.expirationDate;
        var c = [];
        b.forEach(function (b) {
            var d = a[b];
            if (d === void 0 || b === "value") return;
            switch (b) {
                case "expirationDate":
                    var e = new Date(a.expirationDate);
                    c.push("expires=" + e.toUTCString());
                    break;
                case "secure":
                    c.push("secure");
                    break;
                case "name":
                    e = a.value || "";
                    c.push(String(d) + "=" + e);
                    break;
                default:
                    c.push(b + "=" + String(d))
            }
        });
        document.cookie = c.join(";")
    }

    function b(a) {
        a = document.cookie.match(new RegExp("(^| )" + a + "=([^;]+)"));
        return a ? a[2] : void 0
    }
    f.setCookie = a;
    f.getCookie = b
}), 66);
__d("WAWebFrontendL10nHelpers", ["WALogger", "WATimeUtils", "WAWebAlarm", "WAWebCookieDomain", "WAWebCookieManager", "WAWebL10nGetRenderedLocale", "WAWebRuntimeEnvironmentUtils", "WAWebURLUtils"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["l10n: renewing lang pref cookie TTL to: ", ""]);
        h = function () {
            return a
        };
        return a
    }
    var i = "wa_web_lang_pref",
        j = null,
        k = "\ud83c\udf10",
        l = "%F0%9F%8C%90";

    function m(a) {
        if (d("WAWebRuntimeEnvironmentUtils").isWorker()) return;
        j != null && c("WAWebAlarm").clearTimeout(j);
        var b = Date.now() + 4 * d("WATimeUtils").WEEK_MILLISECONDS;
        d("WAWebCookieManager").setCookie({
            name: i,
            value: a,
            path: "/",
            domain: d("WAWebCookieDomain").COOKIE_DOMAIN,
            secure: !0,
            expirationDate: b
        });
        j = c("WAWebAlarm").setLocalTimeout(function () {
            d("WALogger").LOG(h(), a), m(a)
        }, d("WATimeUtils").castUnixTimeToMillisTime(d("WATimeUtils").futureUnixTime(2 * d("WATimeUtils").WEEK_SECONDS)))
    }

    function a() {
        if (d("WAWebRuntimeEnvironmentUtils").isWorker()) return;
        var a = d("WAWebCookieManager").getCookie(i);
        a == null ? m(d("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()) : m(a)
    }

    function b() {
        if (d("WAWebRuntimeEnvironmentUtils").isWorker() || !c("WAWebURLUtils").canMuckHistory()) return;
        var a = self.location.href;
        (a.includes("/" + l + "/") || a.includes("/" + k + "/")) && window.history.replaceState({}, "", "/");
        a = new URL(a);
        a.searchParams.get("locale") != null && (a.searchParams["delete"]("locale"), window.history.replaceState({}, "", a.href))
    }
    g.setWAWebLocalePrefCookie = m;
    g.extendWAWebLocalePrefCookieTtl = a;
    g.mungeWAWebLocaleOverrideFromUrlIfNecessary = b
}), 98);
__d("WAWebLocalStorageUtils", ["WAWebLocalStorage", "WAWebUserPrefsKeys"], (function (a, b, c, d, e, f, g) {
    function a() {
        return !(c("WAWebLocalStorage") == null ? void 0 : c("WAWebLocalStorage").getItem(d("WAWebUserPrefsKeys").KEYS.LAST_WID_MD)) && !(c("WAWebLocalStorage") == null ? void 0 : c("WAWebLocalStorage").getItem(d("WAWebUserPrefsKeys").KEYS.LAST_WID))
    }

    function b() {
        return (c("WAWebLocalStorage") == null ? void 0 : c("WAWebLocalStorage").getItem(d("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT)) === "1"
    }
    g.isUserLoggedOut = a;
    g.isLogoutDirtyBitSet = b
}), 98);
__d("WAWebWAWCInit", ["WAWebWAWCStorage"], (function (a, b, c, d, e, f, g) {
    function a() {
        return c("WAWebWAWCStorage").openDB()
    }
    g.initWAWC = a
}), 98);
__d("WAWebHandlePreviousLogout", ["WALogger", "WAWebIndexedDBPurge", "WAWebLocalStorage", "WAWebLocalStorageUtils", "WAWebLogoutReason", "WAWebPonyfillsUrlSearchParams", "WAWebURLUtils", "WAWebWAWCInit", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Preemptive db delete failed with error ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function a() {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = d("WAWebLocalStorageUtils").isLogoutDirtyBitSet(),
                e = d("WAWebLocalStorageUtils").isUserLoggedOut();
            if (a || e) try {
                yield d("WAWebIndexedDBPurge").deleteAllIdb(), yield d("WAWebWAWCInit").initWAWC()
            } catch (a) {
                d("WALogger").ERROR(h(), a).tags("app-wrapper")
            }
            e = b("WAWebPonyfillsUrlSearchParams");
            e = new e((e = window.location.search) != null ? e : "");
            a && (c("WAWebLocalStorage") == null ? void 0 : c("WAWebLocalStorage").clear(), e.set("post_logout", "1"), window.location.href = window.location.pathname + "?" + e.toString());
            a = e.get("logout_reason");
            a != null && d("WAWebLogoutReason").setPrevLogoutReasonCode(a);
            var f = e.get("logout_message_header"),
                g = e.get("logout_message_subtext");
            (f != null || g != null) && d("WAWebLogoutReason").setPrevCustomLogoutMessage({
                logoutMessageHeader: f,
                logoutMessageSubtext: g
            });
            f = e.get("post_logout") === "1";
            (f || a != null) && (c("WAWebURLUtils").canMuckHistory() && window.history.replaceState({}, document.title, "/"))
        });
        return i.apply(this, arguments)
    }
    g.handlePreviousLogoutFailures = a
}), 98);
__d("WAWebInfraErrorLogger", ["ErrorPubSub", "WALogger", "WALoggerUtils", "justknobx"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[ErrorPubSub] ", ""]);
        i = function () {
            return a
        };
        return a
    }
    var j = [{
            partialMessage: 'Converting to a string will drop content data. Hash="undefined"'
        }],
        k = ["ONUNHANDLEDREJECTION", "ONERROR", "PROMISE_DONE", "REACT_FIBER", "DEPRECATED"];

    function l(a, b) {
        return k.includes(b) ? !0 : j.some(function (b) {
            b = b.partialMessage;
            return String(a).includes(b)
        })
    }

    function a() {
        var a = c("justknobx")._("860");
        if (a === 0) return;
        var b = d("WALoggerUtils").dynamicLoggingSampling(a / 100);
        (h || (h = c("ErrorPubSub"))).addListener(function (a, c) {
            c = l(a.message, c);
            c || d("WALogger").ERROR(i(), a.message).sendLogs("[ErrorPubSub] " + a.message, {
                sampling: b
            }).tags("ErrorPubSub")
        })
    }
    g.addListenerToErrorPubSub = a
}), 98);
__d("WAWebLodashMemoizeCache", ["WAMemoizeCache", "lodash"], (function (a, b, c, d, e, f, g) {
    function a() {
        c("lodash").memoize.Cache = d("WAMemoizeCache").MemoizeCache
    }
    g.setupLodashMemoizeCache = a
}), 98);
__d("WAWebLogger", ["ErrorNormalizeUtils", "WALogger", "WATagsLogger", "WAWebCrashlog", "WAWebLoggerImpl", "err", "gkx"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[logger] initialized"]);
        h = function () {
            return a
        };
        return a
    }

    function i(a) {
        switch (a) {
            case "ERROR":
            case "CATCHING":
                return {
                    level: 4, consoleFunction: console.error
                };
            case "WARN":
                return {
                    level: 3, consoleFunction: console.warn
                };
            case "LOG":
                return {
                    level: 2, consoleFunction: console.log
                };
            case "DEV_XMPP":
            case "DEV":
                return {
                    level: 1, consoleFunction: console.info
                };
            default:
                return {
                    level: 2, consoleFunction: console.log
                }
        }
    }

    function j(a) {
        if (c("gkx")("5943")) return;
        var b = i(a.level);
        a = d("WAWebLoggerImpl").Logger.log(b.level).apply(void 0, [a.template].concat(a.expressions));
        c("gkx")("26258") || b.consoleFunction(a)
    }
    var k = {
        info: function (a, b, c) {
            j(c)
        },
        debug: function (a, b, d) {
            c("gkx")("26258") || j(d)
        },
        logRestricted: function (a, b, d) {
            c("gkx")("26258") || j(d)
        },
        error: function (a, b, c, d) {
            j(d)
        },
        warn: function (a, b, c) {
            j(c)
        },
        devConsole: function (a, b, d) {
            if (c("gkx")("5943")) return;
            if (!c("gkx")("26258")) {
                var e;
                for (var f = arguments.length, g = new Array(f > 3 ? f - 3 : 0), h = 3; h < f; h++) g[h - 3] = arguments[h];
                (e = i(a)).consoleFunction.apply(e, [b + " devConsole:"].concat(g))
            }
        },
        sendLogs: function (a) {
            var b = i(a.level),
                e = c("ErrorNormalizeUtils").normalizeError(c("err")("created for stack trace"));
            e = d("WAWebLoggerImpl").Logger.log(b.level, a.verbose, e, !1, [d("WAWebLoggerImpl").STACK_TRACE_TAG]).apply(void 0, [a.template].concat(a.expressions));
            !c("gkx")("26258") && !c("gkx")("5943") && b.consoleFunction(e);
            e = d("WAWebLoggerImpl").Logger.log(b.level, a.verbose, void 0, !0, a.tags).apply(void 0, [a.template].concat(a.expressions));
            !c("gkx")("26258") && !c("gkx")("5943") && b.consoleFunction(e);
            d("WAWebCrashlog").sendLogs((e = (b = a.sendLogs) == null ? void 0 : b.reason) != null ? e : "www_sendlogs_undefined", {
                sampling: (b = a.sendLogs) == null ? void 0 : b.sampling,
                tags: a.tags,
                sendLogsType: (e = a.sendLogs) == null ? void 0 : e.sendLogsType
            })["catch"](function (a) {})
        }
    };

    function a() {
        d("WATagsLogger").initializeWaLogger(k), d("WALogger").DEV(h())
    }
    g.initializeWAWebLogger = a
}), 98);
__d("WAWebLoggerOnError", ["WALogger", "WAWebCrashlog", "WAWebLoggerImpl", "WAWebMiscErrors", "WAWebNoop", "WAWebUim", "gkx"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["UIM Print Failed!"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Ignored Error: ", ""]);
        i = function () {
            return a
        };
        return a
    }
    var j = [{
            partialMsg: "webpackJsonp is not defined"
        }, {
            partialMsg: "WUPE is not defined"
        }, {
            partialMsg: "spectrum is not a function"
        }, {
            partialMsg: "evaluating 'document.getElementsByClassName('_3B9bf')"
        }, {
            partialMsg: "onWebLoad is not defined"
        }],
        k = [{
            partialUserAgent: "Chrome",
            partialMsg: "ResizeObserver loop limit exceeded"
        }, {
            partialUserAgent: "",
            partialMsg: "Failed to execute 'put' on 'Cache'"
        }],
        l = [{
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read property 'style' of null"
        }, {
            partialUserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
            partialMsg: "Unexpected token :"
        }, {
            partialUserAgent: "Firefox/52.0,,Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/52.0",
            partialMsg: "Cannot read property 'style' of undefined"
        }, {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Safari/605.1.15",
            partialMsg: "is not an object"
        }, {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read property 'getElementsByTagName' of undefined"
        }, {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36",
            partialMsg: "Can't find variable: dismissKeyboard"
        }, {
            partialUserAgent: "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.78 Safari/537.36",
            partialMsg: "ReferenceError: None is not defined"
        }, {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read properties of null (reading 'style')"
        }, {
            partialUserAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            partialMsg: "Cannot read properties of undefined (reading 'getElementsByTagName')"
        }, {
            partialUserAgent: "Chrome/60.0.3112.113",
            partialMsg: "Cannot read properties of null (reading 'removeChild')"
        }, {
            partialUserAgent: "Chrome/60.0.3112.113",
            partialMsg: "Cannot read properties of undefined (reading 'isSettingDark')"
        }],
        m = window.navigator.userAgent;

    function n(a) {
        var b = [d("WAWebMiscErrors").DbOnLogoutAbort, d("WAWebMiscErrors").DbClosedOnTakeover, d("WAWebMiscErrors").DbNotFoundOnTakeover];
        return !b.some(function (b) {
            return a instanceof b
        })
    }

    function o(a) {
        var b = [].concat(k);
        c("gkx")("26258") && b.push.apply(b, l);
        return b.some(function (b) {
            var c = b.partialUserAgent;
            b = b.partialMsg;
            return m.includes(c) && String(a).includes(b)
        })
    }

    function p(a, b) {
        var c = j.some(function (b) {
            b = b.partialMsg;
            return String(a).includes(b)
        });
        return c ? c : b instanceof Error && b.stack != null && b.stack.includes("evalmachine.<anonymous>")
    }

    function q(a) {
        return a instanceof Error && a.stack != null && a.stack.includes("chrome-extension://")
    }

    function a(a, b, e, f, g) {
        if (o(a)) {
            d("WALogger").WARN(i(), a || (g || "").toString());
            return !0
        }
        try {
            d("WAWebUim").UIM.pprint(!0)
        } catch (a) {
            d("WALogger").WARN(h()).devConsole(a)
        }
        b = b.split("?")[0];
        b && typeof e === "number" ? e = " (" + b + ":" + e + ":" + f + ")" : b ? e = " (" + b + ")" : e = "";
        if (a === "Script error." && !g) {
            d("WAWebLoggerImpl").Logger.logUncaughtError(e + " " + a);
            b && d("WAWebCrashlog").upload({
                reason: "script-error",
                hasTaggedMessage: !0,
                sendLogsType: d("WALogger").SendLogsType.UNCAUGHT_EXCEPTION
            });
            return !1
        }
        f = g instanceof Error && g.stack ? g : "" + (a || "Given: " + String(g));
        e = d("WAWebLoggerImpl").Logger.logUncaughtError(f);
        if (!n(g)) return c("gkx")("26258");
        if (p(a, g) || q(g)) return c("gkx")("26258");
        d("WAWebCrashlog").upload({
            reason: e,
            hasTaggedMessage: !0,
            sendLogsType: d("WALogger").SendLogsType.UNCAUGHT_EXCEPTION
        })["catch"](c("WAWebNoop"));
        return c("gkx")("26258")
    }

    function b(a) {
        var b = a.promise;
        a = a.reason;
        b = d("WAWebLoggerImpl").Logger.logUncaughtError(a, b);
        if (!n(a)) return;
        d("WAWebCrashlog").upload({
            reason: b,
            hasTaggedMessage: !0,
            sendLogsType: d("WALogger").SendLogsType.UNHANDLED_REJECTED_PROMISE
        })
    }
    g.onErrorHandler = a;
    g.onUnhandledPromiseRejection = b
}), 98);
__d("WAWebPageLoadTierStats", ["CometQPLPayloadStore", "performance"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a() {
        var a = i(),
            b = j(),
            c = {},
            d = {
                cache_count: 0,
                cache_rate: 0,
                decoded_body_size: 0,
                encoded_body_size: 0,
                total_count: 0,
                transfer_size: 0
            };
        for (var a = a, e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= a.length) break;
                g = a[f++]
            } else {
                f = a.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            var h = g.refs;
            g = g.url;
            g = b.get(k(g));
            if (!g) continue;
            d.decoded_body_size += g.decodedBodySize;
            d.encoded_body_size += g.encodedBodySize;
            d.transfer_size += +g.transferSize;
            d.total_count += 1; + g.transferSize === 0 && (d.cache_count += 1);
            for (var h = h, l = Array.isArray(h), m = 0, h = l ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var n;
                if (l) {
                    if (m >= h.length) break;
                    n = h[m++]
                } else {
                    m = h.next();
                    if (m.done) break;
                    n = m.value
                }
                n = n;
                var o = n + "_start";
                n = n + "_end";
                c[o] = Math.min(g.requestStart, (o = c[o]) != null ? o : Number.POSITIVE_INFINITY);
                c[n] = Math.max(g.responseEnd, (o = c[n]) != null ? o : Number.NEGATIVE_INFINITY)
            }
        }
        d.total_count > 0 && (d.cache_rate = Math.round(d.cache_count / d.total_count * 100));
        return [c, d]
    }

    function i() {
        var a = d("CometQPLPayloadStore").getPayloadMap();
        if (!a) return [];
        a = Object.values(a).at(0);
        return !a ? [] : Object.values(a)
    }

    function j() {
        var a = new Map();
        if (typeof (h || (h = c("performance"))).getEntriesByType === "function") {
            var b = (h || (h = c("performance"))).getEntriesByType("resource");
            b.forEach(function (b) {
                var c = k(b.name);
                a.set(c, b)
            })
        }
        return a
    }

    function k(a) {
        return a.split("#")[0]
    }
    g.getTierStats = a
}), 98);
__d("WAWebWebcPageLoad2WamEvent", ["WAWebWamCodegenUtils"], (function (a, b, c, d, e, f, g) {
    a = d("WAWebWamCodegenUtils").defineEvents({
        WebcPageLoad2: [5392, {
                webcPageLoadId: [1, d("WAWebWamCodegenUtils").TYPES.STRING]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        WebcPageLoad2: []
    });
    g.WebcPageLoad2WamEvent = a
}), 98);
__d("WAWebPageLoadLoggingImpl", ["WALogger", "WAQplTypes", "WAWebABProps", "WAWebEncryptedRid", "WAWebPageLoadLogging", "WAWebPageLoadTierStats", "WAWebPonyfillsCryptoRandomUUID", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebUserPrefsKeys", "WAWebUserPrefsMultiDevice", "WAWebUserPrefsStore", "WAWebWamPageLoadReporter", "WAWebWamUtils", "WAWebWebcPageLoad2WamEvent"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] ", " qpl: ", " wam: ", " diff: ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] validation finished"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] validation failed"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] validating qpl and wam data"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] missing completion marker for ", " after ", "ms"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] no navigation timing entry"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[page load] ", " not started"]);
        n = function () {
            return a
        };
        return a
    }
    var o, p = !1,
        q = {
            socket_error_count: 0
        },
        r = c("WAWebPonyfillsCryptoRandomUUID")();

    function s() {
        o == null && !p && (o = d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.PAGE_LOAD, {
            timestamp: 0
        }));
        return o
    }

    function t(a) {
        var b = s();
        if (b == null) return;
        if (d("WAWebUserPrefsMultiDevice").isRegistered()) {
            var c = d("WAWebEncryptedRid").getEncryptedRid();
            c != null && y({
                encrypted_rid: c
            })
        }
        y({
            qr_screen: a,
            is_foreground: !document.hidden,
            page_load_id: r
        });
        B(b);
        C(b);
        b.annotate(A(q));
        b.end(d("WAQplTypes").QuickLogActionType.SUCCESS);
        new(d("WAWebWebcPageLoad2WamEvent").WebcPageLoad2WamEvent)({
            webcPageLoadId: r
        }).commit();
        o = null;
        p = !0;
        F();
        d("WAWebABProps").getABPropConfigValue("webc_page_load_early_commit_enabled") && d("WAWebWamPageLoadReporter").logWamPageLoad();
        self.setTimeout(d("WAWebWamUtils").forceFlushAllWamAndQplBuffers, 1e4)
    }
    var u = new Set();

    function v(a) {
        var b;
        (b = s()) == null ? void 0 : b.addPoint(a + "_start");
        u.add(a)
    }

    function w(a) {
        var b;
        if (!u.has(a)) {
            d("WALogger").WARN(n(), a);
            return
        }(b = s()) == null ? void 0 : b.addPoint(a + "_end");
        u["delete"](a)
    }

    function x(a) {
        var b, c = Math.floor(self.performance.now());
        E(a, {
            qpl: c
        });
        (b = s()) == null ? void 0 : b.addPoint(a, {
            timestamp: c
        })
    }

    function y(a) {
        q = babelHelpers["extends"]({}, q, a)
    }

    function z() {
        q.socket_error_count++
    }

    function A(a) {
        var b = {},
            c = Object.keys(a);
        for (var d = 0; d < c.length; d++) {
            var e = c[d],
                f = a[e];
            typeof f === "boolean" ? (b.bool == null && (b.bool = {}), b.bool[e] = f) : typeof f === "number" ? (b["int"] == null && (b["int"] = {}), b["int"][e] = f) : typeof f === "string" && (b.string == null && (b.string = {}), b.string[e] = f)
        }
        return b
    }

    function B(a) {
        var b;
        if (a == null) return;
        b = (b = window) == null ? void 0 : (b = b.performance) == null ? void 0 : b.getEntriesByType("navigation")[0];
        if (b == null) {
            d("WALogger").WARN(m());
            return
        }
        a.addPoint("request_start", {
            timestamp: b.requestStart
        });
        a.addPoint("response_end", {
            timestamp: b.responseEnd
        });
        a.addPoint("dom_complete", {
            timestamp: b.domComplete
        })
    }

    function C(a) {
        if (a == null) return;
        var b = d("WAWebPageLoadTierStats").getTierStats(),
            c = b[0];
        b = b[1];
        y(babelHelpers["extends"]({}, b));
        b = ["tierOne_start", "tierTwo_start", "tierThree_start", "tierOne_end", "tierTwo_end", "tierThree_end"];
        for (var e = 0; e < b.length; e++) {
            var f = b[e];
            if (c[f]) {
                var g = c[f];
                a.addPoint(f, {
                    timestamp: g
                })
            }
        }
    }
    var D = {
        wamComplete: !1,
        qplComplete: !1,
        timestamps: new Map()
    };

    function E(a, b) {
        var c = D.timestamps.get(a);
        c == null && (c = {}, D.timestamps.set(a, c));
        c.qpl == null && b.qpl != null && (c.qpl = b.qpl);
        c.wam == null && b.wam != null && (c.wam = b.wam)
    }

    function F() {
        D.qplComplete = !0, K()
    }

    function G() {
        D.wamComplete = !0, K()
    }
    var H = 20,
        I = 9e4,
        J = null;

    function K() {
        if (!(D.wamComplete && D.qplComplete)) {
            J == null && (J = self.setTimeout(function () {
                var a = D.wamComplete ? "qpl" : "wam",
                    b = "page-load-validation-missing-" + a;
                if (a === "wam") {
                    var c = d("WAWebWamPageLoadReporter").getWamPageLoadTimingCompletion(),
                        e = c.uiTimingComplete;
                    c = c.wsTimingComplete;
                    !e && !c ? b += "-incomplete-both-timings" : !e ? b += "-incomplete-ui-timing" : !c ? b += "-incomplete-ws-timing" : b += "-completed-timings"
                }
                d("WALogger").ERROR(l(), a, I).sendLogs(b, {
                    sampling: .01
                })
            }, I));
            return
        }
        J != null && (self.clearTimeout(J), J = null);
        d("WALogger").DEV(k());
        var a = !1;
        for (var b = D.timestamps.entries(), c = Array.isArray(b), e = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (c) {
                if (e >= b.length) break;
                f = b[e++]
            } else {
                e = b.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f = f[1];
            var m = f.qpl;
            f = f.wam;
            m != null && f != null && (Math.abs(m - f) > H && (d("WALogger").LOG(h(), g, m, f, Math.abs(m - f)), a = !0))
        }
        a && d("WALogger").WARN(j()).sendLogs("page-load-validation", {
            sampling: .01
        });
        d("WALogger").DEV(i())
    }

    function a() {
        return null;
        return c("WAWebUserPrefsStore").get(d("WAWebUserPrefsKeys").UserPrefs.PageLoadDebug) !== !0 ? null : self.performance
    }

    function b() {
        d("WAWebPageLoadLogging").setImpl({
            endPageLoadQpl: t,
            endPageLoadQplMeasure: w,
            startPageLoadQplMeasure: v,
            addPageLoadQplPoint: x,
            addPageLoadQplAnnotation: y,
            incrementPageLoadQplSocketError: z,
            addPageLoadValidationData: E,
            setWamCompleteForValidation: G,
            PAGE_LOAD_ID: r
        })
    }
    g.setPageLoadLoggingImpl = b
}), 98);
__d("WAWebQplQuickPerformanceLoggerInit", ["Promise", "WALogger", "WAQplConfigTypes", "WAQplNetwork", "WAQuickPerformanceLogger", "WAWebApiQplEvents", "WAWebQplHealthLogger", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebQplStorageApi", "WAWebQplValuesConfig", "WAWebXHR", "asyncToGeneratorRuntime", "gkx"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["QPL ondemand upload event failure"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["", " failed to upload successfully"]);
        j = function () {
            return a
        };
        return a
    }

    function a() {
        var b = babelHelpers.taggedTemplateLiteralLoose(["QPL, got event during STARTUP ", ", duration: ", "ms, ", ""]);
        a = function () {
            return b
        };
        return b
    }
    var k = [(f = d("WAWebQplQuickPerformanceLoggerMarkerIds")).QuickLogMarkerId.WHATSAPP_WEB_TEST_EVENT, f.QuickLogMarkerId.SYNCD, f.QuickLogMarkerId.ALTERNATIVE_DEVICE_LINKING, f.QuickLogMarkerId.OFFLINE_RESUME, f.QuickLogMarkerId.DESKTOP_UPSELL_LINK_DEVICE_METRICS, f.QuickLogMarkerId.PAGE_LOAD],
        l = new Map([
            [f.QuickLogMarkerId.SYNCD, 100]
        ]),
        m = {
            cast: function (a) {
                return d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.cast(a)
            },
            getName: function (a) {
                return d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.getName(a)
            }
        };

    function e() {
        c("gkx")("26258") || d("WAWebQplQuickPerformanceLoggerModule").updateAllowlistDevVerboseLoggingOverrides();
        d("WAQuickPerformanceLogger").QPL.setAllowListDevVerboseLogging(d("WAWebQplQuickPerformanceLoggerModule").ALLOWLIST_DEV_VERBOSE_LOGGING.map(function (a) {
            return a
        }));
        d("WAQuickPerformanceLogger").QPL.setStartupAllowListEventFilter(k);
        d("WAQuickPerformanceLogger").QPL.setQplReducePrecisionMapMs(l);
        var a = new(d("WAWebQplStorageApi").QplStorageApi)();
        d("WAQuickPerformanceLogger").QPL.setStorageApi(a);
        d("WAQuickPerformanceLogger").QPL.setHealthLogger(d("WAWebQplHealthLogger"));
        d("WAQuickPerformanceLogger").QPL.setEnumConversion(m);
        var e = !1;
        d("WAQuickPerformanceLogger").QPL.setIsDev(e);
        d("WAQuickPerformanceLogger").QPL.init(function () {
            var e = b("asyncToGeneratorRuntime").asyncToGenerator(function* (e, f) {
                if (d("WAWebQplQuickPerformanceLoggerModule").ALLOWLIST_IMMEDIATE_UPLOAD.includes(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.cast(e.marker_id))) {
                    f = {
                        post: c("WAWebXHR").post
                    };
                    d("WAQplNetwork").defaultQplNetwork({
                        restInterface: f,
                        isDev: 0,
                        qplAccessToken: d("WAWebQplValuesConfig").qplConfigs.accessToken,
                        qplAppId: d("WAWebQplValuesConfig").qplConfigs.appId,
                        qplEndpoint: d("WAWebQplValuesConfig").qplConfigs.endpoint
                    });
                    try {
                        yield d("WAQplNetwork").defaultQplNetwork().sendEventsOverNetwork(d("WAWebApiQplEvents").createRows([e]))
                    } catch (a) {
                        f = d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.cast(e.marker_id);
                        f && d("WALogger").LOG(j(), d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.getName(f));
                        d("WALogger").ERROR(i()).tags("qpl").sendLogs("QPL ondemand upload event failure")
                    }
                } else a.add([e]);
                return (h || (h = b("Promise"))).resolve()
            });
            return function (a, b) {
                return e.apply(this, arguments)
            }
        }(), function (a) {
            return {
                sampleRate: k.includes(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.cast(a)) ? 1 : 0,
                samplingMethod: d("WAQplConfigTypes").QplSampleMethod.EVENT_BASED_SAMPLING
            }
        }, function () {
            return !0
        })
    }
    g.initializeQpl = e
}), 98);
__d("WAWebCollectionVersionStore", ["WAWebSchemaCollectionVersion"], (function (a, b, c, d, e, f, g) {
    a = function () {
        function a() {}
        var b = a.prototype;
        b.get = function (a) {
            return d("WAWebSchemaCollectionVersion").getCollectionVersionTable().get(a)
        };
        b.bulkGet = function (a) {
            return d("WAWebSchemaCollectionVersion").getCollectionVersionTable().bulkGet(a)
        };
        b.getAll = function () {
            return d("WAWebSchemaCollectionVersion").getCollectionVersionTable().all()
        };
        b.update = function (a, b) {
            return d("WAWebSchemaCollectionVersion").getCollectionVersionTable().createOrMerge(a, babelHelpers["extends"]({
                collection: a
            }, b))
        };
        b.bulkUpdate = function (a) {
            return d("WAWebSchemaCollectionVersion").getCollectionVersionTable().bulkCreateOrMerge(a)
        };
        b.clear = function () {
            return d("WAWebSchemaCollectionVersion").getCollectionVersionTable().clear()
        };
        return a
    }();
    a.locks = ["collection-version"];
    g.WAWebCollectionVersionStore = a
}), 98);
__d("WAWebMissingKeyStore", ["WAWebSchemaMissingKeys", "WAWebSyncdDb"], (function (a, b, c, d, e, f, g) {
    a = function () {
        function a() {}
        var b = a.prototype;
        b.getAll = function () {
            return d("WAWebSyncdDb").getAllMissingKeys()
        };
        b.bulkGet = function (a) {
            return d("WAWebSyncdDb").bulkGetMissingKeys(a)
        };
        b.count = function () {
            return d("WAWebSyncdDb").getMissingKeyCount()
        };
        b.bulkUpdate = function (a) {
            return d("WAWebSyncdDb").createOrUpdateMissingKeys(a)
        };
        b.bulkRemove = function (a) {
            return d("WAWebSyncdDb").bulkRemoveMissingKeys(a)
        };
        b.clear = function () {
            return d("WAWebSchemaMissingKeys").getMissingKeysTable().clear()
        };
        return a
    }();
    a.locks = ["missing-keys"];
    g.WAWebMissingKeyStore = a
}), 98);
__d("WAWebPendingMutationStore", ["WAWebNoop", "WAWebSchemaPendingMutations", "WAWebSyncdDb", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    a = function () {
        function a() {}
        var e = a.prototype;
        e.getByCollection = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (yield d("WAWebSyncdDb").getPendingMutationsRows(["collection"], a));
                return a.map(d("WAWebSchemaPendingMutations").convertToPendingMutationFromRow)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        e.getAll = function () {
            return d("WAWebSyncdDb").getAllPendingMutationsRows()
        };
        e.bulkCreate = function (a) {
            return d("WAWebSyncdDb").appendPendingMutationsRows(a).then(c("WAWebNoop"))
        };
        e.bulkRemove = function (a) {
            return d("WAWebSyncdDb").bulkRemovePendingMutations(a)
        };
        e.clear = function () {
            return d("WAWebSchemaPendingMutations").getPendingMutationsTable().clear()
        };
        return a
    }();
    a.locks = ["pending-mutations"];
    g.WAWebPendingMutationStore = a
}), 98);
__d("WAWebSyncActionStore", ["WAWebSchemaSyncActions", "WAWebSyncdDb", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    a = function () {
        function a() {}
        var c = a.prototype;
        c.count = function () {
            return d("WAWebSchemaSyncActions").getSyncActionsTable().count()
        };
        c.get = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (yield d("WAWebSyncdDb").getSyncAction(a));
                return a == null ? null : d("WAWebSchemaSyncActions").convertToSyncActionFromRow(a)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        c.getByCollections = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (yield d("WAWebSyncdDb").getSyncActionsRows(["collection"], a.map(function (a) {
                    return a
                })));
                return a.map(d("WAWebSchemaSyncActions").convertToSyncActionFromRow)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        c.getByIndexMacs = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (yield d("WAWebSyncdDb").getSyncActionsRows(["indexMac"], a.map(function (a) {
                    return a
                })));
                return a.map(d("WAWebSchemaSyncActions").convertToSyncActionFromRow)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        c.getByActionStates = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (yield d("WAWebSyncdDb").getSyncActionsRows(["actionState"], a.map(function (a) {
                    return a
                })));
                return a.map(d("WAWebSchemaSyncActions").convertToSyncActionFromRow)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        c.getByModelInfos = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (yield d("WAWebSyncdDb").getSyncActionsRows(["modelId", "modelType", "actionState"], a.map(function (a) {
                    return a
                })));
                return a.map(d("WAWebSchemaSyncActions").convertToSyncActionFromRow)
            });

            function c(b) {
                return a.apply(this, arguments)
            }
            return c
        }();
        c.getAll = function () {
            return d("WAWebSchemaSyncActions").getSyncActionsTable().all().then(function (a) {
                return a.map(d("WAWebSchemaSyncActions").convertToSyncActionFromRow)
            })
        };
        c.bulkSet = function (a) {
            return d("WAWebSyncdDb").setSyncActionRows(a.map(d("WAWebSchemaSyncActions").convertFromSyncActionToRow))
        };
        c.bulkUpdate = function (a) {
            return d("WAWebSyncdDb").updateSyncActionRows(a.map(d("WAWebSchemaSyncActions").convertFromSyncActionToRow))
        };
        c.bulkRemove = function (a) {
            return d("WAWebSyncdDb").deleteSyncActionRows(a)
        };
        c.clear = function () {
            return d("WAWebSchemaSyncActions").getSyncActionsTable().clear()
        };
        return a
    }();
    a.locks = ["sync-actions"];
    g.WAWebSyncActionStore = a
}), 98);
__d("WAWebSyncKeyStore", ["WAWebNoop", "WAWebSchemaSyncKeys", "WAWebSyncdDb"], (function (a, b, c, d, e, f, g) {
    a = function () {
        function a() {}
        var b = a.prototype;
        b.get = function (a) {
            return d("WAWebSyncdDb").getSyncKey(a)
        };
        b.getAll = function () {
            return d("WAWebSyncdDb").getAllSyncKeys()
        };
        b.set = function (a) {
            return d("WAWebSyncdDb").createSyncKey(a).then(c("WAWebNoop"))
        };
        b.expire = function (a) {
            return d("WAWebSyncdDb").expireSyncKey(a)
        };
        b.clear = function () {
            return d("WAWebSchemaSyncKeys").getSyncKeysTable().clear()
        };
        return a
    }();
    a.locks = ["sync-keys"];
    g.WAWebSyncKeyStore = a
}), 98);
__d("WAWebRunInTransaction", ["Promise", "WAWeb-dexie", "WAWebCollectionVersionStore", "WAWebMissingKeyStore", "WAWebModelStorageUtils", "WAWebPendingMutationStore", "WAWebSyncActionStore", "WAWebSyncKeyStore", "err"], (function (a, b, c, d, e, f, g) {
    var h, i = {
        SyncActionStore: d("WAWebSyncActionStore").WAWebSyncActionStore,
        CollectionVersionStore: d("WAWebCollectionVersionStore").WAWebCollectionVersionStore,
        PendingMutationStore: d("WAWebPendingMutationStore").WAWebPendingMutationStore,
        MissingKeyStore: d("WAWebMissingKeyStore").WAWebMissingKeyStore,
        SyncKeyStore: d("WAWebSyncKeyStore").WAWebSyncKeyStore
    };
    a = function (a, e) {
        if (c("WAWeb-dexie").currentTransaction != null) return (h || (h = b("Promise"))).reject(c("err")("Calling runInTransaction recursively. This is not allowed."));
        var f = Object.keys(a);
        a = f.flatMap(function (a) {
            return i[a].locks
        });
        return d("WAWebModelStorageUtils").getStorage().lock(a, function () {
            var a = {};
            for (var b = 0; b < f.length; b++) {
                var c = f[b];
                a[c] = new i[c]()
            }
            return e(a)
        })
    };
    g.runInTransaction = a
}), 98);
__d("WAWebSafari14Fix", ["WALogger", "WAWebUA", "WAWebWAWCStorage", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["loadUserIdbForBrokenSafariVersion failed with error ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function a() {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
                d("WAWebUA").UA.isLocalStorageBroken && (yield c("WAWebWAWCStorage").loadUserIdb())
            } catch (a) {
                d("WALogger").WARN(h(), a)
            }
        });
        return i.apply(this, arguments)
    }
    g.loadUserIdbForBrokenSafariVersion = a
}), 98);
__d("WAWebStringPolyfills", [], (function (a, b, c, d, e, f) {
    function a() {
        String.prototype.replaceAll || (String.prototype.replaceAll = function (a, b) {
            function c(a) {
                return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }
            return Object.prototype.toString.call(a).toLowerCase() === "[object regexp]" ? this.replace(a, b) : this.replace(new RegExp(c(a), "g"), b)
        })
    }
    f.polyfillStringReplaceAll = a
}), 66);
__d("WAWebCollectionHandlerWamMutation", ["WASyncdMetrics", "WATimeUtils", "WAWebMdAppStateMessageRangeWamEvent", "WAWebMdBootstrapDataAppliedWamEvent", "WAWebSyncdMdSyncFieldstatMeta", "WAWebSyncdUtils", "WAWebWamEnumMdBootstrapPayloadType", "WAWebWamEnumMdBootstrapSource", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        new(d("WAWebMdAppStateMessageRangeWamEvent").MdAppStateMessageRangeWamEvent)({
            additionalMessagesCount: a
        }).commit()
    }

    function c(a, b, c) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
            new(d("WAWebMdBootstrapDataAppliedWamEvent").MdBootstrapDataAppliedWamEvent)({
                mdBootstrapPayloadType: d("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                mdBootstrapSource: d("WAWebWamEnumMdBootstrapSource").MD_BOOTSTRAP_SOURCE.APP_STATE,
                mdSessionId: yield d("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId(),
                mdTimestamp: d("WATimeUtils").unixTimeMs(),
                mdBootstrapStepDuration: c,
                collection: d("WAWebSyncdUtils").collectionNameToMetric(a),
                usedSnapshot: b === d("WASyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_USED
            }).commit()
        });
        return h.apply(this, arguments)
    }
    g.logMetricsForMutationLength = a;
    g.logMetricsForDataApplied = c
}), 98);
__d("WAWebCollectionHandlerWamSyncUtil", ["WALongInt", "WASyncdConst", "WATimeUtils", "WAWebMdBootstrapAppStateDataDownloadedWamEvent", "WAWebSyncdMdSyncFieldstatMeta", "WAWebWamEnumMdBootstrapPayloadType", "WAWebWamEnumMdBootstrapStepResult", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a, b, c, d) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c, e) {
            a = new(d("WAWebMdBootstrapAppStateDataDownloadedWamEvent").MdBootstrapAppStateDataDownloadedWamEvent)({
                mdBootstrapPayloadType: [d("WASyncdConst").CollectionName.CriticalBlock, d("WASyncdConst").CollectionName.CriticalUnblockLow].includes(a) ? d("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL : d("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                mdTimestamp: d("WATimeUtils").unixTimeMs(),
                mdBootstrapStepDuration: d("WATimeUtils").unixTimeMs() - b,
                mdBootstrapStepResult: e === "success" ? d("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.SUCCESS : d("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT.FAILURE,
                mdSessionId: yield d("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId()
            });
            b = (yield d("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getStorageEstimation());
            b.mdStorageQuotaBytes !== d("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE && (a.mdStorageQuotaUsedBytes = b.mdStorageQuotaUsedBytes, a.mdStorageQuotaBytes = b.mdStorageQuotaBytes);
            try {
                e = d("WALongInt").maybeNumberOrThrowIfTooLarge(c);
                e != null && (a.mdBootstrapPayloadSize = e)
            } catch (a) {}
            a.commit()
        });
        return h.apply(this, arguments)
    }
    g.commitBootstrapAppStateDownloadMetric = a
}), 98);
__d("WAWebSyncdMetricCriticalBootstrapStageListener", ["WASyncdMetricCriticalBootstrapStage", "WAWebCollectionHandlerWamMutation", "WAWebSyncdCriticalBootstrapProcessingApi", "WAWebWamEnumBootstrapAppStateDataStageCode"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        var b = a.stage;
        a = a.annotations;
        if (b !== "SUCCESS") return;
        b = d("WASyncdMetricCriticalBootstrapStage").convertSyncdDecryptMutationsMetricsFromAnnotations(a);
        if (b == null) return;
        b.decryptedMutationMessageRangeCountArray.forEach(function (a) {
            return d("WAWebCollectionHandlerWamMutation").logMetricsForMutationLength(a)
        })
    }

    function b(a) {
        if (a.stage !== "SUCCESS") return;
        a = d("WASyncdMetricCriticalBootstrapStage").convertSyncdCriticalBootstrapStageFromAnnotations(a.annotations);
        if (a == null) return;
        d("WAWebSyncdCriticalBootstrapProcessingApi").logCriticalBootstrapStageIfNecessary(h(a.type))
    }

    function h(a) {
        switch (a) {
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.ABOUT_TO_APPLY_MUTATIONS:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ABOUT_TO_APPLY_MUTATIONS;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.APPLIED_MUTATIONS:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.APPLIED_MUTATIONS;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.MUTATIONS_DECRYPTED:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MUTATIONS_DECRYPTED;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.REQUEST_BUILT:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.REQUEST_BUILT;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.RESPONSE_RECEIVED:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_RECEIVED;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.RESPONSE_PARSED_VALID:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_PARSED_VALID;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.ENTERED_RETRY_MODE:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ENTERED_RETRY_MODE;
            case d("WASyncdMetricCriticalBootstrapStage").SyncdCriticalBootstrapStageType.MISSING_KEYS_RECEIVED:
                return d("WAWebWamEnumBootstrapAppStateDataStageCode").BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MISSING_KEYS_RECEIVED
        }
    }
    g.syncdDecryptMutationsMetricsLogger = a;
    g.syncdCriticalBootstrapStageLogger = b
}), 98);
__d("WAWebSyncdMetricFatalErrorListener", ["WASyncdMetricFatalError", "WAWebSyncdUploadFatalErrorMetric", "WAWebWamEnumMdSyncdFatalErrorCode"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        var b = a.stage;
        a = a.annotations;
        if (b !== "FAIL") return;
        b = d("WASyncdMetricFatalError").convertSyncdFatalErrorFromAnnotations(a);
        if (b == null) {
            d("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric(d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.UNKNOWN, null);
            return
        }
        d("WAWebSyncdUploadFatalErrorMetric").uploadFatalErrorMetric(h(b.type), b.collection == null ? null : b.collection, b.patchSnapshotMutationCount == null ? void 0 : b.patchSnapshotMutationCount, b.patchVersion == null ? void 0 : b.patchVersion, b.isFatal == null ? void 0 : b.isFatal, b.isLtHashConsistent == null ? void 0 : b.isLtHashConsistent, b.macFatalCollectionNameMismatch == null ? void 0 : b.macFatalCollectionNameMismatch, b.macFatalCurrentLthashMismatch == null ? void 0 : b.macFatalCurrentLthashMismatch, b.macFatalNewLthashMismatch == null ? void 0 : b.macFatalNewLthashMismatch, b.macFatalPatchVersionMismatch == null ? void 0 : b.macFatalPatchVersionMismatch, b.macFatalNewLthashSubtractMismatch == null ? void 0 : b.macFatalNewLthashSubtractMismatch, b.macFatalNumberHasOverrideMutation == null ? void 0 : b.macFatalNumberHasOverrideMutation, b.macFatalNumberNumAddMutation == null ? void 0 : b.macFatalNumberNumAddMutation, b.macFatalNumberNumRemoveMutation == null ? void 0 : b.macFatalNumberNumRemoveMutation, b.macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch == null ? void 0 : b.macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch, b.isPatchSenderPrimary == null ? void 0 : b.isPatchSenderPrimary, b.macFatalDidUseMacFetchFallback == null ? void 0 : b.macFatalDidUseMacFetchFallback, b.macFatalHasMissingRemove == null ? void 0 : b.macFatalHasMissingRemove, b.macFatalNumberAddMismatch == null ? void 0 : b.macFatalNumberAddMismatch, b.macFatalNumberRemoveMismatch == null ? void 0 : b.macFatalNumberRemoveMismatch, b.macFatalDidPreviousPatchFailPostSaveValidation == null ? void 0 : b.macFatalDidPreviousPatchFailPostSaveValidation, b.macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash == null ? void 0 : b.macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash, b.isPreviousPatchAnIncomingPatch == null ? void 0 : b.isPreviousPatchAnIncomingPatch, b.isLastPatchSenderAPrimaryDevice == null ? void 0 : b.isLastPatchSenderAPrimaryDevice, b.isSenderIndexSameAsPreviousSenderIndex == null ? void 0 : b.isSenderIndexSameAsPreviousSenderIndex, b.didBootstrapFromSnapshot == null ? void 0 : b.didBootstrapFromSnapshot, b.isThereAnotherSyncdCompanion == null ? void 0 : b.isThereAnotherSyncdCompanion)
    }

    function h(a) {
        switch (a) {
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.PATCH_PROTOBUF_SERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.PATCH_PROTOBUF_SERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MUTATIONS_PROTOBUF_SERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MUTATIONS_PROTOBUF_SERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.ENCRYPTION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.ENCRYPTION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_VERSION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_VERSION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_MAC:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_MAC;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_SNAPSHOT_KEY_ID:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_SNAPSHOT_KEY_ID;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_VERSION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_VERSION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_SNAPSHOT_MAC:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_SNAPSHOT_MAC;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_MAC:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_MAC;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_PATCH_KEY_ID:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_PATCH_KEY_ID;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_OPERATION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_OPERATION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_RECORD:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_RECORD;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_INDEX:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_INDEX;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_VALUE:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_VALUE;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_MUTATION_KEY_ID:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_MUTATION_KEY_ID;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.PATCH_PROTOBUF_DESERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.PATCH_PROTOBUF_DESERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_INDEX:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_INDEX;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_VERSION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_VERSION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.SNAPSHOT_MAC_MISMATCH_IN_PATCH:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_MAC_MISMATCH_IN_PATCH;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MAC_MISMATCH_PATCH:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MAC_MISMATCH_PATCH;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.DECRYPTION_FAILED:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.DECRYPTION_FAILED;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.DUPLICATE_PATCH_VERSION_IN_COLLECTION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.DUPLICATE_PATCH_VERSION_IN_COLLECTION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_VALUE:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_VALUE;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_ACTION_TIMESTAMP:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_ACTION_TIMESTAMP;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_REQUEST_FOR_COLLECTION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_BAD_REQUEST_FOR_COLLECTION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_FOUND_FOR_COLLECTION:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_NOT_FOUND_FOR_COLLECTION;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.CYCLIC_MUTATION_DEPENDENCY_IN_PATCH:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.CYCLIC_MUTATION_DEPENDENCY_IN_PATCH;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.SERVER_DID_NOT_SEND_ALL_PATCHES:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.SERVER_DID_NOT_SEND_ALL_PATCHES;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_MISSING_DATA:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TERMINAL_PATCH_MISSING_DATA;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_DESERIALIZATION_ERROR:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TERMINAL_PATCH_DESERIALIZATION_ERROR;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.TERMINAL_PATCH_UNKNOWN:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TERMINAL_PATCH_UNKNOWN;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.INVALID_ACTION_INDEX:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.INVALID_ACTION_INDEX;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_REQUEST_GLOBAL_ERROR:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_BAD_REQUEST_GLOBAL_ERROR;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_FOUND_GLOBAL_ERROR:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_NOT_FOUND_GLOBAL_ERROR;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.XMPP_BAD_METHOD_GLOBAL_ERROR:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_BAD_METHOD_GLOBAL_ERROR;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY;
            case d("WASyncdMetricFatalError").SyncdFatalErrorType.MISSING_KEY_ON_ALL_CLIENTS:
                return d("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE.MISSING_KEY_ON_ALL_CLIENTS
        }
    }
    g.syncdFatalErrorLogger = a
}), 98);
__d("WAWebSyncdQpl", ["WABaseGlobals", "WALogger", "WAQplTypes", "WASyncdMetrics", "WAWebOfflineHandler", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebSyncBootstrap", "err"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[qpl] marker ended for id ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[qpl] new marker point ", " added for id ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[qpl] new annotations added for id ", ""]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[qpl] marker started with id ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[qpl] new instance key created ", ""]);
        l = function () {
            return a
        };
        return a
    }
    var m = ["source"];

    function n(a) {
        if ((a == null ? void 0 : a.string) == null) return;
        var b = a.string,
            c = {};
        Object.keys(a.string).forEach(function (a) {
            m.includes(a) || (c[a] = b[a])
        });
        a.string = c
    }

    function o(a, b) {
        var c;
        if ((b == null ? void 0 : (c = b.string) == null ? void 0 : c.source) == null) return a;
        var d = b.string;
        c = Object.keys(d).filter(function (a) {
            return m.includes(a)
        });
        return [c.map(function (a) {
            return d[a]
        }), a].join("_")
    }

    function p() {
        if (c("WAWebSyncBootstrap").isSyncDBootstrapInProcess()) return "bootstrap";
        return !d("WAWebOfflineHandler").OfflineMessageHandler.isResumeFromRestartComplete() ? "offline_resume" : "online"
    }
    a = function () {
        function a() {
            this.$3 = p(), this.$4 = d("WABaseGlobals").getConfig().syncdQPLLoggingEnabled() && (this.$3 === "bootstrap" || this.$3 === "offline_resume"), this.$4 && (this.$1 = d("WAWebQplQuickPerformanceLoggerModule").QPL.getNextMarkerInstanceValue(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.SYNCD)), d("WALogger").DEV(l(), this.$1)
        }
        var b = a.prototype;
        b.$5 = function () {
            if (!this.$4) return !1;
            if (!this.$2) throw c("err")("QPL instance ${this._instanceKey} is not started");
            return !0
        };
        b.start = function () {
            if (!this.$4) return;
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.SYNCD, {
                instanceKey: this.$1
            });
            this.$2 = !0;
            this.annotate({
                when: this.$3
            });
            d("WALogger").DEV(k(), this.$1)
        };
        b.annotate = function (a) {
            if (!this.$5()) return;
            a = d("WASyncdMetrics").constructAnnotationsFromContext(a);
            n(a);
            a && (d("WAWebQplQuickPerformanceLoggerModule").QPL.markerAnnotate(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.SYNCD, a, {
                instanceKey: this.$1
            }), d("WALogger").DEV(j(), this.$1))
        };
        b.mark = function (a, b) {
            if (!this.$5()) return;
            b = d("WASyncdMetrics").constructAnnotationsFromContext(b);
            this.$6(a, b)
        };
        b.markAnnotations = function (a, b) {
            if (!this.$5()) return;
            this.$6(a, b)
        };
        b.$6 = function (a, b) {
            var c = o(a, b);
            n(b);
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerPoint(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.SYNCD, c, babelHelpers["extends"]({}, b && {
                data: b
            }, {
                instanceKey: this.$1
            }));
            d("WALogger").DEV(i(), a, this.$1)
        };
        b.end = function (a) {
            a === void 0 && (a = !1);
            if (!this.$5()) return;
            this.$2 = !1;
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.SYNCD, a ? d("WAQplTypes").QuickLogActionType.FAIL : d("WAQplTypes").QuickLogActionType.SUCCESS, {
                instanceKey: this.$1
            });
            d("WALogger").DEV(h(), this.$1)
        };
        return a
    }();
    g.SyncdQPL = a
}), 98);
__d("WAWebWamPREListeners", ["WALogger", "WAPREList", "WAPREMetrics", "WASyncdMetrics", "WASyncdWamAppState", "WAWebCmd", "WAWebCollectionHandlerWamMutation", "WAWebCollectionHandlerWamSyncUtil", "WAWebMdAppStateKeyRotationWamEvent", "WAWebMdAppStateSyncDailyWamEvent", "WAWebSyncdMetricCriticalBootstrapStageListener", "WAWebSyncdMetricFatalErrorListener", "WAWebSyncdQpl", "WAWebSyncdUtils", "WAWebWamEnumMdAppStateKeyRotationReasonCode", "WAWebWamEnumMdSyncdCriticalEventCode"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[syncd] Unknown syncd PRE instance key: ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Unhandled metric event: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function a() {
        d("WAPREMetrics").subscribe(j), d("WAWebCmd").Cmd.on("logout", d("WASyncdWamAppState").forceCommitAppState)
    }

    function j(a) {
        var b = a.name;
        switch (b) {
            case d("WAPREList").PRE_METRIC.SYNCD_FATAL_ERROR:
                d("WAWebSyncdMetricFatalErrorListener").syncdFatalErrorLogger(a);
                break;
            case d("WAPREList").PRE_METRIC.APP_STATE_SYNC_DAILY:
                q(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD_CRITICAL_EVENT:
                m(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD_CRITICAL_BOOTSTRAP_STAGE:
                d("WAWebSyncdMetricCriticalBootstrapStageListener").syncdCriticalBootstrapStageLogger(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD_BOOTSTRAP_APP_STATE_DOWNLOAD:
                k(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD_DECRYPT_MUTATIONS:
                d("WAWebSyncdMetricCriticalBootstrapStageListener").syncdDecryptMutationsMetricsLogger(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD_BOOTSTRAP_DATA_APPLIED:
                l(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD_KEY_ROTATION:
                o(a);
                break;
            case d("WAPREList").PRE_METRIC.SYNCD:
                s(a);
                break;
            case d("WAPREList").PRE_METRIC.WA_JOBS_ORCHESTRATOR:
            case d("WAPREList").PRE_METRIC.WA_JOB_MANAGER:
            default:
                d("WALogger").ERROR(i(), b);
                break
        }
    }

    function k(a) {
        if (a.stage !== "FAIL" && a.stage !== "SUCCESS") return;
        a = d("WASyncdMetrics").convertSyncdBootstrapAppStateDownloadFromAnnotations(a.annotations);
        if (a == null) return;
        d("WAWebCollectionHandlerWamSyncUtil").commitBootstrapAppStateDownloadMetric(a.collection, a.downloadStartTs, a.downloadSize, a.isSuccess)
    }

    function l(a) {
        if (a.stage !== "SUCCESS") return;
        a = d("WASyncdMetrics").convertSyncdBootstrapDataAppliedFromAnnotations(a.annotations);
        if (a == null) return;
        d("WAWebCollectionHandlerWamMutation").logMetricsForDataApplied(a.collection, a.snapshotUsed, a.durationMs)
    }

    function m(a) {
        if (a.stage !== "FAIL") return;
        a = d("WASyncdMetrics").convertSyncdCriticalEventFromAnnotations(a.annotations);
        if (a == null) return;
        d("WAWebSyncdUtils").uploadCriticalEventMetric(n(a.type), a.collection)
    }

    function n(a) {
        switch (a) {
            case d("WASyncdMetrics").SyncdCriticalEventType.MISSING_MUTATION_TO_REMOVE:
                return d("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.MISSING_MUTATION_TO_REMOVE
        }
    }

    function o(a) {
        if (a.stage !== "SUCCESS") return;
        a = d("WASyncdMetrics").convertSyncdKeyRotationEventFromAnnotations(a.annotations);
        if (a == null) return;
        new(d("WAWebMdAppStateKeyRotationWamEvent").MdAppStateKeyRotationWamEvent)({
            mdAppStateKeyRotationReason: p(a.type)
        }).commit()
    }

    function p(a) {
        switch (a) {
            case d("WASyncdMetrics").SyncdKeyRotationEventType.APP_STATE_SYNC_KEY_EXPIRY:
                return d("WAWebWamEnumMdAppStateKeyRotationReasonCode").MD_APP_STATE_KEY_ROTATION_REASON_CODE.APP_STATE_SYNC_KEY_EXPIRY;
            case d("WASyncdMetrics").SyncdKeyRotationEventType.DEVICE_DEREGISTERATION:
                return d("WAWebWamEnumMdAppStateKeyRotationReasonCode").MD_APP_STATE_KEY_ROTATION_REASON_CODE.DEVICE_DEREGISTERATION;
            case d("WASyncdMetrics").SyncdKeyRotationEventType.NO_KEYS:
                return d("WAWebWamEnumMdAppStateKeyRotationReasonCode").MD_APP_STATE_KEY_ROTATION_REASON_CODE.NO_KEYS
        }
    }

    function q(a) {
        var b = a.stage;
        a = a.annotations;
        if (b !== "SUCCESS") return;
        b = d("WASyncdWamAppState").convertAppStateSyncDailyFromAnnotations(a || {});
        a = new(d("WAWebMdAppStateSyncDailyWamEvent").MdAppStateSyncDailyWamEvent)();
        b.mutationCount > 0 && (a.mutationCount = b.mutationCount);
        b.invalidActionCount > 0 && (a.invalidActionCount = b.invalidActionCount);
        b.unsupportedActionCount > 0 && (a.unsupportedActionCount = b.unsupportedActionCount);
        b.keyRotationRemoveCount > 0 && (a.keyRotationRemoveCount = b.keyRotationRemoveCount);
        b.storedMutationCount > 0 && (a.storedMutationCount = b.storedMutationCount);
        b.uploadConflictCount > 0 && (a.uploadConflictCount = b.uploadConflictCount);
        b.unsetActionCount > 0 && (a.unsetActionCount = b.unsetActionCount);
        b.missingKeyCount > 0 && (a.missingKeyCount = b.missingKeyCount);
        a.commit()
    }
    var r = new Map();

    function s(a) {
        var b = a.instanceKey,
            c = a.annotations;
        if (a.stage === "START") {
            var e = new(d("WAWebSyncdQpl").SyncdQPL)();
            e.start();
            r.set(b, e);
            return
        }
        e = r.get(b);
        if (e == null) {
            d("WALogger").ERROR(h(), b);
            return
        }
        switch (a.stage) {
            case "POINT":
                e.markAnnotations(a.reason, c);
                break;
            case "SUCCESS":
                e.end();
                r["delete"](b);
                break;
            case "FAIL":
                e.end(!0);
                r["delete"](b);
                break
        }
    }
    g.initializePREMetrics = a
}), 98);
__d("WAWebWamEnumConnectionOriginType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        PERSON: 1,
        PUSH: 2,
        OTHER: 3,
        BACKOFF: 4
    });
    f.CONNECTION_ORIGIN_TYPE = a
}), 66);
__d("WAWebWamEnumConnectionSequenceStepType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        PUSH_OVERRIDES: 1,
        PRIMARY: 2,
        PUSH_FALLBACKS: 4,
        HOST_FALLBACK: 5,
        NO_DNS: 6,
        SOFTLAYER: 7,
        PRIMARY_HTTP: 8,
        SOFTLAYER_HTTP: 9,
        HOST_FALLBACK_HTTP: 10,
        NO_DNS_HTTP: 11
    });
    f.CONNECTION_SEQUENCE_STEP_TYPE = a
}), 66);
__d("WAWebWamEnumDnsResolutionMethodType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        SYSTEM: 1,
        GOOGLE: 2,
        HARDCODED: 3,
        NO_DNS: 4
    });
    f.DNS_RESOLUTION_METHOD_TYPE = a
}), 66);
__d("WAWebWamEnumLoginDnsResolverType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        SYSTEM: 1,
        GOOGLE: 2,
        HARDCODED: 3,
        NO_DNS: 4
    });
    f.LOGIN_DNS_RESOLVER_TYPE = a
}), 66);
__d("WAWebWamEnumLoginHostType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        PUSH_OVERRIDES: 1,
        G_WHATSAPP_NET: 2,
        PUSH_FALLBACKS: 3,
        G_FALLBACK_WHATSAPP_NET: 4,
        HARDCODED_LIST: 5,
        EX_WHATSAPP_NET: 6
    });
    f.LOGIN_HOST_TYPE = a
}), 66);
__d("WAWebWamEnumLoginPortNumber", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        P5222: 1,
        P443: 2,
        P80: 3,
        UNKNOWN: 4
    });
    f.LOGIN_PORT_NUMBER = a
}), 66);
__d("WAWebWamEnumLoginResultType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        OK: 1,
        ERROR_UNKNOWN: 2,
        SERVER_ERROR: 3,
        SERVER_GOAWAY: 4,
        NETWORK_ERROR: 5,
        ANDROID_KEYSTORE_ERROR: 6,
        CERTIFICATE_ERROR: 7
    });
    f.LOGIN_RESULT_TYPE = a
}), 66);
__d("WAWebLoginWamEvent", ["WAWebWamCodegenUtils", "WAWebWamEnumAndroidKeystoreStateType", "WAWebWamEnumConnectionOriginType", "WAWebWamEnumConnectionSequenceStepType", "WAWebWamEnumDnsResolutionMethodType", "WAWebWamEnumLoginDnsResolverType", "WAWebWamEnumLoginHostType", "WAWebWamEnumLoginPortNumber", "WAWebWamEnumLoginResultType"], (function (a, b, c, d, e, f, g) {
    b = (a = d("WAWebWamCodegenUtils")).defineEvents({
        Login: [460, {
                androidKeystoreState: [10, d("WAWebWamEnumAndroidKeystoreStateType").ANDROID_KEYSTORE_STATE_TYPE],
                connectionOrigin: [6, d("WAWebWamEnumConnectionOriginType").CONNECTION_ORIGIN_TYPE],
                connectionSequenceStep: [11, d("WAWebWamEnumConnectionSequenceStepType").CONNECTION_SEQUENCE_STEP_TYPE],
                connectionT: [5, a.TYPES.TIMER],
                dnsResolutionMethod: [12, d("WAWebWamEnumDnsResolutionMethodType").DNS_RESOLUTION_METHOD_TYPE],
                loginDnsResolver: [13, d("WAWebWamEnumLoginDnsResolverType").LOGIN_DNS_RESOLVER_TYPE],
                loginIpSource: [14, d("WAWebWamEnumLoginHostType").LOGIN_HOST_TYPE],
                loginPort: [15, d("WAWebWamEnumLoginPortNumber").LOGIN_PORT_NUMBER],
                loginResolvedPop: [19, a.TYPES.STRING],
                loginResult: [1, d("WAWebWamEnumLoginResultType").LOGIN_RESULT_TYPE],
                loginT: [3, a.TYPES.TIMER],
                logoutSessionId: [18, a.TYPES.INTEGER],
                longConnect: [4, a.TYPES.BOOLEAN],
                noiseProtocolVersion: [16, a.TYPES.INTEGER],
                passive: [8, a.TYPES.BOOLEAN],
                pendingAcksCount: [17, a.TYPES.INTEGER],
                retryCount: [2, a.TYPES.INTEGER],
                sequenceStep: [7, a.TYPES.INTEGER],
                serverErrorCode: [9, a.TYPES.INTEGER]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        Login: []
    });
    g.LoginWamEvent = b
}), 98);
__d("WAWebWamWorkerSpecificEvents", ["WAWebLoginWamEvent"], (function (a, b, c, d, e, f) {
    Object.keys(importNamespace("WAWebLoginWamEvent")).forEach(function (a) {
        if (a === "default" || a === "__esModule") return;
        f[a] = importNamespace("WAWebLoginWamEvent")[a]
    })
}), null);
__d("WAWebAppInitializer.react", ["WAJids", "WALogger", "WAWap", "WAWeb-modernizr", "WAWebABPropsCache", "WAWebApp.react", "WAWebAppSwInitializer", "WAWebBrokerBackendInterface", "WAWebBuildConstants", "WAWebConfig", "WAWebConfigureWindowEvents", "WAWebDbCallbacks", "WAWebDebugSetup", "WAWebDesktopUpsellUtils", "WAWebEmojiKeywordToUnicode", "WAWebEventSamplingCache", "WAWebFeatureDetectionRedirectIfMissingCapabilities", "WAWebFrontendL10nHelpers", "WAWebGlobals", "WAWebHandlePreviousLogout", "WAWebInfraErrorLogger", "WAWebInvocationInterface", "WAWebLodashMemoizeCache", "WAWebLogger", "WAWebLoggerOnError", "WAWebPageLoadLoggingImpl", "WAWebQplQuickPerformanceLoggerInit", "WAWebQplValuesConfig", "WAWebRunInTransaction", "WAWebSafari14Fix", "WAWebStringPolyfills", "WAWebTransitions", "WAWebUA", "WAWebUserPrefsMeUser", "WAWebWam", "WAWebWamPREListeners", "WAWebWamPageLoadReporter", "WAWebWamWorkerSpecificEvents", "WAWebWidToJid", "asyncToGeneratorRuntime", "cr:9859", "gkx", "nullthrows", "react", "requireWeak", "velocity-animate", "velocity-animate-ui"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] version: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[app] bootstrap done"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[emoji-trie] EmojiKeywordToUnicode setup failed: ", ", stack: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Redirect because missing required browser apis"]);
        l = function () {
            return a
        };
        return a
    }
    var m = h || (h = d("react"));
    e = h;
    var n = e.useEffect,
        o = e.useState;
    c("requireWeak")("Banzai", function (a) {
        a.adapter.config.disabled = !0
    });

    function a() {
        d("WAWebStringPolyfills").polyfillStringReplaceAll();
        var a = o(!1),
            b = a[0],
            e = a[1];
        n(function () {
            void p().then(function () {
                !c("WAWebFeatureDetectionRedirectIfMissingCapabilities")() ? e(!0) : d("WALogger").ERROR(l()).sendLogs("missing-required-browser-apis")
            })
        }, []);
        return b ? m.createElement(d("WAWebApp.react").App, null) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function p() {
        return q.apply(this, arguments)
    }

    function q() {
        q = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            b("cr:9859") == null ? void 0 : b("cr:9859")();
            d("WAWebLodashMemoizeCache").setupLodashMemoizeCache();
            d("WAWebLogger").initializeWAWebLogger();
            d("WAWebInfraErrorLogger").addListenerToErrorPubSub();
            window.onerror = d("WAWebLoggerOnError").onErrorHandler;
            window.onunhandledrejection = d("WAWebLoggerOnError").onUnhandledPromiseRejection;
            d("WAWebWamPREListeners").initializePREMetrics();
            yield d("WAWebHandlePreviousLogout").handlePreviousLogoutFailures();
            d("WAWebQplQuickPerformanceLoggerInit").initializeQpl();
            d("WAWebPageLoadLoggingImpl").setPageLoadLoggingImpl();
            d("WAWebABPropsCache").initializeABPropsCache();
            d("WAWebEventSamplingCache").initializeEventSamplingCache();
            d("WAWebWam").initWamRuntime();
            b("WAWebWamWorkerSpecificEvents");
            d("WAWebWamPageLoadReporter").exeTimer.start();
            d("WAWebUA").UA.isSafari && d("WAWebUA").UA.browserVersion.startsWith("13.") && (c("nullthrows")(document.body).className += " text-rendering-bug-fix");
            b("WAWeb-modernizr");
            window.Velocity = b("velocity-animate");
            b("velocity-animate-ui");
            b("WAWebTransitions").registerEffects();
            d("WAWebInvocationInterface").set(c("WAWebBrokerBackendInterface"));
            d("WAWebDebugSetup").setupDebugGlobal();
            d("WAWebConfigureWindowEvents").configureWindowEvents();
            yield d("WAWebSafari14Fix").loadUserIdbForBrokenSafariVersion();
            try {
                d("WAWebEmojiKeywordToUnicode").updateEmojiTrie()
            } catch (a) {
                d("WALogger").WARN(k(), a, a.stack).sendLogs("[emoji-trie] EmojiKeywordToUnicode setup failed: " + a.message)
            }
            d("WAWebFrontendL10nHelpers").extendWAWebLocalePrefCookieTtl();
            d("WAWebFrontendL10nHelpers").mungeWAWebLocaleOverrideFromUrlIfNecessary();
            d("WAWebWamPageLoadReporter").exeTimer.end();
            c("gkx")("26258") || d("WAWap").enableXMLFormat();
            void d("WAWebDesktopUpsellUtils").isWebUserOnSupportedWindowsOSForUWPAsync();
            var a = d("WAWebWidToJid").widToMyJids(d("WAWebUserPrefsMeUser").getMe());
            d("WAWebGlobals").setGlobals({
                config: d("WAWebConfig").ConfigImpl,
                jidUtils: d("WAJids").createJidUtils({
                    platform: "whatsapp"
                }),
                myJids: a,
                db: d("WAWebDbCallbacks").dbCallbacks,
                runInTransaction: d("WAWebRunInTransaction").runInTransaction,
                qpl: d("WAWebQplValuesConfig").qplConfigs
            });
            void d("WAWebAppSwInitializer").initializeSw();
            d("WALogger").LOG(j());
            d("WALogger").LOG(i(), d("WAWebBuildConstants").VERSION_STR)
        });
        return q.apply(this, arguments)
    }
    g["default"] = a
}), 98);