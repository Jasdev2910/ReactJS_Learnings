import Card from "./Card";
import search from "../assets/search.png";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSerachText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("useeffect called");
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.196971&lng=81.289519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(typeof listOfRes);
  };

  console.log("body called");

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <button
        className="filter-btn"
        onClick={() => {
          const newResList = filteredrestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          console.log(newResList);
          setFilteredRestaurant(newResList);
        }}
      >
        Filter
      </button>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Restauraunts"
          value={searchText}
          onChange={(e) => {
            setSerachText(e.target.value);
          }}
        />
        <button
          type="search"
          onClick={() => {
            const filteredList = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          <img alt="search-icon" src={search} />
        </button>
      </div>

      <h2 className="heading">Restauraunts in Your Area</h2>

      <div className="card-container">
        {filteredrestaurant.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
