import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './shop/Main';
import Login from './login';
import MenuList from './menu/menuList';
import EditShop from './shop/editShop';

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

const style={
  app: {
    backgroundColor: '#fff',
    padding: 10
  }
}