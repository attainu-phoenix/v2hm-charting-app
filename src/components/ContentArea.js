import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ChartData from "./ChartData";
import Dashboard from "./Dashboard";

class ContentArea extends React.Component {
  render() {
    return (
      <div className="col-md-10 p-0">
        <ul className="nav justify-content-end bg-primary pr-5 text-light">
          <li className="nav-item p-4">Notifications</li>
          <li className="nav-item p-4">Profile</li>
          <li className="nav-item p-4">Hello, USER</li>
        </ul>
        <div className="container m-5">
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route path="/make-your-chart" component={ChartData} />
        </div>
      </div>
    );
  }
}

export default ContentArea;
