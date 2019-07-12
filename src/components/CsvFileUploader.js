import React from "react";
import { Link } from "react-router-dom";

class CSVFileUploader extends React.Component {
  constructor() {
    super();
    this.state = {
      files: ""
    };
  }

  fileChanged = e => {
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = function(e) {
      console.log(e.target.result);
    };
    reader.readAsText(file);
  };

  render() {
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
export default CSVFileUploader;
