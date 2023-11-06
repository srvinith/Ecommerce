import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import './Nav.css';
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <input type="text" placeholder='Search Product Here..' className='search-input' />
        </div>
        <div className="profile-container">
          <Link href="" className='nav-icons'><FiHeart /></Link>
          <Link href="" className='nav-icons'><AiOutlineShoppingCart /></Link>
          <Link href="" className='nav-icons'><AiOutlineUserAdd /></Link>
        </div>

      </nav>
    </>
  )
}

export default Nav