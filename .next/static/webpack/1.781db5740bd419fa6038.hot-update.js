webpackHotUpdate_N_E(1,{

/***/ "./src/container/shop/ShopList.tsx":
/*!*****************************************!*\
  !*** ./src/container/shop/ShopList.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _addShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addShop */ "./src/container/shop/addShop.tsx");
/* harmony import */ var _constants_Confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/Confirm */ "./src/constants/Confirm.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\ShopList.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var ShopList = function ShopList(_ref) {
  _s();

  var shopList = _ref.shopList,
      getShopList = _ref.getShopList,
      open = _ref.open,
      deleteShop = _ref.deleteShop;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      id = _useState[0],
      setID = _useState[1]; //const shopList = useSelector(state => state.shopList);
  //const dispatch = useDispatch();


  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (shopList.length === 0) getShopList();
  }, []);

  var delete_shop = function delete_shop(id) {
    open();
    setID(id);
  };

  var renderShop = function renderShop(shopList) {
    if (!shopList.length) return null;
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(shopList, function (shop) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        button: true,
        key: shop.idshop,
        component: "a",
        onClick: function onClick() {
          return history.push('/menu/' + shop.idshop);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: shop.shop_name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemSecondaryAction"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn btn-primary",
        onClick: function onClick() {
          return history.push('/edit/' + shop.idshop);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }
      }, "Edit"), __jsx("button", {
        className: "btn btn-secondary",
        onClick: function onClick() {
          return delete_shop(shop.idshop);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, "Delete")));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, shopList.length === 0 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 42
    }
  }, "Loading..."), shopList.length > 0 && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, renderShop(shopList)), __jsx(_addShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: function submit() {
      return deleteShop(id);
    },
    title: "Are you sure to delete?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  })));
};

_s(ShopList, "Xtt6+zqiCGTZU2nK3GH8zHNDuH8=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"]];
});

_c = ShopList;

var mapStateToProps = function mapStateToProps(state) {
  return {
    shopList: state.shopList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getShopList: function getShopList() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchShops"])());
    },
    deleteShop: function deleteShop(id) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteShop"])(id));
    },
    open: function open() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["confirm"])(true));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ShopList));

var _c;

$RefreshReg$(_c, "ShopList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9zaG9wL1Nob3BMaXN0LnRzeCJdLCJuYW1lcyI6WyJTaG9wTGlzdCIsInNob3BMaXN0IiwiZ2V0U2hvcExpc3QiLCJvcGVuIiwiZGVsZXRlU2hvcCIsInVzZVN0YXRlIiwiaWQiLCJzZXRJRCIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiZGVsZXRlX3Nob3AiLCJyZW5kZXJTaG9wIiwiXyIsIm1hcCIsInNob3AiLCJpZHNob3AiLCJwdXNoIiwic2hvcF9uYW1lIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImZldGNoU2hvcHMiLCJjb25maXJtIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWVBLElBQU1BLFFBQTRDLEdBQUcsU0FBL0NBLFFBQStDLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLFFBQThDLFFBQTlDQSxRQUE4QztBQUFBLE1BQXBDQyxXQUFvQyxRQUFwQ0EsV0FBb0M7QUFBQSxNQUF2QkMsSUFBdUIsUUFBdkJBLElBQXVCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjs7QUFBQSxrQkFDOUVDLHNEQUFRLENBQUMsQ0FBRCxDQURzRTtBQUFBLE1BQzNGQyxFQUQyRjtBQUFBLE1BQ3ZGQyxLQUR1RixpQkFFckc7QUFDQTs7O0FBQ0csTUFBTUMsT0FBTyxHQUFHQyxtRUFBVSxFQUExQjtBQUVIQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFHVCxRQUFRLENBQUNVLE1BQVQsS0FBb0IsQ0FBdkIsRUFDTVQsV0FBVztBQUNkLEdBSEssRUFHSixFQUhJLENBQVQ7O0FBS0csTUFBTVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sRUFBRCxFQUFnQjtBQUN0Q0gsUUFB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QUFDLElBQUQsQ0FBUixDQUFSO0FBQ0E7QUFUUSxHQUFQO0FBV0gsQ0FaRDs7QUFjZUMsMEhBQU8sQ0FBQ04sZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkN0QixRQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuNzgxZGI1NzQwYmQ0MTlmYTYwMzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hTaG9wcywgZGVsZXRlU2hvcCwgY29uZmlybSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgQWRkU2hvcCBmcm9tICcuL2FkZFNob3AnO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tICcuLi8uLi9jb25zdGFudHMvQ29uZmlybSc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG4gICAgc2hvcExpc3QgOiBbXVxyXG59XHJcbiAgXHJcbmludGVyZmFjZSBwcm9wc0Zyb21EaXNwYXRjaCB7XHJcbiAgICBnZXRTaG9wTGlzdDooKSA9PiB2b2lkLFxyXG4gICAgb3BlbjooKSA9PiB2b2lkLFxyXG4gICAgZGVsZXRlU2hvcDooaWQ6bnVtYmVyKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgU2hvcExpc3QgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBzaG9wTGlzdCwgZ2V0U2hvcExpc3QsIG9wZW4sIGRlbGV0ZVNob3AgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lkLCBzZXRJRF0gPSB1c2VTdGF0ZSgwKTtcclxuXHQvL2NvbnN0IHNob3BMaXN0ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2hvcExpc3QpO1xyXG5cdC8vY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmKHNob3BMaXN0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICBnZXRTaG9wTGlzdCgpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgZGVsZXRlX3Nob3AgPSAoaWQ6IG51bWJlcikgPT4ge1xyXG5cdFx0b3BlbigpO1xyXG5cdFx0c2V0SUQoaWQpXHJcblx0fVxyXG4gICAgY29uc3QgcmVuZGVyU2hvcCA9IChzaG9wTGlzdDogW10pID0+IHtcclxuICAgICAgICBpZighc2hvcExpc3QubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuXHRcdHJldHVybiBfLm1hcChzaG9wTGlzdCwgc2hvcCA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17c2hvcC5pZHNob3B9IGNvbXBvbmVudD1cImFcIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy9tZW51LycgKyBzaG9wLmlkc2hvcCkgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtzaG9wLnNob3BfbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy9lZGl0Lycrc2hvcC5pZHNob3ApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZV9zaG9wKHNob3AuaWRzaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvcExpc3QubGVuZ3RoID09PSAwICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3BMaXN0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJTaG9wKHNob3BMaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFkZFNob3AvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdD17KCkgPT4gZGVsZXRlU2hvcChpZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBzaG9wTGlzdDogc3RhdGUuc2hvcExpc3RcclxufSk7XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaDxhbnksIGFueSwgQW55QWN0aW9uPikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTaG9wTGlzdDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFNob3BzKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKGlkOm51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wKGlkKSlcclxuICAgICAgICB9LFxyXG5cdFx0b3BlbjogKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2hvcExpc3QpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=