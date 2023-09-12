import React from "react";
import { render } from "react-dom";
import Child from "./Child";

class OfferClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log(this.props.offer + "constructor");
  }

  componentDidMount() {
    console.log(this.props.offer + "component Did Mount");
  }

  render() {
    console.log(this.props.offer + "render");
    const { offer, condition } = this.props;
    return (
      <div className="offer-card">
        <h2>{offer}</h2>
        <p>{condition}</p>
        <Child info={this.props} />
      </div>
    );
  }
}

export default OfferClass;
