import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  getUserInfo,
  typeTitle,
  typeAid,
  typeInfluence,
  typeStory
} from "../../ducks/reducer"
import axios from "axios"

import "./NewPost.css"

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slider: "newpostbackground"
    }

    this.createPost = this.createPost.bind(this)
  }

  componentDidMount() {
    // axios.get('/api/me')
    // .then(response => {
    // })
    this.props.getUserInfo()
  }

  createPost() {
    axios
      .post("/api/post", {
        story_title: this.props.type_title,
        story_text: this.props.type_story,
        influence: this.props.type_dreamaid,
        back_story: this.props.type_life,
        user_id: this.props.user.user_id
      })
      .then(response => {
        return response.data
      })
  }

  slideInFunction() {
    this.state.slider === "newpostbackground"
      ? this.setState({ slider: "newpostbackground sliderIn" })
      : this.setState({ slider: "newpostbackground" })
  }

  render() {
    const { typeTitle, typeAid, typeInfluence, typeStory } = this.props
    console.log(this.props)
    return (
      <div>
        <label
          className="yournewpost"
          to="/newpost"
          style={{ textDecoration: "none", color: "white" }}
          onClick={() => this.slideInFunction()}
        >
          NEW POST
        </label>
        {/*  -------   NEW POST BUTTON ABOVE  ------   */}

        <div className={this.state.slider}>
          <div className="newpostflexorganizer">
              <p className="newposttitletext">NEW POST</p>
            <div className="spantext">
              <span className="yourdreamfont">TITLE DREAM:</span>
              <br />
              <input
                className="titletext"
                onChange={e => typeTitle(e.target.value)}
              />
            </div>

            <div className="spantext">
              <span className="yourdreamfont"> DESCRIBE THE DREAM: </span> <br/>
              <textarea
                className="storytext"
                onChange={e => typeStory(e.target.value)}
              />
            </div>

<div className="organizeinfluenceboxes">
            <div className="influencespandivs">
              <span className="yourdreamfont">SLEEP OR DREAM AID:</span>
              <br />
              <textarea
                className="influencetext"
                onChange={e => typeAid(e.target.value)}
              />
            </div>

            <div className="influencespandivs">
              <span className="yourdreamfont">
                
                REAL LIFE INFLUENCE:
              </span>
              <br />
              <textarea
                className="influencetext"
                onChange={e => typeInfluence(e.target.value)}
              />
            </div>
</div>

            

            <div onClick={this.createPost} className="spantext">
              CREATE POST
            </div>
        </div>
 
 {/*  ---------- END OF CENTER PIECE ----  */}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {
  getUserInfo,
  typeTitle,
  typeAid,
  typeInfluence,
  typeStory
})(NewPost)
