import axios from 'axios';
import _ from 'lodash';
import * as types from '../constants/ActionTypes'

const ROOT_URL = 'https://21t70fh8w8.execute-api.ap-southeast-2.amazonaws.com/dev';
//const ROOT_URL = 'http://localhost:3000';
export const userLogin = (username, password) => dispatch => {
    axios({
        method: 'post',
        url: `${ROOT_URL}/login`,
        data: {
            username,
            password
        }
    }).then((response) => {
        if(response.data){
            dispatch({
                type: types.LOGIN,
                payload: response.data
            });
        }else{
            dispatch({
                type: types.LOGIN_FAIL,
                payload: 1
            });
        }
        
    }).catch(error => {
        dispatch({
            type: types.LOGIN_FAIL,
            payload: 1
        });
    });
}
export const fetchShops = () => dispatch => {
    axios({
        method: 'get',
        url: `${ROOT_URL}/shop`
    }).then(({ data }) => {
        dispatch({
            type: types.FETCH_SHOP,
            payload: data
        });
    });
}

export const fetchMenus = (id) => dispatch => {
    axios({
        method: 'get',
        url: `${ROOT_URL}/menu/getMenu?shopid=${id}`
    }).then(({ data }) => {
        dispatch({
            type: types.FETCH_MENU,
            payload: data
        });
    });
}

export const deleteMenu = (menuid, shopid) => dispatch => {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/menu/deleteMenu`,
        data: {
            menuid,
            shopid
        }
    });

    request.then(({ data }) => {
        dispatch({ type: types.DELETE_MENU, payload: data })
    });
}

export const deleteShop = (shopid) => dispatch => {
    const request = axios({
        method: 'delete',
        url: `${ROOT_URL}/shop/deleteShop`,
        data: {
            shopid
        }
    }).then(() => {
        dispatch({ type: types.DELETE_SHOP, payload: shopid })
    });

}

export function addNewMenu(shopid, menu_name) {
    const request = axios({
        method: 'post',
        url: `${ROOT_URL}/menu/addMenu`,
        data: {
            shopid,
            menu_name
        }
    });

    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: types.ADD_MENU, payload: data })
        });
    };
}

export const confirm = (open) => dispatch => {
    dispatch({
        type: types.CONFIRM,
        payload: open
    });
}

export const snack = (open, message) => dispatch => {
    dispatch({
        type: types.SNACK,
        payload: {
            open,
            message
        }
    });

    setTimeout(
        function () {
            dispatch({
                type: types.SNACK,
                payload: {
                    open: false,
                    message: ''
                }
            });
        },
        3000
    );
}

export const addShop = (shopname, shopaddr, shopphone) => dispatch => {
    const request = axios({
        method: 'post',
        url: `${ROOT_URL}/shop/addShop`,
        data: {
            shopname,
            shopaddr,
            shopphone
        }
    });

    request.then(({ data }) => {
        dispatch({ type: types.ADD_SHOP, payload: data })
    });
}

export const fetchShopDetail = (shopid) => dispatch => {
    axios({
        method: 'get',
        url: `${ROOT_URL}/shop/getShopDetail?shopid=${shopid}`
    }).then(({ data }) => {
        dispatch({
            type: types.FETCH_SHOP_DETAIL,
            payload: data[0]
        });
    });
}

export const updateShopDetail = (shopid, shop_addr, shop_phone, shop_order) => dispatch => {
    console.log(1);
    axios({
        method: 'post',
        url: `${ROOT_URL}/shop/updateShopDetail`,
        data: {
            shopid,
            shop_addr,
            shop_phone,
            shop_order,
        }
    }).then((value) => {
    console.log(2);
        console.log(3);
        console.log('value', value);
        const data = {
            shopid, shop_addr, shop_phone, shop_order
        }
        dispatch({ type: types.UPDATE_SHOP_DETAIL, payload: data })
        dispatch({ type: types.RESET_SHOP_DETAIL })
    }).catch((e)=>{
        console.log(4);
        console.log('error', e);
    });

}