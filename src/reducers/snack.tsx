import { SNACK } from '../constants/ActionTypes';

const initialState = {
    open: false,
    message: ''
}
export default function(state = initialState, action){
	switch(action.type){
		case SNACK:
            return {
                open: action.payload.open,
                message: action.payload.message
            };
        default:
            return state;
        
	}
}