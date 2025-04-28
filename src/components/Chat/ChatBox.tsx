import React from 'react'
import { IoSend as IconSend } from "react-icons/io5";
import {Message} from './Message.tsx'
export const ChatBox:React.FC = () => {
  return (
    <div className='chatBox'>
        <h2>Chat Argentina</h2>
        <div className="chatBox__display">
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
        </div>
        <div className="chatBox__containerInput">
            <input type="text" placeholder='Type your message here...' />
            <button>
                <IconSend/>
            </button>
        </div>
    </div>
  )
}
