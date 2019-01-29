import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThumbGallery extends Component {
  render() {

    const array = ["thumb-01", "thumb-02", "thumb-03", "thumb-04", "thumb-05"];

    const images = array.map(image => {
      return (
        <div key={image} className="tile is-parent">
          <figure className="image is-480x480">
            <Link to='/photos'>
              <img src={`images/${image}.png`} alt="" className="img-responsive" />
            </Link>
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
