'use client'

import Image from 'next/image'
import { useState } from 'react'

import { VRPLayer } from '@/components/VRPlayer' 

import background from '@/assets/background.jpg'


interface BackGroundProps {
  theather: boolean
}

interface VRPlayer {
  theather: boolean,
  toogleTheatherMode: boolean
}

const Background: React.FC<BackGroundProps> = (props) => {
  return (
    <Image 
      data-theather={props.theather}
      alt='picture of a living room'
      src={background}
      quality={100}
      fill
      sizes='100vh'
      style={{objectFit: 'cover', zIndex: '-20', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
      className={props.theather ? 'brightness-50 transition-all duration-300' : 'transition-all duration-300'}
    />
  )
}

export default function Home() {
  
  const [ theatherMode, setTheatherMode ] = useState(true)

  function toogleTheatherMode() {
    setTheatherMode(!theatherMode)
  }

  return (
    <main className='h-screen flex items-center justify-center'>
      <Background theather={theatherMode}/>
      <VRPLayer toogleTheatherMode={toogleTheatherMode} theather={theatherMode}/>
    </main>
  )
}
