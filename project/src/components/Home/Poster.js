import React, { Component } from "react"
import "./home.css"
import { getAllPosts, toDisplay } from "../../ducks/reducer"
import { connect } from "react-redux"

import Comments from '../Comments/Comments'

class Poster extends Component {
  constructor(props) {
    super(props)
    this.state = {
    showComments: false
    }
    this.test=this.test.bind(this)
  }

  componentDidMount() {
    this.props.getAllPosts()
    
  }

  


  test(){
    console.log('props editme:' + this.props.edit_me)
    this.setState({showComments: true})
    console.log('props allcomments:' + this.props.allcomments)
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
                    
                    
                    
                    <pre
                      className="poptextboxes"
                  /* onChange={e => typeStory(e.target.value)} */
                  /* you were going to map within this map to map your comments into the poup */
                    >

                    </pre>
                    <div className="savebuttonalignment">
                      <div
                        className="savebuttonstory"
                        onClick={() => this.editStory(dream.post_id)}
                        value="Refresh Page"
                      >
                        {" "}
                        Save{" "}
                      </div>
                      <label
                        htmlFor={`popup__${i}`}
                        className="savebutton"
                        onClick={() => window.location.reload()}
                      >
                        {" "}
                        CLOSE{" "}
                      </label>
                    </div>
                  </div>
                </div>
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
        <button onClick={() => this.test()}></button>
        {list}
        </div>
  
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay })(Poster)