import React, { Component } from "react";
import PhotoGrid from "../photo-grid/PhotoGrid";

class Photos extends Component {
  render() {

    return (
      <div className="container">
        <PhotoGrid />
      </div>
    );
  }
}

export default Photos;