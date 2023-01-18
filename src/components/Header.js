import React from 'react'
import './header.css'
import logo from '../assets/logostr3m.png'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <img src={logo} alt="Logo" className='header_logo'></img>
      </Link>
      <Link to="./user">
        <img src={user} alt="User" className='header_user'></img>
      </Link>
    </div>
  )
}

export default Header
