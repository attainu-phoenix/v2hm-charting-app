import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-md-2 bg-primary h-100">
        <div className="logo py-4 pl-5">
          <h4 className="text-light">CHARTOWL</h4>
          <div className="menu pt-5">
            <nav class="nav flex-column">
              <a class="nav-link active text-light pb-4" href="#">
                DASHBOARD
              </a>
              <a class="nav-link text-light" href="#">
                LINE CHART
              </a>
              <a class="nav-link text-light" href="#">
                AREA CHART
              </a>
              <a class="nav-link text-light" href="#">
                BAR CHART
              </a>
              <a class="nav-link text-light pb-5 mb-5" href="#">
                PIE CHART
              </a>

              <a class="nav-link text-light pt-5 mt-5" href="#">
                PROFILE
              </a>
              <a class="nav-link text-light pb-5 mb-5" href="#">
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
