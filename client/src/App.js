import "./App.css";
import Why from "./components/pages/Why";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/pages/Search";
import Resources from "./components/pages/Resources";
import Features from "./components/pages/Features";
import Solutions from "./components/pages/Solutions";
import Navbar2 from "./components/navbar/Navbar2";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar2 />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/why" component={Why} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/resources" component={Resources} />
        <div className="App">
          <Search />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
