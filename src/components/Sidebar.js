import React from "react";
import { Link } from "react-router-dom";
import "../style/App.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-2 bg-primary sidebar">
        <div className="logo py-4 pl-5">
          <h4 className="text-light">CHARTOWL</h4>
          <div className="menu pt-5 bg-primary">
            <nav className="nav flex-column">
              <Link to="/app/dashboard" className="nav-link text-light pb-2">
                DASHBOARD
              </Link>

              <Link to="/app/profile" className="nav-link text-light">
                PROFILE
              </Link>
              <Link to="/app/logout" className="nav-link text-light mt-5">
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
