import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import PieComponent from "./PieChartWrapper.js";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
        <div className="row">

          <div className="col-md-6 offset-md-2">
            <div>
                <button className="btn btn-primary ml-5 mr-3">New Chart</button>
                <button className="btn btn-primary mx-3">Save Chart</button>
                <button className="btn btn-primary ml-3">Reset Fields</button>
            </div>
            </div>


            <div className="col-md-6 offset-md-2">
            <div className="my-4">
            <PieComponent chartData={this.props.series} />
            </div>



        <div className="col-md-6 offset-md-2">
          <div className="my-4">
            <HighchartsReact highcharts={Highcharts} options={this.state} />
          </div>

            <div className="col-md-2 offset-md-1">

            <h5>SAVED CHARTS</h5>
            <hr />
            <br/>

                <div className="card bg-secondary" style={{width: 180, height: 150, float: "left", marginBottom: 10}}>

                    <div className="card-body">
                    </div>
                </div>

                <div className="card bg-secondary" style={{width: 180, height: 150, float: "left", marginBottom: 10}}>

                    <div className="card-body">
                    </div>
                </div>                

                <div className="card bg-secondary" style={{width: 180, height: 150, float: "left", marginBottom: 10}}>

                    <div className="card-body">
                    </div>
                </div>

                <div className="card bg-secondary" style={{width: 180, height: 150, float: "left", marginBottom: 10}}>

                    <div className="card-body">
                    </div>
                </div>
                
            </div>



        </div>
      </div>
    );
  }
}

export default PieChart;
