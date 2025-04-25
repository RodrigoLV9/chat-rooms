import React from 'react'
import { Controls } from './Controls'
import { Buttons } from './Buttons'
import { IoIosChatboxes as IconChat } from "react-icons/io";
import {Link} from 'react-router-dom'
import '../../styles/Header.css'
import { Profile } from './Profile';
import { useUser } from '../../Contexts/UserContext';
export const Header:React.FC = () => {
  const {user}=useUser()
  return (
    <header className='header'>
        <Link to='/' className='header__title link'>
            <IconChat className='header__title-logo'/>
            <h1>Chat Rooms</h1>
        </Link>
        <section className='header__side'>
          <Controls/>
          {
            user==undefined ?
            <Buttons/>
            :
            <Profile/>
          }
        </section>
    </header>
  )
}
