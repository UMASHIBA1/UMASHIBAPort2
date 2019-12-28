import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import UMASHIBAPage from "./components/Pages/UMASHIBAPage";
import WorksPage from "./components/Pages/WorksPage";
import "./css/base.scss";
import reduxStore from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Switch>
          <Route path="/umashiba">
            <UMASHIBAPage />
          </Route>
          <Route path="/works">
            <WorksPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
