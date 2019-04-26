import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/layout/Header";
import Pictures from "./components/posts/Pictures";
import AddPicture from "./components/posts/AddPicture";
import uuid from 'uuid';

import dogs from './pics/shadowviolet.jpeg';
import puppy from './pics/puppy.jpeg';

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    pictures: [
      {
        id: uuid.v4(),
        title: 'Patient',
        desc: 'Shadow waiting to go for a walk.',
        image: {puppy}
      },
      {
        id: uuid.v4(),
        title: 'Chillin',
        desc: 'Shadow hanging out with his buddy Violet.',
        image: {dogs}
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