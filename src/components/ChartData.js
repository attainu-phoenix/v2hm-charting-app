import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { stateMapper } from "../store/store";
import ChartComponent from "./ChartComponent.js";

class ChartDataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toPieChart = this.toPieChart.bind(this);
    this.toLineChart = this.toLineChart.bind(this);
    this.toColumnChart = this.toColumnChart.bind(this);
    this.toBarChart = this.toBarChart.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "GET_ONE_CHART",
      chartId: this.props.match.params.chartId
    });

    // let data = [];

    // this.props.chart && this.props.chart.chartDataObject
    //   ? (data = this.props.chart.chartDataObject.series[0].data)
    //   : (data = [{ name: "loading" }]);

    // this.setState({
    //   chartData: data,
    //   name: this.props.chart.name
    // });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_CHART"
    });
  }

  onChartNameChange(event) {
    // this.props.dispatch({
    //   type: "EDIT_CHART",
    //   chartId: this.props.match.params.chartId,
    //   name: event.target.value
    // });
  }

  toLineChart() {
    let updatedData = {};

    updatedData.chartType = "line";
    updatedData.name = this.props.chart.name;
    updatedData.objectId = this.props.chart.objectId;
    updatedData.userId = this.props.chart.userId;
    updatedData.chartData = this.props.chart.chartData;

    this.props.dispatch({
      type: "EDIT_CHART",
      chartData: updatedData
    });
  }

  toPieChart() {
    let updatedData = {};

    updatedData.chartType = "pie";
    updatedData.name = this.props.chart.name;
    updatedData.objectId = this.props.chart.objectId;
    updatedData.userId = this.props.chart.userId;
    updatedData.chartData = this.props.chart.chartData;

    this.props.dispatch({
      type: "EDIT_CHART",
      chartData: updatedData
    });
  }

  toBarChart() {
    let updatedData = {};

    updatedData.chartType = "bar";
    updatedData.name = this.props.chart.name;
    updatedData.objectId = this.props.chart.objectId;
    updatedData.userId = this.props.chart.userId;
    updatedData.chartData = this.props.chart.chartData;

    this.props.dispatch({
      type: "EDIT_CHART",
      chartData: updatedData
    });
  }

  toColumnChart() {
    let updatedData = {};

    updatedData.chartType = "column";
    updatedData.name = this.props.chart.name;
    updatedData.objectId = this.props.chart.objectId;
    updatedData.userId = this.props.chart.userId;
    updatedData.chartData = this.props.chart.chartData;

    this.props.dispatch({
      type: "EDIT_CHART",
      chartData: updatedData
    });
  }

  render() {
    {
      if (!this.props.chart.chartDataObject) {
        console.log("loading in comp render");
      } else {
        console.log(
          "data loading inside render",
          this.props.chart.chartDataObject.series[0].data
        );
      }
    }

    return (
      <div className="row">
        <div className="col-md">
          <Link to="/app/data-type">
            <h5>&larr; Back</h5>
          </Link>
          {/*
            <input
            type="text"
            value={this.props.chart ? this.props.chart.name : ""}
            // TODO: Use proper class name
          />
          */}
          <h2>{this.props.chart ? this.props.chart.name : "Loading Chart..."}</h2>
          <div className="col-offset">
            <div className="my-4 text-center">
              {this.props.chart && this.props.chart.chartDataObject ? (
                <ChartComponent options={this.props.chart.chartDataObject} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="my-4 text-center">
            <div className="btn btn-warning mr-3" onClick={this.toLineChart}>
              Line Chart
            </div>
            <div className="btn btn-warning mx-3" onClick={this.toPieChart}>
              Pie Chart
            </div>
            <div className="btn btn-warning mx-3" onClick={this.toBarChart}>
              Bar Chart
            </div>
            <div className="btn btn-warning ml-3" onClick={this.toColumnChart}>
              Column Chart
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let ChartData = connect(stateMapper)(ChartDataComponent);

export default ChartData;
