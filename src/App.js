import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Volunteering } from "./Pages/Volunteering";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/volunteering" component={Volunteering} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
