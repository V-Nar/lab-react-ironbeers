import React from 'react'
import { Link } from 'react-router-dom'
import header from '../assets/headerHome.png'

const Header = () => {
  return (
    <div><Link to="/"><img src={header} alt='header' /></Link></div>
  )
}

export default Header