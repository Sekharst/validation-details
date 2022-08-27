import './index.css'

import {useForm} from 'react-hook-form'

function Validation() {
  const {
    register,
    handleSubmit,
    // changeHandler,
    formState: {errors},
    reset,
    trigger,
    match,
  } = useForm()

  const onSubmit = data => {
    trigger('name', 'email', 'Password', 'phone')
    if (data.password === data.confirmPassword) {
      console.log(data)
      reset()
    } else {
      alert('Passwords are not matching')
    }
  }

  // console.log(watch());

  // console.log(errors.name)

  return (
    <div>
      <div className="app-container">
        <div className="home-container">
          <div className="col-sm-6 shadow round pb-3">
            <h1 className="message">Submit Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-container">
                <label className="input-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className={`name-input-field ${errors.name && 'invalid'}`}
                  {...register('name', {required: 'Name is Required'})}
                  id="name"
                  name="name"
                  placeholder="name"
                />
                {errors.name && (
                  <small className="error-message">{errors.name.message}</small>
                )}
              </div>

              <div className="input-container">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="text"
                  className={`name-input-field ${errors.email && 'invalid'}`}
                  {...register('email', {
                    required: 'Email is Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <small className="error-message">
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="email" className="input-label">
                  Phone number
                </label>

                <input
                  type="text"
                  className={`name-input-field ${errors.phone && 'invalid'}`}
                  {...register('phone', {
                    required: 'Phone is Required',
                    pattern: {
                      value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: 'Invalid phone no',
                    },
                  })}
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <small className="error-message">
                    {errors.phone.message}
                  </small>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  className={`name-input-field ${errors.password && 'invalid'}`}
                  {...register('password', {required: 'Password is Required'})}
                />
                {errors.password && (
                  <small className="error-message">
                    {errors.password.message}
                  </small>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="password" className="input-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="name-input-field"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="password"
                  {...register('confirmPassword')}
                />
                {match && (
                  <small className="error-message">Password not matched</small>
                )}
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="status">
                  Working Status
                </label>

                <select
                  {...register('status')}
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
                    {...register('gender')}
                    type="radio"
                    name="gender"
                    value="Male"
                    checked
                  />
                  Male
                </label>
                <input
                  {...register('gender')}
                  type="radio"
                  name="gender"
                  id="genderFemale"
                  value="Female"
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
  )
}

export default Validation
