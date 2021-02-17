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
          lineNumber: 70,
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
          lineNumber: 73,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYnRuTGluZSIsIm1hcmdpbiIsImJ0bkVkaXQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvbkxpbmUiLCJidG5EZWxldGUiLCJNZW51TGlzdCIsIm1hdGNoIiwibWVudSIsImZldGNoX21lbnVzIiwiZGVsZXRlTWVudSIsIm9wZW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SUQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFyYW1zIiwiZGVsZXRlX21lbnUiLCJyZW5kZXJQb3N0cyIsIl8iLCJtYXAiLCJpdGVtIiwiaWRtZW51IiwibWVudV9uYW1lIiwibGVuZ3RoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaE1lbnVzIiwibWVudWlkIiwic2hvcGlkIiwiY29uZmlybSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxTQUFPLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsWUFBUSxFQUFFO0FBRkYsR0FESTtBQUtiQyxTQUFPLEVBQUU7QUFDUkMsVUFBTSxFQUFFO0FBREEsR0FMSTtBQVFiQyxTQUFPLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUEMsVUFBTSxFQUFFLEdBRkQ7QUFHUEgsVUFBTSxFQUFFLE1BSEQ7QUFJUEksZ0JBQVksRUFBRSxLQUpQO0FBS1BDLFNBQUssRUFBRSxNQUxBO0FBTVBDLG1CQUFlLEVBQUUsTUFOVjtBQU9QQyxz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LGNBQVEsQ0FBQ0wsMkRBQVUsQ0FBQ3FCLE1BQUQsRUFBU0MsTUFBVCxDQUFYLENBQVI7QUFDSCxLQU5FO0FBT1RyQixRQUFJLEVBQUUsZ0JBQU07QUFDWEksY0FBUSxDQUFDa0Isd0RBQU8sQ0FBQyxJQUFELENBQVIsQ0FBUjtBQUNBO0FBVFEsR0FBUDtBQVdILENBWkQ7O0FBY2VDLDBIQUFPLENBQUNQLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDdkIsUUFBN0MsQ0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5lMGQ5NTI1MjdjNjViNzE4YTY3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaE1lbnVzLCBkZWxldGVNZW51LCBjb25maXJtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgQWRkTWVudSBmcm9tICcuL2FkZE1lbnUnO1xyXG5pbXBvcnQgRm9vZCBmcm9tICcuLi8uLi9jb21wb25lbnQvRm9vZCc7XHJcbmltcG9ydCBDb25maXJtIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db25maXJtJztcclxuXHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdyYXBwZXI6IHtcclxuICBcdGRpc3BsYXk6ICdmbGV4JyxcclxuICBcdGZsZXhXcmFwOiAnd3JhcCdcclxuICB9LFxyXG4gIGJ0bkxpbmU6IHtcclxuICBcdG1hcmdpbjogJzEwcHggMHB4IDMwcHgnXHJcbiAgfSxcclxuICBidG5FZGl0OiB7XHJcbiAgXHRwYWRkaW5nOiAnMTBweCcsXHJcbiAgICBib3JkZXI6ICcwJyxcclxuICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmZiJyxcclxuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnXHJcbiAgfSxcclxuICBidG5EZWxldGU6IHtcclxuICBcdHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIGJvcmRlcjogJzAnLFxyXG4gICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmMmInLFxyXG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZSdcclxuICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG5cdG1hdGNoOiBhbnksXHJcblx0bWVudTogYW55XHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHRmZXRjaF9tZW51czogKGlkOiBOdW1iZXIpID0+IHZvaWQsXHJcblx0ZGVsZXRlTWVudTogKG1lbnVpZDogTnVtYmVyLCBzaG9waWQ6IE51bWJlcikgPT4gdm9pZCxcclxuXHRvcGVuOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgTWVudUxpc3QgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBtYXRjaCwgbWVudSwgZmV0Y2hfbWVudXMsIGRlbGV0ZU1lbnUsIG9wZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hfbWVudXMobWF0Y2gucGFyYW1zLmlkKTtcclxuXHR9LFtdKVxyXG5cclxuXHRjb25zdCBkZWxldGVfbWVudSA9IChpZCkgPT4ge1xyXG5cdFx0b3BlbigpXHJcblx0XHRzZXRJRChpZClcclxuXHR9XHJcblx0Y29uc3QgcmVuZGVyUG9zdHMgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gXy5tYXAobWVudSwgaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGtleT17aXRlbS5pZG1lbnV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZvb2RcclxuXHRcdFx0XHRcdFx0b25EZWxldGU9eygpID0+IGRlbGV0ZV9tZW51KGl0ZW0uaWRtZW51KX1cclxuXHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubWVudV9uYW1lfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdHsgbWVudS5sZW5ndGggPiAwICYmIHJlbmRlclBvc3RzKCl9XHJcblx0XHRcdDxBZGRNZW51IHNob3BfaWQ9e21hdGNoLnBhcmFtcy5pZH0gLz5cclxuXHRcdFx0PENvbmZpcm1cclxuXHRcdFx0XHRzdWJtaXQ9eygpID0+IGRlbGV0ZU1lbnUoaWQsIG1hdGNoLnBhcmFtcy5pZCl9XHJcblx0XHRcdFx0dGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVudTogc3RhdGUubWVudVxyXG59KTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoX21lbnVzOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hNZW51cyhpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlTWVudTogKG1lbnVpZCwgc2hvcGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lbnUobWVudWlkLCBzaG9waWQpKTtcclxuICAgICAgICB9LFxyXG5cdFx0b3BlbjogKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVudUxpc3QpXHJcblxyXG4vKiogXHJcbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGlkIDogMFxyXG5cdFx0fVxyXG5cdH1cclxuXHRVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCl7XHJcblx0XHR0aGlzLnByb3BzLmZldGNoX21lbnVzKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcclxuXHR9XHJcblx0ZGVsZXRlX21lbnUoaWQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vcGVuKCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0aWRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW5kZXJQb3N0cygpe1xyXG5cdFx0Y29uc3QgeyBtZW51IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHJldHVybiBfLm1hcChtZW51LCBpdGVtID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0a2V5PXtpdGVtLmlkbWVudX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Rm9vZFxyXG5cdFx0XHRcdFx0XHRvbkRlbGV0ZT17KCkgPT4gdGhpcy5kZWxldGVfbWVudShpdGVtLmlkbWVudSl9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLm1lbnVfbmFtZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgeyBtZW51IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHsgbWVudS5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyUG9zdHMoKX1cclxuXHRcdFx0XHQ8QWRkTWVudSBzaG9wX2lkPXt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH0gLz5cclxuXHRcdFx0XHQ8Q29uZmlybVxyXG5cdFx0XHRcdFx0c3VibWl0PXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZU1lbnUodGhpcy5zdGF0ZS5pZCwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpfVxyXG5cdFx0XHRcdFx0dGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBtZW51OiBzdGF0ZS5tZW51XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaF9tZW51czogKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoTWVudXMoaWQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZU1lbnU6IChtZW51aWQsIHNob3BpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVNZW51KG1lbnVpZCwgc2hvcGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVTaG9wOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNob3AoKSk7XHJcblx0XHR9LFxyXG5cdFx0b3BlbjogKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuTWVudUxpc3QgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZW51TGlzdClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0XHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==