import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

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
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="text"
										// Classes form-control and form-control-lg will always be there
										// Class is-invalid will only be added if errors.name is in the errors object
										className={classnames(
											"form-control form-control-lg",
											{
												"is-invalid": errors.name
											}
										)}
										placeholder="Name"
										name="name"
										value={this.state.name}
										onChange={this.onChange}
									/>
									{errors.name && (
										<div className="invalid-feedback">
											{errors.name}
										</div>
									)}
								</div>
								<div className="form-group">
									<input
										type="email"
										className={classnames(
											"form-control form-control-lg",
											{
												"is-invalid": errors.email
											}
										)}
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
									{errors.email && (
										<div className="invalid-feedback">
											{errors.email}
										</div>
									)}
									<small className="form-text text-muted">
										This site uses Gravatar so if you want a
										profile image, use a Gravatar email
									</small>
								</div>
								<div className="form-group">
									<input
										type="password"
										className={classnames(
											"form-control form-control-lg",
											{
												"is-invalid": errors.password
											}
										)}
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
									{errors.password && (
										<div className="invalid-feedback">
											{errors.password}
										</div>
									)}
								</div>
								<div className="form-group">
									<input
										type="password"
										className={classnames(
											"form-control form-control-lg",
											{
												"is-invalid": errors.password2
											}
										)}
										placeholder="Confirm Password"
										name="password2"
										value={this.state.password2}
										onChange={this.onChange}
									/>
									{errors.password2 && (
										<div className="invalid-feedback">
											{errors.password2}
										</div>
									)}
								</div>
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
