import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },
    
        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },
    
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 300
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
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

export default LineChart;
