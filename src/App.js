import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import Home from "./views/Home";

export default () =>
  <Provider store={store}>
    <Home />
  </Provider>;
