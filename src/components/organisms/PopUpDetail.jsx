import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../molecules/PortraitCard";
import HoverCard from "./HoverCard";
import Button from "../atoms/Button";

const PopUpDetail = ({ movie, onClose, toggleMyList, movies }) => {
  const myListIcon = movie.myList ? (
    <FontAwesomeIcon
      icon="fa-solid fa-heart"
      style={{ color: "#cc3333" }}
      className="w-4 p-2 rounded-full bg-light-primary"
    />
  ) : (
    <FontAwesomeIcon
      icon="fa-solid fa-plus"
      className="w-4 p-2 rounded-full outline-1 outline-light-disabled"
    />
  );

  return (
    <div className="flex justify-center items-center w-full h-full bg-page-header/80">
      <div className="relative flex flex-col justify-center items-center w-[90%] md:w-[70%] lg:w-[50%] rounded-xl bg-page-header text-md text-light-primary drop-shadow-xl drop-shadow-light-primary/10">
        {/* Cover Section */}
        <section className="relative w-full">
          {/* Hero Image */}
          <figure className="relative max-h-[200px] md:max-h-[300px] overflow-hidden">
            <img
              className="w-full object-cover rounded-t-lg"
              src={movie.poster_path}
              alt="Hero Image"
            />
            <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-page-header/100 from-5% via-page-header/80 via-50% to-transparent z-2" />
          </figure>

          {/* Exit Button */}
          <Button
            onClick={onClose}
            variant="clear"
            className="absolute top-5 right-5"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              className="w-4 p-1 rounded-full bg-page-header/80"
            />
          </Button>

          {/* Cover Content */}
          <section className="absolute bottom-[10%] left-0 flex flex-col w-full px-8 py-4 gap-3 z-3">
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <div className="flex items-center gap-4">
              <Button className="py-1 px-3 rounded-full  bg-primary-300">
                Mulai
              </Button>
              <Button onClick={() => toggleMyList(movie.id)} variant="clear">
                {myListIcon}
              </Button>
              <Button variant="clear" className="absolute right-8">
                <FontAwesomeIcon
                  icon="fa-solid fa-volume-xmark"
                  className="w-4 p-2 rounded-full outline-1 outline-light-disabled"
                />
              </Button>
            </div>
          </section>
        </section>

        {/* Content Section */}
        <section className="flex flex-col w-full px-8 py-4 gap-3 lg:gap-6">
          {/* Text Section */}
          <div className="flex w-full gap-8">
            <div className="flex flex-col w-[55%] gap-3 text-xs md:text-sm">
              <div className="flex gap-4 text-light-secondary">
                <div>2023</div>
                <div>2j 29m</div>
                <div className="rounded-sm px-3 outline-1 outline-light-primary text-light-primary">
                  {movie.age_rating}
                </div>
              </div>
              <div>
                <p>
                  Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan
                  timnya untuk mempertahankan alam semesta dan salah satu dari
                  mereka - sebuah misi yang bisa berarti akhir dari Penjaga jika
                  tidak berhasil.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(60px,100px)_10px_1fr] w-[45%] gap-y-2 text-xs md:text-sm text-light-secondary">
              <span className="font-medium text-light-primary">Cast</span>
              <span className="text-light-primary">:</span>
              <span>Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain</span>

              <span className="font-medium text-light-primary">Genre</span>
              <span className="text-light-primary">:</span>
              <span>Aksi, Petualangan, Komedi</span>

              <span className="font-medium text-light-primary">
                Pembuat Film
              </span>
              <span className="text-light-primary">:</span>
              <span>James Gunn</span>
            </div>
          </div>

          {/* Card Section */}
          <div className="flex  flex-col gap-4">
            <h2 className="text-light-primary text-xl font-bold">
              Rekomendasi Serupa
            </h2>
            <div className="relative">
              <div className="relative flex flex-nowrap scrollbar-hide gap-4 text-light-primary">
                {movies.slice(0, 3).map((recMovie) => (
                  <div key={recMovie.id} className="relative group shrink grow">
                    <Card movie={recMovie} />

                    <div className="absolute -top-2 -left-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                      <HoverCard movie={recMovie} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PopUpDetail;
