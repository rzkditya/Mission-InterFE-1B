import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'


import webLogo from '@/assets/images/Logo.svg'
import mobLogo from '@/assets/images/FavIcon.svg'
import ProfileIcon from '@/assets/images/Profile.svg'

const Navbar = () => {
  return (
    <header className='flex justify-between items-center md:py-4 md:px-10 p-4 bg-page-header text-light-primary'>
        <div name="header-container" className='flex items-center'>
            <div name="header-nav" className='flex items-center gap-4 md:gap-14 lg:gap-18'>
                <Link to="/Home" className='hidden md:flex'><img className='h-8 lg:h-12' src={webLogo} alt="Logo Chill"/></Link>
                <Link to="/Home" className='flex md:hidden'><img className='h-4' src={mobLogo} alt="Logo Chill Mobile"/></Link>
                <nav>
                    <ul name='Nav Links' className='flex text-xs md:text-lg lg:text-2xl gap-4 md:gap-14 lg:gap-18'>
                        <li className='hover:text-primary-default'><Link to="/series">Series</Link></li>
                        <li className='hover:text-primary-default'><Link to="/films">Film</Link></li>
                        <li className='hover:text-primary-default'><Link to="/daftar-saya">Daftar Saya</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div name="header-profile" className='flex items-center text-xs md:text-xl lg:text-2xl'>
            <div name="profile-dropdown" className='flex items-center gap-2 md:gap-4'>
                <img className='w-5 md:w-10 lg:w-14' src={ProfileIcon} alt="Profile Icon"/>
                <p className='font-medium'>R Aditya</p>
                <div className='group'>
                    <FontAwesomeIcon icon="fa-solid fa-angle-down"/>
                    <section className='invisible group-hover:visible delay-200 absolute w-35 md:w-55 lg:w-75 top-10 md:top-15 lg:top-20 right-4 md:right-10 bg-page-header rounded-sm p-4 md:p-6 lg:p-8 outline-1 outline-light-secondary/10 z-11'>
                        <ul className='flex flex-col gap-4 md:gap-8 text-left'>
                            <li className='hover:text-primary-default'><a href="#Profil"><FontAwesomeIcon icon="fa-solid fa-user" className='mr-2'/>Profil Saya</a></li>
                            <li className='hover:text-primary-default'><a href="#Premium"><FontAwesomeIcon icon="fa-solid fa-star" className='mr-2'/>Ubah Premium</a></li>
                            <li className='hover:text-primary-default'><Link to="/login"><FontAwesomeIcon icon="fa-solid fa-right-from-bracket" className='mr-2'/>Keluar</Link></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar