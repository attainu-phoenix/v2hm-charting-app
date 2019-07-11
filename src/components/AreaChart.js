import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Average fruit consumption during one week'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Fruit units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
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
                <HighchartsReact highcharts={Highcharts} options={this.state} />
            </div>



            <div className="mt-4">
                <div className="btn btn-warning mr-4">Line Chart</div>
                <div className="btn btn-warning mx-4">Pie Chart</div>
                <div className="btn btn-warning mx-4">Bar Chart</div>
                <div className="btn btn-warning ml-4">Area Chart</div>
            </div>
            </div>

        </div>
    );
  }
}

export default LineChart;
