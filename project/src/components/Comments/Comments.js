import React, {Component} from 'react'
import { connect } from "react-redux"

import axios from 'axios'

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
    const commentlist = this.state.allcomments.length > 0 ? 
    this.state.allcomments.map((comment, i) => (
        <div key={i} className="centerposts">
            <div> Comment by: {comment.nickname} at {comment.comment_date} </div>
           <div className="commentboxes"> {comment.comment_text} </div>
            </div> 
    )) : <div>'No comments here'</div>
    return(
        <div>
            {commentlist}
            <textarea defaultValue="Type your comment">
                        </textarea>
            
                    
            </div>



    )
}

}

const mapStateToProps = state => state

export default connect(mapStateToProps, { })(Comments)
