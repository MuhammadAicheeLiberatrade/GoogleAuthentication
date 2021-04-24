import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import Main from './Components/Main';
import 'semantic-ui-css/semantic.min.css'
function App() {
	return (
		<div className="App">
			<Router>
				<div className="container">
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/main" component={Main} />
					</Switch>
				</div>
			</Router>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
