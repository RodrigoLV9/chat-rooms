import React from 'react'
import { TfiWorld as IconWorld } from "react-icons/tfi";
import { GoArrowRight as IconArrow } from "react-icons/go";
export const RoomCard:React.FC = () => {
  return (
    <div className='roomCard'>
        <div className="roomCard__main">
            <div className="roomCard__title">
                <IconWorld/>
                <p>Argentina</p>
            </div>
            <p>320 online</p>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, unde aperiam minus.</p>
        <button className='roomCard__button'>
            <IconArrow/>
            <p>Join</p>
        </button>
    </div>
  )
}
