import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddPicture extends Component {
  state = {
    desc: '',
    image: ''
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { desc, image } = this.state;

    const newPicture = {
      id: uuid.v4(),
      desc,
      image: require()
    }

    dispatch({type: 'ADD_CONTACT', payload: newPicture})

    // clear state
    this.setState({
      desc: '',
      image: ''
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { desc, image } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header bg-dark text-light">
                Add Picture
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input 
                      type="text" 
                      name="desc"
                      className="form-control"
                      placeholder="Enter description..."
                      value={desc}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Add image</label>
                    <input 
                      type="file"
                      name="image"
                      className="form-control-file"
                      value={image}
                      onChange={this.onChange}
                    />
                  </div>
                  <input type="submit" value="Add Picture" className="btn btn-block btn-primary"/>
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddPicture;