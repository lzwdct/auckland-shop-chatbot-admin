webpackHotUpdate_N_E(1,{

/***/ "./src/container/app.tsx":
/*!*******************************!*\
  !*** ./src/container/app.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _shop_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop/Main */ "./src/container/shop/Main.tsx");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/container/login.tsx");
/* harmony import */ var _menu_menuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menuList */ "./src/container/menu/menuList.tsx");
/* harmony import */ var _shop_editShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/editShop */ "./src/container/shop/editShop.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\app.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var App = function App(props) {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "App",
    style: style.app,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _login__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/menu/:id",
    component: _menu_menuList__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/edit/:id",
    component: _shop_editShop__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _shop_Main__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);
var style = {
  app: {
    backgroundColor: '#fff',
    padding: 10
  }
};

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9hcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3R5bGUiLCJhcHAiLCJMb2dpbiIsIk1lbnVMaXN0IiwiRWRpdFNob3AiLCJNYWluIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQVc7QUFDckIsU0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQXFCLFNBQUssRUFBRUMsS0FBSyxDQUFDQyxHQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLGFBQVMsRUFBRUMsOENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBTyxRQUFJLEVBQUMsV0FBWjtBQUF3QixhQUFTLEVBQUVDLHNEQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHNEQUFEO0FBQU8sUUFBSSxFQUFDLFdBQVo7QUFBd0IsYUFBUyxFQUFFQyxzREFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBSUUsTUFBQyxzREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFzQixhQUFTLEVBQUVDLGtEQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FERixDQURGLENBREY7QUFZRCxDQWJEOztLQUFNUCxHO0FBZVNBLGtFQUFmO0FBRUEsSUFBTUUsS0FBSyxHQUFDO0FBQ1ZDLEtBQUcsRUFBRTtBQUNISyxtQkFBZSxFQUFFLE1BRGQ7QUFFSEMsV0FBTyxFQUFFO0FBRk47QUFESyxDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuOTgwZDA2MzNjNzQ3Y2U5NjU3N2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4vc2hvcC9NYWluJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi9tZW51L21lbnVMaXN0JztcclxuaW1wb3J0IEVkaXRTaG9wIGZyb20gJy4vc2hvcC9lZGl0U2hvcCc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCIgc3R5bGU9e3N0eWxlLmFwcH0+XHJcbiAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21lbnUvOmlkXCIgY29tcG9uZW50PXtNZW51TGlzdH0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXQvOmlkXCIgY29tcG9uZW50PXtFZGl0U2hvcH0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG5jb25zdCBzdHlsZT17XHJcbiAgYXBwOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIHBhZGRpbmc6IDEwXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==