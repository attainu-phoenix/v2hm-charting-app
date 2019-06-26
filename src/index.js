import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";


class Home extends React.Component {
  render() {
    return (<App />);
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));