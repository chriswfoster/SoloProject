import React, { Component } from "react"
import "./home.css"
import { getAllPosts } from "../../ducks/reducer"
import { connect } from "react-redux"
import Poster from "./Poster"
import HomeNav from "./HomeNav"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  componentDidMount() {
    this.props.getAllPosts()
  }

  handleLogin() {
    window.location.href = "http://localhost:3001/login"
  }

  render() {
  

    return (
      <div>
          <HomeNav />
          {/* main body */}
          
            <Poster />
          
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts })(Home)
