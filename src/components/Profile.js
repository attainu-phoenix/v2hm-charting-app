import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="">
        <h3>PROFILE</h3>

        <hr />

        <br/>
        <br />

        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Full Name</span>
        </div>
        <input type="text" className="form" placeholder="Full Name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>


        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-default">E-mail ID</span>
        </div>
        <input type="text" className="form" placeholder="E-mail" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        </div>

        <button className="btn btn-info">Submit</button>


      </div>
    );
  }
}

export default Profile;
