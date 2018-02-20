import React, { Component } from 'react';
import Header from './components/Header';
import Questions from './components/Questions';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Questions/>
			</div>
		);
	}
}

export default App;
