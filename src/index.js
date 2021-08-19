import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import {FavoritesContextProvider} from './store/favorite-context.js';
// {} means not default export but function instead
ReactDOM.render(
  <FavoritesContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
