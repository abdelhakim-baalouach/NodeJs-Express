import React from "react";
import ReactDOM from "react-dom";
import SlideShow from "./components/SlideShow/index.jsx";
import { HashRouter, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/css/style.css";

const Index = () => (
  <div className="full-page">
    <HashRouter>
      <Route path="/:page" component={SlideShow} />
      <Redirect from="/" to="/0" />
    </HashRouter>
  </div>
);
ReactDOM.render(<Index />, document.getElementById("root"));
