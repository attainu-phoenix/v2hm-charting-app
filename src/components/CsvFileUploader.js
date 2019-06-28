import React from 'react';


class CSVFileUploader extends React.Component {

    constructor(){
        super();
        this.state = {
            files: ""
        };
    }

   
    fileChanged = e => {
        let file = e.target.files[0];
        
        let reader = new FileReader();
        reader.onload = function(e) {
          console.log(e.target.result);
        };
        reader.readAsText(file);
    }


    render() {
        return(
            <input className = "text-success"
                type="file" 
                onChange={ this.fileChanged }
                accept=".csv" 
            />
        )
    }
}
export default CSVFileUploader;