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
    let user = getUserAccess();
    this.props.dispatch({
      type: "FETCH_CHARTS",
      userId: user.userId
    });
  }

  render() {
    console.log("props in dashboard", this.props.charts);

    return (
      <div>
        <div className="app-heading">
          <i class="fas fa-chart-pie" />
          <h5>New Chart</h5>
        </div>

        <div className="card card-new">
          <Link to="/app/upload-csv">
            <div className="card-body">
              <div className="row">
                <div className="col-sm">
                  <div className="new-card-text">
                    <span>Upload</span>
                    <p>CSV File for Charts</p>
                  </div>

                  <i class="fas fa-cloud-upload-alt" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="app-heading">
          <i class="fas fa-history" />
          <h5>Saved Charts</h5>
        </div>
        <div className="row">
          {this.props.charts &&
            this.props.charts.map(c => {
              return (
                <div key={c.objectId} className="card card-old">
                  <Link to={`/app/chart/${c.objectId}`}>
                    <div className="card-body text-white">
                      <div className="card-chart-name">{c.name}</div>

                      <div className="card-chart-type">
                        {c.chartType.toUpperCase() + " CHART"}
                      </div>
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
