import { combineReducers } from 'redux';
import login from './login';
import shopList from './shopList';
import menu from './menu';
import confirm from './confirm';
import snack from './snack';
import shopDetail from './shopDetail';

const rootReducer = combineReducers({
  login,
  shopList,
  menu,
  confirm,
  snack,
  shopDetail
});

export default rootReducer;
