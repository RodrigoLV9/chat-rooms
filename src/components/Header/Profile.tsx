import React from 'react'
import { FaRegUser as IconUser } from "react-icons/fa";
import { useUser } from '../../Contexts/UserContext';
export const Profile:React.FC = () => {
  const {user}=useUser()
  return (
    <div className='profile'>
        <button className='profile__logout'>Log out</button>
        <button className="profile__user">
          <IconUser/>
          <p>{user?.username}</p>
        </button>
    </div>
  )
}
