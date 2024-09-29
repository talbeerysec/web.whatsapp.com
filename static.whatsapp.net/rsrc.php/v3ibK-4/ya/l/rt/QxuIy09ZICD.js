; /*FB_PKG_DELIM*/

__d("WAMapsShallowEqual", [], (function (a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        var c;
        if (a.size !== b.size) return !1;
        for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= a.length) break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f = f[1];
            c = b.get(g);
            if (c !== f || c === void 0 && !b.has(g)) return !1
        }
        return !0
    }
    f["default"] = a
}), 66);
__d("WAWebAddGroupToCommunityFlowLoadable.react", ["JSResourceForInteraction", "WAWebLazyLoadedRetriable", "WAWebLoadable", "WAWebLoadingDrawer.react", "asyncToGeneratorRuntime", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react");
    a = c("WAWebLazyLoadedRetriable")(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = (yield c("JSResourceForInteraction")("WAWebAddGroupToCommunityFlow.react").__setRef("WAWebAddGroupToCommunityFlowLoadable.react").load());
        return a
    }), "CommunityTransferOwnershipFlow");
    d = c("WAWebLoadable")({
        loader: a,
        loading: function (a) {
            return i.jsx(c("WAWebLoadingDrawer.react"), {
                error: Boolean(a.error)
            })
        }
    });
    g.AddGroupToCommunityFlowLoadable = d
}), 98);
__d("WAWebBizBot3pInfoAboutSection.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebWDSText.react", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        a = a.businessProfile;
        a = (a = d("useWAWebModelValues").useModelValues(a, ["description"])) != null ? a : {};
        a = a.description;
        return a == null ? null : j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-about",
            title: h._("__JHASH__NW8F5d0yHFc__JHASH__"),
            children: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBizBotCommandsSection.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebClickable.react", "WAWebComposeBoxActions", "WAWebUISpacing", "WAWebWDSText.react", "react", "stylex", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            command: {
                borderTopStartRadius: "x1lq5wgf",
                borderTopEndRadius: "xgqcy7u",
                borderBottomEndRadius: "x30kzoy",
                borderBottomStartRadius: "x9jhf4c",
                backgroundColor: "x16ar8wu",
                $$css: !0
            },
            commands: {
                display: "x78zum5",
                flexDirection: "x1q0g3np",
                flexWrap: "x1a02dak",
                $$css: !0
            }
        };

    function a(a) {
        a = a.businessProfile;
        a = (a = d("useWAWebModelValues").useModelValues(a, ["commands", "commandsDescription"])) != null ? a : {};
        var b = a.commands;
        a = a.commandsDescription;
        return b == null || !b.length ? null : k.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-commands",
            title: h._("__JHASH___LXJB5E2uFy__JHASH__"),
            children: [Boolean(a) && k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: a
            }), k.jsx("div", {
                className: (j || (j = c("stylex")))(l.commands, d("WAWebUISpacing").uiMargin.top8),
                children: b.map(function (a) {
                    var b = a.name;
                    a = a.description;
                    var c = "/" + b + " ",
                        e = function () {
                            d("WAWebComposeBoxActions").ComposeBoxActions.paste(null, c, {
                                insertLeadingSpace: !0
                            })
                        };
                    return k.jsx(d("WAWebClickable.react").Clickable, {
                        title: a,
                        onClick: e,
                        xstyle: [l.command, (a = d("WAWebUISpacing")).uiPadding.vert4, a.uiPadding.horiz10, a.uiMargin.end8, a.uiMargin.vert4],
                        children: k.jsx(d("WAWebWDSText.react").WDSTextSmall, {
                            as: "span",
                            color: "primary",
                            children: c
                        })
                    }, b)
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBotDataSharingIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "bot-data-sharing";

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
                    d: "M5.081 12.9c.44 2.98 2.87 5.41 5.86 5.84 2.22.33 4.26-.38 5.73-1.72.5-.45 1.22-.56 1.8-.22.87.5 1 1.71.26 2.39-2.09 1.92-4.99 2.95-8.13 2.53-4.38-.59-7.92-4.13-8.51-8.51a10.02 10.02 0 0 1 6.98-10.96c.96-.29 1.93.44 1.93 1.44v.02c0 .67-.45 1.24-1.09 1.43a6.996 6.996 0 0 0-4.83 7.76Zm7.92-9.19v-.02c0-1 .97-1.73 1.92-1.44 4.1 1.25 7.08 5.07 7.08 9.57 0 .76-.09 1.51-.26 2.23-.23.96-1.35 1.41-2.21.91l-.01-.01c-.57-.34-.83-1-.69-1.64.11-.48.17-.97.17-1.49 0-3.14-2.07-5.79-4.92-6.68-.63-.2-1.08-.76-1.08-1.43Z",
                    fill: "#8696A0"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.BotDataSharingIcon = a
}), 98);
__d("WAWebBotInfoAboutSection.react", ["fbt", "WAWebBotProfileGetters", "WAWebChatInfoDrawerSection.react", "WAWebContactGetters", "WAWebUseBotProfileValues", "WAWebWDSText.react", "react", "useWAWebContactValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        a = a.contact;
        a = d("useWAWebContactValues").useContactValues(a.id, [d("WAWebContactGetters").getId]);
        a = a[0];
        a = d("WAWebUseBotProfileValues").useOptionalBotProfileValues(a, [d("WAWebBotProfileGetters").getDescription]);
        a = a[0];
        return a == null ? null : j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-about",
            title: h._("__JHASH__qX9yRmoF8C9__JHASH__"),
            children: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBroadcastInfoRecipientsSection.react", ["fbt", "WAWebChatContact.react", "WAWebChatInfoDrawerSection.react", "WAWebCmd", "WAWebComposeBoxActions", "WAWebContactCollection", "WAWebFindChatAction", "WAWebFlatList.react", "WAWebUserPrefsMeUser", "react", "useForceUpdate", "useWAWebListener"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useMemo,
        m = d("WAWebFlatList.react").FlatListFactory();

    function a(a) {
        var b = a.chat;
        a = a.flatListController;
        var e = c("useForceUpdate")(),
            f = (b = b.groupMetadata) == null ? void 0 : b.participants;
        d("useWAWebListener").useListener(f, "add remove reset", e);
        b = l(function () {
            return !f ? [] : f.map(function (a) {
                return {
                    itemKey: a.id.toString(),
                    participant: a,
                    height: 68
                }
            })
        }, [f]);
        var g = function (a, b) {
            if (d("WAWebUserPrefsMeUser").isMePrimary(b.id)) return;
            d("WAWebFindChatAction").findOrCreateLatestChat(b.id, "broadcastInfoRecipients").then(function (a) {
                d("WAWebCmd").Cmd.openChatFromUnread(a).then(function (b) {
                    b && d("WAWebComposeBoxActions").ComposeBoxActions.focus(a)
                })
            })
        };
        e = (e = f == null ? void 0 : f.length) != null ? e : 0;
        e = h._("__JHASH__dyumfOphPxr__JHASH__", [h._plural(e, "count")]);
        return k.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
            title: e,
            children: k.jsx(m, {
                flatListController: a,
                direction: "vertical",
                forceConsistentRenderCount: !1,
                data: b,
                renderItem: function (a) {
                    a = a.participant;
                    var b = d("WAWebContactCollection").ContactCollection.gadd(a.id);
                    return k.jsx(d("WAWebChatContact.react").Contact, {
                        contact: b,
                        theme: "chat-info",
                        admin: !!a.isAdmin,
                        onClick: g,
                        waitIdle: !0
                    }, a.id.toString())
                }
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBroadcastInfoTopCard.react", ["fbt", "WAWebCopyPasteSelectable.react", "WAWebDetailImage.react", "WAWebDrawerSection.react", "WAWebFlex.react", "WAWebName.react", "WAWebText_DONOTUSE.react", "react", "useForceUpdate", "useWAWebListener", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b;
        a = a.chat;
        b = (b = a.groupMetadata) == null ? void 0 : b.participants;
        var e = d("useWAWebModelValues").useModelValues(a.contact, ["name"]),
            f = c("useForceUpdate")();
        d("useWAWebListener").useListener(b, "add remove reset", f);
        b = (f = b == null ? void 0 : b.length) != null ? f : 0;
        f = h._("__JHASH__x8my19LrkVe__JHASH__").toString() + " \xb7\xa0" + h._("__JHASH__dyumfOphPxr__JHASH__", [h._plural(b, "count")]).toString();
        b = e.name ? j.jsx(d("WAWebName.react").Name, {
            contact: a.contact,
            selectable: !0
        }) : h._("__JHASH__VcgzbRC9R0f__JHASH__");
        return j.jsxs(c("WAWebDrawerSection.react"), {
            theme: "padding-large",
            children: [j.jsx("div", {
                className: "x78zum5 xl56j7k xieb3on",
                children: j.jsx(d("WAWebDetailImage.react").DetailImage, {
                    id: a.id,
                    size: d("WAWebDetailImage.react").DetailImageSize.Large
                })
            }), j.jsxs(d("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [j.jsx(d("WAWebText_DONOTUSE.react").TextHeader, {
                    level: "2",
                    size: "24",
                    children: b
                }), j.jsx("div", {
                    className: "x1evy7pa x7r5mf7",
                    children: j.jsx(d("WAWebCopyPasteSelectable.react").SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: j.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: f
                        })
                    })
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBroadcastInfoDrawer.react", ["fbt", "WAWebBroadcastInfoRecipientsSection.react", "WAWebBroadcastInfoTopCard.react", "WAWebChatInfoDrawerRow.react", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoMediaSection.react", "WAWebClock", "WAWebCmd", "WAWebDeleteIcon", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerButton.react", "WAWebDrawerHeader.react", "WAWebE2EInfoModal.react", "WAWebE2EInfoModalV2.react", "WAWebFaqUrl", "WAWebFlatListController", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebPrinaUtils", "WAWebSecurityDrawerSection.react", "WAWebStarIcon", "WAWebStateUtils", "WAWebSvgComponentBase", "WAWebWDSText.react", "WAWebWamEnumPrivacyHighlightSurfaceEnum", "gkx", "react", "useForceUpdate", "useLazyRef", "useWAWebListener", "useWAWebModelValues", "useWAWebUIM"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");
    b = j.forwardRef(a);

    function a(a, b) {
        var e;
        a = babelHelpers["extends"]({}, a);
        var f = a.onClose,
            g = a.onMediaGallery,
            i = c("useForceUpdate")(),
            k = c("useWAWebUIM")(),
            l = c("useLazyRef")(function () {
                return new(c("WAWebFlatListController"))()
            }),
            m = d("useWAWebModelValues").useModelValues(a.chat, ["id", "groupMetadata"]),
            n = function () {
                f ? f() : k == null ? void 0 : k.requestDismiss()
            },
            o = function () {
                d("WAWebCmd").Cmd.deleteOrExitChat(d("WAWebStateUtils").unproxy(m))
            },
            p = function () {
                if (d("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled() && d("WAWebPrinaUtils").shouldShowNewE2eInfoModal(d("WAWebStateUtils").unproxy(m))) {
                    var a = d("WAWebFaqUrl").getE2EFaqUrl();
                    d("WAWebModalManager").ModalManager.open(j.jsx(d("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
                        highlightSurface: d("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                        url: a
                    }));
                    return
                }
                d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebE2EInfoModal.react"), {
                    highlightSurface: d("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
                    chatId: m.id,
                    e2eSubtype: "info_encrypted"
                }))
            };
        d("useWAWebListener").useListener((e = m.groupMetadata) == null ? void 0 : e.participants, ["add", "remove", "sort", "reset"], i);
        e = null;
        g && (e = j.jsx(c("WAWebChatInfoMediaSection.react"), {
            onMediaGallery: g,
            chat: d("WAWebStateUtils").unproxy(m)
        }));
        var q;
        if (!c("gkx")("26258") && a.onStarred) {
            i = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: h._("__JHASH__-jY0ppnhrUk__JHASH__")
            });
            g = j.jsx(d("WAWebStarIcon").StarIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            });
            q = j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
                titleTestId: "section-starred-messages",
                children: j.jsx(c("WAWebChatInfoDrawerRow.react"), {
                    testid: void 0,
                    side: "chevron",
                    icon: g,
                    onClick: a.onStarred,
                    title: i
                })
            })
        }
        g = j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
            children: j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                icon: j.jsx(d("WAWebDeleteIcon").DeleteIcon, {}),
                color: "danger",
                theme: "chat-info",
                onClick: o,
                children: h._("__JHASH__pOGMS2vaodS__JHASH__")
            })
        });
        ((a = m.groupMetadata) == null ? void 0 : a.creation) ? (i = d("WAWebClock").Clock.createdStr(m.groupMetadata.creation), i = j.jsx(d("WAWebWDSText.react").WDSTextSmall, {
            children: i
        })) : i = null;
        o = j.jsx(c("WAWebSecurityDrawerSection.react"), {
            highlightSurface: d("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_BROADCAST,
            onClick: p,
            text: h._("__JHASH__pJ84GVQir0r__JHASH__"),
            header: {
                type: "encryption"
            }
        });
        return j.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            theme: "striped",
            children: [j.jsxs(d("WAWebDrawerHeader.react").DrawerHeader, {
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: !0,
                onCancel: n,
                children: [j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                    children: h._("__JHASH__WfknMKrCwH4__JHASH__")
                }), i]
            }), j.jsx(c("WAWebDrawerBody.react"), {
                flatListControllers: [l.current],
                children: j.jsxs("div", {
                    className: "x1c4vz4f x2lah0s xdl72j9 x1w3bhph",
                    children: [j.jsx(c("WAWebBroadcastInfoTopCard.react"), {
                        chat: d("WAWebStateUtils").unproxy(m)
                    }), e, q, j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
                        children: o
                    }), j.jsx(c("WAWebBroadcastInfoRecipientsSection.react"), {
                        chat: d("WAWebStateUtils").unproxy(m),
                        flatListController: l.current
                    }), g]
                })
            })]
        }, "contact-info-modal")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebBubbleIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "bubble";

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
                version: "1.1",
                x: "0px",
                y: "0px",
                enableBackground: "new 0 0 24 24",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    fill: "currentColor",
                    d: "M19.2,4H4.8C3.8,4,3,4.8,3,5.8V22l3.6-3.6h12.6c1,0,1.8-0.8,1.8-1.8V5.8C21,4.8,20.2,4,19.2,4z M19.2,16.6 H6.6l-1.8,1.8V5.8h14.4V16.6z"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.BubbleIcon = a
}), 98);
__d("WAWebBusinessAboutSection.react", ["fbt", "WAWebChatInfoDrawerBlock.react", "WAWebChatInfoDrawerSection.react", "WAWebChatStatus", "WAWebContactGetters", "WAWebCopyPasteSelectable.react", "WAWebFrontendContactGetters", "WAWebUISpacing", "WAWebWDSText.react", "WAWebWidFormat", "react", "useWAWebContactValues", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        a = a.contact;
        var b = a.getStatus();
        a = d("useWAWebContactValues").useContactValues(a.id, [d("WAWebContactGetters").getId, d("WAWebFrontendContactGetters").getPhoneNumber]);
        var e = a[0];
        a = a[1];
        b = d("useWAWebModelValues").useModelValues(b, ["status"]);
        b = b.status;
        b = b === "" ? null : j.jsx(c("WAWebChatInfoDrawerBlock.react"), {
            multiline: !0,
            children: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: j.jsx(c("WAWebChatStatus"), {
                    id: e
                })
            })
        });
        var f;
        e.isLid() ? a != null && (f = a) : f = e;
        a = f ? j.jsx(c("WAWebChatInfoDrawerBlock.react"), {
            separator: !0,
            children: j.jsx(d("WAWebCopyPasteSelectable.react").SelectableSpan, {
                dir: "auto",
                selectable: !0,
                children: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                    as: "span",
                    children: d("WAWebWidFormat").widToFormattedUser(f)
                })
            })
        }) : null;
        e = h._("__JHASH__A8Ghn3k0yhi__JHASH__");
        return j.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: d("WAWebUISpacing").uiPadding.bottom0,
            titleTestId: "section-about-and-phone-number",
            title: e,
            children: [b, a]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebSmbUpsellSmbDownloadQrCode.react", ["WAWebFlex.react", "WAWebFrontendConstants", "WAWebQRCode.react", "WAWebThemeContext", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j, k = j || c("react"),
        l = (h || (h = d("react"))).useContext,
        m = {
            code: {
                position: "x1n2onr6",
                $$css: !0
            },
            codeDarkMode: {
                backgroundColor: "x83z2og",
                borderTopStartRadius: "x1npaq5j",
                borderTopEndRadius: "x1c83p5e",
                borderBottomEndRadius: "x1enjb0b",
                borderBottomStartRadius: "x199158v",
                $$css: !0
            }
        },
        n = "https://www.whatsapp.com/business/download",
        o = "#122e31";

    function a() {
        var a = l(d("WAWebThemeContext").ThemeContext),
            b = a.theme;
        return k.jsx(d("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: d("WAWebUISpacing").uiMargin.vert15,
            children: k.jsx(d("WAWebQRCode.react").WAWebQRCode, {
                data: n,
                colorDark: o,
                size: d("WAWebFrontendConstants").QR_EDGE / 2,
                children: function (a) {
                    return k.jsx("div", {
                        ref: a,
                        className: (i || (i = c("stylex")))(b === "dark" && m.codeDarkMode, m.code, d("WAWebUISpacing").uiPadding.all12),
                        children: k.jsx(p, {
                            theme: b
                        })
                    })
                }
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function p() {
        return k.jsx("div", {
            className: "x10l6tqk xwa60dl xtzzx4i xhtitgo x1691je0 x90ne7k xs2sona x87ps6o x11lhmoz",
            children: k.jsxs("svg", {
                width: "100%",
                viewBox: "0 0 64 64",
                xmlns: "http://www.w3.org/2000/svg",
                children: [k.jsx("path", {
                    fill: "#FFF",
                    d: "M6.525 43.936a29.596 29.596 0 0 1-3.039-13.075C3.494 14.568 16.755 1.313 33.05 1.313c7.904.004 15.328 3.082 20.91 8.666 5.581 5.586 8.653 13.01 8.65 20.907-.007 16.294-13.266 29.549-29.558 29.549a29.648 29.648 0 0 1-12.508-2.771L1.391 62.687l5.134-18.751z"
                }), k.jsx("g", {
                    transform: "translate(8 6)",
                    children: k.jsx("path", {
                        d: "M42.6776 42.6779C37.9558 47.3997 31.6777 50.0001 24.9999 50.0001C21.0047 50.0001 17.0541 49.0389 13.5244 47.2141L0.601068 49.3339L2.72832 36.3645C0.941278 32.8647 0 28.9525 0 25.0001C0 18.3223 2.60042 12.0443 7.32229 7.32237C12.0442 2.6005 18.3221 0 24.9999 0C31.6777 0 37.9558 2.6005 42.6776 7.32237C47.3995 12.0443 50 18.3223 50 25.0001C50 31.678 47.3995 37.9558 42.6776 42.6779ZM24.9999 4.33778C13.6067 4.33778 4.33772 13.607 4.33772 25.0001C4.33772 28.4792 5.21935 31.9192 6.8868 34.9487L7.24853 35.6054L5.85915 44.0756L14.2959 42.6918L14.9565 43.0601C18.0107 44.7624 21.4837 45.6622 24.9999 45.6622C36.3932 45.6622 45.6622 36.3933 45.6622 25.0001C45.6622 13.607 36.3932 4.33778 24.9999 4.33778ZM31.1133 24.3614C32.4522 24.9804 34.1536 26.3725 34.1208 29.3117C34.0749 33.4266 31.2191 35.6542 27.2744 35.6542H19.4594H18.3042C17.5079 35.6542 16.8645 35.0053 16.8713 34.2092L17.0344 15.0573C17.041 14.2714 17.6794 13.6377 18.4652 13.6366L27.1493 13.6256C31.4651 13.6256 33.9598 16.039 33.9177 19.8134C33.8903 22.2579 32.2484 23.8355 31.1133 24.3614ZM26.766 17.4622H21.3643L21.3076 22.5361H26.7093C28.5347 22.5361 29.5672 21.5152 29.584 19.9992C29.6009 18.4831 28.5915 17.4622 26.766 17.4622ZM26.9444 26.4035H21.2643L21.2038 31.8178H26.884C28.8333 31.8178 29.7752 30.5802 29.792 29.0952C29.8085 27.6101 28.8939 26.4035 26.9444 26.4035Z",
                        fill: "#123033"
                    })
                })]
            })
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebSmbUpsellSmbAppUpsellModal.react", ["fbt", "WAWebBannerEventWamEvent", "WAWebClickableLink.react", "WAWebConfirmPopup.react", "WAWebEmojiText.react", "WAWebExternalLink.react", "WAWebFbtCommon", "WAWebModalManager", "WAWebSmbUpsellSmbDownloadQrCode.react", "WAWebWamEnumBannerOperations", "WAWebWamEnumBannerTypes", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = "https://www.whatsapp.com/business";

    function a() {
        var a = function () {
                new(d("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                    bannerType: d("WAWebWamEnumBannerTypes").BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                    bannerOperation: d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS
                }).commit(), d("WAWebModalManager").ModalManager.close()
            },
            b = function (a) {
                a.preventDefault(), d("WAWebModalManager").ModalManager.close(), self.setTimeout(function () {
                    return d("WAWebExternalLink.react").openExternalLink(k)
                }, 10)
            };
        return j.jsxs(d("WAWebConfirmPopup.react").ConfirmPopup, {
            title: h._("__JHASH__SI3jJDrdBPB__JHASH__"),
            onOK: a,
            okText: c("WAWebFbtCommon")("Close"),
            children: [j.jsx(c("WAWebSmbUpsellSmbDownloadQrCode.react"), {}), j.jsx("p", {
                children: j.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: h._("__JHASH__VcruoenNDEQ__JHASH__")
                })
            }), j.jsx("br", {}), j.jsxs("p", {
                children: [j.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: h._("__JHASH__G7sHMebXrFX__JHASH__")
                }), "\xa0", j.jsx(c("WAWebClickableLink.react"), {
                    href: k,
                    onClick: b,
                    children: h._("__JHASH__RR1bpeluTQm__JHASH__")
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.SmbAppUpsellModal = a
}), 226);
__d("WAWebSmbUpsellBusinessInfoWithUpsellModal.react", ["fbt", "WAWebBannerEventWamEvent", "WAWebBusinessProfileTypes", "WAWebClickableLink.react", "WAWebConfirmPopup.react", "WAWebConnModel", "WAWebContactGetters", "WAWebEmojiText.react", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFbtCommon", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebSmbUpsellSmbAppUpsellModal.react", "WAWebUISpacing", "WAWebWDSText.react", "WAWebWamEnumBannerOperations", "WAWebWamEnumBannerTypes", "react", "stylex", "useWAWebContactValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l = k || c("react"),
        m = (i || (i = d("react"))).useEffect;

    function a(a) {
        a = a.contact;
        a = d("useWAWebContactValues").useContactValues(a.id, [d("WAWebContactGetters").getVerifiedLevel, d("WAWebContactGetters").getVerifiedName]);
        var b = a[0];
        a = a[1];
        var e = d("WAWebFaqUrl").getBusinessFaqUrl(),
            f = !d("WAWebConnModel").Conn.isSMB;
        m(function () {
            f && new(d("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                bannerType: d("WAWebWamEnumBannerTypes").BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                bannerOperation: d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN
            }).commit()
        }, [f]);
        var g = function () {
                d("WAWebModalManager").ModalManager.close(), f && new(d("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                    bannerType: d("WAWebWamEnumBannerTypes").BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                    bannerOperation: d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS
                }).commit()
            },
            i = function (a) {
                a.preventDefault(), d("WAWebModalManager").ModalManager.close(), self.setTimeout(function () {
                    return d("WAWebExternalLink.react").openExternalLink(e)
                }, 10)
            },
            k = function (a) {
                a.preventDefault(), d("WAWebModalManager").ModalManager.close(), new(d("WAWebBannerEventWamEvent").BannerEventWamEvent)({
                    bannerType: d("WAWebWamEnumBannerTypes").BANNER_TYPES.CROSS_SELL_PROFILE_INTERSTITIAL,
                    bannerOperation: d("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK
                }).commit(), self.setTimeout(function () {
                    return d("WAWebModalManager").ModalManager.open(l.jsx(d("WAWebSmbUpsellSmbAppUpsellModal.react").SmbAppUpsellModal, {}))
                }, 200)
            };
        b = b === d("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH;
        b = b && !d("WAWebMiscGatingUtils").isBlueEducationEnabled() ? h._("__JHASH__IG6GBn3R01z__JHASH__", [h._param("businessName", a)]) : h._("__JHASH__WgXPTXlnJvL__JHASH__");
        return l.jsxs(d("WAWebConfirmPopup.react").ConfirmPopup, {
            title: h._("__JHASH__vYu4obvJ_YY__JHASH__"),
            onOK: g,
            okText: c("WAWebFbtCommon")("OK"),
            children: [l.jsx(d("WAWebEmojiText.react").EmojiText, {
                text: b
            }), "\xa0", l.jsx(c("WAWebClickableLink.react"), {
                href: e,
                onClick: i,
                children: h._("__JHASH__RR1bpeluTQm__JHASH__")
            }), f && l.jsx("div", {
                className: (j || (j = c("stylex")))(d("WAWebUISpacing").uiMargin.top16),
                children: l.jsxs(d("WAWebWDSText.react").WDSTextMuted, {
                    as: "span",
                    children: [h._("__JHASH__Eto71zMhKyk__JHASH__"), l.jsx("br", {}), l.jsx(c("WAWebClickableLink.react"), {
                        onClick: k,
                        className: "x1n68mz9",
                        children: h._("__JHASH__87eTiZKIm8J__JHASH__")
                    })]
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBusinessAccountBanner.react", ["fbt", "WAWebBizBot3pLearnMore.react", "WAWebBotGating", "WAWebBotLearnMore.react", "WAWebContactGetters", "WAWebDrawerBlock.react", "WAWebDrawerSection.react", "WAWebInfoIcon", "WAWebModalManager", "WAWebSmbUpsellBusinessInfoWithUpsellModal.react", "WAWebUISpacing", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            businessAccount: {
                borderTopWidth: "x178xt8z",
                borderTopStyle: "x13fuv20",
                borderTopColor: "x1sdoubt",
                fontSize: "x1f6kntn",
                $$css: !0
            },
            businessTitle: {
                lineHeight: "x1dbl2gt",
                $$css: !0
            },
            bannerSvg: {
                color: "x1n68mz9",
                width: "x1xp8n7a",
                $$css: !0
            }
        };

    function l(a) {
        if (d("WAWebBotGating").isBotEnabled() && d("WAWebContactGetters").getId(a).isBot()) return h._("__JHASH__U-bB6RE49u4__JHASH__");
        return d("WAWebBotGating").isBizBot3pEnabled() && ((a = a.businessProfile) == null ? void 0 : a.isBizBot3p) ? h._("__JHASH__F87PR67mVuh__JHASH__") : h._("__JHASH__JfyuY02R4Dd__JHASH__")
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m(a) {
        var b = a.contact;
        a = a.onClick;
        return j.jsx(c("WAWebDrawerBlock.react"), {
            testid: void 0,
            xstyle: k.businessTitle,
            onClick: a,
            side: j.jsx(d("WAWebInfoIcon").InfoIcon, {
                xstyle: d("WAWebUISpacing").uiMargin.top1,
                iconXstyle: k.bannerSvg,
                displayInline: !0
            }),
            children: l(b)
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.contact;

        function e() {
            var a;
            if (d("WAWebBotGating").isBotEnabled() && d("WAWebContactGetters").getId(b).isBot()) {
                d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebBotLearnMore.react"), {
                    fromInvoke: !1
                }));
                return
            }
            if (d("WAWebBotGating").isBizBot3pEnabled() && ((a = b.businessProfile) == null ? void 0 : a.isBizBot3p)) {
                d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebBizBot3pLearnMore.react"), {}));
                return
            }
            d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebSmbUpsellBusinessInfoWithUpsellModal.react"), {
                contact: b
            }))
        }
        a = j.jsx(m, {
            contact: b,
            onClick: e
        });
        return j.jsx(c("WAWebDrawerSection.react"), {
            xstyle: k.businessAccount,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebChatInfoActionButton.react", ["WAWebRound.react", "WAWebSvgComponentBase", "WAWebUnstyledButton.react", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j;
    b = j || d("react");
    var k = h || (h = c("react")),
        l = b.useCallback,
        m = b.useState,
        n = {
            button: {
                textAlign: "x2b8uid",
                $$css: !0
            },
            label: {
                marginTop: "x1gslohp",
                marginEnd: "x11i5rnm",
                marginBottom: "xat24cr",
                marginStart: "x1mh8g0r",
                fontSize: "x1nxh6w3",
                color: "x1n68mz9",
                $$css: !0
            },
            disabled: {
                opacity: "xyd83as",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.Icon,
            e = a.disabled,
            f = a.iconHeight,
            g = a.iconWidth,
            h = a.label,
            j = a.onClick,
            l = a.testid;
        l = a.xstyle;
        a = o();
        var m = a.isHovered,
            p = a.onMouseEnter;
        a = a.onMouseLeave;
        var q = e === !0;
        b = k.jsx(b, {
            directional: !0,
            color: d("WAWebSvgComponentBase").SvgColorProp.TEAL,
            width: g,
            height: f
        });
        return k.jsxs("div", {
            className: (i || (i = c("stylex")))(n.button, q && n.disabled, l),
            onMouseEnter: p,
            onMouseLeave: a,
            children: [k.jsx(d("WAWebRound.react").Round, {
                inverted: !0,
                onClick: j,
                disabled: e,
                testid: void 0,
                hideBackground: q || !m,
                children: b
            }), k.jsx(c("WAWebUnstyledButton.react"), {
                xstyle: n.label,
                disabled: e,
                testid: void 0,
                onClick: j,
                children: h
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function o() {
        var a = m(!1),
            b = a[0],
            c = a[1];
        a = l(function () {
            c(!0)
        }, []);
        var d = l(function () {
            c(!1)
        }, []);
        return {
            isHovered: b,
            onMouseEnter: a,
            onMouseLeave: d
        }
    }
    g["default"] = a
}), 98);
__d("WAWebForwardFilledIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "forward-filled";

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
        l = 16;
        m = 21;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 21 16",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M12.778 1.31318C12.778 0.590175 13.651 0.228175 14.161 0.739175L20.206 6.79017C20.2813 6.8654 20.341 6.95472 20.3817 7.05304C20.4225 7.15136 20.4435 7.25675 20.4435 7.36317C20.4435 7.4696 20.4225 7.57499 20.3817 7.67331C20.341 7.77163 20.2813 7.86095 20.206 7.93617L14.161 13.9872C14.0476 14.1006 13.9032 14.1779 13.7459 14.2091C13.5886 14.2404 13.4256 14.2243 13.2775 14.1628C13.1294 14.1013 13.0028 13.9973 12.9139 13.8638C12.825 13.7304 12.7777 13.5735 12.778 13.4132V10.6812C7.68197 10.6812 3.94897 12.1362 1.17397 15.2922C0.927967 15.5712 0.471967 15.3342 0.571967 14.9762C2.00197 9.80317 5.49697 4.97218 12.778 3.93118V1.31318Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ForwardFilledIcon = a
}), 98);
__d("WAWebSendRequestPhoneNumberChatAction", ["WALogger", "WATimeUtils", "WAWebAck", "WAWebContactBlockedErrorAction", "WAWebContactGetters", "WAWebMsgKey", "WAWebMsgType", "WAWebSendMsgChatAction", "WAWebUpdateLidMetadataJob", "WAWebUserPrefsMeUser", "WAWebWidFactory", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["requestPhoneNumber should not be called for non lid chat ", ""]);
        h = function () {
            return a
        };
        return a
    }

    function a(a) {
        return i.apply(this, arguments)
    }

    function i() {
        i = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b = a.id.toString();
            if (!a.id.isLid()) {
                d("WALogger").ERROR(h(), b);
                throw c("err")("requestPhoneNumber should not be called for non lid chat")
            }
            b = a.contact;
            if (d("WAWebContactGetters").getIsUser(b) && b.isContactBlocked) throw new(c("WAWebContactBlockedErrorAction"))("request phone number for a blocked contact", b);
            var e = d("WAWebUserPrefsMeUser").getMaybeMeLid();
            if (e == null) return;
            var f = new(c("WAWebMsgKey"))({
                id: yield c("WAWebMsgKey").newId(),
                remote: a.id,
                fromMe: !0
            });
            e = {
                type: d("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER,
                kind: d("WAWebMsgType").MsgKind.RequestPhoneNumber,
                ack: d("WAWebAck").ACK.CLOCK,
                from: e,
                to: a.id,
                id: f,
                local: !0,
                isNewMsg: !0,
                t: d("WATimeUtils").unixTime()
            };
            yield d("WAWebUpdateLidMetadataJob").updateLidMetadataJob([{
                lid: d("WAWebWidFactory").toUserWid(a.id),
                data: {
                    shareOwnPn: b.shareOwnPn,
                    requestedPnTimestamp: d("WATimeUtils").unixTime()
                }
            }]);
            yield d("WAWebSendMsgChatAction").addAndSendMsgToChat(a, e)[1]
        });
        return i.apply(this, arguments)
    }
    g.sendRequestPhoneNumber = a
}), 98);
__d("WAWebRequestPhoneNumberModal.react", ["fbt", "WAWebChatCollection", "WAWebConfirmPopup.react", "WAWebLogRequestPhoneNumber", "WAWebModalManager", "WAWebSendRequestPhoneNumberChatAction", "WAWebStateUtils", "WAWebWamEnumPnhActionType", "WAWebWamEnumPnhChatTypeType", "WAWebWamEnumPnhMessageChatParty", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect;

    function a(a) {
        var b = a.entryPoint,
            c = d("WAWebChatCollection").ChatCollection.getActive();
        l(function () {
            b && d("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(d("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA, d("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ, d("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR, b)
        }, [b]);
        a = function () {
            c && (d("WAWebSendRequestPhoneNumberChatAction").sendRequestPhoneNumber(d("WAWebStateUtils").unproxy(c)), b != null && d("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(d("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA, d("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ, d("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SEND_REQUEST, b)), d("WAWebModalManager").ModalManager.close()
        };
        var e = function () {
                return d("WAWebModalManager").ModalManager.close()
            },
            f = h._("__JHASH__oaT7CmSuQtd__JHASH__"),
            g = h._("__JHASH__ctH4vh2eM3K__JHASH__"),
            i = h._("__JHASH__izoBYdfeCDH__JHASH__"),
            j = h._("__JHASH__19MP4lB3FRT__JHASH__");
        return k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: a,
            okText: i,
            onCancel: e,
            cancelText: j,
            title: f,
            children: g
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebSendContactsModalLoadable", ["fbt", "JSResourceForInteraction", "WAWebLazyLoadedRetriable", "WAWebLoadingModal.react", "asyncToGeneratorRuntime", "react", "react-loadable"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");
    a = c("WAWebLazyLoadedRetriable")(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = (yield c("JSResourceForInteraction")("WAWebSendContactsModal.react").__setRef("WAWebSendContactsModalLoadable").load());
        return a
    }), "SendContactsModal");
    d = c("react-loadable")({
        loader: a,
        loading: function (a) {
            return j.jsx(c("WAWebLoadingModal.react"), {
                title: h._("__JHASH__0FKlgfRZkxG__JHASH__"),
                error: Boolean(a.error)
            })
        }
    });
    g.SendContactsModalLoadable = d
}), 226);
__d("WAWebBusinessActions.react", ["fbt", "WATimeUtils", "WAWebAddUserIcon", "WAWebBizGatingUtils", "WAWebBusinessDescriptionIcon", "WAWebBusinessLogEvents", "WAWebBusinessProfileTypes", "WAWebBusinessProfileUtils", "WAWebChatCollection", "WAWebChatIcon", "WAWebChatInfoActionButton.react", "WAWebChatThreadLogging", "WAWebCmd", "WAWebComposeBoxActions", "WAWebContactEditUtils", "WAWebContactGetters", "WAWebContactManagementGating", "WAWebDialpadSmallIcon", "WAWebDrawerContext", "WAWebDrawerManager", "WAWebFbtCommon", "WAWebFindChatAction", "WAWebFlex.react", "WAWebForwardFilledIcon", "WAWebModalManager", "WAWebNoop", "WAWebProductCatalogContext", "WAWebRequestPhoneNumberModal.react", "WAWebSendContactsModalLoadable", "WAWebShopFilledIcon", "WAWebStateUtils", "WAWebUISpacing", "WAWebWamEnumPnhEntryPointType", "asyncToGeneratorRuntime", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useContext,
        m = {
            actionsRow: {
                marginTop: "x1sy10c2",
                marginEnd: "x1v89cbv",
                marginBottom: "xyorhqc",
                marginStart: "x1r67fr0",
                "@media (min-width: 1300px)_marginStart": "x1khg48b",
                "@media (min-width: 1300px)_marginLeft": null,
                "@media (min-width: 1300px)_marginRight": null,
                "@media (min-width: 1300px)_marginEnd": "x1s4qtws",
                $$css: !0
            }
        };

    function a(a) {
        var e = a.contact,
            f = a.displayRequestPnButton,
            g = a.onProductCatalog;
        a = a.onSaveContact;
        var i = l(d("WAWebDrawerContext").DrawerContext),
            j = d("WAWebProductCatalogContext").getProductCatalogSessionId(i);

        function n() {
            return o.apply(this, arguments)
        }

        function o() {
            o = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var a = (yield d("WAWebFindChatAction").findOrCreateLatestChat(e.id, "businessActions")),
                    b = (yield d("WAWebCmd").Cmd.openChatFromUnread(a));
                if (!b) return;
                d("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                d("WAWebBizGatingUtils").btmThreadsLoggingEnabled() && d("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(a, {
                    handleMultiple: function () {
                        d("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
                            activityType: "profileReplies",
                            ts: d("WATimeUtils").unixTime(),
                            chatId: a.id
                        }])
                    }
                })
            });
            return o.apply(this, arguments)
        }
        var p, q = d("WAWebChatCollection").ChatCollection.getActive();
        if (!(q == null ? void 0 : q.id.equals(e.id))) {
            d("WAWebBusinessLogEvents").logMessageClick(j, (q = e.businessProfile) == null ? void 0 : q.isProfileLinked, !!((q = e.businessProfile) == null ? void 0 : q.coverPhoto));
            p = k.jsx(c("WAWebChatInfoActionButton.react"), {
                xstyle: d("WAWebUISpacing").uiMargin.horiz12,
                Icon: d("WAWebChatIcon").ChatIcon,
                label: c("WAWebFbtCommon")("Message"),
                onClick: function () {
                    return void n()
                },
                testid: void 0
            })
        }
        var r;
        ((q = e.businessProfile) == null ? void 0 : (q = q.profileOptions) == null ? void 0 : q.commerceExperience) === d("WAWebBusinessProfileTypes").CommerceExperienceTypes.CATALOG && (r = k.jsx(c("WAWebChatInfoActionButton.react"), {
            xstyle: d("WAWebUISpacing").uiMargin.horiz12,
            Icon: d("WAWebBusinessDescriptionIcon").BusinessDescriptionIcon,
            label: h._("__JHASH__Uk6UVgyKYUF__JHASH__"),
            onClick: function () {
                var a;
                d("WAWebBusinessLogEvents").logCatalogClick(j, (a = e.businessProfile) == null ? void 0 : a.isProfileLinked, !!((a = e.businessProfile) == null ? void 0 : a.coverPhoto));
                g(d("WAWebProductCatalogContext").getProductCatalogContext(i), "ContactInfo")
            },
            testid: void 0
        }));

        function s() {
            var a;
            d("WAWebBusinessLogEvents").logShopsClick(j, (a = e.businessProfile) == null ? void 0 : a.isProfileLinked, !!((a = e.businessProfile) == null ? void 0 : a.coverPhoto));
            d("WAWebBusinessProfileUtils").goToShop(e.businessProfile)
        }
        var t;
        if (d("WAWebBusinessProfileUtils").hasShop(e.businessProfile)) {
            q = d("WAWebBizGatingUtils").bannedShopsEnabled() && d("WAWebBusinessProfileUtils").isShopBanned(e.businessProfile);
            q || (t = k.jsx(c("WAWebChatInfoActionButton.react"), {
                xstyle: d("WAWebUISpacing").uiMargin.horiz12,
                Icon: d("WAWebShopFilledIcon").ShopFilledIcon,
                label: h._("__JHASH__rwhgXpZEUAM__JHASH__"),
                onClick: s,
                testid: void 0
            }))
        }

        function u() {
            var a;
            d("WAWebBusinessLogEvents").logForwardClick(j, (a = e.businessProfile) == null ? void 0 : a.isProfileLinked, !!((a = e.businessProfile) == null ? void 0 : a.coverPhoto));
            d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebSendContactsModalLoadable").SendContactsModalLoadable, {
                contacts: [d("WAWebStateUtils").unproxy(e)],
                onContactsSent: function (a) {
                    d("WAWebCmd").Cmd.openChatFromUnread(a).then(c("WAWebNoop"))
                }
            }))
        }
        q = !d("WAWebContactGetters").getIsIAS(e) && !d("WAWebContactGetters").getId(e).isBot() && !d("WAWebContactGetters").getIsCAPISupportAccount(e) && k.jsx(c("WAWebChatInfoActionButton.react"), {
            xstyle: d("WAWebUISpacing").uiMargin.horiz12,
            Icon: d("WAWebForwardFilledIcon").ForwardFilledIcon,
            label: h._("__JHASH__v3u_UJh4DOE__JHASH__").toString(),
            onClick: u,
            testid: void 0
        });
        s = h._("__JHASH__sRT3emgPHXp__JHASH__");
        u = h._("__JHASH__6YR_xwPK5lu__JHASH__");
        s = d("WAWebContactGetters").getCanRequestPhoneNumber(e) ? s : u;
        u = f && k.jsx(c("WAWebChatInfoActionButton.react"), {
            Icon: d("WAWebDialpadSmallIcon").DialpadSmallIcon,
            xstyle: d("WAWebUISpacing").uiMargin.horiz12,
            iconWidth: 19,
            label: s,
            disabled: !d("WAWebContactGetters").getCanRequestPhoneNumber(e),
            onClick: function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebRequestPhoneNumberModal.react"), {
                    entryPoint: d("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                }))
            },
            testid: void 0
        });
        f = null;
        d("WAWebContactEditUtils").canSaveAsMyContacts(e.id) && !d("WAWebContactGetters").getIsMyContact(e) && d("WAWebContactManagementGating").contactManagementEnabled() && (f = k.jsx(c("WAWebChatInfoActionButton.react"), {
            Icon: d("WAWebAddUserIcon").AddUserIcon,
            iconWidth: 26,
            label: c("WAWebFbtCommon")("Add"),
            testid: void 0,
            xstyle: [d("WAWebUISpacing").uiMargin.start16, d("WAWebUISpacing").uiMargin.end16],
            disabled: !1,
            onClick: a
        }));
        return k.jsxs(d("WAWebFlex.react").FlexRow, {
            xstyle: m.actionsRow,
            justify: "center",
            children: [u, p, r, t, f, q]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebWamEnumDisclosureAction", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        SCREEN_VIEW: 0,
        CLICK_ON_CONTINUE: 1,
        CANCEL: 2,
        BACK_BUTTON_TOOLBAR: 3,
        BACK_BUTTON_SYSTEM: 4,
        DISMISS: 5,
        DISCLOSURE_INFO_VIEW: 6
    });
    f.DISCLOSURE_ACTION = a
}), 66);
__d("WAWebWamEnumDisclosureContextType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        PREFILL_TEXT: 0,
        EMPTY_PREFILL_TEXT: 1,
        ICEBREAKERS: 2,
        NOT_APPLICABLE: 3
    });
    f.DISCLOSURE_CONTEXT_TYPE = a
}), 66);
__d("WAWebWamEnumDisclosureEntryPointType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        PRE_THREAD: 0,
        ON_THREAD_ENTRY: 1,
        SEND_FROM_THREAD: 2,
        SEND_FROM_THREAD_KEYBOARD: 3,
        ICEBREAKERS: 4,
        THREAD_ATTACHMENT_BAR: 5,
        THREAD_EMOJI_BAR: 6,
        AUDIO_VIDEO_CALL_FROM_THREAD: 7,
        AUDIO_CALL_FROM_THREAD: 8,
        VIDEO_CALL_FROM_THREAD: 9,
        AUDIO_NOTE_FROM_THREAD: 10,
        VIDEO_NOTE_FROM_THREAD: 11,
        CAMERA_MEDIA_SELECTION: 12,
        CALL_FROM_PROFILE: 13,
        OVERFLOW_SEND_ORDER: 14,
        MESSAGE_FROM_PROFILE: 15,
        VIDEO_CALL_FROM_PROFILE: 16,
        CALL_FROM_BUSINESS_DETAILS_CARD: 17,
        TEXT_ENTRY_FROM_THREAD: 18,
        VIEW_CATALOG_FROM_THREAD: 19,
        VIEW_CATALOG_FROM_PROFILE: 20
    });
    f.DISCLOSURE_ENTRY_POINT_TYPE = a
}), 66);
__d("WAWebWamEnumDisclosureType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        NON_BLOCKING: 0,
        BLOCKING: 1,
        INFO: 2,
        IN_THREAD_BLOCKING: 3,
        IN_THREAD_BLOCKING_WITH_BACK: 4
    });
    f.DISCLOSURE_TYPE = a
}), 66);
__d("WAWebCtwaConsumerDisclosureWamEvent", ["WAWebWamCodegenUtils", "WAWebWamEnumDisclosureAction", "WAWebWamEnumDisclosureContextType", "WAWebWamEnumDisclosureEntryPointType", "WAWebWamEnumDisclosureType"], (function (a, b, c, d, e, f, g) {
    a = d("WAWebWamCodegenUtils").defineEvents({
        CtwaConsumerDisclosure: [4406, {
                ctwaConsumerDisclosureVersion: [3, d("WAWebWamCodegenUtils").TYPES.INTEGER],
                disclosureAction: [1, d("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION],
                disclosureContext: [5, d("WAWebWamEnumDisclosureContextType").DISCLOSURE_CONTEXT_TYPE],
                disclosureEntryPoint: [4, d("WAWebWamEnumDisclosureEntryPointType").DISCLOSURE_ENTRY_POINT_TYPE],
                disclosureType: [2, d("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE]
            },
            [1, 1, 1], "private", 0
        ]
    }, {
        CtwaConsumerDisclosure: []
    });
    g.CtwaConsumerDisclosureWamEvent = a
}), 98);
__d("WAWebSingleChevronInCircleIllustrationIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "single-chevron-in-circle-illustration";

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
        l = 88;
        m = 88;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 88 88",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M46.9317 43.9827L38.2672 52.6558C36.9607 53.9623 36.9942 56.1063 38.2672 57.4128C39.5737 58.7192 41.6842 58.7192 42.9907 57.4128L54.0337 46.3612C55.3402 45.0547 55.3402 42.9442 54.0337 41.6377L43.0039 30.6128C41.6974 29.3063 39.5869 29.3063 38.2804 30.6128C36.9739 31.9193 36.9739 34.0298 38.2804 35.3363L46.9317 43.9827Z",
                    fill: "#25D366"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M44 10.5C62.492 10.5 77.5 25.508 77.5 44C77.5 62.492 62.492 77.5 44 77.5C25.508 77.5 10.5 62.492 10.5 44C10.5 25.508 25.508 10.5 44 10.5ZM44 17.2C29.193 17.2 17.2 29.193 17.2 44C17.2 58.807 29.193 70.8 44 70.8C58.807 70.8 70.8 58.807 70.8 44C70.8 29.193 58.807 17.2 44 17.2Z",
                    fill: "#25D366"
                }), j.jsx("path", {
                    d: "M46.9317 43.9827L38.2672 52.6558C36.9607 53.9623 36.9942 56.1063 38.2672 57.4128C39.5737 58.7192 41.6842 58.7192 42.9907 57.4128L54.0337 46.3612C55.3402 45.0547 55.3402 42.9442 54.0337 41.6377L43.0039 30.6128C41.6974 29.3063 39.5869 29.3063 38.2804 30.6128C36.9739 31.9193 36.9739 34.0298 38.2804 35.3363L46.9317 43.9827Z",
                    stroke: "#111B21",
                    strokeWidth: 1.46591
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M44 10.5C62.492 10.5 77.5 25.508 77.5 44C77.5 62.492 62.492 77.5 44 77.5C25.508 77.5 10.5 62.492 10.5 44C10.5 25.508 25.508 10.5 44 10.5ZM44 17.2C29.193 17.2 17.2 29.193 17.2 44C17.2 58.807 29.193 70.8 44 70.8C58.807 70.8 70.8 58.807 70.8 44C70.8 29.193 58.807 17.2 44 17.2Z",
                    stroke: "#111B21",
                    strokeWidth: 1.46591
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.SingleChevronInCircleIllustrationIcon = a
}), 98);
__d("WAWebConsumerTransparencyModalDialog.react", ["fbt", "WAWebBusinessDataSharingIcon", "WAWebCommonCTWAConsumerTransparency", "WAWebConfirmPopup.react", "WAWebCtwaConsumerDisclosureWamEvent", "WAWebDoubleChevronIcon", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFlex.react", "WAWebModal.react", "WAWebModalManager", "WAWebSettingsSecurityIcon", "WAWebSingleChevronInCircleIcon", "WAWebSingleChevronInCircleIllustrationIcon", "WAWebText_DONOTUSE.react", "WAWebUISpacing", "WAWebVisibilityOffIcon", "WAWebVisibilityOffOutlineIcon", "WAWebWamEnumDisclosureAction", "WAWebWamEnumDisclosureType", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect,
        m = {
            fullWidth: {
                width: "xh8yej3",
                $$css: !0
            },
            centeredText: {
                textAlign: "x2b8uid",
                $$css: !0
            },
            bulletIconColor: {
                color: "x86x9uj",
                $$css: !0
            }
        };

    function a() {
        d("WAWebModalManager").ModalManager.open(k.jsx(o, {}))
    }

    function n(a) {
        a = a.shouldShowUpdatedDesign;
        var b = a ? k.jsx(d("WAWebSingleChevronInCircleIcon").SingleChevronInCircleIcon, {
                height: 24,
                width: 24,
                xstyle: m.bulletIconColor
            }) : k.jsx(d("WAWebBusinessDataSharingIcon").BusinessDataSharingIcon, {
                height: 24,
                width: 24,
                xstyle: m.bulletIconColor
            }),
            c = a ? k.jsx(d("WAWebVisibilityOffOutlineIcon").VisibilityOffOutlineIcon, {
                height: 24,
                width: 24,
                xstyle: m.bulletIconColor
            }) : k.jsx(d("WAWebVisibilityOffIcon").VisibilityOffIcon, {
                height: 24,
                width: 24,
                xstyle: m.bulletIconColor
            }),
            e = a ? k.jsx(d("WAWebSingleChevronInCircleIllustrationIcon").SingleChevronInCircleIllustrationIcon, {
                width: 88,
                height: 88
            }) : k.jsx("div", {
                className: "xdch9hw x1bqrtec xj35x94 x19swzb4 x14yjl9h xudhj91 x18nykt9 xww2gxu x78zum5 xl56j7k x6s0dn4",
                children: k.jsx(d("WAWebDoubleChevronIcon").DoubleChevronIcon, {
                    width: 66,
                    height: 66
                })
            });
        return k.jsxs(d("WAWebFlex.react").FlexColumn, {
            children: [k.jsx(d("WAWebFlex.react").FlexRow, {
                justify: "center",
                xstyle: [m.fullWidth, a && d("WAWebUISpacing").uiMargin.top8],
                children: e
            }), k.jsx(d("WAWebText_DONOTUSE.react").TextDiv, {
                size: a ? "20" : "24",
                color: "dark",
                weight: "medium",
                xstyle: [!a && m.centeredText, a ? d("WAWebUISpacing").uiMargin.top12 : d("WAWebUISpacing").uiMargin.top36],
                children: "About chats that start from Facebook or Instagram ads"
            }), k.jsx(d("WAWebText_DONOTUSE.react").TextDiv, {
                size: "16",
                weight: "normal",
                color: "dark",
                xstyle: [!a && m.centeredText, d("WAWebUISpacing").uiMargin.top16],
                children: h._("__JHASH__AXd_Vn-xD1J__JHASH__", [h._implicitParam("=m2", k.jsx(d("WAWebExternalLink.react").ExternalLink, {
                    href: d("WAWebFaqUrl").getConsumerTransparencyHCAUrl(),
                    children: h._("__JHASH__2-XbSOUiZt8__JHASH__")
                }))])
            }), k.jsxs(d("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                xstyle: d("WAWebUISpacing").uiMargin.top36,
                children: [c, k.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "13",
                    color: "dark",
                    xstyle: d("WAWebUISpacing").uiMargin.start24,
                    children: h._("__JHASH__tDTvahrNANm__JHASH__")
                })]
            }), k.jsxs(d("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                xstyle: d("WAWebUISpacing").uiMargin.top20,
                children: [b, k.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "13",
                    color: "dark",
                    xstyle: d("WAWebUISpacing").uiMargin.start24,
                    children: a ? h._("__JHASH__m1T8N5Zh3r-__JHASH__") : h._("__JHASH__7644d30Cejn__JHASH__")
                })]
            }), k.jsxs(d("WAWebFlex.react").FlexRow, {
                justify: "center",
                align: "center",
                xstyle: d("WAWebUISpacing").uiMargin.top20,
                children: [k.jsx(d("WAWebSettingsSecurityIcon").SettingsSecurityIcon, {
                    height: 24,
                    width: 24,
                    xstyle: m.bulletIconColor
                }), k.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "13",
                    color: "dark",
                    xstyle: d("WAWebUISpacing").uiMargin.start24,
                    children: h._("__JHASH__qPASiqLBIUu__JHASH__")
                })]
            })]
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o() {
        var a = d("WAWebCommonCTWAConsumerTransparency").shouldShowUpdatedConsumerDisclosure();
        l(function () {
            new(d("WAWebCtwaConsumerDisclosureWamEvent").CtwaConsumerDisclosureWamEvent)({
                ctwaConsumerDisclosureVersion: 1,
                disclosureAction: d("WAWebWamEnumDisclosureAction").DISCLOSURE_ACTION.SCREEN_VIEW,
                disclosureType: d("WAWebWamEnumDisclosureType").DISCLOSURE_TYPE.INFO
            }).commit()
        }, []);
        var b = function () {
            return d("WAWebModalManager").ModalManager.close()
        };
        return k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            testid: void 0,
            type: a ? d("WAWebModal.react").ModalTheme.UpdatedDataSharing : d("WAWebModal.react").ModalTheme.DataSharing,
            onOK: b,
            okText: h._("__JHASH__kfjEH-x6lnU__JHASH__"),
            onOverlayClick: b,
            children: k.jsx(n, {
                shouldShowUpdatedDesign: a
            })
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.showConsumerTransparencyModalDialog = a;
    g.ConsumerTransparencyModalDialog = o
}), 226);
__d("WAWebBusinessContactDisclosureSection", ["fbt", "WAWebChevronIcon", "WAWebCommonCTWAConsumerTransparency", "WAWebConsumerTransparencyModalDialog.react", "WAWebDoubleChevronIcon", "WAWebDrawerBlock.react", "WAWebDrawerSection.react", "WAWebFlex.react", "WAWebUISpacing", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            businessAccount: {
                fontSize: "x1jchvi3",
                $$css: !0
            },
            iconColour: {
                color: "xht95ry",
                $$css: !0
            }
        };

    function a(a) {
        a = a.chat;
        if (!d("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(a)) return null;
        return d("WAWebCommonCTWAConsumerTransparency").shouldShowUpdatedConsumerDisclosure() ? null : j.jsx(c("WAWebDrawerSection.react"), {
            xstyle: [k.businessAccount, d("WAWebUISpacing").uiMargin.top10],
            children: j.jsx(c("WAWebDrawerBlock.react"), {
                testid: void 0,
                onClick: d("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog,
                side: j.jsx(d("WAWebChevronIcon").ChevronIcon, {
                    height: 21,
                    xstyle: k.iconColour
                }),
                children: j.jsxs(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    children: [j.jsx(d("WAWebDoubleChevronIcon").DoubleChevronIcon, {
                        height: 24,
                        width: 24,
                        xstyle: [k.iconColour, d("WAWebUISpacing").uiMargin.end20]
                    }), h._("__JHASH__8KdUMgOhOA-__JHASH__")]
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBusinessHours.react", ["fbt", "WAWebBusinessLogEvents", "WAWebBusinessProfileUtils", "WAWebChevronCustomIcons", "WAWebDrawerContext", "WAWebEmojiText.react", "WAWebProductCatalogContext", "WAWebSmbUtils", "WAWebUISpacing", "WAWebUnstyledButton.react", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useContext,
        n = b.useState,
        o = {
            businessHours: {
                display: "x1lliihq",
                width: "xh8yej3",
                textAlign: "x1yc453h",
                $$css: !0
            },
            businessHoursChevron: {
                display: "x1n9xxwz",
                color: "xt16idv",
                verticalAlign: "x16dsc37",
                $$css: !0
            },
            businessHoursHours: {
                display: "x1n9xxwz",
                width: "xh8yej3",
                lineHeight: "x1fc57z9",
                textAlign: "xp4054r",
                whiteSpace: "x126k92a",
                verticalAlign: "x16dsc37",
                $$css: !0
            },
            businessHoursRow: {
                display: "xf5m44m",
                fontSize: "x1f6kntn",
                color: "x1anpt5t",
                $$css: !0
            },
            businessHoursDay: {
                display: "x1n9xxwz",
                whiteSpace: "xuxw1ft",
                verticalAlign: "x16dsc37",
                $$css: !0
            },
            firstRow: {
                fontSize: "x1jchvi3",
                color: "xy9n6vp",
                $$css: !0
            },
            flipSvg: {
                transform: "xtjevij",
                transformOrigin: "x1bndym7",
                $$css: !0
            },
            dayIsOpen: {
                fontWeight: "xk50ysn",
                color: "x16yd4ao",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.businessHours,
            e = a.isProfileLinked,
            f = a.hasCoverPhoto,
            g = d("WAWebProductCatalogContext").getProductCatalogSessionId(m(d("WAWebDrawerContext").DrawerContext)),
            i = d("WAWebBusinessProfileUtils").getBusinessOpenState(b);
        a = n(!0);
        var j = a[0],
            k = a[1];
        if (b == null) return null;
        a = d("WAWebSmbUtils").getBusinessHours(b);
        b = a.map(function (a) {
            var b = a.day,
                c = a.hours;
            a = a.first;
            var e = b;
            c = c;
            var f = !1;
            if (a) switch (i.status) {
                case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_24H:
                    e = h._("__JHASH__9JHv2MJRIGc__JHASH__");
                    c = h._("__JHASH__mLVS1QrzI2k__JHASH__");
                    f = !0;
                    break;
                case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                    e = h._("__JHASH__9JHv2MJRIGc__JHASH__");
                    c = h._("__JHASH__pG-wDY8N6pa__JHASH__");
                    f = !0;
                    break;
                case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN:
                    e = h._("__JHASH__9JHv2MJRIGc__JHASH__");
                    f = !0;
                    break;
                case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                    c = h._("__JHASH__UAmb-1u2vgf__JHASH__");
                    break
            }
            return !a && j ? null : l.jsx(p, {
                day: e,
                dayIsOpen: f,
                hours: c,
                first: a,
                collapsed: j
            }, b)
        });
        return l.jsx(c("WAWebUnstyledButton.react"), {
            xstyle: o.businessHours,
            onClick: function () {
                d("WAWebBusinessLogEvents").logHoursClick(g, e, !!f), k(!j)
            },
            testid: void 0,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function p(a) {
        var b = a.collapsed,
            e = a.day,
            f = a.dayIsOpen,
            g = a.first;
        a = a.hours;
        return g ? l.jsxs("div", {
            "data-testid": void 0,
            className: (j || (j = c("stylex")))(o.businessHoursRow, g && o.firstRow),
            children: [l.jsx("div", {
                className: j(o.businessHoursDay, d("WAWebUISpacing").uiPadding.end15, f && o.dayIsOpen),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: e
                })
            }), l.jsx("div", {
                className: j(o.businessHoursHours, d("WAWebUISpacing").uiPadding.end5),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: a
                })
            }), l.jsx("div", {
                className: j(o.businessHoursChevron, d("WAWebUISpacing").uiPadding.top4, d("WAWebUISpacing").uiPadding.start4),
                role: "button",
                children: l.jsx(d("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
                    xstyle: !b && o.flipSvg,
                    displayInline: !0,
                    height: 24
                })
            })]
        }) : l.jsxs("div", {
            "data-testid": void 0,
            className: "xf5m44m x1f6kntn x1anpt5t",
            children: [l.jsx("div", {
                className: (j || (j = c("stylex")))(o.businessHoursDay, d("WAWebUISpacing").uiPadding.end15, d("WAWebUISpacing").uiPadding.top8),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: e
                })
            }), l.jsx("div", {
                className: j(o.businessHoursHours, d("WAWebUISpacing").uiPadding.end5, d("WAWebUISpacing").uiPadding.top8),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: a
                })
            })]
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBusinessInfo.react", ["WAWebBusinessHours.react", "WAWebBusinessLogEvents", "WAWebChatInfoDrawerSection.react", "WAWebConstantsDeprecated", "WAWebDrawerContext", "WAWebEmojiText.react", "WAWebExpandableText.react", "WAWebExternalLink.react", "WAWebMap.react", "WAWebProductCatalogContext", "WAWebSupportChatStrings", "WAWebUISpacing", "WAWebURLUtils", "react", "stylex", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j, k = j || c("react"),
        l = (h || (h = d("react"))).useContext,
        m = 590,
        n = 132,
        o = {
            section: {
                fontSize: "x1jchvi3",
                lineHeight: "xdod15v",
                color: "xzwifym",
                $$css: !0
            },
            sectionLink: {
                color: "xbiwxsu",
                $$css: !0
            },
            mapContainer: {
                height: "x1h5wmu3",
                $$css: !0
            },
            map: {
                position: "x1n2onr6",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.businessProfile;
        a = a.showDescription;
        a = a === void 0 ? !0 : a;
        var e = d("useWAWebModelValues").useModelValues(b, ["description", "address", "latitude", "longitude", "website", "email", "businessHours", "isProfileLinked", "coverPhoto"]),
            f = e.description,
            g = e.address,
            h = e.latitude,
            j = e.longitude,
            p = e.website,
            q = e.email,
            r = e.businessHours,
            s = e.isProfileLinked,
            t = e.coverPhoto;
        e = l(d("WAWebDrawerContext").DrawerContext);
        var u = d("WAWebProductCatalogContext").getProductCatalogSessionId(e),
            v = f;
        b.id.isCAPISupportAccount() && (v = d("WAWebSupportChatStrings").SupportChatDescription().toString());
        e = [];
        a && v != null && e.push(k.jsx("div", {
            className: "x1jchvi3 xdod15v xzwifym",
            children: k.jsx(d("WAWebExpandableText.react").ExpandableText, {
                text: v,
                textLimit: c("WAWebConstantsDeprecated").BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                children: function (a) {
                    a = a.textLimit;
                    return k.jsx(d("WAWebEmojiText.react").EmojiText, {
                        className: "x1o2sk6j",
                        selectable: !0,
                        direction: "auto",
                        text: v,
                        textLimit: a,
                        ellipsify: !0,
                        multiline: !0,
                        inferLinesDirection: !0
                    })
                }
            })
        }));
        r != null && e.push(k.jsx("div", {
            className: "x1jchvi3 xdod15v xzwifym",
            children: k.jsx(c("WAWebBusinessHours.react"), {
                businessHours: r,
                isProfileLinked: s,
                hasCoverPhoto: !!t
            })
        }));
        g != null && e.push(k.jsx("div", {
            className: "x1jchvi3 xdod15v xzwifym",
            children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                selectable: !0,
                direction: "auto",
                text: g
            })
        }));
        h != null && j != null && e.push(k.jsx("div", {
            className: (i || (i = c("stylex")))(o.section, o.map, d("WAWebUISpacing").uiMargin.bottom8, o.mapContainer),
            children: k.jsx(c("WAWebMap.react"), {
                lat: h,
                lng: j,
                name: g || "",
                width: m,
                height: n,
                onClick: function () {
                    return d("WAWebBusinessLogEvents").logLocationClick(u, s, !!t)
                },
                testid: void 0
            })
        }));
        q != null && e.push(k.jsx("div", {
            className: "x1jchvi3 xdod15v xzwifym",
            children: k.jsx(d("WAWebExternalLink.react").ExternalLink, {
                xstyle: o.sectionLink,
                href: "mailto:" + q,
                onClick: function () {
                    return d("WAWebBusinessLogEvents").logEmailClick(u, s, !!t)
                },
                testid: void 0,
                children: q
            })
        }));
        p != null && p.length > 0 && e.push(k.jsx("div", {
            className: "x1jchvi3 xdod15v xzwifym",
            children: p.map(function (a) {
                return k.jsx("div", {
                    children: k.jsx(d("WAWebExternalLink.react").ExternalLink, {
                        xstyle: o.sectionLink,
                        href: c("WAWebURLUtils").toMaliciousSiteRedirect(a),
                        onClick: function () {
                            return d("WAWebBusinessLogEvents").logWebsiteClick(u, s, !!t)
                        },
                        testid: void 0,
                        children: a
                    })
                }, a)
            })
        }));
        return e.length === 0 ? null : k.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: d("WAWebUISpacing").uiPadding.vert16,
            children: e.map(function (a, b) {
                return k.jsx("div", {
                    className: (i || (i = c("stylex")))(b !== 0 && d("WAWebUISpacing").uiMargin.top24),
                    children: a
                }, b)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebBusinessName.react", ["fbt", "WAWebABProps", "WAWebAiSignalIcon", "WAWebBotFrontendUtils", "WAWebBotGating", "WAWebBotProfileGetters", "WAWebBusinessProfileTypes", "WAWebCheckmarkInfoModal.react", "WAWebCheckmarkInfoModalLogEvents", "WAWebContactGetters", "WAWebEmojiText.react", "WAWebExternalLink.react", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebName.react", "WAWebSupportChatStrings", "WAWebUISpacing", "WAWebUseBotProfileValues", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            subtitle: {
                color: "xyj2c9f",
                fontSize: "x1jchvi3",
                lineHeight: "x1u7k74",
                $$css: !0
            },
            botSubtitleDivider: {
                fontWeight: "x117nqv4",
                lineHeight: "x1u7k74",
                color: "xzwifym",
                $$css: !0
            },
            botIcon: {
                color: "xhgddhk",
                $$css: !0
            },
            title: {
                fontSize: "xlm9qay",
                fontWeight: "x1s688f",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.contact;
        a = a.businessProfile;
        var e = d("WAWebBotGating").isBizBot3pEnabled() && a.isBizBot3p,
            f = d("WAWebUseBotProfileValues").useOptionalBotProfileValues(b.id, [d("WAWebBotProfileGetters").getIsMetaCreated, d("WAWebBotProfileGetters").getCreatorName, d("WAWebBotProfileGetters").getCreatorProfileUrl, d("WAWebBotProfileGetters").getIsDefault]),
            g = f[0],
            i = f[1],
            n = f[2];
        f = f[3];
        var o, p, q, r = function () {
            if (!d("WAWebMiscGatingUtils").isBlueEducationEnabled()) return;
            d("WAWebCheckmarkInfoModalLogEvents").logClickProfileBadge(b);
            d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebCheckmarkInfoModal.react"), {}))
        };
        a.customUrl != null && (q = k.jsx("div", {
            className: (j || (j = c("stylex")))([l.subtitle, d("WAWebUISpacing").uiMargin.bottom4]),
            children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                text: a.customUrl,
                direction: "auto",
                titlify: !0,
                breakWord: !0,
                inlineblock: !0
            })
        }));
        a = d("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary(b);
        var s = d("WAWebContactGetters").getShowBusinessCheckmarkAsSecondary(b);
        if (!d("WAWebContactGetters").getIsMe(b)) {
            b.verifiedLevel === d("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && d("WAWebABProps").getABPropConfigValue("lift_me_up_m2") ? o = k.jsx(d("WAWebName.react").Name, {
                contact: b,
                showBusinessCheckmark: !0,
                onClick: a ? r : null,
                makeCheckmarkClickable: a,
                elevatedLiftMeUpEnabled: d("WAWebABProps").getABPropConfigValue("lift_me_up_m2"),
                checkmarkLarge: !0,
                useVerifiedName: b.verifiedLevel === d("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH,
                breakWord: !0,
                selectable: !0
            }) : o = k.jsx(d("WAWebName.react").Name, {
                contact: b,
                showBusinessCheckmark: a,
                onClick: a ? r : null,
                makeCheckmarkClickable: a,
                checkmarkLarge: !0,
                breakWord: !0,
                selectable: !0
            });
            if (d("WAWebContactGetters").getIsIAS(b)) p = k.jsx("div", {
                className: "xyj2c9f x1jchvi3 x1u7k74",
                children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: h._("__JHASH__OKZx0jU2OAB__JHASH__"),
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                })
            });
            else if (d("WAWebContactGetters").getId(b).isBot() || e) {
                a = d("WAWebContactGetters").getShowBiz3pBotVerifiedNameAsSecondary(b);
                e = h._("__JHASH__nFlP-FAxMNc__JHASH__");
                var t = d("WAWebContactGetters").getId(b).isBot() ? k.jsx(d("WAWebAiSignalIcon").AiSignalIcon, {
                    width: 15,
                    height: 15,
                    xstyle: [d("WAWebUISpacing").uiMargin.top2, d("WAWebUISpacing").uiMargin.start2, l.botIcon]
                }) : null;
                if (f) e = d("WAWebBotFrontendUtils").metaAiLlamaVersionTitleFbs(), t = null;
                else if (d("WAWebBotGating").isUgcBotEnabled()) {
                    e = (f = m(g, i, n)) != null ? f : e;
                    t = null
                }
                p = k.jsxs("div", {
                    className: "xhgddhk x1jchvi3 x1u7k74 x78zum5 xl56j7k x1sdyfia",
                    children: [a && k.jsxs(k.Fragment, {
                        children: [k.jsx(d("WAWebName.react").Name, {
                            contact: b,
                            showBusinessCheckmark: s,
                            useVerifiedName: !0,
                            breakWord: !0,
                            selectable: !0
                        }), k.jsx("span", {
                            className: (j || (j = c("stylex")))(l.botSubtitleDivider, s && d("WAWebUISpacing").uiMargin.end8, !s && d("WAWebUISpacing").uiMargin.horiz8),
                            children: "\xb7"
                        })]
                    }), k.jsxs("div", {
                        className: "xhgddhk x1jchvi3 x1u7k74 x78zum5 xl56j7k x1sdyfia",
                        children: [e, t]
                    })]
                })
            } else if (d("WAWebContactGetters").getIsCAPISupportAccount(b)) p = k.jsx("div", {
                className: "xyj2c9f x1jchvi3 x1u7k74",
                children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: d("WAWebSupportChatStrings").SupportChatSubtitle(),
                    direction: "auto",
                    ellipsify: !0,
                    titlify: !0,
                    breakWord: !0,
                    selectable: !0
                })
            });
            else if (!!b.name && b.name !== b.verifiedName) {
                g = b.verifiedLevel === d("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH && d("WAWebABProps").getABPropConfigValue("lift_me_up_m2");
                g ? p = k.jsx(d("WAWebName.react").Name, {
                    contact: b,
                    showBusinessCheckmark: !g,
                    onClick: s ? r : null,
                    makeCheckmarkClickable: !g,
                    useVerifiedName: !g,
                    breakWord: !0,
                    selectable: !0
                }) : p = k.jsx(d("WAWebName.react").Name, {
                    contact: b,
                    showBusinessCheckmark: s,
                    onClick: s ? r : null,
                    makeCheckmarkClickable: s,
                    useVerifiedName: !0,
                    breakWord: !0,
                    selectable: !0
                })
            }
        } else o = k.jsx(d("WAWebName.react").Name, {
            contact: b,
            showMessageYourselfName: !0,
            useVerifiedName: !0,
            breakWord: !0,
            selectable: !0
        }), b.name !== b.verifiedName && (p = k.jsx(d("WAWebName.react").Name, {
            contact: b,
            selectable: !0
        }));
        return k.jsxs("div", {
            className: (j || (j = c("stylex")))(d("WAWebUISpacing").uiMargin.bottom6),
            children: [k.jsx("div", {
                className: j(l.title, d("WAWebUISpacing").uiMargin.bottom8),
                children: o
            }), p, q]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a, b, c) {
        if (a === !0) return h._("__JHASH__rf0qT35ZkH1__JHASH__");
        return b != null ? h._("__JHASH__DBcAotMkBmL__JHASH__", [h._param("Creator name", c != null ? k.jsx(d("WAWebExternalLink.react").ExternalLink, {
            href: c,
            children: b
        }) : b)]) : null
    }
    g["default"] = a
}), 226);
__d("WAWebBusinessOpenHours.react", ["fbt", "DOMPurify", "WAWebBusinessProfileUtils", "WAWebL10N", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            openStatus: {
                color: "x1anpt5t",
                fontSize: "x1f6kntn",
                $$css: !0
            }
        };

    function a(a) {
        a = a.hours;
        a = d("WAWebBusinessProfileUtils").getBusinessOpenState(a);
        a = n(a);
        if (a == null) return null;
        a = c("DOMPurify").sanitize(a.toString());
        return k.jsx("div", {
            className: (j || (j = c("stylex")))([l.openStatus, d("WAWebUISpacing").uiMargin.bottom5]),
            dangerouslySetInnerHTML: {
                __html: a
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a) {
        return a == null ? "" : a.toLocaleTimeString(c("WAWebL10N").getNormalizedLocale(), {
            hour: "numeric",
            minute: "2-digit"
        })
    }

    function n(a) {
        switch (a.status) {
            case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_24H:
                return h._("__JHASH__9jNLlTamhd9__JHASH__", [h._param("open", '<span class="x16yd4ao">' + h._("__JHASH__Bp6UHPcLA3j__JHASH__").toString() + "</span>")]);
            case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN_APPOINTMENT:
                return h._("__JHASH__wsNG7K_Wfif__JHASH__", [h._param("open", '<span class="x16yd4ao">' + h._("__JHASH__Bp6UHPcLA3j__JHASH__").toString() + "</span>")]);
            case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.OPEN:
                if (a.openUntil && a.additionalOpen && a.additionalClose) return h._("__JHASH__EMZ2U15bUG7__JHASH__", [h._param("open", '<span class="x16yd4ao">' + h._("__JHASH__Bp6UHPcLA3j__JHASH__").toString() + "</span>"), h._param("time", m(a.openUntil)), h._param("additionalOpenTime", m(a.additionalOpen)), h._param("additionalCloseTime", m(a.additionalClose))]);
                else if (a.openUntil) return h._("__JHASH__E9hD8vt22hc__JHASH__", [h._param("open", '<span class="x16yd4ao">' + h._("__JHASH__Bp6UHPcLA3j__JHASH__").toString() + "</span>"), h._param("time", m(a.openUntil))]);
                break;
            case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED:
                return a.opensAt ? h._("__JHASH__EM-I3r8gIfX__JHASH__", [h._param("closed", '<span class="x1sr8853">' + h._("__JHASH__rqE17sp6BLV__JHASH__").toString() + "</span>"), h._param("time", m(a.opensAt))]) : '<span class="x1sr8853">' + h._("__JHASH__rqE17sp6BLV__JHASH__").toString() + "</span>";
            case d("WAWebBusinessProfileUtils").BUSINESS_OPEN_STATUS.CLOSED_TODAY:
                return '<span class="x1sr8853">' + h._("__JHASH__nYEcKIgzL85__JHASH__").toString() + "</span>"
        }
        return null
    }
    g.BusinessOpenHours = a
}), 226);
__d("WAWebBusinessProfile.react", ["fbt", "WAWebBusinessAddressIcon", "WAWebBusinessCategoryIcon", "WAWebBusinessDescriptionIcon", "WAWebBusinessEmailIcon", "WAWebBusinessHoursIcon", "WAWebBusinessProfileTypes", "WAWebBusinessWebsiteIcon", "WAWebChevronCustomIcons", "WAWebConstantsDeprecated", "WAWebContactGetters", "WAWebDrawerBlock.react", "WAWebDrawerSection.react", "WAWebEmojiText.react", "WAWebExpandableText.react", "WAWebExternalLink.react", "WAWebFbtIntlList", "WAWebInfoIcon", "WAWebMap.react", "WAWebMapUtils", "WAWebModalManager", "WAWebSmbUpsellBusinessInfoWithUpsellModal.react", "WAWebSmbUtils", "WAWebSpinner.react", "WAWebUISpacing", "WAWebViewBusinessProfileWamEvent", "WAWebWamEnumViewBusinessProfileAction", "react", "stylex", "useWAWebContactValues", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useEffect,
        n = b.useState,
        o = {
            dataRow: {
                display: "x78zum5",
                alignItems: "x1cy8zhl",
                $$css: !0
            },
            flipSvg: {
                transform: "xtjevij",
                transformOrigin: "x1bndym7",
                $$css: !0
            },
            infoIcon: {
                color: "x1n68mz9",
                $$css: !0
            },
            contactBusinessInfoSpinner: {
                display: "x78zum5",
                justifyContent: "xl56j7k",
                $$css: !0
            },
            businessHoursChevron: {
                display: "x1n9xxwz",
                color: "xt16idv",
                verticalAlign: "x16dsc37",
                $$css: !0
            },
            businessHoursDay: {
                display: "x1n9xxwz",
                paddingEnd: "x1i4ejaq",
                whiteSpace: "xuxw1ft",
                verticalAlign: "x16dsc37",
                $$css: !0
            },
            businessHoursHours: {
                display: "x1n9xxwz",
                width: "xh8yej3",
                whiteSpace: "x126k92a",
                verticalAlign: "x16dsc37",
                $$css: !0
            },
            businessMap: {
                position: "x1n2onr6",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            },
            dataRowText: {
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                fontSize: "x1f6kntn",
                lineHeight: "x1fc57z9",
                $$css: !0
            }
        },
        p = 565,
        q = 150;

    function r(a) {
        var b = a.contact;
        a = b.verifiedLevel === d("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ? h._("__JHASH__yRdfYbCFF7K__JHASH__") : h._("__JHASH__cxWZu-nwhpW__JHASH__");
        return l.jsx(c("WAWebDrawerBlock.react"), {
            testid: void 0,
            onClick: function () {
                return d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebSmbUpsellBusinessInfoWithUpsellModal.react"), {
                    contact: b
                }))
            },
            side: l.jsx(d("WAWebInfoIcon").InfoIcon, {
                xstyle: o.infoIcon,
                displayInline: !0
            }),
            children: a
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function s(a) {
        a = a.businessHours;
        var b = n(!0),
            c = b[0],
            e = b[1];
        b = d("WAWebSmbUtils").getBusinessHours(a);
        a = b.map(function (a) {
            var b = a.day,
                d = a.hours;
            a = a.first;
            return !a && c ? null : l.jsx(t, {
                day: b,
                hours: d,
                first: a,
                collapsed: c
            }, b)
        });
        return l.jsx(w, {
            icon: l.jsx(d("WAWebBusinessHoursIcon").BusinessHoursIcon, {}),
            onClick: function () {
                return e(!c)
            },
            children: a
        })
    }
    s.displayName = s.name + " [from " + f.id + "]";

    function a(a) {
        var b, e = a.contact;
        b = d("useWAWebContactValues").useContactValues(a.contact.id, [(b = d("WAWebContactGetters")).getId, b.getVerifiedLevel, b.getName, b.getVerifiedName]);
        b[0];
        b[1];
        var f = b[2];
        b[3];
        b = d("useWAWebModelValues").useModelValues(a.businessProfile, ["description", "categories", "website", "email", "stale", "latitude", "longitude", "businessHours", "structuredAddress"]);
        m(function () {
            new(d("WAWebViewBusinessProfileWamEvent").ViewBusinessProfileWamEvent)({
                viewBusinessProfileAction: d("WAWebWamEnumViewBusinessProfileAction").VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION
            }).commit()
        }, []);
        a = l.jsx(r, {
            contact: e
        });
        var g, h, i, k, n, p, q = b;
        if (q.stale) g = l.jsx("div", {
            className: (j || (j = c("stylex")))(o.contactBusinessInfoSpinner, d("WAWebUISpacing").uiMargin.top24, d("WAWebUISpacing").uiMargin.bottom12),
            children: l.jsx(d("WAWebSpinner.react").Spinner, {
                size: 20,
                stroke: 5
            })
        });
        else {
            h = ((e = q.categories) == null ? void 0 : e.length) ? l.jsx(w, {
                icon: l.jsx(d("WAWebBusinessCategoryIcon").BusinessCategoryIcon, {}),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    selectable: !0,
                    direction: "auto",
                    text: c("WAWebFbtIntlList")(q.categories.map(function (a) {
                        return a.localized_display_name
                    }), c("WAWebFbtIntlList").CONJUNCTIONS.NONE, c("WAWebFbtIntlList").DELIMITERS.COMMA)
                })
            }) : null;
            i = q.description != null && q.description !== "" ? l.jsx(w, {
                icon: l.jsx(d("WAWebBusinessDescriptionIcon").BusinessDescriptionIcon, {}),
                children: l.jsx(d("WAWebExpandableText.react").ExpandableText, {
                    text: q.description,
                    textLimit: c("WAWebConstantsDeprecated").BUSINESS_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH,
                    children: function (a) {
                        a = a.textLimit;
                        return l.jsx(d("WAWebEmojiText.react").EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            breakWord: !0,
                            text: q.description,
                            textLimit: a
                        })
                    }
                })
            }) : null;
            q.website && Array.isArray(q.website) && q.website.length && (k = q.website.map(function (a, b) {
                var c = d("WAWebSmbUtils").getWebsiteLink(a);
                return l.jsx(w, {
                    icon: l.jsx(d("WAWebBusinessWebsiteIcon").BusinessWebsiteIcon, {}),
                    children: l.jsx(d("WAWebExternalLink.react").ExternalLink, {
                        href: c,
                        children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                            selectable: !0,
                            direction: "auto",
                            text: a
                        })
                    })
                }, b)
            }));
            q.businessHours && (n = l.jsx(s, {
                businessHours: q.businessHours
            }));
            b = q.email;
            b != null && b !== "" && (p = l.jsx(w, {
                icon: l.jsx(d("WAWebBusinessEmailIcon").BusinessEmailIcon, {}),
                dir: "auto",
                children: l.jsx(d("WAWebExternalLink.react").ExternalLink, {
                    href: "mailto:" + b,
                    children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: b
                    })
                })
            }))
        }
        e = Boolean(q.latitude !== void 0 && q.longitude !== void 0 || q.structuredAddress);
        var t;
        (g || e || h || i || n != null || p || k) && (t = l.jsx(c("WAWebDrawerSection.react"), {
            theme: "padding",
            children: l.jsxs("div", {
                className: "x1jm03vo x8182xy",
                children: [g, l.jsx(v, {
                    contactName: f,
                    latitude: q.latitude,
                    longitude: q.longitude,
                    structuredAddress: q.structuredAddress
                }), h, i, n, p, k]
            })
        }));
        return l.jsxs(l.Fragment, {
            children: [l.jsx(c("WAWebDrawerSection.react"), {
                children: a
            }), t]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function t(a) {
        var b = a.collapsed,
            e = a.day,
            f = a.first;
        a = a.hours;
        b = f ? l.jsx("div", {
            className: (j || (j = c("stylex")))(o.businessHoursChevron, d("WAWebUISpacing").uiPadding.top4, d("WAWebUISpacing").uiPadding.start4),
            role: "button",
            children: l.jsx(d("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
                xstyle: b && o.flipSvg,
                displayInline: !0,
                height: 24
            })
        }) : null;
        return l.jsxs("div", {
            "data-testid": void 0,
            className: "xf5m44m",
            children: [l.jsx("div", {
                className: (j || (j = c("stylex")))(o.businessHoursDay, !f && d("WAWebUISpacing").uiPadding.top8),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: e
                })
            }), l.jsx("div", {
                className: j(o.businessHoursHours, !f && d("WAWebUISpacing").uiPadding.top8),
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    direction: "auto",
                    text: a
                })
            }), b]
        })
    }
    t.displayName = t.name + " [from " + f.id + "]";

    function u(a) {
        var b = a.streetAddress,
            c = a.localizedCityName;
        a = a.zipCode;
        if (b && c && a) return h._("__JHASH__UGp4QwVSpNG__JHASH__", [h._param("streetAddress", b), h._param("city", c), h._param("zipCode", a)]).toString();
        else if (b && c) return h._("__JHASH__fxZItl_0kq8__JHASH__", [h._param("streetAddress", b), h._param("city", c)]).toString();
        return b
    }

    function v(a) {
        var b = a.contactName,
            e = a.latitude,
            f = a.longitude;
        a = a.structuredAddress;
        a = a ? u(a) : null;
        var g, h;
        if (a != null && a !== "") {
            var i;
            e != null && f != null ? i = d("WAWebMapUtils").getMapUrl(e, f, a) : i = d("WAWebMapUtils").getSearchUrl(a);
            h = l.jsx("div", {
                children: l.jsx(d("WAWebExternalLink.react").ExternalLink, {
                    href: i,
                    children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                        selectable: !0,
                        direction: "auto",
                        text: a
                    })
                })
            })
        }
        if (e != null && f != null) {
            i = {
                height: q
            };
            a = a || b;
            g = l.jsx("div", {
                style: i,
                className: (j || (j = c("stylex")))(o.businessMap, d("WAWebUISpacing").uiMargin.bottom8, h != null && d("WAWebUISpacing").uiMargin.top8),
                children: l.jsx(c("WAWebMap.react"), {
                    lat: e,
                    lng: f,
                    name: a,
                    width: p,
                    height: q
                })
            })
        }
        return !h && !g ? null : l.jsxs(w, {
            icon: l.jsx(d("WAWebBusinessAddressIcon").BusinessAddressIcon, {}),
            children: [h, g]
        })
    }
    v.displayName = v.name + " [from " + f.id + "]";

    function w(a) {
        var b = a.children;
        a.dir;
        var e = a.icon,
            f = a.onClick;
        a = a.xstyle;
        return l.jsxs("div", {
            className: (j || (j = c("stylex")))(o.dataRow, d("WAWebUISpacing").uiMargin.bottom14, a),
            onClick: f,
            children: [l.jsx("div", {
                className: "x2lah0s xvy4d1p x1uhnywk xt16idv",
                children: e
            }), l.jsx("div", {
                className: j(o.dataRowText, d("WAWebUISpacing").uiPadding.top2),
                children: b
            })]
        })
    }
    w.displayName = w.name + " [from " + f.id + "]";
    g.BusinessProfile = a
}), 226);
__d("WAWebNotesPrivacyStrings", ["fbt", "WAWebBizGatingUtils"], (function (a, b, c, d, e, f, g, h) {
    "use strict";

    function a() {
        var a = d("WAWebBizGatingUtils").smbNotesPrivacyStringABProp();
        if (a === 1) return h._("__JHASH__NVpZfsezonS__JHASH__");
        return a === 2 ? h._("__JHASH__ptu1IJbdJjj__JHASH__") : null
    }
    g["default"] = a
}), 226);
__d("useWAWebAsyncSaving", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useRef,
        k = b.useState;

    function a(a) {
        var b = k(!1),
            c = b[0],
            d = b[1];
        b = k(null);
        var e = b[0],
            f = b[1];
        b = k(null);
        var g = b[0],
            h = b[1],
            l = j(null);
        i(function () {
            if (g != null) return;
            if (e == null) {
                d(!1);
                return
            }
            l.current = new AbortController();
            h(a(e)["finally"](function () {
                var a;
                if ((a = l.current) == null ? void 0 : a.signal.aborted) return;
                h(null)
            }));
            f(null);
            d(!0)
        }, [e, a, g]);
        i(function () {
            return function () {
                var a;
                return (a = l.current) == null ? void 0 : a.abort()
            }
        }, []);
        return [c, function (a) {
            return f(a)
        }]
    }
    g["default"] = a
}), 98);
__d("useWAWebBeforeUnload", ["react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect;

    function a(a) {
        i(function () {
            var b = function (b) {
                var c = a();
                if (c.showConfirmationDialog) {
                    b.preventDefault();
                    b.returnValue = "";
                    return ""
                }
            };
            window.addEventListener("beforeunload", b);
            return function () {
                window.removeEventListener("beforeunload", b)
            }
        }, [a])
    }
    g["default"] = a
}), 98);
__d("useWAWebLingeringSavingHint", ["react", "useWAWebTimeout"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useEffect,
        k = b.useRef,
        l = b.useState;

    function a(a, b) {
        var c = l(!1),
            e = c[0],
            f = c[1],
            g = k(0),
            h = i(function () {
                f(!1)
            }, [f]);
        c = d("useWAWebTimeout").useManualTimeout(h);
        var m = c[0],
            n = c[1],
            o = i(function () {
                var a = Date.now() - g.current;
                a >= b.saveHintMs ? h() : m(b.saveHintMs - a)
            }, [b.saveHintMs, h, m]);
        j(function () {
            a && !e && (n(), f(!0), g.current = Date.now()), !a && e && o()
        }, [a]);
        c = i(function () {
            n(), h()
        }, [n, h]);
        return [e, c]
    }
    g["default"] = a
}), 98);
__d("WAWebContactInfoNotes.react", ["fbt", "WAJids", "WALogger", "WAWebClock", "WAWebFormatConfiguration", "WAWebLinkify", "WAWebNoop", "WAWebNoteAction", "WAWebNoteCollection", "WAWebNotesLogEvents", "WAWebNotesPrivacyStrings", "WAWebNotesUtils", "WAWebRichTextField.react", "WAWebUISpacing", "asyncToGeneratorRuntime", "react", "stylex", "useWAWebAsync", "useWAWebAsyncSaving", "useWAWebBeforeUnload", "useWAWebDebouncedCallback", "useWAWebLingeringSavingHint", "useWAWebListener", "useWAWebOnScreen"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[useNoteValues] Error fetching note for chat ", ""]);
        k = function () {
            return a
        };
        return a
    }
    var l = j || (j = d("react"));
    e = j;
    var m = e.useCallback,
        n = e.useEffect,
        o = e.useMemo,
        p = e.useRef,
        q = e.useState,
        r = 2e3,
        s = 500,
        t = 15,
        u = {
            textFormatEnabled: !0,
            bulletPointsEnabled: !0,
            numberedListEnabled: !0,
            inlineCodeEnabled: !0,
            blockQuoteEnabled: !0,
            linksEnabled: !0,
            textFormatShortcutsEnabled: !0,
            floatingToolbarEnabled: !0
        };

    function a(a) {
        var b;
        a = a.contact;
        b = d("WAJids").validateChatJid((b = a == null ? void 0 : (b = a.id) == null ? void 0 : b.toJid()) != null ? b : "");
        return a == null || b == null ? null : l.jsx(v, {
            contact: a,
            chatJid: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function v(a) {
        var e, f, g = a.chatJid,
            h = a.contact;
        a = x(g);
        var i = a.value,
            j = (e = i == null ? void 0 : i.content) != null ? e : "";
        e = (e = i == null ? void 0 : i.createdAt) != null ? e : null;
        f = (f = i == null ? void 0 : i.modifiedAt) != null ? f : null;
        var k = m(function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                if (a === j) return;
                d("WAWebNotesLogEvents").logNoteSaved(h, {
                    content_existed: j !== "",
                    previous_length: j.length,
                    has_content: a !== "",
                    length: a.length
                });
                return i == null ? d("WAWebNoteAction").noteAddAction("unstructured", g, a) : d("WAWebNoteAction").noteEditAction(i.id, "unstructured", g, a, i.createdAt)
            });
            return function (b) {
                return a.apply(this, arguments)
            }
        }(), [g, h, i, j]);
        k = c("useWAWebAsyncSaving")(k);
        var n = k[0];
        k = k[1];
        if (a.error != null || a.loading) return;
        return l.jsx(A, {
            contact: h,
            children: l.jsx(w, {
                contact: h,
                createdAt: e,
                modifiedAt: f,
                note: j,
                saveNote: k,
                savingNote: n
            })
        })
    }
    v.displayName = v.name + " [from " + f.id + "]";

    function w(a) {
        var b = a.contact,
            e = a.createdAt,
            f = a.modifiedAt,
            g = a.note,
            j = a.saveNote;
        a = a.savingNote;
        var k = q(!1),
            p = k[0],
            v = k[1];
        k = q(!1);
        var w = k[0],
            x = k[1];
        k = q(!1);
        var A = k[0],
            B = k[1];
        k = q(!1);
        var C = k[0],
            D = k[1],
            E = z(b, w);
        k = c("useWAWebLingeringSavingHint")(a, {
            saveHintMs: s
        });
        var F = k[0],
            G = k[1];
        a = !w || !p ? h._("__JHASH__h0J_Nly7d1J__JHASH__") : "";
        k = q(g);
        var H = k[0],
            I = k[1];
        n(function () {
            return I(g)
        }, [g]);
        p = m(function () {
            return {
                showConfirmationDialog: H !== g
            }
        }, [H, g]);
        c("useWAWebBeforeUnload")(p);
        var J = o(function () {
            return y(e, f)
        }, [e, f]);
        k = o(function () {
            if (F) return h._("__JHASH__hVaTeItK2ZA__JHASH__");
            if (!w) return J;
            if (!A) {
                var a;
                return (a = c("WAWebNotesPrivacyStrings")()) != null ? a : J
            }
            return J
        }, [F, w, A, J]);
        var K = m(function () {
                if (H === g) return;
                I(H);
                j(H);
                B(!0)
            }, [H, g, j]),
            L = c("useWAWebDebouncedCallback")(K, r);
        p = {
            preserveWhitespace: !0,
            textLimit: C ? Infinity : 100,
            readMoreText: h._("__JHASH__MpNMqmOOScq__JHASH__"),
            onReadMore: function () {
                d("WAWebNotesLogEvents").logReadMorePressed(b), D(!0)
            },
            formatters: d("WAWebFormatConfiguration").Conversation({
                trusted: !0,
                parseLists: !0,
                parseQuotes: !0,
                parseInlineCode: !0,
                links: d("WAWebLinkify").findLinks(g, !0)
            })
        };
        return l.jsx("div", {
            "data-testid": void 0,
            className: (i || (i = c("stylex")))(d("WAWebUISpacing").paddingVert8),
            children: l.jsx(d("WAWebRichTextField.react").RichTextField, babelHelpers["extends"]({
                testid: void 0,
                value: H,
                lockable: !0,
                emojiTextSettingsInLockMode: p,
                onBeginEdit: function () {
                    d("WAWebNotesLogEvents").logEditModeOpened(b), d("WAWebNotesLogEvents").logEditModeSeen(b, {
                        content_existed: H !== ""
                    }), x(!0), B(!1)
                },
                onSave: function () {
                    K(), x(!1)
                },
                onCancel: function () {
                    x(!1), I(g)
                },
                onChange: function (a) {
                    a = a.text;
                    a !== H && E(H !== "");
                    I(a);
                    G();
                    L()
                },
                onFocus: function () {
                    return v(!0)
                },
                onBlur: function () {
                    v(!1), K()
                },
                inputPlaceholder: a,
                hideFloatingLabel: !0,
                managed: !0,
                minVisibleLines: 3,
                enterIsNewLine: !0,
                emojiBtnPosition: "side",
                shutEmojiPickerOnSelect: !0,
                selectOnMount: !1,
                multiline: !0,
                pending: F,
                contextMsg: k,
                lowProfile: k == null,
                showRemaining: !0,
                maxLength: d("WAWebNotesUtils").MAX_NOTE_LENGTH,
                charLimit: t
            }, u))
        })
    }
    w.displayName = w.name + " [from " + f.id + "]";

    function x(a) {
        var b = q(null),
            e = b[0],
            f = b[1];
        b = q({
            loading: !0,
            error: null,
            value: null
        });
        var g = b[0],
            h = b[1],
            i = c("useWAWebAsync")(function () {
                return d("WAWebNoteAction").retrieveOnlyNoteForChatJid(a)
            }, [a]),
            j = m(function () {
                var b = d("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(a);
                f(b);
                h({
                    loading: !1,
                    error: null,
                    value: b == null ? null : {
                        id: b.id,
                        content: b.content,
                        createdAt: b.createdAt,
                        modifiedAt: b.modifiedAt
                    }
                })
            }, [a]);
        n(function () {
            i.error != null && d("WALogger").ERROR(k(), a).devConsole(i.error);
            if (i.loading || i.error != null) {
                h(i);
                return
            }
            j()
        }, [a, i.loading, i.error, i.value, j]);
        d("useWAWebListener").useListener(d("WAWebNoteCollection").NoteCollection, "add remove", j);
        d("useWAWebListener").useListener(e, "change", j);
        return g
    }

    function y(a, b) {
        if (a == null || b == null) return null;
        return a === b ? d("WAWebClock").Clock.addedStr(a) : d("WAWebClock").Clock.updatedStr(b)
    }

    function z(a, b) {
        var c = p(!1);
        n(function () {
            b && (c.current = !1)
        }, [b]);
        var e = m(function (b) {
            c.current || (d("WAWebNotesLogEvents").logStartedTypingNote(a, {
                content_existed: b
            }), c.current = !0)
        }, [a]);
        return e
    }

    function A(a) {
        var b = a.children,
            e = a.contact,
            f = p(!1);
        a = p();
        var g = c("useWAWebOnScreen")(a, c("WAWebNoop"));
        n(function () {
            g && !f.current && (d("WAWebNotesLogEvents").logNoteViewed(e), f.current = !0)
        }, [e, g]);
        return l.jsx("span", {
            ref: a,
            children: b
        })
    }
    A.displayName = A.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoPhoneNumberHidden.react", ["fbt", "WAWebClickableLink.react", "WAWebDialpadIcon", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFlex.react", "WAWebSvgComponentBase", "WAWebText_DONOTUSE.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = j.jsx(d("WAWebDialpadIcon").DialpadIcon, {
            directional: !0,
            color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY
        }),
        l = function () {
            var a = d("WAWebFaqUrl").getPhoneNumberHidingFaqUrl();
            d("WAWebExternalLink.react").openExternalLink(a)
        },
        m = {
            container: {
                alignItems: "x6s0dn4",
                backgroundColor: "x1pl83jw",
                borderTopStartRadius: "x1lq5wgf",
                borderTopEndRadius: "xgqcy7u",
                borderBottomEndRadius: "x30kzoy",
                borderBottomStartRadius: "x9jhf4c",
                display: "x78zum5",
                marginTop: "xw7yly9",
                marginEnd: "xkrivgy",
                marginBottom: "x1hq5gj4",
                marginStart: "x1gryazu",
                width: "x1cvmir6",
                height: "xnnlda6",
                maxWidth: "x16fdfms",
                paddingStart: "xurb0ha",
                paddingEnd: "x1sxyh0",
                lineHeight: "xdod15v",
                $$css: !0
            },
            text: {
                color: "x16cd2qt",
                marginTop: "xr1yuqi",
                marginEnd: "xkrivgy",
                marginBottom: "x4ii5y1",
                marginStart: "x1gryazu",
                wordBreak: "x13faqbe",
                overflowWrap: "x1mzt3pk",
                $$css: !0
            },
            item: {
                marginStart: "x8j4wrb",
                marginEnd: "x1t4t16n",
                paddingTop: "x123j3cw",
                paddingEnd: "x1mpkggp",
                paddingBottom: "xs9asl8",
                paddingStart: "x1t2a60a",
                $$css: !0
            }
        };

    function a() {
        return j.jsxs(d("WAWebFlex.react").FlexRow, {
            xstyle: m.container,
            children: [j.jsx(d("WAWebFlex.react").FlexColumn, {
                xstyle: m.item,
                children: k
            }), j.jsx(d("WAWebFlex.react").FlexColumn, {
                xstyle: [m.text, m.item],
                children: j.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    testid: void 0,
                    children: h._("__JHASH__tBZr12YazPZ__JHASH__", [h._implicitParam("=m2", j.jsx(c("WAWebClickableLink.react"), {
                        testid: void 0,
                        onClick: l,
                        children: h._("__JHASH__s0aEy1JW6WM__JHASH__")
                    }))])
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBusinessTopCard.react", ["WAWebBusinessActions.react", "WAWebBusinessName.react", "WAWebBusinessOpenHours.react", "WAWebBusinessProfileCoverPhoto.react", "WAWebContactGetters", "WAWebContactInfoNotes.react", "WAWebContactInfoPhoneNumberHidden.react", "WAWebDrawerSection.react", "WAWebFbtIntlList", "WAWebNotesUtils", "WAWebUISpacing", "WAWebUsernameGatingUtils", "react", "stylex", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = {
            categories: {
                fontSize: "x1f6kntn",
                color: "x1anpt5t",
                lineHeight: "x37zpob",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.businessProfile,
            e = a.contact,
            f = a.isPhoneNumberHidden,
            g = a.onProductCatalog,
            h = a.onProfilePicClick,
            l = a.onProfilePicLoad;
        a = a.onSaveContact;
        var m = d("useWAWebModelValues").useModelValues(b, ["businessHours", "categories"]),
            n = m.businessHours;
        m = m.categories;
        var o = j.jsx(c("WAWebBusinessName.react"), {
                contact: e,
                businessProfile: b
            }),
            p;
        !d("WAWebContactGetters").getIsIAS(e) && !d("WAWebContactGetters").getIsCAPISupportAccount(e) && !d("WAWebContactGetters").getId(e).isBot() && !b.isBizBot3p && m != null && m.length > 0 && (p = j.jsx("div", {
            className: (i || (i = c("stylex")))([k.categories, d("WAWebUISpacing").uiMargin.bottom10]),
            children: c("WAWebFbtIntlList")(m.map(function (a) {
                return a.localized_display_name
            }), c("WAWebFbtIntlList").CONJUNCTIONS.NONE, c("WAWebFbtIntlList").DELIMITERS.BULLET)
        }));
        b = n ? j.jsx(d("WAWebBusinessOpenHours.react").BusinessOpenHours, {
            hours: n
        }) : null;
        m = e.businessProfile ? j.jsx(c("WAWebBusinessProfileCoverPhoto.react"), {
            contact: e,
            businessProfile: e.businessProfile,
            onClick: h,
            onLoad: l
        }) : null;
        n = e.username != null && (e.id.isLid() && e.phoneNumber != null || !e.id.isLid()) ? j.jsx("div", {
            className: "x1f6kntn x1anpt5t x37zpob",
            children: e.username != null && "@" + e.username
        }) : null;
        h = d("WAWebNotesUtils").shouldEnableNotesForWid(e == null ? void 0 : e.id) ? j.jsx(c("WAWebContactInfoNotes.react"), {
            contact: e
        }) : null;
        return j.jsxs(c("WAWebDrawerSection.react"), {
            theme: "padding-no-margin",
            children: [m, j.jsxs("div", {
                className: "x2b8uid",
                children: [o, f && j.jsx(c("WAWebContactInfoPhoneNumberHidden.react"), {}), d("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && n, p, b, j.jsx(c("WAWebBusinessActions.react"), {
                    contact: e,
                    onProductCatalog: g,
                    onSaveContact: a,
                    displayRequestPnButton: f
                })]
            }), h]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebMexChangeNewsletterOwnerJobMutation.graphql", [], (function (a, b, c, d, e, f) {
    "use strict";
    a = function () {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "newsletter_id"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "user_id"
            }],
            b = [{
                kind: "Variable",
                name: "newsletter_id",
                variableName: "newsletter_id"
            }, {
                kind: "Variable",
                name: "user_id",
                variableName: "user_id"
            }],
            c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexChangeNewsletterOwnerJobMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "XWA2NewsletterMutationResponse",
                    kind: "LinkedField",
                    name: "xwa2_newsletter_change_owner",
                    plural: !1,
                    selections: [c],
                    storageKey: null
                }],
                type: "Mutation",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "WAWebMexChangeNewsletterOwnerJobMutation",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: "XWA2NewsletterMutationResponse",
                    kind: "LinkedField",
                    name: "xwa2_newsletter_change_owner",
                    plural: !1,
                    selections: [c, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "7341777602580933",
                metadata: {},
                name: "WAWebMexChangeNewsletterOwnerJobMutation",
                operationKind: "mutation",
                text: null
            }
        }
    }();
    e.exports = a
}), null);
__d("WAWebMexChangeNewsletterOwnerJob", ["WAWebApiContact", "WAWebMexChangeNewsletterOwnerJobMutation.graphql", "WAWebMexClient", "WAWebNewsletterRpcUtils", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    var h, i = h !== void 0 ? h : h = b("WAWebMexChangeNewsletterOwnerJobMutation.graphql");

    function a(a, b) {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            return d("WAWebNewsletterRpcUtils").runWithBackoff(function () {
                return k(a, b)
            })
        });
        return j.apply(this, arguments)
    }

    function k(a, b) {
        return l.apply(this, arguments)
    }

    function l() {
        l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            b = b.isLid() ? b : d("WAWebApiContact").getCurrentLid(b);
            if (b == null) throw c("err")("No LID for user");
            yield d("WAWebMexClient").fetchQuery(i, {
                newsletter_id: a,
                user_id: b.toString()
            })
        });
        return l.apply(this, arguments)
    }
    g.mexChangeNewsletterOwner = a
}), 98);
__d("WAWebNewsletterChangeOwnerJob", ["WAJobOrchestratorTypes", "WAWebMexChangeNewsletterOwnerJob", "WAWebOrchestratorNonPersistedJob", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a, c) {
        return d("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("changeNewsletterOwner", b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return d("WAWebMexChangeNewsletterOwnerJob").mexChangeNewsletterOwner(a, c)
        }), {
            priority: d("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted()
    }
    g.changeNewsletterOwner = a
}), 98);
__d("WAWebChangeNewsletterOwnerAction", ["WALogger", "WAWebCommonNewsletterEnums", "WAWebNewsletterBridgeApi", "WAWebNewsletterChangeOwnerJob", "WAWebNewsletterMembershipUtil", "WAWebNewsletterValidationUtils", "WAWebUserPrefsMeUser", "WAWebWidFactory", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][changeNewsletterOwnerAction] failed to transfer ownership"]);
        h = function () {
            return a
        };
        return a
    }

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][changeNewsletterOwnerAction] Cannot transfer ownership to a non-admin, role: ", ""]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][changeNewsletterOwnerAction] Cannot transfer ownership to contact not in newsletter"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][changeNewsletterOwnerAction] Cannot transfer ownership to self"]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][changeNewsletterOwnerAction] Only newsletter owners can transfer ownership"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][changeNewsletterOwnerAction] called with a non-newsletter chat"]);
        m = function () {
            return a
        };
        return a
    }

    function a(a, b) {
        return n.apply(this, arguments)
    }

    function n() {
        n = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            var e;
            if (!a.isNewsletter) {
                d("WALogger").ERROR(m()).tags("newsletter").devConsole(a.id).sendLogs("change-owner-of-non-newsletter");
                throw c("err")("change-owner-of-non-newsletter")
            }
            if (!d("WAWebNewsletterMembershipUtil").iAmOwner(a.newsletterMetadata)) {
                d("WALogger").ERROR(l()).tags("newsletter").devConsole(a.id).sendLogs("non-newsletter-owner-transferring-ownership");
                throw c("err")("non-newslette-owner-transferring-ownership")
            }
            if (d("WAWebUserPrefsMeUser").isMeAccount(b.id)) {
                d("WALogger").ERROR(k()).tags("newsletter").devConsole(a.id).sendLogs("transferring-newsletter-to-self");
                throw c("err")("transferring-newsletter-to-self")
            }
            e = (e = a.newsletterMetadata) == null ? void 0 : e.subscribers.get(b.id);
            if (e == null) {
                d("WALogger").ERROR(j()).tags("newsletter").devConsole(a.id).sendLogs("contact-not-found-in-newsletter-subscriber-list");
                throw c("err")("contact-not-found-in-newsletter-subscriber-list")
            }
            if (e.membership !== d("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin) {
                d("WALogger").ERROR(i(), e.membership).tags("newsletter").devConsole(a.id).sendLogs("transferring-newsletter-ownership-to-non-admin");
                throw c("err")("transferring-newsletter-ownership-to-non-admin")
            }
            try {
                e = d("WAWebWidFactory").toUserWid(b.id);
                var f = d("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(a.id.toJid());
                yield d("WAWebNewsletterChangeOwnerJob").changeNewsletterOwner(f, e);
                yield d("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateMyNewsletterMembershipRole({
                    newsletter: a,
                    newRole: d("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
                });
                yield d("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterMemberRole({
                    newsletter: a,
                    member: b,
                    newRole: d("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
                })
            } catch (a) {
                d("WALogger").ERROR(h()).tags("newsletter").devConsole(a).sendLogs("change-newsletter-owner-failed");
                throw a
            }
        });
        return n.apply(this, arguments)
    }
    g.changeNewsletterOwnerAction = a
}), 98);
__d("WAWebWamEnumChannelLinkShareDirection", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        WHATSAPP: 1,
        STATUS: 2,
        EXTERNAL: 3
    });
    f.CHANNEL_LINK_SHARE_DIRECTION = a
}), 66);
__d("WAWebWamEnumChannelLinkShareScreen", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        CONTEXT_CARD: 1,
        CHANNEL_INFO: 2,
        CHANNEL_THREAD: 3,
        SHARE_LINK_SCREEN: 4,
        UPDATES_TAB: 5
    });
    f.CHANNEL_LINK_SHARE_SCREEN = a
}), 66);
__d("WAWebChannelLinkShareWamEvent", ["WAWebWamCodegenUtils", "WAWebWamEnumChannelLinkShareDirection", "WAWebWamEnumChannelLinkShareEntryPoint", "WAWebWamEnumChannelLinkShareScreen"], (function (a, b, c, d, e, f, g) {
    a = d("WAWebWamCodegenUtils").defineEvents({
        ChannelLinkShare: [4728, {
                channelLinkShareDirection: [1, d("WAWebWamEnumChannelLinkShareDirection").CHANNEL_LINK_SHARE_DIRECTION],
                channelLinkShareEntryPoint: [2, d("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT],
                channelLinkShareScreen: [4, d("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN],
                cid: [3, d("WAWebWamCodegenUtils").TYPES.STRING]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        ChannelLinkShare: []
    });
    g.ChannelLinkShareWamEvent = a
}), 98);
__d("WAWebWamEnumActionTarget", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        REACH_TAB: 0,
        GROWTH_TAB: 1,
        FOLLOWERS_TAB: 2,
        ACCOUNTS_REACHED_INFO_ICON: 3,
        TOP_REGIONS_REACH_INFO_ICON: 4,
        GROWTH_CHART_INFO_ICON: 5,
        TOP_REGIONS_FOLLOWERS_INFO_ICON: 6,
        HELP_CENTER_DATA_UNAVAILABLE_ARTICLE: 7,
        HELP_CENTER_CHANNEL_METRICS_ARTICLE: 8,
        WIDGET_INFO_ICON: 9
    });
    f.ACTION_TARGET = a
}), 66);
__d("WAWebWamEnumChannelProducerInsightsActionType", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        WIDGET_IMPRESSION: 0,
        OPEN: 1,
        CLOSE: 2,
        NAVIGATION_TAP: 3,
        INFO_ICON_TAP: 4,
        LINK_CLICK: 5
    });
    f.CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE = a
}), 66);
__d("WAWebWamEnumChannelProducerInsightsEntryPoint", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        PROFILE_SEE_ALL: 0,
        PROFILE_ACCOUNTS_REACHED: 1,
        PROFILE_NET_FOLLOWS: 2
    });
    f.CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT = a
}), 66);
__d("WAWebWamEnumChannelProducerInsightsSurface", [], (function (a, b, c, d, e, f) {
    a = Object.freeze({
        CHANNEL_INFO: 0,
        REACH_TAB: 1,
        GROWTH_TAB: 2,
        FOLLOWERS_TAB: 3
    });
    f.CHANNEL_PRODUCER_INSIGHTS_SURFACE = a
}), 66);
__d("WAWebChannelProducerInsightsNavigationWamEvent", ["WAWebWamCodegenUtils", "WAWebWamEnumActionTarget", "WAWebWamEnumChannelProducerInsightsActionType", "WAWebWamEnumChannelProducerInsightsEntryPoint", "WAWebWamEnumChannelProducerInsightsSurface"], (function (a, b, c, d, e, f, g) {
    b = (a = d("WAWebWamCodegenUtils")).defineEvents({
        ChannelProducerInsightsNavigation: [5626, {
                channelProducerInsightsActionTarget: [1, d("WAWebWamEnumActionTarget").ACTION_TARGET],
                channelProducerInsightsActionType: [2, d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE],
                channelProducerInsightsEntryPoint: [3, d("WAWebWamEnumChannelProducerInsightsEntryPoint").CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT],
                channelProducerInsightsSequenceNumber: [4, a.TYPES.INTEGER],
                channelProducerInsightsSurface: [5, d("WAWebWamEnumChannelProducerInsightsSurface").CHANNEL_PRODUCER_INSIGHTS_SURFACE],
                cid: [6, a.TYPES.STRING],
                producerInsightsSessionId: [7, a.TYPES.INTEGER]
            },
            [1, 1, 1], "regular"
        ]
    }, {
        ChannelProducerInsightsNavigation: []
    });
    g.ChannelProducerInsightsNavigationWamEvent = b
}), 98);
__d("WAWebHeartSlashIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "heart-slash";

    function a(a) {
        var b = a.iconXstyle,
            e = a.height,
            f = a.width,
            g = a.viewBox,
            h = a.innerStyles;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["iconXstyle", "height", "width", "viewBox", "innerStyles"]);
        var l;
        if (g) {
            var m = g.x;
            m = m === void 0 ? 0 : m;
            var n = g.y;
            n = n === void 0 ? 0 : n;
            var o = g.width;
            o = o === void 0 ? 0 : o;
            g = g.height;
            g = g === void 0 ? 0 : g;
            l = [m, n, o, g].join(" ")
        }
        m = 25;
        n = 24;
        (e != null || f != null) && (m = e, n = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (o = l) != null ? o : "0 0 24 25",
                height: m,
                width: n,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                color: "#757778",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M12 21.3249C11.7667 21.3249 11.5292 21.2832 11.2875 21.1999C11.0458 21.1166 10.8333 20.9832 10.65 20.7999L8.925 19.2249C7.15833 17.6082 5.5625 16.0041 4.1375 14.4124C2.7125 12.8207 2 11.0666 2 9.1499C2 7.58324 2.525 6.2749 3.575 5.2249C4.625 4.1749 5.93333 3.6499 7.5 3.6499C8.38333 3.6499 9.21667 3.8374 10 4.2124C10.7833 4.5874 11.45 5.0999 12 5.7499C12.55 5.0999 13.2167 4.5874 14 4.2124C14.7833 3.8374 15.6167 3.6499 16.5 3.6499C18.0667 3.6499 19.375 4.1749 20.425 5.2249C21.475 6.2749 22 7.58324 22 9.1499C22 11.0666 21.2917 12.8249 19.875 14.4249C18.4583 16.0249 16.85 17.6332 15.05 19.2499L13.35 20.7999C13.1667 20.9832 12.9542 21.1166 12.7125 21.1999C12.4708 21.2832 12.2333 21.3249 12 21.3249ZM11.05 7.7499C10.5667 7.06657 10.05 6.54574 9.5 6.1874C8.95 5.82907 8.28333 5.6499 7.5 5.6499C6.5 5.6499 5.66667 5.98324 5 6.6499C4.33333 7.31657 4 8.1499 4 9.1499C4 10.0166 4.30833 10.9374 4.925 11.9124C5.54167 12.8874 6.27917 13.8332 7.1375 14.7499C7.99583 15.6666 8.87917 16.5249 9.7875 17.3249C10.6958 18.1249 11.4333 18.7832 12 19.2999C12.5667 18.7832 13.3042 18.1249 14.2125 17.3249C15.1208 16.5249 16.0042 15.6666 16.8625 14.7499C17.7208 13.8332 18.4583 12.8874 19.075 11.9124C19.6917 10.9374 20 10.0166 20 9.1499C20 8.1499 19.6667 7.31657 19 6.6499C18.3333 5.98324 17.5 5.6499 16.5 5.6499C15.7167 5.6499 15.05 5.82907 14.5 6.1874C13.95 6.54574 13.4333 7.06657 12.95 7.7499C12.8333 7.91657 12.6917 8.04157 12.525 8.1249C12.3583 8.20824 12.1833 8.2499 12 8.2499C11.8167 8.2499 11.6417 8.20824 11.475 8.1249C11.3083 8.04157 11.1667 7.91657 11.05 7.7499Z",
                    fill: "currentColor",
                    style: {
                        fillOpacity: 1
                    },
                    className: i(h == null ? void 0 : h.heart)
                }), j.jsx("g", {
                    children: j.jsx("path", {
                        d: "M2 3L19.6777 20.6777",
                        stroke: "currentColor",
                        style: {
                            strokeOpacity: 1
                        },
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        className: i(h == null ? void 0 : h.slash)
                    })
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.HeartSlashIcon = a
}), 98);
__d("WAWebHeartIconCustom", ["WAWebHeartSlashIcon", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react"),
        j = {
            slash: {
                display: "x1s85apg",
                $$css: !0
            }
        };

    function a(a) {
        return i.jsx(d("WAWebHeartSlashIcon").HeartSlashIcon, babelHelpers["extends"]({}, a, {
            innerStyles: babelHelpers["extends"]({}, a.innerStyles, {
                slash: j.slash
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.HeartIconCustom = a
}), 98);
__d("WAWebChatInfoFavoritesSection.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebCmd", "WAWebDrawerButton.react", "WAWebHeartIconCustom", "WAWebHeartSlashIcon", "WAWebL10NHelpers", "WAWebWamEnumFavoritesUpdateEntryPoint", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        a = a.chat;
        var b = d("useWAWebModelValues").useModelValues(a, ["isFavorite", "isGroup"]);
        b.isFavorite ? a = d("WAWebL10NHelpers").isUsingSupportedBritishEnglishLocale() ? h._("__JHASH__DFo75fEWgYZ__JHASH__") : h._("__JHASH__JwzX1VIdfl0__JHASH__") : a = d("WAWebL10NHelpers").isUsingSupportedBritishEnglishLocale() ? h._("__JHASH__T4TCB5zMNOD__JHASH__") : h._("__JHASH__TSuLGp-v849__JHASH__");
        return j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
            children: j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                icon: b.isFavorite ? j.jsx(d("WAWebHeartSlashIcon").HeartSlashIcon, {}) : j.jsx(d("WAWebHeartIconCustom").HeartIconCustom, {}),
                onClick: function () {
                    return d("WAWebCmd").Cmd.favoriteChat(b, !b.isFavorite, b.isGroup ? d("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.GROUP_INFO : d("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT.CONTACT_INFO)
                },
                theme: "chat-info",
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ChatInfoFavoritesSection = a
}), 226);
__d("WAWebListPeopleIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "list-people";

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
        l = 25;
        m = 24;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 24 25",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                color: "#757778",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M8 18.3813C7.45 18.3813 6.97917 18.1855 6.5875 17.7938C6.19583 17.4022 6 16.9313 6 16.3813V4.38135C6 3.83135 6.19583 3.36051 6.5875 2.96885C6.97917 2.57718 7.45 2.38135 8 2.38135H20C20.55 2.38135 21.0208 2.57718 21.4125 2.96885C21.8042 3.36051 22 3.83135 22 4.38135V16.3813C22 16.9313 21.8042 17.4022 21.4125 17.7938C21.0208 18.1855 20.55 18.3813 20 18.3813H8ZM8 16.3813H20V4.38135H8V16.3813ZM4 22.3813C3.45 22.3813 2.97917 22.1855 2.5875 21.7938C2.19583 21.4022 2 20.9313 2 20.3813V7.38135C2 7.09801 2.09583 6.86051 2.2875 6.66885C2.47917 6.47718 2.71667 6.38135 3 6.38135C3.28333 6.38135 3.52083 6.47718 3.7125 6.66885C3.90417 6.86051 4 7.09801 4 7.38135V20.3813H17C17.2833 20.3813 17.5208 20.4772 17.7125 20.6688C17.9042 20.8605 18 21.098 18 21.3813C18 21.6647 17.9042 21.9022 17.7125 22.0938C17.5208 22.2855 17.2833 22.3813 17 22.3813H4Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M8 18.3813C7.45 18.3813 6.97917 18.1855 6.5875 17.7938C6.19583 17.4022 6 16.9313 6 16.3813V4.38135C6 3.83135 6.19583 3.36051 6.5875 2.96885C6.97917 2.57718 7.45 2.38135 8 2.38135H20C20.55 2.38135 21.0208 2.57718 21.4125 2.96885C21.8042 3.36051 22 3.83135 22 4.38135V16.3813C22 16.9313 21.8042 17.4022 21.4125 17.7938C21.0208 18.1855 20.55 18.3813 20 18.3813H8ZM7.75 16.3813C8.5 15.448 9.40833 14.7147 10.475 14.1813C11.5417 13.648 12.7167 13.3813 14 13.3813C15.2833 13.3813 16.4583 13.648 17.525 14.1813C18.5917 14.7147 19.5 15.448 20.25 16.3813H20V4.38135H8V16.3813H7.75ZM10.7 16.3813H17.3C16.8167 16.048 16.2958 15.798 15.7375 15.6313C15.1792 15.4647 14.6 15.3813 14 15.3813C13.4 15.3813 12.8208 15.4647 12.2625 15.6313C11.7042 15.798 11.1833 16.048 10.7 16.3813Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14 11.8813C14.8333 11.8813 15.5417 11.5897 16.125 11.0063C16.7083 10.423 17 9.71468 17 8.88135C17 8.04801 16.7083 7.33968 16.125 6.75635C15.5417 6.17301 14.8333 5.88135 14 5.88135C13.1667 5.88135 12.4583 6.17301 11.875 6.75635C11.2917 7.33968 11 8.04801 11 8.88135C11 9.71468 11.2917 10.423 11.875 11.0063C12.4583 11.5897 13.1667 11.8813 14 11.8813ZM14 9.88135C14.5523 9.88135 15 9.43363 15 8.88135C15 8.32906 14.5523 7.88135 14 7.88135C13.4477 7.88135 13 8.32906 13 8.88135C13 9.43363 13.4477 9.88135 14 9.88135Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ListPeopleIcon = a
}), 98);
__d("WAWebChatInfoListsSection.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebDrawerButton.react", "WAWebListPeopleIcon", "WAWebManageLabelFlowLoadable", "WAWebModalManager", "WAWebStateUtils", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.chat;
        a = d("useWAWebModelValues").useModelValues(b, ["labels"]);
        a = a.labels;
        a = a == null || a.length === 0 ? h._("__JHASH__LFUUVeLUp0b__JHASH__") : h._("__JHASH__HFM9LPk2AGc__JHASH__");
        var c = function () {
            var a = [d("WAWebStateUtils").unproxy(b)];
            d("WAWebModalManager").ModalManager.open(j.jsx(d("WAWebManageLabelFlowLoadable").ManageLabelFlowLoadable, {
                modelsToUpdate: a,
                onClose: function () {
                    return d("WAWebModalManager").ModalManager.close()
                }
            }))
        };
        return j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
            children: j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                icon: j.jsx(d("WAWebListPeopleIcon").ListPeopleIcon, {}),
                onClick: c,
                theme: "chat-info",
                children: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ChatInfoListsSection = a
}), 226);
__d("WAWebChatParticipant.react", ["WAWebChatContact.react", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react"),
        j = d("WAWebChatContact.react").ContactFactory();

    function a(a) {
        var b = a.active,
            c = a.contact,
            e = a.onClick,
            f = a.contextMenu,
            g = a.isPendingParticipant;
        g = g === void 0 ? !1 : g;
        var h = a.contextEnabled,
            k = a.onContext,
            l = a.theme,
            m = a.showStatusRingAroundProfilePhoto,
            n = a.participantCollection,
            o = a.elevatedPushNamesEnabled;
        a = d("useWAWebModelValues").useModelValues(a.participant, ["isAdmin"]);
        var p = function () {
                return h == null ? !1 : h(c)
            },
            q = function (a) {
                return k == null ? void 0 : k(a, c)
            };
        return i.jsx(j, {
            active: b,
            contact: c,
            admin: a.isAdmin,
            onClick: g ? k : e,
            theme: l || "drawer-list",
            contextEnabled: p,
            contextMenu: f,
            onContext: q,
            isPendingParticipant: g,
            showNotifyName: !0,
            elevatedPushNamesEnabled: o,
            waitIdle: !0,
            showStatusRingAroundProfilePhoto: m,
            participantCollection: n
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebCommunityGetGeneralChatParticipantText.react", ["fbt", "WAWebCommunityGatingUtils"], (function (a, b, c, d, e, f, g, h) {
    function a(a) {
        return d("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() ? "" : a ? h._("__JHASH__TsBaKwyYLwj__JHASH__") : h._("__JHASH__vStSy8n3EM___JHASH__")
    }
    g.getGeneralChatParticipantListText = a
}), 226);
__d("WAWebContactInfoAboutSection", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebChatStatus", "WAWebChatTextStatusWrapper", "WAWebExternalLink.react", "WAWebFrontendContactGetters", "WAWebMiscGatingUtils", "WAWebTextStatusGatingUtils", "WAWebTextStatusUtils", "WAWebWDSText.react", "WAWebWid", "react", "useWAWebContactValues", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            whatsapp_url: {
                color: "x14qam3d",
                $$css: !0
            }
        };

    function a(a) {
        var b;
        a = a.contact;
        var e = a.getStatus(),
            f = d("useWAWebModelValues").useModelValues(e, ["status"]);
        f = f.status;
        b = d("useWAWebContactValues").useContactValues(a.id, [(b = d("WAWebFrontendContactGetters")).getTextStatusString, b.getTextStatusEmoji, b.getTextStatusLastUpdateTime, b.getTextStatusExpiryTs, b.getTextStatusEphemeralDuration]);
        var g = b[0],
            i = b[1],
            l = b[2],
            m = b[3];
        b = b[4];
        g = d("WAWebTextStatusUtils").shouldDisplayTextStatus(g, i, l, m, b);
        if (c("WAWebWid").isPSA(a.id)) {
            i = d("WAWebMiscGatingUtils").isBlueEnabled() ? h._("__JHASH__L8Cf92-5LPQ__JHASH__").toString() : h._("__JHASH__TQ7P7YByRXv__JHASH__").toString();
            return j.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
                titleTestId: "section-about",
                title: "",
                children: [j.jsxs(d("WAWebWDSText.react").WDSTextTitle, {
                    as: "span",
                    children: [h._("__JHASH__HRxoO1n4Hod__JHASH__").toString(), j.jsx("br", {}), h._("__JHASH__iQeSamrhdwx__JHASH__").toString(), j.jsx("br", {}), i]
                }), j.jsx("br", {}), j.jsx("br", {}), j.jsx(d("WAWebExternalLink.react").ExternalLink, {
                    href: "https://whatsapp.com/",
                    xstyle: k.whatsapp_url,
                    children: "https://whatsapp.com/"
                })]
            })
        }
        if (!d("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() && f === "") return null;
        var n;
        d("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? g === !0 ? n = h._("__JHASH__XNqfKolKoPx__JHASH__") : d("WAWebTextStatusUtils").hasCustomAboutSet(e) && (n = h._("__JHASH__c7Xg4cxUfOm__JHASH__")) : n = h._("__JHASH__c7Xg4cxUfOm__JHASH__");
        return j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-about",
            title: n,
            children: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: d("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ? j.jsx(c("WAWebChatTextStatusWrapper"), {
                    contactId: a.id
                }) : j.jsx(c("WAWebChatStatus"), {
                    id: a.id
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoBizBot1pSection.react", ["fbt", "WAWebAiSignalIcon", "WAWebBizBot1pLearnMore.react", "WAWebBizGatingUtils", "WAWebBotDataSharingIcon", "WAWebChatInfoDrawerRow.react", "WAWebDoubleChevronInCircleIcon", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebModalManager", "WAWebSvgComponentBase", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        var a = d("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled(),
            b = d("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled();
        b = a || b;
        var e = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
            as: "span",
            children: b ? h._("__JHASH__xAN6MH9Pt9k__JHASH__") : h._("__JHASH__95ZsXzPSSt-__JHASH__")
        });
        b = j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
            children: b ? h._("__JHASH__pz25w7myKvx__JHASH__") : h._("__JHASH__gXQL0jFJisM__JHASH__")
        });
        a = a ? j.jsx(d("WAWebDoubleChevronInCircleIcon").DoubleChevronInCircleIcon, {
            color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
            width: 20,
            height: 20
        }) : j.jsx(d("WAWebAiSignalIcon").AiSignalIcon, {
            color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
            width: 20,
            height: 20
        });
        var f = function () {
                d("WAWebModalManager").ModalManager.open(j.jsx(d("WAWebBizBot1pLearnMore.react").BizBot1pLearnMore, {}))
            },
            g = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: h._("__JHASH___P7Zz9U2UTu__JHASH__")
            }),
            i = j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: h._("__JHASH___pQ_QwKbnYq__JHASH__")
            }),
            k = j.jsx(d("WAWebBotDataSharingIcon").BotDataSharingIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                width: 20,
                height: 20
            }),
            l = function () {
                d("WAWebExternalLink.react").openExternalLink(d("WAWebFaqUrl").getBizBot1pLearnMoreUrl())
            };
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("WAWebChatInfoDrawerRow.react"), {
                testid: void 0,
                onClick: f,
                icon: a,
                title: e,
                secondaryTitle: b
            }), j.jsx(c("WAWebChatInfoDrawerRow.react"), {
                testid: void 0,
                onClick: l,
                icon: k,
                title: g,
                secondaryTitle: i
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ContactInfoBizBot1pSection = a
}), 226);
__d("WAWebContactInfoBizBot3pSection.react", ["fbt", "WAWebBotDataSharingIcon", "WAWebChatInfoDrawerRow.react", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebSvgComponentBase", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        var a = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: h._("__JHASH__pDjmnSlcJN5__JHASH__")
            }),
            b = j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: h._("__JHASH__CobXtim_uXw__JHASH__")
            }),
            e = j.jsx(d("WAWebBotDataSharingIcon").BotDataSharingIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                width: 18,
                height: 18
            }),
            f = function () {
                d("WAWebExternalLink.react").openExternalLink(d("WAWebFaqUrl").getBizBot3pDataSharingUrl())
            };
        return j.jsx(c("WAWebChatInfoDrawerRow.react"), {
            onClick: f,
            icon: e,
            title: a,
            secondaryTitle: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ContactInfoBizBot3pSection = a
}), 226);
__d("WAWebContactInfoCommonGroupsSection.react", ["fbt", "WALogger", "WAWebChat.react", "WAWebChatCommunityUtils", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoExpandButton.react", "WAWebCmd", "WAWebCommunityGatingUtils", "WAWebComposeBoxActions", "WAWebFindCommonGroupsContactAction", "WAWebFlatList.react", "WAWebFrontendContactGetters", "err", "react", "useWAWebContactValues", "useWAWebEventTargetValue"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["get from participants table failed"]);
        k = function () {
            return a
        };
        return a
    }
    b = j || d("react");
    var l = i || (i = c("react")),
        m = b.useEffect,
        n = b.useState,
        o = d("WAWebFlatList.react").FlatListFactory();

    function a(a) {
        var b = a.contact,
            e = a.flatListController,
            f = a.onClose;
        a = d("useWAWebContactValues").useContactValues(b.id, [d("WAWebFrontendContactGetters").getCommonGroups]);
        var g = a[0];
        a = n(!0);
        var i = a[0],
            j = a[1];
        m(function () {
            d("WAWebFindCommonGroupsContactAction").findCommonGroups(b)["catch"](function (a) {
                d("WALogger").ERROR(k()).verbose().devConsole(a).sendLogs("get from participants table failed when finding common groups: " + a);
                throw c("err")("get from participants table failed")
            })
        }, []);
        a = c("useWAWebEventTargetValue")(g, ["add", "remove"], function () {
            if (!g) return [];
            var a = g;
            a.length > d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS && i && (a = a.slice(0, d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS));
            return a.map(function (a) {
                return {
                    itemKey: a.id.toString(),
                    chat: a,
                    height: d("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(a.groupMetadata) ? d("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT : 68
                }
            })
        }, [i]);
        var p = function () {
                j(!1)
            },
            q = function (a, b) {
                d("WAWebCmd").Cmd.openChatFromUnread(b).then(function (a) {
                    a && d("WAWebComposeBoxActions").ComposeBoxActions.focus(b)
                }), f()
            };
        if (!g || g.length === 0) return null;
        var r;
        if (g.length > d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS && i) {
            var s = g.length - d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
            r = l.jsx(c("WAWebChatInfoExpandButton.react"), {
                numMore: s,
                onClick: p
            })
        }
        s = h._("__JHASH__7tPCekpbmhN__JHASH__", [h._plural(g.length, "number")]);
        return l.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
            titleTestId: "section-common-groups",
            title: s,
            children: [l.jsx(o, {
                flatListController: e,
                direction: "vertical",
                forceConsistentRenderCount: !1,
                data: a,
                renderItem: function (a) {
                    a = a.chat;
                    return l.jsx(d("WAWebChat.react").Chat, {
                        chat: a,
                        theme: "chat-info",
                        mode: d("WAWebChat.react").Mode.INFO,
                        onClick: q,
                        showCommunityInfo: !0
                    }, a.id.toString())
                }
            }), r]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoDisclosuresSectionRow.react", ["fbt", "WAWebChatInfoDrawerRow.react", "WAWebCommonCTWAConsumerTransparency", "WAWebConsumerTransparencyModalDialog.react", "WAWebSingleChevronInCircleIcon", "WAWebSvgComponentBase", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        return !d("WAWebCommonCTWAConsumerTransparency").shouldShowUpdatedConsumerDisclosure() ? null : j.jsx(c("WAWebChatInfoDrawerRow.react"), {
            onClick: d("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog,
            icon: j.jsx(d("WAWebSingleChevronInCircleIcon").SingleChevronInCircleIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 22,
                width: 22
            }),
            title: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                testid: void 0,
                children: h._("__JHASH__mMNy0F6R-h1__JHASH__")
            }),
            secondaryTitle: j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                testid: void 0,
                children: h._("__JHASH__RtrMfGPvt2e__JHASH__")
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ContactInfoDisclosuresSectionRow = a
}), 226);
__d("WAWebContactInfoEncryptionSection", ["fbt", "WAWebABPropsSaga", "WAWebABPropsSupportGroup", "WAWebBizCoexGatingUtils", "WAWebContactGetters", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFormatNotificationTemplateModalText", "WAWebMobilePlatforms", "WAWebModalManager", "WAWebOpenCoexSystemMessageModal.react", "WAWebOpenSystemMessageModal.react", "WAWebPrivacyGatingUtils", "WAWebPrivacyModeSystemMsg", "WAWebSecurityDrawerSection.react", "WAWebSupportAIInfoNuxLoadable", "WAWebSupportChatStrings", "WAWebTextWithLearnMoreLink", "WAWebUserPrefsMultiDevice", "WAWebWid", "react", "useWAWebContactValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.onVerificationClick;
        a = d("useWAWebContactValues").useContactValues(a.contact.id, [d("WAWebContactGetters").getId, d("WAWebContactGetters").getPrivacyMode, d("WAWebContactGetters").getIsHosted]);
        var e = a[0],
            f = a[1];
        a = a[2];
        f = k(d("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(f), e, a);
        if (f) return j.jsx(c("WAWebSecurityDrawerSection.react"), {
            header: f.header,
            text: f.text,
            onClick: f.onClick
        });
        e = h._("__JHASH__woqy7QhBRjR__JHASH__");
        return j.jsx(c("WAWebSecurityDrawerSection.react"), {
            onClick: b,
            text: e,
            header: {
                type: "encryption"
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function k(a, b, e) {
        if (d("WAWebMobilePlatforms").isSMB() && d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
            var f = d("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage();
            if (f === !0) return {
                text: h._("__JHASH__3wSFb4jNqdS__JHASH__"),
                header: {
                    type: "security"
                },
                onClick: function () {
                    d("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal(d("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextForYourBusiness(), null, d("WAWebFaqUrl").getCoexHostedFaqUrl(), b)
                }
            }
        }
        if (d("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && e === !0) return {
            text: h._("__JHASH__lPW6gSDh_yn__JHASH__"),
            header: {
                type: "security"
            },
            onClick: function () {
                d("WAWebOpenCoexSystemMessageModal.react").openCoexSecurityVerifySystemMessageModal(d("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalText(), d("WAWebFormatNotificationTemplateModalText").formatCoexSecurityModalTextLastParagraph(), d("WAWebFaqUrl").getCoexHostedFaqUrl(), b)
            }
        };
        if (c("WAWebABPropsSupportGroup")(b.user)) {
            if (d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()) {
                f = function () {
                    i(b) ? g() : d("WAWebExternalLink.react").openExternalLink(d("WAWebFaqUrl").getSupportChatSafetyFaqUrl())
                };
                return {
                    text: j.jsx(c("WAWebTextWithLearnMoreLink"), {
                        text: h._("__JHASH__7TDpvZG6EZh__JHASH__"),
                        handleClick: f
                    }),
                    header: {
                        type: "none"
                    },
                    onClick: f
                }
            }
            return i(b) ? {
                text: h._("__JHASH__0m-VWXsb_4g__JHASH__"),
                header: {
                    type: "security"
                },
                onClick: function () {
                    g()
                }
            } : {
                text: h._("__JHASH__si91EUWucRi__JHASH__"),
                header: {
                    type: "security"
                },
                onClick: function () {
                    c("WAWebOpenSystemMessageModal.react")(d("WAWebSupportChatStrings").SupportChatSecurityModalText(), d("WAWebFaqUrl").getSupportChatSafetyFaqUrl(), d("WAWebSupportChatStrings").SupportChatLearnMoreLinkText())
                }
            }
        }
        switch (a) {
            case d("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
            case d("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
                return null;
            case d("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP:
                e = function () {
                    c("WAWebOpenSystemMessageModal.react")(d("WAWebFormatNotificationTemplateModalText").formatBspAndFbModalText(), d("WAWebFaqUrl").getE2EEnterpriseFaqUrl())
                };
                return {
                    text: d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? j.jsx(c("WAWebTextWithLearnMoreLink"), {
                        text: h._("__JHASH__N7wkLnJAupU__JHASH__"),
                        handleClick: e
                    }) : h._("__JHASH__36YgAilgNZk__JHASH__"), header: d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? {
                        type: "none"
                    } : {
                        type: "security"
                    }, onClick: e
                };
            case d("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB:
                b.isIAS() ? f = d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? h._("__JHASH__S8uGG7jV43j__JHASH__") : h._("__JHASH__Qd4JKwvptSk__JHASH__") : f = d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? h._("__JHASH__NkbVsWzK-ta__JHASH__") : h._("__JHASH__I2ByO6pQUNJ__JHASH__");
                a = function () {
                    c("WAWebOpenSystemMessageModal.react")(d("WAWebFormatNotificationTemplateModalText").formatFbModalText(b.isIAS()), d("WAWebFaqUrl").getE2EEnterpriseFaqUrl())
                };
                return {
                    text: j.jsx(c("WAWebTextWithLearnMoreLink"), {
                        text: f,
                        handleClick: d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? a : null
                    }), header: d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? {
                        type: "none"
                    } : {
                        type: "security"
                    }, onClick: a
                }
        }

        function g() {
            d("WAWebModalManager").ModalManager.open(j.jsx(d("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable, {}), {
                transition: "modal-flow"
            })
        }

        function i(a) {
            return c("WAWebWid").isCAPISupportAccount(a) && d("WAWebABPropsSaga").getIsSagaV1NuxEnabled()
        }
    }
    g["default"] = a
}), 226);
__d("WAWebReportUgcBotPopup", ["fbt", "WAWebConfirmPopup.react", "WAWebFbtCommon", "WAWebModalManager", "WAWebUIRefreshGatingUtils", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        var a = function () {
                d("WAWebModalManager").ModalManager.close()
            },
            b = h._("__JHASH__TNJSew1TbkJ__JHASH__");
        return j.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            title: b,
            onOK: a,
            okText: c("WAWebFbtCommon")("OK"),
            okButtonType: d("WAWebUIRefreshGatingUtils").modalRefreshEnabled() ? "solidWarning" : void 0
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ReportUgcBotPopup = a
}), 226);
__d("WAWebContactInfoIntegritySection.react", ["fbt", "WALogger", "WAWebBlockBusinessPopup.react", "WAWebBlockContactAction", "WAWebBlockContactUtils", "WAWebBlockContants", "WAWebBlocklistUtils", "WAWebBotGating", "WAWebBotProfileGetters", "WAWebChatCollection", "WAWebChatInfoDrawerSection.react", "WAWebConfirmPopup.react", "WAWebContactGetters", "WAWebDrawerButton.react", "WAWebFbtCommon", "WAWebFindChatAction", "WAWebFrontendContactGetters", "WAWebModalManager", "WAWebName.react", "WAWebPsaBlockContactPopup.react", "WAWebReportContactPopup.react", "WAWebReportSpamPopup.react", "WAWebReportUgcBotPopup", "WAWebSendSpamChatAction", "WAWebSettingsBlockedIcon", "WAWebSpamConstants", "WAWebThumbsDownIcon", "WAWebUIRefreshGatingUtils", "WAWebUseBotProfileValues", "WAWebUseBusinessProfile.react", "WAWebWamChatPSALogger", "WAWebWid", "asyncToGeneratorRuntime", "react", "useWAWebContactValues"], (function (a, b, c, d, e, f, g, h) {
    var i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Unexpected null chat during reporting from contact info"]);
        j = function () {
            return a
        };
        return a
    }

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Unexpected null chat during blocking from contact info"]);
        k = function () {
            return a
        };
        return a
    }
    var l = i || c("react");

    function a(a) {
        var e, f, g = a.contact;
        f = d("useWAWebContactValues").useContactValues(a.contact.id, [(f = d("WAWebContactGetters")).getId, d("WAWebFrontendContactGetters").getDisplayName, f.getIsBusiness, d("WAWebFrontendContactGetters").getIsContactBlocked, f.getIsIAS, f.getIsMyContact, f.getIsCAPISupportAccount]);
        var i = f[0];
        f[1];
        var m = f[2],
            n = f[3],
            o = f[4];
        f[5];
        f = f[6];
        var p = l.jsx(d("WAWebName.react").Name, {
            contact: a.contact,
            skipCheckMark: !0
        });
        e = (e = d("WAWebUseBusinessProfile.react").useBusinessProfile(i, ["isBizBot3p"])) != null ? e : {};
        e = e.isBizBot3p;
        var q = e === void 0 ? !1 : e;
        e = d("WAWebUseBotProfileValues").useOptionalBotProfileValues(i, [d("WAWebBotProfileGetters").getIsMetaCreated]);
        e = e[0];
        var r = d("WAWebBotGating").isUgcBotEnabled() && e === !1;
        e = null;
        if (!i.isBot())
            if (n) {
                n = q ? h._("__JHASH__2NJkWU_2x9U__JHASH__") : h._("__JHASH__-zVFd9jB_At__JHASH__", [h._param("contact_name", p)]);
                e = l.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                    testid: void 0,
                    color: "success",
                    icon: l.jsx(d("WAWebSettingsBlockedIcon").SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: function () {
                        return d("WAWebBlockContactUtils").handleUnblock(a.contact, d("WAWebBlockContants").BlockEntryPoint.Profile)
                    },
                    theme: "chat-info",
                    children: n
                })
            } else {
                var s = d("WAWebChatCollection").ChatCollection.get(i);
                n = function () {
                    var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                        var b = (yield d("WAWebFindChatAction").findOrCreateLatestChat(a.contact.id, "blockFromIntegritySection"));
                        if (b == null) {
                            d("WALogger").ERROR(k()).devConsole({
                                contact: a.contact
                            });
                            return
                        }
                        d("WAWebBlockContactUtils").handleBlock(b, d("WAWebBlockContants").BlockEntryPoint.Profile)
                    });
                    return function () {
                        return c.apply(this, arguments)
                    }
                }();
                var t = function () {
                        var b = function () {
                                if (s == null ? void 0 : s.isPSA) {
                                    var b = s.msgs.last();
                                    d("WAWebWamChatPSALogger").logChatPSARemove(b, 1, 1)
                                }
                                void d("WAWebBlockContactAction").blockContact({
                                    contact: a.contact,
                                    blockEntryPoint: d("WAWebBlockContants").BlockEntryPoint.Profile
                                });
                                d("WAWebModalManager").ModalManager.close()
                            },
                            e = l.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                                onOK: b,
                                okText: c("WAWebFbtCommon")("Block"),
                                onCancel: function () {
                                    return d("WAWebModalManager").ModalManager.close()
                                },
                                okButtonType: d("WAWebUIRefreshGatingUtils").modalRefreshEnabled() ? "solidWarning" : void 0,
                                title: h._("__JHASH__9Qm2t6U8TwC__JHASH__", [h._param("contact_name", p)]),
                                children: h._("__JHASH__22y2Ipc89Fx__JHASH__")
                            });
                        c("WAWebWid").isPSA(i) ? e = l.jsx(c("WAWebPsaBlockContactPopup.react"), {
                            onBlock: b,
                            onCancel: function () {
                                return d("WAWebModalManager").ModalManager.close()
                            }
                        }) : m && (e = l.jsx(c("WAWebBlockBusinessPopup.react"), {
                            contact: g,
                            blockEntryPoint: d("WAWebBlockContants").BlockEntryPoint.Profile,
                            withReport: !1
                        }));
                        d("WAWebModalManager").ModalManager.open(e)
                    },
                    u = q ? h._("__JHASH__8oI-686k6c5__JHASH__") : h._("__JHASH__7Usb5muv-R1__JHASH__", [h._param("contact_name", p)]);
                e = l.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                    testid: void 0,
                    color: "danger",
                    icon: l.jsx(d("WAWebSettingsBlockedIcon").SettingsBlockedIcon, {
                        directional: !0
                    }),
                    onClick: d("WAWebBlocklistUtils").isRBIShowConsistentBlockDialogEnabled() ? n : t,
                    theme: "chat-info",
                    children: u
                })
            } n = function () {
            var e = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (r) {
                    d("WAWebModalManager").ModalManager.open(l.jsx(d("WAWebReportUgcBotPopup").ReportUgcBotPopup, {}));
                    return
                }
                var b = (yield d("WAWebFindChatAction").findOrCreateLatestChat(a.contact.id, "reportFromIntegritySection"));
                if (b == null) {
                    d("WALogger").ERROR(j()).devConsole({
                        contact: a.contact
                    });
                    d("WAWebModalManager").ModalManager.close();
                    return
                }
                if (d("WAWebBlocklistUtils").isRBIRevampedBlockReportDesignEnabled()) {
                    d("WAWebModalManager").ModalManager.open(l.jsx(d("WAWebReportContactPopup.react").ReportContactPopupV2, {
                        chat: b,
                        spamFlow: d("WAWebSpamConstants").SpamFlow.AccountInfoReport
                    }));
                    return
                }
                var e = function () {
                        void d("WAWebSendSpamChatAction").sendReport({
                            chat: b,
                            spamFlow: d("WAWebSpamConstants").SpamFlow.AccountInfoReport
                        }), d("WAWebModalManager").ModalManager.close()
                    },
                    f = function () {
                        void d("WAWebSendSpamChatAction").sendSpamBlockClear(b, d("WAWebSpamConstants").SpamFlow.AccountInfoReport), d("WAWebModalManager").ModalManager.close()
                    };
                d("WAWebModalManager").ModalManager.open(q ? l.jsx(c("WAWebReportSpamPopup.react"), {
                    isBizBot3p: !0,
                    isMessage: !1,
                    onReport: e,
                    onReportBlockClear: f,
                    onCancel: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    }
                }) : l.jsx(c("WAWebReportSpamPopup.react"), {
                    isMessage: !1,
                    isBusiness: a.contact.isBusiness,
                    isGroupChat: !1,
                    onReport: e,
                    onReportBlockClear: f,
                    onCancel: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    }
                }))
            });
            return function () {
                return e.apply(this, arguments)
            }
        }();
        t = o || f ? h._("__JHASH__0LWVgvzVjNg__JHASH__") : h._("__JHASH__18F_kJq4rYB__JHASH__");
        m || (t = h._("__JHASH__6-_TLd9jBM6__JHASH__", [h._param("contact_name", p)]));
        (q || r) && (t = h._("__JHASH__ZUnHrzfbIBJ__JHASH__"));
        u = !c("WAWebWid").isPSA(i) && (!i.isBot() || r) ? l.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            color: "danger",
            icon: l.jsx(d("WAWebThumbsDownIcon").ThumbsDownIcon, {}),
            onClick: n,
            theme: "chat-info",
            children: t
        }) : null;
        return l.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
            children: [e, u]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoMessagesSection.react", ["fbt", "WAWebChatInfoDrawerRow.react", "WAWebChatInfoDrawerSection.react", "WAWebStarIcon", "WAWebSvgComponentBase", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        a = a.onStarred;
        var b = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: h._("__JHASH__-jY0ppnhrUk__JHASH__")
            }),
            e = j.jsx(d("WAWebStarIcon").StarIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            });
        return j.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            titleTestId: "section-starred-messages",
            children: j.jsx(c("WAWebChatInfoDrawerRow.react"), {
                testid: void 0,
                side: "chevron",
                icon: e,
                onClick: a,
                title: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoSagaSection.react", ["fbt", "WAWebABPropsSaga", "WAWebAiSignalIcon", "WAWebChatInfoDrawerRow.react", "WAWebModalManager", "WAWebSagaModal.react", "WAWebSagaV1Modal.react", "WAWebSvgComponentBase", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        return j.jsx(c("WAWebChatInfoDrawerRow.react"), {
            onClick: function () {
                return d("WAWebModalManager").ModalManager.open(d("WAWebABPropsSaga").getIsSagaV1NuxEnabled() ? j.jsx(c("WAWebSagaV1Modal.react"), {}) : j.jsx(c("WAWebSagaModal.react"), {}))
            },
            icon: j.jsx(d("WAWebAiSignalIcon").AiSignalIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            }),
            title: j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__-awvfO3r9gE__JHASH__")
            }),
            secondaryTitle: j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: h._("__JHASH__7qo5Xt9EwUD__JHASH__")
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoTopCard.react", ["fbt", "WAWebABProps", "WAWebAddUserIcon", "WAWebBizGatingUtils", "WAWebChatCollection", "WAWebChatEntryPoint", "WAWebChatIcon", "WAWebChatInfoActionButton.react", "WAWebCmd", "WAWebComposeBoxActions", "WAWebContactCollection", "WAWebContactEditUtils", "WAWebContactGetters", "WAWebContactInfoNotes.react", "WAWebContactInfoPhoneNumberHidden.react", "WAWebContactManagementGating", "WAWebCopyPasteSelectable.react", "WAWebDetailImage.react", "WAWebDialpadSmallIcon", "WAWebDrawerSection.react", "WAWebFbtCommon", "WAWebFindChatAction", "WAWebFlex.react", "WAWebLabelsInfoDrawerLabelWell.react", "WAWebModalManager", "WAWebName.react", "WAWebNotesUtils", "WAWebRequestPhoneNumberModal.react", "WAWebText_DONOTUSE.react", "WAWebUISpacing", "WAWebUsernameGatingUtils", "WAWebWamEnumPnhEntryPointType", "WAWebWid", "WAWebWidFormat", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            contactName: {
                textAlign: "x2b8uid",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.contact,
            e = a.isMessageYourselfChat,
            f = a.isPhoneNumberHidden,
            g = a.onDetailImageClick,
            i = a.onDetailImageLoad;
        a = a.onSaveContact;
        var m, n = h._("__JHASH__XmLO6sFAYHs__JHASH__"),
            o = b.phoneNumber != null ? d("WAWebContactCollection").ContactCollection.get(b.phoneNumber) : null;
        if (c("WAWebWid").isPSA(b.id)) m = n;
        else if (!b.id.isLid() && d("WAWebContactGetters").getIsMyContact(b)) m = d("WAWebWidFormat").widToFormattedUser(b.id);
        else if (b.id.isLid() && o != null && d("WAWebContactGetters").getIsMyContact(o)) m = d("WAWebWidFormat").widToFormattedUser(b.phoneNumber);
        else if (d("WAWebABProps").getABPropConfigValue("lift_me_up_m2")) b.id.isLid() ? m = d("WAWebWidFormat").widToFormattedUser(b.phoneNumber) : m = d("WAWebWidFormat").widToFormattedUser(b.id);
        else {
            n = d("WAWebContactGetters").getNotifyName(b);
            n != null && (m = "~" + n)
        }
        o = b.username != null && (b.id.isLid() && b.phoneNumber != null || !b.id.isLid()) ? j.jsx("div", {
            className: "x1evy7pa x1gslohp",
            children: j.jsx(d("WAWebCopyPasteSelectable.react").SelectableSpan, {
                dir: "auto",
                selectable: !0,
                children: j.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "16",
                    color: "secondary",
                    children: b.username != null && "@" + b.username
                })
            })
        }) : null;
        n = d("WAWebNotesUtils").shouldEnableNotesForWid(b == null ? void 0 : b.id) ? j.jsx(c("WAWebContactInfoNotes.react"), {
            contact: b
        }) : null;
        return j.jsxs(c("WAWebDrawerSection.react"), {
            theme: "padding-large",
            children: [j.jsx("div", {
                className: "x78zum5 xl56j7k x1fqp7bg",
                children: j.jsx(d("WAWebDetailImage.react").DetailImage, {
                    id: b.id,
                    size: d("WAWebDetailImage.react").DetailImageSize.Large,
                    loader: !0,
                    onLoad: i,
                    onClick: g,
                    quality: d("WAWebDetailImage.react").DetailImageQuality.High
                })
            }), j.jsxs(d("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [j.jsx(d("WAWebText_DONOTUSE.react").TextHeader, {
                    level: "2",
                    size: "24",
                    xstyle: k.contactName,
                    children: j.jsx(d("WAWebName.react").Name, {
                        testid: void 0,
                        contact: b,
                        showMessageYourselfName: e,
                        elevatedLiftMeUpEnabled: d("WAWebABProps").getABPropConfigValue("lift_me_up_m2"),
                        selectable: !0,
                        breakWord: !0,
                        checkmarkLarge: !0
                    })
                }), m != null && j.jsx("div", {
                    className: "x1evy7pa x1gslohp",
                    children: j.jsx(d("WAWebCopyPasteSelectable.react").SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: j.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: m
                        })
                    })
                }), d("WAWebUsernameGatingUtils").usernameDisplayedEnabled() && o]
            }), f && j.jsx(c("WAWebContactInfoPhoneNumberHidden.react"), {}), !e && j.jsx(l, {
                contact: b,
                displayRequestPnButton: f,
                onSaveContact: a
            }), d("WAWebBizGatingUtils").canDisplayLabel() && j.jsx(c("WAWebLabelsInfoDrawerLabelWell.react"), {
                labels: b.labels
            }), n]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function l(a) {
        var b = a.contact,
            e = a.displayRequestPnButton;
        a = a.onSaveContact;
        var f = function () {
                d("WAWebFindChatAction").findOrCreateLatestChat(b.id, "chatInfoTopCard").then(function (a) {
                    d("WAWebCmd").Cmd.openChatFromUnread(a, d("WAWebChatEntryPoint").ChatEntryPoint.ContactInfo).then(function (b) {
                        b && d("WAWebComposeBoxActions").ComposeBoxActions.focus(a)
                    })
                })
            },
            g = h._("__JHASH__sRT3emgPHXp__JHASH__"),
            i = h._("__JHASH__6YR_xwPK5lu__JHASH__");
        g = d("WAWebContactGetters").getCanRequestPhoneNumber(b) ? g : i;
        i = e && j.jsx(c("WAWebChatInfoActionButton.react"), {
            Icon: d("WAWebDialpadSmallIcon").DialpadSmallIcon,
            iconWidth: 19,
            label: g,
            xstyle: [d("WAWebUISpacing").uiMargin.start16, d("WAWebUISpacing").uiMargin.end16],
            disabled: !d("WAWebContactGetters").getCanRequestPhoneNumber(b),
            onClick: function () {
                d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebRequestPhoneNumberModal.react"), {
                    entryPoint: d("WAWebWamEnumPnhEntryPointType").PNH_ENTRY_POINT_TYPE.CHAT_INFO_REQUEST
                }))
            },
            testid: void 0
        });
        e = d("WAWebChatCollection").ChatCollection.getActive();
        g = !(e == null ? void 0 : e.id.equals(b.id));
        e = g && j.jsx(c("WAWebChatInfoActionButton.react"), {
            Icon: d("WAWebChatIcon").ChatIcon,
            iconWidth: 19,
            label: h._("__JHASH__50dK-haK_9Z__JHASH__"),
            testid: void 0,
            xstyle: [d("WAWebUISpacing").uiMargin.start16, d("WAWebUISpacing").uiMargin.end16],
            disabled: !1,
            onClick: f
        });
        g = null;
        d("WAWebContactEditUtils").canSaveAsMyContacts(b.id) && !d("WAWebContactGetters").getIsMyContact(b) && d("WAWebContactManagementGating").contactManagementEnabled() && (g = j.jsx(c("WAWebChatInfoActionButton.react"), {
            Icon: d("WAWebAddUserIcon").AddUserIcon,
            iconWidth: 26,
            label: c("WAWebFbtCommon")("Add"),
            testid: void 0,
            xstyle: [d("WAWebUISpacing").uiMargin.start16, d("WAWebUISpacing").uiMargin.end16],
            disabled: !1,
            onClick: a
        }));
        return j.jsxs(d("WAWebFlex.react").FlexRow, {
            justify: "center",
            xstyle: [d("WAWebUISpacing").uiMargin.top8, d("WAWebUISpacing").uiMargin.bottom4],
            children: [i, e, g]
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebContactInfoWaChatSecuritySection", ["fbt", "WAWebFaqUrl", "WAWebFormatNotificationTemplateModalText", "WAWebOpenSystemMessageModal.react", "WAWebPrivacyGatingUtils", "WAWebSecurityDrawerSection.react", "WAWebTextWithLearnMoreLink", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        var a = k();
        return j.jsx(c("WAWebSecurityDrawerSection.react"), {
            header: a.header,
            text: a.text,
            onClick: a.onClick
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function k() {
        var a = function () {
                c("WAWebOpenSystemMessageModal.react")(d("WAWebFormatNotificationTemplateModalText").formatWaChatSecurityModalText(), d("WAWebFaqUrl").getWAChatFaqUrl())
            },
            b = h._("__JHASH__cAFPvH50V7X__JHASH__");
        return {
            text: d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? j.jsx(c("WAWebTextWithLearnMoreLink"), {
                text: b,
                handleClick: a
            }) : b,
            header: d("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled() ? {
                type: "none"
            } : {
                type: "security"
            },
            onClick: a
        }
    }
    g["default"] = a
}), 226);
__d("WAWebContactInfoDrawer.react", ["fbt", "WAFilteredCatch", "WALogger", "WAQplTypes", "WATimeUtils", "WAWebABProps", "WAWebABPropsSaga", "WAWebBackendErrors", "WAWebBizBot3pInfoAboutSection.react", "WAWebBizBotCommandsSection.react", "WAWebBizGatingUtils", "WAWebBotGating", "WAWebBotInfoAboutSection.react", "WAWebBusinessAboutSection.react", "WAWebBusinessAccountBanner.react", "WAWebBusinessContactDisclosureSection", "WAWebBusinessInfo.react", "WAWebBusinessLogEvents", "WAWebBusinessProfile.react", "WAWebBusinessProfileUtils", "WAWebBusinessTopCard.react", "WAWebCatalogCollection", "WAWebChatCollection", "WAWebChatEphemerality", "WAWebChatInfoDrawerRow.react", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoFavoritesSection.react", "WAWebChatInfoListsSection.react", "WAWebChatInfoMediaSection.react", "WAWebChatInfoPhoneNumberVisibilityIndicator.react", "WAWebChatThreadLogging", "WAWebClickable.react", "WAWebCmd", "WAWebCommonCTWAConsumerTransparency", "WAWebContactEditUtils", "WAWebContactGetters", "WAWebContactInfoAboutSection", "WAWebContactInfoBizBot1pSection.react", "WAWebContactInfoBizBot3pSection.react", "WAWebContactInfoCommonGroupsSection.react", "WAWebContactInfoDisclosuresSectionRow.react", "WAWebContactInfoEncryptionSection", "WAWebContactInfoIntegritySection.react", "WAWebContactInfoLinkedSocialAccounts.react", "WAWebContactInfoMessagesSection.react", "WAWebContactInfoSagaSection.react", "WAWebContactInfoTopCard.react", "WAWebContactInfoWaChatSecuritySection", "WAWebContactManagementGating", "WAWebContactUtils", "WAWebDeleteIcon", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerButton.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebDrawerManager", "WAWebDrawerSection.react", "WAWebEphemeralSettingRow.react", "WAWebFlatListController", "WAWebFrontendContactGetters", "WAWebHasAcceptedBizBotTos", "WAWebInboxFiltersGatingUtils", "WAWebKeepInChatIcon", "WAWebLabelsInfoDrawerLabelWell.react", "WAWebListsGatingUtils", "WAWebManageE2ESessionsJob", "WAWebMessageLogQplEvents", "WAWebModalManager", "WAWebMuteRow.react", "WAWebPencilIcon", "WAWebPhotoViewerModal.react", "WAWebProductCatalogCatalogDrawerSection.react", "WAWebProductCatalogContext", "WAWebProductCatalogSession", "WAWebProductCatalogShopsCatalogDrawerSection.react", "WAWebSendMsgDatabaseJob", "WAWebStateUtils", "WAWebSvgComponentBase", "WAWebToast.react", "WAWebToastManager", "WAWebUseBusinessProfile.react", "WAWebUserPrefsMeUser", "WAWebUsernameTypes", "WAWebUtilsLogQplEvents", "WAWebWDSText.react", "WAWebWamEnumActionEntryPoint", "WAWebWamEnumCatalogEntryPoint", "WAWebWamEnumLandingSurface", "WAWebWamEnumUnlockEntryPoint", "WAWebWid", "cr:6008", "gkx", "react", "useLazyRef", "useWAWebChatLockRestriction", "useWAWebContactValues", "useWAWebOnUnmount", "useWAWebUIM"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product catalog in contact drawer from server"]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        aa = e.useContext,
        m = e.useEffect,
        ba = e.useMemo,
        ca = e.useRef,
        da = e.useState,
        n = {
            lastSectionRow: {
                marginBottom: "xyorhqc",
                $$css: !0
            },
            saveContactIcon: {
                color: "xq22nx5",
                $$css: !0
            },
            chatWallpaperIcon: {
                color: "xq22nx5",
                $$css: !0
            }
        };

    function o(a) {
        var b = a.catalogContext,
            e = a.contact,
            f = a.onProductCatalog;
        a = a.onProductDetail;
        var g = d("WAWebCatalogCollection").CatalogCollection.get(e.id);
        if (!g) return null;
        var i = "",
            j = !1;
        d("WAWebBizGatingUtils").canSeeBizProfileV3() && (i = h._("__JHASH__YGM6-igt0IH__JHASH__"), j = !0);
        b = b.session;
        if (b.isAccidental()) return null;
        return d("WAWebBusinessProfileUtils").hasShop(e.businessProfile) ? d("WAWebBizGatingUtils").bannedShopsEnabled() && d("WAWebBusinessProfileUtils").isShopBanned(e.businessProfile) ? null : l.jsx(c("WAWebProductCatalogShopsCatalogDrawerSection.react"), {
            businessProfile: e.businessProfile,
            catalog: g,
            subtitle: i,
            hideIncompleteRows: j
        }) : l.jsx(c("WAWebProductCatalogCatalogDrawerSection.react"), {
            onProductDetail: a,
            onProductCatalog: f,
            catalog: g,
            subtitle: i,
            hideIncompleteRows: j,
            shouldLog: !0
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";
    e = l.forwardRef(a);

    function a(a, e) {
        var f, g, i, j = babelHelpers["extends"]({}, a),
            p = j.contact,
            ea = j.onVerification,
            q = j.onClose,
            r = j.onBack,
            fa = j.onProductDetail;
        a = j.onProductCatalog;
        var s = j.onSaveContact,
            t = j.onWallpaperClick,
            u = c("useWAWebUIM")(),
            v = aa(d("WAWebDrawerContext").DrawerContext),
            w = d("useWAWebContactValues").useContactValues(j.contact.id, [(g = d("WAWebContactGetters")).getId, (i = d("WAWebFrontendContactGetters")).getFormattedName, i.getFormattedUser, i.getFormattedShortName, g.getIsBusiness, g.getIsEnterprise, g.getIsMyContact, i.getCommonGroups, g.getShowBusinessCheckmarkAsPrimary, g.getShowBusinessCheckmarkAsSecondary, g.getVerifiedName, g.getVerifiedLevel, g.getName, g.getNotifyName, g.getLabels, i.getPhoneNumber]),
            x = w[0];
        w[1];
        w[2];
        w[3];
        var y = w[4],
            z = w[5];
        w[6];
        w[7];
        w[8];
        w[9];
        w[10];
        w[11];
        w[12];
        w[13];
        var A = w[14];
        w = w[15];
        i = d("useWAWebContactValues").useContactValues(j.contact.id, [i.getBusinessCatalog, g.getIsMe, g.getStatusMute, i.getDisplayName, i.getShareOwnPn, g.getRequestedPnTimestamp, g.getCanRequestPhoneNumber, g.getIsIAS, g.getIsCAPISupportAccount]);
        var B = i[0];
        g = i[1];
        i[2];
        i[3];
        i[4];
        i[5];
        i[6];
        var C = i[7];
        i = i[8];
        var D = c("useLazyRef")(function () {
                return new(c("WAWebFlatListController"))()
            }),
            E = ca(!1),
            F = da(100),
            G = F[0],
            ga = F[1],
            H = ba(function () {
                return d("WAWebChatCollection").ChatCollection.get(x)
            }, [x]),
            I = d("WAWebUseBusinessProfile.react").useBusinessProfile(x, ["isBizBot1p", "isBizBot3p", "stale", "isProfileLinked", "coverPhoto", "isCatalogDisabledDueToMetaLinking"]);
        F = d("WAWebBotGating").isBizBot3pEnabled() && (I == null ? void 0 : I.isBizBot3p) === !0;
        var J = d("WAWebBotGating").isBizBot1pEnabled() && (I == null ? void 0 : I.isBizBot1p) === !0,
            K = d("WAWebHasAcceptedBizBotTos").useHasAcceptedBizBotTos();
        g = g;
        m(function () {
            I && !I.stale && B && d("WAWebCatalogCollection").CatalogCollection.findCarouselCatalog(x)["catch"](d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function (a) {
                d("WALogger").WARN(k()).devConsole(a)
            }));
            d("WAWebSendMsgDatabaseJob").getFanOutListJob([x, d("WAWebUserPrefsMeUser").assertGetMe()]).then(function (a) {
                d("WAWebManageE2ESessionsJob").ensureE2ESessions(a)
            });
            var a = d("WAWebProductCatalogContext").getProductCatalogContext(v);
            a = a.session;
            if (a.isAccidental()) d("WAWebDrawerManager").DrawerManager.setDrawerContext("right", d("WAWebProductCatalogContext").buildProductCatalogContext(new(d("WAWebProductCatalogSession").ProductCatalogSession)(), d("WAWebContactUtils").getMaybeBizPlatformForLogging(x.toString()), d("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
            else if (y && d("WAWebBizGatingUtils").canSeeBizProfileV3()) {
                a = x === d("WAWebUserPrefsMeUser").getMaybeMeUser();
                var b = j.profileEntryPoint;
                !a && b && d("WAWebBusinessLogEvents").logProfileImpression(d("WAWebProductCatalogContext").getProductCatalogSessionId(v), b, !!(I == null ? void 0 : I.isProfileLinked), !!(I == null ? void 0 : I.coverPhoto))
            }
            I && d("WAWebMessageLogQplEvents").qplEndProfileView(d("WAQplTypes").QuickLogActionType.SUCCESS)
        }, []);
        m(function () {
            if (d("WAWebBizGatingUtils").btmThreadsLoggingEnabled()) {
                var a;
                a = ((a = d("WAWebUserPrefsMeUser").getMaybeMeUser()) == null ? void 0 : a.equals(x)) === !0;
                var b = d("WAWebProductCatalogContext").getProductCatalogContext(v);
                b = b.session;
                !b.isAccidental() && !a && (H == null ? void 0 : H.id) && d("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
                    activityType: "profileViews",
                    ts: d("WATimeUtils").unixTime(),
                    chatId: H.id
                }])
            }
        }, []);
        c("useWAWebOnUnmount")(function () {
            var a = d("WAWebProductCatalogContext").getProductCatalogContext(v);
            a = a.session;
            a.isAccidental() || y && d("WAWebBizGatingUtils").canSeeBizProfileV3() && d("WAWebBusinessLogEvents").logProfileExit(d("WAWebProductCatalogContext").getProductCatalogSessionId(v), G, I == null ? void 0 : I.isProfileLinked, !!(I == null ? void 0 : I.coverPhoto))
        });
        var L = function () {
                q ? q() : u == null ? void 0 : u.requestDismiss()
            },
            M = function () {
                r && r()
            };
        f = d("useWAWebChatLockRestriction").useChatLockRestriction({
            id: "locked-chat-info-" + ((f = H == null ? void 0 : H.id.toString()) != null ? f : "unknown"),
            condition: (f = H) != null ? f : "bypass",
            onPromptFailure: r ? M : L,
            entryPoint: d("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_INFO,
            landingSurface: d("WAWebWamEnumLandingSurface").LANDING_SURFACE.CHAT_INFO,
            unlockEntryPoint: d("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_INFO
        });
        if (!f) return null;
        f = function () {
            ea()
        };
        var ha = function () {
                var a = d("WAWebChatCollection").ChatCollection.assertGet(x);
                d("WAWebCmd").Cmd.deleteOrExitChatFromEntryPoint(a, 12)
            },
            N = function (a) {
                if (!E.current && !c("WAWebWid").isPSA(x)) {
                    d("WAWebToastManager").ToastManager.open(l.jsx(d("WAWebToast.react").Toast, {
                        msg: h._("__JHASH__q2XF6S9JHk3__JHASH__")
                    }));
                    return
                }
                var b = a.target;
                a = function (a) {
                    a(b)
                };
                d("WAWebModalManager").ModalManager.openMedia(l.jsx(c("WAWebPhotoViewerModal.react"), {
                    contact: p,
                    profilePicThumb: p.getProfilePicThumb(),
                    animateBorderRadius: !0,
                    getZoomNode: a
                }), {
                    transition: "profile-viewer",
                    uim: u
                })
            },
            O = function () {
                E.current = !0
            },
            P = function (a) {
                d("WAWebUtilsLogQplEvents").qplStartProductView("ContactInfo"), fa(a)
            },
            Q = function () {
                if (!p || !y || !I) return !1;
                if (!B) return !1;
                return I.isCatalogDisabledDueToMetaLinking ? !1 : !0
            },
            ia = function (a) {
                a = Math.floor(100 * (1 + a.currentTarget.scrollTop / a.currentTarget.offsetHeight));
                a > G && ga(a)
            };
        z = z ? null : l.jsx(c("WAWebContactInfoCommonGroupsSection.react"), {
            contact: p,
            onClose: L,
            flatListController: D.current
        });
        var R = null;
        j.onMediaGallery && H && (R = l.jsx(c("WAWebChatInfoMediaSection.react"), {
            chat: H,
            onMediaGallery: j.onMediaGallery
        }));
        var S;
        !c("gkx")("26258") && b("cr:6008") && (S = l.jsx(b("cr:6008"), {
            contact: d("WAWebStateUtils").unproxy(p)
        }));
        var T = null,
            U = null;
        if (Q()) {
            Q = l.jsx(o, {
                contact: p,
                catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(v),
                onProductDetail: P,
                onProductCatalog: a
            });
            d("WAWebBizGatingUtils").canSeeBizProfileV3() ? U = Q : T = Q
        }
        P = H && H.mute.canMute() ? l.jsx(c("WAWebMuteRow.react"), {
            chat: H,
            mute: H.mute
        }) : null;
        Q = d("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") ? l.jsx(c("WAWebChatInfoDrawerRow.react"), {
            side: "chevron",
            onClick: t,
            icon: l.jsx(d("WAWebPencilIcon").PencilIcon, {
                xstyle: n.chatWallpaperIcon
            }),
            testid: void 0,
            title: l.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__ietVlHPyzR2__JHASH__")
            })
        }) : null;
        t = i && d("WAWebABPropsSaga").getIsSagaEnabled() ? l.jsx(c("WAWebContactInfoSagaSection.react"), {}) : null;
        var V;
        j.onStarred && (V = l.jsx(c("WAWebContactInfoMessagesSection.react"), {
            onStarred: j.onStarred
        }));
        var W;
        if (H && (H.hasKeptMsgs() || d("WAWebChatEphemerality").isEphemeralSettingOn(H))) {
            var X = l.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                    as: "span",
                    children: h._("__JHASH__kl997nhZ51l__JHASH__")
                }),
                Y = l.jsx(d("WAWebKeepInChatIcon").KeepInChatIcon, {
                    color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                    height: 20
                });
            W = l.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
                titleTestId: "section-kept-messages",
                xstyle: n.lastSectionRow,
                children: l.jsx(c("WAWebChatInfoDrawerRow.react"), {
                    testid: void 0,
                    side: "chevron",
                    icon: Y,
                    onClick: j.onKept,
                    title: X
                })
            })
        }
        Y = H && d("WAWebChatEphemerality").shouldShowEphemeralSetting(H) ? l.jsx(d("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
            onClick: j.onEphemeral,
            chat: H,
            testid: void 0
        }) : null;
        X = null;
        c("WAWebWid").isPSA(x) ? X = l.jsx(c("WAWebContactInfoWaChatSecuritySection"), {}) : !x.isBot() && !F && (X = l.jsx(c("WAWebContactInfoEncryptionSection"), {
            contact: d("WAWebStateUtils").unproxy(p),
            onVerificationClick: f
        }));
        f = x.isLid() && w == null;
        w = x.isLid() && (H == null ? void 0 : H.lidOriginType) !== d("WAWebUsernameTypes").LidOriginType.GENERAL;
        w = H && w ? l.jsx(d("WAWebChatInfoPhoneNumberVisibilityIndicator.react").PhoneNumberVisibilityIndicator1On1, {
            chat: H
        }) : null;
        var Z, $ = d("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiRowEnabled() || d("WAWebBizGatingUtils").isUpdatedConsumerDisclosureUiIndiaEnabled();
        J ? Z = !$ || K ? l.jsx(d("WAWebContactInfoBizBot1pSection.react").ContactInfoBizBot1pSection, {}) : null : F && (Z = l.jsx(d("WAWebContactInfoBizBot3pSection.react").ContactInfoBizBot3pSection, {}));
        J = l.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: d("WAWebCommonCTWAConsumerTransparency").shouldShowUpdatedConsumerDisclosure() && n.lastSectionRow,
            children: [P, t, Y, Q, $ ? null : [Z, X], w]
        });
        K = H != null && d("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(H) && d("WAWebCommonCTWAConsumerTransparency").shouldShowUpdatedConsumerDisclosure();
        P = K || $ ? l.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: n.lastSectionRow,
            children: [$ ? X : null, K ? l.jsx(d("WAWebContactInfoDisclosuresSectionRow.react").ContactInfoDisclosuresSectionRow, {}) : null, $ ? Z : null]
        }) : null;
        t = !y;
        Y = t || C || i || x.isBot() || F ? null : l.jsx(c("WAWebBusinessAboutSection.react"), {
            contact: d("WAWebStateUtils").unproxy(p)
        });
        Q = null;
        x.isBot() ? Q = l.jsx(c("WAWebBotInfoAboutSection.react"), {
            contact: d("WAWebStateUtils").unproxy(p)
        }) : t && (Q = l.jsx(c("WAWebContactInfoAboutSection"), {
            contact: d("WAWebStateUtils").unproxy(p)
        }));
        w = null;
        F && I && (w = l.jsx(c("WAWebBizBot3pInfoAboutSection.react"), {
            businessProfile: d("WAWebStateUtils").unproxy(I)
        }));
        X = null;
        d("WAWebBotGating").isBizBot3pEnabled() && I && (X = l.jsx(c("WAWebBizBotCommandsSection.react"), {
            businessProfile: d("WAWebStateUtils").unproxy(I)
        }));
        K = function () {
            s == null ? void 0 : s(p)
        };
        $ = d("WAWebBizGatingUtils").canSeeBizProfileV3() && y && I ? l.jsx(c("WAWebBusinessTopCard.react"), {
            contact: p,
            onProfilePicLoad: O,
            onProfilePicClick: N,
            businessProfile: d("WAWebStateUtils").unproxy(I),
            onProductCatalog: a,
            isPhoneNumberHidden: f,
            onSaveContact: K
        }) : l.jsx(c("WAWebContactInfoTopCard.react"), {
            contact: p,
            onDetailImageLoad: O,
            onDetailImageClick: N,
            isMessageYourselfChat: g,
            isPhoneNumberHidden: f,
            onSaveContact: K
        });
        var ja, ka;
        t = null;
        a = void 0;
        if (y && I)
            if (d("WAWebBizGatingUtils").canSeeBizProfileV3() && I) {
                t = x.isBot() ? null : l.jsx(c("WAWebBusinessInfo.react"), {
                    businessProfile: d("WAWebStateUtils").unproxy(I),
                    showDescription: !F
                });
                ja = !C && !i ? l.jsx(c("WAWebBusinessAccountBanner.react"), {
                    contact: p
                }) : null;
                ((O = A == null ? void 0 : A.length) != null ? O : 0) > 0 && d("WAWebBizGatingUtils").canDisplayLabel() && (ka = l.jsx(c("WAWebDrawerSection.react"), {
                    theme: "padding",
                    children: l.jsx(c("WAWebLabelsInfoDrawerLabelWell.react"), {
                        labels: A,
                        theme: "standalone"
                    })
                }));
                a = ia
            } else I && (t = l.jsx(d("WAWebBusinessProfile.react").BusinessProfile, {
                contact: p,
                businessProfile: d("WAWebStateUtils").unproxy(I)
            }));
        N = {
            title: h._("__JHASH__ocgQKO3F0P8__JHASH__"),
            type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            focusBackOrCancel: !0
        };
        f = {};
        r ? f = babelHelpers["extends"]({
            onBack: M
        }, N) : f = babelHelpers["extends"]({
            onCancel: L
        }, N);
        var la;
        I && I.isProfileLinked === !0 && d("WAWebBizGatingUtils").bizLinkedAccountsEnabled() && d("WAWebBizGatingUtils").canViewBizLinkedAccounts() && (la = l.jsx(c("WAWebContactInfoLinkedSocialAccounts.react"), {
            businessProfile: d("WAWebStateUtils").unproxy(I),
            rowTheme: "linked-account-consumer"
        }));
        var ma;
        if (s && d("WAWebContactEditUtils").canSaveAsMyContacts(p.id) && d("WAWebContactGetters").getIsMyContact(p) && d("WAWebContactManagementGating").contactManagementEnabled()) {
            F = h._("__JHASH__lDuO8ZDcVDZ__JHASH__");
            ma = l.jsx(d("WAWebClickable.react").Clickable, {
                dataTestId: "btn-save-contact",
                onClick: K,
                title: F,
                ariaLabel: F,
                children: l.jsx(d("WAWebPencilIcon").PencilIcon, {
                    xstyle: n.saveContactIcon
                })
            })
        }
        return l.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            theme: "striped",
            testid: void 0,
            tsNavigationData: {
                surface: "contact-info-drawer"
            },
            children: [l.jsx(d("WAWebDrawerHeader.react").DrawerHeader, babelHelpers["extends"]({}, f, {
                testid: void 0,
                children: ma
            })), l.jsx(c("WAWebDrawerBody.react"), {
                flatListControllers: [D.current],
                onScroll: a,
                children: l.jsxs("section", {
                    className: "x1c4vz4f x2lah0s xdl72j9 x1w3bhph",
                    children: [$, ja, H ? l.jsx(c("WAWebBusinessContactDisclosureSection"), {
                        chat: H
                    }) : null, w, X, ka, U, t, la, T, Q, R, V, W, J, P, Y, S, !g && z, H && H.canToggleFavorite() && d("WAWebInboxFiltersGatingUtils").inboxFavoritesManagementEnabled() && l.jsx(d("WAWebChatInfoFavoritesSection.react").ChatInfoFavoritesSection, {
                        chat: H
                    }), H && d("WAWebListsGatingUtils").isListsEnabled() && l.jsx(d("WAWebChatInfoListsSection.react").ChatInfoListsSection, {
                        chat: H
                    }), !g && l.jsx(c("WAWebContactInfoIntegritySection.react"), {
                        contact: p
                    }), l.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
                        children: H ? l.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                            testid: void 0,
                            icon: l.jsx(d("WAWebDeleteIcon").DeleteIcon, {}),
                            color: "danger",
                            onClick: ha,
                            theme: "chat-info",
                            children: h._("__JHASH__5bdGZfuj0C8__JHASH__")
                        }) : null
                    })]
                })
            })]
        }, "contact-info-modal")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebDeltaArrow.react", ["WAWebArrowForwardIcon", "WAWebL10N", "WAWebNewsletterMetricUtils", "WAWebSvgComponentBase", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || c("react");

    function j(a) {
        var b = c("WAWebL10N").isRTL();
        return {
            transform: "rotate(" + (b ? a : -a) + "deg) scale(" + (b ? -1 : 1) + ")"
        }
    }

    function a(a) {
        var b = a.delta;
        a = a.size;
        if (d("WAWebNewsletterMetricUtils").isDeltaValueZero(b)) return null;
        if (b === "infinite") return null;
        b = b > 0;
        var c = b ? 45 : -45;
        return i.jsx(d("WAWebArrowForwardIcon").ArrowForwardIcon, {
            height: a,
            width: a,
            style: j(c),
            color: b ? d("WAWebSvgComponentBase").SvgColorProp.SUCCESS : d("WAWebSvgComponentBase").SvgColorProp.CRITICAL
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.DeltaArrow = a
}), 98);
__d("WAWebDeltaText.react", ["WAWebL10N", "WAWebNewsletterMetricUtils", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || c("react");

    function j(a) {
        return d("WAWebNewsletterMetricUtils").isDeltaValueZero(a) ? "secondary" : a > 0 ? "success" : "critical"
    }

    function k(a) {
        return Math.abs(a) >= 100 ? c("WAWebL10N").d(a, void 0, {
            signDisplay: "exceptZero",
            style: "percent"
        }) : c("WAWebL10N").n(a, void 0, {
            signDisplay: "exceptZero",
            style: "percent",
            maximumSignificantDigits: 3,
            trailingZeroDisplay: "stripIfInteger"
        })
    }

    function a(a) {
        var b = a.delta,
            c = a.size;
        a = a.testid;
        if (b === "infinite") return null;
        a = c === "small" ? d("WAWebWDSText.react").WDSTextMuted : d("WAWebWDSText.react").WDSTextTitle;
        return i.jsx(a, {
            testid: void 0,
            color: j(b),
            children: k(b)
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.DeltaText = a
}), 98);
__d("WAWebMessageGallery.react", ["WAAbortError", "WAWebChatMessageSearch", "WAWebCmd", "WAWebDisplayType", "WAWebEmptyState.react", "WAWebFlatListLoadingSpinnerItem.react", "WAWebFrontendConstants", "WAWebFrontendMsgGetters", "WAWebStarredMsg.react", "WAWebStateUtils", "asyncToGeneratorRuntime", "react", "useForceUpdate", "useMergeRefs", "useWAWebListener", "useWAWebMeasure", "useWAWebThrottledCallback", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g) {
    var h, i;
    e = i || d("react");
    var j = h || (h = c("react")),
        k = e.useCallback,
        l = e.useEffect,
        m = e.useRef,
        n = e.useState;

    function a(a) {
        var e = a.getHasBefore,
            f = a.getQueryBefore,
            g = a.msgsCollection,
            h = a.msgsCollectionUpdateEvents,
            i = a.emptyText,
            o = a.scrollOffset,
            p = o === void 0 ? 0 : o,
            q = a.selectable,
            r = a.onMessageSelect,
            s = a.queryCollection,
            t = a.selectedMessages;
        o = a.messageElements;
        var u = a.onProductDetail,
            v = a.setScrollOffset,
            w = a.filterMessages;
        a = a.testid;
        var x = e();
        a = f();
        var y = m(null),
            z = c("useWAWebUnmountSignal")(),
            A = c("useWAWebThrottledCallback")(function (a) {
                if (!x) return;
                s(a)
            }, 100),
            B = n(function () {
                return g.toArray()
            }),
            C = B[0],
            D = B[1],
            E = c("useWAWebThrottledCallback")(function (a) {
                var b = a.scrollHeight - a.clientHeight - a.scrollTop;
                b = b < d("WAWebFrontendConstants").SCROLL_FUDGE;
                x && b && A(g.head());
                v && v(a.scrollTop)
            }, 100);
        B = function (a) {
            E(a.currentTarget)
        };
        l(function () {
            x && A();
            var a = y.current;
            a && (a.scrollTop = p);
            return function () {
                E.cancel()
            }
        }, []);
        var F = function (a, b) {
                a = d("WAWebStateUtils").unproxy(a);
                q === !0 && b !== void 0 ? r(a, b) : void d("WAWebCmd").Cmd.openChatAt({
                    chat: d("WAWebFrontendMsgGetters").getChat(a),
                    msgContext: d("WAWebChatMessageSearch").getSearchContext(d("WAWebFrontendMsgGetters").getChat(a), a.id)
                })
            },
            G = m(),
            H = c("useForceUpdate")(),
            I = k(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    var b;
                    (b = G.current) == null ? void 0 : b.abort();
                    if (a == null) {
                        D(g.toArray());
                        H();
                        return
                    }
                    G.current = new AbortController();
                    b = G.current.signal;
                    try {
                        a = (yield a(g, b));
                        !b.aborted && !z.aborted && (D(a), H())
                    } catch (a) {
                        if (a.name !== d("WAAbortError").ABORT_ERROR) throw a
                    }
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }(), [g, H, z]);
        d("useWAWebListener").useListener(g, h, function () {
            return I(w)
        });
        l(function () {
            void I(w);
            return function () {
                var a;
                return (a = G.current) == null ? void 0 : a.abort()
            }
        }, [I, w]);
        h = c("useWAWebMeasure")();
        var J = h[0],
            K = h[1].height;
        h = c("useMergeRefs")(J, y);
        l(function () {
            w != null && e() && !f() && y.current != null && y.current.scrollHeight < K + d("WAWebFrontendConstants").SCROLL_FUDGE && A(g.head())
        });
        J = null;
        o ? J = o(C, F) : J = C.map(function (a, b) {
            return j.jsx(c("WAWebStarredMsg.react"), {
                msg: a,
                selectable: q,
                selectedMessages: t,
                onMessageSelect: r,
                displayType: d("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
                onClickMsg: F,
                onProductClick: u
            }, a.id.toString() + "_" + b)
        }).reverse();
        if (a) {
            if (J.length === 0) return j.jsx(d("WAWebEmptyState.react").Loading, {});
            J.push(j.jsx(c("WAWebFlatListLoadingSpinnerItem.react"), {}, -1))
        }
        return J.length === 0 && !a && !x ? j.jsx(d("WAWebEmptyState.react").Empty, {
            text: i,
            testid: void 0
        }) : j.jsx("div", {
            "data-testid": void 0,
            ref: h,
            onScroll: B,
            className: "x78zum5 xdt5ytf x6ikm8r x1rife3k x1iyjqo2",
            children: J
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebDocGallery.react", ["fbt", "WAWebFrontendMsgGetters", "WAWebHistorySyncComponents.react", "WAWebMessageGallery.react", "WAWebMsgsCollectionFilterer", "react", "useLazyRef", "useWAWebListener", "useWAWebUiIdle"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect;

    function a(a) {
        var b = a.docMsgs,
            e = a.chat,
            f = a.isFilterEnabled,
            g = f === void 0 ? !1 : f,
            i = a.filterText;
        f = babelHelpers.objectWithoutPropertiesLoose(a, ["docMsgs", "chat", "isFilterEnabled", "filterText"]);
        var j = c("useWAWebUiIdle")(),
            m = c("useLazyRef")(function () {
                return new(c("WAWebMsgsCollectionFilterer"))(function (a) {
                    var b = [],
                        c = d("WAWebFrontendMsgGetters").getText(a);
                    c != null && b.push(c);
                    c = a.mediaData.filename;
                    b.push(c);
                    return b.join(" ")
                })
            });
        a = ["add", "remove", "reset", "query_doc_before"];
        d("useWAWebListener").useListener(b, "add", function (a) {
            g && m.current.cacheMessageTokens(a)
        });
        d("useWAWebListener").useListener(b, "remove", function (a) {
            g && m.current.removeMessageTokensFromCache(a)
        });
        d("useWAWebListener").useListener(b, "reset", function () {
            g && m.current.clearTokensCache()
        });
        l(function () {
            g && b.forEach(function (a) {
                m.current.cacheMessageTokens(a)
            })
        }, [b, m, g]);
        var n = function (a) {
                if (!b.hasDocBefore) return;
                j(function () {
                    b.queryDocs(e, a)
                })
            },
            o = g ? function (a, b) {
                return m.current.filter(a, i, b)
            } : void 0;
        return k.jsxs(k.Fragment, {
            children: [k.jsx(c("WAWebMessageGallery.react"), babelHelpers["extends"]({
                testid: void 0,
                msgsCollection: b,
                msgsCollectionUpdateEvents: a,
                queryCollection: n,
                getHasBefore: function () {
                    return b.hasDocBefore
                },
                getQueryBefore: function () {
                    return b.queryDocBefore
                },
                emptyText: h._("__JHASH__hqVgxa0YWdC__JHASH__"),
                chat: e,
                filterMessages: o
            }, f)), k.jsx(d("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
                chat: e
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebExitedGroupQPSurface.react", ["WAWebCTWAConstants", "WAWebFlex.react", "WAWebPrivacyTipBanner.react", "WAWebQuickPromotionGating", "react", "useWAWebPrivacyTipQuickPromotion"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react");

    function a(a) {
        a = a.group;
        a = d("useWAWebPrivacyTipQuickPromotion").usePrivacyTipQuickPromotion({
            surfaceId: d("WAWebCTWAConstants").QP_SURFACE_ID_EXITED_GROUP,
            group: a
        });
        if (a == null || !d("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled()) return;
        var b = a.promotion,
            c = a.sanitizedText,
            e = a.image,
            f = a.dismiss,
            g = a.primaryActionClick;
        a = a.settingStep;
        b = b.promotion.data.primaryAction;
        return i.jsx(d("WAWebFlex.react").FlexRow, {
            paddingTop: 8,
            children: i.jsx(d("WAWebPrivacyTipBanner.react").PrivacyTipBanner, {
                text: c,
                image: e,
                actionText: b == null ? void 0 : b.text,
                onDismiss: f,
                onAction: g,
                settingStep: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ExitedGroupQPSurface = a
}), 98);
__d("WAWebExitedGroupMemberSection.react", ["fbt", "WAWebDrawerSection.react", "WAWebExitedGroupQPSurface.react", "WAWebFlex.react", "WAWebQuickPromotionGating", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        a = a.group;
        return !d("WAWebQuickPromotionGating").groupsPrivacyTipsEnabled() ? null : j.jsx(c("WAWebDrawerSection.react"), {
            children: j.jsxs(d("WAWebFlex.react").FlexColumn, {
                padding: 16,
                align: "center",
                children: [j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                    children: h._("__JHASH__oVg8m9AvqaX__JHASH__")
                }), j.jsx(d("WAWebExitedGroupQPSurface.react").ExitedGroupQPSurface, {
                    group: a
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ExitedGroupMemberSection = a
}), 226);
__d("WAWebStickerDetailsStickerPackInfo.react", ["fbt", "$InternalEnum", "WAWebButton.react", "WAWebEmojiText.react", "WAWebFavoriteStickerAction", "WAWebFavoriteStickerCollection", "WAWebMiscGatingUtils", "WAWebText_DONOTUSE.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            container: {
                color: "x40yjcy",
                fontSize: "x1f6kntn",
                lineHeight: "x37zpob",
                textAlign: "x2b8uid",
                $$css: !0
            },
            stickerStore: {
                marginBottom: "xui9b5u",
                $$css: !0
            },
            mediaViewer: {
                marginBottom: "x1iymm2a",
                $$css: !0
            },
            name: {
                fontSize: "x1jchvi3",
                lineHeight: "x1xet1wb",
                color: "x1wm35g",
                $$css: !0
            }
        },
        l = b("$InternalEnum").Mirrored(["StickerStore", "MediaViewer"]);

    function a(a) {
        var b = a.name,
            e = a.publisher,
            f = a.theme,
            g = a.sticker,
            i;
        d("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && g != null && (i = d("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(g.filehash) ? j.jsx(c("WAWebButton.react"), {
            onClick: function () {
                return d("WAWebFavoriteStickerAction").removeStickerFromFavorites(g)
            },
            type: "secondary",
            children: h._("__JHASH__BJt9lxd0QDB__JHASH__")
        }) : j.jsx(c("WAWebButton.react"), {
            onClick: function () {
                return d("WAWebFavoriteStickerAction").addStickerToFavorites(g)
            },
            type: "secondary",
            children: h._("__JHASH__-X2ztN-eWZf__JHASH__")
        }));
        return j.jsxs(j.Fragment, {
            children: [j.jsxs(d("WAWebText_DONOTUSE.react").TextDiv, {
                theme: "plain",
                xstyle: [k.container, f === l.StickerStore && k.stickerStore, f === l.MediaViewer && k.mediaViewer],
                children: [b && j.jsx(d("WAWebEmojiText.react").EmojiText, {
                    xstyle: k.name,
                    text: b
                }), b && e && j.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: "\xa0\u2022\xa0"
                }), e && j.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: e
                })]
            }), i]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.Theme = l;
    g.StickerDetailsStickerPackInfo = a
}), 226);
__d("WAWebFirstPartyStickerInfo.react", ["fbt", "WAWebButton.react", "WAWebCmd", "WAWebFavoriteStickerAction", "WAWebFavoriteStickerCollection", "WAWebFlex.react", "WAWebMiscGatingUtils", "WAWebStickerDetailsStickerPackInfo.react", "WAWebStickerPackCollectionMd", "react", "useWAWebEventTargetValue"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect,
        m = 150;

    function a(a) {
        var b = a.stickerPackId,
            e = a.onStickerPackView,
            f = a.stickerPackViewDelay,
            g = a.sticker;
        a = a.showViewPackButton;
        var i = n(b),
            j;
        if (b) {
            var l = function (a) {
                a.stopPropagation(), e && e(), f != null ? self.setTimeout(function () {
                    return d("WAWebCmd").Cmd.openStickerPack(b)
                }, f + m) : d("WAWebCmd").Cmd.openStickerPack(b)
            };
            d("WAWebMiscGatingUtils").isFavoriteStickersEnabled() ? g != null && (j = k.jsxs(d("WAWebFlex.react").FlexRow, {
                children: [a && k.jsx(c("WAWebButton.react"), {
                    onClick: l,
                    type: "secondary",
                    children: h._("__JHASH__TQ5Vdy6paun__JHASH__")
                }), d("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(g.filehash) ? k.jsx(c("WAWebButton.react"), {
                    onClick: function () {
                        return d("WAWebFavoriteStickerAction").removeStickerFromFavorites(g)
                    },
                    type: "secondary",
                    children: h._("__JHASH__BJt9lxd0QDB__JHASH__")
                }) : k.jsx(c("WAWebButton.react"), {
                    onClick: function () {
                        return d("WAWebFavoriteStickerAction").addStickerToFavorites(g)
                    },
                    type: "secondary",
                    children: h._("__JHASH__-X2ztN-eWZf__JHASH__")
                })]
            })) : j = a ? k.jsx(c("WAWebButton.react"), {
                onClick: l,
                type: "secondary",
                children: h._("__JHASH__TQ5Vdy6paun__JHASH__")
            }) : null
        }
        return k.jsxs(k.Fragment, {
            children: [k.jsx(d("WAWebStickerDetailsStickerPackInfo.react").StickerDetailsStickerPackInfo, {
                name: i == null ? void 0 : i.name,
                publisher: i == null ? void 0 : i.publisher,
                theme: d("WAWebStickerDetailsStickerPackInfo.react").Theme.MediaViewer
            }), j]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function n(a) {
        l(function () {
            a && d("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchStickerPack(a)
        }, [a]);
        var b = c("useWAWebEventTargetValue")(d("WAWebStickerPackCollectionMd").StickerPackCollectionMd, "add remove reset", function () {
            return a != null ? d("WAWebStickerPackCollectionMd").StickerPackCollectionMd.get(a) : null
        });
        return b
    }
    g["default"] = a
}), 226);
__d("WAWebGlanceInsight.react", ["fbt", "WAWebBaseShimmerComponents.react", "WAWebDeltaArrow.react", "WAWebDeltaText.react", "WAWebFlex.react", "WAWebKeyboardHotKeys.react", "WAWebL10N", "WAWebNewsletterMetricUtils", "WAWebUISpacing", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || d("react"),
        k = {
            container: {
                borderTopWidth: "x178xt8z",
                borderEndWidth: "xm81vs4",
                borderBottomWidth: "xso031l",
                borderStartWidth: "xy80clv",
                borderTopColor: "xiuubft",
                borderEndColor: "xa2vszz",
                borderBottomColor: "xx5tys9",
                borderStartColor: "x5iuykv",
                borderTopStyle: "x13fuv20",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderStartStyle: "x26u7qi",
                borderTopStartRadius: "xfh8nwu",
                borderTopEndRadius: "xoqspk4",
                borderBottomEndRadius: "x12v9rci",
                borderBottomStartRadius: "x138vmkv",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            },
            delta: {
                height: "x1fgtraw",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            },
            button: {
                cursor: "x1ypdohk",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.insight,
            e = a.label,
            f = a.loading;
        f = f === void 0 ? !1 : f;
        var g = a.onClick,
            i = a.showDelta;
        i = i === void 0 ? !0 : i;
        var l = a.testid;
        l = a.xstyle;
        b = (a = b) != null ? a : {};
        a = b.value;
        b = b.delta;
        var m = g == null || a == null;
        f = f ? j.jsx(d("WAWebFlex.react").FlexItem, {
            paddingTop: 4,
            paddingBottom: 4,
            children: j.jsx(d("WAWebBaseShimmerComponents.react").RectangleShimmer, {
                height: 20,
                width: 36
            })
        }) : j.jsxs(j.Fragment, {
            children: [j.jsx(d("WAWebWDSText.react").WDSTextLarge, {
                testid: void 0,
                color: m ? "secondaryLighter" : "primary",
                children: a != null ? c("WAWebL10N").d(a) : h._("__JHASH__cjRW6EFf5sg__JHASH__")
            }), i && b != null && b !== "infinte" && !d("WAWebNewsletterMetricUtils").isDeltaValueZero(b) && j.jsxs(d("WAWebFlex.react").FlexRow, {
                align: "center",
                paddingStart: 4,
                xstyle: k.delta,
                testid: void 0,
                children: [j.jsx(d("WAWebDeltaArrow.react").DeltaArrow, {
                    delta: b,
                    size: 32
                }), j.jsx(d("WAWebDeltaText.react").DeltaText, {
                    delta: b,
                    size: "large"
                })]
            })]
        });
        return j.jsx(d("WAWebKeyboardHotKeys.react").HotKeys, {
            "data-testid": void 0,
            xstyle: [k.container, d("WAWebUISpacing").uiPadding.all16, g && k.button, l],
            onClick: g,
            children: j.jsxs(d("WAWebFlex.react").FlexColumn, {
                children: [j.jsx(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    children: f
                }), j.jsx(d("WAWebWDSText.react").WDSTextSmall, {
                    color: m ? "secondaryLighter" : "primary",
                    textWrap: "nowrap",
                    children: e
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.GlanceInsight = a
}), 226);
__d("WAWebGroupInfoCommunitySection.react", ["fbt", "WAWebCellFrame.react", "WAWebChatCommunityUtils", "WAWebChevronIcon", "WAWebDetailImage.react", "WAWebDrawerSection.react", "WAWebEmojiText.react", "WAWebL10N", "WAWebQuerySubGroupAction", "WAWebSvgComponentBase", "WAWebText_DONOTUSE.react", "react", "useWAWebCommunitySubgroups", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect;

    function a(a) {
        var b = a.onClick,
            e = a.parentGroupChat,
            f = a.parentGroupMetadata;
        a = c("useWAWebCommunitySubgroups")(f);
        a = a.subgroupCount;
        var g = d("useWAWebModelValues").useModelValues(e.contact, ["name"]);
        g = g.name;
        e = d("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(e);
        l(function () {
            d("WAWebQuerySubGroupAction").queryAndUpdateSubgroupsMetadata(f.id, f.joinedSubgroups)
        }, []);
        var i = h._("__JHASH__KNYxF3fbgdy__JHASH__"),
            j = !0;
        return k.jsx(c("WAWebDrawerSection.react"), {
            theme: "no-padding",
            children: k.jsx(c("WAWebCellFrame.react"), {
                testid: void 0,
                image: k.jsx(d("WAWebDetailImage.react").DetailImage, {
                    id: f.id,
                    shape: d("WAWebDetailImage.react").DetailImageShape.Squircle,
                    size: 60
                }),
                primary: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: g,
                    ellipsify: !0
                }),
                onClick: b,
                theme: "community-home",
                secondary: j ? k.jsxs(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "16",
                    color: "secondary",
                    children: [i, e ? null : k.jsxs(k.Fragment, {
                        children: [c("WAWebL10N").isRTL() ? " -\xa0" : " \xb7\xa0", h._("__JHASH__aqnAO7ygJYk__JHASH__", [h._plural(a, "count")])]
                    })]
                }) : void 0,
                detail: k.jsx(d("WAWebChevronIcon").ChevronIcon, {
                    color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                    directional: !0,
                    height: 21
                }),
                focusable: !0
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebGroupInfoCreateCommunitySection.react", ["fbt", "WAAbortError", "WALogger", "WAPromiseRaceAbort", "WAWebABProps", "WAWebAddGroupToCommunityFlowLoadable.react", "WAWebCellFrame.react", "WAWebChevronIcon", "WAWebCommunityCreationFlowMetricUtils", "WAWebCommunityGatingUtils", "WAWebCommunitySquircleIcon", "WAWebConfirmPopup.react", "WAWebDrawerManager", "WAWebDrawerSection.react", "WAWebFbtCommon", "WAWebGroupType", "WAWebKeyboardTabUtils", "WAWebModalManager", "WAWebNameGroupModal.react", "WAWebNewCommunityInfoDrawer.react", "WAWebNoop", "WAWebSetSubjectGroupAction", "WAWebSvgComponentBase", "WAWebText_DONOTUSE.react", "WAWebWamEnumCommunityCreationCurrentScreenType", "WAWebWamEnumCommunityCreationEntrypointType", "asyncToGeneratorRuntime", "react", "useWAWebEventTargetValue", "useWAWebModelValues", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"]);
        j = function () {
            return a
        };
        return a
    }
    var k = i || c("react"),
        l = {
            communitySquircle: {
                color: "xrxj3dl",
                $$css: !0
            }
        };

    function a(a) {
        var e = a.chat,
            f = a.groupMetadata;
        a = d("useWAWebModelValues").useModelValues(f, ["id", "parentGroup", "isUnnamed"]);
        var g = a.id,
            i = a.parentGroup,
            m = a.isUnnamed;
        a = c("useWAWebEventTargetValue")(f.participants, "change:isAdmin", function () {
            return f.participants.iAmAdmin()
        });
        var n = c("useWAWebEventTargetValue")(f.participants, ["bulk_add", "bulk_remove", "reset"], function () {
                return f.participants.length
            }),
            o = d("WAWebABProps").getABPropConfigValue("parent_group_min_participants_for_group_entry_point"),
            p = c("useWAWebUnmountSignal")();
        if (!a || i != null || n < o || f.groupType === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || !d("WAWebCommunityGatingUtils").communitiesCreationEnabled()) return null;
        var q = function () {
                var a = d("WAWebCommunityGatingUtils").isLinkToExistingCommunityFromGroupInfoEnabled() ? k.jsx(d("WAWebAddGroupToCommunityFlowLoadable.react").AddGroupToCommunityFlowLoadable, {
                    groupToBeLinked: g,
                    onEnd: function () {
                        return d("WAWebDrawerManager").DrawerManager.closeDrawerLeft()
                    }
                }) : k.jsx(c("WAWebNewCommunityInfoDrawer.react"), {
                    existingGroups: [g]
                });
                d("WAWebDrawerManager").DrawerManager.openDrawerLeft(a, {
                    focusType: d("WAWebKeyboardTabUtils").FocusType.TABBABLE
                });
                d("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(d("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.GROUP_INFO);
                d("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(d("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.GROUP_INFO)
            },
            r = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
                    b = a;
                    yield c("WAPromiseRaceAbort")(d("WAWebSetSubjectGroupAction").setGroupSubject(e, b), p)["catch"](d("WAAbortError").catchAbort(c("WAWebNoop")))["catch"](function (a) {
                        d("WALogger").WARN(j()).devConsole(a)
                    });
                    d("WAWebModalManager").ModalManager.close();
                    q()
                });
                return function (b, c) {
                    return a.apply(this, arguments)
                }
            }(),
            s = function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    },
                    okText: c("WAWebFbtCommon")("OK"),
                    children: h._("__JHASH__TRqQJIz5tfr__JHASH__")
                }))
            };
        a = function () {
            if (m) {
                var a = h._("__JHASH__bZit3l5M2Vc__JHASH__");
                d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebNameGroupModal.react"), {
                    chat: e,
                    subtext: a,
                    onCancel: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    },
                    onOK: r,
                    editable: (a = e.groupMetadata) == null ? void 0 : a.canSetSubject(),
                    editRestrictionInfo: ((a = e.groupMetadata) == null ? void 0 : a.restrict) ? s : void 0
                }))
            } else q()
        };
        return k.jsx(c("WAWebDrawerSection.react"), {
            theme: "no-padding",
            children: k.jsx(c("WAWebCellFrame.react"), {
                testid: void 0,
                image: k.jsx(d("WAWebCommunitySquircleIcon").CommunitySquircleIcon, {
                    iconXstyle: l.communitySquircle,
                    width: 40,
                    height: 40
                }),
                primary: k.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "16",
                    children: h._("__JHASH__PzxEyyGmVFU__JHASH__")
                }),
                onClick: a,
                theme: "community-create",
                secondary: k.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "14",
                    color: "secondary",
                    children: h._("__JHASH__9ZkFvOft_JF__JHASH__")
                }),
                detail: k.jsx(d("WAWebChevronIcon").ChevronIcon, {
                    color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                    directional: !0,
                    height: 21
                }),
                focusable: !0
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebGroupInfoDescriptionSection.react", ["fbt", "WAWebCommonGroupInfoDescriptionSection.react", "WAWebGroupType", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.chat;
        b = d("useWAWebModelValues").useOptionalModelValues(b.groupMetadata, ["groupType"]);
        (b == null ? void 0 : b.groupType) === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? b = j.jsx("div", {
            className: "xzwifym x1jchvi3",
            children: h._("__JHASH__BO-lF75hD0I__JHASH__")
        }) : b = h._("__JHASH__tdn83Uykv3g__JHASH__");
        return j.jsx(c("WAWebCommonGroupInfoDescriptionSection.react"), {
            chat: a.chat,
            showFullDescription: a.showFullDescription,
            editRestrictionText: h._("__JHASH__TRqQJIz5tfr__JHASH__"),
            testid: void 0,
            containerTestId: "group-info-drawer-description-container",
            emptyValuePlaceholder: b,
            focusOnMount: a.focusOnMount
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebUseShowPastParticipants", ["WAWebGroupType", "useWAWebEventTargetValue", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        a = d("useWAWebModelValues").useOptionalModelValues(a.groupMetadata, ["participants", "pastParticipants", "groupType"]);
        var b = a == null ? void 0 : a.pastParticipants,
            e = c("useWAWebEventTargetValue")(b, ["bulk_add", "bulk_remove", "reset"], function () {
                return Boolean(b == null ? void 0 : b.getValidRecords().length)
            });
        if (!e) return !1;
        return (a == null ? void 0 : a.groupType) === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? Boolean(a == null ? void 0 : a.participants.iAmAdmin()) : !0
    }
    g.useShowPastParticipants = a
}), 98);
__d("WAWebGroupParticipantSearch.react", ["fbt", "WANullthrows", "WAWebChatGroupUtils", "WAWebCmd", "WAWebCommunityAnnouncementGroupUtils", "WAWebCommunityGatingUtils", "WAWebCommunityGetGeneralChatParticipantText.react", "WAWebContactCollection", "WAWebContactsModal.react", "WAWebDropdownItem.react", "WAWebElevatedPushNamesFlag", "WAWebEmojiText.react", "WAWebFindChatAction", "WAWebFrontendContactGetters", "WAWebGroupType", "WAWebModalManager", "WAWebModifyParticipantsGroupAction", "WAWebOpenCommunityParticipantDemoteConfirmation", "WAWebOpenCommunityParticipantPromoteConfirmation", "WAWebUISpacing", "WAWebUimUie.react", "WAWebUimUieMenu.react", "WAWebUseShowPastParticipants", "WAWebUserPrefsMeUser", "WAWebWDSText.react", "react", "stylex", "useForceUpdate", "useWAWebListener"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l = k || c("react"),
        m = (i || (i = d("react"))).useState,
        n = {
            dropdownText: {
                display: "x78zum5",
                alignItems: "x6s0dn4",
                $$css: !0
            },
            generalChatContainer: {
                backgroundColor: "x150wa6m",
                $$css: !0
            }
        };
    b = l.forwardRef(a);

    function a(a, b) {
        var e;
        a = babelHelpers["extends"]({}, a);
        var f = a.chat,
            g = a.onVerification,
            i = a.onPastParticipants;
        a = a.onContactInfo;
        g = p(f, g, a);
        a = g[0];
        g = g[1];
        var k = c("useForceUpdate")(),
            m = (e = f.groupMetadata) == null ? void 0 : e.participants;
        d("useWAWebListener").useListener(m, ["bulk_add", "bulk_remove", "reset"], k);
        e = d("WAWebUseShowPastParticipants").useShowPastParticipants(f);
        k = function (a) {
            return !d("WAWebUserPrefsMeUser").isMeAccount(a)
        };
        var o = d("WAWebCommunityAnnouncementGroupUtils").hideCagMaskedParticipants(),
            q = m == null ? void 0 : m.map(function (a) {
                return a.contact
            }),
            r = function (a) {
                var b;
                a = m == null ? void 0 : m.get(a.id.toString());
                if (a == null) return !1;
                return o && ((b = f.groupMetadata) == null ? void 0 : b.isLidAddressingMode) === !1 ? d("WAWebUserPrefsMeUser").isMeAccount(a.id) || !a.id.isLid() : !0
            },
            s = function () {
                d("WAWebModalManager").ModalManager.close()
            },
            t;
        e && (t = {
            text: h._("__JHASH__ZDzsa3tsHbI__JHASH__"),
            onClick: i
        });
        e = null;
        if (((i = f.groupMetadata) == null ? void 0 : i.groupType) === d("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP && d("WAWebCommunityGatingUtils").communityGeneralChatUIEnabled() && !d("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()) {
            i = !!((i = f.groupMetadata) == null ? void 0 : i.generalChatAutoAddDisabled);
            e = l.jsx("div", {
                className: (j || (j = c("stylex")))([n.generalChatContainer, d("WAWebUISpacing").uiPadding.vert12, d("WAWebUISpacing").uiPadding.horiz30]),
                children: l.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                    children: d("WAWebCommunityGetGeneralChatParticipantText.react").getGeneralChatParticipantListText(i)
                })
            })
        }
        return l.jsxs(l.Fragment, {
            children: [l.jsx(c("WAWebContactsModal.react"), {
                ref: b,
                title: h._("__JHASH__cXy4ln0xr4h__JHASH__"),
                filter: r,
                onCancel: s,
                openContextOnClick: !0,
                contextEnabled: function () {
                    return !1
                },
                contextMenu: k,
                onContext: g,
                showNotifyName: !0,
                elevatedPushNamesEnabled: d("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(f),
                listenForAdminChange: !0,
                participantCollection: c("WANullthrows")(m),
                contacts: q,
                button: t,
                showStatusRingAroundProfilePhoto: !0,
                firstRows: [e]
            }), a]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    var o = function (a) {
        a = d("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(a);
        d("WAWebFindChatAction").findOrCreateLatestChat(a, "groupParticipantSearch").then(function (a) {
            d("WAWebModalManager").ModalManager.close(), d("WAWebCmd").Cmd.openChatFromUnread(a)
        })
    };

    function p(a, b, e) {
        var f = m(null),
            g = f[0],
            i = f[1],
            j = function (b, c) {
                if (b.isAdmin) {
                    c && d("WAWebModalManager").ModalManager.close();
                    return
                }
                b.contact.pendingAction++;
                d("WAWebModifyParticipantsGroupAction").promoteParticipants(a, [b])["finally"](function () {
                    b.contact.pendingAction--
                });
                c && d("WAWebModalManager").ModalManager.close()
            },
            k = function (b, c) {
                b.contact.pendingAction++, d("WAWebModifyParticipantsGroupAction").removeParticipants(a, [b])["finally"](function () {
                    b.contact.pendingAction--
                }), c && d("WAWebModalManager").ModalManager.close()
            },
            p = function (b) {
                if (!b.isAdmin) return;
                b.contact.pendingAction++;
                d("WAWebModifyParticipantsGroupAction").demoteParticipants(a, [b])["finally"](function () {
                    b.contact.pendingAction--
                })
            };
        f = function (f, g) {
            var m = c("WANullthrows")(a.groupMetadata).participants,
                q = m.assertGet(g.id.toString()),
                r = [],
                s = d("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a);
            if (m.canPromote(q)) {
                var t;
                if (s) {
                    var u;
                    t = h._("__JHASH__3qTjiuw6Crn__JHASH__");
                    var v = (u = a.groupMetadata) == null ? void 0 : u.getParentGroupChat();
                    r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: function () {
                            d("WAWebOpenCommunityParticipantPromoteConfirmation").openCommunityParticipantPromoteConfirmation(v, q, m, q.contact)
                        },
                        children: t
                    }, "promote"))
                } else t = h._("__JHASH__GlxW-DM0rdj__JHASH__"), r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: function () {
                        return j(q, !1)
                    },
                    children: t
                }, "promote"))
            }
            if (m.canRemove(q)) {
                u = function () {
                    return k(q, !1)
                };
                t = h._("__JHASH__m4cvrzlNVFF__JHASH__");
                r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: u,
                    children: t
                }, "remove"))
            }
            if (m.canDemote(q)) {
                u = function () {
                    return p(q)
                };
                t = h._("__JHASH__aLuHaCdda3T__JHASH__");
                if (s) {
                    var w = (s = a.groupMetadata) == null ? void 0 : s.getParentGroupChat();
                    r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: function () {
                            return d("WAWebOpenCommunityParticipantDemoteConfirmation").openCommunityParticipantDemoteConfirmation(q, w)
                        },
                        children: t
                    }, "demote-admin"))
                } else r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: u,
                    children: t
                }, "demote-admin"))
            }
            if (e) {
                s = function () {
                    d("WAWebModalManager").ModalManager.close();
                    var a = d("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(g.id);
                    e(d("WAWebContactCollection").ContactCollection.gadd(a))
                };
                r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: s,
                    children: h._("__JHASH__6ndCSxk56zz__JHASH__")
                }, "contact-info"))
            }
            if (m.canVerifyIdentity(q)) {
                u = function () {
                    d("WAWebModalManager").ModalManager.close(), b == null ? void 0 : b(q.contact)
                };
                t = h._("__JHASH__lMmkSKjYPXR__JHASH__");
                r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: u,
                    children: t
                }, "verify-identity"))
            }
            s = d("WAWebUserPrefsMeUser").isMeAccount(q.contact.id);
            u = s ? h._("__JHASH__hA9m3NeTbTe__JHASH__") : h._("__JHASH__eKdD9YzdLgN__JHASH__", [h._param("author", d("WAWebFrontendContactGetters").getFormattedShortName(q.contact))]);
            r.push(l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                ariaLabel: u,
                action: o.bind(null, q.contact.id),
                addSpacing: !0,
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: u,
                    xstyle: n.dropdownText
                })
            }, "message author"));
            t = f.type === "click" ? void 0 : f.target;
            i({
                contactId: g.id,
                menu: r,
                anchor: t,
                event: f.anchor ? void 0 : f
            })
        };
        var q = function () {
                i(null)
            },
            r;
        g && (r = l.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "ChatContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: q,
            children: l.jsx(c("WAWebUimUieMenu.react"), {
                contextMenu: g
            })
        }));
        return [r, f]
    }
    g["default"] = e
}), 226);
__d("WAWebGroupPastParticipant.react", ["fbt", "WAWebBizGatingUtils", "WAWebCellFrame.react", "WAWebClock", "WAWebContactGetters", "WAWebDetailImage.react", "WAWebElevatedPushNamesFlag", "WAWebFrontendContactGetters", "WAWebLeaveReasonType", "WAWebName.react", "WAWebUserPrefsMeUser", "react", "useWAWebContactValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.participant;
        a = a.elevatedPushNamesEnabled;
        a = a === void 0 ? !1 : a;
        var e = b.contact,
            f = d("useWAWebContactValues").useContactValues(e.id, [d("WAWebContactGetters").getId, d("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary, d("WAWebContactGetters").getName, d("WAWebContactGetters").getPushname, d("WAWebContactGetters").getNotifyName, d("WAWebFrontendContactGetters").getFormattedName, d("WAWebFrontendContactGetters").getFormattedPhone]),
            g = f[0],
            h = f[1];
        f[2];
        f[3];
        f[4];
        f[5];
        f = f[6];
        h = j.jsx(d("WAWebName.react").Name, {
            contact: e,
            showBusinessCheckmark: h,
            showLabelIcon: d("WAWebBizGatingUtils").canDisplayLabel(),
            titlify: !0,
            ellipsify: !0,
            you: !0,
            showNotifyName: a,
            elevatedPushNamesEnabled: a
        });
        b = d("WAWebClock").Clock.pastParticipantOnDateAtTime(b.leaveTs, k(b));
        e = d("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e) && a ? f : null;
        return j.jsx(c("WAWebCellFrame.react"), {
            image: j.jsx(d("WAWebDetailImage.react").DetailImage, {
                id: g
            }),
            primary: h,
            secondary: b,
            secondaryDetail: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function k(a) {
        var b = a.id.equals(d("WAWebUserPrefsMeUser").getMeUser());
        return a.leaveReason === d("WAWebLeaveReasonType").LeaveReason.Left ? b ? h._("__JHASH__65HPmAx_s32__JHASH__") : h._("__JHASH__Qu3hxstil8v__JHASH__") : b ? h._("__JHASH__dTFTvjLfCxG__JHASH__") : h._("__JHASH__iaG4lfY208Z__JHASH__")
    }
    g["default"] = a
}), 226);
__d("WAWebGroupPastParticipantSearch.react", ["fbt", "WAWebCommunityAnnouncementGroupUtils", "WAWebElevatedPushNamesFlag", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFbtCommon", "WAWebFlatList.react", "WAWebFlex.react", "WAWebGroupPastParticipant.react", "WAWebL10N", "WAWebModalsListModal.react", "WAWebPhoneNumberSearch", "WAWebSectionHeader.react", "WAWebUISpacing", "WAWebUserPrefsMeUser", "react", "useWAWebDebouncedSearch", "useWAWebEventTargetValue"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            HEADER: "HEADER",
            ROW: "ROW",
            DISCLAIMER: "DISCLAIMER"
        },
        l = d("WAWebModalsListModal.react").ListModalFactory();
    b = j.forwardRef(a);

    function a(a, b) {
        var e;
        a = babelHelpers["extends"]({}, a);
        var f = a.chat,
            g = a.onBack;
        a = a.onClose;
        var i = (e = f.groupMetadata) == null ? void 0 : e.pastParticipants;
        e = c("useWAWebDebouncedSearch")();
        var n = e[0];
        e = e[1];
        var o = c("useWAWebEventTargetValue")(i, ["buld_add", "bulk_remove", "reset"], function () {
            var a, b = c("WAWebL10N").accentFold(n),
                e = d("WAWebPhoneNumberSearch").numberSearch(b);
            a = (a = i == null ? void 0 : i.getValidRecords().filter(function (a) {
                var c = !b || a.contact.searchMatch(b, e);
                return d("WAWebCommunityAnnouncementGroupUtils").hideCagMaskedParticipants() ? (d("WAWebUserPrefsMeUser").isMeAccount(a.id) || !a.id.isLid()) && c : c
            })) != null ? a : [];
            if (!a.length) return [];
            var f = [];
            f.push({
                type: k.HEADER,
                header: h._("__JHASH__IDUapPgR_b___JHASH__"),
                itemKey: "list_header"
            });
            a.forEach(function (a, b) {
                return f.push({
                    type: k.ROW,
                    participant: a,
                    itemKey: a.id.toString() + "_" + b
                })
            });
            f.push({
                type: k.DISCLAIMER,
                itemKey: "list_disclaimer"
            });
            return f
        }, [n]);
        return j.jsx(l, {
            ref: b,
            title: h._("__JHASH__ONzXT_Ukp2Q__JHASH__"),
            data: o,
            renderItem: function (a) {
                return j.jsx(m, {
                    data: a,
                    elevatedPushNamesEnabled: d("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(f)
                })
            },
            emptyState: j.jsx(p, {}),
            onSearch: e,
            searchPlaceholder: h._("__JHASH__HPIoVCKZkKd__JHASH__"),
            onBack: g,
            onCancel: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;

    function m(a) {
        var b, e = a.data;
        a = a.elevatedPushNamesEnabled;
        switch (e.type) {
            case k.HEADER:
                return j.jsx(c("WAWebSectionHeader.react"), {
                    header: (b = e.header) != null ? b : "",
                    uppercase: !1
                });
            case k.ROW:
                return j.jsx(c("WAWebGroupPastParticipant.react"), {
                    participant: e.participant,
                    elevatedPushNamesEnabled: a
                });
            case k.DISCLAIMER:
                return j.jsx(o, {});
            default:
                throw new(d("WAWebFlatList.react").UnknownDataError)(e)
        }
    }
    m.displayName = m.name + " [from " + f.id + "]";
    var n = {
        row: {
            height: "xy75621",
            backgroundColor: "x150wa6m",
            $$css: !0
        },
        disclaimer: {
            fontSize: "x1f6kntn",
            color: "x16cd2qt",
            $$css: !0
        },
        empty: {
            fontSize: "x1jchvi3",
            color: "x181ptb6",
            $$css: !0
        }
    };

    function o() {
        return j.jsx(d("WAWebFlex.react").FlexRow, {
            xstyle: [n.row, n.disclaimer, d("WAWebUISpacing").uiPadding.horiz15],
            align: "center",
            justify: "center",
            children: j.jsx("span", {
                children: h._("__JHASH__LyqklvYx9N7__JHASH__", [h._implicitParam("=m2", j.jsx(d("WAWebExternalLink.react").ExternalLink, {
                    href: d("WAWebFaqUrl").getHowToExitAndDeleteGroupsFaq(),
                    children: h._("__JHASH__ojrz8wkdWa1__JHASH__")
                }))])
            })
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function p() {
        return j.jsxs(j.Fragment, {
            children: [j.jsx(c("WAWebSectionHeader.react"), {
                header: h._("__JHASH__IDUapPgR_b___JHASH__"),
                uppercase: !1
            }), j.jsx(d("WAWebFlex.react").FlexRow, {
                xstyle: [n.row, n.empty],
                align: "center",
                justify: "center",
                children: j.jsx("span", {
                    children: c("WAWebFbtCommon")("No results found")
                })
            }), j.jsx(o, {})]
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";
    g["default"] = e
}), 226);
__d("WAWebGroupParticipantsFlow.react", ["$InternalEnum", "WAWebGroupParticipantSearch.react", "WAWebGroupPastParticipantSearch.react", "react", "useWAWebFlow"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react"),
        j = b("$InternalEnum").Mirrored(["Participants", "PastParticipants"]);

    function a(a) {
        var b = a.chat,
            e = a.initialStep,
            f = a.onContactInfo;
        a = a.onVerification;
        e = d("useWAWebFlow").useFlow(e);
        var g = e[0],
            h = e[1];
        if (!h.step) return null;
        var k;
        switch (h.step) {
            case j.Participants:
                k = i.jsx(c("WAWebGroupParticipantSearch.react"), {
                    chat: b,
                    onVerification: a,
                    onContactInfo: f,
                    onPastParticipants: function () {
                        return h.push(j.PastParticipants)
                    }
                });
                break;
            case j.PastParticipants:
                e = h.stackSize() > 1;
                a = function () {
                    return h.pop()
                };
                k = e ? i.jsx(c("WAWebGroupPastParticipantSearch.react"), {
                    chat: b,
                    onBack: a
                }) : i.jsx(c("WAWebGroupPastParticipantSearch.react"), {
                    chat: b,
                    onClose: a
                });
                break
        }
        return i.jsx(g, {
            flow: h,
            children: k
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ParticipantsFlowStep = j;
    g.GroupParticipantsFlow = a
}), 98);
__d("WAWebGroupInfoParticipantsSection.react", ["fbt", "WANullthrows", "WAWebABProps", "WAWebAddUserIcon", "WAWebCellFrame.react", "WAWebChatGroupUtils", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoExpandButton.react", "WAWebChatParticipant.react", "WAWebCommunityAnnouncementGroupUtils", "WAWebConfirmPopup.react", "WAWebContactCollection", "WAWebContactGetters", "WAWebDomScroll", "WAWebDropdownItem.react", "WAWebElevatedPushNamesFlag", "WAWebEmojiText.react", "WAWebFlatList.react", "WAWebFrontendContactGetters", "WAWebGroupParticipantsFlow.react", "WAWebGroupType", "WAWebLinkIcon", "WAWebListButton.react", "WAWebModalManager", "WAWebModifyParticipantsGroupAction", "WAWebNavigableFlatList.react", "WAWebOpenCommunityParticipantDemoteConfirmation", "WAWebOpenCommunityParticipantPromoteConfirmation", "WAWebPendingParticipantsIcon", "WAWebRemoveFromCommunityConfirmationPopup.react", "WAWebRoundShape.react", "WAWebSearchIcon", "WAWebSingleSelection", "WAWebSvgComponentBase", "WAWebTag.react", "WAWebUimUie.react", "WAWebUimUieMenu.react", "WAWebUseShowPastParticipants", "WAWebUserPrefsMeUser", "WAWebWid", "react", "useForceUpdate", "useLazyRef", "useWAWebEventTargetValue", "useWAWebGroupParticipantStatus", "useWAWebListener", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    b = j || d("react");
    var k = i || (i = c("react")),
        l = b.useEffect,
        m = b.useImperativeHandle,
        n = b.useMemo,
        o = b.useRef,
        p = b.useState,
        q = 20,
        r = {
            pendingParticipantsIcon: {
                backgroundColor: "xp0d2wq",
                color: "x1totv3y",
                $$css: !0
            }
        };

    function s(a) {
        var b = a.active,
            e = a.contextMenu,
            f = a.data,
            g = a.elevatedPushNamesEnabled;
        g = g === void 0 ? !1 : g;
        var h = a.handleParticipantClick,
            i = a.handleParticipantMenu,
            j = a.menuEnabled;
        a = a.participants;
        var l = f.id;
        l = a.get(l);
        if (!l) throw new(d("WAWebFlatList.react").UnknownDataError)(f);
        var m = l.contact;
        f = !!e && c("WAWebWid").equals(m.id, e.contactId);
        return k.jsx(c("WAWebChatParticipant.react"), {
            active: b,
            contact: m,
            participant: l,
            onClick: function (a) {
                var b = d("WAWebChatGroupUtils").getOneToOneContactFromGroupContact(m.id);
                h == null ? void 0 : h(a, d("WAWebContactCollection").ContactCollection.gadd(b))
            },
            contextEnabled: function () {
                return j(m)
            },
            contextMenu: f,
            onContext: function (a) {
                return i(a, m)
            },
            theme: "chat-info",
            showNotifyName: !0,
            waitIdle: !0,
            showStatusRingAroundProfilePhoto: !0,
            participantCollection: a,
            elevatedPushNamesEnabled: g
        }, l.id.toString())
    }
    s.displayName = s.name + " [from " + f.id + "]";
    e = k.forwardRef(a);

    function a(a, b) {
        var e = a.chat,
            f = a.flatListController,
            g = a.onAddParticipant,
            i = a.onGroupInviteLink,
            j = a.onOpenParticipantSearch,
            u = a.onParticipantClick,
            v = a.onPendingParticipants,
            w = a.onVerification,
            x = a.scrollToParticipantList;
        a = d("useWAWebModelValues").useModelValues(c("WANullthrows")(e.groupMetadata), ["support", "size", "id", "membershipApprovalMode", "membershipApprovalRequests", "isUnnamed", "isLidAddressingMode", "participants"]);
        var y = a.membershipApprovalMode,
            z = a.membershipApprovalRequests,
            A = c("useLazyRef")(function () {
                return new(c("WAWebSingleSelection"))([], function (a) {
                    return a.id.toString()
                })
            }),
            B = c("WANullthrows")(e.groupMetadata).participants,
            C = B.toArray();
        d("WAWebCommunityAnnouncementGroupUtils").hideCagMaskedParticipants() && a.isLidAddressingMode !== !0 && (C = B.filter(function (a) {
            a = a.id;
            return d("WAWebUserPrefsMeUser").isMeAccount(a) || !a.isLid()
        }));
        var D = d("WAWebChatGroupUtils").getGroupParticipantsCount(a),
            E = c("useForceUpdate")();
        d("useWAWebListener").useListener(B, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", E);
        E = p(!0);
        var F = E[0],
            G = E[1],
            H = o();
        E = p();
        var I = E[0],
            J = E[1],
            K = d("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
        l(function () {
            x && H.current && d("WAWebDomScroll").scrollIntoViewIfNeeded(H.current, !1)
        }, [x]);
        m(b, function () {
            return {
                scrollIntoView: function () {
                    var a;
                    (a = H.current) == null ? void 0 : a.scrollIntoView()
                }
            }
        });
        E = c("useWAWebGroupParticipantStatus")(a);
        b = E[0];
        E = E[1];
        var L = c("useWAWebEventTargetValue")(z, ["add", "remove", "reset"], function () {
                return z.length
            }),
            M = d("WAWebUseShowPastParticipants").useShowPastParticipants(e),
            N = n(function () {
                var a, b = [],
                    c = [];
                C.forEach(function (e) {
                    d("WAWebContactGetters").getIsMe(e.contact) ? a = e : e.isAdmin ? b.push(e) : c.push(e)
                });
                var e = [];
                a && e.push(a);
                e = e.concat(b, c);
                t(C) && F && (e = e.slice(0, d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS));
                A.current.init(e.map(function (a) {
                    return a.contact
                }));
                return e.map(function (a) {
                    return {
                        itemKey: a.id.toString(),
                        id: a.id,
                        height: 68
                    }
                })
            }, [F, C]);
        if (a.isSuspendedOrTerminated()) return null;
        var O = k.jsx(d("WAWebSearchIcon").SearchIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY
            }),
            P;
        if (b && !a.support) {
            b = k.jsx(c("WAWebRoundShape.react"), {
                theme: "compact",
                children: k.jsx(d("WAWebAddUserIcon").AddUserIcon, {
                    directional: !0
                })
            });
            P = k.jsx(c("WAWebCellFrame.react"), {
                testid: void 0,
                image: b,
                theme: "chat-info",
                primary: h._("__JHASH__sUCxHhjE5zJ__JHASH__"),
                onClick: g,
                focusable: !0
            })
        }
        var Q;
        if (B.iAmAdmin() && i && !a.support) {
            b = k.jsx(c("WAWebRoundShape.react"), {
                theme: "compact",
                children: k.jsx(d("WAWebLinkIcon").LinkIcon, {})
            });
            Q = k.jsx(c("WAWebCellFrame.react"), {
                image: b,
                theme: "chat-info",
                primary: h._("__JHASH__uiYYYxMi4Uu__JHASH__"),
                onClick: i,
                focusable: !0
            })
        }
        var R;
        y && L > 0 && d("WAWebABProps").getABPropConfigValue("group_join_request_m2") && (d("WAWebABProps").getABPropConfigValue("web_anyone_can_add_group_setting_enabled") && E || B.iAmAdmin()) && (R = k.jsx(c("WAWebCellFrame.react"), {
            image: k.jsx(c("WAWebRoundShape.react"), {
                xstyle: r.pendingParticipantsIcon,
                theme: "compact",
                children: k.jsx(d("WAWebPendingParticipantsIcon").PendingParticipantsIcon, {})
            }),
            theme: "chat-info",
            primary: d("WAWebABProps").getABPropConfigValue("group_join_request_m3") ? h._("__JHASH__BXPUGUj8Zfz__JHASH__") : h._("__JHASH__KyQ5KoTUUuU__JHASH__"),
            primaryDetail: k.jsx(d("WAWebTag.react").Tag, {
                round: !0,
                children: L
            }),
            onClick: v,
            focusable: !0
        }));
        var S;
        if (t(C) && F) {
            var T = C.length <= q;
            g = C.length - d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
            a = function () {
                T ? G(!1) : j(d("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep.Participants)
            };
            S = k.jsx(c("WAWebChatInfoExpandButton.react"), {
                numMore: g,
                onClick: a,
                viewAll: !T
            })
        } else if (M) {
            b = function () {
                j(d("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep.PastParticipants)
            };
            S = k.jsx(d("WAWebListButton.react").ListButton, {
                onClick: b,
                testid: void 0,
                children: h._("__JHASH__wBifwpGqiqC__JHASH__")
            })
        }
        var U = function (a) {
                a = B.get(a.id);
                return !a ? !1 : B.canPromote(a) || B.canDemote(a) || B.canRemove(a) || B.canVerifyIdentity(a)
            },
            V = function (a, b) {
                var f = B.assertGet(b.id);
                if (!U(b)) return;
                var g = [];
                if (B.canPromote(f)) {
                    var i = function () {
                            var a = h._("__JHASH__yIoBCJgUvRl__JHASH__", [h._param("member", d("WAWebFrontendContactGetters").getFormattedName(f.contact)), h._param("subject", e.contact.name)]),
                                b = function (a) {
                                    if (f.isAdmin) {
                                        a && d("WAWebModalManager").ModalManager.close();
                                        return
                                    }
                                    f.contact.pendingAction++;
                                    d("WAWebModifyParticipantsGroupAction").promoteParticipants(e, [f])["finally"](function () {
                                        f.contact.pendingAction--
                                    });
                                    a && d("WAWebModalManager").ModalManager.close()
                                };
                            d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                                onOK: function () {
                                    return b(!0)
                                },
                                okText: h._("__JHASH__GlxW-DM0rdj__JHASH__"),
                                onCancel: function () {
                                    return d("WAWebModalManager").ModalManager.close()
                                },
                                cancelText: h._("__JHASH__JomY4EcHzcJ__JHASH__"),
                                children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                                    text: a
                                })
                            }))
                        },
                        j;
                    if (K) {
                        var l;
                        j = h._("__JHASH__3qTjiuw6Crn__JHASH__");
                        var m = (l = e.groupMetadata) == null ? void 0 : l.getParentGroupChat();
                        g.push(k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                            testid: void 0,
                            action: function () {
                                d("WAWebOpenCommunityParticipantPromoteConfirmation").openCommunityParticipantPromoteConfirmation(m, f, B, f.contact)
                            },
                            children: j
                        }, "promote"))
                    } else j = h._("__JHASH__8OnZo-3MBhq__JHASH__"), g.push(k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: i,
                        children: j
                    }, "promote"))
                }
                if (B.canRemove(f)) {
                    l = function () {
                        var a;
                        a = (a = e.groupMetadata) == null ? void 0 : a.getParentGroupChat();
                        if (K === !0 && a != null) {
                            d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebRemoveFromCommunityConfirmationPopup.react"), {
                                contact: b,
                                parentGroupChat: a
                            }));
                            return
                        }
                        a = h._("__JHASH__hwAIt_P4GfK__JHASH__", [h._param("member", d("WAWebFrontendContactGetters").getFormattedName(f.contact)), h._param("subject", e.contact.name)]);
                        var g = function (a) {
                            f.contact.pendingAction++, d("WAWebModifyParticipantsGroupAction").removeParticipants(e, [f])["finally"](function () {
                                f.contact.pendingAction--
                            }), a && d("WAWebModalManager").ModalManager.close()
                        };
                        d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                            onOK: function () {
                                return g(!0)
                            },
                            okText: h._("__JHASH__E-fNzNFfE_1__JHASH__"),
                            onCancel: function () {
                                return d("WAWebModalManager").ModalManager.close()
                            },
                            cancelText: h._("__JHASH__JomY4EcHzcJ__JHASH__"),
                            children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                                text: a
                            })
                        }))
                    };
                    K === !0 ? i = h._("__JHASH__jb8uCxB2wPc__JHASH__") : i = h._("__JHASH__m4cvrzlNVFF__JHASH__");
                    g.push(k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: l,
                        children: i
                    }, "remove"))
                }
                if (B.canDemote(f)) {
                    j = function () {
                        if (!f.isAdmin) return;
                        f.contact.pendingAction++;
                        d("WAWebModifyParticipantsGroupAction").demoteParticipants(e, [f])["finally"](function () {
                            f.contact.pendingAction--
                        })
                    };
                    l = h._("__JHASH__dAE-u1omb8i__JHASH__");
                    if (K) {
                        var n = (i = e.groupMetadata) == null ? void 0 : i.getParentGroupChat();
                        g.push(k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                            testid: void 0,
                            action: function () {
                                return d("WAWebOpenCommunityParticipantDemoteConfirmation").openCommunityParticipantDemoteConfirmation(f, n)
                            },
                            children: l
                        }, "demote-admin"))
                    } else g.push(k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: j,
                        children: l
                    }, "demote-admin"))
                }
                if (B.canVerifyIdentity(f)) {
                    i = function () {
                        w && w(f.contact)
                    };
                    j = h._("__JHASH__lMmkSKjYPXR__JHASH__");
                    g.push(k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                        testid: void 0,
                        action: i,
                        children: j
                    }, "verify-identity"))
                }
                J({
                    contactId: b.id,
                    menu: g,
                    anchor: a.anchor,
                    event: a.event
                })
            };
        i = function () {
            j(d("WAWebGroupParticipantsFlow.react").ParticipantsFlowStep.Participants)
        };
        var W = d("WAWebElevatedPushNamesFlag").elevatedPushNamesM2Enabled(e);
        E = ((y = e.groupMetadata) == null ? void 0 : y.groupType) === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? D : B.length;
        L = h._("__JHASH__u9QcVWiW_Zq__JHASH__", [h._plural(E, "group-participants")]);
        v = B.length ? k.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
            ref: H,
            titleTestId: "section-participants",
            testid: void 0,
            title: h._("__JHASH__u0BrJ8_X_Ty__JHASH__", [h._plural(E, "number")]),
            titleOnClick: i,
            subtitle: O,
            children: [P, Q, R, k.jsx(d("WAWebNavigableFlatList.react").NavigableFlatList, {
                ariaLabel: L,
                flatListController: f,
                listData: N,
                onRenderItem: function (a) {
                    return k.jsx(s, {
                        active: A.current,
                        data: a,
                        participants: B,
                        handleParticipantClick: u,
                        menuEnabled: U,
                        handleParticipantMenu: V,
                        contextMenu: I,
                        elevatedPushNamesEnabled: W
                    })
                },
                selection: A.current,
                rotateList: !0
            }), S]
        }) : null;
        g = function () {
            J(null)
        };
        var X;
        I && (X = k.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "ChatContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: g,
            children: k.jsx(c("WAWebUimUieMenu.react"), {
                contextMenu: I
            })
        }));
        return k.jsxs(k.Fragment, {
            children: [v, X]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function t(a) {
        return a.length > d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
    }
    g.GroupInfoParticipantsSection = e
}), 226);
__d("WAWebGroupInfoPendingParticipantsSection.react", ["fbt", "WANullthrows", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoExpandButton.react", "WAWebChatParticipant.react", "WAWebConfirmPopup.react", "WAWebDropdownItem.react", "WAWebEmojiText.react", "WAWebFlatList.react", "WAWebFrontendContactGetters", "WAWebModalManager", "WAWebNavigableFlatList.react", "WAWebSingleSelection", "WAWebToast.react", "WAWebToastManager", "WAWebUimUie.react", "WAWebUimUieMenu.react", "asyncToGeneratorRuntime", "react", "useForceUpdate", "useLazyRef", "useWAWebAsync", "useWAWebListener"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useMemo,
        m = e.useState;

    function n(a) {
        var b = a.active,
            e = a.data,
            f = a.groupMetadata,
            g = a.onContextMenu;
        a = a.pendingParticipants;
        var i = e.id,
            j = a.get(i);
        if (!j) throw new(d("WAWebFlatList.react").UnknownDataError)(e);
        var l = function (a) {
            var b = function () {
                var a = function () {
                    d("WAWebModalManager").ModalManager.close(), f.revokeGroupsV4AddInvite([j.id]).then(function () {
                        d("WAWebToastManager").ToastManager.open(k.jsx(d("WAWebToast.react").Toast, {
                            msg: h._("__JHASH__QNbZAEg9ldD__JHASH__")
                        }))
                    })
                };
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: a,
                    okText: h._("__JHASH__ROGbLpV05cI__JHASH__"),
                    onCancel: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    },
                    cancelText: h._("__JHASH__JomY4EcHzcJ__JHASH__"),
                    children: k.jsx(d("WAWebEmojiText.react").EmojiText, {
                        text: h._("__JHASH__rwFP1o62OFs__JHASH__", [h._param("member", d("WAWebFrontendContactGetters").getFormattedName(j.contact))])
                    })
                }))
            };
            b = [k.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                testid: void 0,
                action: b,
                children: h._("__JHASH__IYshxcyW3nk__JHASH__")
            }, "promote")];
            g(b, a, j.contact)
        };
        return k.jsx(c("WAWebChatParticipant.react"), {
            active: b,
            contact: j.contact,
            participant: j,
            contextEnabled: function () {
                return !1
            },
            contextMenu: !0,
            onContext: function (a) {
                return l(a)
            },
            theme: "chat-info",
            showNotifyName: !0,
            isPendingParticipant: !0,
            waitIdle: !0,
            showStatusRingAroundProfilePhoto: !0
        }, j.id.toString())
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function a(a) {
        var e, f = a.chat;
        a = a.flatListController;
        var g = c("WANullthrows")(f.groupMetadata);
        e = c("WANullthrows")((e = f.groupMetadata) == null ? void 0 : e.participants);
        var i = c("WANullthrows")((f = f.groupMetadata) == null ? void 0 : f.pendingParticipants),
            j = i.toArray();
        f = c("useForceUpdate")();
        d("useWAWebListener").useListener(e, "change:isAdmin change:isSuperAdmin", f);
        d("useWAWebListener").useListener(i, "add remove reset", f);
        f = m(o(i));
        var p = f[0],
            q = f[1],
            r = c("useLazyRef")(function () {
                return new(c("WAWebSingleSelection"))([], function (a) {
                    return a.id.toString()
                })
            });
        f = m();
        var s = f[0],
            t = f[1];
        c("useWAWebAsync")(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield g.queryGroupsV4PendingInvite(), q(o(g.pendingParticipants))
        }), [g]);
        f = l(function () {
            var a = j;
            o(j) && p && (a = a.slice(0, d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS));
            r.current.init(a.map(function (a) {
                return a.contact
            }));
            return a.map(function (a) {
                return {
                    itemKey: a.id.toString(),
                    id: a.id,
                    height: 68
                }
            })
        }, [p, j]);
        if (g.isSuspendedOrTerminated()) return k.jsx(k.Fragment, {});
        var u = function (a, b, c) {
                var d = b.type === "click" ? void 0 : b.target;
                t({
                    contactId: c.id,
                    menu: a,
                    anchor: d,
                    event: b.anchor ? void 0 : b
                })
            },
            v = h._("__JHASH__CvjQi4fA0xm__JHASH__", [h._plural(i.length, "group-participants")]),
            w;
        i.length > 0 && (w = k.jsx(d("WAWebNavigableFlatList.react").NavigableFlatList, {
            ariaLabel: v,
            flatListController: a,
            listData: f,
            onRenderItem: function (a) {
                return k.jsx(n, {
                    active: r.current,
                    data: a,
                    onContextMenu: u,
                    pendingParticipants: i,
                    groupMetadata: g
                })
            },
            selection: r.current,
            rotateList: !0
        }));
        var x;
        if (o(i) && p) {
            v = i.length - d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS;
            a = function () {
                q(!1)
            };
            x = k.jsx(c("WAWebChatInfoExpandButton.react"), {
                numMore: v,
                onClick: a
            })
        }
        var y;
        e.iAmAdmin() && i.length > 0 && (y = k.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
            titleTestId: "section-participants",
            title: h._("__JHASH__MbFRB55kQBM__JHASH__", [h._param("number", i.length)]),
            children: [w, x]
        }));
        f = function () {
            t(null)
        };
        var z;
        s && (z = k.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "ChatContextMenu",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: f,
            children: k.jsx(c("WAWebUimUieMenu.react"), {
                contextMenu: s
            })
        }));
        return k.jsxs(k.Fragment, {
            children: [y, z]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function o(a) {
        return a.length > d("WAWebChatInfoDrawerSection.react").INFO_DRAWER_MAX_ROWS_IN_COLLAPSED_LIST
    }
    g.GroupInfoPendingParticipantsSection = a
}), 226);
__d("WAWebGroupInfoTopCard.react", ["fbt", "WAAbortError", "WALogger", "WANullthrows", "WAPromiseRaceAbort", "WAWebABProps", "WAWebBizGatingUtils", "WAWebCommunityGatingUtils", "WAWebConfirmPopup.react", "WAWebCopyPasteSelectable.react", "WAWebDrawerSection.react", "WAWebEmojiText.react", "WAWebFbtCommon", "WAWebFlex.react", "WAWebGroupInfoPhoto.react", "WAWebGroupInfoSubjectInput.react", "WAWebGroupType", "WAWebL10N", "WAWebLabelsInfoDrawerLabelWell.react", "WAWebModalManager", "WAWebName.react", "WAWebNoop", "WAWebParticipantListUtils", "WAWebSetSubjectGroupAction", "WAWebText_DONOTUSE.react", "WAWebUISpacing", "WAWebUnstyledButton.react", "WAWebWDSText.react", "asyncToGeneratorRuntime", "react", "useForceUpdate", "useWAWebListener", "useWAWebModelValues", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["group_info_drawer:onSetSubject failed"]);
        j = function () {
            return a
        };
        return a
    }
    var k = i || c("react"),
        l = {
            photo: {
                marginBottom: "xwoyzhm",
                $$css: !0
            }
        };

    function a(a) {
        var b, e, f, g = a.chat,
            i = a.focusGroupSubjectOnMount;
        a.onAddParticipant;
        a.onAdminSetting;
        var j = a.onClickParticipantsCount;
        a = a.showHiddenSubgroupIcon;
        var n = d("useWAWebModelValues").useModelValues(g, ["labels"]),
            o = d("useWAWebModelValues").useOptionalModelValues(g.groupMetadata, ["size", "creation"]);
        b = (b = g.groupMetadata) == null ? void 0 : b.groupType;
        e = (e = g.groupMetadata) == null ? void 0 : e.participants;
        var p = c("useForceUpdate")();
        d("useWAWebListener").useListener(e, "bulk_add bulk_remove reset sort change:isAdmin change:isSuperAdmin", p);
        p = (p = e == null ? void 0 : e.length) != null ? p : 0;
        f = (f = o == null ? void 0 : o.size) != null ? f : 0;
        e = (e == null ? void 0 : e.iAmAdmin()) ? p : f;
        f = (f = g.groupMetadata) == null ? void 0 : f.getParentGroupChat();
        var q = h._("__JHASH__z5z8-Yc31kC__JHASH__");
        if (b === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) q = h._("__JHASH__x2ZQLkFbyM5__JHASH__");
        else if (f != null) {
            var r;
            ((r = g.groupMetadata) == null ? void 0 : r.hiddenSubgroup) === !0 && d("WAWebCommunityGatingUtils").communityHiddenGroupsReceiverEnabled() ? q = h._("__JHASH__1UVyKJDLpXI__JHASH__", [h._param("community-name", f == null ? void 0 : f.formattedTitle)]) : q = h._("__JHASH__yFCD8OqKycr__JHASH__", [h._param("community-name", f == null ? void 0 : f.formattedTitle)])
        }
        r = h._("__JHASH__u0BrJ8_X_Ty__JHASH__", [h._plural(b === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ? e : p, "number")]);
        return k.jsx(c("WAWebDrawerSection.react"), {
            theme: "padding-large",
            children: k.jsxs(d("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [k.jsx(d("WAWebGroupInfoPhoto.react").GroupInfoPhoto, {
                    chat: g,
                    xstyle: l.photo,
                    showAddIconOverlay: !0,
                    showHiddenSubgroupIcon: a
                }), k.jsx(m, {
                    chat: g,
                    focusOnMount: i
                }), k.jsx("div", {
                    "data-testid": void 0,
                    className: "x1evy7pa x1kgmq87 x2b8uid",
                    children: k.jsx(d("WAWebCopyPasteSelectable.react").SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: k.jsxs(d("WAWebText_DONOTUSE.react").TextSpan, {
                            size: "16",
                            color: "secondary",
                            children: [k.jsx(d("WAWebEmojiText.react").EmojiText, {
                                text: q
                            }), (o == null ? void 0 : o.isSuspendedOrTerminated()) ? null : k.jsxs(k.Fragment, {
                                children: [c("WAWebL10N").isRTL() ? " -\xa0" : " \xb7\xa0", k.jsx(c("WAWebUnstyledButton.react"), {
                                    onClick: j,
                                    children: r
                                })]
                            })]
                        })
                    })
                }), d("WAWebBizGatingUtils").canDisplayLabel() && k.jsx(c("WAWebLabelsInfoDrawerLabelWell.react"), {
                    labels: n.labels
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a) {
        var e = a.chat;
        a = a.focusOnMount;
        a = a === void 0 ? !1 : a;
        var f = d("useWAWebModelValues").useModelValues(e.contact, ["name"]),
            g = d("useWAWebModelValues").useModelValues(c("WANullthrows")(e.groupMetadata), ["creation", "restrict", "support", "isUnnamed", "participants"]),
            i = c("useWAWebUnmountSignal")(),
            l = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    a = a;
                    if (a === f.name) return;
                    yield c("WAPromiseRaceAbort")(d("WAWebSetSubjectGroupAction").setGroupSubject(e, a), i)["catch"](d("WAAbortError").catchAbort(c("WAWebNoop")))["catch"](function (a) {
                        d("WALogger").WARN(j()).devConsole(a)
                    })
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }(),
            m = function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    },
                    okText: c("WAWebFbtCommon")("OK"),
                    children: h._("__JHASH__TRqQJIz5tfr__JHASH__")
                }))
            };
        return !g.support ? g.isUnnamed && d("WAWebABProps").getABPropConfigValue("ugr_enabled") ? k.jsx(c("WAWebGroupInfoSubjectInput.react"), {
            subject: d("WAWebParticipantListUtils").calculateUnnamedGroupParticipantsList(g).toLocaleString(),
            onSave: l,
            editable: g.canSetSubject(),
            editRestrictionInfo: g.restrict ? m : void 0,
            focusOnMount: a
        }) : k.jsx(c("WAWebGroupInfoSubjectInput.react"), {
            subject: f.name || e.formattedTitle,
            onSave: l,
            editable: g.canSetSubject(),
            editRestrictionInfo: g.restrict ? m : void 0,
            focusOnMount: a
        }) : k.jsx(d("WAWebWDSText.react").WDSTextLarge, {
            as: "h2",
            xstyle: [d("WAWebUISpacing").uiMargin.top5, d("WAWebUISpacing").uiMargin.bottom6, d("WAWebUISpacing").uiMargin.horiz0],
            children: k.jsx(d("WAWebName.react").GroupName, {
                chat: e,
                groupMetadata: g,
                breakWord: !0,
                checkmarkLarge: !0
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebGroupSupportSecurityDrawerSection.react", ["fbt", "WAWebChatInfoDrawerRow.react", "WAWebLockIcon", "WAWebSvgComponentBase", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.onClick;
        a = a.spaced;
        var e = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                as: "span",
                children: h._("__JHASH__45_ECZjFpWN__JHASH__")
            }),
            f = j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: h._("__JHASH__si91EUWucRi__JHASH__")
            }),
            g = j.jsx(d("WAWebLockIcon").LockIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            });
        return j.jsx(c("WAWebChatInfoDrawerRow.react"), {
            icon: g,
            onClick: b,
            title: e,
            secondaryTitle: f,
            spaced: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebSubgroupHiddenVisibilityModal.react", ["fbt", "WAWebConfirmPopup.react", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFlex.react", "WAWebModalManager", "WAWebUISpacing", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a() {
        var a = h._("__JHASH__PHXRKNgEhQO__JHASH__"),
            b = h._("__JHASH__beURkR0fJCD__JHASH__"),
            c = j.jsx(d("WAWebExternalLink.react").ExternalLink, {
                href: d("WAWebFaqUrl").getCommunityGroupsVisibilityFaqUrl(),
                children: h._("__JHASH__5Mkg2NoILd___JHASH__")
            });
        c = h._("__JHASH__ULDXkWs1_II__JHASH__", [h._param("learn-more-link", c)]);
        return j.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: function () {
                return d("WAWebModalManager").ModalManager.close()
            },
            title: a,
            children: j.jsxs(d("WAWebFlex.react").FlexColumn, {
                children: [j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                    xstyle: d("WAWebUISpacing").uiPadding.bottom20,
                    children: b
                }), j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                    children: c
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebGroupInfoDrawer.react", ["fbt", "WAWebABProps", "WAWebCAPIGroupAboutModal.react", "WAWebChatEphemerality", "WAWebChatGroupUtils", "WAWebChatInfoDrawerRow.react", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoFavoritesSection.react", "WAWebChatInfoListsSection.react", "WAWebChatInfoMediaSection.react", "WAWebChatInfoPhoneNumberVisibilityIndicator.react", "WAWebCommunityGatingUtils", "WAWebCommunityGroupJourneyEventImpl", "WAWebCommunityGroupOpenAddParticipantFlow", "WAWebContactGetters", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebDrawerSection.react", "WAWebE2EInfoModal.react", "WAWebEphemeralSettingRow.react", "WAWebExitedGroupMemberSection.react", "WAWebFlatListController", "WAWebFrontendContactGetters", "WAWebGroupInfoCommunitySection.react", "WAWebGroupInfoCreateCommunitySection.react", "WAWebGroupInfoDescriptionSection.react", "WAWebGroupInfoEventsSection.react", "WAWebGroupInfoIntegritySection.react", "WAWebGroupInfoParticipantsSection.react", "WAWebGroupInfoPendingParticipantsSection.react", "WAWebGroupInfoTopCard.react", "WAWebGroupParticipantsFlow.react", "WAWebGroupSupportSecurityDrawerSection.react", "WAWebGroupType", "WAWebHostedGroupUtils", "WAWebInboxFiltersGatingUtils", "WAWebKeepInChatIcon", "WAWebListsGatingUtils", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebMuteRow.react", "WAWebPencilIcon", "WAWebPrinaUtils", "WAWebReactionsUtils", "WAWebSecurityDrawerSection.react", "WAWebSettingsIcon", "WAWebStarIcon", "WAWebStateUtils", "WAWebSubgroupHiddenVisibilityModal.react", "WAWebSuspendedCommunityUtils", "WAWebSuspendedGroupUtils", "WAWebSvgComponentBase", "WAWebTextWithLearnMoreLink", "WAWebUISpacing", "WAWebUiActionWamEvent", "WAWebVisibilityOffIcon", "WAWebWDSText.react", "WAWebWamAddressingModeUtils", "WAWebWamEnumActionEntryPoint", "WAWebWamEnumChatFilterActionTypes", "WAWebWamEnumLandingSurface", "WAWebWamEnumPrivacyHighlightSurfaceEnum", "WAWebWamEnumSurfaceType", "WAWebWamEnumUiActionType", "WAWebWamEnumUnlockEntryPoint", "WAWebWamGroupMetricUtils", "WAWebWamPrivateStatsUtils", "WAWebWarningIcon", "cr:1066", "gkx", "react", "useForceUpdate", "useLazyRef", "useWAWebChatLockRestriction", "useWAWebContactValues", "useWAWebFocusOnMount", "useWAWebListener", "useWAWebModelValues", "useWAWebUIM"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useEffect,
        m = e.useRef,
        n = {
            announcementGroupDisclaimer: {
                textAlign: "x1yc453h",
                paddingTop: "x1yrsyyn",
                paddingBottom: "x1l90r2v",
                paddingStart: "xxpdul3",
                paddingLeft: null,
                paddingRight: null,
                paddingEnd: "x6x52a7",
                lineHeight: "x37zpob",
                wordBreak: "x13faqbe",
                $$css: !0
            },
            lastSectionRow: {
                marginBottom: "xyorhqc",
                $$css: !0
            },
            chatWallpaperIcon: {
                color: "xq22nx5",
                $$css: !0
            }
        };
    e = k.forwardRef(a);

    function a(a, e) {
        var f = babelHelpers["extends"]({}, a),
            g = f.onVerification,
            i = f.onClose,
            j = f.onContactInfo;
        a = f.onEventInfo;
        var o = f.onAllEvents,
            p = f.onWallpaperClick,
            q = c("useWAWebUIM")(),
            r = c("useForceUpdate")(),
            s = c("useWAWebFocusOnMount")(),
            t = d("useWAWebModelValues").useModelValues(f.chat, ["mute", "id", "pendingAction", "groupMetadata", "isBroadcast", "isNewsletter"]),
            u = d("useWAWebModelValues").useModelValues(f.groupMetadata, ["id", "reportToAdminMode", "cachedDeviceCount", "cachedDeviceSizeBucket", "participants", "parentGroup", "pendingParticipants", "announce", "support", "groupType", "restrict", "isCag", "defaultSubgroup", "hasCapi", "owner", "hiddenSubgroup"]),
            v = d("useWAWebContactValues").useContactValues(f.contact.id, [d("WAWebContactGetters").getName, d("WAWebContactGetters").getId, d("WAWebFrontendContactGetters").getPendingAction]);
        v[0];
        v[1];
        v[2];
        var w = u.groupType === d("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
            x = c("useLazyRef")(function () {
                return new(d("WAWebUiActionWamEvent").UiActionWamEvent)({
                    uiActionType: w ? d("WAWebWamEnumUiActionType").UI_ACTION_TYPE.DEFAULT_SUBGROUP_INFO_OPEN : d("WAWebWamEnumUiActionType").UI_ACTION_TYPE.GROUP_INFO_OPEN,
                    uiActionPreloaded: !0,
                    isLid: u.isCag
                })
            });
        v = c("useLazyRef")(function () {
            return new(c("WAWebFlatListController"))()
        });
        var y = c("useLazyRef")(function () {
                return new(c("WAWebFlatListController"))()
            }),
            z = m(null);
        d("useWAWebListener").useListener(u.participants, ["bulk_add", "bulk_remove", "reset", "sort", "change:isAdmin", "change:isSuperAdmin"], r);
        d("useWAWebListener").useListener(u.pendingParticipants, ["add", "remove", "reset"], r);
        r = function () {
            var a;
            a = (a = u.getParentGroupChat()) == null ? void 0 : a.formattedTitle;
            d("WAWebCommunityGroupOpenAddParticipantFlow").groupOpenAddParticipantFlow(u, t, a)
        };
        var A = function (a) {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebGroupParticipantsFlow.react").GroupParticipantsFlow, {
                    chat: d("WAWebStateUtils").unproxy(t),
                    onVerification: g,
                    onContactInfo: j,
                    initialStep: a
                }), {
                    transition: "modal-flow"
                })
            },
            B = function () {
                i ? i() : q == null ? void 0 : q.requestDismiss()
            },
            C = function () {
                var a;
                (a = z.current) == null ? void 0 : a.scrollIntoView()
            },
            D = function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebE2EInfoModal.react"), {
                    chat: t,
                    chatId: t.id,
                    e2eSubtype: "info_encrypted"
                }))
            },
            E = function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModal, {}))
            },
            F = function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebSubgroupHiddenVisibilityModal.react"), {}))
            };
        l(function () {
            d("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(t) ? d("WAWebSuspendedCommunityUtils").openTerminatedCommunityModal() : d("WAWebChatGroupUtils").isTerminatedGroupOrNotMember(t) ? d("WAWebChatGroupUtils").isSupportGroup(t) || (d("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? d("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(t) : d("WAWebSuspendedGroupUtils").openTerminatedGroupOrNotMemberModal()) : d("WAWebChatGroupUtils").isSuspendedGroup(t) && (d("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? d("WAWebSuspendedGroupUtils").openSuspendedGroupModalV2(t) : d("WAWebSuspendedGroupUtils").openSuspendedGroupModal(d("WAWebChatGroupUtils").shouldIncludeEntityIdInAppealRequest() === !0 ? u.id.user.toString() : null));
            if (u.groupType !== d("WAWebGroupType").GroupType.DEFAULT) {
                var a = new(d("WAWebCommunityGroupJourneyEventImpl").CommunityGroupJourneyEvent)({
                    action: d("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.VIEW,
                    surface: d("WAWebWamEnumSurfaceType").SURFACE_TYPE.GROUP_INFO,
                    chat: t
                });
                a.commit()
            }
        }, []);
        l(function () {
            var a = u.participants;
            a.ensureSorted();
            a = u.pendingParticipants;
            a.ensureSorted()
        });
        l(function () {
            var a = x.current;
            if (a) {
                var b = u.cachedDeviceSizeBucket;
                b != null && (a.sizeBucket = b);
                Object.assign(a, d("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(d("WAWebStateUtils").unproxy(u)), d("WAWebWamAddressingModeUtils").getAddressingModeMetricsFromGroupMetadata(d("WAWebStateUtils").unproxy(u)));
                a.markUiActionT();
                a.commit();
                x.current = void 0
            }
            d("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents()
        }, []);
        var G = d("useWAWebChatLockRestriction").useChatLockRestriction({
            id: "locked-group-info-" + t.id.toString(),
            condition: d("WAWebStateUtils").unproxy(t),
            onPromptFailure: function () {
                return B()
            },
            entryPoint: d("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_INFO,
            landingSurface: d("WAWebWamEnumLandingSurface").LANDING_SURFACE.CHAT_INFO,
            unlockEntryPoint: d("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_INFO
        });
        if (!G) return null;
        var H;
        if (u.canSetGroupProperty()) {
            G = k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__EF0dhBHKQey__JHASH__")
            });
            var I = k.jsx(d("WAWebSettingsIcon").SettingsIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 17
            });
            H = k.jsx(c("WAWebChatInfoDrawerRow.react"), {
                testid: void 0,
                side: "chevron",
                icon: I,
                onClick: f.onAdminSetting,
                title: G,
                spaced: !0
            })
        }
        I = null;
        !d("WAWebChatGroupUtils").isSuspendedGroup(t) && f.onMediaGallery && (I = k.jsx(c("WAWebChatInfoMediaSection.react"), {
            onMediaGallery: f.onMediaGallery,
            chat: d("WAWebStateUtils").unproxy(t)
        }));
        G = t && d("WAWebChatEphemerality").shouldShowEphemeralSetting(t) ? k.jsx(d("WAWebEphemeralSettingRow.react").EphemeralSettingRow, {
            onClick: f.onEphemeral,
            chat: t,
            groupMetadata: u,
            testid: void 0
        }) : null;
        var J = null;
        if (t && u.parentGroup && u.participants.iAmMember()) {
            var K = u.getParentGroupChat();
            (K == null ? void 0 : K.groupMetadata) && (J = k.jsx(c("WAWebGroupInfoCommunitySection.react"), {
                onClick: function () {
                    f.onCommunityClick == null ? void 0 : f.onCommunityClick()
                },
                parentGroupMetadata: K.groupMetadata,
                parentGroupChat: K
            }))
        }
        K = null;
        a != null && o != null && (K = k.jsx(d("WAWebGroupInfoEventsSection.react").GroupInfoEventsSection, {
            chat: d("WAWebStateUtils").unproxy(t),
            onAllEvents: o,
            onEventInfo: a
        }));
        o = null;
        o = k.jsx(c("WAWebSecurityDrawerSection.react"), {
            highlightSurface: d("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
            onClick: function () {
                return d("WAWebPrinaUtils").showEncryptionInfoPopup(t)
            },
            header: {
                type: "encryption"
            },
            text: h._("__JHASH__fjX5h7aksVf__JHASH__"),
            spaced: !0
        });
        if (d("WAWebHostedGroupUtils").isWAHostedGroupEnabled()) {
            a = u.owner && ((a = u.participants.get(u.owner)) == null ? void 0 : a.contact);
            a && u.hasCapi === !0 && (o = k.jsx(c("WAWebSecurityDrawerSection.react"), {
                highlightSurface: d("WAWebWamEnumPrivacyHighlightSurfaceEnum").PRIVACY_HIGHLIGHT_SURFACE_ENUM.INFO_SCREEN_GROUP,
                onClick: E,
                header: {
                    type: "security"
                },
                text: k.jsx(c("WAWebTextWithLearnMoreLink"), {
                    text: d("WAWebHostedGroupUtils").getSecureServicesBannerText(a, !0),
                    handleClick: E
                }),
                spaced: !0
            }))
        }
        d("WAWebChatGroupUtils").isSupportGroup(t) && (o = k.jsx(c("WAWebGroupSupportSecurityDrawerSection.react"), {
            onClick: D,
            spaced: !0
        }));
        var L;
        !c("gkx")("26258") && b("cr:1066") && u != null && (L = k.jsx(b("cr:1066"), {
            groupMetadata: d("WAWebStateUtils").unproxy(u)
        }));
        a = t.mute.canMute() ? k.jsx(c("WAWebMuteRow.react"), {
            chat: t,
            mute: t.mute
        }) : null;
        E = d("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") ? k.jsx(c("WAWebChatInfoDrawerRow.react"), {
            side: "chevron",
            icon: k.jsx(d("WAWebPencilIcon").PencilIcon, {
                xstyle: n.chatWallpaperIcon
            }),
            onClick: p,
            testid: void 0,
            title: k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__ietVlHPyzR2__JHASH__")
            }),
            spaced: !0
        }) : null;
        D = Boolean(u.parentGroup && u.hiddenSubgroup === !0 && d("WAWebCommunityGatingUtils").communityHiddenGroupsReceiverEnabled());
        p = D ? k.jsx(c("WAWebChatInfoDrawerRow.react"), {
            icon: k.jsx(d("WAWebVisibilityOffIcon").VisibilityOffIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            }),
            onClick: F,
            testid: void 0,
            title: k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__FK8PDIb9qHO__JHASH__")
            }),
            secondaryTitle: k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: h._("__JHASH___eCZPmt6m5B__JHASH__")
            }),
            spaced: !0
        }) : null;
        F = null;
        if (!d("WAWebChatGroupUtils").isSuspendedGroup(t) && f.onStarred) {
            var M = k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                    children: h._("__JHASH__-jY0ppnhrUk__JHASH__")
                }),
                N = k.jsx(d("WAWebStarIcon").StarIcon, {
                    color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                    height: 20
                });
            F = k.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
                titleTestId: "section-starred-messages",
                xstyle: d("WAWebUISpacing").uiPadding.horiz0,
                children: k.jsx(c("WAWebChatInfoDrawerRow.react"), {
                    testid: void 0,
                    side: "chevron",
                    icon: N,
                    onClick: f.onStarred,
                    title: M,
                    spaced: !0
                })
            })
        }
        var O;
        if (t.hasKeptMsgs() || d("WAWebChatEphemerality").isEphemeralSettingOn(t)) {
            N = k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__1CKSvHimQfa__JHASH__")
            });
            M = u.restrict ? k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: h._("__JHASH__ctdHCQ-T0FO__JHASH__")
            }) : null;
            var P = k.jsx(d("WAWebKeepInChatIcon").KeepInChatIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            });
            O = k.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
                titleTestId: "section-kept-messages",
                xstyle: [n.lastSectionRow, d("WAWebUISpacing").uiPadding.horiz0],
                children: k.jsx(c("WAWebChatInfoDrawerRow.react"), {
                    testid: void 0,
                    side: "chevron",
                    icon: P,
                    onClick: f.onKept,
                    title: N,
                    secondaryTitle: M,
                    spaced: !0
                })
            })
        }
        P = d("WAWebReactionsUtils").isReactionsEnabledInCAG(t) ? k.jsx(d("WAWebChatInfoPhoneNumberVisibilityIndicator.react").PhoneNumberVisibilityIndicatorCag, {
            chat: t
        }) : null;
        N = d("WAWebABProps").getABPropConfigValue("report_to_admin_kill_switch") && u.reportToAdminMode && u.canSetGroupProperty() ? k.jsx(c("WAWebChatInfoDrawerRow.react"), {
            testid: void 0,
            side: "chevron",
            icon: k.jsx(d("WAWebWarningIcon").WarningIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 16
            }),
            onClick: f.onSentForAdminReview,
            title: k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__3t-Zl4r7h-Z__JHASH__")
            }),
            spaced: !0
        }) : null;
        M = null;
        (a || o || G) && (M = k.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: [n.lastSectionRow, d("WAWebUISpacing").uiPadding.horiz0],
            children: [a, E, N, o, G, p, H, P]
        }));
        a = k.jsx(c("WAWebGroupInfoIntegritySection.react"), {
            chat: d("WAWebStateUtils").unproxy(t)
        });
        E = {
            surface: "group-info-drawer",
            extras: {
                groupSize: u.participants.length,
                typeOfGroup: d("WAWebGroupType").groupTypeToWamEnum(d("WAWebGroupType").getGroupTypeFromGroupMetadata(d("WAWebStateUtils").unproxy(u)))
            }
        };
        p = Boolean((N = t.groupMetadata) == null ? void 0 : N.isCag) && !((o = t.groupMetadata) == null ? void 0 : (G = o.participants) == null ? void 0 : G.iAmAdmin()) ? k.jsx(c("WAWebDrawerSection.react"), {
            theme: "transparent",
            shadow: !1,
            children: k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                xstyle: n.announcementGroupDisclaimer,
                children: h._("__JHASH__mgbTbNo3HJZ__JHASH__")
            })
        }) : null;
        return k.jsx("div", {
            role: "complementary",
            ref: s,
            tabIndex: "-1",
            "aria-label": h._("__JHASH__oR6NrtkpQh4__JHASH__"),
            children: k.jsxs(c("WAWebDrawer.react"), {
                ref: e,
                theme: "striped",
                testid: void 0,
                tsNavigationData: E,
                children: [k.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                    title: h._("__JHASH__aBmR51CpRtQ__JHASH__"),
                    type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                    rtlFixIfOnDarwin: !0,
                    onCancel: B,
                    testid: void 0
                }), k.jsx(c("WAWebDrawerBody.react"), {
                    children: k.jsxs("section", {
                        className: "x2lah0s x1c4vz4f xdl72j9 x1w3bhph",
                        "data-testid": void 0,
                        children: [k.jsx(c("WAWebGroupInfoTopCard.react"), {
                            chat: d("WAWebStateUtils").unproxy(t),
                            onAdminSetting: f.onAdminSetting,
                            onAddParticipant: r,
                            onClickParticipantsCount: C,
                            focusGroupSubjectOnMount: f.focusGroupSubjectOnMount,
                            showHiddenSubgroupIcon: D
                        }), J, k.jsx(c("WAWebGroupInfoDescriptionSection.react"), {
                            chat: d("WAWebStateUtils").unproxy(t),
                            showFullDescription: f.showFullGroupDescription,
                            focusOnMount: f.focusGroupDescriptionOnMount
                        }), I, K, F, O, M, L, k.jsx(c("WAWebGroupInfoCreateCommunitySection.react"), {
                            chat: t,
                            groupMetadata: u
                        }), !u.participants.iAmMember() && k.jsx(d("WAWebExitedGroupMemberSection.react").ExitedGroupMemberSection, {
                            group: t
                        }), k.jsx(d("WAWebGroupInfoParticipantsSection.react").GroupInfoParticipantsSection, {
                            ref: z,
                            chat: d("WAWebStateUtils").unproxy(t),
                            scrollToParticipantList: f.scrollToParticipantList,
                            flatListController: v.current,
                            onAddParticipant: r,
                            onOpenParticipantSearch: A,
                            onGroupInviteLink: f.onGroupInviteLink,
                            onPendingParticipants: f.onPendingParticipants,
                            onVerification: f.onVerification,
                            onParticipantClick: function (a, b) {
                                return f.onContactInfo == null ? void 0 : f.onContactInfo(b)
                            }
                        }), p, k.jsx(d("WAWebGroupInfoPendingParticipantsSection.react").GroupInfoPendingParticipantsSection, {
                            chat: d("WAWebStateUtils").unproxy(t),
                            flatListController: y.current
                        }), t && t.canToggleFavorite() && d("WAWebInboxFiltersGatingUtils").inboxFavoritesManagementEnabled() && k.jsx(d("WAWebChatInfoFavoritesSection.react").ChatInfoFavoritesSection, {
                            chat: t
                        }), t && d("WAWebListsGatingUtils").isListsEnabled() && k.jsx(d("WAWebChatInfoListsSection.react").ChatInfoListsSection, {
                            chat: t
                        }), a]
                    })
                })]
            }, "contact-info-modal")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebKeptDrawer.react", ["fbt", "WAWebChatThreadLogging", "WAWebDisappearingMessageKeepInChatWamEvent", "WAWebDisplayType", "WAWebEmptyState.react", "WAWebKicNux.react", "WAWebMsgDrawer.react", "WAWebWamEnumKicActionNameType", "WAWebWamEnumKicEntryPointType", "WAWebWamEnumTriggerType", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect;
    b = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.keptMsgs,
            f = a.onClose,
            g = a.chat;
        a = d("WAWebKicNux.react").useKicNux(g);
        var i = a[0],
            j = a[1];
        l(function () {
            i && j(d("WAWebWamEnumTriggerType").TRIGGER_TYPE.KEPT_FOLDER_TAP_FIRST_TIME)
        }, []);
        l(function () {
            var a = new(d("WAWebDisappearingMessageKeepInChatWamEvent").DisappearingMessageKeepInChatWamEvent)({
                kicActionName: d("WAWebWamEnumKicActionNameType").KIC_ACTION_NAME_TYPE.VIEW_KEPT_MESSAGES,
                kicEntryPoint: d("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.CHAT_INFO,
                messagesInFolder: e.length,
                isAGroup: g == null ? void 0 : g.isGroup
            });
            if (g == null) {
                a.commit();
                return
            }
            if (g.isGroup) {
                var b;
                a.set({
                    isAdmin: (b = g.groupMetadata) == null ? void 0 : b.participants.iAmAdmin()
                })
            }
            d("WAWebChatThreadLogging").getChatThreadID(g.id.toJid()).then(function (b) {
                b != null && a.set({
                    threadId: b
                })
            })["finally"](function () {
                a.commit()
            })
        }, []);
        a = h._("__JHASH__IiN6fVu61O4__JHASH__");
        var m = k.jsx(d("WAWebEmptyState.react").KeptMsgs, {}),
            n = null;
        if (g == null ? void 0 : g.isGroup) {
            var o;
            ((o = g.groupMetadata) == null ? void 0 : o.restrict) ? n = k.jsx("div", {
                className: "x1xy6bms xc73u3c x84yb8i xxpdul3 x1nxh6w3 x1sibtaa xib33u6",
                children: h._("__JHASH__srn4gOfMGNA__JHASH__")
            }): n = k.jsx("div", {
                className: "x1xy6bms xc73u3c x84yb8i xxpdul3 x1nxh6w3 x1sibtaa xib33u6",
                children: h._("__JHASH__reKegjM62vs__JHASH__")
            })
        } else n = k.jsx("div", {
            className: "x1xy6bms xc73u3c x84yb8i xxpdul3 x1nxh6w3 x1sibtaa xib33u6",
            children: h._("__JHASH__j1Awr3QoJ7D__JHASH__")
        });
        return k.jsx(c("WAWebMsgDrawer.react"), {
            testid: void 0,
            ref: b,
            msgCollection: e,
            onClose: f,
            chat: g,
            title: a,
            emptyListText: m,
            descriptionSection: n,
            displayType: d("WAWebDisplayType").DISPLAY_TYPE.KEPT_MSGS
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebLinkMsg.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        msg: "_ak13",
        text: "_ak14",
        bubble: "_ak15",
        author: "_ak16",
        hasSuspiciousLinks: "_ak17",
        hasAuthor: "_ak18",
        suspiciousLabel: "_ak19"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebLinkMsg.react", ["WAWebBizSuspiciousLabel.react", "WAWebClassnames", "WAWebDisplayType", "WAWebEmojiText.react", "WAWebFormatConfiguration", "WAWebFrontendMsgGetters", "WAWebGalleryMsg.react", "WAWebL10N", "WAWebLinkMsg.scss", "WAWebMediaLinkPreview.react", "WAWebMessageAuthor.react", "WAWebMessageCheckbox.react", "WAWebMsgGetters", "WAWebMsgLinks", "WAWebMsgModelPropUtils", "WAWebMsgPhoneNumbers", "WAWebVelocityTransitionGroup", "WAWebWrapper.react", "react", "useWAWebListener", "useWAWebMsgValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = i || c("react"),
        k = (h || (h = d("react"))).useState;

    function a(a) {
        var b, e = a.msg,
            f = a.link,
            g = a.displayAuthor,
            h = a.selectedMessages,
            i = a.onMessageSelect,
            l = a.onClickMsg,
            m = a.testid;
        b = d("useWAWebMsgValues").useMsgValues(a.msg.id, [(m = d("WAWebMsgGetters")).getBody, m.getCaption, (b = d("WAWebFrontendMsgGetters")).getDir, m.getId, m.getIsSentByMe, b.getMediaData, m.getType, b.getRtl, b.getSenderObj, m.getStar, b.getAsRevoked, m.getIsKept]);
        m = b[0];
        var n = b[1],
            o = b[2],
            p = b[3],
            q = b[4];
        b[5];
        b[6];
        var r = b[7],
            s = b[8],
            t = b[9];
        b[10];
        b = b[11];
        var u = k(!1),
            v = u[0],
            w = u[1];
        u = k(function () {
            return h.isSelected(e.unsafe())
        });
        var x = u[0],
            y = u[1];
        u = function (a) {
            x !== a && y(a)
        };
        d("useWAWebListener").useListener(h, p.toString(), u);
        u = function () {
            v || w(!0)
        };
        var z = function () {
                v || w(!0)
            },
            A = function () {
                v && w(!1)
            },
            B = function () {
                l(e.unsafe(), !x)
            },
            C = function (a) {
                a && a.stopPropagation(), i(e.unsafe(), !x)
            };
        a = a.selectable === !0 || v ? j.jsx(c("WAWebMessageCheckbox.react"), {
            checked: x,
            onClick: C,
            msgTheme: "gallery"
        }) : null;
        C = !0;
        p = d("WAWebFormatConfiguration").Conversation({
            mentions: e.mentionMap(),
            groupMentions: e.groupMentionMap(),
            links: d("WAWebMsgLinks").getLinksFromMsg(e.unsafe()),
            phoneNumbers: d("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(e.unsafe()),
            selectable: C,
            trusted: d("WAWebMsgModelPropUtils").isTrusted(e.unsafe()),
            fromMe: p.fromMe,
            fromChatWid: p.remote,
            parseLists: !0,
            parseQuotes: !0,
            parseInlineCode: !0
        });
        m = m && m.includes(f.url) ? m : n;
        n = g ? j.jsx("div", {
            className: c("WAWebLinkMsg.scss").author,
            children: j.jsx(c("WAWebMessageAuthor.react"), {
                msg: e,
                contact: s
            })
        }) : null;
        s = d("WAWebMsgLinks").getSuspiciousLinks(e.unsafe()).length > 0;
        return j.jsx(c("WAWebGalleryMsg.react"), {
            hover: v,
            onClick: B,
            onMouseEnter: v ? null : z,
            onMouseOver: v ? null : u,
            onMouseLeave: v ? A : null,
            testid: void 0,
            children: j.jsxs("div", {
                className: c("WAWebLinkMsg.scss").msg,
                "data-testid": void 0,
                children: [j.jsx(c("WAWebVelocityTransitionGroup"), {
                    transitionName: "delay-leave",
                    children: a
                }), j.jsx(d("WAWebWrapper.react").MessageContainer, {
                    isSentByMe: q,
                    children: j.jsxs("div", {
                        className: d("WAWebClassnames").classnamesConvertMeToStylexPlease((B = {}, B[c("WAWebLinkMsg.scss").hasAuthor] = g, B[c("WAWebLinkMsg.scss").hasSuspiciousLinks] = s, B[c("WAWebLinkMsg.scss").bubble] = !0, B)),
                        children: [n, j.jsx(d("WAWebBizSuspiciousLabel.react").SuspiciousLabel, {
                            link: f,
                            displayType: d("WAWebDisplayType").DISPLAY_TYPE.GALLERY
                        }), j.jsx(c("WAWebMediaLinkPreview.react"), {
                            title: f.url,
                            isSentByMe: q,
                            matchedText: f.domain,
                            displayType: d("WAWebDisplayType").DISPLAY_TYPE.GALLERY,
                            star: t,
                            kept: b,
                            isLoading: !1
                        }), j.jsx(d("WAWebEmojiText.react").EmojiText, {
                            text: m,
                            selectable: C,
                            className: c("WAWebLinkMsg.scss").text,
                            dirMismatch: r !== c("WAWebL10N").isRTL(),
                            direction: o,
                            formatters: p
                        })]
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebLinkGallery.react", ["fbt", "Promise", "WAWebDisplayType", "WAWebFrontendMsgGetters", "WAWebHistorySyncComponents.react", "WAWebLinkMsg.react", "WAWebMessageGallery.react", "WAWebMsgGetters", "WAWebMsgLinks", "WAWebMsgsCollectionFilterer", "WAWebStarredMsg.react", "react", "useLazyRef", "useWAWebListener", "useWAWebUiIdle"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l = k || c("react"),
        m = (j || (j = d("react"))).useEffect,
        n = function (a, b, e, f, g) {
            var h = [];
            a.forEach(function (a) {
                var i = !d("WAWebMsgGetters").getIsSentByMe(a) && d("WAWebMsgGetters").getIsGroupMsg(a),
                    j = null;
                d("WAWebMsgGetters").getLinkPreview(a) && (j = l.jsx(c("WAWebStarredMsg.react"), {
                    testid: void 0,
                    msg: a,
                    selectable: e,
                    selectedMessages: g,
                    onMessageSelect: f,
                    displayType: d("WAWebDisplayType").DISPLAY_TYPE.GALLERY_LINKS,
                    onClickMsg: b
                }, a.id.toString()));
                d("WAWebMsgLinks").getGalleryLinks(a).forEach(function (d, k) {
                    (d.href !== a.matchedText || j == null) && h.push(l.jsx(c("WAWebLinkMsg.react"), {
                        testid: void 0,
                        msg: a.safe(),
                        link: d,
                        displayAuthor: i,
                        selectable: e,
                        selectedMessages: g,
                        onMessageSelect: f,
                        onClickMsg: b
                    }, a.id.toString() + "-" + k))
                });
                j != null && h.push(j)
            });
            h.reverse();
            return h
        };

    function a(a) {
        var e = a.linkMsgs,
            f = a.chat,
            g = a.selectedMessages,
            j = a.selectable,
            k = a.onMessageSelect,
            o = a.isFilterEnabled,
            p = o === void 0 ? !1 : o,
            q = a.filterText,
            r = c("useWAWebUiIdle")(),
            s = c("useLazyRef")(function () {
                return new(c("WAWebMsgsCollectionFilterer"))(function (a) {
                    return d("WAWebFrontendMsgGetters").getText(a)
                })
            });
        o = ["add", "remove", "reset", "query_doc_before"];
        d("useWAWebListener").useListener(e, "add", function (a) {
            p && s.current.cacheMessageTokens(a)
        });
        d("useWAWebListener").useListener(e, "remove", function (a) {
            s.current.removeMessageTokensFromCache(a)
        });
        d("useWAWebListener").useListener(e, "reset", function () {
            p && s.current.clearTokensCache()
        });
        m(function () {
            p && e.forEach(function (a) {
                s.current.cacheMessageTokens(a)
            })
        }, [e, s, p]);
        var t = function (a) {
            if (!a) return;
            var c = [];
            a = Array.isArray(a) ? a : [a];
            (i || (i = b("Promise"))).all(a.map(function (a) {
                var e = d("WAWebMsgLinks").getLinksFromMsg(a);
                e.length && c.push(a);
                return (i || (i = b("Promise"))).resolve()
            })).then(function () {
                c.length && e.add(c)
            })
        };
        d("useWAWebListener").useListener(f.msgs, "add bulk_add", t);
        t = function (a) {
            if (!e.hasLinkBefore) return;
            r(function () {
                e.queryLinks(f, a)
            })
        };
        var u = p ? function (a, b) {
            return s.current.filter(a, q, b)
        } : void 0;
        a.linkMsgs;
        a.chat;
        a.filterText;
        a.isFilterEnabled;
        var v = babelHelpers.objectWithoutPropertiesLoose(a, ["linkMsgs", "chat", "filterText", "isFilterEnabled"]);
        return l.jsxs(l.Fragment, {
            children: [l.jsx(c("WAWebMessageGallery.react"), babelHelpers["extends"]({
                testid: void 0,
                msgsCollection: e,
                msgsCollectionUpdateEvents: o,
                queryCollection: t,
                getHasBefore: function () {
                    return e.hasLinkBefore
                },
                getQueryBefore: function () {
                    return e.queryLinkBefore
                },
                messageElements: function (a, b) {
                    return n(a, b, j, k, g)
                },
                emptyText: h._("__JHASH__lk3jy2Yk9D4__JHASH__"),
                chat: f,
                filterMessages: u
            }, v)), l.jsx(d("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
                chat: a.chat
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductGallery.react", ["fbt", "Promise", "WAWebHistorySyncComponents.react", "WAWebMessageGallery.react", "react", "useWAWebUiIdle"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react");

    function a(a) {
        var e = a.productMsgs,
            f = a.chat;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["productMsgs", "chat"]);
        var g = ["add", "remove", "reset", "products_loaded"],
            j = c("useWAWebUiIdle")(),
            l = function (a) {
                return j(function () {
                    e.queryProducts(f, a)
                })
            };
        return k.jsxs(k.Fragment, {
            children: [k.jsx(c("WAWebMessageGallery.react"), babelHelpers["extends"]({
                msgsCollection: e,
                msgsCollectionUpdateEvents: g,
                queryCollection: l,
                getHasBefore: function () {
                    return e.hasProductBefore
                },
                getQueryBefore: function () {
                    return e.hasProductBefore ? (i || (i = b("Promise"))).resolve() : null
                },
                emptyText: h._("__JHASH__a1kyPamBBKJ__JHASH__"),
                chat: f
            }, a)), k.jsx(d("WAWebHistorySyncComponents.react").HistorySyncGalleryPlaceholder, {
                chat: f
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebMediaGalleryDrawer.react", ["fbt", "$InternalEnum", "WAWebActionToast.react", "WAWebChatListSearch.react", "WAWebChatlistPanelMode", "WAWebDocGallery.react", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebLinkGallery.react", "WAWebMediaGallery.react", "WAWebMiscGatingUtils", "WAWebMultiSelectBar.react", "WAWebMultiSelection", "WAWebProductGallery.react", "WAWebTabs.react", "WAWebUIRefreshGatingUtils", "WAWebUimUie.react", "WAWebVelocityTransitionGroup", "lodash", "react", "useLazyRef", "useWAWebDebouncedSearch"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useCallback,
        m = e.useMemo,
        n = e.useState,
        o = {
            column: {
                display: "x78zum5",
                flexGrow: "x1iyjqo2",
                flexShrink: "xs83m0k",
                flexBasis: "x1r8uery",
                flexDirection: "xdt5ytf",
                height: "x5yr21d",
                $$css: !0
            }
        },
        p = b("$InternalEnum")({
            MEDIA: "media",
            DOCS: "docs",
            LINKS: "links",
            PRODUCTS: "products"
        });

    function q(a) {
        var b = a.selected;
        a = a.onSearch;
        switch (b) {
            case p.MEDIA:
            case p.LINKS:
            case p.DOCS:
                return k.jsx(d("WAWebChatListSearch.react").ListSearch, {
                    onSearch: a,
                    loading: !1,
                    listFilterEnabled: !1,
                    chatlistFilterEnabled: !1,
                    mode: c("WAWebChatlistPanelMode").Chatlist,
                    placeholder: h._("__JHASH__ePPotU25g1Z__JHASH__")
                });
            default:
                return null
        }
    }
    q.displayName = q.name + " [from " + f.id + "]";

    function r(a) {
        switch (a.selectedTab) {
            case p.MEDIA:
                return k.jsx(c("WAWebMediaGallery.react"), {
                    chat: a.chat,
                    mediaMsgs: a.chat.getMediaMsgs(),
                    selectable: a.selectable,
                    onMessageSelect: a.onMessageSelect,
                    selectedMessages: a.selectedMessages,
                    fullCollection: !0,
                    isFilterEnabled: a.isFilterEnabled,
                    filterText: a.filterText
                });
            case p.LINKS:
                return k.jsx(c("WAWebLinkGallery.react"), {
                    chat: a.chat,
                    linkMsgs: a.chat.getLinkMsgs(),
                    selectable: a.selectable,
                    onMessageSelect: a.onMessageSelect,
                    selectedMessages: a.selectedMessages,
                    isFilterEnabled: a.isFilterEnabled,
                    filterText: a.filterText
                });
            case p.DOCS:
                return k.jsx(c("WAWebDocGallery.react"), {
                    chat: a.chat,
                    docMsgs: a.chat.getDocMsgs(),
                    selectable: a.selectable,
                    onMessageSelect: a.onMessageSelect,
                    selectedMessages: a.selectedMessages,
                    isFilterEnabled: a.isFilterEnabled,
                    filterText: a.filterText
                });
            case p.PRODUCTS:
                return k.jsx(c("WAWebProductGallery.react"), {
                    chat: a.chat,
                    productMsgs: a.chat.getProductMsgs(),
                    selectable: a.selectable,
                    onMessageSelect: a.onMessageSelect,
                    selectedMessages: a.selectedMessages,
                    onProductDetail: a.onProductDetail,
                    setScrollOffset: a.setScrollOffset,
                    scrollOffset: a.scrollOffset
                })
        }
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function s(a) {
        switch (a) {
            case p.MEDIA:
                return d("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.MEDIA;
            case p.DOCS:
                return d("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.DOCS;
            case p.LINKS:
                return d("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.LINKS;
            case p.PRODUCTS:
                return d("WAWebMultiSelectBar.react").MultiSelectBarEntryPoint.PRODUCTS
        }
    }
    e = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.chat,
            f = a.onProductDetail,
            g = a.setProductsScrollOffset,
            i = a.initialTab;
        i = i === void 0 ? p.MEDIA : i;
        var j = a.productsScrollOffset;
        j = j === void 0 ? 0 : j;
        i = n(i);
        var t = i[0],
            u = i[1];
        i = n(null);
        var v = i[0],
            w = i[1];
        i = n(!1);
        var x = i[0],
            y = i[1];
        i = c("useWAWebDebouncedSearch")();
        var z = i[0];
        i = i[1];
        var A = d("WAWebMiscGatingUtils").mediaLinksDocsFilteringEnabled(),
            B = c("useLazyRef")(function () {
                return new(c("WAWebMultiSelection"))([], function (a) {
                    return a.id.toString()
                })
            }),
            C = function () {
                if (x) return;
                y(!0)
            },
            D = function () {
                if (!x) return;
                B.current.unsetAll();
                y(!1)
            },
            E = function (a, b) {
                C(), B.current.setVal(a, b), B.current.getSelected().length === 0 && D()
            },
            F = l(function (a) {
                a = p.cast(a);
                if (a == null) return;
                var b = c("lodash").values(p).indexOf(t),
                    d = c("lodash").values(p).indexOf(a);
                b !== d && B.current.unsetAll();
                u(a);
                w(d > b ? "right" : "left");
                y(!1)
            }, [B, t]),
            G = m(function () {
                var a = [{
                    id: p.MEDIA,
                    title: h._("__JHASH__iifLwrKq4gL__JHASH__")
                }, {
                    id: p.DOCS,
                    title: h._("__JHASH__oIjkyS8Slbv__JHASH__")
                }, {
                    id: p.LINKS,
                    title: h._("__JHASH__QUMugHsVnXX__JHASH__")
                }];
                a.push({
                    id: p.PRODUCTS,
                    title: h._("__JHASH__jNygjCDe5tH__JHASH__")
                });
                return k.jsx(c("WAWebTabs.react"), {
                    tabConfigs: a,
                    selectedId: t,
                    onSelect: F,
                    testIdPrefix: "gallery-tab"
                })
            }, [t, F]),
            H = s(t),
            I = [p.MEDIA, p.DOCS].includes(t);
        I = x ? k.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "MediaMultiSelect",
            escapable: !0,
            requestDismiss: D,
            children: k.jsx(d("WAWebMultiSelectBar.react").MultiSelectBar, {
                chat: e,
                noSortOnForward: !0,
                theme: "mediaGallery",
                toastPosition: d("WAWebActionToast.react").ToastPosition.RIGHT,
                downloadButton: I,
                selectedMessages: B.current,
                onCancel: D,
                entryPoint: H
            })
        }) : null;
        H = v === "right" ? "slide-forward" : "slide-back";
        return k.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            theme: "gallery",
            testid: void 0,
            tsNavigationData: {
                surface: "media-drawer"
            },
            children: [k.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                title: " ",
                onBack: a.onBack,
                rtlFixIfOnDarwin: !0,
                type: d("WAWebUIRefreshGatingUtils").uiRefreshM1Enabled() ? d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL : d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.MULTI_MEDIA_GALLERY,
                focusBackOrCancel: !0
            }), I, G, A ? k.jsx(q, {
                selected: t,
                onSearch: i
            }) : null, k.jsx(c("WAWebDrawerBody.react"), {
                "data-list-scroll-container": !0,
                children: k.jsx(c("WAWebVelocityTransitionGroup"), {
                    transitionName: H,
                    xstyle: o.column,
                    children: k.jsx("div", {
                        className: "x10l6tqk x13vifvy x17qophe xh8yej3 x5yr21d",
                        children: k.jsx("div", {
                            className: "x78zum5 x1iyjqo2 xs83m0k x1r8uery xdt5ytf x5yr21d",
                            children: k.jsx(r, {
                                chat: e,
                                selectable: x,
                                onMessageSelect: E,
                                selectedMessages: B.current,
                                fullCollection: !0,
                                isFilterEnabled: A,
                                filterText: z,
                                onProductDetail: f,
                                setScrollOffset: g,
                                scrollOffset: j,
                                selectedTab: t,
                                mediaMsgs: e.getMediaMsgs(),
                                linkMsgs: e.getLinkMsgs(),
                                docMsgs: e.getDocMsgs(),
                                productMsgs: e.getProductMsgs()
                            })
                        })
                    }, t)
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.GalleryDrawerTabs = p;
    g.MediaGalleryDrawer = e
}), 226);
__d("WAWebNewsletterDescriptionSection.react", ["fbt", "WALogger", "WAWebActionToast.react", "WAWebChatInfoDescriptionSection.react", "WAWebClock", "WAWebCmd", "WAWebEditNewsletterMetadataAction", "WAWebFbtCommon", "WAWebNewsletterMembershipUtil", "WAWebRichTextInputGatingUtils", "WAWebToastManager", "WAWebWamEnumChannelAdminAction", "asyncToGeneratorRuntime", "react", "useWAWebEventTargetValue", "useWAWebListener", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["channel:handleEditDescription dropped"]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        m = e.useCallback,
        n = e.useRef,
        o = e.useState;

    function p(a) {
        var b = a.chat,
            e = a.desc;
        e = e === void 0 ? "" : e;
        var f = a.adminFunnelLogger,
            g = a.setIsEditing;
        a = a.toastId;
        var i = a === void 0 ? d("WAWebActionToast.react").genId() : a;
        a = d("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(b, {
            editDescription: !0
        }, {
            description: e
        });
        var j = (e = b.newsletterMetadata) == null ? void 0 : e.description;
        e = new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__VKApRMlUiUr__JHASH__"));
        var m = a.then(function () {
            f.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
            var a = Boolean(j) ? h._("__JHASH__03YYDukLWuQ__JHASH__") : h._("__JHASH__nKIyUc7TDs8__JHASH__");
            return new(d("WAWebActionToast.react").ActionType)(a, {
                actionText: c("WAWebFbtCommon")("Undo"),
                actionHandler: function () {
                    return p({
                        chat: b,
                        desc: j,
                        adminFunnelLogger: f,
                        toastId: i
                    })
                }
            })
        })["catch"](function (a) {
            f.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE);
            d("WALogger").WARN(k()).devConsole(a);
            return new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__H9MAgxLGGx8__JHASH__"), {
                actionText: c("WAWebFbtCommon")("Try again"),
                actionHandler: function () {
                    return p({
                        chat: b,
                        desc: j,
                        adminFunnelLogger: f,
                        toastId: i
                    })
                }
            })
        })["finally"](function () {
            g && g(!1)
        });
        d("WAWebToastManager").ToastManager.open(l.jsx(d("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: e,
            pendingAction: m
        }));
        return a
    }

    function a(a) {
        var e, f = a.adminFunnelLogger,
            g = a.focusOnMount;
        e = o((e = g) != null ? e : !1);
        var i = e[0],
            j = e[1],
            k = d("useWAWebModelValues").useModelValues(a.chat, ["id", "isNewsletter", "newsletterMetadata"]),
            q = d("useWAWebModelValues").useOptionalModelValues(k.newsletterMetadata, ["description", "creationTime", "membershipType"]);
        e = c("useWAWebEventTargetValue")(q, ["change:description"], function () {
            return (q == null ? void 0 : q.description) || ""
        });
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, "edit_newsletter_description", function () {
            j(!0)
        });
        var r = o(e),
            s = r[0];
        r = r[1];
        var t = n(e),
            u = m(function () {
                s !== t.current && (t.current = s, f.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_DESCRIPTION_SET))
            }, [f, s]),
            v = m(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
                    b === void 0 && (b = ""), u(), f.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP), yield p({
                        chat: k,
                        desc: b,
                        adminFunnelLogger: f,
                        setIsEditing: j
                    })
                });
                return function (b, c) {
                    return a.apply(this, arguments)
                }
            }(), [k, u, f]);
        if (q == null) return null;
        var w = h._("__JHASH__fu9QcWP6HY-__JHASH__"),
            x = q.creationTime;
        x = x != null ? d("WAWebClock").Clock.newsletterDescriptionCreatedStr(q.creationTime) : null;
        return l.jsx(c("WAWebChatInfoDescriptionSection.react"), {
            description: e,
            bulletPointsEnabled: d("WAWebRichTextInputGatingUtils").formattingV2ExpansionEnabled(),
            expandedFormattingEnabled: d("WAWebRichTextInputGatingUtils").formattingV2ExpansionEnabled(),
            chat: a.chat,
            testid: void 0,
            containerTestId: "newsletter-info-drawer-description-container",
            emptyValuePlaceholder: w,
            creationString: x,
            canSetDescription: d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(q),
            setDescriptionAction: v,
            onChange: r,
            onBlur: function () {
                u(), j(!1)
            },
            setIsEditing: i,
            focusOnMount: g
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebNewsletterInfoSubject.react", ["fbt", "WALogger", "WAWebActionToast.react", "WAWebEditNewsletterMetadataAction", "WAWebFbtCommon", "WAWebGroupInfoSubjectInput.react", "WAWebNewsletterMembershipUtil", "WAWebToastManager", "WAWebWamEnumChannelAdminAction", "asyncToGeneratorRuntime", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["newsletter:handleEditSubject dropped"]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        m = e.useCallback,
        n = e.useRef,
        o = e.useState;

    function p(a, b, e, f) {
        f === void 0 && (f = d("WAWebActionToast.react").genId());
        var g = d("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(a, {
                editName: !0
            }, {
                name: b
            }),
            i = a.name,
            j = new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__vqSbOxkMMEf__JHASH__")),
            m = g.then(function () {
                e.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_SUCCESS);
                return new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__EgACZflzDoh__JHASH__", [h._param("name", b)]), {
                    actionText: c("WAWebFbtCommon")("Undo"),
                    actionHandler: function () {
                        return p(a, i, e, f)
                    }
                })
            })["catch"](function (g) {
                e.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_FAILURE);
                d("WALogger").WARN(k()).devConsole(g);
                return new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__D-JB0CBsIU5__JHASH__"), {
                    actionText: c("WAWebFbtCommon")("Try again"),
                    actionHandler: function () {
                        return p(a, b, e, f)
                    }
                })
            });
        d("WAWebToastManager").ToastManager.open(l.jsx(d("WAWebActionToast.react").ActionToast, {
            id: f,
            initialAction: j,
            pendingAction: m
        }));
        return g
    }

    function a(a) {
        var e = a.adminFunnelLogger,
            f = a.chat;
        a = d("useWAWebModelValues").useOptionalModelValues(f.newsletterMetadata, ["name", "membershipType", "isSuspendedOrTerminated"]);
        var g = o(f.formattedTitle),
            i = g[0];
        g = g[1];
        var j = n(f.formattedTitle),
            k = m(function () {
                i !== j.current && (j.current = i, e.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_NAME_SET))
            }, [e, i]),
            q = m(function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    k();
                    if (a === f.formattedTitle) return;
                    e.logEvent(d("WAWebWamEnumChannelAdminAction").CHANNEL_ADMIN_ACTION.CHANNEL_ADMIN_FLOW_CONFIRMATION_TAP);
                    yield p(f, a, e)
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }(), [f, k, e]);
        return a == null ? null : l.jsx(c("WAWebGroupInfoSubjectInput.react"), {
            subject: f.formattedTitle,
            onSave: q,
            editRestrictionInfo: void 0,
            editable: d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(a) && a.isSuspendedOrTerminated !== !0,
            emptyErrorMessage: h._("__JHASH__M1ln_cXonwj__JHASH__"),
            onChange: g,
            onBlur: k,
            direction: "ltr"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebNewsletterLinkShareLogging", ["WAWebChannelLinkShareWamEvent", "WAWebNewsletterGatingUtils"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        var b = a.shareDirection,
            c = a.linkShareScreenEntryPoint,
            e = a.linkShareScreen;
        a = a.newsletter;
        if (!d("WAWebNewsletterGatingUtils").isNewsletterLinkShareLoggingEnabled()) return;
        b = new(d("WAWebChannelLinkShareWamEvent").ChannelLinkShareWamEvent)({
            channelLinkShareDirection: b,
            channelLinkShareEntryPoint: c,
            channelLinkShareScreen: e,
            cid: a.user
        });
        b.commit()
    }
    g.logNewsletterLinkShare = a
}), 98);
__d("useWAWebNewsletterInviteLink", ["fbt", "WAWebCopyToClipboard", "WAWebModalManager", "WAWebNewsletterLinkShareLogging", "WAWebSendTextFlow.react", "WAWebToast.react", "WAWebToastManager", "WAWebWamEnumChannelLinkShareDirection", "WAWebWidFactory", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useCallback;

    function a(a) {
        var b = a.chat,
            e = a.linkShareLoggingNavigationParams,
            f = b.formattedTitle;
        a = d("useWAWebModelValues").useOptionalModelValues(b.newsletterMetadata, ["membershipType", "inviteCode"]);
        a = a || {};
        a = a.inviteCode;
        var g = a != null ? n(a) : null;
        a = l(function () {
            if (g == null) return;
            d("WAWebNewsletterLinkShareLogging").logNewsletterLinkShare({
                shareDirection: d("WAWebWamEnumChannelLinkShareDirection").CHANNEL_LINK_SHARE_DIRECTION.WHATSAPP,
                linkShareScreen: e.linkShareScreen,
                newsletter: d("WAWebWidFactory").toNewsletterWid(b.id),
                linkShareScreenEntryPoint: e.linkShareScreenEntryPoint
            });
            var a = h._("__JHASH__ap9nDr6RzYK__JHASH__", [h._param("newsletter_name", f), h._param("link", g)]),
                i = h._("__JHASH__iEPZGeerg-v__JHASH__");
            d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebSendTextFlow.react"), {
                title: i,
                text: a.toString(),
                origin: b.id
            }), {
                transition: "modal-flow"
            })
        }, [g, e, b.id, f]);
        var i = l(function () {
            if (g == null) return;
            m(g)
        }, [g]);
        return [g, i, a]
    }

    function m(a) {
        a = d("WAWebCopyToClipboard").copyTextToClipboard(a);
        a ? d("WAWebToastManager").ToastManager.open(k.jsx(d("WAWebToast.react").Toast, {
            msg: h._("__JHASH__bMTzCRn1-S5__JHASH__")
        })) : d("WAWebToastManager").ToastManager.open(k.jsx(d("WAWebToast.react").Toast, {
            msg: h._("__JHASH__AZZTfYOeeaq__JHASH__")
        }))
    }

    function n(a) {
        return "https://whatsapp.com/channel/" + a
    }
    g.useNewsletterInviteLink = a;
    g.copyInviteLink = m;
    g.getInviteLink = n
}), 226);
__d("WAWebNewsletterInfoTopCard.react", ["fbt", "WAWebCheckmarkIcon", "WAWebCommonNewsletterEnums", "WAWebCommonNewsletterStrings", "WAWebCopyPasteSelectable.react", "WAWebDrawerSection.react", "WAWebFlex.react", "WAWebFollowNewsletter", "WAWebForwardIcon", "WAWebL10N", "WAWebLinkIcon", "WAWebModalManager", "WAWebNewsletterInfoPhoto.react", "WAWebNewsletterInfoSubject.react", "WAWebNewsletterMembershipUtil", "WAWebPlusIcon", "WAWebSpinner.react", "WAWebStateUtils", "WAWebUISpacing", "WAWebUnfollowNewsletterConfirmationModal.react", "WAWebUnstyledButton.react", "WAWebWDSText.react", "WAWebWamEnumChannelEventSurface", "WAWebWamEnumChannelLinkShareScreen", "asyncToGeneratorRuntime", "react", "useWAWebModelValues", "useWAWebNewsletterInviteLink"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useCallback,
        m = e.useState,
        n = {
            actionIcon: {
                color: "x1kjfwcu",
                $$css: !0
            },
            infoAction: {
                flexGrow: "x1iyjqo2",
                color: "x1kjfwcu",
                fontWeight: "xk50ysn",
                $$css: !0
            },
            spinner: {
                stroke: "x1pyndzq",
                $$css: !0
            },
            infoActionBtn: {
                fontSize: "x1nxh6w3",
                minWidth: "xktpd3l",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.adminFunnelLogger,
            e = d("useWAWebModelValues").useOptionalModelValues(a.chat.newsletterMetadata, ["size", "privacy", "terminated", "isSuspendedOrTerminated", "membershipType", "inviteCode"]),
            f = (e == null ? void 0 : e.privacy) === d("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private ? h._("__JHASH__VFvjIx7Xxnj__JHASH__") : h._("__JHASH__GfbFckNcxt7__JHASH__");
        (e == null ? void 0 : e.terminated) && (f = h._("__JHASH__oQB6QFciYwT__JHASH__"));
        var g = (e == null ? void 0 : e.size) != null ? d("WAWebCommonNewsletterStrings").getNewsletterFollowersText(e.size, !0) : null;
        return k.jsxs(c("WAWebDrawerSection.react"), {
            theme: "padding-large",
            children: [k.jsxs(d("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [k.jsx(c("WAWebNewsletterInfoPhoto.react"), {
                    chat: a.chat,
                    xstyle: d("WAWebUISpacing").uiMargin.bottom7,
                    readOnly: (e == null ? void 0 : e.isSuspendedOrTerminated) === !0 || !d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(e),
                    adminFunnelLogger: b,
                    showOutline: !0
                }), k.jsx(c("WAWebNewsletterInfoSubject.react"), {
                    chat: a.chat,
                    adminFunnelLogger: b
                }), k.jsx("div", {
                    "data-testid": void 0,
                    className: "x1evy7pa x1kgmq87 x2b8uid",
                    children: k.jsx(d("WAWebCopyPasteSelectable.react").SelectableSpan, {
                        dir: "auto",
                        selectable: !0,
                        children: k.jsxs(d("WAWebWDSText.react").WDSTextTitle, {
                            color: "secondary",
                            children: [f, (e == null ? void 0 : e.isSuspendedOrTerminated) ? null : k.jsxs(k.Fragment, {
                                children: [c("WAWebL10N").isRTL() ? " -\xa0" : " \xb7\xa0", g]
                            })]
                        })
                    })
                })]
            }), (e == null ? void 0 : e.isSuspendedOrTerminated) ? null : k.jsx(o, {
                chat: a.chat
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function o(a) {
        var e = a.chat;
        a = m(!1);
        var f = a[0],
            g = a[1];
        a = e.newsletterMetadata;
        var i = l(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                g(!0), yield d("WAWebFollowNewsletter").followNewsletter(d("WAWebStateUtils").unproxy(e), {
                    eventSurface: d("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                }), g(!1)
            }), [e]),
            j = l(function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
                    chat: e,
                    loggingOptions: {
                        eventSurface: d("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }
                }))
            }, [e]),
            o = [];
        d("WAWebNewsletterMembershipUtil").iAmGuest(a) ? o.push({
            Icon: d("WAWebPlusIcon").PlusIcon,
            onClick: i,
            testid: "newsletter-info-follow-action",
            title: h._("__JHASH__Tb-F_FHc6Nm__JHASH__"),
            isLoading: f
        }) : d("WAWebNewsletterMembershipUtil").iAmSubscriber(a) && o.push({
            Icon: d("WAWebCheckmarkIcon").CheckmarkIcon,
            onClick: j,
            testid: "newsletter-info-unfollow-action",
            title: h._("__JHASH__ja5kRcfCUO0__JHASH__"),
            isLoading: !1
        });
        i = d("useWAWebNewsletterInviteLink").useNewsletterInviteLink({
            chat: e,
            linkShareLoggingNavigationParams: {
                linkShareScreen: d("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO
            }
        });
        a = i[0];
        j = i[1];
        i = i[2];
        a != null && (o.push({
            Icon: d("WAWebForwardIcon").ForwardIcon,
            onClick: i,
            testid: "newsletter-info-invite-action",
            title: d("WAWebCommonNewsletterStrings").getForwardNewsletterLinkText(),
            isLoading: !1
        }), document.queryCommandSupported("copy") && o.push({
            Icon: d("WAWebLinkIcon").LinkIcon,
            onClick: j,
            testid: "newsletter-info-copy-link-action",
            title: d("WAWebCommonNewsletterStrings").getCopyLinkText(),
            isLoading: !1
        }));
        return k.jsx(d("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            xstyle: [d("WAWebUISpacing").uiMargin.top25, d("WAWebUISpacing").uiMargin.bottom10],
            children: o.map(function (a, b) {
                var e = a.testid;
                e = a.Icon;
                var g = a.onClick,
                    h = a.title;
                a = a.isLoading;
                return k.jsx(c("WAWebUnstyledButton.react"), {
                    "aria-label": h,
                    testid: void 0,
                    onClick: g,
                    xstyle: n.infoActionBtn,
                    disabled: f,
                    children: k.jsxs(d("WAWebFlex.react").FlexColumn, {
                        align: "center",
                        xstyle: [n.infoAction, d("WAWebUISpacing").uiPadding.horiz15],
                        children: [a ? k.jsx(d("WAWebSpinner.react").Spinner, {
                            color: n.spinner,
                            size: 32,
                            xstyle: d("WAWebUISpacing").uiMargin.bottom15
                        }) : k.jsx(e, {
                            xstyle: [n.actionIcon, d("WAWebUISpacing").uiMargin.bottom15],
                            width: 24,
                            height: 24
                        }), h]
                    })
                }, b)
            })
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";
    g.NewsletterInfoTopCard = a
}), 226);
__d("WAWebMetricInfoModal.react", ["fbt", "WAWebCommonNewsletterStrings", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFbtCommon", "WAWebFlex.react", "WAWebModal.react", "WAWebModalManager", "WAWebUISpacing", "WAWebWDSButton", "WAWebWDSText.react", "WAWebWamEnumActionTarget", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = j || (j = d("react")),
        l = j.useCallback;

    function m(a) {
        a = a.metric;
        var b = a.name;
        a = a.description;
        return k.jsxs(d("WAWebFlex.react").FlexColumn, {
            children: [k.jsx(d("WAWebWDSText.react").WDSTextLarge, {
                children: b
            }), k.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                children: a
            })]
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.logger,
            e = a.metrics;
        a = a.tab;
        var f = l(function () {
            d("WAWebModalManager").ModalManager.close()
        }, []);
        f = k.jsx(d("WAWebWDSButton").WDSButtonPrimary, {
            testid: void 0,
            onClick: f,
            children: c("WAWebFbtCommon")("OK")
        });
        return k.jsx(d("WAWebModal.react").Modal, {
            actions: f,
            children: k.jsxs(d("WAWebFlex.react").FlexColumn, {
                rowGap: 16,
                children: [e.map(function (a) {
                    return k.jsx(m, {
                        metric: a
                    }, a.name)
                }), k.jsxs(d("WAWebWDSText.react").WDSTextMuted, {
                    children: [k.jsx("p", {
                        children: h._("__JHASH__2FlKZ872gmI__JHASH__", [h._implicitParam("=m2", k.jsx(d("WAWebWDSText.react").WDSClickableText, {
                            weight: "normal",
                            onClick: function () {
                                b.logHelpCentreClick(d("WAWebWamEnumActionTarget").ACTION_TARGET.HELP_CENTER_CHANNEL_METRICS_ARTICLE), d("WAWebExternalLink.react").openExternalLink(d("WAWebFaqUrl").getNewsletterMetricsEstimatedFaqUrl())
                            },
                            children: h._("__JHASH__efzsfwXjTLm__JHASH__")
                        }))])
                    }), k.jsx("p", {
                        className: (i || (i = c("stylex")))(d("WAWebUISpacing").uiMargin.top16),
                        children: d("WAWebCommonNewsletterStrings").getMetricThresholdString(a)
                    })]
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MetricInfoModal = a
}), 226);
__d("WAWebNewsletterAdminInsightsFailedToLoad.react", ["fbt", "WAWebFbtCommon", "WAWebFlex.react", "WAWebWDSButton", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || d("react");

    function a(a) {
        a = a.onClick;
        return j.jsxs(d("WAWebFlex.react").FlexColumn, {
            justify: "center",
            align: "center",
            paddingBottom: 4,
            children: [j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                marginTop: 12,
                marginBottom: 2,
                children: h._("__JHASH__KkVRvek8hWh__JHASH__")
            }), j.jsx(d("WAWebWDSButton").WDSButtonSimplified, {
                onClick: a,
                children: c("WAWebFbtCommon")("Try again")
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebNewsletterProducerInsightsLogger", ["WALogger", "WAWebChannelProducerInsightsNavigationWamEvent", "WAWebWamEnumActionTarget", "WAWebWamEnumChannelProducerInsightsActionType", "WAWebWamEnumChannelProducerInsightsSurface", "WAWebWamMediaMetricUtils", "err", "gkx", "react"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[NewsletterProducerInsightsLogger] unimplemented"]);
        i = function () {
            return a
        };
        return a
    }

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[NewsletterProducerInsightsLogger] action:", " target:", " seq:", ""]);
        j = function () {
            return a
        };
        return a
    }
    a = h || d("react");
    b = function () {
        function a(a) {
            a = a.wid;
            this.$1 = 0;
            this.$4 = d("WAWebWamMediaMetricUtils").generateMediaEventId();
            this.$5 = d("WAWebWamEnumChannelProducerInsightsSurface").CHANNEL_PRODUCER_INSIGHTS_SURFACE.CHANNEL_INFO;
            this.$3 = a.user
        }
        var b = a.prototype;
        b.log = function (a) {
            var b = a.actionType,
                c = a.actionTarget;
            a = a.entryPoint;
            this.$2 = (a = a) != null ? a : this.$2;
            new(d("WAWebChannelProducerInsightsNavigationWamEvent").ChannelProducerInsightsNavigationWamEvent)({
                cid: this.$3,
                channelProducerInsightsSequenceNumber: this.$1,
                producerInsightsSessionId: this.$4,
                channelProducerInsightsActionType: b,
                channelProducerInsightsActionTarget: c,
                channelProducerInsightsEntryPoint: (a = this.$2) != null ? a : void 0,
                channelProducerInsightsSurface: this.$5
            }).commit();
            d("WALogger").DEV(j(), b, c, this.$1).devConsole("cid: " + this.$3 + " entry point:" + ((a = this.$2) != null ? a : "not set"));
            this.$1 += 1
        };
        b.logClose = function () {
            this.log({
                actionType: d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.CLOSE
            }), this.$5 = d("WAWebWamEnumChannelProducerInsightsSurface").CHANNEL_PRODUCER_INSIGHTS_SURFACE.CHANNEL_INFO, this.$2 = null
        };
        b.logOpen = function (a) {
            var b = a.entryPoint;
            a = a.tab;
            this.log({
                actionType: d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.OPEN,
                entryPoint: b
            });
            this.$6(a)
        };
        b.logNavigationTap = function (a) {
            this.log({
                actionType: d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.NAVIGATION_TAP,
                actionTarget: k(a)
            }), this.$6(a)
        };
        b.logInfoIconTap = function (a) {
            this.log({
                actionType: d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.INFO_ICON_TAP,
                actionTarget: a
            })
        };
        b.logHelpCentreClick = function (a) {
            this.log({
                actionType: d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.LINK_CLICK,
                actionTarget: a
            })
        };
        b.$6 = function (a) {
            switch (a) {
                case "reach":
                    this.$5 = d("WAWebWamEnumChannelProducerInsightsSurface").CHANNEL_PRODUCER_INSIGHTS_SURFACE.REACH_TAB;
                    break;
                case "followers":
                    this.$5 = d("WAWebWamEnumChannelProducerInsightsSurface").CHANNEL_PRODUCER_INSIGHTS_SURFACE.FOLLOWERS_TAB;
                    break;
                case "growth":
                    this.$5 = d("WAWebWamEnumChannelProducerInsightsSurface").CHANNEL_PRODUCER_INSIGHTS_SURFACE.GROWTH_TAB;
                    break;
                default:
                    a
            }
        };
        return a
    }();
    e = a.createContext({
        log: function () {
            l()
        },
        logNavigationTap: function () {
            l()
        },
        logInfoIconTap: function () {
            l()
        },
        logHelpCentreClick: function () {
            l()
        },
        logOpen: function () {
            l()
        },
        logClose: function () {
            l()
        }
    });

    function k(a) {
        switch (a) {
            case "followers":
                return d("WAWebWamEnumActionTarget").ACTION_TARGET.FOLLOWERS_TAB;
            case "growth":
                return d("WAWebWamEnumActionTarget").ACTION_TARGET.GROWTH_TAB;
            default:
                a;
                return d("WAWebWamEnumActionTarget").ACTION_TARGET.GROWTH_TAB
        }
    }

    function l() {
        d("WALogger").ERROR(i()).sendLogs("newsletter-producer-insights-logger-unimplemented");
        if (!c("gkx")("26258")) throw c("err")("unimplemented")
    }
    g.NewsletterProducerInsightsLogger = b;
    g.NewsletterProducerInsightsLoggerContext = e
}), 98);
__d("WAWebNewsletterGrowthChartProcessors", ["WALogger", "WATimeUtils", "WAWebNewsletterMetricUtils"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][insights][getNetFollowsData] follows and unfollows length is not equal"]);
        h = function () {
            return a
        };
        return a
    }

    function i(a) {
        a = a.reduce(function (b, c) {
            var a = c.timestamp;
            c = c.value;
            if (a == null) return b;
            a = Number.parseInt(a, 10);
            if (Number.isNaN(a)) return b;
            b.push([d("WAWebNewsletterMetricUtils").roundToNearestDay(a * 1e3), c]);
            return b
        }, []);
        a.sort(function (a, b) {
            return a[0] - b[0]
        });
        if (a.length === 1) {
            var b = a[0][0];
            b = b - d("WATimeUtils").DAY_MILLISECONDS;
            a.unshift([b, 0])
        }
        return a
    }

    function j(a, b) {
        if (a.length !== b.length) {
            d("WALogger").ERROR(h()).tags("newsletter").devConsole(a, b).sendLogs("newsletter-insights-growth-chart-follows-unfollows-length-mismatch");
            return []
        }
        var c = [];
        for (var e = 0; e < a.length; e++) c.push([a[e][0], a[e][1] - b[e][1]]);
        return c
    }
    a = {
        getMetrics: function () {
            var a;
            return [{
                id: (a = d("WAWebNewsletterMetricUtils")).NewsletterInsightMetricQuery.FollowsPerDay,
                type: "FOLLOWS",
                group_by: {
                    number_of_days: 1
                },
                limit: a.INSIGHT_DAYS_COVERED
            }, {
                id: a.NewsletterInsightMetricQuery.UnfollowsPerDay,
                type: "UNFOLLOWS",
                group_by: {
                    number_of_days: 1
                },
                limit: a.INSIGHT_DAYS_COVERED
            }]
        },
        process: function (a) {
            var b;
            b = i((b = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.FollowsPerDay)) != null ? b : []);
            a = i((a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UnfollowsPerDay)) != null ? a : []);
            var c = j(b, a);
            return c.length === 0 ? {
                growthChartData: []
            } : {
                growthChartData: [c, b, a]
            }
        }
    };
    g.FOLLOWER_GROWTH_PROCESSOR = a
}), 98);
__d("WAWebNewsletterInsightCountryDataProcessors", ["WAWebCountriesUtils", "WAWebNewsletterMetricUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h = 10,
        i = 10;

    function j() {
        return k.apply(this, arguments)
    }

    function k() {
        k = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var a = (yield d("WAWebCountriesUtils").getCountries({
                filter: d("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION
            }));
            return new Map(a)
        });
        return k.apply(this, arguments)
    }

    function a(a) {
        return l.apply(this, arguments)
    }

    function l() {
        l = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b = (yield j());
            a = a.reduce(function (a, c) {
                var d = c.countryCode,
                    e = c.value;
                c = c.percentage;
                if (d == null) return a;
                d = b.get(d);
                if (d == null) return a;
                a.push({
                    label: d,
                    value: e,
                    percentage: c
                });
                return a
            }, []);
            return a
        });
        return l.apply(this, arguments)
    }

    function m(a, b) {
        a = a.reduce(function (a, c) {
            var d = c.country;
            c = c.value;
            if (d == null) return a;
            if (c < i) return a;
            a.push({
                countryCode: d.toUpperCase(),
                percentage: c / b,
                value: c
            });
            return a
        }, []);
        return a.sort(function (a, b) {
            return b.value - a.value
        })
    }
    c = {
        getMetrics: function () {
            var a;
            return [{
                id: (a = d("WAWebNewsletterMetricUtils")).NewsletterInsightMetricQuery.UniqueVisitorsOverPeriod,
                type: "UNIQUE_VISITORS",
                group_by: {
                    number_of_days: a.INSIGHT_DAYS_COVERED
                }
            }, {
                id: a.NewsletterInsightMetricQuery.UniqueVisitorOverPeriodByCountry,
                type: "UNIQUE_VISITORS",
                group_by: {
                    number_of_days: a.INSIGHT_DAYS_COVERED,
                    country: !0
                },
                limit: h
            }]
        },
        process: function (a) {
            var b;
            b = (b = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UniqueVisitorsOverPeriod)) == null ? void 0 : b[0].value;
            if (b == null) return {};
            a = (a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UniqueVisitorOverPeriodByCountry)) != null ? a : [];
            return {
                reachByCountry: m(a, b)
            }
        }
    };
    e = {
        getMetrics: function () {
            var a;
            return [{
                id: (a = d("WAWebNewsletterMetricUtils")).NewsletterInsightMetricQuery.FollowersOverPeriod,
                type: "FOLLOWER",
                group_by: {
                    number_of_days: a.INSIGHT_DAYS_COVERED
                }
            }, {
                id: a.NewsletterInsightMetricQuery.FollowersOverPeriodByCountry,
                type: "FOLLOWER",
                group_by: {
                    number_of_days: a.INSIGHT_DAYS_COVERED,
                    country: !0
                },
                limit: h
            }]
        },
        process: function (a) {
            var b;
            b = (b = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.FollowersOverPeriod)) == null ? void 0 : b[0].value;
            if (b == null) return {};
            a = (a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.FollowersOverPeriodByCountry)) != null ? a : [];
            return {
                followersByCountry: m(a, b)
            }
        }
    };
    g.getCountryBarValues = a;
    g.REACH_BY_COUNTRY_PROCESSOR = c;
    g.FOLLOWER_BY_COUNTRY_PROCESSOR = e
}), 98);
__d("WAWebNewsletterInsightDeltaProcessors", ["WAWebNewsletterGatingUtils", "WAWebNewsletterMetricUtils"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getMetrics: function () {
            return [{
                id: d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UniqueVisitorsOverPeriod,
                type: "UNIQUE_VISITORS",
                group_by: {
                    number_of_days: d("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED
                }
            }, d("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas() ? null : {
                id: d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.NewUniqueVisitorsOverPeriod,
                type: "NEW_UNIQUE_VISITORS",
                group_by: {
                    number_of_days: d("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED
                }
            }].filter(Boolean)
        },
        process: function (a) {
            var b;
            b = (b = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UniqueVisitorsOverPeriod)) == null ? void 0 : b[0].value;
            if (b == null) return {};
            a = (a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.NewUniqueVisitorsOverPeriod)) == null ? void 0 : a[0].value;
            if (a == null) return {
                accountsReached: b
            };
            var c = b - a;
            a = c === 0 ? "infinite" : a / c;
            return {
                accountsReached: b,
                reachDelta: a
            }
        }
    };
    b = {
        getMetrics: function () {
            var a;
            return [{
                id: (a = d("WAWebNewsletterMetricUtils")).NewsletterInsightMetricQuery.FollowersOverPeriod,
                type: "FOLLOWER",
                group_by: {
                    number_of_days: a.INSIGHT_DAYS_COVERED
                }
            }, {
                id: a.NewsletterInsightMetricQuery.NetFollowsOverPeriod,
                type: "NET_FOLLOWS",
                group_by: {
                    number_of_days: a.INSIGHT_DAYS_COVERED
                }
            }]
        },
        process: function (a) {
            var b;
            b = (b = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.FollowersOverPeriod)) == null ? void 0 : b[0].value;
            a = (a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.NetFollowsOverPeriod)) == null ? void 0 : a[0].value;
            if (b == null || a == null) return {};
            var c = a / (b - a);
            return {
                followers: b,
                netFollows: a,
                followersDelta: c
            }
        }
    };
    c = {
        getMetrics: function () {
            return [{
                id: d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.NetFollowsOverPeriod,
                type: "NET_FOLLOWS",
                group_by: {
                    number_of_days: d("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED
                }
            }]
        },
        process: function (a) {
            a = (a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.NetFollowsOverPeriod)) == null ? void 0 : a[0].value;
            return {
                netFollows: a
            }
        }
    };
    g.REACH_WITH_DELTA_PROCESSOR = a;
    g.FOLLOWER_WITH_DELTA_PROCESSOR = b;
    g.NET_FOLLOWS_PROCESSOR = c
}), 98);
__d("WAWebMexFetchNewsletterInsightsJobQuery.graphql", [], (function (a, b, c, d, e, f) {
    "use strict";
    a = function () {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "input"
            }],
            b = [{
                alias: null,
                args: [{
                    kind: "Variable",
                    name: "input",
                    variableName: "input"
                }],
                concreteType: "XWA2NewsletterAdminInsightsResponse",
                kind: "LinkedField",
                name: "xwa2_newsletter_admin_insights",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "newsletter_id",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterState",
                    kind: "LinkedField",
                    name: "state",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "type",
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "last_update_time",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "metrics_status",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "XWA2NewsletterAdminInsightsMetricResult",
                    kind: "LinkedField",
                    name: "result",
                    plural: !0,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "id",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        concreteType: "XWA2NewsletterAdminInsightsValues",
                        kind: "LinkedField",
                        name: "values",
                        plural: !0,
                        selections: [{
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "value",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "country",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "role",
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "timestamp",
                            storageKey: null
                        }],
                        storageKey: null
                    }],
                    storageKey: null
                }],
                storageKey: null
            }];
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "WAWebMexFetchNewsletterInsightsJobQuery",
                selections: b,
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "WAWebMexFetchNewsletterInsightsJobQuery",
                selections: b
            },
            params: {
                id: "25976121445306500",
                metadata: {},
                name: "WAWebMexFetchNewsletterInsightsJobQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    e.exports = a
}), null);
__d("WAWebMexFetchNewsletterInsightsJob", ["WALogger", "WATimeUtils", "WAWebMexClient", "WAWebMexFetchNewsletterInsightsJobQuery.graphql", "WAWebNewsletterInsightUtils", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    var h;

    function i() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[MEX][NEWSLETTER] fetched newsletter admin insights mex"]);
        i = function () {
            return a
        };
        return a
    }
    var j = h !== void 0 ? h : h = b("WAWebMexFetchNewsletterInsightsJobQuery.graphql");

    function a(a) {
        return k.apply(this, arguments)
    }

    function k() {
        k = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b, c = a.newsletterJid;
            a = a.requestedMetrics;
            c = (yield d("WAWebMexClient").fetchQuery(j, {
                input: {
                    newsletter_id: c,
                    metrics: a
                }
            }));
            d("WALogger").DEV(i()).tags("GQL", "MEX").devConsole({
                response: c
            });
            a = (a = (a = c.xwa2_newsletter_admin_insights) == null ? void 0 : a.result) != null ? a : [];
            b = (b = c.xwa2_newsletter_admin_insights) == null ? void 0 : b.last_update_time;
            a = a.reduce(function (a, b) {
                var c = b.id;
                b = b.values;
                if (c == null || b == null) return a;
                a.set(c, b);
                return a
            }, new Map());
            return {
                metricValueMap: a,
                lastUpdateTime: b == null ? d("WATimeUtils").unixTime() : d("WATimeUtils").castToUnixTime(Number.parseInt(b, 10)),
                dataStatus: d("WAWebNewsletterInsightUtils").getNewsletterInsightsDataStatus((b = (a = c.xwa2_newsletter_admin_insights) == null ? void 0 : a.metrics_status) != null ? b : "MISSING")
            }
        });
        return k.apply(this, arguments)
    }
    g.mexFetchNewsletterInsights = a
}), 98);
__d("WAWebNewsletterInsightsJob", ["WAJobOrchestratorTypes", "WAWebMexFetchNewsletterInsightsJob", "WAWebOrchestratorNonPersistedJob"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return d("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getNewsletterAdminInsights", function () {
            return d("WAWebMexFetchNewsletterInsightsJob").mexFetchNewsletterInsights(a)
        }, {
            priority: d("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION
        }).waitUntilCompleted()
    }
    g.getNewsletterInsights = a
}), 98);
__d("WAWebNewsletterRoleDataProcessors", ["WAWebNewsletterMetricUtils"], (function (a, b, c, d, e, f, g) {
    "use strict";
    a = {
        getMetrics: function () {
            return [{
                id: d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UniqueVisitorOverPeriodByRole,
                type: "UNIQUE_VISITORS",
                group_by: {
                    number_of_days: d("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED,
                    role: !0
                }
            }]
        },
        process: function (a) {
            var b;
            a = a.get(d("WAWebNewsletterMetricUtils").NewsletterInsightMetricQuery.UniqueVisitorOverPeriodByRole);
            return {
                followersReached: a == null ? void 0 : (b = a.find(function (a) {
                    return a.role === "SUBSCRIBER"
                })) == null ? void 0 : b.value,
                nonFollowersReached: a == null ? void 0 : (b = a.find(function (a) {
                    return a.role === "GUEST"
                })) == null ? void 0 : b.value
            }
        }
    };
    g.REACH_BY_ROLE_PROCESSOR = a
}), 98);
__d("WAWebPopulateNewsletterInsightsAction", ["WAJids", "WALogger", "WAWebNewsletterBridgeApi", "WAWebNewsletterGatingUtils", "WAWebNewsletterGrowthChartProcessors", "WAWebNewsletterInsightCountryDataProcessors", "WAWebNewsletterInsightDeltaProcessors", "WAWebNewsletterInsightsJob", "WAWebNewsletterMetricUtils", "WAWebNewsletterRoleDataProcessors", "asyncToGeneratorRuntime", "err"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][getAndUpdateNewsletterInsights] called with a non-newsletter chat"]);
        h = function () {
            return a
        };
        return a
    }

    function a(a) {
        return i(a, [d("WAWebNewsletterInsightDeltaProcessors").REACH_WITH_DELTA_PROCESSOR, d("WAWebNewsletterInsightDeltaProcessors").NET_FOLLOWS_PROCESSOR])
    }

    function e(a) {
        return i(a, [d("WAWebNewsletterInsightDeltaProcessors").REACH_WITH_DELTA_PROCESSOR, d("WAWebNewsletterRoleDataProcessors").REACH_BY_ROLE_PROCESSOR, d("WAWebNewsletterInsightCountryDataProcessors").REACH_BY_COUNTRY_PROCESSOR, d("WAWebNewsletterInsightDeltaProcessors").FOLLOWER_WITH_DELTA_PROCESSOR, d("WAWebNewsletterInsightCountryDataProcessors").FOLLOWER_BY_COUNTRY_PROCESSOR, d("WAWebNewsletterGrowthChartProcessors").FOLLOWER_GROWTH_PROCESSOR])
    }

    function i(a, b) {
        return j.apply(this, arguments)
    }

    function j() {
        j = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            if (!a.isNewsletter) {
                d("WALogger").ERROR(h()).tags("newsletter").devConsole(a.id).sendLogs("getting-insights-for-non-newsletter");
                throw c("err")("getting-insights-for-non-newsletter")
            }
            if (!d("WAWebNewsletterGatingUtils").canFetchProducerInsights(a.newsletterMetadata)) return;
            var e = d("WAWebNewsletterMetricUtils").getUniqueMetricRequests(b),
                f = d("WAJids").toNewsletterJid(a.id.toJid());
            f = {
                newsletterJid: f,
                requestedMetrics: e
            };
            e = (yield d("WAWebNewsletterInsightsJob").getNewsletterInsights(f));
            var g = e.metricValueMap;
            f = e.lastUpdateTime;
            e = e.dataStatus;
            b = b.map(function (a) {
                return a.process(g)
            });
            f = {
                id: a.id,
                rangeStart: d("WAWebNewsletterMetricUtils").getInsightPeriodStart(f),
                rangeEnd: f,
                dataStatus: e
            };
            Object.assign.apply(Object, [f].concat(b));
            yield d("WAWebNewsletterBridgeApi").NewsletterBridgeApi.updateNewsletterInsights({
                newsletter: a,
                insights: f
            })
        });
        return j.apply(this, arguments)
    }
    g.populateNewsletterTileInsights = a;
    g.populateNewsletterTabInsights = e
}), 98);
__d("useWAWebAdminInsightsHooks", ["WATimeUtils", "WAWebNewsletterMetricUtils", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = d("useWAWebModelValues").useModelValues(a, ["adminInsights"]);
        b = d("useWAWebModelValues").useOptionalModelValues(b.adminInsights, ["rangeStart", "rangeEnd", "rangeInDays"]);
        return h({
            rangeStart: b == null ? void 0 : b.rangeStart,
            rangeEnd: b == null ? void 0 : b.rangeEnd,
            creationTime: a.creationTime,
            rangeInDays: b == null ? void 0 : b.rangeInDays
        })
    }

    function h(a) {
        var b = a.rangeEnd,
            c = a.rangeStart,
            e = a.creationTime;
        a = a.rangeInDays;
        b = (b = b) != null ? b : d("WATimeUtils").unixTime();
        c = (c = c) != null ? c : d("WATimeUtils").castToUnixTime(Math.max(e, d("WAWebNewsletterMetricUtils").getInsightPeriodStart(b)));
        a = (e = a) != null ? e : d("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED;
        return {
            start: c,
            end: b,
            days: a
        }
    }
    g.useAdminInsightPeriod = a
}), 98);
__d("useWAWebAsyncRetry", ["react", "useWAWebAsync"], (function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useState;

    function a(a, b) {
        var d = j(0),
            e = d[0],
            f = d[1];
        d = i(function () {
            f(e + 1)
        }, [e]);
        b = c("useWAWebAsync")(function () {
            return a()
        }, [].concat(b, [e]));
        return babelHelpers["extends"]({}, b, {
            retry: d
        })
    }
    g["default"] = a
}), 98);
__d("WAWebNewsletterInsightsSection.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebChevronIcon", "WAWebCommonNewsletterStrings", "WAWebFlex.react", "WAWebGlanceInsight.react", "WAWebInfoIcon", "WAWebMetricInfoModal.react", "WAWebModalManager", "WAWebNewsletterAdminInsightsFailedToLoad.react", "WAWebNewsletterGatingUtils", "WAWebNewsletterProducerInsightsLogger", "WAWebPopulateNewsletterInsightsAction", "WAWebSvgComponentBase", "WAWebUISpacing", "WAWebUnstyledButton.react", "WAWebWDSText.react", "WAWebWamEnumActionTarget", "WAWebWamEnumChannelProducerInsightsActionType", "WAWebWamEnumChannelProducerInsightsEntryPoint", "fbs", "react", "useWAWebAdminInsightsHooks", "useWAWebAsyncRetry", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react"));
    b = i;
    var k = b.useContext,
        l = b.useEffect,
        m = {
            newsletterInsight: {
                height: "xsdox4t",
                width: "xh8yej3",
                $$css: !0
            },
            button: {
                display: "x78zum5",
                $$css: !0
            }
        };

    function a(a) {
        var b, e = a.chat,
            f = a.newsletterMetadata,
            g = a.onSeeAllClick;
        a = a.xstyle;
        b = (b = d("useWAWebModelValues").useModelValues(f, ["adminInsights", "showInsightDelta"])) != null ? b : {};
        var i = b.adminInsights;
        b = b.showInsightDelta;
        var n = i == null ? void 0 : i.accountsReached,
            o = i == null ? void 0 : i.reachDelta;
        n = n != null ? {
            value: n,
            delta: o
        } : null;
        o = i == null ? void 0 : i.netFollows;
        i = o != null ? {
            value: o
        } : null;
        o = d("useWAWebAdminInsightsHooks").useAdminInsightPeriod(f);
        o = o.days;
        var p = k(d("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext);
        l(function () {
            p.log({
                actionType: d("WAWebWamEnumChannelProducerInsightsActionType").CHANNEL_PRODUCER_INSIGHTS_ACTION_TYPE.WIDGET_IMPRESSION
            })
        }, [p]);
        var q = c("useWAWebAsyncRetry")(function () {
                return d("WAWebPopulateNewsletterInsightsAction").populateNewsletterTileInsights(e)
            }, [e]),
            r = q.loading,
            s = q.error;
        q = q.retry;
        f = !d("WAWebNewsletterGatingUtils").canFetchProducerInsights(f);
        return j.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: [a, d("WAWebUISpacing").uiPadding.vert16],
            testid: void 0,
            children: [j.jsxs(d("WAWebFlex.react").FlexRow, {
                justify: "all",
                align: "center",
                paddingBottom: 16,
                children: [j.jsxs(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    children: [j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                        color: "secondary",
                        children: h._("__JHASH__5hCg68Cx2Du__JHASH__", [h._plural(o, "number", o)])
                    }), j.jsx(c("WAWebUnstyledButton.react"), {
                        xstyle: m.button,
                        onClick: function () {
                            p.logInfoIconTap(d("WAWebWamEnumActionTarget").ACTION_TARGET.WIDGET_INFO_ICON), d("WAWebModalManager").ModalManager.open(j.jsx(d("WAWebMetricInfoModal.react").MetricInfoModal, {
                                logger: p,
                                metrics: [d("WAWebCommonNewsletterStrings").getAccountsReachMetricInfo(), d("WAWebCommonNewsletterStrings").getNetFollowsMetricInfo()],
                                tab: "reach"
                            }))
                        },
                        "aria-label": c("fbs")._("__JHASH__mc2R1xelUTj__JHASH__"),
                        children: j.jsx(d("WAWebInfoIcon").InfoIcon, {
                            xstyle: d("WAWebUISpacing").uiMargin.start4,
                            color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY_LIGHTER,
                            height: 18,
                            width: 18
                        })
                    })]
                }), !f && j.jsx(c("WAWebUnstyledButton.react"), {
                    testid: void 0,
                    onClick: function () {
                        g("reach", d("WAWebWamEnumChannelProducerInsightsEntryPoint").CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT.PROFILE_SEE_ALL)
                    },
                    children: j.jsxs(d("WAWebFlex.react").FlexRow, {
                        align: "center",
                        children: [j.jsx(d("WAWebWDSText.react").WDSTextSectionTitle, {
                            children: h._("__JHASH__-zbpIya2owR__JHASH__")
                        }), j.jsx(d("WAWebChevronIcon").ChevronIcon, {
                            directional: !0,
                            height: 24,
                            width: 24,
                            color: d("WAWebSvgComponentBase").SvgColorProp.TEAL
                        })]
                    })
                })]
            }), s != null && !r ? j.jsx(c("WAWebNewsletterAdminInsightsFailedToLoad.react"), {
                onClick: q
            }) : j.jsxs(d("WAWebFlex.react").FlexRow, {
                gap: 8,
                children: [j.jsx(d("WAWebGlanceInsight.react").GlanceInsight, {
                    testid: void 0,
                    onClick: f ? null : function () {
                        return g("reach", d("WAWebWamEnumChannelProducerInsightsEntryPoint").CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT.PROFILE_ACCOUNTS_REACHED)
                    },
                    xstyle: m.newsletterInsight,
                    loading: r,
                    insight: n,
                    showDelta: b && !d("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas(),
                    label: h._("__JHASH__ZxQEVFQ1cA2__JHASH__")
                }), j.jsx(d("WAWebGlanceInsight.react").GlanceInsight, {
                    onClick: f ? null : function () {
                        return g("growth", d("WAWebWamEnumChannelProducerInsightsEntryPoint").CHANNEL_PRODUCER_INSIGHTS_ENTRY_POINT.PROFILE_NET_FOLLOWS)
                    },
                    testid: void 0,
                    xstyle: m.newsletterInsight,
                    loading: r,
                    insight: i,
                    showDelta: !d("WAWebNewsletterGatingUtils").shouldHideProducerInsightsDeltas(),
                    label: h._("__JHASH__uto1wt5-D4Z__JHASH__")
                })]
            }), f && j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                color: "secondary",
                marginTop: 16,
                children: d("WAWebCommonNewsletterStrings").getMetricsAvailabilityDisclaimer()
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebMinusUserIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "minus-user";

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
                    d: "M17 9H21C21.2833 9 21.5208 9.09583 21.7125 9.2875C21.9042 9.47917 22 9.71667 22 10C22 10.2833 21.9042 10.5208 21.7125 10.7125C21.5208 10.9042 21.2833 11 21 11H17C16.7167 11 16.4792 10.9042 16.2875 10.7125C16.0958 10.5208 16 10.2833 16 10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM1 18V17.2C1 16.6333 1.14583 16.1125 1.4375 15.6375C1.72917 15.1625 2.11667 14.8 2.6 14.55C3.63333 14.0333 4.68333 13.6458 5.75 13.3875C6.81667 13.1292 7.9 13 9 13C10.1 13 11.1833 13.1292 12.25 13.3875C13.3167 13.6458 14.3667 14.0333 15.4 14.55C15.8833 14.8 16.2708 15.1625 16.5625 15.6375C16.8542 16.1125 17 16.6333 17 17.2V18C17 18.55 16.8042 19.0208 16.4125 19.4125C16.0208 19.8042 15.55 20 15 20H3C2.45 20 1.97917 19.8042 1.5875 19.4125C1.19583 19.0208 1 18.55 1 18Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MinusUserIcon = a
}), 98);
__d("WAWebNewsletterIntegritySection.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebCommonNewsletterStrings", "WAWebContactCollection", "WAWebDeleteIcon", "WAWebDrawerButton.react", "WAWebExitIcon", "WAWebMinusUserIcon", "WAWebModalManager", "WAWebNewsletterDismissAdminPopup.react", "WAWebNewsletterGatingUtils", "WAWebNewsletterMembershipUtil", "WAWebReportNewsletterPopup.react", "WAWebSpamConstants", "WAWebThumbsDownIcon", "WAWebTransferOwnershipIcon", "WAWebUnfollowNewsletterConfirmationModal.react", "WAWebWamEnumChannelEventSurface", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useCallback;

    function a(a) {
        var b = a.chat,
            c = a.onDeleteNewsletter,
            e = a.onTransferNewsletterOwnership;
        a = a.xstyle;
        var f = k.jsx(n, {
                chat: b
            }),
            g = k.jsx(m, {
                chat: b
            });
        e = k.jsx(p, {
            chat: b,
            onTransferOwnership: e
        });
        c = k.jsx(q, {
            chat: b,
            onDeleteNewsletter: c
        });
        b = k.jsx(o, {
            chat: b
        });
        return k.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, {
            xstyle: a,
            children: [f, b, e, c, g]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a) {
        var b = a.chat;
        a = d("useWAWebModelValues").useOptionalModelValues(b.newsletterMetadata, ["suspended", "terminated", "isSuspendedOrTerminated"]);
        if (a == null ? void 0 : a.isSuspendedOrTerminated) return null;
        a = h._("__JHASH__lLXezNNhtet__JHASH__");
        var e = function () {
            d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebReportNewsletterPopup.react"), {
                chat: b,
                spamFlow: d("WAWebSpamConstants").SpamFlow.NewsletterInfoReport
            }))
        };
        return k.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: k.jsx(d("WAWebThumbsDownIcon").ThumbsDownIcon, {
                directional: !0
            }),
            color: "danger",
            theme: "chat-info",
            onClick: e,
            children: a
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function n(a) {
        var b = a.chat;
        a = d("useWAWebModelValues").useOptionalModelValues(b.newsletterMetadata, ["membershipType"]);
        var c = h._("__JHASH__n5jSxUtO2Na__JHASH__"),
            e = l(function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
                    chat: b,
                    loggingOptions: {
                        eventSurface: d("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
                    }
                }))
            }, [b]);
        return d("WAWebNewsletterMembershipUtil").iAmSubscriber(a) ? k.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: k.jsx(d("WAWebExitIcon").ExitIcon, {
                directional: !0
            }),
            color: "danger",
            theme: "chat-info",
            onClick: e,
            children: c
        }) : null
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o(a) {
        var b = a.chat;
        a = d("useWAWebModelValues").useOptionalModelValues(b.newsletterMetadata, ["membershipType"]);
        var e = l(function () {
            var a = d("WAWebContactCollection").ContactCollection.getMeContact();
            a != null && d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebNewsletterDismissAdminPopup.react"), {
                newsletter: b,
                isMe: !0,
                contact: a
            }))
        }, [b]);
        if (!d("WAWebNewsletterMembershipUtil").iAmAdmin(a) || !d("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled()) return null;
        a = h._("__JHASH__TL8mQtMBKWN__JHASH__");
        return k.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: k.jsx(d("WAWebMinusUserIcon").MinusUserIcon, {}),
            color: "danger",
            theme: "chat-info",
            onClick: e,
            children: a
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function p(a) {
        var b = a.chat;
        a = a.onTransferOwnership;
        b = d("useWAWebModelValues").useOptionalModelValues(b.newsletterMetadata, ["membershipType"]);
        return d("WAWebNewsletterMembershipUtil").iAmOwner(b) && d("WAWebNewsletterGatingUtils").isNewsletterTransferOwnershipEnabled() ? k.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: k.jsx(d("WAWebTransferOwnershipIcon").TransferOwnershipIcon, {
                directional: !0
            }),
            color: "accent",
            theme: "chat-info",
            onClick: a,
            children: d("WAWebCommonNewsletterStrings").getNewsletterTransferOwnershipText()
        }) : null
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function q(a) {
        var b = a.chat;
        a = a.onDeleteNewsletter;
        b = d("useWAWebModelValues").useOptionalModelValues(b.newsletterMetadata, ["membershipType"]);
        return d("WAWebNewsletterMembershipUtil").iAmOwner(b) ? k.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: k.jsx(d("WAWebDeleteIcon").DeleteIcon, {
                directional: !0
            }),
            color: "danger",
            theme: "chat-info",
            onClick: a,
            children: d("WAWebCommonNewsletterStrings").getDeleteChannelText()
        }) : null
    }
    q.displayName = q.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebNewsletterPendingInvites.react", ["fbt", "WAWebChatInfoDrawerSection.react", "WAWebChatInfoExpandButton.react", "WAWebCommonNewsletterStrings", "WAWebFlatListController", "WAWebModalManager", "WAWebNavigableFlatList.react", "WAWebNewsletterSubscriberList.react", "WAWebNewsletterSubscriberListAction", "WAWebNewsletterSubscriberListModal.react", "WAWebNoop", "WAWebSingleSelection", "WAWebUISpacing", "react", "useLazyRef", "useWAWebNewsletterPendingInvites", "useWAWebNewsletterSubscribersContextMenu"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = 68;

    function a(a) {
        var b = a.newsletter,
            e = a.onVerification;
        a = d("useWAWebNewsletterPendingInvites").useNewsletterPendingInvites(b);
        var f = a.length,
            g = c("useLazyRef")(function () {
                return new(c("WAWebFlatListController"))()
            }),
            i = c("useLazyRef")(function () {
                return new(c("WAWebSingleSelection"))([], function (a) {
                    return a.id.toString()
                })
            });
        a = a.slice(0, d("WAWebNewsletterSubscriberListAction").NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT).map(function (a) {
            return {
                itemKey: "pending-" + a.id.toJid(),
                contact: a,
                height: k,
                role: null,
                isPendingAdmin: !0
            }
        });
        var l = d("useWAWebNewsletterSubscribersContextMenu").useNewsletterSubscribersContextMenu({
                chat: b,
                isFullModal: !1,
                onVerification: e,
                followerInformation: new Map(a.map(function (a) {
                    return [(a = a.contact) == null ? void 0 : a.id, {
                        newsletterRole: null
                    }]
                })),
                newsletter: b
            }),
            m = l[0],
            n = l[1];
        if (f === 0) return null;
        l = function () {
            d("WAWebModalManager").ModalManager.open(j.jsx(d("WAWebNewsletterSubscriberListModal.react").NewsletterSubscriberListModal, {
                newsletter: b,
                initialStep: d("WAWebNewsletterSubscriberListModal.react").FollowersFlowStep.PendingInvites,
                onVerification: e
            }), {
                transition: "modal-flow"
            })
        };
        l = f > d("WAWebNewsletterSubscriberListAction").NEWSLETTER_INFO_SUBSCRIBER_DISPLAY_LIMIT ? j.jsx(c("WAWebChatInfoExpandButton.react"), {
            numMore: f,
            onClick: l,
            fromNewsletter: !0,
            viewAll: !0
        }) : null;
        return j.jsxs(j.Fragment, {
            children: [j.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection, {
                testid: void 0,
                title: d("WAWebCommonNewsletterStrings").getAdminInvitesTitleText(f),
                xstyle: d("WAWebUISpacing").uiMargin.top10,
                children: [j.jsx(d("WAWebNavigableFlatList.react").NavigableFlatList, {
                    ariaLabel: h._("__JHASH__mfJa05pYp65__JHASH__", [h._param("pending-invites-list-size", f, [0])]),
                    flatListController: g.current,
                    listData: a,
                    onRenderItem: function (a) {
                        return j.jsx(d("WAWebNewsletterSubscriberList.react").NewsletterSubscriber, {
                            subscriberData: a,
                            handleContactClick: c("WAWebNoop"),
                            handleContactContextMenu: n,
                            active: i.current
                        })
                    },
                    selection: i.current,
                    rotateList: !0
                }), l]
            }), m]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebNewsletterInfoDrawer.react", ["fbt", "WAWebBusinessWebsiteIcon", "WAWebChatInfoDrawerRow.react", "WAWebChatInfoDrawerSection.react", "WAWebCmd", "WAWebCommonNewsletterStrings", "WAWebDialpadIcon", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebDrawerSection.react", "WAWebModalManager", "WAWebMuteRow.react", "WAWebNewsletterDescriptionSection.react", "WAWebNewsletterGatingUtils", "WAWebNewsletterInfoTopCard.react", "WAWebNewsletterInsightsSection.react", "WAWebNewsletterIntegritySection.react", "WAWebNewsletterMembershipUtil", "WAWebNewsletterPendingInvites.react", "WAWebNewsletterPhoneNumberPrivacyNux.react", "WAWebNewsletterPrivacyRow.react", "WAWebNewsletterPublicChannelPrivacyNux.react", "WAWebNewsletterSubscriberList.react", "WAWebSettingsIcon", "WAWebSimilarNewslettersUnits.react", "WAWebStateUtils", "WAWebSvgComponentBase", "WAWebUISpacing", "WAWebUiActionWamEvent", "WAWebWDSText.react", "WAWebWamEnumThreadType", "WAWebWamEnumUiActionType", "WAWebWamPrivateStatsUtils", "WAWebWarningIcon", "cr:2695", "gkx", "react", "useLazyRef", "useWAWebEventTargetValue", "useWAWebListener", "useWAWebUIM"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useCallback,
        m = e.useEffect,
        n = e.useRef;
    e = k.forwardRef(a);

    function a(a, e) {
        var f, g = babelHelpers["extends"]({}, a),
            i = g.chat,
            j = g.newsletterMetadata,
            o = g.onClose;
        a = g.onTransferNewsletterOwnership;
        var p = g.onDeleteNewsletter,
            q = g.onAdminCenter,
            r = g.onSettings,
            s = g.onShareLink,
            t = g.onVerification,
            u = g.onTransferOwnershipSelection,
            v = g.adminFunnelLogger,
            w = g.focusDescriptionOnMount,
            x = c("useWAWebUIM")(),
            y = n(null),
            z = c("useWAWebEventTargetValue")(j, ["change:suspended"], function () {
                return (j == null ? void 0 : j.suspended) === !0
            }),
            A = c("useWAWebEventTargetValue")(j, ["change:canBeMuted"], function () {
                return Boolean(j == null ? void 0 : j.canBeMuted) && !z
            });
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, "edit_newsletter_description", function () {
            y.current && y.current.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        });
        var B = c("useLazyRef")(function () {
                return new(d("WAWebUiActionWamEvent").UiActionWamEvent)({
                    uiActionType: d("WAWebWamEnumUiActionType").UI_ACTION_TYPE.CHANNEL_INFO_OPEN,
                    uiActionPreloaded: !0
                })
            }),
            C = function () {
                o ? o() : x == null ? void 0 : x.requestDismiss()
            };
        w = z ? null : k.jsx(c("WAWebNewsletterDescriptionSection.react"), {
            chat: i,
            adminFunnelLogger: v,
            focusOnMount: w
        });
        var D = c("useWAWebEventTargetValue")(j, ["change:membershipType"], function () {
                return d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(g.newsletterMetadata)
            }),
            E = j != null && !z && d("WAWebNewsletterGatingUtils").isNewsletterProducerInsightsEnabled(j) ? k.jsx(c("WAWebNewsletterInsightsSection.react"), {
                chat: i,
                newsletterMetadata: j,
                xstyle: d("WAWebUISpacing").uiMargin.top10,
                onSeeAllClick: g.onViewInsights
            }) : null;
        A = A ? k.jsx(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: d("WAWebUISpacing").uiMargin.top10,
            children: k.jsx(c("WAWebMuteRow.react"), {
                chat: i,
                mute: i.mute
            })
        }) : null;
        var F = l(function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebNewsletterPhoneNumberPrivacyNux.react").NewsletterPhoneNumberNux, {}))
            }, []),
            G = l(function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(d("WAWebNewsletterPublicChannelPrivacyNux.react").NewsletterPublicChannelPrivacyNux, {
                    chat: i,
                    userRole: j == null ? void 0 : j.membershipType
                }))
            }, [i, j == null ? void 0 : j.membershipType]);
        r = D && d("WAWebNewsletterGatingUtils").isNewsletterReactionSettingsEnabled() && !z ? k.jsx(c("WAWebChatInfoDrawerRow.react"), {
            testid: void 0,
            title: k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__4Q3W8J154cz__JHASH__")
            }),
            icon: k.jsx(d("WAWebSettingsIcon").SettingsIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            }),
            onClick: r,
            side: "chevron"
        }) : null;
        f = !((f = i.newsletterMetadata) == null ? void 0 : f.terminated) && D ? k.jsx(c("WAWebChatInfoDrawerRow.react"), {
            testid: void 0,
            icon: k.jsx(d("WAWebWarningIcon").WarningIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 16
            }),
            onClick: q,
            title: k.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                children: h._("__JHASH__ofX-NyHlPwh__JHASH__")
            })
        }) : null;
        q = z ? null : k.jsx(d("WAWebNewsletterPrivacyRow.react").NewsletterPrivacyRow, {
            onClick: D ? G : null,
            title: h._("__JHASH__p0wZhLtYghv__JHASH__"),
            text: D ? h._("__JHASH__HDTHxboZARM__JHASH__") : h._("__JHASH__dULdFX_0mR6__JHASH__"),
            icon: k.jsx(d("WAWebBusinessWebsiteIcon").BusinessWebsiteIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            })
        });
        G = !z && !D ? k.jsx(d("WAWebNewsletterPrivacyRow.react").NewsletterPrivacyRow, {
            onClick: F,
            title: h._("__JHASH__AZh_9EOor63__JHASH__"),
            text: d("WAWebCommonNewsletterStrings").getNewsletterProfilePrivacyText(),
            icon: k.jsx(d("WAWebDialpadIcon").DialpadIcon, {
                color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY,
                height: 20
            })
        }) : null;
        F = k.jsxs(d("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
            xstyle: d("WAWebUISpacing").uiMargin.top10,
            children: [q, r, f, G]
        });
        q = k.jsx(c("WAWebNewsletterIntegritySection.react"), {
            xstyle: d("WAWebUISpacing").uiMargin.top10,
            chat: g.chat,
            onDeleteNewsletter: p,
            onTransferNewsletterOwnership: a
        });
        r = D && !z ? k.jsx(d("WAWebNewsletterSubscriberList.react").NewsletterSubscriberList, {
            newsletter: i,
            adminFunnelLogger: v,
            onShareLink: s,
            onVerification: t,
            onTransferOwnershipSelection: u
        }) : null;
        f = d("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() && d("WAWebNewsletterMembershipUtil").iAmOwner(j) && !z ? k.jsx(c("WAWebNewsletterPendingInvites.react"), {
            newsletter: i,
            onVerification: t
        }) : null;
        G = !z && !d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(j) && d("WAWebNewsletterGatingUtils").isSimilarNewsletterInInfoDrawersEnabled() ? k.jsx(c("WAWebDrawerSection.react"), {
            children: k.jsx(d("WAWebSimilarNewslettersUnits.react").SimilarNewslettersInfoDrawerUnit, {
                chat: i
            })
        }) : null;
        m(function () {
            var a = B.current;
            a && (a.markUiActionT(), a.commit(), B.current = void 0);
            d("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents()
        }, []);
        var H;
        !c("gkx")("26258") && b("cr:2695") && (H = k.jsx(b("cr:2695"), {
            chat: i
        }));
        return k.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            theme: "striped",
            testid: void 0,
            tsNavigationData: {
                surface: "channel-profile",
                extras: {
                    threadType: d("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
                    channelWid: i.id
                }
            },
            children: [k.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                title: h._("__JHASH__NIdAuu4Ma8t__JHASH__"),
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: !0,
                onCancel: C,
                testid: void 0
            }), k.jsx(c("WAWebDrawerBody.react"), {
                ref: y,
                children: k.jsxs("section", {
                    className: "x2lah0s x1c4vz4f xdl72j9 x1w3bhph",
                    "data-testid": void 0,
                    children: [k.jsx(d("WAWebNewsletterInfoTopCard.react").NewsletterInfoTopCard, {
                        chat: d("WAWebStateUtils").unproxy(i),
                        adminFunnelLogger: v
                    }), w, E, A, G, F, f, r, q, H]
                })
            })]
        }, "newsletter-info-modal")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebNewsletterInsightsDrawerLoadable", ["JSResourceForInteraction", "WAWebLazyLoadedRetriable", "WAWebLoadable", "WAWebLoadingDrawer.react", "asyncToGeneratorRuntime", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react");
    a = c("WAWebLazyLoadedRetriable")(b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var a = (yield c("JSResourceForInteraction")("WAWebNewsletterInsightsDrawer.react").__setRef("WAWebNewsletterInsightsDrawerLoadable").load());
        return a.NewsletterInsightsDrawer
    }), "NewsletterInsightsDrawer");
    d = c("WAWebLoadable")({
        loader: a,
        loading: function (a) {
            return i.jsx(c("WAWebLoadingDrawer.react"), {
                error: Boolean(a.error)
            })
        }
    });
    g.NewsletterInsightsDrawerLoadable = d
}), 98);
__d("WAWebNewsletterLinkDrawer.react", ["fbt", "WALogger", "WAWebCellFrame.react", "WAWebCommonNewsletterStrings", "WAWebCopyIcon", "WAWebCopyPasteSelectable.react", "WAWebDetailImage.react", "WAWebDrawer.react", "WAWebDrawerButton.react", "WAWebDrawerHeader.react", "WAWebFlex.react", "WAWebForwardIcon", "WAWebSvgComponentBase", "WAWebUISpacing", "WAWebWDSText.react", "WAWebWamEnumChannelLinkShareScreen", "react", "stylex", "useWAWebModelValues", "useWAWebNewsletterInviteLink"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Encountered null link share screen entry point"]);
        k = function () {
            return a
        };
        return a
    }
    var l = i || c("react"),
        m = {
            drawer: {
                backgroundColor: "x13x2ugz",
                $$css: !0
            },
            header: {
                width: "x14atkfc",
                borderTopStartRadius: "x1lq5wgf",
                borderTopEndRadius: "xgqcy7u",
                borderBottomEndRadius: "x30kzoy",
                borderBottomStartRadius: "x9jhf4c",
                backgroundColor: "x1pl83jw",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            },
            optionsHeader: {
                textAlign: "x1yc453h",
                $$css: !0
            },
            mouseCursor: {
                cursor: "x1ypdohk",
                $$css: !0
            },
            link: {
                wordBreak: "x1yn0g08",
                $$css: !0
            },
            newsletterName: {
                wordBreak: "x13faqbe",
                maxHeight: "x1o16irs",
                $$css: !0
            }
        };
    b = l.forwardRef(a);

    function a(a, b) {
        var e = a.entryPoint,
            f = a.newsletter,
            g = a.onBack;
        a = a.onClose;
        e = (e = e) != null ? e : void 0;
        e === void 0 && d("WALogger").WARN(k()).tags("newsletter-logging").sendLogs("Null link share screen entry point in newsletter link share logging");
        e = d("useWAWebNewsletterInviteLink").useNewsletterInviteLink({
            chat: f,
            linkShareLoggingNavigationParams: {
                linkShareScreen: d("WAWebWamEnumChannelLinkShareScreen").CHANNEL_LINK_SHARE_SCREEN.SHARE_LINK_SCREEN,
                linkShareScreenEntryPoint: e
            }
        });
        var i = e[0],
            n = e[1];
        e = e[2];
        var o = d("useWAWebModelValues").useOptionalModelValues(f.newsletterMetadata, ["name"]);
        f = d("useWAWebModelValues").useModelValues(f.contact, ["id", "profilePicThumb"]);
        var p = [];
        i != null && (p.push({
            Icon: d("WAWebForwardIcon").ForwardIcon,
            onClick: e,
            testid: "newsletter-info-invite-action",
            title: d("WAWebCommonNewsletterStrings").getSendLinkViaWhatsAppText()
        }), document.queryCommandSupported("copy") && p.push({
            Icon: d("WAWebCopyIcon").CopyIcon,
            onClick: n,
            testid: "newsletter-info-copy-link-action",
            title: d("WAWebCommonNewsletterStrings").getCopyLinkText()
        }));
        e = l.jsx("div", {
            className: (j || (j = c("stylex")))([m.header, d("WAWebUISpacing").uiMargin.all15]),
            children: l.jsx(c("WAWebCellFrame.react"), {
                image: l.jsx(d("WAWebDetailImage.react").DetailImage, {
                    id: f.id,
                    size: 56,
                    shape: d("WAWebDetailImage.react").DetailImageShape.Circle,
                    quality: d("WAWebDetailImage.react").DetailImageQuality.High
                }),
                primary: l.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                    xstyle: m.newsletterName,
                    children: o == null ? void 0 : o.name
                }),
                secondary: l.jsx(d("WAWebCopyPasteSelectable.react").SelectableLink, {
                    selectable: !0,
                    onClick: n,
                    xstyle: m.mouseCursor,
                    children: l.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                        color: "link",
                        textWrap: "wrap",
                        xstyle: m.link,
                        testid: void 0,
                        children: i
                    })
                }),
                theme: "newsletter-link-cell",
                className: j(d("WAWebUISpacing").uiMargin.vert4, d("WAWebUISpacing").uiMargin.horiz2)
            })
        });
        f = l.jsx(d("WAWebWDSText.react").WDSTextSectionTitle, {
            xstyle: m.optionsHeader,
            marginEnd: 32,
            marginStart: 32,
            marginTop: 16,
            marginBottom: 20,
            color: "primary",
            children: d("WAWebCommonNewsletterStrings").getChannelLinkInformationText()
        });
        o = l.jsx(d("WAWebFlex.react").FlexRow, {
            xstyle: [d("WAWebUISpacing").uiMargin.vert4, d("WAWebUISpacing").uiMargin.horiz30],
            children: l.jsx("div", {
                className: "xh8yej3 xjm9jq1 xxnau4b"
            })
        });
        n = g ? {
            onBack: g
        } : {
            onCancel: a
        };
        return l.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            theme: "striped",
            testid: void 0,
            xstyle: m.drawer,
            children: [l.jsx(d("WAWebDrawerHeader.react").DrawerHeader, babelHelpers["extends"]({
                title: h._("__JHASH__XddUrt7f5UZ__JHASH__"),
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            }, n, {
                rtlFixIfOnDarwin: !0,
                testid: void 0
            })), e, f, o, p.map(function (a, b) {
                var c = a.testid,
                    e = a.Icon,
                    f = a.onClick;
                a = a.title;
                return l.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
                    testid: void 0,
                    icon: l.jsx(e, {
                        width: 24,
                        height: 24,
                        color: d("WAWebSvgComponentBase").SvgColorProp.SECONDARY
                    }),
                    divider: !1,
                    onClick: f,
                    children: a
                }, c + "-" + b)
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebNewsletterEmojiSettings.react", ["fbt", "WAWebCommonNewsletterEnums", "WAWebEmoji", "WAWebEmoji.react", "WAWebRadio.react", "WAWebSendReactionsTrayNewsletterContainer.react", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            title: {
                color: "xhgddhk",
                $$css: !0
            }
        };

    function m() {
        return k.jsx("span", {
            children: d("WAWebSendReactionsTrayNewsletterContainer.react").REACTIONS_DEFAULT_SENDING_TRAY.map(function (a, b) {
                a = d("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(a);
                var e = b + 1 === d("WAWebSendReactionsTrayNewsletterContainer.react").REACTIONS_DEFAULT_SENDING_TRAY.length ? d("WAWebUISpacing").uiMargin.end0 : d("WAWebUISpacing").uiMargin.end4;
                return a != null ? k.jsx("span", {
                    className: (j || (j = c("stylex")))(e),
                    children: k.jsx(c("WAWebEmoji.react"), {
                        emoji: a,
                        size: "small",
                        element: "span"
                    }, "newsletter-emoji-" + b)
                }, "newsletter-emoji-container-" + b) : null
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    var n = [{
        getLabel: function () {
            return h._("__JHASH__Fi2A7hE8Bk5__JHASH__")
        },
        value: d("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.All
    }, {
        getLabel: function () {
            return h._("__JHASH__5N4JZkYFi-H__JHASH__", [h._param("reaction-emojis", k.jsx(m, {}))])
        },
        value: d("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic
    }, {
        getLabel: function () {
            return h._("__JHASH__gRyQwTNdJ2k__JHASH__")
        },
        value: d("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.None
    }];

    function a(a) {
        var b = a.currentlySelected,
            e = a.onClick;
        a = k.jsx("div", {
            className: (j || (j = c("stylex")))([l.title, d("WAWebUISpacing").uiMargin.bottom15]),
            children: h._("__JHASH__BD7Fw3ZlzB1__JHASH__")
        });
        return k.jsxs(k.Fragment, {
            children: [a, k.jsx(d("WAWebRadio.react").RadioGroup, {
                name: "newsletter-reaction-codes-setting",
                checkedValue: b,
                theme: d("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                onChange: e,
                options: n.map(function (a) {
                    return {
                        value: a.value,
                        label: a.getLabel(),
                        onChange: e,
                        testid: "newsletter-emoji-setting-" + a.value
                    }
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.NewsletterEmojiSettings = a
}), 226);
__d("WAWebNewsletterSettingsDrawer.react", ["fbt", "WALogger", "WAWebCmd", "WAWebCommonNewsletterEnums", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebEditNewsletterMetadataAction", "WAWebNewsletterEmojiSettings.react", "WAWebUISpacing", "asyncToGeneratorRuntime", "react", "stylex", "useWAWebListener", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[handleReactionCodesSettingChange][editNewsletterMetadataAction] Error editing reaction settings for newsletter ", ""]);
        l = function () {
            return a
        };
        return a
    }
    var m = k || c("react"),
        n = (i || (i = d("react"))).useCallback;

    function o(a, b) {
        return p.apply(this, arguments)
    }

    function p() {
        p = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            try {
                return yield d("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(a, {
                    editReactionCodesSetting: !0
                }, {
                    reactionCodesSetting: b
                })
            } catch (c) {
                d("WALogger").ERROR(l(), a.id).devConsole(b).tags("reactions", "newsletter").sendLogs("newsletter-edit-reaction-settings-failed")
            }
        });
        return p.apply(this, arguments)
    }
    var q = {
        body: {
            flexShrink: "x2lah0s",
            flexGrow: "x1iyjqo2",
            flexBasis: "xdl72j9",
            paddingBottom: "x1w3bhph",
            $$css: !0
        },
        drawer: {
            backgroundColor: "x13x2ugz",
            $$css: !0
        }
    };
    e = m.forwardRef(a);

    function a(a, e) {
        var f = a.adminFunnelLogger,
            g = a.isFirstLevel,
            i = a.newsletter,
            k = a.onBack;
        a = n(function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a = (a = d("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.cast(Number(a.target.value))) != null ? a : d("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
                f.logReactionSetting(a);
                yield o(i, a)
            });
            return function (b) {
                return a.apply(this, arguments)
            }
        }(), [i, f]);
        var l = d("useWAWebModelValues").useOptionalModelValues(i == null ? void 0 : i.newsletterMetadata, ["reactionCodesSetting"]);
        d("useWAWebListener").useListener(d("WAWebCmd").Cmd, "edit_newsletter_description", function () {
            return k()
        });
        g = g === !0 ? {
            onCancel: k
        } : {
            onBack: k
        };
        return m.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            theme: "striped",
            testid: void 0,
            xstyle: q.drawer,
            children: [m.jsx(d("WAWebDrawerHeader.react").DrawerHeader, babelHelpers["extends"]({
                title: h._("__JHASH__jUU95eDNWmD__JHASH__"),
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            }, g, {
                rtlFixIfOnDarwin: !0,
                testid: void 0
            })), m.jsx(c("WAWebDrawerBody.react"), {
                children: m.jsx("section", {
                    className: (j || (j = c("stylex")))([q.body, d("WAWebUISpacing").uiMargin.horiz30, d("WAWebUISpacing").uiMargin.vert30]),
                    "data-testid": void 0,
                    children: m.jsx(d("WAWebNewsletterEmojiSettings.react").NewsletterEmojiSettings, {
                        onClick: a,
                        currentlySelected: (e = l == null ? void 0 : l.reactionCodesSetting) != null ? e : d("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic
                    })
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebNewsletterTransferOwnershipConfirmationModal.react", ["fbt", "WAWebChangeNewsletterOwnerAction", "WAWebContactCollection", "WAWebDemoteNewsletterAdminAction", "WAWebModalManager", "WAWebName.react", "WAWebPhoneNumberConfirmationModal.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useCallback;

    function a(a) {
        var b = a.chat,
            c = a.contact,
            e = a.onTransferCompletion;
        a = a.shouldDismissSelfAsAdmin;
        var f = l(function () {
                d("WAWebModalManager").ModalManager.close()
            }, []),
            g = [{
                action: function () {
                    return d("WAWebChangeNewsletterOwnerAction").changeNewsletterOwnerAction(b, c)
                },
                onSuccess: function () {
                    e()
                },
                errorMessage: h._("__JHASH__tiMAsJcRSo8__JHASH__")
            }];
        if (a) {
            var i = d("WAWebContactCollection").ContactCollection.getMeContact();
            i != null && g.push({
                action: function () {
                    return d("WAWebDemoteNewsletterAdminAction").demoteNewsletterAdminAction(b, i)
                },
                errorMessage: h._("__JHASH__cJwJj_hxZvJ__JHASH__")
            })
        }
        return k.jsx(d("WAWebPhoneNumberConfirmationModal.react").PhoneNumberConfirmationModal, {
            actions: g,
            actionType: "primary",
            actionText: h._("__JHASH__iag0iEMCPC___JHASH__"),
            contentText: h._("__JHASH__Kf-GgxzOHxD__JHASH__"),
            successText: a ? h._("__JHASH__2WB6OtB0Nen__JHASH__", [h._param("new-channel-owner", k.jsx(d("WAWebName.react").ContactName, {
                contact: c
            }))]) : h._("__JHASH__RRqE9vSyT-R__JHASH__", [h._param("new-channel-owner", k.jsx(d("WAWebName.react").ContactName, {
                contact: c
            }))]),
            onCompletion: f
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebUserShieldIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "user-shield";

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
        l = 20;
        m = 16;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 16 20",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M8 11.0004C8.96667 11.0004 9.79167 10.6587 10.475 9.97539C11.1583 9.29206 11.5 8.46706 11.5 7.50039C11.5 6.53372 11.1583 5.70872 10.475 5.02539C9.79167 4.34206 8.96667 4.00039 8 4.00039C7.03333 4.00039 6.20833 4.34206 5.525 5.02539C4.84167 5.70872 4.5 6.53372 4.5 7.50039C4.5 8.46706 4.84167 9.29206 5.525 9.97539C6.20833 10.6587 7.03333 11.0004 8 11.0004ZM8 17.9004C8.98333 17.5837 9.85417 17.0879 10.6125 16.4129C11.3708 15.7379 12.0333 14.9754 12.6 14.1254C11.8833 13.7587 11.1375 13.4796 10.3625 13.2879C9.5875 13.0962 8.8 13.0004 8 13.0004C7.2 13.0004 6.4125 13.0962 5.6375 13.2879C4.8625 13.4796 4.11667 13.7587 3.4 14.1254C3.96667 14.9754 4.62917 15.7379 5.3875 16.4129C6.14583 17.0879 7.01667 17.5837 8 17.9004ZM8 19.9004C7.88333 19.9004 7.775 19.8921 7.675 19.8754C7.575 19.8587 7.475 19.8337 7.375 19.8004C5.125 19.0504 3.33333 17.6629 2 15.6379C0.666667 13.6129 0 11.4337 0 9.10039V4.37539C0 3.95872 0.120833 3.58372 0.3625 3.25039C0.604167 2.91706 0.916667 2.67539 1.3 2.52539L7.3 0.275391C7.53333 0.192057 7.76667 0.150391 8 0.150391C8.23333 0.150391 8.46667 0.192057 8.7 0.275391L14.7 2.52539C15.0833 2.67539 15.3958 2.91706 15.6375 3.25039C15.8792 3.58372 16 3.95872 16 4.37539V9.10039C16 11.4337 15.3333 13.6129 14 15.6379C12.6667 17.6629 10.875 19.0504 8.625 19.8004C8.525 19.8337 8.425 19.8587 8.325 19.8754C8.225 19.8921 8.11667 19.9004 8 19.9004Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.UserShieldIcon = a
}), 98);
__d("WAWebNewsletterTransferOwnershipDrawer.react", ["fbt", "WAWebButton.react", "WAWebCheckBox.react", "WAWebCommonNewsletterStrings", "WAWebDrawer.react", "WAWebDrawerHeader.react", "WAWebDrawerSection.react", "WAWebFlex.react", "WAWebModalManager", "WAWebName.react", "WAWebNewsletterDrawerBodyParagraph.react", "WAWebNewsletterImageWithAction.react", "WAWebNewsletterTransferOwnershipConfirmationModal.react", "WAWebText_DONOTUSE.react", "WAWebTransferOwnershipIcon", "WAWebUISpacing", "WAWebUserShieldIcon", "WAWebWarningIcon", "react", "stylex", "useWAWebToggle"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j, k = i || c("react"),
        l = {
            container: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                alignItems: "x6s0dn4",
                justifyContent: "x1nhvcw1",
                paddingTop: "xijc0j3",
                paddingEnd: "xs022h5",
                paddingBottom: "xq1608w",
                paddingStart: "x8aayfw",
                flexGrow: "x1iyjqo2",
                $$css: !0
            },
            buttonContainer: {
                textAlign: "x2b8uid",
                $$css: !0
            },
            header: {
                textAlign: "x2b8uid",
                lineHeight: "x1evy7pa",
                overflowWrap: "xj0a0fe",
                $$css: !0
            },
            icon: {
                color: "x40yjcy",
                $$css: !0
            }
        };
    b = k.forwardRef(a);

    function a(a, b) {
        var e = babelHelpers["extends"]({}, a),
            f = e.chat,
            g = e.contact;
        a = c("useWAWebToggle")(!1);
        var i = a[0];
        a = a[1];
        if (g == null) return null;
        var m = function () {
                d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebNewsletterTransferOwnershipConfirmationModal.react"), {
                    chat: f,
                    contact: g,
                    onTransferCompletion: e.onTransferCompletion,
                    shouldDismissSelfAsAdmin: i
                }))
            },
            n = h._("__JHASH__S3YSbNPTt-M__JHASH__", [h._param("channel-name", k.jsx(d("WAWebName.react").ContactName, {
                contact: g
            }))]),
            o = [{
                title: h._("__JHASH__kqhCHI4Z6vP__JHASH__"),
                description: h._("__JHASH__VT8AfEIZaaJ__JHASH__"),
                Icon: d("WAWebWarningIcon").WarningIcon
            }, {
                title: h._("__JHASH__LaOlk6mYGR7__JHASH__"),
                description: h._("__JHASH__p1eq5qB1B7f__JHASH__"),
                Icon: d("WAWebUserShieldIcon").UserShieldIcon
            }];
        a = k.jsxs(d("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            paddingTop: 16,
            paddingBottom: 16,
            xstyle: d("WAWebUISpacing").uiMargin.start3,
            alignSelf: "start",
            align: "center",
            children: [k.jsx(d("WAWebCheckBox.react").CheckBox, {
                id: "transfer-ownership-dismiss-self-as-admin-checkbox",
                testid: void 0,
                checked: i,
                onChange: a
            }), k.jsx(d("WAWebText_DONOTUSE.react").TextLabel, {
                htmlFor: "transfer-ownership-dismiss-self-as-admin-checkbox",
                size: "16",
                className: (j || (j = c("stylex")))(d("WAWebUISpacing").uiMargin.horiz10),
                children: h._("__JHASH__akpkTb138zc__JHASH__")
            })]
        });
        return k.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            testid: void 0,
            children: [k.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                title: d("WAWebCommonNewsletterStrings").getNewsletterTransferOwnershipText(),
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onBack: e.onBack,
                onCancel: e.onCancel
            }), k.jsxs(c("WAWebDrawerSection.react"), {
                animation: !1,
                xstyle: l.container,
                children: [k.jsx(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "center",
                    children: k.jsx(d("WAWebNewsletterImageWithAction.react").NewsletterImageWithAction, {
                        chat: e.chat,
                        actionTheme: "primary",
                        Icon: d("WAWebTransferOwnershipIcon").TransferOwnershipIcon
                    })
                }), k.jsx(d("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "center",
                    children: k.jsx(d("WAWebText_DONOTUSE.react").TextHeader, {
                        xstyle: [l.header, d("WAWebUISpacing").uiMargin.top16, d("WAWebUISpacing").uiMargin.bottom16],
                        size: "24",
                        color: "dark",
                        weight: "medium",
                        children: n
                    })
                }), o.map(function (a) {
                    var b = a.Icon,
                        c = a.title;
                    a = a.description;
                    return k.jsx(d("WAWebNewsletterDrawerBodyParagraph.react").NewsletterDrawerBodyParagraph, {
                        icon: k.jsx(b, {
                            width: 24,
                            height: 24,
                            xstyle: l.icon
                        }),
                        title: c,
                        description: a
                    }, c)
                }), a, k.jsx(d("WAWebFlex.react").FlexRow, {
                    xstyle: [l.buttonContainer, d("WAWebUISpacing").uiMargin.top16],
                    children: k.jsx(c("WAWebButton.react"), {
                        testid: void 0,
                        type: "primary",
                        onClick: m,
                        children: h._("__JHASH__2N1xLxeqim0__JHASH__")
                    })
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebNewsletterTransferOwnershipSelectionDrawer.react", ["fbt", "WAWebChatContactList.react", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebDrawerSection.react", "WAWebEmptyState.react", "WAWebFbtCommon", "WAWebFlatListController", "WAWebL10N", "WAWebNewsletterAdminSelectionFlow.react", "WAWebPhoneNumberSearch", "WAWebSearchInput", "WAWebUISpacing", "react", "useWAWebDebouncedSearch", "useWAWebNewsletterAdmins"], (function (a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j;
    b = j || d("react");
    var k = i || (i = c("react")),
        l = b.useCallback,
        m = b.useMemo,
        n = b.useRef,
        o = {
            drawer: {
                backgroundColor: "x150wa6m",
                $$css: !0
            }
        };

    function p(a) {
        var b = a.chat;
        return k.jsx(d("WAWebEmptyState.react").EmptyErrorStateWithButton, {
            xstyle: d("WAWebUISpacing").uiMargin.top20,
            center: !1,
            text: h._("__JHASH__lARfBytHTId__JHASH__"),
            buttonText: h._("__JHASH__B1JC9R4xKnd__JHASH__"),
            onClick: function () {
                d("WAWebNewsletterAdminSelectionFlow.react").startAdminInviteFlow({
                    chat: b
                })
            },
            testid: void 0
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";
    e = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.chat,
            f = a.onTransferOwnershipSelection,
            g = n(),
            i = c("useWAWebDebouncedSearch")(),
            j = i[0];
        i = i[1];
        var q = c("WAWebFbtCommon")("Search"),
            r = m(function () {
                return new(c("WAWebFlatListController"))()
            }, []),
            s = d("useWAWebNewsletterAdmins").useNewsletterAdmins(e);
        q = k.jsx(c("WAWebDrawerSection.react"), {
            shadow: !1,
            animation: !1,
            theme: "list-section",
            children: k.jsx(d("WAWebSearchInput").DrawerSearchInput, {
                searchInputA11yLabel: q,
                placeholder: q,
                onSearch: i,
                focusOnMount: !1
            })
        });
        var t = l(function () {
            var a, b = c("WAWebL10N").accentFold(j),
                e = d("WAWebPhoneNumberSearch").numberSearch(b);
            return ((a = s) != null ? a : []).filter(function (a) {
                return !b || b && a.searchMatch(b, e)
            })
        }, [s, j]);
        i = l(function () {
            var a = {
                contacts: t(),
                header: h._("__JHASH__dNGDKk9TMG4__JHASH__")
            };
            return k.jsx(c("WAWebChatContactList.react"), {
                ref: g,
                contacts: [],
                flatListController: r,
                onClick: function (a, b) {
                    f(b)
                },
                showMe: !1,
                showBot: !1,
                showPersonGroupDivisionHeader: !0,
                separateContacts: a
            })
        }, [t, r, f]);
        e = s == null || (s == null ? void 0 : s.length) === 0 ? k.jsx(p, {
            chat: e
        }) : i();
        return k.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            xstyle: o.drawer,
            testid: void 0,
            children: [k.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                title: h._("__JHASH__RxqFIn6Zn3n__JHASH__"),
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onBack: a.onBack,
                onCancel: a.onCancel
            }), q, k.jsx(c("WAWebDrawerBody.react"), {
                children: e
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;
    g["default"] = b
}), 226);
__d("WAWebInfoFlow.react", ["fbt", "WAAbortError", "WAJids", "WALogger", "WANullthrows", "WAPromiseRaceAbort", "WAWebBizGatingUtils", "WAWebBizShowCartAction", "WAWebBroadcastInfoDrawer.react", "WAWebChatGroupUtils", "WAWebCmd", "WAWebCommonNewsletterEnums", "WAWebCommunityFlow.react", "WAWebCommunityFlowLoadable", "WAWebCommunityHomeWrapper.react", "WAWebCommunityTabbedInfoDrawer.react", "WAWebConfirmPopup.react", "WAWebContactEditUtils", "WAWebContactInfoDrawer.react", "WAWebContactLogging", "WAWebContactUtils", "WAWebDefaultEphemeralityDrawer.react", "WAWebDrawerContext", "WAWebDrawerManager", "WAWebEphemeralDrawer.react", "WAWebEphemeralKicNux.react", "WAWebEventInfoFlowLoadable", "WAWebEventsInChatDrawer.react", "WAWebExistingGroupPermissionsDrawer.react", "WAWebFbtCommon", "WAWebGroupInfoDrawer.react", "WAWebGroupInviteLinkDrawerLoadable", "WAWebGroupInviteUtils.react", "WAWebGroupMembershipApprovalRequestsFlow.react", "WAWebGroupQueryJob", "WAWebInfoFlowStep", "WAWebKeptDrawer.react", "WAWebMediaGalleryDrawer.react", "WAWebModalManager", "WAWebNameGroupModal.react", "WAWebNativeContactsNuxPopup.react", "WAWebNewsletterAdminFunnelLogging", "WAWebNewsletterAlertFlow.react", "WAWebNewsletterDeleteDrawer.react", "WAWebNewsletterGatingUtils", "WAWebNewsletterInfoDrawer.react", "WAWebNewsletterInsightsDrawerLoadable", "WAWebNewsletterLinkDrawer.react", "WAWebNewsletterMembershipUtil", "WAWebNewsletterProducerInsightsLogger", "WAWebNewsletterSettingsDrawer.react", "WAWebNewsletterTransferOwnershipDrawer.react", "WAWebNewsletterTransferOwnershipSelectionDrawer.react", "WAWebNoop", "WAWebNux", "WAWebProductCatalogCatalogLinkDrawer.react", "WAWebProductCatalogContext", "WAWebProductCatalogLogEvents", "WAWebProductCatalogProductDetailsDrawer.react", "WAWebProductCatalogProductLinkDrawer.react", "WAWebProductCatalogProductListDrawer.react", "WAWebProductCatalogProductMoreInformationDrawer.react", "WAWebProductCatalogSession", "WAWebProductCollectionCatalogViewDrawer.react", "WAWebProductCollectionCollectionContentDrawer.react", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebQueryAndUpdateNewslettersMetadataAction", "WAWebSentForAdminReviewFlow.react", "WAWebSetSubjectGroupAction", "WAWebStarredDrawerLoadable", "WAWebUim", "WAWebUserPrefsNuxPreferences", "WAWebVerificationDrawerLoadable", "WAWebWallpaperDrawer.react", "WAWebWamEnumAdminFlowType", "WAWebWamEnumCatalogEntryPoint", "WAWebWamEnumChannelLinkShareEntryPoint", "WAWebWamEnumDisappearingModeEntryPointType", "WAWebWamEnumEphemeralSettingEntryPointType", "asyncToGeneratorRuntime", "cr:8723", "err", "react", "useWAWebFlow", "useWAWebStableCallback", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["name_group_modal:onSetSubject failed"]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        m = e.useContext,
        n = e.useEffect,
        o = e.useMemo,
        p = e.useRef,
        q = e.useState,
        r = function (a) {
            if (a.isGroup) return d("WAWebInfoFlowStep").InfoFlowStep.GroupInfo;
            else if (a.isBroadcast) return d("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo;
            else if (a.isUser) return d("WAWebInfoFlowStep").InfoFlowStep.ContactInfo;
            else if (a.isNewsletter) return d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo;
            a = (a = a.kind) != null ? a : "undefined";
            throw c("err")("Invalid chat provided of kind " + a)
        };
    e = l.forwardRef(a);

    function a(a, e) {
        var f, g, i = babelHelpers["extends"]({}, a),
            j = i.chat;
        a = i.initialStep;
        a = a === void 0 ? r(j) : a;
        var s = i.showFullGroupDescription,
            t = i.scrollToParticipantList,
            u = i.profileEntryPoint,
            v = i.onBack,
            w = i.onEnd,
            x = i.displayName,
            y = i.sourceGroupChatOrNewsletter,
            aa = i.focusNewsletterDescriptionOnMount,
            z = i.focusGroupSubjectOnMount,
            A = i.focusGroupDescriptionOnMount,
            B = i.newsletterLinkShareScreenEntryPoint,
            C = p(0),
            ba = c("useWAWebStableCallback")(function (a) {
                C.current = a
            }),
            D = p(void 0),
            ca = d("WAWebCommonNewsletterEnums").AlertScreen.MULTIPLE_ALERTS_LIST_SCREEN,
            E = m(d("WAWebDrawerContext").DrawerContext),
            da = o(function () {
                return new(d("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLogger)({
                    wid: j.id
                })
            }, [j.id]);
        w = d("useWAWebFlow").useFlow(a, {
            transitions: d("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: w
        });
        var ea = w[0],
            F = w[1];
        w = p(new(d("WAWebNewsletterAdminFunnelLogging").NewsletterAdminFunnelLogger)(d("WAWebWamEnumAdminFlowType").ADMIN_FLOW_TYPE.EDIT));
        var G = p(B),
            H = p("reach"),
            I = p(null),
            J = p(null);
        B = q(null);
        var K = B[0],
            L = B[1];
        B = q(void 0);
        var fa = B[0],
            ga = B[1];
        B = q(null);
        var ha = B[0],
            ia = B[1];
        B = q(null);
        var ja = B[0],
            ka = B[1];
        B = q(null);
        var M = B[0],
            N = B[1];
        B = q(null);
        var la = B[0],
            ma = B[1];
        B = q(null);
        var na = B[0],
            oa = B[1];
        B = q(null);
        var O = B[0],
            pa = B[1],
            P = p();
        n(function () {
            if (j.isGroup) d("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(j.id, "interactive");
            else if (j.isUser) j.contact.isBusiness && d("WAWebBizGatingUtils").canSeeBizProfileV3() && d("WAWebDrawerManager").DrawerManager.setDrawerContext("right", d("WAWebProductCatalogContext").buildProductCatalogContext(new(d("WAWebProductCatalogSession").ProductCatalogSession)(), d("WAWebContactUtils").getMaybeBizPlatformForLogging(j.contact.id.toString()), d("WAWebWamEnumCatalogEntryPoint").CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_PROFILE));
            else if (j.isNewsletter) {
                var a;
                void d("WAWebQueryAndUpdateNewslettersMetadataAction").queryAndUpdateNewsletterMetadataAction(d("WAJids").toNewsletterJid(j.id.toString()), {
                    fields: babelHelpers["extends"]({
                        name: !0,
                        picture: !0,
                        description: !0,
                        inviteLink: !0,
                        handle: !0,
                        subscribers: !0,
                        privacy: !0,
                        verification: !0,
                        state: !0
                    }, !((a = j.newsletterMetadata) == null ? void 0 : a.isPreview) && {
                        muted: !0,
                        membership: !0
                    })
                })
            }
        }, []);
        B = function (a, b) {
            L(a), ga(b), F.push(d("WAWebInfoFlowStep").InfoFlowStep.ProductDetail)
        };
        var qa = function (a) {
                ia(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.ProductCollection)
            },
            ra = function (a) {
                L(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.ProductLink)
            },
            sa = function (a) {
                L(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.ProductInfo)
            },
            Q = function (a, b) {
                ka(a), N(b), F.push(d("WAWebInfoFlowStep").InfoFlowStep.CatalogLink)
            },
            R = function (a) {
                var b = d("WAWebProductCatalogContext").getProductCatalogContext(E);
                b = c("WAWebBizShowCartAction")(a, j, b);
                b && (ma(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.Cart))
            },
            ta = function (a, b) {
                var c = j.id;
                d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
                    annotations: {
                        string: {
                            EntryPoint: b
                        }
                    }
                });
                d("WAWebProductCatalogLogEvents").logCarouselViewMoreClick({
                    catalogOwnerWid: c,
                    catalogContext: a
                });
                F.push(d("WAWebInfoFlowStep").InfoFlowStep.Catalog)
            },
            ua = function () {
                d("WAWebModalManager").ModalManager.open(l.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: function () {
                        return d("WAWebModalManager").ModalManager.close()
                    },
                    okText: c("WAWebFbtCommon")("OK"),
                    children: h._("__JHASH__TRqQJIz5tfr__JHASH__")
                }))
            },
            va = c("useWAWebUnmountSignal")(),
            wa = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
                    b = a;
                    yield c("WAPromiseRaceAbort")(d("WAWebSetSubjectGroupAction").setGroupSubject(i.chat, b), va)["catch"](d("WAAbortError").catchAbort(c("WAWebNoop")))["catch"](function (a) {
                        d("WALogger").WARN(k()).devConsole(a)
                    });
                    d("WAWebModalManager").ModalManager.close();
                    F.push(d("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink)
                });
                return function (b, c) {
                    return a.apply(this, arguments)
                }
            }(),
            S = function () {
                if (d("WAWebChatGroupUtils").isInviteGrowthLockedGroup(j)) {
                    var a;
                    a = !!((a = j.groupMetadata) == null ? void 0 : a.participants.iAmAdmin());
                    d("WAWebGroupInviteUtils.react").openGrowthLockedModal(a, !0);
                    return
                }
                if ((a = j.groupMetadata) == null ? void 0 : a.isUnnamed) {
                    a = h._("__JHASH__LexiYpo_iPe__JHASH__");
                    d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebNameGroupModal.react"), {
                        chat: j,
                        subtext: a,
                        onCancel: function () {
                            return d("WAWebModalManager").ModalManager.close()
                        },
                        onOK: wa,
                        editable: (a = j.groupMetadata) == null ? void 0 : a.canSetSubject(),
                        editRestrictionInfo: ((a = j.groupMetadata) == null ? void 0 : a.restrict) ? ua : void 0
                    }))
                } else F.push(d("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink)
            },
            T = function (a) {
                N(a || j.contact), F.push(d("WAWebInfoFlowStep").InfoFlowStep.Verification)
            },
            U = function (a) {
                N(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.ContactInfo)
            },
            xa = function (a) {
                oa(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality)
            },
            V = function () {
                d("WAWebUserPrefsNuxPreferences").shouldShowNUX(d("WAWebNux").NUX.EPHEMERAL) ? d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebEphemeralKicNux.react"), {
                    chat: j,
                    fromMe: !0,
                    onOk: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Ephemeral)
                    }
                })) : F.push(d("WAWebInfoFlowStep").InfoFlowStep.Ephemeral)
            },
            ya = function () {
                var a;
                a = (a = j.groupMetadata) == null ? void 0 : a.parentGroup;
                if (!a) return;
                d("WAWebCmd").Cmd.openCommunityHome(a, !0)
            },
            W = function (a) {
                pa(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.EventInfo)
            },
            za = function () {
                F.push(d("WAWebInfoFlowStep").InfoFlowStep.AllEvents)
            },
            Aa = function () {
                F.end(d("WAWebUim").DismissReason.LIFECYCLE)
            },
            X = function () {
                D.current = void 0, C.current = 0, F.push(d("WAWebInfoFlowStep").InfoFlowStep.MediaGallery)
            },
            Y = function () {
                D.current = d("WAWebMediaGalleryDrawer.react").GalleryDrawerTabs.PRODUCTS, F.pop()
            },
            Z = function (a) {
                N(a), F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership)
            },
            Ba = c("useWAWebStableCallback")(function (a) {
                if (d("WAWebContactEditUtils").shouldShowNativeContactsNux()) {
                    var b = Boolean(M);
                    d("WAWebModalManager").ModalManager.open(l.jsx(d("WAWebNativeContactsNuxPopup.react").NativeContactsNuxPopup, {
                        source: b ? d("WAWebContactLogging").ContactSourceType.GroupMemberInfo : d("WAWebContactLogging").ContactSourceType.ContactInfo
                    }));
                    return
                }
                J.current = d("WAWebContactEditUtils").getContactDataFromContactModel(a);
                F.push(d("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow)
            }),
            Ca = c("useWAWebStableCallback")(function (a) {
                if (d("WAWebContactEditUtils").shouldShowNativeContactsNux()) {
                    d("WAWebModalManager").ModalManager.open(l.jsx(d("WAWebNativeContactsNuxPopup.react").NativeContactsNuxPopup, {
                        source: d("WAWebContactLogging").ContactSourceType.VCard
                    }));
                    return
                }
                J.current = a;
                F.push(d("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow)
            }),
            Da = function () {
                if (F.step === d("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow) {
                    var a;
                    (a = P.current) == null ? void 0 : a.handleDismiss()
                }
                F.pop()
            };
        if (!F.step) return null;
        f = (f = y) != null ? f : j;
        var $;
        switch (F.step) {
            case d("WAWebInfoFlowStep").InfoFlowStep.GroupInfo:
                if (d("WAWebChatGroupUtils").isCommunityAnnouncementGroup(f) && !d("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(f) && ((g = f.groupMetadata) == null ? void 0 : g.participants.iAmMember())) {
                    g = (g = f.groupMetadata) == null ? void 0 : g.parentGroup;
                    $ = l.jsx(d("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
                        homeTheme: d("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo,
                        initialStep: d("WAWebCommunityFlow.react").CommunityFlowStep.CommunityHome,
                        initialTab: d("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Announcements,
                        jid: g,
                        onBack: function () {
                            return F.pop()
                        }
                    })
                } else $ = l.jsx(c("WAWebGroupInfoDrawer.react"), {
                    chat: f,
                    focusGroupSubjectOnMount: z,
                    showFullGroupDescription: s,
                    focusGroupDescriptionOnMount: A,
                    scrollToParticipantList: t,
                    groupMetadata: f.groupMetadata,
                    contact: f.contact,
                    profilePicThumb: f.contact.getProfilePicThumb(),
                    onVerification: T,
                    onContactInfo: U,
                    onStarred: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Starred)
                    },
                    onKept: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Kept)
                    },
                    onWallpaperClick: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Wallpaper)
                    },
                    onSentForAdminReview: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview)
                    },
                    onMediaGallery: X,
                    onAdminSetting: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.GroupSettings)
                    },
                    onGroupInviteLink: S,
                    onPendingParticipants: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants)
                    },
                    onEphemeral: V,
                    onCommunityClick: ya,
                    onEventInfo: W,
                    onAllEvents: za,
                    onClose: function () {
                        y ? F.end() : F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.SentForAdminReview:
                $ = l.jsx(c("WAWebSentForAdminReviewFlow.react"), {
                    chat: j,
                    ref: e,
                    onClose: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.BroadcastInfo:
                $ = l.jsx(c("WAWebBroadcastInfoDrawer.react"), {
                    chat: j,
                    contact: j.contact,
                    onStarred: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Starred)
                    },
                    onMediaGallery: X,
                    onClose: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.ContactInfo:
                $ = l.jsx(c("WAWebContactInfoDrawer.react"), {
                    contact: M || j.contact,
                    onVerification: T,
                    onStarred: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Starred)
                    },
                    onKept: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Kept)
                    },
                    onWallpaperClick: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Wallpaper)
                    },
                    onMediaGallery: X,
                    onProductCatalog: ta,
                    onProductDetail: B,
                    onEphemeral: V,
                    onSaveContact: Ba,
                    onClose: function () {
                        return F.pop()
                    },
                    profileEntryPoint: u,
                    onBack: y ? function () {
                        y.isNewsletter ? F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo) : F.push(d("WAWebInfoFlowStep").InfoFlowStep.GroupInfo)
                    } : v
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo:
                d("WAWebNewsletterGatingUtils").isNewsletterEnabled() && ($ = l.jsx(c("WAWebNewsletterInfoDrawer.react"), {
                    chat: f,
                    newsletterMetadata: f.newsletterMetadata,
                    profilePicThumb: f.contact.getProfilePicThumb(),
                    adminFunnelLogger: w.current,
                    onClose: function () {
                        F.end()
                    },
                    onTransferNewsletterOwnership: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnershipSelection)
                    },
                    onTransferOwnershipSelection: Z,
                    onDeleteNewsletter: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter)
                    },
                    onAdminCenter: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter)
                    },
                    onSettings: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings)
                    },
                    onShareLink: function () {
                        G.current = d("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_INFO_PAGE, F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink)
                    },
                    onVerification: T,
                    onViewInsights: function (a, b) {
                        H.current = a, I.current = b, F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights)
                    },
                    focusDescriptionOnMount: aa
                }));
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings:
                d("WAWebNewsletterGatingUtils").isNewsletterReactionSettingsEnabled() && ($ = l.jsx(c("WAWebNewsletterSettingsDrawer.react"), {
                    isFirstLevel: a === d("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
                    onBack: function () {
                        return F.pop()
                    },
                    newsletter: f,
                    adminFunnelLogger: w.current
                }));
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink:
                d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(j.newsletterMetadata) && ($ = l.jsx(c("WAWebNewsletterLinkDrawer.react"), {
                    entryPoint: G.current,
                    onClose: function () {
                        F.end()
                    },
                    onBack: F.previousStep === d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo ? function () {
                        return F.pop()
                    } : null,
                    newsletter: j
                }));
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnershipSelection:
                d("WAWebNewsletterGatingUtils").isNewsletterTransferOwnershipEnabled() && ($ = l.jsx(c("WAWebNewsletterTransferOwnershipSelectionDrawer.react"), {
                    chat: f,
                    onBack: function () {
                        return F.pop()
                    },
                    onTransferOwnershipSelection: Z
                }));
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterTransferOwnership:
                d("WAWebNewsletterGatingUtils").isNewsletterTransferOwnershipEnabled() && ($ = l.jsx(c("WAWebNewsletterTransferOwnershipDrawer.react"), {
                    contact: M,
                    chat: f,
                    onBack: function () {
                        return F.pop()
                    },
                    onTransferCompletion: function () {
                        F.push(d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInfo)
                    }
                }));
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.DeleteNewsletter:
                $ = l.jsx(c("WAWebNewsletterDeleteDrawer.react"), {
                    chat: f,
                    onBack: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterAdminCenter:
                $ = l.jsx(c("WAWebNewsletterAlertFlow.react"), {
                    chat: f,
                    onBack: function () {
                        return F.pop()
                    },
                    alertScreen: ca,
                    entryPoint: d("WAWebCommonNewsletterEnums").AlertEntryPoint.INFO_DRAWER
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.NewsletterInsights:
                $ = l.jsx(d("WAWebNewsletterInsightsDrawerLoadable").NewsletterInsightsDrawerLoadable, {
                    entryPoint: I.current,
                    onBack: function () {
                        return F.pop()
                    },
                    chat: j,
                    selectedTab: H.current
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.ProductDetail:
                $ = l.jsx(c("WAWebProductCatalogProductDetailsDrawer.react"), {
                    chat: j,
                    collectionId: fa,
                    product: c("WANullthrows")(K),
                    onEnd: Aa,
                    onBack: Y,
                    refreshCarousel: !1,
                    onProductLinkClick: ra,
                    onProductMoreInformation: sa,
                    onCartClick: R
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.ProductCollection:
                g = j.id;
                $ = l.jsx(d("WAWebProductCollectionCollectionContentDrawer.react").CollectionContentDrawer, {
                    contact: j.contact,
                    onProductDetail: B,
                    catalogId: g,
                    onBack: function () {
                        return F.pop()
                    },
                    onCatalogLinkClick: Q,
                    onCartClick: R,
                    collection: c("WANullthrows")(ha)
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.ProductLink:
                $ = l.jsx(c("WAWebProductCatalogProductLinkDrawer.react"), {
                    product: c("WANullthrows")(K),
                    onBack: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.ProductInfo:
                $ = l.jsx(c("WAWebProductCatalogProductMoreInformationDrawer.react"), {
                    product: c("WANullthrows")(K),
                    onBack: Y
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.CatalogLink:
                $ = l.jsx(c("WAWebProductCatalogCatalogLinkDrawer.react"), {
                    catalog: c("WANullthrows")(ja),
                    contact: c("WANullthrows")(M),
                    onBack: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Cart:
                z = d("WAWebProductCatalogContext").getProductCatalogContext(E);
                s = c("WAWebBizShowCartAction")(c("WANullthrows")(la), j, z);
                $ = c("WANullthrows")(s);
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Catalog:
                $ = l.jsx(c("WAWebProductCollectionCatalogViewDrawer.react"), {
                    contact: j.contact,
                    onProductDetail: B,
                    catalogId: j.id,
                    onBack: function () {
                        return F.pop()
                    },
                    businessProfile: j.contact.businessProfile,
                    onCatalogLinkClick: Q,
                    onCartClick: R,
                    onCollectionSeeAll: qa
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.ProductList:
                $ = l.jsx(d("WAWebProductCatalogProductListDrawer.react").ProductListDrawer, {
                    contact: j.contact,
                    onProductDetail: B,
                    catalogId: j.id,
                    onBack: function () {
                        return F.pop()
                    },
                    businessProfile: j.contact.businessProfile,
                    onCatalogLinkClick: Q,
                    onCartClick: R
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Starred:
                $ = l.jsx(d("WAWebStarredDrawerLoadable").StarredDrawerLoadable, {
                    chat: j,
                    starredMsgs: j.getStarredMsgs(),
                    onClose: function () {
                        return F.pop()
                    },
                    onSaveContact: Ca
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Wallpaper:
                $ = l.jsx(c("WAWebWallpaperDrawer.react"), {
                    chat: j,
                    onClose: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Kept:
                $ = l.jsx(c("WAWebKeptDrawer.react"), {
                    chat: j,
                    keptMsgs: j.getKeptMsgs(),
                    onClose: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.GroupSettings:
                $ = l.jsx(c("WAWebExistingGroupPermissionsDrawer.react"), {
                    chat: j,
                    groupMetadata: j.groupMetadata,
                    onClose: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.MediaGallery:
                $ = l.jsx(d("WAWebMediaGalleryDrawer.react").MediaGalleryDrawer, {
                    chat: j,
                    onBack: function () {
                        return F.pop()
                    },
                    onProductDetail: B,
                    setProductsScrollOffset: ba,
                    initialTab: D.current,
                    productsScrollOffset: C.current
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.GroupInviteLink:
                $ = l.jsx(d("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable, {
                    chat: j,
                    groupMetadata: c("WANullthrows")(j.groupMetadata),
                    onBack: function () {
                        return F.pop()
                    },
                    onGroupSettings: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.GroupSettings)
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.PendingParticipants:
                $ = l.jsx(c("WAWebGroupMembershipApprovalRequestsFlow.react"), {
                    chat: j,
                    onBack: function () {
                        return F.pop()
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Verification:
                $ = l.jsx(c("WAWebVerificationDrawerLoadable").VerificationDrawerLoadable, {
                    contact: c("WANullthrows")(M),
                    onClose: function () {
                        return F.pop()
                    },
                    isFirstLevel: !1
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.DefaultEphemerality:
                $ = l.jsx(c("WAWebDefaultEphemeralityDrawer.react"), {
                    onClose: function () {
                        return F.pop()
                    },
                    entryPoint: c("WANullthrows")(na)
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.Ephemeral:
                var Ea = j.isGroup ? d("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.GROUP_CHAT_DISAPPEARING_MESSAGES_SETTING : d("WAWebWamEnumDisappearingModeEntryPointType").DISAPPEARING_MODE_ENTRY_POINT_TYPE.INDIVIDUAL_CHAT_DISAPPEARING_MESSAGES_SETTING;
                $ = l.jsx(c("WAWebEphemeralDrawer.react"), {
                    chat: j,
                    showNux: d("WAWebUserPrefsNuxPreferences").shouldShowNUX(d("WAWebNux").NUX.EPHEMERAL),
                    entryPoint: d("WAWebWamEnumEphemeralSettingEntryPointType").EPHEMERAL_SETTING_ENTRY_POINT_TYPE.CHAT_INFO,
                    onClose: function () {
                        return F.pop()
                    },
                    onCloseNux: function () {
                        return F.push(d("WAWebInfoFlowStep").InfoFlowStep.Ephemeral)
                    },
                    onDDMSettingsClick: function () {
                        return xa(Ea)
                    }
                });
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.SaveContactFlow:
                if (b("cr:8723")) {
                    A = Boolean(M);
                    U = (t = J.current) != null ? t : d("WAWebContactEditUtils").getContactDataFromContactModel(j.contact);
                    S = function () {
                        J.current = null, F.pop()
                    };
                    $ = l.jsx(b("cr:8723"), {
                        ref: P,
                        origin: A ? d("WAWebContactLogging").ContactSourceType.GroupMemberInfo : d("WAWebContactLogging").ContactSourceType.ContactInfo,
                        contactData: U,
                        onSave: S,
                        onBack: S
                    })
                }
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.EventInfo:
                O && ($ = l.jsx(d("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
                    chat: j,
                    msg: O,
                    onBack: function () {
                        return F.pop()
                    }
                }, "event-info-drawer-" + O.id.toString()));
                break;
            case d("WAWebInfoFlowStep").InfoFlowStep.AllEvents:
                $ = l.jsx(d("WAWebEventsInChatDrawer.react").EventsInChatDrawer, {
                    chat: j,
                    onEventClick: W,
                    onBack: function () {
                        return F.pop()
                    }
                }, "all-events-drawer-" + j.id.toString());
                break
        }
        return l.jsx(d("WAWebNewsletterProducerInsightsLogger").NewsletterProducerInsightsLoggerContext.Provider, {
            value: da,
            children: l.jsx(ea, {
                ref: e,
                flow: F,
                displayName: x,
                requestDismiss: Da,
                children: $
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.InfoFlow = e
}), 226);
__d("WAWebKeepInChatMediaIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "keep-in-chat-media";

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
                    d: "m17 3h-10c-1.1 0-1.99.9-1.99 2l-.01 16 7-3 7 3v-16c0-1.1-.9-2-2-2z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.KeepInChatMediaIcon = a
}), 98);
__d("WAWebMediaAudio.react", ["fbt", "WAWebMediaUrlProvider", "WAWebPttAudioTag.react", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = function (a) {
            a.stopPropagation()
        };

    function l(a) {
        var b = a.msg;
        a = a.url;
        return j.jsx(d("WAWebPttAudioTag.react").AudioTag, {
            url: a,
            className: "xh8yej3 xqolr7f x1anomrk",
            onClick: k,
            autoPlay: !0,
            msg: b,
            controls: !0,
            testId: "media-audio",
            children: h._("__JHASH__M0oEh1ph3Ob__JHASH__")
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m() {
        return j.jsx("div", {
            className: "xzkaem6 xdzyupr x1vd4hg5 xx5krr6 xztyhrg x18d0r48",
            onClick: k
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.mediaData,
            e = a.msg;
        a = d("useWAWebModelValues").useModelValues(b, ["mediaStage", "renderableUrl"]);
        return j.jsx(c("WAWebMediaUrlProvider"), {
            mediaData: a,
            placeholderRenderer: m,
            children: function (a) {
                return j.jsx(l, {
                    url: a,
                    msg: e
                })
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebMediaViewerReportSpamPopup.react", ["fbt", "WAWebCheckBox.react", "WAWebConfirmPopup.react", "WAWebText_DONOTUSE.react", "WAWebUIRefreshGatingUtils", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l = k || c("react"),
        m = (i || (i = d("react"))).useState,
        n = {
            section: {
                marginBottom: "xod5an3",
                $$css: !0
            },
            checkboxLabel: {
                marginStart: "x1i64zmx",
                $$css: !0
            },
            border: {
                paddingBottom: "x1ehvx8p",
                borderBottomWidth: "xso031l",
                borderBottomStyle: "x1q0q8m5",
                borderBottomColor: "x1uqklw9",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.isBizBot3p,
            e = a.isBusiness;
        a.isGroup;
        var f = a.onCancel,
            g = a.onReport;
        a = a.title;
        var i = m(!1),
            k = i[0],
            o = i[1];

        function p() {
            g(k)
        }
        e ? (i = h._("__JHASH__aNKVk1rMfbv__JHASH__"), e = h._("__JHASH__Rmz5ScsiIKl__JHASH__")) : b ? (i = h._("__JHASH__Y6yJLOH1ef-__JHASH__"), e = h._("__JHASH__MCC4xfLuM_j__JHASH__")) : (i = h._("__JHASH__t3G_oouqZ1X__JHASH__"), e = h._("__JHASH__N8yefZkaTc7__JHASH__"));
        return l.jsxs(d("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: p,
            okButtonType: d("WAWebUIRefreshGatingUtils").modalRefreshEnabled() ? "solidWarning" : void 0,
            okText: h._("__JHASH__lmNWNj4RDIv__JHASH__"),
            onCancel: f,
            title: a,
            children: [l.jsxs("div", {
                className: (j || (j = c("stylex")))(n.section, d("WAWebUISpacing").uiMargin.top12, d("WAWebUISpacing").uiMargin.end0, n.border),
                children: [l.jsx(d("WAWebCheckBox.react").CheckBox, {
                    onChange: function () {
                        return o(function (a) {
                            return !a
                        })
                    },
                    checked: k,
                    id: "menu-icon-report-spam"
                }), l.jsx(d("WAWebText_DONOTUSE.react").TextLabel, {
                    xstyle: n.checkboxLabel,
                    htmlFor: "menu-icon-report-spam",
                    children: e
                })]
            }), l.jsx(d("WAWebText_DONOTUSE.react").TextParagraph, {
                xstyle: n.section,
                color: "muted",
                children: i
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebReactionsMediaIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "reactions-media";

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
        l = 15;
        m = 15;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 15 15",
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
                    d: "M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ReactionsMediaIcon = a
}), 98);
__d("WAWebReportNewsletterPostSpamButton.react", ["fbt", "WAWebDropdownItem.react", "WAWebFrontendMsgGetters", "WAWebModalManager", "WAWebReportNewsletterPostPopup.react", "WAWebSpamConstants", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.msg,
            e = d("WAWebFrontendMsgGetters").getChat(b);
        a = function () {
            d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebReportNewsletterPostPopup.react"), {
                chat: e,
                msg: b,
                spamFlow: d("WAWebSpamConstants").SpamFlow.MediaViewer
            }))
        };
        return j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            action: a,
            children: h._("__JHASH__WjXLG2s6FNr__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebSendForAdminReviewButton.react", ["fbt", "WAWebDropdownItem.react", "WAWebFrontendMsgGetters", "WAWebModalManager", "WAWebReportToAdminEventsLogger", "WAWebReportToAdminPopup.react", "WAWebWamEnumReportToAdminInteraction", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.msg;
        a = function () {
            d("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
                reportToAdminInteraction: d("WAWebWamEnumReportToAdminInteraction").REPORT_TO_ADMIN_INTERACTION.CLICK_SEND_FOR_ADMIN_REVIEW,
                groupId: d("WAWebFrontendMsgGetters").getChat(b).id.user
            }), d("WAWebModalManager").ModalManager.open(j.jsx(c("WAWebReportToAdminPopup.react"), {
                msg: b
            }))
        };
        return j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            action: a,
            children: h._("__JHASH__jyK71WAdXyH__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebUndoKeepInChatMediaIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "undo-keep-in-chat-media";

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
        m = 25;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 25 24",
                height: l,
                width: m,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "none",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    clipRule: "evenodd",
                    d: "m18 3h-10.00003c-1.1 0-1.99.9-1.99 2l-.0005.79529 13.99053 8.04121v-8.8365c0-1.1-.9-2-2-2zm2 14.9115 3.8749 2.2272.9967-1.734-22.97977-13.20787-.996627 1.73399 5.111727 2.93802-.00696 11.13116 7.00003-3 7 3z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.UndoKeepInChatMediaIcon = a
}), 98);
__d("WAWebUnpinnedIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "unpinned";

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
                    d: "M15.9984 10.6491V4.28906H16.9984V2.28906H7.64844L15.9984 10.6491Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M16 11.7291V4.28906H17V2.28906H7V2.71906L16 11.7291Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                }), j.jsx("path", {
                    d: "M21.21 19.7395L4.23 2.73945C4.03 2.53945 3.79 2.43945 3.52 2.43945C3.25 2.43945 3.01 2.53945 2.81 2.73945C2.61 2.93945 2.51 3.17945 2.5 3.44945C2.5 3.71945 2.59 3.95945 2.79 4.15945L8.01 9.36945V11.2795L6.00999 13.2795V15.2795H11.01V21.2795L12.01 22.2795L13.01 21.2795V15.2795H13.93L19.79 21.1295C19.99 21.3295 20.23 21.4295 20.5 21.4295C20.77 21.4295 21.01 21.3295 21.21 21.1295C21.41 20.9295 21.51 20.6995 21.51 20.4295C21.51 20.1595 21.41 19.9295 21.21 19.7295V19.7395Z",
                    fill: "currentColor"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.UnpinnedIcon = a
}), 98);
__d("WAWebMediaPanelHeader.react", ["fbt", "$InternalEnum", "WALogger", "WAPromiseDelays", "WAWebBubbleIcon", "WAWebCellFrame.react", "WAWebChatMessageSearch", "WAWebClock", "WAWebCmd", "WAWebColumnChangeDispatch", "WAWebCommentsModal.react", "WAWebComposeBoxActions", "WAWebConfirmPopup.react", "WAWebCopyToClipboard", "WAWebDeleteIcon", "WAWebDeleteRevokeMsgFlow.react", "WAWebDetailImage.react", "WAWebDevOnlyBadge.react", "WAWebDownloadIcon", "WAWebDrawerManager", "WAWebDropdown.react", "WAWebDropdownItem.react", "WAWebEmojiText.react", "WAWebFbtCommon", "WAWebFileSaver", "WAWebFlex.react", "WAWebForwardIcon", "WAWebForwardMessageModalLoadable", "WAWebFrontendMsgGetters", "WAWebKeepInChatActions", "WAWebKeepInChatMediaIcon", "WAWebMediaPanelHeader.scss", "WAWebMediaTypes", "WAWebMediaViewerConstants", "WAWebMediaViewerReportSpamPopup.react", "WAWebMenuBar.react", "WAWebMenuIcon", "WAWebMessageMeta.react", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebMsgActionCapability", "WAWebMsgGetters", "WAWebMsgReply", "WAWebMsgType", "WAWebMsgViewCount", "WAWebNewsletterGatingUtils", "WAWebPinInChatCollection", "WAWebPinMessageModal.react", "WAWebPinned3Icon", "WAWebPinnedMessagesUserJourneyLogger", "WAWebProtobufsE2E.pb", "WAWebReactionsMediaIcon", "WAWebReactionsPanel.react", "WAWebReactionsUtils", "WAWebReplyIcon", "WAWebReplyToMsgChatAction", "WAWebReportNewsletterPostSpamButton.react", "WAWebRevokeMetricUtils", "WAWebSendForAdminReviewButton.react", "WAWebSendPinMessageAction", "WAWebSendReactionMsgAction", "WAWebSendReactionsTray", "WAWebSendReactionsTrayContainer", "WAWebSendSpamChatAction", "WAWebSpamConstants", "WAWebStarBtnIcon", "WAWebStateUtils", "WAWebUimUie.react", "WAWebUimUieMenu.react", "WAWebUndoKeepInChatMediaIcon", "WAWebUnpinnedIcon", "WAWebUnstarBtnIcon", "WAWebViewOnceIcon", "WAWebWamEnumKicEntryPointType", "WAWebXViewerIcon", "gkx", "react", "useWAWebIsPinnedMsg", "useWAWebListener", "useWAWebModelValues", "useWAWebMsgValues", "useWAWebStableCallback"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Error while unpinning a message: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["sendReactionMsg: error sending from media modal ", ""]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["sendReactionMsg picker: error ", ""]);
        m = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var n = i || (i = c("react")),
        o = e.useRef,
        p = e.useState,
        q = b("$InternalEnum").Mirrored(["MenuBar", "Dropdown"]);

    function r(a) {
        var b = d("WAWebFrontendMsgGetters").getChat(a);
        b.isCAG ? d("WAWebModalManager").ModalManager.open(n.jsx(c("WAWebCommentsModal.react"), {
            parentMsgs: [a]
        })) : (b.composeQuotedMsg = a, d("WAWebComposeBoxActions").ComposeBoxActions.focus(b))
    }

    function s(a) {
        return h._("__JHASH__6-_TLd9jBM6__JHASH__", [h._param("contact_name", a.displayName())])
    }
    s.displayName = s.name + " [from " + f.id + "]";

    function a(a) {
        var b, e = a.msg,
            f = a.onHightlightCloseEnd,
            g = a.msgIndexInAlbum,
            h = a.onViewOnceInfoClick,
            i = a.onClose,
            j = o(null);
        b = d("useWAWebMsgValues").useMsgValues(a.msg.id, [(b = d("WAWebMsgGetters")).getId, b.getStar, b.getType, b.getIsGif, b.getIsViewOnce, b.getSender, d("WAWebFrontendMsgGetters").getSenderObj, b.getT, b.getIsSentByMe, b.getIsStickerMsg, b.getBroadcastId, d("WAWebFrontendMsgGetters").getIsUnsentMedia, b.getIsKept, b.getMessageSecret, b.getIsCarouselCard]);
        b[0];
        b[1];
        b[2];
        b[3];
        var k = b[4],
            q = b[5];
        b[6];
        var r = b[7];
        b[8];
        b[9];
        b[10];
        b[11];
        b[12];
        b[13];
        b[14];
        b = d("WAWebMsgViewCount").useWAWebLocalizedViewCount(e.id);
        var s = d("WAWebFrontendMsgGetters").getChat(e),
            t = d("useWAWebModelValues").useModelValues(a.mediaData, ["filehash", "mediaStage", "renderableUrl"]),
            u = p(null),
            v = u[0],
            w = u[1];
        u = p(null);
        var x = u[0],
            y = u[1],
            z = o(null),
            A = function () {
                w(null)
            },
            B = function () {
                y(null)
            },
            C = c("useWAWebStableCallback")(function (a) {
                if (!d("WAWebReactionsUtils").canReactToMessage(a)) return;
                var b = function (b) {
                    d("WAWebSendReactionMsgAction").sendReactionToMsg(a, b)["catch"](function (a) {
                        d("WALogger").DEV(m(), a)
                    }), B()
                };
                y({
                    dirY: d("WAWebDropdown.react").DirY.BOTTOM,
                    dirX: d("WAWebDropdown.react").DirX.CENTER,
                    type: d("WAWebDropdown.react").MenuType.ReactionPicker,
                    menu: n.jsx(d("WAWebReactionsPanel.react").ReactionsPanel, {
                        msgId: a.id.toString(),
                        onSelection: b
                    }),
                    flipOnRTL: !0,
                    anchor: z.current
                })
            });
        u = function () {
            if (!d("WAWebReactionsUtils").canReactToMessage(e)) return;
            var a = function (a) {
                a !== d("WAWebSendReactionsTray").MORE_REACTIONS ? d("WAWebSendReactionMsgAction").sendReactionToMsg(e, a)["catch"](function (a) {
                    d("WALogger").DEV(l(), a)
                }) : self.setTimeout(function () {
                    C(e)
                }, 150), A()
            };
            a = {
                dirY: d("WAWebDropdown.react").DirY.BOTTOM,
                dirX: d("WAWebDropdown.react").DirX.CENTER,
                type: d("WAWebDropdown.react").MenuType.ReactionSendTray,
                menu: n.jsx(d("WAWebSendReactionsTrayContainer").SendReactionsTrayContainer, {
                    msg: e,
                    selectedCallback: a
                }),
                flipOnRTL: !1,
                anchor: z.current
            };
            w(a)
        };
        d("useWAWebListener").useListener(j.current, "animationend", function () {
            f()
        });
        var D = e.displayName({
                showShortName: !0,
                withPushName: !0
            }),
            E = function () {
                if (k) return !1;
                return !d("WAWebMsgActionCapability").canDownloadMsg(e) ? !1 : !!t.renderableUrl || t.mediaStage === d("WAWebMediaTypes").MediaDataStage.RESOLVED
            };
        j = n.jsx(d("WAWebXViewerIcon").XViewerIcon, {
            className_DONOTUSE: a.isHighlightClose ? c("WAWebMediaPanelHeader.scss").highlightClose : null,
            containerRef: j
        });
        var F;
        v ? F = n.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "MsgReaction",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: A,
            children: n.jsx(c("WAWebUimUieMenu.react"), {
                contextMenu: v
            })
        }) : x && (F = n.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "MsgReactionPicker",
            escapable: !0,
            popable: !0,
            dismissOnWindowResize: !0,
            requestDismiss: B,
            children: n.jsx(c("WAWebUimUieMenu.react"), {
                contextMenu: x
            })
        }));
        x = d("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(s == null ? void 0 : (v = s.newsletterMetadata) == null ? void 0 : v.membershipType) && b != null ? n.jsxs(d("WAWebFlex.react").FlexRow, {
            className: c("WAWebMediaPanelHeader.scss").viewCount,
            children: [d("WAWebClock").Clock.relativeDateAndTimeStr(r), n.jsx(d("WAWebMessageMeta.react").MetaBullet, {}), n.jsx("span", {
                children: b
            })]
        }) : n.jsx(n.Fragment, {
            children: d("WAWebClock").Clock.relativeDateAndTimeStr(r)
        });
        return n.jsxs("div", {
            className: c("WAWebMediaPanelHeader.scss").mediaPanelHeader,
            children: [n.jsx("div", {
                className: c("WAWebMediaPanelHeader.scss").info,
                children: n.jsx(c("WAWebCellFrame.react"), {
                    idle: !0,
                    image: n.jsx(d("WAWebDetailImage.react").DetailImage, {
                        id: q,
                        size: 40
                    }),
                    primary: n.jsx(d("WAWebEmojiText.react").EmojiText, {
                        ellipsify: !0,
                        text: D
                    }),
                    secondary: x,
                    theme: "media"
                })
            }), n.jsx("div", {
                className: c("WAWebMediaPanelHeader.scss").mediaPanelTools,
                children: n.jsxs(d("WAWebMenuBar.react").MenuBar, {
                    theme: "strong",
                    children: [n.jsx(I, {
                        isMediaDownloadable: E,
                        msg: e,
                        msgIndexInAlbum: g,
                        onClose: i,
                        onViewOnceInfoClick: h,
                        openReactionTray: u,
                        sendReactionButtonRef: z
                    }), n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
                        testid: void 0,
                        icon: j,
                        title: c("WAWebFbtCommon")("Close"),
                        onClick: a.onClose
                    })]
                }, "media-panel-header")
            }), F]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function t(a) {
        var b = a.isMediaDownloadable,
            c = a.msg,
            e = a.onClose,
            f = a.openReactionTray;
        a = a.sendReactionButtonRef;
        return n.jsxs(n.Fragment, {
            children: [d("WAWebMsgReply").canReplyMsg(c) ? n.jsx(x, {
                msg: c,
                onClose: e
            }) : null, d("WAWebMsgActionCapability").canStarMsg(c) ? n.jsx(C, {
                msg: c
            }) : null, c.canShowKeepOrUnkeepOption() ? n.jsx(B, {
                msg: c
            }) : null, d("WAWebMsgActionCapability").canPinMsg(c) ? n.jsx(D, {
                msg: c
            }) : null, d("WAWebReactionsUtils").canReactToMessage(c) ? n.jsx(A, {
                msg: c,
                openReactionTray: f,
                sendReactionButtonRef: a
            }) : null, n.jsx(y, {
                msg: c,
                onClose: e
            }), d("WAWebMsgActionCapability").canForwardMsg(c) ? n.jsx(E, {
                msg: c
            }) : null, n.jsx(J, {
                isMediaDownloadable: b,
                isAlbumMedia: !0,
                msg: c,
                onClose: e
            })]
        })
    }
    t.displayName = t.name + " [from " + f.id + "]";

    function u(a) {
        var b = a.isMediaDownloadable,
            c = a.msg,
            e = a.onClose,
            f = a.openReactionTray;
        a = a.sendReactionButtonRef;
        return n.jsxs(n.Fragment, {
            children: [!d("WAWebMsgGetters").getIsStickerMsg(c) && !d("WAWebMsgGetters").getIsCarouselCard(c) ? n.jsx(v, {
                msg: c,
                type: q.MenuBar,
                onClose: e
            }) : null, d("WAWebMsgGetters").getIsStickerMsg(c) && !d("WAWebMsgGetters").getIsCarouselCard(c) && !d("WAWebMsgGetters").getIsNewsletterMsg(c) ? n.jsx(x, {
                msg: c,
                onClose: e
            }) : null, d("WAWebMsgActionCapability").canStarMsg(c) ? n.jsx(C, {
                msg: c
            }) : null, d("WAWebMsgActionCapability").canPinMsg(c) ? n.jsx(D, {
                msg: c
            }) : null, c.canShowKeepOrUnkeepOption() ? n.jsx(B, {
                msg: c
            }) : null, d("WAWebMsgGetters").getIsStickerMsg(c) ? n.jsx(y, {
                msg: c,
                onClose: e
            }) : null, d("WAWebReactionsUtils").canReactToMessage(c) ? n.jsx(A, {
                msg: c,
                openReactionTray: f,
                sendReactionButtonRef: a
            }) : null, d("WAWebMsgActionCapability").canForwardMsg(c) ? n.jsx(E, {
                msg: c
            }) : null, d("WAWebMsgGetters").getIsStickerMsg(c) ? null : n.jsx(z, {
                isMediaDownloadable: b,
                msg: c,
                type: q.MenuBar
            }), d("WAWebMsgActionCapability").canReportMsg(c) && d("WAWebMiscGatingUtils").messageLevelReportingEnabled() ? n.jsx(J, {
                isMediaDownloadable: b,
                isAlbumMedia: !1,
                msg: c,
                onClose: e
            }) : null]
        })
    }
    u.displayName = u.name + " [from " + f.id + "]";

    function v(a) {
        var b = a.msg,
            c = a.onClose;
        a = a.type;
        var e = function (a) {
            a.stopPropagation();
            c();
            d("WAWebDrawerManager").DrawerManager.existsDrawerRight(function (a) {
                a && d("WAWebColumnChangeDispatch").Column.column === 2 && d("WAWebDrawerManager").DrawerManager.closeDrawerRight()
            });
            a = d("WAWebChatMessageSearch").getSearchContext(d("WAWebFrontendMsgGetters").getChat(b), d("WAWebStateUtils").unproxy(b).id);
            void d("WAWebCmd").Cmd.openChatAt({
                chat: d("WAWebFrontendMsgGetters").getChat(b),
                msgContext: a
            }).then(function (a) {
                a && d("WAWebComposeBoxActions").ComposeBoxActions.focus(d("WAWebFrontendMsgGetters").getChat(b))
            })
        };
        return a === q.Dropdown ? n.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            action: e,
            children: h._("__JHASH__KuFWxfwvLor__JHASH__")
        }) : n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: n.jsx(d("WAWebBubbleIcon").BubbleIcon, {}),
            title: h._("__JHASH__KuFWxfwvLor__JHASH__"),
            onClick: e
        })
    }
    v.displayName = v.name + " [from " + f.id + "]";

    function w(a) {
        var b = a.msg;
        return n.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            addSpacing: !0,
            testid: void 0,
            action: function () {
                void d("WAWebCopyToClipboard").copyTextToClipboard(b.id.toString())
            },
            children: n.jsx(d("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Copy Msg ID"
            })
        }, "copy-id")
    }
    w.displayName = w.name + " [from " + f.id + "]";

    function x(a) {
        var b = a.msg,
            c = a.onClose;
        a = function (a) {
            c(), void d("WAPromiseDelays").delayMs(d("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION).then(r.bind(null, d("WAWebStateUtils").unproxy(b)))
        };
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: n.jsx(d("WAWebReplyIcon").ReplyIcon, {}),
            title: h._("__JHASH__9qwPCOZrFoa__JHASH__"),
            onClick: a
        })
    }
    x.displayName = x.name + " [from " + f.id + "]";

    function y(a) {
        var b = a.msg,
            e = a.onClose;
        a = function (a) {
            d("WAWebModalManager").ModalManager.open(n.jsx(c("WAWebDeleteRevokeMsgFlow.react"), {
                chat: d("WAWebFrontendMsgGetters").getChat(b),
                msgList: [d("WAWebStateUtils").unproxy(b)],
                onDelete: e
            })), d("WAWebRevokeMetricUtils").UiRevokeActionHelper.startSession(), d("WAWebRevokeMetricUtils").UiRevokeActionHelper.messageSelected()
        };
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: n.jsx(d("WAWebDeleteIcon").DeleteIcon, {}),
            title: h._("__JHASH__8pjXYHXR62r__JHASH__"),
            onClick: a
        })
    }
    y.displayName = y.name + " [from " + f.id + "]";

    function z(a) {
        var b = a.isMediaDownloadable,
            c = a.msg;
        a = a.type;
        var e = function (a) {
            a.stopPropagation(), d("WAWebFileSaver").FileSaver.initDownload(d("WAWebStateUtils").unproxy(c))
        };
        return !b() ? null : a === q.Dropdown ? n.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            action: e,
            disabled: !b(),
            children: h._("__JHASH__etJJN4WjI71__JHASH__")
        }) : n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: n.jsx(d("WAWebDownloadIcon").DownloadIcon, {}),
            title: h._("__JHASH__etJJN4WjI71__JHASH__"),
            disabled: !b(),
            onClick: e
        })
    }
    z.displayName = z.name + " [from " + f.id + "]";

    function A(a) {
        var b = a.msg,
            c = a.openReactionTray;
        a = a.sendReactionButtonRef;
        return b.type === d("WAWebMsgType").MSG_TYPE.STICKER ? null : n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            testid: void 0,
            icon: n.jsx(d("WAWebReactionsMediaIcon").ReactionsMediaIcon, {
                containerRef: a,
                width: 20
            }),
            title: h._("__JHASH__AxiUt4Efrtn__JHASH__"),
            onClick: function () {
                c()
            }
        })
    }
    A.displayName = A.name + " [from " + f.id + "]";

    function B(a) {
        var b = a.msg,
            c, e;
        a = function (a) {
            a.stopPropagation(), void d("WAWebKeepInChatActions").runKeepInChatUX(d("WAWebStateUtils").unproxy(b), d("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA)
        };
        var f = function (a) {
            a.stopPropagation(), void d("WAWebKeepInChatActions").runUndoKeepInChatUX(d("WAWebStateUtils").unproxy(b), d("WAWebWamEnumKicEntryPointType").KIC_ENTRY_POINT_TYPE.MEDIA)
        };
        if (d("WAWebMsgGetters").getIsKept(b) && b.canShowUnkeepOption()) c = n.jsx(d("WAWebUndoKeepInChatMediaIcon").UndoKeepInChatMediaIcon, {}), f = f, e = h._("__JHASH__0tBDsA2BjAm__JHASH__");
        else if (!d("WAWebMsgGetters").getIsKept(b) && b.canShowKeepOption()) c = n.jsx(d("WAWebKeepInChatMediaIcon").KeepInChatMediaIcon, {}), f = a, e = h._("__JHASH__S0WteKlS92G__JHASH__");
        else return null;
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: c,
            title: e,
            onClick: f
        }, c)
    }
    B.displayName = B.name + " [from " + f.id + "]";

    function C(a) {
        var b = a.msg,
            c, e;
        b.star ? (a = function (a) {
            a.stopPropagation(), d("WAWebCmd").Cmd.sendUnstarMsgs(d("WAWebFrontendMsgGetters").getChat(b), [d("WAWebStateUtils").unproxy(b)])
        }, c = n.jsx(d("WAWebUnstarBtnIcon").UnstarBtnIcon, {}), e = h._("__JHASH__X3QIRH8IFsq__JHASH__", [h._plural(1)])) : (a = function (a) {
            a.stopPropagation(), d("WAWebCmd").Cmd.sendStarMsgs(d("WAWebFrontendMsgGetters").getChat(b), [d("WAWebStateUtils").unproxy(b)])
        }, c = n.jsx(d("WAWebStarBtnIcon").StarBtnIcon, {}), e = h._("__JHASH__TWFJFniUvZ8__JHASH__", [h._plural(1)]));
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: c,
            title: e,
            onClick: a
        }, e)
    }
    C.displayName = C.name + " [from " + f.id + "]";

    function D(a) {
        var b = a.msg,
            e, f;
        a = c("useWAWebIsPinnedMsg")(b.id);
        var g = d("WAWebFrontendMsgGetters").getChat(b);
        a ? (a = function (a) {
            a.stopPropagation();
            a = d("WAWebPinInChatCollection").PinInChatCollection.getByParentMsgKey(b.id);
            new(d("WAWebPinnedMessagesUserJourneyLogger").PinnedMessagesUserJourneyLogger)(g).messageMenuClickUnpin(b, a);
            d("WAWebSendPinMessageAction").sendPinInChatMsg(b, d("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL)["catch"](function (a) {
                d("WALogger").ERROR(k(), a)
            })
        }, e = n.jsx(d("WAWebUnpinnedIcon").UnpinnedIcon, {}), f = h._("__JHASH__XuVJ2Ajwezd__JHASH__")) : (a = function (a) {
            a.stopPropagation();
            a = new(d("WAWebPinnedMessagesUserJourneyLogger").PinnedMessagesUserJourneyLogger)(g);
            a.messageMenuClickPin(b);
            d("WAWebModalManager").ModalManager.open(n.jsx(d("WAWebPinMessageModal.react").PinMessageModal, {
                msg: b,
                logger: a
            }))
        }, e = n.jsx(d("WAWebPinned3Icon").Pinned3Icon, {}), f = h._("__JHASH___Vn1D1cUr8x__JHASH__"));
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: e,
            title: f,
            onClick: a
        }, f)
    }
    D.displayName = D.name + " [from " + f.id + "]";

    function E(a) {
        var b = a.msg;
        a = function (a) {
            a.stopPropagation(), d("WAWebFrontendMsgGetters").getIsUnsentMedia(b) ? d("WAWebModalManager").ModalManager.open(n.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                title: h._("__JHASH__3jedy_AkFol__JHASH__"),
                onOK: function () {
                    return d("WAWebModalManager").ModalManager.close()
                },
                okText: c("WAWebFbtCommon")("OK"),
                children: h._("__JHASH__eMwcRvhni12__JHASH__", [h._plural(1)])
            })) : d("WAWebModalManager").ModalManager.open(n.jsx(d("WAWebForwardMessageModalLoadable").ForwardMessageModalLoadable, {
                msgs: [d("WAWebStateUtils").unproxy(b)],
                onClose: function () {
                    return d("WAWebModalManager").ModalManager.close()
                }
            }), {
                transition: "modal-flow"
            })
        };
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: n.jsx(d("WAWebForwardIcon").ForwardIcon, {}),
            title: h._("__JHASH__yncEhAlcaY6__JHASH__"),
            onClick: a
        })
    }
    E.displayName = E.name + " [from " + f.id + "]";

    function F(a) {
        var b = a.msg;
        a = function () {
            void c("WAWebReplyToMsgChatAction")(b)
        };
        return n.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            testid: void 0,
            action: a,
            children: h._("__JHASH__dS67_Denh_O__JHASH__")
        })
    }
    F.displayName = F.name + " [from " + f.id + "]";

    function G(a) {
        var b = a.msg,
            e = function (a) {
                !a ? void d("WAWebSendSpamChatAction").sendMessageReport(b, d("WAWebSpamConstants").SpamFlow.MediaViewer) : void d("WAWebSendSpamChatAction").sendMessageReportBlock(b, d("WAWebSpamConstants").SpamFlow.MediaViewer), d("WAWebModalManager").ModalManager.close()
            };
        a = function () {
            var a;
            d("WAWebModalManager").ModalManager.open(n.jsx(c("WAWebMediaViewerReportSpamPopup.react"), {
                isBusiness: b.senderObj.isBusiness,
                isGroup: d("WAWebFrontendMsgGetters").getChat(b).isGroup,
                isBizBot3p: (a = (a = d("WAWebFrontendMsgGetters").getChat(b).contact.businessProfile) == null ? void 0 : a.isBizBot3p) != null ? a : !1,
                onReport: e,
                onCancel: function () {
                    return d("WAWebModalManager").ModalManager.close()
                },
                title: s(b)
            }))
        };
        return n.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            action: a,
            children: s(b)
        })
    }
    G.displayName = G.name + " [from " + f.id + "]";

    function H(a) {
        var b = a.msg,
            c = a.onClose;
        a = function (a) {
            c(), void d("WAPromiseDelays").delayMs(d("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION + 250).then(d("WAWebCmd").Cmd.msgInfoDrawer.bind(d("WAWebCmd").Cmd, d("WAWebStateUtils").unproxy(b)))
        };
        return n.jsx(d("WAWebDropdownItem.react").DropdownItem, {
            action: a,
            children: h._("__JHASH__6ZxqC6H3okB__JHASH__")
        })
    }
    H.displayName = H.name + " [from " + f.id + "]";

    function I(a) {
        var b = a.isMediaDownloadable,
            c = a.msg,
            d = a.msgIndexInAlbum,
            e = a.onClose,
            f = a.onViewOnceInfoClick,
            g = a.openReactionTray;
        a = a.sendReactionButtonRef;
        return c.isViewOnce ? n.jsx(K, {
            isMediaDownloadable: b,
            msg: c,
            onClose: e,
            onViewOnceInfoClick: f
        }) : d >= 0 ? n.jsx(t, {
            isMediaDownloadable: b,
            msg: c,
            onClose: e,
            openReactionTray: g,
            sendReactionButtonRef: a
        }) : n.jsx(u, {
            isMediaDownloadable: b,
            msg: c,
            onClose: e,
            openReactionTray: g,
            sendReactionButtonRef: a
        })
    }
    I.displayName = I.name + " [from " + f.id + "]";

    function J(a) {
        var b = a.isAlbumMedia,
            e = a.isMediaDownloadable,
            f = a.msg;
        a = a.onClose;
        var g = [],
            i = d("WAWebFrontendMsgGetters").getChat(f);
        (d("WAWebMsgReply").canPrivateReply(f) || d("WAWebMsgReply").canPrivateReplyInRestrictedGrp(f)) && g.push(n.jsx(F, {
            msg: f
        }, "private_reply"));
        b && (d("WAWebMsgGetters").getIsSentByMe(f) && g.push(n.jsx(H, {
            msg: f,
            onClose: a
        }, "dropdownMsgInfo")), g.push(n.jsx(v, {
            msg: f,
            type: q.Dropdown,
            onClose: a
        }, "dropdownGoToMsg"), n.jsx(z, {
            isMediaDownloadable: e,
            msg: f,
            type: q.Dropdown
        }, "dropdownDownload")));
        c("gkx")("26258") || g.push(n.jsx(w, {
            msg: f
        }));
        b = !i.isNewsletter && (f.isViewOnce || d("WAWebMsgActionCapability").canReportMsg(f) && d("WAWebMiscGatingUtils").messageLevelReportingEnabled());
        a = i.isNewsletter && d("WAWebMsgActionCapability").canReportMsg(f);
        a ? g.push(n.jsx(c("WAWebReportNewsletterPostSpamButton.react"), {
            msg: f
        }, "reportSpam")) : b && g.push(n.jsx(G, {
            msg: f
        }, "reportSpam"));
        d("WAWebMsgActionCapability").canReportToAdmin(f) && g.push(n.jsx(c("WAWebSendForAdminReviewButton.react"), {
            msg: f
        }, "report_to_admin"));
        return n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            icon: n.jsx(d("WAWebMenuIcon").MenuIcon, {}),
            title: h._("__JHASH__hskmX_lsgx4__JHASH__"),
            children: n.jsx(d("WAWebDropdown.react").Dropdown, {
                type: d("WAWebDropdown.react").MenuType.DropdownMenu,
                flipOnRTL: !0,
                dirX: d("WAWebDropdown.react").DirX.LEFT,
                children: g
            })
        })
    }
    J.displayName = J.name + " [from " + f.id + "]";

    function K(a) {
        var b = a.isMediaDownloadable,
            e = a.msg,
            f = a.onClose;
        a = a.onViewOnceInfoClick;
        return n.jsxs(n.Fragment, {
            children: [n.jsx(d("WAWebMenuBar.react").MenuBarItem, {
                icon: n.jsx(d("WAWebViewOnceIcon").ViewOnceIcon, {
                    className_DONOTUSE: c("WAWebMediaPanelHeader.scss").voIcon
                }),
                title: h._("__JHASH___aQZUFw2Yay__JHASH__"),
                onClick: a
            }), n.jsx(J, {
                isMediaDownloadable: b,
                isAlbumMedia: !1,
                msg: e,
                onClose: f
            })]
        })
    }
    K.displayName = K.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebMediaSticker.react", ["Promise", "WAWebFirstPartyStickerInfo.react", "WAWebFlex.react", "WAWebImg.react", "WAWebLottieSticker.react", "WAWebLottieStickersGatingUtils", "WAWebMediaUrlProvider", "WAWebMediaViewerStyles", "WAWebMediaZoomable.react", "WAWebNewsletterCollection", "WAWebNewsletterMembershipUtil", "WAWebStickerDetailsStickerPackInfo.react", "WAWebStickerLikeMsgPlaceholder.react", "WAWebStickerModel", "WAWebStickerUtils", "WAWebWamEnumWebcRmrReasonCode", "react", "stylex", "useMergeRefs", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j, k, l = k || c("react"),
        m = (j || (j = d("react"))).useRef,
        n = 376,
        o = {
            container: {
                width: "xh8yej3",
                height: "x5yr21d",
                $$css: !0
            }
        };
    e = l.forwardRef(a);

    function a(a, e) {
        var f = babelHelpers["extends"]({}, a),
            g = f.msg;
        a = d("useWAWebModelValues").useModelValues(f.mediaData, ["encFilehash", "directPath", "filehash", "mediaKey", "mediaKeyTimestamp", "mediaStage", "mimetype", "fullWidth", "fullHeight", "isFirstParty", "isAvatar", "stickerPackId", "stickerPackName", "stickerPackPublisher", "extractedLottieSticker"]);
        var j = m(null);
        e = c("useMergeRefs")(e, j);
        var k = function (a) {
                var b;
                (b = j.current) == null ? void 0 : b.onClick(a)
            },
            p = function () {
                return g ? g.downloadMedia({
                    downloadEvenIfExpensive: !1,
                    rmrReason: d("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                    isUserInitiated: !1
                }) : (h || (h = b("Promise"))).resolve()
            },
            q = c("WAWebNewsletterCollection").getActive(),
            r = d("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(q == null ? void 0 : q.newsletterMetadata);
        q = a.isFirstParty ? l.jsx(c("WAWebFirstPartyStickerInfo.react"), {
            stickerPackId: a.stickerPackId,
            onStickerPackView: f.onStickerPackView,
            stickerPackViewDelay: f.stickerPackViewDelay,
            showViewPackButton: q != null ? a.isAvatar !== !0 && r : a.isAvatar !== !0,
            sticker: new(d("WAWebStickerModel").StickerModel)({
                id: a.filehash,
                mimetype: a.mimetype,
                width: a.fullWidth,
                height: a.fullHeight,
                filehash: a.filehash,
                encFilehash: a.encFilehash,
                directPath: a.directPath,
                mediaKey: a.mediaKey,
                mediaKeyTimestamp: a.mediaKeyTimestamp
            })
        }) : l.jsx(d("WAWebStickerDetailsStickerPackInfo.react").StickerDetailsStickerPackInfo, {
            name: a.stickerPackName,
            publisher: a.stickerPackPublisher,
            theme: d("WAWebStickerDetailsStickerPackInfo.react").Theme.MediaViewer,
            sticker: new(d("WAWebStickerModel").StickerModel)({
                id: a.filehash,
                mimetype: a.mimetype,
                width: a.fullWidth,
                height: a.fullHeight,
                filehash: a.filehash,
                encFilehash: a.encFilehash,
                directPath: a.directPath,
                mediaKey: a.mediaKey,
                mediaKeyTimestamp: a.mediaKeyTimestamp
            })
        });
        r = l.jsx(c("WAWebMediaUrlProvider"), {
            mediaData: a,
            placeholderRenderer: function () {
                return l.jsx(c("WAWebStickerLikeMsgPlaceholder.react"), {
                    size: n
                })
            },
            downloadMedia: p,
            children: function (a) {
                return l.jsx(c("WAWebImg.react"), {
                    className: (i || (i = c("stylex")))(c("WAWebMediaViewerStyles").content),
                    onClick: k,
                    src: a,
                    onLoad: f.onLoad
                })
            }
        });
        d("WAWebStickerUtils").getStickerFileType(a.mimetype) === d("WAWebStickerUtils").StickerFileType.LOTTIE && (d("WAWebLottieStickersGatingUtils").isLottieStickerReceivingEnabled() ? r = l.jsx(c("WAWebLottieSticker.react"), {
            className: "",
            mediaData: a,
            startAnimation: !0,
            onClick: k,
            placeholderRenderer: function () {
                return null
            },
            downloadMedia: p
        }) : r = l.jsx(c("WAWebStickerLikeMsgPlaceholder.react"), {
            size: n
        }));
        return l.jsxs(d("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            xstyle: o.container,
            children: [l.jsx("div", {
                className: "xh8yej3 x5yr21d xlnrm6 xjkwb7i x1iymm2a xyw6214",
                "data-testid": void 0,
                children: l.jsx(c("WAWebMediaZoomable.react"), {
                    ref: e,
                    width: a.fullWidth,
                    height: a.fullHeight,
                    onZoomIn: f.onImgZoomIn,
                    msg: g,
                    children: r
                })
            }), q]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 98);
__d("WAWebMediaViewerMediaVideo.react", ["fbt", "WAWebAddOnBubbleType", "WAWebAddOnBubblesContainer.react", "WAWebAnnotation.react", "WAWebBlurredImage.react", "WAWebGetDisplayType", "WAWebMediaTypes", "WAWebMediaViewerStyles", "WAWebMsgGetters", "WAWebNoop", "WAWebObjectFit.react", "WAWebPipConst", "WAWebPipFloatingVideoPlayer.react", "WAWebPipMsgVideoPlayer.react", "WAWebReactionsUtils", "WAWebVideo.react", "WAWebWamEnumWebcRmrReasonCode", "isNonZeroNumber", "react", "stylex", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useEffect,
        n = b.useImperativeHandle,
        o = b.useMemo,
        p = b.useRef,
        q = b.useState;
    e = l.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.autoPlay,
            f = a.msg,
            g = a.onLoad,
            i = a.onClose,
            k = a.onLoadedData,
            t = a.startTime;
        t = t === void 0 ? 0 : t;
        var u = d("useWAWebModelValues").useModelValues(a.mediaData, ["mediaStage", "fullWidth", "fullHeight", "isGif", "isViewOnce", "preview", "renderableUrl", "streamable"]);
        a = q(!1);
        var v = a[0],
            w = a[1];
        a = q(!0);
        var x = a[0],
            y = a[1],
            z = p();
        a = o(function () {
            return (u.mediaStage === d("WAWebMediaTypes").MediaDataStage.RESOLVED || u.streamable && u.isStreamable()) && d("isNonZeroNumber").isNonZeroNumber(u.fullWidth) && d("isNonZeroNumber").isNonZeroNumber(u.fullHeight) ? r(u) : {
                width: 0,
                height: 0
            }
        }, [u]);
        m(function () {
            if (!u.isStreamable()) {
                void f.downloadMedia({
                    downloadEvenIfExpensive: !0,
                    rmrReason: d("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
                    isUserInitiated: !0
                });
                return function () {
                    f.mediaObject && f.cancelDownload()
                }
            }
        }, []);
        var A = function (a) {
            w(a)
        };
        n(b, function () {
            return {
                getContainerElement: function () {
                    return z.current
                },
                closingMedia: function () {
                    y(!1)
                }
            }
        });
        b = u.isGif;
        var B = u.mediaStage === d("WAWebMediaTypes").MediaDataStage.RESOLVED || u.streamable && u.isStreamable();
        B = B || f != null && f.isForcingRMR();
        var C = null,
            D = d("WAWebGetDisplayType").getDisplayType(f),
            E = d("WAWebAddOnBubbleType").AddOnBubbleType.MEDIA_VIEWER;
        f && d("WAWebReactionsUtils").shouldShowReactionBubble(f, E) && (C = l.jsx(c("WAWebAddOnBubblesContainer.react"), {
            isOutgoingMsg: d("WAWebMsgGetters").getIsSentByMe(f),
            displayType: D,
            bubbleType: E,
            parentIds: [f.id.toString()],
            displayReactionBubble: x
        }));
        if (B) {
            D = h._("__JHASH__bqPn8SMV9PB__JHASH__");
            var F;
            !v && (f == null ? void 0 : f.interactiveAnnotations) && f.interactiveAnnotations.length > 0 && (F = l.jsx(c("WAWebAnnotation.react"), {
                annotations: f.interactiveAnnotations
            }));
            b ? E = l.jsxs("div", {
                className: (j || (j = c("stylex")))(c("WAWebMediaViewerStyles").content),
                ref: z,
                "data-testid": void 0,
                children: [l.jsx(c("WAWebVideo.react"), {
                    src: u.renderableUrl,
                    onClick: s,
                    autoPlay: !0,
                    loop: !0,
                    onLoadedData: k,
                    children: D
                }), F]
            }) : E = l.jsx("div", {
                ref: z,
                className: (j || (j = c("stylex")))(c("WAWebMediaViewerStyles").content),
                onClick: s,
                "data-testid": void 0,
                children: l.jsx(d("WAWebPipMsgVideoPlayer.react").WrappedMsgVideoPlayer, {
                    msg: f,
                    mediaData: u,
                    startTime: t,
                    onClose: i,
                    onError: c("WAWebNoop"),
                    onFullscreenToggle: A,
                    autoPlay: e,
                    type: d("WAWebPipConst").PlayerType.MEDIA_VIEWER,
                    overlays: F,
                    noPip: f == null ? void 0 : f.isViewOnce,
                    onLoadedData: k
                })
            });
            return l.jsxs(c("WAWebObjectFit.react"), {
                type: "scaleDown",
                position: "relative",
                objectPosition: "relative",
                size: a,
                onObjectLoad: g,
                children: [E, C]
            })
        }
        return l.jsxs(c("WAWebObjectFit.react"), {
            type: "scaleDown",
            position: "relative",
            objectPosition: "relative",
            size: {
                width: u.fullWidth,
                height: u.fullHeight
            },
            children: [l.jsx(c("WAWebBlurredImage.react"), {
                altText: (x = f.caption) != null ? x : "",
                mediaData: u
            }), C]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;

    function r(a) {
        if (a.isGif) {
            var b = 330;
            return a.fullWidth >= b ? {
                width: a.fullWidth,
                height: a.fullHeight
            } : {
                width: b,
                height: a.fullHeight * b / a.fullWidth
            }
        }
        return a.fullWidth >= d("WAWebPipFloatingVideoPlayer.react").MIN_WIDTH ? {
            width: a.fullWidth,
            height: a.fullHeight
        } : {
            width: d("WAWebPipFloatingVideoPlayer.react").MIN_WIDTH,
            height: a.fullHeight
        }
    }

    function s(a) {
        a.stopPropagation()
    }
    g["default"] = b
}), 226);
__d("WAWebViewOnceSenderNuxIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "view-once-sender-nux";

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
        l = 168;
        m = 198;
        (e != null || f != null) && (l = e, m = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (n = h) != null ? n : "0 0 198 168",
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
                    d: "M182.166 57.7255C175.603 64.6681 166.307 69 156 69C139.711 69 125.949 58.1818 121.506 43.3383C112.644 40.1443 102.78 34.6399 86.1179 25.3418C84.3675 24.3651 82.5421 23.3465 80.635 22.2843C51.9895 6.3297 6.00593 19.7651 2.23678 73.9266C-0.243988 109.575 17.0718 134.232 39.9408 142.968C62.0404 151.411 110.667 158.989 162.477 140.97C190.944 131.069 198.637 111.677 196.725 89.4613C195.454 74.6999 189.899 64.4184 182.166 57.7255Z",
                    fill: "#CCEFEB"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M134.277 61.7099C125.603 55.1366 120 44.7226 120 33C120 29.0037 120.651 25.1594 121.853 21.5676L80.2307 15.7179C73.8904 14.8269 68.016 19.3544 67.11 25.8304L50.5682 144.067C49.6622 150.543 54.0676 156.515 60.4079 157.406L108.242 164.129C114.583 165.02 120.457 160.493 121.363 154.016L134.277 61.7099Z",
                    fill: "#42CBA5"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M122.943 18.7215L80.4885 12.755C73.9412 11.8348 67.8737 16.5197 66.9365 23.219L49.8245 145.531C48.8872 152.231 53.4351 158.407 59.9824 159.327L109.378 166.27C115.925 167.19 121.993 162.505 122.93 155.806L135.929 62.8902C135.129 62.3519 134.352 61.7824 133.599 61.1834L120.411 155.452C119.673 160.727 114.895 164.417 109.739 163.692L60.343 156.75C55.187 156.025 51.6056 151.161 52.3437 145.885L69.4557 23.573C70.1938 18.2974 74.9719 14.608 80.1279 15.3326L121.974 21.2137C122.266 20.3682 122.59 19.537 122.943 18.7215Z",
                    fill: "#316474"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M135.032 62.2669C125.93 55.7339 120 45.0594 120 33C120 27.0332 121.452 21.4055 124.021 16.4507L82.3684 10.5968C76.0897 9.71436 70.2654 14.2484 69.3594 20.7238L52.8193 138.948C51.9134 145.424 56.2689 151.388 62.5476 152.271L109.917 158.928C116.196 159.81 122.02 155.276 122.926 148.801L135.032 62.2669Z",
                    fill: "white"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M124.376 15.7826L80.8832 9.67008C74.3203 8.74772 68.2607 13.2841 67.3488 19.8023L50.6993 138.809C49.7874 145.327 54.3684 151.359 60.9313 152.281L110.445 159.24C117.008 160.162 123.067 155.626 123.979 149.108L136.032 62.959C135.229 62.4232 134.45 61.856 133.695 61.2591L121.454 148.753C120.736 153.886 115.964 157.458 110.796 156.732L61.2822 149.773C56.1139 149.047 52.5063 144.297 53.2245 139.164L69.874 20.1572C70.5921 15.0241 75.364 11.4517 80.5323 12.1781L123.186 18.1726C123.554 17.3594 123.951 16.5623 124.376 15.7826Z",
                    fill: "#316474"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M121.759 21.8546L119.225 21.5025L88.5269 17.2367L81.6788 16.2851C76.9838 15.6327 72.6359 18.9334 71.9674 23.6575L56.0988 135.806C55.4304 140.53 58.6946 144.888 63.3896 145.541L107.784 151.71C112.479 152.362 116.827 149.061 117.495 144.337L129.762 57.6491C123.708 51.2078 120 42.5372 120 33.0005C120 29.1102 120.617 25.364 121.759 21.8546Z",
                    fill: "#EEFEFA"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M131.411 59.2946L119.092 146.356C118.408 151.187 113.925 154.558 109.079 153.885L63.2521 147.516C58.4056 146.843 55.031 142.38 55.7146 137.549L71.9439 22.852C72.6275 18.0206 77.1105 14.6499 81.957 15.3233L122.084 20.8994C121.801 21.6938 121.545 22.501 121.316 23.32L81.6063 17.802C78.133 17.3193 74.9202 19.735 74.4302 23.1975L58.201 137.895C57.711 141.357 60.1295 144.555 63.6028 145.038L109.429 151.406C112.903 151.889 116.116 149.473 116.605 146.01L129.195 57.0327C129.901 57.8186 130.64 58.5733 131.411 59.2946Z",
                    fill: "#316474"
                }), j.jsx("path", {
                    d: "M76.7691 93.7377C76.4214 96.1974 78.1329 98.4706 80.5929 98.8163L111.741 103.194C114.202 103.54 116.481 101.824 116.83 99.3627L119.073 83.5207C119.421 81.0608 117.709 78.787 115.249 78.4413L73.6586 72.5961C73.183 72.5293 72.895 73.106 73.2346 73.4451L76.5525 76.7581C77.9966 78.2 78.6778 80.2374 78.3919 82.2594L76.7691 93.7377Z",
                    fill: "white",
                    stroke: "#00B39B",
                    strokeWidth: 3
                }), j.jsx("path", {
                    d: "M107.679 93.8443L87.8798 91.0618C87.0681 90.9477 86.7049 90.084 87.2785 89.5941L91.8745 85.6237C92.3348 85.2215 93.1268 85.3328 93.4584 85.8463L96.5327 90.5489L102.507 85.389C102.968 84.9869 103.76 85.0982 104.091 85.6116L108.661 92.5992C109.078 93.2283 108.491 93.9584 107.679 93.8443Z",
                    fill: "white"
                }), j.jsx("path", {
                    d: "M96.7971 88.6689L94.5062 85.1645C93.7607 84.0152 92.0887 83.7802 91.0553 84.6795L86.4635 88.6463C85.7435 89.2636 85.5901 90.1864 85.9046 90.9467C86.205 91.6728 86.8893 92.1848 87.7059 92.2996L107.505 95.0822C108.321 95.1969 109.12 94.8933 109.609 94.2782C110.121 93.6341 110.228 92.7048 109.706 91.913C109.705 91.9118 109.705 91.9106 109.704 91.9094L105.141 84.9334C105.14 84.9321 105.14 84.9309 105.139 84.9296C104.393 83.7805 102.721 83.5456 101.688 84.4449L96.7971 88.6689Z",
                    stroke: "#42CBA5",
                    strokeOpacity: .5,
                    strokeWidth: 2.5
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M81 22.999C80.4477 22.999 80 23.4467 80 23.999C80 24.5513 80.4477 24.999 81 24.999C81.5523 24.999 82 24.5513 82 23.999C82 23.4467 81.5523 22.999 81 22.999ZM78 23.999C78 22.3422 79.3431 20.999 81 20.999C82.6569 20.999 84 22.3422 84 23.999C84 25.6559 82.6569 26.999 81 26.999C79.3431 26.999 78 25.6559 78 23.999Z",
                    fill: "#316474"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M155.502 62C156.019 62 156.532 61.9866 157.043 61.9603C158.421 61.8892 159.482 60.7138 159.41 59.3349C159.339 57.956 158.164 56.8958 156.785 56.967C156.36 56.9889 155.933 57 155.502 57V62ZM155.502 8C155.933 8.00003 156.36 8.01114 156.785 8.03304C158.164 8.10415 159.339 7.044 159.41 5.66512C159.482 4.28624 158.421 3.11079 157.043 3.03968C156.532 3.01336 156.019 3.00003 155.502 3V8ZM168.898 6.21114C167.668 5.58332 166.162 6.07124 165.534 7.30096C164.906 8.53067 165.394 10.0365 166.624 10.6643C167.388 11.0543 168.128 11.4832 168.844 11.9485C170.001 12.7016 171.549 12.3739 172.303 11.2167C173.056 10.0594 172.728 8.51077 171.571 7.75771C170.71 7.19753 169.818 6.68094 168.898 6.21114ZM180.243 16.4297C179.49 15.2724 177.941 14.9447 176.784 15.6978C175.626 16.4509 175.299 17.9995 176.052 19.1568C176.517 19.8719 176.946 20.6126 177.336 21.3764C177.964 22.6061 179.47 23.094 180.699 22.4662C181.929 21.8384 182.417 20.3325 181.789 19.1028C181.319 18.1826 180.803 17.2905 180.243 16.4297ZM184.961 30.9578C184.89 29.5789 183.714 28.5188 182.335 28.5899C180.956 28.661 179.896 29.8365 179.967 31.2153C179.989 31.6406 180 32.0689 180 32.5C180 32.9311 179.989 33.3594 179.967 33.7847C179.896 35.1635 180.956 36.339 182.335 36.4101C183.714 36.4812 184.89 35.4211 184.961 34.0422C184.987 33.5312 185 33.0171 185 32.5C185 31.9829 184.987 31.4688 184.961 30.9578ZM181.789 45.8972C182.417 44.6675 181.929 43.1616 180.699 42.5338C179.47 41.906 177.964 42.3939 177.336 43.6236C176.946 44.3874 176.517 45.1281 176.052 45.8432C175.299 47.0005 175.626 48.5491 176.784 49.3022C177.941 50.0553 179.49 49.7276 180.243 48.5703C180.803 47.7095 181.319 46.8174 181.789 45.8972ZM171.571 57.2423C172.728 56.4892 173.056 54.9406 172.303 53.7833C171.549 52.6261 170.001 52.2984 168.844 53.0515C168.128 53.5168 167.388 53.9457 166.624 54.3357C165.394 54.9635 164.906 56.4693 165.534 57.699C166.162 58.9288 167.668 59.4167 168.898 58.7889C169.818 58.3191 170.71 57.8025 171.571 57.2423Z",
                    fill: "#00B39B"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M155.501 3C155.5 3 155.5 3 155.5 3C139.208 3 126 16.2076 126 32.5C126 48.7924 139.208 62 155.5 62C155.5 62 155.5 62 155.501 62V57C155.5 57 155.5 57 155.5 57C141.969 57 131 46.031 131 32.5C131 18.969 141.969 8 155.5 8C155.5 8 155.5 8 155.501 8V3Z",
                    fill: "#00B39B"
                }), j.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M151.57 18.499C149.875 18.499 148.501 19.8727 148.501 21.5672C148.501 23.2617 149.875 24.6354 151.57 24.6354H154.502V42.499C154.502 44.1559 155.845 45.499 157.502 45.499C159.158 45.499 160.502 44.1559 160.502 42.499V21.499C160.502 19.8422 159.158 18.499 157.502 18.499C157.49 18.499 157.479 18.4991 157.468 18.4992C157.456 18.4991 157.445 18.499 157.433 18.499H151.57Z",
                    fill: "#00B39B"
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ViewOnceSenderNuxIcon = a
}), 98);
__d("WAWebViewOnceNux.react", ["fbt", "WAWebConfirmPopup.react", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFlex.react", "WAWebFlexItem.react", "WAWebViewOnceSenderNuxIcon", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            graphic: {
                marginBottom: "xod5an3",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.onOkClick;
        return j.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: b,
            cancelText: h._("__JHASH__RR1bpeluTQm__JHASH__"),
            onCancel: function () {
                d("WAWebExternalLink.react").openExternalLink(d("WAWebFaqUrl").getViewOnceFaqUrl())
            },
            children: j.jsxs(d("WAWebFlex.react").FlexColumn, {
                children: [j.jsx(c("WAWebFlexItem.react"), {
                    xstyle: k.graphic,
                    align: "center",
                    children: j.jsx(d("WAWebViewOnceSenderNuxIcon").ViewOnceSenderNuxIcon, {
                        width: 130 * 1.5,
                        height: 118 * 1.5
                    })
                }), j.jsx(d("WAWebWDSText.react").WDSTextLarge, {
                    children: a.isPhoto ? h._("__JHASH__UWhvxP3VPGL__JHASH__") : h._("__JHASH__jx0k4EZR9wm__JHASH__")
                }), j.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                    children: a.isPhoto ? h._("__JHASH__MMJlhsBK-hI__JHASH__") : h._("__JHASH__emXrN7wWDpw__JHASH__")
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebMediaViewerModal.react", ["fbt", "WALogger", "WATypeUtils", "WAWebChevronButton.react", "WAWebClassnames", "WAWebEmojiText.react", "WAWebFocusTracer", "WAWebFormatConfiguration", "WAWebFrontendMsgGetters", "WAWebGroupMetadataContext", "WAWebKeyboardHotKeys.react", "WAWebMarkPlayedMsgAction", "WAWebMediaAudio.react", "WAWebMediaData", "WAWebMediaImage.react", "WAWebMediaPanelHeader.react", "WAWebMediaStage.react", "WAWebMediaSticker.react", "WAWebMediaTypes", "WAWebMediaViewerConstants", "WAWebMediaViewerMediaVideo.react", "WAWebMediaViewerModal.scss", "WAWebModalManager", "WAWebMsgGetters", "WAWebMsgLinks", "WAWebMsgPhoneNumbers", "WAWebNux", "WAWebRound.react", "WAWebText_DONOTUSE.react", "WAWebTimeSpentLoggingNavigation", "WAWebUimUie.react", "WAWebUnstyledButton.react", "WAWebVelocityAnimate", "WAWebViewOnceNux.react", "react", "useWAWebModelValues", "useWAWebMsgValues", "useWAWebNux", "useWAWebThrottledCallback"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["type: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["MediaViewerModal: Closed"]);
        l = function () {
            return a
        };
        return a
    }

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["MediaViewerModal: Opened"]);
        m = function () {
            return a
        };
        return a
    }
    b = j || d("react");
    var n = i || (i = c("react")),
        o = b.useEffect,
        p = b.useRef,
        q = b.useState,
        r = {
            captionReadMoreBtn: {
                position: "x10l6tqk",
                end: "x1memqgq",
                left: null,
                right: null,
                bottom: "x1ey2m1c",
                paddingTop: "x1nn3v0j",
                paddingEnd: "x4uap5",
                paddingBottom: "x18d9i69",
                paddingStart: "xurb0ha",
                backgroundColor: "x16ocsfn",
                borderTopStartRadius: "x1lcm9me",
                borderTopEndRadius: "x1yr5g0i",
                borderBottomEndRadius: "xrt01vj",
                borderBottomStartRadius: "x10y3i5r",
                boxShadow: "xg79jdd",
                $$css: !0
            },
            captionReadMoreBtnExpanded: {
                visibility: "xlshs6z",
                $$css: !0
            },
            captionReadMoreBtnZoomed: {
                visibility: "x1yn0zye",
                opacity: "xvdu4fi",
                $$css: !0
            }
        };

    function s(a) {
        a == null ? void 0 : a.stopPropagation()
    }

    function a(a) {
        var b, e = a.msg,
            f = a.onImageLoad,
            g = a.isAnimatingThumbs,
            i = a.onImgZoomIn,
            j = a.onExitAnimation,
            s = a.onBack;
        b = d("useWAWebMsgValues").useMsgValues(a.msg.id, [(b = d("WAWebMsgGetters")).getId, b.getStar, d("WAWebFrontendMsgGetters").getIsUnsentMedia, b.getIsViewOnce, b.getIsStickerMsg, b.getHasThumbList, b.getCaption, b.getInteractiveAnnotations, b.getType, b.getMessageSecret]);
        var u = b[0];
        b[1];
        b[2];
        var v = b[3],
            aa = b[4],
            w = b[5],
            x = b[6];
        b[7];
        b[8];
        b[9];
        b = d("WAWebFrontendMsgGetters").getChat(e);
        var y = d("useWAWebModelValues").useModelValues(a.mediaData, ["mediaStage", "type", "isGif"]),
            z = p(null),
            A = p(null),
            B = p(null),
            C = p(null),
            D = p(),
            E = p(!1),
            F = p(!1),
            G = p(!1),
            H = c("useWAWebNux")(d("WAWebNux").NUX.EPHEMERAL_VIEW_ONCE_RECEIVER),
            I = H[0],
            ba = H[1],
            J = v && I;
        H = q(function () {
            return y.mediaStage === d("WAWebMediaTypes").MediaDataStage.RESOLVED && a.getZoomNode ? a.getZoomNode(u) : null
        });
        var ca = H[0];
        I = q(!1);
        var K = I[0],
            da = I[1];
        H = q(!1);
        var ea = H[0],
            L = H[1],
            M = [c("WAWebMediaData").TYPE.IMAGE, c("WAWebMediaData").TYPE.STICKER].includes(y.type);
        I = q(M);
        var N = I[0],
            fa = I[1];
        H = q(!a.isAnimatingThumbs && !N);
        var O = H[0],
            ga = H[1];
        I = q(!1);
        var P = I[0],
            ha = I[1];
        H = q(!1);
        I = H[0];
        var Q = H[1],
            R = function () {
                var a = n.jsx(c("WAWebViewOnceNux.react"), {
                    isPhoto: y.type === c("WAWebMediaData").TYPE.IMAGE,
                    onOkClick: function () {
                        ba(), d("WAWebModalManager").ModalManager.close()
                    }
                });
                d("WAWebModalManager").ModalManager.open(a)
            },
            S = c("useWAWebThrottledCallback")(function (a, b) {
                if (ea) return;
                var e = z.current;
                if (!e) return;
                var f = e.getInsideContainer();
                if (!f || !(f instanceof HTMLElement)) return;
                var g = e.getOutsideContainer();
                if (!g || !(g instanceof HTMLElement)) return;
                e = e.getTranslatePosition(g, a, b);
                g = e.translateX;
                a = e.translateY;
                c("WAWebVelocityAnimate")(f, "stop");
                c("WAWebVelocityAnimate")(f, {
                    translateX: g,
                    translateY: a,
                    scale: d("WAWebMediaViewerConstants").ZOOM_IN_FACTOR
                }, {
                    duration: 0
                })
            });
        o(function () {
            d("WALogger").LOG(m());
            J && R();
            c("WAWebFocusTracer").focus(C.current);
            return function () {
                d("WALogger").LOG(l()), S.cancel()
            }
        }, []);
        H = function () {
            R()
        };
        var ia = function (a, b) {
                var e = b.getBoundingClientRect(),
                    f = a.getBoundingClientRect(),
                    g = f.top - e.top;
                f = f.left - e.left;
                e = a.clientWidth / b.clientWidth;
                var h = (b.clientHeight - a.clientHeight) / 2;
                a = (b.clientWidth - a.clientWidth) / 2;
                g -= h;
                f -= a;
                c("WAWebVelocityAnimate")(b, {
                    opacity: [1, 0],
                    translateX: [0, f],
                    translateY: [0, g],
                    scale: [1, e]
                }, {
                    duration: d("WAWebMediaViewerConstants").ANIMATION_DURATION,
                    easing: [.1, .82, .25, 1]
                }).then(function () {
                    return fa(!1)
                });
                a = (h = B.current) == null ? void 0 : h.getElement();
                a && c("WAWebVelocityAnimate")(a, {
                    opacity: [1, 0]
                }, {
                    duration: d("WAWebMediaViewerConstants").ANIMATION_DURATION
                })
            },
            ja = function () {
                v && d("WAWebMarkPlayedMsgAction").canMarkPlayed(e) && d("WAWebMarkPlayedMsgAction").markPlayed(e)
            },
            T = function (a) {
                ja();
                f && f();
                var b = ca;
                a = a.target;
                if (!b || !a) return;
                if (!(a instanceof HTMLElement)) return;
                if (G.current) return;
                G.current = !0;
                ia(b, a)
            },
            U = function () {
                if (E.current) return;
                E.current = !0;
                d("WATypeUtils").isFunction(j) && j();
                var b = a.getZoomNode && a.getZoomNode(u);
                if (!b) return s();
                var e;
                if (M && z.current) {
                    var f;
                    e = z.current.getInsideContainer();
                    (f = z.current) == null ? void 0 : f.closingMediaZoomable()
                } else if (y.isGif && A.current) {
                    e = A.current.getContainerElement();
                    (f = A.current) == null ? void 0 : f.closingMedia()
                }
                if (!e) return s();
                f = e;
                var g = e.getBoundingClientRect(),
                    h = b.getBoundingClientRect(),
                    i = h.top - g.top;
                h = h.left - g.left;
                g = b.clientWidth / f.clientWidth;
                var k = (f.clientHeight - b.clientHeight) / 2;
                f = (f.clientWidth - b.clientWidth) / 2;
                i -= k;
                h -= f;
                c("WAWebVelocityAnimate")(e, {
                    translateX: [h, 0],
                    translateY: [i, 0],
                    scale: [g, 1]
                }, {
                    duration: d("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
                    easing: [.1, .82, .25, 1]
                }).then(function () {
                    s()
                });
                k = (b = B.current) == null ? void 0 : b.getElement();
                k && c("WAWebVelocityAnimate")(k, {
                    opacity: [0, 1]
                }, {
                    duration: d("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
                    easing: [.1, .82, .25, 1]
                })
            },
            V = function (b) {
                var a = z.current;
                b && a && (F.current = a.getHeightOverflow() > 0 || a.getWidthOverflow() > 0);
                da(b);
                i(b)
            },
            ka = function (b) {
                S.cancel();
                var a = z.current;
                a && K && a.onClick(b)
            },
            la = function (a) {
                S(a.pageX, a.pageY)
            },
            ma = function (a) {
                var b;
                b = (b = z.current) == null ? void 0 : b.getInsideContainer();
                b = Boolean(b == null ? void 0 : b.contains(document.activeElement));
                if (g || N || !b) return;
                S.cancel();
                b = z.current;
                b != null && b.onKeyboardZoom(a)
            },
            na = function () {
                Q(!0)
            },
            oa = function () {
                Q(!1)
            },
            W = function () {
                L(!0)
            },
            X = function () {
                L(!1)
            },
            Y = function (a) {
                a.stopPropagation(), ha(!P)
            };
        o(function () {
            !O && !g && !N && ga(!0)
        }, [g, O, N]);
        d("WAWebTimeSpentLoggingNavigation").useTsNavigation({
            surface: "media-viewer"
        });
        var Z;
        switch (y.type) {
            case c("WAWebMediaData").TYPE.IMAGE:
                Z = n.jsx(c("WAWebMediaImage.react"), {
                    msg: e,
                    mediaData: y,
                    onLoad: T,
                    onImgZoomIn: V,
                    onAnnotationTooltipDisplay: W,
                    onAnnotationTooltipDismiss: X,
                    preventDownload: v,
                    ref: z
                }, u.toString());
                break;
            case c("WAWebMediaData").TYPE.STICKER:
                Z = n.jsx(c("WAWebMediaSticker.react"), {
                    msg: e,
                    mediaData: y,
                    onLoad: T,
                    onImgZoomIn: V,
                    onStickerPackView: U,
                    stickerPackViewDelay: d("WAWebMediaViewerConstants").CLOSE_ANIMATION_DURATION,
                    ref: z
                }, u.toString());
                break;
            case c("WAWebMediaData").TYPE.VIDEO:
                Z = n.jsx(c("WAWebMediaViewerMediaVideo.react"), {
                    autoPlay: !J,
                    msg: e,
                    mediaData: y,
                    onLoadedData: y.isGif ? T : ja,
                    startTime: a.startTime,
                    onClose: U,
                    ref: A
                }, u.toString());
                break;
            case c("WAWebMediaData").TYPE.AUDIO:
                Z = n.jsx(c("WAWebMediaAudio.react"), {
                    mediaData: y,
                    msg: e
                }, u.toString());
                break;
            default:
                d("WALogger").ERROR(k(), y.type).sendLogs("MediaViewerModal: unexpected media type")
        }
        var $;
        W = a.msgIndexInAlbum >= 0 && a.albumSize >= 0;
        if (x || W) {
            var pa;
            W && (pa = h._("__JHASH__q22HoNGNZoh__JHASH__", [h._param("number", a.msgIndexInAlbum + 1), h._param("totalNumber", a.albumSize)]));
            X = d("WAWebFormatConfiguration").Conversation({
                mentions: e.mentionMap(),
                groupMentions: e.groupMentionMap(),
                phoneNumbers: d("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsg(e),
                links: d("WAWebMsgLinks").getLinksFromMsg(e),
                trusted: !0,
                fromMe: u.fromMe,
                fromChatWid: u.remote,
                parseLists: !0,
                parseQuotes: !0,
                parseInlineCode: !0
            });
            V = y.type === c("WAWebMediaData").TYPE.IMAGE && !v;
            T = !O && (y.isGif || V);
            $ = n.jsxs(n.Fragment, {
                children: [n.jsxs("p", {
                    className: d("WAWebClassnames").classnamesConvertMeToStylexPlease((W = {}, W[c("WAWebMediaViewerModal.scss").captionWrapperExpandable] = D.current === !0, W[c("WAWebMediaViewerModal.scss").captionWrapper] = !0, W)),
                    onClick: D.current ? Y : void 0,
                    title: D.current ? h._("__JHASH__YmkFxppzHPq__JHASH__") : void 0,
                    "aria-hidden": P || void 0,
                    children: [n.jsx(d("WAWebEmojiText.react").EmojiText, {
                        className: d("WAWebClassnames").classnamesConvertMeToStylexPlease((V = {}, V[c("WAWebMediaViewerModal.scss").captionHidden] = T, V[c("WAWebMediaViewerModal.scss").expanded] = P, V[c("WAWebMediaViewerModal.scss").mediaCaption] = !0, V)),
                        formatters: X,
                        ref: function (a) {
                            B.current = a
                        },
                        text: x || pa
                    }), D.current && n.jsx(c("WAWebUnstyledButton.react"), {
                        xstyle: [r.captionReadMoreBtn, P && r.captionReadMoreBtnExpanded, K && r.captionReadMoreBtnZoomed],
                        onClick: Y,
                        children: n.jsx(d("WAWebText_DONOTUSE.react").TextSpan, {
                            children: h._("__JHASH__YmkFxppzHPq__JHASH__")
                        })
                    })]
                }), P && n.jsx("p", {
                    className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebMediaViewerModal.scss").captionWrapper, c("WAWebMediaViewerModal.scss").captionWrapperExpandable, c("WAWebMediaViewerModal.scss").captionExpanded),
                    onClick: Y,
                    children: n.jsx(d("WAWebEmojiText.react").EmojiText, {
                        className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebMediaViewerModal.scss").mediaCaption, c("WAWebMediaViewerModal.scss").mediaCaptionExpanded),
                        formatters: X,
                        text: x
                    })
                })]
            })
        }
        T = d("WAWebClassnames").classnamesConvertMeToStylexPlease((W = {}, W[c("WAWebMediaViewerModal.scss").mediaWithCaption] = !!$, W[c("WAWebMediaViewerModal.scss").media] = !0, W));
        D = d("WAWebClassnames").classnamesConvertMeToStylexPlease((V = {}, V[c("WAWebMediaViewerModal.scss").noThumbnails] = !w, V[c("WAWebMediaViewerModal.scss").mediaViewerAnimate] = N || g, V[c("WAWebMediaViewerModal.scss").cursorZoomOut] = K, V.overlay = !0, V[c("WAWebMediaViewerModal.scss").mediaViewer] = !0, V));
        Y = K && F.current ? la : null;
        X = K ? ka : null;
        x = K ? null : U;
        x != null && v && (x = na);
        return n.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "MediaViewer",
            escapable: !0,
            requestDismiss: U,
            children: n.jsx(d("WAWebKeyboardHotKeys.react").HotKeys, {
                handlers: {
                    space: ma,
                    enter: ma
                },
                ref: C,
                children: n.jsxs("div", {
                    className: D,
                    "data-animate-media-viewer": !0,
                    "data-testid": void 0,
                    onClick: X,
                    onMouseMove: Y,
                    children: [n.jsx(c("WAWebMediaPanelHeader.react"), {
                        isHighlightClose: I,
                        msg: e,
                        mediaData: y,
                        onClose: U,
                        onHightlightCloseEnd: oa,
                        onViewOnceInfoClick: H,
                        msgIndexInAlbum: a.msgIndexInAlbum
                    }), n.jsx("div", {
                        className: d("WAWebClassnames").classnamesConvertMeToStylexPlease((W = {}, W[c("WAWebMediaViewerModal.scss").sticker] = aa, W[c("WAWebMediaViewerModal.scss").mediaContent] = !0, W)),
                        onClick: x,
                        children: n.jsx(t, {
                            hasNavigationButtons: w,
                            onNext: a.onNext,
                            onPrev: a.onPrev,
                            imgZoomed: K,
                            children: n.jsxs("div", {
                                className: T,
                                children: [n.jsx(c("WAWebMediaStage.react"), {
                                    msg: e,
                                    mediaData: y
                                }), Z, n.jsx(c("WAWebGroupMetadataContext").Provider, {
                                    value: b.groupMetadata,
                                    children: $
                                })]
                            })
                        })
                    })]
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function t(a) {
        var b, e = a.children,
            f = a.hasNavigationButtons,
            g = a.imgZoomed,
            h = a.onNext;
        a = a.onPrev;
        return n.jsxs(n.Fragment, {
            children: [f && n.jsx("div", {
                className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebMediaViewerModal.scss").btnMediaPrev),
                children: n.jsx("div", {
                    onClick: a ? null : s,
                    children: n.jsx(d("WAWebChevronButton.react").ChevronButton, {
                        type: d("WAWebChevronButton.react").ButtonType.Prev,
                        onClick: (b = a) != null ? b : void 0,
                        onKeyDown: (b = a) != null ? b : void 0,
                        disabled: !a || g,
                        theme: d("WAWebRound.react").RoundTheme.Default,
                        testid: void 0
                    })
                })
            }), e, f && n.jsx("div", {
                className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebMediaViewerModal.scss").btnMediaNext),
                children: n.jsx("div", {
                    onClick: a ? null : s,
                    children: n.jsx(d("WAWebChevronButton.react").ChevronButton, {
                        type: d("WAWebChevronButton.react").ButtonType.Next,
                        onClick: (b = h) != null ? b : void 0,
                        onKeyDown: (e = h) != null ? e : void 0,
                        disabled: !h || g,
                        theme: d("WAWebRound.react").RoundTheme.Default,
                        testid: void 0
                    })
                })
            })]
        })
    }
    t.displayName = t.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebThumbList.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        thumbsContainer: "_alip",
        scrollContainer: "_aliq",
        viewerThumbs: "_alir",
        mediaThumb: "_alin",
        thumbPadding: "_alio"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebThumbList.react", ["fbt", "WALogger", "WAMapsShallowEqual", "WAWebFocusTracer", "WAWebMediaThumb.react", "WAWebMsgGetters", "WAWebSpinner.react", "WAWebThumbList.scss", "react", "useWAWebPrevious", "useWAWebThrottledCallback"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["MediaViewerFlow: attempted to render a msg without mediaData: ", ""]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        m = e.useEffect,
        n = e.useImperativeHandle,
        o = e.useRef,
        p = e.useState;
    e = l.forwardRef(a);

    function a(a, b) {
        var e = a.activeMsg,
            f = a.highlightedMsgIds,
            g = a.mediaMsgs,
            h = a.msgIdToPreferPreview,
            i = a.onSelectThumb,
            j = a.onSetActiveThumb,
            m = o({}),
            p = function () {
                var a = e.id.toString();
                a = m.current[a];
                a && c("WAWebFocusTracer").focus(a)
            };
        n(b, function () {
            return {
                focusOnActive: p
            }
        });
        var q = f != null && f.size > 0 && f.has(e.id.toString()),
            r = [],
            s = function (a, b) {
                m.current[b] = a
            };
        g.forEach(function (a) {
            if (a.mediaData == null) {
                var b = e;
                d("WALogger").WARN(k(), JSON.stringify({
                    type: a.type,
                    isMedia: d("WAWebMsgGetters").getIsMedia(a),
                    startMsgType: b.type,
                    startMsgIsMedia: d("WAWebMsgGetters").getIsMedia(b)
                })).verbose();
                return
            }
            b = q && f && !f.has(a.id.toString()) ? "viewerFlowTransparent" : "viewerFlow";
            r.push(l.jsx(d("WAWebMediaThumb.react").MediaThumb, {
                theme: b,
                active: a === e,
                msg: a,
                containerRef: function (b) {
                    s(b, a.id.toString()), a === e && j(b)
                },
                onClick: function () {
                    i(a)
                },
                preferPreview: !!h.get(a.id.toString()),
                showTooltip: d("WAWebMsgGetters").getIsGroupMsg(a),
                tabIndex: a === e ? 0 : -1
            }, "media-" + a.id.id))
        });
        r.push(l.jsx("div", {
            className: c("WAWebThumbList.scss").mediaThumb,
            children: g.queryMediaAfter ? l.jsx(d("WAWebSpinner.react").Spinner, {
                stroke: 6,
                size: 24
            }) : null
        }, "spinner-right"));
        r.unshift(l.jsx("div", {
            className: c("WAWebThumbList.scss").mediaThumb,
            children: g.queryMediaBefore ? l.jsx(d("WAWebSpinner.react").Spinner, {
                stroke: 6,
                size: 24
            }) : null
        }, "spinner-left"));
        r.push(l.jsx("div", {
            className: c("WAWebThumbList.scss").thumbPadding
        }, "padding-right"));
        r.unshift(l.jsx("div", {
            className: c("WAWebThumbList.scss").thumbPadding
        }, "padding-left"));
        return l.jsx(l.Fragment, {
            children: r
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    var q = e;

    function b(a) {
        var b = a.mediaMsgs,
            d = a.onScroll,
            e = a.activeMsg,
            f = o({}),
            g = o(null),
            i = o(null),
            j = c("useWAWebPrevious")(e.id),
            k = function () {
                var a;
                (a = g.current) == null ? void 0 : a.focusOnActive()
            };
        m(function () {
            var a;
            ((a = i.current) == null ? void 0 : a.contains(document.activeElement)) && !e.id.equals(j) && k()
        }, [e, j]);
        var n = function (a) {
                a = f.current[a];
                if (!a) return !1;
                a = a.getBoundingClientRect();
                a = (a.left + a.right) / 2;
                a = a > -1 * window.innerWidth && a < 2 * window.innerWidth;
                return !a
            },
            r = function () {
                var a = new Map();
                b.forEach(function (b) {
                    b = b.id.toString();
                    a.set(b, n(b))
                });
                return a
            },
            s = p(r),
            t = s[0],
            u = s[1],
            v = c("useWAWebThrottledCallback")(function () {
                var a = r();
                c("WAMapsShallowEqual")(t, a) || u(a)
            }, 100);
        s = function (a) {
            v(), d(a)
        };
        return l.jsx("div", {
            className: c("WAWebThumbList.scss").thumbsContainer,
            ref: a.setRefThumbsContainer,
            children: l.jsx("div", {
                ref: i,
                className: c("WAWebThumbList.scss").scrollContainer,
                dir: "ltr",
                children: l.jsx("div", {
                    role: "list",
                    "aria-label": h._("__JHASH__Rek6YqkEzt8__JHASH__"),
                    onScroll: s,
                    className: c("WAWebThumbList.scss").viewerThumbs,
                    ref: a.setRefThumbs,
                    children: l.jsx(q, {
                        ref: g,
                        mediaMsgs: b,
                        highlightedMsgIds: a.highlightedMsgIds,
                        activeMsg: a.activeMsg,
                        onSetActiveThumb: a.onSetActiveThumb,
                        onSelectThumb: a.onSelectThumb,
                        msgIdToPreferPreview: t
                    })
                })
            })
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}), 226);
__d("WAWebMediaViewerFlow.react", ["Keys", "Promise", "WALogger", "WANullthrows", "WAWebCarouselMsgUtils", "WAWebChatMedia", "WAWebFrontendConstants", "WAWebFrontendMsgGetters", "WAWebL10N", "WAWebMediaTypes", "WAWebMediaViewerModal.react", "WAWebMiscGatingUtils", "WAWebModalManager", "WAWebMsgGetters", "WAWebMsgType", "WAWebSuspendedGroupUtils", "WAWebThumbList.react", "WAWebUiActionWamEvent", "WAWebVelocityAnimate", "WAWebWamEnumUiActionType", "WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE", "WAWebWamPrivateStatsUtils", "asyncToGeneratorRuntime", "react", "useForceUpdate", "useLazyRef", "useWAWebListener", "useWAWebPrevious", "useWAWebStableCallback", "useWAWebThrottledCallback", "useWAWebUiIdle", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g) {
    var h, i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["query media msgs error: "]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["query media msgs error: "]);
        l = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var m = i || (i = c("react")),
        n = e.useEffect,
        o = e.useRef,
        p = e.useState;

    function a(a) {
        var e = a.msg,
            f = a.highlightedMsgIds,
            g = c("useWAWebUnmountSignal")(),
            i = c("useWAWebUiIdle")(),
            j = c("useForceUpdate")(),
            r = c("useLazyRef")(function () {
                return e.type === d("WAWebMsgType").MSG_TYPE.IMAGE ? new(d("WAWebUiActionWamEvent").UiActionWamEvent)({
                    uiActionType: d("WAWebWamEnumUiActionType").UI_ACTION_TYPE.IMAGE_OPEN,
                    uiActionPreloaded: e.mediaData.mediaStage === d("WAWebMediaTypes").MediaDataStage.RESOLVED
                }) : null
            }),
            s = c("useLazyRef")(function () {
                var a = e;
                if (e.isCarouselCard) {
                    var b;
                    a = (b = d("WAWebCarouselMsgUtils").getParentMsgFromCarouselCard(e)) != null ? b : e
                }
                return d("WAWebChatMedia").constructMediaMsgs(d("WAWebFrontendMsgGetters").getChat(a), a)
            }),
            t = s.current.length,
            u = c("useWAWebPrevious")(t),
            v = o(null),
            w = o(),
            x = o(),
            y = o(null),
            z = o(null),
            A = o(null),
            B = p(e),
            C = B[0],
            D = B[1];
        B = p(!1);
        var E = B[0],
            F = B[1];
        B = p(q(C));
        var G = B[0],
            H = B[1],
            I = c("useWAWebPrevious")(C),
            J = function (a) {
                a === void 0 && (a = !1);
                var b = z.current,
                    d = A.current,
                    e = y.current;
                if (!b || !d || !e) return;
                var f = 0;
                e instanceof HTMLElement && (f = e.clientWidth / 2 - b.clientWidth / 2);
                c("WAWebVelocityAnimate")(d, "stop");
                b = 0;
                a && (b = 300);
                c("WAWebVelocityAnimate")(e, "scroll", {
                    duration: b,
                    container: d,
                    offset: f,
                    axis: "x",
                    easing: [.1, .82, .25, 1]
                })
            };
        n(function () {
            var a = function (a) {
                if (!a) return;
                c("WAWebVelocityAnimate")(a, {
                    opacity: [1, 0],
                    translateY: ["0%", "100%"]
                }, {
                    duration: 300,
                    delay: 100,
                    easing: [.1, .82, .25, 1]
                }).then(function () {
                    if (g.aborted) return;
                    H(!1)
                })
            };
            J();
            q(e) && a(z.current)
        }, []);
        n(function () {
            var a;
            t > ((a = u) != null ? a : 0) && J()
        });
        var K = function (a) {
            i(function () {
                s.current.loadMoreAroundIfNeeded(a)
            }), D(a)
        };
        B = function () {
            var a = -1;
            if (!f || !C) return a;
            var b = C.id.toString();
            if (!f.has(b)) return a;
            var c = 0;
            f.forEach(function (d) {
                d === b && (a = c), c++
            });
            return a
        };
        var L = function a(b) {
                b && b.stopPropagation();
                if (E) return;
                b = C;
                if (!b) return;
                b = s.current.getAfter(b);
                if (b) {
                    K(b);
                    return
                }
                if (!s.current.hasMediaAfter) return;
                if (w.current) return;
                w.current = s.current.queryMedia({
                    chat: d("WAWebFrontendMsgGetters").getChat(e),
                    msg: e,
                    direction: "after"
                }).then(function (b) {
                    if (g.aborted) return;
                    typeof b.length === "number" && b.length > 0 && C === e && a()
                })["catch"](function (a) {
                    d("WALogger").WARN(l()).devConsole(a)
                })["finally"](function () {
                    w.current = null
                })
            },
            M = function a(b) {
                b && b.stopPropagation();
                if (E) return;
                b = C;
                if (!b) return;
                b = s.current.getBefore(b);
                if (b) {
                    K(b);
                    return
                }
                if (!s.current.hasMediaBefore) return;
                if (x.current) return;
                x.current = s.current.queryMedia({
                    chat: d("WAWebFrontendMsgGetters").getChat(e),
                    msg: e,
                    direction: "before"
                }).then(function (b) {
                    if (g.aborted) return;
                    typeof b.length === "number" && b.length > 0 && C === e && a()
                })["catch"](function (a) {
                    d("WALogger").WARN(k()).devConsole(a)
                })["finally"](function () {
                    x.current = null
                })
            },
            N = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    if (a.defaultPrevented) return;
                    if (C && !q(C)) return;
                    var e = (yield new(h || (h = b("Promise")))(function (a) {
                        d("WAWebModalManager").ModalManager.exists(a)
                    }));
                    if (e) return;
                    e = c("WAWebL10N").isRTL();
                    a.keyCode === c("Keys").LEFT ? e ? L() : M() : a.keyCode === c("Keys").RIGHT && (e ? M() : L())
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }(),
            O = null;
        e.type === d("WAWebMsgType").MSG_TYPE.IMAGE && (O = function () {
            var a = r.current;
            if (a) {
                var b;
                Object.assign(a, d("WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE").getGroupCountMetricsFromChatWid((b = d("WAWebFrontendMsgGetters").getChat(e)) == null ? void 0 : b.id));
                a.markUiActionT();
                a.commit();
                r.current = null
            }
            d("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents()
        });
        var P = function (a) {
                F(a)
            },
            Q = function () {
                d("WAWebModalManager").ModalManager.closeMedia()
            },
            R = function () {
                var a = function (a) {
                    if (!a) return;
                    c("WAWebVelocityAnimate")(a, {
                        opacity: [0, 1],
                        translateY: ["100%", "0%"]
                    }, {
                        duration: 300,
                        easing: [.1, .82, .25, 1]
                    })
                };
                q(e) && a(z.current)
            },
            S = c("useWAWebStableCallback")(function () {
                D(null), Q()
            });
        d("useWAWebListener").useListener(q(C) ? null : C, "revoked", S);
        S = q(C) ? s.current : null;
        d("useWAWebListener").useListener(S, "remove", function (a, b, d) {
            b = s.current;
            var e = C;
            if (b.includes(a) || e != null && e.id != null && e.id.toString() !== a.id.toString()) {
                j();
                return
            }
            e = d.index;
            b.length === 0 ? Q() : b.length === e ? K(c("WANullthrows")(b.at(e - 1))) : K(c("WANullthrows")(b.at(e)))
        });
        d("useWAWebListener").useListener(S, "reset", function () {
            Q()
        });
        d("useWAWebListener").useListener(S, "query_media_after", function () {
            j()
        });
        d("useWAWebListener").useListener(S, "query_media_before", function () {
            var a = A.current;
            if (!a) return;
            v.current = a.scrollWidth;
            a instanceof HTMLElement && j()
        });
        d("useWAWebListener").useListener(window, "keydown", N);
        n(function () {
            i(function () {
                if (!C) return;
                s.current.loadMoreAroundIfNeeded(C)
            })
        }, [C, s, i]);
        n(function () {
            if (I !== C) J(!0);
            else {
                var a = A.current;
                if (!a || v.current == null || v.current === 0) return;
                a instanceof HTMLElement && (a.scrollLeft += a.scrollWidth - v.current);
                v.current = null
            }
        }, [C, I]);
        S = function (a, b, e) {
            if (b.length === 0) return;
            if (e == null) return;
            if (b.hasMediaBefore && e < a.clientWidth) {
                var f = c("WANullthrows")(b.head());
                i(function () {
                    b.queryMedia({
                        chat: d("WAWebFrontendMsgGetters").getChat(f),
                        msg: f
                    }), j()
                })
            }
            if (b.hasMediaAfter && e + d("WAWebFrontendConstants").SCROLL_FUDGE > a.scrollWidth - 2 * a.clientWidth) {
                var g = c("WANullthrows")(b.last());
                i(function () {
                    b.queryMedia({
                        chat: d("WAWebFrontendMsgGetters").getChat(g),
                        msg: g,
                        direction: "after"
                    }), j()
                })
            }
        };
        var T = c("useWAWebThrottledCallback")(S, 100);
        N = function (a) {
            T(a.currentTarget, s.current, a.currentTarget.scrollLeft)
        };
        if (!C) return null;
        if (d("WAWebFrontendMsgGetters").getChat(e).isSuspendedOrTerminated() && d("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()) {
            d("WAWebSuspendedGroupUtils").openSuspendedGroupMediaDownloadFailureModal();
            return
        }
        S = s.current;
        var U = S.last();
        U = S.hasMediaAfter || C !== U ? L : null;
        var V = S.head();
        S = S.hasMediaBefore || C !== V ? M : null;
        return m.jsxs("div", {
            className: E ? "img-zoomed-in" : null,
            children: [d("WAWebMsgGetters").getHasThumbList(C) && m.jsx(c("WAWebThumbList.react"), {
                activeMsg: C,
                mediaMsgs: s.current,
                highlightedMsgIds: a.highlightedMsgIds,
                onSelectThumb: K,
                onSetActiveThumb: function (a) {
                    y.current = a
                },
                onScroll: N,
                setRefThumbsContainer: function (a) {
                    z.current = a
                },
                setRefThumbs: function (a) {
                    A.current = a
                }
            }), m.jsx(c("WAWebMediaViewerModal.react"), {
                msg: C,
                mediaData: C.mediaData,
                onBack: Q,
                onExitAnimation: R,
                onNext: U,
                onPrev: S,
                onImgZoomIn: P,
                getZoomNode: a.getZoomNode,
                startTime: a.startTime,
                isAnimatingThumbs: G,
                onImageLoad: O,
                msgIndexInAlbum: B(),
                albumSize: ((V = a.highlightedMsgIds) == null ? void 0 : V.size) || 0
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function q(a) {
        return !a ? !0 : d("WAWebMsgGetters").getHasThumbList(a)
    }
    g["default"] = a
}), 98);