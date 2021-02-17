webpackHotUpdate_N_E(1,{

/***/ "./src/container/shop/addShop.tsx":
/*!****************************************!*\
  !*** ./src/container/shop/addShop.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _constants_Snack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Snack */ "./src/constants/Snack.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\addShop.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var styles = {
  wrapper: {
    height: '30px',
    margin: '20px 10px',
    borderRadius: 4,
    border: '1px solid #ccc'
  }
};

var AddShop = function AddShop(_ref) {
  _s();

  var addShop = _ref.addShop;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      shop_name = _useState[0],
      setShop_name = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      shop_addr = _useState2[0],
      setShop_addr = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      shop_phone = _useState3[0],
      setShop_phone = _useState3[1];

  var add_shop = function add_shop() {
    addShop(shop_name, shop_addr, shop_phone);
    setShop_name('');
    setShop_addr('');
    setShop_phone('');
  };

  var handleNameChange = function handleNameChange(event) {
    setShop_name(event.target.value);
  };

  var handleAddrChange = function handleAddrChange(event) {
    setShop_addr(event.target.value);
  };

  var handlePhoneChange = function handlePhoneChange(event) {
    setShop_phone(event.target.value);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }, __jsx("input", {
    type: "text",
    name: "add_shop_text",
    value: shop_name,
    onChange: handleNameChange,
    style: styles.wrapper,
    placeholder: "\uC2DD\uB2F9 \uC774\uB984",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    name: "add_shop_addr",
    value: shop_addr,
    onChange: handleAddrChange,
    style: styles.wrapper,
    placeholder: "\uC2DD\uB2F9 \uC8FC\uC18C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    name: "add_shop_phone",
    value: shop_phone,
    onChange: handlePhoneChange,
    style: styles.wrapper,
    placeholder: "\uC2DD\uB2F9 \uC5F0\uB77D\uCC98",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick() {
      return add_shop();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }
  }));
};

_s(AddShop, "e62YGLEhgsNnYuTLVkKsU7epY5E=");

_c = AddShop;

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addShop: function addShop(name, addr, phone) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["addShop"])(name, addr, phone));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["snack"])(true, '새로운 식당이 추가되었습니다.'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddShop));

var _c;

$RefreshReg$(_c, "AddShop");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9zaG9wL2FkZFNob3AudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIndyYXBwZXIiLCJoZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJBZGRTaG9wIiwiYWRkU2hvcCIsInVzZVN0YXRlIiwic2hvcF9uYW1lIiwic2V0U2hvcF9uYW1lIiwic2hvcF9hZGRyIiwic2V0U2hvcF9hZGRyIiwic2hvcF9waG9uZSIsInNldFNob3BfcGhvbmUiLCJhZGRfc2hvcCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWRkckNoYW5nZSIsImhhbmRsZVBob25lQ2hhbmdlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm5hbWUiLCJhZGRyIiwicGhvbmUiLCJzbmFjayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNSQyxVQUFNLEVBQUUsTUFEQTtBQUVQQyxVQUFNLEVBQUUsV0FGRDtBQUdQQyxnQkFBWSxFQUFDLENBSE47QUFJUEMsVUFBTSxFQUFFO0FBSkQ7QUFESSxDQUFmOztBQW1CQSxJQUFNQyxPQUEyQyxHQUFHLFNBQTlDQSxPQUE4QyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDbENDLHNEQUFRLENBQUMsRUFBRCxDQUQwQjtBQUFBLE1BQzdEQyxTQUQ2RDtBQUFBLE1BQ2xEQyxZQURrRDs7QUFBQSxtQkFFbENGLHNEQUFRLENBQUMsRUFBRCxDQUYwQjtBQUFBLE1BRTdERyxTQUY2RDtBQUFBLE1BRWxEQyxZQUZrRDs7QUFBQSxtQkFHaENKLHNEQUFRLENBQUMsRUFBRCxDQUh3QjtBQUFBLE1B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MDFlYWE1MTQ2MmQxMzdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBhZGRTaG9wLCBzbmFjayB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1NuYWNrJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3cmFwcGVyOiB7XHJcbiAgXHRoZWlnaHQ6ICczMHB4JyxcclxuICAgIG1hcmdpbjogJzIwcHggMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6NCxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG5cclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgcHJvcHNGcm9tRGlzcGF0Y2gge1xyXG5cdGFkZFNob3A6KHNob3BfbmFtZTogc3RyaW5nLCBzaG9wX2FkZHI6IHN0cmluZywgc2hvcF9waG9uZTogc3RyaW5nICkgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IEFkZFNob3AgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBhZGRTaG9wIH0pID0+IHtcclxuXHRjb25zdCBbc2hvcF9uYW1lLCBzZXRTaG9wX25hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtzaG9wX2FkZHIsIHNldFNob3BfYWRkcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Nob3BfcGhvbmUsIHNldFNob3BfcGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRjb25zdCBhZGRfc2hvcCA9ICgpID0+IHtcclxuXHRcdGFkZFNob3Aoc2hvcF9uYW1lLCBzaG9wX2FkZHIsIHNob3BfcGhvbmUpO1xyXG5cclxuXHRcdHNldFNob3BfbmFtZSgnJyk7XHJcblx0XHRzZXRTaG9wX2FkZHIoJycpO1xyXG5cdFx0c2V0U2hvcF9waG9uZSgnJyk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdHNldFNob3BfbmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVBZGRyQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX2FkZHIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlUGhvbmVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdHNldFNob3BfcGhvbmUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfdGV4dFwiIFxyXG5cdFx0XHRcdHZhbHVlPXtzaG9wX25hbWV9IFxyXG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSBcclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7J2066aEXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0bmFtZT1cImFkZF9zaG9wX2FkZHJcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9hZGRyfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQWRkckNoYW5nZX0gXHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwi7Iud64u5IOyjvOyGjFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9waG9uZVwiIFxyXG5cdFx0XHRcdHZhbHVlPXtzaG9wX3Bob25lfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlUGhvbmVDaGFuZ2V9IFxyXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXMud3JhcHBlcn1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDsl7Drnb3ssphcIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGFkZF9zaG9wKCl9PlxyXG5cdFx0XHRcdEFERFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PFNuYWNrIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe30pO1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkU2hvcDogKG5hbWUsIGFkZHIsIHBob25lKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZFNob3AobmFtZSwgYWRkciwgcGhvbmUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDsi53ri7nsnbQg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkU2hvcClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==