import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import App from "./components/app.js";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
