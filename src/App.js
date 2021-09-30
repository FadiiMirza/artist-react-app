import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchBar from "./components/SearchBar";
import ArtistDetail from "./pages/ArtistDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/artist/:name">
          <ArtistDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
