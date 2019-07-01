import React from "react";
import ReactDataGrid from "react-data-grid";

import "./style/DataTable.css";

const defaultColumnProperties = {
  resizable: true,
  width: 140
};

const columns = [
  { key: "a", name: "A", editable: true },
  { key: "b", name: "B", editable: true },
  { key: "c", name: "C", editable: true },
  { key: "d", name: "D", editable: true },
  { key: "e", name: "E", editable: true }
].map(c => ({ ...c, ...defaultColumnProperties }));

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    let rows = [
      { a: "Brands", b: "Export Sales %" },
      { a: "Coca Cola", b: 35 },
      { a: "Red Bull", b: 15 },
      { a: "Pepsi", b: 25 },
      { a: "Kingfisher", b: 15 },
      { a: "Carlsberg", b: 10 },
      { a: "", b: "" },
      { a: "", b: "" },
      { a: "", b: "" },
      { a: "", b: "" },
      { a: "", b: "" },
      { a: "", b: "" }
    ];
    for (let i = 1; i < 1000; i++) {
      rows.push({});
    }
    this.state = { rows, selectedIndexes: [] };
  }

  // state = { rows };

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  rowGetter = i => {
    return this.state.rows[i];
  };

  onRowsSelected = rows => {
    this.setState({
      selectedIndexes: this.state.selectedIndexes.concat(
        rows.map(r => r.rowIdx)
      )
    });
  };

  onRowsDeselected = rows => {
    let rowIndexes = rows.map(r => r.rowIdx);
    this.setState({
      selectedIndexes: this.state.selectedIndexes.filter(
        i => rowIndexes.indexOf(i) === -1
      )
    });
  };

  render() {
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={13}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
        rowSelection={{
          showCheckbox: true,
          enableShiftSelect: true,
          onRowsSelected: this.onRowsSelected,
          onRowsDeselected: this.onRowsDeselected,
          selectBy: {
            indexes: this.state.selectedIndexes
          }
        }}
      />
    );
  }
}

export default DataTable;
