import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <a href="#home" className="logo-text">
            Leena<span className="logo-drop"></span>
          </a>
          <p>I am a frontend developer from France with 5 years of experience.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
         © 2026 <span className='footer-name'>Leena</span>. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <a href="#contact">Connect with me</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
