import { useState } from "react";
import Card from "../molecules/PortraitCard";
import Arrow from "../atoms/Arrow";
import HoverCard from "./HoverCard";
import allMovies from "../../allFilms.json";

const gridColsMap = {
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

const PortraitGrid = ({
  title = "---",
  filterKey = "isTopRated",
  onShowDetail,
  itemsPerPage = 4,
}) => {
  const movies = allMovies.filter((movie) => movie[filterKey]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCard = movies.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < movies.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="flex flex-col gap-5 mb-5">
      <h2 className="text-light-primary text-xl font-medium">{title}</h2>

      <div className="relative">
        <Arrow template="left" onClick={handlePrev}></Arrow>
        <div
          className={`relative flex flex-nowrap sm:grid ${
            gridColsMap[itemsPerPage] || "md:grid-cols-4"
          } overflow-x-auto overflow-y-clip scrollbar-hide sm:overflow-visible gap-4 text-light-primary`}
        >
          {visibleCard.map((movie) => (
            <div
              key={movie.id}
              className="relative group w-[25vw] sm:w-full flex-shrink-0"
            >
              <div
                className="block md:pointer-events-none"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    onShowDetail(movie);
                  }
                }}
              >
                <Card movie={movie} />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-120 transition-opacity duration-300 hover:z-10 pointer-events-none md:pointer-events-auto">
                <HoverCard
                  movie={movie}
                  onShowDetail={() => onShowDetail(movie)}
                />
              </div>
            </div>
          ))}
        </div>
        <Arrow template="right" onClick={handleNext}></Arrow>
      </div>
    </section>
  );
};

export default PortraitGrid;
