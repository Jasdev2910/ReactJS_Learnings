import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h2>React Element</h2>
)

const Title = () => (
    <h1 className="head">
        Functional Component
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        {heading}
        {Title()}
        <Title /> 
        <Title></Title>
        <h2>Functional component Namaste React</h2>
    </div>
)
// component composition -->> component inside a component 
// we can also add functional componets inside the React Element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);