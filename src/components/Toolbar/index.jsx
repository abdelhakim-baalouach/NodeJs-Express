import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Row from "react-bootstrap/Row";
import Left from "@material-ui/icons/ArrowLeftRounded";
import Right from "@material-ui/icons/ArrowRightRounded";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      next: false,
      prev: true
    };
    this.previousSlider = this.previousSlider.bind(this);
    this.nextSlider = this.nextSlider.bind(this);
  }
  nextSlider() {
    if (this.state.page < this.props.slides.length) {
      this.setState({ prev: false });
      alert(this.state.page + 1);
      this.setState({
        page: this.state.page + 1
      });
    } else this.setState({ next: true });
  }

  previousSlider() {
    if (this.state.page > 1) {
      this.setState({ next: false });
      alert(this.state.page - 1);
      this.setState({
        page: this.state.page - 1
      });
    } else this.setState({ prev: true });
  }
  render() {
    return (
      <Row>
        <Navbar
          fixed="bottom"
          expand="lg"
          className="bg-dark justify-content-between"
        >
          <ButtonToolbar>
            <Button
              variant="warning"
              className="ml-2"
              onClick={this.previousSlider}
              disabled={this.state.prev}
            >
              <Left />
            </Button>
            <Button
              variant="warning"
              className="ml-2"
              onClick={this.nextSlider}
              disabled={this.state.next}
            >
              <Right />
            </Button>
          </ButtonToolbar>

          <DropdownButton
            className="mx-2"
            drop={"up"}
            variant="danger"
            title={"1"}
            id={"dropdown-button-drop-up"}
            key={"up"}
          >
            {this.props.slides.map((slide, index) => {
              return (
                <Dropdown.Item eventKey="{index+1}" key={index + 1}>
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
