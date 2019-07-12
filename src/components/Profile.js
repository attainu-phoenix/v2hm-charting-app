import React, { useReducer } from 'react';
import {getUserAccess} from "../store/api/index.js";
class Profile extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            name: "",
            email:"",
            imageUrl:""
        }
    }

    componentDidMount(){
        
       

        let user = getUserAccess();
        
    
        this.setState({
            name: user.name,
            email: user.email,
            imageUrl: user.imageUrl
        })
    }

render() {
    return (
      <div className="">
         <h3>PROFILE</h3>

         <hr />
        
             <img src={this.state.imageUrl} class="img-thumbnail" alt="Profile_Image" width="100" height="100"/>
   
          <br/>
          <br/>  
           <p><strong>Name:&nbsp;</strong><strong>{this.state.name}</strong></p>
 
           <p><strong>Email:&nbsp;</strong><strong>{this.state.email}</strong></p>
       </div>
    );
  }
}
export default Profile;