import { CDN } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, areaName } = resData?.info;

  return (
    <div className="card">
      <img alt="img" src={CDN + resData.info.cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{avgRating}/5</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default Card;
