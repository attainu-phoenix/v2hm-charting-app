import React from "react";

import InputCell from "./InputCell";

class DataRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.data);
  }
  render() {
    return (
      <tr className="eachRow">
        <td className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="x"
            className="btn btn-warning btn-sm py-0"
          />
        </td>

        <InputCell
          onTableUpdate={this.props.onTableUpdate}
          cellData={{
            type: "name",
            value: this.props.data.name,
            id: this.props.data.id
          }}
        />
        <InputCell
          onTableUpdate={this.props.onTableUpdate}
          cellData={{
            type: "y",
            value: this.props.data.y,
            id: this.props.data.id
          }}
        />
      </tr>
    );
  }
}

export default DataRow;
