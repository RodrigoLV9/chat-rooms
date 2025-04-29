import React,{useEffect} from 'react'
import { IoSend as IconSend } from "react-icons/io5";
import {Message} from './Message.tsx'
import {io} from 'socket.io-client'
export const ChatBox:React.FC = () => {
  const socket=io('http://localhost:3000')
  useEffect(()=>{
    socket.on('connect',()=>{
      console.log('Connected to server')
    })
    socket.on('disconnect',()=>{
      console.log('Disconnected from server')
    })
  })
  return (
    <section className='chatBox'>
        <h2 className='chatBox__title'>Chat Argentina</h2>
        <div className="chatBox__display">
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
        </div>
        <form className="chatBox__form">
            <input type="text" placeholder='Type your message here...' />
            <button>
                <IconSend/>
            </button>
        </form>
    </section>
  )
}
