import React, { Component } from "react";
import YouTube from "react-youtube";

class Videos extends Component {
  render() {
    const opts = {
      height: "192",
      width: "320",
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 1,
        showinfo: 0
        // controls: 0
      }
    };

    return (
      <div className="video-gallery">
        <YouTube
          videoId="LGew2ph6UgM"
          opts={opts}
          onReady={this._onReady}
        />

        <YouTube
          videoId="nTC7rSd-OC4"
          opts={opts}
          onReady={this._onReady}
        />

        <YouTube
          videoId="Z-mOFaauRdI"
          opts={opts}
          onReady={this._onReady}
        />

        <YouTube
          videoId="ouFTmd-2h_o"
          opts={opts}
          onReady={this._onReady}
        />

      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Videos;
