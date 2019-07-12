import React from "react";

import DataTable from "./DataTable";
import { connect } from "react-redux";
import { stateMapper } from "../../store/store";

class DataComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.datas = [
      {
        id: 1,
        name: "Coca Cola",
        y: 40,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 2,
        name: "Pepsi",
        y: 20,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 3,
        name: "Red Bull",
        y: 15,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 4,
        name: "Kingfisher",
        y: 10,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 5,
        name: "Carlsberg",
        y: 15,
        c: "",
        d: "",
        e: ""
      }
    ];

    this.options = {
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
          data: this.state.datas
        }
      ]
    };

    this.updateChartHandle = this.updateChartHandle.bind(this);
  }

  handleAddRow(evt) {
    var id = Math.floor(Math.random() * 99999);
    var data = {
      id: id,
      name: "",
      y: "",
      c: "",
      d: "",
      e: ""
    };
    this.state.datas.push(data);
    this.setState(this.state.datas);
  }

  handleRowDel(data) {
    var index = this.state.datas.indexOf(data);
    this.state.datas.splice(index, 1);
    this.setState(this.state.datas);
  }

  handleTableUpdate(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var datas = this.state.datas.slice();
    var newData = datas.map(function(data) {
      for (var key in data) {
        if (key == item.name && data.id == item.id) {
          data[key] = item.value;
        }
      }
      return data;
    });
    this.setState({ datas: newData });
  }

  updateChartHandle() {
    this.props.dispatch({
      type: "UPDATE_CHART",
      chart_data: this.options
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_CHART",
      chart_data: this.options
    });
  }

  toLineChart() {}

  toPieChart() {}

  toBarChart() {}

  toAreaChart() {}

  render() {
    return (
      <div>
        {/* Todo - Dynamic edit functionality for chart name */}
        <h4 className="mb-5">Chart Name</h4>
        <DataTable
          onTableUpdate={this.handleTableUpdate.bind(this)}
          onRowAdd={this.handleAddRow.bind(this)}
          onRowDel={this.handleRowDel.bind(this)}
          datas={this.state.datas}
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
