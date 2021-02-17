webpackHotUpdate_N_E(1,{

/***/ "./src/container/menu/addMenu.tsx":
/*!****************************************!*\
  !*** ./src/container/menu/addMenu.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _constants_Snack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Snack */ "./src/constants/Snack.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\addMenu.tsx",
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

var AddMenu = function AddMenu(_ref) {
  _s();

  var shop_id = _ref.shop_id,
      add_menu = _ref.add_menu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      menu_name = _useState[0],
      setMenu_name = _useState[1];

  var add_menus = function add_menus() {
    add_menu(shop_id, menu_name);
    setMenu_name('');
  };

  var handleNameChange = function handleNameChange(event) {
    setMenu_name(event.target.value);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("input", {
    type: "text",
    id: "add_menu_text",
    value: menu_name,
    onChange: function onChange(e) {
      return handleNameChange(e);
    },
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        add_menus();
      }
    },
    style: styles.wrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }), __jsx("button", {
    id: "add_menu",
    className: "btn btn-primary",
    onClick: function onClick() {
      return add_menus();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }));
};

_s(AddMenu, "1vmWv+RcgY/Zj02xBXji0z2AKW4=");

_c = AddMenu;

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    add_menu: function add_menu(id, name) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["addNewMenu"])(id, name));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["snack"])(true, '새로운 메뉴가 추가되었습니다.'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddMenu));

var _c;

$RefreshReg$(_c, "AddMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L2FkZE1lbnUudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIndyYXBwZXIiLCJoZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJBZGRNZW51Iiwic2hvcF9pZCIsImFkZF9tZW51IiwidXNlU3RhdGUiLCJtZW51X25hbWUiLCJzZXRNZW51X25hbWUiLCJhZGRfbWVudXMiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImUiLCJrZXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImlkIiwibmFtZSIsImFkZE5ld01lbnUiLCJzbmFjayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNSQyxVQUFNLEVBQUUsTUFEQTtBQUVQQyxVQUFNLEVBQUUsV0FGRDtBQUdQQyxnQkFBWSxFQUFDLENBSE47QUFJUEMsVUFBTSxFQUFFO0FBSkQ7QUFESSxDQUFmOztBQW1CQSxJQUFNQyxPQUEyQyxHQUFHLFNBQTlDQSxPQUE4QyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzVDQyxzREFBUSxDQUFDLEVBQUQsQ0FEb0M7QUFBQSxNQUN2RUMsU0FEdUU7QUFBQSxNQUM1REMsWUFENEQ7O0FBRzlFLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDN0JKLFlBQVEsQ0FBQ0QsT0FBRCxFQUFVRyxTQUFWLENBQVI7QUFDQUMsZ0JBQVksQ0FBQyxFQUFELENBQVo7QUFDQSxHQUhEOztBQUlBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUF5QztBQUNqRUgsZ0JBQVksQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLE1BQUUsRUFBQyxlQUZKO0FBR0MsU0FBSyxFQUFFTixTQUhSO0FBSUMsWUFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsYUFBT0osZ0JBQWdCLENBQUNJLENBQUQsQ0FBdkI7QUFBQSxLQUpYO0FBS0MsY0FBVSxFQUFFLG9CQUFBSCxLQUFLLEVBQUk7QUFDcEIsVUFBSUEsS0FBSyxDQUFDSSxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDMUJOLGlCQUFTO0FBQ1Q7QUFDRCxLQVRGO0FBVUMsU0FBSyxFQUFFWixNQUFNLENBQUNDLE9BVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBYUM7QUFBUSxNQUFFLEVBQUMsVUFBWDtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQWtELFdBQU8sRUFBRTtBQUFBLGFBQU1XLFNBQVMsRUFBZjtBQUFBLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FiRCxFQWdCQyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkQsQ0FERDtBQW9CQSxDQS9CRDs7R0FBTU4sTzs7S0FBQUEsTzs7QUFnQ04sSUFBTWEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU8sRUFBUDtBQUFBLENBQXhCOztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFrRDtBQUN6RSxTQUFPO0FBQ0hiLFlBQVEsRUFBRSxrQkFBQ2MsRUFBRCxFQUFZQyxJQUFaLEVBQTRCO0FBQ2xDRixjQUFRLENBQUNHLDJEQUFVLENBQUNGLEVBQUQsRUFBS0MsSUFBTCxDQUFYLENBQVI7QUFDQUYsY0FBUSxDQUFDSSxzREFBSyxDQUFDLElBQUQsRUFBTyxrQkFBUCxDQUFOLENBQVI7QUFDSDtBQUpFLEdBQVA7QUFNSCxDQVBEOztBQVNlQywwSEFBTyxDQUFDUCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q2QsT0FBN0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjI0YTM5MmM0ZDFlZGVlZWU3ZjRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1NuYWNrJztcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGFkZE5ld01lbnUsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd3JhcHBlcjoge1xyXG4gIFx0aGVpZ2h0OiAnMzBweCcsXHJcbiAgICBtYXJnaW46ICcyMHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOjQsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgfVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzRnJvbVN0YXRlIHtcclxuXHRzaG9wX2lkOiBudW1iZXJcclxuICB9XHJcbiAgXHJcbmludGVyZmFjZSBwcm9wc0Zyb21EaXNwYXRjaCB7XHJcblx0YWRkX21lbnU6IChzaG9wX2lkOiBudW1iZXIsIG1lbnVfbmFtZTogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgQWRkTWVudSA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFsbFByb3BzPiA9ICh7IHNob3BfaWQsIGFkZF9tZW51IH0pID0+IHtcclxuXHRjb25zdCBbbWVudV9uYW1lLCBzZXRNZW51X25hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRjb25zdCBhZGRfbWVudXMgPSAoKTogdm9pZCA9PiB7XHJcblx0XHRhZGRfbWVudShzaG9wX2lkLCBtZW51X25hbWUpO1xyXG5cdFx0c2V0TWVudV9uYW1lKCcnKTtcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudDogeyB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQgfSkgPT4ge1xyXG5cdFx0c2V0TWVudV9uYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRpZD1cImFkZF9tZW51X3RleHRcIiBcclxuXHRcdFx0XHR2YWx1ZT17bWVudV9uYW1lfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGhhbmRsZU5hbWVDaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuXHRcdFx0XHRcdFx0YWRkX21lbnVzKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9fVxyXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXMud3JhcHBlcn1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PGJ1dHRvbiBpZD1cImFkZF9tZW51XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCkgPT4gYWRkX21lbnVzKCl9PlxyXG5cdFx0XHRcdEFERFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PFNuYWNrIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICgpID0+ICh7fSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkX21lbnU6IChpZDpudW1iZXIsIG5hbWU6c3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZE5ld01lbnUoaWQsIG5hbWUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDrqZTribTqsIAg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkTWVudSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==