import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/LoginPage/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/LoginPage/PrivateRoute/PrivateRoute';
import DashboardPage from './Components/Dashboard/DashboardPage/DashboardPage';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <PrivateRoute  path="/appointment">
          <Appointment></Appointment>
        </PrivateRoute>
        <PrivateRoute  path="/dashboard">
          <DashboardPage></DashboardPage>
        </PrivateRoute>
        <Route  path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
