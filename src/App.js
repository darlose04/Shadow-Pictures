import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";
import Pictures from "./components/posts/Pictures";
import AddPicture from "./components/posts/AddPicture";
import uuid from 'uuid';

// phone images are too big
// import sleep from './pics/shadowsleep.jpg'

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    pictures: [
      {
        id: uuid.v4(),
        title: 'Snoozing',
        desc: 'Shadow sleeping on his back when he was just a pup.',
        image: ''
      },
      {
        id: uuid.v4(),
        title: 'Chillin',
        desc: 'Shadow hanging out in the driveway.',
        image: ''
      }
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="ShadowGram" />
          <div className="container">
            <Switch>
              <Route exact path="/posts" render={props => (
                <React.Fragment>
                  <Pictures pictures={this.state.pictures} />
                </React.Fragment>
              )} />
              <Route exact path="/posts/add" component={AddPicture} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;