import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Image Gallery" />
          <h1>This is going to be a site for pictures of Shadow, my dog.</h1>
        </div>
      </Router>
    );
  }
}

export default App;
