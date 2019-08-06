import React from "react";
import Modal from "react-modal";

import { GoogleLogin } from "react-google-login";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.349)",
    borderRadius: "15px"
  }
};

class LoginModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#000";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-lg btn-general btn-white"
          onClick={this.openModal}
        >
          {this.props.text}
        </button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="login-modal row">
            <div className="col-md">
              <button
                className="btn btn-sm btn-secondary float-right"
                onClick={this.closeModal}
              >
                X
              </button>
              <h4 ref={subtitle => (this.subtitle = subtitle)}>
                Login to ChartOwl
              </h4>
              <hr />
              <div className="google-wrapper">
                <GoogleLogin
                  clientId="253598194229-90kkf0t65d0s0udro8msfpiomls3cpsi.apps.googleusercontent.com"
                  onSuccess={this.googleCallback}
                  onFailure={this.googleCallback}
                  buttonText="Continue with Google"
                  className="google-btn"
                />
                <div className="no-google">
                  <h6>Don't have google Account ?</h6>
                  <a
                    target="blank"
                    href="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp"
                  >
                    <h6>Create A Google Account</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
