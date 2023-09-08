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
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
              props?.menu?.card?.info?.imageId
            }
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
