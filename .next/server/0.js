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
          lineNumber: 70,
          columnNumber: 5
        }
      }, __jsx(_component_Food__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onDelete: () => delete_menu(item.idmenu),
        label: item.menu_name,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 6
        }
      }));
    });
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 3
    }
  }, menu.length > 0 && renderPosts(), __jsx(_addMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shop_id: match.params.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }
  }), __jsx(_constants_Confirm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    submit: () => deleteMenu(id, match.params.id),
    title: "Are you sure to delete?",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
    onClick: e => add_shop(e),
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
      lineNumber: 53,
      columnNumber: 9
    }
  }, !shopDetail && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 32
    }
  }, "Loading..."), shopDetail && __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_addr",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_phone",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("label", {
    htmlFor: "edit_shop_order",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("button", {
    className: "btn btn-primary",
    style: styles.btn,
    onClick: e => edit_shop(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, "\uC218\uC815"), __jsx("button", {
    className: "btn btn-primary",
    onClick: e => back_shop(e),
    style: styles.btn,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 25
    }
  }, "\uBA54\uC778")), __jsx(_constants_Snack__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Gb29kLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0FjdGlvblR5cGVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL0NvbmZpcm0udHN4Iiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvU25hY2sudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL21lbnUvYWRkTWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9tZW51L21lbnVMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3Nob3AvTWFpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zaG9wL1Nob3BMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL3Nob3AvYWRkU2hvcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9zaG9wL2VkaXRTaG9wLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9jb25maXJtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9sb2dpbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL21lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zaG9wRGV0YWlsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvc2hvcExpc3QudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9zbmFjay50c3giXSwibmFtZXMiOlsiY29va2llcyIsIkNvb2tpZXMiLCJ1cmkiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJyZXF1ZXN0Iiwib3BlcmF0aW9uIiwidG9rZW4iLCJnZXQiLCJzZXRDb250ZXh0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ1c2VyTG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGlzcGF0Y2giLCJMT0dJTl9HUUwiLCJncWwiLCJtdXRhdGUiLCJtdXRhdGlvbiIsInRoZW4iLCJkYXRhIiwibG9naW4iLCJzZXQiLCJwYXRoIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImNhdGNoIiwiZXJyb3IiLCJmZXRjaFNob3BzIiwiRkVUQ0hfU0hPUF9HUUwiLCJxdWVyeSIsInNob3AiLCJmZXRjaE1lbnVzIiwiaWQiLCJGRVRDSF9NRU5VX0dRTCIsImdldE1lbnUiLCJkZWxldGVNZW51IiwibWVudWlkIiwic2hvcGlkIiwiREVMRVRFX01FTlVfR1FMIiwiZGVsZXRlU2hvcCIsIkRFTEVURV9TSE9QX0dRTCIsImlkc2hvcCIsImFkZE5ld01lbnUiLCJtZW51X25hbWUiLCJBRERfTUVOVV9HUUwiLCJhZGRNZW51IiwibWVudSIsImNvbmZpcm0iLCJvcGVuIiwic25hY2siLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImFkZFNob3AiLCJzaG9wbmFtZSIsInNob3BhZGRyIiwic2hvcHBob25lIiwiQ1JFQVRFX1NIT1BfR1FMIiwiY3JlYXRlU2hvcCIsImZldGNoU2hvcERldGFpbCIsIkZFVENIX1NIT1BfREVUQUlMX0dRTCIsInVwZGF0ZVNob3BEZXRhaWwiLCJzaG9wX2FkZHIiLCJzaG9wX3Bob25lIiwic2hvcF9vcmRlciIsIlVQREFURV9TSE9QX0dRTCIsInVwZGF0ZVNob3AiLCJSRVNFVF9TSE9QX0RFVEFJTCIsIkZvb2QiLCJvbkRlbGV0ZSIsImxhYmVsIiwic3R5bGVzIiwiY2hpcCIsIm1hcmdpbiIsImZsZXgiLCJMT0dJTiIsIkxPR0lOX0ZBSUwiLCJGRVRDSF9TSE9QIiwiRkVUQ0hfTUVOVSIsIkRFTEVURV9NRU5VIiwiREVMRVRFX1NIT1AiLCJBRERfTUVOVSIsIkNPTkZJUk0iLCJTTkFDSyIsIkFERF9TSE9QIiwiRkVUQ0hfU0hPUF9ERVRBSUwiLCJVUERBVEVfU0hPUF9ERVRBSUwiLCJDb25maXJtIiwiQ29tcG9uZW50IiwiaGFuZGxlQ2xvc2UiLCJwcm9wcyIsImNsb3NlIiwiaGFuZGxlU3VibWl0Iiwic3VibWl0IiwicmVuZGVyIiwidGl0bGUiLCJjaGlsZHJlbiIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCIsIlNuYWNrIiwiQXBwIiwic3R5bGUiLCJhcHAiLCJMb2dpbiIsIk1lbnVMaXN0IiwiRWRpdFNob3AiLCJNYWluIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInBhcGVyIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInNldFBhc3N3b3JkIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJoaXN0b3J5IiwicHVzaCIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VmFsdWUiLCJuZXdWYWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ3cmFwcGVyIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiQWRkTWVudSIsInNob3BfaWQiLCJhZGRfbWVudSIsInNldE1lbnVfbmFtZSIsImFkZF9tZW51cyIsImhhbmRsZU5hbWVDaGFuZ2UiLCJrZXkiLCJuYW1lIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiYnRuTGluZSIsImJ0bkVkaXQiLCJjb2xvciIsInRleHREZWNvcmF0aW9uTGluZSIsImJ0bkRlbGV0ZSIsIm1hdGNoIiwiZmV0Y2hfbWVudXMiLCJzZXRJRCIsInBhcmFtcyIsImRlbGV0ZV9tZW51IiwicmVuZGVyUG9zdHMiLCJfIiwibWFwIiwiaXRlbSIsImlkbWVudSIsImxlbmd0aCIsIlNob3BMaXN0Iiwic2hvcExpc3QiLCJ1c2VIaXN0b3J5IiwiZGVsZXRlX3Nob3AiLCJyZW5kZXJTaG9wIiwic2hvcF9uYW1lIiwiQWRkU2hvcCIsInNldFNob3BfbmFtZSIsInNldFNob3BfYWRkciIsInNldFNob3BfcGhvbmUiLCJhZGRfc2hvcCIsImhhbmRsZUFkZHJDaGFuZ2UiLCJoYW5kbGVQaG9uZUNoYW5nZSIsImFkZHIiLCJwaG9uZSIsImJ0biIsInNob3BEZXRhaWwiLCJlZGl0X3Nob3BfYWRkcl9SRUYiLCJ1c2VSZWYiLCJlZGl0X3Nob3BfcGhvbmVfUkVGIiwiZWRpdF9zaG9wX29yZGVyX1JFRiIsImVkaXRfc2hvcCIsImN1cnJlbnQiLCJiYWNrX3Nob3AiLCJvcmRlciIsImNyZWF0ZVN0b3JlV2l0aE1pZGRsZXdhcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImNyZWF0ZVN0b3JlIiwiaG9tZSIsInJlZHVjZXJzIiwiYWN0aW9uIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbml0aWFsIiwiZmlsdGVyIiwieCIsIm1lbnVfaWQiLCJkZWxldGVJRCIsIm9iaiIsInJlc3VsdCIsImVsIiwidXBkYXRlZFNob3AiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQU9BLE1BQU1BLE9BQU8sR0FBRyxJQUFJQyx1REFBSixFQUFoQjtBQUVBLE1BQU1DLEdBQUcsR0FBRyx5RUFBWjtBQUVBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxtREFBSixDQUFpQjtBQUMxQkYsS0FEMEI7QUFFMUJHLFNBQU8sRUFBR0MsU0FBRCxJQUFlO0FBQ3RCLFVBQU1DLEtBQUssR0FBR1AsT0FBTyxDQUFDUSxHQUFSLENBQVksT0FBWixDQUFkOztBQUNBLFFBQUdELEtBQUgsRUFBUztBQUNQRCxlQUFTLENBQUNHLFVBQVYsQ0FBcUI7QUFDakJDLGVBQU8s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SixNQUFKLEtBQWUySixRQUFuQixFQUNJLE9BQU9DLEdBQVA7QUFDUCxPQUhZLENBQWI7QUFJQSxZQUFNQyxNQUFNLEdBQUd4SyxJQUFJLENBQUNtSyxNQUFMLENBQVksVUFBVU0sRUFBVixFQUFjO0FBQUUsZUFBT0EsRUFBUDtBQUFZLE9BQXhDLENBQWY7QUFDQSxhQUFPLENBQUMsR0FBR0QsTUFBSixDQUFQOztBQUNKLFNBQUtqSCx5RUFBTDtBQUNJLFlBQU1uRSxJQUFJLEdBQUcySyxNQUFNLENBQUNySyxPQUFwQjtBQUNBLFlBQU1nTCxXQUFXLEdBQUd2RyxLQUFLLENBQUN5RCxHQUFOLENBQVcyQyxHQUFELElBQVM7QUFDbkMsWUFBSUEsR0FBRyxDQUFDNUosTUFBSixLQUFldkIsSUFBSSxDQUFDdUIsTUFBeEIsRUFBK0I7QUFDM0IsaUJBQU92QixJQUFQO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsaUJBQU9tTCxHQUFQO0FBQ0g7QUFDSixPQU5tQixDQUFwQjtBQU9BLGFBQU9HLFdBQVA7O0FBQ0o7QUFDSSxhQUFPdkcsS0FBUDtBQTdCUjtBQWdDSCxDOzs7Ozs7Ozs7Ozs7QUNuQ0Q7QUFBQTtBQUFBO0FBRUEsTUFBTXdHLFlBQVksR0FBRztBQUNqQnpKLE1BQUksRUFBRSxLQURXO0FBRWpCRSxTQUFPLEVBQUU7QUFGUSxDQUFyQjtBQUllLHlFQUFTK0MsS0FBSyxHQUFHd0csWUFBakIsRUFBK0JaLE1BQS9CLEVBQXNDO0FBQ3BELFVBQU9BLE1BQU0sQ0FBQ3ZLLElBQWQ7QUFDQyxTQUFLNEQsNERBQUw7QUFDVSxhQUFPO0FBQ0hsQyxZQUFJLEVBQUU2SSxNQUFNLENBQUNySyxPQUFQLENBQWV3QixJQURsQjtBQUVIRSxlQUFPLEVBQUUySSxNQUFNLENBQUNySyxPQUFQLENBQWUwQjtBQUZyQixPQUFQOztBQUlKO0FBQ0ksYUFBTytDLEtBQVA7QUFQWDtBQVVBLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGUgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5pbXBvcnQgQXBvbGxvQ2xpZW50LCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1ib29zdCc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xyXG5pbXBvcnQgeyBBY3Rpb25DcmVhdG9yLCBBY3Rpb24sIERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmV4cG9ydCB0eXBlIEFwcFRodW5rID0gQWN0aW9uQ3JlYXRvcjxcclxuICBUaHVua0FjdGlvbjx2b2lkLCBBcHBsaWNhdGlvblN0YXRlLCBudWxsLCBBY3Rpb248c3RyaW5nPj5cclxuPjtcclxuXHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xyXG5cclxuY29uc3QgdXJpID0gJ2h0dHBzOi8vZWpsbDN5aXJ4ay5leGVjdXRlLWFwaS5hcC1zb3V0aGVhc3QtMi5hbWF6b25hd3MuY29tL2Rldi9ncmFwaHFsJztcclxuXHJcbmxldCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaSxcclxuICAgIHJlcXVlc3Q6IChvcGVyYXRpb24pID0+IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBjb29raWVzLmdldCgndG9rZW4nKTtcclxuICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgIG9wZXJhdGlvbi5zZXRDb250ZXh0KHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCB0b2tlbiA9IG51bGw7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICByZXR1cm4gXCJTaG93IHBhZ2Ugd29ya2luZyAhIFwiO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luOiBBcHBUaHVuayA9ICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuXHJcbiAgICBjb25zdCBMT0dJTl9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbiB7XHJcbiAgICAgICAgbG9naW4oXHJcbiAgICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCIke3VzZXJuYW1lfVwiLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiJHtwYXNzd29yZH1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IExPR0lOX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgaWYoZGF0YS5sb2dpbil7XHJcbiAgICAgICAgICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIGRhdGEubG9naW4udG9rZW4sIHsgcGF0aDogJy8nIH0pO1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZXMuTE9HSU4sXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhLmxvZ2luLnRva2VuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlcy5MT0dJTl9GQUlMLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgICBcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkxPR0lOX0ZBSUwsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IDFcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTaG9wczogQXBwVGh1bmsgPSAoKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBGRVRDSF9TSE9QX0dRTCA9IGdxbGBcclxuICAgIHtcclxuICAgICAgICBzaG9we1xyXG4gICAgICAgICAgICBpZHNob3BcclxuICAgICAgICAgICAgc2hvcF9hZGRyXHJcbiAgICAgICAgICAgIHNob3BfbmFtZVxyXG4gICAgICAgICAgICBzaG9wX29yZGVyXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmVcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRkVUQ0hfU0hPUF9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuRkVUQ0hfU0hPUCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5zaG9wXHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hNZW51czogQXBwVGh1bmsgPSAoaWQpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuXHJcbiAgICBjb25zdCBGRVRDSF9NRU5VX0dRTCA9IGdxbGBcclxuICAgIG11dGF0aW9ue1xyXG4gICAgICAgIGdldE1lbnUoXHJcbiAgICAgICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgICAgIHNob3BfaWQ6ICR7aWR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBpZG1lbnVcclxuICAgICAgICAgICAgbWVudV9uYW1lXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBGRVRDSF9NRU5VX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5GRVRDSF9NRU5VLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLmdldE1lbnVcclxuICAgICAgICB9KTsgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVNZW51OiBBcHBUaHVuayA9IChtZW51aWQsIHNob3BpZCkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgREVMRVRFX01FTlVfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgZGVsZXRlTWVudShcclxuICAgICAgICAgIHdoZXJlOntcclxuICAgICAgICAgICAgbWVudV9pZDogJHttZW51aWR9LFxyXG4gICAgICAgICAgICBzaG9wX2lkOiAke3Nob3BpZH1cclxuICAgICAgICAgIH1cclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBtZW51X2lkXHJcbiAgICAgICAgfVxyXG4gICAgfWA7XHJcbiAgICBcclxuICAgIGNsaWVudC5tdXRhdGUoe1xyXG4gICAgICAgIG11dGF0aW9uOiBERUxFVEVfTUVOVV9HUUxcclxuICAgIH0pLnRoZW4oKHtkYXRhfSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuREVMRVRFX01FTlUsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEuZGVsZXRlTWVudVxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNob3A6IEFwcFRodW5rID0gKHNob3BpZCkgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgREVMRVRFX1NIT1BfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgZGVsZXRlU2hvcChcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkc2hvcDogJHtzaG9waWR9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKXtcclxuICAgICAgICAgIGlkc2hvcFxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogREVMRVRFX1NIT1BfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkRFTEVURV9TSE9QLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLmRlbGV0ZVNob3AuaWRzaG9wXHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTmV3TWVudTogQXBwVGh1bmsgPSAoc2hvcGlkLCBtZW51X25hbWUpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuXHJcbiAgICBjb25zdCBBRERfTUVOVV9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbntcclxuICAgICAgICBhZGRNZW51KFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgbWVudV9uYW1lOiBcIiR7bWVudV9uYW1lfVwiLFxyXG4gICAgICAgICAgaWRzaG9wOiAke3Nob3BpZH1cclxuICAgICAgICB9XHJcbiAgICAgICl7XHJcbiAgICAgICAgICBtZW51e1xyXG4gICAgICAgICAgICBpZG1lbnVcclxuICAgICAgICAgICAgbWVudV9uYW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogQUREX01FTlVfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkFERF9NRU5VLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLmFkZE1lbnUubWVudVxyXG4gICAgICAgIH0pOyAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maXJtOiBBcHBUaHVuayA9IChvcGVuKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuQ09ORklSTSxcclxuICAgICAgICBwYXlsb2FkOiBvcGVuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNuYWNrOiBBcHBUaHVuayA9IChvcGVuLCBtZXNzYWdlKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuU05BQ0ssXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBvcGVuLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVzLlNOQUNLLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMzAwMFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFNob3A6IEFwcFRodW5rID0gKHNob3BuYW1lLCBzaG9wYWRkciwgc2hvcHBob25lKSA9PiAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XHJcbiAgICBjb25zdCBDUkVBVEVfU0hPUF9HUUwgPSBncWxgXHJcbiAgICBtdXRhdGlvbntcclxuICAgICAgICBjcmVhdGVTaG9wKFxyXG4gICAgICAgICAgZGF0YSA6e1xyXG4gICAgICAgICAgICBzaG9wX2FkZHI6IFwiJHtzaG9wYWRkcn1cIixcclxuICAgICAgICAgICAgc2hvcF9uYW1lOiBcIiR7c2hvcG5hbWV9XCIsXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXI6IDUsXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmU6IFwiJHtzaG9wcGhvbmV9XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICApe1xyXG4gICAgICAgICAgICBpZHNob3BcclxuICAgICAgICAgICAgc2hvcF9hZGRyXHJcbiAgICAgICAgICAgIHNob3BfbmFtZVxyXG4gICAgICAgICAgICBzaG9wX29yZGVyXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmVcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50Lm11dGF0ZSh7XHJcbiAgICAgICAgbXV0YXRpb246IENSRUFURV9TSE9QX0dRTFxyXG4gICAgfSkudGhlbigoe2RhdGF9KSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5BRERfU0hPUCxcclxuICAgICAgICAgICAgcGF5bG9hZDogZGF0YS5jcmVhdGVTaG9wXHJcbiAgICAgICAgfSk7ICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hTaG9wRGV0YWlsOiBBcHBUaHVuayA9IChzaG9waWQpID0+IChkaXNwYXRjaDogRGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IEZFVENIX1NIT1BfREVUQUlMX0dRTCA9IGdxbGBcclxuICAgIHtcclxuICAgICAgICBzaG9wKFxyXG4gICAgICAgICAgICBpZHNob3A6ICR7c2hvcGlkfVxyXG4gICAgICAgICksXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaG9wX2FkZHJcclxuICAgICAgICAgICAgc2hvcF9uYW1lXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXJcclxuICAgICAgICAgICAgc2hvcF9waG9uZVxyXG4gICAgICAgICAgICBpZHNob3BcclxuICAgICAgICB9XHJcbiAgICB9YDtcclxuICAgIFxyXG4gICAgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogRkVUQ0hfU0hPUF9ERVRBSUxfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLkZFVENIX1NIT1BfREVUQUlMLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBkYXRhLnNob3BbMF1cclxuICAgICAgICB9KTsgICBcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTaG9wRGV0YWlsOiBBcHBUaHVuayA9IChzaG9waWQsIHNob3BfYWRkciwgc2hvcF9waG9uZSwgc2hvcF9vcmRlcikgPT4gKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgVVBEQVRFX1NIT1BfR1FMID0gZ3FsYFxyXG4gICAgbXV0YXRpb257XHJcbiAgICAgICAgdXBkYXRlU2hvcChcclxuICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICBzaG9wX2FkZHI6IFwiJHtzaG9wX2FkZHJ9XCIsXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmU6IFwiJHtzaG9wX3Bob25lfVwiLFxyXG4gICAgICAgICAgICBzaG9wX29yZGVyOiAke3Nob3Bfb3JkZXJ9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICBpZHNob3A6ICR7c2hvcGlkfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIGlkc2hvcFxyXG4gICAgICAgICAgICBzaG9wX25hbWVcclxuICAgICAgICAgICAgc2hvcF9hZGRyXHJcbiAgICAgICAgICAgIHNob3BfcGhvbmVcclxuICAgICAgICAgICAgc2hvcF9vcmRlclxyXG4gICAgICAgIH1cclxuICAgIH1gO1xyXG4gICAgXHJcbiAgICBjbGllbnQubXV0YXRlKHtcclxuICAgICAgICBtdXRhdGlvbjogVVBEQVRFX1NIT1BfR1FMXHJcbiAgICB9KS50aGVuKCh7ZGF0YX0pID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IHR5cGVzLlVQREFURV9TSE9QX0RFVEFJTCwgcGF5bG9hZDogZGF0YS51cGRhdGVTaG9wIH0pXHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiB0eXBlcy5SRVNFVF9TSE9QX0RFVEFJTCB9KVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDaGlwIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuaW50ZXJmYWNlIEZvb2RQcm9wcyB7XHJcbiAgICBvbkRlbGV0ZSgpOiB2b2lkO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICB9XHJcblxyXG5jb25zdCBGb29kIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8Rm9vZFByb3BzPiA9ICh7IG9uRGVsZXRlLCBsYWJlbCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGlwXHJcbiAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cclxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmNoaXB9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGNoaXA6IHtcclxuICAgICAgbWFyZ2luOiA0LFxyXG4gICAgICBmbGV4OiAxLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb29kOyIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIHJldHVybiBcIlNob3cgcGFnZSB3b3JraW5nICEgXCI7XHJcbn1cclxuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJztcclxuZXhwb3J0IGNvbnN0IExPR0lOX0ZBSUwgPSAnTE9HSU5fRkFJTCc7XHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TSE9QID0gJ0ZFVENIX1NIT1AnO1xyXG5leHBvcnQgY29uc3QgRkVUQ0hfTUVOVSA9ICdGRVRDSF9NRU5VJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9NRU5VID0gJ0RFTEVURV9NRU5VJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9TSE9QID0gJ0RFTEVURV9TSE9QJztcclxuZXhwb3J0IGNvbnN0IEFERF9NRU5VID0gJ0FERF9NRU5VJztcclxuZXhwb3J0IGNvbnN0IENPTkZJUk0gPSAnQ09ORklSTSc7XHJcbmV4cG9ydCBjb25zdCBTTkFDSyA9ICdTTkFDSyc7XHJcbmV4cG9ydCBjb25zdCBBRERfU0hPUCA9ICdBRERfU0hPUDsnXHJcbmV4cG9ydCBjb25zdCBGRVRDSF9TSE9QX0RFVEFJTCA9ICdGRVRDSF9TSE9QX0RFVEFJTCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfU0hPUF9ERVRBSUwgPSAnVVBEQVRFX1NIT1BfREVUQUlMJztcclxuZXhwb3J0IGNvbnN0IFJFU0VUX1NIT1BfREVUQUlMID0gJ1JFU0VUX1NIT1BfREVUQUlMJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFwcGxpY2F0aW9uU3RhdGUge1xyXG4gICAgbG9naW46IGFueSxcclxuICAgIHNob3BMaXN0OiBhbnksXHJcbiAgICBtZW51OiBhbnksXHJcbiAgICBjb25maXJtOiBhbnksXHJcbiAgICBzbmFjazogYW55LFxyXG4gICAgc2hvcERldGFpbDogYW55XHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29uZmlybSB9IGZyb20gJy4uL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0FjdGlvbnMsIERpYWxvZ1RpdGxlLCBEaWFsb2dDb250ZW50IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgQ29uZmlybSBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGhhbmRsZUNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU3VibWl0KCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zdWJtaXQoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMuaGFuZGxlQ2xvc2UoKX0gXHJcbiAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLmNvbmZpcm19XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb25maXJtLWRpYWxvZy10aXRsZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ0FjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVTdWJtaXQoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsb3NlKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOb1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgY29uZmlybTogc3RhdGUuY29uZmlybVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2xvc2U6ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goY29uZmlybShmYWxzZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZmlybSA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbmZpcm0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25maXJtIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNuYWNrIH0gZnJvbSAnLi4vYWN0aW9ucyc7XHJcbmltcG9ydCB7IFNuYWNrYmFyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY2xhc3MgU25hY2sgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxTbmFja2JhclxyXG4gICAgICAgICAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5zbmFja31cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMucHJvcHMubWVzc2FnZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgc25hY2s6IHN0YXRlLnNuYWNrLm9wZW4sXHJcbiAgICBtZXNzYWdlOiBzdGF0ZS5zbmFjay5tZXNzYWdlXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjbG9zZTogKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzbmFjayhmYWxzZSwgJycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblNuYWNrID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoU25hY2spXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbmFjayIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2gsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCBNYWluIGZyb20gJy4vc2hvcC9NYWluJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgTWVudUxpc3QgZnJvbSAnLi9tZW51L21lbnVMaXN0JztcclxuaW1wb3J0IEVkaXRTaG9wIGZyb20gJy4vc2hvcC9lZGl0U2hvcCc7XHJcblxyXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCIgc3R5bGU9e3N0eWxlLmFwcH0+XHJcbiAgICAgICAgPFN3aXRjaD5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21lbnUvOmlkXCIgY29tcG9uZW50PXtNZW51TGlzdH0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2VkaXQvOmlkXCIgY29tcG9uZW50PXtFZGl0U2hvcH0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICA8L1N3aXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG4vKiogXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIiBzdHlsZT17c3R5bGUuYXBwfT5cclxuICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWVudS86aWRcIiBjb21wb25lbnQ9e01lbnVMaXN0fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9lZGl0LzppZFwiIGNvbXBvbmVudD17RWRpdFNob3B9IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpbn0gLz5cclxuICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4qL1xyXG5jb25zdCBzdHlsZT17XHJcbiAgYXBwOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIHBhZGRpbmc6IDEwXHJcbiAgfVxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgeyB1c2VyTG9naW4gfSBmcm9tICcuLi9hY3Rpb25zJztcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBwYXBlcjoge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsb2dpbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmxvZ2luKTtcclxuICAgIGNvbnN0IGVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuZXJyb3IpO1xyXG5cclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCB7IHN1Y2Nlc3MgfSA9IGxvZ2luO1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gcHJvcHM7XHJcbiAgICAgICAgaWYoIHN1Y2Nlc3MgKVxyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy8nKTtcclxuICAgIH0pXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHVzZXJMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldFZhbHVlID0gKHR5cGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ3VzZXJuYW1lJyl7XHJcbiAgICAgICAgICAgIHNldFVzZXJuYW1lKG5ld1ZhbHVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZChuZXdWYWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlLnBhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VmFsdWUoJ3VzZXJuYW1lJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRWYWx1ZSgncGFzc3dvcmQnLCBldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW4uZXJyb3IgPT09IDEgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPkludmFsaWQgbG9naW4gZGV0YWlsPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICAgICAgICBsb2dpbjogMCxcclxuICAgICAgICAgICAgZXJyb3I6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUgPSB0aGlzLnNldFZhbHVlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xyXG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcyB9ID0gbmV4dFByb3BzLmxvZ2luO1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBpZiggc3VjY2VzcyApXHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ2xpY2soZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgdXNlckxvZ2luIH0gPSB0aGlzLnByb3BzOyBcclxuICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgdXNlckxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZSh0eXBlLCBuZXdWYWx1ZSl7XHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ3VzZXJuYW1lJyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogbmV3VmFsdWUgfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogbmV3VmFsdWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMucHJvcHMubG9naW47XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGUucGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFZhbHVlKCd1c2VybmFtZScsIGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0VmFsdWUoJ3Bhc3N3b3JkJywgZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PT0gMSAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+SW52YWxpZCBsb2dpbiBkZXRhaWw8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVDbGljayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBsb2dpbjogc3RhdGUubG9naW4sXHJcbiAgICBlcnJvcjogc3RhdGUuZXJyb3JcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXJMb2dpbjogKHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh1c2VyTG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Mb2dpbiA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKVxyXG4qKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIiwiXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uLy4uL2NvbnN0YW50cy9TbmFjayc7XHJcbmltcG9ydCB7IFRodW5rRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgQW55QWN0aW9uIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBhZGROZXdNZW51LCBzbmFjayB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdyYXBwZXI6IHtcclxuICBcdGhlaWdodDogJzMwcHgnLFxyXG4gICAgbWFyZ2luOiAnMjBweCAxMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czo0LFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcblx0c2hvcF9pZDogbnVtYmVyXHJcbiAgfVxyXG4gIFxyXG5pbnRlcmZhY2UgcHJvcHNGcm9tRGlzcGF0Y2gge1xyXG5cdGFkZF9tZW51OiAoc2hvcF9pZDogTnVtYmVyLCBtZW51X25hbWU6IFN0cmluZykgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IEFkZE1lbnUgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBzaG9wX2lkLCBhZGRfbWVudSB9KSA9PiB7XHJcblx0Y29uc3QgW21lbnVfbmFtZSwgc2V0TWVudV9uYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgYWRkX21lbnVzID0gKCk6IHZvaWQgPT4ge1xyXG5cdFx0YWRkX21lbnUoc2hvcF9pZCwgbWVudV9uYW1lKTtcclxuXHRcdHNldE1lbnVfbmFtZSgnJyk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQ6IHsgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50IH0pID0+IHtcclxuXHRcdHNldE1lbnVfbmFtZShldmVudC50YXJnZXQudmFsdWUpXHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0aWQ9XCJhZGRfbWVudV90ZXh0XCIgXHJcblx0XHRcdFx0dmFsdWU9e21lbnVfbmFtZX0gXHJcblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVOYW1lQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRvbktleVByZXNzPXtldmVudCA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcblx0XHRcdFx0XHRcdGFkZF9tZW51cygpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxidXR0b24gaWQ9XCJhZGRfbWVudVwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGFkZF9tZW51cygpfT5cclxuXHRcdFx0XHRBRERcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDxTbmFjayAvPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoKSA9PiAoe30pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZF9tZW51OiAoaWQ6TnVtYmVyLCBuYW1lOlN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChhZGROZXdNZW51KGlkLCBuYW1lKSk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNuYWNrKHRydWUsICfsg4jroZzsmrQg66mU64m06rCAIOy2lOqwgOuQmOyXiOyKteuLiOuLpC4nKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZE1lbnUpXHJcblxyXG4vKipcclxuY2xhc3MgQWRkTWVudSBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0bWVudV9uYW1lOiAnJ1xyXG5cdFx0fTtcclxuXHR9XHJcblx0YWRkX21lbnVzKCl7XHJcblx0XHR0aGlzLnByb3BzLmFkZF9tZW51cyh0aGlzLnByb3BzLnNob3BfaWQsIHRoaXMuc3RhdGUubWVudV9uYW1lKTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRtZW51X25hbWU6ICcnLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgbWVudV9uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblx0fTtcclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdGlkPVwiYWRkX21lbnVfdGV4dFwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWVudV9uYW1lfSBcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdG9uS2V5UHJlc3M9e2V2ZW50ID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuYWRkX21lbnVzKGV2ZW50KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGJ1dHRvbiBsYWJlbD1cIkFERFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmFkZF9tZW51cyhlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQUREXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxTbmFjayAvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZF9tZW51czogKGlkLCBuYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZE5ld01lbnUoaWQsIG5hbWUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDrqZTribTqsIAg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQWRkTWVudSA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRNZW51KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZE1lbnVcclxuICovIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaE1lbnVzLCBkZWxldGVNZW51LCBjb25maXJtIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgQWRkTWVudSBmcm9tICcuL2FkZE1lbnUnO1xyXG5pbXBvcnQgRm9vZCBmcm9tICcuLi8uLi9jb21wb25lbnQvRm9vZCc7XHJcbmltcG9ydCBDb25maXJtIGZyb20gJy4uLy4uL2NvbnN0YW50cy9Db25maXJtJztcclxuXHJcblxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHdyYXBwZXI6IHtcclxuICBcdGRpc3BsYXk6ICdmbGV4JyxcclxuICBcdGZsZXhXcmFwOiAnd3JhcCdcclxuICB9LFxyXG4gIGJ0bkxpbmU6IHtcclxuICBcdG1hcmdpbjogJzEwcHggMHB4IDMwcHgnXHJcbiAgfSxcclxuICBidG5FZGl0OiB7XHJcbiAgXHRwYWRkaW5nOiAnMTBweCcsXHJcbiAgICBib3JkZXI6ICcwJyxcclxuICAgIG1hcmdpbjogJzEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmZiJyxcclxuICAgIHRleHREZWNvcmF0aW9uTGluZTogJ25vbmUnXHJcbiAgfSxcclxuICBidG5EZWxldGU6IHtcclxuICBcdHBhZGRpbmc6ICcxMHB4JyxcclxuICAgIGJvcmRlcjogJzAnLFxyXG4gICAgbWFyZ2luOiAnMTBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmMmInLFxyXG4gICAgdGV4dERlY29yYXRpb25MaW5lOiAnbm9uZSdcclxuICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNGcm9tU3RhdGUge1xyXG5cdG1hdGNoOiBhbnksXHJcblx0bWVudTogYW55XHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHRmZXRjaF9tZW51czogKGlkOiBOdW1iZXIpID0+IHZvaWQsXHJcblx0ZGVsZXRlTWVudTogKG1lbnVpZDogTnVtYmVyLCBzaG9waWQ6IE51bWJlcikgPT4gdm9pZCxcclxuXHRvcGVuOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbnR5cGUgQWxsUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIHByb3BzRnJvbURpc3BhdGNoO1xyXG5cclxuY29uc3QgTWVudUxpc3QgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBbGxQcm9wcz4gPSAoeyBtYXRjaCwgbWVudSwgZmV0Y2hfbWVudXMsIGRlbGV0ZU1lbnUsIG9wZW4gfSkgPT4ge1xyXG5cdGNvbnN0IFtpZCwgc2V0SURdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZmV0Y2hfbWVudXMobWF0Y2gucGFyYW1zLmlkKTtcclxuXHR9LFtdKVxyXG5cclxuXHRjb25zdCBkZWxldGVfbWVudSA9IChpZCkgPT4ge1xyXG5cdFx0b3BlbigpXHJcblx0XHRzZXRJRChpZClcclxuXHR9XHJcblx0Y29uc3QgcmVuZGVyUG9zdHMgPSAoKSA9PiB7XHJcblx0XHRyZXR1cm4gXy5tYXAobWVudSwgaXRlbSA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdGtleT17aXRlbS5pZG1lbnV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEZvb2RcclxuXHRcdFx0XHRcdFx0b25EZWxldGU9eygpID0+IGRlbGV0ZV9tZW51KGl0ZW0uaWRtZW51KX1cclxuXHRcdFx0XHRcdFx0bGFiZWw9e2l0ZW0ubWVudV9uYW1lfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdHsgbWVudS5sZW5ndGggPiAwICYmIHJlbmRlclBvc3RzKCl9XHJcblx0XHRcdDxBZGRNZW51IHNob3BfaWQ9e21hdGNoLnBhcmFtcy5pZH0gLz5cclxuXHRcdFx0PENvbmZpcm1cclxuXHRcdFx0XHRzdWJtaXQ9eygpID0+IGRlbGV0ZU1lbnUoaWQsIG1hdGNoLnBhcmFtcy5pZCl9XHJcblx0XHRcdFx0dGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgbWVudTogc3RhdGUubWVudVxyXG59KTtcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBUaHVua0Rpc3BhdGNoPGFueSwgYW55LCBBbnlBY3Rpb24+KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZldGNoX21lbnVzOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hNZW51cyhpZCkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVsZXRlTWVudTogKG1lbnVpZCwgc2hvcGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lbnUobWVudWlkLCBzaG9waWQpKTtcclxuICAgICAgICB9LFxyXG5cdFx0b3BlbjogKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWVudUxpc3QpXHJcblxyXG4vKiogXHJcbmNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGlkIDogMFxyXG5cdFx0fVxyXG5cdH1cclxuXHRVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCl7XHJcblx0XHR0aGlzLnByb3BzLmZldGNoX21lbnVzKHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkKTtcclxuXHR9XHJcblx0ZGVsZXRlX21lbnUoaWQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vcGVuKCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0aWRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW5kZXJQb3N0cygpe1xyXG5cdFx0Y29uc3QgeyBtZW51IH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHJldHVybiBfLm1hcChtZW51LCBpdGVtID0+IHtcclxuXHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0a2V5PXtpdGVtLmlkbWVudX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8Rm9vZFxyXG5cdFx0XHRcdFx0XHRvbkRlbGV0ZT17KCkgPT4gdGhpcy5kZWxldGVfbWVudShpdGVtLmlkbWVudSl9XHJcblx0XHRcdFx0XHRcdGxhYmVsPXtpdGVtLm1lbnVfbmFtZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0Y29uc3QgeyBtZW51IH0gPSB0aGlzLnByb3BzO1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdHsgbWVudS5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyUG9zdHMoKX1cclxuXHRcdFx0XHQ8QWRkTWVudSBzaG9wX2lkPXt0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZH0gLz5cclxuXHRcdFx0XHQ8Q29uZmlybVxyXG5cdFx0XHRcdFx0c3VibWl0PXsoKSA9PiB0aGlzLnByb3BzLmRlbGV0ZU1lbnUodGhpcy5zdGF0ZS5pZCwgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpfVxyXG5cdFx0XHRcdFx0dGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBtZW51OiBzdGF0ZS5tZW51XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZXRjaF9tZW51czogKGlkKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoTWVudXMoaWQpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZU1lbnU6IChtZW51aWQsIHNob3BpZCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChkZWxldGVNZW51KG1lbnVpZCwgc2hvcGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVTaG9wOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNob3AoKSk7XHJcblx0XHR9LFxyXG5cdFx0b3BlbjogKCkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaChjb25maXJtKHRydWUpKTtcclxuXHRcdH1cclxuICAgIH1cclxufVxyXG5cclxuTWVudUxpc3QgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZW51TGlzdClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnVMaXN0XHJcbiovIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFNob3BMaXN0IGZyb20gJy4vU2hvcExpc3QnO1xyXG5cclxuY29uc3QgTWFpbiA9IChwcm9wcykgPT4ge1xyXG5cdGNvbnN0IGxvZ2luID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubG9naW4pO1xyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IHsgaGlzdG9yeSB9ID0gcHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFsb2dpbi5zdWNjZXNzKVxyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxTaG9wTGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqIFxyXG5jbGFzcyBNYWluIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSwgbG9naW4gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmKCFsb2dpbi5zdWNjZXNzKVxyXG4gICAgICAgICAgICBoaXN0b3J5LnB1c2goJy9sb2dpbicpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNob3BMaXN0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBsb2dpbjogc3RhdGUubG9naW5cclxufSk7XHJcblxyXG5NYWluID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKE1haW4pXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0LCB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZldGNoU2hvcHMsIGRlbGV0ZVNob3AsIGNvbmZpcm0gfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0LCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IEFkZFNob3AgZnJvbSAnLi9hZGRTaG9wJztcclxuaW1wb3J0IENvbmZpcm0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL0NvbmZpcm0nO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBTaG9wTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lkLCBzZXRJRF0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBzaG9wTGlzdCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNob3BMaXN0KTtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYoc2hvcExpc3QubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2hvcHMoKSk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBkZWxldGVfc2hvcCA9IChpZCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHRzZXRJRChpZClcclxuXHR9XHJcbiAgICBjb25zdCByZW5kZXJTaG9wID0gKHNob3BMaXN0KSA9PiB7XHJcbiAgICAgICAgaWYoIXNob3BMaXN0Lmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblx0XHRyZXR1cm4gXy5tYXAoc2hvcExpc3QsIHNob3AgPT4ge1xyXG5cdFx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e3Nob3AuaWRzaG9wfSBjb21wb25lbnQ9XCJhXCIgb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvbWVudS8nICsgc2hvcC5pZHNob3ApIH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17c2hvcC5zaG9wX25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvZWRpdC8nK3Nob3AuaWRzaG9wKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVfc2hvcChzaG9wLmlkc2hvcCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuXHRcdFx0KTtcclxuXHRcdH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3BMaXN0Lmxlbmd0aCA9PT0gMCAmJiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG9wTGlzdC5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyU2hvcChzaG9wTGlzdCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGRTaG9wLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29uZmlybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ9eygpID0+IGRpc3BhdGNoKGRlbGV0ZVNob3AoaWQpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbi8qKiBcclxuY2xhc3MgU2hvcExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGlkIDogMFxyXG5cdFx0fVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBpZih0aGlzLnByb3BzLnNob3BMaXN0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5nZXRTaG9wTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlX3Nob3AoaWQpe1xyXG5cdFx0dGhpcy5wcm9wcy5vcGVuKCk7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0aWRcclxuXHRcdH0pO1xyXG5cdH1cclxuICAgIHJlbmRlclNob3Aoc2hvcExpc3Qpe1xyXG5cclxuICAgICAgICBpZighc2hvcExpc3QubGVuZ3RoKSByZXR1cm4gbnVsbDtcclxuXHRcdHJldHVybiBfLm1hcChzaG9wTGlzdCwgc2hvcCA9PiB7XHJcblx0XHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGtleT17c2hvcC5pZHNob3B9IGNvbXBvbmVudD1cImFcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL21lbnUvJyArIHNob3AuaWRzaG9wKSB9ID5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e3Nob3Auc2hvcF9uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvZWRpdC8nK3Nob3AuaWRzaG9wKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRlbGV0ZV9zaG9wKHNob3AuaWRzaG9wKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2hvcExpc3QgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvcExpc3QubGVuZ3RoID09PSAwICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BMaXN0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclNob3Aoc2hvcExpc3QpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRTaG9wLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbmZpcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdD17KCkgPT4gdGhpcy5wcm9wcy5kZWxldGVTaG9wKHRoaXMuc3RhdGUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcmUgeW91IHN1cmUgdG8gZGVsZXRlP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XHJcbiAgICBzaG9wTGlzdDogc3RhdGUuc2hvcExpc3RcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFNob3BMaXN0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoU2hvcHMoKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGVTaG9wOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZGVsZXRlU2hvcChpZCkpXHJcbiAgICAgICAgfSxcclxuXHRcdG9wZW46ICgpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goY29uZmlybSh0cnVlKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcbn1cclxuXHJcblNob3BMaXN0ID0gd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShTaG9wTGlzdCkpXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BMaXN0IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgYWRkU2hvcCwgc25hY2sgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcclxuaW1wb3J0IFNuYWNrIGZyb20gJy4uLy4uL2NvbnN0YW50cy9TbmFjayc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgd3JhcHBlcjoge1xyXG4gIFx0aGVpZ2h0OiAnMzBweCcsXHJcbiAgICBtYXJnaW46ICcyMHB4IDEwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOjQsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgfVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzRnJvbVN0YXRlIHtcclxuXHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHRhZGRTaG9wOihzaG9wX25hbWU6IFN0cmluZywgc2hvcF9hZGRyOiBTdHJpbmcsIHNob3BfcGhvbmU6IFN0cmluZyApID0+IHZvaWRcclxufVxyXG5cclxudHlwZSBBbGxQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgcHJvcHNGcm9tRGlzcGF0Y2g7XHJcblxyXG5jb25zdCBBZGRTaG9wIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgYWRkU2hvcCB9KSA9PiB7XHJcblx0Y29uc3QgW3Nob3BfbmFtZSwgc2V0U2hvcF9uYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHRjb25zdCBbc2hvcF9hZGRyLCBzZXRTaG9wX2FkZHJdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IFtzaG9wX3Bob25lLCBzZXRTaG9wX3Bob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblx0Y29uc3QgYWRkX3Nob3AgPSAoKSA9PiB7XHJcblx0XHRhZGRTaG9wKHNob3BfbmFtZSwgc2hvcF9hZGRyLCBzaG9wX3Bob25lKTtcclxuXHJcblx0XHRzZXRTaG9wX25hbWUoJycpO1xyXG5cdFx0c2V0U2hvcF9hZGRyKCcnKTtcclxuXHRcdHNldFNob3BfcGhvbmUoJycpO1xyXG5cdH1cclxuXHRjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX25hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHR9XHJcblx0Y29uc3QgaGFuZGxlQWRkckNoYW5nZSA9IChldmVudCkgPT4ge1xyXG5cdFx0c2V0U2hvcF9hZGRyKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cdGNvbnN0IGhhbmRsZVBob25lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRzZXRTaG9wX3Bob25lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0bmFtZT1cImFkZF9zaG9wX3RleHRcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9uYW1lfSBcclxuXHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gXHJcblx0XHRcdFx0c3R5bGU9e3N0eWxlcy53cmFwcGVyfVxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwi7Iud64u5IOydtOumhFwiXHJcblx0XHRcdC8+XHJcblx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9hZGRyXCIgXHJcblx0XHRcdFx0dmFsdWU9e3Nob3BfYWRkcn0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUFkZHJDaGFuZ2V9IFxyXG5cdFx0XHRcdHN0eWxlPXtzdHlsZXMud3JhcHBlcn1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRuYW1lPVwiYWRkX3Nob3BfcGhvbmVcIiBcclxuXHRcdFx0XHR2YWx1ZT17c2hvcF9waG9uZX0gXHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZVBob25lQ2hhbmdlfSBcclxuXHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoZSkgPT4gYWRkX3Nob3AoZSl9PlxyXG5cdFx0XHRcdEFERFxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PFNuYWNrIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe30pO1xyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkU2hvcDogKG5hbWUsIGFkZHIsIHBob25lKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZFNob3AobmFtZSwgYWRkciwgcGhvbmUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDsi53ri7nsnbQg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkU2hvcClcclxuXHJcbi8qKiBcclxuY2xhc3MgQWRkU2hvcCBleHRlbmRzIENvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0c2hvcF9uYW1lOiAnJyxcclxuXHRcdFx0c2hvcF9hZGRyOiAnJyxcclxuICAgICAgICAgICAgc2hvcF9waG9uZTogJydcclxuICAgICAgICB9O1xyXG5cdFx0dGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmhhbmRsZUFkZHJDaGFuZ2UgPSB0aGlzLmhhbmRsZUFkZHJDaGFuZ2UuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuaGFuZGxlUGhvbmVDaGFuZ2UgPSB0aGlzLmhhbmRsZVBob25lQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0XHR0aGlzLmFkZF9zaG9wID0gdGhpcy5hZGRfc2hvcC5iaW5kKHRoaXMpO1xyXG5cdH1cclxuXHRhZGRfc2hvcCgpe1xyXG5cdFx0dGhpcy5wcm9wcy5hZGRTaG9wKHRoaXMuc3RhdGUuc2hvcF9uYW1lLCB0aGlzLnN0YXRlLnNob3BfYWRkciwgdGhpcy5zdGF0ZS5zaG9wX3Bob25lKTtcclxuXHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0c2hvcF9uYW1lOiAnJyxcclxuXHRcdFx0c2hvcF9hZGRyOiAnJyxcclxuXHRcdFx0c2hvcF9waG9uZTogJycsXHJcblx0XHR9KTtcclxuXHR9XHJcblx0aGFuZGxlTmFtZUNoYW5nZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvcF9uYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcblx0fVxyXG5cdGhhbmRsZUFkZHJDaGFuZ2UoZXZlbnQpe1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHNob3BfYWRkcjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG5cdH1cclxuXHRoYW5kbGVQaG9uZUNoYW5nZShldmVudCl7XHJcblx0XHR0aGlzLnNldFN0YXRlKHsgc2hvcF9waG9uZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF90ZXh0XCIgXHJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zaG9wX25hbWV9IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gXHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDsnbTrpoRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9hZGRyXCIgXHJcblx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5zaG9wX2FkZHJ9IFxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3RoaXMuaGFuZGxlQWRkckNoYW5nZX0gXHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdG5hbWU9XCJhZGRfc2hvcF9waG9uZVwiIFxyXG5cdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuc2hvcF9waG9uZX0gXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy5oYW5kbGVQaG9uZUNoYW5nZX0gXHJcblx0XHRcdFx0XHRzdHlsZT17c3R5bGVzLndyYXBwZXJ9XHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuyLneuLuSDsl7Drnb3ssphcIlxyXG5cdFx0XHRcdC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGxhYmVsPVwiQUREXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KGUpID0+IHRoaXMuYWRkX3Nob3AoZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFERFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblx0XHRcdFx0PFNuYWNrIC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkU2hvcDogKG5hbWUsIGFkZHIsIHBob25lKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGFkZFNob3AobmFtZSwgYWRkciwgcGhvbmUpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+yDiOuhnOyatCDsi53ri7nsnbQg7LaU6rCA65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQWRkU2hvcCA9IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShBZGRTaG9wKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkU2hvcFxyXG4qLyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCwgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBUaHVua0Rpc3BhdGNoIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBmZXRjaFNob3BEZXRhaWwsIHVwZGF0ZVNob3BEZXRhaWwsIHNuYWNrIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBTbmFjayBmcm9tICcuLi8uLi9jb25zdGFudHMvU25hY2snO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBidG46IHtcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCdcclxuICAgIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBQcm9wc0Zyb21TdGF0ZSB7XHJcbiAgICBtYXRjaCA6IGFueSxcclxuICAgIHNob3BEZXRhaWw6IFtdXHJcbn1cclxuICBcclxuaW50ZXJmYWNlIHByb3BzRnJvbURpc3BhdGNoIHtcclxuXHR1cGRhdGVTaG9wRGV0YWlsOihpZDogTnVtYmVyLCBhZGRyOiBTdHJpbmcsIHBob25lOlN0cmluZywgb3JkZXI6TnVtYmVyICkgPT4gdm9pZCxcclxuICAgIGZldGNoU2hvcERldGFpbDooaWQ6IE51bWJlcikgPT4gdm9pZFxyXG59XHJcblxyXG50eXBlIEFsbFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBwcm9wc0Zyb21EaXNwYXRjaDtcclxuXHJcbmNvbnN0IEVkaXRTaG9wIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QWxsUHJvcHM+ID0gKHsgbWF0Y2gsIHNob3BEZXRhaWwsIHVwZGF0ZVNob3BEZXRhaWwsIGZldGNoU2hvcERldGFpbCB9KSA9PiB7XHJcbiAgICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICAgIC8vY29uc3Qgc2hvcERldGFpbCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNob3BEZXRhaWwpO1xyXG4gICAgXHJcbiAgICBjb25zdCBlZGl0X3Nob3BfYWRkcl9SRUYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBlZGl0X3Nob3BfcGhvbmVfUkVGID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgZWRpdF9zaG9wX29yZGVyX1JFRiA9IHVzZVJlZihudWxsKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGZldGNoU2hvcERldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgY29uc3QgZWRpdF9zaG9wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdXBkYXRlU2hvcERldGFpbChtYXRjaC5wYXJhbXMuaWQsIGVkaXRfc2hvcF9hZGRyX1JFRi5jdXJyZW50LnZhbHVlLCBlZGl0X3Nob3BfcGhvbmVfUkVGLmN1cnJlbnQudmFsdWUsIGVkaXRfc2hvcF9vcmRlcl9SRUYuY3VycmVudC52YWx1ZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGJhY2tfc2hvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXNob3BEZXRhaWwgJiYgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3BEZXRhaWwgJiZcclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9hZGRyXCI+U2hvcCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX2FkZHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3BfYWRkclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRfc2hvcF9hZGRyX1JFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3BfYWRkciB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iud64u5IOyjvOyGjFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9waG9uZVwiPlNob3AgUGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWRpdF9zaG9wX3Bob25lX1JFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX3Bob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsi53ri7kg7Jew65297LKYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX29yZGVyXCI+U2hvcCBPcmRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2VkaXRfc2hvcF9vcmRlcl9SRUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9vcmRlciB8fCA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iic7IScXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZWRpdF9zaG9wKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDsiJjsoJVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gYmFja19zaG9wKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idG59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuplOyduFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U25hY2sgLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICAgIHNob3BEZXRhaWw6IHN0YXRlLnNob3BEZXRhaWxcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IFRodW5rRGlzcGF0Y2g8YW55LCBhbnksIEFueUFjdGlvbj4pID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hTaG9wRGV0YWlsOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hTaG9wRGV0YWlsKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVTaG9wRGV0YWlsOiAoaWQsIGFkZHIsIHBob25lLCBvcmRlcikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVTaG9wRGV0YWlsKGlkLCBhZGRyLCBwaG9uZSwgb3JkZXIpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+ygleuztOqwgCDsl4XrjbDsnbTtirgg65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdFNob3ApXHJcblxyXG4vKlxyXG5jbGFzcyBFZGl0U2hvcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvcGlkOiAnJyxcclxuICAgICAgICAgICAgc2hvcF9uYW1lOiAnJyxcclxuICAgICAgICAgICAgc2hvcF9hZGRyOiAnJyxcclxuICAgICAgICAgICAgc2hvcF9waG9uZTogJycsXHJcbiAgICAgICAgICAgIHNob3Bfb3JkZXI6ICcnLFxyXG4gICAgICAgICAgICBzbmFja19vcGVuOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5mZXRjaFNob3BEZXRhaWwodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQpO1xyXG4gICAgfVxyXG4gICAgZWRpdF9zaG9wKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9wRGV0YWlsKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZCxcclxuICAgICAgICAgICAgdGhpcy5lZGl0X3Nob3BfYWRkci52YWx1ZSxcclxuICAgICAgICAgICAgdGhpcy5lZGl0X3Nob3BfcGhvbmUudmFsdWUsXHJcbiAgICAgICAgICAgIHRoaXMuZWRpdF9zaG9wX29yZGVyLnZhbHVlXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGJhY2tfc2hvcChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzaG9wRGV0YWlsIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICFzaG9wRGV0YWlsICYmIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3Nob3BEZXRhaWwgJiZcclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9hZGRyXCI+U2hvcCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX2FkZHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdF9zaG9wX2FkZHJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLmVkaXRfc2hvcF9hZGRyID0gaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wRGV0YWlsLnNob3BfYWRkciB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyLneuLuSDso7zshoxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRfc2hvcF9waG9uZVwiPlNob3AgUGhvbmUgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZWRpdF9zaG9wX3Bob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVkaXRfc2hvcF9waG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLmVkaXRfc2hvcF9waG9uZSA9IGlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17c2hvcERldGFpbC5zaG9wX3Bob25lIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Iud64u5IOyXsOudveyymFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdF9zaG9wX29yZGVyXCI+U2hvcCBPcmRlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVkaXRfc2hvcF9vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0X3Nob3Bfb3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cIm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5lZGl0X3Nob3Bfb3JkZXIgPSBpbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3Nob3BEZXRhaWwuc2hvcF9vcmRlciB8fCA1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsiJzshJxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5lZGl0X3Nob3AoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7IiY7KCVXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmJhY2tfc2hvcChlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ0bn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrqZTsnbhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNuYWNrIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gICAgc2hvcERldGFpbDogc3RhdGUuc2hvcERldGFpbFxyXG59KTtcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmV0Y2hTaG9wRGV0YWlsOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hTaG9wRGV0YWlsKGlkKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVTaG9wRGV0YWlsOiAoaWQsIGFkZHIsIHBob25lLCBvcmRlcikgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVTaG9wRGV0YWlsKGlkLCBhZGRyLCBwaG9uZSwgb3JkZXIpKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc25hY2sodHJ1ZSwgJ+ygleuztOqwgCDsl4XrjbDsnbTtirgg65CY7JeI7Iq164uI64ukLicpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuRWRpdFNob3AgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFZGl0U2hvcClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRTaG9wXHJcbioqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbnRhaW5lci9hcHAnO1xyXG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcblxyXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKShjcmVhdGVTdG9yZSk7XHJcblxyXG5jb25zdCBob21lID0gKCkgPT4gPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZVdpdGhNaWRkbGV3YXJlKHJlZHVjZXJzKX0+XHJcbjxBcHAgLz5cclxuPC9Qcm92aWRlcj47XHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XHJcbiIsImltcG9ydCB7IENPTkZJUk0gfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBmYWxzZSwgYWN0aW9uKXtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSBDT05GSVJNOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIFxyXG5cdH1cclxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGxvZ2luIGZyb20gJy4vbG9naW4nO1xyXG5pbXBvcnQgc2hvcExpc3QgZnJvbSAnLi9zaG9wTGlzdCc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBjb25maXJtIGZyb20gJy4vY29uZmlybSc7XHJcbmltcG9ydCBzbmFjayBmcm9tICcuL3NuYWNrJztcclxuaW1wb3J0IHNob3BEZXRhaWwgZnJvbSAnLi9zaG9wRGV0YWlsJztcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBsb2dpbixcclxuICBzaG9wTGlzdCxcclxuICBtZW51LFxyXG4gIGNvbmZpcm0sXHJcbiAgc25hY2ssXHJcbiAgc2hvcERldGFpbFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBMT0dJTiwgTE9HSU5fRkFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsID0ge1xyXG4gICAgc3VjY2VzcyA6IDAsXHJcbiAgICBlcnJvcjogMCxcclxuICAgIHRva2VuOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbil7XHJcblx0c3dpdGNoKGFjdGlvbi50eXBlKXtcclxuXHRcdGNhc2UgTE9HSU46XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAxLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IDAsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR0lOX0ZBSUw6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAwLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IDEsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIFxyXG5cdH1cclxufSIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBGRVRDSF9NRU5VLCBERUxFVEVfTUVOVSwgQUREX01FTlUgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhdGUgPSBbXSwgYWN0aW9uKXtcclxuXHRzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG5cdFx0Y2FzZSBGRVRDSF9NRU5VOlxyXG5cdFx0XHRyZXR1cm4gWy4uLmFjdGlvbi5wYXlsb2FkXTtcclxuXHRcdGNhc2UgREVMRVRFX01FTlU6XHJcblx0XHRcdHJldHVybiBfLmZpbHRlcihzdGF0ZSwgKHgpID0+IHsgXHJcblx0XHRcdFx0cmV0dXJuIHguaWRtZW51ICE9PSBhY3Rpb24ucGF5bG9hZC5tZW51X2lkOyBcclxuXHRcdFx0fSk7XHJcblx0XHRjYXNlIEFERF9NRU5VOlxyXG5cdFx0XHRyZXR1cm4gW1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGFjdGlvbi5wYXlsb2FkXHJcblx0XHRcdF1cclxuXHR9XHJcblx0cmV0dXJuIHN0YXRlO1xyXG59IiwiaW1wb3J0IHsgRkVUQ0hfU0hPUF9ERVRBSUwsIFJFU0VUX1NIT1BfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1NIT1BfREVUQUlMOlxyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgY2FzZSBSRVNFVF9TSE9QX0RFVEFJTDpcclxuICAgICAgICAgICAgcmV0dXJuIFtdXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEZFVENIX1NIT1AsIEFERF9TSE9QLCBERUxFVEVfU0hPUCwgVVBEQVRFX1NIT1BfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZFVENIX1NIT1A6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIGNhc2UgQUREX1NIT1A6XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBjYXNlIERFTEVURV9TSE9QOlxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJRCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBjb25zdCBzaG9wID0gc3RhdGUubWFwKChvYmopID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmouaWRzaG9wICE9PSBkZWxldGVJRClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBzaG9wLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5yZXN1bHRdXHJcbiAgICAgICAgY2FzZSBVUERBVEVfU0hPUF9ERVRBSUw6XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNob3AgPSBzdGF0ZS5tYXAoKG9iaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5pZHNob3AgPT09IGRhdGEuaWRzaG9wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkU2hvcDtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU05BQ0sgfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgb3BlbjogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiAnJ1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pe1xyXG5cdHN3aXRjaChhY3Rpb24udHlwZSl7XHJcblx0XHRjYXNlIFNOQUNLOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb3BlbjogYWN0aW9uLnBheWxvYWQub3BlbixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgXHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==