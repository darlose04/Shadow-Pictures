import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddPicture extends Component {
  state = {
    desc: '',
    image: ''
  }

  render() {
    return (
      <div className="card mb-3">
        <div className="card-header">
          Add Picture
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <input 
                type="text" 
                name="desc"
                className="form-control"
                placeholder="Enter description..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Add image</label>
              <input 
                type="file"
                className="form-control-file"
              />
            </div>
            <input type="submit" value="Add Picture" className="btn btn-block btn-primary"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddPicture;