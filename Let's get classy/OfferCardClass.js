import React from "react";
import { render } from "react-dom";

class OfferClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // this is how we add state variables in class based components, we use useState hook in functional component
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { offer, condition } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="offer-card">
        <h2>{offer}</h2>
        <p>{condition}</p>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h3>Count2: {count2}</h3>
      </div>
    );
  }
}

export default OfferClass;

// class OfferClass extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(props);
//     console.log(this.props.offer + "constructor");
//   }

//   componentDidMount() {
//     console.log(this.props.offer + "component Did Mount");
//   }

//   render() {
//     console.log(this.props.offer + "render");
//     const { offer, condition } = this.props;
//     return (
//       <div className="offer-card">
//         <h2>{offer}</h2>
//         <p>{condition}</p>
//         <Child info={this.props} />
//       </div>
//     );
//   }
// }
