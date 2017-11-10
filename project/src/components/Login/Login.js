import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './login.css'


export default class Login extends Component{




render(){
    return(
        <div>
            <div className="navz">
        <div>
        </div>
         <p className="dreamnotesfont"> DREAM NOTES </p>
        
      <div>
          </div>
        </div>

        {/* main body */}
        <div className="bodybackground" >
        <div className="loginbox">
        <p className="dreamnotesfont">LOGIN:</p>
<div>
<p>Username:</p>
<input />
</div>

<div>
<p>Password:</p>
<input />
</div>
            </div>
        <div className="loginbox">
        <p className="dreamnotesfont">REGISTER: </p>
<div>
<p>Create Username:</p>
<input />
</div>

<div>
<p>Create Password:</p>
<input />
</div>

            </div>





            </div>

      




            </div>
    )
}


}