import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ChartData from "./ChartData";
import Dashboard from "./Dashboard";
import CSVFileUploader from "./CsvFileUploader.js";

import LineChart from './LineChart.js';
import AreaChart from './AreaChart.js';
import BarChart from './BarChart.js';
import PieChart from './PieChart.js';
import CreateChart from "./CreateChart.js";
// import DataType from "./DataType.js";
import Profile from "./Profile.js";

class ContentArea extends React.Component {
  render() {
    return (
      <div className="col-md-10 p-0">
        <ul className="nav justify-content-end bg-primary pr-5 text-light">
          <li className="nav-item p-4">Notifications</li>
          <li className="nav-item p-4">Profile</li>
          <li className="nav-item p-4">Hello, USER</li>
        </ul>
        <div className="container m-5"> 
          <Route path="/app/dashboard"  component={Dashboard} />
          <Route path="/app/createchart"  component={CreateChart} />
          {/* <Route path="/app/datatype"  component={DataType} /> */}


          <Route path="/app/make-your-chart" component={ChartData} />
          <Route path="/app/uploadCsv" component= {CSVFileUploader} />

          <Route path="/app/linechart" component={LineChart} />
          <Route path="/app/areachart" component={AreaChart} />
          <Route path="/app/barchart" component={BarChart} />
          <Route path="/app/piechart" component={PieChart} />

          <Route path="/app/profile" component={Profile} />

        </div>
      </div>
    );
  }
}

export default ContentArea;
