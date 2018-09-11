import isEmpty from "../validation/is-empty.js";

import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				// isAuthenticated depends on the payload not being empty
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		default:
			return state;
	}
}
