import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PortraitGrid from "../organisms/PortraitGrid";
import Button from "../atoms/Button";

const PopUpDetail = ({ movie, onClose, toggleMyList }) => {
  const [isInMyList, setIsInMyList] = useState(movie.myList);

  const handleToggle = () => {
    toggleMyList(movie.id);
    setIsInMyList((prev) => !prev);
  };

  const myListIcon =
    movie.myList === true ? (
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
    <div className="flex justify-center items-center w-full h-full bg-page-header/80 text-base">
      <div className="relative flex flex-col justify-center items-center w-[90%] md:w-[70%] lg:w-[40%] rounded-xl bg-page-header text-light-primary drop-shadow-xl drop-shadow-light-primary/10">
        {/* Cover Section */}
        <section className="relative w-full">
          {/* Hero Image */}
          <figure className="relative max-h-[200px] sm:max-h-[200px] overflow-hidden">
            <img
              className="w-full aspect-[16/9] object-cover rounded-t-lg"
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
              <Button onClick={handleToggle} variant="clear">
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
        <section className="flex flex-col w-full h-full px-8 pt-4 gap-3">
          {/* Text Section */}
          <div className="flex w-full gap-8 text-xs md:text-sm">
            <div className="flex flex-col w-[55%] gap-2">
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
            <div className="grid grid-cols-[minmax(60px,100px)_10px_1fr] w-[45%] gap-y-2 text-light-secondary">
              <span className="font-medium text-light-primary">Cast</span>
              <span className="text-light-primary">:</span>
              <span className="text-xs">
                Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain
              </span>

              <span className="font-medium text-light-primary">Genre</span>
              <span className="text-light-primary">:</span>
              <span className="text-xs">Aksi, Petualangan, Komedi</span>

              <span className="font-medium text-light-primary">
                Pembuat Film
              </span>
              <span className="text-light-primary">:</span>
              <span className="text-xs">James Gunn</span>
            </div>
          </div>

          {/* Card Section */}
          <PortraitGrid title="Rekomendasi Serupa" itemsPerPage={3} />
        </section>
      </div>
    </div>
  );
};

export default PopUpDetail;
