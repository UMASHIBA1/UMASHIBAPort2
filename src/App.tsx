import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import "./css/base.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
