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
      fetch_menus = _ref.fetch_menus,
      deleteMenu = _ref.deleteMenu,
      deleteShop = _ref.deleteShop,
      open = _ref.open;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      id = _useState[0],
      setID = _useState[1];

  var menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.menu;
  });
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
          lineNumber: 76,
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
          lineNumber: 79,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 92,
      columnNumber: 4
    }
  }));
};

_s(MenuList, "ZpDYvEz1/xIyPpbBJsLIv2sS9Hg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYnRuTGluZSIsIm1hcmdpbiIsImJ0bkVkaXQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvbkxpbmUiLCJidG5EZWxldGUiLCJNZW51TGlzdCIsIm1hdGNoIiwiZmV0Y2hfbWVudXMiLCJkZWxldGVNZW51IiwiZGVsZXRlU2hvcCIsIm9wZW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SUQiLCJtZW51IiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJwYXJhbXMiLCJkZWxldGVfbWVudSIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsIml0ZW0iLCJpZG1lbnUiLCJtZW51X25hbWUiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaE1lbnVzIiwibWVudWlkIiwic2hvcGlkIiwiY29uZmlybSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsU0FBTyxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLFlBQVEsRUFBRTtBQUZGLEdBREk7QUFLYkMsU0FBTyxFQUFFO0FBQ1JDLFVBQU0sRUFBRTtBQURBLEdBTEk7QUFRYkMsU0FBTyxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVBDLFVBQU0sRUFBRSxHQUZEO0FBR1BILFVBQU0sRUFBRSxNQUhEO0FBSVBJLGdCQUFZLEVBQUUsS0FKUDtBQUtQQyxTQUFLLEVB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TztBQUNIVixlQUFXLEVBQUUscUJBQUNLLEVBQUQsRUFBUTtBQUNqQkssY0FBUSxDQUFDYywyREFBVSxDQUFDbkIsRUFBRCxDQUFYLENBQVI7QUFDSCxLQUhFO0FBSUhKLGNBQVUsRUFBRSxvQkFBQ3dCLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUM1QmhCLGNBQVEsQ0FBQ1QsMkRBQVUsQ0FBQ3dCLE1BQUQsRUFBU0MsTUFBVCxDQUFYLENBQVI7QUFDSCxLQU5FO0FBT0h4QixjQUFVLEVBQUUsc0JBQU07QUFDZFEsY0FBUSxDQUFDUiwyREFBVSxFQUFYLENBQVI7QUFDVCxLQVRRO0FBVVRDLFFBQUksRUFBRSxnQkFBTTtBQUNYTyxjQUFRLENBQUNpQix3REFBTyxDQUFDLElBQUQsQ0FBUixDQUFSO0FBQ0E7QUFaUSxHQUFQO0FBY0gsQ0FmRDs7QUFpQmVDLDBIQUFPLENBQUNOLGVBQUQsRUFBa0JDLGtCQUFsQixDQUFQLENBQTZDekIsUUFBN0MsQ0FBZjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS40Y2Q5MmMzMzBhYzkwYzM4NjU3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoTWVudXMsIGRlbGV0ZU1lbnUsIGRlbGV0ZVNob3AsIGNvbmZpcm0gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBBZGRNZW51IGZyb20gJy4vYWRkTWVudSc7XHJcbmltcG9ydCBGb29kIGZyb20gJy4uLy4uL2NvbXBvbmVudC9Gb29kJztcclxuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0NvbmZpcm0nO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nLCBGbGF0QnV0dG9uLCBSYWlzZWRCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbi8vaW1wb3J0IFRpdGxlTWVudSBmcm9tICcuLi90b3BfbWVudS9tZW51cyc7XHJcbi8vaW1wb3J0IEFkZF9NZW51IGZyb20gJy4vYWRkX21lbnUnO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3cmFwcGVyOiB7XHJcbiAgXHRkaXNwbGF5OiAnZmxleCcsXHJcbiAgXHRmbGV4V3JhcDogJ3dyYXAnXHJcbiAgfSxcclxuICBidG5MaW5lOiB7XHJcbiAgXHRtYXJnaW46ICcxMHB4IDBweCAzMHB4J1xyXG4gIH0sXHJcbiAgYnRuRWRpdDoge1xyXG4gIFx0cGFkZGluZzogJzEwcHgnLFxyXG4gICAgYm9yZGVyOiAnMCcsXHJcbiAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJmYicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJ1xyXG4gIH0sXHJcbiAgYnRuRGVsZXRlOiB7XHJcbiAgXHRwYWRkaW5nOiAnMTBweCcsXHJcbiAgICBib3JkZXI6ICcwJyxcclxuICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJiJyxcclxuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnXHJcbiAgfVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzRnJvbVN0YXRlIHtcclxuXHRtYXRjaDogYW55LFxyXG5cdG1lbnU6IGFueVxyXG59XHJcbiAgXHJcbmludGVyZmFjZSBwcm9wc0Zyb21EaXNwYXRjaCB7XHJcblx0ZmV0Y2hfbWVudXM6IChpZDogTnVtYmVyKSA9PiB2b2lkLFxyXG5cdGRlbGV0ZU1lbnU6IChtZW51aWQ6IE51bWJlciwgc2hvcGlkOiBOdW1iZXIpID0+IHZvaWQsXHJcblx0ZGVsZXRlU2hvcDogKCkgPT4gdm9pZCxcclxuXHRvcGVuOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgTWVudUxpc3QgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBtYXRjaCwgZmV0Y2hfbWVudXMsIGRlbGV0ZU1lbnUsIGRlbGV0ZVNob3AsIG9wZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1lbnUpO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoX21lbnVzKG1hdGNoLnBhcmFtcy5pZCk7XHJcblx0fSxbXSlcclxuXHJcblx0Y29uc3QgZGVsZXRlX21lbnUgPSAoaWQpID0+IHtcclxuXHRcdG9wZW4oKVxyXG5cdFx0c2V0SUQoaWQpXHJcblx0fVxyXG5cdGNvbnN0IHJlbmRlclBvc3RzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIF8ubWFwKG1lbnUsIGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2l0ZW0uaWRtZW51fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxGb29kXHJcblx0XHRcdFx0XHRcdG9uRGVsZXRlPXsoKSA9PiBkZWxldGVfbWVudShpdGVtLmlkbWVudSl9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLm1lbnVfbmFtZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiByZW5kZXJQb3N0cygpfVxyXG5cdFx0XHQ8QWRkTWVudSBzaG9wX2lkPXttYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdDxDb25maXJtXHJcblx0XHRcdFx0c3VibWl0PXsoKSA9PiBkaXNwYXRjaChkZWxldGVNZW51KGlkLCBtYXRjaC5wYXJhbXMuaWQpKX1cclxuXHRcdFx0XHR0aXRsZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGU/XCJcclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBtZW51OiBzdGF0ZS5tZW51XHJcbn0pO1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hfbWVudXM6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lbnVzKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVNZW51OiAobWVudWlkLCBzaG9waWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVudShtZW51aWQsIHNob3BpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wKCkpO1xyXG5cdFx0fSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lbnVMaXN0KVxyXG5cclxuLyoqIFxyXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpZCA6IDBcclxuXHRcdH1cclxuXHR9XHJcblx0VU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpe1xyXG5cdFx0dGhpcy5wcm9wcy5mZXRjaF9tZW51cyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XHJcblx0fVxyXG5cdGRlbGV0ZV9tZW51KGlkKXtcclxuXHRcdHRoaXMucHJvcHMub3BlbigpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGlkXHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVuZGVyUG9zdHMoKXtcclxuXHRcdGNvbnN0IHsgbWVudSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4gXy5tYXAobWVudSwgaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGtleT17aXRlbS5pZG1lbnV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZvb2RcclxuXHRcdFx0XHRcdFx0b25EZWxldGU9eygpID0+IHRoaXMuZGVsZXRlX21lbnUoaXRlbS5pZG1lbnUpfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17aXRlbS5tZW51X25hbWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHsgbWVudSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlclBvc3RzKCl9XHJcblx0XHRcdFx0PEFkZE1lbnUgc2hvcF9pZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdFx0PENvbmZpcm1cclxuXHRcdFx0XHRcdHN1Ym1pdD17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVNZW51KHRoaXMuc3RhdGUuaWQsIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKX1cclxuXHRcdFx0XHRcdHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVudTogc3RhdGUubWVudVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hfbWVudXM6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lbnVzKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVNZW51OiAobWVudWlkLCBzaG9waWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVudShtZW51aWQsIHNob3BpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wKCkpO1xyXG5cdFx0fSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbnVMaXN0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVudUxpc3QpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdFxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=