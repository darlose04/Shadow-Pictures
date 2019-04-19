import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";
import Picture from "./components/posts/Picture";
import AddPicture from "./components/posts/AddPicture";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="ShadowGram" />
          <div className="container">
            <Switch>
              <Route exact path="/posts/add" component={AddPicture} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;