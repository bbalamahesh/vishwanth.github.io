import React, { Component } from "react";

class ThumbGallery extends Component {
  render() {

    const array = ["thumb-01", "thumb-02", "thumb-03", "thumb-04", "thumb-05"];

    const images = array.map(image => {
      return (
        <div key={image} className="tile is-parent">
          <figure className="image is-480x480">
            <img src={`images/${image}.png`} alt="" className="img-responsive" />
          </figure >
        </div>
      );
    });

    return (
      <div className="tile is-ancestor thumb-gallery">
        <div className="tile is-parent">
          {images}
        </div>
      </div>
    );
  }
}

export default ThumbGallery;
