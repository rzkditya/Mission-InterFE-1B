import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Arrow = ({template = 'left', onClick, disabled}) => {

  const leftArrow = () => (
    <button onClick={onClick} className='hidden md:flex justify-between items-center absolute top-1/2 -translate-y-1/2 -left-4 px-3 py-2 bg-body hover:bg-body/80 rounded-full text-white text-2xl outline-1 outline-light-secondary cursor-pointer z-20' disabled={disabled}>
      <FontAwesomeIcon icon="fa-solid fa-angle-left" />
    </button>
  )

  const rightArrow = () => (
    <button onClick={onClick} className='hidden md:flex justify-between items-center absolute top-1/2 -translate-y-1/2 -right-4 px-3 py-2 bg-body hover:bg-body/80 rounded-full text-white text-2xl outline-1 outline-light-secondary cursor-pointer z-20' disabled={disabled}>
      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
    </button>
  )

  return template === 'left' ? leftArrow() : rightArrow()
}

export default Arrow