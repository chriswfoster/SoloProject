import React, { Component } from "react"

import { getAllPosts, toDisplay } from "../../../ducks/reducer"
import { connect } from "react-redux"
import Moment from "react-moment"
import Comments from "../../Comments/Comments"

import "../home.css"
class Sidebar extends Component {
  componentWillReceiveProps() {}

  render(props) {
    const { i, dream, dreamid } = this.props
    return (
      <div>
        <div>
          <input type="checkbox" id={`popup__${i}`} className="popup__check" />
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
                {this.props.display_post === dreamid ? (
                  <Comments dreamid={dreamid} />
                ) : (
                  "No comments here yet..."
                )}
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
                    ""
                  ) : (
                    <div>
                      <label
                        className="savebutton"
                        onClick={() =>
                          this.postComment(dream.post_id) &
                          window.location.reload()
                        }
                      >
                        SAVE
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {i % 2 === 0 ? (
          <label
            htmlFor={`slide__${i}`}
            onClick={() => {
              toDisplay(dream.post_id)
            }}
          >
            <div
              className="slideRight"
              style={{ animationDuration: `${i / 2 + 0.5}s` }}
            >
              <div className="animatelinespan">
                <div className="acmefont">
                  <u>{dream.story_title}</u>{" "}
                </div>
                <div className="nittifont">
                  Posted by: {dream.displayname},{" "}
                  <Moment subtract={{ hours: 6 }} fromNow>
                    {dream.post_date}
                  </Moment>.
                </div>
                <div>{dream.likes} Likes </div>
              </div>
              <div className="linespan"> </div>
            </div>
          </label>
        ) : (
          <label
            className="slideLeft"
            style={{ animationDuration: `${i / 2 + 0.5}s` }}
            htmlFor={`slide__${i}`}
            onClick={() => {
              toDisplay(dream.post_id)
            }}
          >
            <div>
              <div className="animatelinespan">
                <div className="acmefont">
                  <u>{dream.story_title}</u>{" "}
                </div>
                <div className="nittifont">
                  Posted by: {dream.displayname},{" "}
                  <Moment subtract={{ hours: 6 }} fromNow>
                    {dream.post_date}
                  </Moment>.
                </div>
                <div>{dream.likes} Likes </div>
              </div>
              <div className="linespan"> </div>
            </div>
          </label>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts, toDisplay })(Sidebar)
