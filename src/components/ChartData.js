import React from "react";
import Data from "./TableData/Data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

import ChartComponent from "./ChartComponent.js";

class ChartDataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.saveChartHandle = this.saveChartHandle.bind(this);
  }

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: "GET_CHART",
  //     chartId: this.props.chartData.objectId
  //   });
  // }

  saveChartHandle() {
    this.props.dispatch({
      type: "EDIT_CHART",
      chartData: {
        objectId: "kB2fz1EgPm",
        name: "Hello World",
        chartType: "bar",
        chartData: [
          { x: 12, y: 35 },
          { x: 14, y: 25 },
          { x: 15, y: 15 },
          { x: 16, y: 10 },
          { x: 17, y: 15 }
        ]
      }
    });

    // this.props.dispatch({
    //   type: "EDIT_CHART",
    //   editonechart: {
    //     chartId: "sGBQp8eXeK"
    //   },
    //   updatedData: {
    //     userId: "33sEqWyntO",
    //     name: "Export sales, Feburary 2019,",
    //     chartType: "bar",
    //     chartData: [
    //       { x: 12, y: 35 },
    //       { x: 14, y: 25 },
    //       { x: 15, y: 15 },
    //       { x: 16, y: 10 },
    //       { x: 17, y: 15 }
    //     ]
    //   }
    // });
  }

  render() {
    // console.log("inside chartdatatable comp", this.props.newChartData);

    return (
      <div className="row">
        <div className="col-md-6">
          <Link to="/app/data-type">
            <h5>&larr; Back</h5>
          </Link>

          <Data />
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <button
              className="btn btn-primary mx-3"
              onClick={this.saveChartHandle}
            >
              Save Chart
            </button>
            <button className="btn btn-primary mx-3">Reset Fields</button>
          </div>
          <div className="my-4">
            { this.props.chart && this.props.options ? <ChartComponent options={this.props.chart} /> : "Loading Chart..." }
          </div>
        </div>
      </div>
    );
  }
}

let ChartData = connect(stateMapper)(ChartDataComponent);

export default ChartData;
