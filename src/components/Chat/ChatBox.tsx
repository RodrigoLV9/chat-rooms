import React from 'react'
import { IoSend as IconSend } from "react-icons/io5";
import {Message} from './Message.tsx'
export const ChatBox:React.FC = () => {
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
