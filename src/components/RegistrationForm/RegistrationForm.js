import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
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
      <form className='form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert' className='alert' >
          {error && <p>{error}</p>}
        </div>
        {/* 
        
        */}
        <div className='form-section'>
          
          <Input
          className='input'
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            autoComplete='off'
            required
          />
          <Label 
          className='label-name'
          htmlFor='registration-name-input'>
          <span className='content-name' >
          Enter your name
          </span>
            <Required className='required' />
          </Label>
        </div>
        <div className='form-section'>
          
          <Input
          className='input'
            id='registration-username-input'
            name='username'
            autoComplete='off'
            required
          />
          <Label 
          className='label-name'
          htmlFor='registration-username-input'>
          <span className='content-name' >Choose a username</span>  
          <Required className='required' />
          </Label>
        </div>


        
        <div className='form-section'>
        <Input
        className='input'
            id='registration-password-input'
            name='password'
            type='password'
            autoComplete='off'
            required
          />
          <Label className='label-name' htmlFor='registration-password-input'>
          <span className='content-name'>Choose a password</span>
            <Required className='required' />
          </Label>
          
          
        </div>
        <div className='form-btn' >
        <Button className='RegistrationForm__btn' type='submit'>
          Sign up
        </Button>
        </div>
        
        <footer className='RegistrationForm__footer'>
          <Link  to='/login'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
