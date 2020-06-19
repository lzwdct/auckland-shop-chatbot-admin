import _ from 'lodash';
import * as types from '../constants/ActionTypes'
import ApolloClient, { gql } from 'apollo-boost';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const uri = 'https://eiivok3ma9.execute-api.ap-southeast-2.amazonaws.com/dev/graphql';

let client = new ApolloClient({
    uri,
    request: (operation) => {
      const token = cookies.get('token');
      if(token){
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
                }
            })
        }
    }
});

let token = null;

export const userLogin = (username, password) => dispatch => {

    const LOGIN_GQL = gql`
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
    }).then(({data}) => {
        if(data.login){
            cookies.set('token', data.login.token, { path: '/' });

            dispatch({
                type: types.LOGIN,
                payload: data.login.token
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
    const FETCH_SHOP_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.FETCH_SHOP,
            payload: data.shop
        });   
    })
}

export const fetchMenus = (id) => dispatch => {

    const FETCH_MENU_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.FETCH_MENU,
            payload: data.getMenu
        });   
    })
}

export const deleteMenu = (menuid, shopid) => dispatch => {
    const DELETE_MENU_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.DELETE_MENU,
            payload: data.deleteMenu
        });   
    })
}

export const deleteShop = (shopid) => dispatch => {
    const DELETE_SHOP_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.DELETE_SHOP,
            payload: data.deleteShop.idshop
        });   
    })
}

export const addNewMenu = (shopid, menu_name) => dispatch => {

    const ADD_MENU_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.ADD_MENU,
            payload: data.addMenu.menu
        });   
    });
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
    const CREATE_SHOP_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.ADD_SHOP,
            payload: data.createShop
        });   
    })
}

export const fetchShopDetail = (shopid) => dispatch => {
    const FETCH_SHOP_DETAIL_GQL = gql`
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
    }).then(({data}) => {
        dispatch({
            type: types.FETCH_SHOP_DETAIL,
            payload: data.shop[0]
        });   
    })
}

export const updateShopDetail = (shopid, shop_addr, shop_phone, shop_order) => dispatch => {
    const UPDATE_SHOP_GQL = gql`
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
    }).then(({data}) => {
        dispatch({ type: types.UPDATE_SHOP_DETAIL, payload: data.updateShop })
        dispatch({ type: types.RESET_SHOP_DETAIL })
    });
}