import React from 'react'

const variantStyles = {
  'Top10': (<div className='flex flex-wrap justify-center items-center w-5 md:w-7 h-8 md:h-11 rounded-bl-sm rounded-tr-sm bg-error-pressed text-[9px] md:text-sm font-medium'>
                <p className='text-center'>Top 10</p>
            </div>),
  'Premium': (<div className='flex justify-center items-center py-1 px-2 rounded-full bg-warning-pressed text-[9px] md:text-sm font-medium'>
                <p className='text-center'>Premium</p>
            </div>),
  'New': (<div className='flex justify-center items-center py-1 px-1.5 md:px-2.5 rounded-full bg-primary-300 text-[9px] md:text-sm font-medium'>
                <p className='text-center text-nowrap'>Episode Baru</p>
            </div>),
}

const Badge = ({variant}) => {
  return (
    variantStyles[variant] || null
  )
}

export default Badge