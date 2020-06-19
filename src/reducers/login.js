import { LOGIN, LOGIN_FAIL } from '../constants/ActionTypes';

const initial = {
    success : 0,
    error: 0,
    token: null
};

export default function(state = initial, action){
	switch(action.type){
		case LOGIN:
            return {
                success: 1,
                error: 0,
                token: action.payload
            };
        case LOGIN_FAIL:
            return {
                success: 0,
                error: 1,
                token: null
            }
        default:
            return state;
        
	}
}