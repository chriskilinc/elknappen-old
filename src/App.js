import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import Hero from './Components/Hero';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          < Navigation />
        </header>
        < Hero />
      </div>
    );
  }
}

export default App;
