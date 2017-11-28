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
import Moment from "react-moment"
import Yourpagenav from "./Yourpagenav/Yourpagenav"
import Navbutton from "../Home/Navbutton/Navbutton"
import NewPost from "../NewPost/NewPost"

class Yourpage extends Component {
  constructor(props) {
    super(props)
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

  render() {
    const { typeStory, typeAid, typeInfluence } = this.props
    console.log(this.props)
    const list = this.props.allyourposts.map((dream, i) => (
      <div key={i} className="yourcenterposts">
        <div className="yourpostboxes">
          <div
            className={this.props.theme.font.concat(" ", "yourpagetitleflex")}
          >
            <div
              className={this.props.theme.fancytitleline.concat(
                " ",
                "yourpagetitleline"
              )}
            />
            "{dream.story_title}"
            <div
              className={this.props.theme.fancytitleline.concat(
                " ",
                "yourpagetitleline"
              )}
            />
          </div>

          <pre>{dream.story_text}</pre>

          <div className="yourwrapsharebuttons">
            <div
              className={this.props.theme.button.concat(
                " ",
                this.props.theme.font
              )}
              onClick={() => this.storyToShare(this.props.allyourposts.post_id)}
            >
              SHARE
            </div>

            {/*        BEGINNING OF EDIT BUTTON        */}
            <div>
              <input
                type="checkbox"
                id={`popup__${i}`}
                className="yourpopup__check"
              />
              <div className="yourpopup__base">
                <label htmlFor={`popup__${i}`} className="yourpopup__bg" />
                <div className="yourpopup__inner">
                  <div className={this.props.theme.closexborder}>
                    <label
                      htmlFor={`popup__${i}`}
                      className={this.props.theme.closex}
                    >
                      +
                    </label>
                  </div>
                  <div className="yourpopup__textbox">
                    <center>
                      <h3 className={this.props.theme.font}>
                        TITLE : "{dream.story_title}"{" "}
                      </h3>
                    </center>
                    <textarea
                      className={this.props.theme.inputboxes.concat(
                        " ",
                        "yourpoptextboxes"
                      )}
                      onChange={e => typeStory(e.target.value)}
                      defaultValue={dream.story_text}
                    />
                    <div className="yoursavebuttonalignment">
                      <div
                        className={this.props.theme.button.concat(
                          " ",
                          this.props.theme.font
                        )}
                        onClick={() => this.editStory(dream.post_id)}
                      >
                        SAVE
                      </div>
                      <label
                        htmlFor={`popup__${i}`}
                        className={this.props.theme.button.concat(
                          " ",
                          this.props.theme.font
                        )}
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
                className="yourtrigger"
                htmlFor={`popup__${i}`}
                onClick={() => typeStory(dream.story_text)}
              >
                <div
                  className={this.props.theme.button.concat(
                    " ",
                    this.props.theme.font
                  )}
                >
                  EDIT
                </div>
              </label>
            </div>
            {/*----------- END OF EDIT BUTTON  ---------- */}

            {/* -----------START OF INFLUENCE BUTTON-------- */}
            <div>
              <input
                type="checkbox"
                id={`popup2__${i}`}
                className="yourpopup__check"
              />
              <div className="yourpopup__base">
                <label htmlFor={`popup2__${i}`} className="yourpopup__bg" />
                <div className="yourpopup__inner">
                  <div className={this.props.theme.closexborder}>
                    <label
                      htmlFor={`popup2__${i}`}
                      className={this.props.theme.closex}
                    >
                      +
                    </label>
                  </div>

                  <h3 className={this.props.theme.font}>
                    TITLE : "{dream.story_title}"
                  </h3>

                  <div className="yourpopup__textbox">
                    <textarea
                      className={this.props.theme.inputboxes.concat(
                        " ",
                        "yourpoptextboxes2"
                      )}
                      onChange={e => typeAid(e.target.value)}
                      defaultValue={dream.influence}
                    />
                    <div
                      className="yoursavebuttonalignment"
                      onClick={() => this.editInfluence(dream.post_id)}
                    >
                      <p
                        className={this.props.theme.button.concat(
                          " ",
                          this.props.theme.font
                        )}
                      >
                        SAVE DREAM/SLEEP AID
                      </p>
                    </div>
                    <textarea
                      className={this.props.theme.inputboxes.concat(
                        " ",
                        "yourpoptextboxes3"
                      )}
                      onChange={e => typeInfluence(e.target.value)}
                      defaultValue={dream.back_story}
                    />
                    <div className="yoursavebuttonalignment">
                      <div
                        className={this.props.theme.button.concat(
                          " ",
                          this.props.theme.font
                        )}
                        onClick={() => this.editBackstory(dream.post_id)}
                      >
                        SAVE BACKSTORY
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor={`popup2__${i}`}
                        className={this.props.theme.button}
                        onClick={() => window.location.reload()}
                      >
                        CLOSE
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <label
                className={this.props.theme.button.concat(
                  " ",
                  this.props.theme.font
                )}
                htmlFor={`popup2__${i}`}
                onClick={() =>
                  typeInfluence(dream.back_story) && typeAid(dream.influence)
                }
              >
                INFLUENCE
              </label>
            </div>
            {/*          END OF INFLUENCE BUTTON         */}
          </div>
          <p className="yourpagedatepos">
            Posted on:&nbsp;
            <Moment format="MM/DD/YYYY" subtract={{ hours: 6 }}>
              {dream.post_date}
            </Moment>
          </p>
        </div>
      </div>
    ))
    return (
      <div className="yourbackground">
        <Yourpagenav />

        <NewPost />

        <Navbutton />
        <div className="yourscrollfix">{list}</div>
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
