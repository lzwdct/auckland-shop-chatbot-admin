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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\editShop.tsx",
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
      lineNumber: 53,
      columnNumber: 9
    }
  }, !shopDetail && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 32
    }
  }, "Loading..."), shopDetail && __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_addr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
      lineNumber: 61,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
      lineNumber: 74,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_order",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 99,
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
      lineNumber: 106,
      columnNumber: 25
    }
  }, "\uBA54\uC778")), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
/*
class EditShop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shopid: '',
            shop_name: '',
            shop_addr: '',
            shop_phone: '',
            shop_order: '',
            snack_open: false
        };
    }
    componentDidMount() {

        this.props.fetchShopDetail(this.props.match.params.id);
    }
    edit_shop(e) {
        e.preventDefault();
        this.props.updateShopDetail(
            this.props.match.params.id,
            this.edit_shop_addr.value,
            this.edit_shop_phone.value,
            this.edit_shop_order.value
        );
    }
    back_shop(e) {
        e.preventDefault();
        this.props.history.push('/');
    }
    render() {
        const { shopDetail } = this.props;

        return (
            <div>
                {
                    !shopDetail && <div>Loading...</div>
                }
                {shopDetail &&
                    <form>
                        <div className="form-group">
                            <label htmlFor="edit_shop_addr">Shop Address</label>
                            <input
                                type="text"
                                name="edit_shop_addr"
                                id="edit_shop_addr"
                                ref={(input) => this.edit_shop_addr = input}
                                key="address"
                                defaultValue={shopDetail.shop_addr || ''}
                                placeholder="식당 주소"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit_shop_phone">Shop Phone Number</label>
                            <input
                                type="text"
                                name="edit_shop_phone"
                                id="edit_shop_phone"
                                key="phone"
                                ref={(input) => this.edit_shop_phone = input}
                                defaultValue={shopDetail.shop_phone || ''}
                                placeholder="식당 연락처"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="edit_shop_order">Shop Order</label>
                            <input
                                type="text"
                                name="edit_shop_order"
                                id="edit_shop_order"
                                key="order"
                                ref={(input) => this.edit_shop_order = input}
                                defaultValue={shopDetail.shop_order || 5}
                                className="form-control"
                                placeholder="순서"
                            />
                        </div>
                        <div>
                            <button
                                className="btn btn-primary"
                                style={styles.btn}
                                onClick={(e) => this.edit_shop(e)}
                            >
                                수정
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={(e) => this.back_shop(e)}
                                style={styles.btn}
                            >
                                메인
                            </button>
                        </div>
                        <Snack />
                    </form>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shopDetail: state.shopDetail
});

const mapDispatchToProps = dispatch => {
    return {
        fetchShopDetail: (id) => {
            dispatch(fetchShopDetail(id));
        },
        updateShopDetail: (id, addr, phone, order) => {
            dispatch(updateShopDetail(id, addr, phone, order));
            dispatch(snack(true, '정보가 업데이트 되었습니다.'))
        }
    }
}

EditShop = connect(mapStateToProps, mapDispatchToProps)(EditShop)

export default EditShop
**/

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9zaG9wL2VkaXRTaG9wLnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJidG4iLCJwYWRkaW5nIiwiRWRpdFNob3AiLCJtYXRjaCIsInNob3BEZXRhaWwiLCJ1cGRhdGVTaG9wRGV0YWlsIiwiZmV0Y2hTaG9wRGV0YWlsIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJlZGl0X3Nob3BfYWRkcl9SRUYiLCJ1c2VSZWYiLCJlZGl0X3Nob3BfcGhvbmVfUkVGIiwiZWRpdF9zaG9wX29yZGVyX1JFRiIsInVzZUVmZmVjdCIsInBhcmFtcyIsImlkIiwiZWRpdF9zaG9wIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiYmFja19zaG9wIiwicHVzaCIsInNob3BfYWRkciIsInNob3BfcGhvbmUiLCJzaG9wX29yZGVyIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImFkZHIiLCJwaG9uZSIsIm9yZGVyIiwic25hY2siLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxLQUFHLEVBQUU7QUFDREMsV0FBTyxFQUFFO0FBRFI7QUFETSxDQUFmOztBQWtCQSxJQUFNQyxRQUE0QyxHQUFHLFNBQS9DQSxRQUErQyxPQUE4RDtBQUFBOztBQUFBLE1BQTNEQyxLQUEyRCxRQUEzREEsS0FBMkQ7QUFBQSxNQUFwREMsVUFBb0QsUUFBcERBLFVBQW9EO0FBQUEsTUFBeENDLGdCQUF3QyxRQUF4Q0EsZ0JBQXdDO0FBQUEsTUFBdEJDLGVBQXNCLFFBQXRCQSxlQUFzQjtBQUMvRyxNQUFNQyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCLENBRCtHLENBRy9HOztBQUVBLE1BQU1DLGtCQUFrQixHQUFHQyxvREFBTSxDQUFDLElBQUQs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RUFBRCxFQUFLZSxJQUFMLEVBQVdDLEtBQVgsRUFBa0JDLEtBQWxCLENBQWpCLENBQVI7QUFDQUgsY0FBUSxDQUFDSSxzREFBSyxDQUFDLElBQUQsRUFBTyxpQkFBUCxDQUFOLENBQVI7QUFDSDtBQVBFLEdBQVA7QUFTSCxDQVZEOztBQVllQywwSEFBTyxDQUFDUixlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2QzFCLFFBQTdDLENBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjU5M2FjYjhjMzkzMTQ4MDgzNTU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hTaG9wRGV0YWlsLCB1cGRhdGVTaG9wRGV0YWlsLCBzbmFjayB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1NuYWNrJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgYnRuOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnXHJcbiAgICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG4gICAgbWF0Y2ggOiBhbnksXHJcbiAgICBzaG9wRGV0YWlsOiBbXVxyXG59XHJcbiAgXHJcbmludGVyZmFjZSBwcm9wc0Zyb21EaXNwYXRjaCB7XHJcblx0dXBkYXRlU2hvcERldGFpbDooaWQ6IE51bWJlciwgYWRkcjogU3RyaW5nLCBwaG9uZTpTdHJpbmcsIG9yZGVyOk51bWJlciApID0+IHZvaWQsXHJcbiAgICBmZXRjaFNob3BEZXRhaWw6KGlkOiBOdW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxudHlwZSBBbGxQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgcHJvcHNGcm9tRGlzcGF0Y2g7XHJcblxyXG5jb25zdCBFZGl0U2hvcCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFsbFByb3BzPiA9ICh7IG1hdGNoLCBzaG9wRGV0YWlsLCB1cGRhdGVTaG9wRGV0YWlsLCBmZXRjaFNob3BEZXRhaWwgfSkgPT4ge1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICAvL2NvbnN0IHNob3BEZXRhaWwgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaG9wRGV0YWlsKTtcclxuICAgIFxyXG4gICAgY29uc3QgZWRpdF9zaG9wX2FkZHJfUkVGID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZWRpdF9zaG9wX3Bob25lX1JFRiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IGVkaXRfc2hvcF9vcmRlcl9SRUYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmZXRjaFNob3BEZXRhaWwobWF0Y2gucGFyYW1zLmlkKTtcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIGNvbnN0IGVkaXRfc2hvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHVwZGF0ZVNob3BEZXRhaWwobWF0Y2gucGFyYW1zLmlkLCBlZGl0X3Nob3BfYWRkcl9SRUYuY3VycmVudC52YWx1ZSwgZWRpdF9zaG9wX3Bob25lX1JFRi5jdXJyZW50LnZhbHVlLCBlZGl0X3Nob3Bfb3JkZXJfUkVGLmN1cnJlbnQudmFsdWUpXHJcbiAgICB9XHJcbiAgICBjb25zdCBiYWNrX3Nob3AgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFzaG9wRGV0YWlsICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtzaG9wRGV0YWlsICYmXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3BfYWRkclwiPlNob3AgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9hZGRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX2FkZHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0X3Nob3BfYWRkcl9SRUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX2FkZHIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3BfcGhvbmVcIj5TaG9wIFBob25lIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRfc2hvcF9waG9uZV9SRUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9waG9uZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iud64u5IOyXsOudveyymFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9vcmRlclwiPlNob3AgT3JkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3Bfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3Bfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0X3Nob3Bfb3JkZXJfUkVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3Bfb3JkZXIgfHwgNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyInOyEnFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGVkaXRfc2hvcChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJhY2tfc2hvcChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDrqZTsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNuYWNrIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBzaG9wRGV0YWlsOiBzdGF0ZS5zaG9wRGV0YWlsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoU2hvcERldGFpbDogKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoU2hvcERldGFpbChpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlU2hvcERldGFpbDogKGlkLCBhZGRyLCBwaG9uZSwgb3JkZXIpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlU2hvcERldGFpbChpZCwgYWRkciwgcGhvbmUsIG9yZGVyKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsoJXrs7TqsIAg7JeF642w7J207Yq4IOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRTaG9wKVxyXG5cclxuLypcclxuY2xhc3MgRWRpdFNob3AgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHNob3BpZDogJycsXHJcbiAgICAgICAgICAgIHNob3BfbmFtZTogJycsXHJcbiAgICAgICAgICAgIHNob3BfYWRkcjogJycsXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICBzaG9wX29yZGVyOiAnJyxcclxuICAgICAgICAgICAgc25hY2tfb3BlbjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hTaG9wRGV0YWlsKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcclxuICAgIH1cclxuICAgIGVkaXRfc2hvcChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcERldGFpbChcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgIHRoaXMuZWRpdF9zaG9wX2FkZHIudmFsdWUsXHJcbiAgICAgICAgICAgIHRoaXMuZWRpdF9zaG9wX3Bob25lLnZhbHVlLFxyXG4gICAgICAgICAgICB0aGlzLmVkaXRfc2hvcF9vcmRlci52YWx1ZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBiYWNrX3Nob3AoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2hvcERldGFpbCB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAhc2hvcERldGFpbCAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtzaG9wRGV0YWlsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3BfYWRkclwiPlNob3AgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9hZGRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9hZGRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5lZGl0X3Nob3BfYWRkciA9IGlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX2FkZHIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsi53ri7kg7KO87IaMXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3BfcGhvbmVcIj5TaG9wIFBob25lIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3BfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5lZGl0X3Nob3BfcGhvbmUgPSBpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9waG9uZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyLneuLuSDsl7Drnb3ssphcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9vcmRlclwiPlNob3AgT3JkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3Bfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX29yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuZWRpdF9zaG9wX29yZGVyID0gaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3Bfb3JkZXIgfHwgNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iic7IScXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuZWRpdF9zaG9wKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyImOyglVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5iYWNrX3Nob3AoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg66mU7J24XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbmFjayAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHNob3BEZXRhaWw6IHN0YXRlLnNob3BEZXRhaWxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoU2hvcERldGFpbDogKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoU2hvcERldGFpbChpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlU2hvcERldGFpbDogKGlkLCBhZGRyLCBwaG9uZSwgb3JkZXIpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlU2hvcERldGFpbChpZCwgYWRkciwgcGhvbmUsIG9yZGVyKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsoJXrs7TqsIAg7JeF642w7J207Yq4IOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkVkaXRTaG9wID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdFNob3ApXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0U2hvcFxyXG4qKi8iXSwic291cmNlUm9vdCI6IiJ9