import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../atoms/Logo'
import InputBox from '../molecules/InputField'
import Button from '../atoms/Button'
import Google from '../../assets/images/Google.svg'

const Form = ({template = 'login'}) => {
    const templateLogin = () => (
        <> 
            <div className="flex flex-col justify-center w-xs h-fit p-[20px] gap-6 bg-page-header/65 outline outline-black/5 rounded-xl text-sm text-light-primary">
                <Logo/>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h3 className='text-2xl font-medium'>Masuk</h3>
                    <p className='text-xs'>Selamat datang Kembali!</p>
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='flex flex-col gap-4'>
                        <InputBox text='Username' variant="username" id="username" name="Username" />
                        <InputBox text='Kata Sandi' variant="password" id="password" name="Password" />
                    </div>
                    <div className='flex justify-between text-xs'>
                        <p className='text-light-secondary'>Belum punya akun? <Link to="/register" className='text-light-primary'>Daftar</Link></p>
                        <Link to="/" className='text-light-primary'>Lupa kata sandi?</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center text-xs'>
                    <Button variant='extra' className='w-full'>Masuk</Button>
                    <span className=' my-1 text-light-disabled'>Atau</span>
                    <Button variant='clean-white' className='w-full'><img src={Google} alt="Google Icon" />Masuk dengan Google</Button>
                </div>
            </div>
        </>  
    )

    const templateRegister = () => (
        <> 
            <div className="flex flex-col justify-center w-xs h-fit p-[20px] gap-6 bg-page-header/65 outline outline-black/5 rounded-xl text-sm text-light-primary">
                <Logo/>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h3 className='text-2xl font-medium'>Masuk</h3>
                    <p className='text-xs'>Selamat datang Kembali!</p>
                </div>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='flex flex-col gap-4'>
                        <InputBox text='Username' variant="username" id="username" name="Username" />
                        <InputBox text='Kata Sandi' variant="password" id="password" name="Password" />
                        <InputBox text='Konfirmasi Kata Sandi' variant="password" id="password-cfrm" name="Password"/>
                    </div>
                    <div className='flex justify-between text-xs'>
                        <p className='text-light-secondary'>Sudah punya akun? <Link to="/login" className='text-light-primary'>Masuk</Link></p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center text-xs'>
                    <Button variant='extra' className='w-full'>Daftar</Button>
                    <span className=' my-1 text-light-disabled'>Atau</span>
                    <Button variant='clean-white' className='w-full'><img src={Google} alt="Google Icon" />Daftar dengan Google</Button>
                </div>
            </div>
        </>  
    )

  return template === 'login' ? templateLogin() : templateRegister()
}

export default Form