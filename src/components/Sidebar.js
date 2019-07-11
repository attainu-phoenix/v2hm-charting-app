import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-2 bg-primary h-100">
        <div className="logo py-4 pl-5">
          <h4 className="text-light">CHARTOWL</h4>
          <div className="menu pt-5 bg-primary">
            <nav className="nav flex-column">
              <Link to="/app/dashboard" className="nav-link text-light pb-4">
                DASHBOARD
              </Link>
              <Link to="/app/createchart" className="nav-link text-light pb-4">
                CREATE +
              </Link>

              <Link to="/app/datatype" className="nav-link text-light pb-4">
                DATA TYPE
              </Link>

              <Link to="/app/uploadCsv" className="nav-link text-light pb-4">
                UPLOAD FILE
              </Link>
              <Link
                to="/app/make-your-chart"
                className="nav-link text-light pb-5 mb-5"
              >
                DATA INPUT
              </Link>

              <Link to="/app/linechart" className="nav-link text-light">
                LINE CHART
              </Link>
              <Link to="/app/areachart" className="nav-link text-light">
                AREA CHART
              </Link>
              <Link to="/app/barchart" className="nav-link text-light">
                BAR CHART
              </Link>
              <Link
                to="/app/piechart"
                className="nav-link text-light pb-5 mb-5"
              >
                PIE CHART
              </Link>

              <Link to="/app/profile" className="nav-link text-light pt-5 mt-5">
                PROFILE
              </Link>
              <Link to="/app/logout" className="nav-link text-light pb-5 mb-5">
                LOGOUT
              </Link>
              <br />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
