; /*FB_PKG_DELIM*/

__d("WAWebAudioWaveThumbIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "audio-wave-thumb";

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
        l = 40;
        m = 40;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 40 40",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M18.1953 31.4492C18.7461 31.4492 19.1562 31.0156 19.1562 30.4883V10.6016C19.1562 10.0625 18.7344 9.64062 18.1953 9.64062C17.6562 9.64062 17.2344 10.0625 17.2344 10.6016V30.4883C17.2344 31.0156 17.6562 31.4492 18.1953 31.4492ZM25.4023 29.1172C25.9531 29.1172 26.3633 28.6953 26.3633 28.1562V12.9336C26.3633 12.3945 25.9414 11.9727 25.4023 11.9727C24.8516 11.9727 24.4414 12.3945 24.4414 12.9336V28.1562C24.4414 28.6953 24.8516 29.1172 25.4023 29.1172ZM14.5859 27.4414C15.1367 27.4414 15.5586 27.0195 15.5586 26.4805V14.6094C15.5586 14.0703 15.1367 13.6484 14.5859 13.6484C14.0469 13.6484 13.6367 14.0703 13.6367 14.6094V26.4805C13.6367 27.0195 14.0469 27.4414 14.5859 27.4414ZM21.8047 25.9648C22.3438 25.9648 22.7539 25.5312 22.7539 25.0039V16.0859C22.7539 15.5469 22.3438 15.125 21.8047 15.125C21.2539 15.125 20.8438 15.5586 20.8438 16.0859V25.0039C20.8438 25.5312 21.2539 25.9648 21.8047 25.9648ZM29 23.9727C29.5508 23.9727 29.9609 23.5508 29.9609 23.0117V18.0781C29.9609 17.5391 29.5508 17.1172 29 17.1172C28.4492 17.1172 28.0391 17.5391 28.0391 18.0781V23.0117C28.0391 23.5508 28.4609 23.9727 29 23.9727ZM10.9883 23.0469C11.5391 23.0469 11.9492 22.625 11.9492 22.0859V19.0039C11.9492 18.4648 11.5273 18.0312 10.9883 18.0312C10.4375 18.0312 10.0273 18.4648 10.0273 19.0039V22.0859C10.0273 22.625 10.4375 23.0469 10.9883 23.0469Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.AudioWaveThumbIcon = a
}), 98);
__d("WAWebPaletteIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "palette";

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
        l = 28;
        m = 28;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 28 28",
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
                    d: "M14 3.5C8.20167 3.5 3.5 8.20167 3.5 14C3.5 19.7983 8.20167 24.5 14 24.5C14.9683 24.5 15.75 23.7183 15.75 22.75C15.75 22.295 15.575 21.8867 15.295 21.5717C15.0267 21.2683 14.8517 20.86 14.8517 20.4167C14.8517 19.4483 15.6333 18.6667 16.6017 18.6667H18.6667C21.8867 18.6667 24.5 16.0533 24.5 12.8333C24.5 7.67667 19.7983 3.5 14 3.5ZM7.58333 14C6.615 14 5.83333 13.2183 5.83333 12.25C5.83333 11.2817 6.615 10.5 7.58333 10.5C8.55167 10.5 9.33333 11.2817 9.33333 12.25C9.33333 13.2183 8.55167 14 7.58333 14ZM9.33333 7.58333C9.33333 8.55167 10.115 9.33333 11.0833 9.33333C12.0517 9.33333 12.8333 8.55167 12.8333 7.58333C12.8333 6.615 12.0517 5.83333 11.0833 5.83333C10.115 5.83333 9.33333 6.615 9.33333 7.58333ZM16.9167 9.33333C15.9483 9.33333 15.1667 8.55167 15.1667 7.58333C15.1667 6.615 15.9483 5.83333 16.9167 5.83333C17.885 5.83333 18.6667 6.615 18.6667 7.58333C18.6667 8.55167 17.885 9.33333 16.9167 9.33333ZM18.6667 12.25C18.6667 13.2183 19.4483 14 20.4167 14C21.385 14 22.1667 13.2183 22.1667 12.25C22.1667 11.2817 21.385 10.5 20.4167 10.5C19.4483 10.5 18.6667 11.2817 18.6667 12.25Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M14 3.16667C8.01757 3.16667 3.16667 8.01757 3.16667 14C3.16667 19.9824 8.01757 24.8333 14 24.8333C15.1524 24.8333 16.0833 23.9024 16.0833 22.75C16.0833 22.2065 15.8737 21.7209 15.5441 21.3502L15.295 21.5717L15.5447 21.3508C15.3256 21.1031 15.185 20.7719 15.185 20.4167C15.185 19.6324 15.8174 19 16.6017 19H18.6667C22.0708 19 24.8333 16.2374 24.8333 12.8333C24.8333 7.45669 19.9444 3.16667 14 3.16667ZM7.58333 13.6667C6.79909 13.6667 6.16667 13.0342 6.16667 12.25C6.16667 11.4658 6.79909 10.8333 7.58333 10.8333C8.36757 10.8333 9 11.4658 9 12.25C9 13.0342 8.36757 13.6667 7.58333 13.6667ZM11.0833 9C10.2991 9 9.66667 8.36757 9.66667 7.58333C9.66667 6.79909 10.2991 6.16667 11.0833 6.16667C11.8676 6.16667 12.5 6.79909 12.5 7.58333C12.5 8.36757 11.8676 9 11.0833 9ZM16.9167 9C16.1324 9 15.5 8.36757 15.5 7.58333C15.5 6.79909 16.1324 6.16667 16.9167 6.16667C17.7009 6.16667 18.3333 6.79909 18.3333 7.58333C18.3333 8.36757 17.7009 9 16.9167 9ZM20.4167 13.6667C19.6324 13.6667 19 13.0342 19 12.25C19 11.4658 19.6324 10.8333 20.4167 10.8333C21.2009 10.8333 21.8333 11.4658 21.8333 12.25C21.8333 13.0342 21.2009 13.6667 20.4167 13.6667Z"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.PaletteIcon = a
}), 98);
__d("WAWebStatusPostingTextView.react", ["fbt", "Promise", "WAJids", "WAWebChatModel", "WAWebChatPreferenceCollection", "WAWebCmd", "WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react", "WAWebEmojiNode", "WAWebFlex.react", "WAWebFontLoader", "WAWebMediaEditorEmojiIcon", "WAWebMenuBar.react", "WAWebModalManager", "WAWebPaletteIcon", "WAWebPrepareMessageSendingAction", "WAWebProtobufsE2E.pb", "WAWebRichTextInput.react", "WAWebSendButtonWithCount.react", "WAWebSendStatusMsgAction", "WAWebStatusChangePrivacyPopup.react", "WAWebStatusPrivacySettingButton.react", "WAWebTimeSpentLoggingNavigation", "WAWebUISpacing", "WAWebUserPrefsStatusType", "WAWebWidFactory", "WAWebXViewerIcon", "react", "stylex", "useWAWebModelValues", "useWAWebStatusPrivacySettingConfig"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l;
    e = l || d("react");
    var m = k || (k = c("react")),
        n = e.useEffect,
        o = e.useImperativeHandle,
        p = e.useRef,
        q = e.useState,
        r = 700,
        s = {
            textInputWrapper: {
                color: "x1fpc5dy",
                wordWrap: "x1vvkbs",
                whiteSpace: "x126k92a",
                maxHeight: "xmz0i5r",
                flexGrow: "x1iyjqo2",
                $$css: !0
            },
            input: {
                textAlign: "x2b8uid",
                $$css: !0
            },
            inputText: {
                width: "xh8yej3",
                fontSize: "xcg35fi",
                $$css: !0
            },
            sendWrapper: {
                backgroundColor: "xj4c5ne",
                position: "x10l6tqk",
                bottom: "x1ey2m1c",
                start: "x17qophe",
                height: "x1peatla",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                $$css: !0
            },
            fullWidth: {
                width: "xh8yej3",
                $$css: !0
            },
            optionWrapper: {
                position: "x10l6tqk",
                top: "xomnu4r",
                start: "x17qophe",
                height: "xsdox4t",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "x13a6bvl",
                boxSizing: "x9f619",
                $$css: !0
            },
            optionIconWrapper: {
                color: "x1fpc5dy",
                $$css: !0
            },
            fontIcon: {
                width: "x23j0i4",
                height: "xd7y6wv",
                fontSize: "xddofbv",
                textAlign: "x2b8uid",
                $$css: !0
            },
            closeIcon: {
                position: "x10l6tqk",
                start: "x149uil0",
                $$css: !0
            },
            font_0: {
                $$css: !0
            },
            font_1: {
                fontFamily: "x12n1cvc",
                $$css: !0
            },
            font_2: {
                fontFamily: "xs8eguv",
                $$css: !0
            },
            textLarge: {
                fontSize: "xvzvg7y",
                lineHeight: "x1xuplte",
                textAlign: "x2b8uid",
                $$css: !0
            },
            textMedium: {
                fontSize: "xdhfpv1",
                lineHeight: "x1swossr",
                textAlign: "x2b8uid",
                $$css: !0
            },
            textSmall: {
                fontSize: "x1jchvi3",
                lineHeight: "x3gokd0",
                textAlign: "x2b8uid",
                $$css: !0
            },
            placeholderText: {
                color: "xr3d4wh",
                $$css: !0
            }
        },
        t = new Map([
            [d("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM, s.font_0],
            [d("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM_TEXT, s.font_1],
            [d("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.FB_SCRIPT, s.font_2]
        ]),
        u = [4289080433, 4287670337, 4290879551, 4286128440, 4289628020, 4293964592, 4290163495, 4291207116, 4287326608, 4294937228, 4283744869, 4294933355, 4280730844, 4283943423, 4285818730, 4286484643, 4283864831, 4285408638, 4286237605, 4280563264, 4286747850],
        v = function () {
            return u[Math.floor(Math.random() * u.length)]
        },
        w = function (a) {
            if (a <= 60) return s.textLarge;
            return a <= 240 ? s.textMedium : s.textSmall
        },
        x = function (a) {
            if (a <= 60) return d("WAWebEmojiNode").EmojiSize.Large;
            return a <= 240 ? d("WAWebEmojiNode").EmojiSize.Medium : d("WAWebEmojiNode").EmojiSize.Small
        };

    function y(a) {
        var b = a >> 24 & 255,
            c = a >> 16 & 255,
            d = a >> 8 & 255;
        a = a & 255;
        return "rgba(" + c + ", " + d + ", " + a + ", " + b + ")"
    }
    e = m.forwardRef(a);

    function a(a, e) {
        a = q(d("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM);
        var f = a[0],
            g = a[1];
        a = q(v());
        var k = a[0],
            l = a[1];
        a = q(!1);
        var u = a[0],
            z = a[1];
        a = q("");
        var A = a[0],
            B = a[1];
        a = d("useWAWebStatusPrivacySettingConfig").useWAWebStatusPrivacySettingConfig();
        var C = a.statusPostingPrivacyConfig,
            D = a.setStatusPostingPrivacyConfig;
        a = p();
        var E = p(),
            F = p(),
            G = d("useWAWebModelValues").useModelValues(c("WAWebChatPreferenceCollection").getDefault(), ["spellcheck", "transformTextEmoji"]);
        n(function () {
            d("WAWebCmd").Cmd.onStatusPostingFlow(), void(i || (i = b("Promise"))).all([d("WAWebFontLoader").Font.SANS_SERIF, d("WAWebFontLoader").Font.SERIF, d("WAWebFontLoader").Font.NORICAN_REGULAR].map(function (a) {
                return d("WAWebFontLoader").FontLoader.load(a)
            }))
        }, []);
        d("WAWebTimeSpentLoggingNavigation").useTsNavigation({
            surface: "status-composer-text"
        });
        var H = new(d("WAWebChatModel").Chat)({
                id: d("WAWebWidFactory").createWid(d("WAJids").STATUS_JID)
            }),
            I = function () {
                var a = t.keys();
                for (var b; b = a.next(); b != null)
                    if (b.value === f) break;
                g((b = a.next().value) != null ? b : d("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$FontType.SYSTEM)
            },
            J = function () {
                l(v())
            },
            K = function () {
                var a = A,
                    b = f;
                (C == null ? void 0 : C.setting) === d("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList && (C == null ? void 0 : C.allowList.length) === 0 ? d("WAWebModalManager").ModalManager.open(m.jsx(d("WAWebStatusChangePrivacyPopup.react").StatusChangePrivacyPopup, {
                    statusPostingPrivacyConfig: C,
                    setStatusPostingPrivacyConfig: D
                })) : (d("WAWebModalManager").ModalManager.closeMedia(), void d("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
                    text: a,
                    color: k,
                    font: b
                }))
            },
            L = function () {
                z(!0)
            },
            M = function (a) {
                var b = E.current;
                b && (b.focus(), b.replaceSelection(a));
                z(!1)
            },
            N = function () {
                return F.current
            },
            O = function () {
                d("WAWebModalManager").ModalManager.closeMedia();
                return !0
            };
        o(e, function () {
            return {
                getElement: N,
                handleRequestDismiss: O
            }
        });
        e = u && a.current && m.jsx(d("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react").EmojiPanelPopup, {
            anchor: a.current,
            onSelect: M,
            onClose: function () {
                z(!1)
            }
        });
        return m.jsxs("div", {
            className: "x10l6tqk x13vifvy x17qophe xh8yej3 x5yr21d x1larqbn xo5hfjf x1y61xfy x78zum5",
            style: {
                backgroundColor: y(k)
            },
            ref: F,
            children: [m.jsxs("div", {
                className: (j || (j = c("stylex")))([s.optionWrapper, d("WAWebUISpacing").uiPadding.end18, s.fullWidth]),
                children: [m.jsxs(d("WAWebMenuBar.react").MenuBar, {
                    children: [m.jsx(d("WAWebMenuBar.react").MenuBarItem, {
                        ref: a,
                        icon: m.jsx(d("WAWebMediaEditorEmojiIcon").MediaEditorEmojiIcon, {
                            iconXstyle: s.optionIconWrapper
                        }),
                        testid: void 0,
                        title: h._("__JHASH__Adz_n_XyHVO__JHASH__"),
                        onClick: L
                    }, "emoji-button"), m.jsx(d("WAWebMenuBar.react").MenuBarItem, {
                        icon: m.jsx("span", {
                            className: j([s.fontIcon, s.optionIconWrapper, t.get(f)]),
                            children: "T"
                        }),
                        testid: void 0,
                        title: h._("__JHASH__xrFfNhtyXm0__JHASH__"),
                        onClick: I
                    }, "font-button"), m.jsx(d("WAWebMenuBar.react").MenuBarItem, {
                        icon: m.jsx(d("WAWebPaletteIcon").PaletteIcon, {
                            iconXstyle: s.optionIconWrapper
                        }),
                        testid: void 0,
                        title: h._("__JHASH__OvvNElRKcKE__JHASH__"),
                        onClick: J
                    }, "palette-button")]
                }), m.jsx("button", {
                    className: j([s.optionIconWrapper, s.closeIcon]),
                    onClick: function () {
                        return d("WAWebModalManager").ModalManager.closeMedia()
                    },
                    children: m.jsx(d("WAWebXViewerIcon").XViewerIcon, {})
                })]
            }), m.jsx("div", {
                className: j([d("WAWebUISpacing").uiMargin.allAuto, s.textInputWrapper, t.get(f), d("WAWebUISpacing").uiPadding.all12]),
                children: m.jsx(d("WAWebRichTextInput.react").RichTextInput, {
                    ref: E,
                    xstyle: [d("WAWebUISpacing").uiMargin.vert6, s.input],
                    textXstyle: [s.inputText, w(A.length)],
                    placeholderTestXstyle: s.placeholderText,
                    placeholder: h._("__JHASH__je26wsyeJXC__JHASH__"),
                    onChange: function (a) {
                        B(a.text), void d("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(H)
                    },
                    emojiSize: x(A.length),
                    multiline: !0,
                    focusOnMount: !0,
                    textFormatEnabled: !0,
                    linksEnabled: !0,
                    textFormatShortcutsEnabled: !0,
                    spellCheck: G.spellcheck,
                    transformTextEmoji: G.transformTextEmoji,
                    maxLength: r
                })
            }), m.jsx("div", {
                className: j([s.sendWrapper, s.fullWidth, d("WAWebUISpacing").uiPadding.vert16]),
                children: m.jsxs(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: [s.fullWidth, d("WAWebUISpacing").uiPadding.horiz28],
                    children: [m.jsx(d("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        children: m.jsx(c("WAWebStatusPrivacySettingButton.react"), {
                            statusPostingPrivacyConfig: C,
                            setStatusPostingPrivacyConfig: D
                        })
                    }), m.jsx(d("WAWebFlex.react").FlexItem, {
                        children: m.jsx(c("WAWebSendButtonWithCount.react"), {
                            disabled: A.length === 0,
                            ariaLabel: h._("__JHASH__q53Wz1Hq262__JHASH__"),
                            large: !0,
                            onClick: function () {
                                K()
                            }
                        })
                    })]
                })
            }), e]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebCreateTextStatusFlow.react", ["WAWebStatusPostingTextView.react", "WAWebUimUie.react", "react"], (function (a, b, c, d, e, f, g) {
    var h, i, j = i || c("react"),
        k = (h || (h = d("react"))).useRef;

    function a() {
        var a = k(),
            b = function (b) {
                var c;
                (c = a.current) == null ? void 0 : c.handleRequestDismiss(b)
            };
        return j.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "CreateTextStatusFlow",
            escapable: !0,
            requestDismiss: b,
            children: j.jsx(c("WAWebStatusPostingTextView.react"), {
                ref: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebStatusThumbnail.react", ["WAWebAudioWaveThumbIcon", "WAWebContactGetters", "WAWebDetailImage.react", "WAWebFrontendStatusGetters", "WAWebMediaThumbnail.react", "WAWebMsgGetters", "WAWebMsgType", "WAWebStateUtils", "WAWebStatusImageRing.react", "WAWebStatusText.react", "WAWebUISpacing", "WAWebUseIsKeyboardUser", "WAWebWid", "gkx", "react", "stylex", "useWAWebContactValues", "useWAWebStaticButtonA11y", "useWAWebStatusValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = {
            container: {
                paddingTop: "xz9dl7a",
                paddingEnd: "x14uny0o",
                paddingBottom: "xsag5q8",
                paddingStart: "x1vobaek",
                position: "x1n2onr6",
                $$css: !0
            },
            statusImage: {
                backgroundPosition: "x1xsqp64",
                backgroundRepeat: "xiy17q3",
                backgroundSize: "x18d0r48",
                borderTopStartRadius: "x14yjl9h",
                borderTopEndRadius: "xudhj91",
                borderBottomEndRadius: "x18nykt9",
                borderBottomStartRadius: "xww2gxu",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            },
            statusImageFallbackBackground: {
                backgroundColor: "xkfcepe",
                $$css: !0
            },
            textThumb: {
                position: "x1n2onr6",
                $$css: !0
            },
            thumbContainer: {
                borderTopStartRadius: "x14yjl9h",
                borderTopEndRadius: "xudhj91",
                borderBottomEndRadius: "x18nykt9",
                borderBottomStartRadius: "xww2gxu",
                $$css: !0
            },
            thumbSizeLarge: {
                height: "xwzfr38",
                width: "x1dmp6jm",
                $$css: !0
            },
            thumbSizeSmall: {
                height: "x1vqgdyp",
                width: "x100vrsf",
                $$css: !0
            },
            focusRing: {
                ":focus_borderTopStartRadius": "xvmu2xp",
                ":focus_borderTopEndRadius": "x16ngqik",
                ":focus_borderBottomEndRadius": "x1vlmnad",
                ":focus_borderBottomStartRadius": "x12oeec4",
                ":focus_boxShadow": "xsbtyp8",
                $$css: !0
            }
        };

    function l(a) {
        return a === "status-panel" ? k.thumbSizeLarge : k.thumbSizeSmall
    }

    function m(a) {
        var b = a.msg;
        a = a.theme;
        var e = l(a);
        return j.jsx("div", {
            className: (i || (i = c("stylex")))(k.statusImage, e),
            style: {
                backgroundColor: d("WAWebMsgGetters").getStatusCanvasColor(b)
            },
            children: j.jsx("div", {
                className: i(k.textThumb, e),
                children: j.jsx(d("WAWebStatusText.react").StatusText, {
                    msg: b,
                    theme: (e = a) != null ? e : "status-thumbnail"
                })
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function n(a) {
        var b = a.msg;
        a = a.theme;
        a = l(a);
        return j.jsx("div", {
            className: (i || (i = c("stylex")))(k.statusImage, a),
            style: {
                backgroundColor: d("WAWebMsgGetters").getStatusCanvasColor(b)
            },
            children: j.jsx(d("WAWebAudioWaveThumbIcon").AudioWaveThumbIcon, {
                iconXstyle: a
            })
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o(a) {
        var b = a.msg,
            e = a.theme;
        a = a.thumbnailPlaceholder;
        var f = l(e),
            g = k.statusImage;
        if (b) {
            if (c("WAWebWid").isPSA(d("WAWebMsgGetters").getSender(b))) return j.jsx("div", {
                className: (i || (i = c("stylex")))(k.thumbContainer, f, k.statusImageFallbackBackground),
                children: a
            });
            a = j.jsx(c("WAWebMediaThumbnail.react"), {
                containerClassName: (i || (i = c("stylex")))(k.thumbContainer, f, k.statusImageFallbackBackground),
                childClassName: i(g, f),
                msg: b,
                thumbnailPlaceholder: a
            });
            switch (b.type) {
                case d("WAWebMsgType").MSG_TYPE.CHAT:
                    return j.jsx(m, {
                        msg: b,
                        theme: e
                    });
                case d("WAWebMsgType").MSG_TYPE.PTT:
                case d("WAWebMsgType").MSG_TYPE.AUDIO:
                    return j.jsx(n, {
                        msg: b,
                        theme: e
                    });
                default:
                    return a
            }
        }
        return j.jsx("div", {
            className: (i || (i = c("stylex")))(g, f, k.statusImageFallbackBackground)
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.id,
            e = a.theme,
            f = a.thumbnailPlaceholder,
            g = a.msg,
            h = a.tabIndex,
            m = a.ariaLabel,
            n = d("useWAWebStatusValues").useStatusValues(b, [d("WAWebFrontendStatusGetters").getLastStatus]);
        n = n[0];
        var p = d("useWAWebContactValues").useContactValues(a.contact.id, [d("WAWebContactGetters").getStatusMute]);
        p = p[0];
        var q = c("WAWebUseIsKeyboardUser")();
        q = q.isKeyboardUser;
        var r = c("useWAWebStaticButtonA11y")(a.onClick),
            s = r[0];
        r = r[1];
        var t = (g = g) != null ? g : n;
        g = function () {
            if (!c("gkx")("26258") && t) {
                var a = d("WAWebStateUtils").unproxy(t);
                window.msg = a
            }
        };
        n = l(e);
        f != null ? f = f : f = t ? j.jsx(d("WAWebDetailImage.react").DetailImage, {
            id: d("WAWebMsgGetters").getSender(t),
            theme: "status",
            size: 40
        }) : null;
        return j.jsxs("div", babelHelpers["extends"]({
            ref: s
        }, r, {
            tabIndex: h,
            className: (i || (i = c("stylex")))(k.container, n, d("WAWebUISpacing").uiMargin.top2, q && k.focusRing),
            "aria-label": m,
            role: a.role || "",
            onContextMenu: c("gkx")("26258") ? null : g,
            onClickCapture: function (b) {
                a.onClick == null ? void 0 : a.onClick(), b.stopPropagation(), b.preventDefault()
            },
            "data-testid": void 0,
            children: [p || e === "status-panel" ? null : j.jsx(d("WAWebStatusImageRing.react").StatusImageRing, {
                id: b,
                breakRing: !0
            }), j.jsx(o, {
                msg: t,
                theme: e,
                thumbnailPlaceholder: f
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebStatusCell.react", ["WAWebChatCell.react", "WAWebClock", "WAWebContactGetters", "WAWebFrontendContactGetters", "WAWebMiscGatingUtils", "WAWebPsaVerifiedBlueIcon", "WAWebPsaVerifiedIcon", "WAWebStatusGetters", "WAWebStatusThumbnail.react", "react", "stylex", "useWAWebContactValues", "useWAWebStatusValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = {
            dimmed: {
                opacity: "x1ks1olk",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.status,
            e = a.contact,
            f = a.onClick;
        a = a.isModalView;
        a = a === void 0 ? !0 : a;
        var g = d("useWAWebStatusValues").useStatusValues(b.id, [d("WAWebStatusGetters").getId, d("WAWebStatusGetters").getT]),
            h = g[0];
        g = g[1];
        var l = d("useWAWebContactValues").useContactValues(e.id, [d("WAWebFrontendContactGetters").getFormattedName, d("WAWebContactGetters").getStatusMute, d("WAWebContactGetters").getIsPSA]),
            m = l[0],
            n = l[1];
        l = l[2];
        g = l ? null : d("WAWebClock").Clock.relativeDateAndTimeStr(g);
        l = l ? j.jsxs("span", {
            className: "x1jfb8zj xuce83p x1bft6iq x1i7k8ik xq9mrsl",
            children: [m, j.jsx("div", {
                className: "x1rg5ohu x1c4vz4f x2lah0s xdl72j9 xvijh9v x1w4ip6v x16dsc37",
                children: d("WAWebMiscGatingUtils").isBlueEnabled() ? j.jsx(d("WAWebPsaVerifiedBlueIcon").PsaVerifiedBlueIcon, {}) : j.jsx(d("WAWebPsaVerifiedIcon").PsaVerifiedIcon, {})
            })]
        }) : m;
        return j.jsx(c("WAWebChatCell.react"), {
            className: (i || (i = c("stylex")))(n && k.dimmed),
            customImage: !0,
            theme: a ? "status-list-modal" : null,
            image: j.jsx(c("WAWebStatusThumbnail.react"), {
                id: b.id,
                contact: e,
                onClick: f
            }),
            tabIndex: -1,
            handleKeyboardClick: !0,
            focusid: "status-row-item",
            primary: l,
            secondary: g,
            onClick: f,
            contextEnabled: function () {
                return !1
            }
        }, h.toString())
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebStatusLastPostPreview.react", ["fbt", "WAWebAck", "WAWebClock", "WAWebMsgTimeIcon", "WAWebStatusGatingUtils", "WAWebUISpacing", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            statusAck: {
                verticalAlign: "x16dsc37",
                display: "x1rg5ohu",
                color: "x1ozewix",
                $$css: !0
            }
        };

    function a(a) {
        a = a.msg;
        a = d("useWAWebModelValues").useModelValues(a, ["ack", "t"]);
        var b = a.ack;
        a = a.t;
        a = j.jsx("span", {
            children: d("WAWebClock").Clock.relativeDateAndTimeStr(a)
        });
        d("WAWebStatusGatingUtils").isStatusPostingEnabled() && b === d("WAWebAck").ACK.CLOCK && (a = j.jsxs("span", {
            children: [j.jsx(d("WAWebMsgTimeIcon").MsgTimeIcon, {
                xstyle: [k.statusAck, d("WAWebUISpacing").uiMargin.end2]
            }), h._("__JHASH__BXdQZvQvNk0__JHASH__")]
        }));
        return j.jsx("span", {
            className: "x1f6kntn x16cd2qt",
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.StatusLastPostPreview = a
}), 226);
__d("WAWebStatusList.react", ["fbt", "WAWebClickable.react", "WAWebContactCollection", "WAWebContactGetters", "WAWebEmptyState.react", "WAWebFlatList.react", "WAWebFlatListContainer.react", "WAWebFlatListController", "WAWebFlex.react", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebPrivacyNarrativeE2EMessage.react", "WAWebSectionHeader.react", "WAWebStatusCell.react", "WAWebStatusCollection", "WAWebStatusGetters", "WAWebStatusViewer.react", "WAWebUISpacing", "WAWebWDSText.react", "WAWebWamEnumStatusRowSection", "react", "useLazyRef", "useWAWebListener"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    b = j || d("react");
    var k = i || (i = c("react")),
        l = b.useMemo,
        m = b.useState,
        n = {
            SEC_UNREAD: "SEC_UNREAD",
            SEC_READ: "SEC_READ",
            SEC_MUTED: "SEC_MUTED",
            SEC_E2E_MESSAGE: "SEC_E2E_MESSAGE",
            ROW_STATUS: "ROW_STATUS"
        };

    function o(a) {
        if (d("WAWebContactGetters").getIsMe(a.contact)) return d("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS;
        if (a.contact.statusMute) return d("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MUTED_STORIES;
        return d("WAWebStatusGetters").getHasUnread(a) ? d("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.RECENT_STORIES : d("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.PREVIOUS_STORIES
    }

    function p(a) {
        var b = a.data,
            e = a.onOpenStatus,
            f = a.onToggleMute,
            g = a.sessionIdRef;
        a = h._("__JHASH__tE9izu1SgTQ__JHASH__");
        var i = h._("__JHASH__bjecUW0uKiB__JHASH__"),
            j = h._("__JHASH__tVg5l3rRN2Y__JHASH__"),
            l = h._("__JHASH__q0sU9y4qxuC__JHASH__"),
            m = h._("__JHASH__ei4MVPN59JY__JHASH__");
        switch (b.type) {
            case n.SEC_UNREAD:
                return k.jsx(c("WAWebSectionHeader.react"), {
                    header: a,
                    isTransparent: !0
                });
            case n.SEC_READ:
                return k.jsx(c("WAWebSectionHeader.react"), {
                    header: i,
                    isTransparent: !0
                });
            case n.SEC_MUTED:
                return k.jsxs(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    xstyle: d("WAWebUISpacing").uiPadding.end10,
                    children: [k.jsx(d("WAWebFlex.react").FlexItem, {
                        grow: 1,
                        children: k.jsx(c("WAWebSectionHeader.react"), {
                            header: j,
                            isTransparent: !0
                        })
                    }), k.jsx(d("WAWebFlex.react").FlexItem, {
                        grow: 0,
                        align: "center",
                        children: k.jsx(d("WAWebClickable.react").Clickable, {
                            onClick: f,
                            children: k.jsx(d("WAWebWDSText.react").WDSTextSmall, {
                                as: "span",
                                color: "teal",
                                children: Boolean(b.expanded) ? l : m
                            })
                        })
                    })]
                });
            case n.ROW_STATUS:
                var p = o(b.status);
                return k.jsx(c("WAWebStatusCell.react"), {
                    isModalView: !1,
                    status: b.status,
                    onClick: function () {
                        e ? e(b.status, void 0, b.index, p) : d("WAWebModalManager").ModalManager.openMedia(k.jsx(c("WAWebStatusViewer.react"), {
                            initialStatus: b.status,
                            initialStatusMsg: void 0,
                            closeStatusViewer: function () {
                                d("WAWebModalManager").ModalManager.closeMedia()
                            },
                            sessionId: g == null ? void 0 : g.current,
                            rowIdx: b.index,
                            rowSection: p,
                            continuousPlay: !0
                        }), {
                            transition: "status-modal"
                        })
                    },
                    contact: b.status.contact
                });
            case n.SEC_E2E_MESSAGE:
                return k.jsx(d("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageStatusList, {});
            default:
                throw new(d("WAWebFlatList.react").UnknownDataError)(b)
        }
    }
    p.displayName = p.name + " [from " + f.id + "]";
    var q = d("WAWebFlatList.react").FlatListFactory();

    function a(a) {
        var b = a.onOpenStatus;
        a = c("useLazyRef")(function () {
            return new(c("WAWebFlatListController"))()
        });
        var e = function () {
                return d("WAWebStatusCollection").StatusCollection.getUnexpired(!0)
            },
            f = function () {
                return d("WAWebStatusCollection").StatusCollection.getUnexpired(!1)
            },
            g = function () {
                var a = e(),
                    b = f(),
                    c = [].concat(a, b).filter(function (a) {
                        return a.contact.statusMute
                    });
                return {
                    unread: a,
                    read: b,
                    muted: c
                }
            },
            h = l(g, []),
            i = h.unread,
            j = h.read;
        h = h.muted;
        var o = m(function () {
                return i.filter(function (a) {
                    return !a.contact.statusMute
                })
            }),
            r = o[0],
            s = o[1];
        o = m(function () {
            return j.filter(function (a) {
                return !a.contact.statusMute
            })
        });
        var t = o[0],
            u = o[1];
        o = m(h);
        var v = o[0],
            w = o[1];
        h = m(!1);
        var x = h[0],
            y = h[1];
        o = function () {
            var a = g(),
                b = a.unread,
                c = a.read;
            a = a.muted;
            s(b.filter(function (a) {
                return !a.contact.statusMute
            }));
            u(c.filter(function (a) {
                return !a.contact.statusMute
            }));
            w(a)
        };
        d("useWAWebListener").useListener(d("WAWebStatusCollection").StatusCollection, "add remove bulk_add sort change:msgsChanged change:unreadCount", o);
        h = function () {
            var a = g(),
                b = a.unread,
                c = a.read;
            a = a.muted;
            s(b.filter(function (a) {
                return !a.contact.statusMute
            }));
            u(c.filter(function (a) {
                return !a.contact.statusMute
            }));
            w(a)
        };
        d("useWAWebListener").useListener(d("WAWebContactCollection").ContactCollection, "change:statusMute", h);
        var z = function () {
                y(!x)
            },
            A = 72,
            B = 72;
        o = l(function () {
            var a = [];
            r.length > 0 && (a.push({
                type: n.SEC_UNREAD,
                itemKey: "section-unread",
                height: A
            }), a.push.apply(a, r.map(function (a, b) {
                return {
                    type: n.ROW_STATUS,
                    itemKey: a.id.toString(),
                    height: B,
                    status: a,
                    index: b
                }
            })));
            t.length > 0 && (a.push({
                type: n.SEC_READ,
                itemKey: "section-read",
                height: A
            }), a.push.apply(a, t.map(function (a, b) {
                return {
                    type: n.ROW_STATUS,
                    itemKey: a.id.toString(),
                    height: B,
                    status: a,
                    index: b
                }
            })));
            v.length > 0 && (a.push({
                type: n.SEC_MUTED,
                itemKey: "section-muted",
                height: A,
                expanded: x
            }), x && a.push.apply(a, v.map(function (a, b) {
                return {
                    type: n.ROW_STATUS,
                    itemKey: a.id.toString(),
                    height: B,
                    status: a,
                    index: b
                }
            })));
            d("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && a.push({
                type: n.SEC_E2E_MESSAGE,
                itemKey: "section-e2e-message"
            });
            return a
        }, [r, t, v, A, B, x]);
        d("WAWebStatusCollection").StatusCollection.hasSynced() && o.length > 0 ? h = k.jsx(c("WAWebFlatListContainer.react"), {
            className: "x1iyjqo2 xs83m0k xdl72j9 xwxc41k x1odjw0f x122zoth x16jf5lm",
            flatListControllers: [a.current],
            children: k.jsx(q, {
                className: "statusList",
                itemEnterAnimationsEnabled: !0,
                flatListController: a.current,
                direction: "vertical",
                data: o,
                handleKeyboardNavigation: !0,
                role: "list",
                focusableItemSelector: "[data-focusid='status-row-item']",
                renderItem: function (a) {
                    return k.jsx(p, {
                        data: a,
                        onOpenStatus: b,
                        onToggleMute: z
                    })
                }
            })
        }) : h = k.jsx(d("WAWebEmptyState.react").ListStatus, {});
        return h
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.StatusList = a
}), 226);
__d("WAWebStatusPostingDropdown.react", ["fbt", "WAWebCreateTextStatusFlow.react", "WAWebDropdown.react", "WAWebDropdownItem.react", "WAWebFlex.react", "WAWebMediaEditorDrawingIcon", "WAWebMediaMultipleIcon", "WAWebModalManager", "WAWebStatusAttachMediaFlow.react", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            option: {
                boxSizing: "x9f619",
                maxWidth: "x193iq5w",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                color: "xzwifym",
                cursor: "x1ypdohk",
                whiteSpace: "xuxw1ft",
                $$css: !0
            },
            optionName: {
                fontSize: "x1f6kntn",
                lineHeight: "x1o2sk6j",
                display: "x1rg5ohu",
                $$css: !0
            },
            textIcon: {
                width: "x1xp8n7a",
                $$css: !0
            }
        };

    function m(a) {
        var b = a.children,
            e = a.icon,
            f = a.label,
            g = a.onClick;
        a = a.optionId;
        return k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            testid: void 0,
            action: g,
            children: k.jsxs(d("WAWebFlex.react").FlexRow, {
                align: "center",
                className: (j || (j = c("stylex")))([d("WAWebUISpacing").uiPadding.vert8, d("WAWebUISpacing").uiPadding.end32, d("WAWebUISpacing").uiPadding.start24, l.option]),
                children: [k.jsx("div", {
                    className: "xvy4d1p x117rol3",
                    children: e
                }), k.jsxs("div", {
                    className: j([d("WAWebUISpacing").uiMargin.start8, l.optionName]),
                    children: [f, b]
                })]
            })
        }, a)
    }
    m.displayName = m.name + " [from " + f.id + "]";
    b = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.type,
            f = a.dirX;
        a = a.dirY;
        return k.jsxs(d("WAWebDropdown.react").Dropdown, {
            ref: b,
            type: e,
            flipOnRTL: !0,
            dirY: a,
            dirX: f,
            children: [k.jsx(m, {
                optionId: "option_media_posting",
                onClick: function () {
                    d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebStatusAttachMediaFlow.react").StatusAttachMediaFlow, {}))
                },
                label: h._("__JHASH__sY0x7VVQ2dv__JHASH__"),
                icon: k.jsx(d("WAWebMediaMultipleIcon").MediaMultipleIcon, {})
            }), k.jsx(m, {
                optionId: "option_text_posting",
                onClick: function () {
                    d("WAWebModalManager").ModalManager.openMedia(k.jsx(c("WAWebCreateTextStatusFlow.react"), {}), {
                        transition: "status-modal"
                    })
                },
                label: h._("__JHASH__3Joqmqhzhlo__JHASH__"),
                icon: k.jsx(d("WAWebMediaEditorDrawingIcon").MediaEditorDrawingIcon, {
                    iconXstyle: l.textIcon
                })
            })]
        }, "StatusPostDropdown")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebStatusListHeader.react", ["fbt", "WANullthrows", "WAWebContactCollection", "WAWebDetailImage.react", "WAWebDropdown.react", "WAWebModalManager", "WAWebPlusIcon", "WAWebRound.react", "WAWebStatusCollection", "WAWebStatusGatingUtils", "WAWebStatusLastPostPreview.react", "WAWebStatusPostingDropdown.react", "WAWebStatusThumbnail.react", "WAWebStatusViewer.react", "WAWebUIRefreshGatingUtils", "WAWebUISpacing", "WAWebUimUie.react", "WAWebUimUieMenu.react", "WAWebUseIsKeyboardUser", "WAWebUserPrefsMeUser", "WAWebVelocityTransitionGroup", "WAWebWamEnumStatusRowSection", "react", "stylex", "useWAWebListener"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useRef,
        n = b.useState,
        o = {
            panelHeader: {
                display: "x78zum5",
                flexGrow: "x1c4vz4f",
                flexShrink: "x2lah0s",
                flexBasis: "xdl72j9",
                flexDirection: "x1q0g3np",
                alignItems: "x6s0dn4",
                justifyContent: "x1qughib",
                width: "xh8yej3",
                height: "xwnsf4a",
                paddingStart: "x1h0ha7o",
                $$css: !0
            },
            roundComponent: {
                height: "x1ta3ar0",
                width: "x1se2ifz",
                transitionProperty: "x13b0p5u",
                boxShadow: "x1gnnqk1",
                $$css: !0
            },
            wrappingRoundComponent: {
                position: "x10l6tqk",
                bottom: "xqo3gd",
                zIndex: "xyw6214",
                end: "x1923su1",
                left: null,
                right: null,
                backgroundColor: "x150wa6m",
                $$css: !0
            }
        };

    function a(a) {
        var b, e = a.onOpenStatus,
            f = a.sessionIdRef;
        a = c("WAWebUseIsKeyboardUser")();
        var g = a.isKeyboardUser,
            i = m(null);
        a = n(function () {
            return d("WAWebStatusCollection").StatusCollection.getMyStatus()
        });
        var k = a[0],
            p = a[1];
        a = n(function () {
            return k == null ? void 0 : k.msgs.last()
        });
        var q = a[0],
            r = a[1];
        a = n(null);
        var s = a[0],
            t = a[1];
        a = function () {
            var a;
            p(d("WAWebStatusCollection").StatusCollection.getMyStatus());
            r((a = d("WAWebStatusCollection").StatusCollection.getMyStatus()) == null ? void 0 : a.msgs.last())
        };
        d("useWAWebListener").useListener(d("WAWebStatusCollection").StatusCollection, "add remove bulk_add sort change:msgsChanged change:unreadCount", a);
        d("useWAWebListener").useListener(d("WAWebContactCollection").ContactCollection, "change:statusMute", a);
        var u;
        k && (u = k.msgs);
        a = function () {
            var a = k == null ? void 0 : k.msgs;
            k && (a == null ? void 0 : a.length) && (e ? e(k, a.head(), 0, d("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS) : d("WAWebModalManager").ModalManager.openMedia(l.jsx(c("WAWebStatusViewer.react"), {
                initialStatus: k,
                initialStatusMsg: a.head(),
                closeStatusViewer: function () {
                    d("WAWebModalManager").ModalManager.closeMedia()
                },
                sessionId: f == null ? void 0 : f.current,
                rowIdx: 0,
                rowSection: d("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION.MY_STATUS,
                continuousPlay: !0
            }), {
                transition: "status-modal"
            }))
        };
        var v = function () {
                if (d("WAWebStatusGatingUtils").isStatusPostingEnabled()) {
                    var a;
                    t({
                        DirX: (a = d("WAWebDropdown.react")).DirX.RIGHT,
                        DirY: a.DirY.BOTTOM,
                        menu: l.jsx(c("WAWebStatusPostingDropdown.react"), {
                            dirX: a.DirX.RIGHT,
                            type: a.MenuType.Dropdown
                        }),
                        anchor: i.current,
                        autoFocus: g
                    })
                }
            },
            w = function () {
                t(null)
            },
            x = null,
            y = k != null && k.msgs.length > 0;
        if (k && ((b = u) == null ? void 0 : b.length)) b = l.jsx(c("WAWebStatusThumbnail.react"), {
            tabIndex: y ? 0 : -1,
            role: y ? "button" : null,
            ariaLabel: h._("__JHASH__SovlfEgoL7i__JHASH__"),
            id: k.id,
            contact: k.contact,
            onClick: a
        }), y = l.jsx(d("WAWebStatusLastPostPreview.react").StatusLastPostPreview, {
            msg: c("WANullthrows")(q)
        }), q = {
            cursor: "pointer"
        }, a = a;
        else {
            x = d("WAWebStatusGatingUtils").isStatusPostingEnabled() && l.jsx(d("WAWebRound.react").Round, {
                xstyle: [o.roundComponent, o.wrappingRoundComponent, d("WAWebUISpacing").uiPadding.all2],
                children: l.jsx(d("WAWebRound.react").Round, {
                    xstyle: o.roundComponent,
                    ref: i,
                    children: l.jsx(d("WAWebPlusIcon").PlusIcon, {
                        width: 14,
                        height: 14
                    })
                })
            });
            b = l.jsx(d("WAWebDetailImage.react").DetailImage, {
                id: d("WAWebUserPrefsMeUser").getMaybeMeUser(),
                theme: "status",
                size: 40
            });
            var z = d("WAWebStatusGatingUtils").isStatusPostingEnabled() ? h._("__JHASH__a4z17mhYKRw__JHASH__") : h._("__JHASH__8lQo8q06vHl__JHASH__");
            y = l.jsx("span", {
                "data-testid": void 0,
                className: "x1nxh6w3 x16cd2qt",
                children: z
            });
            q = d("WAWebStatusGatingUtils").isStatusPostingEnabled() ? {
                cursor: "pointer"
            } : null;
            a = v
        }
        z = l.jsx("span", {
            "data-testid": void 0,
            className: "x1jchvi3",
            children: h._("__JHASH__SovlfEgoL7i__JHASH__")
        });
        v = l.jsxs("div", {
            className: (j || (j = c("stylex")))(o.panelHeader, !d("WAWebUIRefreshGatingUtils").uiRefreshM1Enabled() && d("WAWebUISpacing").uiMargin.top14),
            style: q,
            onClick: a,
            children: [l.jsx("div", {
                className: "x1n2onr6",
                children: l.jsxs("div", {
                    className: "x78zum5 x1q0g3np x6s0dn4 xl56j7k x13zx6y x1peatla x1fpc5dy",
                    children: [b, x]
                })
            }), l.jsxs("div", {
                className: "x78zum5 xdt5ytf x1qughib x9hgts1 xc9qbxq xkrivgy",
                children: [z, y]
            }), l.jsx(c("WAWebVelocityTransitionGroup"), {
                transitionName: "pop-fast",
                children: s == null ? null : l.jsx(d("WAWebUimUie.react").UIE, {
                    displayName: "ContextMenu",
                    escapable: !0,
                    popable: !0,
                    dismissOnWindowResize: !0,
                    requestDismiss: w,
                    children: l.jsx(c("WAWebUimUieMenu.react"), {
                        contextMenu: s
                    })
                })
            })]
        });
        return v
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.StatusListHeader = a
}), 226);