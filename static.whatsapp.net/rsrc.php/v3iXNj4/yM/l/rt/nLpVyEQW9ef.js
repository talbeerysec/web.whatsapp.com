; /*FB_PKG_DELIM*/

__d("WAWebAdvertisePill.react", ["fbt", "WAWebAdCreationLogger", "WAWebBusinessAdvertiseOutlineIcon", "WAWebChatlistUtils", "WAWebListFilterButton.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect;

    function a(a) {
        var b = a.adCreationUrlInput,
            c = a.ctaText,
            e = a.lwiEntryPoint,
            f = b.activeAccountInfo;
        l(function () {
            d("WAWebAdCreationLogger").logAdCreationImpression(e, f !== "not-linked" && f.hasFacebookPage)
        }, [f, e]);
        a = k.jsx(d("WAWebBusinessAdvertiseOutlineIcon").BusinessAdvertiseOutlineIcon, {});
        c = (c = c) != null ? c : h._("__JHASH__YAeGQGnI_Bg__JHASH__");
        var g = function () {
            d("WAWebChatlistUtils").handleAdCreation({
                adCreationUrlInput: b,
                lwiEntryPoint: e
            })
        };
        return k.jsx(d("WAWebListFilterButton.react").ListFilterButton, {
            label: c,
            selected: !1,
            onClick: g,
            startIcon: a,
            theme: "drawer-header"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.AdvertisePill = a
}), 226);
__d("WAWebProductCollectionLogEvents", ["WAWebBizCatalogUtils", "WAWebCatalogBizWamEvent", "WAWebProductCatalogContext", "WAWebProductCatalogEventUtils", "WAWebWamEnumCatalogBizAction"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        var b = a.catalogOwnerJid,
            c = a.catalogContext;
        a = a.collectionId;
        a = d("WAWebBizCatalogUtils").getProductStatsInFetched(b, a);
        var e = a == null ? void 0 : a.productIndex;
        a = a == null ? void 0 : a.collectionIndex;
        d("WAWebProductCatalogEventUtils").logCatalogViewOrBizEvent(babelHelpers["extends"]({
            isOwner: d("WAWebProductCatalogEventUtils").isCatalogOwner({
                catalogOwnerJid: b
            }),
            productIndex: e,
            collectionIndex: a
        }, d("WAWebProductCatalogContext").toDataForCatalogViewEvents(c), {
            catalogOwnerJid: b
        }))
    }

    function b(a) {
        var b = a.catalogContext,
            c = a.collectionId,
            e = a.addedCount;
        a = a.removedCount;
        e > 0 && new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_ASSIGN_ITEMS,
            catalogEntryPoint: b.entryPoint,
            catalogSessionId: b.session.toString(),
            productCount: e,
            collectionId: c
        }).commit();
        a > 0 && new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_UNASSIGN_ITEMS,
            catalogEntryPoint: b.entryPoint,
            catalogSessionId: b.session.toString(),
            productCount: a,
            collectionId: c
        }).commit()
    }

    function c(a) {
        var b = a.catalogContext;
        a = a.collectionId;
        new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
            catalogEntryPoint: b.entryPoint,
            catalogSessionId: b.session.toString(),
            collectionId: a
        }).commit()
    }

    function e(a) {
        var b = a.catalogContext;
        a = a.collectionId;
        new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_DELETED,
            catalogEntryPoint: b.entryPoint,
            catalogSessionId: b.session.toString(),
            collectionId: a
        }).commit()
    }

    function f(a) {
        new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_MENU_COLLECTIONS_CLICK,
            catalogEntryPoint: a.entryPoint,
            catalogSessionId: a.session.toString()
        }).commit()
    }

    function h(a) {
        var b = a.catalogContext;
        a.collectionId;
        a = a.productCount;
        new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATED,
            catalogEntryPoint: b.entryPoint,
            catalogSessionId: b.session.toString(),
            productCount: a
        }).commit()
    }

    function i(a) {
        new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_CREATE_CLICKED,
            catalogEntryPoint: a.entryPoint,
            catalogSessionId: a.session.toString()
        }).commit()
    }

    function j(a) {
        var b = a.catalogContext;
        a = a.movesCount;
        new(d("WAWebCatalogBizWamEvent").CatalogBizWamEvent)({
            catalogBizAction: d("WAWebWamEnumCatalogBizAction").CATALOG_BIZ_ACTION.ACTION_COLLECTION_CHANGE_ORDER,
            catalogEntryPoint: b.entryPoint,
            catalogSessionId: b.session.toString(),
            productCount: a
        }).commit()
    }
    g.logCollectionSeeAllView = a;
    g.logCollectionItemsAssignment = b;
    g.logCollectionDeleted = c;
    g.logCollectionRenamed = e;
    g.logCollectionMenuClicked = f;
    g.logCollectionCreated = h;
    g.logCollectionCreateClicked = i;
    g.logCollectionReorder = j
}), 98);
__d("WAWebManageActions", ["fbt", "Promise", "WAFilteredCatch", "WALogger", "WAQplTypes", "WAWebBackendErrors", "WAWebBizProductCatalogAction", "WAWebBizProductCatalogBridge", "WAWebConfirmPopup.react", "WAWebFbtCommon", "WAWebHttpErrors", "WAWebModalManager", "WAWebProductCatalogLogEvents", "WAWebProductCollection", "WAWebProductCollectionLogEvents", "WAWebProductCollectionsJob", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebToast.react", "WAWebToastManager", "WAWebUIRefreshGatingUtils", "asyncToGeneratorRuntime", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Failed to save collection, error: ", ""]);
        k = function () {
            return a
        };
        return a
    }

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Failed to delete collection, error: ", ""]);
        l = function () {
            return a
        };
        return a
    }
    var m = j || c("react");

    function n(a, b, c) {
        return o.apply(this, arguments)
    }

    function o() {
        o = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
            try {
                yield d("WAWebBizProductCatalogAction").deleteProducts([b.id.toString()]);
                d("WAWebProductCatalogLogEvents").logDeleteProductSuccess(b, 1, c);
                a.productCollection.evictImagesFromCache(b.id.toString());
                a.productCollection.remove(b.id.toString());
                a.collections && a.collections.forEach(function (a) {
                    return a.productCollection.remove(b.id.toString())
                });
                return !0
            } catch (a) {
                return d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function (a) {
                    d("WAWebProductCatalogLogEvents").logDeleteProductFailed(b, 1, c, a.statusCode);
                    d("WAWebToastManager").ToastManager.open(m.jsx(d("WAWebToast.react").Toast, {
                        msg: h._("__JHASH__lKTFa1zLHxY__JHASH__"),
                        id: d("WAWebToast.react").genId("catalog_delete_product_failed")
                    }));
                    return !1
                })(a)
            }
        });
        return o.apply(this, arguments)
    }

    function a(a, e, f, g) {
        d("WAWebProductCatalogLogEvents").logDeleteProductClick(e, 1, f);
        return new(i || (i = b("Promise")))(function (b, i) {
            d("WAWebModalManager").ModalManager.open(m.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                title: h._("__JHASH__43ujlX2T67a__JHASH__"),
                okText: c("WAWebFbtCommon")("OK"),
                okButtonType: d("WAWebUIRefreshGatingUtils").modalRefreshEnabled() ? "solidWarning" : void 0,
                cancelText: h._("__JHASH__JomY4EcHzcJ__JHASH__"),
                onOK: function () {
                    d("WAWebModalManager").ModalManager.close(), d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, {
                        annotations: {
                            string: {
                                EntryPoint: g
                            }
                        }
                    }), n(a, e, f).then(function (a) {
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, d("WAQplTypes").QuickLogActionType.SUCCESS), b(a)
                    })["catch"](function (a) {
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, d("WAQplTypes").QuickLogActionType.FAIL), i(a)
                    })
                },
                onCancel: function () {
                    d("WAWebModalManager").ModalManager.close(), b(!1)
                },
                children: m.jsx("div", {
                    children: h._("__JHASH__umCtDPkLjxh__JHASH__")
                })
            }))
        })
    }

    function p(a, b) {
        return q.apply(this, arguments)
    }

    function q() {
        q = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            yield d("WAWebBizProductCatalogBridge").productVisibilitySet([{
                productId: b.id.toString(),
                isHidden: !b.isHidden
            }]);
            b.isHidden = !b.isHidden;
            a = [a.productCollection].concat((a.collections || []).map(function (a) {
                return a.productCollection
            }));
            a.forEach(function (a) {
                a = a.get(b.id);
                a && (a.isHidden = b.isHidden)
            })
        });
        return q.apply(this, arguments)
    }

    function e(a, e, f, g) {
        var j = e.id.toString(),
            k = !e.isHidden;
        k ? d("WAWebProductCatalogLogEvents").logCatalogProductHideClick(j, f) : d("WAWebProductCatalogLogEvents").logCatalogProductShowClick(j, f);
        return new(i || (i = b("Promise")))(function (b, i) {
            var l = e.isHidden ? h._("__JHASH__pmgInfnzzHY__JHASH__") : h._("__JHASH__KKc3TwsJ3wL__JHASH__");
            d("WAWebModalManager").ModalManager.open(m.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                okText: c("WAWebFbtCommon")("OK"),
                cancelText: h._("__JHASH__JomY4EcHzcJ__JHASH__"),
                onOK: function () {
                    d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, {
                        annotations: {
                            string: {
                                EntryPoint: g
                            }
                        }
                    }), d("WAWebModalManager").ModalManager.close(), p(a, e).then(function () {
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, d("WAQplTypes").QuickLogActionType.SUCCESS), k ? d("WAWebProductCatalogLogEvents").logCatalogProductHideSuccess(j, f) : d("WAWebProductCatalogLogEvents").logCatalogProductShowSuccess(j, f), b(!0)
                    })["catch"](function (a) {
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, d("WAQplTypes").QuickLogActionType.FAIL), k ? d("WAWebProductCatalogLogEvents").logCatalogProductHideFailed(j, f) : d("WAWebProductCatalogLogEvents").logCatalogProductShowFailed(j, f), i(a)
                    })
                },
                onCancel: function () {
                    d("WAWebModalManager").ModalManager.close(), k ? d("WAWebProductCatalogLogEvents").logCatalogProductHideCancelled(j, f) : d("WAWebProductCatalogLogEvents").logCatalogProductShowCancelled(j, f), b(!1)
                },
                children: m.jsx("div", {
                    children: l
                })
            }))
        })
    }

    function r(a, b, c) {
        return s.apply(this, arguments)
    }

    function s() {
        s = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b, c) {
            yield d("WAWebProductCollectionsJob").deleteCollection(b.id.toString(), c.session.sessionId.toString()), a.collections.remove(b.id.toString()), d("WAWebProductCollectionLogEvents").logCollectionDeleted({
                catalogContext: c,
                collectionId: b.id
            })
        });
        return s.apply(this, arguments)
    }

    function f(a, b, e) {
        d("WAWebModalManager").ModalManager.open(m.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            title: h._("__JHASH__6h_CHDzhzbv__JHASH__"),
            okText: c("WAWebFbtCommon")("OK"),
            cancelText: h._("__JHASH__JomY4EcHzcJ__JHASH__"),
            onOK: function () {
                d("WAWebModalManager").ModalManager.close(), r(a, b, e)["catch"](function (a) {
                    return d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function (a) {
                        d("WALogger").ERROR(l(), a).verbose().devConsole(a).sendLogs("Deleteing collection failed");
                        d("WAWebToastManager").ToastManager.open(m.jsx(d("WAWebToast.react").Toast, {
                            msg: h._("__JHASH__quCShKbQDJa__JHASH__"),
                            id: d("WAWebToast.react").genId("catalog_delete_product_failed")
                        }));
                        return !1
                    })(a)
                })
            },
            onCancel: function () {
                d("WAWebModalManager").ModalManager.close()
            },
            children: m.jsx("div", {
                children: h._("__JHASH__n2d2S5Q4TT-__JHASH__")
            })
        }))
    }

    function t(a, b, c, e, f, g) {
        var i;
        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerPoint(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_start");
        b ? i = d("WAWebProductCollectionsJob").editCollection(b.id.toString() || "", c === b.name ? void 0 : c, !1, e.map(function (a) {
            return a.id.toString()
        }), f.map(function (a) {
            return a.id.toString()
        }), g.session.toString()).then(function (g) {
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerPoint(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end");
            b.name = c;
            b.reviewStatus = g.reviewStatus;
            a.collections.replaceId(b.id, g.id);
            (e.length !== 0 || f.length !== 0) && (b.productCollection.reset(), b.afterCursor = void 0, a.collections.reset(), a.collections.afterCursor = "");
            return !0
        }) : i = d("WAWebProductCollectionsJob").createCollection(c, e.map(function (a) {
            return a.id.toString()
        }), g.session.toString()).then(function (b) {
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerPoint(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_EDIT, "datasource_end");
            d("WAWebProductCollectionLogEvents").logCollectionCreated({
                catalogContext: g,
                collectionId: b.id,
                productCount: e.length
            });
            a.collections.reset();
            a.collections.afterCursor = "";
            return !0
        });
        return i["catch"](function (a) {
            var b = function (a) {
                    d("WAWebToastManager").ToastManager.open(m.jsx(d("WAWebToast.react").Toast, {
                        msg: a,
                        id: d("WAWebToast.react").genId("catalog_save_collection_failed")
                    }))
                },
                c = h._("__JHASH__33STlnnH5LM__JHASH__");
            if (a.text === "not-acceptable") {
                a.fieldName === "products" && a.fieldReason === "duplicate" && (c = h._("__JHASH__g6W7uYpHWQ5__JHASH__"));
                a.fieldName === "collection" && a.fieldReason === "empty" && (c = h._("__JHASH__fk-e_-Fg1T8__JHASH__"));
                b(c);
                return !1
            }
            d("WALogger").ERROR(k(), a).verbose().devConsole(a).sendLogs("Saving collection failed");
            b(c);
            throw a
        })
    }

    function u(a, b) {
        return v.apply(this, arguments)
    }

    function v() {
        v = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, b) {
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerPoint(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_start"), yield d("WAWebProductCollectionsJob").appealCollection(a.id.toString(), b), a.set({
                canAppeal: !1,
                reviewStatus: d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING
            }), d("WAWebQplQuickPerformanceLoggerModule").QPL.markerPoint(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, "datasource_end")
        });
        return v.apply(this, arguments)
    }
    var w = {
            OUT_OF_SYNC: {
                getTitle: function () {
                    return h._("__JHASH__O5Rs_SsTvGw__JHASH__")
                },
                getDescription: function () {
                    return h._("__JHASH__E_ErGPWdCyT__JHASH__")
                },
                getOkText: function () {
                    return h._("__JHASH__lYGLL-09qoM__JHASH__")
                }
            },
            SERVER_ERROR: {
                getTitle: function () {
                    return h._("__JHASH__BkksXwVgEry__JHASH__")
                },
                getDescription: function () {
                    return h._("__JHASH__SQtvM5_bqPz__JHASH__")
                },
                getOkText: function () {
                    return h._("__JHASH__ysa8BCIqQHx__JHASH__")
                }
            },
            HTTP_NETWORK_ERROR: {
                getTitle: function () {
                    return h._("__JHASH__kYgQsgvmoeX__JHASH__")
                },
                getDescription: function () {
                    return h._("__JHASH__qHHLYQg1Riq__JHASH__")
                },
                getOkText: function () {
                    return h._("__JHASH__JfCGs9A3j6m__JHASH__")
                }
            }
        },
        x = function (a) {
            if (a instanceof d("WAWebHttpErrors").HttpNetworkError) return w.HTTP_NETWORK_ERROR;
            return a instanceof d("WAWebProductCollectionsJob").CollectionReorderError ? w.OUT_OF_SYNC : w.SERVER_ERROR
        };

    function y(a, b) {
        return z.apply(this, arguments)
    }

    function z() {
        z = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a, c) {
            try {
                var e = (yield d("WAWebProductCollectionsJob").reorderCollection(a));
                e && d("WAWebProductCollectionLogEvents").logCollectionReorder({
                    catalogContext: c,
                    movesCount: a.length
                });
                return e
            } catch (a) {
                var f = a instanceof d("WAWebHttpErrors").HttpNetworkError;
                c = x(a);
                var g = c.getTitle,
                    h = c.getDescription,
                    j = c.getOkText;
                return new(i || (i = b("Promise")))(function (b, c) {
                    d("WAWebModalManager").ModalManager.open(m.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                        title: g(),
                        okText: j(),
                        onOK: function () {
                            d("WAWebModalManager").ModalManager.close(), f ? c(a) : b(!1)
                        },
                        children: m.jsx("div", {
                            children: h()
                        })
                    }), {
                        blockClose: !0
                    })
                })
            }
        });
        return z.apply(this, arguments)
    }
    g.handleProductDelete = a;
    g.handleProductVisibilityChange = e;
    g.handleCollectionDelete = f;
    g.handleCollectionSave = t;
    g.handleCollectionAppeal = u;
    g.handleCollectionReorder = y
}), 226);
__d("WAWebBizAppealCollectionPopup.react", ["fbt", "WAFilteredCatch", "WAQplTypes", "WAWebBackendErrors", "WAWebConfirmPopup.react", "WAWebConstantsDeprecated", "WAWebExternalLink.react", "WAWebManageActions", "WAWebModalManager", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebRichTextField.react", "WAWebText_DONOTUSE.react", "WAWebToast.react", "WAWebToastManager", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useState;

    function a(a) {
        var b = a.collection;
        a = l(!1);
        var e = a[0],
            f = a[1];
        a = l(!1);
        var g = a[0],
            i = a[1];
        a = l("");
        var j = a[0],
            m = a[1],
            n = function (a) {
                m(a)
            };
        a = function () {
            f(!0);
            var a = !0;
            d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL);
            d("WAWebManageActions").handleCollectionAppeal(b, j).then(function () {
                f(!1), i(!0), a = !1, d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, d("WAQplTypes").QuickLogActionType.SUCCESS)
            })["catch"](d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function () {
                d("WAWebToastManager").ToastManager.open(k.jsx(d("WAWebToast.react").Toast, {
                    msg: h._("__JHASH__6cm9BItiZMo__JHASH__"),
                    id: d("WAWebToast.react").genId("catalog_collection_appeal_submission_failed")
                })), f(!1)
            }))["finally"](function () {
                a && d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_APPEAL, d("WAQplTypes").QuickLogActionType.FAIL)
            })
        };
        var o = function () {
            d("WAWebModalManager").ModalManager.close()
        };
        if (g) return k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            title: h._("__JHASH__yn39gBBeGDR__JHASH__"),
            onOK: o,
            children: k.jsx(d("WAWebText_DONOTUSE.react").TextDiv, {
                children: h._("__JHASH__vwH1pAwAFBR__JHASH__")
            })
        });
        g = j.length < 1 || e;
        return k.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            title: h._("__JHASH__yn39gBBeGDR__JHASH__"),
            onOK: a,
            onCancel: o,
            okDisabled: g,
            children: k.jsxs("form", {
                children: [k.jsx(d("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    placeholder: h._("__JHASH__XtG0Kjm2i60__JHASH__"),
                    onChange: function (a) {
                        a = a.text;
                        return n(a)
                    },
                    value: j,
                    maxLength: 1e3
                }), k.jsx(d("WAWebExternalLink.react").ExternalLink, {
                    href: c("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
                    children: h._("__JHASH__cnb8_wnCqe1__JHASH__")
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebTextMessageModal.react", ["WAWebComposeBoxPopupPanel.react", "WAWebConstantsDeprecated", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebEmojiText.react", "WAWebKeyboardHotKeys.react", "WAWebMediaLinkPreview.react", "WAWebModal.react", "WAWebRichTextField.react", "WAWebRound.react", "WAWebSendIcon", "WAWebUimUie.react", "react", "useWAWebLinkPreview"], (function (a, b, c, d, e, f, g) {
    var h, i, j = i || c("react"),
        k = (h || (h = d("react"))).useState;
    b = j.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.defaultText,
            f = a.title,
            g = a.onSend;
        a = a.onBack;
        e = k(e);
        var h = e[0],
            i = e[1];
        e = d("useWAWebLinkPreview").findFirstWebLink(h);
        e = d("useWAWebLinkPreview").useLinkPreview(e);
        var l = e.linkPreview;
        e = e.clearLinkPreview;
        var m = function (a) {
                a = a.text;
                i(a)
            },
            n = function () {
                if (!h.length) return;
                g(h, l)
            };
        f = f ? j.jsx(d("WAWebEmojiText.react").EmojiText, {
            text: f,
            direction: "auto",
            titlify: !0,
            ellipsify: !0
        }) : null;
        var o = l || {},
            p = o.title,
            q = o.matchedText,
            r = o.description;
        o = o.thumbnail;
        e = l ? j.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "ComposeBoxLinkPreview",
            escapable: !0,
            requestDismiss: e,
            children: j.jsx(c("WAWebComposeBoxPopupPanel.react"), {
                onOmit: e,
                children: j.jsx(c("WAWebMediaLinkPreview.react"), {
                    title: p,
                    compose: !0,
                    matchedText: q,
                    description: r,
                    thumbnailJpeg: o,
                    isLoading: !1
                })
            })
        }) : null;
        return j.jsx(d("WAWebModal.react").Modal, {
            ref: b,
            type: d("WAWebModal.react").ModalTheme.Box,
            children: j.jsxs(c("WAWebDrawer.react"), {
                children: [j.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                    type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
                    onBack: a,
                    children: f
                }), j.jsx(c("WAWebDrawerBody.react"), {
                    children: j.jsxs(d("WAWebKeyboardHotKeys.react").HotKeys, {
                        className: "x78zum5 xdt5ytf x1egiwwb xs9asl8 x6ikm8r x10wlt62 x1bmpntp",
                        children: [j.jsx("div", {
                            className: "x1iyjqo2 x9desvi x11eofan xs9asl8 x12wi22r xw2csxc x1odjw0f x1bmpntp",
                            children: j.jsx(d("WAWebRichTextField.react").RichTextField, {
                                testid: void 0,
                                value: h,
                                maxLength: c("WAWebConstantsDeprecated").MAX_TXT_MSG_SIZE,
                                onChange: m,
                                emojiBtnPosition: "side",
                                multiline: !0,
                                spellCheck: !0,
                                showRemaining: !0,
                                focusOnMount: !0,
                                theme: "small",
                                textFormatEnabled: !0
                            })
                        }), e]
                    })
                }), j.jsx("div", {
                    className: "x1n2onr6 xa1v5g2 x1x0gksc x11doyns",
                    children: j.jsx("div", {
                        className: "x10l6tqk x1a87ojn x3h4tne",
                        children: j.jsx(d("WAWebRound.react").Round, {
                            large: !0,
                            onClick: n,
                            children: j.jsx(d("WAWebSendIcon").SendIcon, {
                                directional: !0
                            })
                        })
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 98);
__d("WAWebSendTextFlow.react", ["fbt", "$InternalEnum", "WATimeUtils", "WAWebBlockContactAction", "WAWebCmd", "WAWebComposeBoxActions", "WAWebDrawerManager", "WAWebFrontendConstants", "WAWebSelectModal.react", "WAWebSelectModalFooter.react", "WAWebSendTextMsgChatAction", "WAWebServerPropConstants", "WAWebTextMessageModal.react", "WAWebWid", "asyncToGeneratorRuntime", "react", "useWAWebFlow"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useRef,
        m = b("$InternalEnum").Mirrored(["Select", "TextMessage"]);

    function a(a) {
        var e = a.onSend,
            f = a.origin,
            g = a.text;
        a = a.title;
        var i = d("useWAWebFlow").useFlow(m.Select),
            j = i[0],
            n = i[1],
            o = l([]),
            p = l([]),
            q = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    a.isUser && a.contact.isContactBlocked && (yield d("WAWebBlockContactAction").unblockContact(a.contact))
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }();
        if (n.step == null) return null;
        var r;
        switch (n.step) {
            case m.Select:
                var s, t = function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b, a) {
                        yield q(b), b.active ? d("WAWebComposeBoxActions").ComposeBoxActions.paste(b, a) : (b.setComposeContents({
                            text: a,
                            timestamp: d("WATimeUtils").unixTime()
                        }), d("WAWebCmd").Cmd.openChatFromUnread(b).then(function (a) {
                            a && d("WAWebComposeBoxActions").ComposeBoxActions.focus(b)
                        }))
                    });
                    return function (b, c) {
                        return a.apply(this, arguments)
                    }
                }();
                i = function () {
                    var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                        p.current = a;
                        if (a.length === 1) {
                            a = a[0];
                            yield t(a, g);
                            n.end();
                            window.innerWidth <= d("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH && d("WAWebDrawerManager").DrawerManager.closeDrawerRight()
                        } else n.push(m.TextMessage);
                        e && e()
                    });
                    return function (b) {
                        return a.apply(this, arguments)
                    }
                }();
                var u = function () {
                        return o.current
                    },
                    v = function (a, b, c) {
                        o.current = c
                    };
                r = k.jsx(d("WAWebSelectModal.react").SelectModal, {
                    title: (s = a) != null ? s : h._("__JHASH__Pz11_y6jv6u__JHASH__"),
                    tsNavigationData: c("WAWebWid").isNewsletter(f) ? {
                        surface: "channel-forward",
                        extras: {
                            channelWid: f
                        }
                    } : void 0,
                    listType: d("WAWebSelectModal.react").ListType.ChatSelectModal,
                    getInitialItems: u,
                    maxItems: d("WAWebServerPropConstants").MULTICAST_LIMIT_GLOBAL,
                    onConfirm: i,
                    onCancel: function () {
                        return n.end()
                    },
                    onSelectionChanged: v,
                    singleSelectionFooterType: d("WAWebSelectModalFooter.react").FooterType.NEXT,
                    multipleSelectionFooterType: d("WAWebSelectModalFooter.react").FooterType.NEXT
                });
                break;
            case m.TextMessage:
                var w = function (c, a, e) {
                    c.forEach(function () {
                        var c = b("asyncToGeneratorRuntime").asyncToGenerator(function* (b) {
                            yield q(b), d("WAWebCmd").Cmd.once("ui_idle", function () {
                                d("WAWebSendTextMsgChatAction").sendTextMsgToChat(b, a, {
                                    linkPreview: e
                                })
                            })
                        });
                        return function (a) {
                            return c.apply(this, arguments)
                        }
                    }()), n.end()
                };
                r = k.jsx(c("WAWebTextMessageModal.react"), {
                    defaultText: g,
                    title: (s = a) != null ? s : h._("__JHASH__Pz11_y6jv6u__JHASH__"),
                    onSend: function (a, b) {
                        return w(p.current, a, b)
                    },
                    onBack: function () {
                        return n.pop()
                    }
                });
                break
        }
        return k.jsx(j, {
            flow: n,
            children: r
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBizSendCatalogLinkFlow.react", ["fbt", "WAWebCatalogShortLinkUtils", "WAWebSendTextFlow.react", "WAWebUserPrefsMeUser", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.catalog;
        a = a.onSend;
        var e = d("WAWebCatalogShortLinkUtils").createCatalogLink(b.id.user);
        b = b.id.equals(d("WAWebUserPrefsMeUser").getMaybeMeUser()) ? h._("__JHASH__GcVy13j0Lsr__JHASH__").toString() + " " + e : e;
        return j.jsx(c("WAWebSendTextFlow.react"), {
            text: b,
            onSend: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBizSendProductButton.react", ["fbt", "WAWebDrawerButton.react", "WAWebForwardIcon", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            icon: {
                color: "xw63xux",
                $$css: !0
            }
        };

    function a(a) {
        a = a.onClick;
        return j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: j.jsx(d("WAWebForwardIcon").ForwardIcon, {
                xstyle: k.icon
            }),
            onClick: a,
            children: h._("__JHASH__4JUQUKkFsuw__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBizSendProductLinkFlow.react", ["fbt", "WAWebCatalogShortLinkUtils", "WAWebSendTextFlow.react", "WAWebUserPrefsMeUser", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.product;
        a = a.onSend;
        var e = d("WAWebCatalogShortLinkUtils").createProductLink(b.catalogWid.user, b.id.toString());
        b = d("WAWebUserPrefsMeUser").isMeAccount(b.catalogWid) ? h._("__JHASH__PPYNEywYM-v__JHASH__").toString() + " " + e : e;
        return j.jsx(c("WAWebSendTextFlow.react"), {
            text: b,
            onSend: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebBizVerifyPostcodeBridge", ["WAWebBusinessDirectConnectionCollection"], (function (a, b, c, d, e, f, g) {
    function a(a, b) {
        return c("WAWebBusinessDirectConnectionCollection").verifyAndSavePostcode(a, b)
    }
    g.verifyPostcode = a
}), 98);
__d("WAWebBizVerifyPostcodeAction", ["WAWebBizVerifyPostcodeBridge"], (function (a, b, c, d, e, f, g) {
    a = function (a, b) {
        return d("WAWebBizVerifyPostcodeBridge").verifyPostcode(a, b)
    };
    g.verifyPostcode = a
}), 98);
__d("WAWebCartIcon.react", ["WAWebShoppingCartIcon", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react"),
        j = {
            cartIcon: {
                color: "xfect85",
                $$css: !0
            },
            inheritColor: {
                color: "x1heor9g",
                $$css: !0
            }
        };

    function a(a) {
        a = a.theme;
        return i.jsx(d("WAWebShoppingCartIcon").ShoppingCartIcon, {
            xstyle: [j.cartIcon, a === "inherit-color" && j.inheritColor]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebNuxCollectionsBanner.react", ["fbt", "WAWebABProps", "WAWebCatalogCollection", "WAWebConnModel", "WAWebCoolOffNuxBanner.react", "WAWebNux", "WAWebNuxBanner", "WAWebNuxCoolOff", "WAWebUserPrefsMeUser", "WAWebWamEnumBannerTypes", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).createRef,
        m = {
            COOL_OFF_DURATION_IN_DAYS: 2,
            VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
            CLICKS_BEFORE_COOL_OFF: 1,
            MAX_VIEWS_IN_DAYS: 2,
            COOL_OFF_START_STORAGE_KEY: d("WAWebNux").CoolOffPeriodKeys.CATALOG,
            metricField: d("WAWebWamEnumBannerTypes").BANNER_TYPES.SMB_COLLECTION_CREATION
        };

    function n() {
        var a = d("WAWebCatalogCollection").CatalogCollection.get(d("WAWebUserPrefsMeUser").getMeUser());
        if (a == null || a.collections == null) return !1;
        var b = a.collections.getCollectionModels(!0);
        a = a.productCollection.getProductModels(!0).some(function (a) {
            return !a.isHidden && a.reviewStatus !== "REJECTED"
        });
        return a && b.length === 0
    }
    a = function (a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$CollectionsBanner1 = l(), c.getElement = function () {
                return c.$CollectionsBanner1.current
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.render = function () {
            var a = this.props.onClick,
                b = new(d("WAWebNuxCoolOff").CoolOffNux)(d("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS, m),
                e = k.jsx("span", {
                    className: "x1a06ls3",
                    children: h._("__JHASH___QDZjCmXySD__JHASH__")
                });
            return k.jsx(c("WAWebCoolOffNuxBanner.react"), {
                ref: this.$CollectionsBanner1,
                title: h._("__JHASH__Rm0GmibkOhP__JHASH__"),
                subtitle: h._("__JHASH__MsQbqpAjKz3__JHASH__"),
                actionText: e,
                onClick: a,
                nuxManager: b,
                theme: "nuxBlue"
            })
        };
        b.shouldShow = function () {
            return d("WAWebABProps").getABPropConfigValue("web_abprop_collections_nux_banner") && d("WAWebConnModel").Conn.isSMB && n() && d("WAWebNuxCoolOff").shouldShowNUX(d("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS, m)
        };
        return b
    }(d("WAWebNuxBanner").NuxBanner);
    g["default"] = a
}), 226);
__d("WAWebCatalogNuxBanners.react", ["WAWebCatalogCollection", "WAWebNuxBanners.react", "WAWebNuxCollectionsBanner.react", "WAWebUserPrefsMeUser", "react", "useWAWebListener"], (function (a, b, c, d, e, f, g) {
    var h, i, j = i || c("react"),
        k = (h || (h = d("react"))).useState;

    function a(a) {
        a = a.onOpenCollections;
        var b = k(!1),
            e = b[0],
            f = b[1];
        b = d("WAWebCatalogCollection").CatalogCollection.get(d("WAWebUserPrefsMeUser").getMeUser());
        d("useWAWebListener").useListener(b == null ? void 0 : b.collections, "change", function () {
            f(!0)
        });
        return e && j.jsx(c("WAWebNuxBanners.react"), {
            children: j.jsx(c("WAWebNuxCollectionsBanner.react"), {
                onClick: a
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebCommonCartIconMenuBarItem.react", ["fbt", "WAWebCartIcon.react", "WAWebCartLogEvents", "WAWebDrawerContext", "WAWebMenuBar.react", "WAWebProductCatalogContext", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useContext;
    b = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.cartIconTheme,
            f = a.onClick,
            g = a.cartCountText,
            i = a.testid;
        i = i === void 0 ? "menu-bar-cart-link" : i;
        i = a.catalogOwnerJid;
        a = l(d("WAWebDrawerContext").DrawerContext);
        return k.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            ref: b,
            testid: void 0,
            icon: k.jsx(c("WAWebCartIcon.react"), {
                theme: e
            }),
            text: g,
            title: h._("__JHASH__SpYF24yGb8G__JHASH__"),
            onClick: d("WAWebCartLogEvents").getOnCartClickWithLog(f, i, d("WAWebProductCatalogContext").getProductCatalogContext(a))
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CartIconMenuBarItem = b
}), 226);
__d("WAWebCopyLinkButton.react", ["fbt", "WAWebCopyIcon", "WAWebCopyToClipboard", "WAWebDrawerButton.react", "WAWebToast.react", "WAWebToastManager", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            icon: {
                color: "xw63xux",
                $$css: !0
            }
        };

    function l(a, b) {
        a = document.getElementById(a);
        a && d("WAWebCopyToClipboard").copyElementContentsToClipboard(a) ? d("WAWebToastManager").ToastManager.open(j.jsx(d("WAWebToast.react").Toast, {
            msg: h._("__JHASH__84GNAOxxNnu__JHASH__")
        })) : d("WAWebToastManager").ToastManager.open(j.jsx(d("WAWebToast.react").Toast, {
            msg: h._("__JHASH__b8i57yvPeuv__JHASH__")
        }));
        b != null && b()
    }

    function a(a) {
        var b = a.divider,
            c = a.elementId,
            e = a.onClick;
        return !document.queryCommandSupported("copy") ? null : j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: j.jsx(d("WAWebCopyIcon").CopyIcon, {
                xstyle: k.icon
            }),
            onClick: function () {
                return l(c, e)
            },
            divider: b,
            children: h._("__JHASH__CIn59molrrN__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebImageCarousel.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        carousel: "_ajw5",
        contentContainer: "_ajw6",
        slidesContainer: "_ajw7",
        loaded: "_ajw8",
        fadeIn: "_ajw9",
        spinnerContainer: "_ajwa",
        spinner: "_ajwb"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebImageSlide.scss", ["cx"], (function (a, b, c, d, e, f, g, h) {
    a = {
        slide: "_ak9l",
        slideInnerContainer: "_ak9m",
        image: "_ak9n"
    };
    b = a;
    g["default"] = b
}), 98);
__d("WAWebImageSlide.react", ["fbt", "WAWebBizGatingUtils", "WAWebFlex.react", "WAWebImageSlide.scss", "WAWebMediaStateControls.react", "WAWebMediaTypes", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    b = j || d("react");
    var k = i || (i = c("react")),
        l = b.useEffect,
        m = b.useRef,
        n = {
            unsupportedVideoOverlay: {
                width: "xh8yej3",
                position: "x10l6tqk",
                zIndex: "xhtitgo",
                top: "xwa60dl",
                start: "xtzzx4i",
                left: null,
                right: null,
                transform: "x11lhmoz",
                backgroundColor: "x150wa6m",
                borderTopStartRadius: "x1a2cdl4",
                borderTopEndRadius: "xnhgr82",
                borderBottomEndRadius: "x1qt0ttw",
                borderBottomStartRadius: "xgk8upj",
                boxShadow: "x17gmuz2",
                pointerEvents: "x47corl",
                $$css: !0
            },
            unsupportedVideoOverlayText: {
                color: "xraqfvc",
                $$css: !0
            },
            playButton: {
                pointerEvents: "x47corl",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.altText,
            e = a.forwardRef,
            f = a.image,
            g = a.mediaData,
            i = a.onClick,
            j = a.onLoad,
            o = a.renderFallback,
            p = a.showUnsupportedVideoOverlay;
        a = a.singleSlide;
        g = d("useWAWebModelValues").useModelValues(g, ["fullHeight", "fullWidth", "mediaStage", "renderableUrl"]);
        var q = g.fullHeight,
            r = g.fullWidth,
            s = g.mediaStage;
        g = g.renderableUrl;
        g = g;
        var t = m(null),
            u = m(s === d("WAWebMediaTypes").MediaDataStage.RESOLVED);
        l(function () {
            j && !u.current && !o && s === d("WAWebMediaTypes").MediaDataStage.RESOLVED && (j(), u.current = !0)
        }, [j, o, s]);
        var v = function () {
                i && t.current && f && i(t.current, f)
            },
            w = !!a;
        r = r && q ? r / q : .8;
        r < .8 && (r = .8);
        r > 1.91 && (r = 1.91);
        r > 1 && !w && (r = 1);
        q = {
            width: w && r < 1 ? 100 * r + "%" : r === 1 && !a ? "100%" : null
        };
        w = {
            paddingTop: Math.floor(100 / r) + "%"
        };
        a = {
            cursor: "" + (i ? "pointer" : "auto")
        };
        var x;
        (f == null ? void 0 : f.videoUrl) != null && d("WAWebBizGatingUtils").isCatalogVideoViewEnabled() && (x = k.jsx(d("WAWebFlex.react").FlexRow, {
            xstyle: n.playButton,
            children: k.jsx(d("WAWebMediaStateControls.react").Play, {})
        }));
        return k.jsx("div", {
            ref: e ? function (a) {
                return e(a)
            } : null,
            className: c("WAWebImageSlide.scss").slide,
            style: q,
            children: k.jsxs("div", {
                className: c("WAWebImageSlide.scss").slideInnerContainer,
                style: w,
                children: [k.jsx("img", {
                    ref: t,
                    alt: b,
                    src: g,
                    className: c("WAWebImageSlide.scss").image,
                    style: a,
                    draggable: "false",
                    onClick: v
                }), x, p === !0 && k.jsx(d("WAWebFlex.react").FlexRow, {
                    xstyle: n.unsupportedVideoOverlay,
                    children: k.jsx(d("WAWebFlex.react").FlexRow, {
                        xstyle: n.unsupportedVideoOverlayText,
                        children: h._("__JHASH__j7W7nPXjtir__JHASH__")
                    })
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebVideoIcon", ["WAWebSvgComponentBase", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = "video";

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
        m = 28;
        n = 46;
        (e != null || f != null) && (m = e, n = f);
        return j.jsx(d("WAWebSvgComponentBase").BaseSvgSpan, babelHelpers["extends"]({
            name: k
        }, a, {
            children: j.jsxs("svg", {
                viewBox: (o = l) != null ? o : "0 0 46 28",
                height: m,
                width: n,
                preserveAspectRatio: "xMidYMid meet",
                className: (i || (i = c("stylex")))(b),
                fill: "currentColor",
                children: [j.jsx("title", {
                    children: k
                }), j.jsx("path", {
                    d: "M0.632234 3.05765C0 4.25556 0 5.82371 0 8.96V19.04C0 22.1763 0 23.7444 0.632234 24.9423C1.18836 25.9961 2.07575 26.8527 3.16722 27.3896C4.40804 28 6.03238 28 9.28106 28H23.5894C26.838 28 28.4624 28 29.7032 27.3896C30.7947 26.8527 31.682 25.9961 32.2382 24.9423C32.8704 23.7444 32.8704 22.1763 32.8704 19.04V8.96C32.8704 5.82371 32.8704 4.25556 32.2382 3.05765C31.682 2.00395 30.7947 1.14725 29.7032 0.610364C28.4624 0 26.838 0 23.5894 0H9.28106C6.03238 0 4.40804 0 3.16722 0.610364C2.07575 1.14725 1.18836 2.00395 0.632234 3.05765Z",
                    fill: "currentColor",
                    className: i(h == null ? void 0 : h.primary)
                }), j.jsx("path", {
                    d: "M36.7051 8.4197C36.3068 8.77319 36.0801 9.27163 36.0801 9.79396V18.206C36.0801 18.7284 36.3068 19.2268 36.7051 19.5803L41.899 24.1895C43.1385 25.2895 45.1411 24.4407 45.1411 22.8153V5.18474C45.1411 3.55931 43.1385 2.71047 41.899 3.81048L36.7051 8.4197Z",
                    fill: "currentColor",
                    className: i(h == null ? void 0 : h.secondary)
                })]
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.VideoIcon = a
}), 98);
__d("WAWebVideoPlaceholderSlide.react", ["fbt", "WAWebFlex.react", "WAWebUISpacing", "WAWebVideoIcon", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            unsupportedVideoOverlayText: {
                color: "xraqfvc",
                fontSize: "x1jchvi3",
                textAlign: "x2b8uid",
                maxWidth: "x1jkqq1h",
                lineHeight: "xwn7fz2",
                $$css: !0
            }
        };

    function a() {
        return j.jsx("div", {
            className: "xc8qplx xh8yej3 x1psf4jx",
            children: j.jsx("div", {
                className: "x1n2onr6",
                children: j.jsxs(d("WAWebFlex.react").FlexContainer, {
                    direction: "vertical",
                    children: [j.jsx(d("WAWebFlex.react").FlexRow, {
                        xstyle: [k.unsupportedVideoOverlayText, d("WAWebUISpacing").uiMargin.horizAuto, d("WAWebUISpacing").uiMargin.bottom16],
                        children: j.jsx(d("WAWebVideoIcon").VideoIcon, {
                            width: 24
                        })
                    }), j.jsx(d("WAWebFlex.react").FlexRow, {
                        xstyle: [k.unsupportedVideoOverlayText, d("WAWebUISpacing").uiMargin.horizAuto],
                        children: h._("__JHASH__8K_UUMZwVnN__JHASH__")
                    })]
                })
            })
        }, "video-placeholder-slide")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebImageCarousel.react", ["Promise", "WAAbortError", "WAPromiseRaceAbort", "WAWebChevronButton.react", "WAWebClassnames", "WAWebImageCarousel.scss", "WAWebImageSlide.react", "WAWebMediaTypes", "WAWebResizeObserver.react", "WAWebRound.react", "WAWebSpinner.react", "WAWebVelocityAnimate", "WAWebVideoPlaceholderSlide.react", "react", "smoothscroll-polyfill"], (function (a, b, c, d, e, f, g) {
    var h, i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useEffect,
        m = e.useRef,
        n = e.useState;
    c("smoothscroll-polyfill").polyfill();

    function a(a) {
        var e = a.images,
            f = a.renderFallback,
            g = a.fallbackMediaData,
            i = a.fetching,
            j = a.onClick;
        a = a.showUnsupportedVideoPlaceholder;
        var o = m(null),
            p = m(null),
            q = m(null),
            r = m(null),
            s = m(null),
            t = n(null),
            u = t[0],
            v = t[1];
        t = n(e.filter(function (a) {
            return a.mediaData.mediaStage === d("WAWebMediaTypes").MediaDataStage.RESOLVED
        }).length);
        var w = t[0],
            x = t[1];
        t = n(!1);
        var y = t[0],
            z = t[1],
            A = w === e.length,
            B = function () {
                return x(function (a) {
                    return a + 1
                })
            };
        l(function () {
            var a = null;
            if (!A && !f) {
                var e, g = p.current;
                if (!g) return;
                (e = q.current) == null ? void 0 : e.controller.abort();
                a = new AbortController();
                var i = a.signal;
                e = (((e = q.current) == null ? void 0 : e.promise) || (h || (h = b("Promise"))).resolve()).then(function () {
                    var a = 75,
                        b = 50;
                    return c("WAWebVelocityAnimate")(g, {
                        opacity: [1, 0]
                    }, {
                        delay: a,
                        duration: b
                    })
                });
                e = c("WAPromiseRaceAbort")(e, i).then(function () {
                    if (i.aborted) throw new(d("WAAbortError").AbortError)();
                    z(!0)
                })["catch"](d("WAAbortError").catchAbort(function () {
                    c("WAWebVelocityAnimate")(g, "stop", !0)
                }))["finally"](function () {
                    q.current = null
                });
                q.current = {
                    promise: e,
                    controller: a
                }
            }
            return function () {
                var b;
                (b = a) == null ? void 0 : b.abort()
            }
        }, [A, f]);
        var C = function () {
            var a;
            if (!((a = o.current) == null ? void 0 : a.children)) return null;
            if (o.current.scrollWidth === o.current.offsetWidth) return null;
            if (o.current.scrollLeft === 0) return "next";
            return o.current.scrollWidth - 1 <= o.current.scrollLeft + o.current.offsetWidth ? "prev" : "both"
        };
        l(function () {
            v(C())
        }, [A]);
        if (f && e.length === 0) return k.jsx("div", {
            className: c("WAWebImageCarousel.scss").carousel,
            dir: "ltr",
            children: k.jsx("div", {
                className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebImageCarousel.scss").contentContainer, c("WAWebImageCarousel.scss").slidesContainer),
                children: g && k.jsx(c("WAWebImageSlide.react"), {
                    altText: "",
                    mediaData: g,
                    renderFallback: !0,
                    singleSlide: !0
                })
            })
        });
        var D, E, F, G = function () {
            r.current = null;
            var a = C();
            u !== a && v(a)
        };
        t = function () {
            if (r.current != null) return;
            r.current = window.requestAnimationFrame(G)
        };
        if (e.length > 1 || a === !0) {
            w = function () {
                var a = o.current;
                if (a != null && (u === "prev" || u === "both")) {
                    var b = a.scrollLeft + a.offsetWidth / 2,
                        c = 0,
                        d = a.lastElementChild;
                    while (d instanceof HTMLElement && c === 0) {
                        var e = d.offsetLeft + d.offsetWidth / 2;
                        e < b && (c = Math.floor(e - b));
                        d = d.previousElementSibling
                    }
                    c !== 0 && a.scrollBy({
                        left: c,
                        behavior: "smooth"
                    })
                }
            };
            g = function () {
                var a = o.current;
                if (a != null && (u === "next" || u === "both")) {
                    var b = a.scrollLeft + a.offsetWidth / 2,
                        c = 0,
                        d = a.firstElementChild;
                    while (d instanceof HTMLElement && c === 0) {
                        var e = d.offsetLeft + d.offsetWidth / 2;
                        b < e && (c = Math.floor(e - b));
                        d = d.nextElementSibling
                    }
                    c !== 0 && a.scrollBy({
                        left: c,
                        behavior: "smooth"
                    })
                }
            };
            var H = function () {
                s.current = null;
                var a = C();
                u !== a && v(a)
            };
            F = function () {
                if (s.current != null) return;
                s.current = window.requestAnimationFrame(H)
            };
            if (A && u != null) {
                var I = u !== "prev" && u !== "both";
                D = k.jsx(d("WAWebChevronButton.react").ChevronButton, {
                    type: d("WAWebChevronButton.react").ButtonType.Prev,
                    onClick: w,
                    onKeyDown: w,
                    disabled: I,
                    theme: d("WAWebRound.react").RoundTheme.Small,
                    overMedia: !0
                });
                w = u !== "next" && u !== "both";
                E = k.jsx(d("WAWebChevronButton.react").ChevronButton, {
                    type: d("WAWebChevronButton.react").ButtonType.Next,
                    onClick: g,
                    onKeyDown: g,
                    disabled: w,
                    theme: d("WAWebRound.react").RoundTheme.Small,
                    overMedia: !0
                })
            }
        }
        var J = e.length === 1;
        I = e.map(function (a, b) {
            return k.jsx(c("WAWebImageSlide.react"), {
                altText: "",
                image: a,
                singleSlide: J,
                mediaData: a.mediaData,
                onClick: j,
                onLoad: B
            }, b)
        });
        var K;
        a === !0 && (K = k.jsx(c("WAWebVideoPlaceholderSlide.react"), {}));
        g = A ? null : k.jsx("div", {
            className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebImageCarousel.scss").contentContainer, c("WAWebImageCarousel.scss").spinnerContainer),
            children: k.jsx("div", {
                className: c("WAWebImageCarousel.scss").spinner,
                ref: p,
                children: k.jsx(d("WAWebSpinner.react").Spinner, {
                    color: "default",
                    size: 50,
                    stroke: 4
                })
            })
        });
        e = d("WAWebClassnames").classnamesConvertMeToStylexPlease((w = {}, w[c("WAWebImageCarousel.scss").loaded] = !i && A, w[c("WAWebImageCarousel.scss").fadeIn] = y, w[c("WAWebImageCarousel.scss").carousel] = !0, w));
        return k.jsxs("div", {
            className: e,
            dir: "ltr",
            children: [g, k.jsxs("div", {
                ref: o,
                className: d("WAWebClassnames").classnamesConvertMeToStylexPlease(c("WAWebImageCarousel.scss").contentContainer, c("WAWebImageCarousel.scss").slidesContainer),
                onScroll: F,
                children: [I, K]
            }), D, E, k.jsx(c("WAWebResizeObserver.react"), {
                onResize: t
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebLabelsInfoDrawerLabelWell.react", ["WAWebBizGatingUtils", "WAWebLabels.react", "WAWebListsGatingUtils", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = {
            labelRow: {
                display: "x1rg5ohu",
                fontSize: "x1f6kntn",
                $$css: !0
            },
            standaloneLabelRow: {
                fontSize: "x1pg5gke",
                lineHeight: "x4ei82o",
                $$css: !0
            },
            standaloneLabelRowIcon: {
                width: "xgd8bvy",
                height: "x17rw0jw",
                $$css: !0
            },
            labelContainer: {
                flexWrap: "x1a02dak",
                $$css: !0
            }
        };

    function l(a) {
        var b = a.isStandalone;
        a = a.labelId;
        return j.jsx("div", {
            className: (i || (i = c("stylex")))(k.labelRow, d("WAWebUISpacing").uiPadding.top5, d("WAWebUISpacing").uiPadding.end5, d("WAWebUISpacing").uiPadding.bottom5, d("WAWebUISpacing").uiPadding.start0, d("WAWebUISpacing").uiMargin.end10, b && k.standaloneLabelRow, b && d("WAWebUISpacing").uiPadding.top8, b && d("WAWebUISpacing").uiPadding.end14, b && d("WAWebUISpacing").uiPadding.bottom8, b && d("WAWebUISpacing").uiPadding.start0),
            children: j.jsx(d("WAWebLabels.react").Labels, {
                theme: "user-profile",
                labels: [a],
                showName: !0,
                iconXstyle: [k.standaloneLabelRowIcon, d("WAWebUISpacing").uiPadding.top1]
            })
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.labels;
        a = a.theme;
        if (!b || !(d("WAWebBizGatingUtils").canDisplayLabel() || d("WAWebListsGatingUtils").isListsEnabled())) return null;
        var e = a === "standalone";
        return j.jsx("div", {
            className: (i || (i = c("stylex")))(k.labelContainer, d("WAWebUISpacing").uiMargin.top3, e && d("WAWebUISpacing").uiMargin.top0),
            children: b.map(function (a, b) {
                return j.jsx(l, {
                    labelId: a,
                    isStandalone: e
                }, b)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebManageAddItemCta.react", ["fbt", "WAWebCellFrame.react", "WAWebNoop", "WAWebUISpacing", "WAWebUnstyledButton.react", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            addIcon: {
                position: "x1n2onr6",
                width: "x1d7z9mz",
                height: "x14baz6b",
                borderTopWidth: "xamhcws",
                borderEndWidth: "xol2nv",
                borderBottomWidth: "xlxy82",
                borderStartWidth: "x19p7ews",
                borderTopStyle: "x13fuv20",
                borderEndStyle: "xu3j5b3",
                borderBottomStyle: "x1q0q8m5",
                borderStartStyle: "x26u7qi",
                borderTopColor: "x1vynwtf",
                borderEndColor: "xuz1fv3",
                borderBottomColor: "x1j5b3ru",
                borderStartColor: "xwjow5u",
                borderTopStartRadius: "xhk9q7s",
                borderTopEndRadius: "x1otrzb0",
                borderBottomEndRadius: "x1i1ezom",
                borderBottomStartRadius: "x1o6z2jb",
                ":focus_borderTopStartRadius": "xvmu2xp",
                ":focus_borderTopEndRadius": "x16ngqik",
                ":focus_borderBottomEndRadius": "x1vlmnad",
                ":focus_borderBottomStartRadius": "x12oeec4",
                ":focus_boxShadow": "xsbtyp8",
                "::before_position": "x1hmns74",
                "::before_top": "x1knuo7r",
                "::before_left": "xgdch9p",
                "::before_start": null,
                "::before_end": null,
                "::before_display": "x1fgarty",
                "::before_width": "x1j6c3ea",
                "::before_height": "xv7f310",
                "::before_content": "x1cpjm7i",
                "::before_backgroundColor": "x1486luv",
                "::before_transform": "xbnewub",
                "::after_position": "x1j6awrg",
                "::after_top": "xoqv437",
                "::after_left": "x16v8oms",
                "::after_start": null,
                "::after_end": null,
                "::after_display": "xhkezso",
                "::after_width": "xqysinb",
                "::after_height": "x6giem4",
                "::after_content": "x1s928wv",
                "::after_backgroundColor": "x1hw8bw3",
                "::after_transform": "x128ww4c",
                $$css: !0
            },
            addItemButton: {
                borderTopStyle: "x1ejq31n",
                $$css: !0
            },
            themeCollections: {
                borderTopStyle: "x1ejq31n",
                borderBottomWidth: "xso031l",
                borderBottomStyle: "x1q0q8m5",
                borderBottomColor: "x1v2jjsl",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.onClick,
            e = a.testid;
        e = e === void 0 ? "add-item" : e;
        e = (j || (j = c("stylex")))(l.addItemButton, a.theme === "default" && d("WAWebUISpacing").uiPadding.vert15, a.theme === "default" && d("WAWebUISpacing").uiMargin.top8, a.theme === "in-list" && d("WAWebUISpacing").uiPadding.vert8, a.theme === "in-list" && d("WAWebUISpacing").uiPadding.horiz15, a.theme === "collections" && l.themeCollections, a.theme === "collections" && d("WAWebUISpacing").uiPadding.vert8, a.theme === "collections" && d("WAWebUISpacing").uiPadding.horiz15, a.theme === "collections" && d("WAWebUISpacing").uiMargin.bottom1);
        var f = k.jsx(c("WAWebUnstyledButton.react"), {
            title: h._("__JHASH__i1U1Xb4tCD4__JHASH__"),
            onClick: c("WAWebNoop"),
            xstyle: l.addIcon,
            children: k.jsx(k.Fragment, {})
        });
        return k.jsx(c("WAWebCellFrame.react"), {
            theme: "add-item",
            image: f,
            customImage: !0,
            primary: (f = a.title) != null ? f : h._("__JHASH__i1U1Xb4tCD4__JHASH__"),
            className: e,
            onClick: b,
            idle: a.idle,
            testid: void 0
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCollectionCollectionsRejectTranslations.react", ["fbt", "WAWebClickableLink.react", "WAWebConstantsDeprecated", "WAWebExternalLink.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function k(a, b) {
        var e = b || c("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL;
        return j.jsx(c("WAWebClickableLink.react"), {
            href: e,
            onClick: function (a) {
                a.preventDefault(), d("WAWebExternalLink.react").openExternalLink(e)
            },
            children: a
        })
    }
    k.displayName = k.name + " [from " + f.id + "]";

    function a(a, b) {
        switch (a) {
            case "drugs":
                a = h._("__JHASH__SOlXWZQctFH__JHASH__");
                return {
                    first: h._("__JHASH__UEqtb62ft58__JHASH__", [h._param("collections_rejected_policy_drugs", k(a, b))]), second: h._("__JHASH__UUEeeVlhp0i__JHASH__", [h._param("collections_rejected_policy_drugs", k(a, b))])
                };
            case "weapons":
                a = h._("__JHASH__WTu-68Ob4s9__JHASH__");
                return {
                    first: h._("__JHASH__R8jfvVjOpMG__JHASH__", [h._param("collections_rejected_policy_weapons", k(a, b))]), second: h._("__JHASH__EZFa70POoVU__JHASH__", [h._param("collections_rejected_policy_weapons", k(a, b))])
                };
            case "animals":
                a = h._("__JHASH__7b0hs4zbaKD__JHASH__");
                return {
                    first: h._("__JHASH__uqzzYbHEc5Q__JHASH__", [h._param("collections_rejected_policy_animals", k(a, b))]), second: h._("__JHASH__dEHdtsfIXsT__JHASH__", [h._param("collections_rejected_policy_animals", k(a, b))])
                };
            case "alcohol":
                a = h._("__JHASH__4jnou7DKBVr__JHASH__");
                return {
                    first: h._("__JHASH__arvCcNCJ_KP__JHASH__", [h._param("collections_rejected_policy_alcohol", k(a, b))]), second: h._("__JHASH__9R0HMMgjLIb__JHASH__", [h._param("collections_rejected_policy_alcohol", k(a, b))])
                };
            case "gambling":
                a = h._("__JHASH__DbCciyrNsfb__JHASH__");
                return {
                    first: h._("__JHASH__Dk3yMQZ0iIR__JHASH__", [h._param("collections_rejected_policy_gambling", k(a, b))]), second: h._("__JHASH__EMrAr57f4XL__JHASH__", [h._param("collections_rejected_policy_gambling", k(a, b))])
                };
            case "tobacco":
                a = h._("__JHASH__0AsWaajz7xn__JHASH__");
                return {
                    first: h._("__JHASH__amTYLbG1rEu__JHASH__", [h._param("collections_rejected_policy_tobacco", k(a, b))]), second: h._("__JHASH__XhzZvLStQLJ__JHASH__", [h._param("collections_rejected_policy_tobacco", k(a, b))])
                };
            case "overtly_sexualized_positioning":
                a = h._("__JHASH__TdzV1UfFugG__JHASH__");
                return {
                    first: h._("__JHASH__9h2LzYuRFkc__JHASH__", [h._param("collections_rejected_policy_overtly_sexualized_positioning", k(a, b))]), second: h._("__JHASH__xwTVAPnZE1k__JHASH__", [h._param("collections_rejected_policy_overtly_sexualized_positioning", k(a, b))])
                };
            case "adult":
                a = h._("__JHASH__tYjOgaraDPE__JHASH__");
                return {
                    first: h._("__JHASH__BBu4UhRF7MZ__JHASH__", [h._param("collections_rejected_policy_adult", k(a, b))]), second: h._("__JHASH__nwTKWazT8nF__JHASH__", [h._param("collections_rejected_policy_adult", k(a, b))])
                };
            case "supplements":
                a = h._("__JHASH__CN_XY3WDWW9__JHASH__");
                return {
                    first: h._("__JHASH__m7MwiT0x4Uy__JHASH__", [h._param("collections_rejected_policy_supplements", k(a, b))]), second: h._("__JHASH__p9sZQUDQpwh__JHASH__", [h._param("collections_rejected_policy_supplements", k(a, b))])
                };
            case "body_parts_fluids":
                a = h._("__JHASH__jnJTHnJXsCo__JHASH__");
                return {
                    first: h._("__JHASH__GETTdnf0Dgy__JHASH__", [h._param("collections_rejected_policy_body_parts_fluids", k(a, b))]), second: h._("__JHASH__gQaydNFB8UP__JHASH__", [h._param("collections_rejected_policy_body_parts_fluids", k(a, b))])
                };
            case "healthcare":
                a = h._("__JHASH__BUz9vlUknFn__JHASH__");
                return {
                    first: h._("__JHASH__-Qwq5tEn0p1__JHASH__", [h._param("collections_rejected_policy_healthcare", k(a, b))]), second: h._("__JHASH__Cflw1Qi6Fdv__JHASH__", [h._param("collections_rejected_policy_healthcare", k(a, b))])
                };
            case "misleading":
                a = h._("__JHASH__-OYTtFiaxck__JHASH__");
                return {
                    first: h._("__JHASH__5YgYvP2ZnIu__JHASH__", [h._param("collections_rejected_policy_misleading", k(a, b))]), second: h._("__JHASH__NOM1Lhdea6k__JHASH__", [h._param("collections_rejected_policy_misleading", k(a, b))])
                };
            case "real_fake_currency":
                a = h._("__JHASH__3BSiT2Bbojf__JHASH__");
                return {
                    first: h._("__JHASH__oOsBt4TtAJs__JHASH__", [h._param("collections_rejected_policy_real_fake_currency", k(a, b))]), second: h._("__JHASH__jkr6LPmmM4l__JHASH__", [h._param("collections_rejected_policy_real_fake_currency", k(a, b))])
                };
            case "digital_services_products":
                a = h._("__JHASH__jglvf_mglD5__JHASH__");
                return {
                    first: h._("__JHASH__F2TbHi9Q174__JHASH__", [h._param("collections_rejected_policy_digital_services_products", k(a, b))]), second: h._("__JHASH__aQa8hjWz5Ts__JHASH__", [h._param("collections_rejected_policy_digital_services_products", k(a, b))])
                };
            case "thrid_party_infringements":
                a = h._("__JHASH__2Lh7S0G3ofz__JHASH__");
                return {
                    first: h._("__JHASH__1pt88YFD9mp__JHASH__", [h._param("collections_rejected_policy_thrid_party_infringements", k(a, b))]), second: h._("__JHASH__DIeSo9SSbnS__JHASH__", [h._param("collections_rejected_policy_thrid_party_infringements", k(a, b))])
                };
            case "unauthorized_media":
                a = h._("__JHASH__FhJlPGqX4IL__JHASH__");
                return {
                    first: h._("__JHASH__3gvYt0ri3Th__JHASH__", [h._param("collections_rejected_policy_unauthorized_media", k(a, b))]), second: h._("__JHASH__77vOojDgsOd__JHASH__", [h._param("collections_rejected_policy_unauthorized_media", k(a, b))])
                };
            case "illegal_products":
                a = h._("__JHASH__Ckv4329372c__JHASH__");
                return {
                    first: h._("__JHASH__NOWeFUxedvO__JHASH__", [h._param("collections_rejected_policy_illegal_products", k(a, b))]), second: h._("__JHASH__hJapagrGgA5__JHASH__", [h._param("collections_rejected_policy_illegal_products", k(a, b))])
                };
            case "hazardous_goods_and_materials":
                a = h._("__JHASH__-OYTtFiaxck__JHASH__");
                return {
                    first: h._("__JHASH__foG73grD-1w__JHASH__", [h._param("collections_rejected_policy_hazardous_goods_and_materials", k(a, b))]), second: h._("__JHASH___SQupLFD5xX__JHASH__", [h._param("collections_rejected_policy_hazardous_goods_and_materials", k(a, b))])
                };
            case "stolen_goods":
                a = h._("__JHASH__CYP8OIcWLHh__JHASH__");
                return {
                    first: h._("__JHASH__KhoenaSEfK1__JHASH__", [h._param("collections_rejected_policy_stolen_goods", k(a, b))]), second: h._("__JHASH__rYWZsw6RnC___JHASH__", [h._param("collections_rejected_policy_stolen_goods", k(a, b))])
                };
            case "human_exploitation_and_sexual_services":
                a = h._("__JHASH__CYP8OIcWLHh__JHASH__");
                return {
                    first: h._("__JHASH__JxZ2UbPLkd5__JHASH__", [h._param("collections_rejected_policy_human_exploitation_and_sexual_services", k(a, b))]), second: h._("__JHASH__7V6IZszTxMw__JHASH__", [h._param("collections_rejected_policy_human_exploitation_and_sexual_services", k(a, b))])
                };
            case "community_standards":
                a = h._("__JHASH__9hCRA64x99s__JHASH__");
                return {
                    first: h._("__JHASH__9PVEkW5fhrB__JHASH__", [h._param("collections_rejected_policy_community_standards", k(a, b))]), second: h._("__JHASH__39ZrAELz4hq__JHASH__", [h._param("collections_rejected_policy_community_standards", k(a, b))])
                };
            case "discrimination":
                a = h._("__JHASH__9hCRA64x99s__JHASH__");
                return {
                    first: h._("__JHASH__iExtJFEiThw__JHASH__", [h._param("collections_rejected_policy_discrimination", k(a, b))]), second: h._("__JHASH__nKwk09WXRqy__JHASH__", [h._param("collections_rejected_policy_discrimination", k(a, b))])
                };
            default:
                a = h._("__JHASH__CYP8OIcWLHh__JHASH__");
                return {
                    first: h._("__JHASH__qSEGi3VuAyv__JHASH__", [h._param("collections_rejected_policy_other_violation", k(a, b))]), second: h._("__JHASH__bDO36r36YBq__JHASH__", [h._param("collections_rejected_policy_other_violation", k(a, b))])
                }
        }
    }
    g.getRejectedCollectionCopy = a
}), 226);
__d("WAWebManageCollectionIntegrityBanner.react", ["fbt", "WAWebBizAppealCollectionPopup.react", "WAWebBizGatingUtils", "WAWebClickableLink.react", "WAWebInfoIcon", "WAWebModalManager", "WAWebProductCatalogCatalogConstants", "WAWebProductCollection", "WAWebProductCollectionCollectionsRejectTranslations.react", "WAWebThemeContext", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            iconContainerRejected: {
                position: "x10l6tqk",
                end: "x1memqgq",
                color: "x1sr8853",
                wordBreak: "x13faqbe",
                $$css: !0
            },
            iconContainerRejectedWithAppeal: {
                end: "x1ntpj0o",
                $$css: !0
            },
            rejectedBanner: {
                display: "x78zum5",
                alignItems: "x6s0dn4",
                height: "xjp8j0k",
                minHeight: "x1ba4aug",
                paddingTop: "xexx8yu",
                paddingEnd: "x525zg8",
                paddingBottom: "x18d9i69",
                paddingStart: "x5ib6vp",
                marginTop: "x1y332i5",
                marginBottom: "xyorhqc",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                fontSize: "x13a8xbf",
                lineHeight: "xdod15v",
                color: "x14m1o6m",
                backgroundColor: "xhe2ndm",
                $$css: !0
            },
            rejectedBannerWithAppeal: {
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                justifyContent: "xl56j7k",
                height: "xb2rc7v",
                minHeight: "x1ba4aug",
                marginTop: "x1y332i5",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                fontSize: "x13a8xbf",
                lineHeight: "xdod15v",
                color: "x14m1o6m",
                backgroundColor: "xhe2ndm",
                $$css: !0
            },
            rejectedBannerDarkBackground: {
                backgroundColor: "x2fr4xw",
                $$css: !0
            }
        },
        m = 10;

    function n(a) {
        a = a.withAppeal;
        return k.jsx("div", {
            className: (j || (j = c("stylex")))(l.iconContainerRejected, a && l.iconContainerRejectedWithAppeal),
            children: k.jsx(d("WAWebInfoIcon").InfoIcon, {})
        })
    }
    n.displayName = n.name + " [from " + f.id + "]";

    function o(a) {
        a = a.onRename;
        var b = d("WAWebThemeContext").useIsDarkTheme();
        return k.jsxs("div", {
            className: (j || (j = c("stylex")))(l.rejectedBanner, b && l.rejectedBannerDarkBackground),
            children: [h._("__JHASH__a0M9d4EShfj__JHASH__"), k.jsx(c("WAWebClickableLink.react"), {
                onClick: a,
                children: h._("__JHASH__pP8ktHCWkAQ__JHASH__")
            }), k.jsx(n, {
                withAppeal: !1
            })]
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function p(a) {
        var b, e = a.collection,
            f = a.onAppeal;
        a = a.onRename;
        b = ((b = e.rejectReason) != null ? b : "other_violation").toLowerCase();
        b = d("WAWebProductCollectionCollectionsRejectTranslations.react").getRejectedCollectionCopy(b, e.commerceUrl);
        var g = d("WAWebThemeContext").useIsDarkTheme();
        a = k.jsx(c("WAWebClickableLink.react"), {
            onClick: a,
            children: h._("__JHASH__kG5Z5o8fcUU__JHASH__")
        });
        if (e.canAppeal) {
            e = k.jsx(c("WAWebClickableLink.react"), {
                onClick: f,
                children: h._("__JHASH__1bV41oJy7nV__JHASH__")
            });
            f = h._("__JHASH__m662yMtmqHj__JHASH__", [h._param("rename_collection_link", a), h._param("request_another_review_link", e)]);
            return k.jsxs("div", {
                className: (j || (j = c("stylex")))(l.rejectedBannerWithAppeal, d("WAWebUISpacing").uiPadding.end40, d("WAWebUISpacing").uiPadding.start20, d("WAWebUISpacing").uiMargin.bottom10, g && l.rejectedBannerDarkBackground),
                children: [b.first, k.jsx("br", {}), f, k.jsx(n, {
                    withAppeal: !0
                })]
            })
        }
        e = h._("__JHASH__9fUDiN0Qb2A__JHASH__", [h._param("rename_collection_link", a)]);
        return k.jsxs("div", {
            className: (j || (j = c("stylex")))(l.rejectedBannerWithAppeal, g && l.rejectedBannerDarkBackground),
            children: [b.second, k.jsx("br", {}), e, k.jsx(n, {
                withAppeal: !0
            })]
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function a(a) {
        return d("WAWebBizGatingUtils").canAppealCollections() && a.reviewStatus === d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED ? d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT * 2 + m : d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT + m
    }

    function b(a) {
        var b = a.collection,
            e = a.onEditCollection;
        a = function () {
            e == null ? void 0 : e(b)
        };
        var f = function () {
            d("WAWebModalManager").ModalManager.open(k.jsx(c("WAWebBizAppealCollectionPopup.react"), {
                collection: b
            }))
        };
        switch (b.reviewStatus) {
            case d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING:
                return k.jsxs("div", {
                    className: "x78zum5 x6s0dn4 xjp8j0k x1ba4aug xexx8yu x525zg8 x18d9i69 x5ib6vp x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x14m1o6m x13faqbe xkvbzgi",
                    children: [h._("__JHASH__sUSZ9zbY4QW__JHASH__"), k.jsx("div", {
                        className: "x10l6tqk x1memqgq",
                        children: k.jsx(d("WAWebInfoIcon").InfoIcon, {})
                    })]
                });
            case d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED:
                return d("WAWebBizGatingUtils").canAppealCollections() ? k.jsx(p, {
                    collection: b,
                    onRename: a,
                    onAppeal: f
                }) : k.jsx(o, {
                    onRename: a
                });
            default:
                return null
        }
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g.getCollectionIntegrityHeight = a;
    g.CollectionIntegrityBanner = b
}), 226);
__d("WAWebNameGroupModal.react", ["fbt", "WANullthrows", "WAWebButton.react", "WAWebModal.react", "WAWebRichTextField.react", "WAWebServerPropsModel", "WAWebWDSButton", "asyncToGeneratorRuntime", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useState;

    function a(a) {
        var e = a.chat,
            f = a.editable,
            g = a.editRestrictionInfo,
            i = a.onCancel,
            j = a.onOK;
        a = a.subtext;
        var m = d("useWAWebModelValues").useModelValues(c("WANullthrows")(e.groupMetadata), ["subject"]);
        m = l(m.subject);
        var n = m[0],
            o = m[1];
        m = function () {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                a.stopPropagation();
                a.preventDefault();
                try {
                    yield j(n, e)
                } finally {
                    o("")
                }
            });
            return function (b) {
                return a.apply(this, arguments)
            }
        }();
        var p = function (a) {
                a.stopPropagation(), a.preventDefault(), i == null ? void 0 : i()
            },
            q = function (a) {
                return !!(a != null && a.trim())
            },
            r = function (a) {
                a = a.text;
                o(a)
            },
            s = n.trim().length > 0;
        m = j ? k.jsx(c("WAWebButton.react"), {
            testid: void 0,
            type: "primary",
            onClick: m,
            disabled: !s,
            children: h._("__JHASH__An1Ld2qkyMl__JHASH__")
        }) : null;
        s = i ? k.jsx(c("WAWebButton.react"), {
            testid: void 0,
            type: "secondary",
            onClick: p,
            children: h._("__JHASH__JomY4EcHzcJ__JHASH__")
        }) : null;
        p = k.jsxs(d("WAWebWDSButton").ButtonGroup, {
            direction: "horizontal",
            align: "end",
            children: [s, m]
        });
        s = k.jsx(d("WAWebRichTextField.react").RichTextField, {
            testid: void 0,
            value: n,
            maxLength: d("WAWebServerPropsModel").ServerProps.maxSubject,
            onChange: r,
            validate: q,
            emojiBtnPosition: "side",
            multiline: !0,
            spellCheck: !0,
            showRemaining: !0,
            focusOnMount: !0,
            theme: "small",
            textFormatEnabled: !0,
            editable: f,
            editRestrictionInfo: g
        });
        return k.jsxs(d("WAWebModal.react").Modal, {
            title: h._("__JHASH__VMrd_chOCfm__JHASH__"),
            actions: p,
            children: [a, s]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCatalogLinkIcon.react", ["WAWebLinkIcon", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react"),
        j = {
            linkIcon: {
                color: "xfect85",
                $$css: !0
            },
            inheritColor: {
                color: "x1heor9g",
                $$css: !0
            }
        };

    function a(a) {
        a = a.theme;
        return i.jsx(d("WAWebLinkIcon").LinkIcon, {
            xstyle: [j.linkIcon, a === "inherit-color" && j.inheritColor]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebProductCatalogCatalogDrawerMenu.react", ["fbt", "WATypeUtils", "WAWebAdCreationDropdownItem.react", "WAWebBizGatingUtils", "WAWebCommonCartIconMenuBarItem.react", "WAWebDropdown.react", "WAWebDropdownItem.react", "WAWebMenuBar.react", "WAWebMenuIcon", "WAWebProductCatalogLinkIcon.react", "WAWebUserPrefsMeUser", "WAWebWamEnumLwiEntryPoint", "WAWebWidFactory", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = j.forwardRef(a);

    function a(a, b) {
        var e = a.boostMenuOptionInput,
            f = a.canManageCatalog,
            g = a.onOpenCollections,
            i = a.onOpenMerchantDetailsForm,
            k = a.onOpenSettings;
        a = a.onSendCatalog;
        return f ? j.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            ref: b,
            testid: void 0,
            icon: j.jsx(d("WAWebMenuIcon").MenuIcon, {}),
            title: h._("__JHASH__hskmX_lsgx4__JHASH__"),
            children: j.jsxs(d("WAWebDropdown.react").Dropdown, {
                type: d("WAWebDropdown.react").MenuType.DropdownMenu,
                flipOnRTL: !0,
                dirX: d("WAWebDropdown.react").DirX.LEFT,
                children: [j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: a,
                    children: h._("__JHASH__yncEhAlcaY6__JHASH__")
                }), g && j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: g,
                    children: h._("__JHASH__wbGPqZ3Q0Oh__JHASH__")
                }), d("WAWebBizGatingUtils").canSeeECommerceComplianceIndiaCountryOriginExemptBusinessJourney(d("WAWebUserPrefsMeUser").getMeUser()) && i && j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: i,
                    children: h._("__JHASH__GEW-b_5vLT1__JHASH__")
                }, "merchantDetails"), k && j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: k,
                    children: h._("__JHASH__vCoxAeO-9BV__JHASH__")
                }), e != null && j.jsx(c("WAWebAdCreationDropdownItem.react"), {
                    adCreationUrlInput: e.adCreationUrlInput,
                    ctaText: e.ctaText,
                    lwiEntryPoint: d("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CATALOG_LIST_ADVERTISE_MENU_ITEM
                })]
            }, "CatalogDetailHeader")
        }) : j.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            ref: b,
            testid: void 0,
            icon: j.jsx(c("WAWebProductCatalogLinkIcon.react"), {}),
            title: h._("__JHASH__TjtqRRKaMPt__JHASH__"),
            onClick: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a) {
        var b = a.onCartClick,
            c = a.cartCount,
            e = a.catalogId,
            f = a.canManageCatalog,
            g = a.onSendCatalog,
            h = a.onOpenCollections,
            i = a.onOpenMerchantDetailsForm,
            l = a.onOpenSettings,
            m = a.cartIconTheme;
        a = a.boostMenuOptionInput;
        var n;
        if (e != null) {
            var o, p = d("WAWebWidFactory").createWid(e);
            o = ((o = d("WAWebUserPrefsMeUser").getMeUser()) == null ? void 0 : o.equals(p)) === !0;
            n = !o && b ? j.jsx(d("WAWebCommonCartIconMenuBarItem.react").CartIconMenuBarItem, {
                cartCountText: d("WATypeUtils").isNumber(c) && c > 0 ? c.toString() : void 0,
                onClick: b,
                catalogOwnerJid: e,
                cartIconTheme: m
            }) : null
        }
        p = j.jsx(k, {
            canManageCatalog: f,
            onSendCatalog: g,
            onOpenCollections: h,
            onOpenMerchantDetailsForm: i,
            onOpenSettings: l,
            boostMenuOptionInput: a
        });
        return [n, p]
    }
    g.getCatalogDrawerMenu = b
}), 226);
__d("WAWebProductCatalogLinkText.react", ["WAWebCopyPasteSelectable.react", "react"], (function (a, b, c, d, e, f, g) {
    var h, i = h || c("react");

    function a(a) {
        var b = a.href,
            c = a.id,
            e = a.noHandle;
        a = a.onClick;
        return i.jsx("span", {
            className: "x1vvkbs xeaf4i8",
            children: i.jsx(d("WAWebCopyPasteSelectable.react").SelectableLink, {
                id: c,
                href: b,
                className: "x1eqckd8",
                selectable: !0,
                onClick: a,
                "data-nohandle": e,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebSendLinkButton.react", ["fbt", "WAWebDrawerButton.react", "WAWebForwardIcon", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            icon: {
                color: "xw63xux",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.divider;
        a = a.onClick;
        return j.jsx(d("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            icon: j.jsx(d("WAWebForwardIcon").ForwardIcon, {
                xstyle: k.icon
            }),
            onClick: a,
            divider: b,
            children: h._("__JHASH__Bc6tNi26J9H__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCatalogCatalogLinkDrawer.react", ["fbt", "WAWebBizSendCatalogLinkFlow.react", "WAWebCatalogShortLinkUtils", "WAWebCellFrame.react", "WAWebCopyLinkButton.react", "WAWebDetailImage.react", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebModalManager", "WAWebName.react", "WAWebProductCatalogContext", "WAWebProductCatalogLinkText.react", "WAWebProductCatalogLogEvents", "WAWebSendLinkButton.react", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l = k || c("react"),
        m = (i || (i = d("react"))).useContext,
        n = {
            prompt: {
                lineHeight: "x101yacv",
                $$css: !0
            }
        },
        o = "catalog-link-anchor";
    b = l.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.onBack,
            f = a.onCancel,
            g = a.catalog,
            i = a.contact,
            k = a.prompt,
            p = a.centerDrawer,
            q = a.onSend,
            r = m(d("WAWebDrawerContext").DrawerContext),
            s = function () {
                d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebBizSendCatalogLinkFlow.react"), {
                    catalog: g,
                    onSend: q
                }), {
                    transition: "modal-flow"
                }), d("WAWebProductCatalogLogEvents").logShareCatalogViaWALinkClick({
                    catalogOwnerWid: g.id,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(r)
                })
            };
        a = function (a) {
            a.preventDefault(), s()
        };
        var t = function () {
                d("WAWebProductCatalogLogEvents").logShareCatalogCopyLinkClick({
                    catalogOwnerWid: g.id,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(r)
                })
            },
            u = l.jsx(d("WAWebDetailImage.react").DetailImage, {
                id: i.id,
                size: 82,
                quality: d("WAWebDetailImage.react").DetailImageQuality.High
            }),
            v, w;
        p && (v = "labels", w = "center-column");
        return l.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            theme: v,
            children: [l.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: h._("__JHASH__TjtqRRKaMPt__JHASH__"),
                onBack: e,
                onCancel: f,
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            }), l.jsxs(c("WAWebDrawerBody.react"), {
                theme: w,
                children: [l.jsx("div", {
                    className: (j || (j = c("stylex")))([n.prompt, d("WAWebUISpacing").uiPadding.top0, d("WAWebUISpacing").uiPadding.horiz20, d("WAWebUISpacing").uiPadding.bottom10]),
                    children: k
                }), l.jsx(c("WAWebCellFrame.react"), {
                    image: u,
                    primary: l.jsx(d("WAWebName.react").Name, {
                        contact: i,
                        useVerifiedName: !0
                    }),
                    theme: "identity",
                    secondary: l.jsx(c("WAWebProductCatalogLinkText.react"), {
                        id: o,
                        href: d("WAWebCatalogShortLinkUtils").createCatalogLink(g.id.user),
                        onClick: a,
                        noHandle: !0
                    })
                }), l.jsx(c("WAWebSendLinkButton.react"), {
                    onClick: s
                }), l.jsx(c("WAWebCopyLinkButton.react"), {
                    elementId: o,
                    onClick: t
                })]
            })]
        }, "catalog-link-drawer")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebProductCatalogCheckCartEnabled", ["WAWebBusinessProfileCollection", "asyncToGeneratorRuntime"], (function (a, b, c, d, e, f, g) {
    function a(a) {
        return h.apply(this, arguments)
    }

    function h() {
        h = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
            var b = d("WAWebBusinessProfileCollection").BusinessProfileCollection.get(a);
            if (!b || b.stale) {
                a = (yield d("WAWebBusinessProfileCollection").BusinessProfileCollection.update(a));
                b = Array.isArray(a) ? a[0] : a
            }
            return ((a = b.profileOptions) == null ? void 0 : a.cartEnabled) || !1
        });
        return h.apply(this, arguments)
    }
    g["default"] = a
}), 98);
__d("WAWebProductCatalogDetailDrawerMenu.react", ["fbt", "WATypeUtils", "WAWebBizGatingUtils", "WAWebCommonCartIconMenuBarItem.react", "WAWebDropdown.react", "WAWebDropdownItem.react", "WAWebMenuBar.react", "WAWebMenuIcon", "WAWebProductCatalogLinkIcon.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react");

    function a(a) {
        var b = a.contactId,
            e = a.onSendProduct,
            f = a.onReportProduct,
            g = a.onProductLinkClick,
            i = a.onProductMoreInformation,
            k = a.onCartClick,
            l = a.cartCount;
        a = a.catalogId;
        l = k && a != null ? j.jsx(d("WAWebCommonCartIconMenuBarItem.react").CartIconMenuBarItem, {
            cartCountText: d("WATypeUtils").isNumber(l) && l > 0 ? l.toString() : void 0,
            onClick: k,
            catalogOwnerJid: a
        }) : null;
        return [l, j.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            testid: void 0,
            icon: j.jsx(c("WAWebProductCatalogLinkIcon.react"), {}),
            title: h._("__JHASH__M2ITo9YlMVM__JHASH__"),
            onClick: g
        }, "link"), j.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            testid: void 0,
            icon: j.jsx(d("WAWebMenuIcon").MenuIcon, {}),
            title: h._("__JHASH__hskmX_lsgx4__JHASH__"),
            children: j.jsxs(d("WAWebDropdown.react").Dropdown, {
                type: d("WAWebDropdown.react").MenuType.DropdownMenu,
                flipOnRTL: !0,
                dirX: d("WAWebDropdown.react").DirX.LEFT,
                children: [j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: e,
                    children: h._("__JHASH__4JUQUKkFsuw__JHASH__")
                }), d("WAWebBizGatingUtils").canSeeECommerceComplianceIndiaSoftEnforcement(b) && j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: i,
                    children: h._("__JHASH__7krv-luSRnY__JHASH__")
                }), j.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: f,
                    children: h._("__JHASH__1pJzxB9fPnW__JHASH__")
                })]
            }, "ProductDetailHeader")
        }, "dropdown")]
    }
    g.getDetailDrawerMenu = a
}), 226);
__d("WAWebProductCatalogFetchState", ["WALogger", "WAWebBackendErrors", "WAWebMiscErrors"], (function (a, b, c, d, e, f, g) {
    function h() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["parseErrorState:Failed to fetch from server"]);
        h = function () {
            return a
        };
        return a
    }

    function a(a, b) {
        if (a instanceof d("WAWebMiscErrors").Unmount) return;
        else if (a instanceof d("WAWebBackendErrors").ServerStatusCodeError) a.status === "not_found" || a.status === 404 ? b("NOT_FOUND") : (b("ERROR"), d("WALogger").WARN(h()).devConsole(a));
        else {
            b("ERROR");
            throw a
        }
    }
    g.parseErrorState = a
}), 98);
__d("WAWebProductCatalogFetchStateTopBar.react", ["fbt", "WAWebSpinner.react", "WAWebUISpacing", "WAWebWDSText.react", "err", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react"),
        l = {
            loadingContainer: {
                position: "x10l6tqk",
                zIndex: "xa1v5g2",
                boxSizing: "x9f619",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                width: "xh8yej3",
                backgroundColor: "x150wa6m",
                boxShadow: "x1499u3w",
                opacity: "x1hc1fzr",
                transitionDelay: "x1ojkfpl",
                transitionTimingFunction: "x9lcvmn",
                $$css: !0
            },
            text: {
                fontWeight: "xk50ysn",
                $$css: !0
            },
            loadingText: {
                color: "xxr6tci",
                $$css: !0
            }
        };

    function a(a) {
        a = a.fetchState;
        switch (a) {
            case "NONE":
            case "SUCCESS":
                return null;
            case "PENDING":
                return k.jsxs("div", {
                    className: (j || (j = c("stylex")))(l.loadingContainer, d("WAWebUISpacing").uiPadding.all8),
                    children: [k.jsx(d("WAWebSpinner.react").Spinner, {
                        size: 14,
                        color: "highlight"
                    }), k.jsx(d("WAWebWDSText.react").WDSTextSmall, {
                        as: "span",
                        xstyle: [l.text, d("WAWebUISpacing").uiMargin.horiz10, l.loadingText],
                        children: h._("__JHASH__dOJAzOdCPwH__JHASH__")
                    })]
                });
            case "NOT_FOUND":
            case "ERROR":
                return k.jsx("div", {
                    className: (j || (j = c("stylex")))(l.loadingContainer, d("WAWebUISpacing").uiPadding.all8),
                    children: k.jsx(d("WAWebWDSText.react").WDSTextSmall, {
                        as: "span",
                        xstyle: [l.text, d("WAWebUISpacing").uiMargin.horiz10],
                        color: "critical",
                        children: a === "NOT_FOUND" ? h._("__JHASH__M459z--6h5t__JHASH__") : h._("__JHASH__P9SLuXIUjdB__JHASH__")
                    })
                });
            default:
                a;
                throw c("err")("invalid fetchState " + a)
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCatalogList.react", ["WAWebDrawerContext", "WAWebDrawerManager", "WAWebFlatList.react", "WAWebFlatListContainer.react", "WAWebListKeyPool", "WAWebManageActions", "WAWebProductCatalogCatalogConstants", "WAWebProductCatalogContext", "WAWebProductCatalogListItem.react", "WAWebProductCatalogLogEvents", "WAWebStateUtils", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = i || c("react"),
        k = (h || (h = d("react"))).useState,
        l = d("WAWebFlatList.react").FlatListFactory();

    function a(a) {
        var b = a.onProductDetail,
            e = a.onProductShare,
            f = a.onCartOpen,
            g = a.shareLinks,
            h = a.canManageCatalog,
            i = k(void 0),
            m = i[0],
            n = i[1],
            o = d("useWAWebModelValues").useModelValues(a.catalog, ["productCollection", "afterCursor", "id", "index"]),
            p = function (a, c) {
                d("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
                    product: d("WAWebStateUtils").unproxy(a),
                    catalogContext: c
                });
                n(a.id.toString());
                return b(a)
            },
            q = function (a) {
                e && e(a)
            },
            r = function (a, b) {
                d("WAWebManageActions").handleProductDelete(o, a, b, "Catalog").then(function (b) {
                    a.id === m && (d("WAWebDrawerManager").DrawerManager.closeDrawerMid(), n(void 0))
                })
            },
            s = function (a, b) {
                d("WAWebManageActions").handleProductVisibilityChange(o, a, b, "Catalog")
            };
        i = function () {
            var a = f !== void 0,
                b = o.productCollection.getProductModels(h);
            return b.map(function (b) {
                return {
                    itemKey: b.id.toString() + "_" + a.toString(),
                    product: b
                }
            })
        };
        return !o.productCollection || !o.productCollection.getProductModels(a.canManageCatalog).length ? null : j.jsx(c("WAWebFlatListContainer.react"), {
            flatListControllers: [a.flatListController],
            children: j.jsx(l, {
                flatListController: a.flatListController,
                direction: "vertical",
                forceConsistentRenderCount: !1,
                data: i(),
                renderItem: function (a) {
                    var b = a.product;
                    return j.jsx(d("WAWebDrawerContext").DrawerContext.Consumer, {
                        children: function (a) {
                            var e = d("WAWebProductCatalogContext").getProductCatalogContext(a);
                            return j.jsx(c("WAWebProductCatalogListItem.react"), {
                                product: b,
                                onCartOpen: f,
                                onClick: function () {
                                    return p(b, e)
                                },
                                onProductShare: g ? q : null,
                                onProductDelete: function (a) {
                                    return r(a, e)
                                },
                                onProductHideShow: function (a) {
                                    return s(a, e)
                                },
                                canManageCatalog: h
                            })
                        }
                    })
                },
                defaultItemHeight: d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT,
                keyOrder: d("WAWebListKeyPool").KeyOrder.INVERSE
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebProductCatalogProductDetailsInfo.react", ["fbt", "WAWebAddToCartIcon.react", "WAWebBizGatingUtils", "WAWebBizGetProductQuantityCartAction", "WAWebButton.react", "WAWebCartQuantityControls.react", "WAWebConstantsDeprecated", "WAWebDrawerContext", "WAWebDrawerSection.react", "WAWebEmojiText.react", "WAWebExternalLink.react", "WAWebFormatConfiguration", "WAWebLinkify", "WAWebManageCart", "WAWebNonEmptyString", "WAWebProductCatalogCheckCartEnabled", "WAWebProductCatalogContext", "WAWebProductCatalogLogEvents", "WAWebProductCatalogProductPriceInfoText.react", "WAWebProductCollection", "WAWebProductTypes.flow", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebStateUtils", "WAWebText_DONOTUSE.react", "WAWebUISpacing", "WAWebUserPrefsMeUser", "WAWebWDSText.react", "react", "stylex", "useHoverState", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useContext,
        n = b.useEffect,
        o = b.useState,
        p = {
            addToCartIconDisabled: {
                color: "x1pumdge",
                ":hover_color": "xnvlsoe",
                $$css: !0
            },
            addToCartIcon: {
                color: "x1jrnqrx",
                ":hover_color": "x1qop01p",
                $$css: !0
            },
            addToCartBtnHoverIcon: {
                color: "x14uf0s6",
                ":hover_color": "x12bbwn8",
                $$css: !0
            },
            buttonContainer: {
                display: "x78zum5",
                textAlign: "x2b8uid",
                $$css: !0
            },
            addToCartContainer: {
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyItems: "x1o2pa38",
                $$css: !0
            },
            addToCartContainerWithIcon: {
                marginTop: "x1rdy4ex",
                marginEnd: "x11i5rnm",
                marginBottom: "x4vbgl9",
                marginStart: "x1mh8g0r",
                $$css: !0
            },
            description: {
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                wordWrap: "x1vvkbs",
                $$css: !0
            },
            name: {
                fontWeight: "xk50ysn",
                wordWrap: "x1vvkbs",
                $$css: !0
            },
            quantityControls: {
                justifyContent: "xl56j7k",
                marginTop: "xhrpt6u",
                marginBottom: "xat24cr",
                $$css: !0
            }
        };

    function q(a) {
        var b, e = a.isAvailable,
            f = a.onSendChat;
        a = a.product;
        b = ((b = d("WAWebUserPrefsMeUser").getMaybeMeUser()) == null ? void 0 : b.equals(a.catalogWid)) === !0;
        if (b || !f || !a.fetchedFromServer || !e || a.reviewStatus !== d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED) return null;
        b = h._("__JHASH__wh0GNxBz3OL__JHASH__");
        return l.jsx("div", {
            className: (j || (j = c("stylex")))([p.buttonContainer, d("WAWebUISpacing").uiMargin.bottom8]),
            title: b,
            children: l.jsx(c("WAWebButton.react"), {
                testid: void 0,
                onClick: f,
                type: "secondary",
                stretch: !0,
                children: b
            })
        })
    }
    q.displayName = q.name + " [from " + f.id + "]";

    function r(a) {
        var b, e = a.cartEnabled,
            f = a.collectionId,
            g = a.context,
            i = a.isAvailable,
            k = a.onClick;
        a = a.product;
        var m = c("useHoverState")(),
            n = m.isHovered,
            o = m.onMouseEnter;
        m = m.onMouseLeave;
        b = ((b = d("WAWebUserPrefsMeUser").getMaybeMeUser()) == null ? void 0 : b.equals(a.catalogWid)) === !0;
        if (b || !e || !a.fetchedFromServer || !i || a.reviewStatus !== d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED) return null;
        b = d("WAWebBizGatingUtils").isQuantityControlsFeatureEnabled();
        e = h._("__JHASH__s9ygGFuWxqH__JHASH__");
        i = d("WAWebProductTypes.flow").PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(a.availability);
        var q = null;
        i ? q = p.addToCartIconDisabled : n ? q = p.addToCartBtnHoverIcon : q = p.addToCartIcon;
        n = c("WAWebBizGetProductQuantityCartAction")(a.id, a.catalogWid);
        q = b ? null : l.jsx(c("WAWebAddToCartIcon.react"), {
            colorXStyle: q
        });
        n = b && n > 0 ? l.jsx(c("WAWebCartQuantityControls.react"), {
            product: a,
            context: g,
            collectionId: f || ""
        }) : l.jsx(c("WAWebButton.react"), {
            testid: void 0,
            onClick: k,
            type: "secondary",
            disabled: i,
            stretch: !0,
            children: l.jsxs("span", {
                className: (j || (j = c("stylex")))(p.addToCartContainer, q && p.addToCartContainerWithIcon),
                children: [q, e]
            })
        });
        return l.jsx("div", {
            className: (j || (j = c("stylex")))(p.buttonContainer, b && p.quantityControls),
            title: e,
            onMouseEnter: o,
            onMouseLeave: m,
            children: n
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function s(a) {
        var b = a.isAvailable,
            c = a.onClick;
        a = a.product;
        var e = a.url;
        if (!a.fetchedFromServer || !d("WAWebNonEmptyString").isNonEmptyString(e) || !b) return null;
        a = d("WAWebFormatConfiguration").TrustedGroupDesc({
            links: d("WAWebLinkify").findLinks(e)
        });
        return l.jsx("div", {
            children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                selectable: !0,
                formatters: a,
                text: e,
                onClick: function (a) {
                    return c(a, e)
                }
            })
        })
    }
    s.displayName = s.name + " [from " + f.id + "]";

    function t(a) {
        var b = a.hideRetailerID,
            e = a.isAvailable,
            f = a.isDescExpanded,
            g = a.onClickUrl,
            i = a.onReadMore;
        a = a.product;
        if (!a.description && !a.url && !a.retailerId) return null;
        var k = a.description ? a.description.length > c("WAWebConstantsDeprecated").GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH : !1,
            m;
        a.description && (m = l.jsxs("div", {
            children: [l.jsx(d("WAWebEmojiText.react").EmojiText, {
                selectable: !0,
                multiline: !0,
                text: a.description,
                textLimit: f ? Infinity : c("WAWebConstantsDeprecated").GROUP_DESCRIPTION_INFO_PANEL_TRUNC_LENGTH
            }), k && !f ? l.jsxs("span", {
                className: "x1a06ls3",
                role: "button",
                onClick: i,
                children: [" ", h._("__JHASH__YmkFxppzHPq__JHASH__")]
            }) : null]
        }));
        return l.jsxs(d("WAWebText_DONOTUSE.react").TextDiv, {
            theme: "plain",
            className: (j || (j = c("stylex")))([p.description, d("WAWebUISpacing").uiMargin.bottom20]),
            children: [m, l.jsx(s, {
                isAvailable: e,
                product: a,
                onClick: g
            }), a.retailerId && !b ? l.jsx("div", {
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: a.retailerId,
                    selectable: !0,
                    direction: "inherit"
                })
            }) : null]
        })
    }
    t.displayName = t.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.collectionId,
            e = a.onSendChat,
            f = a.onAddToCart,
            g = a.isAvailable,
            h = m(d("WAWebDrawerContext").DrawerContext),
            i = d("useWAWebModelValues").useModelValues(a.product, ["name", "url", "description", "availability", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "fetchedFromServer", "retailerId", "catalogWid", "productImageCollection", "imageHash", "reviewStatus", "imageCdnUrl", "id", "maxAvailable"]),
            k = o(!1),
            s = k[0],
            u = k[1];
        k = o(!1);
        var v = k[0],
            w = k[1];
        n(function () {
            c("WAWebProductCatalogCheckCartEnabled")(i.catalogWid).then(function (a) {
                w(a)
            })
        }, []);
        k = function () {
            e == null ? void 0 : e()
        };
        var x = function (a) {
                d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_CART_ADD, {
                    annotations: {
                        string: {
                            EntryPoint: "Product"
                        }
                    }
                }), d("WAWebManageCart").addToCart(i, d("WAWebProductCatalogContext").getProductCatalogContext(h), b), f == null ? void 0 : f(), a.stopPropagation()
            },
            y = function () {
                u(!0)
            },
            z = function (a, b) {
                a.stopPropagation();
                d("WAWebProductCatalogLogEvents").logDetailLinkClick({
                    product: d("WAWebStateUtils").unproxy(i),
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(h)
                });
                a = b ? d("WAWebLinkify").findLink(b) : null;
                if (!a) return;
                d("WAWebExternalLink.react").openExternalLink(a.url);
                return
            };
        return l.jsxs(c("WAWebDrawerSection.react"), {
            theme: "padding-product",
            animation: !1,
            children: [l.jsx(d("WAWebWDSText.react").WDSTextTitle, {
                xstyle: [p.name, d("WAWebUISpacing").uiMargin.bottom12],
                children: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                    text: i.name,
                    selectable: !0
                })
            }), i.priceAmount1000 != null ? l.jsx(d("WAWebText_DONOTUSE.react").TextDiv, {
                className: (j || (j = c("stylex")))(d("WAWebUISpacing").uiMargin.bottom12),
                color: "dark",
                theme: "plain",
                children: l.jsx(c("WAWebProductCatalogProductPriceInfoText.react"), {
                    product: i,
                    selectable: !0,
                    direction: "inherit"
                })
            }) : null, l.jsx(t, {
                product: i,
                isAvailable: g,
                isDescExpanded: s,
                hideRetailerID: a.hideRetailerID === !0,
                onReadMore: y,
                onClickUrl: z
            }), l.jsx(q, {
                onSendChat: k,
                isAvailable: g,
                product: i
            }), l.jsx(r, {
                collectionId: b,
                cartEnabled: v,
                isAvailable: g,
                product: i,
                onClick: x,
                context: h
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCollectionCatalogPostcodeChangeModal", ["fbt", "$InternalEnum", "WALogger", "WAWebBizVerifyPostcodeAction", "WAWebConfirmPopup.react", "WAWebExternalLink.react", "WAWebFaqUrl", "WAWebFbtCommon", "WAWebRichTextField.react", "WAWebText_DONOTUSE.react", "WAWebWDSText.react", "asyncToGeneratorRuntime", "react", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[direct-connection] Updating postcode failed ", ""]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        m = e.useCallback,
        n = e.useState,
        o = b("$InternalEnum").Mirrored(["NOT_STARTED", "COMPLETED", "FAILED", "IN_PROGRESS"]),
        p = {
            infoText: {
                fontSize: "x1jchvi3",
                lineHeight: "xdod15v",
                marginBottom: "xod5an3",
                $$css: !0
            },
            privacyText: {
                fontSize: "x1f6kntn",
                lineHeight: "x1d3mw78",
                marginTop: "x14vqqas",
                $$css: !0
            }
        };

    function a(a) {
        var e, f = a.catalogId,
            g = a.existingPostcode,
            i = a.onCancel,
            j = a.onSuccess,
            q = c("useWAWebUnmountSignal")();
        a = n({
            state: o.NOT_STARTED
        });
        var r = a[0],
            s = a[1];
        a = n(g);
        var t = a[0],
            u = a[1];
        a = g === t;
        var v = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (typeof t !== "string") return;
                    s({
                        state: o.IN_PROGRESS
                    });
                    try {
                        var a = (yield d("WAWebBizVerifyPostcodeAction").verifyPostcode(f, t));
                        q.aborted || s({
                            state: o.COMPLETED,
                            data: a
                        });
                        (a == null ? void 0 : a.resultCode) === "success" && j()
                    } catch (a) {
                        d("WALogger").ERROR(k(), a).verbose().devConsole(a).sendLogs("[direct-connection] Updating postcode failed");
                        if (q.aborted) return;
                        s({
                            state: o.FAILED
                        })
                    }
                });
                return function () {
                    return a.apply(this, arguments)
                }
            }(),
            w = m(function () {
                return s({
                    state: o.NOT_STARTED
                })
            }, []),
            x = ((g = r.data) == null ? void 0 : g.resultCode) === "unserviceable_location",
            y = function (a) {
                w(), u(a)
            };
        g = null;
        var z = h._("__JHASH__u9FW_CSUpXp__JHASH__");
        ((e = r.data) == null ? void 0 : e.resultCode) === "invalid_postcode" ? g = z: typeof t !== "string" || t.length === 0 ? g = z : t.search("^[0-9]{6}$") !== 0 && (g = z);
        e = r.state === o.IN_PROGRESS;
        var A = e || g != null || a,
            B = function () {
                if (A) return;
                x ? w() : v()
            };
        z = function () {
            B()
        };
        return l.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
            onOK: B,
            title: x ? null : h._("__JHASH__UHQFqVgAZjB__JHASH__"),
            okDisabled: A,
            okSpinner: e,
            okText: x ? c("WAWebFbtCommon")("OK") : h._("__JHASH__Q0Ru6jWOpHK__JHASH__"),
            onCancel: x ? null : i,
            cancelDisabled: e,
            children: x ? l.jsx(d("WAWebText_DONOTUSE.react").Text, {
                as: "p",
                testid: void 0,
                children: h._("__JHASH__ZQxPosqi9De__JHASH__")
            }) : l.jsxs(l.Fragment, {
                children: [l.jsx(d("WAWebText_DONOTUSE.react").Text, {
                    as: "p",
                    xstyle: p.infoText,
                    children: h._("__JHASH__xhHVBjtWTlw__JHASH__")
                }), l.jsx(d("WAWebRichTextField.react").RichTextField, {
                    testid: void 0,
                    onChange: function (a) {
                        a = a.text;
                        return y(a)
                    },
                    value: t,
                    managed: !0,
                    editable: !e,
                    managedError: !0,
                    selectOnMount: !0,
                    focusOnMount: !0,
                    error: g,
                    onEnter: z
                }), l.jsxs(d("WAWebWDSText.react").WDSTextMuted, {
                    as: "p",
                    xstyle: p.privacyText,
                    children: [h._("__JHASH__bEwHCTFzM2A__JHASH__"), " ", l.jsx(d("WAWebExternalLink.react").ExternalLink, {
                        href: d("WAWebFaqUrl").getJioMartPostcodeChangeLearnMoreLink(),
                        children: h._("__JHASH__iWPg7QTE_wh__JHASH__")
                    })]
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCatalogProductPostcodeChangeBanner", ["fbt", "WALogger", "WAWebBusinessDirectConnectionCollection", "WAWebClickableLink.react", "WAWebModalManager", "WAWebProductCollectionCatalogPostcodeChangeModal", "asyncToGeneratorRuntime", "react", "useBoolean", "useWAWebModelValues", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[direct-connection] Setting cypher failed in PDP ", ""]);
        k = function () {
            return a
        };
        return a
    }
    e = j || d("react");
    var l = i || (i = c("react")),
        m = e.useEffect,
        n = e.useState;

    function o(a) {
        var b = a.postcode,
            e = a.catalogWid,
            f = a.postcodeChangeSuccess;
        a = function () {
            d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebProductCollectionCatalogPostcodeChangeModal"), {
                existingPostcode: b,
                catalogId: e,
                onCancel: function () {
                    return d("WAWebModalManager").ModalManager.close()
                },
                onSuccess: function () {
                    d("WAWebModalManager").ModalManager.close(), f()
                }
            }))
        };
        return l.jsx(c("WAWebClickableLink.react"), {
            onClick: a,
            children: h._("__JHASH__vqD67G-VRqS__JHASH__")
        })
    }
    o.displayName = o.name + " [from " + f.id + "]";

    function p(a) {
        var b = a.businessDirectConnection,
            c = a.catalogWid;
        a = a.postcodeChangeSuccess;
        b = d("useWAWebModelValues").useModelValues(b, ["postcode"]);
        b = b.postcode;
        return b == null ? null : l.jsxs(l.Fragment, {
            children: [h._("__JHASH__fNj-BENK6jW__JHASH__", [h._param("area-postcode", b)]), "\xa0", l.jsx(o, {
                postcode: b,
                catalogWid: c,
                postcodeChangeSuccess: a
            })]
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function a(a) {
        var e = a.catalogWid;
        a = a.postcodeChangeSuccess;
        var f = n(null),
            g = f[0],
            h = f[1];
        f = c("useBoolean")(!0);
        var i = f.value,
            j = f.set,
            o = c("useWAWebUnmountSignal")();
        m(function () {
            var a = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    try {
                        var a = (yield c("WAWebBusinessDirectConnectionCollection").getCypher(e));
                        if (o.aborted) return;
                        h(a)
                    } catch (a) {
                        d("WALogger").ERROR(k(), a).verbose().devConsole(a).sendLogs("direct-connection-setting-cypher-failed-in-pdp")
                    }
                    if (o.aborted) return;
                    j(!1)
                });
                return function () {
                    return a.apply(this, arguments)
                }
            }();
            void a()
        }, [e, j, o]);
        return i || g == null ? null : l.jsx(p, {
            businessDirectConnection: g,
            catalogWid: e,
            postcodeChangeSuccess: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProductPostcodeChangeBanner = a
}), 226);
__d("WAWebProductCatalogProductTile.react", ["WAWebBizGatingUtils", "WAWebCmd", "WAWebDrawerContext", "WAWebImageCarousel.react", "WAWebProductCatalogContext", "WAWebProductCatalogLogEvents", "WAWebStateUtils", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = i || c("react"),
        k = (h || (h = d("react"))).useContext;

    function a(a) {
        var b = a.isAvailable,
            e = a.fetching,
            f = k(d("WAWebDrawerContext").DrawerContext),
            g = d("useWAWebModelValues").useModelValues(a.product, ["productImageCollection", "productMsgMediaData", "catalogWid", "imageCdnUrl", "videos"]);
        a = function (a, b) {
            d("WAWebProductCatalogLogEvents").logDetailImageClick({
                product: d("WAWebStateUtils").unproxy(g),
                catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(f)
            });
            var c = function () {
                return a
            };
            b = {
                activeProductImage: b,
                productImageCollection: g.lazyloadProductImageCollection(),
                getZoomNode: c,
                product: g
            };
            d("WAWebCmd").Cmd.productImageViewerModal(b, d("WAWebProductCatalogContext").getProductCatalogSessionId(f))
        };
        var h = g.lazyloadProductImageCollection().toArray(),
            i = g.videos != null && !d("WAWebBizGatingUtils").isCatalogVideoViewEnabled() && d("WAWebBizGatingUtils").isCatalogVideoViewFallbackEnabled();
        return j.jsx("div", {
            className: "xh8yej3",
            children: j.jsx(c("WAWebImageCarousel.react"), {
                images: h,
                fetching: e,
                onClick: b ? a : null,
                renderFallback: !b,
                fallbackMediaData: g.productMsgMediaData,
                showUnsupportedVideoPlaceholder: i
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebProductCatalogReportProductChoicePopup.react", ["fbt", "WAWebButton.react", "WAWebKeyboardHotKeys.react", "WAWebModal.react", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = i || c("react");
    b = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.onPopupCancel,
            f = a.onReport;
        a = h._("__JHASH__-jvuTbG32IM__JHASH__");
        var g = k.jsx("div", {
                children: h._("__JHASH__6iBRKeTh3rS__JHASH__")
            }, "ReportProductChoicePopup-desc"),
            i = k.jsx(c("WAWebButton.react"), {
                testid: void 0,
                type: "secondary",
                onClick: function () {
                    return f()
                },
                children: h._("__JHASH__EB9B96HoOOR__JHASH__")
            }, "ReportProductChoicePopup-reportBtn"),
            l = k.jsx(c("WAWebButton.react"), {
                type: "secondary",
                onClick: e,
                children: h._("__JHASH__JomY4EcHzcJ__JHASH__")
            }, 0);
        e = {
            escape: e
        };
        i = k.jsxs("div", {
            className: "x78zum5 xdt5ytf",
            children: [k.jsx("div", {
                className: (j || (j = c("stylex")))(d("WAWebUISpacing").uiMargin.top4),
                children: i
            }), k.jsx("div", {
                className: j(d("WAWebUISpacing").uiMargin.top4),
                children: l
            })]
        });
        return k.jsx(d("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: b,
            handlers: e,
            children: k.jsx(d("WAWebModal.react").Modal, {
                title: a,
                actions: i,
                children: g
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebProductCatalogReportProductReasonPopup.react", ["fbt", "WAWebButton.react", "WAWebKeyboardHotKeys.react", "WAWebModal.react", "WAWebRadio.react", "WAWebToast.react", "WAWebToastManager", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useState;
    b = {
        ILLEGAL: "ILLEGAL",
        KNOCKOFF: "KNOCKOFF",
        NO_MATCH: "NO_MATCH",
        OTHER: "OTHER",
        SCAM: "SCAM",
        SPAM: "SPAM"
    };
    var m = [b.NO_MATCH, b.SPAM, b.ILLEGAL, b.SCAM, b.KNOCKOFF, b.OTHER];
    e = k.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.onCancel,
            f = a.onTellUsMoreSubmit;
        a = l(null);
        var g = a[0],
            i = a[1];
        a = function () {
            e == null ? void 0 : e()
        };
        var j = function (a) {
                i(a)
            },
            o = function () {
                d("WAWebToastManager").ToastManager.open(k.jsx(d("WAWebToast.react").Toast, {
                    msg: h._("__JHASH__Uh5jodh2IjQ__JHASH__")
                }))
            },
            p = function () {
                if (g == null || !m.includes(g)) return o();
                f(g)
            },
            q = h._("__JHASH__nI8gDIX75I4__JHASH__"),
            r = k.jsx("div", {
                className: "x78zum5",
                children: k.jsx("ul", {
                    className: "x1n2onr6 x98rzlu",
                    children: m.map(function (a) {
                        return k.jsx("li", {
                            children: k.jsx(d("WAWebRadio.react").RadioWithLabel, {
                                name: a,
                                value: a,
                                label: k.jsx(n, {
                                    reason: a
                                }),
                                checked: g === a,
                                onChange: function () {
                                    return j(a)
                                }
                            })
                        }, "ReportProductReasonPopup-" + a + "-option")
                    })
                })
            });
        p = k.jsx(c("WAWebButton.react"), {
            testid: void 0,
            type: "primary",
            onClick: p,
            disabled: !g,
            children: h._("__JHASH__onXvWlek8By__JHASH__")
        }, "ReportProductReasonPopup-submitButton");
        var s = k.jsx(c("WAWebButton.react"), {
            type: "secondary",
            testid: void 0,
            onClick: a,
            children: h._("__JHASH__JomY4EcHzcJ__JHASH__")
        }, "ReportProductReasonPopup-cancelButton");
        a = {
            escape: a
        };
        s = k.jsxs("div", {
            className: "x78zum5 xfex06f",
            children: [s, p]
        });
        return k.jsx(d("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: b,
            handlers: a,
            children: k.jsx(d("WAWebModal.react").Modal, {
                title: q,
                actions: s,
                children: r
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e;

    function n(a) {
        a = a.reason;
        switch (a) {
            case "NO_MATCH":
                return h._("__JHASH__jcP76WospGS__JHASH__");
            case "SPAM":
                return h._("__JHASH__oXZbxcGEFDD__JHASH__");
            case "ILLEGAL":
                return h._("__JHASH__mmLpRqSUIKY__JHASH__");
            case "SCAM":
                return h._("__JHASH__cYgYibah280__JHASH__");
            case "KNOCKOFF":
                return h._("__JHASH__A7Tlx9AsYUX__JHASH__");
            case "OTHER":
                return h._("__JHASH__n_Ecg5JOTXz__JHASH__")
        }
    }
    n.displayName = n.name + " [from " + f.id + "]";
    g["default"] = b
}), 226);
__d("WAWebProductCatalogReportProductFlow", ["fbt", "$InternalEnum", "WALogger", "WAQplTypes", "WAWebActionToast.react", "WAWebBizProductCatalogAction", "WAWebProductCatalogLogEvents", "WAWebProductCatalogReportProductChoicePopup.react", "WAWebProductCatalogReportProductReasonPopup.react", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebStateUtils", "WAWebToastManager", "react", "useWAWebFlow"], (function (a, b, c, d, e, f, g, h) {
    var i;

    function j() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["error submitting product report"]);
        j = function () {
            return a
        };
        return a
    }
    var k = i || c("react"),
        l = b("$InternalEnum").Mirrored(["ReportProductChoice", "TellUsMore"]);

    function a(a) {
        var b = d("useWAWebFlow").useFlow(l.ReportProductChoice),
            e = b[0],
            f = b[1];
        if (f.step == null) return null;
        var g = function (b) {
                var c = a.product;
                return d("WAWebBizProductCatalogAction").reportProduct(c.catalogWid, c.id.toString(), b)
            },
            i = function () {
                f.end()
            },
            m = function b(c, e) {
                e === void 0 && (e = d("WAWebActionToast.react").genId());
                var f = a.product,
                    l = a.sessionId,
                    m = g(c),
                    n = new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__o4MWzIpLo1L__JHASH__")),
                    o = m.then(function () {
                        d("WAWebProductCatalogLogEvents").logReportProductSuccess({
                            product: d("WAWebStateUtils").unproxy(f),
                            catalogSessionId: l,
                            reason: c || ""
                        });
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, d("WAQplTypes").QuickLogActionType.SUCCESS);
                        return new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__c5v1Mgo0g9l__JHASH__").toString() + ". " + h._("__JHASH__UHiMqx-aCa1__JHASH__").toString())
                    })["catch"](function (a) {
                        d("WAWebProductCatalogLogEvents").logReportProductFailure({
                            product: d("WAWebStateUtils").unproxy(f),
                            catalogSessionId: l,
                            reason: c || ""
                        });
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, d("WAQplTypes").QuickLogActionType.FAIL);
                        d("WALogger").WARN(j()).devConsole(a);
                        return new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__KcmX2OmSPPj__JHASH__"), {
                            actionText: h._("__JHASH__8QtB4QTDtNh__JHASH__"),
                            actionHandler: function () {
                                return b(c, e)
                            }
                        })
                    });
                d("WAWebToastManager").ToastManager.open(k.jsx(d("WAWebActionToast.react").ActionToast, {
                    id: e,
                    initialAction: n,
                    pendingAction: o
                }));
                i();
                return m
            };
        b = function () {
            f.push(l.TellUsMore)
        };
        var n = function (a) {
                d("WAWebQplQuickPerformanceLoggerModule").QPL.markerStart(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT), void m(a)
            },
            o = null;
        switch (f.step) {
            case l.ReportProductChoice:
                o = k.jsx(c("WAWebProductCatalogReportProductChoicePopup.react"), {
                    onReport: b,
                    onPopupCancel: i,
                    onCancel: i
                });
                break;
            case l.TellUsMore:
                o = k.jsx(c("WAWebProductCatalogReportProductReasonPopup.react"), {
                    onTellUsMoreSubmit: n,
                    onCancel: i
                });
                break
        }
        return k.jsx(e, {
            flow: f,
            children: o
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCatalogProductDetailsDrawer.react", ["fbt", "Promise", "WAAbortError", "WAFilteredCatch", "WALogger", "WAQplTypes", "WATimeUtils", "WAWebBackendErrors", "WAWebBizGatingUtils", "WAWebBizProductCatalogAction", "WAWebBusinessProfileCollection", "WAWebBusinessProfileUtils", "WAWebCartCollection", "WAWebCatalogCollection", "WAWebChatThreadLogging", "WAWebCmd", "WAWebConfirmPopup.react", "WAWebDirectConnectionGatingUtils", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebFbtCommon", "WAWebModalManager", "WAWebNoop", "WAWebProductCatalogCatalogDrawerSection.react", "WAWebProductCatalogCheckCartEnabled", "WAWebProductCatalogContext", "WAWebProductCatalogDetailDrawerMenu.react", "WAWebProductCatalogLogEvents", "WAWebProductCatalogProductDetailsInfo.react", "WAWebProductCatalogProductPostcodeChangeBanner", "WAWebProductCatalogProductTile.react", "WAWebProductCatalogReportProductFlow", "WAWebProductCollection", "WAWebProductTypes.flow", "WAWebSpinner.react", "WAWebStateUtils", "WAWebUISpacing", "WAWebUserPrefsMeUser", "WAWebUtilsLogQplEvents", "WAWebWDSText.react", "react", "stylex", "useForceUpdate", "useLazyRef", "useWAWebListener", "useWAWebModelValues", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l;

    function m() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product from server"]);
        m = function () {
            return a
        };
        return a
    }

    function n() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Failed to fetch product catalog from server"]);
        n = function () {
            return a
        };
        return a
    }
    e = l || d("react");
    var o = j || (j = c("react")),
        p = e.useContext,
        q = e.useEffect,
        r = e.useState,
        s = {
            availabilityBanner: {
                display: "x78zum5",
                lineHeight: "x1fc57z9",
                backgroundColor: "x1iek97a",
                $$css: !0
            },
            text: {
                fontWeight: "xk50ysn",
                $$css: !0
            },
            loadingText: {
                color: "xxr6tci",
                $$css: !0
            },
            loadingContainer: {
                position: "x10l6tqk",
                zIndex: "xa1v5g2",
                boxSizing: "x9f619",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                width: "xh8yej3",
                background: "xvungr5",
                boxShadow: "x1499u3w",
                opacity: "x1hc1fzr",
                transitionProperty: "xfagghw",
                transitionDuration: "xofcydl",
                transitionTimingFunction: "x9lcvmn",
                $$css: !0
            },
            shiftUp: {
                position: "x10l6tqk",
                zIndex: "xuvdrym",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                width: "xh8yej3",
                background: "xvungr5",
                boxShadow: "x1499u3w",
                transitionProperty: "xfagghw",
                transitionDuration: "x1wsgiic",
                transitionTimingFunction: "x9lcvmn",
                transform: "x1mbp4g0",
                $$css: !0
            },
            body: {
                flex: "x1okw0bk",
                $$css: !0
            }
        };

    function t(a) {
        var b = a.isAvailable,
            e = a.productCatalogFetchState;
        a = a.productFetchState;
        var f;
        a === "ERROR" ? f = o.jsx(d("WAWebWDSText.react").WDSTextSmall, {
            as: "span",
            xstyle: [s.text, d("WAWebUISpacing").uiMargin.horiz10],
            color: "critical",
            children: h._("__JHASH__P9SLuXIUjdB__JHASH__")
        }) : !b ? f = o.jsx(d("WAWebWDSText.react").WDSTextSmall, {
            as: "span",
            xstyle: [s.text, d("WAWebUISpacing").uiMargin.horiz10],
            color: "critical",
            children: h._("__JHASH__M459z--6h5t__JHASH__")
        }) : f = [o.jsx(d("WAWebSpinner.react").Spinner, {
            size: 14,
            color: "highlight"
        }, "DetailDrawer-loadingBar-spinner"), o.jsx(d("WAWebWDSText.react").WDSTextSmall, {
            as: "span",
            xstyle: [s.text, d("WAWebUISpacing").uiMargin.horiz10, s.loadingText],
            children: h._("__JHASH__dOJAzOdCPwH__JHASH__")
        }, "DetailDrawer-loadingBar-msg")];
        a = a === "PENDING" || e === "PENDING";
        e = a || !b;
        return o.jsx("div", {
            className: (k || (k = c("stylex")))(e && s.loadingContainer, !e && s.shiftUp, e && d("WAWebUISpacing").uiPadding.all8),
            children: f
        })
    }
    t.displayName = t.name + " [from " + f.id + "]";

    function u(a) {
        var b = a.handleBack;
        a = a.menu;
        return o.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
            title: h._("__JHASH__hg9BRt8_aW-__JHASH__"),
            onBack: b,
            type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            menu: a
        })
    }
    u.displayName = u.name + " [from " + f.id + "]";
    e = o.forwardRef(a);

    function a(a, e) {
        a = babelHelpers["extends"]({}, a);
        var f = a.collectionId,
            g = a.onCartClick,
            j = a.onProductLinkClick,
            l = a.onProductMoreInformation,
            v = a.onBack,
            w = a.onProductCatalog,
            x = a.onProductDetail,
            y = a.refreshCarousel,
            z = a.chat,
            A = c("useForceUpdate")(),
            B = c("useWAWebUnmountSignal")(),
            C = p(d("WAWebDrawerContext").DrawerContext),
            D = d("useWAWebModelValues").useModelValues(a.product, ["id", "catalogWid", "productImageCollection", "fetchedFromServer", "name", "availability", "reviewStatus"]),
            E = r(null),
            F = E[0],
            G = E[1];
        E = r(!1);
        var H = E[0],
            I = E[1];
        E = r(null);
        var J = E[0],
            K = E[1];
        E = r("NONE");
        var L = E[0],
            M = E[1];
        E = r("NONE");
        var N = E[0],
            O = E[1];
        E = c("useLazyRef")(function () {
            return d("WAWebCartCollection").CartCollection.findCart(D.catalogWid.toString())
        });
        d("useWAWebListener").useListener(E.current, "change:cartItemCollection", A);
        var P = function () {
                if (v) return v();
                return
            },
            Q = function () {
                var a = D.catalogWid;
                d("WAWebCatalogCollection").CatalogCollection.findCarouselCatalog(a).then(function (a) {
                    if (B.aborted) return;
                    a = Array.isArray(a) ? a[0] : a;
                    K(a || null);
                    O(a ? "SUCCESS" : "NONE")
                })["catch"](d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function (a) {
                    a.status === "not_found" || a.status === 404 ? (K(null), O("NOT_FOUND")) : (K(null), O("ERROR"), d("WALogger").WARN(n()).devConsole(a))
                }))
            },
            R = function () {
                d("WAWebModalManager").ModalManager.open(o.jsx(d("WAWebConfirmPopup.react").ConfirmPopup, {
                    onOK: function () {
                        d("WAWebModalManager").ModalManager.close()
                    },
                    okText: c("WAWebFbtCommon")("OK"),
                    children: h._("__JHASH__M459z--6h5t__JHASH__")
                }))
            },
            S = function () {
                var a = D.catalogWid,
                    b = D.id.toString();
                return d("WAWebCatalogCollection").CatalogCollection.findProduct({
                    catalogWid: a,
                    productId: b,
                    productMsgMediaData: d("WAWebStateUtils").unproxy(D).productMsgMediaData,
                    canLogQpl: !0
                })
            },
            T = function () {
                var a = D.catalogWid,
                    e = S();
                a = d("WAWebBusinessProfileCollection").BusinessProfileCollection.find(a);
                var f = !0;
                return (i || (i = b("Promise"))).all([a, e]).then(function (a) {
                    a = a[0];
                    if (B.aborted) throw new(d("WAAbortError").AbortError)();
                    f = !1;
                    d("WAWebUtilsLogQplEvents").qplEndProductView(d("WAQplTypes").QuickLogActionType.SUCCESS);
                    G(a);
                    M("SUCCESS");
                    return a
                }).then(function (a) {
                    O(function (b) {
                        if (b === "PENDING") {
                            if (!d("WAWebBusinessProfileUtils").hasCatalog(a)) return "NONE";
                            Q()
                        }
                        return b
                    })
                })["catch"](d("WAAbortError").catchAbort(c("WAWebNoop")))["catch"](d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").E404, function () {
                    P(), R(), M("NOT_FOUND"), f = !1, d("WAWebUtilsLogQplEvents").qplDropProductView()
                }))["catch"](d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function (a) {
                    M("ERROR"), d("WALogger").WARN(m()).devConsole(a)
                }))["finally"](function () {
                    f && d("WAWebUtilsLogQplEvents").qplEndProductView(d("WAQplTypes").QuickLogActionType.FAIL)
                })
            };
        q(function () {
            d("WAWebBizGatingUtils").commerceThreadsLoggingEnabled() && z && d("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
                activityType: "pdpViews",
                ts: d("WATimeUtils").unixTime(),
                chatId: z.id
            }]);
            if (y) {
                var a = d("WAWebCatalogCollection").CatalogCollection.get(D.catalogWid);
                (a == null ? void 0 : a.productCollection) && a.fetchedFromServer ? O("SUCCESS") : O("PENDING")
            }
            a = d("WAWebUserPrefsMeUser").getMaybeMeUser();
            d("WAWebUtilsLogQplEvents").qplAnnotateProductView(!(a == null ? void 0 : a.equals(D.catalogWid)));
            a = D.catalogWid;
            var b = D.id.toString();
            if (!a || !b) {
                d("WAWebUtilsLogQplEvents").qplDropProductView();
                return
            }
            T();
            c("WAWebProductCatalogCheckCartEnabled")(a).then(function (a) {
                I(a), d("WAWebProductCatalogLogEvents").logProductDetailView({
                    product: d("WAWebStateUtils").unproxy(D),
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(C),
                    cartToggle: a,
                    collectionId: f
                })
            });
            return function () {
                var a = D.catalogWid,
                    b = D.id.toString();
                if (!a || !b) return;
                a = d("WAWebCatalogCollection").CatalogCollection.get(a);
                b = a && a.msgProductCollection.get(b);
                (b == null ? void 0 : b.fetchedFromServer) && (a && a.msgProductCollection.remove(b))
            }
        }, []);
        A = function () {
            d("WAWebUtilsLogQplEvents").qplStartCartView("Product"), g == null ? void 0 : g(D.catalogWid.toString())
        };
        var U = function () {
                d("WAWebModalManager").ModalManager.open(o.jsx(c("WAWebProductCatalogReportProductFlow"), {
                    product: D,
                    sessionId: d("WAWebProductCatalogContext").getProductCatalogSessionId(C)
                }))
            },
            V = function () {
                d("WAWebProductCatalogLogEvents").logProductShareLinkClick({
                    product: D,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(C)
                }), j(D)
            },
            W = function (a, b) {
                b === void 0 && (b = !0), d("WAWebBizGatingUtils").commerceThreadsLoggingEnabled() && z && d("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging([{
                    activityType: a,
                    ts: d("WATimeUtils").unixTime(),
                    chatId: z.id,
                    boolValue: b
                }])
            },
            X = function () {
                var a = d("WAWebCatalogCollection").CatalogCollection.get(D.catalogWid);
                d("WAWebBizProductCatalogAction").sendProductToChat(D, a, d("WAWebProductCatalogContext").getProductCatalogContext(C));
                W("isCtaOnPdpClicked");
                d("WAWebProductCatalogLogEvents").logProductMessageBusinessClick(D, d("WAWebProductCatalogContext").getProductCatalogContext(C))
            },
            aa = function () {
                W("isCartAddClicked")
            },
            ba = function () {
                var a = D,
                    b = a.catalogWid;
                b = d("WAWebCatalogCollection").CatalogCollection.get(b);
                if (!b) return;
                b = b.productCollection.get(a.id);
                d("WAWebCmd").Cmd.attachProduct({
                    product: b ? d("WAWebStateUtils").unproxy(b) : d("WAWebStateUtils").unproxy(a)
                })
            },
            ca = function () {
                l(D)
            },
            da = function () {
                w && w(D.catalogWid, d("WAWebProductCatalogContext").getProductCatalogContext(C))
            },
            ea = function (a) {
                d("WAWebUtilsLogQplEvents").qplStartProductView("Product");
                if (x) return x(a);
                return
            },
            fa = function () {
                var a = D.reviewStatus;
                return a === d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED
            },
            Y = function () {
                return L !== "ERROR" && L !== "NOT_FOUND" && !fa()
            },
            Z = Y();
        F = d("WAWebBusinessProfileUtils").hasCatalog(F);
        var ga = function () {
                S().then(function () {
                    var a = d("WAWebCatalogCollection").CatalogCollection.get(D.catalogWid);
                    a && (a.stale = !0)
                })
            },
            ha = function () {
                return !d("WAWebProductTypes.flow").PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(D.availability) ? null : o.jsxs("div", {
                    className: (k || (k = c("stylex")))([s.availabilityBanner, d("WAWebUISpacing").uiPadding.vert18, d("WAWebUISpacing").uiPadding.horiz30, d("WAWebUISpacing").uiMargin.bottom0]),
                    children: [D.availability === d("WAWebProductTypes.flow").ProductAvailability.OUT_OF_STOCK ? h._("__JHASH__NrgeXWATOga__JHASH__") : null, D.availability === d("WAWebProductTypes.flow").ProductAvailability.AVAILABLE_FOR_ANOTHER_POSTCODE && d("WAWebDirectConnectionGatingUtils").enablePostcodeInCatalog() ? o.jsx(d("WAWebProductCatalogProductPostcodeChangeBanner").ProductPostcodeChangeBanner, {
                        catalogWid: D.catalogWid,
                        postcodeChangeSuccess: ga
                    }) : null]
                })
            },
            $;
        Y() && ($ = d("WAWebProductCatalogDetailDrawerMenu.react").getDetailDrawerMenu({
            onSendProduct: ba,
            onReportProduct: U,
            onProductLinkClick: V,
            onProductMoreInformation: ca,
            onCartClick: H ? A : void 0,
            cartCount: E.current.itemCount,
            catalogId: D.catalogWid.toString(),
            contactId: z == null ? void 0 : z.contact.id
        }));
        return o.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            onDrop: P,
            theme: "striped",
            children: [o.jsx(u, {
                handleBack: P,
                menu: $
            }), o.jsx(c("WAWebDrawerBody.react"), {
                children: o.jsxs("div", {
                    "data-testid": void 0,
                    className: (k || (k = c("stylex")))([s.body, d("WAWebUISpacing").uiPadding.bottom32]),
                    children: [o.jsx(t, {
                        productFetchState: L,
                        productCatalogFetchState: N,
                        isAvailable: Z
                    }), o.jsx(c("WAWebProductCatalogProductTile.react"), {
                        product: D,
                        isAvailable: Z,
                        fetching: L === "PENDING"
                    }), ha(), o.jsx(c("WAWebProductCatalogProductDetailsInfo.react"), {
                        product: D,
                        collectionId: f,
                        onSendChat: X,
                        onAddToCart: aa,
                        isAvailable: Z,
                        hideRetailerID: (Y = a.chat) == null ? void 0 : Y.contact.isEnterprise
                    }), F && J ? o.jsx(c("WAWebProductCatalogCatalogDrawerSection.react"), {
                        catalog: J,
                        onProductCatalog: da,
                        onProductDetail: ea,
                        filterProductId: D.id.toString(),
                        title: h._("__JHASH__3ubPHZFkJFl__JHASH__"),
                        animation: !1
                    }) : null]
                })
            })]
        }, "product-details-drawer")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebProductCatalogProductLinkDrawer.react", ["fbt", "WAWebBizSendProductButton.react", "WAWebBizSendProductLinkFlow.react", "WAWebCatalogShortLinkUtils", "WAWebCellFrame.react", "WAWebCmd", "WAWebCopyLinkButton.react", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebEmojiText.react", "WAWebModalManager", "WAWebProductCatalogContext", "WAWebProductCatalogLinkText.react", "WAWebProductCatalogLogEvents", "WAWebProductCatalogProductThumb.react", "WAWebSendLinkButton.react", "WAWebStateUtils", "WAWebUISpacing", "react", "stylex"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k, l = k || c("react"),
        m = (i || (i = d("react"))).useContext,
        n = {
            prompt: {
                lineHeight: "x101yacv",
                $$css: !0
            },
            productImageContainer: {
                width: "xjzcg3w",
                height: "xcbkimw",
                $$css: !0
            },
            productThumbContainer: {
                position: "x170k5ml",
                backgroundColor: "x1k74hu9",
                $$css: !0
            }
        },
        o = "product-link-anchor";

    function p(a) {
        a = a.getProductImageCollectionHead();
        return a ? l.jsx(d("WAWebProductCatalogProductThumb.react").ProductThumb, {
            xstyle: n.productImageContainer,
            mediaData: a.mediaData
        }) : l.jsx(d("WAWebProductCatalogProductThumb.react").ProductThumbPlaceholder, {
            xstyle: n.productThumbContainer
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";
    b = l.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var e = a.onBack,
            f = a.onCancel,
            g = a.product,
            i = a.prompt,
            k = a.centerDrawer,
            q = a.sendProductMsg,
            r = a.onSend,
            s = m(d("WAWebDrawerContext").DrawerContext),
            t = function () {
                d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebBizSendProductLinkFlow.react"), {
                    product: g,
                    onSend: r
                }), {
                    transition: "modal-flow"
                }), d("WAWebProductCatalogLogEvents").logShareProductViaWALinkClick({
                    product: g,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(s)
                })
            };
        a = function (a) {
            a.preventDefault(), t()
        };
        var u = function () {
                d("WAWebProductCatalogLogEvents").logShareProductCopyLinkClick({
                    product: g,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(s)
                })
            },
            v = function () {
                d("WAWebCmd").Cmd.attachProduct({
                    product: d("WAWebStateUtils").unproxy(g),
                    onSend: r
                })
            },
            w = d("WAWebCatalogShortLinkUtils").createProductLink(g.catalogWid.user, g.id.toString()),
            x, y;
        k && (x = "labels", y = "center-column");
        q != null ? k = l.jsx(c("WAWebBizSendProductButton.react"), {
            onClick: v
        }) : k = l.jsx(c("WAWebSendLinkButton.react"), {
            onClick: t
        });
        return l.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            theme: x,
            children: [l.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: h._("__JHASH__M2ITo9YlMVM__JHASH__"),
                onBack: e,
                onCancel: f,
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                focusBackOrCancel: !0
            }), l.jsxs(c("WAWebDrawerBody.react"), {
                theme: y,
                children: [l.jsxs("div", {
                    className: (j || (j = c("stylex")))(n.prompt, d("WAWebUISpacing").uiPadding.horiz20, d("WAWebUISpacing").uiPadding.bottom10),
                    children: [" ", i, " "]
                }), l.jsx(c("WAWebCellFrame.react"), {
                    image: p(g),
                    primary: l.jsx(d("WAWebEmojiText.react").EmojiText, {
                        text: g.name,
                        direction: "auto"
                    }),
                    theme: "identity",
                    secondary: l.jsx(c("WAWebProductCatalogLinkText.react"), {
                        id: o,
                        href: w,
                        onClick: a,
                        noHandle: !0
                    })
                }), k, l.jsx(c("WAWebCopyLinkButton.react"), {
                    elementId: o,
                    onClick: u
                })]
            })]
        }, "product-link-drawer")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 226);
__d("WAWebProductCatalogProductListDrawerHeader.react", ["WAWebContactGetters", "WAWebDetailImage.react", "WAWebEmojiText.react", "WAWebName.react", "WAWebNonEmptyString", "WAWebUISpacing", "WAWebWDSText.react", "react", "stylex", "useWAWebContactValues", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i, j = h || c("react"),
        k = {
            description: {
                display: "x104kibb",
                maxHeight: "x1jquxbb",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                lineHeight: "x1fc57z9",
                color: "x7o08j2",
                wordBreak: "x13faqbe",
                WebkitLineClamp: "x1gzmk7r",
                WebkitBoxOrient: "x1ua5tub",
                $$css: !0
            },
            photoIcon: {
                width: "x1exxlbk",
                height: "xpyat2d",
                $$css: !0
            },
            text: {
                position: "x10l6tqk",
                top: "x13vifvy",
                end: "xds687c",
                bottom: "x1ey2m1c",
                start: "x17qophe",
                zIndex: "x11uqc5h",
                display: "x78zum5",
                flexDirection: "xdt5ytf",
                alignItems: "x6s0dn4",
                justifyContent: "xl56j7k",
                textAlign: "x2b8uid",
                $$css: !0
            },
            name: {
                fontWeight: "xk50ysn",
                color: "x7o08j2",
                $$css: !0
            },
            spinner: {
                borderTopStartRadius: "x168nmei",
                borderTopEndRadius: "x13lgxp2",
                borderBottomEndRadius: "x5pf9jr",
                borderBottomStartRadius: "xo71vjh",
                $$css: !0
            },
            img: {
                height: "xt7dq6l",
                $$css: !0
            }
        };

    function l(a) {
        a = a.businessProfile;
        a = d("useWAWebModelValues").useOptionalModelValues(a, ["description"]);
        return !a || !d("WAWebNonEmptyString").isNonEmptyString(a == null ? void 0 : a.description) ? null : j.jsx("div", {
            className: (i || (i = c("stylex")))(k.description, d("WAWebUISpacing").uiMargin.top12),
            children: j.jsx(d("WAWebEmojiText.react").EmojiText, {
                text: a.description,
                direction: "auto",
                selectable: !0,
                titlify: !0
            })
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function m(a) {
        var b = a.contact;
        a = a.profilePicThumb;
        a = d("useWAWebModelValues").useOptionalModelValues(a, ["imgFull"]);
        b = d("useWAWebContactValues").useContactValues(b.id, [d("WAWebContactGetters").getId, d("WAWebContactGetters").getIsMe]);
        b = b[0];
        if (!a) return null;
        b = j.jsx(d("WAWebDetailImage.react").DefaultIcon, {
            id: b,
            xstyle: k.photoIcon
        });
        return j.jsx("div", {
            className: "x1n2onr6 x1vjfegm x78zum5 x6s0dn4 xl56j7k xh8yej3 x5yr21d x1j6awrg x1m1drc7 x162n7g1 x1ojvc37 x4eaejv x1wsn0xg x1s928wv x1sak2ym",
            children: j.jsx(d("WAWebDetailImage.react").DetailImageCommon, {
                profilePicThumb: a,
                loader: !0,
                defaultIcon: b,
                profilePicThumbImg: a.imgFull,
                spinnerXstyle: k.spinner,
                spinnerSize: 100,
                imgXstyle: k.img,
                theme: "business",
                shape: d("WAWebDetailImage.react").DetailImageShape.Square
            })
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.profilePicThumb,
            e = a.contact;
        a = a.businessProfile;
        return j.jsxs("div", {
            className: "x1n2onr6 x1m3v4wt x6ikm8r x10wlt62 x15e7hw7",
            "data-testid": void 0,
            children: [j.jsx(m, {
                profilePicThumb: b,
                contact: e
            }), j.jsxs("div", {
                className: (i || (i = c("stylex")))(k.text, d("WAWebUISpacing").uiPadding.horiz30),
                children: [j.jsx(d("WAWebWDSText.react").WDSTextLarge, {
                    xstyle: k.name,
                    children: j.jsx(d("WAWebName.react").Name, {
                        contact: e,
                        selectable: !0,
                        useVerifiedName: !0
                    })
                }), j.jsx(l, {
                    businessProfile: a
                })]
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebProductCatalogProductListDrawer.react", ["fbt", "WAFilteredCatch", "WATypeUtils", "WAWebBackendErrors", "WAWebCartCollection", "WAWebCatalogCollection", "WAWebCommonCartIconMenuBarItem.react", "WAWebContactGetters", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebDropdown.react", "WAWebDropdownItem.react", "WAWebFlatListController", "WAWebFlatListLoadingSpinnerItem.react", "WAWebFrontendConstants", "WAWebManageAddItemCta.react", "WAWebMenuBar.react", "WAWebMenuIcon", "WAWebProductCatalogCatalogConstants", "WAWebProductCatalogCheckCartEnabled", "WAWebProductCatalogContext", "WAWebProductCatalogFetchState", "WAWebProductCatalogFetchStateTopBar.react", "WAWebProductCatalogLinkIcon.react", "WAWebProductCatalogList.react", "WAWebProductCatalogLogEvents", "WAWebProductCatalogProductListDrawerHeader.react", "WAWebUISpacing", "react", "stylex", "useForceUpdate", "useWAWebContactValues", "useWAWebDebouncedCallback", "useWAWebListener", "useWAWebThrottledCallback", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    b = k || d("react");
    var l = i || (i = c("react")),
        m = b.useContext,
        n = b.useEffect,
        o = b.useMemo,
        p = b.useState,
        q = {
            list: {
                flex: "x1okw0bk",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            }
        };

    function r(a) {
        var b = a.businessProfile,
            e = a.canManageCatalog,
            f = a.contact,
            g = a.loadingMore,
            h = a.onAddProduct;
        a = a.productCatalogList;
        var i;
        e && h && (i = l.jsx(c("WAWebManageAddItemCta.react"), {
            onClick: function () {
                return h()
            },
            theme: "in-list",
            testid: void 0
        }));
        return l.jsxs(l.Fragment, {
            children: [b && l.jsx("div", {
                "data-testid": void 0,
                className: "x1okw0bk",
                children: l.jsx(c("WAWebProductCatalogProductListDrawerHeader.react"), {
                    profilePicThumb: f.getProfilePicThumb(),
                    contact: f,
                    businessProfile: b
                })
            }), l.jsxs("div", {
                "data-testid": void 0,
                className: (j || (j = c("stylex")))(q.list, d("WAWebUISpacing").uiPadding.bottom8, b && d("WAWebUISpacing").uiMargin.top8),
                children: [i, a, g && l.jsx(c("WAWebFlatListLoadingSpinnerItem.react"), {})]
            })]
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function s(a) {
        var b = a.canManageCatalog,
            e = a.onOpenSettings,
            f = a.headerType,
            g = a.onCartClick,
            i = a.catalogId,
            j = a.handleCatalogLinkClick,
            k = a.handleCartClick,
            m = a.cartEnabled;
        a = a.cartCount;
        b = b ? l.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            testid: void 0,
            icon: l.jsx(d("WAWebMenuIcon").MenuIcon, {}),
            title: h._("__JHASH__hskmX_lsgx4__JHASH__"),
            children: l.jsxs(d("WAWebDropdown.react").Dropdown, {
                type: d("WAWebDropdown.react").MenuType.DropdownMenu,
                flipOnRTL: !0,
                dirX: d("WAWebDropdown.react").DirX.LEFT,
                children: [l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: j,
                    children: h._("__JHASH__yncEhAlcaY6__JHASH__")
                }), e && l.jsx(d("WAWebDropdownItem.react").DropdownItem, {
                    testid: void 0,
                    action: e,
                    children: h._("__JHASH__vCoxAeO-9BV__JHASH__")
                })]
            }, "CatalogDetailHeader")
        }) : l.jsx(d("WAWebMenuBar.react").MenuBarItem, {
            testid: void 0,
            icon: l.jsx(c("WAWebProductCatalogLinkIcon.react"), {
                theme: f === d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null
            }),
            title: h._("__JHASH__TjtqRRKaMPt__JHASH__"),
            onClick: j
        });
        e = m && g ? l.jsx(d("WAWebCommonCartIconMenuBarItem.react").CartIconMenuBarItem, {
            cartIconTheme: f === d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
            cartCountText: d("WATypeUtils").isNumber(a) && a > 0 ? a.toString() : void 0,
            onClick: k,
            catalogOwnerJid: i.toString()
        }) : null;
        return [e, b]
    }
    e = l.forwardRef(a);

    function a(a, b) {
        var e = babelHelpers["extends"]({}, a),
            f = e.contact,
            g = e.catalogId;
        a = e.canManageCatalog;
        var i = e.setScrollOffset,
            j = e.onCartClick,
            k = e.onCatalogLinkClick,
            q = e.autoUpdate;
        q = q === void 0 ? !1 : q;
        var t = e.businessProfile,
            u = e.onAddProduct,
            v = e.onProductDetail,
            w = e.onProductShare,
            x = e.headerType,
            y = e.onOpenSettings,
            z = c("useWAWebUnmountSignal")(),
            A = m(d("WAWebDrawerContext").DrawerContext),
            B = c("useForceUpdate")(),
            C = c("useWAWebDebouncedCallback")(B, 100),
            D = d("useWAWebContactValues").useContactValues(f.id, [d("WAWebContactGetters").getId]),
            E = D[0];
        D = o(function () {
            return new(c("WAWebFlatListController"))()
        }, []);
        var F = function () {
                var a = d("WAWebCatalogCollection").CatalogCollection.get(g);
                return !a || a.stale ? null : a
            },
            G = o(function () {
                return d("WAWebCartCollection").CartCollection.findCart(E.toString())
            }, [E]),
            H = p(!1),
            I = H[0],
            J = H[1];
        H = p(0);
        var K = H[0],
            L = H[1];
        H = p(!1);
        var M = H[0],
            N = H[1];
        H = p(!1);
        var O = H[0],
            P = H[1];
        H = p(F);
        var Q = H[0],
            R = H[1];
        H = p(function () {
            return G.itemCount
        });
        var S = H[0],
            T = H[1];
        H = p(function () {
            return F() ? "SUCCESS" : "NONE"
        });
        var U = H[0],
            V = H[1];
        H = function () {
            var a = G.itemCount;
            S !== a && T(a)
        };
        d("useWAWebListener").useListener(G, "all", H);
        var W = function a() {
            if (M) return;
            var b = d("WAWebCatalogCollection").CatalogCollection.assertGet(g);
            if (!b.afterCursor) return;
            var c = b.productCollection.getProductModels().length;
            J(!0);
            L(c);
            d("WAWebCatalogCollection").CatalogCollection.update(g).then(function (b) {
                if (z.aborted) return;
                J(!1);
                b = Array.isArray(b) ? b[0] : b;
                b = b.productCollection.getProductModels().length;
                b === K && N(!0);
                c * d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT < window.innerHeight && a()
            })["catch"](function () {
                J(!1), N(!0)
            })
        };
        H = c("useWAWebDebouncedCallback")(function () {
            e.onRemoveProduct == null ? void 0 : e.onRemoveProduct(), B()
        }, 100);
        q = q ? Q == null ? void 0 : Q.productCollection : null;
        d("useWAWebListener").useListener(q, "add", C);
        d("useWAWebListener").useListener(q, "remove", H);
        var X = function () {
            return d("WAWebCatalogCollection").CatalogCollection.find(g).then(function (a) {
                R(a), V("SUCCESS"), W()
            })["catch"](d("WAFilteredCatch").filteredCatch(d("WAWebBackendErrors").ServerStatusCodeError, function (a) {
                (a.status === 403 || a.status === 404) && (R(null), V("NOT_FOUND"))
            }))["catch"](function (a) {
                d("WAWebProductCatalogFetchState").parseErrorState(a, function (a) {
                    return V(a)
                })
            })
        };
        n(function () {
            Q ? W() : X(), c("WAWebProductCatalogCheckCartEnabled")(g).then(function (a) {
                P(a), d("WAWebProductCatalogLogEvents").logCatalogListView({
                    catalogOwnerWid: g,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(A),
                    cartToggle: a
                })
            })
        }, []);
        var Y = c("useWAWebThrottledCallback")(function (a) {
            if (I) return;
            a.scrollTop + d("WAWebFrontendConstants").SCROLL_FUDGE > a.scrollHeight - a.clientHeight && W()
        }, 100);
        C = function (a) {
            a.currentTarget && Y(a.currentTarget);
            i == null ? void 0 : i((a = (a = a.currentTarget) == null ? void 0 : a.scrollTop) != null ? a : 0)
        };
        q = function () {
            j == null ? void 0 : j(E.toString())
        };
        H = function () {
            Q && (k(Q, f), d("WAWebProductCatalogLogEvents").logCatalogShareLinkClick({
                catalogOwnerWid: g,
                catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(A)
            }))
        };
        var Z = O && j ? q : void 0;
        u = Q ? l.jsx(r, {
            canManageCatalog: a,
            onAddProduct: u,
            businessProfile: t,
            contact: f,
            loadingMore: I,
            productCatalogList: l.jsx(c("WAWebProductCatalogList.react"), {
                onCartOpen: Z,
                onProductDetail: v,
                flatListController: D,
                catalog: Q,
                canManageCatalog: a,
                shareLinks: a,
                onProductShare: w
            })
        }) : l.jsx(c("WAWebProductCatalogFetchStateTopBar.react"), {
            fetchState: U
        });
        t = s({
            canManageCatalog: a,
            handleCatalogLinkClick: H,
            onOpenSettings: y,
            headerType: x,
            cartEnabled: O,
            onCartClick: j,
            cartCount: S,
            handleCartClick: q,
            catalogId: g
        });
        return l.jsxs(c("WAWebDrawer.react"), {
            ref: b,
            theme: "products",
            onDrop: e.onBack,
            children: [l.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                title: h._("__JHASH__UNA9opkICZW__JHASH__"),
                type: e.headerType || d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onBack: e.onBack,
                menu: t,
                focusBackOrCancel: !0
            }), l.jsx(c("WAWebDrawerBody.react"), {
                onScroll: C,
                flatListControllers: [D],
                scrollOffset: e.scrollOffset,
                children: u
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.ProductListDrawer = e
}), 226);
__d("WAWebProductCatalogProductMoreInformationDrawer.react", ["fbt", "Promise", "WALogger", "WANullthrows", "WAWebCatalogCollection", "WAWebComplianceConstants", "WAWebComplianceInfo.react", "WAWebCountriesUtils", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerHeader.react", "WAWebStateUtils", "WAWebSyntheticCountryCode", "asyncToGeneratorRuntime", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;

    function l() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["Unable to fetch compliance for product: ", ""]);
        l = function () {
            return a
        };
        return a
    }
    e = k || d("react");
    var m = j || (j = c("react")),
        n = e.useEffect,
        o = e.useState;
    e = m.forwardRef(a);

    function a(a, e) {
        a = babelHelpers["extends"]({}, a);
        var f = a.onBack,
            g = d("useWAWebModelValues").useModelValues(a.product, ["id", "catalogWid"]);
        a = o({});
        var j = a[0],
            k = a[1];
        a = o("");
        var p = a[0],
            q = a[1];
        a = o("");
        var r = a[0],
            s = a[1];
        a = o(!0);
        var t = a[0],
            u = a[1],
            v = function (a) {
                var c;
                return ((c = a.complianceInfo) == null ? void 0 : c.countryCodeOrigin) === String(d("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable) ? (i || (i = b("Promise"))).resolve(m.jsxs("div", {
                    children: [m.jsx("div", {
                        className: "xzueoph",
                        children: h._("__JHASH__qCG342enwUu__JHASH__")
                    }), m.jsx("div", {
                        children: h._("__JHASH__kLPdnde05rO__JHASH__")
                    })]
                })) : d("WAWebCountriesUtils").getCountryName((c = a.complianceInfo) == null ? void 0 : c.countryCodeOrigin, d("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED)
            };
        n(function () {
            function a() {
                return e.apply(this, arguments)
            }

            function e() {
                e = b("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield d("WAWebCatalogCollection").CatalogCollection.findProduct({
                        catalogWid: g.catalogWid,
                        productId: g.id.toString(),
                        productMsgMediaData: d("WAWebStateUtils").unproxy(g).productMsgMediaData,
                        shouldFetchComplianceFields: !0
                    });
                    var a = d("WAWebCatalogCollection").CatalogCollection.get(g.catalogWid);
                    a = c("WANullthrows")(a).productCollection.get(g.id);
                    if (a) {
                        var b, e, f = (yield v(a));
                        b = (yield d("WAWebCountriesUtils").getCountryName((b = a.complianceInfo) == null ? void 0 : (b = b.importerAddress) == null ? void 0 : b.countryCode, d("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.META_RECOGNIZED));
                        e = {
                            importerName: ((e = a.complianceInfo) == null ? void 0 : e.importerName) || "",
                            countryCodeOrigin: ((e = a.complianceInfo) == null ? void 0 : e.countryCodeOrigin) || "",
                            importerAddress: {
                                street1: ((e = a.complianceInfo) == null ? void 0 : (e = e.importerAddress) == null ? void 0 : e.street1) || "",
                                street2: ((e = a.complianceInfo) == null ? void 0 : (e = e.importerAddress) == null ? void 0 : e.street2) || "",
                                city: ((e = a.complianceInfo) == null ? void 0 : (e = e.importerAddress) == null ? void 0 : e.city) || "",
                                region: ((e = a.complianceInfo) == null ? void 0 : (e = e.importerAddress) == null ? void 0 : e.region) || "",
                                postalCode: ((e = a.complianceInfo) == null ? void 0 : (a = e.importerAddress) == null ? void 0 : a.postalCode) || ""
                            }
                        };
                        k(e);
                        u(!1);
                        q(f);
                        s(b)
                    } else d("WALogger").WARN(l(), g.id)
                });
                return e.apply(this, arguments)
            }
            a()
        }, []);
        a = function () {
            if (f) return f()
        };
        var w = j.countryCodeOrigin,
            x = j.importerName;
        j = j.importerAddress;
        return m.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            onDrop: a,
            theme: "striped",
            children: [m.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: h._("__JHASH__7krv-luSRnY__JHASH__"),
                onBack: a,
                type: d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
            }), m.jsx(c("WAWebDrawerBody.react"), {
                theme: t ? "center-content" : void 0,
                children: t ? m.jsx(d("WAWebComplianceInfo.react").ComplianceInfoLoading, {}) : m.jsxs(d("WAWebComplianceInfo.react").ComplianceInfoGroup, {
                    children: [m.jsx(d("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
                        value: p,
                        label: h._("__JHASH__zMMMJgKRj0h__JHASH__")
                    }), w && ![d("WAWebComplianceConstants").COMPLIANCE_INFO_CODES.INDIA, d("WAWebSyntheticCountryCode").SyntheticCountryCode.NotApplicable].includes(w) ? m.jsxs(m.Fragment, {
                        children: [m.jsx(d("WAWebComplianceInfo.react").ComplianceInfoPrimitiveField, {
                            value: x,
                            label: h._("__JHASH__5k27p0yLSug__JHASH__")
                        }), m.jsx(d("WAWebComplianceInfo.react").ComplianceInfoStructuralField, {
                            valuesMap: babelHelpers["extends"]({
                                importerAddressCountryNameOrigin: r
                            }, j),
                            keys: ["street1", "street2", "city", "region", "postalCode", "importerAddressCountryNameOrigin"],
                            label: h._("__JHASH__ditL7HXuah6__JHASH__")
                        })]
                    }) : null]
                })
            })]
        }, "product-details-drawer")
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebProductCollectionCatalogCategoriesBanner", ["fbt", "WAWebBizProductCatalogBridge", "WAWebText_DONOTUSE.react", "WAWebUISpacing", "react", "useWAWebModelValues"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k = j || c("react"),
        l = (i || (i = d("react"))).useEffect,
        m = {
            banner: {
                backgroundColor: "x15xk1te",
                display: "x78zum5",
                alignItems: "x6s0dn4",
                borderBottomWidth: "xso031l",
                borderBottomStyle: "x1q0q8m5",
                borderBottomColor: "xcsjwe9",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.catalog;
        a = d("useWAWebModelValues").useModelValues(b, ["id", "hasCatalogCategories"]);
        var c = a.id,
            e = a.hasCatalogCategories;
        l(function () {
            e == null && d("WAWebBizProductCatalogBridge").queryCatalogHasCategories(c).then(function (a) {
                b.set({
                    hasCatalogCategories: a
                })
            })
        }, [e, c, b]);
        return e === !1 || e == null ? null : k.jsx(d("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: [m.banner, d("WAWebUISpacing").uiPadding.all16],
            size: "13",
            color: "dark",
            children: h._("__JHASH__HWvh3jDg8yS__JHASH__")
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CatalogCategoriesBanner = a
}), 226);
__d("WAWebProductCollectionCatalogPostcodeMenuConstants", [], (function (a, b, c, d, e, f) {
    a = 500;
    b = 500;
    c = 3500;
    f.CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY = a;
    f.CATALOG_POSTCODE_MENU_TOOLTIP_DELAY = b;
    f.CATALOG_POSTCODE_MENU_TOOLTIP_DURATION = c
}), 66);
__d("WAWebProductCollectionCatalogPostcodeMenu", ["fbt", "WALogger", "WAPromiseDelays", "WAWebAccessibility.react", "WAWebBusinessAddressIcon", "WAWebDirectConnectionGatingUtils", "WAWebDropdown.react", "WAWebFlex.react", "WAWebModalManager", "WAWebProductCollectionCatalogPostcodeChangeModal", "WAWebProductCollectionCatalogPostcodeMenuConstants", "WAWebText_DONOTUSE.react", "WAWebUimUie.react", "WAWebUimUieTooltip.react", "WAWebUserPrefsGeneral", "WAWebWDSText.react", "react", "useWAWebModelValues", "useWAWebOnUnmount", "useWAWebTimeout"], (function (a, b, c, d, e, f, g, h) {
    var i, j;

    function k() {
        var a = babelHelpers.taggedTemplateLiteralLoose(["[direct-connection] change postcode tooltip is not shown"]);
        k = function () {
            return a
        };
        return a
    }
    b = j || d("react");
    var l = i || (i = c("react")),
        m = b.useCallback,
        n = b.useEffect,
        o = b.useRef,
        p = b.useState,
        q = {
            postcodeDescription: {
                lineHeight: "xdod15v",
                fontSize: "x1jchvi3",
                $$css: !0
            },
            postcodeLocationName: {
                lineHeight: "x1fc57z9",
                fontSize: "x1f6kntn",
                $$css: !0
            }
        },
        r = 2,
        s = function () {
            if (d("WAWebUserPrefsGeneral").getPostcodeAutoOpenChangePostcodeDone()) return !1;
            var a = d("WAWebUserPrefsGeneral").getPostcodeAutoOpenChangePostcodeCount();
            return a >= r ? !1 : !0
        },
        t = function () {
            var a = d("WAWebUserPrefsGeneral").getPostcodeAutoOpenChangePostcodeCount();
            d("WAWebUserPrefsGeneral").setPostcodeAutoOpenChangePostcodeCount(a + 1)
        },
        u = 5,
        v = function () {
            var a = d("WAWebUserPrefsGeneral").getPostcodeTooltipViewCount();
            d("WAWebUserPrefsGeneral").setPostcodeTooltipViewCount(a + 1)
        },
        w = function () {
            if (d("WAWebUserPrefsGeneral").getPostcodeTooltipViewedInSession()) return !1;
            var a = d("WAWebUserPrefsGeneral").getPostcodeTooltipViewCount();
            return a >= u ? !1 : !0
        };

    function a(a) {
        var b = a.businessDirectConnection,
            e = a.catalog,
            f = a.postcodeChangeSuccess;
        a = d("useWAWebModelValues").useModelValues(b, ["postcode", "postcodeLocationName", "postcodeSetByUser"]);
        var g = a.postcode;
        b = a.postcodeLocationName;
        a = a.postcodeSetByUser;
        e = d("useWAWebModelValues").useModelValues(e, ["id", "hasCatalogCategories"]);
        var i = e.id,
            j = e.hasCatalogCategories,
            r = a === !0;
        e = p(!1);
        var u = e[0],
            x = e[1],
            y = function () {
                d("WAWebModalManager").ModalManager.close(), x(!1)
            },
            z = function () {
                var a;
                d("WAWebModalManager").ModalManager.open(l.jsx(c("WAWebProductCollectionCatalogPostcodeChangeModal"), {
                    existingPostcode: (a = g) != null ? a : "",
                    catalogId: i,
                    onCancel: y,
                    onSuccess: function () {
                        y(), f()
                    }
                }));
                x(!0)
            },
            A = function (a) {
                a === void 0 && (a = !1), d("WAPromiseDelays").delayMs(a ? d("WAWebProductCollectionCatalogPostcodeMenuConstants").CATALOG_POSTCODE_CHANGE_MODAL_OPEN_DELAY : 0).then(z)
            };
        a = p(null);
        e = a[0];
        var B = a[1],
            C = o(null),
            D = o(null);
        a = m(function () {
            return B(null)
        }, []);
        var E = d("useWAWebTimeout").useTimeout(a, d("WAWebProductCollectionCatalogPostcodeMenuConstants").CATALOG_POSTCODE_MENU_TOOLTIP_DURATION),
            F = E[0],
            G = m(function () {
                var a = D.current ? D.current.offsetWidth * 3 / 4 : null;
                B({
                    menu: l.jsx("div", {
                        style: typeof a === "number" ? {
                            maxWidth: a + "px"
                        } : null,
                        children: l.jsx(d("WAWebText_DONOTUSE.react").Text, {
                            as: "p",
                            children: h._("__JHASH__7hEzIKVDvgg__JHASH__")
                        })
                    }),
                    anchor: C.current,
                    dirY: d("WAWebDropdown.react").DirY.TOP,
                    type: d("WAWebDropdown.react").MenuType.Tooltip,
                    horizontal: !0,
                    tooltipColorScheme: d("WAWebDropdown.react").TooltipColorScheme.Highlight
                })
            }, []);
        E = d("useWAWebTimeout").useTimeout(function () {
            C.current ? (G(), F()) : d("WALogger").WARN(k())
        }, d("WAWebProductCollectionCatalogPostcodeMenuConstants").CATALOG_POSTCODE_MENU_TOOLTIP_DELAY);
        var H = E[0];
        n(function () {
            r || (d("WAWebDirectConnectionGatingUtils").editPostcodeByDefaultEnabled() ? s() && (A(!0), d("WAWebUserPrefsGeneral").setPostcodeAutoOpenChangePostcodeDone(!0), t()) : w() && (v(), d("WAWebUserPrefsGeneral").setPostcodeTooltipViewedInSession(!0), H()))
        }, []);
        c("useWAWebOnUnmount")(function () {
            u && y()
        });
        E = p(0);
        var I = E[0],
            J = E[1];
        n(function () {
            j === !0 && J(function (a) {
                return a + 1
            })
        }, [j]);
        E = e ? l.jsx(d("WAWebUimUie.react").UIE, {
            displayName: "CatalogPostcodeTooltip",
            popable: !0,
            escapable: !0,
            requestDismiss: a,
            dismissOnWindowResize: !0,
            children: l.jsx(c("WAWebUimUieTooltip.react"), {
                tooltip: e
            })
        }, I) : null;
        return l.jsxs("div", babelHelpers["extends"]({
            className: "x78zum5 x6s0dn4 x150wa6m x7wzq59 x13vifvy x1ks9yow x1obj6zc x1z0qo99"
        }, d("WAWebAccessibility.react").accessibleClickableButtonProps({
            onClick: A
        }), {
            ref: D,
            children: [l.jsx("span", {
                className: "x1cnzs8 xx6bls6 x1oq7267 xkb22as xvy4d1p x12nr8rf",
                children: l.jsx(d("WAWebBusinessAddressIcon").BusinessAddressIcon, {})
            }), l.jsxs(d("WAWebFlex.react").FlexColumn, {
                ref: C,
                children: [l.jsx(d("WAWebText_DONOTUSE.react").Text, {
                    as: "p",
                    xstyle: q.postcodeDescription,
                    children: h._("__JHASH__29MLHk4eXLZ__JHASH__", [h._param("postcode-of-a-geographic-area", g)])
                }), l.jsx(d("WAWebWDSText.react").WDSTextMuted, {
                    as: "p",
                    xstyle: q.postcodeLocationName,
                    children: r ? b : h._("__JHASH__SbXl-XRK-2L__JHASH__")
                }), E]
            })]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.MAX_TIMES_POSTCODE_CHANGE_MODAL_AUTO_OPEN = r;
    g.MAX_TIMES_POSTCODE_CHANGE_TOOLTIP_TO_SHOW = u;
    g.CatalogPostcodeMenu = a
}), 226);
__d("WAWebProductCollectionCollectionListItem.react", ["fbt", "WAWebCellFrame.react", "WAWebClickableLink.react", "WAWebEmojiText.react", "WAWebProductCollection", "WAWebStopEvent", "WAWebUtilsLogQplEvents", "WAWebWDSText.react", "react"], (function (a, b, c, d, e, f, g, h) {
    var i, j = i || c("react"),
        k = {
            collectionName: {
                lineHeight: "xdod15v",
                $$css: !0
            }
        };

    function l(a) {
        var b = a.name;
        a = a.onClick;
        return j.jsx(c("WAWebClickableLink.react"), {
            onClick: a,
            className: "xdod15v",
            title: h._("__JHASH__WvQxDuiekHQ__JHASH__", [h._param("collectionName", b)]),
            tabIndex: 0,
            children: h._("__JHASH__a6AiD1keszX__JHASH__")
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function a(a) {
        var b = a.collection,
            e = a.onSeeAll;
        a = a.allItems;
        var f, g;
        b ? (f = b.name, g = b.id) : a && (f = h._("__JHASH__Zv5rP2mZt-i__JHASH__"));
        a = j.jsx(d("WAWebWDSText.react").WDSTextTitle, {
            xstyle: k.collectionName,
            children: j.jsx(d("WAWebEmojiText.react").EmojiText, {
                text: f,
                ellipsify: !0,
                titlify: !0
            })
        });

        function i(a) {
            d("WAWebStopEvent").stopEvent(a), d("WAWebUtilsLogQplEvents").qplStartCollectionViewAll("Catalog"), e && b ? e(b) : e && e()
        }
        var m = void 0;
        if (b) switch (b.reviewStatus) {
            case d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED:
                m = j.jsx("span", {
                    className: "x1sr8853",
                    children: h._("__JHASH__wt_5O3sWjMD__JHASH__")
                });
                break
        }
        return j.jsx(c("WAWebCellFrame.react"), {
            primary: a,
            secondary: m,
            detail: j.jsx(l, {
                name: f,
                onClick: i
            }),
            theme: "collection-header",
            idle: !0,
            className: "xvpee5o x1y332i5 x178xt8z x13fuv20 xyj1x25"
        }, g)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("WAWebProductCollectionsList.react", ["WAWebDrawerContext", "WAWebFlatList.react", "WAWebFlatListContainer.react", "WAWebFlatListController", "WAWebListKeyPool", "WAWebManageActions", "WAWebManageCollectionIntegrityBanner.react", "WAWebNonEmptyString", "WAWebProductCatalogCatalogConstants", "WAWebProductCatalogContext", "WAWebProductCatalogListItem.react", "WAWebProductCatalogLogEvents", "WAWebProductCollection", "WAWebProductCollectionCollectionListItem.react", "WAWebStateUtils", "WAWebUtilsLogQplEvents", "react", "useForceUpdate", "useWAWebListener", "useWAWebModelValues"], (function (a, b, c, d, e, f, g) {
    var h, i;
    b = i || d("react");
    var j = h || (h = c("react")),
        k = b.useContext,
        l = b.useMemo,
        m = d("WAWebFlatList.react").FlatListFactory();

    function a(a) {
        var b = a.onProductDetail,
            e = a.onProductShare,
            f = a.onCartOpen,
            g = a.shareLinks,
            h = g === void 0 ? !1 : g,
            i = a.onEditCollection,
            n = a.onCollectionSeeAll,
            o = a.canManageCatalog,
            p = c("useForceUpdate")(),
            q = d("useWAWebModelValues").useModelValues(a.catalog, ["productCollection", "collections", "afterCursor", "id", "index"]),
            r = k(d("WAWebDrawerContext").DrawerContext),
            s = l(function () {
                return new Set()
            }, []);
        g = l(function () {
            return new(c("WAWebFlatListController"))()
        }, []);
        var t = function () {
                var b = f !== void 0,
                    c = a.data || [],
                    e = [];
                c.forEach(function (c) {
                    var f = c.collection,
                        g = c.product;
                    c = c.allItems;
                    if (f && g) {
                        var h = f.id;
                        e.push({
                            itemKey: h.toString() + "_" + g.id.toString() + "_" + b.toString(),
                            product: g,
                            collectionId: h
                        })
                    } else if (f) s.has(f) || s.add(f), e.push({
                        itemKey: f.id.toString() + "_" + f.reviewStatus.toString(),
                        collection: f
                    }), (f.reviewStatus === d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING || f.reviewStatus === d("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED) && e.push({
                        itemKey: f.id.toString() + "_reviewBanner",
                        collection: f,
                        height: d("WAWebManageCollectionIntegrityBanner.react").getCollectionIntegrityHeight(f),
                        reviewBanner: !0
                    });
                    else if (c) e.push({
                        itemKey: "view_all",
                        allItems: c
                    });
                    else if (g) {
                        h = {
                            itemKey: g.id.toString() + "_" + b.toString(),
                            product: g
                        };
                        f = d("WAWebNonEmptyString").asMaybeNonEmptyString(a.collectionId);
                        f != null && (h.collectionId = f);
                        e.push(h)
                    }
                });
                return e
            },
            u = function (a, c) {
                d("WAWebUtilsLogQplEvents").qplStartProductView("Collection");
                d("WAWebProductCatalogLogEvents").logCatalogListDetailClick({
                    product: d("WAWebStateUtils").unproxy(a),
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(r)
                });
                return b(a, c)
            },
            v = function (a) {
                e == null ? void 0 : e(a)
            },
            w = function (a) {
                void d("WAWebManageActions").handleProductDelete(q, a, d("WAWebProductCatalogContext").getProductCatalogContext(r), "Collection")
            },
            x = function (a) {
                void d("WAWebManageActions").handleProductVisibilityChange(q, a, d("WAWebProductCatalogContext").getProductCatalogContext(r), "Collections")
            };
        d("useWAWebListener").useListeners(Array.from(s).map(function (a) {
            return {
                source: a,
                eventOrEvents: ["change:reviewStatus", "canAppeal"],
                callback: p
            }
        }));
        return j.jsx(c("WAWebFlatListContainer.react"), {
            flatListControllers: [g],
            children: j.jsx(m, {
                flatListController: g,
                direction: "vertical",
                forceConsistentRenderCount: !1,
                data: t(),
                renderItem: function (a) {
                    var b = a.collection,
                        e = a.product,
                        g = a.allItems,
                        k = a.reviewBanner;
                    k = k === void 0 ? !1 : k;
                    var l = a.collectionId;
                    if (b) return k ? j.jsx(d("WAWebManageCollectionIntegrityBanner.react").CollectionIntegrityBanner, {
                        collection: b,
                        onEditCollection: i
                    }) : j.jsx(c("WAWebProductCollectionCollectionListItem.react"), {
                        collection: b,
                        onSeeAll: n
                    });
                    else if (g) return j.jsx(c("WAWebProductCollectionCollectionListItem.react"), {
                        allItems: g,
                        onSeeAll: n
                    });
                    else if (e) return j.jsx(c("WAWebProductCatalogListItem.react"), {
                        collectionId: l,
                        product: e,
                        onCartOpen: f,
                        onClick: function () {
                            return u(e, l)
                        },
                        onProductShare: h ? v : null,
                        onProductDelete: w,
                        onProductHideShow: x,
                        theme: "product-of-collection",
                        canManageCatalog: o
                    });
                    return null
                },
                defaultItemHeight: d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT,
                keyOrder: d("WAWebListKeyPool").KeyOrder.INVERSE
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("WAWebProductCollectionCatalogViewDrawer.react", ["fbt", "WAQplTypes", "WAWebActionToast.react", "WAWebActiveAccountInfoModel", "WAWebAdvertisePill.react", "WAWebBizCatalogUtils", "WAWebBizGatingUtils", "WAWebBusinessDirectConnectionCollection", "WAWebBusinessDirectUtils", "WAWebCartCollection", "WAWebCatalogCollection", "WAWebCatalogNuxBanners.react", "WAWebContactGetters", "WAWebDirectConnectionGatingUtils", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebFlatListController", "WAWebFlatListLoadingSpinnerItem.react", "WAWebFlex.react", "WAWebManageAddItemCta.react", "WAWebProductCatalogCatalogConstants", "WAWebProductCatalogCatalogDrawerMenu.react", "WAWebProductCatalogCheckCartEnabled", "WAWebProductCatalogContext", "WAWebProductCatalogFetchState", "WAWebProductCatalogFetchStateTopBar.react", "WAWebProductCatalogLogEvents", "WAWebProductCatalogProductListDrawerHeader.react", "WAWebProductCollectionCatalogCategoriesBanner", "WAWebProductCollectionCatalogPostcodeMenu", "WAWebProductCollectionsList.react", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebToastManager", "WAWebUIRefreshGatingUtils", "WAWebUISpacing", "WAWebUtilsLogQplEvents", "WAWebWamEnumLwiEntryPoint", "asyncToGeneratorRuntime", "react", "stylex", "useForceUpdate", "useWAWebContactValues", "useWAWebDebouncedCallback", "useWAWebServerGatedAdEntryPoint", "useWAWebThrottledCallback", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j, k;
    e = k || d("react");
    var l = i || (i = c("react")),
        m = e.useContext,
        n = e.useEffect,
        o = e.useMemo,
        p = e.useState,
        q = {
            list: {
                flex: "x1okw0bk",
                overflowX: "x6ikm8r",
                overflowY: "x10wlt62",
                $$css: !0
            }
        };

    function r(a) {
        var b = a.cartEnabled,
            e = a.contact,
            f = a.catalog,
            g = a.dataSource,
            i = a.handleCartClick,
            k = a.onCartClick,
            m = a.canManageCatalog,
            n = a.businessProfile,
            o = a.onAddProduct,
            p = a.onProductDetail,
            r = a.onProductShare,
            s = a.onCollectionSeeAll,
            t = a.onEditCollection,
            u = a.onOpenCollections,
            v = a.catalogFlatListController,
            w = a.catalogFetchState,
            x = a.directConnectionPostcodeEnabled,
            y = a.loadingDirectConnectionInfo,
            z = a.businessDirectConnection,
            A = a.loadingMore;
        a = a.postcodeChangeSuccess;
        b = b && k ? i : void 0;
        var B;
        m && o && (B = l.jsx(c("WAWebManageAddItemCta.react"), {
            onClick: function () {
                return o()
            },
            theme: "collections",
            testid: void 0
        }));
        var C;
        if (f && m && t) {
            k = f.productCollection.getProductModels(!0).some(function (a) {
                return !a.isHidden && a.reviewStatus !== "REJECTED"
            });
            C = k ? l.jsx(c("WAWebManageAddItemCta.react"), {
                onClick: function () {
                    t(null)
                },
                theme: "collections",
                title: h._("__JHASH__TkynEWusHKq__JHASH__"),
                testid: void 0
            }) : null
        }
        var D;
        f && g ? (i = l.jsx(c("WAWebProductCollectionsList.react"), {
            onCartOpen: b,
            onProductDetail: p,
            flatListController: v,
            catalog: f,
            canManageCatalog: m,
            shareLinks: m,
            onProductShare: r,
            onCollectionSeeAll: s,
            data: g.getData(),
            onEditCollection: t
        }), m && (D = l.jsx(c("WAWebCatalogNuxBanners.react"), {
            onOpenCollections: u
        }))) : i = l.jsx(c("WAWebProductCatalogFetchStateTopBar.react"), {
            fetchState: w
        });
        return l.jsxs(l.Fragment, {
            children: [n && l.jsxs(l.Fragment, {
                children: [l.jsx("div", {
                    "data-testid": void 0,
                    className: "x1okw0bk",
                    children: l.jsx(c("WAWebProductCatalogProductListDrawerHeader.react"), {
                        profilePicThumb: e.getProfilePicThumb(),
                        contact: e,
                        businessProfile: n
                    })
                }), f && d("WAWebBizGatingUtils").catalogCategoriesEnabled() && ((k = n.directConnection) == null ? void 0 : k.enabled) ? l.jsx(d("WAWebProductCollectionCatalogCategoriesBanner").CatalogCategoriesBanner, {
                    catalog: f
                }) : null, f && x && !y && z && l.jsx(d("WAWebProductCollectionCatalogPostcodeMenu").CatalogPostcodeMenu, {
                    catalog: f,
                    businessDirectConnection: z,
                    postcodeChangeSuccess: a
                })]
            }), l.jsxs("div", {
                "data-testid": void 0,
                className: (j || (j = c("stylex")))(q.list, d("WAWebUISpacing").uiPadding.bottom8, n && d("WAWebUISpacing").uiMargin.top8),
                children: [D, B, C, i, A && l.jsx(c("WAWebFlatListLoadingSpinnerItem.react"), {})]
            })]
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";
    e = l.forwardRef(a);

    function a(a, e) {
        a = babelHelpers["extends"]({}, a);
        var f = a.contact,
            g = a.catalogId,
            i = a.setScrollOffset,
            j = a.onCartClick,
            k = a.onCatalogLinkClick,
            q = a.canManageCatalog,
            s = a.canLogQpl,
            t = s === void 0 ? !0 : s,
            u = a.scrollOffset,
            v = a.autoUpdate;
        s = a.businessProfile;
        var w = a.onAddProduct,
            x = a.onProductDetail,
            y = a.onProductShare,
            z = a.onCollectionSeeAll,
            A = a.onEditCollection,
            B = a.onOpenCollections,
            C = a.onRemoveProduct,
            D = a.onOpenSettings,
            aa = a.onOpenMerchantDetailsForm,
            E = a.onBack,
            F = a.isInitialStep;
        F = F === void 0 ? !1 : F;
        var G = m(d("WAWebDrawerContext").DrawerContext),
            H = d("WAWebDirectConnectionGatingUtils").enablePostcodeInCatalog() && !!s && d("WAWebBusinessDirectUtils").businessSupportsPostcode(s),
            ba = c("useWAWebUnmountSignal")(),
            I = c("useForceUpdate")(),
            J = c("useWAWebDebouncedCallback")(I, 100),
            K = o(function () {
                return new(c("WAWebFlatListController"))()
            }, []),
            L = d("useWAWebContactValues").useContactValues(f.id, [d("WAWebContactGetters").getId]),
            M = L[0],
            N = o(function () {
                return d("WAWebCartCollection").CartCollection.findCart(M.toString())
            }, [M]);
        L = p(!1);
        var O = L[0],
            ca = L[1];
        L = p(null);
        var P = L[0],
            Q = L[1];
        L = p(N.itemCount);
        var da = L[0],
            ea = L[1];
        L = p("NONE");
        var fa = L[0],
            R = L[1];
        L = p(null);
        var ga = L[0],
            S = L[1];
        L = p(null);
        var T = L[0],
            U = L[1];
        L = p(!0);
        var ha = L[0],
            V = L[1],
            ia = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    yield a == null ? void 0 : a.loadInitialItems(), V(!1)
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }(),
            ja = c("useWAWebDebouncedCallback")(function () {
                I(), C == null ? void 0 : C()
            }, 100),
            ka = function (a) {
                v && a != null && (a.productCollection.on("add", J), a.productCollection.on("remove", ja), a.collections.on("add", J), a.collections.on("remove", J))
            };
        L = p();
        var la = L[0],
            ma = L[1];
        L = p(!1);
        var na = L[0],
            W = L[1],
            oa = function () {
                var a = t,
                    b = a ? d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW : void 0;
                d("WAWebCatalogCollection").CatalogCollection.find(g, {
                    markerId: b
                }).then(function (b) {
                    if (ba.aborted) return;
                    var c = new(d("WAWebBizCatalogUtils").CatalogWithCollectionsDataSource)(b, q || !1, d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT, a),
                        e = new(d("WAWebBizCatalogUtils").CatalogListItemScrollHelper)(c);
                    Q(b);
                    S(c);
                    U(e);
                    R("SUCCESS");
                    ia(c).then(function () {
                        a && d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, d("WAQplTypes").QuickLogActionType.SUCCESS)
                    })["catch"](function () {
                        a && d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, d("WAQplTypes").QuickLogActionType.FAIL)
                    });
                    ka(b);
                    u !== void 0 && K.setScrollFromStart(u)
                })["catch"](function (b) {
                    a && d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, d("WAQplTypes").QuickLogActionType.FAIL), d("WAWebProductCatalogFetchState").parseErrorState(b, function (a) {
                        R(a), V(!1)
                    })
                })
            },
            pa = function () {
                if (H) {
                    W(!0);
                    var a = new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__mcu2xeW0Dur__JHASH__")),
                        b = c("WAWebBusinessDirectConnectionCollection").getCypher(g).then(function (a) {
                            ma(a), W(!1), oa()
                        })["catch"](function () {
                            V(!1);
                            throw new(d("WAWebActionToast.react").ActionType)(h._("__JHASH__v1hR--0j6mi__JHASH__"))
                        });
                    d("WAWebToastManager").ToastManager.open(l.jsx(d("WAWebActionToast.react").ActionToast, {
                        initialAction: a,
                        pendingAction: b
                    }))
                } else oa()
            };
        n(function () {
            pa(), c("WAWebProductCatalogCheckCartEnabled")(g).then(function (a) {
                ca(a), a && N.on("change:cartItemCollection", function () {
                    return ea(N.itemCount)
                }), d("WAWebProductCatalogLogEvents").logCatalogListView({
                    catalogOwnerWid: g,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(G),
                    cartToggle: a
                })
            })
        }, []);
        var qa = c("useWAWebThrottledCallback")(function (a, b) {
            i == null ? void 0 : i(b.scrollTop), (T == null ? void 0 : T.willLoadMore(b)) && V(!0), T == null ? void 0 : T.onScroll(a, b).then(function (a) {
                a && V(!1)
            })["catch"](function (a) {
                V(!1);
                throw a
            })
        }, 100);
        L = function (a) {
            qa(a, a.currentTarget)
        };
        var ra = function () {
                d("WAWebUtilsLogQplEvents").qplStartCartView("Catalog"), j == null ? void 0 : j(M.toString())
            },
            sa = function () {
                if (!P) return;
                k(P, f);
                d("WAWebProductCatalogLogEvents").logCatalogShareLinkClick({
                    catalogOwnerWid: g,
                    catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(G)
                })
            },
            X = d("WAWebActiveAccountInfoModel").getActiveAccountInfo(),
            Y = d("useWAWebServerGatedAdEntryPoint").useServerGatedAdEntryPoint("whatsapp_smb_web_catalog", X),
            Z = Y[0];
        Y = Y[1];
        var $ = {};
        d("WAWebUIRefreshGatingUtils").uiRefreshM1Enabled() && F ? $.onCancel = E : $.onBack = E;
        var ta, ua;
        if (q === !0 && X != null && !Z && d("WAWebBizGatingUtils").adCreationEntryPointCatalogEnabled()) {
            F = P == null ? void 0 : P.getMostRecentlyApprovedProduct();
            Z = F == null ? void 0 : F.id.toString();
            if (Z != null) {
                F = {
                    activeAccountInfo: X,
                    sourceAdCreation: "whatsapp_smb_web_catalog",
                    productId: Z
                };
                d("WAWebBizGatingUtils").adCreationEntryPointCatalogProductEnabled() ? ua = {
                    adCreationUrlInput: F,
                    ctaText: Y == null ? void 0 : Y.content
                } : ta = l.jsx(d("WAWebFlex.react").FlexRow, {
                    children: l.jsx(d("WAWebAdvertisePill.react").AdvertisePill, {
                        ctaText: Y == null ? void 0 : Y.content,
                        adCreationUrlInput: F,
                        lwiEntryPoint: d("WAWebWamEnumLwiEntryPoint").LWI_ENTRY_POINT.SMB_CATALOG_LIST_ADVERTISE_BUTTON
                    })
                })
            }
        }
        X = d("WAWebProductCatalogCatalogDrawerMenu.react").getCatalogDrawerMenu({
            onSendCatalog: sa,
            onCartClick: O ? ra : void 0,
            cartCount: da,
            catalogId: g.toString(),
            canManageCatalog: q,
            onOpenCollections: B,
            onOpenMerchantDetailsForm: aa,
            onOpenSettings: D,
            cartIconTheme: a.headerType === d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.LARGE ? "inherit-color" : null,
            boostMenuOptionInput: ua
        });
        return l.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            theme: "products",
            onDrop: E,
            children: [l.jsx(d("WAWebDrawerHeader.react").DrawerHeader, babelHelpers["extends"]({
                title: h._("__JHASH__UNA9opkICZW__JHASH__"),
                type: a.headerType || d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                menu: X,
                focusBackOrCancel: !0
            }, $, {
                children: ta
            })), l.jsx(c("WAWebDrawerBody.react"), {
                onScroll: L,
                flatListControllers: [K],
                children: l.jsx(r, {
                    cartEnabled: O,
                    contact: f,
                    handleCartClick: ra,
                    onProductDetail: x,
                    onCartClick: j,
                    catalog: P,
                    dataSource: ga,
                    businessProfile: s,
                    canManageCatalog: q,
                    onAddProduct: w,
                    onProductShare: y,
                    onCollectionSeeAll: z,
                    onOpenCollections: B,
                    onEditCollection: A,
                    catalogFlatListController: K,
                    catalogFetchState: fa,
                    directConnectionPostcodeEnabled: H,
                    loadingDirectConnectionInfo: na,
                    businessDirectConnection: la,
                    loadingMore: ha,
                    postcodeChangeSuccess: function () {
                        d("WAWebCatalogCollection").CatalogCollection.removeCatalog(g), Q(null), S(null), U(null), R("NONE"), V(!0), pa()
                    }
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 226);
__d("WAWebProductCollectionCollectionContentDrawer.react", ["fbt", "WAQplTypes", "WAWebBizCatalogUtils", "WAWebCartCollection", "WAWebCatalogCollection", "WAWebContactGetters", "WAWebDrawer.react", "WAWebDrawerBody.react", "WAWebDrawerContext", "WAWebDrawerHeader.react", "WAWebFlatListController", "WAWebFlatListLoadingSpinnerItem.react", "WAWebManageAddItemCta.react", "WAWebManageCollectionIntegrityBanner.react", "WAWebProductCatalogCatalogConstants", "WAWebProductCatalogCatalogDrawerMenu.react", "WAWebProductCatalogCheckCartEnabled", "WAWebProductCatalogContext", "WAWebProductCatalogFetchState", "WAWebProductCatalogFetchStateTopBar.react", "WAWebProductCollectionLogEvents", "WAWebProductCollectionsList.react", "WAWebQplQuickPerformanceLoggerMarkerIds", "WAWebQplQuickPerformanceLoggerModule", "WAWebUtilsLogQplEvents", "asyncToGeneratorRuntime", "react", "useForceUpdate", "useWAWebContactValues", "useWAWebDebouncedCallback", "useWAWebListener", "useWAWebUnmountSignal"], (function (a, b, c, d, e, f, g, h) {
    var i, j;
    e = j || d("react");
    var k = i || (i = c("react")),
        l = e.useContext,
        m = e.useEffect,
        n = e.useMemo,
        o = e.useState;

    function p(a) {
        var b = a.cartEnabled,
            e = a.catalogFetchState,
            f = a.collectionFlatListController,
            g = a.loadingMore,
            i = a.catalog,
            j = a.dataSource,
            l = a.canManageCatalog,
            m = a.collection,
            n = a.handleCartClick,
            o = a.onProductDetail,
            p = a.onCartClick,
            q = a.onProductShare,
            r = a.onEditCollection;
        a = b && p ? n : void 0;
        if (!i || !j) return k.jsx(c("WAWebProductCatalogFetchStateTopBar.react"), {
            fetchState: e
        });
        b = j.getData();
        if (b.length === 0 && !g && l && m) return k.jsxs("div", {
            className: "x1okw0bk xwib8y2 x6ikm8r x10wlt62",
            children: [k.jsx(c("WAWebManageAddItemCta.react"), {
                theme: "collections",
                onClick: function () {
                    r == null ? void 0 : r(m)
                },
                testid: void 0
            }), k.jsx("div", {
                className: "xqy66fx x14uny0o xr1496l xvpee5o x101yacv",
                children: h._("__JHASH__V0AGZYXcjEp__JHASH__")
            })]
        });
        p = k.jsx(c("WAWebProductCollectionsList.react"), {
            onCartOpen: a,
            onProductDetail: o,
            flatListController: f,
            catalog: i,
            canManageCatalog: l,
            shareLinks: l,
            onProductShare: q,
            collectionId: m == null ? void 0 : m.id.toString(),
            data: b
        });
        n = m ? k.jsx(d("WAWebManageCollectionIntegrityBanner.react").CollectionIntegrityBanner, {
            collection: m,
            onEditCollection: r
        }) : void 0;
        return k.jsxs("div", {
            className: "x1okw0bk xwib8y2 x6ikm8r x10wlt62",
            children: [n, p, g && k.jsx(c("WAWebFlatListLoadingSpinnerItem.react"), {})]
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";
    e = k.forwardRef(a);

    function a(a, e) {
        var f;
        a = babelHelpers["extends"]({}, a);
        var g = a.contact,
            i = a.catalogId,
            j = a.onCartClick,
            q = a.onCatalogLinkClick,
            r = a.setScrollOffset,
            s = a.canManageCatalog,
            t = a.scrollOffset,
            u = a.collection,
            v = a.onProductDetail,
            w = a.onProductShare,
            x = a.onEditCollection,
            y = c("useForceUpdate")(),
            z = c("useWAWebUnmountSignal")(),
            A = l(d("WAWebDrawerContext").DrawerContext),
            B = d("useWAWebContactValues").useContactValues(g.id, [d("WAWebContactGetters").getId]),
            C = B[0],
            D = n(function () {
                return d("WAWebCartCollection").CartCollection.findCart(C.toString())
            }, [C]),
            E = n(function () {
                return new(c("WAWebFlatListController"))()
            }, []);
        B = o(!1);
        var F = B[0],
            G = B[1];
        B = o(null);
        var H = B[0],
            I = B[1];
        B = o(D.itemCount);
        var J = B[0],
            K = B[1];
        B = o("NONE");
        var L = B[0],
            M = B[1];
        B = o(null);
        var N = B[0],
            O = B[1];
        B = o(null);
        var P = B[0],
            Q = B[1];
        B = o(!0);
        var R = B[0],
            S = B[1];
        d("useWAWebListener").useListener(u == null ? void 0 : u.productCollection, ["add", "remove"], y);
        d("useWAWebListener").useListener(H == null ? void 0 : H.productCollection, ["add", "remove"], y);
        d("useWAWebListener").useListener(H == null ? void 0 : H.collections, ["add", "remove"], y);
        d("useWAWebListener").useListener(u, ["change:reviewStatus", "canAppeal"], y);
        var T = function () {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
                    yield a == null ? void 0 : a.loadInitialItems(), S(!1), d("WAWebProductCollectionLogEvents").logCollectionSeeAllView({
                        catalogOwnerJid: i.toString(),
                        catalogContext: d("WAWebProductCatalogContext").getProductCatalogContext(A),
                        collectionId: a == null ? void 0 : a.collectionId
                    })
                });
                return function (b) {
                    return a.apply(this, arguments)
                }
            }(),
            U = function () {
                d("WAWebCatalogCollection").CatalogCollection.find(i).then(function (a) {
                    if (z.aborted) return;
                    I(a);
                    M("SUCCESS");
                    a = new(d("WAWebBizCatalogUtils").SingleCollectionDataSource)(a, u == null ? void 0 : u.id.toString(), s || !1, d("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT);
                    var b = new(d("WAWebBizCatalogUtils").CatalogListItemScrollHelper)(a);
                    O(a);
                    Q(b);
                    T(a).then(function () {
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, d("WAQplTypes").QuickLogActionType.SUCCESS)
                    })["catch"](function () {
                        d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, d("WAQplTypes").QuickLogActionType.FAIL)
                    });
                    t !== void 0 && E.setScrollFromStart(t)
                })["catch"](function (a) {
                    d("WAWebQplQuickPerformanceLoggerModule").QPL.markerEnd(d("WAWebQplQuickPerformanceLoggerMarkerIds").QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, d("WAQplTypes").QuickLogActionType.FAIL), d("WAWebProductCatalogFetchState").parseErrorState(a, function (a) {
                        M(a), S(!1)
                    })
                })
            },
            V = function () {
                var a = D.itemCount;
                J !== a && K(a)
            };
        m(function () {
            U(), c("WAWebProductCatalogCheckCartEnabled")(i).then(function (a) {
                G(a), a && D.on("all", V)
            })
        }, []);
        B = function () {
            d("WAWebUtilsLogQplEvents").qplStartCartView("Collection"), j == null ? void 0 : j(C.toString())
        };
        y = function () {
            H && q(H, g)
        };
        var W = c("useWAWebDebouncedCallback")(function (a, b) {
                r == null ? void 0 : r(b.scrollTop), (P == null ? void 0 : P.willLoadMore(b)) && S(!0), P == null ? void 0 : P.onScroll(a, b).then(function (a) {
                    a && S(!1)
                })["catch"](function (a) {
                    S(!1);
                    throw a
                })
            }, 100),
            X = function (a) {
                W(a, a.currentTarget)
            };
        y = d("WAWebProductCatalogCatalogDrawerMenu.react").getCatalogDrawerMenu({
            onSendCatalog: y,
            onCartClick: F ? B : void 0,
            cartCount: D.itemCount,
            catalogId: i.toString(),
            canManageCatalog: s,
            cartIconTheme: "inherit-color"
        });
        f = ((f = a.collection) == null ? void 0 : f.name) || h._("__JHASH__Zv5rP2mZt-i__JHASH__");
        return k.jsxs(c("WAWebDrawer.react"), {
            ref: e,
            theme: "products",
            onDrop: a.onBack,
            children: [k.jsx(d("WAWebDrawerHeader.react").DrawerHeader, {
                title: f,
                type: a.headerType || d("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onBack: a.onBack,
                menu: y
            }), k.jsx(c("WAWebDrawerBody.react"), {
                flatListControllers: [E],
                onScroll: X,
                children: k.jsx(p, {
                    cartEnabled: F,
                    onCartClick: j,
                    handleCartClick: B,
                    catalog: H,
                    dataSource: N,
                    catalogFetchState: L,
                    loadingMore: R,
                    canManageCatalog: s,
                    collection: u,
                    onProductDetail: v,
                    onProductShare: w,
                    onEditCollection: x,
                    collectionFlatListController: E
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g.CollectionContentDrawer = e
}), 226);
__d("WAWebWamGroupMetadataMetricUtils_WORKER_INCOMPATIBLE", ["WAWebGroupMetadataCollection", "WAWebWamGroupMetricUtils"], (function (a, b, c, d, e, f, g) {
    function h(a) {
        return a.isGroup() ? c("WAWebGroupMetadataCollection").get(a) : null
    }

    function a(a) {
        if (a != null && a.isGroup()) {
            a = h(a);
            if (a != null) return d("WAWebWamGroupMetricUtils").getGroupCountMetricsFromGroupMetadata(a)
        }
    }
    g.getGroupCountMetricsFromChatWid = a
}), 98);