import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";



export default combineReducers({
	// Object with all of our reducers
	// Accessed later with this.props.auth
	auth: authReducer,
	errors: errorReducer,
	profile: profileReducer,
	post: postReducer
});
