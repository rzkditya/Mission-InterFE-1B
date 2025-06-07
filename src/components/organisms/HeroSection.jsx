import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroBg from '../../assets/images/HeroBg.jpg'
import Button from '../atoms/Button'

const HeroSection = () => {
  return (
    <section className='relative w-full h-[30vh] md:h-[75vh] flex items-end justify-start'>
        {/* Background Image */}
        <div className='absolute inset-0 bg-cover bg-center z-0' style={{ backgroundImage: `url(${HeroBg})` }}/>

        {/* Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-page-header to-transparentn z-10"/>
        
        <div className='relative md:bottom-10 z-10 px-4 md:px-10 py-6 text-light-primary flex flex-col gap-3 md:gap-6'>
            <div className='flex flex-col w-full md:w-3/5 gap-2 md:gap-4'>
                <h2 className='text-3xl md:text-5xl font-medium overflow-hidden text-ellipsis line-clamp-2'>Ant-Man and The Wasp Quantumania</h2>
                <p className='overflow-hidden md:text-xl lg:text-2xl text-ellipsis line-clamp-2'>Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope's parents and Scott's daughter Cassie. Together they must find a way to escape, but what secrets is Hope's mother hiding? And who is the mysterious Kang?</p>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className='flex gap-2 text-xs md:text-lg lg:text-2xl'>
                    <Button variant='primary-300' className='px-2 md:px-3'>Enter</Button>
                    <Button variant='body' className='px-2 md:px-3'><FontAwesomeIcon icon="fa-solid fa-circle-info"/>Selengkapnya</Button>
                    <div className='p-1 md:px-2 rounded-full outline-1 outline-light-secondary'>18+</div>
                </div>
                <Button variant='clean-white' className='p-1 md:p-2'>
                    <FontAwesomeIcon icon="fa-solid fa-volume-xmark" className='text-xs md:text-xl text-light-disabled'/>
                </Button>
            </div>
        </div>
    </section>
    )
}

export default HeroSection