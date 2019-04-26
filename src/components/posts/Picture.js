import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Picture extends Component {
  render() {
    const { id, title, desc, image } = this.props.picture;
    return (
      <div className="container">
        <div className="card mb-3">
        <img src={image} alt="dog pics" className="card-img-top"/>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </div>
    )
  }
}

Picture.propTypes = {
  picture: PropTypes.object.isRequired
}

export default Picture;