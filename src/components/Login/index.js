import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  componentDidMount() {
    this.onSubmitform()
  }

  onSubmitform = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const {userDetails} = {usernameInput, passwordInput}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="internal-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />

          <form className="login-form" onSubmit={this.onSubmitform}>
            <label htmlFor="user-heading" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="user-heading"
              className="input"
              onChange={this.onChangeUsername}
            />
            <label htmlFor="password-heading" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password-heading"
              className="input"
              onChange={this.onChangePassword}
            />
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
