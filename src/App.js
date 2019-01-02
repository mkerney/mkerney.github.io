import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileLanding from './components/landingPage/landingPage';
import ProfileContent from './components/contentPage/contentPage';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Route path='/content' component={ProfileContent}/>
						<Route path='/' component={ProfileLanding}/>
					</Switch>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
