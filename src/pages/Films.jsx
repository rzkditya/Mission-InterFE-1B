import React, { useEffect } from "react";
import Main from "../layouts/MenuLayout";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import PortraitCard from "../components/molecules/PortraitCard";
import HoverCard from "../components/organisms/HoverCard";
import useAllMovies from "../store/useAllMovies";

const Series = () => {
  const { movies, fetchAllMovies, loading } = useAllMovies();

  useEffect(() => {
    fetchAllMovies();
  }, [fetchAllMovies]);

  const films = movies.filter((movie) => movie.category === "Series");

  return (
    <>
      <Header />
      <Main>
        <section className="flex flex-col gap-5 mb-5">
          <h2 className="text-light-primary text-xl font-medium">Films</h2>
          <div className="relative grid grid-cols-5 gap-6 text-light-primary">
            {films.map((movie) => (
              <div key={movie.id} className="relative group w-full">
                <PortraitCard movie={movie} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-20">
                  <HoverCard movie={movie} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
};

export default Series;
