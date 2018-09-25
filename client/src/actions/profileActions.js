import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE } from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get('/api/profile')
		.then(res => 
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		)
		// If error gets empty object with option to create profile
		.catch(err =>
			dispatch({
				type: GET_PROFILE,
				payload: {}
			})
		);
}

// Create Profile
// pass profile data and history so we can redirect to dashboard
export const createProfile = (profileData, history) => dispatch => {
	axios
		.post('/api/profile', profileData)
		.then(res => history.push('/dashboard'))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
}

// Profile loading
export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	}
}

// Clear profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE
	}
}