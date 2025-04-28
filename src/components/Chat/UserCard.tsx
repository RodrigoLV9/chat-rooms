import React from 'react'
import { FaUser as IconUser} from "react-icons/fa";
export const UserCard:React.FC = () => {
  return (
    <li className='userCard'>
        <IconUser className='userCard__icon'/>
        <p>Persona 1</p>
    </li>
  )
}
