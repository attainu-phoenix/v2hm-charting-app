import React from "react";
import { Link } from "react-router-dom";

class DataType extends React.Component {
  render() {
    return (
      <div className="container">
        <Link to="/app/dashboard">
          <h5>&larr; Back</h5>
        </Link>

        <div>CHOOSE INPUT METHOD</div>
        <br />

        <Link to="/app/chart/123">
          <div
            className="card bg-info text-white"
            style={{ width: 180, height: 140, float: "left" }}
          >
            <div className="card-body">
              <br />
              <p>Input Data</p>
            </div>
          </div>
        </Link>

        <Link to="/app/upload-csv">
          <div
            className="card bg-info text-white"
            style={{ width: 180, height: 140, float: "left", marginLeft: 30 }}
          >
            <div className="card-body">
              <br />
              <p>Upload CSV</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default DataType;
