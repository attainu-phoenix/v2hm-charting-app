import React from "react";

class CreateChart extends React.Component {
    render() {
        return (
    
            <div className="container">  
                <div>CHOOSE INPUT METHOD</div>
                <br />
    
                    <div className="card bg-info" style={{width: 180, height: 140, float: "left"}}>
    
                        <div className="card-body">
                            <br />
                            <a href="/app/make-your-chart"><p className="text-white">Input Data</p> </a>
                        </div>
                        </div>
            
    
                    <div className="card bg-info text-white" style={{width: 180, height: 140, float: "left", marginLeft: 30}}>
    
                        <div className="card-body">
                            <br />
                            <a href="/app/uploadCsv"><p className="text-white">Upload CSV</p></a>
                        </div>
                    </div>
    
    
    
    
    
            </div>
        );
      }
}
   

export default CreateChart;
