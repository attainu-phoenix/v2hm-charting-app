import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: ( // theme
                        Highcharts.defaultOptions.title.style &&
                        Highcharts.defaultOptions.title.style.color
                    ) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    }
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

export default BarChart;
