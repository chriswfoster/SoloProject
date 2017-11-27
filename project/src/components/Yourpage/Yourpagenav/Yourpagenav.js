import React, { Component } from "react"
import { connect } from "react-redux"
import "../yourpage.css"
import {
  getUserInfo,
  getAllYourPosts,
  typeStory,
  typeInfluence,
  typeAid
} from "../../../ducks/reducer"
import { Link } from "react-router-dom"
import axios from "axios"
import Moment from 'react-moment'

class Yourpagenav extends Component {
  constructor(props) {
    super(props)


  }



render(){
    return(


 <div className="yournavz">
 <div className="yourdreamfont">

{!this.props.user.user_id ? (
''
) : (
<u>
     {this.props.user.nickname}'s <br />PAGE
   </u>
)}

 </div>
 <Link className="yourpagedreamnotesfont" to="/">
   {" "}
   DREAM NOTES{" "}
 </Link>
 <div className="yournewpost">
   <Link
     to="/newpost"
     style={{ textDecoration: "none", color: "white" }}
   >
     NEW POST
   </Link>
 </div>
</div>
    )
}
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserInfo,
  getAllYourPosts,
  typeStory,
  typeInfluence,
  typeAid
})(Yourpagenav)