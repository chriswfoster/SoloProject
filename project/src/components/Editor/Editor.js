import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
  getUserInfo,
  getAllYourPosts,
  typeTitle,
  typeAid,
  typeInfluence,
  typeStory
} from "../../ducks/reducer"
import axios from "axios"

import "./Editor.css"

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      objectzor: []
    }

    this.editPost = this.editPost.bind(this)
  }

  componentDidMount() {
    this.props.getUserInfo().then(this.editThisObj())
  }
  editThisObj() {
    var blah = this.props.allyourposts.map((obj, i) => {
      if (obj.post_id === this.props.edit_me) {
        this.setState({ objectzor: Object.assign({}, i) })
      }
    })
    return blah
  }

  editPost() {
    axios
      .put("/api/edit", {
        post_id: this.props.edit_me,
        story_title: this.props.type_title,
        story_text: this.props.type_story,
        influence: this.props.type_dreamaid,
        back_story: this.props.type_life
      })
      .then(response => {
        return response.data
      })
  }

  render() {
    const { typeTitle, typeAid, typeInfluence, typeStory } = this.props
    console.log(this.props)
    console.log(this.state)

    return (
      <div className="bodybackground">
        <div className="navz">
          <div className="yourdreamfont">
            <p>
              What happened,<br /> {this.props.user.nickname}?{" "}
            </p>
          </div>
          <Link className="dreamnotesfont" to="/">
            {" "}
            DREAM NOTES{" "}
          </Link>
          <div className="filler" />
        </div>

        <div className="flexorganizer">
          <div className="spantext">
            <span>Title the dream:</span>
            <br />
            <input
              className="titletext"
              onChange={e => typeTitle(e.target.value)}
              defaultValue={`${this.props.allyourposts[this.state.objectzor]
                .story_title}`}
            />
          </div>

          <div className="spantext">
            <span> Did you take any sleep or dream aid?</span>
            <br />
            <textarea
              className="storytext"
              onChange={e => typeAid(e.target.value)}
              defaultValue={`${this.props.allyourposts[this.state.objectzor]
                .influence}`}
            />
          </div>

          <div className="spantext">
            <span>
              {" "}
              Is there anything that happened yesterday/this week/this life that
              may have affected this dream?
            </span>{" "}
            <br />
            <textarea
              className="storytext"
              onChange={e => typeInfluence(e.target.value)}
              defaultValue={`${this.props.allyourposts[this.state.objectzor]
                .back_story}`}
            />
          </div>

          <div className="spantext">
            <span> And finally, describe the dream...</span> <br />
            <textarea
              className="storytext"
              onChange={e => typeStory(e.target.value)}
              defaultValue={`${this.props.allyourposts[this.state.objectzor]
                .story_text}`}
            />
          </div>

          <button onClick={this.editPost}>CLICK ME </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {
  getUserInfo,
  getAllYourPosts,
  typeTitle,
  typeAid,
  typeInfluence,
  typeStory
})(NewPost)
