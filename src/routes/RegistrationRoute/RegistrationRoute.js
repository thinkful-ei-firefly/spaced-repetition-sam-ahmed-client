import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationRoute__body'>
        <h3 className='RegistrationRoute__h3'>
          Practice learning a language with the spaced reptition revision technique.
        </h3>
        <img className='RegistrationRoute__image' alt='language_pic' src = {'https://media.socastsrm.com/wordpress/wp-content/blogs.dir/671/files/2018/07/beeplugin_languages.png'} ></img>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
