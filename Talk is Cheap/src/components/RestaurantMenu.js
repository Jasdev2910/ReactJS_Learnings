import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.196971&lng=81.289519&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
    Error("something went wrong");
  };

  //   const { name, cuisines, areaName } =
  //     resInfo?.data?.cards[0]?.card?.card?.info;
  //   const { itemCards } =
  //     resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
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
              <h3>{resInfo?.cards[0]?.card?.card?.info.avgRating}</h3>
            </div>
          </div>
          <div className="resInfo-card-footer">
            <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
            <h3>
              {resInfo?.cards[0]?.card?.card?.info.sla.deliveryTime} Minutes
            </h3>
          </div>
        </div>
        <div className="resInfo-menu">
          {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
            .splice(0)
            .map((item) => (
              <MenuItem menu={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
