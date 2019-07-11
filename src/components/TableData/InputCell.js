import React from "react";

class InputCell extends React.Component {
  render() {
    return (
      <td>
        <input
          type="text"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onTableUpdate}
        />
      </td>
    );
  }
}

export default InputCell;
