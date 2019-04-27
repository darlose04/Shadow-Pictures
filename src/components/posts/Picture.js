import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Picture extends Component {

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_PICTURE', payload: id});
  }

  render() {
    const { id, desc, image } = this.props.picture;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="container">
              <div className="card mb-3">
              <img src={image} alt="dog pics" className="card-img-top"/>
                <div className="card-body">
                  {/* <h4 className="card-title">{title}</h4> */}
                  <p className="card-text">
                    {desc}
                    <i className="fas fa-trash-alt" style={{cursor: 'pointer', float:'right', color:'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                  </p>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Picture.propTypes = {
  picture: PropTypes.object.isRequired
}

export default Picture;