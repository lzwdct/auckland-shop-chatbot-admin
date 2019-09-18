import { CONFIRM } from '../constants/ActionTypes';

export default function(state = false, action){
	switch(action.type){
		case CONFIRM:
            return action.payload;
        default:
            return state;
        
	}
}