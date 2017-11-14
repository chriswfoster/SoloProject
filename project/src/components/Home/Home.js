import React, {Component} from 'react'
import './home.css'
import {getAllPosts} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
       
            
        }

this.handleLogin = this.handleLogin.bind(this);
    }



componentDidMount(){
        this.props.getAllPosts()
}

handleLogin(){
window.location.href = "http://localhost:3001/login"
}



render(){
    console.log(this.props.allposts)
    return(
        <div className="homeflex">


           {/*nav bar */}
        <div className="navz">
        <div>
        </div>
         <p className="dreamnotesfont"> DREAM NOTES </p>
        
        <div className="loginbuttons">
        <button onClick={this.handleLogin} className="loginbutton">
        LOGIN
        </button>
        <button onClick={this.handleLogin} className="loginbutton">
        REGISTER
        </button>
            </div>
        </div>

        {/* main body */}
        <div className="bodybackground" >

<div className="backgroundcolor"> 

    </div>



            </div>






            </div>
    )
}
}
const mapStateToProps= state => state;


export default connect(mapStateToProps, {getAllPosts})(Home)