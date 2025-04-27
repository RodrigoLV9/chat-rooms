import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaRegEyeSlash as IconEyeDisabled } from "react-icons/fa";
import { FaRegEye as IconEyeEnabled } from "react-icons/fa";
import { FcGoogle as IconGoogle } from "react-icons/fc";
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, getAuth,setPersistence, browserLocalPersistence} from 'firebase/auth'
import {app} from '../assets/firebase.ts'
import { useUser } from '../Contexts/UserContext.js';
export const Login:React.FC = () => {
  const {setUser}=useUser()
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const auth=getAuth(app)
  const [isEyeEnabled, setEyeEnabled]=useState<boolean | undefined>(false)
  const handleLogin=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      await setPersistence(auth,browserLocalPersistence)
      const userCredential= await signInWithEmailAndPassword(auth,email,password)
      const user=userCredential.user
      await setUser({
        id:user.uid,
        username:user.displayName,
        email:user.email
      })
    }catch(error){
      console.log(error)
    }
  }
  const handleLoginGoogle=async()=>{
    try{
      await setPersistence(auth,browserLocalPersistence)
      const provider=new GoogleAuthProvider()
      const userCredential=await signInWithPopup(auth,provider)
      const user=userCredential.user
      await setUser({
        id:user.uid,
        username:user.displayName,
        email:user.email
      })
    }catch(error){
      console.log('Error in login with Google: ',error)
    }
  }
  const handleEyeClick=()=>{
    setEyeEnabled(!isEyeEnabled)
  }
  return (
    <main className='pageRegister'>
      <h1>Log In</h1>
      <div className='pageRegister__text'>
        <p>Don't have an account?</p>
        <Link to="/register">Sign Up</Link>
      </div>
      <form action="" className='pageRegister__form' onSubmit={handleLogin}>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Username or Mail*</label>
          <input type="text" placeholder='Write your username' className='containerInput__input' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Password*</label>
          <div className="containerInput-input">
            <input type={isEyeEnabled ? "text" :"password"} placeholder='Write your password' className='containerInput__input' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            {
              isEyeEnabled ? <IconEyeEnabled className='containerInput__icons' onClick={handleEyeClick}/> : <IconEyeDisabled className='containerInput__icons' onClick={handleEyeClick}/>
            }
          </div>
        </div>
        <div className="form__buttons">
          <button className='form__buttons-main'>Log In</button>
          <p>or</p>
          <button className='form__buttons-google' onClick={handleLoginGoogle}>
            <IconGoogle className='form__buttons-google-icon'/>
            <p>Log In with Google</p>
          </button>
        </div>
      </form>
    </main>
  )
}
