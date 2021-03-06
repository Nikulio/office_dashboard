import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import DashboardComponent from "./DashboardComponent";
import MenuComponent from "./Menu.js";
import "../css/page-content.css";
import Account from "./Account";
import Cash from "./Cash";
import Settings from "./Settings";
import Notes from "./Notes";


class Application extends Component {
  render() {
    return (
        <div className="page">
          <MenuComponent className="top-men"/>
          <div className="page-content">
            <Switch>
              <Route
                  exact
                  path="/dashboard/dash"
                  component={DashboardComponent}
              />
              <Route exact path="/dashboard/account_info" component={Account}/>
              <Route exact path="/dashboard/balance" component={Cash}/>
              <Route exact path="/dashboard/settings" component={Settings}/>
              <Route exact path="/dashboard/notes" component={Notes}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default Application;
