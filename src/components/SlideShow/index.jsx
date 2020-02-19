import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { withRouter } from "react-router";
import Slides from "../Slides/index.jsx";
import Toolbar from "../Toolbar/index.jsx";

class SlideShow extends Component {
  render() {
    return (
      <Container>
        <Slides />
        <Toolbar />
      </Container>
    );
  }
}

export default withRouter(SlideShow);
