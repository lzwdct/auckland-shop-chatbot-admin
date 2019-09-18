import { FETCH_SHOP, ADD_SHOP, DELETE_SHOP, UPDATE_SHOP_DETAIL } from '../constants/ActionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SHOP:
            return [
                ...action.payload,
            ]
        case ADD_SHOP:
            return [
                ...state,
                action.payload
            ]
        case DELETE_SHOP:
            const deleteID = action.payload;
            const shop = state.map((obj) => {
                if (obj.idshop !== deleteID)
                    return obj;
            })
            const result = shop.filter(function (el) { return el; });
            return [...result]
        case UPDATE_SHOP_DETAIL:
            const data = action.payload;
            return state.map((obj) => {
                if (obj.idshop === data.idshop){
                    return data;
                }else{
                    return obj;
                }
            })
        default:
            return state;

    }
}