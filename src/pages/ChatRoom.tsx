import React from 'react'
import { ChatMessages } from '../components/Chat/ChatMessages'
import { ChatBox } from '../components/Chat/ChatBox'
import { ChatUsers } from '../components/Chat/ChatUsers'
import '../styles/ChatRoom.css'
export const ChatRoom:React.FC = () => {
  return (
    <main className='chatRoom'>
      <ChatMessages/>
      <ChatBox/>
      <ChatUsers/>
    </main>
  )
}
