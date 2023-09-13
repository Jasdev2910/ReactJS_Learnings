import { MENU_ITEM_IMG } from "../utils/constants";

const MenuItem = (props) => {
  console.log(props);
  return (
    <div className="menu-container">
      <div className="resInfo-menu-item-card">
        <div className="resInfo-menu-item-card-deatils">
          <h3>{props?.menu?.card?.info?.name}</h3>
          <p>{"₹" + props?.menu?.card?.info?.price / 100}</p>
        </div>
        <div className="resInfo-menu-item-card-deatils">
          <img
            src={MENU_ITEM_IMG + props?.menu?.card?.info?.imageId}
            alt="img"
          ></img>
          <button>Add+</button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default MenuItem;
