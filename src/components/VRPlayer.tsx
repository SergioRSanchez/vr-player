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
  toogleTheatherMode: boolean
}


export function VRPLayer(props: VRPlayer) {
  const [ playVideo, setPlayVideo ] = useState(false)

  const videoRef = useRef(null)
  function handleTooglePlay () {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlayVideo(true)
    } else {
      videoRef.current.pause()
      setPlayVideo(false)
    }
  }

  return (
    <div className='flex gap-4 items-center'>
      <button className='absolute top-4 right-4 transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-100' onClick={props.toogleTheatherMode}>
        {
          props.theather
          ?
          <LightbulbOff width={20} height={20} color='white' />
          :
          <Lightbulb width={20} height={20} color='white' />
        }
      </button>
      <div className='flex flex-col h-min gap-3 p-3 bg-white rounded-full bg-opacity-10' style={{boxShadow: '0px 8px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset', backdropFilter: 'blur(16px)'}}>
        <button onClick={handleTooglePlay} className={playVideo ? 'p-2 rounded-full bg-white bg-opacity-20 transition-all duration-300' : 'p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'}>{playVideo ? <Image src={play} alt='play' /> : <PauseCircle width={24} height={24} color='white'/>}</button>
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={accessibility} alt='accessibility' /></button>
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={albums} alt='albums' /></button>
        <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={search} alt='search' /></button>
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <div className='p-2 bg-white rounded-full flex gap-8 bg-opacity-10 w-[792px]' style={{boxShadow: '0px 8px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset;', backdropFilter: 'blur(16px)'}}>
          <div className='flex gap-4'>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={sidebar} alt='sidebar' /></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={chevronBack} alt='back' /></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={chevronForward} alt='forward' /></button>
          </div>

          <form action="" className='flex items-center justify-between w-[440px] px-3 bg-black bg-opacity-10 rounded-full' style={{boxShadow: '0px -1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.20) inset;'}}>
            <Image src={text} alt='Aa' />
            <div className='flex gap-1 leading-none text-sm text-white text-opacity-80'>
              <Image src={lockClosed} alt='cadeado fechado' />
              <p>rocketseat.com</p>
            </div>
            <Image src={refresh} alt='refresh' />
          </form>

          <div className='flex gap-4 '>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={share} alt='share' /></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={add} alt='add' /></button>
            <button className='p-2 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300'><Image src={copy} alt='copy' /></button>
          </div>
        </div>

        <div style={{boxShadow: '0 8px 4px 0 rgba(0,0,0,0.5)'}} className='rounded-3xl'>
          <video className='max-w-[960px] rounded-3xl border-gray-400 aspect-video' ref={videoRef}>
            <source src='https://s3-figma-videos-production-sig.figma.com/video/809392342680586849/TEAM/1706/1338/-9793-41dd-895b-abd6b1a01ef3?Expires=1688947200&Signature=L4~FKvbkgPjIHxOJTchwmhf8DrErSvqDNg64h3w5FnShMftJbLZwpns5L5FkOeEfHfswwTBl7JOr2x42Vsm9WI7c6OTcGJlClFjXlZkJG~WHAF8QEuta~dM9Xs98hvToZRjTSv-ojva0mkwggyBHKXib1hcyXJTNmEHTwBC51FRajUOz4o3ywkPZWLfAB0KowP70YaDCT8BAK1Y0k0RxbIGEQzmVWyy0WFmO8m5htxoyK9Hm4jIGMTFDk1LWfox2BCNI-K4csoWMQlIMtQhVLI987xl4M8bJIdj8RDCdUipfJ-Hx5F1jkbt28oetQeivwrzPo85o83zMmlUrYghaNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
            Seu navegador não suporta a reprodução de vídeo
          </video>
        </div>
      </div>
    </div>
  )
}