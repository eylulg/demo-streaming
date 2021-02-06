import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Series from "./components/Series";
import Movies from "./components/Movies";
import Error from "./components/Error";
import "./App.css"

const App = () => {
  return (
    <div>
      <Link to="/">DEMO Streaming</Link>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Series} path="/series" />
        <Route component={Movies} path="/movies" />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;