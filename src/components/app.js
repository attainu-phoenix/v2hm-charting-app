import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <ContentArea />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
