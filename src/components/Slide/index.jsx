import React, { Component } from "react";
import "../../../static/css/style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Col";

class Slide extends Component {
  render() {
    return (
      <Row>
        <Col className="mt-5" xs={12}>
          <p className="title">
            <span className="color-blue">{this.props.slide.type} : </span>{" "}
            {this.props.slide.title}
          </p>
        </Col>
        <Container>
          <Row>
            <Col>
              <p className="text">{this.props.slide.text}</p>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}
export default Slide;
