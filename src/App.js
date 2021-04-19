
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import Application from "./Components/Home/Application";
import NavBar from "./Components/Home/NavBar";
import Login from "./Components/Authentication/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivetRoute from "./Components/Authentication/PrivetRoute";

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>
          <PrivetRoute path="/dashBoard">
            <DashBoard />
          </PrivetRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivetRoute path="/applicationForm">
            <Application />
          </PrivetRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
