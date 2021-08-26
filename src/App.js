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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route  path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
