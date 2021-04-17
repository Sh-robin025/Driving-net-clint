
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './Components/Administration/DashBoard';
import Application from "./Components/Home/Application";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/administration">
          <DashBoard />
        </Route>
        <Route path="/applicationForm">
          <Application />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
