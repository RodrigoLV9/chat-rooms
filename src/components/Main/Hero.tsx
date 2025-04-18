import React from 'react'
import { GoArrowRight as IconArrow } from "react-icons/go";
export const Hero:React.FC = () => {
  return (
    <section className='hero'>
        <h1>Join Real-time chat rooms</h1>
        <p>Connect with people from around the world in our diverse community chat rooms.</p>
        <button className='hero__button'>
            <p>Join General Chat</p>
            <IconArrow/>
        </button>
    </section>
  )
}
