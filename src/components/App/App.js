import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
        <Router>
          <Route exact path="/" component={MovieList} />
          <Route path="/details" component={Details} />
        </Router>
      </div>
    );
  }
}

export default App;
