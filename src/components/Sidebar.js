import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-2 bg-primary h-100">
        <div className="logo py-4 pl-5">
          <h4 className="text-light">CHARTOWL</h4>
          <div className="menu pt-5">
            <nav className="nav flex-column">
              <Link to="/dashboard" className="nav-link text-light pb-4">
                DASHBOARD
              </Link>
              <Link to="/uploadCsv" className="nav-link text-light pb-4">
                Create Chart
              </Link>
              <Link to="/make-your-chart" className="nav-link text-light">
                LINE CHART
              </Link>
              <Link to="/make-your-chart" className="nav-link text-light">
                AREA CHART
              </Link>
              <Link to="/make-your-chart" className="nav-link text-light">
                BAR CHART
              </Link>
              <Link
                to="/make-your-chart"
                className="nav-link text-light pb-5 mb-5"
              >
                PIE CHART
              </Link>

              <a className="nav-link text-light pt-5 mt-5" href="#">
                PROFILE
              </a>
              <a className="nav-link text-light pb-5 mb-5" href="#">
                LOGOUT
              </a>
              <br />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
