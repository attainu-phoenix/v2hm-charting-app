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
            type: "a",
            value: this.props.data.a,
            id: this.props.data.id
          }}
        />
        <InputCell
          onTableUpdate={this.props.onTableUpdate}
          cellData={{
            type: "b",
            value: this.props.data.b,
            id: this.props.data.id
          }}
        />
        <InputCell
          onTableUpdate={this.props.onTableUpdate}
          cellData={{
            type: "c",
            value: this.props.data.c,
            id: this.props.data.id
          }}
        />
        <InputCell
          onTableUpdate={this.props.onTableUpdate}
          cellData={{
            type: "d",
            value: this.props.data.d,
            id: this.props.data.id
          }}
        />
        <InputCell
          onTableUpdate={this.props.onTableUpdate}
          cellData={{
            type: "e",
            value: this.props.data.e,
            id: this.props.data.id
          }}
        />
      </tr>
    );
  }
}

export default DataRow;
