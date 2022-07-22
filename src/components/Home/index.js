import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    nameErrMsg: '',
    emailErrMsg: '',
    passwordErrMsg: '',
    confirmPasswordErrMsg: '',
    status: 'Active',
    gender: 'Male',
  }

  onChangeName = event => {
    if (event.target.value === '') {
      this.setState({nameErrMsg: 'Required*'})
    } else {
      this.setState({name: event.target.value})
      this.setState({nameErrMsg: ''})
    }
  }

  onChangeEmail = event => {
    if (event.target.value === '') {
      this.setState({emailErrMsg: 'Required*'})
    } else {
      this.setState({email: event.target.value})
      this.setState({emailErrMsg: ''})
    }
  }

  onChangePassword = event => {
    if (event.target.value === '') {
      this.setState({passwordErrMsg: 'Required*'})
    } else {
      this.setState({password: event.target.value})
      this.setState({passwordErrMsg: ''})
    }
  }

  onChangeConfirmPassword = event => {
    const {password, confirmPassword} = this.state
    this.setState({confirmPassword: event.target.value})
    if (password !== confirmPassword) {
      this.setState({confirmPasswordErrMsg: 'Passwords must be same'})
    } else {
      this.setState({confirmPasswordErrMsg: ''})
    }
  }

  onChangeStatus = event => {
    this.setState({status: event.target.value})
  }

  onChangeFemale = event => {
    this.setState({gender: event.target.value})
  }

  onChangeMale = event => {
    this.setState({gender: event.target.value})
  }

  isValidation = () => {
    const {name, password, email} = this.state
    if (name.length <= 5) {
      alert('name is to short')
      return false
    }
    if (password.length <= 6) {
      alert('password to short')
      return false
    }
    if (/\S+@\S+\.\S+/.test(email) === false) {
      alert('email is invalid')
      return false
    }
    return true
  }

  submitForm = event => {
    const {name, email, status, gender} = this.state
    event.preventDefault()
    if (this.isValidation()) {
      console.log('name:', name)
      console.log('email:', email)
      console.log('status:', status)
      console.log('gender:', gender)
    } else {
      console.log('INvalid Data')
    }
  }

  render() {
    const {
      nameErrMsg,
      passwordErrMsg,
      emailErrMsg,
      confirmPasswordErrMsg,
    } = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <h1 className="message">Submit Details</h1>
          <div className="container">
            <form id="myForm" onSubmit={this.submitForm}>
              <div className="input-container">
                <label className="input-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="name-input-field"
                  //   value={'name'}
                  onBlur={this.onChangeName}
                  id="name"
                  placeholder="name"
                />
                <p className="error-message">{nameErrMsg}</p>
              </div>
              <div className="input-container">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="text"
                  className="name-input-field"
                  id="email"
                  onBlur={this.onChangeEmail}
                  placeholder="Email"
                />
                <p className="error-message">{emailErrMsg}</p>
              </div>
              <div className="input-container">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  className="name-input-field"
                  id="password"
                  onBlur={this.onChangePassword}
                  placeholder="password"
                />
                <p className="error-message">{passwordErrMsg}</p>
              </div>
              <div className="input-container">
                <label htmlFor="password" className="input-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="name-input-field"
                  id="password"
                  onBlur={this.onChangeConfirmPassword}
                  placeholder="password"
                />
                <p className="error-message">{confirmPasswordErrMsg}</p>
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="status">
                  Working Status
                </label>
                <select onChange={this.onChangeStatus} className="form-control">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div>
                <h1 className="input-label">Gender</h1>

                <label htmlFor="genderMale">
                  <input
                    type="radio"
                    name="gender"
                    onChange={this.onChangeMale}
                    value="Male"
                    checked
                  />
                  Male
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="genderFemale"
                  value="Female"
                  onChange={this.onChangeFemale}
                />
                <label htmlFor="genderFemale">Female</label>
              </div>
              <button type="submit" className="login-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
