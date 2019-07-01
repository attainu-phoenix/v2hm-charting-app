import React from "react";
import ReactDOM from "react-dom";
import {GoogleLogin} from "react-google-login";

class Login extends React.Component {
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

render(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                   
                    <GoogleLogin 
                        clientId="253598194229-90kkf0t65d0s0udro8msfpiomls3cpsi.apps.googleusercontent.com"
                        onSuccess={this.googleCallback}
                        onFailure={this.googleCallback}
                        buttonText="Continue with Google"
                       
                    />
                    <br></br>
                    <h6>↓-For Non Google Users-↓</h6>
                    <a target="blank" href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp"><h6>Create A Google Account</h6></a>
                </div>
            </div>
        </div>
    )
  }
}

export default Login;
