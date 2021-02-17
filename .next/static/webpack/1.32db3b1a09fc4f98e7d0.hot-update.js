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
      deleteShop = _ref.deleteShop,
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
          lineNumber: 75,
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
          lineNumber: 78,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: function submit() {
      return dispatch(deleteMenu(id, match.params.id));
    },
    title: "Are you sure to delete?",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
    deleteShop: function deleteShop() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteShop"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYnRuTGluZSIsIm1hcmdpbiIsImJ0bkVkaXQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvbkxpbmUiLCJidG5EZWxldGUiLCJNZW51TGlzdCIsIm1hdGNoIiwibWVudSIsImZldGNoX21lbnVzIiwiZGVsZXRlTWVudSIsImRlbGV0ZVNob3AiLCJvcGVuIiwidXNlU3RhdGUiLCJpZCIsInNldElEIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInBhcmFtcyIsImRlbGV0ZV9tZW51IiwicmVuZGVyUG9zdHMiLCJfIiwibWFwIiwiaXRlbSIsImlkbWVudSIsIm1lbnVfbmFtZSIsImxlbmd0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZmV0Y2hNZW51cyIsIm1lbnVpZCIsInNob3BpZCIsImNvbmZpcm0iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFNBQU8sRUFBRTtBQUNSQyxXQUFPLEVBQUUsTUFERDtBQUVSQyxZQUFRLEVBQUU7QUFGRixHQURJO0FBS2JDLFNBQU8sRUFBRTtBQUNSQyxVQUFNLEVBQUU7QUFEQSxHQUxJO0FBUWJDLFNBQU8sRUFBRTtBQUNSQyxXQUFPLEVBQUUsTUFERDtBQUVQQyxVQUFNLEVBQUUsR0FGRDtBQUdQSCxVQUFNLEVBQUUsTUFIRDtBQUlQSSxnQkFBWSxFQUFFLEtBSlA7QUFLUEMsU0FBSyxFQUFFLE1BTEE7QUFNUEMs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WCxDQUFSO0FBQ0gsS0FIRTtBQUlISixjQUFVLEVBQUUsb0JBQUNzQixNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDNUJqQixjQUFRLENBQUNOLDJEQUFVLENBQUNzQixNQUFELEVBQVNDLE1BQVQsQ0FBWCxDQUFSO0FBQ0gsS0FORTtBQU9IdEIsY0FBVSxFQUFFLHNCQUFNO0FBQ2RLLGNBQVEsQ0FBQ0wsMkRBQVUsRUFBWCxDQUFSO0FBQ1QsS0FUUTtBQVVUQyxRQUFJLEVBQUUsZ0JBQU07QUFDWEksY0FBUSxDQUFDa0Isd0RBQU8sQ0FBQyxJQUFELENBQVIsQ0FBUjtBQUNBO0FBWlEsR0FBUDtBQWNILENBZkQ7O0FBaUJlQywwSEFBTyxDQUFDUCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q3hCLFFBQTdDLENBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuMzJkYjNiMWEwOWZjNGY5OGU3ZDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaE1lbnVzLCBkZWxldGVNZW51LCBkZWxldGVTaG9wLCBjb25maXJtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgQWRkTWVudSBmcm9tICcuL2FkZE1lbnUnO1xyXG5pbXBvcnQgRm9vZCBmcm9tICcuLi8uLi9jb21wb25lbnQvRm9vZCc7XHJcbmltcG9ydCBDb25maXJtIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db25maXJtJztcclxuXHJcbmltcG9ydCB7IERpYWxvZywgRmxhdEJ1dHRvbiwgUmFpc2VkQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG4vL2ltcG9ydCBUaXRsZU1lbnUgZnJvbSAnLi4vdG9wX21lbnUvbWVudXMnO1xyXG4vL2ltcG9ydCBBZGRfTWVudSBmcm9tICcuL2FkZF9tZW51JztcclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd3JhcHBlcjoge1xyXG4gIFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG4gIFx0ZmxleFdyYXA6ICd3cmFwJ1xyXG4gIH0sXHJcbiAgYnRuTGluZToge1xyXG4gIFx0bWFyZ2luOiAnMTBweCAwcHggMzBweCdcclxuICB9LFxyXG4gIGJ0bkVkaXQ6IHtcclxuICBcdHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIGJvcmRlcjogJzAnLFxyXG4gICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyZmInLFxyXG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZSdcclxuICB9LFxyXG4gIGJ0bkRlbGV0ZToge1xyXG4gIFx0cGFkZGluZzogJzEwcHgnLFxyXG4gICAgYm9yZGVyOiAnMCcsXHJcbiAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2YyYicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJ1xyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcblx0bWF0Y2g6IGFueSxcclxuXHRtZW51OiBhbnlcclxufVxyXG4gIFxyXG5pbnRlcmZhY2UgcHJvcHNGcm9tRGlzcGF0Y2gge1xyXG5cdGZldGNoX21lbnVzOiAoaWQ6IE51bWJlcikgPT4gdm9pZCxcclxuXHRkZWxldGVNZW51OiAobWVudWlkOiBOdW1iZXIsIHNob3BpZDogTnVtYmVyKSA9PiB2b2lkLFxyXG5cdGRlbGV0ZVNob3A6ICgpID0+IHZvaWQsXHJcblx0b3BlbjogKCkgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IE1lbnVMaXN0IDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgbWF0Y2gsIG1lbnUsIGZldGNoX21lbnVzLCBkZWxldGVNZW51LCBkZWxldGVTaG9wLCBvcGVuIH0pID0+IHtcclxuXHRjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoX21lbnVzKG1hdGNoLnBhcmFtcy5pZCk7XHJcblx0fSxbXSlcclxuXHJcblx0Y29uc3QgZGVsZXRlX21lbnUgPSAoaWQpID0+IHtcclxuXHRcdG9wZW4oKVxyXG5cdFx0c2V0SUQoaWQpXHJcblx0fVxyXG5cdGNvbnN0IHJlbmRlclBvc3RzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIF8ubWFwKG1lbnUsIGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2l0ZW0uaWRtZW51fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxGb29kXHJcblx0XHRcdFx0XHRcdG9uRGVsZXRlPXsoKSA9PiBkZWxldGVfbWVudShpdGVtLmlkbWVudSl9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLm1lbnVfbmFtZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiByZW5kZXJQb3N0cygpfVxyXG5cdFx0XHQ8QWRkTWVudSBzaG9wX2lkPXttYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdDxDb25maXJtXHJcblx0XHRcdFx0c3VibWl0PXsoKSA9PiBkaXNwYXRjaChkZWxldGVNZW51KGlkLCBtYXRjaC5wYXJhbXMuaWQpKX1cclxuXHRcdFx0XHR0aXRsZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGU/XCJcclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBtZW51OiBzdGF0ZS5tZW51XHJcbn0pO1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hfbWVudXM6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lbnVzKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVNZW51OiAobWVudWlkLCBzaG9waWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVudShtZW51aWQsIHNob3BpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wKCkpO1xyXG5cdFx0fSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lbnVMaXN0KVxyXG5cclxuLyoqIFxyXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpZCA6IDBcclxuXHRcdH1cclxuXHR9XHJcblx0VU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpe1xyXG5cdFx0dGhpcy5wcm9wcy5mZXRjaF9tZW51cyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XHJcblx0fVxyXG5cdGRlbGV0ZV9tZW51KGlkKXtcclxuXHRcdHRoaXMucHJvcHMub3BlbigpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGlkXHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVuZGVyUG9zdHMoKXtcclxuXHRcdGNvbnN0IHsgbWVudSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4gXy5tYXAobWVudSwgaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGtleT17aXRlbS5pZG1lbnV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZvb2RcclxuXHRcdFx0XHRcdFx0b25EZWxldGU9eygpID0+IHRoaXMuZGVsZXRlX21lbnUoaXRlbS5pZG1lbnUpfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17aXRlbS5tZW51X25hbWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHsgbWVudSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlclBvc3RzKCl9XHJcblx0XHRcdFx0PEFkZE1lbnUgc2hvcF9pZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdFx0PENvbmZpcm1cclxuXHRcdFx0XHRcdHN1Ym1pdD17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVNZW51KHRoaXMuc3RhdGUuaWQsIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKX1cclxuXHRcdFx0XHRcdHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVudTogc3RhdGUubWVudVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hfbWVudXM6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lbnVzKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVNZW51OiAobWVudWlkLCBzaG9waWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVudShtZW51aWQsIHNob3BpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wKCkpO1xyXG5cdFx0fSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbnVMaXN0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVudUxpc3QpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdFxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=