
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import DashBoard from './Components/Dashboard/DashBoard';
import NavBar from "./Components/Home/NavBar";
import Login from "./Components/Authentication/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivetRoute from "./Components/Authentication/PrivetRoute";
import { useEffect } from "react";
import notFound from './images/404.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CheckOut from "./Components/Booking/CheckOut";
import success from './images/success.png';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const userContext = createContext()
export const courseContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState()
  const [selectCourse, setSelectCourse] = useState()
  useEffect(() => {
    const loggedUser = JSON.parse(sessionStorage.getItem('user'))
    if (loggedUser) {
      setLoggedInUser(loggedUser)
    }
    AOS.init();
  }, [])
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <courseContext.Provider value={[selectCourse, setSelectCourse]}>
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
            <Route path="/checkOut/success">
              <NavBar />
              <div className="d-flex justify-content-center">
                <img src={success} alt="" style={{ height: '400px' }} />
              </div>
              <h1 className="text-center">Your Order Added Successfully.</h1>
              <Link to='/'><h6 className="text-center">Go Home</h6></Link>
            </Route>
            <PrivetRoute path="/checkOut">
              <CheckOut />
            </PrivetRoute>
            <Route path="*">
              <div className="d-flex justify-content-center">
                <img src={notFound} alt="" />
              </div>
            </Route>
          </Switch>
        </Router>
      </courseContext.Provider>
    </userContext.Provider>
  );
}

export default App;
