import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import DaftarSaya from "../pages/DaftarSaya";
import Films from "../pages/Films";
import Series from "../pages/Series";
import ProfilSaya from "../pages/ProfilSaya";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/daftar-saya",
    element: <DaftarSaya />,
  },
  {
    path: "/films",
    element: <Films />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/profil-saya",
    element: <ProfilSaya />,
  },
]);
