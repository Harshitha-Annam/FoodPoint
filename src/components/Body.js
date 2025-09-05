import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import RestoCard from "./RestoCard";
import { restoList } from "../../utils/mockData";
import Shimmer from "./Shimmer";
const noItemsImg = new URL("../../public/images/catmeme.jpg", import.meta.url);
import { API_URL } from "../../utils/constants";

const Body = () => {
  const [dataList, setDataList] = useState(null);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    console.log(json);
    setDataList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    setFilterList(
      dataList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setSearchText("");
  };

  if (dataList === null) {
    return (
      <main>
        <Shimmer />
      </main>
    );
  }
  return (
    <main className="body">
      <div className="resto-header">
        <input
          className="search-text"
          value={searchText}
          placeholder="search restaurants"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button
          onClick={() => {
            setFilterList(dataList);
          }}>
          All
        </button>
        <button
          onClick={() => {
            setFilterList(dataList.filter((res) => res.info.avgRating > 4.5));
          }}>
          Ratings 4.0+
        </button>
        <button
          onClick={() => {
            setFilterList(
              dataList.filter((res) => {
                res.info.veg;
              })
            );
          }}>
          Pure Veg
        </button>
        <button
          onClick={() => {
            setFilterList(
              dataList.filter((res) => res.info.sla.deliveryTime < 30)
            );
          }}>
          Fast Delivery
        </button>
      </div>
      <div className="resto-container">
        {filterList.length == 0 ? (
          <img src={noItemsImg} />
        ) : (
          // <h1>No Items.</h1>
          filterList.map((res, id) => (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <RestoCard resto={res} />
            </Link>
          ))
        )}
      </div>
      <div className="resto-container"></div>
    </main>
  );
};

export default Body;
