import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegEyeSlash as IconEyeDisabled } from "react-icons/fa";
import { FaRegEye as IconEyeEnabled } from "react-icons/fa";
import { FcGoogle as IconGoogle } from "react-icons/fc";
export const Login:React.FC = () => {
  return (
    <main className='pageRegister'>
      <h1>Log In</h1>
      <div className='pageRegister__text'>
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
      </div>
      <form action="" className='pageRegister__form'>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Username or Mail*</label>
          <input type="text" placeholder='Write your username' className='containerInput__input'/>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Password*</label>
          <div className="containerInput-input">
            <input type="text" placeholder='Write your password' className='containerInput__input'/>
            <IconEyeDisabled className='containerInput__icons'/>
          </div>
        </div>
        <div className="form__buttons">
          <button className='form__buttons-main'>Log In</button>
          <p>or</p>
          <button className='form__buttons-google'>
            <IconGoogle className='form__buttons-google-icon'/>
            <p>Log In with Google</p>
          </button>
        </div>
      </form>
    </main>
  )
}
