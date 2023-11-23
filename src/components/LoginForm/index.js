// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginFormData extends Component {
  state = {name: '', password: ''}

  usedData = async event => {
    event.preventDefault()

    const {name, password} = this.state
    const userDetails = {name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const fetching = await fetch(url, options)
    const response = await fetching.json()
    console.log(response)
  }

  nameChange = event => {
    this.setState({name: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {name, password} = this.state
    return (
      <div>
        <form id="FormForName" onSubmit={this.usedData}>
          <label htmlFor="Name">USERNAME</label>
          <br />
          <input
            value={name}
            onChange={this.nameChange}
            id="Name"
            type="text"
          />
          <br />
          <label htmlFor="Password">PASSWORD</label>
          <br />
          <input
            value={password}
            onChange={this.passwordChange}
            type="password"
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginFormData
