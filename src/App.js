import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation';
import NavigationContainer from './Components/NavigationContainer';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Projects from './Components/Projects';
import About from './Components/About';
import Footer from './Components/Footer';

import Credit from './Components/Credit';

class App extends Component {

  render() {
    return (
      <div className="App">
        
          < NavigationContainer />  
          < Hero />
          < Services />
          < Projects />
          < About />
          < Footer />
        
      </div>
    );
  }
}

export default App;
