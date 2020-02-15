import React, { Component } from "react";
import Slides from "../Slides/index.jsx";
import Toolbar from "../Toolbar/index.jsx";

const SLIDES = [
  { type: "title", title: "TIW 8", visible: true, notes: "" },
  {
    type: "content",
    title: "TP 1",
    text: "Le TP porte sur des rappels de developpement Web",
    visible: false,
    notes: "ce transparent est caché"
  },
  {
    type: "content",
    title: "TP 2",
    text: "Le TP porte sur la creation d'un outil de presentation HTML",
    visible: true,
    notes: ""
  },
  { type: "content", title: "TP 3", text: "Le TP 3", visible: true, notes: "" },
  { type: "content", title: "TP 4", text: "Le TP 4", visible: true, notes: "" },
  { type: "title", title: "Question ?", visible: true, notes: "" }
];

class SlideShow extends Component {
  render() {
    return (
      <div>
        <Slides slides={SLIDES} />
        <Toolbar slides={SLIDES} />
      </div>
    );
  }
}
export default SlideShow;
