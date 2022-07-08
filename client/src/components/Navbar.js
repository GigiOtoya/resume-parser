import React from 'react'
import './Styles.css';
import logo from './resume-png-clipart.png'

const Navbar = () => {
  return (
    <nav>
        <div className='homeIcon'>
          <div className='image'>
            <img src={require('./resume-png-clipart.png')} height='50'/>
          </div>
          <div className='title'>
            <h1>Resume Parser</h1>
          </div>
        </div>
        <ul>
            <li></li>
            <li>About</li>
            <li>Resources</li>
            <li>Get Started</li>
        </ul>
    </nav>
  )
}

export default Navbar