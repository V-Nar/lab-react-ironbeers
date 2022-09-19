import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import header from '../assets/headerHome.png'

const Products = () => {
  return (
    <div>
        <div>
            <Link to="/"><img src={header} alt='header' /></Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Products