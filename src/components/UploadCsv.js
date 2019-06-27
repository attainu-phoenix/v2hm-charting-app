import React from "react";
import ReactFileReader from 'react-file-reader';



class CsvComponent extends React.Component {

    constructor() {
        super(); 
    }
    handleFiles = files => {
        console.log(files)
      }
    render() {
        return(               

                <div className = "App">
                    <h3>Import CSV File</h3>
                    <ReactFileReader type = "file" handleFiles={this.handleFiles} fileTypes={'.csv'}>
                        <button className='btn btn-info'>Upload</button>
                    </ReactFileReader>
                    </div>

        );
    }
}


export default CsvComponent;