import React from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <ContentArea />
        </div>
      </div>
    );
  }
}

export default App;
