import React from 'react'
import Continue_Watching from '../datas/Continue Watching'
import Arrow from '../atoms/Arrow'
import LandscapeCard from '../molecules/LandscapeCard'
import HoverCard from '../organisms/HoverCard'

const dataSources = {
  'Continue Watching': Continue_Watching,
}

const titles = {
  'Continue Watching': 'Melanjutkan Tonton Film',
}

const WatchGrid = ({type = 'Continue Watching'}) => {
  const movies = (dataSources[type] || []).slice(0,4)
  const title = titles[type] || '---'

  return (
    <section className='flex flex-col gap-5 mb-5'>
      <h2 className='text-light-primary text-xl font-medium'>
        {title}
      </h2>
      <div className='relative flex flex-nowrap md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible gap-4 text-light-primary'>
        <Arrow template='left'></Arrow>
        {movies.map((movie) => 
          <div key={movie.id} className='relative group w-4/5 flex-shrink-0 md:w-full'>
            <LandscapeCard movie={movie} />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-opacity duration-300 z-20'>
              <HoverCard movie={movie} />
            </div>
          </div>
        )}
        <Arrow template='right'></Arrow>
      </div>
    </section>
  )
}

export default WatchGrid