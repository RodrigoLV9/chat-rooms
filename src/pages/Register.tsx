import React from 'react'
import {Link} from 'react-router-dom'
import { FaRegEyeSlash as IconEyeDisabled } from "react-icons/fa";
import { FaRegEye as IconEyeEnabled } from "react-icons/fa";
import { FcGoogle as IconGoogle } from "react-icons/fc";
import '../styles/Session.css'
export const Register:React.FC = () => {
  return (
    <main className='pageRegister'>
      <h1>Sign Up</h1>
      <div className='pageRegister__text'>
        <p>Already have an account?</p>
        <Link to="/login">Log In</Link>
      </div>
      <form action="" className='pageRegister__form'>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Username*</label>
          <input type="text" placeholder='Write your username' className='containerInput__input'/>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Mail*</label>
          <input type="text" placeholder='Write your mail' className='containerInput__input'/>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Password*</label>
          <div className="containerInput-input">
            <input type="text" placeholder='Write your password' className='containerInput__input'/>
            <IconEyeDisabled className='containerInput__icons'/>
          </div>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Repeat password*</label>
          <div className="containerInput-input">
            <input type="text" placeholder='Write your password' className='containerInput__input'/>
            <IconEyeEnabled className='containerInput__icons'/>
          </div>
        </div>
        <div className="form__buttons">
          <button className='form__buttons-main'>Sign Up</button>
          <p>or</p>
          <button className='form__buttons-google'>
            <IconGoogle className='form__buttons-google-icon'/>
            <p>Sign Up with Google</p>
          </button>
        </div>
      </form>
    </main>
  )
}
