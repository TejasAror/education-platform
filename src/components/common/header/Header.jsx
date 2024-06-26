import React, { useState } from "react"
// import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"


const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/' >Home</a>
            </li>
            <li>
              <a href='/courses' target="_blank">All Courses</a>
            </li>
            <li>
              <a href='/about' target="_blank">About</a>
            </li>
            <li>
              <a href='/team' target="_blank">Team</a>
            </li>
            <li>
              <a href='/pricing' target="_blank">Pricing</a>
            </li>
            <li>
              <a href='/journal' target="_blank">Journal</a>
            </li>
            <li>
              <a href='/contact' target="_blank">Contact</a>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}
export default Header









