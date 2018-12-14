import React, { Component } from 'react';

class ProfileGithub extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.username}</h1>
			</div>
		);
	}
}

export default ProfileGithub;