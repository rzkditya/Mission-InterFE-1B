import React from 'react'
import Arrow from '../atoms/Arrow'
import LandscapeCard from '../molecules/LandscapeCard'
import allMovies from '../../allFilms.json'
import HoverCardWatch from './HoverCardWatch'

const titles = {
  'Continue Watching': 'Melanjutkan Tonton Film',
}

const LandscapeGrid = ({type = 'Continue Watching', filterKey = 'watched', onShowDetail}) => {
  const movies = allMovies.filter(movie => movie[filterKey])
  const title = titles[type] || '---'

  return (
    <section className='flex flex-col gap-5 mb-5'>
      <h2 className='text-light-primary text-xl font-medium'>
        {title}
      </h2>

      <div className='relative'>
        <Arrow template='left'></Arrow>
        <div className='relative flex flex-nowrap md:grid md:grid-cols-4 overflow-x-auto overflow-y-clip scrollbar-hide md:overflow-visible gap-4 text-light-primary'>
          {movies.slice(0,4).map((movie) => 
            <div key={movie.id} className='relative group w-4/5 shrink-0 md:grow md:w-full'>
              <div className='block md:pointer-events-none' onClick={() => {
                if(window.innerWidth < 768) {
                  onShowDetail(movie)
                }
              }}>
              <LandscapeCard movie={movie} />
              </div>

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-10'>
                <HoverCardWatch movie={movie} onShowDetail={() => onShowDetail(movie)}/>
              </div>
            </div>
          )}
        </div>
        <Arrow template='right'></Arrow>
      </div>
    </section>
  )
}

export default LandscapeGrid