import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '../atoms/Badge'

const LandscapeCard = ({movie: {title, poster_path, rating, badge}}) => {
  const badgePositionClass = {
    'Top10': 'top-0 right-2',
    'New': 'top-2 left-2',
  }[badge] || 'top-2 left-2'
  
  return (
    <div className="relative w-full aspect-[16/9] bg-page-header rounded-lg cursor-pointer overflow-hidden">
        <img src={poster_path} alt={title} className='absolute w-full h-full object-cover'/>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-2"/>

        <section className='absolute bottom-0 w-full p-3 z-3 flex justify-between items-center text-sm md:text-lg'>
          <div className='text-left w-4/5 truncate'>{title}</div>
          <div className='text-right w-2/5'>
            <FontAwesomeIcon icon="fa-solid fa-star"/> {rating}/5
          </div>
        </section>

        {badge && (
          <div className={`absolute ${badgePositionClass} shadow-md z-10`}>
              <Badge variant={badge} />
          </div>
        )}
    </div>
  )
}

export default LandscapeCard