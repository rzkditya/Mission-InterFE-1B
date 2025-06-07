import React from 'react'
import Main from '../layouts/MenuLayout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import PortraitGrid from '../components/organisms/CardGrid'
import LandscapeGrid from '../components/organisms/WatchingGrid'
import HeroSection from '../components/organisms/HeroSection'

const Home = () => {
  return (
    <>
      <Header/>
      <Main>
        <LandscapeGrid/>
        <PortraitGrid type='Top 10'/>
        <PortraitGrid type='Trending'/>
        <PortraitGrid type='New Release'/>
      </Main>
      <Footer/>
    </>
  )
}

export default Home