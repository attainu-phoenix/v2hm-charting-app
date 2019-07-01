import React from 'react';


import {Redirect} from 'react-router-dom'; 

class Logout extends React.Component{

    render(){

        localStorage.removeItem("user");

       

        return(
            <div>
                <Redirect to="/" />
            </div>
        )
    }
}

export default Logout;