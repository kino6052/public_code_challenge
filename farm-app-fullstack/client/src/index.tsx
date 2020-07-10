import * as React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "./pages/Home";
import { InitSubject } from "./services/InitService";
import { useSharedState } from "./utils/utils";
import { AppServiceSubject } from "./services/AppService";
import { RouterService } from "./services/RouterService";
import { FarmPage } from "./pages/Farm";

const App = () => {
  const [state] = useSharedState(AppServiceSubject);
  const { route } = state;
  return (
    <div>
      {RouterService.isHomePageRoute(route) && <HomePage {...state} />}
      {RouterService.isFarmPageRoute(route) && <FarmPage />}
    </div>
  );
};

const appContainer = document.querySelector("#app");
ReactDOM.render(<App />, appContainer, () => InitSubject.next());
