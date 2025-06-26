import React, { useState } from 'react'
import Main from '../layouts/MenuLayout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import PortraitGrid from '../components/organisms/PortraitGrid'
import LandscapeGrid from '../components/organisms/LandscapeGrid'
import PopUp from '../components/organisms/PopUpDetail'
import allFilms from '../allFilms.json'

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [movieList, setMovieList] = useState(() => {
  const saved = JSON.parse(localStorage.getItem('myList')) || []
  return allFilms.map(movie => ({
      ...movie,
      myList: saved.includes(movie.id),
    }))
  })

  function toggleMyList(movieId) {
  setMovieList(prev =>
    prev.map(movie =>
      movie.id === movieId ? { ...movie, myList: !movie.myList } : movie
    )
  )

  const updated = movieList.map(m =>
    m.id === movieId ? { ...m, myList: !m.myList } : m
  )

  const savedIds = updated.filter(m => m.myList).map(m => m.id)
    localStorage.setItem('myList', JSON.stringify(savedIds))
  }
  
  function handleShowDetail(movie) {
    setSelectedMovie(prev => {
      if (prev?.id === movie.id) return { ...movie }; 
      return { ...movie };
    });
  }

  function handleCloseDetail() {
    setSelectedMovie(null)
  }

  return (
    <>
      <Header/>
      <Main>
        <LandscapeGrid onShowDetail={handleShowDetail} movieList={movieList} toggleMyList={toggleMyList}/>
        <PortraitGrid type='Top 10' filterKey='isTopRated' onShowDetail={handleShowDetail} movieList={movieList} toggleMyList={toggleMyList}/>
        <PortraitGrid type='Trending' filterKey='isTrending' onShowDetail={handleShowDetail} movieList={movieList} toggleMyList={toggleMyList}/>
        <PortraitGrid type='New Release' filterKey='isNewRelease' onShowDetail={handleShowDetail} movieList={movieList} toggleMyList={toggleMyList}/>
      </Main>
      <Footer/>

      {selectedMovie && (
        <div className='fixed inset-0 z-50'>
          <PopUp movie={movieList.find(m => m.id === selectedMovie.id)} onClose={handleCloseDetail} toggleMyList={toggleMyList} movies={movieList}/>
        </div>
      )}
    </>
  )
}

export default Home