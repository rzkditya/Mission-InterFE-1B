import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import webLogo from '@/assets/images/Logo.svg'


const Footer = () => {
  return (
    <>
        <footer className='bg-page-header text-light-secondary text-xs md:text-lg lg:text-xl outline-1 outline-light-secondary/20'>
            <div className='hidden md:flex justify-between items-center py-8 px-10 gap-3'>
                <div class="footer-logo" className='flex flex-col items-baseline gap-3'>
                    <img className='h-6 md:h-8 lg:h-10' src={webLogo} alt="Logo Chill"/>
                    <p>&copy; 2023 Chill. All rights reserved.</p>
                </div>
                <div class="movies-categories" className='flex flex-col gap-2'>
                    <h3 className='font-bold text-sm md:text-xl lg:text-2xl'>Genre</h3>
                    <ul class="categories-content" className='grid grid-flow-col grid-rows-4 gap-x-5 gap-y-2'>
                        <li ><a href="#Aksi">Aksi</a></li>
                        <li><a href="#Anak-anak">Anak-anak</a></li>
                        <li><a href="#Anime">Anime</a></li>
                        <li><a href="#Britania">Britania</a></li>
                        <li><a href="#Drama">Drama</a></li>  
                        <li><a href="#Fantasi">Fantasi Ilmiah & Fantasi</a></li>
                        <li><a href="#Kejahatan">Kejahatan</a></li>
                        <li><a href="#Kdrama">K Drama</a></li>
                        <li><a href="#Komedi">Komedi</a></li>
                        <li><a href="#Petualangan">Petualangan</a></li>
                        <li><a href="#Perang">Perang</a></li>
                        <li><a href="#Romantis">Romantis</a></li>
                        <li><a href="#SainsNAlam">Sains & Alam</a></li>
                        <li><a href="#Thriller">Thriller</a></li>
                    </ul>
                    <div className='hidden'>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right"/>
                    </div>                
                </div>
                <div class="bantuan" className='flex flex-col gap-2'>
                    <h3 className='font-bold text-sm md:text-xl lg:text-2xl'>Bantuan</h3>
                    <ul class="bantuan-content" className='grid grid-cols-1 gap-y-2'>
                        <li><a href="#FAQ"></a>FAQ</li>
                        <li><a href="#Kontak-Kami"></a>Kontak Kami</li>
                        <li><a href="#Privasi"></a>Privasi</li>
                        <li><a href="#SNK"></a>Syarat & Kententuan</li>
                    </ul>
                    <div className='hidden'>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right"/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:hidden justify-between items-start py-4 px-4 gap-2'>
                <div class="footer-logo" className='flex flex-col items-start gap-3 mb-6'>
                    <img className='h-6' src={webLogo} alt="Logo Chill"/>
                    <p>&copy; 2023 Chill. All rights reserved.</p>
                </div>
                <div class="movies-categories" className='flex justify-between items-center w-full gap-2 text-base'>
                    <h3 className='font-medium'>Genre</h3>
                    <div className='flex'>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right"/>
                    </div>                
                </div>
                <div class="bantuan" className='flex justify-between items-center w-full gap-2 text-base'>
                    <h3 className='font-medium'>Bantuan</h3>
                    <div className='flex'>
                        <FontAwesomeIcon icon="fa-solid fa-angle-right"/>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer