import React from "react";
import ReactDOM from "react-dom";
// Import de l'image
import LOGO from '<path-to-file>/logo.png';

const Index = () => {
  return (
    <div>TP1!</div>
    <img src={LOGO} alt="Logo" />
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
