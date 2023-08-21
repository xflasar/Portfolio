import React from 'react'
import '../../assets/components/Header/Header.scss'

const Header = () => {
  return (
    <div className='navbar'>
      <h1>Header</h1>
      <div className='hamburger'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
      <div className='links'>
        <ul>
          <a href='#Home'><li>Home</li></a>
          <a href='#About'><li>About</li></a>
          <a href='#Skills'><li>Skills</li></a>
          <a href='#Projects'><li>Projects</li></a>
          <a href='#Contact'><li>Contact</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Header
