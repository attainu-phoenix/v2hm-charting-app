import React from "react";

import DataTable from "./DataTable";

class Data extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.datas = [
      {
        id: 1,
        a: "Company",
        b: "Export %",
        c: "",
        d: "",
        e: ""
      },
      {
        id: 2,
        a: "Coca Cola",
        b: 35,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 3,
        a: "Pepsi",
        b: 25,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 4,
        a: "Red Bull",
        b: 15,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 5,
        a: "Kingfisher",
        b: 10,
        c: "",
        d: "",
        e: ""
      },
      {
        id: 6,
        a: "Carlsberg",
        b: 15,
        c: "",
        d: "",
        e: ""
      }
    ];
  }

  handleAddRow(evt) {
    var id = Math.floor(Math.random() * 99999);
    var data = {
      id: id,
      a: "",
      b: "",
      c: "",
      d: "",
      e: ""
    };
    this.state.datas.push(data);
    this.setState(this.state.datas);
  }

  handleRowDel(data) {
    var index = this.state.datas.indexOf(data);
    this.state.datas.splice(index, 1);
    this.setState(this.state.datas);
  }

  handleTableUpdate(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var datas = this.state.datas.slice();
    var newData = datas.map(function(data) {
      for (var key in data) {
        if (key == item.name && data.id == item.id) {
          data[key] = item.value;
        }
      }
      return data;
    });
    this.setState({ datas: newData });
  }

  render() {
    return (
      <DataTable
        onTableUpdate={this.handleTableUpdate.bind(this)}
        onRowAdd={this.handleAddRow.bind(this)}
        onRowDel={this.handleRowDel.bind(this)}
        datas={this.state.datas}
      />
    );
  }
}

export default Data;
