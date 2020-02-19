import React, { Component } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class Slide extends Component {
  render() {
    const { type, title, text } = this.props.slide;
    return (
      <Row>
        <Col className="mt-5" xs={12}>
          <p className="title">
            <span className="color-blue">{type} : </span> {title}
          </p>
        </Col>
        <Container>
          <Row>
            <Col>
              <p className="text">{text}</p>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}
Slide.propTypes = {
  slide: PropTypes.shape({
    type: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  })
};
export default Slide;
