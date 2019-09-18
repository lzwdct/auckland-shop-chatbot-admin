import { LOGIN, LOGIN_FAIL } from '../constants/ActionTypes';

const initial = {
    success : 0,
    error: 0
};

export default function(state = initial, action){
	switch(action.type){
		case LOGIN:
            return {
                success: action.payload,
                error: !action.payload
            };
        case LOGIN_FAIL:
            return {
                success: 0,
                error: 1
            }
        default:
            return state;
        
	}
}