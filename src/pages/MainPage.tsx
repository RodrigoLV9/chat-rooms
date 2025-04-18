import React from 'react'
import { Hero } from '../components/Main/Hero'
import { Rooms } from '../components/Main/Rooms'

export const MainPage:React.FC = () => {
  return (
    <div>
      <Hero/>
      <Rooms/>
    </div>
  )
}
