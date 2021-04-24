import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { GoogleLogout } from 'react-google-login';
import { Button, Icon } from 'semantic-ui-react';

type MyState = {
	UserData: any;
	logout: boolean;
};
export default class Main extends Component<MyState> {
	state: MyState = {
		UserData: {
			email: '',
			familyName: '',
			givenName: '',
			imageUrl: '',
			name: ''
		},
		logout: false
	};
	componentDidMount() {
		var Data = JSON.parse(localStorage.getItem('Data') || '{}');
		this.setState({
			UserData: Data
		});
	}
	logout = () => {
		console.log('logging out');
		localStorage.clear();
		this.setState({
			logout: true
		});
	};
	render() {
		console.log(this.state)
        const UserData = this.state.UserData;
		const clientId: string = '473267098191-7k89d77kv37ngntp6oc5le7o95u2m294.apps.googleusercontent.com';
		if (UserData !== {} && this.state.logout === false)
			return (
				<div>
					{this.state.UserData !== {} ? (
						<header className="App-header">
							<img src={UserData.imageUrl} alt="logo" />
							<p style={{marginTop:'1rem'}}> {UserData.email}</p>
							<a className="App-link" target="_blank" rel="noopener noreferrer">
								{UserData.name}
							</a>
                            
								<Button color="google plus" style={{marginTop:'1.5rem'}} onClick={()=>{this.logout()}}>
									<Icon name="google plus" /> Logout
								</Button>
							
						</header>
					) : null}
				</div>
			);
		else if (this.state.logout === true) {
			return <Redirect to="/" />;
		}
        else{
            return <Redirect to="/" />;
        }
	}
}
