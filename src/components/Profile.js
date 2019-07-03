import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="">
        <h3>PROFILE</h3>

        <hr />

        <br />
        <br />

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white"
              id="inputGroup-sizing-default"
            >
              Full Name
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white"
              id="inputGroup-sizing-default"
            >
              Email
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white"
              id="inputGroup-sizing-default"
            >
              Address
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white"
              id="inputGroup-sizing-default"
            >
              City
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text bg-primary text-white"
              id="inputGroup-sizing-default"
            >
              State
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="State"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
    );
  }
}

export default Profile;
