import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteChartHandle = this.deleteChartHandle.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_CHARTS",
      userId: "33sEqWyntO"
    });
  }

  // deleteChartHandle() {
  //   this.props.dispatch({
  //     type: "REMOVE_CHART",
  //     removechart: {
  //       chartId: this.props.charts.results.objectId
  //     }
  //   });
  // }

  render() {
    console.log("props in dashboard", this.props.charts);

    return (
      <div className="container">
        <div>CREATE NEW CHART</div>
        <br />
        <Link to="/app/data-type">
          <div
            className="card bg-info text-white"
            style={{ width: 180, height: 140 }}
          >
            <div className="card-body">
              <h1 className="display-1">+</h1>
            </div>
          </div>
        </Link>
        <br />

        <div>SAVED CHARTS</div>
        <div className="row">
          {this.props.charts &&
            this.props.charts.map(c => {
              return (
                <div
                  className="card bg-secondary mt-3 mb-2 mx-2"
                  style={{
                    width: 180,
                    height: 180
                  }}
                  key={c.objectId}
                >
                  {/* <button
                    chartId={c.objectId}
                    className="btn btn-danger btn-small"
                    onClick={this.deleteChartHandle}
                  >
                    delete
                  </button> */}
                  <Link to={`/app/chart/${c.objectId}`}>
                    <div className="card-body text-white">
                      <small>
                        {c.name} Chart type - {c.chartType}
                      </small>

                      <small>{c.updatedAt}</small>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

let Dashboard = connect(stateMapper)(DashboardComponent);

export default Dashboard;
