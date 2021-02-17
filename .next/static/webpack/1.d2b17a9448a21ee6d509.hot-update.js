webpackHotUpdate_N_E(1,{

/***/ "./src/container/shop/editShop.tsx":
/*!*****************************************!*\
  !*** ./src/container/shop/editShop.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _constants_Snack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Snack */ "./src/constants/Snack.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\editShop.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var styles = {
  btn: {
    padding: '10px'
  }
};

var EditShop = function EditShop(_ref) {
  _s();

  var match = _ref.match,
      shopDetail = _ref.shopDetail,
      updateShopDetail = _ref.updateShopDetail,
      fetchShopDetail = _ref.fetchShopDetail;
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])(); //const shopDetail = useSelector(state => state.shopDetail);

  var edit_shop_addr_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var edit_shop_phone_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var edit_shop_order_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchShopDetail(match.params.id);
  }, []);

  var edit_shop = function edit_shop(e) {
    e.preventDefault();
    updateShopDetail(match.params.id, edit_shop_addr_REF.current.value, edit_shop_phone_REF.current.value, edit_shop_order_REF.current.value);
  };

  var back_shop = function back_shop(e) {
    e.preventDefault();
    history.push('/');
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, !shopDetail && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 32
    }
  }, "Loading..."), shopDetail && __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_addr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, "Shop Address"), __jsx("input", {
    type: "text",
    name: "edit_shop_addr",
    id: "edit_shop_addr",
    ref: edit_shop_addr_REF,
    key: "address",
    defaultValue: shopDetail.shop_addr || '',
    placeholder: "\uC2DD\uB2F9 \uC8FC\uC18C",
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Shop Phone Number"), __jsx("input", {
    type: "text",
    name: "edit_shop_phone",
    id: "edit_shop_phone",
    key: "phone",
    ref: edit_shop_phone_REF,
    defaultValue: shopDetail.shop_phone || '',
    placeholder: "\uC2DD\uB2F9 \uC5F0\uB77D\uCC98",
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_order",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "Shop Order"), __jsx("input", {
    type: "text",
    name: "edit_shop_order",
    id: "edit_shop_order",
    key: "order",
    ref: edit_shop_order_REF,
    defaultValue: shopDetail.shop_order || 5,
    className: "form-control",
    placeholder: "\uC21C\uC11C",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    style: styles.btn,
    onClick: function onClick(e) {
      return edit_shop(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "\uC218\uC815"), __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick(e) {
      return back_shop(e);
    },
    style: styles.btn,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "\uBA54\uC778")), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  })));
};

_s(EditShop, "qzvrl9fbpB5sC5IKZoSHUBkpizc=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"]];
});

_c = EditShop;

var mapStateToProps = function mapStateToProps(state) {
  return {
    shopDetail: state.shopDetail
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchShopDetail: function fetchShopDetail(id) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchShopDetail"])(id));
    },
    updateShopDetail: function updateShopDetail(id, addr, phone, order) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateShopDetail"])(id, addr, phone, order));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["snack"])(true, '정보가 업데이트 되었습니다.'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(EditShop));

var _c;

$RefreshReg$(_c, "EditShop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9zaG9wL2VkaXRTaG9wLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJidG4iLCJwYWRkaW5nIiwiRWRpdFNob3AiLCJtYXRjaCIsInNob3BEZXRhaWwiLCJ1cGRhdGVTaG9wRGV0YWlsIiwiZmV0Y2hTaG9wRGV0YWlsIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJlZGl0X3Nob3BfYWRkcl9SRUYiLCJ1c2VSZWYiLCJlZGl0X3Nob3BfcGhvbmVfUkVGIiwiZWRpdF9zaG9wX29yZGVyX1JFRiIsInVzZUVmZmVjdCIsInBhcmFtcyIsImlkIiwiZWRpdF9zaG9wIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiYmFja19zaG9wIiwicHVzaCIsInNob3BfYWRkciIsInNob3BfcGhvbmUiLCJzaG9wX29yZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFkZHIiLCJwaG9uZSIsIm9yZGVyIiwic25hY2siLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxLQUFHLEVBQUU7QUFDREMsV0FBTyxFQUFFO0FBRFI7QUFETSxDQUFmOztBQXNCQSxJQUFNQyxRQUE0QyxHQUFHLFNBQS9DQSxRQUErQyxPQUE4RDtBQUFBOztBQUFBLE1BQTNEQyxLQUEyRCxRQUEzREEsS0FBMkQ7QUFBQSxNQUFwREMsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsTUFBeENDLGdCQUF3QyxRQUF4Q0EsZ0JBQXdDO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjtBQUMvRyxNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCLENBRCtHLENBRy9HOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHQyxvREFBTSxDQUFDLElBQUQs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RUFBRCxFQUFLZSxJQUFMLEVBQVdDLEtBQVgsRUFBa0JDLEtBQWxCLENBQWpCLENBQVI7QUFDQUgsY0FBUSxDQUFDSSxzREFBSyxDQUFDLElBQUQsRUFBTyxpQkFBUCxDQUFOLENBQVI7QUFDSDtBQVBFLEdBQVA7QUFTSCxDQVZEOztBQVllQywwSEFBTyxDQUFDUixlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2QzFCLFFBQTdDLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5kMmIxN2E5NDQ4YTIxZWU2ZDUwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoU2hvcERldGFpbCwgdXBkYXRlU2hvcERldGFpbCwgc25hY2sgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uLy4uL2NvbnN0YW50cy9TbmFjayc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGJ0bjoge1xyXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4J1xyXG4gICAgfVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzRnJvbVN0YXRlIHtcclxuICAgIG1hdGNoIDogYW55LFxyXG4gICAgc2hvcERldGFpbDoge1xyXG4gICAgICAgIHNob3Bfb3JkZXI6IHN0cmluZyxcclxuICAgICAgICBzaG9wX2FkZHI6IHN0cmluZyxcclxuICAgICAgICBzaG9wX3Bob25lOiBzdHJpbmdcclxuICAgIH1cclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgcHJvcHNGcm9tRGlzcGF0Y2gge1xyXG5cdHVwZGF0ZVNob3BEZXRhaWw6KGlkOiBzdHJpbmcsIGFkZHI6IHN0cmluZywgcGhvbmU6c3RyaW5nLCBvcmRlcjpzdHJpbmcgKSA9PiB2b2lkLFxyXG4gICAgZmV0Y2hTaG9wRGV0YWlsOihpZDogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgRWRpdFNob3AgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBtYXRjaCwgc2hvcERldGFpbCwgdXBkYXRlU2hvcERldGFpbCwgZmV0Y2hTaG9wRGV0YWlsIH0pID0+IHtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblxyXG4gICAgLy9jb25zdCBzaG9wRGV0YWlsID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2hvcERldGFpbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGVkaXRfc2hvcF9hZGRyX1JFRiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGVkaXRfc2hvcF9waG9uZV9SRUYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBlZGl0X3Nob3Bfb3JkZXJfUkVGID0gdXNlUmVmKG51bGwpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hTaG9wRGV0YWlsKG1hdGNoLnBhcmFtcy5pZCk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBlZGl0X3Nob3AgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB1cGRhdGVTaG9wRGV0YWlsKG1hdGNoLnBhcmFtcy5pZCwgZWRpdF9zaG9wX2FkZHJfUkVGLmN1cnJlbnQudmFsdWUsIGVkaXRfc2hvcF9waG9uZV9SRUYuY3VycmVudC52YWx1ZSwgZWRpdF9zaG9wX29yZGVyX1JFRi5jdXJyZW50LnZhbHVlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgYmFja19zaG9wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc2hvcERldGFpbCAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7c2hvcERldGFpbCAmJlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX2FkZHJcIj5TaG9wIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3BfYWRkclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9hZGRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdF9zaG9wX2FkZHJfUkVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9hZGRyIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsi53ri7kg7KO87IaMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX3Bob25lXCI+U2hvcCBQaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3BfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3BfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0X3Nob3BfcGhvbmVfUkVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3BfcGhvbmUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyLneuLuSDsl7Drnb3ssphcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3Bfb3JkZXJcIj5TaG9wIE9yZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX29yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX29yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdF9zaG9wX29yZGVyX1JFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX29yZGVyIHx8IDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsiJzshJxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlZGl0X3Nob3AoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyImOyglVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBiYWNrX3Nob3AoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg66mU7J24XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbmFjayAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgc2hvcERldGFpbDogc3RhdGUuc2hvcERldGFpbFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaDxhbnksIGFueSwgQW55QWN0aW9uPikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaFNob3BEZXRhaWw6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFNob3BEZXRhaWwoaWQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVNob3BEZXRhaWw6IChpZCwgYWRkciwgcGhvbmUsIG9yZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNob3BEZXRhaWwoaWQsIGFkZHIsIHBob25lLCBvcmRlcikpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzbmFjayh0cnVlLCAn7KCV67O06rCAIOyXheuNsOydtO2KuCDrkJjsl4jsirXri4jri6QuJykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFZGl0U2hvcClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==