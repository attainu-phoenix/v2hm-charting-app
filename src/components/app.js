import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

import ContentArea from "./ContentArea";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ContentArea />
      </Provider>
    );
  }
}

export default App;
