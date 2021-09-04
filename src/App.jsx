import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Index from './Components/Index'
import Login from './Components/Login'
import Admin from './Components/Admin'
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="container">
        <Router>
          <Menu/>
          <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route path='/Admin' component={Admin}></Route>
            <Route path='/Login' component={Login}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
