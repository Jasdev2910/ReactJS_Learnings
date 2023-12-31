# React & React DOM

**React:**

_Purpose:_

React is a JavaScript library for building user interfaces. It provides a way to define and manage UI components, manage state and props, and handle the rendering of components.

_Components:_

React allows you to define components using either JavaScript classes or functional components. Components are reusable building blocks that encapsulate a piece of UI and its behavior.

_Virtual DOM:_

React introduces a virtual DOM, a lightweight representation of the actual DOM. It efficiently updates and renders changes to the UI by comparing the virtual DOM with the real DOM and applying only the necessary updates.

_JSX:_

React uses JSX (JavaScript XML) syntax to define components. JSX allows you to write HTML-like code within your JavaScript, making it easier to visualize and create UI structures.

**ReactDOM:**

_Purpose:_

ReactDOM is a package that provides methods specifically for interacting with the actual DOM (Document Object Model) of a web page.

_Rendering:_

The main function of ReactDOM is to render React components into the actual DOM. It bridges the gap between the virtual DOM managed by React and the real DOM in the browser.

_ReactDOM.render():_

This function is used to render a React element or component into a DOM node. It's the entry point of your application where you start rendering your React tree.

### NPM (Package Manager)

• It is a package manager for JavaScript programming language and is primarily used to manage and share open-source packages of code, also known as packages or modules. These packages can include libraries, frameworks, tools, and other code components that developers can use to build applications more efficiently.

• NPM is tightly integrated with Node.js, which is a runtime environment that allows you to execute JavaScript code on the server-side.

• NPM enables developers to easily install, update, and manage dependencies (third-party libraries and tools) required for their projects.

• It also provides a platform for developers to publish their own packages, making them available for others to use.

#### Dependencies

"Dependencies" refer to external libraries, modules, packages, or frameworks that a project relies on to function properly. Dependencies are code components that are used to extend the functionality of your application without having to write everything from scratch.

Here's how dependencies work:

Importing or Including:

In programming, you often use functions, classes, or other code components created by someone else. Rather than writing all of this code yourself, you can include or import it from external sources. These external sources are usually maintained by other developers and are often hosted in package repositories.

Package Repositories:

A package repository is a centralized place where developers publish their code components (packages) for others to use. For example, in the JavaScript ecosystem, npm (Node Package Manager) and Yarn are popular package managers that allow you to easily download and manage these packages.

Dependency Management:

When you start a new project, you specify which external packages (dependencies) your project needs in order to function properly. These dependencies are listed in a configuration file (like package.json in Node.js projects). This file also specifies the version ranges of the packages you need.

Installation:

Once you have defined your project's dependencies, you use a package manager to install them. The package manager fetches the required packages from the package repository and installs them in your project's directory.

Running the Project:

With the dependencies installed, you can now use the code from those packages in your own project.

Updates and Maintenance:

As time goes on, the maintainers of the packages you're using may release updates to fix bugs, add features, or improve performance. It's important to periodically update your dependencies to benefit from these improvements. However, updating dependencies can sometimes introduce compatibility issues or require adjustments in your code.

Common package managers for various programming languages include:

- npm (Node Package Manager): Used for JavaScript and Node.js projects.
- Yarn: Another package manager for JavaScript and Node.js, developed as an alternative to npm.

Two types of Dependencies:

- Runtime Dependencies:Runtime dependencies are the components that your application relies on to function properly when it's running or deployed in a live environment. These dependencies are essential for the core functionality of your application. They are required for the application to operate as intended and provide the desired features to users. For example, if you're building a web application, runtime dependencies might include a front-end framework like React or a back-end framework like Express.js.

- Development Dependencies:Development dependencies are components that are necessary during the development and testing phases but are not required for the application to run in a production environment. These dependencies include tools, libraries, and utilities that help with tasks like testing, code linting, bundling, and development server setup. They facilitate the development process but are not included in the final deployment. An example of a development dependency is a testing library like Jest or a build tool like Webpack.

Separating runtime and development dependencies serves several purposes:

- Efficiency: It reduces the size of the final deployment package by excluding development-specific tools and dependencies that aren't needed in a live environment.

- Security: By not including development dependencies in the deployed application, potential vulnerabilities in those tools don't affect the production environment.

- Speed: The separation allows deployment to be faster since only the essential runtime dependencies need to be transferred to the production server.

- Clarity: Clearly distinguishing between the two types of dependencies helps developers understand the roles of different components in the project.

#### what is a Bundler

A bundler is a tool used in web development to combine and package multiple files, such as JavaScript, CSS, and other assets, into a single file (or sometimes multiple files) for more efficient delivery to web browsers. Bundlers play a crucial role in optimizing the performance of web applications by reducing the number of requests made to the server and minimizing the size of the transferred data.

In modern web development, where applications are often built using modular and component-based architectures, developers create code in multiple files to organize and manage their projects. However, when these projects are ready for deployment, it's more efficient to deliver a smaller number of optimized files to the browser, as each additional HTTP request can introduce latency and slow down page loading.

Bundlers typically do the following:

- Dependency Resolution: Bundlers analyze the codebase to determine which files depend on each other. This includes handling imports, requires, and other module loading mechanisms.

- Code Transformation: Bundlers can perform transformations on the code using tools like Babel, which allows developers to use the latest JavaScript features while ensuring compatibility with older browsers.

- Minification: Bundlers can remove unnecessary whitespace, comments, and perform other optimizations to reduce the size of the code.

- Bundle Generation: The bundler combines all the relevant files into a single (or sometimes multiple) bundle(s). This bundle contains the entire application logic and dependencies, reducing the number of requests needed to load the application.

- Asset Management: Bundlers can also handle other types of assets, like images, fonts, and stylesheets, optimizing them for delivery.

Some popular bundlers in the JavaScript ecosystem include:

- Webpack: One of the most widely used bundlers, Webpack is highly configurable and supports a wide range of features beyond bundling, such as code splitting, hot module replacement, and more.

- Parcel: Known for its zero-config setup, Parcel offers a simple and fast way to bundle projects without requiring extensive configuration.

#### package.json & package-lock.json

package.json and package-lock.json are two important files used in Node.js projects to manage dependencies, specify project metadata, and ensure consistent and reproducible builds. They work together to define the project's dependencies and their versions.

package.json:

package.json is a configuration file in JSON format that contains information about your project, including its name, version, author, description, entry points, scripts, and most importantly, its dependencies. It serves as a central source of information and instructions for your project.

Key purposes of package.json:

- Dependency Listing: The "dependencies" and "devDependencies" sections list the runtime and development dependencies respectively. Dependencies are listed along with their version ranges or specific versions.

- Scripts: You can define custom scripts that automate common tasks, such as running tests, building the project, starting a development server, and more.

- Project Metadata: Information about the project, its license, author, description, repository, and other metadata can be included.

- Version Management: package.json helps manage the versions of dependencies used in your project, ensuring consistent behavior across different environments and builds.

package-lock.json:

package-lock.json is a file generated by npm when you install or update dependencies. It's designed to provide a detailed, deterministic snapshot of the exact versions and resolved dependencies of your project at a given point in time.

Key purposes of package-lock.json:

- Dependency Locking: It prevents unexpected changes to dependencies by locking their exact versions. This ensures that the same versions are used across different development and deployment environments.

- Reproducible Builds: Developers and teams can achieve consistent builds, regardless of the time when dependencies were initially installed.

- Dependency Tree: It provides a complete, nested view of the resolved dependency tree, showing how different packages depend on each other.

It's important to note that package.json is meant to be edited manually by developers to specify project details and dependency requirements, while package-lock.json is automatically generated by npm and should not be manually edited. Both files should be committed to version control systems to ensure consistent development across team members and environments.

###

## Commands learned

```bash
  npm init
```

npm init is a command used in Node.js projects to create a package.json file. The package.json file is a metadata file that holds various information about your project, including its name, version, description, dependencies, scripts, and more.

###

```bash
  npm install -D parcel
```

The command `npm install -D parcel` is used to install the Parcel bundler as a development dependency in your Node.js project. Parcel is a web application bundler that simplifies the process of building and bundling front-end assets like HTML, CSS, JavaScript, and other static files.

Here's what the command does:

- `npm install`: This command is used to install packages (dependencies) in your Node.js project.
- `-D` or `--save-dev`: This flag indicates that you want to install the package as a development dependency. Development dependencies are typically tools, libraries, or other packages that are only needed during development and not in the production version of your application.

So, when you run `npm install -D parcel`, npm will download and install the Parcel package from the npm registry and add it to your project's `package.json` file under the `devDependencies` section. The `devDependencies` section includes packages that are used during development, but are not necessary for the final production build of your application.

After Parcel is installed as a development dependency, you can use it to bundle your web application's assets by creating an appropriate configuration (like an HTML entry point and associated JavaScript and CSS files). You can then define scripts in your `package.json` file to run Parcel commands, which can include bundling, serving your application, and more.

###

```bash
  npm i react
```

The command `npm i react` is used to install the React library as a dependency in your Node.js project. React is a popular JavaScript library for building user interfaces, particularly for web applications.

Here's what the command does:

- `npm install`: This command is used to install packages (dependencies) in your Node.js project.
- `react`: This is the name of the package you want to install. In this case, you're installing the React library.

When you run `npm i react`, npm will download and install the React package from the npm registry and add it to your project's `package.json` file under the `dependencies` section. The `dependencies` section includes packages that are required for your application to function correctly.

###

```bash
  npm i react-dom
```

The command `npm i react-dom` is used to install the `react-dom` package as a dependency in your Node.js project. `react-dom` is a package that provides the integration between React and the browser's Document Object Model (DOM). It's used to render React components into the actual DOM elements of a web page.

Here's what the command does:

- `npm install`: This command is used to install packages (dependencies) in your Node.js project.
- `react-dom`: This is the name of the package you want to install. In this case, you're installing the `react-dom` package.

When you run `npm i react-dom`, npm will download and install the `react-dom` package from the npm registry and add it to your project's `package.json` file under the `dependencies` section. The `dependencies` section includes packages that are required for your application to function correctly.

The combination of the `react` and `react-dom` packages is essential for building React applications. While the `react` package provides the core functionality for creating and managing React components, the `react-dom` package is responsible for rendering those components into the DOM and updating them efficiently as the application state changes.

Once you have `react-dom` installed, you can use it in combination with the `react` package to build and render React components in your web application.

###

```bash
  npx parcel index.html
```

The command `npx parcel index.html` is used to bundle and serve a web application using the Parcel bundler. Here's what the command does:

- `npx`: This is a tool that comes with npm and is used to execute packages that are not globally installed. It allows you to run packages as if they were globally installed, even if they are not.
- `parcel`: This is the name of the package you want to execute using `npx`. In this case, you're using Parcel.
- `index.html`: This is the entry HTML file for your web application. Parcel will start the bundling process from this entry point and automatically determine and bundle all the required assets (such as JavaScript, CSS, and other files) linked to this HTML file.

When you run `npx parcel index.html`, Parcel will perform the following steps:

1. It will start the bundling process, analyzing the dependencies in your HTML file and other linked files.
2. It will bundle and optimize these assets for production or development based on your configuration.
3. It will serve your application locally in a development server that provides live reloading and other development features.
4. It will open your default web browser and load your application.

This command is useful for quickly setting up a development environment for your web application using Parcel. Parcel will handle the bundling and serving of your assets, making it easier to focus on coding and building your application without getting bogged down in complex configuration setups.

###

```bash
  npm parcel build index.html
```

The command `npx parcel build index.html` is used to create a production-ready build of a web application using the Parcel bundler. Here's what the command does:

- `npx`: This tool allows you to run packages that are not globally installed as if they were.
- `parcel`: The name of the package you want to execute using `npx`. In this case, it's Parcel.
- `build`: This is a command provided by Parcel to trigger the build process.
- `index.html`: This is the entry HTML file for your web application. Parcel will start the bundling process from this entry point and bundle all the required assets (JavaScript, CSS, etc.) linked to this HTML file.

When you run `npx parcel build index.html`, Parcel will perform the following steps:

1. It will analyze the dependencies and assets linked to the `index.html` file.
2. It will bundle and optimize these assets for production.
3. It will generate minified and optimized output files (JavaScript, CSS, etc.) in a `dist` or `build` directory by default. This directory will be created in your project's root folder.
4. The generated files will have hashed filenames to prevent issues with caching.
5. The build will be ready for deployment to a production server.

This command is used when you're preparing your application for deployment to a live server or hosting platform. The production build is optimized for performance, with minimized file sizes and various optimizations applied.

### JSX

JSX (JavaScript XML) is an extension to the JavaScript language that allows you to write HTML-like code within your JavaScript code. It's commonly used with libraries like React to describe the structure and appearance of user interfaces. JSX provides a more readable and concise way to create and manipulate the DOM elements compared to using JavaScript methods directly.

In JSX, you can write HTML-like syntax directly in your JavaScript code, and it gets transformed into regular JavaScript function calls. Here's a simple example of JSX code:

```jsx
const element = <h1>Hello, JSX!</h1>;
```

In this example, the JSX expression `<h1>Hello, JSX!</h1>` gets transformed into a JavaScript object using React's createElement function, which in turn creates a virtual representation of the DOM element `<h1>Hello, JSX!</h1>`.

Here's how the above JSX code might look after transformation:

```javascript
const element = React.createElement("h1", null, "Hello, JSX!");
```

JSX allows you to embed JavaScript expressions within curly braces `{}` to dynamically generate content. For example:

```jsx
const name = "John";
const element = <h1>Hello, {name}</h1>;
```

JSX also allows you to use attributes and event handlers, just like in regular HTML:

```jsx
const handleClick = () => {
  alert("Button clicked!");
};

const buttonElement = <button onClick={handleClick}>Click me</button>;
```

It's important to note that JSX needs to be transpiled to regular JavaScript using tools like Babel before it can be understood by browsers, as browsers don't natively understand JSX syntax. Libraries like React typically come with build tools that handle this transformation for you.

In summary, JSX is a powerful syntax extension that makes it easier to work with UI components in JavaScript, particularly when used with libraries like React. It combines HTML-like syntax with JavaScript expressions and allows you to build dynamic and interactive user interfaces more intuitively.

### Benefits of JSX

JSX (JavaScript XML) offers several benefits when used in combination with libraries like React for building user interfaces:

1. **Readability and Familiarity:** JSX allows developers to write UI components in a syntax that closely resembles HTML. This similarity makes it more intuitive for both web developers and designers to understand and work with the codebase.

2. **Code Clarity:** JSX can improve the clarity of code by clearly defining the structure of the UI components. This helps in quickly identifying the hierarchy of elements and their relationships.

3. **Embedding Expressions:** JSX enables developers to embed JavaScript expressions within curly braces `{}` directly in the markup. This makes it easy to interpolate dynamic data into the UI, improving flexibility and reducing the need for complex concatenation or manipulation.

4. **Component Reusability:** JSX encourages the creation of reusable UI components, which is a fundamental concept in libraries like React. Developers can compose components together to build complex interfaces, fostering a modular and maintainable codebase.

5. **Type Safety and Error Checking:** When used with tools like TypeScript or Flow, JSX can provide enhanced type safety. This means that type-related errors can be caught at compile time, reducing runtime issues and improving overall code quality.

6. **Optimized Rendering:** Libraries like React use a virtual DOM to efficiently update only the parts of the actual DOM that need to change. JSX simplifies the process of describing how the UI should look, allowing React to optimize the rendering process.

In summary, JSX brings numerous advantages to the development of user interfaces, making the code more readable, expressive, and maintainable. Its combination of HTML-like syntax with JavaScript expressions enhances both developer productivity and the quality of the end-user experience.

#### Bable and Parcel role in JSX

Babel is responsible for transforming JSX syntax into standard JavaScript, making it compatible with browsers. Parcel, on the other hand, is a bundler that automatically handles transformations, including JSX, as part of its build process, making it easy to work with JSX and other assets in your web projects.

## React Components

In React, components are the building blocks of a user interface. They are reusable, self-contained, and encapsulate a specific piece of UI and its logic. React applications are typically composed of multiple components that work together to create a complete user interface. Components can be categorized into two main types: class components and functional components (with hooks).

Here's an overview of React components:

1. **Class Components:**

   - Class components are the older way of defining React components. They are defined as ES6 classes that extend the `React.Component` base class.
   - Class components have a `render` method that returns the JSX (JavaScript XML) for the component's UI.
   - They can have state (using `this.state`) and lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`) for handling side effects and component updates.
   - Class components are still in use but are less common now due to the introduction of functional components with hooks.

   Example of a class component:

   ```jsx
   import React, { Component } from "react";

   class MyComponent extends Component {
     render() {
       return <div>Hello, {this.props.name}</div>;
     }
   }
   ```

2. **Functional Components:**

   - Functional components are a more modern and concise way of defining React components. They are JavaScript functions that return JSX.
   - With the introduction of React Hooks (e.g., `useState`, `useEffect`), functional components can manage state and side effects, making them more powerful and flexible.
   - Functional components are easier to read, write, and test compared to class components.

   Example of a functional component:

   ```jsx
   import React from "react";

   function MyComponent(props) {
     return <div>Hello, {props.name}</div>;
   }
   ```

3. **Props:**

   - Both class and functional components can receive data from their parent components through props (short for properties).
   - Props are read-only and help pass data down the component tree, allowing for dynamic rendering and customization of components.

   Example of using props in a component:

   ```jsx
   function Greeting(props) {
     return <div>Hello, {props.name}!</div>;
   }

   // Usage:
   <Greeting name="John" />;
   ```

4. **Component Composition:**

   - React components can be composed together to build complex UIs. You can use one component within another, creating a hierarchy of components that represent different parts of your application.

   Example of component composition:

   ```jsx
   function App() {
     return (
       <div>
         <Header />
         <MainContent />
         <Footer />
       </div>
     );
   }
   ```

5. **State Management:**

   - In functional components, you can use the `useState` Hook to manage local component state.
   - State allows components to store and update data that can change over time, triggering re-renders when the state changes.

   Example of state management with `useState`:

   ```jsx
   import React, { useState } from "react";

   function Counter() {
     const [count, setCount] = useState(0);

     const increment = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
       </div>
     );
   }
   ```

React components are the building blocks that make it possible to create interactive, dynamic, and reusable user interfaces. Whether you're using class components or functional components with hooks, understanding how to create and use components is fundamental to React development.

## Props

In React, `props` (short for "properties") are a way to pass data from a parent component to a child component. They allow you to make your components dynamic and reusable by configuring their behavior and appearance based on the data they receive.

Here's how props work in React:

1. **Passing Props:**

   - To pass props from a parent component to a child component, you include them as attributes in the JSX when rendering the child component. These attributes are then accessible as properties in the child component.
   - You can pass any JavaScript value as a prop, including strings, numbers, objects, or even functions.

   ```jsx
   // ParentComponent.js
   import React from "react";
   import ChildComponent from "./ChildComponent";

   function ParentComponent() {
     const name = "John";
     return <ChildComponent name={name} />;
   }
   ```

2. **Accessing Props:**

   - In the child component, you can access the props by defining them as function parameters in a functional component or by using the `this.props` object in a class component.
   - Once you access props, you can use them to customize the content, appearance, or behavior of the child component.

   ```jsx
   // ChildComponent.js
   import React from "react";

   function ChildComponent(props) {
     return <div>Hello, {props.name}!</div>;
   }
   ```

   In this example, the `name` prop is used to personalize the greeting in the `ChildComponent`.

3. **Default Props:**

   - You can specify default values for props using the `defaultProps` property in a component. If a prop is not provided when rendering the component, the default value will be used.

   ```jsx
   // ChildComponent.js
   import React from "react";

   function ChildComponent(props) {
     return <div>Hello, {props.name}!</div>;
   }

   ChildComponent.defaultProps = {
     name: "Guest",
   };
   ```

   If `name` is not passed as a prop when rendering `ChildComponent`, it will default to "Guest."

4. **Using Props in Components:**

   - Once you've passed props to a component, you can use them inside the component's JSX, JavaScript expressions, or logic to create dynamic and customizable UI elements.

   ```jsx
   function ChildComponent({ name, isAdmin }) {
     return (
       <div>
         <p>Hello, {name}!</p>
         {isAdmin && <p>You are an admin.</p>}
       </div>
     );
   }
   ```

   In this example, the `isAdmin` prop is used to conditionally render an "admin" message.

Props are a fundamental concept in React that enables you to create reusable and configurable components. They allow you to customize how components behave and what they display based on the data you pass to them, making your React applications more flexible and dynamic.

#### Config driven UI

A "config-driven UI" refers to a user interface (UI) design approach where the behavior, appearance, and content of the UI components are primarily determined by configuration or data-driven settings rather than being hard-coded in the application's codebase. This approach offers several advantages in terms of flexibility, maintainability, and adaptability.

## Hooks

React Hooks are functions that were introduced in React 16.8 to allow functional components to manage state, side effects, and other React features that were previously available only in class components. Hooks provide a more concise and readable way to work with component logic, making it easier to reuse code and manage component state. Here are some of the most commonly used React Hooks:

1. **useState:** The `useState` Hook is used to add local state management to functional components. It allows you to declare and update state variables within a functional component. For example:

   ```jsx
   import React, { useState } from "react";

   function Counter() {
     const [count, setCount] = useState(0);

     const increment = () => {
       setCount(count + 1);
     };

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
       </div>
     );
   }
   ```

2. **useEffect:** The `useEffect` Hook enables you to perform side effects in functional components. You can use it for tasks like data fetching, DOM manipulation, or subscribing to data sources. It replaces lifecycle methods in class components. For example:

   ```jsx
   import React, { useState, useEffect } from "react";

   function Example() {
     const [data, setData] = useState([]);

     useEffect(() => {
       // Fetch data and update 'data' state
       fetchData().then((result) => setData(result));
     }, []); // The empty dependency array means it runs once (on mount)

     return <div>Data: {data}</div>;
   }
   ```

#### State variable

In React, a "state variable" refers to a variable that holds data that can change over time and influences how a component behaves and renders. State variables are used to make components dynamic and responsive to user interactions or changes in data. React components can have local state variables, and these variables are typically declared using the `useState` hook (in functional components) or as properties of the component's class (in class components).

Here are some key points about state variables in React:

1. **Local to a Component:** State variables are specific to a particular component. They are used to store and manage data that is relevant to that component's behavior and rendering.

2. **Declared with `useState` Hook:** In functional components, you declare state variables using the `useState` hook. The `useState` function returns an array with two elements: the current state value and a function to update the state.

   ```jsx
   const [count, setCount] = useState(0);
   ```

   In this example, `count` is the state variable, and `setCount` is the function to update its value. The initial value of `count` is set to `0`.

3. **Updating State:** You can update the value of a state variable using the provided updater function. When the state is updated, React automatically re-renders the component to reflect the new state.

   ```jsx
   setCount(count + 1); // Update 'count' by incrementing it
   ```

4. **Using State in Rendering:** You can use the state variable within your component's JSX to display dynamic content or customize the component's appearance based on the state.

   ```jsx
   <p>Count: {count}</p>
   ```

   In this example, the value of `count` is displayed within the paragraph element.

5. **Functional Updates:** When you update the state based on the previous state, it's important to use a functional update to ensure that the update is based on the latest state value.

   ```jsx
   setCount((prevCount) => prevCount + 1); // Safe way to increment 'count'
   ```

State variables are essential for building interactive and dynamic user interfaces in React. They enable components to respond to user input, manage data, and reflect changes in real-time. While the `useState` hook is commonly used for local component state, class components in React also have a `this.state` object for managing state.

### useState Hook

The `useState` hook is one of the most commonly used React hooks, and it allows functional components to manage local state. It provides a way to declare and update state variables within a functional component. Here's how you use the `useState` hook:

1. **Import React and `useState`:** Start by importing React and the `useState` hook at the beginning of your component file.

   ```jsx
   import React, { useState } from "react";
   ```

2. **Declare a State Variable:** Inside your functional component, use the `useState` hook to declare a state variable. The `useState` function takes an initial value as its argument and returns an array with two elements: the current state value and a function to update that state value. You typically destructure these two values from the array.

   ```jsx
   function Example() {
     const [count, setCount] = useState(0); // Initialize 'count' state with an initial value of 0
   ```

   In this example, `count` is the state variable, and `setCount` is the function to update it. The initial value of `count` is set to `0`.

3. **Using the State Variable:** You can now use the `count` state variable in your component's JSX or within functions. When you want to update the state, you call the `setCount` function with the new value you want to assign to `count`. React will re-render your component and update the UI accordingly.

   ```jsx
   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button>
     </div>
   );
   ```

   In this example, when the "Increment" or "Decrement" button is clicked, it calls `setCount` to update the `count` state variable.

Here's the complete code for a simple counter component using the `useState` hook:

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
```

This component initializes a `count` state variable with a default value of 0 and allows the user to increment or decrement it with the provided buttons. The UI automatically updates to reflect the current state value.

#### what is render & re-render

In the context of React and other UI libraries/frameworks, "render" and "re-render" refer to the process of generating and updating the user interface based on changes in the application's state or props. Here's what each term means:

1. **Render:**

   - "Render" is the initial process of creating the UI elements (e.g., HTML elements) based on the current state and props of a component.
   - When a component is first mounted or when its state/props change, React will call the component's `render` method (in class components) or re-evaluate the component's JSX (in functional components) to generate the UI elements.
   - The "render" phase is responsible for creating the virtual representation of the UI elements.

   In a class component, the `render` method might look like this:

   ```jsx
   render() {
     return <div>Hello, {this.props.name}!</div>;
   }
   ```

   In a functional component, the rendering is achieved directly within the component function:

   ```jsx
   function Greeting(props) {
     return <div>Hello, {props.name}!</div>;
   }
   ```

2. **Re-render:**

   - "Re-render" occurs when React determines that a component's state or props have changed, and it needs to update the UI to reflect those changes.
   - React performs a comparison between the previous state/props and the new state/props to identify what parts of the UI need to be updated.
   - After identifying the changes, React triggers a re-render of the affected components.
   - During a re-render, the component's `render` method (or functional component body) is called again to generate the updated UI.

   For example, if the `name` prop of a component changes, it may trigger a re-render:

   ```jsx
   // Before re-render:
   <Greeting name="Alice" />

   // After re-render (if 'name' prop changes):
   <Greeting name="Bob" />
   ```

   React will update the UI to display "Hello, Bob!" instead of "Hello, Alice!" as a result of the re-render.

Re-rendering is a fundamental concept in React and other UI libraries, as it ensures that the UI stays in sync with the application's state and props. React is optimized to minimize unnecessary re-renders by performing a virtual DOM diffing process to identify only the parts of the UI that need to change, which helps maintain a performant user interface.

#### What is Virtual Dom

The Virtual DOM (VDOM) is a concept and programming technique used by React and some other JavaScript libraries and frameworks to optimize the performance and efficiency of updating the user interface (UI). It's an abstraction or lightweight copy of the actual DOM (Document Object Model) and serves as an intermediary between the application's data and the actual DOM elements on the web page.

Here's how the Virtual DOM works and why it's important:

1. **Actual DOM vs. Virtual DOM:**

   - The actual DOM is the real structure of HTML elements that make up a web page. It represents the current state of the UI and is directly manipulated when you make changes to your web application.
   - The Virtual DOM, on the other hand, is a JavaScript representation of the actual DOM. It's a tree-like structure that contains virtual versions of all the elements in the real DOM.

2. **Reconciliation and Efficiency:**

   - When you make changes to your application's state (e.g., updating data, responding to user interactions), these changes are reflected in the Virtual DOM, not the actual DOM.
   - React then performs a process called "reconciliation." It compares the previous Virtual DOM with the new Virtual DOM (created after state changes) to identify the differences or "diffs" between them.
   - By comparing Virtual DOM structures, React can determine exactly which parts of the real DOM need to be updated, added, or removed. This is a much more efficient approach than directly manipulating the entire DOM tree.

3. **Batching and Optimization:**

   - React optimizes updates by batching multiple changes together. Instead of updating the real DOM for every single change, React combines multiple changes and applies them in a single batch, reducing the number of expensive DOM operations.
   - React's diffing algorithm is efficient, allowing it to update only the parts of the UI that have actually changed.

4. **Improved Performance:**

   - The Virtual DOM helps improve the performance of web applications by minimizing the amount of work required to update the UI.
   - It also enables the use of efficient update strategies, like the "keyed reconciliation" algorithm, which efficiently handles lists of dynamically generated components.

5. **Cross-Platform Compatibility:**

   - The Virtual DOM concept is not limited to web applications. It can be adapted for other platforms, such as mobile apps, through libraries like React Native.

6. **Developer Experience:**
   - For developers, the Virtual DOM simplifies the process of building and maintaining complex UIs. You can work with a virtual representation of the UI, which is often easier to reason about and debug than the actual DOM.

In summary, the Virtual DOM is a critical optimization technique used by React to efficiently update the user interface by minimizing direct manipulation of the actual DOM. This leads to improved performance, better developer experiences, and more responsive web applications.

## Reconciliation & React Fiber

Reconciliation is the process through which React updates the user interface to reflect changes in the application's state or props. It involves comparing the current Virtual DOM tree with a new Virtual DOM tree to identify the differences (or "diffs") and then updating the actual DOM accordingly. This process ensures that the UI remains in sync with the application's data.

React Fiber is an internal reimplementation of the React core algorithm introduced in React version 16. It's designed to enhance the efficiency, performance, and responsiveness of the reconciliation process. React Fiber doesn't change the way reconciliation works conceptually; instead, it restructures the internal implementation to provide more control and prioritize certain types of updates, resulting in a better user experience.

Here's how reconciliation and React Fiber work together:

1. **Reconciliation Process (Before React Fiber):**

   - In earlier versions of React (prior to version 16), reconciliation was a synchronous and recursive process.
   - When a component's state or props changed, React would recursively traverse the entire Virtual DOM tree to compare old and new elements, identify differences, and update the actual DOM.
   - While this approach worked well for small and medium-sized applications, it could lead to performance issues in large and complex apps, causing janky user experiences and potential frame drops.

2. **React Fiber (Fiber Reconciliation):**

   - React Fiber introduces a more efficient and incremental approach to reconciliation.
   - It uses a data structure called a "fiber" to represent individual units of work in the reconciliation process. Fibers can be paused, resumed, and prioritized.
   - With React Fiber, the reconciliation process is split into smaller chunks or "fiber work units." React can work on these units in a prioritized manner, allowing it to respond to user interactions, animations, and other high-priority updates without blocking the main thread.
   - This approach makes React more responsive and capable of handling complex UIs without causing performance bottlenecks.

3. **Priority and Scheduling:**
   - React Fiber introduces the concept of work priorities. Different types of updates (e.g., user input, data fetching, rendering) are assigned priorities to determine their order of execution.
   - Higher-priority work (e.g., handling user input) can interrupt lower-priority work (e.g., rendering) to ensure a smoother user experience.
   - React Fiber enables better control over how and when updates are processed, making it possible to achieve more predictable and responsive user interfaces.

In summary, reconciliation is the process by which React updates the UI based on changes in state or props, while React Fiber is an internal reimplementation of React that optimizes the reconciliation process by making it more incremental and responsive. React Fiber's approach to prioritization and scheduling allows React to handle complex UI updates efficiently and improve the overall user experience.

## Diff algorithm

The "diffing algorithm," also known as the "reconciliation algorithm," is a fundamental part of how React updates the user interface efficiently. It's responsible for determining the differences between the previous Virtual DOM (Virtual Document Object Model) tree and the new Virtual DOM tree after a state or prop change and then applying those differences to update the actual DOM. The algorithm aims to minimize the number of changes made to the DOM, resulting in improved performance.

Here's how the diffing algorithm works conceptually:

1. **Virtual DOM Representation:**

   - React maintains a lightweight, virtual representation of the actual DOM, known as the Virtual DOM. This Virtual DOM is a JavaScript tree structure that mirrors the structure of the real DOM.
   - Whenever a component's state or props change, React generates a new Virtual DOM tree based on the updated component hierarchy and data.

2. **Diffing Phase:**

   - React initiates a process known as "diffing" or "reconciliation," where it compares the previous Virtual DOM (representing the current UI) with the new Virtual DOM (representing the updated UI).
   - During the diffing phase, React performs a depth-first traversal of both trees, comparing corresponding elements (nodes) in the old and new trees.

3. **Determination of Differences:**

   - React's diffing algorithm determines differences by comparing various attributes and properties of the elements, such as element types, keys (used for lists), and props.
   - It identifies three types of changes:
     - **Deletions:** Elements that exist in the old tree but not in the new tree.
     - **Insertions:** Elements that exist in the new tree but not in the old tree.
     - **Updates:** Elements that exist in both trees but have differences in props or attributes.

4. **Reconciliation Process:**

   - After identifying the differences, React creates a minimal set of instructions (a "diffing patch") to update the actual DOM to match the new Virtual DOM.
   - The reconciliation process involves adding, updating, or removing DOM nodes as needed based on the differences found.

5. **Efficient Updates:**

   - React optimizes updates by batching multiple changes together. Instead of updating the real DOM for every single change, React combines multiple changes and applies them in a single batch.
   - The diffing algorithm's efficiency, coupled with batched updates, helps minimize the performance overhead of modifying the DOM.

6. **Keyed Lists:** React places special emphasis on keyed lists (e.g., lists of components or elements) to efficiently update them. Using unique keys for list items helps React accurately determine which items have been added, removed, or reordered.

By performing this process efficiently, React minimizes the number of DOM manipulations needed when changes occur in the UI. This results in a smoother user experience and better overall performance, especially in complex applications. The diffing algorithm is a crucial part of what makes React an efficient and powerful library for building user interfaces.

## useEffect Hook

The `useEffect` hook is a fundamental part of React's functional component lifecycle. It allows you to perform side effects in your components, such as data fetching, DOM manipulation, and more, in a declarative and controlled way. You can think of it as a replacement for lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.

Here's how you can use the `useEffect` hook in a functional component:

```jsx
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  // The useEffect hook takes two arguments:
  // 1. A function to execute the side effect.
  // 2. An array of dependencies that determines when the effect runs.

  useEffect(() => {
    // This function will run after the component has rendered.

    // You can perform your side effects here, such as data fetching.

    // For example, let's simulate fetching data from an API:
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      });

    // If you want to perform cleanup when the component unmounts,
    // return a function from useEffect.
    return () => {
      // This cleanup function will run when the component is unmounted.
      // You can use it to unsubscribe from subscriptions, cancel timers, etc.
    };
  }, []); // The empty array means this effect has no dependencies, so it runs once after initial render.

  return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>;
}

export default MyComponent;
```

In the example above:

1. We import `useEffect` from the `react` library.
2. Inside the `MyComponent` functional component, we declare a state variable `data` using the `useState` hook.
3. We use the `useEffect` hook to perform a side effect, which is fetching data from an API. The effect runs after the initial render because we provided an empty dependency array (`[]`).
4. Inside the effect function, we fetch data and update the `data` state when the data is received.
5. If you need to clean up resources when the component unmounts, you can return a cleanup function from `useEffect`.

You can also specify dependencies in the dependency array to control when the effect should run based on changes to specific props or state variables. If the array is empty, the effect runs only after the initial render and when the component unmounts. If you omit the array, the effect runs after every render.

## React Route

React Router is a popular library for handling routing in React applications. It allows you to create single-page applications (SPAs) with multiple views or pages that can be navigated to using URLs. React Router helps you manage the application's UI state and URL in sync, making it easier to create complex, dynamic web applications.

Make sure to install React Router using npm :

```
npm install react-router-dom
```

### <RouterProvider/>

React Router can be provided to the entire application using the <RouterProvider> component (from react-router-dom) and including a router attribute.

It will provide the routing configuration to our App.

### useRouteError Hook

This hook gives us more information about the error occured in webpage.
We can use this information to show more specific error on the Error component.

### `<Link />`

A `<link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to. This means that things like right-clicking a `<link>` work as you'd expect. You can use `<Link reloadDocument>` to skip client side routing and let the browser handle the transition normally (as if it were an `<a href>`).

A relative `<Link to>` value (that does not begin with /) resolves relative to the parent route, which means that it builds upon the URL path that was matched by the route that rendered that `<link>`. It may contain .. to link to routes further up the hierarchy. In these cases, .. works exactly like the command-line cd function; each .. removes one segment of the parent path.

### `<Outlet />`

An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

## Class-Based Components

In React, class-based components were a way to create and manage components before the introduction of functional components with hooks. Class-based components are still supported in React, but functional components are now the recommended approach for building UI components.

Here's how you can create a class-based component in React:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize component state here
    };
  }

  componentDidMount() {
    // Code to run after the component is mounted
  }

  componentDidUpdate(prevProps, prevState) {
    // Code to run after the component's state or props change
  }

  componentWillUnmount() {
    // Cleanup code before the component is unmounted
  }

  render() {
    return <div>{/* JSX to render the component */}</div>;
  }
}

export default MyComponent;
```

In a class-based component:

1. You create a class that extends `React.Component`.
2. You define the initial state of the component in the constructor using `this.state`.
3. You can use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to control the behavior of your component at different stages of its lifecycle.
4. The `render` method returns JSX to render the component's UI.

However, with the introduction of React Hooks, you can achieve the same functionality in functional components, and functional components have become the preferred way to build components in React due to their simplicity and readability. Here's an example of a functional component using React Hooks:

```jsx
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [state, setState] = useState(/* Initial state here */);

  useEffect(
    () => {
      // Code to run after the component is mounted or when state/props change
      return () => {
        // Cleanup code before the component is unmounted
      };
    },
    [
      /* Dependency array */
    ]
  );

  return <div>{/* JSX to render the component */}</div>;
}

export default MyComponent;
```

Functional components with hooks are generally more concise and easier to understand, and they have become the standard way of building React components in modern applications.

### React Lifecycle methods

![Screenshot](./Let's%20get%20classy/Screenshot.png)

In React, components go through a series of phases during their lifecycle. These phases can be broadly categorized into three main stages: mounting, updating, and unmounting. These stages represent the lifecycle of a component from its creation to its removal from the DOM.

1. **Mounting**:

   - **`constructor(props)`**:

     - The constructor is the first method called when a class-based component is created.
     - It is used for initializing component state and binding event handlers.
     - This method is executed only once during the component's lifetime when it is first instantiated.

   - **`render()`**:

     - The `render` method is responsible for determining what content should be displayed in the component based on its current state and props.
     - It returns a JSX representation of the component's UI.
     - The `render` method is called each time the component needs to be re-rendered, which can happen due to changes in state or props.

   - **`componentDidMount()`**:
     - This method is called after the component has been rendered into the DOM.
     - It is commonly used for tasks that require interaction with the DOM, such as making API requests, setting up event listeners, or initializing third-party libraries.
     - `componentDidMount` is executed once, immediately after the initial rendering of the component.

2. **Updating**:

   - **`render()` (again)**:

     - The `render` method can be called multiple times during a component's lifecycle whenever there is a change in state or props.
     - It generates a new virtual DOM representation of the component's UI.

   - **`componentDidUpdate(prevProps, prevState)`**:
     - This method is called after the component has been updated and re-rendered due to changes in state or props.
     - It receives the previous props and state as arguments, allowing you to compare them with the current values and perform actions based on the changes.
     - `componentDidUpdate` is useful for handling side effects or additional updates after the render phase.

3. **Unmounting**:

   - **`componentWillUnmount()`**:
     - This method is called just before the component is removed from the DOM and destroyed.
     - It is commonly used for cleaning up resources, such as removing event listeners, canceling asynchronous operations, or any other cleanup tasks to prevent memory leaks.
     - Once `componentWillUnmount` is executed, the component is no longer accessible.

These lifecycle methods provide developers with hooks at different points in a component's existence, allowing them to control its behavior and interactions with the DOM and external resources. It's important to note that class-based components use these methods, while functional components can achieve similar functionality using React hooks like `useEffect`. Understanding these lifecycle phases is crucial for managing component behavior and optimizing performance in React applications.

### constructor(props)

In React class-based components, the `constructor(props)` method is a special method used to initialize the component's state and perform other setup tasks when an instance of the component is created.

Here's what each part of `constructor(props)` does:

1. `constructor`: This is a standard JavaScript constructor method that is called when a new instance of the class is created. In the context of React components, it's used to perform any setup or initialization that is required for the component.

2. `(props)`: The `props` parameter in the constructor is the component's properties (or props) that are passed to it when it's used elsewhere in the application. You can access these props within the constructor to set the initial state or perform other tasks based on the incoming props.

Here's an example of how you might use `constructor(props)` in a React class-based component:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props); // Call the constructor of the parent class (Component)

    // Initialize the component's state
    this.state = {
      count: 0,
    };

    // You can also perform other setup tasks here
    // For example, binding event handlers
    this.handleClick = this.handleClick.bind(this);
  }

  // ...

  handleClick() {
    // Handle a click event
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

In this example, the `constructor` is used to initialize the component's state (`count`), and it also binds the `handleClick` method to the component instance so that `this` inside the method refers to the component instance when it's called.

However, it's important to note that in modern React, you can often avoid using the constructor and directly initialize state and handle event bindings using class properties and arrow functions or by using functional components with hooks, which can make your code more concise and readable.

### super(props)

In a class-based component in React, `super(props)` is used to call the constructor of the parent class, which in this case is `Component` from React's core library. The `super(props)` call is typically the first statement inside the constructor of a class-based component.

Here's why you use `super(props)` in a React component:

1. **Inheritance**: React components are JavaScript classes that inherit properties and behavior from the `Component` class provided by React. When you create your own class-based component by extending `Component`, you need to call the constructor of the parent class (`Component`) to ensure that it sets up any necessary internal state and behavior.

2. **Passing Props**: `super(props)` is used to pass the `props` parameter to the constructor of the parent class. The `props` parameter contains the properties (or props) that are passed to your component when it's used in other parts of your application. By passing `props` to `super(props)`, you allow React to handle props correctly and set up the component with the data it needs.

Here's a basic example of how `super(props)` is used in a class-based component:

```jsx
import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props); // Call the constructor of the parent class (Component)

    // Other initialization or state setup can be done here
    this.state = {
      count: 0,
    };
  }

  // ...

  render() {
    return (
      <div>
        {/* Component's JSX */}
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default MyComponent;
```

In this example, `super(props)` ensures that the `Component` class's constructor is called, which sets up the component's internal functionality. After that, you can perform your own initialization or state setup, as needed for your specific component.

It's important to note that in modern React, with the introduction of functional components and hooks, you can often achieve the same functionality without the need for class-based components and constructors. Functional components with hooks like `useState` and `useEffect` provide a simpler and more concise way to manage component state and side effects.

#### How to make a state variable & set it in class based components

In class-based React components, you can create a state variable by using the `constructor` and `this.state` or by directly declaring it outside of the constructor if you're using modern JavaScript class properties. To set the state, you use the `this.setState()` method. Here's how you can do it:

1. **Using the constructor**:

   ```jsx
   import React, { Component } from "react";

   class MyComponent extends Component {
     constructor(props) {
       super(props);
       this.state = {
         count: 0,
       };
     }

     render() {
       return (
         <div>
           <p>Count: {this.state.count}</p>
           <button
             onClick={() => this.setState({ count: this.state.count + 1 })}
           >
             Increment
           </button>
         </div>
       );
     }
   }

   export default MyComponent;
   ```

   In this example, we initialize the `count` state variable in the component's constructor, and we use `this.setState()` to update it when the button is clicked.

### componentDidMount, componentDidUpdate & componentWillUnmount

`componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are lifecycle methods in class-based React components. They allow you to perform specific actions at different stages of a component's lifecycle.

1. **`componentDidMount`**:

   - This lifecycle method is called after the component has been inserted into the DOM (Document Object Model).
   - It is commonly used for performing tasks that require interaction with the DOM or external data fetching, such as making API requests, setting up event listeners, or initializing third-party libraries.
   - `componentDidMount` runs only once, immediately after the initial rendering of the component.

   ```jsx
   componentDidMount() {
     // Perform setup or data fetching here
   }
   ```

2. **`componentDidUpdate`**:

   - This method is called whenever the component updates or receives new props.
   - It is useful for responding to changes in state or props and performing actions based on those changes.
   - It receives two arguments: `prevProps` and `prevState`, which allow you to compare the previous props and state with the current ones to make decisions.

   ```jsx
   componentDidUpdate(prevProps, prevState) {
     // Check for changes in props or state and respond accordingly
   }
   ```

3. **`componentWillUnmount`**:

   - This method is called just before the component is removed from the DOM and destroyed.
   - It is commonly used to clean up resources or perform necessary cleanup tasks like removing event listeners or canceling asynchronous operations to prevent memory leaks.
   - Once `componentWillUnmount` is called, the component is no longer accessible.

   ```jsx
   componentWillUnmount() {
     // Perform cleanup tasks here
   }
   ```

It's important to note that with the introduction of functional components and React hooks, you can achieve similar functionality with hooks like `useEffect`. Functional components with hooks have become the preferred way of managing component lifecycle and side effects in modern React applications, making the code more concise and easier to reason about.

## Code Splitting

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

## What Is Lazy Loading?

Lazy loading is a technique that allows you to defer loading some components or resources until they are actually needed or requested by the user. This way, you can improve the performance and responsiveness of your app, as well as save bandwidth and battery life. For example, if your app has a list of images, you can lazy load them, so that they are only fetched and rendered when the user scrolls to them. This can prevent loading all the images at once, which can slow down the app and consume more data.

In simple terms, lazy loading is a design pattern. It allows you to load parts of your application on-demand to reduce the initial load time. For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.

You might not feel much difference when using lazy loading for small-scale applications. But it significantly impacts large-scale applications by reducing the initial load time. Ultimately, it improves both the user experience and the application’s performance.

```javascript
import { lazy } from "react";
const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));
```

#### Advantages of Lazy Loading

- Reduces initial loading time by reducing the \* bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.

#### Disadvantages of Lazy Loading

- Not suitable for small-scale applications.
- Placeholders can slow down quick scrolling.
- Requires additional communication with the server to fetch resources.
- Can affect SEO and ranking.

### <Suspense>

<Suspense> lets you display a fallback until its children have finished loading.

```
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

**Props**

- **_children_**: The actual UI you intend to render. If children suspends while rendering, the Suspense boundary will switch to rendering fallback.
- **_fallback_**: An alternate UI to render in place of the actual UI if it has not finished loading. Any valid React node is accepted, though in practice, a fallback is a lightweight placeholder view, such as a loading spinner or skeleton. Suspense will automatically switch to fallback when children suspends, and back to children when the data is ready. If fallback suspends while rendering, it will activate the closest parent Suspense boundary.

Displaying a fallback while content is loading
You can wrap any part of your application with a Suspense boundary:

```
<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
```

React will display your loading fallback until all the code and data needed by the children has been loaded.

## Higher Order Components

Higher Order Components (HOCs) are a pattern used in React to enhance the functionality and reusability of components. They are a way to share behavior among components without duplicating code. HOCs are not a feature of React itself but rather a pattern that leverages the component composition model in React.

#### What is a Higher Order Component (HOC)?

A Higher Order Component is a function that takes a component as its argument and returns a new component with additional props and functionality. HOCs allow you to abstract and share logic, state, or UI rendering between multiple components.

### Lifting the state up

Lifting state up in React is a pattern used to manage and share state between components in a parent-child relationship or between sibling components. It involves moving the state from child components to a common ancestor (usually a parent or a higher-level component) so that the state can be shared and manipulated more easily. This pattern is particularly useful when multiple components need access to the same piece of state.

Here's how you can lift state up in React:

1. **Identify the Shared State:**

   First, identify the piece of state that needs to be shared between components. This could be data, form input values, or any other relevant information.

2. **Move the State Up:**

   Determine which component should be responsible for managing this shared state. Create state variables and relevant functions in that component to handle the state changes. This component is often referred to as the "parent" or "container" component.

3. **Pass State as Props:**

   Once you've moved the state up, pass it down to the child components as props. This allows child components to access and render the state.

4. **Handle State Changes:**

   When child components need to update the shared state, they should communicate with the parent component by invoking callback functions passed down as props. The parent component should then update the state and trigger a re-render.

5. **Update Child Components:**

   As the shared state changes in the parent component, it will automatically update any child components that depend on that state because they are re-rendered with the updated props.

Here's a simple example to illustrate the concept of lifting state up:

```jsx
import React, { useState } from "react";

// Parent component that manages the shared state
function ParentComponent() {
  const [count, setCount] = useState(0);

  // Callback function to update the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <ChildComponent count={count} incrementCount={incrementCount} />
    </div>
  );
}

// Child component that receives and displays the shared state
function ChildComponent({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Child Count: {count}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
```

In this example:

- The `ParentComponent` manages the `count` state and provides the `incrementCount` function to update it.

- The `ChildComponent` receives the `count` state and the `incrementCount` function as props, allowing it to display the state and trigger updates when the button is clicked.

- The `App` component serves as the top-level component rendering the `ParentComponent`.

By lifting the `count` state up to the `ParentComponent`, both the parent and child components can access and interact with the same state, ensuring that they stay in sync.
