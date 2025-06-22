import React, { useRef, useState, useEffect } from 'react'
import PortraitCard from '../molecules/PortraitCard'
import Arrow from '../atoms/Arrow'
import HoverCard from './HoverCard'
import PopUp from './PopUpDetail'
import allMovies from '../../allFilms.json'

const titles = {
  'Top 10': 'Top Rating Film dan Series Hari Ini',
  'Trending': 'Film Trending',
  'New Release': 'Rilis Baru',
}

const CardGrid = ({type = 'Top 10', filterKey = 'isTopRated'}) => {
  const movies = allMovies.filter(movie => movie[filterKey])
  const title = titles[type] || '---'

  const [selectedMovie, setSelectedMovie] = useState(null)

  function handleShowDetail(movie) {
    setSelectedMovie(movie)
  }

  function handleCloseDetail() {
    setSelectedMovie(null)
  }

  return (
    <section className='flex flex-col gap-5 mb-5'>
      <h2 className='text-light-primary text-xl font-medium'>
        {title}
      </h2>

      <div className='relative'>
        <Arrow template='left'></Arrow>
        <div className='relative flex flex-nowrap scrollbar-hide gap-4 text-light-primary'>
          {movies.slice(0,5).map((movie) => 
            <div key={movie.id} className="relative group w-1/4 md:grow md:w-fit">
              <PortraitCard movie={movie} />

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-10'>
                <HoverCard movie={movie} onShowDetail={() => handleShowDetail(movie)}/>
              </div>
            </div>
          )}
        </div>
        <Arrow template='right'></Arrow>
      </div>
      
      {selectedMovie && (
        <div className='fixed inset-0 z-50'>
          <PopUp movie={selectedMovie} onClose={handleCloseDetail}/>
        </div>
      )}
    </section>
  )
}

export default CardGrid