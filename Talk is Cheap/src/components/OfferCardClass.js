import React from "react";
import { render } from "react-dom";

class OfferClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { offer, condition } = this.props;
    return (
      <div className="offer-card">
        <h2>{offer}</h2>
        <p>{condition}</p>
      </div>
    );
  }
}

export default OfferClass;
