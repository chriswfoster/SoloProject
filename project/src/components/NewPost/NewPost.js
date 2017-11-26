import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUserInfo, typeTitle, typeAid, typeInfluence, typeStory} from '../../ducks/reducer'
import axios from 'axios'



import './NewPost.css'

class NewPost extends Component {
constructor(props){
    super(props)



this.createPost = this.createPost.bind(this)
}

    componentDidMount(){
        // axios.get('/api/me')
        // .then(response => {
        // })
     this.props.getUserInfo()
    }



    createPost(){
        axios.post('/api/post', {
                    story_title: this.props.type_title,
                    story_text: this.props.type_story,
                    influence: this.props.type_dreamaid,
                    back_story: this.props.type_life,
                    user_id: this.props.user.user_id
                }).then(response => {
                   return response.data
                })
            }


    


    render(){
        const {typeTitle, typeAid, typeInfluence, typeStory} = this.props
        console.log(this.props)
        return(

            <div className ="bodybackground">


            <div className="newpostnavz">
        <div className="yourdreamfont">
            <p>What happened,<br></br> {this.props.user.nickname}? </p>
        </div>
         <Link className="newpostdreamnotesfont" to="/"> DREAM NOTES </Link>
      <div className="filler">
          </div>
        </div>

        

            <div className="flexorganizer">


<div className="spantext">
    <span>Title the dream:</span><br></br>
<input className="titletext" onChange={ (e) => typeTitle(e.target.value)}/>
    </div>

<div className="spantext">
    <span> Did you take any sleep or dream aid?</span><br></br>
 <textarea className="storytext" onChange={(e) => typeAid(e.target.value)}>
 </textarea>
 </div>

 <div className="spantext">
     <span> Is there anything that happened yesterday/this week/this life that may have affected this dream?</span> <br></br>
 <textarea className="storytext" onChange={(e) => typeInfluence(e.target.value)}>
     </textarea>
    </div>

    <div className="spantext">
     <span> And finally, describe the dream...</span> <br></br>
 <textarea className="storytext" onChange={(e) => typeStory(e.target.value)}>
     </textarea>
    </div>

<button onClick={this.createPost}>
    CLICK ME </button>
              

</div>

         
         
          </div>

        )
    }

}



const mapStateToProps= state => state;

export default connect(mapStateToProps, {getUserInfo, typeTitle, typeAid, typeInfluence, typeStory})(NewPost)