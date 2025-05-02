import React from 'react'
interface MessageProps{
  user:string | undefined,
  text:string | undefined
}
export const Message:React.FC<MessageProps> = ({user,text}) => {
  return (
    <div className="message">
        <p className='message__user'>{user}</p>
        <p className='message__text'>{text}</p>
    </div>
  )
}
