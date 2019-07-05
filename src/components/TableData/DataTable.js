import React from "react";

import DataRow from "./DataRow";
import Scroll from "../Scroll";

import "../../style/DataTable.css";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var onTableUpdate = this.props.onTableUpdate;
    var rowDel = this.props.onRowDel;
    var data = this.props.datas.map(function(data) {
      return (
        <DataRow
          onTableUpdate={onTableUpdate}
          data={data}
          onDelEvent={rowDel.bind(this)}
          key={data.id}
        />
      );
    });
    return (
      <div>
        <Scroll>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">
                  <h6>A</h6>
                </th>
                <th scope="col">
                  <h6>B</h6>
                </th>
                <th scope="col">
                  <h6>C</h6>
                </th>
                <th scope="col">
                  <h6>D</h6>
                </th>
                <th scope="col">
                  <h6>E</h6>
                </th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </Scroll>
        <div className="py-3">
          <button
            className="btn btn-success mr-3"
            onClick={this.props.onRowAdd}
          >
            Add Row
          </button>
        </div>
      </div>
    );
  }
}

export default DataTable;
