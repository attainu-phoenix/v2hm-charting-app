import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class ChartComponent extends React.Component{

    render(){
            var isLoading = this.props.options;

            console.log(isLoading);
            if(!isLoading){
                return <h3>Loading.....</h3>
            } 
        
            return(
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={this.props.options}
                        oneToOne={true}
                    />
            );
        }
    }
    


export default ChartComponent;