import React from "react";
import ReactDOM from "react-dom";
import SlideShow from "./components/SlideShow/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = () => (
  <div>
    <SlideShow />
  </div>
);
ReactDOM.render(<Index />, document.getElementById("root"));
