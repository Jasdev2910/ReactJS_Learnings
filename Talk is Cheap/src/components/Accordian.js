import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const Accordian = (props) => {
  const [isActive, setISActive] = useState(false);

  return (
    <div className="flex-col">
      <div
        className="max-w-3xl bg-slate-200 p-5  flex justify-between rounded-t-xl cursor-pointer"
        onClick={() => setISActive(!isActive)}
      >
        <div>{props?.menu?.card?.card?.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="p-5 max-w-3xl bg-slate-50 rounded-b-xl">
          {props?.menu?.card?.card?.itemCards?.map((item, index) => (
            <MenuItem key={index} menu={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordian;
