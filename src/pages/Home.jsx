import React, { useState, useEffect } from 'react'
import Main from '../layouts/MenuLayout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import PortraitGrid from '../components/organisms/PortraitGrid'
import LandscapeGrid from '../components/organisms/LandscapeGrid'
import PopUp from '../components/organisms/PopUpDetail'
import axios from 'axios'

const Home = () => {
  const api_url = import.meta.env.VITE_API_URL
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [mov, setMov] = useState(null)
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    axios.get(api_url)
    .then((response) => {
      console.log('✅ API response:', response.data)
      setMov(response.data)

      const saved = JSON.parse(localStorage.getItem('myList')) || []
      const myMovList =  response.data.map(movie => ({
          ...movie,
          myList: saved.includes(movie.id),
        }))
        setMovieList(myMovList)
    })
    .catch((err) => {
      console.error('Failed to fetch movies:', err)
    })
  }, [])

  if (!mov) return null

  function toggleMyList(movieId) {
    setMovieList(prevList => {
    const updated = prevList.map(movie =>
      movie.id === movieId ? { ...movie, myList: !movie.myList } : movie
    )
    const savedIds = updated.filter(m => m.myList).map(m => m.id)
    localStorage.setItem('myList', JSON.stringify(savedIds))
    return updated
  })
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

  if (!movieList.length) return <div>Loading...</div>

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