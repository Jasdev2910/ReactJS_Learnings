import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestauranrMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestauranrMenu(resId); //custom Hook

  //   const { name, cuisines, areaName, avgRating, costForTwoMessage } =
  //     resInfo?.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  //   console.log(itemCards);
  return (
    <div className="menu">
      <div className="resInfo-container">
        <div className="resInfo-card">
          <div className="resInfo-card-header">
            <div className="resInfo-card-header-name">
              <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
              <p>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</p>
              <p>{resInfo?.cards[0]?.card?.card?.info?.areaName}</p>
            </div>
            <div className="resInfo-card-header-rating">
              <h3>{resInfo?.cards[0]?.card?.card?.info?.avgRating}</h3>
            </div>
          </div>
          <div className="resInfo-card-footer">
            <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3>
              {resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime} Minutes
            </h3>
          </div>
        </div>
        <div className="resInfo-menu">
          {(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.hasOwnProperty(
            "carousel"
          )
            ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                ?.card?.card?.itemCards
            : resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                ?.card?.card?.itemCards
          )?.map((item) => (
            <MenuItem menu={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
