import { FETCH_SHOP_DETAIL, RESET_SHOP_DETAIL } from '../constants/ActionTypes';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SHOP_DETAIL:
            return action.payload;
        case RESET_SHOP_DETAIL:
            return []
        default:
            return state;

    }
}