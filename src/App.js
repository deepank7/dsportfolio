import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./components/";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects";
import Academics from "./components/Academics";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/academics" component={Academics} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
