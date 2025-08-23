import React from "react";
import Badge from "../atoms/Badge";

const PortraitCard = ({ movie: { title, poster_path, badges = [] } }) => {
  const badgePositionClass = {
    Top10: "top-0 right-2",
    New: "top-2 left-2",
  };

  return (
    <div className="relative bg-page-header rounded-lg cursor-pointer overflow-hidden">
      <img
        src={poster_path}
        alt={title}
        className="w-full h-full aspect-[2/3] object-cover"
      />

      {badges.map((badge, index) => (
        <div
          key={index}
          className={`absolute ${
            badgePositionClass[badge] || ""
          } shadow-md z-10`}
        >
          <Badge variant={badge} />
        </div>
      ))}
    </div>
  );
};

export default PortraitCard;
