import React, { Component } from "react"
import "./home.css"
import { getAllPosts } from "../../ducks/reducer"
import { connect } from "react-redux"

class Home extends Component {
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
  handleLogout() {
    window.location.href = "http://localhost:3001/logout"
  }

  render() {
    return (
      <div>
        <div className="navz ">
          <p className="dreamnotesfont"> DREAM NOTES </p>
          <div>
            {!this.props.user.user_id ? (
              <div className="loginbuttons">
                <button onClick={this.handleLogin} className="loginbutton">
                  LOGIN
                </button>
                <button onClick={this.handleLogin} className="loginbutton">
                  REGISTER
                </button>
              </div>
            ) : (
              <p onClick={this.handleLogout} className="loginbutton">LOGOUT</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, { getAllPosts })(Home)
