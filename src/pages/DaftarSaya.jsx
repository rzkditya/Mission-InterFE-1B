import React from 'react'
import Main from '../layouts/MenuLayout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import PortraitGrid from '../components/organisms/CardGrid'

const DaftarSaya = () => {
  return (
    <>
      <Header/>
      <Main>
        <PortraitGrid type='Top 10'/>
      </Main>
      <Footer/>
    </>
  )
}

export default DaftarSaya