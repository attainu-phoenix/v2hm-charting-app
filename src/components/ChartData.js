import React from "react";
import Data from "./TableData/Data";
import ReactDOM from "react-dom";
import Highcharts from 'highcharts';
import ChartComponent from './ChartComponent.js';

require('highcharts/modules/exporting')(Highcharts);


class ChartData extends React.Component {
  constructor(props) {
    super(props);

    this.lineButton = this.lineButton.bind(this);
    this.barButton = this.barButton.bind(this);
    this.areaButton = this.areaButton.bind(this);
    this.pieButton = this.pieButton.bind(this);

    this.state = {
      type: "line"
    }
  }

  lineButton(){
    this.setState({
      type: "line"
    });      
  }

  barButton(){
    this.setState({
      type: "bar"
    });      
  }

  areaButton(){
    this.setState({
      type: "areaspline"
    });      
  }

  pieButton(){
    this.setState({
      type: "pie"
    });      
  }

  render() {

    this.options = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: this.state.type
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
              name: "Coca Cola",
              y: 35
            },
            {
              name: "Red Bull",
              y: 15
            },
            {
              name: "Pepsi",
              y: 25
            },
            {
              name: "Kingfisher",
              y: 15
            },
            {
              name: "Carlsberg",
              y: 10
            }
          ]
        }
      ]
    };

    return (
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-5">Make your chart</h4>

          <Data />

          <div className="my-4 text-center">
              <button onClick={this.lineButton} className="btn btn-primary mr-3">Line Chart</button>
              <button onClick={this.barButton} className="btn btn-primary mr-3">Bar Chart</button>
              <button onClick={this.areaButton} className="btn btn-primary mr-3">Area Chart</button>
              <button onClick={this.pieButton} className="btn btn-primary mr-3">Pie Chart</button>

          </div>
        </div>
        <div className="col-md-6">
          <div>
            <button className="btn btn-primary ml-5 mr-3">New Chart</button>
            <button className="btn btn-primary mx-3">Save Chart</button>
            <button className="btn btn-primary ml-3">Reset Fields</button>
          </div>
          <div id="container" className="my-4">
         
          <ChartComponent options={this.options} />


          </div>
        </div>
      </div>
    );
  }
}

export default ChartData;
