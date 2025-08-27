import React, { useState, useEffect } from "react";
import Main from "../layouts/MenuLayout";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import PortraitGrid from "../components/organisms/PortraitGrid";
import LandscapeGrid from "../components/organisms/LandscapeGrid";
import PopUp from "../components/organisms/PopUpDetail";
import allFilms from "../allFilms.json";
import { toggleMyList, getMyList } from "../utils/myList";
import { useGet, usePost, useDelete } from "../services/api/api-index";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userId = loggedInUser?.id;
  const { data: myListData, loading } = useGet(`myList?userId=${userId}`);
  const { postData } = usePost();
  const { deleteData } = useDelete();

  useEffect(() => {
    if (!userId) return;
    const myList = getMyList(userId);
    setMovieList(
      allFilms.map((film) => ({
        ...film,
        myList: !!myList.filter((m) => m.id === film.id),
      }))
    );
  }, [userId]);

  async function handleToggle(movieId) {
    const exists = myListData?.find(
      (m) => m.movieId === movieId && m.userId === userId
    );

    if (exists) {
      await deleteData(`myList/${exists.id}`);
    } else {
      await postData("myList", { userId, movieId });
    }
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
