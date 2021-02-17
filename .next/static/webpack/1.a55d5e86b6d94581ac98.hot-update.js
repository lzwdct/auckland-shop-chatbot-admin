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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\addShop.tsx",
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, []);

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
      lineNumber: 56,
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
      lineNumber: 57,
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
      lineNumber: 65,
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
      lineNumber: 73,
      columnNumber: 4
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: function onClick(e) {
      return add_shop(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }
  }));
};

_s(AddShop, "Pu9lpEGYS9lHycxk6rSJyXz055Q=");

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
/** 
class AddShop extends Component{
	constructor(props) {
		super(props);
		this.state = {
			shop_name: '',
			shop_addr: '',
            shop_phone: ''
        };
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleAddrChange = this.handleAddrChange.bind(this);
		this.handlePhoneChange = this.handlePhoneChange.bind(this);
		this.add_shop = this.add_shop.bind(this);
	}
	add_shop(){
		this.props.addShop(this.state.shop_name, this.state.shop_addr, this.state.shop_phone);

		this.setState({
			shop_name: '',
			shop_addr: '',
			shop_phone: '',
		});
	}
	handleNameChange(event){
		this.setState({ shop_name: event.target.value });
	}
	handleAddrChange(event){
		this.setState({ shop_addr: event.target.value });
	}
	handlePhoneChange(event){
		this.setState({ shop_phone: event.target.value });
	}
	render(){
		return (
			<div>
				<input 
					type="text" 
					name="add_shop_text" 
					value={this.state.shop_name} 
					onChange={this.handleNameChange} 
					style={styles.wrapper}
					placeholder="식당 이름"
				/>
				<input 
					type="text" 
					name="add_shop_addr" 
					value={this.state.shop_addr} 
					onChange={this.handleAddrChange} 
					style={styles.wrapper}
					placeholder="식당 주소"
				/>
				<input 
					type="text" 
					name="add_shop_phone" 
					value={this.state.shop_phone} 
					onChange={this.handlePhoneChange} 
					style={styles.wrapper}
					placeholder="식당 연락처"
				/>
                <button label="ADD" className="btn btn-primary" onClick={(e) => this.add_shop(e)}>
                    ADD
                </button>
				<Snack />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        addShop: (name, addr, phone) => {
            dispatch(addShop(name, addr, phone));
            dispatch(snack(true, '새로운 식당이 추가되었습니다.'))
        }
    }
}

AddShop = connect(null, mapDispatchToProps)(AddShop)

export default AddShop
*/

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9zaG9wL2FkZFNob3AudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIndyYXBwZXIiLCJoZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJBZGRTaG9wIiwiYWRkU2hvcCIsInVzZVN0YXRlIiwic2hvcF9uYW1lIiwic2V0U2hvcF9uYW1lIiwic2hvcF9hZGRyIiwic2V0U2hvcF9hZGRyIiwic2hvcF9waG9uZSIsInNldFNob3BfcGhvbmUiLCJ1c2VFZmZlY3QiLCJhZGRfc2hvcCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQWRkckNoYW5nZSIsImhhbmRsZVBob25lQ2hhbmdlIiwiZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJuYW1lIiwiYWRkciIsInBob25lIiwic25hY2siLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUU7QUFDUkMsVUFBTSxFQUFFLE1BREE7QUFFUEMsVUFBTSxFQUFFLFdBRkQ7QUFHUEMsZ0JBQVksRUFBQyxDQUhOO0FBSVBDLFVBQU0sRUFBRTtBQUpEO0FBREksQ0FBZjs7QUFtQkEsSUFBTUMsT0FBMkMsR0FBRyxTQUE5Q0EsT0FBOEMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBQ2xDQyxzREFBUSxDQUFDLEVBQUQsQ0FEMEI7QUFBQSxNQUM3REMsU0FENkQ7QUFBQSxNQUNsREMsWUFEa0Q7O0FBQUEsbUJBRWxDRixzREFBUSxDQUFDLEVBQUQsQ0FGMEI7QUFBQSxNQUU3REcsU0FGNkQ7QUFBQSxNQUVsREMsWUFGa0Q7O0FBQUEsbUJBR2hDSixzREFBUSxDQUFDLEVB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ZUMsMEhBQU8sQ0FBQ1IsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkNwQixPQUE3QyxDQUFmO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuYTU1ZDVlODZiNmQ5NDU4MWFjOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IGFkZFNob3AsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi8uLi9jb25zdGFudHMvU25hY2snO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdyYXBwZXI6IHtcclxuICBcdGhlaWdodDogJzMwcHgnLFxyXG4gICAgbWFyZ2luOiAnMjBweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czo0LFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcblxyXG59XHJcbiAgXHJcbmludGVyZmFjZSBwcm9wc0Zyb21EaXNwYXRjaCB7XHJcblx0YWRkU2hvcDooc2hvcF9uYW1lOiBTdHJpbmcsIHNob3BfYWRkcjogU3RyaW5nLCBzaG9wX3Bob25lOiBTdHJpbmcgKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgQWRkU2hvcCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFsbFByb3BzPiA9ICh7IGFkZFNob3AgfSkgPT4ge1xyXG5cdGNvbnN0IFtzaG9wX25hbWUsIHNldFNob3BfbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Nob3BfYWRkciwgc2V0U2hvcF9hZGRyXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbc2hvcF9waG9uZSwgc2V0U2hvcF9waG9uZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cdH0sW10pXHJcblxyXG5cdGNvbnN0IGFkZF9zaG9wID0gKCkgPT4ge1xyXG5cdFx0YWRkU2hvcChzaG9wX25hbWUsIHNob3BfYWRkciwgc2hvcF9waG9uZSk7XHJcblxyXG5cdFx0c2V0U2hvcF9uYW1lKCcnKTtcclxuXHRcdHNldFNob3BfYWRkcignJyk7XHJcblx0XHRzZXRTaG9wX3Bob25lKCcnKTtcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0U2hvcF9uYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZUFkZHJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuXHRcdHNldFNob3BfYWRkcihldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVQaG9uZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0U2hvcF9waG9uZShldmVudC50YXJnZXQudmFsdWUpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF90ZXh0XCIgXHJcblx0XHRcdFx0dmFsdWU9e3Nob3BfbmFtZX0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9IFxyXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXMud3JhcHBlcn1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDsnbTrpoRcIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfYWRkclwiIFxyXG5cdFx0XHRcdHZhbHVlPXtzaG9wX2FkZHJ9IFxyXG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVBZGRyQ2hhbmdlfSBcclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7KO87IaMXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0bmFtZT1cImFkZF9zaG9wX3Bob25lXCIgXHJcblx0XHRcdFx0dmFsdWU9e3Nob3BfcGhvbmV9IFxyXG5cdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVQaG9uZUNoYW5nZX0gXHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwi7Iud64u5IOyXsOudveyymFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IGFkZF9zaG9wKGUpfT5cclxuXHRcdFx0XHRBRERcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxTbmFjayAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHt9KTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZFNob3A6IChuYW1lLCBhZGRyLCBwaG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhZGRTaG9wKG5hbWUsIGFkZHIsIHBob25lKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg7Iud64u57J20IOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZFNob3ApXHJcblxyXG4vKiogXHJcbmNsYXNzIEFkZFNob3AgZXh0ZW5kcyBDb21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHNob3BfbmFtZTogJycsXHJcblx0XHRcdHNob3BfYWRkcjogJycsXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmU6ICcnXHJcbiAgICAgICAgfTtcclxuXHRcdHRoaXMuaGFuZGxlTmFtZUNoYW5nZSA9IHRoaXMuaGFuZGxlTmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5oYW5kbGVBZGRyQ2hhbmdlID0gdGhpcy5oYW5kbGVBZGRyQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZVBob25lQ2hhbmdlID0gdGhpcy5oYW5kbGVQaG9uZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5hZGRfc2hvcCA9IHRoaXMuYWRkX3Nob3AuYmluZCh0aGlzKTtcclxuXHR9XHJcblx0YWRkX3Nob3AoKXtcclxuXHRcdHRoaXMucHJvcHMuYWRkU2hvcCh0aGlzLnN0YXRlLnNob3BfbmFtZSwgdGhpcy5zdGF0ZS5zaG9wX2FkZHIsIHRoaXMuc3RhdGUuc2hvcF9waG9uZSk7XHJcblxyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHNob3BfbmFtZTogJycsXHJcblx0XHRcdHNob3BfYWRkcjogJycsXHJcblx0XHRcdHNob3BfcGhvbmU6ICcnLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3BfbmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG5cdH1cclxuXHRoYW5kbGVBZGRyQ2hhbmdlKGV2ZW50KXtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzaG9wX2FkZHI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuXHR9XHJcblx0aGFuZGxlUGhvbmVDaGFuZ2UoZXZlbnQpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3BfcGhvbmU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfdGV4dFwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2hvcF9uYW1lfSBcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9IFxyXG5cdFx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7J2066aEXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfYWRkclwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2hvcF9hZGRyfSBcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFkZHJDaGFuZ2V9IFxyXG5cdFx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7KO87IaMXCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfcGhvbmVcIiBcclxuXHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLnNob3BfcGhvbmV9IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlUGhvbmVDaGFuZ2V9IFxyXG5cdFx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuXHRcdFx0XHQvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBsYWJlbD1cIkFERFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmFkZF9zaG9wKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICBBRERcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxTbmFjayAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZFNob3A6IChuYW1lLCBhZGRyLCBwaG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhZGRTaG9wKG5hbWUsIGFkZHIsIHBob25lKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg7Iud64u57J20IOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkFkZFNob3AgPSBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkU2hvcClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFNob3BcclxuKi8iXSwic291cmNlUm9vdCI6IiJ9