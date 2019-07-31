import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { stateMapper } from "../store/store";
import ChartComponent from "./ChartComponent.js";

class ChartDataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.toPieChart = this.toPieChart.bind(this);
    this.toLineChart = this.toLineChart.bind(this);
    this.toColumnChart = this.toColumnChart.bind(this);
    this.toBarChart = this.toBarChart.bind(this);
    this.onDeleteChart = this.onDeleteChart.bind(this);
    this.nameUpdateButton = this.nameUpdateButton.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
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

  onNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  nameUpdateButton() {
    let updatedData = {};

    updatedData.chartType = this.props.chart.chartType;
    updatedData.name = this.state.name;
    updatedData.objectId = this.props.chart.objectId;
    updatedData.userId = this.props.chart.userId;
    updatedData.chartData = this.props.chart.chartData;

    this.props.dispatch({
      type: "EDIT_CHART",
      chartData: updatedData
    });
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

  onDeleteChart() {
    this.props.dispatch({
      type: "REMOVE_CHART",
      chartId: this.props.chart.objectId
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
      <div className="row chart-wrapper">
        <div className="col-md-4">
          <input
            type="text"
            placeholder={this.props.chart ? this.props.chart.name : ""}
            className="form-control"
            onChange={this.onNameChange}
            style={{ display: "inline" }}
          />
          <div className="btn btn-name" onClick={this.nameUpdateButton}>
            <i className="fas fa-check mr-2" /> Update Name
          </div>
          <Link
            to="/app/dashboard"
            className="btn btn-secondary btn-delete"
            onClick={this.onDeleteChart}
          >
            <i class="fas fa-trash mr-2" />
            Delete Chart
          </Link>
          <div className="button-wrapper text-center">
            <h5>Change Chart Type</h5>
            <div className="btn-chart" onClick={this.toLineChart}>
              <img src="/line-icon.svg" />
            </div>
            <div className="btn-chart btn-pie" onClick={this.toPieChart}>
              <img src="/pie-icon-hover.svg" />
            </div>

            <div className="btn-chart btn-bar" onClick={this.toBarChart}>
              <img src="/bar-icon.svg" />
            </div>

            <div className="btn-chart btn-column" onClick={this.toColumnChart}>
              <img src="/column-icon.svg" />
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h4 className="text-center">
            {this.props.chart ? this.props.chart.name : ""}
          </h4>
          <div className="text-center chart-card">
            {this.props.chart && this.props.chart.chartDataObject ? (
              <ChartComponent options={this.props.chart.chartDataObject} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

let ChartData = connect(stateMapper)(ChartDataComponent);

export default ChartData;
