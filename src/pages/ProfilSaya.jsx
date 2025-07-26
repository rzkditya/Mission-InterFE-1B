import React from 'react'
import Header from '../components/organisms/Header'
import Main from '../layouts/MenuLayout'
import Footer from '../components/organisms/Footer'
import Button from '../components/atoms/Button'
import ProfileIcon from '@/assets/images/Profile.svg'
import { useState, useEffect } from "react"
import useAuthStore from '../store/useAuthStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardGrid from '../components/organisms/PortraitCard'
import { useGet } from '../services/api/api-index'


const labelStyle = 'text-light-disabled'
const inputStyle = 'relative flex flex-col w-[50%] px-3 py-1 bg-other-paper rounded-md outline-1 outline-light-disabled'

const ProfilSaya = () => {
    const { data } = useGet('MovieLists')
    const { user, updateUser, loading } = useAuthStore()
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [isEditable, setIsEditable] = useState({
        username: false,
        email: false,
        password: false,
    })

    useEffect(() => {
        if(user) {
            setFormData({
                username: user.username || '',
                email: user.email || '',
                password: '',
            })
        }
    }, [user])

    const toggleEdit = (field) => {
        setIsEditable(prev => ({
            ...prev,
            [field]: !prev[field]
        }))
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await updateUser(formData)
            alert('Profil berhasil diperbarui!')
        } catch(err) {
            console.log(err)
            alert('Gagal memperbarui profil')
        }
    }

  return (
    <>
        <Header/>
        <main className='flex flex-col w-full min-h-dvh justify-evenly items-start md:py-4 md:px-10 p-4 bg-page-header text-sm'>
            <div className='flex flex-col w-full text-light-primary gap-8'>
                <h1 className='text-light-primary text-3xl'>Profil Saya</h1>
                <div>
                    <img className='w-5 md:w-10 lg:w-34' src={ProfileIcon} alt="Profile Icon"/>
                </div>
                <form action="submit" onSubmit={handleSubmit} className='flex flex-col gap-8'>
                    <div className={inputStyle}>
                        <label htmlFor="nama" className={labelStyle}>Nama Pengguna</label>
                        <input id='nama' name='username' type="text" placeholder={formData.username} value={formData.username} onChange={handleChange} readOnly={!isEditable.username}/>
                        <button type='button' className='absolute top-1/3 right-4 cursor-pointer' onClick={() => toggleEdit('username')}><FontAwesomeIcon icon="fa-solid fa-pencil" /></button>
                    </div>
                    <div className={inputStyle}>
                        <label htmlFor="email" className={labelStyle}>Email</label>
                        <input id='email' name='email' type="email" placeholder={formData.email} value={formData.email} onChange={handleChange} readOnly={!isEditable.email}/>
                        <button type='button' className='absolute top-1/3 right-4 cursor-pointer' onClick={() => toggleEdit('email')}><FontAwesomeIcon icon="fa-solid fa-pencil" /></button>
                    </div>
                    <div className={inputStyle}>
                        <label htmlFor="password" className={labelStyle}>Password</label>
                        <input id='password' name='password' type="password" placeholder='*****' className='w-full' value={formData.password} onChange={handleChange} readOnly={!isEditable.password}/>
                        <button type='button' className='absolute top-1/3 right-4 cursor-pointer' onClick={() => toggleEdit('password')}><FontAwesomeIcon icon="fa-solid fa-pencil" /></button>
                    </div>
                    <Button type='submit' className='w-[8%] p-1 text-sm focus:bg-primary-300'>{loading ? "Menyimpan..." : "Simpan"}</Button>
                </form>
            </div>
            <section className='text-white'>
                <h2>Daftar Saya</h2>
                <div className='relative flex flex-nowrap scrollbar-hide gap-4 text-light-primary'>
                    {data.slice(0,6).map((recMovie) => (
                    <div key={recMovie.id} className="relative group shrink grow">
                        <CardGrid movie={recMovie} />
                    </div>
                    ))}
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default ProfilSaya