import React from 'react'
import Input from '../atoms/Input'

const InputBox = ({
  text = 'Username', 
  variant = 'username', 
  id = 'username', 
  name = 'Username',
  value,
  onChange
}) => {
  return (
    <>
        <div className="flex flex-col">
            <label className='flex mb-2 text-white' for={id}>{text}</label>
            <Input 
              variant={variant}
              id={id}
              name={name}
              value={value}
              onChange={onChange} 
            />
        </div>   
    </>
  )
}

export default InputBox