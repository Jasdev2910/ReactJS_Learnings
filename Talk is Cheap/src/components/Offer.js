import OfferCard from "./OfferCard";
import OfferCardClass from "./OfferCardClass";
import React from "react";

class Offer extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>Offers Available</h1>
        <OfferCardClass offer={"1 child"} condition={"order above 300"} />
        <OfferCardClass offer={"2 child"} condition={"order above 300"} />
      </div>
    );
  }
}

export default Offer;

// const Offer = () => {
//   return (
//     <div>
//       <h1>Offers Available</h1>
//       {/* <OfferCard offer={"Get 100 Cashback"} condition={"order above 400"} /> */}
//       <OfferCardClass
//         offer={"Get 50% Discount"}
//         condition={"order above 300"}
//       />
//     </div>
//   );
// };
