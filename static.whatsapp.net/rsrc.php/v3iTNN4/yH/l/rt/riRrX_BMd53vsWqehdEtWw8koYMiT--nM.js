; /*FB_PKG_DELIM*/

__d("BDHeaderConfig", [], (function (a, b, c, d, e, f) {
    "use strict";
    a = "129477";
    f.ASBD_ID = a
}), 66);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES != null ? window.I_AM_CORE_COOKIE_INFRASTRUCTURE_AND_NEED_TO_ACCESS_COOKIES() : null,
        j = {
            set: function (a) {
                document.cookie = a
            },
            get: function () {
                return document.cookie
            }
        };

    function k() {
        return i != null ? i : j
    }

    function l(a, b, c, d, e, f, g, h) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f !== void 0 && f !== null ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "")
    }

    function m(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function n() {
        if (c("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = (h || (h = c("performanceNow")))(),
                b = k().get();
            a = h() - a;
            var d = a > c("CookieCoreLoggingConfig").maximumIgnorableStallMs && c("Random").coinflip(1 / c("CookieCoreLoggingConfig").sampleRate);
            d && c("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", c("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return b
        } else return k().get()
    }
    var o = function () {
            function a() {
                this.$1 = 0
            }
            var b = a.prototype;
            b.setCookie = function (a, b, c, d, e, f, g, h) {
                k().set(l(a, b, c, d, e, f, g, h))
            };
            b.clearCookie = function (a, b, c) {
                k().set(m(a, b, c))
            };
            b.getCookie = function (a) {
                var b;
                this.$1++;
                b = (b = n()) == null ? void 0 : b.match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
                return b ? decodeURIComponent(b[1]) : null
            };
            return a
        }(),
        p = 10 * 1e3,
        q = function () {
            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var b = a.prototype;
            b.setCookie = function (a, b, c, d, e, f, g, h) {
                k().set(l(a, b, c, d, e, f, g, h)), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            b.clearCookie = function (a, b, c) {
                k().set(m(a, b, c)), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            b.getCookie = function (a) {
                a = this.$5(a);
                a = a.cookie;
                return a
            };
            b.$5 = function (a) {
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + p < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + p < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            b.$6 = function () {
                var a;
                this.$4++;
                a = (a = (a = n()) == null ? void 0 : a.split(";")) != null ? a : [];
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();

    function a() {
        return c("gkx")("20940") ? new q() : new o()
    }
    g.newCookieStore = a;
    g.CookieCacheForTest = q;
    g.CookieStoreSlowForTest = o
}), 98);
__d("OdsWebBatchFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1838142");
    b = d("FalcoLoggerInternal").create("ods_web_batch", a);
    e = b;
    g["default"] = e
}), 98);
__d("FalcoConsentChecker", [], (function (a, b, c, d, e, f) {
    "use strict";

    function g(a, b, c, d) {
        var e;
        switch (typeof d) {
            case "string":
                e = a[String(d)];
                return !e ? !1 : e <= b;
            case "number":
                return g(a, b, c, c[Number(d)]);
            default:
                e = !1;
                if (Array.isArray(d)) {
                    var f = d[0];
                    for (var h = 1; h < d.length; h++) {
                        e = g(a, b, c, d[h]);
                        if (e) {
                            if (f === "or") return !0
                        } else if (f === "and") return !1
                    }
                }
                return e
        }
    }
    f["default"] = g
}), 66);
__d("pageID", ["WebSession"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = d("WebSession").getPageId_DO_NOT_USE();
    g["default"] = a
}), 98);
__d("WebStorageMutex", ["WebStorage", "clearTimeout", "pageID", "setTimeout"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = null,
        j = !1,
        k = c("pageID");

    function l() {
        j || (j = !0, i = (h || (h = c("WebStorage"))).getLocalStorage());
        return i
    }
    a = function () {
        function a(a) {
            this.name = a
        }
        a.testSetPageID = function (a) {
            k = a
        };
        var b = a.prototype;
        b.$2 = function () {
            var a, b = l();
            if (!b) return k;
            b = b.getItem("mutex_" + this.name);
            b = ((a = b) != null ? a : "").split(":");
            return b && parseInt(b[1], 10) >= Date.now() ? b[0] : null
        };
        b.$3 = function (a) {
            var b = l();
            if (!b) return;
            a = a == null ? 1e3 : a;
            a = Date.now() + a;
            (h || (h = c("WebStorage"))).setItemGuarded(b, "mutex_" + this.name, k + ":" + a)
        };
        b.hasLock = function () {
            return this.$2() === k
        };
        b.lock = function (a, b, d) {
            var e = this;
            this.$1 && c("clearTimeout")(this.$1);
            k === (this.$2() || k) && this.$3(d);
            this.$1 = c("setTimeout")(function () {
                e.$1 = null;
                var c = e.hasLock() ? a : b;
                c && c(e)
            }, 0)
        };
        b.unlock = function () {
            this.$1 && c("clearTimeout")(this.$1);
            var a = l();
            a && this.hasLock() && a.removeItem("mutex_" + this.name)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("guid", [], (function (a, b, c, d, e, f) {
    function a() {
        if (typeof crypto === "object" && typeof crypto.getRandomValues === "function" && typeof String.prototype.padStart === "function") {
            var a = crypto.getRandomValues(new Uint32Array(2));
            return "f" + a[0].toString(16).padStart(8, "0") + a[1].toString(16).padStart(8, "0")
        }
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
    f["default"] = a
}), 66);
__d("PersistedQueue", ["AnalyticsCoreData", "BaseEventEmitter", "ExecutionEnvironment", "Run", "WebStorage", "WebStorageMutex", "cr:8958", "err", "guid", "nullthrows", "performanceAbsoluteNow", "requestAnimationFrame"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = 24 * 60 * 60 * 1e3,
        m = 30 * 1e3,
        n = new(c("BaseEventEmitter"))(),
        o;

    function p(a) {
        a === void 0 && (a = !1);
        if (o === void 0) {
            var b;
            if (((b = (h || (h = c("AnalyticsCoreData"))).queue_activation_experiment) != null ? b : !1) && a) try {
                return (i || (i = c("WebStorage"))).getLocalStorageForRead()
            } catch (a) {
                return null
            }
            b = "check_quota";
            try {
                a = (i || (i = c("WebStorage"))).getLocalStorage();
                a ? (a.setItem(b, b), a.removeItem(b), o = a) : o = null
            } catch (a) {
                o = null
            }
        }
        return o
    }

    function q(a) {
        var b = a.prev,
            c = a.next;
        c && (c.prev = b);
        b && (b.next = c);
        a.next = null;
        a.prev = null
    }

    function r(a) {
        return {
            item: a,
            next: null,
            prev: null
        }
    }

    function s(a, b) {
        return a + "^$" + ((a = b == null ? void 0 : b.queueNameSuffix) != null ? a : "")
    }
    var t = {},
        u = {},
        v = {},
        w = !1;
    a = function () {
        function a(a, b) {
            var d, e = this;
            this.$7 = 0;
            this.$3 = a;
            this.$5 = (d = b == null ? void 0 : b.queueNameSuffix) != null ? d : "";
            this.$15 = b == null ? void 0 : b.application;
            this.$4 = s(a, b);
            this.$11 = this.$4 + "^$" + c("guid")();
            this.$14 = !1;
            if (b) {
                this.$8 = (d = b.max_age_in_ms) != null ? d : l;
                this.$12 = b.migrate;
                this.$13 = b.onLoad
            } else this.$8 = l;
            this.$9 = [n.addListener("active", function () {
                (e.$10 != null || !e.$14) && (e.$14 = !0, e.$10 = null, e.$16())
            }), n.addListener("inactive", function () {
                e.$10 == null && (e.$10 = Date.now(), e.$17())
            })];
            ((j || (j = c("ExecutionEnvironment"))).canUseDOM || (j || (j = c("ExecutionEnvironment"))).isInWorker) && c("requestAnimationFrame")(function () {
                return e.$16()
            })
        }
        var d = a.prototype;
        d.isActive = function () {
            var a = this.$10;
            if (a == null) return !0;
            if (Date.now() - a > m) {
                this.$10 = null;
                n.emit("active", null);
                return !0
            }
            return !1
        };
        d.$16 = function () {
            this.$18(), this.$19()
        };
        d.$17 = function () {
            this.$20()
        };
        d.getFullName = function () {
            return this.$4
        };
        d.getQueueNameSuffix = function () {
            return this.$5
        };
        a.isQueueActivateExperiment = function () {
            return w
        };
        a.setOnQueueActivateExperiment = function () {
            w = !0
        };
        a.create = function (b, d) {
            var e = s(b, d);
            if (e in t) throw c("err")("Duplicate queue created: " + b);
            d = new a(b, d);
            t[e] = d;
            v[b] ? v[b].push(d) : v[b] = [d];
            e = u[b];
            e && d.setHandler(e);
            return d
        };
        a.setHandler = function (a, b) {
            if (v[a]) {
                var c = v[a];
                for (var c = c, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    f.setHandler(b)
                }
            }
            u[a] = b
        };
        d.destroy = function () {
            this.$9.forEach(function (a) {
                return a.remove()
            })
        };
        a.destroy = function (a, b) {
            a = s(a, b);
            t[a].destroy();
            delete t[a]
        };
        d.setHandler = function (a) {
            this.$6 = a;
            this.$19();
            return this
        };
        d.$19 = function () {
            this.$7 > 0 && this.$6 && this.$6(this)
        };
        d.length = function () {
            return this.$7
        };
        d.enumeratedLength = function () {
            return this.$21().length
        };
        a.isPersistenceAllowed = function () {
            var a = p();
            return !a ? !1 : !0
        };
        a.getSuffixesForKey = function (a) {
            var b = [];
            try {
                var c = p(!0);
                if (!c) return b;
                a = a + "^$";
                for (var d = 0; d < c.length; d++) {
                    var e = c.key(d);
                    if (typeof e === "string" && e.startsWith("mutex_falco_")) c.removeItem(e);
                    else if (typeof e === "string" && e.startsWith(a)) {
                        e = e.split("^$");
                        if (e.length > 2) {
                            e = e[1];
                            b.push(e)
                        } else b.push("")
                    }
                }
            } catch (a) {}
            return b
        };
        d.$18 = function () {
            var d, e = this,
                a = p(!0);
            if (!a) return;
            var f = this.$4 + "^$";
            d = new(c("WebStorageMutex"))((d = this.$15) != null ? d : f);
            var g = this.$12,
                h = this.$13;
            d.lock(function (d) {
                var i = Date.now() - e.$8;
                try {
                    for (var j = 0; j < a.length; j++) {
                        var k = a.key(j);
                        if (typeof k === "string" && k.startsWith(f)) {
                            var l = a.getItem(k);
                            a.removeItem(k);
                            if (l != null && l.startsWith("{")) {
                                k = b("cr:8958").parse(c("nullthrows")(l));
                                if (k.ts > i) try {
                                    for (var l = k.items, k = Array.isArray(l), m = 0, l = k ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                        var n;
                                        if (k) {
                                            if (m >= l.length) break;
                                            n = l[m++]
                                        } else {
                                            m = l.next();
                                            if (m.done) break;
                                            n = m.value
                                        }
                                        n = n;
                                        g != null ? g(n) : n;
                                        n = h != null ? h(n) : n;
                                        e.$22(n)
                                    }
                                } catch (a) {}
                            }
                        }
                    }
                } catch (a) {}
                d.unlock();
                e.$19()
            })
        };
        d.$20 = function () {
            var a = p();
            if (!a) return;
            var d = this.$21();
            if (d.length === 0) {
                a.getItem(this.$11) != null && a.removeItem(this.$11);
                return
            }(i || (i = c("WebStorage"))).setItemGuarded(a, this.$11, b("cr:8958").stringify({
                items: d.map(function (a) {
                    return a
                }),
                ts: (k || (k = c("performanceAbsoluteNow")))()
            }))
        };
        d.$21 = function () {
            var a = this.$1,
                b = [];
            if (!a) return b;
            do b.push(a.item); while (a = a.prev);
            return b.reverse()
        };
        d.markItemAsCompleted = function (a) {
            var b = a.prev;
            q(a);
            this.$1 === a && (this.$1 = b);
            this.$7--;
            this.isActive() || this.$20()
        };
        d.markItemAsFailed = function (a) {
            q(a);
            var b = this.$2;
            if (b) {
                var c = b.prev;
                c && (c.next = a, a.prev = c);
                a.next = b;
                b.prev = a
            }
            this.$2 = a;
            this.isActive() && this.$19()
        };
        d.markItem = function (a, b) {
            b ? this.markItemAsCompleted(a) : this.markItemAsFailed(a)
        };
        d.$22 = function (a) {
            a = r(a);
            var b = this.$1;
            b && (b.next = a, a.prev = b);
            this.$1 = a;
            this.$2 || (this.$2 = a);
            this.$7++
        };
        d.wrapAndEnqueueItem = function (a) {
            this.$22(a), this.isActive() ? this.$19() : this.$20()
        };
        d.dequeueItem = function () {
            if (this.$10 != null) return null;
            var a = this.$2;
            if (!a) return null;
            this.$2 = a.next;
            return a
        };
        return a
    }();
    a.eventEmitter = n;
    if ((j || (j = c("ExecutionEnvironment"))).canUseDOM) {
        var x = d("Run").maybeOnBeforeUnload(function () {
            n.emit("inactive", null), x == null ? void 0 : x.remove()
        }, !1);
        if (!x) var y = d("Run").onUnload(function () {
            n.emit("inactive", null), y.remove()
        })
    }
    g["default"] = a
}), 98);
__d("ServerTime", ["ServerTimeData"], (function (a, b, c, d, e, f, g) {
    var h, i = 0;
    f = 0;
    var j = null;
    h = (h = (typeof window !== "undefined" ? window : self).performance) == null ? void 0 : h.timing;
    if (h) {
        var k = h.requestStart;
        h = h.domLoading;
        if (k && h) {
            var l = c("ServerTimeData").timeOfResponseStart - c("ServerTimeData").timeOfRequestStart;
            k = h - k - l;
            f = k / 2;
            l = h - c("ServerTimeData").timeOfResponseStart - f;
            h = Math.max(50, k * .8);
            Math.abs(l) > h && (i = l, j = Date.now())
        }
    } else d(c("ServerTimeData").serverTime);

    function a() {
        return Date.now() - i
    }

    function b() {
        return i
    }

    function d(a) {
        a = Date.now() - a;
        Math.abs(i - a) > 6e4 && (i = a, j = Date.now())
    }

    function e() {
        return j === null ? null : Date.now() - j
    }
    f = a;
    k = b;
    g.getMillis = a;
    g.getOffsetMillis = b;
    g.update = d;
    g.getMillisSinceLastUpdate = e;
    g.get = f;
    g.getSkew = k
}), 98);
__d("FalcoLoggerInternal", ["AnalyticsCoreData", "BaseEventEmitter", "FBLogger", "FalcoConsentChecker", "FalcoUtils", "PersistedQueue", "Promise", "Random", "ServerTime", "nullthrows", "performanceAbsoluteNow"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = (f = d("FalcoUtils")).getTaggedBitmap(33),
        l = f.getTaggedBitmap(0),
        m = f.getTaggedBitmap(37),
        n = 500 * 1024 * .6,
        o = new Map();

    function p(a) {
        var b;
        a.tags = d("FalcoUtils").xorBitmap((b = a.tags) != null ? b : [0, 0], k);
        return a
    }

    function a(a, b) {
        var d;
        d = (d = c("PersistedQueue").getSuffixesForKey(a)) != null ? d : [];
        d.push(b);
        for (var d = d, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g, h;
            if (e) {
                if (f >= d.length) break;
                h = d[f++]
            } else {
                f = d.next();
                if (f.done) break;
                h = f.value
            }
            h = h;
            var j = a + "^$" + h;
            if (o.has(j)) continue;
            g = ((g = (i || (i = c("AnalyticsCoreData"))).use_falco_as_mutex_key) != null ? g : !1) ? c("PersistedQueue").create(a, {
                onLoad: p,
                queueNameSuffix: h,
                application: "falco"
            }) : c("PersistedQueue").create(a, {
                onLoad: p,
                queueNameSuffix: h
            });
            o.set(j, g)
        }
        return c("nullthrows")(o.get(a + "^$" + b))
    }
    f = f.identityToString((i || (i = c("AnalyticsCoreData"))).identity);
    var q = a("falco_queue_log", f),
        r = a("falco_queue_immediately", f),
        s = a("falco_queue_critical", f),
        t = new(c("BaseEventEmitter"))(),
        u = {};

    function v(a, b, e) {
        var f = c("Random").coinflip(b.r);
        if (!f) {
            d("FalcoUtils").bumpODSMetrics(e, "event.filters.sampling", 1);
            return !1
        }
        f = b.c;
        if (f != null && (i || (i = c("AnalyticsCoreData"))).consents != null) {
            b = w(f, (i || (i = c("AnalyticsCoreData"))).consents, a);
            if (!b) {
                d("FalcoUtils").bumpODSMetrics(e, "event.filters.consent", 1);
                return !1
            }
        }
        return !0
    }

    function w(a, b, d) {
        var e = u[a];
        e == null && (e = u[a] = JSON.parse(a));
        return c("FalcoConsentChecker")(b, d, e, e[0])
    }

    function x() {
        return (j || (j = c("performanceAbsoluteNow")))() - d("ServerTime").getOffsetMillis()
    }

    function y(a, b, d, e, f, g) {
        if ((i || (i = c("AnalyticsCoreData"))).enable_observer) {
            a = babelHelpers["extends"]({
                name: a,
                time: b,
                sampled: d,
                getData: f,
                policy: e
            }, g && {
                getPrivacyContext: g
            });
            t.emit("event", a)
        }
    }

    function z(a, b, e, f, g, h) {
        g = JSON.stringify(g);
        if (g.length > n) {
            d("FalcoUtils").bumpODSMetrics(a, "event.filters.exceeded_size", 1);
            c("FBLogger")("falco", "oversized_message:" + a).warn('Dropping event "%s" due to exceeding the max size %s at %s', a, n, g.length);
            return
        }
        var i = d("FalcoUtils").xorBitmap([0, 0], l);
        i = d("FalcoUtils").xorBitmap(i, m);
        h.wrapAndEnqueueItem({
            name: a,
            policy: b,
            time: e,
            extra: g,
            privacyContext: f,
            tags: i
        });
        d("FalcoUtils").bumpODSMetrics(a, "event.captured", 1)
    }

    function A(a, b, c, e, f) {
        try {
            var g = x();
            d("FalcoUtils").bumpODSMetrics(a, "event.logged", 1);
            var h = v(g, b, a);
            if (h) {
                var i = e(),
                    j = c && c();
                z(a, b, g, j, i, f)
            }
            y(a, g, h, b, e, c)
        } catch (a) {
            C(a)
        }
    }

    function B(a, c, e, f, g) {
        try {
            var i = x();
            d("FalcoUtils").bumpODSMetrics(a, "event.logged", 1);
            var j = v(i, c, a);
            if (j) {
                var k = f(),
                    l = (h || (h = b("Promise"))).resolve(e && e());
                return h.all([k, l]).then(function (b) {
                    var d = b[0],
                        e = b[1];
                    z(a, c, i, e, d, g);
                    y(a, i, j, c, function () {
                        return d
                    }, e && function () {
                        return e
                    })
                })
            } else {
                y(a, i, j, c, f, e);
                return (h || (h = b("Promise"))).resolve()
            }
        } catch (a) {
            return (h || (h = b("Promise"))).reject(a)
        }
    }

    function C(a) {
        var b = c("FBLogger")("falco");
        a instanceof Error ? b.catching(a).warn("Error while attempting to log to Falco") : b.warn("Caught non-error while attempting to log to Falco: %s", JSON.stringify(a))
    }

    function e(a, b) {
        return {
            log: function (c, d) {
                A(a, b, d, c, q)
            },
            logAsync: function (c, d) {
                B(a, b, d, c, q)["catch"](C)
            },
            logImmediately: function (c, d) {
                A(a, b, d, c, r)
            },
            logCritical: function (c, d) {
                A(a, b, d, c, s)
            },
            logRealtimeEvent: function (c, d) {
                A(a, b, d, c, s)
            }
        }
    }
    g.observable = t;
    g.create = e
}), 98);
__d("FalcoUtils", ["AnalyticsCoreData", "ODS"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = "ods_web_batch";

    function a(a) {
        if (a) {
            var b = a.fbIdentity,
                c = a.appScopedIdentity;
            a = a.claim;
            var d = "";
            if (b) {
                var e = b.accountId;
                b = b.actorId;
                d = e + "^#" + b + "^#"
            } else c !== void 0 && (d = "^#^#" + c);
            return d + "^#" + a
        }
        return ""
    }

    function b(a) {
        return a > 30 ? [0, 1 << a - 30] : [1 << a, 0]
    }

    function e(a, b) {
        return [a[0] | b[0], a[1] | b[1]]
    }

    function f(a, b, e) {
        if (a === j) return;
        (i || (i = d("ODS"))).bumpEntityKey(7173, "entities.ff_js_web." + a + "." + (h || (h = c("AnalyticsCoreData"))).app_id + "." + ((a = (h || (h = c("AnalyticsCoreData"))).app_version) != null ? a : "0").split(".")[0] + "." + h.push_phase, b, e)
    }
    g.identityToString = a;
    g.getTaggedBitmap = b;
    g.xorBitmap = e;
    g.bumpODSMetrics = f
}), 98);
__d("ODS", ["ExecutionEnvironment", "OdsWebBatchFalcoEvent", "Random", "Run", "clearTimeout", "gkx", "setTimeout", "unrecoverableViolation"], (function (a, b, c, d, e, f, g) {
    var h, i, j = (h || (h = c("ExecutionEnvironment"))).canUseDOM || (h || c("ExecutionEnvironment")).isInWorker,
        k = {};

    function l(a, b, c, d, e) {
        var f;
        d === void 0 && (d = 1);
        e === void 0 && (e = 1);
        var g = (f = k[b]) != null ? f : null;
        if (g != null && g <= 0) return;
        i = i || {};
        var h = i[a] || (i[a] = {}),
            j = h[b] || (h[b] = {}),
            l = j[c] || (j[c] = {
                n: 0,
                d: null
            }),
            m = Number(d),
            o = Number(e);
        g > 0 && (m /= g, o /= g);
        if (!isFinite(m) || !isFinite(o)) return;
        l.n += m;
        if (arguments.length >= 5) {
            var p = l.d;
            p == null && (p = 0);
            l.d = p + o
        }
        n()
    }
    var m;

    function n() {
        if (m != null) return;
        m = c("setTimeout")(function () {
            o()
        }, c("gkx")("20935") ? 13e3 / 2 : 5e3)
    }

    function a(a, b) {
        if (!j) return;
        k[a] = d("Random").random() < b ? b : 0
    }

    function b(a, b, c, d) {
        d === void 0 && (d = 1);
        if (!j) return;
        l(a, b, c, d)
    }

    function e(a, b, c, d, e) {
        d === void 0 && (d = 1);
        e === void 0 && (e = 1);
        if (!j) return;
        l(a, b, c, d, e)
    }

    function o(a) {
        a === void 0 && (a = "normal");
        if (!j) return;
        c("clearTimeout")(m);
        m = null;
        if (i == null) return;
        var b = i;
        i = null;

        function d() {
            return {
                batch: b
            }
        }
        a === "critical" ? c("OdsWebBatchFalcoEvent").logCritical(d) : c("OdsWebBatchFalcoEvent").log(d)
    }
    j && d("Run").onUnload(function () {
        o("critical")
    });
    g.setEntitySample = a;
    g.bumpEntityKey = b;
    g.bumpFraction = e;
    g.flush = o
}), 98);
__d("JsCrossSiteCookieUsageFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("6476");
    b = d("FalcoLoggerInternal").create("js_cross_site_cookie_usage", a);
    e = b;
    g["default"] = e
}), 98);
__d("CookieCore", ["CookieCoreConfig", "CookieDomain", "CookiePrivacySandboxConfig", "CookieStore", "JsCrossSiteCookieUsageFalcoEvent", "err", "justknobx"], (function (a, b, c, d, e, f, g) {
    var h = /_js_(.*)/,
        i;

    function j() {
        i || (i = d("CookieStore").newCookieStore());
        return i
    }

    function k() {
        return "." + c("CookieDomain").domain
    }

    function l(a) {
        return window.self !== window.top ? !1 : !0
    }

    function m(a, b) {
        if (!r(a)) return;
        n(a, b, t(a), u(a), s(a), v(a));
        w(a, 1)
    }

    function a(a, b, c) {
        if (!r(a)) return;
        n(a, b, t(a), u(a), s(a), v(a), c)
    }

    function n(a, b, c, d, e, f, g) {
        var h = Date.now();
        if (c != null)
            if (c > h) c -= h;
            else if (c === 1) {
            o(a, d, g);
            return
        }
        j().setCookie(h, a, b, d, (h = g) != null ? h : k(), c, e, f)
    }

    function b(a, b) {
        if (!l(a)) return;
        m(a, b)
    }

    function e(a, b, c, d, e, f) {
        if (!l(a)) return;
        n(a, b, c, d, e, null, f)
    }

    function o(a, b, c) {
        b === void 0 && (b = "/");
        b = b || "/";
        j().clearCookie(a, b, (b = c) != null ? b : k());
        w(a, 2)
    }

    function f(a) {
        if (!r(a)) return null;
        w(a, 0);
        return j().getCookie(a)
    }

    function p(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0,
            sameSite: a.s || "None"
        }
    }

    function q(a) {
        if (c("CookieCoreConfig")[a] !== void 0) return p(c("CookieCoreConfig")[a]);
        a = a.match(h);
        return a && a.length > 1 ? q(a[1]) : null
    }

    function r(a) {
        return q(a) !== null
    }

    function s(a) {
        a = q(a);
        return a == null ? !0 : !a.insecure
    }

    function t(a) {
        a = q(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function u(a) {
        a = q(a);
        return a == null ? "/" : a.path
    }

    function v(a) {
        a = q(a);
        return a == null || a.sameSite == null ? null : a.sameSite
    }

    function w(a, b) {
        var e = d("CookiePrivacySandboxConfig").is_affected_by_samesite_lax;
        e && c("justknobx")._("2552") && c("JsCrossSiteCookieUsageFalcoEvent").log(function () {
            return {
                cookie_name: a,
                cookie_op: b,
                js_backtrace: c("err")("read cookie backtrace: ").stack
            }
        })
    }
    g.set = m;
    g.setWithDomain_FOR_MESSENGER_LS_ONLY = a;
    g.setWithoutChecks = n;
    g.setIfFirstPartyContext = b;
    g.setWithoutChecksIfFirstPartyContext = e;
    g.clear = o;
    g.get = f
}), 98);
__d("Cookie", ["CookieConsent", "CookieCore", "InitialCookieConsent", "ODS"], (function (a, b, c, d, e, f, g) {
    var h, i, j;

    function k(a) {
        if (!(j || (j = c("CookieConsent"))).hasConsent_DEPRECATED(1)) {
            (h || (h = d("ODS"))).bumpEntityKey(798, "defer_cookies", "set." + a);
            return !1
        }
        return !0
    }

    function l() {
        return !(i || (i = c("InitialCookieConsent"))).noCookies
    }

    function a(a, b) {
        if (!l() || !k(a)) return;
        d("CookieCore").set(a, b)
    }

    function b(a, b) {
        if (!l()) return;
        d("CookieCore").set(a, b)
    }

    function e(a, b, c, e, f, g) {
        if (!l() || !k(a)) return;
        d("CookieCore").setWithoutChecks(a, b, c, e, f, null, g)
    }
    a = {
        clear: (f = d("CookieCore")).clear,
        get: f.get,
        set: a,
        setIfFirstPartyContext: f.setIfFirstPartyContext,
        setWithoutCheckingUserConsent_DANGEROUS: b,
        setWithoutChecks: e,
        setWithoutChecksIfFirstPartyContext: f.setWithoutChecksIfFirstPartyContext
    };
    g["default"] = a
}), 98);
__d("Deferred", ["Promise"], (function (a, b, c, d, e, f) {
    "use strict";
    var g;
    (g || (g = b("Promise"))).resolve();
    a = function () {
        function a(a) {
            var c = this;
            a = a || g || (g = b("Promise"));
            this.$1 = !1;
            this.$2 = new a(function (a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function () {
            return this.$2
        };
        c.resolve = function (a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function (a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function () {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("FBJSON", [], (function (a, b, c, d, e, f) {
    a = JSON.parse;
    b = JSON.stringify;
    f.parse = a;
    f.stringify = b
}), 66);
__d("InlineFbtResult", ["cr:1183579"], (function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:1183579")
}), 98);
__d("InlineFbtResultImplComet", ["FbtHooks", "FbtReactUtil", "FbtResultBase", "react", "recoverableViolation"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");

    function k(a) {
        var b = a.content,
            d = a.hash,
            e = a.inlineMode;
        a = a.translation;
        d == null && c("recoverableViolation")('Fbt string hash should not be null for translated string "' + a + '" ' + ("[inlineMode=" + e + "]"), "internationalization");
        return j.jsx("span", {
            "data-intl-hash": d,
            "data-intl-translation": a,
            "data-intl-trid": "",
            children: b
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";
    a = function (a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g) {
            var i;
            i = a.call(this, b, (h || (h = c("FbtHooks"))).getErrorListener({
                hash: g,
                translation: f
            })) || this;
            i.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
            i.key = null;
            i.ref = null;
            i.type = k;
            i.props = {
                content: b,
                hash: g,
                inlineMode: e,
                translation: f
            };
            return i
        }
        return b
    }(c("FbtResultBase"));
    g["default"] = a
}), 98);
__d("TransAppInlineMode", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        STRING_MANAGER: "STRING_MANAGER",
        TRANSLATION: "TRANSLATION",
        APPROVE: "APPROVE",
        REPORT: "REPORT",
        NO_INLINE: "NO_INLINE"
    });
    f["default"] = a
}), 66);
/**
 * License: https://www.facebook.com/legal/license/t3hOLs8wlXy/
 */
__d("moment-2.29.4", [], (function (a, b, c, d, e, f) {
    "use strict";
    var g = {},
        h = {
            exports: g
        };

    function i() {
        (function (b, c) {
            typeof g === "object" && typeof h !== "undefined" ? h.exports = c() : b.moment = c()
        })(this, function () {
            var a;

            function b() {
                return a.apply(null, arguments)
            }

            function c(b) {
                a = b
            }

            function d(a) {
                return a instanceof Array || Object.prototype.toString.call(a) === "[object Array]"
            }

            function e(a) {
                return a != null && Object.prototype.toString.call(a) === "[object Object]"
            }

            function f(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }

            function g(a) {
                if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(a).length === 0;
                else {
                    var b;
                    for (b in a)
                        if (f(a, b)) return !1;
                    return !0
                }
            }

            function i(a) {
                return a === void 0
            }

            function j(a) {
                return typeof a === "number" || Object.prototype.toString.call(a) === "[object Number]"
            }

            function k(a) {
                return a instanceof Date || Object.prototype.toString.call(a) === "[object Date]"
            }

            function aa(a, b) {
                var c = [],
                    d, e = a.length;
                for (d = 0; d < e; ++d) c.push(b(a[d], d));
                return c
            }

            function l(a, b) {
                for (var c in b) f(b, c) && (a[c] = b[c]);
                f(b, "toString") && (a.toString = b.toString);
                f(b, "valueOf") && (a.valueOf = b.valueOf);
                return a
            }

            function m(c, a, b, d) {
                return cd(c, a, b, d, !0).utc()
            }

            function ba() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidEra: null,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    era: null,
                    meridiem: null,
                    rfc2822: !1,
                    weekdayMismatch: !1
                }
            }

            function n(a) {
                a._pf == null && (a._pf = ba());
                return a._pf
            }
            var ca;
            Array.prototype.some ? ca = Array.prototype.some : ca = function (a) {
                var b = Object(this),
                    c = b.length >>> 0,
                    d;
                for (d = 0; d < c; d++)
                    if (d in b && a.call(this, b[d], d, b)) return !0;
                return !1
            };

            function da(a) {
                if (a._isValid == null) {
                    var b = n(a),
                        c = ca.call(b.parsedDateParts, function (a) {
                            return a != null
                        });
                    c = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidEra && !b.invalidMonth && !b.invalidWeekday && !b.weekdayMismatch && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
                    a._strict && (c = c && b.charsLeftOver === 0 && b.unusedTokens.length === 0 && b.bigHour === void 0);
                    if (Object.isFrozen == null || !Object.isFrozen(a)) a._isValid = c;
                    else return c
                }
                return a._isValid
            }

            function ea(a) {
                var b = m(NaN);
                a != null ? l(n(b), a) : n(b).userInvalidated = !0;
                return b
            }
            var fa = b.momentProperties = [],
                ga = !1;

            function ha(b, a) {
                var c, d, e, f = fa.length;
                i(a._isAMomentObject) || (b._isAMomentObject = a._isAMomentObject);
                i(a._i) || (b._i = a._i);
                i(a._f) || (b._f = a._f);
                i(a._l) || (b._l = a._l);
                i(a._strict) || (b._strict = a._strict);
                i(a._tzm) || (b._tzm = a._tzm);
                i(a._isUTC) || (b._isUTC = a._isUTC);
                i(a._offset) || (b._offset = a._offset);
                i(a._pf) || (b._pf = n(a));
                i(a._locale) || (b._locale = a._locale);
                if (f > 0)
                    for (c = 0; c < f; c++) d = fa[c], e = a[d], i(e) || (b[d] = e);
                return b
            }

            function ia(a) {
                ha(this, a), this._d = new Date(a._d != null ? a._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ga === !1 && (ga = !0, b.updateOffset(this), ga = !1)
            }

            function o(a) {
                return a instanceof ia || a != null && a._isAMomentObject != null
            }

            function ja(a) {
                b.suppressDeprecationWarnings === !1 && typeof console !== "undefined" && emptyFunction
            }

            function p(a, c) {
                var d = !0;
                return l(function () {
                    b.deprecationHandler != null && b.deprecationHandler(null, a);
                    if (d) {
                        var e = [],
                            g, h, i, j = arguments.length;
                        for (h = 0; h < j; h++) {
                            g = "";
                            if (typeof arguments[h] === "object") {
                                g += "\n[" + h + "] ";
                                for (i in arguments[0]) f(arguments[0], i) && (g += i + ": " + arguments[0][i] + ", ");
                                g = g.slice(0, -2)
                            } else g = arguments[h];
                            e.push(g)
                        }
                        ja(a + "\nArguments: " + Array.prototype.slice.call(e).join("") + "\n" + new Error().stack);
                        d = !1
                    }
                    return c.apply(this, arguments)
                }, c)
            }
            var ka = {};

            function la(a, c) {
                b.deprecationHandler != null && b.deprecationHandler(a, c), ka[a] || (ja(c), ka[a] = !0)
            }
            b.suppressDeprecationWarnings = !1;
            b.deprecationHandler = null;

            function q(a) {
                return typeof Function !== "undefined" && a instanceof Function || Object.prototype.toString.call(a) === "[object Function]"
            }

            function ma(a) {
                var b, c;
                for (c in a) f(a, c) && (b = a[c], q(b) ? this[c] = b : this["_" + c] = b);
                this._config = a;
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
            }

            function na(a, b) {
                var c = l({}, a),
                    d;
                for (d in b) f(b, d) && (e(a[d]) && e(b[d]) ? (c[d] = {}, l(c[d], a[d]), l(c[d], b[d])) : b[d] != null ? c[d] = b[d] : delete c[d]);
                for (d in a) f(a, d) && !f(b, d) && e(a[d]) && (c[d] = l({}, c[d]));
                return c
            }

            function oa(a) {
                a != null && this.set(a)
            }
            var pa;
            Object.keys ? pa = Object.keys : pa = function (a) {
                var b, c = [];
                for (b in a) f(a, b) && c.push(b);
                return c
            };
            var qa = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            };

            function ra(a, b, c) {
                a = this._calendar[a] || this._calendar.sameElse;
                return q(a) ? a.call(b, c) : a
            }

            function r(a, b, c) {
                var d = "" + Math.abs(a);
                b = b - d.length;
                a = a >= 0;
                return (a ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, b)).toString().substr(1) + d
            }
            var sa = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                ta = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                ua = {},
                va = {};

            function s(b, c, a, d) {
                var e = d;
                typeof d === "string" && (e = function () {
                    return this[d]()
                });
                b && (va[b] = e);
                c && (va[c[0]] = function () {
                    return r(e.apply(this, arguments), c[1], c[2])
                });
                a && (va[a] = function () {
                    return this.localeData().ordinal(e.apply(this, arguments), b)
                })
            }

            function wa(a) {
                return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
            }

            function xa(a) {
                var b = a.match(sa),
                    c, d;
                for (c = 0, d = b.length; c < d; c++) va[b[c]] ? b[c] = va[b[c]] : b[c] = wa(b[c]);
                return function (e) {
                    var f = "",
                        c;
                    for (c = 0; c < d; c++) f += q(b[c]) ? b[c].call(e, a) : b[c];
                    return f
                }
            }

            function ya(b, a) {
                if (!b.isValid()) return b.localeData().invalidDate();
                a = za(a, b.localeData());
                ua[a] = ua[a] || xa(a);
                return ua[a](b)
            }

            function za(a, b) {
                var c = 5;

                function d(a) {
                    return b.longDateFormat(a) || a
                }
                ta.lastIndex = 0;
                while (c >= 0 && ta.test(a)) a = a.replace(ta, d), ta.lastIndex = 0, c -= 1;
                return a
            }
            var Aa = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            };

            function Ba(b) {
                var a = this._longDateFormat[b],
                    c = this._longDateFormat[b.toUpperCase()];
                if (a || !c) return a;
                this._longDateFormat[b] = c.match(sa).map(function (a) {
                    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a
                }).join("");
                return this._longDateFormat[b]
            }
            var Ca = "Invalid date";

            function Da() {
                return this._invalidDate
            }
            var Ea = "%d",
                Fa = /\d{1,2}/;

            function Ga(a) {
                return this._ordinal.replace("%d", a)
            }
            var t = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            };

            function Ha(a, b, c, d) {
                var e = this._relativeTime[c];
                return q(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
            }

            function Ia(a, b) {
                a = this._relativeTime[a > 0 ? "future" : "past"];
                return q(a) ? a(b) : a.replace(/%s/i, b)
            }
            var Ja = {};

            function u(a, b) {
                var c = a.toLowerCase();
                Ja[c] = Ja[c + "s"] = Ja[b] = a
            }

            function v(a) {
                return typeof a === "string" ? Ja[a] || Ja[a.toLowerCase()] : void 0
            }

            function Ka(a) {
                var b = {},
                    c, d;
                for (d in a) f(a, d) && (c = v(d), c && (b[c] = a[d]));
                return b
            }
            var La = {};

            function w(a, b) {
                La[a] = b
            }

            function Ma(a) {
                var b = [],
                    c;
                for (c in a) f(a, c) && b.push({
                    unit: c,
                    priority: La[c]
                });
                b.sort(function (a, b) {
                    return a.priority - b.priority
                });
                return b
            }

            function Na(a) {
                return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
            }

            function x(a) {
                if (a < 0) return Math.ceil(a) || 0;
                else return Math.floor(a)
            }

            function y(a) {
                a = +a;
                var b = 0;
                a !== 0 && isFinite(a) && (b = x(a));
                return b
            }

            function Oa(a, c) {
                return function (d) {
                    if (d != null) {
                        Qa(this, a, d);
                        b.updateOffset(this, c);
                        return this
                    } else return Pa(this, a)
                }
            }

            function Pa(a, b) {
                return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
            }

            function Qa(a, b, c) {
                a.isValid() && !isNaN(c) && (b === "FullYear" && Na(a.year()) && a.month() === 1 && a.date() === 29 ? (c = y(c), a._d["set" + (a._isUTC ? "UTC" : "") + b](c, a.month(), ob(c, a.month()))) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c))
            }

            function Ra(a) {
                a = v(a);
                return q(this[a]) ? this[a]() : this
            }

            function Sa(a, b) {
                if (typeof a === "object") {
                    a = Ka(a);
                    var c = Ma(a),
                        d, e = c.length;
                    for (d = 0; d < e; d++) this[c[d].unit](a[c[d].unit])
                } else {
                    a = v(a);
                    if (q(this[a])) return this[a](b)
                }
                return this
            }
            var Ta = /\d/,
                z = /\d\d/,
                Ua = /\d{3}/,
                Va = /\d{4}/,
                Wa = /[+-]?\d{6}/,
                A = /\d\d?/,
                Xa = /\d\d\d\d?/,
                Ya = /\d\d\d\d\d\d?/,
                Za = /\d{1,3}/,
                $a = /\d{1,4}/,
                ab = /[+-]?\d{1,6}/,
                bb = /\d+/,
                cb = /[+-]?\d+/,
                db = /Z|[+-]\d\d:?\d\d/gi,
                eb = /Z|[+-]\d\d(?::?\d\d)?/gi,
                fb = /[+-]?\d+(\.\d{1,3})?/,
                B = /[0-9]{0,256}[\'a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                gb;
            gb = {};

            function C(a, b, c) {
                gb[a] = q(b) ? b : function (d, a) {
                    return d && c ? c : b
                }
            }

            function hb(a, b) {
                return !f(gb, a) ? new RegExp(ib(a)) : gb[a](b._strict, b._locale)
            }

            function ib(a) {
                return D(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
                    return b || c || d || e
                }))
            }

            function D(a) {
                return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
            var jb = {};

            function E(a, b) {
                var c, d = b,
                    e;
                typeof a === "string" && (a = [a]);
                j(b) && (d = function (a, c) {
                    c[b] = y(a)
                });
                e = a.length;
                for (c = 0; c < e; c++) jb[a[c]] = d
            }

            function F(a, b) {
                E(a, function (c, d, e, a) {
                    e._w = e._w || {}, b(c, e._w, e, a)
                })
            }

            function kb(a, b, c) {
                b != null && f(jb, a) && jb[a](b, c._a, c, a)
            }
            var G = 0,
                H = 1,
                I = 2,
                J = 3,
                K = 4,
                L = 5,
                M = 6,
                lb = 7,
                mb = 8;

            function nb(a, b) {
                return (a % b + b) % b
            }
            var N;
            Array.prototype.indexOf ? N = Array.prototype.indexOf : N = function (a) {
                var b;
                for (b = 0; b < this.length; ++b)
                    if (this[b] === a) return b;
                return -1
            };

            function ob(a, b) {
                if (isNaN(a) || isNaN(b)) return NaN;
                var c = nb(b, 12);
                a += (b - c) / 12;
                return c === 1 ? Na(a) ? 29 : 28 : 31 - c % 7 % 2
            }
            s("M", ["MM", 2], "Mo", function () {
                return this.month() + 1
            });
            s("MMM", 0, 0, function (a) {
                return this.localeData().monthsShort(this, a)
            });
            s("MMMM", 0, 0, function (a) {
                return this.localeData().months(this, a)
            });
            u("month", "M");
            w("month", 8);
            C("M", A);
            C("MM", A, z);
            C("MMM", function (b, a) {
                return a.monthsShortRegex(b)
            });
            C("MMMM", function (b, a) {
                return a.monthsRegex(b)
            });
            E(["M", "MM"], function (a, b) {
                b[H] = y(a) - 1
            });
            E(["MMM", "MMMM"], function (a, b, c, d) {
                d = c._locale.monthsParse(a, d, c._strict);
                d != null ? b[H] = d : n(c).invalidMonth = a
            });
            var pb = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                qb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                rb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                sb = B,
                tb = B;

            function ub(b, a) {
                return !b ? d(this._months) ? this._months : this._months.standalone : d(this._months) ? this._months[b.month()] : this._months[(this._months.isFormat || rb).test(a) ? "format" : "standalone"][b.month()]
            }

            function vb(b, a) {
                return !b ? d(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone : d(this._monthsShort) ? this._monthsShort[b.month()] : this._monthsShort[rb.test(a) ? "format" : "standalone"][b.month()]
            }

            function wb(b, a, c) {
                var d, e;
                b = b.toLocaleLowerCase();
                if (!this._monthsParse) {
                    this._monthsParse = [];
                    this._longMonthsParse = [];
                    this._shortMonthsParse = [];
                    for (d = 0; d < 12; ++d) e = m([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(e, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(e, "").toLocaleLowerCase()
                }
                if (c)
                    if (a === "MMM") {
                        e = N.call(this._shortMonthsParse, b);
                        return e !== -1 ? e : null
                    } else {
                        e = N.call(this._longMonthsParse, b);
                        return e !== -1 ? e : null
                    }
                else if (a === "MMM") {
                    e = N.call(this._shortMonthsParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._longMonthsParse, b);
                    return e !== -1 ? e : null
                } else {
                    e = N.call(this._longMonthsParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._shortMonthsParse, b);
                    return e !== -1 ? e : null
                }
            }

            function xb(b, a, c) {
                var d, e;
                if (this._monthsParseExact) return wb.call(this, b, a, c);
                this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []);
                for (d = 0; d < 12; d++) {
                    e = m([2e3, d]);
                    c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i"));
                    !c && !this._monthsParse[d] && (e = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(e.replace(".", ""), "i"));
                    if (c && a === "MMMM" && this._longMonthsParse[d].test(b)) return d;
                    else if (c && a === "MMM" && this._shortMonthsParse[d].test(b)) return d;
                    else if (!c && this._monthsParse[d].test(b)) return d
                }
            }

            function yb(a, b) {
                var c;
                if (!a.isValid()) return a;
                if (typeof b === "string")
                    if (/^\d+$/.test(b)) b = y(b);
                    else {
                        b = a.localeData().monthsParse(b);
                        if (!j(b)) return a
                    } c = Math.min(a.date(), ob(a.year(), b));
                a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c);
                return a
            }

            function zb(a) {
                if (a != null) {
                    yb(this, a);
                    b.updateOffset(this, !0);
                    return this
                } else return Pa(this, "Month")
            }

            function Ab() {
                return ob(this.year(), this.month())
            }

            function Bb(a) {
                if (this._monthsParseExact) {
                    f(this, "_monthsRegex") || Db.call(this);
                    if (a) return this._monthsShortStrictRegex;
                    else return this._monthsShortRegex
                } else {
                    f(this, "_monthsShortRegex") || (this._monthsShortRegex = sb);
                    return this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
                }
            }

            function Cb(a) {
                if (this._monthsParseExact) {
                    f(this, "_monthsRegex") || Db.call(this);
                    if (a) return this._monthsStrictRegex;
                    else return this._monthsRegex
                } else {
                    f(this, "_monthsRegex") || (this._monthsRegex = tb);
                    return this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
                }
            }

            function Db() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b = [],
                    c = [],
                    d = [],
                    e, f;
                for (e = 0; e < 12; e++) f = m([2e3, e]), b.push(this.monthsShort(f, "")), c.push(this.months(f, "")), d.push(this.months(f, "")), d.push(this.monthsShort(f, ""));
                b.sort(a);
                c.sort(a);
                d.sort(a);
                for (e = 0; e < 12; e++) b[e] = D(b[e]), c[e] = D(c[e]);
                for (e = 0; e < 24; e++) d[e] = D(d[e]);
                this._monthsRegex = new RegExp("^(" + d.join("|") + ")", "i");
                this._monthsShortRegex = this._monthsRegex;
                this._monthsStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
                this._monthsShortStrictRegex = new RegExp("^(" + b.join("|") + ")", "i")
            }
            s("Y", 0, 0, function () {
                var a = this.year();
                return a <= 9999 ? r(a, 4) : "+" + a
            });
            s(0, ["YY", 2], 0, function () {
                return this.year() % 100
            });
            s(0, ["YYYY", 4], 0, "year");
            s(0, ["YYYYY", 5], 0, "year");
            s(0, ["YYYYYY", 6, !0], 0, "year");
            u("year", "y");
            w("year", 1);
            C("Y", cb);
            C("YY", A, z);
            C("YYYY", $a, Va);
            C("YYYYY", ab, Wa);
            C("YYYYYY", ab, Wa);
            E(["YYYYY", "YYYYYY"], G);
            E("YYYY", function (a, c) {
                c[G] = a.length === 2 ? b.parseTwoDigitYear(a) : y(a)
            });
            E("YY", function (a, c) {
                c[G] = b.parseTwoDigitYear(a)
            });
            E("Y", function (a, b) {
                b[G] = parseInt(a, 10)
            });

            function Eb(a) {
                return Na(a) ? 366 : 365
            }
            b.parseTwoDigitYear = function (a) {
                return y(a) + (y(a) > 68 ? 1900 : 2e3)
            };
            var Fb = Oa("FullYear", !0);

            function Gb() {
                return Na(this.year())
            }

            function Hb(a, b, c, d, e, f, g) {
                var h;
                a < 100 && a >= 0 ? (h = new Date(a + 400, b, c, d, e, f, g), isFinite(h.getFullYear()) && h.setFullYear(a)) : h = new Date(a, b, c, d, e, f, g);
                return h
            }

            function Ib(a) {
                var b, c;
                a < 100 && a >= 0 ? (c = Array.prototype.slice.call(arguments), c[0] = a + 400, b = new Date(Date.UTC.apply(null, c)), isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a)) : b = new Date(Date.UTC.apply(null, arguments));
                return b
            }

            function Jb(a, b, c) {
                c = 7 + b - c;
                a = (7 + Ib(a, 0, c).getUTCDay() - b) % 7;
                return -a + c - 1
            }

            function Kb(a, b, c, d, e) {
                c = (7 + c - d) % 7;
                d = Jb(a, d, e);
                e = 1 + 7 * (b - 1) + c + d;
                e <= 0 ? (b = a - 1, c = Eb(b) + e) : e > Eb(a) ? (b = a + 1, c = e - Eb(a)) : (b = a, c = e);
                return {
                    year: b,
                    dayOfYear: c
                }
            }

            function Lb(a, b, c) {
                var d = Jb(a.year(), b, c);
                d = Math.floor((a.dayOfYear() - d - 1) / 7) + 1;
                var e, f;
                d < 1 ? (f = a.year() - 1, e = d + O(f, b, c)) : d > O(a.year(), b, c) ? (e = d - O(a.year(), b, c), f = a.year() + 1) : (f = a.year(), e = d);
                return {
                    week: e,
                    year: f
                }
            }

            function O(a, b, c) {
                var d = Jb(a, b, c);
                b = Jb(a + 1, b, c);
                return (Eb(a) - d + b) / 7
            }
            s("w", ["ww", 2], "wo", "week");
            s("W", ["WW", 2], "Wo", "isoWeek");
            u("week", "w");
            u("isoWeek", "W");
            w("week", 5);
            w("isoWeek", 5);
            C("w", A);
            C("ww", A, z);
            C("W", A);
            C("WW", A, z);
            F(["w", "ww", "W", "WW"], function (a, b, c, d) {
                b[d.substr(0, 1)] = y(a)
            });

            function Mb(a) {
                return Lb(a, this._week.dow, this._week.doy).week
            }
            var P = {
                dow: 0,
                doy: 6
            };

            function Nb() {
                return this._week.dow
            }

            function Ob() {
                return this._week.doy
            }

            function Pb(a) {
                var b = this.localeData().week(this);
                return a == null ? b : this.add((a - b) * 7, "d")
            }

            function Qb(a) {
                var b = Lb(this, 1, 4).week;
                return a == null ? b : this.add((a - b) * 7, "d")
            }
            s("d", 0, "do", "day");
            s("dd", 0, 0, function (a) {
                return this.localeData().weekdaysMin(this, a)
            });
            s("ddd", 0, 0, function (a) {
                return this.localeData().weekdaysShort(this, a)
            });
            s("dddd", 0, 0, function (a) {
                return this.localeData().weekdays(this, a)
            });
            s("e", 0, 0, "weekday");
            s("E", 0, 0, "isoWeekday");
            u("day", "d");
            u("weekday", "e");
            u("isoWeekday", "E");
            w("day", 11);
            w("weekday", 11);
            w("isoWeekday", 11);
            C("d", A);
            C("e", A);
            C("E", A);
            C("dd", function (b, a) {
                return a.weekdaysMinRegex(b)
            });
            C("ddd", function (b, a) {
                return a.weekdaysShortRegex(b)
            });
            C("dddd", function (b, a) {
                return a.weekdaysRegex(b)
            });
            F(["dd", "ddd", "dddd"], function (a, b, c, d) {
                d = c._locale.weekdaysParse(a, d, c._strict);
                d != null ? b.d = d : n(c).invalidWeekday = a
            });
            F(["d", "e", "E"], function (a, b, c, d) {
                b[d] = y(a)
            });

            function Rb(b, a) {
                if (typeof b !== "string") return b;
                if (!isNaN(b)) return parseInt(b, 10);
                b = a.weekdaysParse(b);
                return typeof b === "number" ? b : null
            }

            function Sb(b, a) {
                return typeof b === "string" ? a.weekdaysParse(b) % 7 || 7 : isNaN(b) ? null : b
            }

            function Tb(a, b) {
                return a.slice(b, 7).concat(a.slice(0, b))
            }
            var Q = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ub = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Vb = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Wb = B,
                Xb = B,
                Yb = B;

            function Zb(b, a) {
                a = d(this._weekdays) ? this._weekdays : this._weekdays[b && b !== !0 && this._weekdays.isFormat.test(a) ? "format" : "standalone"];
                return b === !0 ? Tb(a, this._week.dow) : b ? a[b.day()] : a
            }

            function $b(a) {
                return a === !0 ? Tb(this._weekdaysShort, this._week.dow) : a ? this._weekdaysShort[a.day()] : this._weekdaysShort
            }

            function ac(a) {
                return a === !0 ? Tb(this._weekdaysMin, this._week.dow) : a ? this._weekdaysMin[a.day()] : this._weekdaysMin
            }

            function bc(b, a, c) {
                var d, e;
                b = b.toLocaleLowerCase();
                if (!this._weekdaysParse) {
                    this._weekdaysParse = [];
                    this._shortWeekdaysParse = [];
                    this._minWeekdaysParse = [];
                    for (d = 0; d < 7; ++d) e = m([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(e, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(e, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(e, "").toLocaleLowerCase()
                }
                if (c)
                    if (a === "dddd") {
                        e = N.call(this._weekdaysParse, b);
                        return e !== -1 ? e : null
                    } else if (a === "ddd") {
                    e = N.call(this._shortWeekdaysParse, b);
                    return e !== -1 ? e : null
                } else {
                    e = N.call(this._minWeekdaysParse, b);
                    return e !== -1 ? e : null
                } else if (a === "dddd") {
                    e = N.call(this._weekdaysParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._shortWeekdaysParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._minWeekdaysParse, b);
                    return e !== -1 ? e : null
                } else if (a === "ddd") {
                    e = N.call(this._shortWeekdaysParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._weekdaysParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._minWeekdaysParse, b);
                    return e !== -1 ? e : null
                } else {
                    e = N.call(this._minWeekdaysParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._weekdaysParse, b);
                    if (e !== -1) return e;
                    e = N.call(this._shortWeekdaysParse, b);
                    return e !== -1 ? e : null
                }
            }

            function cc(b, a, c) {
                var d, e;
                if (this._weekdaysParseExact) return bc.call(this, b, a, c);
                this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []);
                for (d = 0; d < 7; d++) {
                    e = m([2e3, 1]).day(d);
                    c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", "\\.?") + "$", "i"));
                    this._weekdaysParse[d] || (e = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(e.replace(".", ""), "i"));
                    if (c && a === "dddd" && this._fullWeekdaysParse[d].test(b)) return d;
                    else if (c && a === "ddd" && this._shortWeekdaysParse[d].test(b)) return d;
                    else if (c && a === "dd" && this._minWeekdaysParse[d].test(b)) return d;
                    else if (!c && this._weekdaysParse[d].test(b)) return d
                }
            }

            function dc(a) {
                if (!this.isValid()) return a != null ? this : NaN;
                var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                if (a != null) {
                    a = Rb(a, this.localeData());
                    return this.add(a - b, "d")
                } else return b
            }

            function ec(a) {
                if (!this.isValid()) return a != null ? this : NaN;
                var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return a == null ? b : this.add(a - b, "d")
            }

            function fc(a) {
                if (!this.isValid()) return a != null ? this : NaN;
                if (a != null) {
                    a = Sb(a, this.localeData());
                    return this.day(this.day() % 7 ? a : a - 7)
                } else return this.day() || 7
            }

            function gc(a) {
                if (this._weekdaysParseExact) {
                    f(this, "_weekdaysRegex") || jc.call(this);
                    if (a) return this._weekdaysStrictRegex;
                    else return this._weekdaysRegex
                } else {
                    f(this, "_weekdaysRegex") || (this._weekdaysRegex = Wb);
                    return this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex
                }
            }

            function hc(a) {
                if (this._weekdaysParseExact) {
                    f(this, "_weekdaysRegex") || jc.call(this);
                    if (a) return this._weekdaysShortStrictRegex;
                    else return this._weekdaysShortRegex
                } else {
                    f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xb);
                    return this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
                }
            }

            function ic(a) {
                if (this._weekdaysParseExact) {
                    f(this, "_weekdaysRegex") || jc.call(this);
                    if (a) return this._weekdaysMinStrictRegex;
                    else return this._weekdaysMinRegex
                } else {
                    f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Yb);
                    return this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
                }
            }

            function jc() {
                function a(a, b) {
                    return b.length - a.length
                }
                var b = [],
                    c = [],
                    d = [],
                    e = [],
                    f, g, h, i;
                for (f = 0; f < 7; f++) g = m([2e3, 1]).day(f), h = D(this.weekdaysMin(g, "")), i = D(this.weekdaysShort(g, "")), g = D(this.weekdays(g, "")), b.push(h), c.push(i), d.push(g), e.push(h), e.push(i), e.push(g);
                b.sort(a);
                c.sort(a);
                d.sort(a);
                e.sort(a);
                this._weekdaysRegex = new RegExp("^(" + e.join("|") + ")", "i");
                this._weekdaysShortRegex = this._weekdaysRegex;
                this._weekdaysMinRegex = this._weekdaysRegex;
                this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
                this._weekdaysShortStrictRegex = new RegExp("^(" + c.join("|") + ")", "i");
                this._weekdaysMinStrictRegex = new RegExp("^(" + b.join("|") + ")", "i")
            }

            function kc() {
                return this.hours() % 12 || 12
            }

            function lc() {
                return this.hours() || 24
            }
            s("H", ["HH", 2], 0, "hour");
            s("h", ["hh", 2], 0, kc);
            s("k", ["kk", 2], 0, lc);
            s("hmm", 0, 0, function () {
                return "" + kc.apply(this) + r(this.minutes(), 2)
            });
            s("hmmss", 0, 0, function () {
                return "" + kc.apply(this) + r(this.minutes(), 2) + r(this.seconds(), 2)
            });
            s("Hmm", 0, 0, function () {
                return "" + this.hours() + r(this.minutes(), 2)
            });
            s("Hmmss", 0, 0, function () {
                return "" + this.hours() + r(this.minutes(), 2) + r(this.seconds(), 2)
            });

            function mc(a, b) {
                s(a, 0, 0, function () {
                    return this.localeData().meridiem(this.hours(), this.minutes(), b)
                })
            }
            mc("a", !0);
            mc("A", !1);
            u("hour", "h");
            w("hour", 13);

            function nc(b, a) {
                return a._meridiemParse
            }
            C("a", nc);
            C("A", nc);
            C("H", A);
            C("h", A);
            C("k", A);
            C("HH", A, z);
            C("hh", A, z);
            C("kk", A, z);
            C("hmm", Xa);
            C("hmmss", Ya);
            C("Hmm", Xa);
            C("Hmmss", Ya);
            E(["H", "HH"], J);
            E(["k", "kk"], function (a, b, c) {
                c = y(a);
                b[J] = c === 24 ? 0 : c
            });
            E(["a", "A"], function (a, b, c) {
                c._isPm = c._locale.isPM(a), c._meridiem = a
            });
            E(["h", "hh"], function (a, b, c) {
                b[J] = y(a), n(c).bigHour = !0
            });
            E("hmm", function (a, b, c) {
                var d = a.length - 2;
                b[J] = y(a.substr(0, d));
                b[K] = y(a.substr(d));
                n(c).bigHour = !0
            });
            E("hmmss", function (a, b, c) {
                var d = a.length - 4,
                    e = a.length - 2;
                b[J] = y(a.substr(0, d));
                b[K] = y(a.substr(d, 2));
                b[L] = y(a.substr(e));
                n(c).bigHour = !0
            });
            E("Hmm", function (a, b, c) {
                c = a.length - 2;
                b[J] = y(a.substr(0, c));
                b[K] = y(a.substr(c))
            });
            E("Hmmss", function (a, b, c) {
                c = a.length - 4;
                var d = a.length - 2;
                b[J] = y(a.substr(0, c));
                b[K] = y(a.substr(c, 2));
                b[L] = y(a.substr(d))
            });

            function oc(a) {
                return (a + "").toLowerCase().charAt(0) === "p"
            }
            B = /[ap]\.?m?\.?/i;
            lc = Oa("Hours", !0);

            function pc(a, b, c) {
                if (a > 11) return c ? "pm" : "PM";
                else return c ? "am" : "AM"
            }
            var qc = {
                    calendar: qa,
                    longDateFormat: Aa,
                    invalidDate: Ca,
                    ordinal: Ea,
                    dayOfMonthOrdinalParse: Fa,
                    relativeTime: t,
                    months: pb,
                    monthsShort: qb,
                    week: P,
                    weekdays: Q,
                    weekdaysMin: Vb,
                    weekdaysShort: Ub,
                    meridiemParse: B
                },
                R = {},
                rc = {},
                sc;

            function tc(a, b) {
                var c, d = Math.min(a.length, b.length);
                for (c = 0; c < d; c += 1)
                    if (a[c] !== b[c]) return c;
                return d
            }

            function uc(a) {
                return a ? a.toLowerCase().replace("_", "-") : a
            }

            function vc(b) {
                var c = 0,
                    d, e, a, f;
                while (c < b.length) {
                    f = uc(b[c]).split("-");
                    d = f.length;
                    e = uc(b[c + 1]);
                    e = e ? e.split("-") : null;
                    while (d > 0) {
                        a = xc(f.slice(0, d).join("-"));
                        if (a) return a;
                        if (e && e.length >= d && tc(f, e) >= d - 1) break;
                        d--
                    }
                    c++
                }
                return sc
            }

            function wc(a) {
                return a.match("^[^/\\\\]*$") != null
            }

            function xc(a) {
                R[a] === void 0 && typeof h !== "undefined" && h && h.exports && wc(a) && (R[a] = null);
                return R[a]
            }

            function S(a, b) {
                var c;
                a && (i(b) ? c = T(a) : c = yc(a, b), c ? sc = c : typeof console !== "undefined" && emptyFunction);
                return sc._abbr
            }

            function yc(b, c) {
                if (c !== null) {
                    var a, d = qc;
                    c.abbr = b;
                    if (R[b] != null) la("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), d = R[b]._config;
                    else if (c.parentLocale != null)
                        if (R[c.parentLocale] != null) d = R[c.parentLocale]._config;
                        else {
                            a = xc(c.parentLocale);
                            if (a != null) d = a._config;
                            else {
                                rc[c.parentLocale] || (rc[c.parentLocale] = []);
                                rc[c.parentLocale].push({
                                    name: b,
                                    config: c
                                });
                                return null
                            }
                        } R[b] = new oa(na(d, c));
                    rc[b] && rc[b].forEach(function (a) {
                        yc(a.name, a.config)
                    });
                    S(b);
                    return R[b]
                } else {
                    delete R[b];
                    return null
                }
            }

            function zc(a, b) {
                if (b != null) {
                    var c, d = qc;
                    R[a] != null && R[a].parentLocale != null ? R[a].set(na(R[a]._config, b)) : (c = xc(a), c != null && (d = c._config), b = na(d, b), c == null && (b.abbr = a), d = new oa(b), d.parentLocale = R[a], R[a] = d);
                    S(a)
                } else R[a] != null && (R[a].parentLocale != null ? (R[a] = R[a].parentLocale, a === S() && S(a)) : R[a] != null && delete R[a]);
                return R[a]
            }

            function T(b) {
                var a;
                b && b._locale && b._locale._abbr && (b = b._locale._abbr);
                if (!b) return sc;
                if (!d(b)) {
                    a = xc(b);
                    if (a) return a;
                    b = [b]
                }
                return vc(b)
            }

            function Ac() {
                return pa(R)
            }

            function Bc(a) {
                var b = a._a;
                b && n(a).overflow === -2 && (b = b[H] < 0 || b[H] > 11 ? H : b[I] < 1 || b[I] > ob(b[G], b[H]) ? I : b[J] < 0 || b[J] > 24 || b[J] === 24 && (b[K] !== 0 || b[L] !== 0 || b[M] !== 0) ? J : b[K] < 0 || b[K] > 59 ? K : b[L] < 0 || b[L] > 59 ? L : b[M] < 0 || b[M] > 999 ? M : -1, n(a)._overflowDayOfYear && (b < G || b > I) && (b = I), n(a)._overflowWeeks && b === -1 && (b = lb), n(a)._overflowWeekday && b === -1 && (b = mb), n(a).overflow = b);
                return a
            }
            var Cc = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Dc = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Ec = /Z|[+-]\d\d(?::?\d\d)?/,
                Fc = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/],
                    ["YYYYMM", /\d{6}/, !1],
                    ["YYYY", /\d{4}/, !1]
                ],
                Gc = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Hc = /^\/?Date\((-?\d+)/i,
                Ic = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
                Jc = {
                    UT: 0,
                    GMT: 0,
                    EDT: -4 * 60,
                    EST: -5 * 60,
                    CDT: -5 * 60,
                    CST: -6 * 60,
                    MDT: -6 * 60,
                    MST: -7 * 60,
                    PDT: -7 * 60,
                    PST: -8 * 60
                };

            function Kc(a) {
                var b, c = a._i;
                c = Cc.exec(c) || Dc.exec(c);
                var d, e, f, g, h = Fc.length,
                    i = Gc.length;
                if (c) {
                    n(a).iso = !0;
                    for (b = 0, h = h; b < h; b++)
                        if (Fc[b][1].exec(c[1])) {
                            e = Fc[b][0];
                            d = Fc[b][2] !== !1;
                            break
                        } if (e == null) {
                        a._isValid = !1;
                        return
                    }
                    if (c[3]) {
                        for (b = 0, h = i; b < h; b++)
                            if (Gc[b][1].exec(c[3])) {
                                f = (c[2] || " ") + Gc[b][0];
                                break
                            } if (f == null) {
                            a._isValid = !1;
                            return
                        }
                    }
                    if (!d && f != null) {
                        a._isValid = !1;
                        return
                    }
                    if (c[4])
                        if (Ec.exec(c[4])) g = "Z";
                        else {
                            a._isValid = !1;
                            return
                        } a._f = e + (f || "") + (g || "");
                    Wc(a)
                } else a._isValid = !1
            }

            function Lc(a, b, c, d, e, f) {
                a = [Mc(a), qb.indexOf(b), parseInt(c, 10), parseInt(d, 10), parseInt(e, 10)];
                f && a.push(parseInt(f, 10));
                return a
            }

            function Mc(a) {
                a = parseInt(a, 10);
                if (a <= 49) return 2e3 + a;
                else if (a <= 999) return 1900 + a;
                return a
            }

            function Nc(a) {
                return a.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            }

            function Oc(a, b, c) {
                if (a) {
                    a = Ub.indexOf(a);
                    b = new Date(b[0], b[1], b[2]).getDay();
                    if (a !== b) {
                        n(c).weekdayMismatch = !0;
                        c._isValid = !1;
                        return !1
                    }
                }
                return !0
            }

            function Pc(a, b, c) {
                if (a) return Jc[a];
                else if (b) return 0;
                else {
                    a = parseInt(c, 10);
                    b = a % 100;
                    c = (a - b) / 100;
                    return c * 60 + b
                }
            }

            function Qc(a) {
                var b = Ic.exec(Nc(a._i)),
                    c;
                if (b) {
                    c = Lc(b[4], b[3], b[2], b[5], b[6], b[7]);
                    if (!Oc(b[1], c, a)) return;
                    a._a = c;
                    a._tzm = Pc(b[8], b[9], b[10]);
                    a._d = Ib.apply(null, a._a);
                    a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm);
                    n(a).rfc2822 = !0
                } else a._isValid = !1
            }

            function Rc(a) {
                var c = Hc.exec(a._i);
                if (c !== null) {
                    a._d = new Date(+c[1]);
                    return
                }
                Kc(a);
                if (a._isValid === !1) delete a._isValid;
                else return;
                Qc(a);
                if (a._isValid === !1) delete a._isValid;
                else return;
                a._strict ? a._isValid = !1 : b.createFromInputFallback(a)
            }
            b.createFromInputFallback = p("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
                a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
            });

            function Sc(a, b, c) {
                if (a != null) return a;
                return b != null ? b : c
            }

            function Tc(a) {
                var c = new Date(b.now());
                return a._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
            }

            function Uc(a) {
                var b = [],
                    c, d;
                if (a._d) return;
                c = Tc(a);
                a._w && a._a[I] == null && a._a[H] == null && Vc(a);
                a._dayOfYear != null && (d = Sc(a._a[G], c[G]), (a._dayOfYear > Eb(d) || a._dayOfYear === 0) && (n(a)._overflowDayOfYear = !0), d = Ib(d, 0, a._dayOfYear), a._a[H] = d.getUTCMonth(), a._a[I] = d.getUTCDate());
                for (d = 0; d < 3 && a._a[d] == null; ++d) a._a[d] = b[d] = c[d];
                for (; d < 7; d++) a._a[d] = b[d] = a._a[d] == null ? d === 2 ? 1 : 0 : a._a[d];
                a._a[J] === 24 && a._a[K] === 0 && a._a[L] === 0 && a._a[M] === 0 && (a._nextDay = !0, a._a[J] = 0);
                a._d = (a._useUTC ? Ib : Hb).apply(null, b);
                c = a._useUTC ? a._d.getUTCDay() : a._d.getDay();
                a._tzm != null && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm);
                a._nextDay && (a._a[J] = 24);
                a._w && typeof a._w.d !== "undefined" && a._w.d !== c && (n(a).weekdayMismatch = !0)
            }

            function Vc(a) {
                var b, c, d, e, f, g, h, i;
                b = a._w;
                b.GG != null || b.W != null || b.E != null ? (f = 1, g = 4, c = Sc(b.GG, a._a[G], Lb(U(), 1, 4).year), d = Sc(b.W, 1), e = Sc(b.E, 1), (e < 1 || e > 7) && (h = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, i = Lb(U(), f, g), c = Sc(b.gg, a._a[G], i.year), d = Sc(b.w, i.week), b.d != null ? (e = b.d, (e < 0 || e > 6) && (h = !0)) : b.e != null ? (e = b.e + f, (b.e < 0 || b.e > 6) && (h = !0)) : e = f);
                d < 1 || d > O(c, f, g) ? n(a)._overflowWeeks = !0 : h != null ? n(a)._overflowWeekday = !0 : (i = Kb(c, d, e, f, g), a._a[G] = i.year, a._dayOfYear = i.dayOfYear)
            }
            b.ISO_8601 = function () {};
            b.RFC_2822 = function () {};

            function Wc(c) {
                if (c._f === b.ISO_8601) {
                    Kc(c);
                    return
                }
                if (c._f === b.RFC_2822) {
                    Qc(c);
                    return
                }
                c._a = [];
                n(c).empty = !0;
                var d = "" + c._i,
                    e, f, a, g, h, i = d.length,
                    j = 0,
                    k;
                a = za(c._f, c._locale).match(sa) || [];
                k = a.length;
                for (e = 0; e < k; e++) g = a[e], f = (d.match(hb(g, c)) || [])[0], f && (h = d.substr(0, d.indexOf(f)), h.length > 0 && n(c).unusedInput.push(h), d = d.slice(d.indexOf(f) + f.length), j += f.length), va[g] ? (f ? n(c).empty = !1 : n(c).unusedTokens.push(g), kb(g, f, c)) : c._strict && !f && n(c).unusedTokens.push(g);
                n(c).charsLeftOver = i - j;
                d.length > 0 && n(c).unusedInput.push(d);
                c._a[J] <= 12 && n(c).bigHour === !0 && c._a[J] > 0 && (n(c).bigHour = void 0);
                n(c).parsedDateParts = c._a.slice(0);
                n(c).meridiem = c._meridiem;
                c._a[J] = Xc(c._locale, c._a[J], c._meridiem);
                h = n(c).era;
                h !== null && (c._a[G] = c._locale.erasConvertYear(h, c._a[G]));
                Uc(c);
                Bc(c)
            }

            function Xc(b, c, a) {
                if (a == null) return c;
                if (b.meridiemHour != null) return b.meridiemHour(c, a);
                else if (b.isPM != null) {
                    b = b.isPM(a);
                    b && c < 12 && (c += 12);
                    !b && c === 12 && (c = 0);
                    return c
                } else return c
            }

            function Yc(a) {
                var b, c, d, e, f, g, h = !1,
                    i = a._f.length;
                if (i === 0) {
                    n(a).invalidFormat = !0;
                    a._d = new Date(NaN);
                    return
                }
                for (e = 0; e < i; e++) f = 0, g = !1, b = ha({}, a), a._useUTC != null && (b._useUTC = a._useUTC), b._f = a._f[e], Wc(b), da(b) && (g = !0), f += n(b).charsLeftOver, f += n(b).unusedTokens.length * 10, n(b).score = f, !h ? (d == null || f < d || g) && (d = f, c = b, g && (h = !0)) : f < d && (d = f, c = b);
                l(a, c || b)
            }

            function Zc(a) {
                if (a._d) return;
                var b = Ka(a._i),
                    c = b.day === void 0 ? b.date : b.day;
                a._a = aa([b.year, b.month, c, b.hour, b.minute, b.second, b.millisecond], function (a) {
                    return a && parseInt(a, 10)
                });
                Uc(a)
            }

            function $c(a) {
                a = new ia(Bc(ad(a)));
                a._nextDay && (a.add(1, "d"), a._nextDay = void 0);
                return a
            }

            function ad(b) {
                var c = b._i,
                    a = b._f;
                b._locale = b._locale || T(b._l);
                if (c === null || a === void 0 && c === "") return ea({
                    nullInput: !0
                });
                typeof c === "string" && (b._i = c = b._locale.preparse(c));
                if (o(c)) return new ia(Bc(c));
                else k(c) ? b._d = c : d(a) ? Yc(b) : a ? Wc(b) : bd(b);
                da(b) || (b._d = null);
                return b
            }

            function bd(a) {
                var c = a._i;
                i(c) ? a._d = new Date(b.now()) : k(c) ? a._d = new Date(c.valueOf()) : typeof c === "string" ? Rc(a) : d(c) ? (a._a = aa(c.slice(0), function (a) {
                    return parseInt(a, 10)
                }), Uc(a)) : e(c) ? Zc(a) : j(c) ? a._d = new Date(c) : b.createFromInputFallback(a)
            }

            function cd(c, a, b, f, h) {
                var i = {};
                (a === !0 || a === !1) && (f = a, a = void 0);
                (b === !0 || b === !1) && (f = b, b = void 0);
                (e(c) && g(c) || d(c) && c.length === 0) && (c = void 0);
                i._isAMomentObject = !0;
                i._useUTC = i._isUTC = h;
                i._l = b;
                i._i = c;
                i._f = a;
                i._strict = f;
                return $c(i)
            }

            function U(c, a, b, d) {
                return cd(c, a, b, d, !1)
            }
            mc = p("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var a = U.apply(null, arguments);
                if (this.isValid() && a.isValid()) return a < this ? this : a;
                else return ea()
            });
            nc = p("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var a = U.apply(null, arguments);
                if (this.isValid() && a.isValid()) return a > this ? this : a;
                else return ea()
            });

            function dd(a, b) {
                var c, e;
                b.length === 1 && d(b[0]) && (b = b[0]);
                if (!b.length) return U();
                c = b[0];
                for (e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](c)) && (c = b[e]);
                return c
            }

            function ed() {
                var a = [].slice.call(arguments, 0);
                return dd("isBefore", a)
            }

            function fd() {
                var a = [].slice.call(arguments, 0);
                return dd("isAfter", a)
            }
            Xa = function () {
                return Date.now ? Date.now() : +new Date()
            };
            var gd = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function hd(a) {
                var b, c = !1,
                    d = gd.length;
                for (b in a)
                    if (f(a, b) && !(N.call(gd, b) !== -1 && (a[b] == null || !isNaN(a[b])))) return !1;
                for (b = 0; b < d; ++b)
                    if (a[gd[b]]) {
                        if (c) return !1;
                        parseFloat(a[gd[b]]) !== y(a[gd[b]]) && (c = !0)
                    } return !0
            }

            function id() {
                return this._isValid
            }

            function jd() {
                return V(NaN)
            }

            function kd(b) {
                b = Ka(b);
                var c = b.year || 0,
                    d = b.quarter || 0,
                    e = b.month || 0,
                    a = b.week || b.isoWeek || 0,
                    f = b.day || 0,
                    g = b.hour || 0,
                    h = b.minute || 0,
                    i = b.second || 0,
                    j = b.millisecond || 0;
                this._isValid = hd(b);
                this._milliseconds = +j + i * 1e3 + h * 6e4 + g * 1e3 * 60 * 60;
                this._days = +f + a * 7;
                this._months = +e + d * 3 + c * 12;
                this._data = {};
                this._locale = T();
                this._bubble()
            }

            function ld(a) {
                return a instanceof kd
            }

            function md(a) {
                if (a < 0) return Math.round(-1 * a) * -1;
                else return Math.round(a)
            }

            function nd(a, b, c) {
                var d = Math.min(a.length, b.length),
                    e = Math.abs(a.length - b.length),
                    f = 0,
                    g;
                for (g = 0; g < d; g++)(c && a[g] !== b[g] || !c && y(a[g]) !== y(b[g])) && f++;
                return f + e
            }

            function od(a, b) {
                s(a, 0, 0, function () {
                    var a = this.utcOffset(),
                        c = "+";
                    a < 0 && (a = -a, c = "-");
                    return c + r(~~(a / 60), 2) + b + r(~~a % 60, 2)
                })
            }
            od("Z", ":");
            od("ZZ", "");
            C("Z", eb);
            C("ZZ", eb);
            E(["Z", "ZZ"], function (a, b, c) {
                c._useUTC = !0, c._tzm = qd(eb, a)
            });
            var pd = /([\+\-]|\d\d)/gi;

            function qd(a, b) {
                b = (b || "").match(a);
                if (b === null) return null;
                a = b[b.length - 1] || [];
                b = (a + "").match(pd) || ["-", 0, 0];
                a = +(b[1] * 60) + y(b[2]);
                return a === 0 ? 0 : b[0] === "+" ? a : -a
            }

            function rd(c, d) {
                var a;
                if (d._isUTC) {
                    d = d.clone();
                    a = (o(c) || k(c) ? c.valueOf() : U(c).valueOf()) - d.valueOf();
                    d._d.setTime(d._d.valueOf() + a);
                    b.updateOffset(d, !1);
                    return d
                } else return U(c).local()
            }

            function sd(a) {
                return -Math.round(a._d.getTimezoneOffset())
            }
            b.updateOffset = function () {};

            function td(c, d, e) {
                var a = this._offset || 0,
                    f;
                if (!this.isValid()) return c != null ? this : NaN;
                if (c != null) {
                    if (typeof c === "string") {
                        c = qd(eb, c);
                        if (c === null) return this
                    } else Math.abs(c) < 16 && !e && (c = c * 60);
                    !this._isUTC && d && (f = sd(this));
                    this._offset = c;
                    this._isUTC = !0;
                    f != null && this.add(f, "m");
                    a !== c && (!d || this._changeInProgress ? Jd(this, V(c - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, b.updateOffset(this, !0), this._changeInProgress = null));
                    return this
                } else return this._isUTC ? a : sd(this)
            }

            function ud(a, b) {
                if (a != null) {
                    typeof a !== "string" && (a = -a);
                    this.utcOffset(a, b);
                    return this
                } else return -this.utcOffset()
            }

            function vd(a) {
                return this.utcOffset(0, a)
            }

            function wd(a) {
                this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(sd(this), "m"));
                return this
            }

            function xd() {
                if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
                else if (typeof this._i === "string") {
                    var a = qd(db, this._i);
                    a != null ? this.utcOffset(a) : this.utcOffset(0, !0)
                }
                return this
            }

            function yd(a) {
                if (!this.isValid()) return !1;
                a = a ? U(a).utcOffset() : 0;
                return (this.utcOffset() - a) % 60 === 0
            }

            function zd() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function Ad() {
                if (!i(this._isDSTShifted)) return this._isDSTShifted;
                var a = {},
                    b;
                ha(a, this);
                a = ad(a);
                a._a ? (b = a._isUTC ? m(a._a) : U(a._a), this._isDSTShifted = this.isValid() && nd(a._a, b.toArray()) > 0) : this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Bd() {
                return this.isValid() ? !this._isUTC : !1
            }

            function Cd() {
                return this.isValid() ? this._isUTC : !1
            }

            function Dd() {
                return this.isValid() ? this._isUTC && this._offset === 0 : !1
            }
            var Ed = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
                Fd = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function V(a, b) {
                var c = a,
                    d = null;
                ld(a) ? c = {
                    ms: a._milliseconds,
                    d: a._days,
                    M: a._months
                } : j(a) || !isNaN(+a) ? (c = {}, b ? c[b] = +a : c.milliseconds = +a) : (d = Ed.exec(a)) ? (b = d[1] === "-" ? -1 : 1, c = {
                    y: 0,
                    d: y(d[I]) * b,
                    h: y(d[J]) * b,
                    m: y(d[K]) * b,
                    s: y(d[L]) * b,
                    ms: y(md(d[M] * 1e3)) * b
                }) : (d = Fd.exec(a)) ? (b = d[1] === "-" ? -1 : 1, c = {
                    y: W(d[2], b),
                    M: W(d[3], b),
                    w: W(d[4], b),
                    d: W(d[5], b),
                    h: W(d[6], b),
                    m: W(d[7], b),
                    s: W(d[8], b)
                }) : c == null ? c = {} : typeof c === "object" && ("from" in c || "to" in c) && (d = Hd(U(c.from), U(c.to)), c = {}, c.ms = d.milliseconds, c.M = d.months);
                b = new kd(c);
                ld(a) && f(a, "_locale") && (b._locale = a._locale);
                ld(a) && f(a, "_isValid") && (b._isValid = a._isValid);
                return b
            }
            V.fn = kd.prototype;
            V.invalid = jd;

            function W(b, a) {
                b = b && parseFloat(b.replace(",", "."));
                return (isNaN(b) ? 0 : b) * a
            }

            function Gd(a, b) {
                var c = {};
                c.months = b.month() - a.month() + (b.year() - a.year()) * 12;
                a.clone().add(c.months, "M").isAfter(b) && --c.months;
                c.milliseconds = +b - +a.clone().add(c.months, "M");
                return c
            }

            function Hd(a, b) {
                var c;
                if (!(a.isValid() && b.isValid())) return {
                    milliseconds: 0,
                    months: 0
                };
                b = rd(b, a);
                a.isBefore(b) ? c = Gd(a, b) : (c = Gd(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months);
                return c
            }

            function Id(a, b) {
                return function (c, d) {
                    var e;
                    d !== null && !isNaN(+d) && (la(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), e = c, c = d, d = e);
                    e = V(c, d);
                    Jd(this, e, a);
                    return this
                }
            }

            function Jd(a, c, d, e) {
                var f = c._milliseconds,
                    g = md(c._days);
                c = md(c._months);
                if (!a.isValid()) return;
                e = e == null ? !0 : e;
                c && yb(a, Pa(a, "Month") + c * d);
                g && Qa(a, "Date", Pa(a, "Date") + g * d);
                f && a._d.setTime(a._d.valueOf() + f * d);
                e && b.updateOffset(a, g || c)
            }
            Ya = Id(1, "add");
            qa = Id(-1, "subtract");

            function Kd(a) {
                return typeof a === "string" || a instanceof String
            }

            function Ld(a) {
                return o(a) || k(a) || Kd(a) || j(a) || Nd(a) || Md(a) || a === null || a === void 0
            }

            function Md(a) {
                var b = e(a) && !g(a),
                    c = !1,
                    d = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                    h, i, j = d.length;
                for (h = 0; h < j; h += 1) i = d[h], c = c || f(a, i);
                return b && c
            }

            function Nd(a) {
                var b = d(a),
                    c = !1;
                b && (c = a.filter(function (b) {
                    return !j(b) && Kd(a)
                }).length === 0);
                return b && c
            }

            function Od(a) {
                var b = e(a) && !g(a),
                    c = !1,
                    d = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
                    h, i;
                for (h = 0; h < d.length; h += 1) i = d[h], c = c || f(a, i);
                return b && c
            }

            function Pd(a, b) {
                a = a.diff(b, "days", !0);
                return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse"
            }

            function Qd(c, d) {
                arguments.length === 1 && (!arguments[0] ? (c = void 0, d = void 0) : Ld(arguments[0]) ? (c = arguments[0], d = void 0) : Od(arguments[0]) && (d = arguments[0], c = void 0));
                var e = c || U(),
                    f = rd(e, this).startOf("day"),
                    a = b.calendarFormat(this, f) || "sameElse",
                    g = d && (q(d[a]) ? d[a].call(this, e) : d[a]);
                return this.format(g || this.localeData().calendar(a, this, U(e)))
            }

            function Rd() {
                return new ia(this)
            }

            function Sd(a, b) {
                a = o(a) ? a : U(a);
                if (!(this.isValid() && a.isValid())) return !1;
                b = v(b) || "millisecond";
                if (b === "millisecond") return this.valueOf() > a.valueOf();
                else return a.valueOf() < this.clone().startOf(b).valueOf()
            }

            function Td(a, b) {
                a = o(a) ? a : U(a);
                if (!(this.isValid() && a.isValid())) return !1;
                b = v(b) || "millisecond";
                if (b === "millisecond") return this.valueOf() < a.valueOf();
                else return this.clone().endOf(b).valueOf() < a.valueOf()
            }

            function Ud(a, b, c, d) {
                a = o(a) ? a : U(a);
                b = o(b) ? b : U(b);
                if (!(this.isValid() && a.isValid() && b.isValid())) return !1;
                d = d || "()";
                return (d[0] === "(" ? this.isAfter(a, c) : !this.isBefore(a, c)) && (d[1] === ")" ? this.isBefore(b, c) : !this.isAfter(b, c))
            }

            function Vd(a, b) {
                a = o(a) ? a : U(a);
                if (!(this.isValid() && a.isValid())) return !1;
                b = v(b) || "millisecond";
                if (b === "millisecond") return this.valueOf() === a.valueOf();
                else {
                    a = a.valueOf();
                    return this.clone().startOf(b).valueOf() <= a && a <= this.clone().endOf(b).valueOf()
                }
            }

            function Wd(a, b) {
                return this.isSame(a, b) || this.isAfter(a, b)
            }

            function Xd(a, b) {
                return this.isSame(a, b) || this.isBefore(a, b)
            }

            function Yd(a, b, c) {
                var d, e;
                if (!this.isValid()) return NaN;
                a = rd(a, this);
                if (!a.isValid()) return NaN;
                d = (a.utcOffset() - this.utcOffset()) * 6e4;
                b = v(b);
                switch (b) {
                    case "year":
                        e = Zd(this, a) / 12;
                        break;
                    case "month":
                        e = Zd(this, a);
                        break;
                    case "quarter":
                        e = Zd(this, a) / 3;
                        break;
                    case "second":
                        e = (this - a) / 1e3;
                        break;
                    case "minute":
                        e = (this - a) / 6e4;
                        break;
                    case "hour":
                        e = (this - a) / 36e5;
                        break;
                    case "day":
                        e = (this - a - d) / 864e5;
                        break;
                    case "week":
                        e = (this - a - d) / 6048e5;
                        break;
                    default:
                        e = this - a
                }
                return c ? e : x(e)
            }

            function Zd(a, b) {
                if (a.date() < b.date()) return -Zd(b, a);
                var c = (b.year() - a.year()) * 12 + (b.month() - a.month()),
                    d = a.clone().add(c, "months"),
                    e, f;
                b - d < 0 ? (e = a.clone().add(c - 1, "months"), f = (b - d) / (d - e)) : (e = a.clone().add(c + 1, "months"), f = (b - d) / (e - d));
                return -(c + f) || 0
            }
            b.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
            b.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";

            function $d() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function ae(a) {
                if (!this.isValid()) return null;
                a = a !== !0;
                var b = a ? this.clone().utc() : this;
                if (b.year() < 0 || b.year() > 9999) return ya(b, a ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
                if (q(Date.prototype.toISOString))
                    if (a) return this.toDate().toISOString();
                    else return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ya(b, "Z"));
                return ya(b, a ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
            }

            function be() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var a = "moment",
                    b = "",
                    c, d;
                this.isLocal() || (a = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", b = "Z");
                a = "[" + a + '("]';
                c = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
                d = "-MM-DD[T]HH:mm:ss.SSS";
                b = b + '[")]';
                return this.format(a + c + d + b)
            }

            function ce(a) {
                a || (a = this.isUtc() ? b.defaultFormatUtc : b.defaultFormat);
                a = ya(this, a);
                return this.localeData().postformat(a)
            }

            function de(a, b) {
                if (this.isValid() && (o(a) && a.isValid() || U(a).isValid())) return V({
                    to: this,
                    from: a
                }).locale(this.locale()).humanize(!b);
                else return this.localeData().invalidDate()
            }

            function ee(a) {
                return this.from(U(), a)
            }

            function fe(a, b) {
                if (this.isValid() && (o(a) && a.isValid() || U(a).isValid())) return V({
                    from: this,
                    to: a
                }).locale(this.locale()).humanize(!b);
                else return this.localeData().invalidDate()
            }

            function ge(a) {
                return this.to(U(), a)
            }

            function he(a) {
                if (a === void 0) return this._locale._abbr;
                else {
                    a = T(a);
                    a != null && (this._locale = a);
                    return this
                }
            }
            Aa = p("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
                if (a === void 0) return this.localeData();
                else return this.locale(a)
            });

            function ie() {
                return this._locale
            }
            var je = 1e3,
                ke = 60 * je,
                le = 60 * ke,
                me = (365 * 400 + 97) * 24 * le;

            function ne(a, b) {
                return (a % b + b) % b
            }

            function oe(a, b, c) {
                if (a < 100 && a >= 0) return new Date(a + 400, b, c) - me;
                else return new Date(a, b, c).valueOf()
            }

            function pe(a, b, c) {
                if (a < 100 && a >= 0) return Date.UTC(a + 400, b, c) - me;
                else return Date.UTC(a, b, c)
            }

            function qe(a) {
                var c, d;
                a = v(a);
                if (a === void 0 || a === "millisecond" || !this.isValid()) return this;
                d = this._isUTC ? pe : oe;
                switch (a) {
                    case "year":
                        c = d(this.year(), 0, 1);
                        break;
                    case "quarter":
                        c = d(this.year(), this.month() - this.month() % 3, 1);
                        break;
                    case "month":
                        c = d(this.year(), this.month(), 1);
                        break;
                    case "week":
                        c = d(this.year(), this.month(), this.date() - this.weekday());
                        break;
                    case "isoWeek":
                        c = d(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                        break;
                    case "day":
                    case "date":
                        c = d(this.year(), this.month(), this.date());
                        break;
                    case "hour":
                        c = this._d.valueOf();
                        c -= ne(c + (this._isUTC ? 0 : this.utcOffset() * ke), le);
                        break;
                    case "minute":
                        c = this._d.valueOf();
                        c -= ne(c, ke);
                        break;
                    case "second":
                        c = this._d.valueOf();
                        c -= ne(c, je);
                        break
                }
                this._d.setTime(c);
                b.updateOffset(this, !0);
                return this
            }

            function re(a) {
                var c, d;
                a = v(a);
                if (a === void 0 || a === "millisecond" || !this.isValid()) return this;
                d = this._isUTC ? pe : oe;
                switch (a) {
                    case "year":
                        c = d(this.year() + 1, 0, 1) - 1;
                        break;
                    case "quarter":
                        c = d(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                        break;
                    case "month":
                        c = d(this.year(), this.month() + 1, 1) - 1;
                        break;
                    case "week":
                        c = d(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                        break;
                    case "isoWeek":
                        c = d(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                        break;
                    case "day":
                    case "date":
                        c = d(this.year(), this.month(), this.date() + 1) - 1;
                        break;
                    case "hour":
                        c = this._d.valueOf();
                        c += le - ne(c + (this._isUTC ? 0 : this.utcOffset() * ke), le) - 1;
                        break;
                    case "minute":
                        c = this._d.valueOf();
                        c += ke - ne(c, ke) - 1;
                        break;
                    case "second":
                        c = this._d.valueOf();
                        c += je - ne(c, je) - 1;
                        break
                }
                this._d.setTime(c);
                b.updateOffset(this, !0);
                return this
            }

            function se() {
                return this._d.valueOf() - (this._offset || 0) * 6e4
            }

            function te() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function ue() {
                return new Date(this.valueOf())
            }

            function ve() {
                var a = this;
                return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
            }

            function we() {
                var a = this;
                return {
                    years: a.year(),
                    months: a.month(),
                    date: a.date(),
                    hours: a.hours(),
                    minutes: a.minutes(),
                    seconds: a.seconds(),
                    milliseconds: a.milliseconds()
                }
            }

            function xe() {
                return this.isValid() ? this.toISOString() : null
            }

            function ye() {
                return da(this)
            }

            function ze() {
                return l({}, n(this))
            }

            function Ae() {
                return n(this).overflow
            }

            function Be() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }
            s("N", 0, 0, "eraAbbr");
            s("NN", 0, 0, "eraAbbr");
            s("NNN", 0, 0, "eraAbbr");
            s("NNNN", 0, 0, "eraName");
            s("NNNNN", 0, 0, "eraNarrow");
            s("y", ["y", 1], "yo", "eraYear");
            s("y", ["yy", 2], 0, "eraYear");
            s("y", ["yyy", 3], 0, "eraYear");
            s("y", ["yyyy", 4], 0, "eraYear");
            C("N", Me);
            C("NN", Me);
            C("NNN", Me);
            C("NNNN", Ne);
            C("NNNNN", Oe);
            E(["N", "NN", "NNN", "NNNN", "NNNNN"], function (a, b, c, d) {
                b = c._locale.erasParse(a, d, c._strict);
                b ? n(c).era = b : n(c).invalidEra = a
            });
            C("y", bb);
            C("yy", bb);
            C("yyy", bb);
            C("yyyy", bb);
            C("yo", Pe);
            E(["y", "yy", "yyy", "yyyy"], G);
            E(["yo"], function (a, b, c, d) {
                var e;
                c._locale._eraYearOrdinalRegex && (e = a.match(c._locale._eraYearOrdinalRegex));
                c._locale.eraYearOrdinalParse ? b[G] = c._locale.eraYearOrdinalParse(a, e) : b[G] = parseInt(a, 10)
            });

            function Ce(c, a) {
                var d, e;
                c = this._eras || T("en")._eras;
                for (a = 0, d = c.length; a < d; ++a) {
                    switch (typeof c[a].since) {
                        case "string":
                            e = b(c[a].since).startOf("day");
                            c[a].since = e.valueOf();
                            break
                    }
                    switch (typeof c[a].until) {
                        case "undefined":
                            c[a].until = +Infinity;
                            break;
                        case "string":
                            e = b(c[a].until).startOf("day").valueOf();
                            c[a].until = e.valueOf();
                            break
                    }
                }
                return c
            }

            function De(b, a, c) {
                var d, e, f = this.eras(),
                    g, h, i;
                b = b.toUpperCase();
                for (d = 0, e = f.length; d < e; ++d) {
                    g = f[d].name.toUpperCase();
                    h = f[d].abbr.toUpperCase();
                    i = f[d].narrow.toUpperCase();
                    if (c) switch (a) {
                        case "N":
                        case "NN":
                        case "NNN":
                            if (h === b) return f[d];
                            break;
                        case "NNNN":
                            if (g === b) return f[d];
                            break;
                        case "NNNNN":
                            if (i === b) return f[d];
                            break
                    } else if ([g, h, i].indexOf(b) >= 0) return f[d]
                }
            }

            function Ee(a, c) {
                var d = a.since <= a.until ? 1 : -1;
                if (c === void 0) return b(a.since).year();
                else return b(a.since).year() + (c - a.offset) * d
            }

            function Fe() {
                var a, b, c, d = this.localeData().eras();
                for (a = 0, b = d.length; a < b; ++a) {
                    c = this.clone().startOf("day").valueOf();
                    if (d[a].since <= c && c <= d[a].until) return d[a].name;
                    if (d[a].until <= c && c <= d[a].since) return d[a].name
                }
                return ""
            }

            function Ge() {
                var a, b, c, d = this.localeData().eras();
                for (a = 0, b = d.length; a < b; ++a) {
                    c = this.clone().startOf("day").valueOf();
                    if (d[a].since <= c && c <= d[a].until) return d[a].narrow;
                    if (d[a].until <= c && c <= d[a].since) return d[a].narrow
                }
                return ""
            }

            function He() {
                var a, b, c, d = this.localeData().eras();
                for (a = 0, b = d.length; a < b; ++a) {
                    c = this.clone().startOf("day").valueOf();
                    if (d[a].since <= c && c <= d[a].until) return d[a].abbr;
                    if (d[a].until <= c && c <= d[a].since) return d[a].abbr
                }
                return ""
            }

            function Ie() {
                var a, c, d, e, f = this.localeData().eras();
                for (a = 0, c = f.length; a < c; ++a) {
                    d = f[a].since <= f[a].until ? 1 : -1;
                    e = this.clone().startOf("day").valueOf();
                    if (f[a].since <= e && e <= f[a].until || f[a].until <= e && e <= f[a].since) return (this.year() - b(f[a].since).year()) * d + f[a].offset
                }
                return this.year()
            }

            function Je(a) {
                f(this, "_erasNameRegex") || Qe.call(this);
                return a ? this._erasNameRegex : this._erasRegex
            }

            function Ke(a) {
                f(this, "_erasAbbrRegex") || Qe.call(this);
                return a ? this._erasAbbrRegex : this._erasRegex
            }

            function Le(a) {
                f(this, "_erasNarrowRegex") || Qe.call(this);
                return a ? this._erasNarrowRegex : this._erasRegex
            }

            function Me(b, a) {
                return a.erasAbbrRegex(b)
            }

            function Ne(b, a) {
                return a.erasNameRegex(b)
            }

            function Oe(b, a) {
                return a.erasNarrowRegex(b)
            }

            function Pe(b, a) {
                return a._eraYearOrdinalRegex || bb
            }

            function Qe() {
                var a = [],
                    b = [],
                    c = [],
                    d = [],
                    e, f, g = this.eras();
                for (e = 0, f = g.length; e < f; ++e) b.push(D(g[e].name)), a.push(D(g[e].abbr)), c.push(D(g[e].narrow)), d.push(D(g[e].name)), d.push(D(g[e].abbr)), d.push(D(g[e].narrow));
                this._erasRegex = new RegExp("^(" + d.join("|") + ")", "i");
                this._erasNameRegex = new RegExp("^(" + b.join("|") + ")", "i");
                this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i");
                this._erasNarrowRegex = new RegExp("^(" + c.join("|") + ")", "i")
            }
            s(0, ["gg", 2], 0, function () {
                return this.weekYear() % 100
            });
            s(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            });

            function Re(a, b) {
                s(0, [a, a.length], 0, b)
            }
            Re("gggg", "weekYear");
            Re("ggggg", "weekYear");
            Re("GGGG", "isoWeekYear");
            Re("GGGGG", "isoWeekYear");
            u("weekYear", "gg");
            u("isoWeekYear", "GG");
            w("weekYear", 1);
            w("isoWeekYear", 1);
            C("G", cb);
            C("g", cb);
            C("GG", A, z);
            C("gg", A, z);
            C("GGGG", $a, Va);
            C("gggg", $a, Va);
            C("GGGGG", ab, Wa);
            C("ggggg", ab, Wa);
            F(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
                b[d.substr(0, 2)] = y(a)
            });
            F(["gg", "GG"], function (a, c, d, e) {
                c[e] = b.parseTwoDigitYear(a)
            });

            function Se(a) {
                return Ye.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function Te(a) {
                return Ye.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function Ue() {
                return O(this.year(), 1, 4)
            }

            function Ve() {
                return O(this.isoWeekYear(), 1, 4)
            }

            function We() {
                var a = this.localeData()._week;
                return O(this.year(), a.dow, a.doy)
            }

            function Xe() {
                var a = this.localeData()._week;
                return O(this.weekYear(), a.dow, a.doy)
            }

            function Ye(a, b, c, d, e) {
                var f;
                if (a == null) return Lb(this, d, e).year;
                else {
                    f = O(a, d, e);
                    b > f && (b = f);
                    return Ze.call(this, a, b, c, d, e)
                }
            }

            function Ze(a, b, c, d, e) {
                a = Kb(a, b, c, d, e);
                b = Ib(a.year, 0, a.dayOfYear);
                this.year(b.getUTCFullYear());
                this.month(b.getUTCMonth());
                this.date(b.getUTCDate());
                return this
            }
            s("Q", 0, "Qo", "quarter");
            u("quarter", "Q");
            w("quarter", 7);
            C("Q", Ta);
            E("Q", function (a, b) {
                b[H] = (y(a) - 1) * 3
            });

            function $e(a) {
                return a == null ? Math.ceil((this.month() + 1) / 3) : this.month((a - 1) * 3 + this.month() % 3)
            }
            s("D", ["DD", 2], "Do", "date");
            u("date", "D");
            w("date", 9);
            C("D", A);
            C("DD", A, z);
            C("Do", function (b, a) {
                return b ? a._dayOfMonthOrdinalParse || a._ordinalParse : a._dayOfMonthOrdinalParseLenient
            });
            E(["D", "DD"], I);
            E("Do", function (a, b) {
                b[I] = y(a.match(A)[0])
            });
            Ca = Oa("Date", !0);
            s("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
            u("dayOfYear", "DDD");
            w("dayOfYear", 4);
            C("DDD", Za);
            C("DDDD", Ua);
            E(["DDD", "DDDD"], function (a, b, c) {
                c._dayOfYear = y(a)
            });

            function af(a) {
                var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return a == null ? b : this.add(a - b, "d")
            }
            s("m", ["mm", 2], 0, "minute");
            u("minute", "m");
            w("minute", 14);
            C("m", A);
            C("mm", A, z);
            E(["m", "mm"], K);
            Ea = Oa("Minutes", !1);
            s("s", ["ss", 2], 0, "second");
            u("second", "s");
            w("second", 15);
            C("s", A);
            C("ss", A, z);
            E(["s", "ss"], L);
            Fa = Oa("Seconds", !1);
            s("S", 0, 0, function () {
                return ~~(this.millisecond() / 100)
            });
            s(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            });
            s(0, ["SSS", 3], 0, "millisecond");
            s(0, ["SSSS", 4], 0, function () {
                return this.millisecond() * 10
            });
            s(0, ["SSSSS", 5], 0, function () {
                return this.millisecond() * 100
            });
            s(0, ["SSSSSS", 6], 0, function () {
                return this.millisecond() * 1e3
            });
            s(0, ["SSSSSSS", 7], 0, function () {
                return this.millisecond() * 1e4
            });
            s(0, ["SSSSSSSS", 8], 0, function () {
                return this.millisecond() * 1e5
            });
            s(0, ["SSSSSSSSS", 9], 0, function () {
                return this.millisecond() * 1e6
            });
            u("millisecond", "ms");
            w("millisecond", 16);
            C("S", Za, Ta);
            C("SS", Za, z);
            C("SSS", Za, Ua);
            for (t = "SSSS"; t.length <= 9; t += "S") C(t, bb);

            function bf(a, b) {
                b[M] = y(("0." + a) * 1e3)
            }
            for (t = "S"; t.length <= 9; t += "S") E(t, bf);
            pb = Oa("Milliseconds", !1);
            s("z", 0, 0, "zoneAbbr");
            s("zz", 0, 0, "zoneName");

            function cf() {
                return this._isUTC ? "UTC" : ""
            }

            function df() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }
            P = ia.prototype;
            P.add = Ya;
            P.calendar = Qd;
            P.clone = Rd;
            P.diff = Yd;
            P.endOf = re;
            P.format = ce;
            P.from = de;
            P.fromNow = ee;
            P.to = fe;
            P.toNow = ge;
            P.get = Ra;
            P.invalidAt = Ae;
            P.isAfter = Sd;
            P.isBefore = Td;
            P.isBetween = Ud;
            P.isSame = Vd;
            P.isSameOrAfter = Wd;
            P.isSameOrBefore = Xd;
            P.isValid = ye;
            P.lang = Aa;
            P.locale = he;
            P.localeData = ie;
            P.max = nc;
            P.min = mc;
            P.parsingFlags = ze;
            P.set = Sa;
            P.startOf = qe;
            P.subtract = qa;
            P.toArray = ve;
            P.toObject = we;
            P.toDate = ue;
            P.toISOString = ae;
            P.inspect = be;
            typeof Symbol !== "undefined" && Symbol["for"] != null && (P[Symbol["for"]("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">"
            });
            P.toJSON = xe;
            P.toString = $d;
            P.unix = te;
            P.valueOf = se;
            P.creationData = Be;
            P.eraName = Fe;
            P.eraNarrow = Ge;
            P.eraAbbr = He;
            P.eraYear = Ie;
            P.year = Fb;
            P.isLeapYear = Gb;
            P.weekYear = Se;
            P.isoWeekYear = Te;
            P.quarter = P.quarters = $e;
            P.month = zb;
            P.daysInMonth = Ab;
            P.week = P.weeks = Pb;
            P.isoWeek = P.isoWeeks = Qb;
            P.weeksInYear = We;
            P.weeksInWeekYear = Xe;
            P.isoWeeksInYear = Ue;
            P.isoWeeksInISOWeekYear = Ve;
            P.date = Ca;
            P.day = P.days = dc;
            P.weekday = ec;
            P.isoWeekday = fc;
            P.dayOfYear = af;
            P.hour = P.hours = lc;
            P.minute = P.minutes = Ea;
            P.second = P.seconds = Fa;
            P.millisecond = P.milliseconds = pb;
            P.utcOffset = td;
            P.utc = vd;
            P.local = wd;
            P.parseZone = xd;
            P.hasAlignedHourOffset = yd;
            P.isDST = zd;
            P.isLocal = Bd;
            P.isUtcOffset = Cd;
            P.isUtc = Dd;
            P.isUTC = Dd;
            P.zoneAbbr = cf;
            P.zoneName = df;
            P.dates = p("dates accessor is deprecated. Use date instead.", Ca);
            P.months = p("months accessor is deprecated. Use month instead", zb);
            P.years = p("years accessor is deprecated. Use year instead", Fb);
            P.zone = p("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", ud);
            P.isDSTShifted = p("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ad);

            function ef(a) {
                return U(a * 1e3)
            }

            function ff() {
                return U.apply(null, arguments).parseZone()
            }

            function gf(a) {
                return a
            }
            Q = oa.prototype;
            Q.calendar = ra;
            Q.longDateFormat = Ba;
            Q.invalidDate = Da;
            Q.ordinal = Ga;
            Q.preparse = gf;
            Q.postformat = gf;
            Q.relativeTime = Ha;
            Q.pastFuture = Ia;
            Q.set = ma;
            Q.eras = Ce;
            Q.erasParse = De;
            Q.erasConvertYear = Ee;
            Q.erasAbbrRegex = Ke;
            Q.erasNameRegex = Je;
            Q.erasNarrowRegex = Le;
            Q.months = ub;
            Q.monthsShort = vb;
            Q.monthsParse = xb;
            Q.monthsRegex = Cb;
            Q.monthsShortRegex = Bb;
            Q.week = Mb;
            Q.firstDayOfYear = Ob;
            Q.firstDayOfWeek = Nb;
            Q.weekdays = Zb;
            Q.weekdaysMin = ac;
            Q.weekdaysShort = $b;
            Q.weekdaysParse = cc;
            Q.weekdaysRegex = gc;
            Q.weekdaysShortRegex = hc;
            Q.weekdaysMinRegex = ic;
            Q.isPM = oc;
            Q.meridiem = pc;

            function hf(a, c, d, e) {
                var b = T();
                e = m().set(e, c);
                return b[d](e, a)
            }

            function jf(a, b, c) {
                j(a) && (b = a, a = void 0);
                a = a || "";
                if (b != null) return hf(a, b, c, "month");
                var d;
                b = [];
                for (d = 0; d < 12; d++) b[d] = hf(a, d, c, "month");
                return b
            }

            function kf(c, a, d, e) {
                typeof c === "boolean" ? (j(a) && (d = a, a = void 0), a = a || "") : (a = c, d = a, c = !1, j(a) && (d = a, a = void 0), a = a || "");
                var b = T();
                c = c ? b._week.dow : 0;
                b = [];
                if (d != null) return hf(a, (d + c) % 7, e, "day");
                for (d = 0; d < 7; d++) b[d] = hf(a, (d + c) % 7, e, "day");
                return b
            }

            function lf(a, b) {
                return jf(a, b, "months")
            }

            function mf(a, b) {
                return jf(a, b, "monthsShort")
            }

            function nf(b, a, c) {
                return kf(b, a, c, "weekdays")
            }

            function of (b, a, c) {
                return kf(b, a, c, "weekdaysShort")
            }

            function pf(b, a, c) {
                return kf(b, a, c, "weekdaysMin")
            }
            S("en", {
                eras: [{
                    since: "0001-01-01",
                    until: +Infinity,
                    offset: 1,
                    name: "Anno Domini",
                    narrow: "AD",
                    abbr: "AD"
                }, {
                    since: "0000-12-31",
                    until: -Infinity,
                    offset: 1,
                    name: "Before Christ",
                    narrow: "BC",
                    abbr: "BC"
                }],
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (a) {
                    var b = a % 10;
                    b = y(a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
                    return a + b
                }
            });
            b.lang = p("moment.lang is deprecated. Use moment.locale instead.", S);
            b.langData = p("moment.langData is deprecated. Use moment.localeData instead.", T);
            var X = Math.abs;

            function qf() {
                var a = this._data;
                this._milliseconds = X(this._milliseconds);
                this._days = X(this._days);
                this._months = X(this._months);
                a.milliseconds = X(a.milliseconds);
                a.seconds = X(a.seconds);
                a.minutes = X(a.minutes);
                a.hours = X(a.hours);
                a.months = X(a.months);
                a.years = X(a.years);
                return this
            }

            function rf(a, b, c, d) {
                b = V(b, c);
                a._milliseconds += d * b._milliseconds;
                a._days += d * b._days;
                a._months += d * b._months;
                return a._bubble()
            }

            function sf(a, b) {
                return rf(this, a, b, 1)
            }

            function tf(a, b) {
                return rf(this, a, b, -1)
            }

            function uf(a) {
                if (a < 0) return Math.floor(a);
                else return Math.ceil(a)
            }

            function vf() {
                var a = this._milliseconds,
                    b = this._days,
                    c = this._months,
                    d = this._data;
                a >= 0 && b >= 0 && c >= 0 || a <= 0 && b <= 0 && c <= 0 || (a += uf(xf(c) + b) * 864e5, b = 0, c = 0);
                d.milliseconds = a % 1e3;
                a = x(a / 1e3);
                d.seconds = a % 60;
                a = x(a / 60);
                d.minutes = a % 60;
                a = x(a / 60);
                d.hours = a % 24;
                b += x(a / 24);
                a = x(wf(b));
                c += a;
                b -= uf(xf(a));
                a = x(c / 12);
                c %= 12;
                d.days = b;
                d.months = c;
                d.years = a;
                return this
            }

            function wf(a) {
                return a * 4800 / 146097
            }

            function xf(a) {
                return a * 146097 / 4800
            }

            function yf(a) {
                if (!this.isValid()) return NaN;
                var b, c, d = this._milliseconds;
                a = v(a);
                if (a === "month" || a === "quarter" || a === "year") {
                    b = this._days + d / 864e5;
                    c = this._months + wf(b);
                    switch (a) {
                        case "month":
                            return c;
                        case "quarter":
                            return c / 3;
                        case "year":
                            return c / 12
                    }
                } else {
                    b = this._days + Math.round(xf(this._months));
                    switch (a) {
                        case "week":
                            return b / 7 + d / 6048e5;
                        case "day":
                            return b + d / 864e5;
                        case "hour":
                            return b * 24 + d / 36e5;
                        case "minute":
                            return b * 1440 + d / 6e4;
                        case "second":
                            return b * 86400 + d / 1e3;
                        case "millisecond":
                            return Math.floor(b * 864e5) + d;
                        default:
                            throw new Error("Unknown unit " + a)
                    }
                }
            }

            function zf() {
                return !this.isValid() ? NaN : this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + y(this._months / 12) * 31536e6
            }

            function Y(a) {
                return function () {
                    return this.as(a)
                }
            }
            Vb = Y("ms");
            B = Y("s");
            od = Y("m");
            jd = Y("h");
            Id = Y("d");
            Me = Y("w");
            Ne = Y("M");
            Oe = Y("Q");
            Pe = Y("y");

            function Af() {
                return V(this)
            }

            function Bf(a) {
                a = v(a);
                return this.isValid() ? this[a + "s"]() : NaN
            }

            function Z(a) {
                return function () {
                    return this.isValid() ? this._data[a] : NaN
                }
            }
            Re = Z("milliseconds");
            $a = Z("seconds");
            Va = Z("minutes");
            ab = Z("hours");
            Wa = Z("days");
            F = Z("months");
            u = Z("years");

            function Cf() {
                return x(this.days() / 7)
            }
            var $ = Math.round,
                Df = {
                    ss: 44,
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    w: null,
                    M: 11
                };

            function Ef(b, c, d, e, a) {
                return a.relativeTime(c || 1, !!d, b, e)
            }

            function Ff(d, e, c, a) {
                var f = V(d).abs(),
                    g = $(f.as("s")),
                    h = $(f.as("m")),
                    i = $(f.as("h")),
                    j = $(f.as("d")),
                    k = $(f.as("M")),
                    b = $(f.as("w"));
                f = $(f.as("y"));
                g = g <= c.ss && ["s", g] || g < c.s && ["ss", g] || h <= 1 && ["m"] || h < c.m && ["mm", h] || i <= 1 && ["h"] || i < c.h && ["hh", i] || j <= 1 && ["d"] || j < c.d && ["dd", j];
                c.w != null && (g = g || b <= 1 && ["w"] || b < c.w && ["ww", b]);
                g = g || k <= 1 && ["M"] || k < c.M && ["MM", k] || f <= 1 && ["y"] || ["yy", f];
                g[2] = e;
                g[3] = +d > 0;
                g[4] = a;
                return Ef.apply(null, g)
            }

            function Gf(a) {
                if (a === void 0) return $;
                if (typeof a === "function") {
                    $ = a;
                    return !0
                }
                return !1
            }

            function Hf(a, b) {
                if (Df[a] === void 0) return !1;
                if (b === void 0) return Df[a];
                Df[a] = b;
                a === "s" && (Df.ss = b - 1);
                return !0
            }

            function If(a, b) {
                if (!this.isValid()) return this.localeData().invalidDate();
                var c = !1,
                    d = Df;
                typeof a === "object" && (b = a, a = !1);
                typeof a === "boolean" && (c = a);
                typeof b === "object" && (d = Object.assign({}, Df, b), b.s != null && b.ss == null && (d.ss = b.s - 1));
                a = this.localeData();
                b = Ff(this, !c, d, a);
                c && (b = a.pastFuture(+this, b));
                return a.postformat(b)
            }
            var Jf = Math.abs;

            function Kf(a) {
                return (a > 0) - (a < 0) || +a
            }

            function Lf() {
                if (!this.isValid()) return this.localeData().invalidDate();
                var a = Jf(this._milliseconds) / 1e3,
                    b = Jf(this._days),
                    c = Jf(this._months),
                    d, e, f, g, h = this.asSeconds(),
                    i, j, k;
                if (!h) return "P0D";
                d = x(a / 60);
                e = x(d / 60);
                a %= 60;
                d %= 60;
                f = x(c / 12);
                c %= 12;
                g = a ? a.toFixed(3).replace(/\.?0+$/, "") : "";
                i = h < 0 ? "-" : "";
                j = Kf(this._months) !== Kf(h) ? "-" : "";
                k = Kf(this._days) !== Kf(h) ? "-" : "";
                h = Kf(this._milliseconds) !== Kf(h) ? "-" : "";
                return i + "P" + (f ? j + f + "Y" : "") + (c ? j + c + "M" : "") + (b ? k + b + "D" : "") + (e || d || a ? "T" : "") + (e ? h + e + "H" : "") + (d ? h + d + "M" : "") + (a ? h + g + "S" : "")
            }
            w = kd.prototype;
            w.isValid = id;
            w.abs = qf;
            w.add = sf;
            w.subtract = tf;
            w.as = yf;
            w.asMilliseconds = Vb;
            w.asSeconds = B;
            w.asMinutes = od;
            w.asHours = jd;
            w.asDays = Id;
            w.asWeeks = Me;
            w.asMonths = Ne;
            w.asQuarters = Oe;
            w.asYears = Pe;
            w.valueOf = zf;
            w._bubble = vf;
            w.clone = Af;
            w.get = Bf;
            w.milliseconds = Re;
            w.seconds = $a;
            w.minutes = Va;
            w.hours = ab;
            w.days = Wa;
            w.weeks = Cf;
            w.months = F;
            w.years = u;
            w.humanize = If;
            w.toISOString = Lf;
            w.toString = Lf;
            w.toJSON = Lf;
            w.locale = he;
            w.localeData = ie;
            w.toIsoString = p("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Lf);
            w.lang = Aa;
            s("X", 0, 0, "unix");
            s("x", 0, 0, "valueOf");
            C("x", cb);
            C("X", fb);
            E("X", function (a, b, c) {
                c._d = new Date(parseFloat(a) * 1e3)
            });
            E("x", function (a, b, c) {
                c._d = new Date(y(a))
            });
            b.version = "2.29.4";
            c(U);
            b.fn = P;
            b.min = ed;
            b.max = fd;
            b.now = Xa;
            b.utc = m;
            b.unix = ef;
            b.months = lf;
            b.isDate = k;
            b.locale = S;
            b.invalid = ea;
            b.duration = V;
            b.isMoment = o;
            b.weekdays = nf;
            b.parseZone = ff;
            b.localeData = T;
            b.isDuration = ld;
            b.monthsShort = mf;
            b.weekdaysMin = pf;
            b.defineLocale = yc;
            b.updateLocale = zc;
            b.locales = Ac;
            b.weekdaysShort = of ;
            b.normalizeUnits = v;
            b.relativeTimeRounding = Gf;
            b.relativeTimeThreshold = Hf;
            b.calendarFormat = Pd;
            b.prototype = P;
            b.HTML5_FMT = {
                DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
                DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
                DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
                DATE: "YYYY-MM-DD",
                TIME: "HH:mm",
                TIME_SECONDS: "HH:mm:ss",
                TIME_MS: "HH:mm:ss.SSS",
                WEEK: "GGGG-[W]WW",
                MONTH: "YYYY-MM"
            };
            b.patch = function () {
                return b
            };
            return b
        })
    }
    var j = !1;

    function k() {
        j || (j = !0, i());
        return h.exports
    }

    function a(a) {
        switch (a) {
            case void 0:
                return k()
        }
    }
    e.exports = a
}), null);
__d("WAWeb-moment", ["moment-2.29.4"], (function (a, b, c, d, e, f) {
    e.exports = b("moment-2.29.4")()
}), null);
__d("asyncToGeneratorRuntime", ["Promise"], (function (a, b, c, d, e, f) {
    "use strict";
    var g;

    function h(a, c, d, e, f, h, i) {
        try {
            var j = a[h](i),
                k = j.value
        } catch (a) {
            d(a);
            return
        }
        j.done ? c(k) : (g || (g = b("Promise"))).resolve(k).then(e, f)
    }

    function a(a) {
        return function () {
            var c = this,
                d = arguments;
            return new(g || (g = b("Promise")))(function (b, e) {
                var f = a.apply(c, d);

                function g(a) {
                    h(f, b, e, g, i, "next", a)
                }

                function i(a) {
                    h(f, b, e, g, i, "throw", a)
                }
                g(void 0)
            })
        }
    }
    f.asyncToGenerator = a
}), 66);
__d("regeneratorRuntime", ["Promise"], (function (a, b, c, d, e, f) {
    "use strict";
    var g, h = Object.prototype.hasOwnProperty,
        i = typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") || "@@iterator",
        j = e.exports;

    function k(a, b, c, d) {
        b = Object.create((b || r).prototype);
        d = new A(d || []);
        b._invoke = x(a, c, d);
        return b
    }
    j.wrap = k;

    function l(a, b, c) {
        try {
            return {
                type: "normal",
                arg: a.call(b, c)
            }
        } catch (a) {
            return {
                type: "throw",
                arg: a
            }
        }
    }
    var m = "suspendedStart",
        n = "suspendedYield",
        o = "executing",
        p = "completed",
        q = {};

    function r() {}

    function s() {}

    function t() {}
    var u = t.prototype = r.prototype;
    s.prototype = u.constructor = t;
    t.constructor = s;
    s.displayName = "GeneratorFunction";

    function a(a) {
        ["next", "throw", "return"].forEach(function (b) {
            a[b] = function (a) {
                return this._invoke(b, a)
            }
        })
    }
    j.isGeneratorFunction = function (a) {
        a = typeof a === "function" && a.constructor;
        return a ? a === s || (a.displayName || a.name) === "GeneratorFunction" : !1
    };
    j.mark = function (a) {
        Object.setPrototypeOf ? Object.setPrototypeOf(a, t) : Object.assign(a, t);
        a.prototype = Object.create(u);
        return a
    };
    j.awrap = function (a) {
        return new v(a)
    };

    function v(a) {
        this.arg = a
    }

    function w(a) {
        function c(c, f) {
            var h = a[c](f);
            c = h.value;
            return c instanceof v ? (g || (g = b("Promise"))).resolve(c.arg).then(d, e) : (g || (g = b("Promise"))).resolve(c).then(function (a) {
                h.value = a;
                return h
            })
        }
        typeof process === "object" && process.domain && (c = process.domain.bind(c));
        var d = c.bind(a, "next"),
            e = c.bind(a, "throw");
        c.bind(a, "return");
        var f;

        function h(a, d) {
            var e = f ? f.then(function () {
                return c(a, d)
            }) : new(g || (g = b("Promise")))(function (b) {
                b(c(a, d))
            });
            f = e["catch"](function (a) {});
            return e
        }
        this._invoke = h
    }
    a(w.prototype);
    j.async = function (a, b, c, d) {
        var e = new w(k(a, b, c, d));
        return j.isGeneratorFunction(b) ? e : e.next().then(function (a) {
            return a.done ? a.value : e.next()
        })
    };

    function x(a, b, c) {
        var d = m;
        return function (e, f) {
            if (d === o) throw new Error("Generator is already running");
            if (d === p) {
                if (e === "throw") throw f;
                return C()
            }
            while (!0) {
                var g = c.delegate;
                if (g) {
                    if (e === "return" || e === "throw" && g.iterator[e] === void 0) {
                        c.delegate = null;
                        var h = g.iterator["return"];
                        if (h) {
                            h = l(h, g.iterator, f);
                            if (h.type === "throw") {
                                e = "throw";
                                f = h.arg;
                                continue
                            }
                        }
                        if (e === "return") continue
                    }
                    h = l(g.iterator[e], g.iterator, f);
                    if (h.type === "throw") {
                        c.delegate = null;
                        e = "throw";
                        f = h.arg;
                        continue
                    }
                    e = "next";
                    f = void 0;
                    var i = h.arg;
                    if (i.done) c[g.resultName] = i.value, c.next = g.nextLoc;
                    else {
                        d = n;
                        return i
                    }
                    c.delegate = null
                }
                if (e === "next") d === n ? c.sent = f : c.sent = void 0;
                else if (e === "throw") {
                    if (d === m) {
                        d = p;
                        throw f
                    }
                    c.dispatchException(f) && (e = "next", f = void 0)
                } else e === "return" && c.abrupt("return", f);
                d = o;
                h = l(a, b, c);
                if (h.type === "normal") {
                    d = c.done ? p : n;
                    var i = {
                        value: h.arg,
                        done: c.done
                    };
                    if (h.arg === q) c.delegate && e === "next" && (f = void 0);
                    else return i
                } else h.type === "throw" && (d = p, e = "throw", f = h.arg)
            }
        }
    }
    a(u);
    u[i] = function () {
        return this
    };
    u.toString = function () {
        return "[object Generator]"
    };

    function y(a) {
        var b = {
            tryLoc: a[0]
        };
        1 in a && (b.catchLoc = a[1]);
        2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
        this.tryEntries.push(b)
    }

    function z(a) {
        var b = a.completion || {};
        b.type = "normal";
        delete b.arg;
        a.completion = b
    }

    function A(a) {
        this.tryEntries = [{
            tryLoc: "root"
        }], a.forEach(y, this), this.reset(!0)
    }
    j.keys = function (a) {
        var b = [];
        for (var c in a) b.push(c);
        b.reverse();
        return function c() {
            while (b.length) {
                var d = b.pop();
                if (d in a) {
                    c.value = d;
                    c.done = !1;
                    return c
                }
            }
            c.done = !0;
            return c
        }
    };

    function B(a) {
        if (a) {
            var b = a[i];
            if (b) return b.call(a);
            if (typeof a.next === "function") return a;
            if (!isNaN(a.length)) {
                var c = -1;
                b = function b() {
                    while (++c < a.length)
                        if (h.call(a, c)) {
                            b.value = a[c];
                            b.done = !1;
                            return b
                        } b.value = void 0;
                    b.done = !0;
                    return b
                };
                return b.next = b
            }
        }
        return {
            next: C
        }
    }
    j.values = B;

    function C() {
        return {
            value: void 0,
            done: !0
        }
    }
    A.prototype = {
        constructor: A,
        reset: function (a) {
            this.prev = 0;
            this.next = 0;
            this.sent = void 0;
            this.done = !1;
            this.delegate = null;
            this.tryEntries.forEach(z);
            if (!a)
                for (a in this) a.charAt(0) === "t" && h.call(this, a) && !isNaN(+a.slice(1)) && (this[a] = void 0)
        },
        stop: function () {
            this.done = !0;
            var a = this.tryEntries[0];
            a = a.completion;
            if (a.type === "throw") throw a.arg;
            return this.rval
        },
        dispatchException: function (a) {
            if (this.done) throw a;
            var b = this;

            function c(c, d) {
                f.type = "throw";
                f.arg = a;
                b.next = c;
                return !!d
            }
            for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                var e = this.tryEntries[d],
                    f = e.completion;
                if (e.tryLoc === "root") return c("end");
                if (e.tryLoc <= this.prev) {
                    var g = h.call(e, "catchLoc"),
                        i = h.call(e, "finallyLoc");
                    if (g && i) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
                        else if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else if (g) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0)
                    } else if (i) {
                        if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else throw new Error("try statement without catch or finally")
                }
            }
        },
        abrupt: function (a, b) {
            for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc <= this.prev && h.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                    var e = d;
                    break
                }
            }
            e && (a === "break" || a === "continue") && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
            d = e ? e.completion : {};
            d.type = a;
            d.arg = b;
            e ? this.next = e.finallyLoc : this.complete(d);
            return q
        },
        complete: function (a, b) {
            if (a.type === "throw") throw a.arg;
            a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = a.arg, this.next = "end") : a.type === "normal" && b && (this.next = b)
        },
        finish: function (a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.finallyLoc === a) {
                    this.complete(c.completion, c.afterLoc);
                    z(c);
                    return q
                }
            }
        },
        "catch": function (a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.tryLoc === a) {
                    var d = c.completion;
                    if (d.type === "throw") {
                        var e = d.arg;
                        z(c)
                    }
                    return e
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function (a, b, c) {
            this.delegate = {
                iterator: B(a),
                resultName: b,
                nextLoc: c
            };
            return q
        }
    }
}), null);
__d("once", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = g(a);
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
        return b
    }

    function g(a) {
        var b = a,
            c;
        a = function () {
            if (b) {
                for (var a = arguments.length, d = new Array(a), e = 0; e < a; e++) d[e] = arguments[e];
                c = b.apply(this, d);
                b = null
            }
            return c
        };
        return a
    }
    f["default"] = a
}), 66);
__d("WAWebAddonProcessDeleteForMe", ["Promise", "WALogger", "WAWebAddonConstants", "WAWebAddonDBTable", "WAWebAddonSortUtils", "WAWebAddonUpdateDataUtils", "WAWebMsgType", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["processDeleteForMe failed: ", ""]);
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
            return d("WAWebAddonDBTable").addonDBTable.getByMsgKey(d("WAWebMsgType").MSG_TYPE.COMMENT, a)
        });
        return j.apply(this, arguments)
    }

    function k(a, b) {
        return l.apply(this, arguments)
    }

    function l() {
        l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            yield d("WAWebAddonUpdateDataUtils").updateAddonsInTableMode({
                processMode: d("WAWebAddonConstants").AddonProcessMode.DeleteForMe,
                tableMode: a
            }, {
                remove: b
            })
        });
        return l.apply(this, arguments)
    }

    function m(a) {
        return Array.from(d("WAWebAddonSortUtils").groupAddonsByTableMode(a)).map(function (b) {
            var c = b[0];
            b = b[1];
            return k(c, b)["catch"](function (b) {
                d("WALogger").ERROR(i(), b).tags("messaging", "addons").sendLogs("deleteAddonForMe: " + ((b = a[0]) == null ? void 0 : b.type) + " in " + String(c) + " failed");
                return
            })
        })
    }

    function n(a) {
        return o.apply(this, arguments)
    }

    function o() {
        o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            a = m(a);
            yield(h || (h = b("Promise"))).all(a)
        });
        return o.apply(this, arguments)
    }

    function c(a) {
        return p.apply(this, arguments)
    }

    function p() {
        p = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            yield n([a])
        });
        return p.apply(this, arguments)
    }
    g.hasDeleteAddonForMe = a;
    g.processDeleteForMe = n;
    g.processDeleteForMeSingle = c
}), 98);
__d("uuidv4", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a() {
        var a;
        a = (a = self) == null ? void 0 : (a = a.crypto) == null ? void 0 : a.randomUUID;
        return typeof a === "function" ? self.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var b = Math.random() * 16 | 0;
            a = a === "x" ? b : b & 3 | 8;
            return a.toString(16)
        })
    }
    f["default"] = a
}), 66);
__d("getCrossOriginTransport", ["invariant", "ExecutionEnvironment", "err"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        if (!(h || (h = b("ExecutionEnvironment"))).isInBrowser) throw b("err")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment.");
        try {
            var a = new XMLHttpRequest();
            !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
            return a
        } catch (a) {
            throw b("err")("getCrossOriginTransport: %s", a.message)
        }
    }
    i.withCredentials = function () {
        var a = i();
        "withCredentials" in a || g(0, 5150);
        var b = a.open;
        a.open = function () {
            b.apply(this, arguments), this.withCredentials = !0
        };
        return a
    };
    e.exports = i
}), null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function (a, b, c, d, e, f) {
    var g, h = {
        rewriteURI: function (a) {
            if (!b("isFacebookURI")(a) || h._isWhitelisted(a)) return a;
            var c = h._getRewrittenSubdomain(a);
            c !== null && c !== void 0 && (a = a.setSubdomain(c));
            return a
        },
        getTransportBuilderForURI: function (a) {
            return h.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport")
        },
        isRewriteSafe: function (a) {
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
            var c = h._getCurrentURI().getDomain(),
                d = new(g || (g = b("URI")))(a).qualify().getDomain();
            return c === d || h.isRewritten(a)
        },
        isRewritten: function (a) {
            a = a.getQualifiedURI();
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || h._isWhitelisted(a)) return !1;
            var c = a.getSubdomain(),
                d = h._getCurrentURI(),
                e = h._getRewrittenSubdomain(d);
            return a.getDomain() !== d.getDomain() && c === e
        },
        _isWhitelisted: function (a) {
            a = a.getPath();
            a.endsWith("/") || (a += "/");
            return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1
        },
        _getRewrittenSubdomain: function (a) {
            a = a.getQualifiedURI().getSubdomain();
            return b("ZeroRewriteRules").rewrite_rules[a]
        },
        _getCurrentURI: function () {
            return new(g || (g = b("URI")))("/").qualify()
        }
    };
    e.exports = h
}), null);
__d("getAsyncHeaders", ["BDHeaderConfig", "LSD", "ZeroCategoryHeader", "isFacebookURI"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        var b = {},
            d = c("isFacebookURI")(a);
        d && c("ZeroCategoryHeader").value && (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
        d = h(a);
        d && (b["X-FB-LSD"] = d);
        d = i(a);
        d && (b["X-ASBD-ID"] = d);
        return b
    }

    function h(a) {
        return j(a) ? null : c("LSD").token
    }

    function i(a) {
        return j(a) ? null : d("BDHeaderConfig").ASBD_ID
    }

    function j(a) {
        return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin
    }
    g["default"] = a
}), 98);
__d("warning", ["cr:755"], (function (a, b, c, d, e, f, g) {
    g["default"] = b("cr:755")
}), 98);
__d("WAWebLockChatSync", ["Promise", "WALogger", "WAServerSync.pb", "WASyncdAction", "WASyncdActionUtils", "WASyncdConst", "WATimeUtils", "WAWebArchiveChatSync", "WAWebChatLockAction", "WAWebPinChatSync", "WAWebSyncd", "WAWebSyncdGetChat", "WAWebWid", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["LockChatSync: update lock status for chat"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["LockChatSync: malformed mutation chatJid is not wid"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["LockChatSync: malformed mutation locked is null"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["LockChatSync: operation not supported: ", ""]);
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
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = 1, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 7
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.LockChat
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var e = [];
                a = (yield(h || (h = b("Promise"))).all(a.map(function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                        if (a.operation !== "set") {
                            d("WALogger").WARN(l(), a.operation);
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Malformed
                            }
                        }
                        var b = a.indexParts[1];
                        a = (a = a.value.lockChatAction) == null ? void 0 : a.locked;
                        if (a == null) {
                            d("WALogger").WARN(k());
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Malformed
                            }
                        }
                        if (!c("WAWebWid").isWid(b)) {
                            d("WALogger").WARN(j());
                            return {
                                actionState: d("WASyncdConst").SyncActionState.Malformed
                            }
                        }
                        b = (yield d("WAWebSyncdGetChat").resolveChatForMutationIndex(d("WAWebWidFactory").createWid(b)));
                        if (!b.success) return {
                            actionState: d("WASyncdConst").SyncActionState.Orphan,
                            orphanModel: b.orphanModel
                        };
                        b = d("WAWebWidFactory").createWid(b.chat.id);
                        e.push({
                            isLocked: a,
                            chatId: b
                        });
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Success
                        }
                    });
                    return function (b) {
                        return a.apply(this, arguments)
                    }
                }())));
                yield h.all(e.map(function (a) {
                    d("WALogger").LOG(i()).devConsole(a);
                    return a.isLocked ? d("WAWebChatLockAction").setChatAsLocked(a.chatId, {
                        syncWithPrimaries: !1
                    }) : d("WAWebChatLockAction").setChatAsUnlocked(a.chatId, {
                        syncWithPrimaries: !1
                    })
                }));
                return a
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        f.getChatLockMutation = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
                return d("WASyncdActionUtils").buildPendingMutation({
                    collection: d("WASyncdConst").CollectionName.RegularLow,
                    indexArgs: [yield d("WAWebSyncdGetChat").getChatJidMutationIndexForChat(c)],
                    value: {
                        lockChatAction: {
                            locked: b
                        }
                    },
                    version: this.getVersion(),
                    operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                    timestamp: a,
                    action: this.getAction()
                })
            });

            function c(b, c, d) {
                return a.apply(this, arguments)
            }
            return c
        }();
        f.sendLockMutation = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, e) {
                e = e.isLocked;
                var f = d("WATimeUtils").unixTimeMs(),
                    g = [];
                e && g.push(c("WAWebArchiveChatSync").getArchiveChatMutation(f, !1, a), d("WAWebPinChatSync").PinChatSync.getPinMutation(f, !1, a));
                g.push(this.getChatLockMutation(f, e, a));
                yield d("WAWebSyncd").lockForSync([], yield(h || (h = b("Promise"))).all(g),
                    function () {
                        return (h || (h = b("Promise"))).resolve()
                    })
            });

            function e(b, c) {
                return a.apply(this, arguments)
            }
            return e
        }();
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebChatLockAction", ["WAWebChatCollection", "WAWebDBUpdateChatTable", "WAWebLockChatSync", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h(a, b) {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            b = b ? {
                isLocked: b,
                archive: !1,
                pin: void 0
            } : {
                isLocked: b
            };
            yield d("WAWebDBUpdateChatTable").updateChatTable(a, b);
            (a = d("WAWebChatCollection").ChatCollection.get(a)) == null ? void 0 : a.set(b)
        });
        return i.apply(this, arguments)
    }

    function j(a, b, c) {
        return k.apply(this, arguments)
    }

    function k() {
        k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, d) {
            d = (d = d) != null ? d : {};
            d = d.syncWithPrimaries;
            d = d === void 0 ? !0 : d;
            d && void c("WAWebLockChatSync").sendLockMutation(a, {
                isLocked: b
            });
            return h(a, b)
        });
        return k.apply(this, arguments)
    }

    function a(a, b) {
        return l.apply(this, arguments)
    }

    function l() {
        l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            return j(a, !0, b)
        });
        return l.apply(this, arguments)
    }

    function e(a, b) {
        return m.apply(this, arguments)
    }

    function m() {
        m = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            return j(a, !1, b)
        });
        return m.apply(this, arguments)
    }
    g.setChatAsLocked = a;
    g.setChatAsUnlocked = e
}), 98);
__d("WAWebUserPrefsChatLock", ["WAArrayBufferUtils", "WALogger", "WAProtobufsUserPassword.pb", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["getSecretCodeFromStorage: could not deserialize chat lock secret code: ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i(a, b) {
        c("WAWebUserPrefsStore").setUser(a, b, {
            shouldWriteToIdb: !1
        })
    }

    function j(a) {
        return c("WAWebUserPrefsStore").getUser(a)
    }

    function k(a) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
    }

    function l(a) {
        a = atob(a);
        return d("WAArrayBufferUtils").stringToArrayBuffer(a)
    }

    function m(a) {
        return {
            transformer: a.transformer,
            encoding: a.encoding,
            iterations: a.iterations,
            salt: k(a.salt),
            data: k(a.data)
        }
    }

    function n(a) {
        var b;
        return {
            transformer: (b = d("WAProtobufsUserPassword.pb").UserPassword$Transformer.cast(a.transformer)) != null ? b : d("WAProtobufsUserPassword.pb").UserPassword$Transformer.NONE,
            encoding: (b = d("WAProtobufsUserPassword.pb").UserPassword$Encoding.cast(a.encoding)) != null ? b : d("WAProtobufsUserPassword.pb").UserPassword$Encoding.UTF8,
            iterations: a.iterations,
            salt: l(a.salt),
            data: l(a.data)
        }
    }

    function o() {
        var a = j(d("WAWebUserPrefsKeys").UserPrefs.ChatLockHide);
        return typeof a === "boolean" ? a : null
    }

    function p() {
        try {
            var a = j(d("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode);
            if (typeof a === "string") {
                a = JSON.parse(a);
                if (a == null || a.transformer == null || a.iterations == null || a.salt == null || a.data == null) return;
                return n(a)
            }
        } catch (a) {
            d("WALogger").WARN(h(), a)
        }
    }

    function a() {
        return {
            hideLockedChats: o(),
            secretCode: p()
        }
    }

    function b(a) {
        if (a == null) {
            i(d("WAWebUserPrefsKeys").UserPrefs.ChatLockHide, null);
            i(d("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode, null);
            return
        }
        i(d("WAWebUserPrefsKeys").UserPrefs.ChatLockHide, a.hideLockedChats);
        a = a.secretCode;
        if (a != null) {
            a = JSON.stringify(m(a));
            i(d("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode, a)
        } else i(d("WAWebUserPrefsKeys").UserPrefs.ChatLockSecretCode, null)
    }
    g.getChatLockSettingsFromStorage = a;
    g.saveChatLockSettingsToStorage = b
}), 98);
__d("WAWebChatLockSettings", ["WAWebBaseModel", "WAWebChatLockUpdateDailyStats", "WAWebModelUtils", "WAWebUserPrefsChatLock"], (function (a, b, c, d, e, f, g) {
    "use strict";
    b = function (a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.hideLockedChats = d("WAWebModelUtils").prop(), c.secretCode = d("WAWebModelUtils").prop(), b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.initialize = function () {
            var b = this;
            a.prototype.initialize.call(this);
            this.updateDailyStats();
            this.on("change", function () {
                b.updateDailyStats()
            })
        };
        c.updateDailyStats = function () {
            d("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
                secretCodeActive: this.secretCode != null,
                lockFolderHidden: this.hideLockedChats
            })
        };
        c.updateAndSave = function (a) {
            this.set(a), d("WAWebUserPrefsChatLock").saveChatLockSettingsToStorage({
                hideLockedChats: this.hideLockedChats,
                secretCode: this.secretCode
            })
        };
        return b
    }(d("WAWebBaseModel").BaseModel);
    b.Proxy = "chat_lock_settings";
    var h = d("WAWebBaseModel").defineModel(b);

    function i() {
        var a = d("WAWebUserPrefsChatLock").getChatLockSettingsFromStorage();
        a = new h(a);
        d("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
            secretCodeActive: a.secretCode != null,
            lockFolderHidden: a.hideLockedChats === !0
        });
        return a
    }
    var j;

    function a() {
        j == null && (j = i());
        return j
    }
    g.getChatLockSettings = a
}), 98);
__d("WAWebWebcStorageStatWamEvent", ["WAWebWamCodegenUtils"], (function (a, b, c, d, e, f, g) {
    b = (a = d("WAWebWamCodegenUtils")).defineEvents({
        WebcStorageStat: [1504, {
                webcAgeOfStorage: [3, a.TYPES.INTEGER],
                webcPackingEnabled: [4, a.TYPES.BOOLEAN],
                webcStorageQuota: [2, a.TYPES.INTEGER],
                webcStorageUsage: [1, a.TYPES.INTEGER]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        WebcStorageStat: []
    });
    g.WebcStorageStatWamEvent = b
}), 98);
__d("WAWebCleanAssets", ["WAStorageEstimator", "WAWebAssetLoaderDpiChangeDispatch", "WAWebFeatureDetectionDetectWebpSupport", "WAWebFeatureDetectionSwSupport", "WAWebNoop", "WAWebSWBus", "WAWebSWBusActions", "WAWebWebcStorageStatWamEvent", "lodash"], (function (a, b, c, d, e, f, g) {
    var h = {
        DEFAULT: "default",
        WEBP: "webp"
    };

    function a(a) {
        if (!c("WAWebFeatureDetectionSwSupport").supported) return;
        var b = a.estimateStorage === !0,
            e = navigator.serviceWorker;
        d("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport().then(function (b) {
            var d = c("lodash").flatMap(a.keep, function (a) {
                return [a[c("WAWebAssetLoaderDpiChangeDispatch").RES.LOW], a[c("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH]]
            }).map(function (a) {
                var c = b && a[h.WEBP] ? h.WEBP : h.DEFAULT;
                c = (a = a[c]) == null ? void 0 : a.split("/");
                return c != null ? c[c.length - 1] : null
            });
            (e == null ? void 0 : e.controller) && c("WAWebSWBus").request(e.controller, c("WAWebSWBusActions").CLEAN_ASSETS, d)["catch"](c("WAWebNoop"))
        }).then(function () {
            return b ? d("WAStorageEstimator").estimateStorage() : null
        }).then(function (a) {
            if (a == null ? void 0 : a.success) {
                a = a.value;
                var b = a.usage;
                a = a.quota;
                new(d("WAWebWebcStorageStatWamEvent").WebcStorageStatWamEvent)({
                    webcStorageUsage: b,
                    webcStorageQuota: a
                }).commit()
            }
        })
    }
    g["default"] = a
}), 98);
__d("WAWebDeleteMessageForMeSync", ["Promise", "WALogger", "WANullthrows", "WAServerSync.pb", "WASyncAction.pb", "WASyncdAction", "WASyncdActionUtils", "WASyncdConst", "WATimeUtils", "WAWebAddonProcessDeleteForMe", "WAWebBackendApi", "WAWebChatLoadMessages", "WAWebDBMessageDelete", "WAWebFrontendMsgGetters", "WAWebLidMigrationUtils", "WAWebMsgCollection", "WAWebMsgGetters", "WAWebMsgKey", "WAWebPersistedJobDefinitions", "WAWebPersistedJobManager", "WAWebSyncdActionUtils", "WAWebSyncdGetChat", "WAWebSyncdResolveMessages", "WAWebSyncdUtils", "WAWebWamEnumMdSyncdCriticalEventCode", "WAWebWidFactory", "WAWebWidToJid", "asyncToGeneratorRuntime", "decodeProtobuf"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["delete_message_for_me_sync: operation not supported"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["syncd: successfully deleted ", " for me."]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["delete_message_for_me_sync: msg ", " found in storage but not in collection"]);
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
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.chatJidIndex = 1, b) || babelHelpers.assertThisInitialized(c)
        }
        var f = e.prototype;
        f.getVersion = function () {
            return 3
        };
        f.getAction = function () {
            return d("WASyncdConst").Actions.DeleteMessageForMe
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                var e = [],
                    f = (yield d("WAWebSyncdResolveMessages").resolveMessagesForMutations(a)),
                    g = f.incomingRemoteToLocalChatId,
                    l = f.messagesInDB;
                f = (yield(h || (h = b("Promise"))).all(a.map(function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                        try {
                            if (a.operation === "set") {
                                a = a.indexParts;
                                var b = a[1],
                                    f = a[2],
                                    h = a[3];
                                a = a[4];
                                (!b || !f || !h || !a) && d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                                var m = g.get(b);
                                b = d("WAWebSyncdActionUtils").syncKeyToMsgKey(b, f, h, a);
                                if (!b) {
                                    d("WAWebSyncdUtils").uploadCriticalEventMetric(d("WAWebWamEnumMdSyncdCriticalEventCode").MD_SYNCD_CRITICAL_EVENT_CODE.ACTION_INVALID_INDEX_DATA);
                                    return {
                                        actionState: d("WASyncdConst").SyncActionState.Malformed
                                    }
                                }
                                if (m == null) return {
                                    actionState: d("WASyncdConst").SyncActionState.Orphan,
                                    orphanModel: {
                                        modelId: b.toString(),
                                        modelType: d("WASyncdConst").SyncModelType.Msg
                                    }
                                };
                                var n = c("WANullthrows")(d("WAWebSyncdActionUtils").syncKeyToMsgKey(m, f, h, a, !1));
                                m = l.find(function (a) {
                                    return a.startsWith(n.toString())
                                });
                                if (m == null) {
                                    f = d("WAWebLidMigrationUtils").getAlternateMsgKey(n);
                                    if (f != null) {
                                        h = (yield d("WAWebAddonProcessDeleteForMe").hasDeleteAddonForMe(f));
                                        if (h != null) try {
                                            yield d("WAWebAddonProcessDeleteForMe").processDeleteForMeSingle(h);
                                            return {
                                                actionState: d("WASyncdConst").SyncActionState.Success
                                            }
                                        } catch (a) {}
                                    }
                                    return {
                                        actionState: d("WASyncdConst").SyncActionState.Orphan,
                                        orphanModel: {
                                            modelId: b.toString(),
                                            modelType: d("WASyncdConst").SyncModelType.Msg
                                        }
                                    }
                                }
                                e.push(m);
                                a = d("WAWebMsgCollection").MsgCollection.get(m);
                                a ? (d("WAWebFrontendMsgGetters").getChat(a).msgs.length === 1 && (yield d("WAWebChatLoadMessages").loadEarlierMsgs(d("WAWebFrontendMsgGetters").getChat(a))), a["delete"]()) : d("WALogger").WARN(k(), m);
                                d("WALogger").DEV(j(), m);
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
                if (e.length > 0) {
                    yield d("WAWebDBMessageDelete").removeMessagesFromHistory(e);
                    var m = new Set();
                    e.forEach(function (a) {
                        return m.add(c("WAWebMsgKey").fromString(a).remote.toString())
                    });
                    a = Array.from(m.values()).join(",").toString();
                    d("WAWebBackendApi").frontendFireAndForget("deleteModelsForLastAddOnPreview", {
                        messagesIds: e
                    });
                    yield d("WAWebPersistedJobManager").getJobManager().waitUntilPersisted(d("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(a, e))
                }
                return f
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        f.resolveConflicts = function (a, e) {
            a = d("decodeProtobuf").decodeProtobuf(d("WASyncAction.pb").SyncActionValueSpec, a.binarySyncAction);
            e = d("decodeProtobuf").decodeProtobuf(d("WASyncAction.pb").SyncActionDataSpec, e.binarySyncData).value;
            a = c("WANullthrows")((a = a.deleteMessageForMeAction) == null ? void 0 : a.deleteMedia);
            e = c("WANullthrows")(e == null ? void 0 : (e = e.deleteMessageForMeAction) == null ? void 0 : e.deleteMedia);
            return !e && a ? (h || (h = b("Promise"))).resolve(d("WASyncdConst").ConflictResolutionState.SkipRemote) : (h || (h = b("Promise"))).resolve(d("WASyncdConst").ConflictResolutionState.SkipRemoteAndDropLocal)
        };
        f.buildDeleteForMeMutation = function (a) {
            var b = a.timestamp,
                c = a.deleteMedia,
                e = a.messageTimestamp;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["timestamp", "deleteMedia", "messageTimestamp"]);
            c = {
                deleteMessageForMeAction: {
                    deleteMedia: c,
                    messageTimestamp: e
                }
            };
            return d("WASyncdActionUtils").buildPendingMutation({
                collection: d("WASyncdConst").CollectionName.RegularHigh,
                indexArgs: d("WASyncdActionUtils").buildMessageKey(a),
                value: c,
                version: this.getVersion(),
                operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: b,
                action: this.getAction()
            })
        };
        f.getDeleteForMeMutations = function (a, c) {
            var e = this,
                f = d("WATimeUtils").unixTimeMs();
            return (h || (h = b("Promise"))).all(a.map(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    var b = a.id.remote;
                    return e.buildDeleteForMeMutation({
                        timestamp: f,
                        deleteMedia: c,
                        messageTimestamp: d("WAWebMsgGetters").getT(a),
                        remoteJid: b.isNewsletter() ? d("WAWebWidToJid").widToNewsletterJid(b) : d("WAWebWidToJid").widToChatJid(d("WAWebWidFactory").createWid(yield d("WAWebSyncdGetChat").getChatJidMutationIndexForChat(b))),
                        id: a.id.id,
                        fromMe: a.id.fromMe,
                        participant: d("WAWebMsgGetters").getIsGroupMsg(a) && !a.id.fromMe ? d("WAWebWidToJid").widToUserJid(d("WAWebMsgGetters").getSender(a)) : null
                    })
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
__d("WAWebInboxFiltersGatingUtils", ["WAWebABProps", "WAWebMobilePlatforms", "WAWebPrimaryFeatures"], (function (a, b, c, d, e, f, g) {
    function h() {
        return d("WAWebMobilePlatforms").isSMB() ? d("WAWebABProps").getABPropConfigValue("inbox_filters_smb_enabled") : d("WAWebABProps").getABPropConfigValue("inbox_filters_enabled")
    }

    function i() {
        return h() && d("WAWebPrimaryFeatures").primaryFeatureEnabled("primary_favorites_sync_support") && d("WAWebABProps").getABPropConfigValue("inbox_filters_favorites_enabled_companions")
    }

    function a() {
        return i() && d("WAWebABProps").getABPropConfigValue("inbox_filters_favorites_management_enabled_companions")
    }

    function b() {
        return i() && d("WAWebABProps").getABPropConfigValue("inbox_filters_favorites_deeplink_enabled")
    }

    function c() {
        return d("WAWebMobilePlatforms").isSMB() && d("WAWebABProps").getABPropConfigValue("inbox_filters_smb_enabled") && d("WAWebABProps").getABPropConfigValue("inbox_filters_custom_smb_enabled")
    }
    g.inboxFiltersEnabled = h;
    g.inboxFavoritesEnabled = i;
    g.inboxFavoritesManagementEnabled = a;
    g.inboxFavoritesDeeplinkEnabled = b;
    g.inboxCustomFiltersEnabled = c
}), 98);
__d("WAWebNewsletterBackendQueues", ["WAWebPromiseQueue"], (function (a, b, c, d, e, f, g) {
    a = new(d("WAWebPromiseQueue").PromiseQueue)();
    b = new(d("WAWebPromiseQueue").PromiseQueue)();
    c = new(d("WAWebPromiseQueue").PromiseQueue)();
    g.newsletterCreationQueue = a;
    g.newsletterSubscribeQueue = b;
    g.newsletterDeleteQueue = c
}), 98);
__d("WAWebPasswordInput.react", ["fbt", "WAWebClassnames", "WAWebCopyPasteSelectable.react", "WAWebSvgButton.react", "WAWebSvgComponentBase", "WAWebUISpacing", "WAWebVisibilityOffIcon", "WAWebVisibilityOnIcon", "react", "react-gui-use-focus", "stylex", "useMergeRefs", "useWAWebToggle"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useEffect,
        n = b.useRef,
        o = b.useState,
        p = {
            container: {
                position: "x1n2onr6",
                display: "x78zum5",
                backgroundColor: "xe7vic5",
                minWidth: "xt7fyls",
                borderBottomWidth: "xso031l",
                borderBottomStyle: "x1q0q8m5",
                borderBottomColor: "x11dzelx",
                paddingBottom: "x1j85h84",
                $$css: !0
            },
            focusedContainer: {
                borderBottomWidth: "xlxy82",
                borderBottomStyle: "x1q0q8m5",
                borderBottomColor: "x1r079op",
                paddingBottom: "x18d9i69",
                $$css: !0
            },
            inputField: {
                fontSize: "x1jchvi3",
                color: "xzwifym",
                flexGrow: "x1iyjqo2",
                borderTopWidth: "xsl91qr",
                borderEndWidth: "x1j3p5sx",
                borderBottomWidth: "xe0m388",
                borderStartWidth: "xs13csb",
                borderTopStyle: "xe73qa2",
                borderEndStyle: "x102zblm",
                borderBottomStyle: "xuhg6hn",
                borderStartStyle: "x1xmwtuv",
                borderTopColor: "x1isl193",
                borderEndColor: "x90s3ff",
                borderBottomColor: "x1bnlyaz",
                borderStartColor: "x1oej5vx",
                outline: "x1a2a7pz",
                backgroundColor: "xe7vic5",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.focusOnMount,
            e = b === void 0 ? !1 : b;
        b = a.enableShowPassword;
        b = b === void 0 ? !1 : b;
        var f = a.showByDefault;
        f = f === void 0 ? !1 : f;
        f = c("useWAWebToggle")(f);
        var g = f[0];
        f = f[1];
        var i = n(null),
            k = o(!1),
            q = k[0];
        k = k[1];
        k = d("react-gui-use-focus").useFocus({
            onFocusChange: k
        });
        k = c("useMergeRefs")(i, k);
        m(function () {
            if (e) {
                var a;
                (a = i.current) == null ? void 0 : a.focus()
            }
        }, [e]);
        var r = g ? d("WAWebVisibilityOnIcon").VisibilityOnIcon : d("WAWebVisibilityOffIcon").VisibilityOffIcon,
            s = g ? h._("__JHASH__tmC-9XfhKvG__JHASH__") : h._("__JHASH__Du2bx5Ia2ld__JHASH__");
        return l.jsxs("div", {
            className: (j || (j = c("stylex")))([p.container, q && p.focusedContainer]),
            children: [l.jsx("input", {
                className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(d("WAWebCopyPasteSelectable.react").SELECTABLE_CSS_CLASS, j(p.inputField, d("WAWebUISpacing").uiPadding.all6)),
                ref: k,
                type: g ? "text" : "password",
                value: a.value,
                onChange: a.onChange,
                onBlur: a.onBlur,
                onKeyDown: a.onKeyDown,
                required: a.required,
                pattern: a.pattern,
                title: a.title,
                placeholder: a.placeholder,
                "data-testid": void 0
            }), b && l.jsx(c("WAWebSvgButton.react"), {
                Icon: r,
                "aria-label": s,
                xstyle: d("WAWebUISpacing").uiMargin.end8,
                onClick: f,
                color: d("WAWebSvgComponentBase").SvgColorProp.TEAL
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProfileImage.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        image: "_aj_p",
        "default": "_aj_q",
        icon: "_aj_r",
        container: "_aj_s",
        hasBorder: "_aj_t",
        dimmed: "_aj_u",
        hasInnerBorder: "_aj_v",
        hasLargeInnerBorder: "_aj_w",
        square: "_aj_x",
        row: "_aj_y",
        col: "_aj_z"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebProfileImage.react", ["WAPromiseDelays", "WAWebClassnames", "WAWebDefaultUserIcon", "WAWebDefaultUserSquareIcon", "WAWebDetailImage.react", "WAWebFlex.react", "WAWebNoop", "WAWebProfileImage.scss", "WAWebProfilePicThumbCollection", "react", "useWAWebListener", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g) {
    var h, i;
    b = i || d("react");
    var j = h || (h = c("react")),
        k = b.useEffect,
        l = b.useState;

    function a(a) {
        var b = a.theme,
            e = a.wid,
            f = l(null),
            g = f[0],
            h = f[1];
        f = l(null);
        var i = f[0],
            m = f[1],
            n = function (a) {
                h(a == null ? void 0 : a.img)
            },
            o = c("useWAWebUnmountSignal")();
        k(function () {
            if (!e) return;
            d("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(e).then(function (a) {
                return d("WAPromiseDelays").delayMs(0).then(function () {
                    return a
                })
            }).then(function (a) {
                if (o.aborted) return;
                m(a);
                n(a)
            })["catch"](c("WAWebNoop"))
        }, []);
        d("useWAWebListener").useListener(i, "change:img", n);
        if (e != null && (g != null || (e == null ? void 0 : e.isNewsletter()))) return j.jsx(d("WAWebDetailImage.react").DetailImage, {
            id: e,
            quoted: a.quoted,
            size: a.size,
            shape: a.shape,
            border: a.border,
            quality: a.quality
        });
        typeof a.size === "number" && a.size !== 0 || typeof a.size !== "number" && a.size != null ? f = a.size : f = d("WAWebDetailImage.react").DetailImageSize.Small;
        i = b === "voip" || b === "voip-dimmed";
        g = b === "voip-large" || b === "voip-large-dimmed";
        b = b === "voip-dimmed" || b === "voip-large-dimmed";
        var p = d("WAWebDetailImage.react").getSize(f) || void 0,
            q = a.thumbs ? a.thumbs : [a.thumb];
        f = q.map(function (b, e) {
            if (b) return j.jsx("img", {
                className: c("WAWebProfileImage.scss").image,
                src: b,
                alt: ""
            }, e);
            b = p && p / (q.length > 2 && e > 0 ? 2 : 1);
            var f = a.quoted === !0 ? d("WAWebDefaultUserSquareIcon").DefaultUserSquareIcon : d("WAWebDefaultUserIcon").DefaultUserIcon;
            return j.jsx(d("WAWebFlex.react").FlexRow, {
                className: c("WAWebProfileImage.scss")["default"],
                justify: "center",
                align: "center",
                children: j.jsx(f, {
                    style: {
                        width: b,
                        height: b
                    },
                    className_DONOTUSE: c("WAWebProfileImage.scss").icon
                })
            }, e)
        });
        var r;
        f.length === 1 ? r = f[0] : f.length === 2 ? r = j.jsxs(d("WAWebFlex.react").FlexRow, {
            className: c("WAWebProfileImage.scss").row,
            justify: "stretch",
            align: "stretch",
            children: [f[0], f[1]]
        }) : r = j.jsxs(d("WAWebFlex.react").FlexRow, {
            className: c("WAWebProfileImage.scss").row,
            justify: "stretch",
            align: "stretch",
            children: [f[0], j.jsxs(d("WAWebFlex.react").FlexColumn, {
                className: c("WAWebProfileImage.scss").col,
                justify: "stretch",
                align: "stretch",
                children: [f[1], f[2]]
            })]
        });
        return j.jsx(d("WAWebFlex.react").FlexRow, {
            className: d("WAWebClassnames").classnamesConvertMeToStylexPlease((f = {}, f[c("WAWebProfileImage.scss").square] = a.shape === d("WAWebDetailImage.react").DetailImageShape.Square, f[c("WAWebProfileImage.scss").hasBorder] = a.border, f[c("WAWebProfileImage.scss").hasInnerBorder] = i, f[c("WAWebProfileImage.scss").hasLargeInnerBorder] = g, f[c("WAWebProfileImage.scss").dimmed] = b, f[c("WAWebProfileImage.scss").container] = !0, f)),
            isFlexContainer: !1,
            style: {
                width: p,
                height: p
            },
            children: r
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebQuickRepliesSync", ["Promise", "WALogger", "WAServerSync.pb", "WASyncdAction", "WASyncdActionUtils", "WASyncdConst", "WAWebQuickReplyCollection", "WAWebSchemaQuickReply", "WAWebSyncdActionUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["quick replies sync: operation not supported"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["quick replies sync: malformed mutation"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["quick replies sync: malformed mutation"]);
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
            return 2
        };
        e.getAction = function () {
            return d("WASyncdConst").Actions.QuickReply
        };
        e.applyMutations = function (a) {
            return (h || (h = b("Promise"))).all(a.map(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    try {
                        if (a.operation === "set") {
                            var b = a.indexParts;
                            a = a.value;
                            b = b[1];
                            b || d("WAWebSyncdActionUtils").throwInvalidActionIndex();
                            a = a.quickReplyAction;
                            if (!a) {
                                d("WALogger").WARN(k());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            if (a.deleted === !0) {
                                yield d("WAWebSchemaQuickReply").getQuickReplyTable().remove(b);
                                d("WAWebQuickReplyCollection").QuickReplyCollection.remove(b);
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Success
                                }
                            }
                            var c = a.shortcut,
                                e = a.message;
                            if (c == null || c === "" || e == null || e === "") {
                                d("WALogger").WARN(j());
                                return {
                                    actionState: d("WASyncdConst").SyncActionState.Malformed
                                }
                            }
                            var f = a.keywords || [];
                            a = a.count || 0;
                            var g = {
                                id: b,
                                shortcut: c,
                                count: a,
                                message: e,
                                keywords: f
                            };
                            yield d("WAWebSchemaQuickReply").getQuickReplyTable().createOrReplace(g);
                            d("WAWebQuickReplyCollection").QuickReplyCollection.add({
                                id: b,
                                shortcut: c,
                                message: e,
                                keywords: f,
                                count: a
                            }, {
                                merge: !0
                            });
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
        e.getQuickReplyDeleteMutation = function (a, b) {
            var c = {
                quickReplyAction: {
                    deleted: !0,
                    keywords: [],
                    shortcut: "",
                    message: "",
                    count: 0
                }
            };
            return d("WASyncdActionUtils").buildPendingMutation({
                collection: d("WASyncdConst").CollectionName.RegularLow,
                indexArgs: [a],
                value: c,
                version: this.getVersion(),
                operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: b,
                action: this.getAction()
            })
        };
        e.getQuickReplyAddOrEditMutation = function (a, b, c, e, f, g) {
            f = {
                quickReplyAction: {
                    deleted: !1,
                    keywords: f,
                    shortcut: b,
                    message: c,
                    count: e
                }
            };
            return d("WASyncdActionUtils").buildPendingMutation({
                collection: d("WASyncdConst").CollectionName.RegularLow,
                indexArgs: [a],
                value: f,
                version: this.getVersion(),
                operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                timestamp: g,
                action: this.getAction()
            })
        };
        return c
    }(d("WASyncdAction").SyncActionBase);
    c = new a();
    g["default"] = c
}), 98);
__d("WAWebStatusPrivacySettingSync", ["WALogger", "WAServerSync.pb", "WASyncAction.pb", "WASyncdAction", "WASyncdActionUtils", "WASyncdConst", "WAWebCmd", "WAWebStatusGatingUtils", "WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsStatus", "WAWebUserPrefsStatusType", "WAWebWidFactory", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[syncd] Failed to write status privacy settings to IndexedDB ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[syncd] unexpected mutation count ", " for status privacy sync"]);
        i = function () {
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
            return d("WASyncdConst").Actions.StatusPrivacy
        };
        f.applyMutations = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (a.length !== 1) {
                    d("WALogger").ERROR(i(), a.length);
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Malformed
                        }
                    })
                }
                var b = a[0];
                if (d("WAWebStatusGatingUtils").isStatusPostingEnabled() && b.operation === "set") try {
                    b = b.value;
                    b = b.statusPrivacy;
                    if (!b) return [{
                        actionState: d("WASyncdConst").SyncActionState.Malformed
                    }];
                    var e = b.mode;
                    b = b.userJid;
                    if (e == null) return [{
                        actionState: d("WASyncdConst").SyncActionState.Malformed
                    }];
                    var f = [],
                        g, j = [],
                        k = [];
                    switch (e) {
                        case d("WASyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS:
                            g = d("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact;
                            f = c("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
                                setting: g
                            });
                            break;
                        case d("WASyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST:
                            g = d("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList;
                            j = b.map(d("WAWebWidFactory").createWid);
                            f = c("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
                                setting: g,
                                allowList: j
                            });
                            break;
                        case d("WASyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST:
                            g = d("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList;
                            k = b.map(d("WAWebWidFactory").createWid);
                            f = c("WAWebUserPrefsStatus").calculateStatusPrivacyUpdateEntries({
                                setting: g,
                                denyList: k
                            });
                            break
                    }
                    f.length > 0 && (yield d("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.bulkSetItemsToIndexedDB(f).then(function () {
                        d("WAWebCmd").Cmd.updateStatusPrivacySettings({
                            setting: g,
                            allowList: j,
                            denyList: k
                        })
                    }));
                    return [{
                        actionState: d("WASyncdConst").SyncActionState.Success
                    }]
                } catch (b) {
                    d("WALogger").ERROR(h(), b);
                    return a.map(function () {
                        return {
                            actionState: d("WASyncdConst").SyncActionState.Failed
                        }
                    })
                }
                return [{
                    actionState: d("WASyncdConst").SyncActionState.Unsupported
                }]
            });

            function e(b) {
                return a.apply(this, arguments)
            }
            return e
        }();
        f.getStatusPrivacySettingMutation = function (a, b, c) {
            var e;
            switch (a) {
                case d("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact:
                    e = d("WASyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.CONTACTS;
                    break;
                case d("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList:
                    e = d("WASyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.ALLOW_LIST;
                    break;
                case d("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList:
                    e = d("WASyncAction.pb").SyncActionValue$StatusPrivacyAction$StatusDistributionMode.DENY_LIST;
                    break
            }
            return d("WASyncdActionUtils").buildPendingMutation({
                collection: d("WASyncdConst").CollectionName.RegularHigh,
                indexArgs: [],
                operation: d("WAServerSync.pb").SyncdMutation$SyncdOperation.SET,
                version: this.getVersion(),
                timestamp: c,
                action: this.getAction(),
                value: {
                    statusPrivacy: {
                        mode: e,
                        userJid: b
                    }
                }
            })
        };
        return e
    }(d("WASyncdAction").SyncActionBase);
    e = new a();
    g["default"] = e
}), 98);
__d("WAWebUserPrefsBot", ["WAWebUserPrefsKeys", "WAWebUserPrefsStore"], (function (a, b, c, d, e, f, g) {
    function a() {
        var a = c("WAWebUserPrefsStore").get(d("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP);
        a = typeof a === "number" ? a : 0;
        return a
    }

    function b(a) {
        c("WAWebUserPrefsStore").set(d("WAWebUserPrefsKeys").MD_KEYS.BOT_LIST_LAST_REQUESTED_TIMESTAMP, a)
    }

    function e() {
        var a = c("WAWebUserPrefsStore").get(d("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_REQUESTED_TIMESTAMP);
        a = typeof a === "number" ? a : 0;
        return a
    }

    function f(a) {
        c("WAWebUserPrefsStore").set(d("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_REQUESTED_TIMESTAMP, a)
    }

    function h() {
        var a = c("WAWebUserPrefsStore").get(d("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_BHASH);
        return typeof a === "string" ? a : null
    }

    function i(a) {
        c("WAWebUserPrefsStore").set(d("WAWebUserPrefsKeys").MD_KEYS.UGC_BOT_LIST_LAST_BHASH, a)
    }
    g.getBotListLastRequestedTimestamp = a;
    g.setBotListLastRequestedTimestamp = b;
    g.getUgcBotListLastRequestedTimestamp = e;
    g.setUgcBotListLastRequestedTimestamp = f;
    g.getUgcBotListLastBhash = h;
    g.setUgcBotListLastBhash = i
}), 98);
__d("WAWebWamEnumPrivacyHighlightSurfaceEnum", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        GOLDEN_BOX_CONTACT: 0,
        GOLDEN_BOX_GROUP: 1,
        GOLDEN_BOX_BROADCAST: 2,
        INFO_SCREEN_CONTACT: 3,
        INFO_SCREEN_GROUP: 4,
        INFO_SCREEN_BROADCAST: 5,
        CALLS_LIST: 6,
        CHATS_LIST: 7,
        STATUS_LIST: 8,
        LINKED_DEVICES_SCREEN: 9,
        CALLING_SCREEN_AUDIO: 10,
        CALLING_SCREEN_VIDEO: 11,
        SPLIT_VIEW_HOME_PLACEHOLDER: 12
    });
    f.PRIVACY_HIGHLIGHT_SURFACE_ENUM = a
}), 66);
__d("getUnwrappedFbt", ["FbtResultGK"], (function (a, b, c, d, e, f) {
    function a(a) {
        a = a.contents;
        var c = b("FbtResultGK").inlineMode,
            d = b("FbtResultGK").shouldReturnFbtResult;
        if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a
    }
    e.exports = a
}), null);
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "getUnwrappedFbt", "gkx", "recoverableViolation"], (function (a, b, c, d, e, f, g) {
    if (c("gkx")("20935") && c("FbtResultGK").inlineMode === "TRANSLATION") {
        c("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((b = c("FbtResultGK").inlineMode) != null ? b : "") + "]") + ("[runtime_site_is_comet=" + String(c("gkx")("20935")) + "]"), "internationalization")
    }

    function a(a) {
        var b = c("getUnwrappedFbt")(a);
        if (b != null) return b;
        b = a.contents;
        var d = a.patternString,
            e = a.patternHash;
        return c("FbtResultGK").inlineMode != null && c("FbtResultGK").inlineMode !== "NO_INLINE" ? new(c("InlineFbtResult"))(b, c("FbtResultGK").inlineMode, d, e) : c("FbtResult").get(a)
    }
    g["default"] = a
}), 98);
__d("useWAWebAsync", ["react", "useWAWebStableCallback"], (function (a, b, c, d, e, f, g) {
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useState;

    function a(a, b) {
        var d = c("useWAWebStableCallback")(a);
        a = j(!0);
        var e = a[0],
            f = a[1];
        a = j(null);
        var g = a[0],
            h = a[1];
        a = j(null);
        var k = a[0],
            l = a[1];
        i(function () {
            var a = new AbortController();
            f(!0);
            d().then(function (b) {
                a.signal.aborted || (h(function () {
                    return b
                }), f(!1), l(null))
            })["catch"](function (a) {
                f(!1), l(a)
            });
            return function () {
                a.abort()
            }
        }, [d].concat(b));
        if (e) return {
            loading: !0,
            error: null,
            value: null
        };
        return k ? {
            loading: !1,
            error: k,
            value: null
        } : {
            loading: !1,
            error: null,
            value: g
        }
    }
    g["default"] = a
}), 98);
__d("warningComet", ["SiteData", "cr:1072546", "cr:1072547", "cr:1072549", "cr:983844", "err", "fb-error"], (function (a, b, c, d, e, f, g) {
    function a(a, b) {}
    b = a;
    c = b;
    g["default"] = c
}), 98);
__d("warningWWW", ["WebDriverConfig", "cr:1105154", "cr:11202", "cr:2682"], (function (a, b, c, d, e, f, g) {
    a = b("cr:2682");
    c = a;
    g["default"] = c
}), 98); /*FB_PKG_DELIM*/
/**
 * License: https://www.facebook.com/legal/license/V8_l6oUwABQ/
 */
__d("react-dom-0.0.0", ["ReactDOM"], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a && typeof a === "object" && "default" in a ? a["default"] : a
    }
    var g = a(b("ReactDOM"));
    d = {};
    var h = {
        exports: d
    };

    function i() {
        h.exports = g
    }
    var j = !1;

    function k() {
        j || (j = !0, i());
        return h.exports
    }

    function c(a) {
        switch (a) {
            case void 0:
                return k()
        }
    }
    e.exports = c
}), null); /*FB_PKG_DELIM*/
__d("WAWebNoop", [], (function (a, b, c, d, e, f) {
    "use strict";
    a = function () {};
    b = a;
    f["default"] = b
}), 66);