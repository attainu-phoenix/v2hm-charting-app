import React from "react";
//import csv from 'csv';
import CsvParse from '@vtex/react-csv-parse'

class CSVFileUploader extends React.Component {
  constructor() {
    super();
    this.state = {
      files: ""
    };
  }

  handleData = data => {
    this.setState({ data })
    console.log(data);
  }
  // fileChanged = e => {
  //   let file = e.target.files[0];
  //   let reader = new FileReader();
  //   reader.onload = function(e) {
  //     csv.parse(reader.result, (err, data) =>{
  //       let csvdata = JSON.stringify(data);
  //       console.log(csvdata);
  //     });
  //   };
  //   reader.readAsText(file);
  // };

  render() {

    const keys = [
      "header1",
      "header2",
      "header3",
      "header4",
      "header5",
    ]
    return (
      <CsvParse
      keys={keys}
      onDataUploaded={this.handleData}
      onError={this.handleError}
      render={onChange => <input type="file" onChange={onChange} />}
    />

      // <div className="custom-file upload">
      //   <input
      //     type="file"
      //     className="custom-file-input"
      //     id="inputGroupFile01"
      //     aria-describedby="inputGroupFileAddon01"
      //     onChange={this.fileChanged}
      //     accept=".csv"
      //   />
      //   <label className="custom-file-label" htmlFor="inputGroupFile01">
      //     Choose file
      //   </label>
      // </div>
      // <input className = "text-success"
      //     type="file"
      //     onChange={ this.fileChanged }
      //     accept=".csv"
      // />
    );
  }
}
export default CSVFileUploader;
