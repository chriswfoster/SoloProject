import React, { Component } from "react"
import { connect } from "react-redux"
import "./yourpage.css"
import { getUserInfo, getAllYourPosts } from "../../ducks/reducer"
import { Link } from "react-router-dom"

class Yourpage extends Component {
  componentDidMount() {
    this.props
      .getUserInfo()
      .then(id => this.props.getAllYourPosts(id.value.user_id))
  }

  render() {
    console.log(this.props)
    const list = this.props.allyourposts.map((dream, i) => (
      <div key={i}> {dream.story_title} </div>
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
          <div className="filler" />
        </div>
        <div className="bodybackground">
          <div className="newpost">
            <Link to="/newpost">NEW POST</Link>
          </div>
        </div>

        <div>{list}</div>
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, { getUserInfo, getAllYourPosts })(
  Yourpage
)
