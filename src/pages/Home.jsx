import React, { useState, useEffect } from "react";
import Main from "../layouts/MenuLayout";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import PortraitGrid from "../components/organisms/PortraitGrid";
import LandscapeGrid from "../components/organisms/LandscapeGrid";
import PopUp from "../components/organisms/PopUpDetail";
import allFilms from "../allFilms.json";
import { toggleMyList } from "../utils/myList";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const myList = getMyList();
    setMovieList(
      allFilms.map((film) => ({
        ...film,
        myList: !!myList.find((m) => m.id === film.id),
      }))
    );
  }, []);

  function handleToggle(movieId) {
    const updated = toggleMyList(movieId);
    setMovieList((prev) =>
      prev.map((m) => ({
        ...m,
        myList: !!updated.find((um) => um.id === m.id),
      }))
    );
  }

  function handleShowDetail(movie) {
    setSelectedMovie((prev) => {
      if (prev?.id === movie.id) return { ...movie };
      return { ...movie };
    });
  }

  function handleCloseDetail() {
    setSelectedMovie(null);
  }

  return (
    <>
      <Header />
      <Main>
        <LandscapeGrid
          onShowDetail={handleShowDetail}
          movieList={movieList}
          toggleMyList={handleToggle}
        />
        <PortraitGrid
          title="Top Rating Film dan Series Hari Ini"
          filterKey="isTopRated"
          itemsPerPage={5}
          onShowDetail={handleShowDetail}
          movieList={movieList}
          toggleMyList={handleToggle}
        />
        <PortraitGrid
          title="Film Trending"
          filterKey="isTrending"
          itemsPerPage={5}
          onShowDetail={handleShowDetail}
          movieList={movieList}
          toggleMyList={handleToggle}
        />
        <PortraitGrid
          title="Rilis Baru"
          filterKey="isNewRelease"
          itemsPerPage={5}
          onShowDetail={handleShowDetail}
          movieList={movieList}
          toggleMyList={handleToggle}
        />
      </Main>
      <Footer />

      {selectedMovie && (
        <div className="fixed inset-0 z-50">
          <PopUp
            movie={movieList.find((m) => m.id === selectedMovie.id)}
            onClose={handleCloseDetail}
            toggleMyList={handleToggle}
            movies={movieList}
          />
        </div>
      )}
    </>
  );
};

export default Home;
