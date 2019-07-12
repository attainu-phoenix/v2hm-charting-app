import React from "react";
import Data from "./TableData/Data";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

import ChartComponent from "./ChartComponent.js";

class ChartDataComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.options = {
    //   chart: {
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //     type: "bar"
    //   },
    //   title: {
    //     text: "Export sales January, 2019"
    //   },
    //   tooltip: {
    //     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: "pointer",
    //       dataLabels: {
    //         enabled: false
    //       },
    //       showInLegend: true
    //     }
    //   },
    //   series: [
    //     {
    //       name: "Brands",
    //       colorByPoint: true,
    //       data: [
    //         // {
    //         //   name: "Coca Cola",
    //         //   y: 35
    //         // },
    //         // {
    //         //   name: "Red Bull",
    //         //   y: 15
    //         // },
    //         // {
    //         //   name: "Pepsi",
    //         //   y: 25
    //         // },
    //         // {
    //         //   name: "Kingfisher",
    //         //   y: 15
    //         // },
    //         // {
    //         //   name: "Carlsberg",
    //         //   y: 10
    //         // }
    //       ]
    //     }
    //   ]
    // };
  }

  render() {
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
            <button className="btn btn-primary mx-3">Save Chart</button>
            <button className="btn btn-primary mx-3">Reset Fields</button>
          </div>
          <div className="my-4">
            <ChartComponent options={this.props.updateChart.data} />
          </div>
        </div>
      </div>
    );
  }
}

let ChartData = connect(stateMapper)(ChartDataComponent);

export default ChartData;
