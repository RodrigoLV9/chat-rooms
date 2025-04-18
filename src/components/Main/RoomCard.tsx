import React from 'react'
import { TfiWorld as IconWorld } from "react-icons/tfi";
import { GoArrowRight as IconArrow } from "react-icons/go";
import {Link} from 'react-router-dom'
export const RoomCard:React.FC = () => {
  return (
    <div className='roomCard'>
        <div className="roomCard__main">
            <div className="roomCard__main-title">
                <IconWorld className='roomCard-icon'/>
                <p>Argentina</p>
            </div>
            <p>320 online</p>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, unde aperiam minus.</p>
        <Link to='/chat-room' className='roomCard__button link'>
            <p>Join</p>
            <IconArrow className='roomCard-icon'/>
        </Link>
    </div>
  )
}
