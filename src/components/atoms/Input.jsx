import React from 'react'

const inputVariants = {
        'username': {
            type:'text',
            placeholder: 'Masukkan Username'
        },
        'password': {
            type:'password',
            placeholder: 'Masukkan Kata Sandi'
        }
        // Add more text if needed
    };

const Input = ({
    variant = 'username', 
    id = 'username', 
    name = 'username',
    value,
    onChange,
}) => {
    const baseStyle = 'w-full h-7 md:h-9 px-5 border border-white/40 rounded-full text-xs md:text-lg text-light-primary';

    const { type, placeholder } = inputVariants[variant] || inputVariants['username'];

    return (
        <input
            type={type}
            id={id}
            name={name} 
            placeholder={placeholder} 
            className={baseStyle} 
            value={value}
            onChange={onChange}
            required
        />
    )
}

export default Input