import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Search />
      </div>
    </Router>
  );
}

export default App;
