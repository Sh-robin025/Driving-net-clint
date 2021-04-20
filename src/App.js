
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import NavBar from "./Components/Home/NavBar";
import Login from "./Components/Authentication/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivetRoute from "./Components/Authentication/PrivetRoute";
import { useEffect } from "react";
import Booking from "./Components/Booking/Booking";
import notFound from './images/404.gif';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  useEffect(() => {
    const loggedUser = JSON.parse(sessionStorage.getItem('user'))
    if (loggedUser) {
      setLoggedInUser(loggedUser)
    }
  }, [])
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
          <PrivetRoute path="/checkOut">
            <Booking />
          </PrivetRoute>
          <Route path="*">
            <div className="d-flex justify-content-center">
              <img src={notFound} alt="" />
            </div>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
