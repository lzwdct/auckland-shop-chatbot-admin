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
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\menuList.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








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
          lineNumber: 40,
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
          lineNumber: 43,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCJdLCJuYW1lcyI6WyJNZW51TGlzdCIsIm1hdGNoIiwibWVudSIsImZldGNoX21lbnVzIiwiZGVsZXRlTWVudSIsIm9wZW4iLCJ1c2VTdGF0ZSIsImlkIiwic2V0SUQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwicGFyYW1zIiwiZGVsZXRlX21lbnUiLCJyZW5kZXJQb3N0cyIsIl8iLCJtYXAiLCJpdGVtIiwiaWRtZW51IiwibWVudV9uYW1lIiwibGVuZ3RoIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJmZXRjaE1lbnVzIiwibWVudWlkIiwic2hvcGlkIiwiY29uZmlybSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7QUFlQSxJQUFNQSxRQUE0QyxHQUFHLFNBQS9DQSxRQUErQyxPQUFvRDtBQUFBOztBQUFBLE1BQWpEQyxLQUFpRCxRQUFqREEsS0FBaUQ7QUFBQSxNQUExQ0MsSUFBMEMsUUFBMUNBLElBQTBDO0FBQUEsTUFBcENDLFdBQW9DLFFBQXBDQSxXQUFvQztBQUFBLE1BQXZCQyxVQUF1QixRQUF2QkEsVUFBdUI7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ3BGQyxzREFBUSxDQUFDLENBQUQsQ0FENEU7QUFBQSxNQUNqR0MsRUFEaUc7QUFBQSxNQUM3RkMsS0FENkY7O0FBRXhHLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2ZSLGVBQVcsQ0FBQ0YsS0FBSyxDQUFDVyxNQUFOLENBQWFMLEVBQWQsQ0FBWDtBQUNBLEdBRlEsRUFFUCxFQUZPLENBQVQ7O0FBSUEsTUFBTU0sV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ04sRUFBRCxFQUFRO0FBQzNCRixRQUFJO0FBQ0pHLFNBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQ0EsR0FIRDs7QUFJQSxNQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCLFdBQU9DLDZDQUFDLENBQUNDLEdBQUYsQ0FBTWQsSUFBTixFQUFZLFVBQUFlLElBQUksRUFBSTtBQUMxQixhQUNDO0FBQ0MsV0FBRyxFQUFFQSxJQUFJLENBQUNDLE1BRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdDLE1BQUMsdURBQUQ7QUFDQyxnQkFBUSxFQUFFO0FBQUEsaUJBQU1MLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDQyxNQUFOLENBQWpCO0FBQUEsU0FEWDtBQUVDLGFBQUssRUFBRUQsSUFBSSxDQUFDRSxTQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRCxDQUREO0FBVUEsS0FYTSxDQUFQO0FBWUEsR0FiRDs7QUFlQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLElBQUksQ0FBQ2tCLE1BQUwsR0FBYyxDQUFkLElBQW1CTixXQUFXLEVBRGpDLEVBRUMsTUFBQyxnREFBRDtBQUFTLFdBQU8sRUFBRWIsS0FBSyxDQUFDVyxNQUFOLENBQWFMLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDLE1BQUMsMERBQUQ7QUFDQyxVQUFNLEVBQUU7QUFBQSxhQUFNSCxVQUFVLENBQUNHLEVBQUQsRUFBS04sS0FBSyxDQUFDVyxNQUFOLENBQWFMLEVBQWxCLENBQWhCO0FBQUEsS0FEVDtBQUVDLFNBQUssRUFBQyx5QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FERDtBQVVBLENBckNEOztHQUFNUCxRO1VBRVlVLHVEOzs7S0FGWlYsUTs7QUF1Q04sSUFBTXFCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDOUJwQixRQUFJLEVBQUVvQixLQUFLLENBQUNwQjtBQURrQixHQUFMO0FBQUEsQ0FBN0I7O0FBR0EsSUFBTXFCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2QsUUFBRCxFQUFrRDtBQUN6RSxTQUFPO0FBQ0hOLGVBQVcsRUFBRSxxQkFBQ0ksRUFBRCxFQUFRO0FBQ2pCRSxjQUFRLENBQUNlLDJEQUFVLENBQUNqQixFQUFELENBQVgsQ0FBUjtBQUNILEtBSEU7QUFJSEgsY0FBVSxFQUFFLG9CQUFDcUIsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQzVCakIsY0FBUSxDQUFDTCwyREFBVSxDQUFDcUIsTUFBRCxFQUFTQyxNQUFULENBQVgsQ0FBUjtBQUNILEtBTkU7QUFPVHJCLFFBQUksRUFBRSxnQkFBTTtBQUNYSSxjQUFRLENBQUNrQix3REFBTyxDQUFDLElBQUQsQ0FBUixDQUFSO0FBQ0E7QUFUUSxHQUFQO0FBV0gsQ0FaRDs7QUFjZUMsMEhBQU8sQ0FBQ1AsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkN2QixRQUE3QyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuM2NlM2QxMmM1MDc2MjJhNWY1NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgVGh1bmtEaXNwYXRjaCB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgZmV0Y2hNZW51cywgZGVsZXRlTWVudSwgY29uZmlybSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuaW1wb3J0IEFkZE1lbnUgZnJvbSAnLi9hZGRNZW51JztcclxuaW1wb3J0IEZvb2QgZnJvbSAnLi4vLi4vY29tcG9uZW50L0Zvb2QnO1xyXG5pbXBvcnQgQ29uZmlybSBmcm9tICcuLi8uLi9jb25zdGFudHMvQ29uZmlybSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG5cdG1hdGNoOiBhbnksXHJcblx0bWVudTogYW55XHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHRmZXRjaF9tZW51czogKGlkOiBudW1iZXIpID0+IHZvaWQsXHJcblx0ZGVsZXRlTWVudTogKG1lbnVpZDogbnVtYmVyLCBzaG9waWQ6IG51bWJlcikgPT4gdm9pZCxcclxuXHRvcGVuOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgTWVudUxpc3QgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBtYXRjaCwgbWVudSwgZmV0Y2hfbWVudXMsIGRlbGV0ZU1lbnUsIG9wZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hfbWVudXMobWF0Y2gucGFyYW1zLmlkKTtcclxuXHR9LFtdKVxyXG5cclxuXHRjb25zdCBkZWxldGVfbWVudSA9IChpZCkgPT4ge1xyXG5cdFx0b3BlbigpXHJcblx0XHRzZXRJRChpZClcclxuXHR9XHJcblx0Y29uc3QgcmVuZGVyUG9zdHMgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gXy5tYXAobWVudSwgaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGtleT17aXRlbS5pZG1lbnV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZvb2RcclxuXHRcdFx0XHRcdFx0b25EZWxldGU9eygpID0+IGRlbGV0ZV9tZW51KGl0ZW0uaWRtZW51KX1cclxuXHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubWVudV9uYW1lfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdHsgbWVudS5sZW5ndGggPiAwICYmIHJlbmRlclBvc3RzKCl9XHJcblx0XHRcdDxBZGRNZW51IHNob3BfaWQ9e21hdGNoLnBhcmFtcy5pZH0gLz5cclxuXHRcdFx0PENvbmZpcm1cclxuXHRcdFx0XHRzdWJtaXQ9eygpID0+IGRlbGV0ZU1lbnUoaWQsIG1hdGNoLnBhcmFtcy5pZCl9XHJcblx0XHRcdFx0dGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVudTogc3RhdGUubWVudVxyXG59KTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoX21lbnVzOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hNZW51cyhpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlTWVudTogKG1lbnVpZCwgc2hvcGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lbnUobWVudWlkLCBzaG9waWQpKTtcclxuICAgICAgICB9LFxyXG5cdFx0b3BlbjogKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVudUxpc3QpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=