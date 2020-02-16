import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slide from "../Slide/index.jsx";
class Slides extends Component {
  render() {
    return <Slide slide={this.props.slides[this.props.index]} />;
  }
}
export default Slides;
