import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameErrorMsg: false,
    showLastNameErrorMsg: false,
    submitSuccessful: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        showFirstNameErrorMsg: true,
        showLastNameErrorMsg: true,
      })
    } else if (firstName === '') {
      this.setState({
        showFirstNameErrorMsg: true,
      })
    } else if (lastName === '') {
      this.setState({
        showLastNameErrorMsg: true,
      })
    } else {
      this.setState({
        submitSuccessful: true,
      })
    }
  }

  submitAnotherResponseFunction = () => {
    this.setState({
      submitSuccessful: false,
      firstName: '',
      lastName: '',
    })
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameErrorMsg,
      showLastNameErrorMsg,
      submitSuccessful,
    } = this.state
    let firstNameError = ''
    let lastNameError = ''

    if (showFirstNameErrorMsg && showLastNameErrorMsg) {
      firstNameError = 'Required'
      lastNameError = 'Required'
    } else if (showFirstNameErrorMsg) {
      firstNameError = 'Required'
    } else if (showLastNameErrorMsg) {
      lastNameError = 'Required'
    }

    return (
      <div className="Registration-form-container">
        <h1 className="main-heading"> Registration </h1>
        <form className="form-container" onSubmit={this.submitForm}>
          {submitSuccessful ? (
            <div className="submit-success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="submitted-image"
              />
              <p className="submitted-text"> Submitted Successfully </p>
              <button
                type="button"
                className="submit-another-response-button"
                onClick={this.submitAnotherResponseFunction}
              >
                Submit another response
              </button>
            </div>
          ) : (
            <div className="form-items-container">
              <div className="form-item">
                <label className="input-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  className="input-box"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={this.onChangeFirstName}
                  onBlur={() =>
                    this.setState({showFirstNameErrorMsg: firstName === ''})
                  }
                />
                <p className="error-msg"> {firstNameError} </p>
              </div>
              <div className="form-item">
                <label className="input-label" htmlFor="lastName">
                  Last name
                </label>
                <input
                  className="input-box"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={this.onChangeLastName}
                  onBlur={() =>
                    this.setState({showLastNameErrorMsg: lastName === ''})
                  }
                />
                <p className="error-msg"> {lastNameError} </p>
              </div>
              <div className="button-container">
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
