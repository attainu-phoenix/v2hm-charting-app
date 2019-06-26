import React from "react";

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
          <h3>ALL APP CONTENT GOES HERE!!</h3>
        </div>
      </div>
    );
  }
}

export default ContentArea;
