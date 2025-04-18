import React from 'react'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Main/Hero'
import { Rooms } from '../components/Main/Rooms'

export const Main:React.FC = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Rooms/>
    </div>
  )
}
