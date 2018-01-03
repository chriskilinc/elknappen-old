import React, { Component } from 'react';
import './App.css';

import Hero from './Components/Hero';


class App extends Component {

  constructor() {
    super();
    this.state = {
      article: {
        title:{
          rendered: ''
        },
        content:{
          rendered: ''
        },
        id: undefined,
      },
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

        
        data.content.rendered = this.cleanHtml(data.content.rendered);
        data.content.rendered = this.toUnicode(data.content.rendered);

        //let newContent = data.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
        //data.content.rendered = newContent;

        this.setState({
          article: data
        })
      })
  }

  cleanHtml = (dirtyContent) => {
    let cleanedContent = dirtyContent.replace(/<\/?[^>]+(>|$)/g, "");
    return cleanedContent;
  }

  //  Doesnt do what i want
  toUnicode= (str) => {
    return str.split('').map(function (value, index, array) {
      var temp = value.charCodeAt(0).toString(16).toUpperCase();
      if (temp.length > 2) {
        return '\\u' + temp;
      }
      return value;
    }).join('');
  }
  

  render() {
    return (
      <div className="App">

        <Hero articleId={this.state.article.id} articleTitle={this.state.article.title.rendered} articleContent={this.state.article.content.rendered}/>
      </div>
    );
  }
}

export default App;
