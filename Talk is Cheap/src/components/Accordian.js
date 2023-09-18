import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import UpArrow from "../assets/up-arrow.png";
import DownArrow from "../assets/down-arrow.png";

const Accordian = (props) => {
  const [isActive, setISActive] = useState(false);
  console.log(props?.menu?.card?.card?.itemCards);
  console.log(props?.menu?.card?.card?.itemCards?.card?.info?.id);

  return (
    <div className="flex-col">
      <div
        className="max-w-3xl hover:bg-slate-100 p-5  flex justify-between cursor-pointer"
        onClick={() => setISActive(!isActive)}
      >
        <div>{props?.menu?.card?.card?.title}</div>
        <div>
          {isActive ? (
            <img className="w-4 mr-2" src={UpArrow} alt="up" />
          ) : (
            <img className="w-8" src={DownArrow} alt="down" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="p-5 max-w-3xl bg-slate-50 rounded-b-xl">
          {props?.menu?.card?.card?.itemCards?.map((item, index) => (
            <MenuItem
              key={props?.menu?.card?.card?.itemCards?.card?.info?.id}
              menu={item}
            />
          ))}
        </div>
      )}
      <div className="max-w-3xl h-[10px] bg-slate-200 "></div>
    </div>
  );
};

export default Accordian;
