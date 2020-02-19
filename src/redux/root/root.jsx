import React from "react";
import { Route, HashRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store.jsx";
import SlideShow from "../../components/SlideShow/index.jsx";

const App = () => (
  <div className="full-page">
    <HashRouter>
      <Route path="/:page" component={SlideShow} />
      <Redirect from="/" to="/1" />
    </HashRouter>
  </div>
);
console.log(store.getState());
const RootStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default RootStore;
