import * as React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "./pages/Home";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

const appContainer = document.querySelector("#app");
ReactDOM.render(<App />, appContainer);
