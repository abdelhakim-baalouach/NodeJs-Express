import React from "react";
import ReactDOM from "react-dom";
import LOGO from "../static/img/logo.png";

const Index = () => (
  <div>
    <h1>--- TP1 ---</h1>
    <img src={LOGO} alt="Logo" />
  </div>
);
ReactDOM.render(<Index />, document.getElementById("root"));
