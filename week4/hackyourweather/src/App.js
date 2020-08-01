import React from "react";
import Weather from "./cityInfo";
import CityDetails from "./CityDetails";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route path="/:cityId">
            <CityDetails />
          </Route>
          <Route path="/" exact>
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
