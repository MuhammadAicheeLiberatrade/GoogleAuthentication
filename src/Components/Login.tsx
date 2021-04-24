import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
export class Login extends Component {
	responseGoogle = (response:any) => {
        console.log(response);

        var res = response.profileObj;

        console.log(res);

        debugger;	}
	ahsan = () => {};
	render() {
		const responseGoogle = (response:any) => {
			
		};
		return (
			<GoogleLogin
				clientId={'473267098191-7k89d77kv37ngntp6oc5le7o95u2m294.apps.googleusercontent.com'}
				onSuccess={this.responseGoogle}
				onFailure={this.responseGoogle}
			>
				{/* <FontAwesome name="google" /> */}
				<span> Login with Google</span>
			</GoogleLogin>
		);
	}
}
