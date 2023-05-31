import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import { PokemonApp } from "./PokemonApp.jsx";
import { TodoRTKApp } from "./TodoRTKApp.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoRTKApp />
    </Provider>
  </React.StrictMode>
);
