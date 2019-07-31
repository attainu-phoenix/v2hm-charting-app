import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import Dashboard from "./Dashboard.js";
import DataType from "./DataType";
import CSVFileUploader from "./CsvFileUploader.js";
import ChartData from "./ChartData";
import Profile from "./Profile.js";
import Logout from "./logout.js";
import { getUserAccess } from "../store/api/index.js";
import "../style/App.css";

class ContentArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      imageUrl: ""
    };
  }

  componentDidMount() {
    let user = getUserAccess();

    this.setState({
      name: user.name,
      imageUrl: user.imageUrl
    });
  }

  render() {
    return (
      <div className="col-md p-0 nav-app">
        <div className="nav-app-inner">
          <ul className="nav justify-content-end">
            <li className="navbar-brand">
              <img className="logo-app" src="/logo.png" />
            </li>
            <img src={this.state.imageUrl} className="img-profile" />
            <li className="nav-item p-4">
              <span className="profile-name">
                Hi, <strong>{this.state.name.split(" ")[0]}</strong>{" "}
              </span>
            </li>
            <li>
              <Link to="/app/dashboard" className="nav-link pt-4 mt-0">
                Home
              </Link>
            </li>
            <li>
              <Link to="/app/profile" className="nav-link pt-4 mt-0">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/app/logout" className="nav-link pt-4 mt-0">
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="app-bg">
          <div className="container wrapper-app">
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/data-type" component={DataType} />
            <Route path="/app/upload-csv" component={CSVFileUploader} />
            <Route path="/app/chart/:chartId" component={ChartData} />
            <Route path="/app/profile" component={Profile} />
            <Route path="/app/logout" component={Logout} />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentArea;
