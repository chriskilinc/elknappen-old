import React, { Component } from 'react';
import './App.css';

import Hero from './Components/Hero';


class App extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
    }

  }

  componentDidMount = () => {
    //this.getPostById(4);
    this.getArticleById(4);
  }



  getArticleById = (id) => {
    fetch("http://wp.elknappen.se/wp-json/wp/v2/posts/" + id)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          article: data
        })
        console.log(this.state.article.title.rendered);
      })
  }


  render() {
    return (
      <div className="App">

        <Hero articleId={this.state.article.id} articleTitle={this.state.article.title.rendered}/>
      </div>
    );
  }
}

export default App;
