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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\addMenu.tsx",
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
/**
class AddMenu extends Component{
	constructor(props) {
		super(props);
		this.state = {
			menu_name: ''
		};
	}
	add_menus(){
		this.props.add_menus(this.props.shop_id, this.state.menu_name);
		this.setState({
			menu_name: '',
		});
	}
	handleNameChange(event){
        event.preventDefault();
		this.setState({ menu_name: event.target.value });
	};
	render(){
		return (
			<div>
				<input 
					type="text" 
					id="add_menu_text" 
					value={this.state.menu_name} 
					onChange={(e) => this.handleNameChange(e)} 
					onKeyPress={event => {
						if (event.key === 'Enter') {
							this.add_menus(event)
						}
					}}
					style={styles.wrapper}
				/>
				<button label="ADD" className="btn btn-primary" onClick={(e) => this.add_menus(e)}>
                    ADD
                </button>
                <Snack />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        add_menus: (id, name) => {
            dispatch(addNewMenu(id, name));
            dispatch(snack(true, '새로운 메뉴가 추가되었습니다.'))
        }
    }
}

AddMenu = connect(null, mapDispatchToProps)(AddMenu)


export default AddMenu
 */

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L2FkZE1lbnUudHN4Il0sIm5hbWVzIjpbInN0eWxlcyIsIndyYXBwZXIiLCJoZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJBZGRNZW51Iiwic2hvcF9pZCIsImFkZF9tZW51IiwidXNlU3RhdGUiLCJtZW51X25hbWUiLCJzZXRNZW51X25hbWUiLCJhZGRfbWVudXMiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImUiLCJrZXkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImlkIiwibmFtZSIsImFkZE5ld01lbnUiLCJzbmFjayIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNSQyxVQUFNLEVBQUUsTUFEQTtBQUVQQyxVQUFNLEVBQUUsV0FGRDtBQUdQQyxnQkFBWSxFQUFDLENBSE47QUFJUEMsVUFBTSxFQUFFO0FBSkQ7QUFESSxDQUFmOztBQW1CQSxJQUFNQyxPQUEyQyxHQUFHLFNBQTlDQSxPQUE4QyxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQzVDQyxzREFBUSxDQUFDLEVBQUQsQ0FEb0M7QUFBQSxNQUN2RUMsU0FEdUU7QUFBQSxNQUM1REMsWUFENEQ7O0FBRzlFLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDN0JKLFlBQVEsQ0FBQ0QsT0FBRCxFQUFVRyxTQUFWLENBQVI7QUFDQUMsZ0JBQVksQ0FBQyxFQUFELENBQVo7QUFDQSxHQUhEOztBQUlBLE1BQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUF5QztBQUNqRUgsZ0JBQVksQ0FBQ0csS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUNBLEdBRkQ7O0FBSUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLE1BQUUsRUFBQyxlQUZKO0FBR0MsU0FBSyxFQUFFTixTQUhSO0FBSUMsWUFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsYUFBT0osZ0JBQWdCLENBQUNJLENBQUQsQ0FBdkI7QUFBQSxLQUpYO0FBS0MsY0FBVSxFQUFFLG9CQUFBSCxLQUFLLEVBQUk7QUFDcEIsVUFBSUEsS0FBSyxDQUFDSSxHQUFOLEtBQWMsT0FBbEIsRUFBMkI7QUFDMUJOLGlCQUFTO0FBQ1Q7QUFDRCxLQVRGO0FBVUMsU0FBSyxFQUFFWixNQUFNLENBQUNDLE9BVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBYUM7QUFBUSxNQUFFLEVBQUMsVUFBWDtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQWtELFdBQU8sRUFBRTtBQUFBLGFBQU1XLFNBQVMsRUFBZjtBQUFBLEtBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FiRCxFQWdCQyxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkQsQ0FERDtBQW9CQSxDQS9CRDs7R0FBTU4sTzs7S0FBQUEsTzs7QUFnQ04sSUFBTWEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtBQUFBLFNBQU8sRUFBUDtBQUFBLENBQXhCOztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRCxFQUFrRDtBQUN6RSxTQUFPO0FBQ0hiLFlBQVEsRUFBRSxrQkFBQ2MsRUFBRCxFQUFZQyxJQUFaLEVBQTRCO0FBQ2xDRixjQUFRLENBQUNHLDJEQUFVLENBQUNGLEVBQUQsRUFBS0MsSUFBTCxDQUFYLENBQVI7QUFDQUYsY0FBUSxDQUFDSSxzREFBSyxDQUFDLElBQUQsRUFBTyxrQkFBUCxDQUFOLENBQVI7QUFDSDtBQUpFLEdBQVA7QUFNSCxDQVBEOztBQVNlQywwSEFBTyxDQUFDUCxlQUFELEVBQWtCQyxrQkFBbEIsQ0FBUCxDQUE2Q2QsT0FBN0MsQ0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5lM2VhOWEyNzdmZmE0YjMyYTRkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uLy4uL2NvbnN0YW50cy9TbmFjayc7XHJcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBhZGROZXdNZW51LCBzbmFjayB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdyYXBwZXI6IHtcclxuICBcdGhlaWdodDogJzMwcHgnLFxyXG4gICAgbWFyZ2luOiAnMjBweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czo0LFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcblx0c2hvcF9pZDogbnVtYmVyXHJcbiAgfVxyXG4gIFxyXG5pbnRlcmZhY2UgcHJvcHNGcm9tRGlzcGF0Y2gge1xyXG5cdGFkZF9tZW51OiAoc2hvcF9pZDogTnVtYmVyLCBtZW51X25hbWU6IFN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IEFkZE1lbnUgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBzaG9wX2lkLCBhZGRfbWVudSB9KSA9PiB7XHJcblx0Y29uc3QgW21lbnVfbmFtZSwgc2V0TWVudV9uYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgYWRkX21lbnVzID0gKCk6IHZvaWQgPT4ge1xyXG5cdFx0YWRkX21lbnUoc2hvcF9pZCwgbWVudV9uYW1lKTtcclxuXHRcdHNldE1lbnVfbmFtZSgnJyk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQ6IHsgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pID0+IHtcclxuXHRcdHNldE1lbnVfbmFtZShldmVudC50YXJnZXQudmFsdWUpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0aWQ9XCJhZGRfbWVudV90ZXh0XCIgXHJcblx0XHRcdFx0dmFsdWU9e21lbnVfbmFtZX0gXHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVOYW1lQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRvbktleVByZXNzPXtldmVudCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdFx0XHRcdGFkZF9tZW51cygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJhZGRfbWVudVwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGFkZF9tZW51cygpfT5cclxuXHRcdFx0XHRBRERcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxTbmFjayAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe30pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZF9tZW51OiAoaWQ6TnVtYmVyLCBuYW1lOlN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhZGROZXdNZW51KGlkLCBuYW1lKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg66mU64m06rCAIOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZE1lbnUpXHJcblxyXG4vKipcclxuY2xhc3MgQWRkTWVudSBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bWVudV9uYW1lOiAnJ1xyXG5cdFx0fTtcclxuXHR9XHJcblx0YWRkX21lbnVzKCl7XHJcblx0XHR0aGlzLnByb3BzLmFkZF9tZW51cyh0aGlzLnByb3BzLnNob3BfaWQsIHRoaXMuc3RhdGUubWVudV9uYW1lKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRtZW51X25hbWU6ICcnLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgbWVudV9uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblx0fTtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdGlkPVwiYWRkX21lbnVfdGV4dFwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWVudV9uYW1lfSBcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWRkX21lbnVzKGV2ZW50KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGJ1dHRvbiBsYWJlbD1cIkFERFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmFkZF9tZW51cyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQUREXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxTbmFjayAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZF9tZW51czogKGlkLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZE5ld01lbnUoaWQsIG5hbWUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDrqZTribTqsIAg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQWRkTWVudSA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRNZW51KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE1lbnVcclxuICovIl0sInNvdXJjZVJvb3QiOiIifQ==