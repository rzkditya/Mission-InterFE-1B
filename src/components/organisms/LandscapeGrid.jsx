import { useState } from 'react'
import Arrow from '../atoms/Arrow'
import LandscapeCard from '../molecules/LandscapeCard'
import allMovies from '../../allFilms.json'
import HoverCardWatch from './HoverCardWatch'

const titles = {
  'Continue Watching': 'Melanjutkan Tonton Film',
}

const gridColsMap = {
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
}

const LandscapeGrid = ({type = 'Continue Watching', filterKey = 'watched', onShowDetail, itemsPerPage = 4}) => {
  const movies = allMovies.filter(movie => movie[filterKey])
  const title = titles[type] || '---'

  const [startIndex, setStartIndex] = useState(0)
  const visibleCard = movies.slice(startIndex, startIndex + itemsPerPage)


  const handleNext = () => {
    if (startIndex + itemsPerPage < movies.length) {
      setStartIndex(startIndex + 1)
    }
  }

   const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1)
    }
   }


  return (
    <section className='flex flex-col gap-3 mb-5'>
      <h2 className='text-light-primary text-xl font-medium'>
        {title}
      </h2>

      <div className='relative'>
        <Arrow template='left' onClick={handlePrev}></Arrow>
        <div className={`relative flex flex-nowrap sm:grid ${gridColsMap[itemsPerPage] || 'sm:grid-cols-4'} overflow-x-auto overflow-y-clip scrollbar-hide sm:overflow-visible gap-4 text-light-primary`}>
          {visibleCard.map((movie) => 
            <div key={movie.id} className='relative group w-[80vw] sm:w-full flex-shrink-0'>
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
        <Arrow template='right' onClick={handleNext}></Arrow>
      </div>
    </section>
  )
}

export default LandscapeGrid