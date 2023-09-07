import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  });

  const fetchMenu = async () => {
    const data = await fetch("");
  };

  return (
    <div>
      <h1> name of restaurant </h1>
      <p>cuisines</p>
      <p>address</p>
      <ul>
        <h3>Menu</h3>
        <li>idli</li>
        <li>dosa</li>
        <li>biriyani</li>
        <li>rice</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
