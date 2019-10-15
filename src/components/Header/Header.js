import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <nav className='logged-in-controls'>
        <span className='header-user-name'>
          {this.context.user.name}
        </span>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'
            className='header-link logout'>
            Logout
          </Link>
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <nav className='login-controls'  role='navigation'>
        <Link to='/login' className="header-link login">Login</Link>
        {' '}
        <Link to='/register' className="header-link register">Sign up</Link>
      </nav>
    )
  }

  render() {
    return (
      <header className='app-header' role='banner'>
        <h1 className='header-h1'>
          <Link to='/' className="header-logo">
            Spaced repetition
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header
