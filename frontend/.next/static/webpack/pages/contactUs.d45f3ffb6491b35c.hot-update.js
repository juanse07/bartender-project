"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contactUs",{

/***/ "./src/components/contactButton.tsx":
/*!******************************************!*\
  !*** ./src/components/contactButton.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_contactButton_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/contactButton.module.css */ \"./src/styles/contactButton.module.css\");\n/* harmony import */ var _styles_contactButton_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_contactButton_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Copy,Gauge,MessageCircle,MessageSquare,Phone!=!lucide-react */ \"__barrel_optimize__?names=Copy,Gauge,MessageCircle,MessageSquare,Phone!=!./node_modules/lucide-react/dist/esm/lucide-react.js\");\n/* harmony import */ var _barrel_optimize_names_Button_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button!=!react-bootstrap */ \"__barrel_optimize__?names=Button!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContactUsButton = (param)=>{\n    let { label, body, iconType = \"messageSquare\" } = param;\n    _s();\n    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const getIcon = (type)=>{\n        switch(type){\n            case \"gauge\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Gauge, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 24\n                }, undefined);\n            case \"messageSquare\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__.MessageSquare, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 24\n                }, undefined);\n            case \"messageCircle\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__.MessageCircle, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 24\n                }, undefined);\n            case \"phone\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Phone, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 24\n                }, undefined);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__.MessageSquare, {\n                    className: \"w-6 h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 24\n                }, undefined);\n        }\n    };\n    const handleCopy = ()=>{\n        navigator.clipboard.writeText(body);\n        setIsCopied(true);\n        setTimeout(()=>{\n            setIsCopied(false);\n        }, 2000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: 'flex',\n            alignItems: 'center',\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                onClick: ()=>handleCopy(),\n                className: (_styles_contactButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().responsiveButton),\n                children: [\n                    getIcon(iconType),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: '0 auto'\n                        },\n                        children: [\n                            label,\n                            \" \",\n                            body\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            \"is copp\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Copy_Gauge_MessageCircle_MessageSquare_Phone_lucide_react__WEBPACK_IMPORTED_MODULE_3__.Copy, {\n                className: (_styles_contactButton_module_css__WEBPACK_IMPORTED_MODULE_1___default().copyIcon),\n                onClick: ()=>handleCopy(),\n                style: {\n                    cursor: 'pointer'\n                }\n            }, void 0, false, {\n                fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/juansuarez/Bartender_website/bartender-project/frontend/src/components/contactButton.tsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ContactUsButton, \"dIAMLjsduWkZ4KaA+ylUo0FLqmM=\");\n_c = ContactUsButton;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUsButton);\nvar _c;\n$RefreshReg$(_c, \"ContactUsButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250YWN0QnV0dG9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUN5QjtBQUN2QztBQUNSO0FBVWpDLE1BQU1RLGtCQUFrQjtRQUFDLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxXQUFXLGVBQWUsRUFBd0I7O0lBQ3RGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNTyxVQUFVLENBQUNDO1FBQ2IsT0FBUUE7WUFDSixLQUFLO2dCQUNELHFCQUFPLDhEQUFDYixtSEFBS0E7b0JBQUNjLFdBQVU7Ozs7OztZQUM1QixLQUFLO2dCQUNELHFCQUFPLDhEQUFDWiwySEFBYUE7b0JBQUNZLFdBQVU7Ozs7OztZQUNwQyxLQUFLO2dCQUNELHFCQUFPLDhEQUFDYiwySEFBYUE7b0JBQUNhLFdBQVU7Ozs7OztZQUNwQyxLQUFLO2dCQUNELHFCQUFPLDhEQUFDWCxtSEFBS0E7b0JBQUNXLFdBQVU7Ozs7OztZQUM1QjtnQkFDSSxxQkFBTyw4REFBQ1osMkhBQWFBO29CQUFDWSxXQUFVOzs7Ozs7UUFDeEM7SUFDSjtJQUdBLE1BQU1DLGFBQWE7UUFFWEMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNWO1FBQzlCRyxZQUFZO1FBQ1pRLFdBQVc7WUFDUFIsWUFBWTtRQUNoQixHQUFHO0lBQ1g7SUFFQSxxQkFDSSw4REFBQ1M7UUFBSUMsT0FBTztZQUFFQyxTQUFTO1lBQVFDLFlBQVk7WUFBVUMsVUFBVTtRQUFXOzswQkFDdEUsOERBQUNwQixpRkFBTUE7Z0JBQ0hxQixTQUFTLElBQU1WO2dCQUNmRCxXQUFXaEIsMEZBQXVCOztvQkFFakNjLFFBQVFIO2tDQUNULDhEQUFDa0I7d0JBQUtOLE9BQU87NEJBQUVPLFFBQVE7d0JBQVM7OzRCQUFJckI7NEJBQU07NEJBQUVDOzs7Ozs7Ozs7Ozs7O1lBQ3ZDOzBCQUVULDhEQUFDVCxrSEFBSUE7Z0JBQUNlLFdBQVdoQixrRkFBZTtnQkFDNUIyQixTQUFTLElBQU1WO2dCQUNmTSxPQUFPO29CQUFFUyxRQUFRO2dCQUFVOzs7Ozs7Ozs7Ozs7QUFJM0M7R0EzQ014QjtLQUFBQTtBQTZDTixpRUFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2p1YW5zdWFyZXovQmFydGVuZGVyX3dlYnNpdGUvYmFydGVuZGVyLXByb2plY3QvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvY29udGFjdEJ1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9jb250YWN0QnV0dG9uLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgQ29weSwgR2F1Z2UsIE1lc3NhZ2VDaXJjbGUsIE1lc3NhZ2VTcXVhcmUsIFBob25lIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIENvbnRhY3RVc0J1dHRvblByb3BzIHtcbiAgICBib2R5OiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBpY29uVHlwZT86IHN0cmluZztcbiAgXG59XG5cblxuY29uc3QgQ29udGFjdFVzQnV0dG9uID0gKHsgbGFiZWwsIGJvZHksIGljb25UeXBlID0gXCJtZXNzYWdlU3F1YXJlXCIgfTogQ29udGFjdFVzQnV0dG9uUHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNDb3BpZWQsIHNldElzQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBnZXRJY29uID0gKHR5cGU6IHN0cmluZykgPT4ge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJnYXVnZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA8R2F1Z2UgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+O1xuICAgICAgICAgICAgY2FzZSBcIm1lc3NhZ2VTcXVhcmVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+O1xuICAgICAgICAgICAgY2FzZSBcIm1lc3NhZ2VDaXJjbGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2VDaXJjbGUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+O1xuICAgICAgICAgICAgY2FzZSBcInBob25lXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz47XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiA8TWVzc2FnZVNxdWFyZSBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz47XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgICAgICAgXG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChib2R5KTtcbiAgICAgICAgICAgIHNldElzQ29waWVkKHRydWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNDb3BpZWQoZmFsc2UpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29weSgpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJlc3BvbnNpdmVCdXR0b259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2dldEljb24oaWNvblR5cGUpfVxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogJzAgYXV0bycgfX0+e2xhYmVsfSB7Ym9keX08L3NwYW4+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIGlzIGNvcHBcbiAgICAgICAgICAgIDxDb3B5IGNsYXNzTmFtZT17c3R5bGVzLmNvcHlJY29ufVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvcHkoKX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVc0J1dHRvbjsiXSwibmFtZXMiOlsic3R5bGVzIiwiQ29weSIsIkdhdWdlIiwiTWVzc2FnZUNpcmNsZSIsIk1lc3NhZ2VTcXVhcmUiLCJQaG9uZSIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiQ29udGFjdFVzQnV0dG9uIiwibGFiZWwiLCJib2R5IiwiaWNvblR5cGUiLCJpc0NvcGllZCIsInNldElzQ29waWVkIiwiZ2V0SWNvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJoYW5kbGVDb3B5IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsIm9uQ2xpY2siLCJyZXNwb25zaXZlQnV0dG9uIiwic3BhbiIsIm1hcmdpbiIsImNvcHlJY29uIiwiY3Vyc29yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/contactButton.tsx\n"));

/***/ })

});