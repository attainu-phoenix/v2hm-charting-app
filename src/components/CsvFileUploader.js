import React from "react";
import { Link, Redirect } from "react-router-dom";

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
      self.props.dispatch({
        type: "CREATE_CHART",
        newChartData: {
          userId: "33sEqWyntO",
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
        <Link to="/app/data-type">
          <h5>&larr; Back</h5>
        </Link>

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
      </div>
      // <input className = "text-success"
      //     type="file"
      //     onChange={ this.fileChanged }
      //     accept=".csv"
      // />
    );
  }
}


let CSVFileUploader = connect(stateMapper)(CSVFileUploaderComponent);
export default CSVFileUploader;
