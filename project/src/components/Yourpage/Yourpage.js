import React, { Component } from "react"
import { connect } from "react-redux"
import "./yourpage.css"
import { getUserInfo, getAllYourPosts, toEdit } from "../../ducks/reducer"
import { Link } from "react-router-dom"
import axios from "axios"

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


  blah() {
    console.log(this.props)
  }

  render() {
    const { toEdit } = this.props
    console.log(this.props)
    const list = this.props.allyourposts.map((dream, i) => (
      <div key={i} className="centerposts">
        <div>{dream.story_title} </div>
        <div className="postboxes">
          {dream.story_text}

          <div
            className="sharebutton"
            onClick={() => this.storyToShare(dream.post_id)}
          >
            Share
          </div>

          <div >
      
		<input type="checkbox" id={`popup__${i}`} class="popup__check" />
		<div class="popup__base">
			<label htmlFor={`popup__${i}`} className="popup__bg"></label>
			<div className="popup__inner">
				<div className="popup__calign">
					<label htmlFor={`popup__${i}`} className="popup__close">+</label>
				</div>
				<div class="popup__textbox">
					<h1>{(dream.story_title)}</h1>
					<textarea className="poptextboxes">
						{(dream.story_text)}
					</textarea>
          <button className="savebutton"> Save </button>
				</div>
			</div>
      
		</div>

		<label class="trigger" htmlFor={`popup__${i}`} className="sharebutton">Edit</label>
            
            </div>

          

          <div className="sharebutton">
            <div className="popup2" onClick={() => this.myPopup(i)}>
              Influence
              <span className="popuptext" id={`myPopup${i}`}>
                <div>Dream/sleep aid: {dream.influence}</div>
                <div> Back story: {dream.back_story}</div>
              </span>
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
  toEdit
})(Yourpage)
