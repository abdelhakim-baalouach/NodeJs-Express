import React from "react";
import ReactDOM from "react-dom";
import LOGO from "../static/img/logo.png";

const Index = () => {
  return (
    <div>
      <div>TP1!</div>
      <img src={LOGO} alt="Logo" />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById("root"));
