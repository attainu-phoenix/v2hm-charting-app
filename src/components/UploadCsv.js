import React from "react";
import Papa from 'papaparse';




class CsvComponent extends React.Component {

    constructor() {
        super(); 
        this.state = {
            csvFile: undefined
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            csvFile: event.target.files[0]
        });
    };

    importCSV = () => {
        let csvFile = this.state;
        Papa.parse(csvFile, {
            complete: this.updateData,
            harder: true
        }) ;
    };

    updateData(result){
        let data = result.data;
        console.log(data);
    }
    render() {
        return(               

                <div className = "App">
                    <h3>Import CSV File</h3>
                    <input className = "csv-input" accept = ".csv" type = "file"
                     onChange = {this.handleChange} />                    
                    <button onClick = {this.importCSV.bind(this)} className = "btn btn-success">Upload Now </button>    
                    </div>
        );
    }
}


export default CsvComponent;