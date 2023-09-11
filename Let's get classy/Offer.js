import OfferCard from "./OfferCard";
import OfferCardClass from "./OfferCardClass";

const Offer = () => {
  return (
    <div>
      <h1>Offers Available</h1>
      <OfferCard offer={"Get 100 Cashback"} condition={"order above 400"} />
      <OfferCardClass
        offer={"Get 50% Discount"}
        condition={"order above 300"}
      />
    </div>
  );
};

export default Offer;
