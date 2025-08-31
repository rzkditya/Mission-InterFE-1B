import React, { useState, useEffect } from "react";
import Main from "../layouts/MenuLayout";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import PortraitCard from "../components/molecules/PortraitCard";
import HoverCard from "../components/organisms/HoverCard";
import PopUp from "../components/organisms/PopUpDetail";
import { toggleMyList, getMyList } from "../utils/myList";

const DaftarSaya = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [myList, setMyList] = useState([]);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userId = loggedInUser?.id;

  useEffect(() => {
    if (userId) {
      setMyList(getMyList(userId));
    }
  }, [userId]);

  function handleToggle(movieId) {
    const updated = toggleMyList(userId, movieId);
    setMyList(updated);
  }

  function handleShowDetail(movie) {
    setSelectedMovie(movie);
  }

  function handleCloseDetail() {
    setSelectedMovie(null);
  }

  return (
    <>
      <Header />
      <Main>
        <section className="flex flex-col gap-5 mb-5">
          <h2 className="text-light-primary text-xl font-medium">
            Daftar Saya
          </h2>

          {myList.length === 0 ? (
            <p className="text-light-secondary">
              Belum ada film di daftar Anda.
            </p>
          ) : (
            <div className="relative grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6 gap-6 text-light-primary">
              {myList.map((movie) => (
                <div key={movie.id} className="relative group w-full">
                  <div
                    className="block md:pointer-events-none"
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        handleShowDetail(movie);
                      }
                    }}
                  >
                    <PortraitCard movie={movie} />
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-20 hidden md:block">
                    <HoverCard
                      movie={movie}
                      onShowDetail={() => handleShowDetail(movie)}
                      onToggleMyList={() => handleToggle(movie.id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </Main>
      <Footer />

      {selectedMovie && (
        <div className="fixed inset-0 z-50">
          <PopUp
            movie={selectedMovie}
            onClose={handleCloseDetail}
            toggleMyList={handleToggle}
          />
        </div>
      )}
    </>
  );
};

export default DaftarSaya;
