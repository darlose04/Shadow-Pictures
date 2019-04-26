import React, { Component } from 'react';
import Picture from "./Picture";
import PropTypes from 'prop-types';

class Pictures extends Component {
  render() {
    return this.props.pictures.map((picture) => {
      <Picture key={picture.id} picture={picture} />
    });
  }
}

Pictures.propTypes = {
  pictures: PropTypes.array.isRequired
}

export default Pictures;