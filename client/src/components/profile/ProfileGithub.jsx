import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: '4e4d09e408192515cfa1',
			clientSecret: 'e8bf4c185bf2919083f6e1b284c1d71e02f4b8ac',
			count: 5,
			sort: 'created: asc',
			repos: []
		}
	}

	componentDidMount() {
		const { username } = this.props;
		const { count, sort, clientId, clientSecret } = this.state;

		fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
			.then(res => res.json())
			.then(data => {
				this.setState({repos: data});
			})
			.catch(err => console.log(err))
	}

	render() {
		const { repos } = this.state;

		const repoItems = repos.map(repo => (
			<div key={repo.id} className="card card-body mb-2">
				<div className="row">
					<div className="col-md-6">
						<h4>
							<a href={repo.html_url} className="text-info" target="_blank">
								{repo.name}
							</a>
						</h4>
						<p>{repo.description}</p>
					</div>
					<div className="col-md-6">
						<span className="badge badge-info mr-1">
							Stars: {repo.stargazer_count}
						</span>						
						<span className="badge badge-info mr-1">
							Watchers: {repo.watchers_count}
						</span>
						<span className="badge badge-info">
							Forks: {repo.forks.count}
						</span>
						
					</div>
				</div>
			</div>
		))
		return (
			<div>
				<hr />
				<h3 className="mb-4">Latest Github Repos</h3>
				{repoItems}
			</div>
		);
	}
}

ProfileGithub.propTypes = {
	username: PropTypes.string.isRequired
};

export default ProfileGithub;