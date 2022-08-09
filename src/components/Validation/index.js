import './index.css'
import React, {useState} from 'react'

const Validation = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    status: 'Active',
    gender: 'Male',
  })
  const {name, email, password, confirmPassword} = data
  const changeHandler = e => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const submitForm = event => {
    event.preventDefault()
    if (name.length <= 5) {
      alert('name must be at least 5 character')
    } else if (password.length <= 6) {
      alert('password to short')
    } else if (password !== confirmPassword) {
      alert('Passwords are not matching')
    } else if (/\S+@\S+\.\S+/.test(email) === false) {
      alert('email is invalid')
    } else {
      console.log(data)
    }
  }

  return (
    <>
      <div>
        <div className="app-container">
          <div className="home-container">
            <h1 className="message">Submit Details</h1>
            <div className="container">
              <form id="myForm" onSubmit={submitForm}>
                <div className="input-container">
                  <label className="input-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    className="name-input-field"
                    value={name}
                    onChange={changeHandler}
                    id="name"
                    name="name"
                    placeholder="name"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="email" className="input-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="name-input-field"
                    value={email}
                    id="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Email"
                  />
                  {/* {email ? null : <p className="error-message">Requiered*</p>} */}
                </div>
                <div className="input-container">
                  <label htmlFor="password" className="input-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="name-input-field"
                    value={password}
                    id="password"
                    name="password"
                    onChange={changeHandler}
                    placeholder="password"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password" className="input-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="name-input-field"
                    value={confirmPassword}
                    id="password"
                    name="confirmPassword"
                    onChange={changeHandler}
                    placeholder="password"
                  />
                  {/* {password !== confirmPassword ? (
                    <p className="error-message">Passwords are not matching</p>
                  ) : null} */}
                </div>
                <div className="input-container">
                  <label className="input-label" htmlFor="status">
                    Working Status
                  </label>
                  <select
                    onChange={changeHandler}
                    className="form-control"
                    name="status"
                  >
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
                      onChange={changeHandler}
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
                    onChange={changeHandler}
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
      </div>
    </>
  )
}

export default Validation
