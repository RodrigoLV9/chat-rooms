import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'
export const Footer:React.FC = () => {
  return (
    <footer className='footer'>
        <p>© 2025 ChatRooms. All rights reserved.</p>
        <div className="footerBottom">
            <Link to='/terms-service'>Terms of service</Link>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/contact-us'>Contact us</Link>
        </div>
    </footer>
  )
}
