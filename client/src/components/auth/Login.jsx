import React, { Component } from "react";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};

		// Rather than adding .bind(this) to each change event
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Handler for Change events setting the state for each input on change
	// Since we are using for multiple fields
	// [e.target.name] will be the name for each field eg. email, password
	// e.target value will be the value of each field
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const loginInfo = {
			email: this.state.email,
			password: this.state.password
		};

		console.log(loginInfo);
	}

	render() {
		return (
			<div className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">
								Sign in to your DevConnector account
							</p>
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="email"
										className="form-control form-control-lg"
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
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

export default Login;
