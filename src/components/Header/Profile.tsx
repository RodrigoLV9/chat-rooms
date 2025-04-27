import React from 'react'
import { FaRegUser as IconUser } from "react-icons/fa";
import { useUser } from '../../Contexts/UserContext';
import { getAuth, signOut } from 'firebase/auth';
export const Profile:React.FC = () => {
  const {user}=useUser()
  const handleLogout=async()=>{
    const auth=getAuth()
    try{
      await signOut(auth)
      console.log("User signed out")
    }catch(error){
      console.log('Error signing out: ',error)
    }
  }
  return (
    <div className='profile'>
        <button className='profile__logout' onClick={handleLogout}>Log out</button>
        <button className="profile__user">
          <IconUser/>
          <p>{user?.username}</p>
        </button>
    </div>
  )
}
