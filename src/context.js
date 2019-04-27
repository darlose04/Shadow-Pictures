import React, { Component } from 'react';
import uuid from 'uuid';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    pictures: [
      {
        id: uuid.v4(),
        // title: 'Patient',
        desc: 'Shadow waiting to go for a walk.',
        image: require('./pics/puppy.jpeg')
      },
      {
        id: uuid.v4(),
        // title: 'Chillin',
        desc: 'Shadow hanging out with his buddy Violet.',
        image: require('./pics/shadowviolet.jpeg')
      }
    ]
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;