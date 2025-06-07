import React from 'react'
import Top_Rating from '../../components/datas/Top Rating'
import New_Release from '../../components/datas/New Release'
import Trending from '../../components/datas/Trending'
import PortraitCard from '../molecules/PortraitCard'
import Arrow from '../atoms/Arrow'
import HoverCard from '../molecules/HoverCard'

const dataSources = {
  'Top 10': Top_Rating,
  'Trending': Trending,
  'New Release': New_Release,
}

const titles = {
  'Top 10': 'Top Rating Film dan Series Hari Ini',
  'Trending': 'Film Trending',
  'New Release': 'Rilis Baru',
}

const CardGrid = ({type = 'Top 10'}) => {
  const movies = dataSources[type] || []
  const title = titles[type] || '---'

  return (
    <section className='flex flex-col gap-5 mb-5'>
      <h2 className='text-light-primary text-xl font-medium'>
        {title}
      </h2>
      <div className='relative flex flex-nowrap md:grid md:grid-cols-5 overflow-x-auto md:overflow-visible gap-4 text-light-primary'>
        <Arrow template='left'></Arrow>
        {movies.map((movie) => 
          <div key={movie.id} className="relative group w-1/4 flex-shrink-0 md:w-full">
            <PortraitCard movie={movie} />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 z-20'>
              <HoverCard movie={movie} />
            </div>
          </div>
        )}
        <Arrow template='right'></Arrow>
      </div>
    </section>
  )
}

export default CardGrid