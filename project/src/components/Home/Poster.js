import React, { Component } from "react"

import { getAllPosts, toDisplay } from "../../ducks/reducer"
import { connect } from "react-redux"
import Moment from 'react-moment'
import axios from 'axios'

import Comments from '../Comments/Comments'
import "./home.css"

class Poster extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.addLike=this.addLike.bind(this)
    this.postComment=this.postComment.bind(this)
  }

  componentDidMount() {
    this.props.getAllPosts()
    
  }

  addLike(postid){
    axios
    .post("/api/like", {
      post_id: postid,
      user_id: this.props.user.user_id
    })
    .then(response => {
      console.log(response.data)
    })
    }

    postComment(postid){
      axios.post('/api/postcomment', {
          comment_text: this.props.type_comment,
          user_id: this.props.user.user_id,
          post_id: postid
      
      }).then(response => {
         return response.data
      })
  }




  render() {
    const {getAllComments, toDisplay} = this.props
    console.log(this.props.allposts)
    const list = this.props.allposts.map((dream, i) => (
    
        <div key={i} className="mainlefttitles">


         <div className="wrapsharebuttons">
              <input
                type="checkbox"
                id={`slide__${i}`}
                className="slide__check"
              />
              <div className="slide__base">
                <label htmlFor={`slide__${i}`} className="slide__bg" />
                <div className="slide__inner">
                  <div className="slide__calign">
                    <label htmlFor={`slide__${i}`} className="slide__close">
                      +
                    </label>
                  </div>
                  <div className="slide__textbox">
                    <h3>Title: {dream.story_title}</h3>
                    
                    {dream.story_text}



                  <div className="wrapstorybuttons">
                   
                      <label
                        htmlFor={`popup__${i}`}
                        className="storybuttons"
                      >
                        COMMENTS
                      </label>
                   
                    <label
                className="storybuttons"
                htmlFor={`popup2__${i}`}
                >
               INFLUENCE
               </label>

               
                    </div>
                 



                  </div>
                </div>
              </div>
          
            <div>
              <input
                type="checkbox"
                id={`popup2__${i}`}
                className="popup__check"
              />
              <div className="popup__base">
                <label htmlFor={`popup2__${i}`} className="popup__bg" />
                <div className="popup__inner">
                  <div className="popup__calign">
                    <label htmlFor={`popup2__${i}`} className="popup__close">
                      +
                    </label>
                  </div>
                  <div className="popup__textbox">
                    <h3>Title: {dream.story_title}</h3>
                    <pre className="poptextboxes2">
                     {dream.influence}
                    </pre>
                    <pre className="poptextboxes3">
                      {dream.back_story}
                    </pre>
                    <div>
                      <label
                        htmlFor={`popup2__${i}`}
                        className="storybuttons"
                      >
                        CLOSE
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <input
                type="checkbox"
                id={`popup__${i}`}
                className="popup__check"
              />
              <div className="popup__base">
                <label htmlFor={`popup__${i}`} className="popup__bg" />
                <div className="popup__inner">
                  <div className="popup__calign">
                    <label htmlFor={`popup__${i}`} className="popup__close">
                      +
                    </label>
                  </div>
                  <div className="popup__textbox">
                  <h3>Title: {dream.story_title}</h3>
                  
                  {this.props.display_post===dream.post_id ? <Comments dreamid={dream.post_id} /> : 'No comments here yet...'}



                <div className="savebuttonalignment">
                  <div>
                    <label
                      htmlFor={`popup__${i}`}
                      className="savebutton"
                      onClick={() => window.location.reload()}
                    >
                      CLOSE
                    </label>
                  </div>

{!this.props.user.user_id ? (
  ''
) : (
  <div>
  <label 
    className="savebutton"
    onClick={() => this.postComment(dream.post_id) & window.location.reload()}
  >
    SAVE
  </label>
</div>)}

                </div>



                </div>
                </div>
              </div>
            </div>


               <label
                className="trigger"
                htmlFor={`slide__${i}`}
                onClick={() => {
                  toDisplay(dream.post_id)
                }}
              >
               <div>
                 <div>{dream.story_title} </div>
        <div>Posted by: {dream.displayname}, <Moment subtract={{hours:6}} fromNow>{dream.post_date}</Moment>.</div>
         <div>{dream.likes} Likes </div>
                <div className="linespan"> </div>
                  </div>
              </label>
            </div>
               
         
         
         



        </div>
    ))
    return (
      
        <div>


        <div className="leftsidebox force-overflow" id="scrollbar">
        {list}
        </div>


        </div>
  
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay})(Poster)
