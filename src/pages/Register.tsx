import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { FaRegEyeSlash as IconEyeDisabled } from "react-icons/fa";
import { FaRegEye as IconEyeEnabled } from "react-icons/fa";
import { FcGoogle as IconGoogle } from "react-icons/fc";
import {signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword, updateProfile, getAuth} from 'firebase/auth'
import { getFirestore,doc,setDoc } from 'firebase/firestore';
import {app} from '../assets/firebase.js'
import '../styles/Session.css'
export const Register:React.FC = () => {
  const [email, setEmail]=useState<string>("")
  const [password, setPassword]=useState<string>("")
  const [username,setUsername]=useState<string>("")
  const auth=getAuth(app)
  /* const db=getFirestore(app) */
 const handleRegister=async()=>{
  try{
    const userCredential=await createUserWithEmailAndPassword(auth,email,password)
    const user=userCredential.user
    /* await setDoc(doc(db,"users",user.uid).{
      username:username,
      email:email,
      createAt: new Date()
    }) */
   await updateProfile(user,{displayName:username})
  }catch(error){
    console.log(error)
  }
  console.log('Registering user...'+email+password)
 }
  const [isEyeEnabled, setEyeEnabled]=useState<boolean | undefined>(false)
  const handleEyeClick=()=>{
    setEyeEnabled(!isEyeEnabled)
  }
  const handleRegisterGoogle=async()=>{
    try{
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth,provider)
      console.log("Logged with Google")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <main className='pageRegister'>
      <h1>Sign Up</h1>
      <div className='pageRegister__text'>
        <p>Already have an account?</p>
        <Link to="/login">Log In</Link>
      </div>
      <form action="" className='pageRegister__form' onSubmit={(e)=>e.preventDefault()}>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Username*</label>
          <input type="text" placeholder='Write your username' className='containerInput__input' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Mail*</label>
          <input type="email" placeholder='Write your mail' className='containerInput__input'
            value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Password*</label>
          <div className="containerInput-input">
            <input type={isEyeEnabled ? "text" :"password"} placeholder='Write your password' className='containerInput__input' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {
              isEyeEnabled ? <IconEyeEnabled className='containerInput__icons' onClick={handleEyeClick}/> : <IconEyeDisabled className='containerInput__icons' onClick={handleEyeClick}/>
            }
          </div>
        </div>
        <div className="containerInput">
          <label htmlFor="" className='containerInput__label'>Repeat password*</label>
          <div className="containerInput-input">
            <input type={isEyeEnabled ? "text" :"password"} placeholder='Write your password again' className='containerInput__input'/>
            {
              isEyeEnabled ? <IconEyeEnabled className='containerInput__icons' onClick={handleEyeClick}/> : <IconEyeDisabled className='containerInput__icons' onClick={handleEyeClick}/>
            }
          </div>
        </div>
        <div className="form__buttons">
          <button className='form__buttons-main' onClick={()=>handleRegister()}>Sign Up</button>
          <p>or</p>
          <button className='form__buttons-google' onClick={()=>handleRegisterGoogle()}>
            <IconGoogle className='form__buttons-google-icon'/>
            <p>Sign Up with Google</p>
          </button>
        </div>
      </form>
    </main>
  )
}
