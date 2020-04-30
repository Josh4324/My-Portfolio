import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Work from "./components/Work";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <ToastContainer autoClose={6000} hideProgressBar />
    </div>
  );
}

export default App;
