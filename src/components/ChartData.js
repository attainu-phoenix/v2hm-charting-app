import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HotTable } from "@handsontable/react";
import Handsontable from "handsontable";
import Scroll from "./Scroll";

import { stateMapper } from "../store/store";
import ChartComponent from "./ChartComponent.js";

class ChartDataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      chartType: "pie",
      chartData: []
    };

    this.saveChartHandle = this.saveChartHandle.bind(this);
    this.onChartNameChange = this.onChartNameChange.bind(this);
    this.toPieChart = this.toPieChart.bind(this);
    this.toLineChart = this.toLineChart.bind(this);
    this.toAreaChart = this.toAreaChart.bind(this);
    this.toBarChart = this.toBarChart.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "GET_ONE_CHART",
      chartId: this.props.match.params.chartId
    });

    let data = [];

    this.props.chart && this.props.chart.chartDataObject
      ? (data = this.props.chart.chartDataObject.series[0].data)
      : (data = [{ name: "loading" }]);

    this.setState({
      chartData: data,
      name: this.props.chart.name
    });
  }

  saveChartHandle() {
    this.props.dispatch({
      type: "EDIT_CHART",
      chartId: this.props.match.params.chartId,
      chartData: {
        name: this.state.name,
        chartType: this.state.chartType,
        chartData: this.state.chartData
      }
    });
  }

  onChartNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  toLineChart() {
    this.setState({
      chartType: "line"
    });
  }

  toPieChart() {
    this.setState({
      chartType: "pie"
    });
  }

  toBarChart() {
    this.setState({
      chartType: "bar"
    });
  }

  toAreaChart() {
    this.setState({
      chartType: "area"
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
        <div className="col-md-6">
          <Link to="/app/data-type">
            <h5>&larr; Back</h5>
          </Link>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onChartNameChange}
          />

          <Scroll>
            <HotTable
              id="hot"
              data={this.state.chartData}
              colHeaders={true}
              rowHeaders={true}
              licenseKey="non-commercial-and-evaluation"
            />
          </Scroll>
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
            <div className="btn btn-warning ml-3" onClick={this.toAreaChart}>
              Area Chart
            </div>
          </div>
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
