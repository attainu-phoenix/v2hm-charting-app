import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class AreaComponent extends React.Component{

    render() {

        let options = {
            chart: {
                type: 'column'
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
                plotBands: [{
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
                }, {
                    name: 'Jack',
                    data: [3, 9, 5, 2, 2, 7, 6]
            }]
        };

        return(

            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                oneToOne={true}
            />

        );
    }
}

export default AreaComponent;