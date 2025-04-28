import React from 'react'
import { UserCard } from './UserCard';

export const ChatUsers:React.FC = () => {
  return (
    <section className='chatUsers'>
        <div className="chatUsers__title">
          <h3>Users</h3>
          <p>77 online</p>
        </div>
        <ul className="chatUsers__list">
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </ul>
    </section>
  )
}
