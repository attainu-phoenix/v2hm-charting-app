import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChartWrapper = (props) => {
   console.log(props.chartData);

        let options = {
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
        }  
        return(
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                oneToOne={true}
            />
        );
}

export default PieChartWrapper;
