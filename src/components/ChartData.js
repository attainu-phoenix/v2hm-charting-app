import React from "react";

class ChartData extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h4>Make your chart</h4>
          CHART DATA HERE
        </div>
        <div className="col-md-6">
          <div>
            <button className="btn btn-primary mx-2">New Chart</button>
            <button className="btn btn-primary mx-2">Save Chart</button>
            <button className="btn btn-primary mx-2">Reset Fields</button>
          </div>
          <div>CHART GOES GERE</div>
        </div>
      </div>
    );
  }
}

export default ChartData;
