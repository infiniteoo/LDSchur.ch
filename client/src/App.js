import "./App.css";
import Why from "./components/pages/Why";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search";
import Resources from "./components/pages/Resources";
import Features from "./components/pages/Features";
import Solutions from "./components/pages/Solutions";
import Contact from "./components/pages/Contact";
import NavBar from "./components/navbar/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/why" component={Why} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/contact" component={Contact} />
        <div className="App">
          <Search />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
