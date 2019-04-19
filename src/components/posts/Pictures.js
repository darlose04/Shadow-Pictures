import React, { Component } from 'react';
import Picture from "./Picture";

class Pictures extends Component {
  render() {
    return (
      <div>
        <Picture />
        <h2>This will be the page that lists all the picture posts</h2>
      </div>
    )
  }
}

export default Pictures;