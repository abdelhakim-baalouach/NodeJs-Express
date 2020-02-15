import React from "react";
import ReactDOM from "react-dom";
import SlideShow from "./components/SlideShow/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";

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

const Index = () => (
  <div className="full-page">
    <SlideShow slides={SLIDES} />
  </div>
);
ReactDOM.render(<Index />, document.getElementById("root"));
