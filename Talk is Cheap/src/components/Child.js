import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log(this.props.info.offer + "sub childs constructor");
  }
  componentDidMount() {
    console.log(this.props.info.offer + "sub child component did mount");
  }
  render() {
    console.log(this.props.info.offer + "sub childs render");
    return <h2>child</h2>;
  }
}
export default Child;
