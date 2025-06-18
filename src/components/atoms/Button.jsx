import React from 'react'

const variantStyles = {
  'primary-300': 'bg-primary-300 text-white',
  'primary-200': 'bg-primary-200 text-white',
  'primary-default': 'bg-transparent text-primary-default border border-blue-default',
  'body': 'bg-body text-white',
  'extra': 'bg-other-extra text-white border border-outline/40',
  'clean-white': 'bg-transparent text-white border border-outline/40',
  'clear': 'bg-transparent text-inherit',
};

const Button = ({
  type = 'button',
  variant = 'primary-300',
  onClick,
  disabled = false,
  className = '',
  children,
}) => {
  const baseStyle = 'flex justify-center items-center rounded-full gap-1 md:gap-3 cursor-pointer text-center';

  const variantClass = disabled ? variantStyles['disabled'] : variantStyles[variant] || variantStyles['primary']


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button