import React from "react";
import { GoogleLogin } from "react-google-login";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

import "../style/Index.css";

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.googleCallback = this.googleCallback.bind(this);
  }

  googleCallback(response) {
    if (!response || !response.accessToken) {
      alert("Google signin failed. Please try again");
      return;
    }
    let user = {
      token: response.accessToken,
      name: response.profileObj.name
    };
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/app";
  }
  render() {
    return (
      <div className="landing">
        {/* <nav
          className="navbar navbar-inverse navbar-fixed-top"
          role="navigation"
        >
          <div className="container-fluid">
            <div className="chartowl-nav-wrapper">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">
                  <img className="logo-landing" src="logo.png" />
                </a>
              </div>
              <div className="chartowl-menu">
                <ul className="nav navbar-nav">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">How It Works</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Our Team</a></li>
                  <li><a href="#">Login</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav> */}

        <nav className="navbar navbar-expand-lg chartowl-top-nav">
          <a className="navbar-brand" href="#">
            <img className="logo-landing" src="logo-white.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="owlchart-menu"
            aria-controls="owlchart-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="owlchart-menu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Team
                </a>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-dark pb-4">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link text-dark pb-4">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="home">
          <div className="home-cover">
            <div className="home-content-box">
              <div className="home-content-box-inner">
                <div className="home-heading">
                  <h3>
                    Data Visualization that people love <br />{" "}
                    <span>
                      Tell your stories and present your data with charts.
                    </span>
                  </h3>
                </div>
                <div className="home-btn">
                  <Link
                    to="/login"
                    className="btn btn-lg btn-general btn-white"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="services">
          <div className="content-title">
            <h3>How It Works</h3>
            <div className="content-title-underline" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="service-item">
                  <div className="service-item-icon">
                    <i className="fas fa-cloud-upload-alt" />
                  </div>
                  <div className="service-item-title">
                    <h3>Upload Data</h3>
                  </div>
                  <div className="service-item-desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <div className="service-item-icon">
                    <i className="fas fa-chart-pie" />
                  </div>
                  <div className="service-item-title">
                    <h3>Choose Chart</h3>
                  </div>
                  <div className="service-item-desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <div className="service-item-icon">
                    <i className="fas fa-cloud-download-alt" />
                  </div>
                  <div className="service-item-title">
                    <h3>Download Charts</h3>
                  </div>
                  <div className="service-item-desc">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="about">
          <div className="about-bg-diagonal" />
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="about-content-box">
                  <div className="about-content-box-inner">
                    <div className="content-title">
                      <h3>About ChartOwl</h3>
                      <div className="content-title-underline" />
                    </div>
                    <div className="about-desc">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex eaque aperiam ipsa voluptates harum illum veniam
                        cumque in pariatur rerum, aut, quia beatae delectus odio
                        consequuntur ab iusto nam earum!
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam natus tenetur, obcaecati eveniet cumque dolorem
                        sit voluptatibus provident nemo dolorum laboriosam
                        pariatur. Repudiandae molestiae maiores non est commodi
                        necessitatibus saepe!
                      </p>
                    </div>
                    <div className="about-btn">
                      <a href="#" className="btn btn-lg btn-general btn-blue">
                        Try Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="team py-5 my-5">
          <div className="content-title">
            <h3>Our Team</h3>
            <div className="content-title-underline" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="team-member-container">
                  <div className="team-member-img">
                    <img src="/mohit.jpg" alt="" />
                  </div>
                  <div className="team-member-info">
                    <h3>Mohd Sami</h3>
                    <p>Web Developer</p>
                    <div className="team-social">
                      <i className="fab fa-github" />
                      <i className="fab fa-linkedin" />
                      <i className="fab fa-facebook" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member-container">
                  <div className="team-member-img">
                    <img src="/mohit.jpg" alt="" />
                  </div>
                  <div className="team-member-info">
                    <h3>Deepak Shrivastava</h3>
                    <p>Web Developer</p>
                    <div className="team-social">
                      <i className="fab fa-github" />
                      <i className="fab fa-linkedin" />
                      <i className="fab fa-facebook" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member-container">
                  <div className="team-member-img">
                    <img src="/mohit.jpg" alt="" />
                  </div>
                  <div className="team-member-info">
                    <h3>Monish Manwani</h3>
                    <p>Web Developer</p>
                    <div className="team-social">
                      <i className="fab fa-github" />
                      <i className="fab fa-linkedin" />
                      <i className="fab fa-facebook" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="team-member-container">
                  <div className="team-member-img">
                    <img src="/mohit.jpg" alt="" />
                  </div>
                  <div className="team-member-info">
                    <h3>Mohit Kumar</h3>
                    <p>Web Developer</p>
                    <div className="team-social">
                      <i className="fab fa-github" />
                      <i className="fab fa-linkedin" />
                      <i className="fab fa-facebook" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid footer mb-5">
          <div className="row">
            <div className="col-md-2">
              <img className="logo-landing ml-5 mt-2" src="logo.png" />
              <br />
              <br />
              <br />
            </div>
            <div className="col-md-2 offset-md-1">
              <p>About Us</p>
              <p />
              <p>Contact Us</p>
              <p />
              <p>Terms & Condition</p>
            </div>
            <div className="col-md-2 offset-md-1">
              <p>
                <i className="fab fa-facebook mr-1" />
                &nbsp;Facebook
              </p>
              <p />
              <p>
                <i className="fab fa-twitter mr-1" />
                &nbsp;Twitter
              </p>
              <p />
              <p>
                <i className="fab fa-instagram mr-1" />
                &nbsp;Instagram
              </p>
            </div>
            <div className="col-md-3 offset-md-0.5">
              <p>Subscribe to our Website</p>
              <input
                type="email"
                placeholder="Enter email-id"
                className="form-control"
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
