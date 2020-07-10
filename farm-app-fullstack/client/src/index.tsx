import * as React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "./pages/Home";
import { InitService, InitSubject } from "./services/InitService";
import { useSharedState } from "./utils/utils";
import { AppServiceSubject } from "./services/AppService";

const App = () => {
  const [state] = useSharedState(AppServiceSubject);
  return (
    <div>
      <HomePage {...state} />
    </div>
  );
};

const appContainer = document.querySelector("#app");
ReactDOM.render(<App />, appContainer, () => InitSubject.next());
