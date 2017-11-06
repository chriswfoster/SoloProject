import React, {Component} from 'react'
import './home.css'
import {Link} from 'react-router-dom'



export default class Home extends Component{




render(){
    return(
        <div className="homeflex">


           {/*nav bar */}
        <div className="navz">
        <div>
        </div>
         <p className="dreamnotesfont"> DREAM NOTES </p>
        
        <div className="loginbuttons">
        <Link to="Login" className="loginbutton">
        LOGIN
        </Link>
        <Link to="Login" className="loginbutton">
        REGISTER
        </Link>
            </div>
        </div>

        {/* main body */}
        <div className="bodybackground" >

<div className="backgroundcolor"> blah 
    </div>



            </div>






            </div>
    )
}


}