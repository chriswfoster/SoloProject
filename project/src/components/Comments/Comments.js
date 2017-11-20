import React, {Component} from 'react'
import { connect } from "react-redux"
import { getAllComments } from "../../ducks/reducer"

import '../Home/home.css'

class Comments extends Component{
constructor(props){
    super(props)
}

shouldComponentUpdate(nextProps, nextState){
    console.log(this.props.dream_id)
    console.log(nextProps.edit_me)
if(nextProps.edit_me===this.props.dream_id){
    return true
} else return false

}

componentDidMount(){
    // getAllComments(this.props.edit_me)
    
}

render(){

    const commentlist = this.props.allcomments.map((comment, i) => (
        <div key={i} className="whitetext">
            {comment.comment_text}
            
            </div>
    ))
    return(
        <div>
            BLAH
            {commentlist}
            </div>



    )
}

}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllComments })(Comments)
