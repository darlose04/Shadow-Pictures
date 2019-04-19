import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="ShadowGram" />
          
        </div>
      </Router>
    );
  }
}

export default App;
