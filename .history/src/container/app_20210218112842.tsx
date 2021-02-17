import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';

import Main from './shop/Main';
import Login from './login';
import MenuList from './menu/menuList';
import EditShop from './shop/editShop';

const App = (props) => {
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

export default App

const style={
  app: {
    backgroundColor: '#fff',
    padding: 10
  }
}