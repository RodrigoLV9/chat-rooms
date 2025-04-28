import React from 'react'
import { UserCard } from './UserCard'

export const ChatMessages:React.FC = () => {
  return (
    <div className='chatMessages'>
        <h3 className="chatMessages__title">Chats</h3>
        <ul className="chatMessages__list">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/> 
        </ul>
    
    </div>
  )
}
