// src/components/Layout.jsx
import React from 'react'
import { useLocation } from 'react-router-dom'
import LoginImg from '../assets/images/Login.png'
import RegisterImg from '../assets/images/Register.png'

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  const backgroundMap = {
    '/login': LoginImg,
    '/register': RegisterImg,
  }

  const background = backgroundMap[pathname] || LoginImg;

  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  )
}

export default Layout