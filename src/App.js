import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Typescript Tutorial for Beginners", id: 2 }
      ]
    }
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p> Learn React/Redux </p>
          <ul>{articles.map(item => <li key={item.id}>{item.title}</li>)}</ul>
        </header>
      </div>
    );
  }
}