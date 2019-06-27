import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
      <div className="row">
        <div className="col-md-6">
          <h4 className="mb-5">Make your chart</h4>
          <div className="data-table my-4">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">A</th>
                  <th scope="col">B</th>
                  <th scope="col">C</th>
                  <th scope="col">D</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td />
                  <td>Brand Export %</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Coca Cola</td>
                  <td>35</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Red Bull</td>
                  <td>15</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Pepsi</td>
                  <td>25</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Kingfisher</td>
                  <td>15</td>
                  <td />
                  <td />
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Carlsberg</td>
                  <td>10</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
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
    );
  }
}

export default ChartData;
