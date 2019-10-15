import React, { Component } from 'react'
import { Input, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import UserContext from '../../contexts/UserContext'
import Button from '../Button/Button'
import './LoginForm.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  }

  static contextType = UserContext

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { username, password } = ev.target

    this.setState({ error: null })

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.context.processLogin(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form 
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='alert'>{error}</p>}
        </div>
        <div className='form-section'>
          
          <Input
          className='input'
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            required
          />
          <Label className='label-name' htmlFor='login-username-input'>
          <span className='content-name' >Username</span>
        </Label>

        </div >
        <div className='form-section'>
          
          <Input
          className='input'
            id='login-password-input'
            name='password'
            type='password'
            required
          />
          <Label className='label-name' htmlFor='login-password-input'>
            <span className='content-name' >Password</span>
          </Label>
        </div>
        <div className='form-btn' >
        <Button
        className='LoginForm__btn' type='submit'>
          Login
        </Button>
        </div>
        
      </form>
    )
  }
}

export default LoginForm
