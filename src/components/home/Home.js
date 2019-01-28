import React, { Component } from "react";
import HeroBanner from "../hero-banner/HeroBanner";
import ThumbGallery from "../thumb-gallery/ThumbGallery";

class Home extends Component {
  render() {
    return (
      <div>
        <HeroBanner />
        <ThumbGallery />
      </div>
    );
  }
}

export default Home;
