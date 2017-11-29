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
import Homenav from "../Home/HomeNav"
import Navbutton from "../Home/Navbutton/Navbutton"
import NewPost from "../NewPost/NewPost"
import Editpage from "./Editpage"
import Influencepage from "./Influencepage"

class Yourpage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      influencepopup: "yourpopup__hide",
      editpopup: "yourpopup__hide",
      posttopopup: null
    }
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


  popInfluence(i) {}

  render() {
    const { typeAid, typeInfluence } = this.props
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

          <p className="yourpagedatepos">
            <u>
              Posted on:&nbsp;
              <Moment format="MM/DD/YYYY" subtract={{ hours: 6 }}>
                {dream.post_date}
              </Moment>
            </u>
          </p>

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
            <Editpage dream={dream} i={i} />
           
             
            {/* -----------BEGINNING OF INFLUENCE BUTTON-------- */}
            <Influencepage dream={dream} i={i}/>
       
          </div>
        </div>
      </div>
    ))
    return (
      <div className="yourbackground">
        <Homenav />

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
