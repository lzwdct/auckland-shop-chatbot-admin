webpackHotUpdate_N_E(1,{

/***/ "./src/container/menu/menuList.tsx":
/*!*****************************************!*\
  !*** ./src/container/menu/menuList.tsx ***!
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
/* harmony import */ var _addMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addMenu */ "./src/container/menu/addMenu.tsx");
/* harmony import */ var _component_Food__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Food */ "./src/component/Food.tsx");
/* harmony import */ var _constants_Confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/Confirm */ "./src/constants/Confirm.tsx");
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\menuList.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







//import TitleMenu from '../top_menu/menus';
//import Add_Menu from './add_menu';
var styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  btnLine: {
    margin: '10px 0px 30px'
  },
  btnEdit: {
    padding: '10px',
    border: '0',
    margin: '10px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#2fb',
    textDecorationLine: 'none'
  },
  btnDelete: {
    padding: '10px',
    border: '0',
    margin: '10px',
    borderRadius: '4px',
    color: '#fff',
    backgroundColor: '#f2b',
    textDecorationLine: 'none'
  }
};

var MenuList = function MenuList(_ref) {
  _s();

  var match = _ref.match,
      menu = _ref.menu,
      fetch_menus = _ref.fetch_menus,
      deleteMenu = _ref.deleteMenu,
      open = _ref.open;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      id = _useState[0],
      setID = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch_menus(match.params.id);
  }, []);

  var delete_menu = function delete_menu(id) {
    open();
    setID(id);
  };

  var renderPosts = function renderPosts() {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(menu, function (item) {
      return __jsx("span", {
        key: item.idmenu,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 5
        }
      }, __jsx(_component_Food__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onDelete: function onDelete() {
          return delete_menu(item.idmenu);
        },
        label: item.menu_name,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: function submit() {
      return deleteMenu(id, match.params.id);
    },
    title: "Are you sure to delete?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }
  }));
};

_s(MenuList, "4oPvDkCq3PiC56wt/yK57c97ucQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = MenuList;

var mapStateToProps = function mapStateToProps(state) {
  return {
    menu: state.menu
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetch_menus: function fetch_menus(id) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchMenus"])(id));
    },
    deleteMenu: function deleteMenu(menuid, shopid) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteMenu"])(menuid, shopid));
    },
    open: function open() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["confirm"])(true));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MenuList));
/** 
class MenuList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id : 0
		}
	}
	UNSAFE_componentWillMount(){
		this.props.fetch_menus(this.props.match.params.id);
	}
	delete_menu(id){
		this.props.open();
		this.setState({
			id
		});
	}
	renderPosts(){
		const { menu } = this.props;

		return _.map(menu, item => {
			return (
				<span
					key={item.idmenu}
				>
					<Food
						onDelete={() => this.delete_menu(item.idmenu)}
						label={item.menu_name}
					/>
				</span>
			);
		});
	}
	render(){
		const { menu } = this.props;
		return(
			<div>
				{ menu.length > 0 && this.renderPosts()}
				<AddMenu shop_id={this.props.match.params.id} />
				<Confirm
					submit={() => this.props.deleteMenu(this.state.id, this.props.match.params.id)}
					title="Are you sure to delete?"
				/>
			</div>
		);
	};
}

const mapStateToProps = state => ({
    menu: state.menu
});

const mapDispatchToProps = dispatch => {
    return {
        fetch_menus: (id) => {
            dispatch(fetchMenus(id));
        },
        deleteMenu: (menuid, shopid) => {
            dispatch(deleteMenu(menuid, shopid));
        },
        deleteShop: () => {
            dispatch(deleteShop());
		},
		open: () => {
			dispatch(confirm(true));
		}
    }
}

MenuList = connect(mapStateToProps, mapDispatchToProps)(MenuList)

export default MenuList
*/

var _c;

$RefreshReg$(_c, "MenuList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYnRuTGluZSIsIm1hcmdpbiIsImJ0bkVkaXQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvbkxpbmUiLCJidG5EZWxldGUiLCJNZW51TGlzdCIsIm1hdGNoIiwibWVudSIsImZldGNoX21lbnVzIiwiZGVsZXRlTWVudSIsIm9wZW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SUQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFyYW1zIiwiZGVsZXRlX21lbnUiLCJyZW5kZXJQb3N0cyIsIl8iLCJtYXAiLCJpdGVtIiwiaWRtZW51IiwibWVudV9uYW1lIiwibGVuZ3RoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaE1lbnVzIiwibWVudWlkIiwic2hvcGlkIiwiY29uZmlybSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsU0FBTyxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLFlBQVEsRUFBRTtBQUZGLEdBREk7QUFLYkMsU0FBTyxFQUFFO0FBQ1JDLFVBQU0sRUFBRTtBQURBLEdBTEk7QUFRYkMsU0FBTyxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVBDLFVBQU0sRUFBRSxHQUZEO0FBR1BILFVBQU0sRUFBRSxNQUhEO0FBSVBJLGdCQUFZLEVBQUUsS0FKUDtBQUtQQyxTQUFLLEVBQUUsTUFMQTtBQU1QQyxtQkFBZSxFQUFFLE1B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b0I7QUFDNUJqQixjQUFRLENBQUNMLDJEQUFVLENBQUNxQixNQUFELEVBQVNDLE1BQVQsQ0FBWCxDQUFSO0FBQ0gsS0FORTtBQU9UckIsUUFBSSxFQUFFLGdCQUFNO0FBQ1hJLGNBQVEsQ0FBQ2tCLHdEQUFPLENBQUMsSUFBRCxDQUFSLENBQVI7QUFDQTtBQVRRLEdBQVA7QUFXSCxDQVpEOztBQWNlQywwSEFBTyxDQUFDUCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q3ZCLFFBQTdDLENBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuNmEwOTY4MzM3Y2RkOGM1M2E3NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaE1lbnVzLCBkZWxldGVNZW51LCBjb25maXJtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgQWRkTWVudSBmcm9tICcuL2FkZE1lbnUnO1xyXG5pbXBvcnQgRm9vZCBmcm9tICcuLi8uLi9jb21wb25lbnQvRm9vZCc7XHJcbmltcG9ydCBDb25maXJtIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db25maXJtJztcclxuXHJcbmltcG9ydCB7IERpYWxvZywgRmxhdEJ1dHRvbiwgUmFpc2VkQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG4vL2ltcG9ydCBUaXRsZU1lbnUgZnJvbSAnLi4vdG9wX21lbnUvbWVudXMnO1xyXG4vL2ltcG9ydCBBZGRfTWVudSBmcm9tICcuL2FkZF9tZW51JztcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd3JhcHBlcjoge1xyXG4gIFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG4gIFx0ZmxleFdyYXA6ICd3cmFwJ1xyXG4gIH0sXHJcbiAgYnRuTGluZToge1xyXG4gIFx0bWFyZ2luOiAnMTBweCAwcHggMzBweCdcclxuICB9LFxyXG4gIGJ0bkVkaXQ6IHtcclxuICBcdHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIGJvcmRlcjogJzAnLFxyXG4gICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyZmInLFxyXG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZSdcclxuICB9LFxyXG4gIGJ0bkRlbGV0ZToge1xyXG4gIFx0cGFkZGluZzogJzEwcHgnLFxyXG4gICAgYm9yZGVyOiAnMCcsXHJcbiAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2YyYicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJ1xyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcblx0bWF0Y2g6IGFueSxcclxuXHRtZW51OiBhbnlcclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgcHJvcHNGcm9tRGlzcGF0Y2gge1xyXG5cdGZldGNoX21lbnVzOiAoaWQ6IE51bWJlcikgPT4gdm9pZCxcclxuXHRkZWxldGVNZW51OiAobWVudWlkOiBOdW1iZXIsIHNob3BpZDogTnVtYmVyKSA9PiB2b2lkLFxyXG5cdG9wZW46ICgpID0+IHZvaWRcclxufVxyXG5cclxudHlwZSBBbGxQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgcHJvcHNGcm9tRGlzcGF0Y2g7XHJcblxyXG5jb25zdCBNZW51TGlzdCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFsbFByb3BzPiA9ICh7IG1hdGNoLCBtZW51LCBmZXRjaF9tZW51cywgZGVsZXRlTWVudSwgb3BlbiB9KSA9PiB7XHJcblx0Y29uc3QgW2lkLCBzZXRJRF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRmZXRjaF9tZW51cyhtYXRjaC5wYXJhbXMuaWQpO1xyXG5cdH0sW10pXHJcblxyXG5cdGNvbnN0IGRlbGV0ZV9tZW51ID0gKGlkKSA9PiB7XHJcblx0XHRvcGVuKClcclxuXHRcdHNldElEKGlkKVxyXG5cdH1cclxuXHRjb25zdCByZW5kZXJQb3N0cyA9ICgpID0+IHtcclxuXHRcdHJldHVybiBfLm1hcChtZW51LCBpdGVtID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0a2V5PXtpdGVtLmlkbWVudX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Rm9vZFxyXG5cdFx0XHRcdFx0XHRvbkRlbGV0ZT17KCkgPT4gZGVsZXRlX21lbnUoaXRlbS5pZG1lbnUpfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17aXRlbS5tZW51X25hbWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0eyBtZW51Lmxlbmd0aCA+IDAgJiYgcmVuZGVyUG9zdHMoKX1cclxuXHRcdFx0PEFkZE1lbnUgc2hvcF9pZD17bWF0Y2gucGFyYW1zLmlkfSAvPlxyXG5cdFx0XHQ8Q29uZmlybVxyXG5cdFx0XHRcdHN1Ym1pdD17KCkgPT4gZGVsZXRlTWVudShpZCwgbWF0Y2gucGFyYW1zLmlkKX1cclxuXHRcdFx0XHR0aXRsZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGU/XCJcclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBtZW51OiBzdGF0ZS5tZW51XHJcbn0pO1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hfbWVudXM6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lbnVzKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVNZW51OiAobWVudWlkLCBzaG9waWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVudShtZW51aWQsIHNob3BpZCkpO1xyXG4gICAgICAgIH0sXHJcblx0XHRvcGVuOiAoKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGNvbmZpcm0odHJ1ZSkpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZW51TGlzdClcclxuXHJcbi8qKiBcclxuY2xhc3MgTWVudUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0aWQgOiAwXHJcblx0XHR9XHJcblx0fVxyXG5cdFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKXtcclxuXHRcdHRoaXMucHJvcHMuZmV0Y2hfbWVudXModGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xyXG5cdH1cclxuXHRkZWxldGVfbWVudShpZCl7XHJcblx0XHR0aGlzLnByb3BzLm9wZW4oKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRpZFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlbmRlclBvc3RzKCl7XHJcblx0XHRjb25zdCB7IG1lbnUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG5cdFx0cmV0dXJuIF8ubWFwKG1lbnUsIGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2l0ZW0uaWRtZW51fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxGb29kXHJcblx0XHRcdFx0XHRcdG9uRGVsZXRlPXsoKSA9PiB0aGlzLmRlbGV0ZV9tZW51KGl0ZW0uaWRtZW51KX1cclxuXHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubWVudV9uYW1lfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRjb25zdCB7IG1lbnUgfSA9IHRoaXMucHJvcHM7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0eyBtZW51Lmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJQb3N0cygpfVxyXG5cdFx0XHRcdDxBZGRNZW51IHNob3BfaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfSAvPlxyXG5cdFx0XHRcdDxDb25maXJtXHJcblx0XHRcdFx0XHRzdWJtaXQ9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlTWVudSh0aGlzLnN0YXRlLmlkLCB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCl9XHJcblx0XHRcdFx0XHR0aXRsZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGU/XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIG1lbnU6IHN0YXRlLm1lbnVcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoX21lbnVzOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hNZW51cyhpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlTWVudTogKG1lbnVpZCwgc2hvcGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lbnUobWVudWlkLCBzaG9waWQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZVNob3A6ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlU2hvcCgpKTtcclxuXHRcdH0sXHJcblx0XHRvcGVuOiAoKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGNvbmZpcm0odHJ1ZSkpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcblxyXG5NZW51TGlzdCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lbnVMaXN0KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudUxpc3RcclxuKi8iXSwic291cmNlUm9vdCI6IiJ9