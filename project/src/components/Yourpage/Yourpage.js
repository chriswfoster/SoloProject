import React, { Component } from "react"
import { connect } from "react-redux"
import "./yourpage.css"
import {
  getUserInfo,
  getAllYourPosts,
  typeStory,
  typeInfluence,
  typeAid
} from "../../ducks/reducer"
import { Link } from "react-router-dom"
import axios from "axios"
import Moment from 'react-moment'

class Yourpage extends Component {
  constructor(props) {
    super(props)

    this.blah = this.blah.bind(this)
  }

  componentDidMount() {
    this.props
      .getUserInfo()
      .then(id => this.props.getAllYourPosts(id.value.user_id))
  }

  storyToShare(postid) {
    axios
      .post("/api/share", {
        post_id: postid
      })
      .then(response => {
        console.log(response.data)
      })
  }

  myPopup(i) {
    var popup = document.getElementById(`myPopup${i}`)
    popup.classList.toggle("show")
  }

  editStory(postid) {
    console.log(postid)
    axios
      .put("/api/editStory", {
        post_id: postid,
        story_text: this.props.type_story
      })
      .then(response => {
        return response.data
      })
  }

  editInfluence(postid) {
    console.log(postid)
    axios
      .put("/api/editInfluence", {
        post_id: postid,
        influence: this.props.type_dreamaid
      })
      .then(response => {
        return response.data
      })
  }

  editBackstory(postid) {
    axios
      .put("/api/editBackstory", {
        post_id: postid,
        back_story: this.props.type_life
      })
      .then(response => {
        return response.data
      })
  }

  blah() {
    console.log(this.props)
  }

  render() {
    const { typeStory, typeAid, typeInfluence } = this.props
    console.log(this.props)
    const list = this.props.allyourposts.map((dream, i) => (
      <div key={i} className="centerposts">
        <div>"{dream.story_title}" posted on <Moment format="MM/DD/YYYY" subtract={{hours:6}}>{dream.post_date}</Moment></div>
        <div className="postboxes">
          <pre>{dream.story_text}</pre>
          <div className="wrapsharebuttons">
            

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
                    <textarea
                      className="poptextboxes"
                      onChange={e => typeStory(e.target.value)}
                      defaultValue={dream.story_text}
                    />
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
                onClick={() => typeStory(dream.story_text)}
              >
                EDIT
              </label>
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
                    <textarea
                      className="poptextboxes2"
                      onChange={e => typeAid(e.target.value)}
                      defaultValue={dream.influence}
                    />
                    <div
                      className="savebuttonalignment"
                      onClick={() => this.editInfluence(dream.post_id)}
                    >
                      <p className="savebutton">SAVE DREAM/SLEEP AID</p>
                    </div>
                    <textarea
                      className="poptextboxes3"
                      onChange={e => typeInfluence(e.target.value)}
                      defaultValue={dream.back_story}
                    />
                    <div className="savebuttonalignment">
                      <div
                        className="savebutton"
                        onClick={() => this.editBackstory(dream.post_id)}
                      >
                        SAVE BACKSTORY
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor={`popup2__${i}`}
                        className="savebutton"
                        onClick={() => window.location.reload()}
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
                onClick={() =>
                  typeInfluence(dream.back_story) && typeAid(dream.influence)}
              >
                INFLUENCE
              </label>
            </div>
          </div>
        </div>
      </div>
    ))
    return (
      <div>
        <div className="navz">
          <div className="yourdreamfont">
            <u>
              {this.props.user.nickname}'s <br />PAGE
            </u>
          </div>
          <Link className="dreamnotesfont" to="/">
            {" "}
            DREAM NOTES{" "}
          </Link>
          <div className="newpost">
            <Link
              to="/newpost"
              style={{ textDecoration: "none", color: "white" }}
            >
              NEW POST
            </Link>
          </div>
        </div>
        <div className="bodybackground">
          <div />
          <div>{list}</div>
        </div>
        <button onClick={this.blah} />
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {
  getUserInfo,
  getAllYourPosts,
  typeStory,
  typeInfluence,
  typeAid
})(Yourpage)
