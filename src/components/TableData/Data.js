import React from "react";

import DataTable from "./DataTable";
import { connect } from "react-redux";
import { stateMapper } from "../../store/store";

class DataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.state.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie"
      },
      title: {
        text: "Export sales January, 2019"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: [
            {
              id: 1,
              name: "xyz",
              y: 23
            },
            {
              id: 2,
              name: "",
              y: ""
            },
            {
              id: 3,
              name: "",
              y: ""
            },
            {
              id: 4,
              name: "",
              y: ""
            },
            {
              id: 5,
              name: "",
              y: ""
            }
          ]
        }
      ]
    };

    this.updateChartHandle = this.updateChartHandle.bind(this);
  }

  handleAddRow(evt) {
    let id = Math.floor(Math.random() * 99999);
    let newData = {
      id: id,
      name: "",
      y: ""
    };

    let options = this.state.options;
    let tableData = this.state.options.series[0].data;

    tableData.push(newData);
    delete options.series[0];
    options.series[0] = tableData;

    this.setState({ options: Object.assign({}, options) });
  }

  handleRowDel(data) {
    let tableData = this.state.options.series[0].data;
    let index = tableData.indexOf(data);

    tableData.splice(index, 1);
    this.setState(tableData);
  }

  handleTableUpdate(evt) {
    console.log(evt.target.name);

    let item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    let datas = this.state.options.series[0].data.slice();
    let newData = datas.map(function(data) {
      for (var key in data) {
        if (key == item.name && data.id == item.id) {
          if (item.name === "y") {
            data[key] = parseInt(item.value, 10);
          } else {
            data[key] = item.value;
          }
        }
      }
      return data;
    });
    this.setState({ data: newData });
  }

  updateChartHandle() {
    this.props.dispatch({
      type: "UPDATE_CHART",
      chart_data: this.state.options
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_CHART",
      chart_data: this.state.options
    });
  }

  render() {
    return (
      <div>
        {/* Todo - Dynamic edit functionality for chart name */}
        <h4 className="mb-5">Chart Name</h4>
        <DataTable
          onTableUpdate={this.handleTableUpdate.bind(this)}
          onRowAdd={this.handleAddRow.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          datas={this.state.options.series[0].data}
        />
        <div className="btn btn-warning mr-3" onClick={this.updateChartHandle}>
          Update Chart
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
          <div className="btn btn-warning ml-3" onClick={this.toAreaChart}>
            Area Chart
          </div>
        </div>
      </div>
    );
  }
}

let Data = connect(stateMapper)(DataComponent);

export default Data;
