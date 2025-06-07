import React from 'react'
import Badge from '../atoms/Badge'

const PortraitCard = ({movie: {title, poster_path, badge}}) => {
  const badgePositionClass = {
    'Top10': 'top-0 right-2',
    'New': 'top-2 left-2',
  }[badge] || 'top-2 left-2'

  return (
    <div className="relative bg-page-header rounded-lg cursor-pointer overflow-hidden">
        <img src={poster_path} alt={title} className='w-full h-auto'/>

        {badge && (
            <div className={`absolute ${badgePositionClass} shadow-md z-10`}>
                <Badge variant={badge} />
            </div>
        )}
    </div>
  )
}

export default PortraitCard