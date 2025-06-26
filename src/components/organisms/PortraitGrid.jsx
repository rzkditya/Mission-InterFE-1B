import React from 'react'
import PortraitCard from '../molecules/PortraitCard'
import Arrow from '../atoms/Arrow'
import HoverCard from './HoverCard'
import allMovies from '../../allFilms.json'

const titles = {
  'Top 10': 'Top Rating Film dan Series Hari Ini',
  'Trending': 'Film Trending',
  'New Release': 'Rilis Baru',
}

const PortraitGrid = ({type = 'Top 10', filterKey = 'isTopRated', onShowDetail}) => {
  const movies = allMovies.filter(movie => movie[filterKey])
  const title = titles[type] || '---'

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
              <div className='block md:pointer-events-none' onClick={() => {
                if(window.innerWidth < 768) {
                  onShowDetail(movie)
                }
              }}>
                <PortraitCard movie={movie}/>
              </div>

              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-10 pointer-events-none md:pointer-events-auto'>
                <HoverCard movie={movie} onShowDetail={() => onShowDetail(movie)}/>
              </div>
            </div>
          )}
        </div>
        <Arrow template='right'></Arrow>
      </div>
    </section>
  )
}

export default PortraitGrid