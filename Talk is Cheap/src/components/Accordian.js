import React, { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isActive, setISActive] = useState(false);

  return (
    <div className="flex-col">
      <div className="max-w-3xl bg-slate-400 flex justify-between">
        <div>title of the Accordian</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div className="max-w-3xl bg-slate-200 h-96">
        As you can see, initially, the accordion is closed. When we click on the
        title, the accordion opens and we can click on it again to close it.
      </div>
    </div>
  );
};

export default Accordian;
