exports.ids = [0];
exports.modules = {

/***/ "./src/actions/index.tsx":
/*!*******************************!*\
  !*** ./src/actions/index.tsx ***!
  \*******************************/
/*! exports provided: default, userLogin, fetchShops, fetchMenus, deleteMenu, deleteShop, addNewMenu, confirm, snack, addShop, fetchShopDetail, updateShopDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchShops", function() { return fetchShops; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMenus", function() { return fetchMenus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMenu", function() { return deleteMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteShop", function() { return deleteShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewMenu", function() { return addNewMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirm", function() { return confirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snack", function() { return snack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShop", function() { return addShop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchShopDetail", function() { return fetchShopDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateShopDetail", function() { return updateShopDetail; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);



const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2___default.a();
const uri = 'https://ejll3yirxk.execute-api.ap-southeast-2.amazonaws.com/dev/graphql';
let client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1___default.a({
  uri,
  request: operation => {
    const token = cookies.get('token');

    if (token) {
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    }
  }
});
let token = null;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return "Show page working ! ";
});
const userLogin = (username, password) => dispatch => {
  const LOGIN_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation {
        login(
            where: {
                username: "${username}",
                password: "${password}"
            }
        ){
            token
        }
    }`;
  client.mutate({
    mutation: LOGIN_GQL
  }).then(({
    data
  }) => {
    if (data.login) {
      cookies.set('token', data.login.token, {
        path: '/'
      });
      dispatch({
        type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN"],
        payload: data.login.token
      });
    } else {
      dispatch({
        type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"],
        payload: 1
      });
    }
  }).catch(error => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"],
      payload: 1
    });
  });
};
const fetchShops = () => dispatch => {
  const FETCH_SHOP_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    {
        shop{
            idshop
            shop_addr
            shop_name
            shop_order
            shop_phone
        }
    }`;
  client.query({
    query: FETCH_SHOP_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SHOP"],
      payload: data.shop
    });
  });
};
const fetchMenus = id => dispatch => {
  const FETCH_MENU_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation{
        getMenu(
            where:{
                shop_id: ${id}
            }
        ){
            idmenu
            menu_name
        }
    }`;
  client.mutate({
    mutation: FETCH_MENU_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_MENU"],
      payload: data.getMenu
    });
  });
};
const deleteMenu = (menuid, shopid) => dispatch => {
  const DELETE_MENU_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation{
        deleteMenu(
          where:{
            menu_id: ${menuid},
            shop_id: ${shopid}
          }
        ){
            menu_id
        }
    }`;
  client.mutate({
    mutation: DELETE_MENU_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_MENU"],
      payload: data.deleteMenu
    });
  });
};
const deleteShop = shopid => dispatch => {
  const DELETE_SHOP_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation{
        deleteShop(
          where: {
            idshop: ${shopid}
          }
        ){
          idshop
        }
    }`;
  client.mutate({
    mutation: DELETE_SHOP_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_SHOP"],
      payload: data.deleteShop.idshop
    });
  });
};
const addNewMenu = (shopid, menu_name) => dispatch => {
  const ADD_MENU_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation{
        addMenu(
        data:{
          menu_name: "${menu_name}",
          idshop: ${shopid}
        }
      ){
          menu{
            idmenu
            menu_name
          }
      }
    }`;
  client.mutate({
    mutation: ADD_MENU_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_MENU"],
      payload: data.addMenu.menu
    });
  });
};
const confirm = open => dispatch => {
  dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["CONFIRM"],
    payload: open
  });
};
const snack = (open, message) => dispatch => {
  dispatch({
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SNACK"],
    payload: {
      open,
      message
    }
  });
  setTimeout(function () {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SNACK"],
      payload: {
        open: false,
        message: ''
      }
    });
  }, 3000);
};
const addShop = (shopname, shopaddr, shopphone) => dispatch => {
  const CREATE_SHOP_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation{
        createShop(
          data :{
            shop_addr: "${shopaddr}",
            shop_name: "${shopname}",
            shop_order: 5,
            shop_phone: "${shopphone}"
          }
        ){
            idshop
            shop_addr
            shop_name
            shop_order
            shop_phone
        }
    }`;
  client.mutate({
    mutation: CREATE_SHOP_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_SHOP"],
      payload: data.createShop
    });
  });
};
const fetchShopDetail = shopid => dispatch => {
  const FETCH_SHOP_DETAIL_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    {
        shop(
            idshop: ${shopid}
        ),
        {
            shop_addr
            shop_name
            shop_order
            shop_phone
            idshop
        }
    }`;
  client.query({
    query: FETCH_SHOP_DETAIL_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SHOP_DETAIL"],
      payload: data.shop[0]
    });
  });
};
const updateShopDetail = (shopid, shop_addr, shop_phone, shop_order) => dispatch => {
  const UPDATE_SHOP_GQL = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
    mutation{
        updateShop(
          data:{
            shop_addr: "${shop_addr}",
            shop_phone: "${shop_phone}",
            shop_order: ${shop_order}
          },
          where:{
            idshop: ${shopid}
          }
        ){
            idshop
            shop_name
            shop_addr
            shop_phone
            shop_order
        }
    }`;
  client.mutate({
    mutation: UPDATE_SHOP_GQL
  }).then(({
    data
  }) => {
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SHOP_DETAIL"],
      payload: data.updateShop
    });
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET_SHOP_DETAIL"]
    });
  });
};

/***/ }),

/***/ "./src/component/Food.tsx":
/*!********************************!*\
  !*** ./src/component/Food.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\component\\Food.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Food = ({
  onDelete,
  label
}) => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    onDelete: onDelete,
    label: label,
    style: styles.chip,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  });
};

const styles = {
  chip: {
    margin: 4,
    flex: 1
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ "./src/constants/ActionTypes.tsx":
/*!***************************************!*\
  !*** ./src/constants/ActionTypes.tsx ***!
  \***************************************/
/*! exports provided: default, LOGIN, LOGIN_FAIL, FETCH_SHOP, FETCH_MENU, DELETE_MENU, DELETE_SHOP, ADD_MENU, CONFIRM, SNACK, ADD_SHOP, FETCH_SHOP_DETAIL, UPDATE_SHOP_DETAIL, RESET_SHOP_DETAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SHOP", function() { return FETCH_SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_MENU", function() { return FETCH_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MENU", function() { return DELETE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SHOP", function() { return DELETE_SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_MENU", function() { return ADD_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIRM", function() { return CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACK", function() { return SNACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHOP", function() { return ADD_SHOP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SHOP_DETAIL", function() { return FETCH_SHOP_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SHOP_DETAIL", function() { return UPDATE_SHOP_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_SHOP_DETAIL", function() { return RESET_SHOP_DETAIL; });
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return "Show page working ! ";
});
const LOGIN = 'LOGIN';
const LOGIN_FAIL = 'LOGIN_FAIL';
const FETCH_SHOP = 'FETCH_SHOP';
const FETCH_MENU = 'FETCH_MENU';
const DELETE_MENU = 'DELETE_MENU';
const DELETE_SHOP = 'DELETE_SHOP';
const ADD_MENU = 'ADD_MENU';
const CONFIRM = 'CONFIRM';
const SNACK = 'SNACK';
const ADD_SHOP = 'ADD_SHOP;';
const FETCH_SHOP_DETAIL = 'FETCH_SHOP_DETAIL';
const UPDATE_SHOP_DETAIL = 'UPDATE_SHOP_DETAIL';
const RESET_SHOP_DETAIL = 'RESET_SHOP_DETAIL';

/***/ }),

/***/ "./src/constants/Confirm.tsx":
/*!***********************************!*\
  !*** ./src/constants/Confirm.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\constants\\Confirm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Confirm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  handleClose() {
    this.props.close();
  }

  handleSubmit() {
    this.props.submit();
    this.handleClose();
  }

  render() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
      onClose: () => this.handleClose(),
      open: this.props.confirm,
      "aria-labelledby": "confirm-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
      id: "confirm-dialog-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, this.props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, this.props.children), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("button", {
      onClick: () => this.handleSubmit(),
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, "Yes"), __jsx("button", {
      onClick: () => this.handleClose(),
      className: "btn btn-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, "No")));
  }

}

const mapStateToProps = state => ({
  confirm: state.confirm
});

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["confirm"])(false));
    }
  };
};

Confirm = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Confirm);
/* harmony default export */ __webpack_exports__["default"] = (Confirm);

/***/ }),

/***/ "./src/constants/Snack.tsx":
/*!*********************************!*\
  !*** ./src/constants/Snack.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/actions/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\constants\\Snack.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Snack extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Snackbar"], {
      open: this.props.snack,
      message: this.props.message,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    });
  }

}

const mapStateToProps = state => ({
  snack: state.snack.open,
  message: state.snack.message
});

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["snack"])(false, ''));
    }
  };
};

Snack = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Snack);
/* harmony default export */ __webpack_exports__["default"] = (Snack);

/***/ }),

/***/ "./src/container/app.tsx":
/*!*******************************!*\
  !*** ./src/container/app.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shop_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop/Main */ "./src/container/shop/Main.tsx");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/container/login.tsx");
/* harmony import */ var _menu_menuList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menuList */ "./src/container/menu/menuList.tsx");
/* harmony import */ var _shop_editShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop/editShop */ "./src/container/shop/editShop.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const App = props => {
  return __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "App",
    style: style.app,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _login__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/menu/:id",
    component: _menu_menuList__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/edit/:id",
    component: _shop_editShop__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _shop_Main__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
const style = {
  app: {
    backgroundColor: '#fff',
    padding: 10
  }
};

/***/ }),

/***/ "./src/container/login.tsx":
/*!*********************************!*\
  !*** ./src/container/login.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const style = {
  paper: {
    padding: 20
  }
};

const Login = props => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.login);
  const error = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.error);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      success
    } = login;
    const {
      history
    } = props;
    if (success) history.push('/');
  });

  const handleClick = e => {
    e.preventDefault();
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["userLogin"])(username, password));
  };

  const setValue = (type, newValue) => {
    if (type === 'username') {
      setUsername(newValue);
    } else {
      setPassword(newValue);
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: style.paper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "Username"), __jsx("input", {
    type: "text",
    className: "form-control",
    id: "username",
    placeholder: "Username",
    onChange: event => setValue('username', event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "password",
    placeholder: "password",
    onChange: event => setValue('password', event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  })), login.error === 1 && __jsx("div", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 46
    }
  }, "Invalid login detail"), __jsx("button", {
    type: "submit",
    className: "btn btn-default",
    onClick: e => handleClick(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Submit"))));
};
/**
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            login: 0,
            error: 0
        }

        this.setValue = this.setValue.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        const { success } = nextProps.login;
        const { history } = this.props;
        if( success )
            history.push('/');
    }
    handleClick(e){
        e.preventDefault();
        const { userLogin } = this.props; 
        const { username, password } = this.state;

        userLogin(username, password);
    }
    setValue(type, newValue){
        if(type === 'username'){
            this.setState({ username: newValue });
        }else{
            this.setState({ password: newValue });
        }
    }
    render() {
        const { error } = this.props.login;
        return (
            <div>
                <Paper style={style.paper}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Username"
                                onChange={(event) => this.setValue('username', event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="password"
                                onChange={(event) => this.setValue('password', event.target.value)}
                            />
                        </div>
                        {
                            error === 1 && <div className="error">Invalid login detail</div> 
                        }
                        <button 
                            type="submit" 
                            className="btn btn-default"
                            onClick={(e) => this.handleClick(e)}
                        >
                            Submit
                        </button>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
    error: state.error
});

const mapDispatchToProps = dispatch => {
    return {
        userLogin: (username, password) => {
            dispatch(userLogin(username, password));
        }
    }
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login)
**/


/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/container/menu/addMenu.tsx":
/*!****************************************!*\
  !*** ./src/container/menu/addMenu.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_Snack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/Snack */ "./src/constants/Snack.tsx");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\addMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = {
  wrapper: {
    height: '30px',
    margin: '20px 10px',
    borderRadius: 4,
    border: '1px solid #ccc'
  }
};

const AddMenu = ({
  shop_id,
  add_menu
}) => {
  const {
    0: menu_name,
    1: setMenu_name
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const add_menus = () => {
    add_menu(shop_id, menu_name);
    setMenu_name('');
  };

  const handleNameChange = event => {
    setMenu_name(event.target.value);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx("input", {
    type: "text",
    id: "add_menu_text",
    value: menu_name,
    onChange: e => handleNameChange(e),
    onKeyPress: event => {
      if (event.key === 'Enter') {
        add_menus();
      }
    },
    style: styles.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }), __jsx("button", {
    id: "add_menu",
    className: "btn btn-primary",
    onClick: () => add_menus(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }
  }));
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    add_menu: (id, name) => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["addNewMenu"])(id, name));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["snack"])(true, '새로운 메뉴가 추가되었습니다.'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddMenu));

/***/ }),

/***/ "./src/container/menu/menuList.tsx":
/*!*****************************************!*\
  !*** ./src/container/menu/menuList.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _addMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addMenu */ "./src/container/menu/addMenu.tsx");
/* harmony import */ var _component_Food__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Food */ "./src/component/Food.tsx");
/* harmony import */ var _constants_Confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/Confirm */ "./src/constants/Confirm.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\menuList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const MenuList = ({
  match,
  menu,
  fetch_menus,
  deleteMenu,
  open
}) => {
  const {
    0: id,
    1: setID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetch_menus(match.params.id);
  }, []);

  const delete_menu = id => {
    open();
    setID(id);
  };

  const renderPosts = () => {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(menu, item => {
      return __jsx("span", {
        key: item.idmenu,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 5
        }
      }, __jsx(_component_Food__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onDelete: () => delete_menu(item.idmenu),
        label: item.menu_name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: () => deleteMenu(id, match.params.id),
    title: "Are you sure to delete?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }
  }));
};

const mapStateToProps = state => ({
  menu: state.menu
});

const mapDispatchToProps = dispatch => {
  return {
    fetch_menus: id => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchMenus"])(id));
    },
    deleteMenu: (menuid, shopid) => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteMenu"])(menuid, shopid));
    },
    open: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["confirm"])(true));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MenuList));

/***/ }),

/***/ "./src/container/shop/Main.tsx":
/*!*************************************!*\
  !*** ./src/container/shop/Main.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShopList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopList */ "./src/container/shop/ShopList.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\Main.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Main = props => {
  const login = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.login);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      history
    } = props;
    if (!login.success) history.push('/login');
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_ShopList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/container/shop/ShopList.tsx":
/*!*****************************************!*\
  !*** ./src/container/shop/ShopList.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _addShop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addShop */ "./src/container/shop/addShop.tsx");
/* harmony import */ var _constants_Confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/Confirm */ "./src/constants/Confirm.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\ShopList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const ShopList = ({
  shopList,
  getShopList,
  open,
  deleteShop
}) => {
  const {
    0: id,
    1: setID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0); //const shopList = useSelector(state => state.shopList);
  //const dispatch = useDispatch();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (shopList.length === 0) getShopList();
  }, []);

  const delete_shop = id => {
    open();
    setID(id);
  };

  const renderShop = shopList => {
    if (!shopList.length) return null;
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(shopList, shop => {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItem"], {
        button: true,
        key: shop.idshop,
        component: "a",
        onClick: () => history.push('/menu/' + shop.idshop),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: shop.shop_name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemSecondaryAction"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn btn-primary",
        onClick: () => history.push('/edit/' + shop.idshop),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }
      }, "Edit"), __jsx("button", {
        className: "btn btn-secondary",
        onClick: () => delete_shop(shop.idshop),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, "Delete")));
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, shopList.length === 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 42
    }
  }, "Loading..."), shopList.length > 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, renderShop(shopList)), __jsx(_addShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: () => deleteShop(id),
    title: "Are you sure to delete?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  })));
};

const mapStateToProps = state => ({
  shopList: state.shopList
});

const mapDispatchToProps = dispatch => {
  return {
    getShopList: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchShops"])());
    },
    deleteShop: id => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteShop"])(id));
    },
    open: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["confirm"])(true));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ShopList));

/***/ }),

/***/ "./src/container/shop/addShop.tsx":
/*!****************************************!*\
  !*** ./src/container/shop/addShop.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _constants_Snack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Snack */ "./src/constants/Snack.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\addShop.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = {
  wrapper: {
    height: '30px',
    margin: '20px 10px',
    borderRadius: 4,
    border: '1px solid #ccc'
  }
};

const AddShop = ({
  addShop
}) => {
  const {
    0: shop_name,
    1: setShop_name
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: shop_addr,
    1: setShop_addr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: shop_phone,
    1: setShop_phone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const add_shop = () => {
    addShop(shop_name, shop_addr, shop_phone);
    setShop_name('');
    setShop_addr('');
    setShop_phone('');
  };

  const handleNameChange = event => {
    setShop_name(event.target.value);
  };

  const handleAddrChange = event => {
    setShop_addr(event.target.value);
  };

  const handlePhoneChange = event => {
    setShop_phone(event.target.value);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }, __jsx("input", {
    type: "text",
    name: "add_shop_text",
    value: shop_name,
    onChange: handleNameChange,
    style: styles.wrapper,
    placeholder: "\uC2DD\uB2F9 \uC774\uB984",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    name: "add_shop_addr",
    value: shop_addr,
    onChange: handleAddrChange,
    style: styles.wrapper,
    placeholder: "\uC2DD\uB2F9 \uC8FC\uC18C",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    name: "add_shop_phone",
    value: shop_phone,
    onChange: handlePhoneChange,
    style: styles.wrapper,
    placeholder: "\uC2DD\uB2F9 \uC5F0\uB77D\uCC98",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }), __jsx("button", {
    className: "btn btn-primary",
    onClick: () => add_shop(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }
  }));
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    addShop: (name, addr, phone) => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["addShop"])(name, addr, phone));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["snack"])(true, '새로운 식당이 추가되었습니다.'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddShop));

/***/ }),

/***/ "./src/container/shop/editShop.tsx":
/*!*****************************************!*\
  !*** ./src/container/shop/editShop.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./src/actions/index.tsx");
/* harmony import */ var _constants_Snack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/Snack */ "./src/constants/Snack.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\editShop.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = {
  btn: {
    padding: '10px'
  }
};

const EditShop = ({
  match,
  shopDetail,
  updateShopDetail,
  fetchShopDetail
}) => {
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])(); //const shopDetail = useSelector(state => state.shopDetail);

  const edit_shop_addr_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const edit_shop_phone_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const edit_shop_order_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchShopDetail(match.params.id);
  }, []);

  const edit_shop = e => {
    e.preventDefault();
    updateShopDetail(match.params.id, edit_shop_addr_REF.current.value, edit_shop_phone_REF.current.value, edit_shop_order_REF.current.value);
  };

  const back_shop = e => {
    e.preventDefault();
    history.push('/');
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, !shopDetail && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 32
    }
  }, "Loading..."), shopDetail && __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_addr",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_phone",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_order",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    style: styles.btn,
    onClick: e => edit_shop(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "\uC218\uC815"), __jsx("button", {
    className: "btn btn-primary",
    onClick: e => back_shop(e),
    style: styles.btn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, "\uBA54\uC778")), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  })));
};

const mapStateToProps = state => ({
  shopDetail: state.shopDetail
});

const mapDispatchToProps = dispatch => {
  return {
    fetchShopDetail: id => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchShopDetail"])(id));
    },
    updateShopDetail: (id, addr, phone, order) => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateShopDetail"])(id, addr, phone, order));
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["snack"])(true, '정보가 업데이트 되었습니다.'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(EditShop));

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _container_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container/app */ "./src/container/app.tsx");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.tsx");
var _jsxFileName = "C:\\Program Files (x86)\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const createStoreWithMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"]);

const home = () => __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: createStoreWithMiddleware(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"]),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 20
  }
}, __jsx(_container_app__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 1
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ "./src/reducers/confirm.tsx":
/*!**********************************!*\
  !*** ./src/reducers/confirm.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");

/* harmony default export */ __webpack_exports__["default"] = (function (state = false, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["CONFIRM"]:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/index.tsx":
/*!********************************!*\
  !*** ./src/reducers/index.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/reducers/login.tsx");
/* harmony import */ var _shopList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopList */ "./src/reducers/shopList.tsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/reducers/menu.tsx");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm */ "./src/reducers/confirm.tsx");
/* harmony import */ var _snack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snack */ "./src/reducers/snack.tsx");
/* harmony import */ var _shopDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopDetail */ "./src/reducers/shopDetail.tsx");







const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  login: _login__WEBPACK_IMPORTED_MODULE_1__["default"],
  shopList: _shopList__WEBPACK_IMPORTED_MODULE_2__["default"],
  menu: _menu__WEBPACK_IMPORTED_MODULE_3__["default"],
  confirm: _confirm__WEBPACK_IMPORTED_MODULE_4__["default"],
  snack: _snack__WEBPACK_IMPORTED_MODULE_5__["default"],
  shopDetail: _shopDetail__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/login.tsx":
/*!********************************!*\
  !*** ./src/reducers/login.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");

const initial = {
  success: 0,
  error: 0,
  token: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initial, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN"]:
      return {
        success: 1,
        error: 0,
        token: action.payload
      };

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]:
      return {
        success: 0,
        error: 1,
        token: null
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/menu.tsx":
/*!*******************************!*\
  !*** ./src/reducers/menu.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");


/* harmony default export */ __webpack_exports__["default"] = (function (state = [], action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_MENU"]:
      return [...action.payload];

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["DELETE_MENU"]:
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(state, x => {
        return x.idmenu !== action.payload.menu_id;
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_MENU"]:
      return [...state, action.payload];
  }

  return state;
});

/***/ }),

/***/ "./src/reducers/shopDetail.tsx":
/*!*************************************!*\
  !*** ./src/reducers/shopDetail.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");

/* harmony default export */ __webpack_exports__["default"] = (function (state = [], action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SHOP_DETAIL"]:
      return action.payload;

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["RESET_SHOP_DETAIL"]:
      return [];

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/shopList.tsx":
/*!***********************************!*\
  !*** ./src/reducers/shopList.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");

/* harmony default export */ __webpack_exports__["default"] = (function (state = [], action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["FETCH_SHOP"]:
      return [...action.payload];

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["ADD_SHOP"]:
      return [...state, action.payload];

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_SHOP"]:
      const deleteID = action.payload;
      const shop = state.map(obj => {
        if (obj.idshop !== deleteID) return obj;
      });
      const result = shop.filter(function (el) {
        return el;
      });
      return [...result];

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SHOP_DETAIL"]:
      const data = action.payload;
      const updatedShop = state.map(obj => {
        if (obj.idshop === data.idshop) {
          return data;
        } else {
          return obj;
        }
      });
      return updatedShop;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducers/snack.tsx":
/*!********************************!*\
  !*** ./src/reducers/snack.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./src/constants/ActionTypes.tsx");

const initialState = {
  open: false,
  message: ''
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["SNACK"]:
      return {
        open: action.payload.open,
        message: action.payload.message
      };

    default:
      return state;
  }
});

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Gb29kLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0NvbmZpcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvU25hY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL21lbnUvYWRkTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3Nob3AvTWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zaG9wL1Nob3BMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3Nob3AvYWRkU2hvcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zaG9wL2VkaXRTaG9wLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb25maXJtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zaG9wRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2hvcExpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zbmFjay50c3giXSwibmFtZXMiOlsiY29va2llcyIsIkNvb2tpZXMiLCJ1cmkiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJyZXF1ZXN0Iiwib3BlcmF0aW9uIiwidG9rZW4iLCJnZXQiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyTG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJMT0dJTl9HUUwiLCJncWwiLCJtdXRhdGUiLCJtdXRhdGlvbiIsInRoZW4iLCJkYXRhIiwibG9naW4iLCJzZXQiLCJwYXRoIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaFNob3BzIiwiRkVUQ0hfU0hPUF9HUUwiLCJxdWVyeSIsInNob3AiLCJmZXRjaE1lbnVzIiwiaWQiLCJGRVRDSF9NRU5VX0dRTCIsImdldE1lbnUiLCJkZWxldGVNZW51IiwibWVudWlkIiwic2hvcGlkIiwiREVMRVRFX01FTlVfR1FMIiwiZGVsZXRlU2hvcCIsIkRFTEVURV9TSE9QX0dRTCIsImlkc2hvcCIsImFkZE5ld01lbnUiLCJtZW51X25hbWUiLCJBRERfTUVOVV9HUUwiLCJhZGRNZW51IiwibWVudSIsImNvbmZpcm0iLCJvcGVuIiwic25hY2siLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImFkZFNob3AiLCJzaG9wbmFtZSIsInNob3BhZGRyIiwic2hvcHBob25lIiwiQ1JFQVRFX1NIT1BfR1FMIiwiY3JlYXRlU2hvcCIsImZldGNoU2hvcERldGFpbCIsIkZFVENIX1NIT1BfREVUQUlMX0dRTCIsInVwZGF0ZVNob3BEZXRhaWwiLCJzaG9wX2FkZHIiLCJzaG9wX3Bob25lIiwic2hvcF9vcmRlciIsIlVQREFURV9TSE9QX0dRTCIsInVwZGF0ZVNob3AiLCJSRVNFVF9TSE9QX0RFVEFJTCIsIkZvb2QiLCJvbkRlbGV0ZSIsImxhYmVsIiwic3R5bGVzIiwiY2hpcCIsIm1hcmdpbiIsImZsZXgiLCJMT0dJTiIsIkxPR0lOX0ZBSUwiLCJGRVRDSF9TSE9QIiwiRkVUQ0hfTUVOVSIsIkRFTEVURV9NRU5VIiwiREVMRVRFX1NIT1AiLCJBRERfTUVOVSIsIkNPTkZJUk0iLCJTTkFDSyIsIkFERF9TSE9QIiwiRkVUQ0hfU0hPUF9ERVRBSUwiLCJVUERBVEVfU0hPUF9ERVRBSUwiLCJDb25maXJtIiwiQ29tcG9uZW50IiwiaGFuZGxlQ2xvc2UiLCJwcm9wcyIsImNsb3NlIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0IiwicmVuZGVyIiwidGl0bGUiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIlNuYWNrIiwiQXBwIiwic3R5bGUiLCJhcHAiLCJMb2dpbiIsIk1lbnVMaXN0IiwiRWRpdFNob3AiLCJNYWluIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInBhcGVyIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInNldFBhc3N3b3JkIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ3cmFwcGVyIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiQWRkTWVudSIsInNob3BfaWQiLCJhZGRfbWVudSIsInNldE1lbnVfbmFtZSIsImFkZF9tZW51cyIsImhhbmRsZU5hbWVDaGFuZ2UiLCJrZXkiLCJuYW1lIiwibWF0Y2giLCJmZXRjaF9tZW51cyIsInNldElEIiwicGFyYW1zIiwiZGVsZXRlX21lbnUiLCJyZW5kZXJQb3N0cyIsIl8iLCJtYXAiLCJpdGVtIiwiaWRtZW51IiwibGVuZ3RoIiwiU2hvcExpc3QiLCJzaG9wTGlzdCIsImdldFNob3BMaXN0IiwidXNlSGlzdG9yeSIsImRlbGV0ZV9zaG9wIiwicmVuZGVyU2hvcCIsInNob3BfbmFtZSIsIkFkZFNob3AiLCJzZXRTaG9wX25hbWUiLCJzZXRTaG9wX2FkZHIiLCJzZXRTaG9wX3Bob25lIiwiYWRkX3Nob3AiLCJoYW5kbGVBZGRyQ2hhbmdlIiwiaGFuZGxlUGhvbmVDaGFuZ2UiLCJhZGRyIiwicGhvbmUiLCJidG4iLCJzaG9wRGV0YWlsIiwiZWRpdF9zaG9wX2FkZHJfUkVGIiwidXNlUmVmIiwiZWRpdF9zaG9wX3Bob25lX1JFRiIsImVkaXRfc2hvcF9vcmRlcl9SRUYiLCJlZGl0X3Nob3AiLCJjdXJyZW50IiwiYmFja19zaG9wIiwib3JkZXIiLCJjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmsiLCJjcmVhdGVTdG9yZSIsImhvbWUiLCJyZWR1Y2VycyIsImFjdGlvbiIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5pdGlhbCIsImZpbHRlciIsIngiLCJtZW51X2lkIiwiZGVsZXRlSUQiLCJvYmoiLCJyZXN1bHQiLCJlbCIsInVwZGF0ZWRTaG9wIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFPQSxNQUFNQSxPQUFPLEdBQUcsSUFBSUMsdURBQUosRUFBaEI7QUFFQSxNQUFNQyxHQUFHLEdBQUcseUVBQVo7QUFFQSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsbURBQUosQ0FBaUI7QUFDMUJGLEtBRDBCO0FBRTFCRyxTQUFPLEVBQUdDLFNBQUQsSUFBZTtBQUN0QixVQUFNQyxLQUFLLEdBQUdQLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLE9BQVosQ0FBZDs7QUFDQSxRQUFHRCxLQUFILEVBQVM7QUFDUEQsZUFBUyxDQUFDRyxVQUFWLENBQXFCO0FBQ2pCQyxlQUFPLEVBQUU7QUFDTEMsdUJBQWEsRUFBRUosS0FBSyxHQUFJLFVBQVNBLEtBQU0sRUFBbkIsR0FBdUI7QUFEdEM7QUFEUSxP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QyxLQUFQO0FBUFg7QUFVQSxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tICdhcG9sbG8tYm9vc3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuaW1wb3J0IHsgQWN0aW9uQ3JlYXRvciwgQWN0aW9uLCBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBUaHVua0FjdGlvbiB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5leHBvcnQgdHlwZSBBcHBUaHVuayA9IEFjdGlvbkNyZWF0b3I8XHJcbiAgVGh1bmtBY3Rpb248dm9pZCwgQXBwbGljYXRpb25TdGF0ZSwgbnVsbCwgQWN0aW9uPHN0cmluZz4+XHJcbj47XHJcblxyXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcclxuXHJcbmNvbnN0IHVyaSA9ICdodHRwczovL2VqbGwzeWlyeGsuZXhlY3V0ZS1hcGkuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbS9kZXYvZ3JhcGhxbCc7XHJcblxyXG5sZXQgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmksXHJcbiAgICByZXF1ZXN0OiAob3BlcmF0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llcy5nZXQoJ3Rva2VuJyk7XHJcbiAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICBvcGVyYXRpb24uc2V0Q29udGV4dCh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgdG9rZW4gPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIFwiU2hvdyBwYWdlIHdvcmtpbmcgISBcIjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbjogQXBwVGh1bmsgPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgTE9HSU5fR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb24ge1xyXG4gICAgICAgIGxvZ2luKFxyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiJHt1c2VybmFtZX1cIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIiR7cGFzc3dvcmR9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBMT0dJTl9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEubG9naW4pe1xyXG4gICAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLmxvZ2luLnRva2VuLCB7IHBhdGg6ICcvJyB9KTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5sb2dpbi50b2tlblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuTE9HSU5fRkFJTCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5MT0dJTl9GQUlMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2hvcHM6IEFwcFRodW5rID0gKCkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgRkVUQ0hfU0hPUF9HUUwgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgc2hvcHtcclxuICAgICAgICAgICAgaWRzaG9wXHJcbiAgICAgICAgICAgIHNob3BfYWRkclxyXG4gICAgICAgICAgICBzaG9wX25hbWVcclxuICAgICAgICAgICAgc2hvcF9vcmRlclxyXG4gICAgICAgICAgICBzaG9wX3Bob25lXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IEZFVENIX1NIT1BfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkZFVENIX1NIT1AsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEuc2hvcFxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTWVudXM6IEFwcFRodW5rID0gKGlkKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgRkVUQ0hfTUVOVV9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbntcclxuICAgICAgICBnZXRNZW51KFxyXG4gICAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgICAgICBzaG9wX2lkOiAke2lkfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgaWRtZW51XHJcbiAgICAgICAgICAgIG1lbnVfbmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogRkVUQ0hfTUVOVV9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuRkVUQ0hfTUVOVSxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5nZXRNZW51XHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTWVudTogQXBwVGh1bmsgPSAobWVudWlkLCBzaG9waWQpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IERFTEVURV9NRU5VX0dRTCA9IGdxbGBcclxuICAgIG11dGF0aW9ue1xyXG4gICAgICAgIGRlbGV0ZU1lbnUoXHJcbiAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIG1lbnVfaWQ6ICR7bWVudWlkfSxcclxuICAgICAgICAgICAgc2hvcF9pZDogJHtzaG9waWR9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgbWVudV9pZFxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogREVMRVRFX01FTlVfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9NRU5VLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLmRlbGV0ZU1lbnVcclxuICAgICAgICB9KTsgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTaG9wOiBBcHBUaHVuayA9IChzaG9waWQpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IERFTEVURV9TSE9QX0dRTCA9IGdxbGBcclxuICAgIG11dGF0aW9ue1xyXG4gICAgICAgIGRlbGV0ZVNob3AoXHJcbiAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICBpZHNob3A6ICR7c2hvcGlkfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICBpZHNob3BcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IERFTEVURV9TSE9QX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5ERUxFVEVfU0hPUCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5kZWxldGVTaG9wLmlkc2hvcFxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZE5ld01lbnU6IEFwcFRodW5rID0gKHNob3BpZCwgbWVudV9uYW1lKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgQUREX01FTlVfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgYWRkTWVudShcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgIG1lbnVfbmFtZTogXCIke21lbnVfbmFtZX1cIixcclxuICAgICAgICAgIGlkc2hvcDogJHtzaG9waWR9XHJcbiAgICAgICAgfVxyXG4gICAgICApe1xyXG4gICAgICAgICAgbWVudXtcclxuICAgICAgICAgICAgaWRtZW51XHJcbiAgICAgICAgICAgIG1lbnVfbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IEFERF9NRU5VX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTUVOVSxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5hZGRNZW51Lm1lbnVcclxuICAgICAgICB9KTsgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlybTogQXBwVGh1bmsgPSAob3BlbikgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkNPTkZJUk0sXHJcbiAgICAgICAgcGF5bG9hZDogb3BlblxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzbmFjazogQXBwVGh1bmsgPSAob3BlbiwgbWVzc2FnZSkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlNOQUNLLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgb3BlbixcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5TTkFDSyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIDMwMDBcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGRTaG9wOiBBcHBUaHVuayA9IChzaG9wbmFtZSwgc2hvcGFkZHIsIHNob3BwaG9uZSkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgQ1JFQVRFX1NIT1BfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgY3JlYXRlU2hvcChcclxuICAgICAgICAgIGRhdGEgOntcclxuICAgICAgICAgICAgc2hvcF9hZGRyOiBcIiR7c2hvcGFkZHJ9XCIsXHJcbiAgICAgICAgICAgIHNob3BfbmFtZTogXCIke3Nob3BuYW1lfVwiLFxyXG4gICAgICAgICAgICBzaG9wX29yZGVyOiA1LFxyXG4gICAgICAgICAgICBzaG9wX3Bob25lOiBcIiR7c2hvcHBob25lfVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgaWRzaG9wXHJcbiAgICAgICAgICAgIHNob3BfYWRkclxyXG4gICAgICAgICAgICBzaG9wX25hbWVcclxuICAgICAgICAgICAgc2hvcF9vcmRlclxyXG4gICAgICAgICAgICBzaG9wX3Bob25lXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBDUkVBVEVfU0hPUF9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NIT1AsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEuY3JlYXRlU2hvcFxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2hvcERldGFpbDogQXBwVGh1bmsgPSAoc2hvcGlkKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBGRVRDSF9TSE9QX0RFVEFJTF9HUUwgPSBncWxgXHJcbiAgICB7XHJcbiAgICAgICAgc2hvcChcclxuICAgICAgICAgICAgaWRzaG9wOiAke3Nob3BpZH1cclxuICAgICAgICApLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2hvcF9hZGRyXHJcbiAgICAgICAgICAgIHNob3BfbmFtZVxyXG4gICAgICAgICAgICBzaG9wX29yZGVyXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmVcclxuICAgICAgICAgICAgaWRzaG9wXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IEZFVENIX1NIT1BfREVUQUlMX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5GRVRDSF9TSE9QX0RFVEFJTCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5zaG9wWzBdXHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2hvcERldGFpbDogQXBwVGh1bmsgPSAoc2hvcGlkLCBzaG9wX2FkZHIsIHNob3BfcGhvbmUsIHNob3Bfb3JkZXIpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IFVQREFURV9TSE9QX0dRTCA9IGdxbGBcclxuICAgIG11dGF0aW9ue1xyXG4gICAgICAgIHVwZGF0ZVNob3AoXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgc2hvcF9hZGRyOiBcIiR7c2hvcF9hZGRyfVwiLFxyXG4gICAgICAgICAgICBzaG9wX3Bob25lOiBcIiR7c2hvcF9waG9uZX1cIixcclxuICAgICAgICAgICAgc2hvcF9vcmRlcjogJHtzaG9wX29yZGVyfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgaWRzaG9wOiAke3Nob3BpZH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBpZHNob3BcclxuICAgICAgICAgICAgc2hvcF9uYW1lXHJcbiAgICAgICAgICAgIHNob3BfYWRkclxyXG4gICAgICAgICAgICBzaG9wX3Bob25lXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXJcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IFVQREFURV9TSE9QX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5VUERBVEVfU0hPUF9ERVRBSUwsIHBheWxvYWQ6IGRhdGEudXBkYXRlU2hvcCB9KVxyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuUkVTRVRfU0hPUF9ERVRBSUwgfSlcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hpcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbmludGVyZmFjZSBGb29kUHJvcHMge1xyXG4gICAgb25EZWxldGUoKTogdm9pZDtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuY29uc3QgRm9vZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEZvb2RQcm9wcz4gPSAoeyBvbkRlbGV0ZSwgbGFiZWwgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hpcFxyXG4gICAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XHJcbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5jaGlwfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjaGlwOiB7XHJcbiAgICAgIG1hcmdpbjogNCxcclxuICAgICAgZmxleDogMSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vZDsiLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gXCJTaG93IHBhZ2Ugd29ya2luZyAhIFwiO1xyXG59XHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTic7XHJcbmV4cG9ydCBjb25zdCBMT0dJTl9GQUlMID0gJ0xPR0lOX0ZBSUwnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfU0hPUCA9ICdGRVRDSF9TSE9QJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX01FTlUgPSAnRkVUQ0hfTUVOVSc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVOVSA9ICdERUxFVEVfTUVOVSc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfU0hPUCA9ICdERUxFVEVfU0hPUCc7XHJcbmV4cG9ydCBjb25zdCBBRERfTUVOVSA9ICdBRERfTUVOVSc7XHJcbmV4cG9ydCBjb25zdCBDT05GSVJNID0gJ0NPTkZJUk0nO1xyXG5leHBvcnQgY29uc3QgU05BQ0sgPSAnU05BQ0snO1xyXG5leHBvcnQgY29uc3QgQUREX1NIT1AgPSAnQUREX1NIT1A7J1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfU0hPUF9ERVRBSUwgPSAnRkVUQ0hfU0hPUF9ERVRBSUwnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NIT1BfREVUQUlMID0gJ1VQREFURV9TSE9QX0RFVEFJTCc7XHJcbmV4cG9ydCBjb25zdCBSRVNFVF9TSE9QX0RFVEFJTCA9ICdSRVNFVF9TSE9QX0RFVEFJTCc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBcHBsaWNhdGlvblN0YXRlIHtcclxuICAgIGxvZ2luOiBhbnksXHJcbiAgICBzaG9wTGlzdDogYW55LFxyXG4gICAgbWVudTogYW55LFxyXG4gICAgY29uZmlybTogYW55LFxyXG4gICAgc25hY2s6IGFueSxcclxuICAgIHNob3BEZXRhaWw6IGFueVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbmZpcm0gfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dBY3Rpb25zLCBEaWFsb2dUaXRsZSwgRGlhbG9nQ29udGVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIENvbmZpcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBoYW5kbGVDbG9zZSgpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVN1Ym1pdCgpe1xyXG4gICAgICAgIHRoaXMucHJvcHMuc3VibWl0KCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKCl9IFxyXG4gICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5jb25maXJtfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29uZmlybS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm0tZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlU3VibWl0KCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZSgpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGNvbmZpcm06IHN0YXRlLmNvbmZpcm1cclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm0oZmFsc2UpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbmZpcm0gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb25maXJtKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZmlybSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzbmFjayB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBTbmFja2JhciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNsYXNzIFNuYWNrIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMuc25hY2t9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXt0aGlzLnByb3BzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHNuYWNrOiBzdGF0ZS5zbmFjay5vcGVuLFxyXG4gICAgbWVzc2FnZTogc3RhdGUuc25hY2subWVzc2FnZVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xvc2U6ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2soZmFsc2UsICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5TbmFjayA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNuYWNrKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU25hY2siLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgTWFpbiBmcm9tICcuL3Nob3AvTWFpbic7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcclxuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4vbWVudS9tZW51TGlzdCc7XHJcbmltcG9ydCBFZGl0U2hvcCBmcm9tICcuL3Nob3AvZWRpdFNob3AnO1xyXG5cclxuY29uc3QgQXBwID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiIHN0eWxlPXtzdHlsZS5hcHB9PlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tZW51LzppZFwiIGNvbXBvbmVudD17TWVudUxpc3R9IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0LzppZFwiIGNvbXBvbmVudD17RWRpdFNob3B9IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e01haW59IC8+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG5cclxuY29uc3Qgc3R5bGU9e1xyXG4gIGFwcDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICBwYWRkaW5nOiAxMFxyXG4gIH1cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IHsgdXNlckxvZ2luIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgcGFwZXI6IHtcclxuICAgICAgICBwYWRkaW5nOiAyMFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBMb2dpbiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIFxyXG4gICAgY29uc3QgbG9naW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5sb2dpbik7XHJcbiAgICBjb25zdCBlcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmVycm9yKTtcclxuXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBzdWNjZXNzIH0gPSBsb2dpbjtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHByb3BzO1xyXG4gICAgICAgIGlmKCBzdWNjZXNzIClcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9KVxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkaXNwYXRjaCh1c2VyTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXRWYWx1ZSA9ICh0eXBlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICd1c2VybmFtZScpe1xyXG4gICAgICAgICAgICBzZXRVc2VybmFtZShuZXdWYWx1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2V0UGFzc3dvcmQobmV3VmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZS5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlKCd1c2VybmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VmFsdWUoJ3Bhc3N3b3JkJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luLmVycm9yID09PSAxICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5JbnZhbGlkIGxvZ2luIGRldGFpbDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgbG9naW46IDAsXHJcbiAgICAgICAgICAgIGVycm9yOiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldFZhbHVlID0gdGhpcy5zZXRWYWx1ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcclxuICAgICAgICBjb25zdCB7IHN1Y2Nlc3MgfSA9IG5leHRQcm9wcy5sb2dpbjtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgaWYoIHN1Y2Nlc3MgKVxyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUNsaWNrKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHVzZXJMb2dpbiB9ID0gdGhpcy5wcm9wczsgXHJcbiAgICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIHVzZXJMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgc2V0VmFsdWUodHlwZSwgbmV3VmFsdWUpe1xyXG4gICAgICAgIGlmKHR5cGUgPT09ICd1c2VybmFtZScpe1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcm5hbWU6IG5ld1ZhbHVlIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IG5ld1ZhbHVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGVycm9yIH0gPSB0aGlzLnByb3BzLmxvZ2luO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRWYWx1ZSgndXNlcm5hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFZhbHVlKCdwYXNzd29yZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT09IDEgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkludmFsaWQgbG9naW4gZGV0YWlsPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuaGFuZGxlQ2xpY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbG9naW46IHN0YXRlLmxvZ2luLFxyXG4gICAgZXJyb3I6IHN0YXRlLmVycm9yXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyTG9naW46ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2godXNlckxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuTG9naW4gPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbilcclxuKiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbiIsIlxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi8uLi9jb25zdGFudHMvU25hY2snO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgYWRkTmV3TWVudSwgc25hY2sgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3cmFwcGVyOiB7XHJcbiAgXHRoZWlnaHQ6ICczMHB4JyxcclxuICAgIG1hcmdpbjogJzIwcHggMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6NCxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG5cdHNob3BfaWQ6IG51bWJlclxyXG4gIH1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHRhZGRfbWVudTogKHNob3BfaWQ6IG51bWJlciwgbWVudV9uYW1lOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5cclxudHlwZSBBbGxQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgcHJvcHNGcm9tRGlzcGF0Y2g7XHJcblxyXG5jb25zdCBBZGRNZW51IDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgc2hvcF9pZCwgYWRkX21lbnUgfSkgPT4ge1xyXG5cdGNvbnN0IFttZW51X25hbWUsIHNldE1lbnVfbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cdGNvbnN0IGFkZF9tZW51cyA9ICgpOiB2b2lkID0+IHtcclxuXHRcdGFkZF9tZW51KHNob3BfaWQsIG1lbnVfbmFtZSk7XHJcblx0XHRzZXRNZW51X25hbWUoJycpO1xyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50OiB7IHRhcmdldDogSFRNTElucHV0RWxlbWVudCB9KSA9PiB7XHJcblx0XHRzZXRNZW51X25hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdGlkPVwiYWRkX21lbnVfdGV4dFwiIFxyXG5cdFx0XHRcdHZhbHVlPXttZW51X25hbWV9IFxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlTmFtZUNoYW5nZShlKX0gXHJcblx0XHRcdFx0b25LZXlQcmVzcz17ZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRcdFx0XHRhZGRfbWVudXMoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8YnV0dG9uIGlkPVwiYWRkX21lbnVcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBhZGRfbWVudXMoKX0+XHJcblx0XHRcdFx0QUREXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8U25hY2sgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKCkgPT4gKHt9KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaDxhbnksIGFueSwgQW55QWN0aW9uPikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRfbWVudTogKGlkOm51bWJlciwgbmFtZTpzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkTmV3TWVudShpZCwgbmFtZSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzbmFjayh0cnVlLCAn7IOI66Gc7Jq0IOuplOuJtOqwgCDstpTqsIDrkJjsl4jsirXri4jri6QuJykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRNZW51KVxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoTWVudXMsIGRlbGV0ZU1lbnUsIGNvbmZpcm0gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBBZGRNZW51IGZyb20gJy4vYWRkTWVudSc7XHJcbmltcG9ydCBGb29kIGZyb20gJy4uLy4uL2NvbXBvbmVudC9Gb29kJztcclxuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0NvbmZpcm0nO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzRnJvbVN0YXRlIHtcclxuXHRtYXRjaDogYW55LFxyXG5cdG1lbnU6IGFueVxyXG59XHJcbiAgXHJcbmludGVyZmFjZSBwcm9wc0Zyb21EaXNwYXRjaCB7XHJcblx0ZmV0Y2hfbWVudXM6IChpZDogbnVtYmVyKSA9PiB2b2lkLFxyXG5cdGRlbGV0ZU1lbnU6IChtZW51aWQ6IG51bWJlciwgc2hvcGlkOiBudW1iZXIpID0+IHZvaWQsXHJcblx0b3BlbjogKCkgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IE1lbnVMaXN0IDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgbWF0Y2gsIG1lbnUsIGZldGNoX21lbnVzLCBkZWxldGVNZW51LCBvcGVuIH0pID0+IHtcclxuXHRjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoX21lbnVzKG1hdGNoLnBhcmFtcy5pZCk7XHJcblx0fSxbXSlcclxuXHJcblx0Y29uc3QgZGVsZXRlX21lbnUgPSAoaWQpID0+IHtcclxuXHRcdG9wZW4oKVxyXG5cdFx0c2V0SUQoaWQpXHJcblx0fVxyXG5cdGNvbnN0IHJlbmRlclBvc3RzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIF8ubWFwKG1lbnUsIGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2l0ZW0uaWRtZW51fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxGb29kXHJcblx0XHRcdFx0XHRcdG9uRGVsZXRlPXsoKSA9PiBkZWxldGVfbWVudShpdGVtLmlkbWVudSl9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLm1lbnVfbmFtZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiByZW5kZXJQb3N0cygpfVxyXG5cdFx0XHQ8QWRkTWVudSBzaG9wX2lkPXttYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdDxDb25maXJtXHJcblx0XHRcdFx0c3VibWl0PXsoKSA9PiBkZWxldGVNZW51KGlkLCBtYXRjaC5wYXJhbXMuaWQpfVxyXG5cdFx0XHRcdHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG5cdFx0XHQvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIG1lbnU6IHN0YXRlLm1lbnVcclxufSk7XHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaDogVGh1bmtEaXNwYXRjaDxhbnksIGFueSwgQW55QWN0aW9uPikgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaF9tZW51czogKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoTWVudXMoaWQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZU1lbnU6IChtZW51aWQsIHNob3BpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVNZW51KG1lbnVpZCwgc2hvcGlkKSk7XHJcbiAgICAgICAgfSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1lbnVMaXN0KVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgU2hvcExpc3QgZnJvbSAnLi9TaG9wTGlzdCc7XHJcblxyXG5jb25zdCBNYWluID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgbG9naW4gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5sb2dpbik7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgeyBoaXN0b3J5IH0gPSBwcm9wcztcclxuXHJcbiAgICAgICAgaWYoIWxvZ2luLnN1Y2Nlc3MpXHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnL2xvZ2luJyk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPFNob3BMaXN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaFNob3BzLCBkZWxldGVTaG9wLCBjb25maXJtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBZGRTaG9wIGZyb20gJy4vYWRkU2hvcCc7XHJcbmltcG9ydCBDb25maXJtIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db25maXJtJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcbiAgICBzaG9wTGlzdCA6IFtdXHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuICAgIGdldFNob3BMaXN0OigpID0+IHZvaWQsXHJcbiAgICBvcGVuOigpID0+IHZvaWQsXHJcbiAgICBkZWxldGVTaG9wOihpZDpudW1iZXIpID0+IHZvaWRcclxufVxyXG5cclxudHlwZSBBbGxQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgcHJvcHNGcm9tRGlzcGF0Y2g7XHJcblxyXG5jb25zdCBTaG9wTGlzdCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEFsbFByb3BzPiA9ICh7IHNob3BMaXN0LCBnZXRTaG9wTGlzdCwgb3BlbiwgZGVsZXRlU2hvcCB9KSA9PiB7XHJcbiAgICBjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKDApO1xyXG5cdC8vY29uc3Qgc2hvcExpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaG9wTGlzdCk7XHJcblx0Ly9jb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoc2hvcExpc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIGdldFNob3BMaXN0KCk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWxldGVfc2hvcCA9IChpZDogbnVtYmVyKSA9PiB7XHJcblx0XHRvcGVuKCk7XHJcblx0XHRzZXRJRChpZClcclxuXHR9XHJcbiAgICBjb25zdCByZW5kZXJTaG9wID0gKHNob3BMaXN0OiBbXSkgPT4ge1xyXG4gICAgICAgIGlmKCFzaG9wTGlzdC5sZW5ndGgpIHJldHVybiBudWxsO1xyXG5cdFx0cmV0dXJuIF8ubWFwKHNob3BMaXN0LCBzaG9wID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtzaG9wLmlkc2hvcH0gY29tcG9uZW50PVwiYVwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL21lbnUvJyArIHNob3AuaWRzaG9wKSB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Nob3Auc2hvcF9uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2VkaXQvJytzaG9wLmlkc2hvcCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlX3Nob3Aoc2hvcC5pZHNob3ApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG9wTGlzdC5sZW5ndGggPT09IDAgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvcExpc3QubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclNob3Aoc2hvcExpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8QWRkU2hvcC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0PXsoKSA9PiBkZWxldGVTaG9wKGlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHNob3BMaXN0OiBzdGF0ZS5zaG9wTGlzdFxyXG59KTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFNob3BMaXN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoU2hvcHMoKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVTaG9wOiAoaWQ6bnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNob3AoaWQpKVxyXG4gICAgICAgIH0sXHJcblx0XHRvcGVuOiAoKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGNvbmZpcm0odHJ1ZSkpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaG9wTGlzdClcclxuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgYWRkU2hvcCwgc25hY2sgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uLy4uL2NvbnN0YW50cy9TbmFjayc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd3JhcHBlcjoge1xyXG4gIFx0aGVpZ2h0OiAnMzBweCcsXHJcbiAgICBtYXJnaW46ICcyMHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOjQsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgfVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzRnJvbVN0YXRlIHtcclxuXHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHRhZGRTaG9wOihzaG9wX25hbWU6IHN0cmluZywgc2hvcF9hZGRyOiBzdHJpbmcsIHNob3BfcGhvbmU6IHN0cmluZyApID0+IHZvaWRcclxufVxyXG5cclxudHlwZSBBbGxQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgcHJvcHNGcm9tRGlzcGF0Y2g7XHJcblxyXG5jb25zdCBBZGRTaG9wIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgYWRkU2hvcCB9KSA9PiB7XHJcblx0Y29uc3QgW3Nob3BfbmFtZSwgc2V0U2hvcF9uYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbc2hvcF9hZGRyLCBzZXRTaG9wX2FkZHJdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtzaG9wX3Bob25lLCBzZXRTaG9wX3Bob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgYWRkX3Nob3AgPSAoKSA9PiB7XHJcblx0XHRhZGRTaG9wKHNob3BfbmFtZSwgc2hvcF9hZGRyLCBzaG9wX3Bob25lKTtcclxuXHJcblx0XHRzZXRTaG9wX25hbWUoJycpO1xyXG5cdFx0c2V0U2hvcF9hZGRyKCcnKTtcclxuXHRcdHNldFNob3BfcGhvbmUoJycpO1xyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX25hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlQWRkckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0U2hvcF9hZGRyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZVBob25lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX3Bob25lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0bmFtZT1cImFkZF9zaG9wX3RleHRcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9uYW1lfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gXHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwi7Iud64u5IOydtOumhFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9hZGRyXCIgXHJcblx0XHRcdFx0dmFsdWU9e3Nob3BfYWRkcn0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUFkZHJDaGFuZ2V9IFxyXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXMud3JhcHBlcn1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfcGhvbmVcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9waG9uZX0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZVBob25lQ2hhbmdlfSBcclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBhZGRfc2hvcCgpfT5cclxuXHRcdFx0XHRBRERcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxTbmFjayAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHt9KTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZFNob3A6IChuYW1lLCBhZGRyLCBwaG9uZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhZGRTaG9wKG5hbWUsIGFkZHIsIHBob25lKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg7Iud64u57J20IOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZFNob3ApXHJcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaFNob3BEZXRhaWwsIHVwZGF0ZVNob3BEZXRhaWwsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi8uLi9jb25zdGFudHMvU25hY2snO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBidG46IHtcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcclxuICAgIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcbiAgICBtYXRjaCA6IGFueSxcclxuICAgIHNob3BEZXRhaWw6IHtcclxuICAgICAgICBzaG9wX29yZGVyOiBzdHJpbmcsXHJcbiAgICAgICAgc2hvcF9hZGRyOiBzdHJpbmcsXHJcbiAgICAgICAgc2hvcF9waG9uZTogc3RyaW5nXHJcbiAgICB9XHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHR1cGRhdGVTaG9wRGV0YWlsOihpZDogc3RyaW5nLCBhZGRyOiBzdHJpbmcsIHBob25lOnN0cmluZywgb3JkZXI6c3RyaW5nICkgPT4gdm9pZCxcclxuICAgIGZldGNoU2hvcERldGFpbDooaWQ6IHN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IEVkaXRTaG9wIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgbWF0Y2gsIHNob3BEZXRhaWwsIHVwZGF0ZVNob3BEZXRhaWwsIGZldGNoU2hvcERldGFpbCB9KSA9PiB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIC8vY29uc3Qgc2hvcERldGFpbCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNob3BEZXRhaWwpO1xyXG4gICAgXHJcbiAgICBjb25zdCBlZGl0X3Nob3BfYWRkcl9SRUYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBlZGl0X3Nob3BfcGhvbmVfUkVGID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZWRpdF9zaG9wX29yZGVyX1JFRiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoU2hvcERldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgZWRpdF9zaG9wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlU2hvcERldGFpbChtYXRjaC5wYXJhbXMuaWQsIGVkaXRfc2hvcF9hZGRyX1JFRi5jdXJyZW50LnZhbHVlLCBlZGl0X3Nob3BfcGhvbmVfUkVGLmN1cnJlbnQudmFsdWUsIGVkaXRfc2hvcF9vcmRlcl9SRUYuY3VycmVudC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJhY2tfc2hvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXNob3BEZXRhaWwgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3BEZXRhaWwgJiZcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9hZGRyXCI+U2hvcCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX2FkZHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3BfYWRkclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRfc2hvcF9hZGRyX1JFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3BfYWRkciB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iud64u5IOyjvOyGjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9waG9uZVwiPlNob3AgUGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdF9zaG9wX3Bob25lX1JFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX3Bob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX29yZGVyXCI+U2hvcCBPcmRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRfc2hvcF9vcmRlcl9SRUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9vcmRlciB8fCA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iic7IScXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZWRpdF9zaG9wKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYmFja19zaG9wKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuplOyduFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U25hY2sgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHNob3BEZXRhaWw6IHN0YXRlLnNob3BEZXRhaWxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hTaG9wRGV0YWlsOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hTaG9wRGV0YWlsKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVTaG9wRGV0YWlsOiAoaWQsIGFkZHIsIHBob25lLCBvcmRlcikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVTaG9wRGV0YWlsKGlkLCBhZGRyLCBwaG9uZSwgb3JkZXIpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+ygleuztOqwgCDsl4XrjbDsnbTtirgg65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdFNob3ApXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbnRhaW5lci9hcHAnO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKShjcmVhdGVTdG9yZSk7XHJcblxyXG5jb25zdCBob21lID0gKCkgPT4gPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJlZHVjZXJzKX0+XHJcbjxBcHAgLz5cclxuPC9Qcm92aWRlcj47XHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XHJcbiIsImltcG9ydCB7IENPTkZJUk0gfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBmYWxzZSwgYWN0aW9uKXtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSBDT05GSVJNOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIFxyXG5cdH1cclxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgc2hvcExpc3QgZnJvbSAnLi9zaG9wTGlzdCc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBjb25maXJtIGZyb20gJy4vY29uZmlybSc7XHJcbmltcG9ydCBzbmFjayBmcm9tICcuL3NuYWNrJztcclxuaW1wb3J0IHNob3BEZXRhaWwgZnJvbSAnLi9zaG9wRGV0YWlsJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBsb2dpbixcclxuICBzaG9wTGlzdCxcclxuICBtZW51LFxyXG4gIGNvbmZpcm0sXHJcbiAgc25hY2ssXHJcbiAgc2hvcERldGFpbFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBMT0dJTiwgTE9HSU5fRkFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsID0ge1xyXG4gICAgc3VjY2VzcyA6IDAsXHJcbiAgICBlcnJvcjogMCxcclxuICAgIHRva2VuOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbil7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHRcdGNhc2UgTE9HSU46XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAxLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IDAsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR0lOX0ZBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAwLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IDEsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIFxyXG5cdH1cclxufSIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBGRVRDSF9NRU5VLCBERUxFVEVfTUVOVSwgQUREX01FTlUgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSwgYWN0aW9uKXtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSBGRVRDSF9NRU5VOlxyXG5cdFx0XHRyZXR1cm4gWy4uLmFjdGlvbi5wYXlsb2FkXTtcclxuXHRcdGNhc2UgREVMRVRFX01FTlU6XHJcblx0XHRcdHJldHVybiBfLmZpbHRlcihzdGF0ZSwgKHgpID0+IHsgXHJcblx0XHRcdFx0cmV0dXJuIHguaWRtZW51ICE9PSBhY3Rpb24ucGF5bG9hZC5tZW51X2lkOyBcclxuXHRcdFx0fSk7XHJcblx0XHRjYXNlIEFERF9NRU5VOlxyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdF1cclxuXHR9XHJcblx0cmV0dXJuIHN0YXRlO1xyXG59IiwiaW1wb3J0IHsgRkVUQ0hfU0hPUF9ERVRBSUwsIFJFU0VUX1NIT1BfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1NIT1BfREVUQUlMOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgY2FzZSBSRVNFVF9TSE9QX0RFVEFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEZFVENIX1NIT1AsIEFERF9TSE9QLCBERUxFVEVfU0hPUCwgVVBEQVRFX1NIT1BfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1NIT1A6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIGNhc2UgQUREX1NIT1A6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBjYXNlIERFTEVURV9TSE9QOlxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJRCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zdCBzaG9wID0gc3RhdGUubWFwKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmouaWRzaG9wICE9PSBkZWxldGVJRClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzaG9wLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHRdXHJcbiAgICAgICAgY2FzZSBVUERBVEVfU0hPUF9ERVRBSUw6XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNob3AgPSBzdGF0ZS5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5pZHNob3AgPT09IGRhdGEuaWRzaG9wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkU2hvcDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU05BQ0sgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiAnJ1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pe1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblx0XHRjYXNlIFNOQUNLOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3BlbjogYWN0aW9uLnBheWxvYWQub3BlbixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==