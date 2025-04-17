import React from 'react'
import { Controls } from './Controls'
import { Buttons } from './Buttons'

export const Header = () => {
  return (
    <div>
        <div>
            <div>logo</div>
            <h1>Chat Rooms</h1>
        </div>
        <Controls/>
        <Buttons/>
    </div>
  )
}
