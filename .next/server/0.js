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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\component\\Food.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Food = props => {
  const {
    onDelete,
    label,
    key
  } = props;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    onDelete: onDelete,
    label: label,
    style: styles.chip,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\constants\\Confirm.tsx";
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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\constants\\Snack.tsx";
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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\app.tsx";
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
/** 
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={style.app}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/menu/:id" component={MenuList} />
            <Route path="/edit/:id" component={EditShop} />
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
*/

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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\login.tsx";
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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\addMenu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = {
  wrapper: {
    height: '30px',
    margin: '20px 10px',
    borderRadius: 4,
    border: '1px solid #ccc'
  }
};

const AddMenu = props => {
  const {
    0: menu_name,
    1: setMenu_name
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.menu);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const add_menus = () => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["addNewMenu"])(props.shop_id, menu_name));
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["snack"])(true, '새로운 메뉴가 추가되었습니다.'));
    setMenu_name('');
  };

  const handleNameChange = event => {
    event.preventDefault();
    setMenu_name(event.target.value);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 3
    }
  }, __jsx("input", {
    type: "text",
    id: "add_menu_text",
    value: menu_name,
    onChange: e => handleNameChange(e),
    onKeyPress: event => {
      if (event.key === 'Enter') {
        add_menus(event);
      }
    },
    style: styles.wrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }), __jsx("button", {
    label: "ADD",
    className: "btn btn-primary",
    onClick: e => add_menus(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }));
};
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
 */


/* harmony default export */ __webpack_exports__["default"] = (AddMenu);

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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\menu\\menuList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







//import TitleMenu from '../top_menu/menus';
//import Add_Menu from './add_menu';
const styles = {
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

const MenuList = props => {
  const {
    0: id,
    1: setID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.menu);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchMenus"])(props.match.params.id));
  }, []);

  const delete_menu = id => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["confirm"])(true));
    setID(id);
  };

  const renderPosts = () => {
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(menu, item => {
      return __jsx("span", {
        key: item.idmenu,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 5
        }
      }, __jsx(_component_Food__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onDelete: () => delete_menu(item.idmenu),
        label: item.menu_name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: props.match.params.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: () => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteMenu"])(id, props.match.params.id)),
    title: "Are you sure to delete?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuList);
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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\Main.tsx";
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
/** 
class Main extends Component{
    UNSAFE_componentWillMount(){
        const { history, login } = this.props;

        if(!login.success)
            history.push('/login');
    }
    render(){
        return(
            <div>
                <ShopList />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login
});

Main = connect(mapStateToProps, null)(Main)
*/


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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\ShopList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const ShopList = props => {
  const {
    0: id,
    1: setID
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const shopList = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopList);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (shopList.length === 0) dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchShops"])());
  }, []);

  const delete_shop = id => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["confirm"])(true));
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
          lineNumber: 30,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemText"], {
        primary: shop.shop_name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["ListItemSecondaryAction"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx("button", {
        className: "btn btn-primary",
        onClick: () => history.push('/edit/' + shop.idshop),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, "Edit"), __jsx("button", {
        className: "btn btn-secondary",
        onClick: () => delete_shop(shop.idshop),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }
      }, "Delete")));
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, shopList.length === 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 42
    }
  }, "Loading..."), shopList.length > 0 && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["List"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, renderShop(shopList)), __jsx(_addShop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: () => dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["deleteShop"])(id)),
    title: "Are you sure to delete?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  })));
};
/** 
class ShopList extends Component {
    constructor(props) {
        super(props);

        this.state = {
			id : 0
		}
    }
    componentDidMount(){
        if(this.props.shopList.length === 0)
            this.props.getShopList();
    }
    delete_shop(id){
		this.props.open();
		this.setState({
			id
		});
	}
    renderShop(shopList){

        if(!shopList.length) return null;
		return _.map(shopList, shop => {
			return (
                <ListItem button key={shop.idshop} component="a" onClick={() => this.props.history.push('/menu/' + shop.idshop) } >
                    <ListItemText primary={shop.shop_name} />
                    <ListItemSecondaryAction>
                        <button
                            className="btn btn-primary"
                            onClick={() => this.props.history.push('/edit/'+shop.idshop) }
                        >
                            Edit
                        </button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => this.delete_shop(shop.idshop)}
                        >
                            Delete
                        </button>
                    </ListItemSecondaryAction>
                </ListItem>
			);
		});
	}
    render() {
        const { shopList } = this.props;

        return (
            <div>
                {
                    shopList.length === 0 && <div>Loading...</div>
                }
                {
                    shopList.length > 0 &&
                    <div>
                        <List>
                            {this.renderShop(shopList)}
                        </List>
                        <AddShop/>
                        <Confirm
                            submit={() => this.props.deleteShop(this.state.id)}
                            title="Are you sure to delete?"
                        />
                    </div>
                    
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shopList: state.shopList
});

const mapDispatchToProps = dispatch => {
    return {
        getShopList: () => {
            dispatch(fetchShops());
        },
        deleteShop: (id) => {
            dispatch(deleteShop(id))
        },
		open: () => {
			dispatch(confirm(true));
		}
    }
}

ShopList = withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopList))
*/


/* harmony default export */ __webpack_exports__["default"] = (ShopList);

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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\addShop.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const styles = {
  wrapper: {
    height: '30px',
    margin: '20px 10px',
    borderRadius: 4,
    border: '1px solid #ccc'
  }
};

const AddShop = props => {
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
  const menu = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.menu);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {}, []);

  const add_shop = () => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["addShop"])(shop_name, shop_addr, shop_phone));
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["snack"])(true, '새로운 식당이 추가되었습니다.'));
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
      lineNumber: 48,
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
      lineNumber: 49,
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
      lineNumber: 57,
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
      lineNumber: 65,
      columnNumber: 4
    }
  }), __jsx("button", {
    label: "ADD",
    className: "btn btn-primary",
    onClick: e => add_shop(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }, "ADD"), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }
  }));
};
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
*/


/* harmony default export */ __webpack_exports__["default"] = (AddShop);

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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\container\\shop\\editShop.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = {
  btn: {
    padding: '10px'
  }
};

const EditShop = props => {
  const {
    0: shopid,
    1: setShopid
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: shop_name,
    1: setShopp_name
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: shop_addr,
    1: setShop_addr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: shop_phone,
    1: setShop_phone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: shop_order,
    1: setShop_order
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: snack_open,
    1: setSnack_open
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  const shopDetail = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopDetail);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const edit_shop_addr_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const edit_shop_phone_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const edit_shop_order_REF = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchShopDetail"])(props.match.params.id));
  }, []);

  const edit_shop = e => {
    e.preventDefault();
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateShopDetail"])(props.match.params.id, edit_shop_addr_REF.current.value, edit_shop_phone_REF.current.value, edit_shop_order_REF.current.value));
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["snack"])(true, '정보가 업데이트 되었습니다.'));
    /** 
    this.props.updateShopDetail(
        this.props.match.params.id,
        this.edit_shop_addr.value,
        this.edit_shop_phone.value,
        this.edit_shop_order.value
    );*/
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
**/


/* harmony default export */ __webpack_exports__["default"] = (EditShop);

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
var _jsxFileName = "C:\\Program Files\\Ampps\\www\\auckland-shop-chatbot-admin\\src\\index.tsx";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Gb29kLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0NvbmZpcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvU25hY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL21lbnUvYWRkTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3Nob3AvTWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zaG9wL1Nob3BMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3Nob3AvYWRkU2hvcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zaG9wL2VkaXRTaG9wLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb25maXJtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zaG9wRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2hvcExpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zbmFjay50c3giXSwibmFtZXMiOlsiY29va2llcyIsIkNvb2tpZXMiLCJ1cmkiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJyZXF1ZXN0Iiwib3BlcmF0aW9uIiwidG9rZW4iLCJnZXQiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyTG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJMT0dJTl9HUUwiLCJncWwiLCJtdXRhdGUiLCJtdXRhdGlvbiIsInRoZW4iLCJkYXRhIiwibG9naW4iLCJzZXQiLCJwYXRoIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaFNob3BzIiwiRkVUQ0hfU0hPUF9HUUwiLCJxdWVyeSIsInNob3AiLCJmZXRjaE1lbnVzIiwiaWQiLCJGRVRDSF9NRU5VX0dRTCIsImdldE1lbnUiLCJkZWxldGVNZW51IiwibWVudWlkIiwic2hvcGlkIiwiREVMRVRFX01FTlVfR1FMIiwiZGVsZXRlU2hvcCIsIkRFTEVURV9TSE9QX0dRTCIsImlkc2hvcCIsImFkZE5ld01lbnUiLCJtZW51X25hbWUiLCJBRERfTUVOVV9HUUwiLCJhZGRNZW51IiwibWVudSIsImNvbmZpcm0iLCJvcGVuIiwic25hY2siLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImFkZFNob3AiLCJzaG9wbmFtZSIsInNob3BhZGRyIiwic2hvcHBob25lIiwiQ1JFQVRFX1NIT1BfR1FMIiwiY3JlYXRlU2hvcCIsImZldGNoU2hvcERldGFpbCIsIkZFVENIX1NIT1BfREVUQUlMX0dRTCIsInVwZGF0ZVNob3BEZXRhaWwiLCJzaG9wX2FkZHIiLCJzaG9wX3Bob25lIiwic2hvcF9vcmRlciIsIlVQREFURV9TSE9QX0dRTCIsInVwZGF0ZVNob3AiLCJSRVNFVF9TSE9QX0RFVEFJTCIsIkZvb2QiLCJwcm9wcyIsIm9uRGVsZXRlIiwibGFiZWwiLCJrZXkiLCJzdHlsZXMiLCJjaGlwIiwibWFyZ2luIiwiZmxleCIsIkxPR0lOIiwiTE9HSU5fRkFJTCIsIkZFVENIX1NIT1AiLCJGRVRDSF9NRU5VIiwiREVMRVRFX01FTlUiLCJERUxFVEVfU0hPUCIsIkFERF9NRU5VIiwiQ09ORklSTSIsIlNOQUNLIiwiQUREX1NIT1AiLCJGRVRDSF9TSE9QX0RFVEFJTCIsIlVQREFURV9TSE9QX0RFVEFJTCIsIkNvbmZpcm0iLCJDb21wb25lbnQiLCJoYW5kbGVDbG9zZSIsImNsb3NlIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0IiwicmVuZGVyIiwidGl0bGUiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIlNuYWNrIiwiQXBwIiwic3R5bGUiLCJhcHAiLCJMb2dpbiIsIk1lbnVMaXN0IiwiRWRpdFNob3AiLCJNYWluIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInBhcGVyIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInNldFBhc3N3b3JkIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ3cmFwcGVyIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiQWRkTWVudSIsInNldE1lbnVfbmFtZSIsImFkZF9tZW51cyIsInNob3BfaWQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYnRuTGluZSIsImJ0bkVkaXQiLCJjb2xvciIsInRleHREZWNvcmF0aW9uTGluZSIsImJ0bkRlbGV0ZSIsInNldElEIiwibWF0Y2giLCJwYXJhbXMiLCJkZWxldGVfbWVudSIsInJlbmRlclBvc3RzIiwiXyIsIm1hcCIsIml0ZW0iLCJpZG1lbnUiLCJsZW5ndGgiLCJTaG9wTGlzdCIsInNob3BMaXN0IiwidXNlSGlzdG9yeSIsImRlbGV0ZV9zaG9wIiwicmVuZGVyU2hvcCIsInNob3BfbmFtZSIsIkFkZFNob3AiLCJzZXRTaG9wX25hbWUiLCJzZXRTaG9wX2FkZHIiLCJzZXRTaG9wX3Bob25lIiwiYWRkX3Nob3AiLCJoYW5kbGVBZGRyQ2hhbmdlIiwiaGFuZGxlUGhvbmVDaGFuZ2UiLCJidG4iLCJzZXRTaG9waWQiLCJzZXRTaG9wcF9uYW1lIiwic2V0U2hvcF9vcmRlciIsInNuYWNrX29wZW4iLCJzZXRTbmFja19vcGVuIiwic2hvcERldGFpbCIsImVkaXRfc2hvcF9hZGRyX1JFRiIsInVzZVJlZiIsImVkaXRfc2hvcF9waG9uZV9SRUYiLCJlZGl0X3Nob3Bfb3JkZXJfUkVGIiwiZWRpdF9zaG9wIiwiY3VycmVudCIsImJhY2tfc2hvcCIsImNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVN0b3JlIiwiaG9tZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsIiwiZmlsdGVyIiwieCIsIm1lbnVfaWQiLCJkZWxldGVJRCIsIm9iaiIsInJlc3VsdCIsImVsIiwidXBkYXRlZFNob3AiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE9BQU8sR0FBRyxJQUFJQyx1REFBSixFQUFoQjtBQUVBLE1BQU1DLEdBQUcsR0FBRyx5RUFBWjtBQUVBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFpQjtBQUMxQkYsS0FEMEI7QUFFMUJHLFNBQU8sRUFBR0MsU0FBRCxJQUFlO0FBQ3RCLFVBQU1DLEtBQUssR0FBR1AsT0FBTyxDQUFDUSxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdELEtBQUgsRUFBUztBQUNQRCxlQUFTLENBQUNHLFVBQVYs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YUFBT0csV0FBUDs7QUFDSjtBQUNJLGFBQU9yRyxLQUFQO0FBN0JSO0FBZ0NILEM7Ozs7Ozs7Ozs7OztBQ25DRDtBQUFBO0FBQUE7QUFFQSxNQUFNc0csWUFBWSxHQUFHO0FBQ2pCeEosTUFBSSxFQUFFLEtBRFc7QUFFakJFLFNBQU8sRUFBRTtBQUZRLENBQXJCO0FBSWUseUVBQVNnRCxLQUFLLEdBQUdzRyxZQUFqQixFQUErQlosTUFBL0IsRUFBc0M7QUFDcEQsVUFBT0EsTUFBTSxDQUFDdEssSUFBZDtBQUNDLFNBQUs4RCw0REFBTDtBQUNVLGFBQU87QUFDSHBDLFlBQUksRUFBRTRJLE1BQU0sQ0FBQ3BLLE9BQVAsQ0FBZXdCLElBRGxCO0FBRUhFLGVBQU8sRUFBRTBJLE1BQU0sQ0FBQ3BLLE9BQVAsQ0FBZTBCO0FBRnJCLE9BQVA7O0FBSUo7QUFDSSxhQUFPZ0QsS0FBUDtBQVBYO0FBVUEsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJ1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5cclxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XHJcblxyXG5jb25zdCB1cmkgPSAnaHR0cHM6Ly9lamxsM3lpcnhrLmV4ZWN1dGUtYXBpLmFwLXNvdXRoZWFzdC0yLmFtYXpvbmF3cy5jb20vZGV2L2dyYXBocWwnO1xyXG5cclxubGV0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpLFxyXG4gICAgcmVxdWVzdDogKG9wZXJhdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicpO1xyXG4gICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgb3BlcmF0aW9uLnNldENvbnRleHQoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IHRva2VuID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiBcIlNob3cgcGFnZSB3b3JraW5nICEgXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgY29uc3QgTE9HSU5fR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb24ge1xyXG4gICAgICAgIGxvZ2luKFxyXG4gICAgICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiJHt1c2VybmFtZX1cIixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIiR7cGFzc3dvcmR9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBMT0dJTl9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGlmKGRhdGEubG9naW4pe1xyXG4gICAgICAgICAgICBjb29raWVzLnNldCgndG9rZW4nLCBkYXRhLmxvZ2luLnRva2VuLCB7IHBhdGg6ICcvJyB9KTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLkxPR0lOLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5sb2dpbi50b2tlblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuTE9HSU5fRkFJTCxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IDFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5MT0dJTl9GQUlMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgY29uc3QgZmV0Y2hTaG9wcyA9ICgpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGNvbnN0IEZFVENIX1NIT1BfR1FMID0gZ3FsYFxyXG4gICAge1xyXG4gICAgICAgIHNob3B7XHJcbiAgICAgICAgICAgIGlkc2hvcFxyXG4gICAgICAgICAgICBzaG9wX2FkZHJcclxuICAgICAgICAgICAgc2hvcF9uYW1lXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXJcclxuICAgICAgICAgICAgc2hvcF9waG9uZVxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBGRVRDSF9TSE9QX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5GRVRDSF9TSE9QLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLnNob3BcclxuICAgICAgICB9KTsgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaE1lbnVzID0gKGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgY29uc3QgRkVUQ0hfTUVOVV9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbntcclxuICAgICAgICBnZXRNZW51KFxyXG4gICAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgICAgICBzaG9wX2lkOiAke2lkfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgaWRtZW51XHJcbiAgICAgICAgICAgIG1lbnVfbmFtZVxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogRkVUQ0hfTUVOVV9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuRkVUQ0hfTUVOVSxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5nZXRNZW51XHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlTWVudSA9IChtZW51aWQsIHNob3BpZCkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgY29uc3QgREVMRVRFX01FTlVfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgZGVsZXRlTWVudShcclxuICAgICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgbWVudV9pZDogJHttZW51aWR9LFxyXG4gICAgICAgICAgICBzaG9wX2lkOiAke3Nob3BpZH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBtZW51X2lkXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBERUxFVEVfTUVOVV9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX01FTlUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEuZGVsZXRlTWVudVxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNob3AgPSAoc2hvcGlkKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBjb25zdCBERUxFVEVfU0hPUF9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbntcclxuICAgICAgICBkZWxldGVTaG9wKFxyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWRzaG9wOiAke3Nob3BpZH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApe1xyXG4gICAgICAgICAgaWRzaG9wXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBERUxFVEVfU0hPUF9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX1NIT1AsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEuZGVsZXRlU2hvcC5pZHNob3BcclxuICAgICAgICB9KTsgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdNZW51ID0gKHNob3BpZCwgbWVudV9uYW1lKSA9PiBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgY29uc3QgQUREX01FTlVfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgYWRkTWVudShcclxuICAgICAgICBkYXRhOntcclxuICAgICAgICAgIG1lbnVfbmFtZTogXCIke21lbnVfbmFtZX1cIixcclxuICAgICAgICAgIGlkc2hvcDogJHtzaG9waWR9XHJcbiAgICAgICAgfVxyXG4gICAgICApe1xyXG4gICAgICAgICAgbWVudXtcclxuICAgICAgICAgICAgaWRtZW51XHJcbiAgICAgICAgICAgIG1lbnVfbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IEFERF9NRU5VX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfTUVOVSxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5hZGRNZW51Lm1lbnVcclxuICAgICAgICB9KTsgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlybSA9IChvcGVuKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuQ09ORklSTSxcclxuICAgICAgICBwYXlsb2FkOiBvcGVuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNuYWNrID0gKG9wZW4sIG1lc3NhZ2UpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5TTkFDSyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIG9wZW4sXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuU05BQ0ssXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAzMDAwXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkU2hvcCA9IChzaG9wbmFtZSwgc2hvcGFkZHIsIHNob3BwaG9uZSkgPT4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgY29uc3QgQ1JFQVRFX1NIT1BfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgY3JlYXRlU2hvcChcclxuICAgICAgICAgIGRhdGEgOntcclxuICAgICAgICAgICAgc2hvcF9hZGRyOiBcIiR7c2hvcGFkZHJ9XCIsXHJcbiAgICAgICAgICAgIHNob3BfbmFtZTogXCIke3Nob3BuYW1lfVwiLFxyXG4gICAgICAgICAgICBzaG9wX29yZGVyOiA1LFxyXG4gICAgICAgICAgICBzaG9wX3Bob25lOiBcIiR7c2hvcHBob25lfVwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgaWRzaG9wXHJcbiAgICAgICAgICAgIHNob3BfYWRkclxyXG4gICAgICAgICAgICBzaG9wX25hbWVcclxuICAgICAgICAgICAgc2hvcF9vcmRlclxyXG4gICAgICAgICAgICBzaG9wX3Bob25lXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBDUkVBVEVfU0hPUF9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuQUREX1NIT1AsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEuY3JlYXRlU2hvcFxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoU2hvcERldGFpbCA9IChzaG9waWQpID0+IGRpc3BhdGNoID0+IHtcclxuICAgIGNvbnN0IEZFVENIX1NIT1BfREVUQUlMX0dRTCA9IGdxbGBcclxuICAgIHtcclxuICAgICAgICBzaG9wKFxyXG4gICAgICAgICAgICBpZHNob3A6ICR7c2hvcGlkfVxyXG4gICAgICAgICksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaG9wX2FkZHJcclxuICAgICAgICAgICAgc2hvcF9uYW1lXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXJcclxuICAgICAgICAgICAgc2hvcF9waG9uZVxyXG4gICAgICAgICAgICBpZHNob3BcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRkVUQ0hfU0hPUF9ERVRBSUxfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkZFVENIX1NIT1BfREVUQUlMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLnNob3BbMF1cclxuICAgICAgICB9KTsgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTaG9wRGV0YWlsID0gKHNob3BpZCwgc2hvcF9hZGRyLCBzaG9wX3Bob25lLCBzaG9wX29yZGVyKSA9PiBkaXNwYXRjaCA9PiB7XHJcbiAgICBjb25zdCBVUERBVEVfU0hPUF9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbntcclxuICAgICAgICB1cGRhdGVTaG9wKFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHNob3BfYWRkcjogXCIke3Nob3BfYWRkcn1cIixcclxuICAgICAgICAgICAgc2hvcF9waG9uZTogXCIke3Nob3BfcGhvbmV9XCIsXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXI6ICR7c2hvcF9vcmRlcn1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgIGlkc2hvcDogJHtzaG9waWR9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgaWRzaG9wXHJcbiAgICAgICAgICAgIHNob3BfbmFtZVxyXG4gICAgICAgICAgICBzaG9wX2FkZHJcclxuICAgICAgICAgICAgc2hvcF9waG9uZVxyXG4gICAgICAgICAgICBzaG9wX29yZGVyXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBVUERBVEVfU0hPUF9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogdHlwZXMuVVBEQVRFX1NIT1BfREVUQUlMLCBwYXlsb2FkOiBkYXRhLnVwZGF0ZVNob3AgfSlcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlJFU0VUX1NIT1BfREVUQUlMIH0pXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoaXAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5jb25zdCBGb29kID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IG9uRGVsZXRlLCBsYWJlbCwga2V5IH0gPSBwcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENoaXBcclxuICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlfVxyXG4gICAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuY2hpcH1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgY2hpcDoge1xyXG4gICAgICBtYXJnaW46IDQsXHJcbiAgICAgIGZsZXg6IDEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb2Q7IiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgcmV0dXJuIFwiU2hvdyBwYWdlIHdvcmtpbmcgISBcIjtcclxufVxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSAnTE9HSU4nO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9ICdMT0dJTl9GQUlMJztcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NIT1AgPSAnRkVUQ0hfU0hPUCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9NRU5VID0gJ0ZFVENIX01FTlUnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX01FTlUgPSAnREVMRVRFX01FTlUnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1NIT1AgPSAnREVMRVRFX1NIT1AnO1xyXG5leHBvcnQgY29uc3QgQUREX01FTlUgPSAnQUREX01FTlUnO1xyXG5leHBvcnQgY29uc3QgQ09ORklSTSA9ICdDT05GSVJNJztcclxuZXhwb3J0IGNvbnN0IFNOQUNLID0gJ1NOQUNLJztcclxuZXhwb3J0IGNvbnN0IEFERF9TSE9QID0gJ0FERF9TSE9QOydcclxuZXhwb3J0IGNvbnN0IEZFVENIX1NIT1BfREVUQUlMID0gJ0ZFVENIX1NIT1BfREVUQUlMJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9TSE9QX0RFVEFJTCA9ICdVUERBVEVfU0hPUF9ERVRBSUwnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfU0hPUF9ERVRBSUwgPSAnUkVTRVRfU0hPUF9ERVRBSUwnOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25maXJtIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQWN0aW9ucywgRGlhbG9nVGl0bGUsIERpYWxvZ0NvbnRlbnQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBDb25maXJtIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgaGFuZGxlQ2xvc2UoKXtcclxuICAgICAgICB0aGlzLnByb3BzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVTdWJtaXQoKXtcclxuICAgICAgICB0aGlzLnByb3BzLnN1Ym1pdCgpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gdGhpcy5oYW5kbGVDbG9zZSgpfSBcclxuICAgICAgICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMuY29uZmlybX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbmZpcm0tZGlhbG9nLXRpdGxlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1RpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8RGlhbG9nQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVN1Ym1pdCgpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBjb25maXJtOiBzdGF0ZS5jb25maXJtXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChjb25maXJtKGZhbHNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25maXJtID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29uZmlybSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpcm0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc25hY2sgfSBmcm9tICcuLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgU25hY2tiYXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jbGFzcyBTbmFjayBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLnNuYWNrfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZT17dGhpcy5wcm9wcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBzbmFjazogc3RhdGUuc25hY2sub3BlbixcclxuICAgIG1lc3NhZ2U6IHN0YXRlLnNuYWNrLm1lc3NhZ2VcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsb3NlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKGZhbHNlLCAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuU25hY2sgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTbmFjaylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNuYWNrIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IE1haW4gZnJvbSAnLi9zaG9wL01haW4nO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tICcuL21lbnUvbWVudUxpc3QnO1xyXG5pbXBvcnQgRWRpdFNob3AgZnJvbSAnLi9zaG9wL2VkaXRTaG9wJztcclxuXHJcbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIiBzdHlsZT17c3R5bGUuYXBwfT5cclxuICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWVudS86aWRcIiBjb21wb25lbnQ9e01lbnVMaXN0fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZWRpdC86aWRcIiBjb21wb25lbnQ9e0VkaXRTaG9wfSAvPlxyXG4gICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuXHJcbi8qKiBcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiIHN0eWxlPXtzdHlsZS5hcHB9PlxyXG4gICAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tZW51LzppZFwiIGNvbXBvbmVudD17TWVudUxpc3R9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXQvOmlkXCIgY29tcG9uZW50PXtFZGl0U2hvcH0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWlufSAvPlxyXG4gICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiovXHJcbmNvbnN0IHN0eWxlPXtcclxuICBhcHA6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgcGFkZGluZzogMTBcclxuICB9XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCB7IHVzZXJMb2dpbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIHBhcGVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogMjBcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubG9naW4pO1xyXG4gICAgY29uc3QgZXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5lcnJvcik7XHJcblxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHsgc3VjY2VzcyB9ID0gbG9naW47XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSBwcm9wcztcclxuICAgICAgICBpZiggc3VjY2VzcyApXHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfSlcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGlzcGF0Y2godXNlckxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCkpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2V0VmFsdWUgPSAodHlwZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICBpZih0eXBlID09PSAndXNlcm5hbWUnKXtcclxuICAgICAgICAgICAgc2V0VXNlcm5hbWUobmV3VmFsdWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKG5ld1ZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGUucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRWYWx1ZSgndXNlcm5hbWUnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlKCdwYXNzd29yZCcsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpbi5lcnJvciA9PT0gMSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+SW52YWxpZCBsb2dpbiBkZXRhaWw8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgICAgICAgIGxvZ2luOiAwLFxyXG4gICAgICAgICAgICBlcnJvcjogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSA9IHRoaXMuc2V0VmFsdWUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XHJcbiAgICAgICAgY29uc3QgeyBzdWNjZXNzIH0gPSBuZXh0UHJvcHMubG9naW47XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGlmKCBzdWNjZXNzIClcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDbGljayhlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyB1c2VyTG9naW4gfSA9IHRoaXMucHJvcHM7IFxyXG4gICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICB1c2VyTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHNldFZhbHVlKHR5cGUsIG5ld1ZhbHVlKXtcclxuICAgICAgICBpZih0eXBlID09PSAndXNlcm5hbWUnKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJuYW1lOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5wcm9wcy5sb2dpbjtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZS5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0VmFsdWUoJ3VzZXJuYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRWYWx1ZSgncGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID09PSAxICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5JbnZhbGlkIGxvZ2luIGRldGFpbDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIGxvZ2luOiBzdGF0ZS5sb2dpbixcclxuICAgIGVycm9yOiBzdGF0ZS5lcnJvclxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlckxvZ2luOiAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkxvZ2luID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW4pXHJcbioqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW4iLCJcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU25hY2sgZnJvbSAnLi4vLi4vY29uc3RhbnRzL1NuYWNrJztcclxuXHJcbmltcG9ydCB7IGFkZE5ld01lbnUsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd3JhcHBlcjoge1xyXG4gIFx0aGVpZ2h0OiAnMzBweCcsXHJcbiAgICBtYXJnaW46ICcyMHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOjQsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgQWRkTWVudSA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IFttZW51X25hbWUsIHNldE1lbnVfbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0XHJcblx0Y29uc3QgbWVudSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm1lbnUpO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0Y29uc3QgYWRkX21lbnVzID0gKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goYWRkTmV3TWVudShwcm9wcy5zaG9wX2lkLCBtZW51X25hbWUpKTtcclxuXHRcdGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg66mU64m06rCAIOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuXHRcdHNldE1lbnVfbmFtZSgnJyk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0c2V0TWVudV9uYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRpZD1cImFkZF9tZW51X3RleHRcIiBcclxuXHRcdFx0XHR2YWx1ZT17bWVudV9uYW1lfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGhhbmRsZU5hbWVDaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuXHRcdFx0XHRcdFx0YWRkX21lbnVzKGV2ZW50KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH19XHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8YnV0dG9uIGxhYmVsPVwiQUREXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IGFkZF9tZW51cyhlKX0+XHJcblx0XHRcdFx0QUREXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8U25hY2sgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKlxyXG5jbGFzcyBBZGRNZW51IGV4dGVuZHMgQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRtZW51X25hbWU6ICcnXHJcblx0XHR9O1xyXG5cdH1cclxuXHRhZGRfbWVudXMoKXtcclxuXHRcdHRoaXMucHJvcHMuYWRkX21lbnVzKHRoaXMucHJvcHMuc2hvcF9pZCwgdGhpcy5zdGF0ZS5tZW51X25hbWUpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdG1lbnVfbmFtZTogJycsXHJcblx0XHR9KTtcclxuXHR9XHJcblx0aGFuZGxlTmFtZUNoYW5nZShldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyBtZW51X25hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuXHR9O1xyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0aWQ9XCJhZGRfbWVudV90ZXh0XCIgXHJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5tZW51X25hbWV9IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0b25LZXlQcmVzcz17ZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hZGRfbWVudXMoZXZlbnQpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8YnV0dG9uIGxhYmVsPVwiQUREXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IHRoaXMuYWRkX21lbnVzKGUpfT5cclxuICAgICAgICAgICAgICAgICAgICBBRERcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFNuYWNrIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkX21lbnVzOiAoaWQsIG5hbWUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkTmV3TWVudShpZCwgbmFtZSkpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzbmFjayh0cnVlLCAn7IOI66Gc7Jq0IOuplOuJtOqwgCDstpTqsIDrkJjsl4jsirXri4jri6QuJykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5BZGRNZW51ID0gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZE1lbnUpXHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkTWVudVxyXG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IGZldGNoTWVudXMsIGRlbGV0ZU1lbnUsIGRlbGV0ZVNob3AsIGNvbmZpcm0gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuXHJcbmltcG9ydCBBZGRNZW51IGZyb20gJy4vYWRkTWVudSc7XHJcbmltcG9ydCBGb29kIGZyb20gJy4uLy4uL2NvbXBvbmVudC9Gb29kJztcclxuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0NvbmZpcm0nO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nLCBGbGF0QnV0dG9uLCBSYWlzZWRCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbi8vaW1wb3J0IFRpdGxlTWVudSBmcm9tICcuLi90b3BfbWVudS9tZW51cyc7XHJcbi8vaW1wb3J0IEFkZF9NZW51IGZyb20gJy4vYWRkX21lbnUnO1xyXG5cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB3cmFwcGVyOiB7XHJcbiAgXHRkaXNwbGF5OiAnZmxleCcsXHJcbiAgXHRmbGV4V3JhcDogJ3dyYXAnXHJcbiAgfSxcclxuICBidG5MaW5lOiB7XHJcbiAgXHRtYXJnaW46ICcxMHB4IDBweCAzMHB4J1xyXG4gIH0sXHJcbiAgYnRuRWRpdDoge1xyXG4gIFx0cGFkZGluZzogJzEwcHgnLFxyXG4gICAgYm9yZGVyOiAnMCcsXHJcbiAgICBtYXJnaW46ICcxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJmYicsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6ICdub25lJ1xyXG4gIH0sXHJcbiAgYnRuRGVsZXRlOiB7XHJcbiAgXHRwYWRkaW5nOiAnMTBweCcsXHJcbiAgICBib3JkZXI6ICcwJyxcclxuICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJiJyxcclxuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgTWVudUxpc3QgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IG1lbnUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tZW51KTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkaXNwYXRjaChmZXRjaE1lbnVzKHByb3BzLm1hdGNoLnBhcmFtcy5pZCkpO1xyXG5cdH0sW10pXHJcblxyXG5cdGNvbnN0IGRlbGV0ZV9tZW51ID0gKGlkKSA9PiB7XHJcblx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKVxyXG5cdFx0c2V0SUQoaWQpXHJcblx0fVxyXG5cdGNvbnN0IHJlbmRlclBvc3RzID0gKCkgPT4ge1xyXG5cdFx0cmV0dXJuIF8ubWFwKG1lbnUsIGl0ZW0gPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRrZXk9e2l0ZW0uaWRtZW51fVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxGb29kXHJcblx0XHRcdFx0XHRcdG9uRGVsZXRlPXsoKSA9PiBkZWxldGVfbWVudShpdGVtLmlkbWVudSl9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLm1lbnVfbmFtZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiByZW5kZXJQb3N0cygpfVxyXG5cdFx0XHQ8QWRkTWVudSBzaG9wX2lkPXtwcm9wcy5tYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdDxDb25maXJtXHJcblx0XHRcdFx0c3VibWl0PXsoKSA9PiBkaXNwYXRjaChkZWxldGVNZW51KGlkLCBwcm9wcy5tYXRjaC5wYXJhbXMuaWQpKX1cclxuXHRcdFx0XHR0aXRsZT1cIkFyZSB5b3Ugc3VyZSB0byBkZWxldGU/XCJcclxuXHRcdFx0Lz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0O1xyXG5cclxuLyoqIFxyXG5jbGFzcyBNZW51TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpZCA6IDBcclxuXHRcdH1cclxuXHR9XHJcblx0VU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpe1xyXG5cdFx0dGhpcy5wcm9wcy5mZXRjaF9tZW51cyh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XHJcblx0fVxyXG5cdGRlbGV0ZV9tZW51KGlkKXtcclxuXHRcdHRoaXMucHJvcHMub3BlbigpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGlkXHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVuZGVyUG9zdHMoKXtcclxuXHRcdGNvbnN0IHsgbWVudSB9ID0gdGhpcy5wcm9wcztcclxuXHJcblx0XHRyZXR1cm4gXy5tYXAobWVudSwgaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGtleT17aXRlbS5pZG1lbnV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZvb2RcclxuXHRcdFx0XHRcdFx0b25EZWxldGU9eygpID0+IHRoaXMuZGVsZXRlX21lbnUoaXRlbS5pZG1lbnUpfVxyXG5cdFx0XHRcdFx0XHRsYWJlbD17aXRlbS5tZW51X25hbWV9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdGNvbnN0IHsgbWVudSB9ID0gdGhpcy5wcm9wcztcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHR7IG1lbnUubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlclBvc3RzKCl9XHJcblx0XHRcdFx0PEFkZE1lbnUgc2hvcF9pZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9IC8+XHJcblx0XHRcdFx0PENvbmZpcm1cclxuXHRcdFx0XHRcdHN1Ym1pdD17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVNZW51KHRoaXMuc3RhdGUuaWQsIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKX1cclxuXHRcdFx0XHRcdHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9O1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVudTogc3RhdGUubWVudVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hfbWVudXM6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lbnVzKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVNZW51OiAobWVudWlkLCBzaG9waWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlTWVudShtZW51aWQsIHNob3BpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVTaG9wKCkpO1xyXG5cdFx0fSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcbk1lbnVMaXN0ID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVudUxpc3QpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51TGlzdFxyXG4qLyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCBTaG9wTGlzdCBmcm9tICcuL1Nob3BMaXN0JztcclxuXHJcbmNvbnN0IE1haW4gPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxvZ2luKTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB7IGhpc3RvcnkgfSA9IHByb3BzO1xyXG5cclxuICAgICAgICBpZighbG9naW4uc3VjY2VzcylcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U2hvcExpc3QgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKiBcclxuY2xhc3MgTWFpbiBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIFVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnksIGxvZ2luIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZighbG9naW4uc3VjY2VzcylcclxuICAgICAgICAgICAgaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxTaG9wTGlzdCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbG9naW46IHN0YXRlLmxvZ2luXHJcbn0pO1xyXG5cclxuTWFpbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBudWxsKShNYWluKVxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBNYWluIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBmZXRjaFNob3BzLCBkZWxldGVTaG9wLCBjb25maXJtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtVGV4dCwgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBBZGRTaG9wIGZyb20gJy4vYWRkU2hvcCc7XHJcbmltcG9ydCBDb25maXJtIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db25maXJtJztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuY29uc3QgU2hvcExpc3QgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3Qgc2hvcExpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaG9wTGlzdCk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmKHNob3BMaXN0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICBkaXNwYXRjaChmZXRjaFNob3BzKCkpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgZGVsZXRlX3Nob3AgPSAoaWQpID0+IHtcclxuXHRcdGRpc3BhdGNoKGNvbmZpcm0odHJ1ZSkpO1xyXG5cdFx0c2V0SUQoaWQpXHJcblx0fVxyXG4gICAgY29uc3QgcmVuZGVyU2hvcCA9IChzaG9wTGlzdCkgPT4ge1xyXG4gICAgICAgIGlmKCFzaG9wTGlzdC5sZW5ndGgpIHJldHVybiBudWxsO1xyXG5cdFx0cmV0dXJuIF8ubWFwKHNob3BMaXN0LCBzaG9wID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtzaG9wLmlkc2hvcH0gY29tcG9uZW50PVwiYVwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL21lbnUvJyArIHNob3AuaWRzaG9wKSB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Nob3Auc2hvcF9uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2VkaXQvJytzaG9wLmlkc2hvcCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlX3Nob3Aoc2hvcC5pZHNob3ApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG9wTGlzdC5sZW5ndGggPT09IDAgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvcExpc3QubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlclNob3Aoc2hvcExpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8QWRkU2hvcC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0PXsoKSA9PiBkaXNwYXRjaChkZWxldGVTaG9wKGlkKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG4vKiogXHJcbmNsYXNzIFNob3BMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRpZCA6IDBcclxuXHRcdH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgaWYodGhpcy5wcm9wcy5zaG9wTGlzdC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZ2V0U2hvcExpc3QoKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZV9zaG9wKGlkKXtcclxuXHRcdHRoaXMucHJvcHMub3BlbigpO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGlkXHJcblx0XHR9KTtcclxuXHR9XHJcbiAgICByZW5kZXJTaG9wKHNob3BMaXN0KXtcclxuXHJcbiAgICAgICAgaWYoIXNob3BMaXN0Lmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblx0XHRyZXR1cm4gXy5tYXAoc2hvcExpc3QsIHNob3AgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3Nob3AuaWRzaG9wfSBjb21wb25lbnQ9XCJhXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9tZW51LycgKyBzaG9wLmlkc2hvcCkgfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtzaG9wLnNob3BfbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2VkaXQvJytzaG9wLmlkc2hvcCkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVfc2hvcChzaG9wLmlkc2hvcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3BMaXN0IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BMaXN0Lmxlbmd0aCA9PT0gMCAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG9wTGlzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJTaG9wKHNob3BMaXN0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkU2hvcC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb25maXJtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ9eygpID0+IHRoaXMucHJvcHMuZGVsZXRlU2hvcCh0aGlzLnN0YXRlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZT9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgc2hvcExpc3Q6IHN0YXRlLnNob3BMaXN0XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTaG9wTGlzdDogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFNob3BzKCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlU2hvcDogKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNob3AoaWQpKVxyXG4gICAgICAgIH0sXHJcblx0XHRvcGVuOiAoKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKGNvbmZpcm0odHJ1ZSkpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG59XHJcblxyXG5TaG9wTGlzdCA9IHdpdGhSb3V0ZXIoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU2hvcExpc3QpKVxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBTaG9wTGlzdCIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7IGFkZFNob3AsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi8uLi9jb25zdGFudHMvU25hY2snO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdyYXBwZXI6IHtcclxuICBcdGhlaWdodDogJzMwcHgnLFxyXG4gICAgbWFyZ2luOiAnMjBweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czo0LFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IEFkZFNob3AgPSAocHJvcHMpID0+IHtcclxuXHRjb25zdCBbc2hvcF9uYW1lLCBzZXRTaG9wX25hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtzaG9wX2FkZHIsIHNldFNob3BfYWRkcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3Nob3BfcGhvbmUsIHNldFNob3BfcGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHRjb25zdCBtZW51ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubWVudSk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHR9LFtdKVxyXG5cclxuXHRjb25zdCBhZGRfc2hvcCA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGFkZFNob3Aoc2hvcF9uYW1lLCBzaG9wX2FkZHIsIHNob3BfcGhvbmUpKTtcclxuXHRcdGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg7Iud64u57J20IOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuXHJcblx0XHRzZXRTaG9wX25hbWUoJycpO1xyXG5cdFx0c2V0U2hvcF9hZGRyKCcnKTtcclxuXHRcdHNldFNob3BfcGhvbmUoJycpO1xyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX25hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlQWRkckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0U2hvcF9hZGRyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZVBob25lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX3Bob25lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0bmFtZT1cImFkZF9zaG9wX3RleHRcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9uYW1lfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gXHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwi7Iud64u5IOydtOumhFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9hZGRyXCIgXHJcblx0XHRcdFx0dmFsdWU9e3Nob3BfYWRkcn0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUFkZHJDaGFuZ2V9IFxyXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXMud3JhcHBlcn1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfcGhvbmVcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9waG9uZX0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZVBob25lQ2hhbmdlfSBcclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGJ1dHRvbiBsYWJlbD1cIkFERFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiBhZGRfc2hvcChlKX0+XHJcblx0XHRcdFx0QUREXHJcblx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8U25hY2sgLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn1cclxuXHJcbi8qKiBcclxuY2xhc3MgQWRkU2hvcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c2hvcF9uYW1lOiAnJyxcclxuXHRcdFx0c2hvcF9hZGRyOiAnJyxcclxuICAgICAgICAgICAgc2hvcF9waG9uZTogJydcclxuICAgICAgICB9O1xyXG5cdFx0dGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZUFkZHJDaGFuZ2UgPSB0aGlzLmhhbmRsZUFkZHJDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlUGhvbmVDaGFuZ2UgPSB0aGlzLmhhbmRsZVBob25lQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmFkZF9zaG9wID0gdGhpcy5hZGRfc2hvcC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRhZGRfc2hvcCgpe1xyXG5cdFx0dGhpcy5wcm9wcy5hZGRTaG9wKHRoaXMuc3RhdGUuc2hvcF9uYW1lLCB0aGlzLnN0YXRlLnNob3BfYWRkciwgdGhpcy5zdGF0ZS5zaG9wX3Bob25lKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0c2hvcF9uYW1lOiAnJyxcclxuXHRcdFx0c2hvcF9hZGRyOiAnJyxcclxuXHRcdFx0c2hvcF9waG9uZTogJycsXHJcblx0XHR9KTtcclxuXHR9XHJcblx0aGFuZGxlTmFtZUNoYW5nZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvcF9uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblx0fVxyXG5cdGhhbmRsZUFkZHJDaGFuZ2UoZXZlbnQpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3BfYWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG5cdH1cclxuXHRoYW5kbGVQaG9uZUNoYW5nZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvcF9waG9uZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF90ZXh0XCIgXHJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zaG9wX25hbWV9IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gXHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDsnbTrpoRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9hZGRyXCIgXHJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zaG9wX2FkZHJ9IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQWRkckNoYW5nZX0gXHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9waG9uZVwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2hvcF9waG9uZX0gXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVQaG9uZUNoYW5nZX0gXHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDsl7Drnb3ssphcIlxyXG5cdFx0XHRcdC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiQUREXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IHRoaXMuYWRkX3Nob3AoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFERFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdFx0PFNuYWNrIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkU2hvcDogKG5hbWUsIGFkZHIsIHBob25lKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZFNob3AobmFtZSwgYWRkciwgcGhvbmUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDsi53ri7nsnbQg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQWRkU2hvcCA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRTaG9wKVxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBBZGRTaG9wIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBmZXRjaFNob3BEZXRhaWwsIHVwZGF0ZVNob3BEZXRhaWwsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi8uLi9jb25zdGFudHMvU25hY2snO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBidG46IHtcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IEVkaXRTaG9wID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2hvcGlkLCBzZXRTaG9waWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3BfbmFtZSwgc2V0U2hvcHBfbmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2hvcF9hZGRyLCBzZXRTaG9wX2FkZHJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3BfcGhvbmUsIHNldFNob3BfcGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Nob3Bfb3JkZXIsIHNldFNob3Bfb3JkZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NuYWNrX29wZW4sIHNldFNuYWNrX29wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgICBjb25zdCBzaG9wRGV0YWlsID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2hvcERldGFpbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBlZGl0X3Nob3BfYWRkcl9SRUYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBlZGl0X3Nob3BfcGhvbmVfUkVGID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZWRpdF9zaG9wX29yZGVyX1JFRiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKGZldGNoU2hvcERldGFpbChwcm9wcy5tYXRjaC5wYXJhbXMuaWQpKTtcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIGNvbnN0IGVkaXRfc2hvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNob3BEZXRhaWwocHJvcHMubWF0Y2gucGFyYW1zLmlkLCBlZGl0X3Nob3BfYWRkcl9SRUYuY3VycmVudC52YWx1ZSwgZWRpdF9zaG9wX3Bob25lX1JFRi5jdXJyZW50LnZhbHVlLCBlZGl0X3Nob3Bfb3JkZXJfUkVGLmN1cnJlbnQudmFsdWUpKTtcclxuICAgICAgICBkaXNwYXRjaChzbmFjayh0cnVlLCAn7KCV67O06rCAIOyXheuNsOydtO2KuCDrkJjsl4jsirXri4jri6QuJykpXHJcblxyXG4gICAgICAgIC8qKiBcclxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3BEZXRhaWwoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICB0aGlzLmVkaXRfc2hvcF9hZGRyLnZhbHVlLFxyXG4gICAgICAgICAgICB0aGlzLmVkaXRfc2hvcF9waG9uZS52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5lZGl0X3Nob3Bfb3JkZXIudmFsdWVcclxuICAgICAgICApOyovXHJcbiAgICB9XHJcbiAgICBjb25zdCBiYWNrX3Nob3AgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFzaG9wRGV0YWlsICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtzaG9wRGV0YWlsICYmXHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3BfYWRkclwiPlNob3AgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9hZGRyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX2FkZHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0X3Nob3BfYWRkcl9SRUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX2FkZHIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3BfcGhvbmVcIj5TaG9wIFBob25lIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRfc2hvcF9waG9uZV9SRUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9waG9uZSB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iud64u5IOyXsOudveyymFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9vcmRlclwiPlNob3AgT3JkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3Bfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3Bfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlZGl0X3Nob3Bfb3JkZXJfUkVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3Bfb3JkZXIgfHwgNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyInOyEnFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGVkaXRfc2hvcChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGJhY2tfc2hvcChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDrqZTsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNuYWNrIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qXHJcbmNsYXNzIEVkaXRTaG9wIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG9waWQ6ICcnLFxyXG4gICAgICAgICAgICBzaG9wX25hbWU6ICcnLFxyXG4gICAgICAgICAgICBzaG9wX2FkZHI6ICcnLFxyXG4gICAgICAgICAgICBzaG9wX3Bob25lOiAnJyxcclxuICAgICAgICAgICAgc2hvcF9vcmRlcjogJycsXHJcbiAgICAgICAgICAgIHNuYWNrX29wZW46IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICB0aGlzLnByb3BzLmZldGNoU2hvcERldGFpbCh0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCk7XHJcbiAgICB9XHJcbiAgICBlZGl0X3Nob3AoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3BEZXRhaWwoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkLFxyXG4gICAgICAgICAgICB0aGlzLmVkaXRfc2hvcF9hZGRyLnZhbHVlLFxyXG4gICAgICAgICAgICB0aGlzLmVkaXRfc2hvcF9waG9uZS52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5lZGl0X3Nob3Bfb3JkZXIudmFsdWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgYmFja19zaG9wKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3BEZXRhaWwgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgIXNob3BEZXRhaWwgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7c2hvcERldGFpbCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX2FkZHJcIj5TaG9wIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3BfYWRkclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3BfYWRkclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuZWRpdF9zaG9wX2FkZHIgPSBpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9hZGRyIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iud64u5IOyjvOyGjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX3Bob25lXCI+U2hvcCBQaG9uZSBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGl0X3Nob3BfcGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuZWRpdF9zaG9wX3Bob25lID0gaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3BfcGhvbmUgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlZGl0X3Nob3Bfb3JkZXJcIj5TaG9wIE9yZGVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX29yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLmVkaXRfc2hvcF9vcmRlciA9IGlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX29yZGVyIHx8IDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyInOyEnFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmVkaXRfc2hvcChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMuYmFja19zaG9wKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnRufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuplOyduFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U25hY2sgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBzaG9wRGV0YWlsOiBzdGF0ZS5zaG9wRGV0YWlsXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaFNob3BEZXRhaWw6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaFNob3BEZXRhaWwoaWQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVNob3BEZXRhaWw6IChpZCwgYWRkciwgcGhvbmUsIG9yZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNob3BEZXRhaWwoaWQsIGFkZHIsIHBob25lLCBvcmRlcikpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzbmFjayh0cnVlLCAn7KCV67O06rCAIOyXheuNsOydtO2KuCDrkJjsl4jsirXri4jri6QuJykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5FZGl0U2hvcCA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRTaG9wKVxyXG4qKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRTaG9wIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29udGFpbmVyL2FwcCc7XHJcbmltcG9ydCByZWR1Y2VycyBmcm9tICcuL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspKGNyZWF0ZVN0b3JlKTtcclxuXHJcbmNvbnN0IGhvbWUgPSAoKSA9PiA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUocmVkdWNlcnMpfT5cclxuPEFwcCAvPlxyXG48L1Byb3ZpZGVyPjtcclxuZXhwb3J0IGRlZmF1bHQgaG9tZTtcclxuIiwiaW1wb3J0IHsgQ09ORklSTSB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGZhbHNlLCBhY3Rpb24pe1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblx0XHRjYXNlIENPTkZJUk06XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgXHJcblx0fVxyXG59IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgbG9naW4gZnJvbSAnLi9sb2dpbic7XHJcbmltcG9ydCBzaG9wTGlzdCBmcm9tICcuL3Nob3BMaXN0JztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IGNvbmZpcm0gZnJvbSAnLi9jb25maXJtJztcclxuaW1wb3J0IHNuYWNrIGZyb20gJy4vc25hY2snO1xyXG5pbXBvcnQgc2hvcERldGFpbCBmcm9tICcuL3Nob3BEZXRhaWwnO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGxvZ2luLFxyXG4gIHNob3BMaXN0LFxyXG4gIG1lbnUsXHJcbiAgY29uZmlybSxcclxuICBzbmFjayxcclxuICBzaG9wRGV0YWlsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCB7IExPR0lOLCBMT0dJTl9GQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWwgPSB7XHJcbiAgICBzdWNjZXNzIDogMCxcclxuICAgIGVycm9yOiAwLFxyXG4gICAgdG9rZW46IG51bGxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbCwgYWN0aW9uKXtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSBMT0dJTjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IDEsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogMCxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HSU5fRkFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IDAsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogMSxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgXHJcblx0fVxyXG59IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IEZFVENIX01FTlUsIERFTEVURV9NRU5VLCBBRERfTUVOVSB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IFtdLCBhY3Rpb24pe1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblx0XHRjYXNlIEZFVENIX01FTlU6XHJcblx0XHRcdHJldHVybiBbLi4uYWN0aW9uLnBheWxvYWRdO1xyXG5cdFx0Y2FzZSBERUxFVEVfTUVOVTpcclxuXHRcdFx0cmV0dXJuIF8uZmlsdGVyKHN0YXRlLCAoeCkgPT4geyBcclxuXHRcdFx0XHRyZXR1cm4geC5pZG1lbnUgIT09IGFjdGlvbi5wYXlsb2FkLm1lbnVfaWQ7IFxyXG5cdFx0XHR9KTtcclxuXHRcdGNhc2UgQUREX01FTlU6XHJcblx0XHRcdHJldHVybiBbXHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0YWN0aW9uLnBheWxvYWRcclxuXHRcdFx0XVxyXG5cdH1cclxuXHRyZXR1cm4gc3RhdGU7XHJcbn0iLCJpbXBvcnQgeyBGRVRDSF9TSE9QX0RFVEFJTCwgUkVTRVRfU0hPUF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gW10sIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0hPUF9ERVRBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjYXNlIFJFU0VUX1NIT1BfREVUQUlMOlxyXG4gICAgICAgICAgICByZXR1cm4gW11cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRkVUQ0hfU0hPUCwgQUREX1NIT1AsIERFTEVURV9TSE9QLCBVUERBVEVfU0hPUF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gW10sIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgRkVUQ0hfU0hPUDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgY2FzZSBBRERfU0hPUDpcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIGNhc2UgREVMRVRFX1NIT1A6XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUlEID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3AgPSBzdGF0ZS5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5pZHNob3AgIT09IGRlbGV0ZUlEKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHNob3AuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWw7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnJlc3VsdF1cclxuICAgICAgICBjYXNlIFVQREFURV9TSE9QX0RFVEFJTDpcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkU2hvcCA9IHN0YXRlLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLmlkc2hvcCA9PT0gZGF0YS5pZHNob3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRTaG9wO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTTkFDSyB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBvcGVuOiBmYWxzZSxcclxuICAgIG1lc3NhZ2U6ICcnXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbil7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHRcdGNhc2UgU05BQ0s6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuOiBhY3Rpb24ucGF5bG9hZC5vcGVuLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYWN0aW9uLnBheWxvYWQubWVzc2FnZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICBcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9