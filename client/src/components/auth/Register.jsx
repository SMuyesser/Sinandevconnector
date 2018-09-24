import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {}
		};
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	// We get errors from redux state and gets put into props with mapstatetoprops
	// once recieve new properties and errors is included, then it gets set to component state
	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	// Handler for Change events setting the state for each input on change
	// Since we are using for multiple fields
	// [e.target.name] will be the name for each field eg. name, email, password, password2
	// e.target value will be the value of each field
	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		// Second parameter allows us to use this.props.history to redicrect from within the action
		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		// Pulls errors object out of state
		const { errors } = this.state;

		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<p className="lead text-center">
								Create your DevConnector account
							</p>
							<form noValidate onSubmit={this.onSubmit}>
								<TextFieldGroup
									placeholder="Enter Name"
									name="name"
									value={this.state.name}
									onChange={this.onChange}
									error={errors.name}
								/>
								<TextFieldGroup
									placeholder="Email Address"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
									info="This site uses Gravatar so if you want a profile image, use a gravatar email"
								/>
								<TextFieldGroup
									placeholder="Password"
									name="password"
									type="password"
									value={this.state.password}
									onChange={this.onChange}
									error={errors.password}
								/>
								<TextFieldGroup
									placeholder="Confirm Password"
									name="password2"
									type="password"
									value={this.state.password2}
									onChange={this.onChange}
									error={errors.password2}
								/>
								<input
									type="submit"
									className="btn btn-info btn-block mt-4"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

// function that puts the auth state into this.props.auth
// property auth on left and reducer auth on right
const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Register));
