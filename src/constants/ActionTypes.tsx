export default () => {
    return "Show page working ! ";
}
export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const FETCH_SHOP = 'FETCH_SHOP';
export const FETCH_MENU = 'FETCH_MENU';
export const DELETE_MENU = 'DELETE_MENU';
export const DELETE_SHOP = 'DELETE_SHOP';
export const ADD_MENU = 'ADD_MENU';
export const CONFIRM = 'CONFIRM';
export const SNACK = 'SNACK';
export const ADD_SHOP = 'ADD_SHOP;'
export const FETCH_SHOP_DETAIL = 'FETCH_SHOP_DETAIL';
export const UPDATE_SHOP_DETAIL = 'UPDATE_SHOP_DETAIL';
export const RESET_SHOP_DETAIL = 'RESET_SHOP_DETAIL';


export interface ApplicationState {
    login: any,
    shopList: any,
    menu: any,
    confirm: any,
    snack: any,
    shopDetail: any
}