import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../atoms/Logo'
import InputBox from '../molecules/InputField'
import Button from '../atoms/Button'
import Google from '../../assets/images/Google.svg'

const Form = ({template = 'login'}) => {
    const baseStyle = 'flex flex-col justify-center w-xs md:w-md h-fit p-[20px] gap-6 bg-page-header/65 outline outline-black/5 rounded-xl text-sm md:text-lg text-light-primary'
    
    const templateLogin = () => (
        <div className={baseStyle}>
            <Logo/>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h3 className='text-2xl md:text-4xl font-medium'>Masuk</h3>
                <p className='text-xs md:text-lg'>Selamat datang Kembali!</p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-col gap-4'>
                    <InputBox text='Username' variant="username" id="username" name="Username" />
                    <InputBox text='Kata Sandi' variant="password" id="password" name="Password" />
                </div>
                <div className='flex justify-between text-xs md:text-lg'>
                    <p className='text-light-secondary'>Belum punya akun? <Link to="/register" className='text-light-primary'>Daftar</Link></p>
                    <Link to="/" className='text-light-primary'>Lupa kata sandi?</Link>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center text-xs md:text-lg'>
                <Button variant='extra' className='w-full py-1'>Masuk</Button>
                <span className=' my-1 text-light-disabled'>Atau</span>
                <Button variant='clean-white' className='w-full py-1'><img src={Google} alt="Google Icon" />Masuk dengan Google</Button>
            </div>
        </div>
    )

    const templateRegister = () => (
        <div className={baseStyle}>
            <Logo/>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h3 className='text-2xl md:text-4xl font-medium'>Masuk</h3>
                <p className='text-md:text-lg'>Selamat datang Kembali!</p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-col gap-4'>
                    <InputBox text='Username' variant="username" id="username" name="Username" />
                    <InputBox text='Kata Sandi' variant="password" id="password" name="Password" />
                    <InputBox text='Konfirmasi Kata Sandi' variant="password" id="password-cfrm" name="Password"/>
                </div>
                <div className='flex justify-between text-xs md:text-lg'>
                    <p className='text-light-secondary'>Sudah punya akun? <Link to="/login" className='text-light-primary'>Masuk</Link></p>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center text-xs md:text-lg'>
                <Button variant='extra' className='w-full py-1'>Daftar</Button>
                <span className=' my-1 text-light-disabled'>Atau</span>
                <Button variant='clean-white' className='w-full py-1'><img src={Google} alt="Google Icon" />Daftar dengan Google</Button>
            </div>
        </div>
    )

  return template === 'login' ? templateLogin() : templateRegister()
}

export default Form