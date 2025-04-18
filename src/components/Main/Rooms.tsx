import React from 'react'
import { RoomCard } from './RoomCard'
import '../../styles/Rooms.css'
export const Rooms:React.FC = () => {
  return (
    <section className='rooms'>
        <h2>Chats Rooms</h2>
        <div className="containerRooms">
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
            <RoomCard/>
        </div>
    </section>
  )
}
