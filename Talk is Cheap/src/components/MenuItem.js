import { MENU_ITEM_IMG } from "../utils/constants";

const MenuItem = (props) => {
  console.log(props);
  return (
    <div className="">
      <div className="flex justify-between my-5 my-6 px-3 py-3">
        <div className="resInfo-menu-item-card-deatils">
          <h3>{props?.menu?.card?.info?.name}</h3>
          <p>{"₹" + props?.menu?.card?.info?.price / 100}</p>
        </div>
        <div className="relative">
          <img
            className="w-36 h-24 object-cover rounded-xl"
            src={MENU_ITEM_IMG + props?.menu?.card?.info?.imageId}
            alt="img"
          ></img>
          <button className="absolute w-16 h-8 top-[80px] left-[40px] rounded-lg bg-slate-100 hover:-translate-y-1 transition text-sm">
            Add+
          </button>
        </div>
      </div>
      <div className="my-3 max-w-3xl h-[0.5px] bg-slate-300 "></div>
    </div>
  );
};

export default MenuItem;
