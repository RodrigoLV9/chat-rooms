import React from 'react'
import {Link} from 'react-router-dom'
export const Buttons:React.FC = () => {
  return (
    <div className='buttons'>
      <Link to='/login'>
        <button className='buttons__login'>Log In</button>
      </Link>
      <Link to='/register'>
        <button className='buttons__register'>Sign Up</button>
      </Link>
    </div>
  )
}
