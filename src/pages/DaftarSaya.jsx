import React, { useState, useEffect } from "react";
import Main from "../layouts/MenuLayout";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import PortraitCard from "../components/molecules/PortraitCard";
import HoverCard from "../components/organisms/HoverCard";
import allFilms from "../allFilms.json";
import PopUp from "../components/organisms/PopUpDetail";
import { toggleMyList, getMyList } from "../utils/myList";

const DaftarSaya = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    setMyList(getMyList());
  }, []);

  function handleToggle(movieId) {
    const updated = toggleMyList(movieId);
    setMyList((prev) =>
      prev
        .filter((m) => updated.find((um) => um.id === m.id)) // hapus yang sudah tidak ada
        .map((m) => ({ ...m, myList: true }))
    );
  }

  function handleShowDetail(movie) {
    setSelectedMovie(movie.id);
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
            movie={
              myList.find((m) => m.id === selectedMovie) ||
              allFilms.find((m) => m.id === selectedMovie)
            }
            onClose={handleCloseDetail}
            toggleMyList={handleToggle}
            movies={allFilms}
          />
        </div>
      )}
    </>
  );
};

export default DaftarSaya;
