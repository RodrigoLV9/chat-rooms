import React from 'react'
import { RoomCard } from './RoomCard'

export const Rooms:React.FC = () => {
  return (
    <section>
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
