import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import DaftarSaya from '../pages/DaftarSaya'
import Test from '../pages/test'
import Films from '../pages/Films'
import Series from '../pages/Series'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to='/Login' replace/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/daftar-saya",
        element: <DaftarSaya/>,
    },
    {
        path: "/films",
        element: <Films/>,
    },
    {
        path: "/series",
        element: <Series/>,
    },
    {
        path: "/api-test",
        element: <Test/>,
    },
])
