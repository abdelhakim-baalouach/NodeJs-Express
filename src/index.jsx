import React from "react";
import ReactDOM from "react-dom";
import RootStore from "./redux/root/root.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";

ReactDOM.render(<RootStore />, document.getElementById("root"));
