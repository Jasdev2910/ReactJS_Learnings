const element = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"},
[
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag")
] ),
React.createElement("div", {id: "child"},
[
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag")
] )]
);

console.log(element);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

/*

React.createElement() is a function provided by the React library that is used to create and return a virtual 
DOM element. React is a popular JavaScript library for building user interfaces, and it uses a virtual DOM to 
efficiently update and render changes to the actual DOM.

>>>>>>>> React.createElement("Element", {Props}, Child Elements );

The React.createElement() function takes three arguments:

The type of the element: 

This can be either a string representing an HTML tag name (e.g., 'div', 'span', 'h1') 
or a reference to a React component. If it's a reference to a React component, it should be capitalized (e.g., 
MyComponent).

Props (properties) of the element:

These are the attributes you want to set for the element, such as className, 
id, style, and other custom attributes. These are passed as an object.

Child elements:

These are the nested elements inside the element you're creating. They can be other React.createElement() 
calls, strings, numbers, or other valid React components.

ReactDOM.createRoot(): 

This method is used to create a root level "root" that you can use to start rendering 
your React components. Unlike ReactDOM.render(), which renders synchronously and immediately, createRoot() sets
up your application for asynchronous rendering using the concurrent mode features.

Async Rendering: 

When you use createRoot(), the rendering of your components is done asynchronously. This means that instead of 
rendering all updates immediately, React can split rendering work into smaller chunks and prioritize them based 
on importance. This results in a more responsive user interface.

ReactDOM.render(): 

This function is used to render a React element or component into a DOM node. It's the entry 
point of your application where you start rendering your React tree.

*/