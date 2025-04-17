import React from 'react'
import { Controls } from './Controls'
import { Buttons } from './Buttons'
import { IoIosChatboxes as IconChat } from "react-icons/io";
export const Header:React.FC = () => {
  return (
    <header>
        <section className='header__title'>
            <IconChat/>
            <h1>Chat Rooms</h1>
        </section>
        <section className='header__side'>
          <Controls/>
          <Buttons/>
        </section>
    </header>
  )
}
