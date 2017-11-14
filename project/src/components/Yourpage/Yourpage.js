import React, {Component} from 'react'
import {connect} from 'react-redux'
import './yourpage.css'
import {getUserInfo} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Yourpage extends Component{


componentDidMount(){
    // axios.get('/api/me')
    // .then(response => {
    // })
 this.props.getUserInfo()


}



render(){
    console.log(this.props)
    return(
       
              <div>
              <div className="navz">
          <div className="yourdreamfont">
              <u>{this.props.user.nickname}'s <br></br>PAGE</u>
          </div>
           <Link className="dreamnotesfont" to="/"> DREAM NOTES </Link>
        <div className="filler">
            </div>
          </div>
<div className="bodybackground">
   
    <div className="newpost">
            <Link  to="/newpost">
                NEW POST
                </Link>
            </div>
                </div>



            </div>
    )
}
}


const mapStateToProps= state => state;


export default connect(mapStateToProps, {getUserInfo})(Yourpage)