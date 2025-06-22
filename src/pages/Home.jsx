import React from 'react'
import Main from '../layouts/MenuLayout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import PortraitGrid from '../components/organisms/PortraitGrid'
import LandscapeGrid from '../components/organisms/LandscapeGrid'

const Home = () => {
  return (
    <>
      <Header/>
      <Main>
        <LandscapeGrid/>
        <PortraitGrid type='Top 10' filterKey='isTopRated'/>
        <PortraitGrid type='Trending' filterKey='isTrending'/>
        <PortraitGrid type='New Release' filterKey='isNewRelease'/>
      </Main>
      <Footer/>
    </>
  )
}

export default Home