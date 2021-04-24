import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from 'react-router';
import logo from '../logo.svg';
type MyState = {
	loginCorrect: boolean; // like this
};
export class Login extends Component<MyState> {
	state: MyState = {
		loginCorrect: false
	};

	responseGoogle = (response: any) => {
		console.log(response, 'Ahsan');

		var res = response.profileObj;

		console.log(res);
		localStorage.setItem('Data', JSON.stringify(res));
		localStorage.setItem('Login', JSON.stringify('1'));
		this.setState({
			loginCorrect: true
		});
	};
	ahsan = () => {};
	render() {
		const clientId: string = '473267098191-7k89d77kv37ngntp6oc5le7o95u2m294.apps.googleusercontent.com';
		if (this.state.loginCorrect === true) {
			return <Redirect to="/main" />;
		}
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<GoogleLogin
					clientId={clientId}
					cookiePolicy={'single_host_origin'}
					onSuccess={this.responseGoogle}
					onFailure={this.responseGoogle}
					buttonText="Login with Google"
					style={{ marginTop: '1000px', backgroundColor: 'blue' }}
				>
					{/* <FontAwesome name="google" /> */}
					<span> Login with Google</span>
				</GoogleLogin>
			</header>
		);
	}
}
