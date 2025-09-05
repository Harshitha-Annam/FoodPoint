import React from "react";
import { IMG_URL } from "../../utils/constants";

const ratingIcon = new URL("../../public/images/star.svg", import.meta.url);
const RestoCard = ({ resto }) => {
  return (
    <div className="resto-card">
      <img src={IMG_URL + resto.info.cloudinaryImageId} />
      <div className="resto-card-content">
        <h3 className="hide-text">{resto.info.name}</h3>
        <div className="resto-rating">
          <span>
            <img src={ratingIcon} />
          </span>
          <h4>{resto.info.avgRating}</h4>
          <p>{" • " + resto.info.sla.slaString}</p>
        </div>

        <p className="hide-text cuisines">{resto.info.cuisines.join(", ")}</p>
        <p className="locality">{resto.info.locality}</p>
      </div>
    </div>
  );
};

export default RestoCard;
