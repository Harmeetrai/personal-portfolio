import React from 'react'

import { images } from '../../constants'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['Home', 'About', 'Skills', 'Work', 'Contact'].map((item, index) => (
          <li key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navbar