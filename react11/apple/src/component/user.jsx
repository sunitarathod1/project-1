import React, { Fragment } from 'react'
import emp from "./emp"
class user extends React.Component{
    user={ uid:101,
           uname:"Rahul",
           uemail:"rh@gmail.com"
        }
    ploc=["vijaypur" , "mumbai" , "kolkata"]
 render(){

    return <Fragment>
       <employee user={this.user}/>

    </Fragment>
 }
}
export default user