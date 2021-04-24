import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { GoogleLogout } from 'react-google-login';

type MyState = {
	UserData: any;
};
export default class Main extends Component<MyState> {
	state: MyState = {
		UserData: {
			email: '',
			familyName: '',
			givenName: '',
			imageUrl: '',
			name: ''
		}
	};
	componentDidMount() {
		var Data = JSON.parse(localStorage.getItem('Data') || '{}');
		this.setState({
			UserData: Data
		});
	}
	render() {
		const UserData = this.state.UserData;
        const clientId: string = '473267098191-7k89d77kv37ngntp6oc5le7o95u2m294.apps.googleusercontent.com';
		if (UserData !== {})
			return (
				<div>
					{this.state.UserData !== {} ? (
						<header className="App-header">
							<img src={UserData.imageUrl} alt="logo" />
							<p>{UserData.email}</p>
							<a className="App-link" target="_blank" rel="noopener noreferrer">
								{UserData.name}
							</a>
							<GoogleLogout
								clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
								buttonText="Logout"
								// onLogoutSuccess={logout}
							/>
						</header>
					) : null}
				</div>
			);
		else {
			return <Redirect to="/" />;
		}
	}
}
