import React from "react";
import { Link, Redirect } from "react-router-dom";

import { getUserAccess } from "../store/api/index";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class CSVFileUploaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      files: ""
    };

    this.fileChanged = this.fileChanged.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "CLEAR_CHART"
    });
  }

  fileChanged = e => {
    let file = e.target.files[0],
      self = this;

    let reader = new FileReader();
    reader.onload = function(e) {
      let data = e.target.result;

      // Clean up the data
      data = data.trim();
      data = data.split("\n");
      data = data.map(d => {
        // Construct the object
        let object = {},
          values = d.split(",");
        object["name"] = values[0];
        object["y"] = parseInt(values[1], 10);
        return object;
      });

      // Send the dispatch
      let user = getUserAccess();
      self.props.dispatch({
        type: "CREATE_CHART",
        newChartData: {
          userId: user.userId, //33sEqWyntO
          name: "Untitled Chart",
          chartType: "pie",
          chartData: data
        }
      });
    };
    reader.readAsText(file);
  };

  render() {
    if (this.props.chart && this.props.chart.objectId) {
      return <Redirect to={`/app/chart/${this.props.chart.objectId}`} />;
    }

    return (
      <div>
        <div className="app-heading">
          <i class="fas fa-cloud-upload-alt" />
          <h5>Upload CSV</h5>
        </div>

        <div className="custom-file upload">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            onChange={this.fileChanged}
            accept=".csv"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
        <Link to="/app/dashboard">
          <button className="btn btn-secondary mt-4">Back</button>
        </Link>

        <div className="note text-center mt-5">
          <h4>Instructions</h4>
          <p>
            Please upload data in CSV File Format only.
            <br />
            First column in data grid will serve as X-axis and second column
            will be used as Y-axis in charts.
          </p>
        </div>
      </div>
    );
  }
}

let CSVFileUploader = connect(stateMapper)(CSVFileUploaderComponent);
export default CSVFileUploader;
