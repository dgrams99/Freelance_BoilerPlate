import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import "./App.css";
import Admin from "./Pages/Admin/Admin";

import AdminDashboard from "./Pages/AdminDashboard/AdminDashoard";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
class App extends Component {
  render() {
    return (
      <div>
         <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/contact" component={Contact} />
           <Route  exact path="/admin" component={Admin} />
           <Route exact  path="/admin/dashboard" component={AdminDashboard} />
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
