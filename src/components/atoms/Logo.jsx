import React from 'react'
import chillLogo from '@/assets/images/Logo.svg'

const Logo = () => {
  return (
    <>
        <div className='flex justify-center h-8'>
            <img src={chillLogo} alt="Chill Logo" />
        </div>
    </>
  )
}

export default Logo