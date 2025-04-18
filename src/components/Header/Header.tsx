import React from 'react'
import { Controls } from './Controls'
import { Buttons } from './Buttons'
import { IoIosChatboxes as IconChat } from "react-icons/io";
import {Link} from 'react-router-dom'
import '../../styles/Header.css'
export const Header:React.FC = () => {
  return (
    <header className='header'>
        <Link to='/' className='header__title link'>
            <IconChat className='header__title-logo'/>
            <h1>Chat Rooms</h1>
        </Link>
        <section className='header__side'>
          <Controls/>
          <Buttons/>
        </section>
    </header>
  )
}
