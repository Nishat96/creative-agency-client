import React, { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import CustomerOrder from './components/CustomerOrder/CustomerOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
          <Switch>
            <Route path = "/home">
              <Home/>
            </Route>
            <Route path = "/login">
              <Login/>
            </Route>
            <PrivateRoute path = "/order">
              <CustomerOrder/>
            </PrivateRoute>
            {/* <Route path = "/order">
              <CustomerOrder/>
            </Route> */}
            <Route exact path = "/">
            <Home/>
          </Route>
          <Route path = "*">
            <NoMatch/>
          </Route>
            </Switch>
        </Router>  
   
    </UserContext.Provider>
  );
}

export default App;
