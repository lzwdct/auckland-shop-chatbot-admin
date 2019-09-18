import _ from 'lodash';

import { FETCH_MENU, DELETE_MENU, ADD_MENU } from '../constants/ActionTypes';

export default function(state = [], action){
	switch(action.type){
		case FETCH_MENU:
			return [...action.payload];
		case DELETE_MENU:
			return _.filter(state, (x) => { return x.idmenu !== action.payload.menuid; });
		case ADD_MENU:
			return [
				...state,
				action.payload
			]
	}
	return state;
}