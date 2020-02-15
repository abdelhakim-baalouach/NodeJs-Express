import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Toolbar extends Component {
  render() {
    return (
      <Navbar
        fixed="bottom"
        expand="lg"
        className="bg-light justify-content-between"
      >
        <ButtonToolbar>
          <Button variant="outline-primary">Prec</Button>
          <Button variant="outline-primary">Suiv</Button>
        </ButtonToolbar>
        <Dropdown as={ButtonGroup} drop={"up"}>
          <Button variant="success">page</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
}
export default Toolbar;
