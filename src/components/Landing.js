import React from "react";
import {GoogleLogin} from "react-google-login";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class Landing extends React.Component {

  constructor(props){
    super(props);

    this.googleCallback = this.googleCallback.bind(this);
}

googleCallback(response){
    if(!response || !response.accessToken){
        alert("Google signin failed. Please try again");
        return;
    }
    let user = {
        token: response.accessToken,
        name: response.profileObj.name
    }
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/app";         

    
}
  render() {
    return (
      <div>
        <div className = "container-fluid top">
           <div className = "row">
             <div className = "col-md-2">
                <img className = "logo" src = "logo.png"></img>
                </div>
             <div className = "col-md-10">
             <nav className="nav flex-row nav-landing">
                    <Link to="/login" className="nav-link text-light pb-4">
                Login
                </Link>
                &emsp; &emsp; &emsp;
                <Link to="/login" className="nav-link text-light pb-4">
                Features
                </Link>
                &emsp; &emsp; &emsp;
                <Link to="/login" className="nav-link text-light pb-4">
                Support
                </Link>
                &emsp; &emsp; &emsp;
                <Link to="/login" className="nav-link text-light pb-4">
                About us
                </Link>
                &emsp; &emsp; &emsp;
                <Link to="/login" className="nav-link text-light pb-4">
                Contact Us
                </Link>
                &emsp; &emsp; &emsp;
                <Link to="/login" className="nav-link text-light pb-4">
                FAQs
                </Link>
                  </nav>
            </div>
           </div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
                <div className = "row">&nbsp;</div>
          <div className = "row">
            <div className = "col-md-5 offset-md-5">
            <h2 className = "chart"> Chart App</h2>
             </div>
          </div>
          <div className="row">
            <div className="col-md-7 offset-md-3">
              <p>
                <span className="HomeText">
                  CharOwl is an app where you can create your own chart data,
                  this will alos allow you to see some universal data flow,
                  there are many types of chart available here you can try it
                  out. You need to sign in first to use our app. please do sign
                  in here.. some more text
                  here........................................
                </span>
              </p>
            </div>
        </div>
        <div className = "row">
          <div className = "col-md-7 offset-md-4">
          <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">Try it Once</button>
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">          
            <div class="modal-content">
              <div class="modal-header">
                <h3>Login Here</h3>          
              </div>
              <div class="modal-body">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <GoogleLogin 
                        clientId="253598194229-90kkf0t65d0s0udro8msfpiomls3cpsi.apps.googleusercontent.com"
                        onSuccess={this.googleCallback}
                        onFailure={this.googleCallback}
                        buttonText="Continue with Google"
                       
                    />
                    <br /><br /><br /><br /><br /><br />
                    <h6>Don't have google Account ? </h6>
                    <a target="blank" href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp"><h6>Create A Google Account</h6></a>
              </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
          </div>
        </div>
             &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <button className = "btn btn-primary btn-lg">Demo Chart</button>
            </div>
        </div>            
      </div>    

        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-6 left1 ">
              <img src="charts.png" />
            </div>
            <div className="col-md-6 offset-md-0 right1">
              <h3>
                Suno Gaur se Duniya walo buri nazar na humpe daalo. Sabse aage
                Honge V2HM!
              </h3>
              &nbsp;
              <button className="btn btn-info">Search More</button>
            </div>
          </div>
        </div>
        <div className="container imgchart ">
          <div className="row">
            <div className="col-md-5">
              <img src="https://apexcharts.com/wp-content/uploads/2018/01/line-chart-zoomable-timeseries.svg" />
            </div>
            <div className="col-md-5 offset-md-2">
              &nbsp;
              <img src="https://nces.ed.gov/nceskids/help/user_guide/graph/images/pie.jpg" />
            </div>
          </div>
        </div>
        <div className="container feature">
          <div className="row">
            <div className="col-md-3 feature1">
              <p>
                ChartApp Give you a great way to track on your live data
                ...........................................................
                ..........................................................
                ...........................................................
                .........................................................
                ...........................................................
                .........................................................
                ..........................................................
                .................................................
              </p>
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feature 1</h3>
            </div>
            <div className="col-md-3 offset-md-1 feature2">
              <p>
                ChartApp Give you a great way to track on your live data
                ............................................................
                ..........................................................
                ...........................................................
                .........................................................
                ...........................................................
                .........................................................
                ...........................................................
                ...................................................
              </p>
              <h3> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feature 2</h3>
            </div>
            <div className="col-md-3 offset-md-1 feature3">
              <p>
                ChartApp Give you a great way to track on your live data
                ...........................................................
                .........................................................
                ...........................................................
                .........................................................
                ...........................................................
                .........................................................
                .........................................................
                ........................................................
              </p>
              <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feature 3</h3>
            </div>
          </div>
        </div>
        <div className="container team">
          <div className="row">
            <div className="col-md-5">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3>Meet Our Team</h3>
              <p>
                We the Team V2HM has developed this application, we are the four
                people master in full stack development. We are working on the
                latest technologies like JavaScript, ExpressJS, NodeJS, ReactJS,
                Redux and MongoBD.
              </p>
            </div>
            <div className="col-md-3 offset-md-1">
              <h2>Mohit</h2>
              <img src="Deepak.jpg" />
            </div>
            <div className="col-md-3">
              <h2>Mohd. Sami</h2>
              <img src="sami.jpg" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <p>
                Contact us for any kind of software building. We Promise to
                provide best service to our customers, Share with your friends
                too who need to build any website for his/her business. Thank
                You !!!
              </p>
            </div>
            <div className="col-md-3 offset-md-1">
              <img src="monish.jpg" />
              <h2>Monish</h2>
            </div>
            <div className="col-md-3">
              <img src="mohit.jpg" />
              <h2>Deepak Shrivastava</h2>
            </div>
          </div>
        </div>


        <div className="container-fluid footer">
          <div className="row">
            <div className="col-md-2">
              <h3>ChartOwl</h3>
              <br />
              <br />
              <br />
              <p>@Charting Project</p>
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
                <i className="fa fa-facebook-square" /> &nbsp;Facebook
              </p>
              <p />
              <p>
                <i class="fa fa-twitter" />
                &nbsp;Twitter
              </p>
              <p />
              <p>
                <i class="fa fa-instagram" />
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
              <button className="btn btn-info">Go </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
