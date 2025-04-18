import React from 'react'
import { GoArrowRight as IconArrow } from "react-icons/go";
import '../../styles/Hero.css'
import {Link} from 'react-router-dom'
export const Hero:React.FC = () => {
  return (
    <section className='hero'>
        <h1>Join Real-time chat rooms</h1>
        <p>Connect with people from around the world in our diverse community chat rooms.</p>
        <Link to='/chat-room' className='hero__button link'>
            <p>Join General Chat</p>
            <IconArrow className='hero__button-icon'/>
        </Link>
    </section>
  )
}
