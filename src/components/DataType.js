import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class DataTypeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.createChartHandle = this.createChartHandle.bind(this);
  }

  createChartHandle() {
    this.props.dispatch({
      type: "CREATE_CHART",
      newData: {
        userId: "33sEqWyntO",
        name: "Export sales, Janurary 2019",
        chartType: "line",
        chartData: [{ x: 10, y: 35 }, { x: 11, y: 25 }, { x: 12, y: 15 }]
      }
    });
  }

  render() {
    // if (this.props.charts.results) {
    //   return (
    //     <Redirect to={`/app/chart/${this.props.charts.results.objectId}`} />
    //   );
    // }
    console.log("datatype inside", this.props.chartData.objectId);

    return (
      <div className="container">
        <Link to="/app/dashboard">
          <h5>&larr; Back</h5>
        </Link>

        <div>CHOOSE INPUT METHOD</div>
        <br />

        {/* <Link to={`/app/chart/${this.props.charts.objectId}`}> */}
        <Link to={`/app/chart/123`}>
          <div
            className="card bg-info text-white"
            style={{ width: 180, height: 140, float: "left" }}
            onClick={this.createChartHandle}
          >
            <div className="card-body">Input Data</div>
          </div>
        </Link>

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
