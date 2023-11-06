import React from 'react'
import Category from './Sidebar/Category/Category'
import Colors from './Sidebar/Colors/Colors'
import Price from './Sidebar/Price/Price'

import './Sidebar.css'
const Sidebar = () => {
  return (
    <>
    <section className='sidebar'>
      <div className="logo-container">
        <h1>Logo</h1>
      </div>
      <Category/>
      <Colors />
      <Price />
    </section>
    </>
  )
}

export default Sidebar