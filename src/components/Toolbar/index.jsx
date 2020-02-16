import React, { Component } from "react";
import ReactDOM from "react-dom";
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

    this.state = {
      next: false,
      prev: true
    };
    this.previousSlider = this.previousSlider.bind(this);
    this.nextSlider = this.nextSlider.bind(this);
    this.onSelectDropDown = this.onSelectDropDown.bind(this);
  }

  nextSlider() {
    if (this.props.index < this.props.slides.length - 1) {
      this.setState({ prev: false });
      this.props.onChangeIndex(this.props.index + 1);
    } else this.setState({ next: true });
  }

  previousSlider() {
    if (this.props.index > 0) {
      this.setState({ next: false });
      const page = this.props.index - 1;
      this.props.onChangeIndex(page);
    } else this.setState({ prev: true });
  }
  onSelectDropDown(e) {
    this.props.onChangeIndex(e - 1);

    if (this.props.index == 1) this.setState({ prev: true });
    else this.setState({ next: false });

    if (this.props.index + 1 == this.props.slides.length)
      this.setState({ next: true });
    else this.setState({ prev: false });
  }

  render() {
    const npPage = this.props.index;
    return (
      <Row>
        <Navbar
          fixed="bottom"
          expand="lg"
          className="bg-dark justify-content-between"
        >
          <ButtonToolbar>
            <Button
              href={"#/" + npPage}
              variant="warning"
              className="ml-2"
              disabled={this.state.prev}
              onClick={this.previousSlider}
            >
              previous
            </Button>

            <Button
              href={"#/" + npPage}
              variant="warning"
              className="ml-2"
              disabled={this.state.next}
              onClick={this.nextSlider}
            >
              next
            </Button>
          </ButtonToolbar>

          <DropdownButton
            className="mx-2"
            drop={"up"}
            variant="danger"
            title={this.props.index + 1}
            id={"dropdown-button-drop-up"}
            key={"up"}
            onSelect={this.onSelectDropDown}
          >
            {this.props.slides.map((slide, index) => {
              return (
                <Dropdown.Item eventKey={index + 1} key={index + 1}>
                  {index + 1}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </Navbar>
      </Row>
    );
  }
}
export default Toolbar;
