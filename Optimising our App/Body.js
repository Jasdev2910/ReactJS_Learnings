import Card from "./Card";
import search from "../assets/search.png";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredrestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSerachText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_LIST_API);
    const json = await response.json();
    console.log(json);
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check your Internet connection.
      </h1>
    );
  }

  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <button
        className="filter-btn"
        onClick={() => {
          const newResList = filteredrestaurant?.filter(
            (res) => res?.info?.avgRating > 4
          );
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
            const filteredList = listOfRes?.filter((res) =>
              res?.info?.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          <img alt="search-icon" src={search} />
        </button>
      </div>

      <h2 className="heading">Restauraunts in Your Area</h2>

      <div className="card-container">
        {filteredrestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
