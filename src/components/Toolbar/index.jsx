import React, { Component } from "react";
import { connect } from "react-redux";
import {
  nextSlide,
  previousSlide,
  setSlide
} from "../../redux/actions/actions.jsx";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import { withRouter } from "react-router-dom";

class Toolbar extends Component {
  render() {
    const { index, size, nextSlide, previousSlide, setSlide } = this.props;
    const button = [];

    if (index > 0) {
      button.push(
        <Button
          href={"#/" + (index + 1)}
          variant="warning"
          className="ml-2"
          onClick={previousSlide}
        >
          Previous
        </Button>
      );
    }

    if (index < size - 1) {
      button.push(
        <Button
          href={"#/" + (index + 1)}
          variant="warning"
          className="ml-2"
          onClick={nextSlide}
        >
          Next
        </Button>
      );
    }

    const Items = [];
    for (let i = 0; i < size; i++) {
      Items.push(
        <Dropdown.Item
          eventKey={i}
          key={i}
          onSelect={e => {
            setSlide(e);
            window.location.href = `#/${parseInt(e) + 1}`;
          }}
        >
          {i + 1}
        </Dropdown.Item>
      );
    }

    return (
      <Row>
        <Navbar
          fixed="bottom"
          expand="lg"
          className="bg-dark justify-content-between"
        >
          <ButtonToolbar>{button}</ButtonToolbar>

          <DropdownButton
            className="mx-2"
            drop="up"
            variant="danger"
            title={index + 1}
            id="dropdown-button-drop-up"
            key="up"
          >
            {Items}
          </DropdownButton>
        </Navbar>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  const { index, slides } = state;
  return {
    index: index,
    size: slides.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    nextSlide: () => dispatch(nextSlide()),
    previousSlide: () => dispatch(previousSlide()),
    setSlide: index => dispatch(setSlide(index))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Toolbar)
);
