import React from "react";
import ReactDOM from "react-dom/client";
import images from "./src/assets/react.png"
import images1 from "./src/assets/user.png"

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

// Using React.createElement()
const element = React.createElement("div", {className:"title"}, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
    React.createElement("h3", {}, "Heading 3"),
])

// Using JSX
const element1 = (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

// Using Functional Component
const Element2 = () => (
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

// Header Component from Scratch using Functional Component with JSX & CSS
const Header = () => (
    <div className="container">
        <div className="card">
            <img src = {images} alt="React Img"/>
            <div className="row">
                <input type="text" placeholder="Search Here"></input>
                <button>+</button>
            </div>
            <img src = {images1} alt="logo" />
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(element);
// root.render(element1);
// root.render(<Element2 />);
root.render(<Header />);