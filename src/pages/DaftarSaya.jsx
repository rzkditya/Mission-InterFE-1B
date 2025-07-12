import React, { useState, useEffect } from 'react'
import Main from '../layouts/MenuLayout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import PortraitCard from '../components/molecules/PortraitCard'
import HoverCard from '../components/organisms/HoverCard'
import allFilms from '../allFilms.json'
import PopUp from '../components/organisms/PopUpDetail'
import axios from 'axios'


const DaftarSaya = () => {
   const [myListMovies, setMyListMovies] = useState([])
   const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    loadMyList()
  }, [])

  const loadMyList = () => {
    const savedList = JSON.parse(localStorage.getItem('myList')) || []
    const filteredMovies = allFilms
      .map(movie => ({
        ...movie,
        myList: savedList.includes(movie.id),
      }))
      .filter(movie => movie.myList)
    setMyListMovies(filteredMovies)
  }

  const toggleMyList = (movieId) => {
    const saved = JSON.parse(localStorage.getItem('myList')) || []
    const updated = saved.includes(movieId)
      ? saved.filter(id => id !== movieId)
      : [...saved, movieId]

      localStorage.setItem('myList', JSON.stringify(updated))
      loadMyList()

      if (selectedMovie && selectedMovie.id === movieId) {
        setSelectedMovie(prev => ({
          ...prev,
          myList: !prev.myList
        }))
      }
  }

  function handleShowDetail(movie) {
    setSelectedMovie({...movie})
  }

  function handleCloseDetail() {
    setSelectedMovie(null)
  }

  return (
    <>
      <Header/>
      <Main>
        <section className='flex flex-col gap-5 mb-5'>
          <h2 className='text-light-primary text-xl font-medium'>
            Daftar Saya
          </h2>

          {myListMovies.length === 0 ? (
            <p className='text-light-secondary'>Belum ada film di daftar Anda.</p>
          ) : (
            <div className='relative grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-6 text-light-primary'>
              {myListMovies.map(movie => (
                <div key={movie.id} className="relative group w-full">
                  <div className='block md:pointer-events-none' onClick={() => { if(window.innerWidth < 768) {
                    handleShowDetail(movie)
                    }
                  }}>
                  <PortraitCard movie={movie} />
                  </div>

                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-20 hidden md:block'>
                    <HoverCard
                      movie={movie}
                      onShowDetail={() => handleShowDetail(movie)}
                      onToggleMyList={() => toggleMyList(movie.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </Main>
      <Footer/>

      {selectedMovie && (
        <div className='fixed inset-0 z-50'>
          <PopUp movie={selectedMovie} onClose={handleCloseDetail} toggleMyList={toggleMyList} movies={allFilms}/>
        </div>
      )}
    </>
  )
}

export default DaftarSaya