import React from "react";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.googleCallback = this.googleCallback.bind(this);
  }

  googleCallback(response) {
    if (!response || !response.accessToken) {
      localStorage.setItem("testing", JSON.stringify(response));
      alert("Google signin failed. Please try again");
      return;
    }
    let user = {
      token: response.accessToken,
      name: response.profileObj.name,
      imageUrl: response.profileObj.imageUrl,
      email: response.profileObj.email,
      userId: response.profileObj.googleId
    };
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "/app";
  }

  render() {
    return (
      <GoogleLogin
        clientId="253598194229-90kkf0t65d0s0udro8msfpiomls3cpsi.apps.googleusercontent.com"
        onSuccess={this.googleCallback}
        onFailure={this.googleCallback}
        buttonText="Login with Google"
      />
    );
  }
}

export default Login;
