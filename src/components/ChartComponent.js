import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class ChartComponent extends React.Component {
  render() {
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={this.props.options}
        oneToOne={true}
      />
    );
  }
}

export default ChartComponent;
