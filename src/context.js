import React, { Component } from 'react';
import uuid from 'uuid';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_PICTURE':
      return {
        ...state,
        pictures: state.pictures.filter(picture => picture.id !== action.payload)
      }
    case 'ADD_PICTURE':
      return {
        ...state,
        pictures: [action.payload, ...state.pictures]
      }
    default:
      return state;
  }
}

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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