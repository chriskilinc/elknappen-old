import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Credit from './Components/Credit';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          < Navigation />
        </header>
        < Hero />
        < Services />
        
      </div>
    );
  }
}

export default App;
