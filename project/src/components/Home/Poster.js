import React, { Component } from "react"

import { getAllPosts, toDisplay } from "../../ducks/reducer"
import { connect } from "react-redux"
import Moment from 'react-moment'
import Sidebar from './SideBar/Sidebar'
import Mostliked from './Mostliked/Mostliked'
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
                <div className={this.props.theme.popupboxes.concat(' ', "slide__inner")}>
                  <label htmlFor={`slide__${i}`} className={this.props.theme.closexborder}>
                    
                  </label>
                  <div className={this.props.theme.font.concat(' ', "slide__textbox")}>
                    <h3>Title: {dream.story_title}</h3>
                    
                    {dream.story_text}
                  <div className="wrapstorybuttons">
                   
                      <label
                        htmlFor={`popup__${i}`}
                        className="storybuttons"
                        onClick={() => {
                          toDisplay(dream.post_id)
                        }}
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
                <div className={this.props.theme.popupboxes.concat(' ' , "popup__inner")}>
                  <label htmlFor={`popup2__${i}`} className={this.props.theme.closexborder}>
                    
                  </label>
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

            

            <Sidebar dream={dream} i={i} dreamid={dream.post_id}/>

            </div>
               </div>
    ))
    return (
      
        <div>


        <div className="leftsidebox force-overflow" id="scrollbar">
        {list}
        </div>
      <Mostliked />


        </div>
  
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay})(Poster)
