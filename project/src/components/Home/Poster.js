import React, { Component } from "react"
import "./home.css"
import { getAllPosts } from "../../ducks/reducer"
import { connect } from "react-redux"

class Poster extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  handleLogin() {
    window.location.href = "http://localhost:3001/login"
  }

  render() {
    console.log(this.props.allposts)
    const list = this.props.allposts.map((dream, i) => (
        <div key={i} className="centerposts">
         <div>{dream.story_title}</div>
         <div className="postboxes">{dream.story_text} </div>
        </div>
    ))
    return (
      
        <div className="maxheight">
        {list}
        </div>
      
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts })(Poster)
