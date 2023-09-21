## Assignment

#### Q1. What is prop drilling?

Prop drilling, also known as "props drilling" or "component drilling," is a term used in React and other component-based frameworks to describe the process of passing data (props) from a parent component down through multiple layers of child components to reach a deeply nested child component that needs access to that data. It can sometimes lead to code that is harder to maintain and understand, as well as reduced component reusability.

Here's a simplified example to illustrate prop drilling:

Suppose you have a React application with a component tree like this:

```
App
|-- ParentComponent
    |-- ChildComponent
        |-- GrandchildComponent
```

Let's say you have some data in the `App` component that the `GrandchildComponent` needs to use. To make this data accessible to the `GrandchildComponent`, you would typically pass it as props through each layer of the component hierarchy:

1. `App` passes the data to `ParentComponent` as a prop.
2. `ParentComponent` passes the data to `ChildComponent` as a prop.
3. `ChildComponent` finally passes the data to `GrandchildComponent` as a prop.

This process is known as prop drilling, as you're drilling down through the component tree to pass data from a higher-level component to a lower-level one.

While prop drilling is a common and valid technique, it can have some downsides:

1. **Complexity**: As your component tree grows, you might find yourself passing many props through intermediate components. This can make your code harder to read and maintain.

2. **Scalability**: Prop drilling can become unwieldy as your application becomes more complex. It may require changes to multiple components when you want to update how data is passed.

3. **Component Reusability**: Components that rely on deeply nested props are less reusable because they are tightly coupled to the structure of the component tree.

To mitigate these issues, you can consider alternative state management solutions like:

1. **Context API**: React's Context API allows you to create a global state that can be accessed by any component without prop drilling. It's suitable for managing shared state or application-wide settings.

2. **Redux**: Redux is a state management library that provides a global store for your application's data. It eliminates the need for prop drilling by giving components access to the store's state.

#### Q2.What is Lifting the state up?

lifting state up occurs when state is placed in a common ancestor (or parent) of child components. Because each child component has access to the parent they will then have access to state (via prop drilling as seen above). If state is updated inside the child component it is lifted back up to the parent container.

#### Q3. What are Context Providers and Context Consumers?

In React, the `useContext` hook is a powerful tool for managing and accessing global state or context within your application. It allows you to pass data from a parent component (the context provider) to multiple levels of child components (context consumers) without having to pass props down through each intermediate component. This can help simplify your component tree and make it more efficient.

Here's a breakdown of the roles of the context provider and context consumer:

1. **Context Provider:**
   - The context provider is a component that creates and manages the context. It provides data and functions that you want to make available to child components.
   - To create a context provider, you typically use the `React.createContext()` function to create a context object. This context object includes a `Provider` component that you can use to wrap your parent component.
   - Inside the provider component, you set the value of the context. This value can be an object, a state, or any data you want to share with child components.
   - The context provider component is responsible for maintaining and updating the context data as needed.

Example:

```jsx
import React, { createContext, useState } from "react";

// Create a context object
const MyContext = createContext();

function MyContextProvider({ children }) {
  const [data, setData] = useState(initialData);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
}
```

2. **Context Consumer:**
   - Context consumers are components that need to access the data provided by the context provider. They can consume this data using the `useContext` hook or by rendering a `Context.Consumer` component.
   - The `useContext` hook is the most common way to consume context data within functional components. It allows you to access the context data directly.
   - When a context consumer uses `useContext`, it "subscribes" to updates from the context provider. If the context data changes, the consumer component will automatically re-render.

Example using `useContext`:

```jsx
import React, { useContext } from "react";

function MyComponent() {
  const { data, setData } = useContext(MyContext);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData("New Data")}>Update Data</button>
    </div>
  );
}
```

In this example, `MyComponent` is a context consumer that uses the `useContext` hook to access and update the data provided by the `MyContextProvider`.

By using context providers and consumers, you can manage global state efficiently and share data across your React component tree without having to pass props manually through each level of nesting.

#### Q4. If you dont pass a value to the Provider does it take the default value.

If you create a context with a default value using `createContext` as shown below:

```jsx
const MyContext = createContext("default value");
```

And then you use the `MyContext.Provider` without explicitly specifying a `value` prop like this:

```jsx
<MyContext.Provider>{/* ... */}</MyContext.Provider>
```

In this case, the context provider will **not** automatically take the default value you specified in the `createContext` call. Instead, it will take an empty value, which is `undefined`.

If you want the provider to use the default value you provided when creating the context, you must explicitly set the `value` prop like this:

```jsx
<MyContext.Provider value={"default value"}>{/* ... */}</MyContext.Provider>
```

By setting the `value` prop in the provider, you can specify the value that the context should use, either the default value or any custom value you want. If you don't provide a `value` prop, it will be `undefined` by default.
