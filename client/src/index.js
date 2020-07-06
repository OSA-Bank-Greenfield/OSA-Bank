import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";
 
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import { Provider } from "react-redux";
import store from "./store";
import Contact from 'views/Contact/ContactUs';
import UserForm from 'views/user/UserForm';
import UserDashboard from 'views/user/userDashboard';
import Signup from 'views/SignUpPage/Signup';
//import DashboardProfileInformations from 'views/user/dahsboardProfileInformations';

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
  <Router history={hist}>
    <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/userForm" component={UserForm} />
          <Route path="/userDashboard" component={UserDashboard} />
          {/* <Route
            path="/dashboarprofileinformations"
            component={DashboardProfileInformations}
          /> */}
      <Route path="/about" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/signin" component={LoginPage} />
      <Route path="/signup" component={Signup} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
