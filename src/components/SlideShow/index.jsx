import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slides from "../Slides/index.jsx";
import Toolbar from "../Toolbar/index.jsx";
import Container from "react-bootstrap/Container";

class SlideShow extends Component {
  render() {
    return (
      <Container>
        <Slides slides={this.props.slides} />
        <Toolbar slides={this.props.slides} />
      </Container>
    );
  }
}
export default SlideShow;
