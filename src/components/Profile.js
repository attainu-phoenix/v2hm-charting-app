import React from "react";
// import {Provider} from 'react-redux';
// import {connect} from 'react-redux';

// import {store} from '../store/store.js';
// import {stateMapper} from '../store/store.js';


class Profile extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      name: "",
      email: ""
    };

    this.nameEntered = this.nameEntered.bind(this);
    this.emailEntered = this.emailEntered.bind(this);
    this.profileSubmit = this.profileSubmit.bind(this); 
  }

  nameEntered(event){
    this.setState({
      name: event.target.value
    })
  }

  emailEntered(event){
    this.setState({
      email: event.target.value
    })
  }

  profileSubmit(){
    console.log(this.state.name, this.state.email);
  }

  // renderProfile(){
  //   return this.props.profile.map(function(c){
  //     return(
  //       <p>{c.name}, {c.email}</p>
  //     )
  //   });
  // }


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

// let Profile = connect(stateMapper)(ProfileComponent)

export default Profile;
