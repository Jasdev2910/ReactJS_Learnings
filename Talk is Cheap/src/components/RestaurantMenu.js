import { useParams } from "react-router-dom";
import useRestauranrMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import React, { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestauranrMenu(resId); //custom Hook
  const [showIndex, setShowIndex] = useState(0);

  console.log(resInfo);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-3xl mx-auto mt-5">
      <div className="flex-col">
        <div className="flex-col">
          <div className="flex justify-between items-center">
            <div className="mx-3 py-5">
              <h1 className="text-3xl">
                {resInfo?.cards[0]?.card?.card?.info?.name}
              </h1>
              <p className="font-light py-1">
                {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
              </p>
              <p className="font-light py-1">
                {resInfo?.cards[0]?.card?.card?.info?.areaName}
              </p>
            </div>
            <div className="w-10 text-center text-lg">
              <h3>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</h3>
            </div>
          </div>
          <div className="max-w-3xl h-[0.5px] bg-slate-300 "></div>
          <div className="flex justify-between p-3">
            <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3>
              {resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime} Minutes
            </h3>
          </div>
        </div>
        <div className="max-w-3xl h-[0.5px] bg-slate-300 "></div>
        <div className="flex-col">
          {categories?.map((category, index) => (
            <Accordian
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showMenuItem={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

// const { name, cuisines, areaName, avgRating, costForTwoMessage } =
//   resInfo?.cards[0]?.card?.card?.info;

// const { itemCards } =
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

// const { itemCards2 } =
//   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

// console.log(itemCards);

// {(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.hasOwnProperty(
//   "carousel"
// )
//   ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
//       ?.card?.card?.itemCards
//   : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
//       ?.card?.card?.itemCards
// )?.map((item, index) => (
//   <MenuItem key={index} menu={item} />
// ))}
