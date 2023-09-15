import { CDN } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName } = resData?.info;

  return (
    <div className="flex-col w-[250px] h-80 m-3 p-3 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition">
      <img
        className="w-[230px] h-[170px] rounded-3xl"
        alt="img"
        src={CDN + resData.info.cloudinaryImageId}
      />
      <h2 className="text-left font-semibold text-xl line-clamp-1">{name}</h2>
      <h3 className="text-left font-normal ">{avgRating}/5</h3>
      <h4 className="text-left line-clamp-1">{cuisines.join(", ")}</h4>
      <h4 className="text-left overflow-hidden ">{areaName}</h4>
    </div>
  );
};

export default Card;
