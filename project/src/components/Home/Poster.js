import React, { Component } from "react"
import "./home.css"
import { getAllPosts, toDisplay } from "../../ducks/reducer"
import { connect } from "react-redux"

import axios from 'axios'

import Comments from '../Comments/Comments'

class Poster extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.addLike=this.addLike.bind(this)
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





  render() {
    const {getAllComments, toDisplay} = this.props
    console.log(this.props.allposts)
    const list = this.props.allposts.map((dream, i) => (
    
        <div key={i} className="centerposts">
         <div>NUMBER OF LIKES: {dream.likes},,,{dream.displayname}, {dream.story_title}, {dream.post_date}</div>
         <div className="postboxes"><pre>{dream.story_text} </pre>
         
         <div className="wrapsharebuttons">
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

                    <div>
                      <label
                        htmlFor={`popup__${i}`}
                        className="savebutton"
                      >
                        CLOSE
                      </label>
                    </div>
                    
                  </div>
                </div>
              </div>
              <span
              className="sharebutton"
              onClick={() => this.addLike(dream.post_id)}
            >
              LIKE
            </span>







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
                        className="savebutton"
                      >
                        CLOSE
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <label
                className="trigger sharebutton"
                htmlFor={`popup2__${i}`}
               
              >
                INFLUENCE
              </label>
            </div>






            
            
              <label
                className="trigger sharebutton"
                htmlFor={`popup__${i}`}
                onClick={() => {
                  toDisplay(dream.post_id)
                }}
              >
                COMMENTS
              </label>
            </div>
               
         
         
         </div>



        </div>
    ))
    return (
      
        <div className="bodybackground">

        {list}
        </div>
  
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay })(Poster)
