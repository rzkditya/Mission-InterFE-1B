import React from 'react'
import HeroSection from '../components/organisms/HeroSection'

const Layout = ({ children }) => {
  return (
    <main className='flex flex-col overflow-x-clip'>
      <HeroSection/>
      <section className='flex flex-col justify-between md:py-4 md:px-10 py-2 px-4 gap-3 bg-page-header'>
        {children}
      </section>
    </main>
  )
}

export default Layout