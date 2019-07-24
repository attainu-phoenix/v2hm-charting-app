import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class DataTypeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.createChartHandle = this.createChartHandle.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "CLEAR_CHART"
    });
  }
  createChartHandle() {
    let newChartId = Math.floor(Math.random() * 99999);

    this.props.dispatch({
      type: "CREATE_CHART",
      newChartData: {
        userId: "33sEqWyntO",
        name: "New Chart " + newChartId,
        chartType: "line",
        chartData: [
          {name: "Ansal", y: 12},
          {name: "Vaibhav", y: 50}
        ]
      }
    });
  }

  render() {
    if (this.props.chart && this.props.chart.objectId) {
      return <Redirect to={`/app/chart/${this.props.chart.objectId}`} />;
    }

    return (
      <div className="container">
        <Link to="/app/dashboard">
          <h5>&larr; Back</h5>
        </Link>

        <div>CHOOSE INPUT METHOD</div>
        <br />

        {/* <Link to={`/app/chart/${this.props.charts.objectId}`}> */}
        <div
          className="card bg-info text-white"
          style={{ width: 180, height: 140, float: "left" }}
          onClick={this.createChartHandle}
        >
          <div className="card-body">Input Data</div>
        </div>

        <Link to="/app/upload-csv">
          <div
            className="card bg-info text-white"
            style={{ width: 180, height: 140, float: "left", marginLeft: 30 }}
          >
            <div className="card-body">
              <br />
              <p>Upload CSV</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

let DataType = connect(stateMapper)(DataTypeComponent);

export default DataType;
