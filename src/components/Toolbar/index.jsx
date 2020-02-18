import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
// import Left from "@material-ui/icons/ArrowLeftRounded";
// import Right from "@material-ui/icons/ArrowRightRounded";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    const { index, size } = this.props;
    this.state = {
      next: index === 1,
      prev: index < size
    };
    this.previousSlider = this.previousSlider.bind(this);
    this.nextSlider = this.nextSlider.bind(this);
    this.onSelectDropDown = this.onSelectDropDown.bind(this);
  }

  nextSlider() {
    const { index, size, onChangeIndex } = this.props;
    if (index < size - 1) {
      this.setState({ prev: false });
      onChangeIndex(index + 1);
    } else this.setState({ next: true });
  }

  previousSlider() {
    const { index, onChangeIndex } = this.props;
    if (index > 0) {
      this.setState({ next: false });
      onChangeIndex(index - 1);
    } else this.setState({ prev: true });
  }

  onSelectDropDown(e) {
    const { index, size, onChangeIndex } = this.props;
    onChangeIndex(e);

    if (index === 1) this.setState({ prev: true });
    else this.setState({ next: false });

    if (index + 1 === size) this.setState({ next: true });
    else this.setState({ prev: false });

    window.location.href = `#/${parseInt(e) + 1}`;
  }

  render() {
    const { index, size } = this.props;
    const { next, prev } = this.state;

    const Items = [];
    for (let i = 0; i < size; i++) {
      Items.push(
        <Dropdown.Item eventKey={i} key={i}>
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
          <ButtonToolbar>
            <Button
              href={`#/${index + 1}`}
              variant="warning"
              className="ml-2"
              disabled={prev}
              onClick={this.previousSlider}
            >
              previous
            </Button>

            <Button
              href={`#/${index + 1}`}
              variant="warning"
              className="ml-2"
              disabled={next}
              onClick={this.nextSlider}
            >
              next
            </Button>
          </ButtonToolbar>

          <DropdownButton
            className="mx-2"
            drop="up"
            variant="danger"
            title={index + 1}
            id="dropdown-button-drop-up"
            key="up"
            onSelect={this.onSelectDropDown}
          >
            {Items}
          </DropdownButton>
        </Navbar>
      </Row>
    );
  }
}
export default Toolbar;
