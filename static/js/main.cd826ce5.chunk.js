(this["webpackJsonpstepn-web-react"] = this["webpackJsonpstepn-web-react"] || []).push([
    [5], {
        20: function(n, e, t) {
            "use strict";
            t.d(e, "b", (function() {
                return i
            })), t.d(e, "c", (function() {
                return a
            })), t.d(e, "a", (function() {
                return c
            }));
            var i = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 768;
                    return "@media screen and (max-width: ".concat(e, "px) {").concat(n, "}")
                },
                a = function(n, e, t) {
                    return "@media screen and (min-width: ".concat(n, "px) and (max-width: ").concat(e, "px) {").concat(t, "}")
                },
                c = function(n) {
                    return "@media screen and (max-width: 1024px) {".concat(n, "}")
                }
        },
        256: function(n, e) {},
        258: function(n, e) {},
        260: function(n, e) {},
        264: function(n, e) {},
        291: function(n, e) {},
        293: function(n, e) {},
        302: function(n, e) {},
        304: function(n, e) {},
        314: function(n, e) {},
        316: function(n, e) {},
        434: function(n, e) {},
        436: function(n, e) {},
        443: function(n, e) {},
        444: function(n, e) {},
        462: function(n, e) {},
        545: function(n, e, t) {
            "use strict";
            t.r(e);
            var i, a, c, o, r, s, l, d, b, p, u, f, m, h, x, j, g, O, w, v = t(1),
                y = t.n(v),
                k = t(90),
                T = t.n(k),
                C = t(36),
                P = t(10),
                N = t(49),
                z = t(16),
                L = t(17),
                M = Object(L.a)(i || (i = Object(z.a)(['\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: "Monorama-Bold";\n    src: url("/fonts/Monorama-Bold.otf") format("opentype");\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: "TTOctosquares-Black";\n    src: url("/fonts/TTOctosquares-Black.otf") format("opentype");\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: "SourceCodeVariable-Roman";\n    src: url("/fonts/SourceCodeVariable-Roman.otf") format("opentype");\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: "SourceCodeRoman-Medium";\n    src: url("/fonts/SourceCodeVariable-Roman.otf") format("opentype");\n    font-weight: 500;\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: "SourceCodeRoman-Bold";\n    src: url("/fonts/SourceCodeVariable-Roman.otf") format("opentype");\n    font-weight: bold;\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: "FuturaPT-Demi";\n    src: url("/fonts/FuturaPTDemi.otf") format("opentype");\n    font-weight: bold;\n  }\n\n\n  a {\n    text-decoration: none;\n    color: #000;\n  }\n\n  .breathe {\n    animation: breathe 2s linear infinite;\n  }\n']))),
                S = t(29),
                A = L.c.div(a || (a = Object(z.a)(['\n  position: relative;\n  width: 100%;\n\n  .logo {\n    position: absolute;\n    left: 75px;\n    top: 64px;\n    z-index: 10;\n\n    @media screen and (max-width: 768px) {\n      width: 44px;\n      height: 44px;\n      left: 26px;\n      top: 16.5px;\n    }\n  }\n\n  .join {\n    position: absolute;\n    right: 220px;\n    top: 98px;\n    height: 35px;\n    line-height: 35px;\n    background-color: #fff;\n    border: 1px solid rgb(35, 31, 32);\n    border-radius: 17.5px;\n    font-size: 24px;\n    letter-spacing: -0.2px;\n    font-family: "TTOctosquares-Black";\n    text-align: center;\n    cursor: pointer;\n    z-index: 100;\n    padding: 0 10px;\n\n    @media screen and (max-width: 768px) {\n      right: 80px;\n      top: 20px;\n      height: 30px;\n      line-height: 30px;\n      font-size: 12px;\n    }\n  }\n\n  .menu {\n    position: absolute;\n    right: 109px;\n    top: 89px;\n    cursor: pointer;\n    z-index: 2;\n    transition: all 0.2s linear;\n    width: 52px;\n    height: 52px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    @media screen and (max-width: 768px) {\n      width: 26px;\n      height: 26px;\n    }\n\n    span {\n      display: inline-block;\n      width: 100%;\n      height: 12px;\n      background-color: #000;\n      transition: all 0.1s linear;\n\n      @media screen and (max-width: 768px) {\n        height: 6px;\n      }\n    }\n\n    &.active {\n      span:nth-child(1) {\n        transform: translate(0, 10px) scale(1, 0);\n      }\n\n      span:nth-child(3) {\n        transform: translate(0, -10px) scale(1, 0);\n      }\n    }\n\n    @media screen and (max-width: 768px) {\n      width: 26px;\n      height: 26px;\n      right: 36px;\n      top: 21.5px;\n    }\n  }\n\n  .float-logo {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n  }\n']))),
                R = L.c.div(c || (c = Object(z.a)(['\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n  z-index: 1;\n  transition: all 0.2s linear;\n  border: none;\n  opacity: 0.9;\n  transform: translate(100%, 0) translateZ(0);\n\n  &.active {\n    transform: translate(0, 0) translateZ(0);\n  }\n\n  div {\n    text-align: center;\n    font-family: "TTOctosquares-Black";\n    font-size: 40px;\n    line-height: 48px;\n\n    span {\n      cursor: pointer;\n    }\n\n    &:nth-child(1) {\n      margin-top: 180px;\n    }\n  }\n\n  div + div {\n    margin-top: 60px;\n  }\n\n  @media screen and (max-width: 768px) {\n    div {\n      font-size: 20px;\n      line-height: 24px;\n\n      &:nth-child(1) {\n        margin-top: 120px;\n      }\n    }\n\n    div + div {\n      margin-top: 40px;\n    }\n  }\n\n  @keyframes breathe {\n    0% {\n      transform: scale(1);\n    }\n    50% {\n      transform: scale(1.1);\n    }\n    100% {\n      transform: scale(1);\n    }\n  }\n']))),
                E = t(26),
                D = t.n(E),
                B = t(91),
                q = t(233),
                W = new(t.n(q).a)(window.web3 ? window.web3.currentProvider : {}),
                I = t(20),
                H = L.c.div(o || (o = Object(z.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n"])), (function(n) {
                    return n.visible ? "flex" : "none"
                })),
                V = L.c.img(r || (r = Object(z.a)(["\n  position: absolute;\n  top: -60px;\n  right: 32px;\n  cursor: pointer;\n\n  ", "\n"])), Object(I.b)(Object(L.b)(s || (s = Object(z.a)(["\n      height: 25px;\n      top: -25px;\n      right: 5px;\n    "]))))),
                _ = L.c.div(l || (l = Object(z.a)(["\n  position: relative;\n  width: 826px;\n  background-color: #231f20;\n  color: #fff;\n  padding: 60px;\n  text-align: center;\n  font-family: TTOctosquares-Black;\n  box-sizing: border-box;\n\n  .title {\n    font-size: 50px;\n    line-height: 62p;\n    margin-bottom: 40px;\n  }\n\n  .desc {\n    margin-bottom: 40px;\n    font-size: 20px;\n    letter-spacing: -0.17px;\n    line-height: 24px;\n  }\n\n  .button {\n    display: flex;\n    justify-content: center;\n    position: relative;\n\n    .item:first-child {\n      margin-right: 30px;\n    }\n\n    .item {\n      width: 200px;\n      height: 60px;\n      font-size: 26px;\n      background-color: #fff;\n      border-radius: 5px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      ", "\n\n      img {\n        margin-right: 8px;\n      }\n\n      &:first-child {\n        ", '\n      }\n\n      &:last-child {\n        position: relative;\n        width: 60px;\n        margin-left: 30px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n\n        img {\n          margin: 0;\n        }\n\n        .box {\n          position: absolute;\n          top: 80px;\n          left: 50%;\n          width: 223px;\n          height: 230px;\n          transform: translate(-50%, 0);\n          background: url("/img/qrcodebg.svg") no-repeat 0 0 / cover;\n          display: none;\n\n          ', "\n\n          p {\n            font-family: sourceCodeVariable-Roman;\n            font-size: 12px;\n            line-height: 15px;\n          }\n\n          svg {\n            display: block;\n            margin: 20px auto 5px auto;\n          }\n        }\n\n        &:hover .box {\n          display: block;\n        }\n      }\n    }\n  }\n\n  ", "\n"])), Object(I.b)(Object(L.b)(d || (d = Object(z.a)(["\n        margin: 0;\n        width: 130px;\n        height: 40px;\n\n        img {\n          width: 90px;\n        }\n      "])))), Object(I.b)(Object(L.b)(b || (b = Object(z.a)(["\n          margin: 0;\n        "])))), Object(I.b)(Object(L.b)(p || (p = Object(z.a)(["\n            display: none;\n          "])))), Object(I.b)(Object(L.b)(u || (u = Object(z.a)(["\n    width: 330px;\n    padding: 40px 0;\n\n    .title {\n      font-size: 20px;\n    }\n\n    .desc {\n      margin-bottom: 20px;\n      font-size: 12px;\n    }\n\n    .desc + .desc {\n      margin-bottom: 40px;\n    }\n\n    .button {\n      .item:last-child {\n        display: none;\n      }\n    }\n  "]))))),
                F = t(2),
                Q = function(n) {
                    var e = n.children,
                        t = n.visible,
                        i = n.onChange,
                        a = Object(v.useRef)(document.createElement("div")),
                        c = Object(v.useMemo)((function() {
                            return Object(F.jsx)(H, {
                                visible: t,
                                children: Object(F.jsxs)(_, {
                                    children: [e, Object(F.jsx)(V, {
                                        src: "./img/closeDialog.svg",
                                        onClick: function() {
                                            return i(!1)
                                        }
                                    })]
                                })
                            })
                        }), [e, t]);
                    return Object(v.useEffect)((function() {
                        a.current.isConnected || document.body.append(a.current), Object(k.render)(c, a.current)
                    }), [a, e, c]), null
                },
                Y = t(223),
                G = t.n(Y),
                J = t(74),
                Z = function(n) {
                    var e = n.children,
                        t = n.paths,
                        i = Object(P.f)().pathname;
                    return Object(v.useMemo)((function() {
                        return t.some((function(n) {
                            return i.startsWith(n)
                        }))
                    }), [t, i]) ? null : Object(F.jsx)(F.Fragment, {
                        children: e
                    })
                },
                X = ["/getCode"],
                K = function() {
                    var n = Object(v.useState)(!1),
                        e = Object(S.a)(n, 2),
                        t = e[0],
                        i = e[1],
                        a = Object(P.f)().pathname,
                        c = Object(v.useRef)(null),
                        o = Object(v.useRef)(null),
                        r = function() {
                            var n = Object(v.useState)(""),
                                e = Object(S.a)(n, 2),
                                t = e[0],
                                i = e[1],
                                a = function() {
                                    var n = Object(B.a)(D.a.mark((function n() {
                                        var e;
                                        return D.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    if ("" === t) {
                                                        n.next = 2;
                                                        break
                                                    }
                                                    return n.abrupt("return");
                                                case 2:
                                                    return n.next = 4, W.eth.getAccounts();
                                                case 4:
                                                    (e = n.sent).length && i(e[0]);
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }(),
                                c = function() {
                                    var n = Object(B.a)(D.a.mark((function n() {
                                        var e;
                                        return D.a.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    if (window.web3) {
                                                        n.next = 2;
                                                        break
                                                    }
                                                    return n.abrupt("return");
                                                case 2:
                                                    if ("" === t) {
                                                        n.next = 4;
                                                        break
                                                    }
                                                    return n.abrupt("return");
                                                case 4:
                                                    return n.next = 6, W.eth.requestAccounts();
                                                case 6:
                                                    (e = n.sent).length && i(e[0]);
                                                case 8:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function() {
                                        return n.apply(this, arguments)
                                    }
                                }();
                            return Object(v.useEffect)((function() {
                                window.web3 && a()
                            }), []), {
                                account: t,
                                connectWallet: c
                            }
                        }(),
                        s = r.account,
                        l = r.connectWallet,
                        d = "/liquidityMining" !== a,
                        b = Object(J.a)().isMobile,
                        p = navigator.userAgent,
                        u = p.indexOf("Android") > -1 || p.indexOf("Adr") > -1,
                        f = function() {
                            c.current && o.current && (c.current.classList.remove("active"), o.current.classList.remove("active"))
                        };
                    return Object(v.useEffect)((function() {
                        var n = function(n) {
                                c.current && c.current.classList.contains("active") && n.preventDefault()
                            },
                            e = function(n) {
                                c.current && c.current.classList.contains("active") && n.preventDefault()
                            };
                        return window.addEventListener("wheel", n, {
                                passive: !1
                            }), window.addEventListener("touchmove", e, {
                                passive: !1
                            }),
                            function() {
                                window.removeEventListener("wheel", n), window.removeEventListener("touchmove", e)
                            }
                    }), []), Object(F.jsx)(Z, {
                        paths: X,
                        children: Object(F.jsxs)(A, {
                            children: [Object(F.jsx)(C.b, {
                                to: "/",
                                "data-role": "logo",
                                children: Object(F.jsx)("img", {
                                    src: "./img/logo.svg",
                                    alt: "",
                                    className: "logo",
                                    "data-role": "logo",
                                    width: "106",
                                    height: "106",
                                    onClick: f
                                })
                            }), Object(F.jsxs)("div", {
                                className: "menu",
                                onClick: function() {
                                    if (c.current && o.current) {
                                        var n = c.current.classList.toggle("active");
                                        o.current.classList.toggle("active", n)
                                    }
                                },
                                ref: c,
                                children: [Object(F.jsx)("span", {
                                    className: "menu-item"
                                }), Object(F.jsx)("span", {
                                    className: "menu-item"
                                }), Object(F.jsx)("span", {
                                    className: "menu-item"
                                })]
                            }), Object(F.jsx)("div", {
                                className: "join breathe",
                                onClick: function() {
                                    return i(!0)
                                },
                                children: "DOWNLOAD NOW"
                            }), d || Object(F.jsx)("div", {
                                className: "join ".concat("" === s ? "breathe" : ""),
                                onClick: l,
                                children: "" === s ? "CONNECT WALLET" : s.slice(0, 8)
                            }), Object(F.jsxs)(R, {
                                onClick: f,
                                "data-role": "menu",
                                ref: o,
                                id: "menu",
                                children: [Object(F.jsx)("div", {
                                    "data-role": "menu",
                                    children: Object(F.jsx)(C.b, {
                                        to: "/",
                                        "data-role": "menu",
                                        children: "Home"
                                    })
                                }), Object(F.jsx)("div", {
                                    "data-role": "menu",
                                    children: Object(F.jsx)("a", {
                                        href: "https://www.stepn.com/howToPlay",
                                        "data-role": "menu",
                                        children: "How to Play"
                                    })
                                }), Object(F.jsx)("div", {
                                    "data-role": "menu",
                                    children: Object(F.jsx)("a", {
                                        href: "https://whitepaper.stepn.com/",
                                        "data-role": "menu",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "Whitepaper"
                                    })
                                }), Object(F.jsx)("div", {
                                    "data-role": "menu",
                                    children: Object(F.jsx)("a", {
                                        href: "https://www.stepn.com/litePaper",
                                        "data-role": "menu",
                                        children: "Litepaper"
                                    })
                                }), Object(F.jsx)("div", {
                                    "data-role": "menu",
                                    children: Object(F.jsx)("a", {
                                        href: "https://linktr.ee/stepnofficial",
                                        "data-role": "menu",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: "LinkTree"
                                    })
                                })]
                            }), Object(F.jsxs)(Q, {
                                visible: t,
                                onChange: i,
                                children: [Object(F.jsx)("div", {
                                    className: "title",
                                    children: "DOWNLOAD NOW"
                                }), Object(F.jsxs)("div", {
                                    className: "button",
                                    children: [b && u || Object(F.jsx)("a", {
                                        className: "item",
                                        href: window.stepn.ios,
                                        onClick: function() {
                                            return i(!1)
                                        },
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(F.jsx)("img", {
                                            src: "./img/iosbg.svg",
                                            alt: ""
                                        })
                                    }), b && !u || Object(F.jsx)("a", {
                                        className: "item",
                                        href: window.stepn.apk,
                                        onClick: function() {
                                            return i(!1)
                                        },
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(F.jsx)("img", {
                                            src: "./img/googlePlay.svg",
                                            alt: ""
                                        })
                                    }), Object(F.jsxs)("a", {
                                        className: "item",
                                        children: [Object(F.jsx)("img", {
                                            src: "./img/qrcode.svg",
                                            alt: ""
                                        }), Object(F.jsxs)("div", {
                                            className: "box",
                                            children: [Object(F.jsx)(G.a, {
                                                value: "https://stepn.com/download.html",
                                                size: 180,
                                                renderAs: "svg"
                                            }), Object(F.jsx)("p", {
                                                children: "Scan QR code to download"
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                U = L.c.div(f || (f = Object(z.a)(["\n  position: relative;\n  font-size: 0;\n\n  .icon {\n    position: absolute;\n    left: 0;\n    bottom: 10vw;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 768px) {\n      bottom: 110px;\n    }\n\n    @media screen and (max-width: 844px) {\n      bottom: 110px;\n    }\n\n    ", "\n\n\n    a + a {\n      margin-left: 60px;\n      @media screen and (max-width: 768px) {\n        margin-left: 20px;\n      }\n    }\n\n    a {\n      &:nth-child(1) img {\n        width: 40px;\n      }\n\n      &:nth-child(2) img {\n        width: 36px;\n      }\n\n      &:nth-child(3) img {\n        width: 37px;\n      }\n\n      &:nth-child(4) img {\n        width: 32px;\n      }\n\n      &:nth-child(5) img {\n        width: 50px;\n      }\n\n      &:nth-child(6) img {\n        width: 30px;\n      }\n\n      &:nth-child(5) img {\n        width: 204px;\n\n        ", "\n      }\n    }\n\n    img {\n      @media screen and (max-width: 768px) {\n        width: 20px !important;\n        height: 20px;\n      }\n    }\n  }\n\n  p {\n    font-family: SourceCodeRoman-Bold;\n    position: absolute;\n    width: 100%;\n    bottom: 2vw;\n    left: 50%;\n    transform: translate(-50%, 0);\n    font-size: 18px;\n    color: #fff;\n    line-height: 25px;\n    text-align: center;\n\n    ", "\n\n    ", "\n  }\n\n  .media {\n    font-family: SourceCodeVariable-Roman;\n    position: absolute;\n    left: 50%;\n    width: 463px;\n    transform: translate(-50%, 0);\n    bottom: 6vw;\n    font-size: 16px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    a {\n      color: #fff;\n      display: flex;\n      align-items: center;\n    }\n\n    ", "\n\n    img {\n      margin-right: 10px;\n      vertical-align: middle;\n    }\n\n    @media screen and (max-width: 768px) {\n      bottom: ", " !important;\n    }\n\n    ", "\n\n    ", "\n  }\n"])), Object(I.b)(Object(L.b)(m || (m = Object(z.a)(["\n        bottom: 170px;\n      "]))), 1024), Object(I.b)(Object(L.b)(h || (h = Object(z.a)(["\n          width: 26px !important;\n        "])))), Object(I.b)(Object(L.b)(x || (x = Object(z.a)(["\n      bottom: 26px;\n      font-size: 14px;\n\n      span {\n        font-size: 10px;\n        transform-origin: center;\n        transform: scale(calc(10 / 12));\n        display: block;\n        white-space: nowrap;\n        text-align: center;\n        letter-spacing: 0px;\n        margin: 0 auto;\n        overflow: hidden;\n      }\n\n      span:nth-child(2) {\n        display: none;\n      }\n    "])))), Object(I.b)(Object(L.b)(j || (j = Object(z.a)(["\n        bottom: 20px;\n      "]))), 1024), Object(I.b)(Object(L.b)(g || (g = Object(z.a)(["\n        bottom: 60px;\n        width: calc(100vw - 40px);\n      "]))), 1024), (function(n) {
                    return n.isHowToPlayPage ? "80px" : "70px;"
                }), Object(I.b)(Object(L.b)(O || (O = Object(z.a)(["\n      bottom: 123px;\n      font-size: 12px;\n      width: calc(100vw - 40px);\n      img {\n        width: 20px;\n      }\n    "])))), Object(I.c)(768, 1024, Object(L.b)(w || (w = Object(z.a)(["\n        width: 44vw;\n      "]))))),
                $ = ["/getCode"],
                nn = function() {
                    var n = Object(J.a)().isMobile,
                        e = Object(P.f)().pathname,
                        t = [{
                            img: "./img/discut.svg",
                            url: "https://discord.com/invite/stepn"
                        }, {
                            img: "./img/bxlTelegram.svg",
                            url: "https://t.me/STEPNannouncement"
                        }, {
                            img: "./img/twitter.svg",
                            url: "https://twitter.com/Stepnofficial"
                        }, {
                            img: "./img/reddit.svg",
                            url: "https://www.reddit.com/r/StepN/"
                        }, {
                            img: "./img/".concat(n ? "mediumMobile" : "medium", ".svg"),
                            url: "https://stepnofficial.medium.com/"
                        }],
                        i = Object(v.useMemo)((function() {
                            return "/howToPlay" === e
                        }), [e]),
                        a = Object(v.useMemo)((function() {
                            return i ? n ? "./img/how-to-play/mFooter.png" : "./img/how-to-play/footer.png" : n ? "./img/footermobile.svg" : "./img/footer.svg"
                        }), [i, n]),
                        c = Object(v.useMemo)((function() {
                            return "/howToPlay" === e && n ? {
                                bottom: "130px"
                            } : {}
                        }), [e, n]),
                        o = Object(v.useMemo)((function() {
                            return "/howToPlay" === e && n ? {
                                bottom: "60px"
                            } : {}
                        }), [e, n]);
                    return Object(F.jsx)(Z, {
                        paths: $,
                        children: Object(F.jsxs)(U, {
                            isHowToPlayPage: i,
                            children: [Object(F.jsx)("img", {
                                src: a,
                                className: "responsive",
                                alt: "",
                                width: "100%"
                            }), Object(F.jsxs)("div", {
                                className: "media",
                                style: o,
                                children: [Object(F.jsxs)("a", {
                                    href: "mailto:hello@stepn.com",
                                    children: [Object(F.jsx)("img", {
                                        src: "./img/email.svg",
                                        alt: ""
                                    }), "hello@stepn.com"]
                                }), Object(F.jsxs)("a", {
                                    href: "/stepn_media_kit.zip",
                                    download: !0,
                                    children: [Object(F.jsx)("img", {
                                        src: "./img/downloadmedia.svg",
                                        alt: ""
                                    }), "download media kit"]
                                })]
                            }), Object(F.jsx)("div", {
                                className: "icon",
                                style: c,
                                children: t.map((function(n, e) {
                                    return Object(F.jsx)("a", {
                                        href: n.url,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(F.jsx)("img", {
                                            src: n.img,
                                            alt: ""
                                        })
                                    }, e)
                                }))
                            }), Object(F.jsxs)("p", {
                                children: [Object(F.jsx)("span", {
                                    children: "COPYRIGHT FINDSATOSHI LAB LTD. 2022 - ALL RIGHTS RESERVED"
                                }), " ", Object(F.jsx)("span", {
                                    children: "\u4e28"
                                }), " ", Object(F.jsx)("span", {
                                    children: "POWERED BY FINDSATOSHI LAB LTD."
                                })]
                            })]
                        })
                    })
                },
                en = function() {
                    return Object(F.jsx)("div", {
                        style: {
                            position: "fixed",
                            width: "100vw",
                            height: "100vh",
                            left: 0,
                            top: 0,
                            background: "#fff"
                        }
                    })
                },
                tn = Object(N.a)((function() {
                    return t.e(2).then(t.bind(null, 608))
                }), {
                    fallback: Object(F.jsx)(en, {})
                }),
                an = Object(N.a)((function() {
                    return Promise.all([t.e(0), t.e(10), t.e(4)]).then(t.bind(null, 606))
                }), {
                    fallback: Object(F.jsx)(en, {})
                }),
                cn = Object(N.a)((function() {
                    return Promise.all([t.e(11), t.e(6)]).then(t.bind(null, 604))
                }), {
                    fallback: Object(F.jsx)(en, {})
                }),
                on = Object(N.a)((function() {
                    return Promise.all([t.e(0), t.e(1)]).then(t.bind(null, 607))
                }), {
                    fallback: Object(F.jsx)(en, {})
                }),
                rn = Object(N.a)((function() {
                    return Promise.all([t.e(0), t.e(9), t.e(3)]).then(t.bind(null, 609))
                }), {
                    fallback: Object(F.jsx)(en, {})
                }),
                sn = Object(N.a)((function() {
                    return Promise.all([t.e(0), t.e(9), t.e(3)]).then(t.bind(null, 605))
                }), {
                    fallback: Object(F.jsx)(en, {})
                });
            var ln = function() {
                return Object(F.jsxs)(C.a, {
                    children: [Object(F.jsx)(M, {}), Object(F.jsx)(K, {}), Object(F.jsxs)(P.d, {
                        children: [Object(F.jsx)(P.b, {
                            path: "/",
                            element: Object(F.jsx)(an, {})
                        }), Object(F.jsx)(P.b, {
                            path: "/contact",
                            element: Object(F.jsx)(tn, {})
                        }), Object(F.jsx)(P.b, {
                            path: "/howToPlay",
                            element: Object(F.jsx)(sn, {})
                        }), Object(F.jsx)(P.b, {
                            path: "/litePaper",
                            element: Object(F.jsx)(cn, {})
                        }), Object(F.jsx)(P.b, {
                            path: "/activeCode",
                            element: Object(F.jsx)(on, {})
                        }), Object(F.jsx)(P.b, {
                            path: "/getCode",
                            element: Object(F.jsx)(rn, {})
                        }), Object(F.jsx)(P.b, {
                            path: "*",
                            element: Object(F.jsx)(P.a, {
                                to: "/"
                            })
                        })]
                    }), Object(F.jsx)(nn, {})]
                })
            };
            T.a.render(Object(F.jsx)(y.a.StrictMode, {
                children: Object(F.jsx)(ln, {})
            }), document.getElementById("root"))
        },
        74: function(n, e, t) {
            "use strict";
            t.d(e, "a", (function() {
                return c
            }));
            var i = t(1),
                a = t(63),
                c = function() {
                    var n = Object(a.useMediaQuery)({
                            query: "(orientation: portrait)"
                        }),
                        e = Object(a.useMediaQuery)({
                            query: "(max-width: 768px)"
                        }),
                        t = Object(i.useMemo)((function() {
                            if (e) {
                                var n = navigator.userAgent;
                                return n.indexOf("Android") > -1 || n.indexOf("Adr") > -1 ? "android" : "iphone"
                            }
                            return "pc"
                        }), [e]),
                        c = Object(a.useMediaQuery)({
                            query: "(max-width: 1024px)"
                        }) && !n,
                        o = Object(a.useMediaQuery)({
                            width: 768,
                            height: 1024
                        }) && n,
                        r = Object(a.useMediaQuery)({
                            width: 820,
                            height: 1180
                        }) && n;
                    return {
                        device: t,
                        isMobile: e,
                        isPortrait: n,
                        isIPadY: o,
                        isMobileX: c,
                        isIPadAirY: r
                    }
                }
        }
    },
    [
        [545, 7, 8]
    ]
]);
//# sourceMappingURL=main.cd826ce5.chunk.js.map