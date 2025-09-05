import Shimmer from "./Shimmer";
import { useState } from "react";
import { IMG_URL, MENU_URL } from "../../utils/constants";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router";

const RestoMenu = () => {
  const [restoInfo, setRestoInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const { resId } = useParams();
  const fetchMenu = async () => {
    const url = MENU_URL + resId;
    const data = await fetch(url);
    // console.log(MENU_URL);
    const json = await data.json();
    // console.log(json);
    setRestoInfo(json.data);
    console.log(restoInfo);
  };
  if (restoInfo === null)
    return (
      <main className="body">
        <Shimmer />
      </main>
    );
  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    sla,
    areaName,
    cuisines,
  } = restoInfo?.cards[2]?.card?.card?.info;
  const recMenu =
    restoInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];
  console.log(recMenu);
  console.log(name);
  return (
    <main className="body">
      <h1>{name}</h1>
      <p>{avgRatingString + "(" + totalRatingsString + ")"}</p>
      <p>{costForTwoMessage}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{"Outlet " + areaName}</p>
      <div>
        <ul>
          {recMenu.map((res) => (
            <li key={res.card.info.id}>
              <img src={IMG_URL + res.card.info.imageId} />
              <h2>{res.card.info.name}</h2>
              <p className="hide-desc">{res.card.info.description}</p>
              <p>
                Rs{" "}
                {res.card.info.originalPrice / 100 ||
                  res.card.info.defaultPrice / 100}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default RestoMenu;
