import React, {Component} from 'react'
import { connect } from "react-redux"
import {typeComment} from '../../ducks/reducer'
import axios from 'axios'
import Moment from 'react-moment'


import './comments.css'

class Comments extends Component{
constructor(props){
    super(props)
    this.state = {
        allcomments: []
    }
}

// shouldComponentUpdate(nextProps, nextState){
//     console.log(this.props.dream_id)
//     console.log(nextProps.edit_me)
// if(nextProps.edit_me===this.props.dream_id){
//     return true
// } else return false
// }

// componentWillReceiveProps(dreamid){
//     console.log(dreamid)  

//     getAllComments(dreamid)
// }

componentDidMount(dreamid){
    axios.get(`/api/getallcomments/${this.props.display_post}`).then(response => {
        console.log(response.data)
        this.setState({allcomments: response.data})})
    // getAllComments(this.props.edit_me)
     console.log(this.state.allcomments)
}



render(){
    const {typeComment} = this.props
    const commentlist = this.state.allcomments.length > 0 ? 
    this.state.allcomments.map((comment, i) => (
        <div key={i} className="centerposts">
            <div> Comment by: {comment.nickname} <Moment subtract={{hours:6}} fromNow>{comment.comment_date}</Moment> </div>
           <div className="commentboxes"> {comment.comment_text} </div>
            </div> 
    )) : <div>'No comments here'</div>
    return(
        <div>
            {commentlist}
            <div className="centerposts">

{!this.props.user.user_id ? (
    <div className="loginbuttons">
      <button onClick={this.handleLogin} className="loginbutton">
        LOGIN TO COMMENT
      </button>
    </div>
  ) : (
    <textarea className="postboxes" defaultValue="Type your comment" onChange={(e) => typeComment(e.target.value)}>
    </textarea>
  )}



            
</div>
            </div>



    )
}

}

const mapStateToProps = state => state

export default connect(mapStateToProps, { typeComment })(Comments)
