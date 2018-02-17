import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './lib/Icon';
import { SVGS } from './config';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
	        <Icon
		        cssClass="c-title"
		        icon={ SVGS.TITLE }
		        viewBox="0 0 676 40"
		        width="auto"
		        height="auto"
	        />
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
