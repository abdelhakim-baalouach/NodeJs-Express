import React, { Component } from "react";
class Slide extends Component {
  render() {
    const slide = this.props.slide;
    const title = slide.title ? "title" : "...";

    return (
      <div>
        <h1> {slide.title} </h1>
      </div>
    );
  }
}
export default Slide;
