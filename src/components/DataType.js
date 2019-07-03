import React from "react";

class DataType extends React.Component {
  render() {
    return (

        <div className="container">  
            <div>CHOOSE INPUT METHOD</div>
            <br />

                <div className="card bg-info text-white" style={{width: 180, height: 140, float: "left"}}>

                    <div className="card-body">
                        <br />
                        <p>Input Data</p>
                    </div>
                    </div>
        

                <div className="card bg-info text-white" style={{width: 180, height: 140, float: "left", marginLeft: 30}}>

                    <div className="card-body">
                        <br />
                        <p>Upload CSV</p>
                    </div>
                </div>





        </div>
    );
  }
}

export default DataType;
