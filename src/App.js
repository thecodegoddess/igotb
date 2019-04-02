// @flow
import React from 'react';
import Header from './components/Header';
import BingoGame from './components/BingoGame';
import './assets/meta/meta-image.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BingoGame />
    </div>
  );
}

export default App;
