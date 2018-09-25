import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Component, auth, and rest of props passed in
const PrivateRoute = ({component: Component, auth, ...rest}) => (
	<Route
		// pass in rest of any props the component has
		{...rest}
		render = {props =>
			// if authenticated load the component with props
			// else redirect to login
			auth.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to="/login" />
			)
		}
	/>
);

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);