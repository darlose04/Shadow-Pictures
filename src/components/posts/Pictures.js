import React, { Component } from 'react';
import { Consumer } from '../../context';
import Picture from "./Picture";
// import PropTypes from 'prop-types';

class Pictures extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { pictures } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">Posts</h1>
              {pictures.map(picture => (
                <Picture 
                  key={picture.id}
                  picture={picture}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    );
  }
}

export default Pictures;