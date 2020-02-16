import React, { Component } from "react";
import ReactDOM from "react-dom";
import Slides from "../Slides/index.jsx";
import Toolbar from "../Toolbar/index.jsx";
import Container from "react-bootstrap/Container";

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 1 };
    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(index) {
    console.log("slideShow " + index);
    this.setState({ index });
  }

  render() {
    console.log("slideShow " + this.state.index);
    return (
      <Container>
        <Slides slides={this.props.slides} index={this.state.index} />
        <Toolbar
          slides={this.props.slides}
          index={this.state.index}
          onChangeIndex={this.changeIndex}
        />
      </Container>
    );
  }
}
export default SlideShow;
