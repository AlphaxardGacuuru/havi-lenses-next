"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.js




const Header = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const path = router.pathname;
    const open = ()=>document.getElementById("MyElement").className = "menu-open";
    const close = ()=>document.getElementById("MyElement").classList.remove("menu-open");
    const handleScroll = ()=>{
        window.onscroll = ()=>{
            if (window.pageYOffset > 0) {
                document.getElementById("header-area").classList.add("sticky");
            } else {
                document.getElementById("header-area").classList.remove("sticky");
            }
        };
    };
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "MyElement",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                id: "header-area",
                className: "header-area",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "menu-area d-flex justify-content-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-area",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: "HAVI Lenses"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "menu-content-area d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "header-social-area d-flex align-items-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "tel:0700364446",
                                                        "data-toggle": "tooltip",
                                                        "data-placement": "bottom",
                                                        title: "Phone",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-phone",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "sms:0700364446",
                                                        "data-toggle": "tooltip",
                                                        "data-placement": "bottom",
                                                        title: "SMS",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-comment-o",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://wa.me/+2540700364446",
                                                        "data-toggle": "tooltip",
                                                        "data-placement": "bottom",
                                                        title: "WhatsApp",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-whatsapp",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "mailto:alphaxardgacuuru47@gmail.com?subject = Photography&body = Enquiry",
                                                        "data-toggle": "tooltip",
                                                        "data-placement": "bottom",
                                                        title: "Email",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-envelope-o",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.instagram.com/alphaxard_gacuuru",
                                                        "data-toggle": "tooltip",
                                                        "data-placement": "bottom",
                                                        title: "Instagram",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-instagram",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "https://www.facebook.com/alphaxard.gacuuru",
                                                        "data-toggle": "tooltip",
                                                        "data-placement": "bottom",
                                                        title: "Facebook",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-facebook",
                                                            "aria-hidden": "true"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "navbar-toggler-icon",
                                                id: "menuIcon",
                                                onClick: open
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mainMenu d-flex align-items-center justify-content-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "closeIcon",
                        onClick: close,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                            className: "ti-close",
                            "aria-hidden": "true"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logo-area",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "HAVI Lenses"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sonarNav wow fadeInUp",
                        "data-wow-delay": "1s",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    style: {
                                                        opacity: path == "/" ? 1 : 0.2
                                                    },
                                                    onClick: close,
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    style: {
                                                        opacity: path == "/about" ? 1 : 0.2
                                                    },
                                                    onClick: close,
                                                    children: "About Me"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/services",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    style: {
                                                        opacity: path == "/services" ? 1 : 0.2
                                                    },
                                                    onClick: close,
                                                    children: "Services"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/portfolio",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    style: {
                                                        opacity: path == "/portfolio" ? 1 : 0.2
                                                    },
                                                    onClick: close,
                                                    children: "Portfolio"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "nav-item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "nav-link",
                                                    style: {
                                                        opacity: path == "/contact" ? 1 : 0.2
                                                    },
                                                    onClick: close,
                                                    children: "Contact"
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-5",
                                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem eum repellendus. Similique, quo quaerat nam consequuntur saepe omnis, dolorum quibusdam at, consectetur perferendis cupiditate sint minima quas nihil quasi."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "footer-area",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "backEnd-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            className: "dots",
                            src: "img/core-img/dots.png",
                            alt: ""
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Dream"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-12",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "copywrite-text",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {})
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    /*
	*
	* Register service worker */ if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664], () => (__webpack_exec__(2473)));
module.exports = __webpack_exports__;

})();