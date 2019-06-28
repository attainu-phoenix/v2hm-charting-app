import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Landing from "./components/Landing.js";
import App from "./components/app.js";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/app" component={App} />
      </Router>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
