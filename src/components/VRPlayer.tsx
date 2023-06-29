'use client' 

import Image from 'next/image'
import { useRef, useState } from 'react'

import { Lightbulb, LightbulbOff, PauseCircle } from 'lucide-react'

import play from '@/assets/play.svg'
import accessibility from '@/assets/accessibility.svg'
import albums from '@/assets/albums.svg'
import search from '@/assets/search.svg'
import sidebar from '@/assets/sidebar.svg'
import chevronBack from '@/assets/chevron-back.svg'
import chevronForward from '@/assets/chevron-forward.svg'
import text from '@/assets/text.svg'
import lockClosed from '@/assets/lock-closed.svg'
import refresh from '@/assets/refresh.svg'
import share from '@/assets/share.svg'
import add from '@/assets/add.svg'
import copy from '@/assets/copy.svg'

interface VRPlayer {
  theather: boolean,
  toogleTheatherMode: () => void
}


export function VRPLayer(props: VRPlayer) {
  const [ playVideo, setPlayVideo ] = useState(false)

  const videoRefOne = useRef<HTMLVideoElement>(null)
  const videoRefTwo = useRef<HTMLVideoElement>(null)
  function handleTooglePlay () {
    if (videoRefOne.current && videoRefOne.current.paused) {
      videoRefOne.current.play()
      videoRefTwo.current?.play()
      setPlayVideo(true)
    } else {
      videoRefOne.current?.pause()
      videoRefTwo.current?.pause()
      setPlayVideo(false)
    }
  }

  return (
    <div className='flex gap-4 items-center' id='app'>
      <button className='absolute top-4 right-4 transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100' onClick={props.toogleTheatherMode}>
        {
          props.theather
          ?
          <LightbulbOff width={20} height={20} color='white' />
          :
          <Lightbulb width={20} height={20} color='white' />
        }
      </button>
      <div className='flex flex-col h-fit gap-3 p-3 bg-white rounded-full bg-opacity-10' style={{boxShadow: '0px 8px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset', backdropFilter: 'blur(16px)'}}>
        <button onClick={handleTooglePlay} className={playVideo ? 'p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200' : 'p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'}>{playVideo ? <PauseCircle width={24} height={24} color='white' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/> : <Image src={play} alt='play' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/>}</button>
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={accessibility} alt='accessibility' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={albums} alt='albums' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={search} alt='search' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <div className='p-2 bg-white rounded-full flex gap-8 bg-opacity-10 w-[792px]' style={{boxShadow: '0px 8px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset;', backdropFilter: 'blur(16px)'}}>
          <div className='flex gap-4'>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={sidebar} alt='sidebar' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={chevronBack} alt='back' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={chevronForward} alt='forward' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
          </div>

          <form className='flex items-center justify-between w-[440px] px-3 bg-black bg-opacity-10 rounded-full' style={{boxShadow: '0px -1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.20) inset;'}}>
            <Image src={text} alt='Aa' />
            <div className='flex gap-1 leading-none text-sm text-white text-opacity-80'>
              <Image src={lockClosed} alt='cadeado fechado' />
              <p>rocketseat.com</p>
            </div>
            <Image src={refresh} alt='refresh' />
          </form>

          <div className='flex gap-4 '>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={share} alt='share' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={add} alt='add' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-200'><Image src={copy} alt='copy' className='opacity-70 trasnform-all duration-200 hover:opacity-100'/></button>
          </div>
        </div>

        <div style={{boxShadow: '0 8px 4px 0 rgba(0,0,0,0.5)'}} className='rounded-3xl relative'>
          <video className='max-w-[960px] rounded-3xl border-gray-400 aspect-video' ref={videoRefOne}>
            <source src='./fluid.mp4' type='video/mp4'/>
            Seu navegador não suporta a reprodução de vídeo
          </video>
          <video className='max-w-[960px] rounded-3xl border-gray-400 aspect-video absolute inset-0 scale-125 -z-10 opacity-50' style={{filter: 'blur(100px)'}} ref={videoRefTwo}>
          <source src='./fluid.mp4' type='video/mp4'/>
            Seu navegador não suporta a reprodução de vídeo
          </video>
        </div>
      </div>
    </div>
  )
}