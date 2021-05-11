import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/HomePage/Home";
import { About } from "./Pages/AboutPage/About";
import { Projects } from "./Pages/ProjectPage/Projects";
import ProjectList from "./Pages/ProjectPage/ProjectList";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/project/1" component={ProjectList} />
        <Route path="/project/2" component={ProjectList} />
        <Route path="/project/3" component={ProjectList} />
        <Route path="/project/4" component={ProjectList} />
        <Route path="/project/5" component={ProjectList} />
      </Switch>
    </Router>
  );
}

export default App;
