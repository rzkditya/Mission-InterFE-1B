import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../atoms/Logo'
import InputBox from '../molecules/InputField'
import Button from '../atoms/Button'
import Google from '../../assets/images/Google.svg'
import useAuthStore from '../../store/useAuthStore'

const Form = ({template = 'login'}) => {
    const baseStyle = 'flex flex-col justify-center w-xs md:w-md h-fit p-[20px] gap-6 bg-page-header/65 outline outline-black/5 rounded-xl text-sm md:text-lg text-light-primary'
    const navigate = useNavigate()

    const {login, register, error, loading} = useAuthStore()

    const handleLogin = async (e) => {
        e.preventDefault();

        const username = e.target.username.value.trim();
        const password = e.target.password.value.trim();

        await login({ username, password });

        const { user } = useAuthStore.getState()

        if (user) {
            navigate('/profil-saya') // or wherever your profile route is
        } else {
            alert(error || "Login gagal")
        }
    };

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        avatar: 'https://avatars.githubusercontent.com/u/37095963'
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const cleanForm = {
            ...form,
            username: form.username.trim(),
            password: form.password.trim(),
        }

        console.log("Form before submit:", cleanForm)
        register(cleanForm)
    }

    const templateLogin = () => (
        <form onSubmit={handleLogin} className={baseStyle}>
            <Logo/>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h3 className='text-2xl md:text-4xl font-medium'>Masuk</h3>
                <p className='text-xs md:text-lg'>Selamat datang Kembali!</p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-col gap-4'>
                    <InputBox text='Username' variant="username" id="username" name="username" />
                    <InputBox text='Kata Sandi' variant="password" id="password" name="password" />
                </div>
                <div className='flex justify-between text-xs md:text-lg'>
                    <p className='text-light-secondary'>Belum punya akun? <Link to="/register" className='text-light-primary'>Daftar</Link></p>
                    <Link to="/" className='text-light-primary'>Lupa kata sandi?</Link>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center text-xs md:text-lg'>
                <Button type='submit' variant='extra' className='w-full py-1'>Masuk</Button>
                <span className=' my-1 text-light-disabled'>Atau</span>
                <Button variant='clean-white' className='w-full py-1'><img src={Google} alt="Google Icon" />Masuk dengan Google</Button>
            </div>
        </form>
    )

    const templateRegister = () => (
        <form onSubmit={handleSubmit} className={baseStyle}>
            <Logo/>
            <div className='flex flex-col justify-center items-center gap-2'>
                <h3 className='text-2xl md:text-4xl font-medium'>Daftar</h3>
                <p className='text-md:text-lg'>Selamat Datang!</p>
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex flex-col gap-4'>
                    <InputBox onChange={handleChange} value={form.username} text='Username' variant="username" id="username" name="username" />
                    <InputBox onChange={handleChange} value={form.password} text='Kata Sandi' variant="password" id="password" name="password" />
                    <InputBox onChange={handleChange} text='Konfirmasi Kata Sandi' variant="password" id="password-cfrm" name="password-cfrm"/>
                </div>
                <div className='flex justify-between text-xs md:text-lg'>
                    <p className='text-light-secondary'>Sudah punya akun? <Link to="/login" className='text-light-primary'>Masuk</Link></p>
                </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className='flex flex-col justify-between items-center text-xs md:text-lg'>
                <Button type='submit' variant='extra' className='w-full py-1'>{loading ? "Mendaftarkan..." : "Daftar"}</Button>
                <span className=' my-1 text-light-disabled'>Atau</span>
                <Button variant='clean-white' className='w-full py-1'><img src={Google} alt="Google Icon" />Daftar dengan Google</Button>
            </div>
        </form>
    )

  return template === 'login' ? templateLogin() : templateRegister()
}

export default Form