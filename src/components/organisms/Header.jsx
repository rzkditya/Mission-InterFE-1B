import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

import webLogo from "@/assets/images/Logo.svg";
import mobLogo from "@/assets/images/FavIcon.svg";
import ProfileIcon from "@/assets/images/Profile.svg";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUsername(loggedInUser.username);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center md:py-3 md:px-10 p-4 bg-page-header text-light-primary text-xs sm:text-sm md:text-base lg:text-lg">
      <div name="header-container" className="flex items-center">
        <div
          name="header-nav"
          className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-14"
        >
          <Link to="/Home" className="hidden md:flex">
            <img className="h-5 md:h-7 lg:h-8" src={webLogo} alt="Logo Chill" />
          </Link>
          <Link to="/Home" className="flex md:hidden">
            <img className="h-4" src={mobLogo} alt="Logo Chill Mobile" />
          </Link>
          <nav>
            <ul name="Nav Links" className="flex gap-4 md:gap-14 lg:gap-18">
              <li className="hover:text-primary-default">
                <Link to="/series">Series</Link>
              </li>
              <li className="hover:text-primary-default">
                <Link to="/films">Film</Link>
              </li>
              <li className="hover:text-primary-default">
                <Link to="/daftar-saya">Daftar Saya</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div name="header-profile" className="flex items-center">
        <div
          name="profile-dropdown"
          className="flex items-center gap-2 md:gap-4"
        >
          <img
            className="w-5 md:w-10 lg:w-14"
            src={ProfileIcon}
            alt="Profile Icon"
          />
          <p className="font-medium">{username}</p>
          <details className="group">
            <summary className="flex items-center gap-2 md:gap-4 cursor-pointer list-none">
              <FontAwesomeIcon icon="fa-solid fa-angle-down" />
            </summary>

            <section className="delay-200 absolute w-40 md:w-45 lg:w-55 top-10 md:top-15 lg:top-17 right-4 md:right-10 bg-page-header rounded-sm p-4 md:p-6 lg:p-8 outline-1 outline-light-secondary/10 z-11">
              <ul className="flex flex-col gap-4 md:gap-8 text-left">
                <li className="hover:text-primary-default">
                  <Link to="/profil-saya">
                    <FontAwesomeIcon icon="fa-solid fa-user" className="mr-2" />
                    Profil Saya
                  </Link>
                </li>
                <li className="hover:text-primary-default">
                  <a href="#Premium">
                    <FontAwesomeIcon icon="fa-solid fa-star" className="mr-2" />
                    Ubah Premium
                  </a>
                </li>
                <li className="hover:text-primary-default">
                  <button onClick={handleLogout}>
                    <FontAwesomeIcon
                      icon="fa-solid fa-right-from-bracket"
                      className="mr-2"
                    />
                    Keluar
                  </button>
                </li>
              </ul>
            </section>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
