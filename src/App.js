import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App-Container">
      <Header
        children={
          <Link className="Demo-Button" to="/">
            DEMO Streaming
          </Link>
        }
        title={<span>Popular Titles</span>}
      />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Series} path="/series" />
        <Route component={Movies} path="/movies" />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
