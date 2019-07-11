import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Data from "./TableData/Data";
import CSVFileUploader from './CsvFileUploader';

class ChartData extends React.Component {
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
      <div>
      <div className = 'row'>
        <div className = 'col-md-6'>
          <CSVFileUploader />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-5">Make your chart</h4>

          <Data />

          <div className="my-4 text-center">
            <div className="btn btn-warning mr-3">Line Chart</div>
            <div className="btn btn-warning mx-3">Pie Chart</div>
            <div className="btn btn-warning mx-3">Bar Chart</div>
            <div className="btn btn-warning ml-3">Area Chart</div>
          </div>
        </div>
        <div className="col-md-6">
          <div>
            <button className="btn btn-primary ml-5 mr-3">New Chart</button>
            <button className="btn btn-primary mx-3">Save Chart</button>
            <button className="btn btn-primary ml-3">Reset Fields</button>
          </div>
          <div className="my-4">
            <HighchartsReact highcharts={Highcharts} options={this.state} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ChartData;
