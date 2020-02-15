import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slide from "../Slide/index.jsx";
class Slides extends Component {
  componentDidMount() {
    this.props.slides.forEach(slide => {
      console.log(slide);
    });
  }

  render() {
    return <div>ok</div>;
  }
}
export default Slides;
