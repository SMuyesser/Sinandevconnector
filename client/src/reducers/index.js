import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
	// Object with all of our reducers
	// Accessed later with this.props.auth
	auth: authReducer
});
