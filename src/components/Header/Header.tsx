import React from 'react'
import { Controls } from './Controls'
import { Buttons } from './Buttons'
import { IoIosChatboxes as IconChat } from "react-icons/io";
import '../../styles/Header.css'
export const Header:React.FC = () => {
  return (
    <header className='header'>
        <section className='header__title'>
            <IconChat className='header__title-logo'/>
            <h1>Chat Rooms</h1>
        </section>
        <section className='header__side'>
          <Controls/>
          <Buttons/>
        </section>
    </header>
  )
}
