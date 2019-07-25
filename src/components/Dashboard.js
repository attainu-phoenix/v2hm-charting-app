import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";
import { getUserAccess } from "../store/api/index";

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
                  key={c.objectId}
                  className="card bg-secondary mt-3 mb-2 mx-2"
                  style={{
                    width: 180,
                    height: 180
                  }}
                >
                  <Link to={`/app/chart/${c.objectId}`}>
                    <div className="card-body text-white">
                      <small>
                        {c.name} <br /> Type -{" "}
                        {c.chartType.toUpperCase() + " Chart"}
                      </small>
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
