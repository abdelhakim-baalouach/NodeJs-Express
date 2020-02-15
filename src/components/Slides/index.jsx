import React, { Component } from "react";
class Slides extends Component {
  render() {
    this.props.slides.forEach(slide => {
      console.log(slide);
    });

    return <div>ok slides</div>;
  }
}
export default Slides;
