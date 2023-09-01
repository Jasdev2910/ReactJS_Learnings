
## Assignment

#### Q1. What is the Difference b/w Named Export & Default Export?

Named exports and default exports are two ways to export and import functionality in JavaScript modules. They serve different purposes and have distinct use cases:

1. **Named Exports:**
   - With named exports, you can export multiple functions, variables, or objects from a module, and you can import them individually by specifying their names when importing.
   - You can have multiple named exports in a single module.
   - Named exports are enclosed in curly braces `{}` when importing.
   - Commonly used when a module exports multiple related functions or variables that are meant to be used independently.

   Example of exporting named functions from a module:
   ```javascript
   // math.js
   export function add(a, b) {
       return a + b;
   }

   export function subtract(a, b) {
       return a - b;
   }
   ```

   Importing named exports:
   ```javascript
   import { add, subtract } from './math.js';
   ```

2. **Default Export:**
   - A module can have one default export, and it is used for the primary export of the module.
   - When you import a default export, you can choose any name for the imported item; it doesn't have to match the original name in the module.
   - Default exports are typically used when a module has a single main function or class to export, making it the default entry point for the module.

   Example of a default export from a module:
   ```javascript
   // myModule.js
   export default function myFunction() {
       // ...
   }
   ```

   Importing the default export:
   ```javascript
   import customName from './myModule.js'; // You can use any name you want for 'customName'
   ```

In summary, named exports are used for exporting multiple items from a module with specific names, while default exports are used to provide a single main export from a module, and the name of the imported item can be customized when importing. You can use both named and default exports in the same module, but there can be only one default export per module.

#### Q2. What is the importance of cofig.js file?

A `config.js` file, or similarly named configuration file (e.g., `config.json`, `config.yml`, etc.), is commonly used in software development for the following important reasons:

1. **Configuration Management:** A `config.js` file allows you to centralize and manage configuration settings for your application or project. This is crucial because configurations often include sensitive information (e.g., API keys, database credentials) and settings that may need to be adjusted based on the environment (e.g., development, staging, production).

2. **Security:** Placing sensitive information in a separate configuration file helps improve security. It allows you to exclude the configuration file from version control systems (like Git) so that sensitive data doesn't get exposed to unauthorized users.

3. **Environment-Specific Settings:** Different environments (development, staging, production) may require different configuration settings. By using a `config.js` file, you can easily switch between configurations based on the environment, ensuring that your application behaves correctly in each context.

4. **Ease of Maintenance:** Centralizing configuration settings in one file makes it easier to update and maintain those settings. You don't have to search through your codebase to find and change specific values; you can update them in the configuration file.

5. **Dependency Injection:** In some programming paradigms (e.g., dependency injection), configuration settings can be injected into different parts of your application, making it more flexible and testable.

6. **Reusability:** Configuration files can be shared among team members and used across multiple projects, saving time and effort in setting up similar configurations for different applications.

7. **Documentation:** A well-structured configuration file can serve as documentation for your project, providing insight into the required settings and their meanings.

8. **Deployment:** During the deployment process, you can easily replace the appropriate configuration file to switch between different environments or update settings without modifying the code itself.

Here's a basic example of a `config.js` file in a Node.js application:

```javascript
// config.js

module.exports = {
    port: process.env.PORT || 3000,
    databaseUrl: process.env.DB_URL || 'mongodb://localhost/mydb',
    secretKey: process.env.SECRET_KEY || 'mysecretkey',
};
```

In this example, the `config.js` file defines configuration settings for a web server's port, a database connection URL, and a secret key. It also checks for environment variables, allowing you to override the default values when necessary.

In summary, a `config.js` file is important for managing and organizing configuration settings in your software projects, enhancing security, and making your application more adaptable to different environments and deployment scenarios.

#### Q3. What are React Hooks?

React Hooks are functions that allow you to use state and other React features in functional components, which were previously limited to class components. They were introduced in React 16.8 to simplify state management, side effects, and other features in functional components. React Hooks have become a fundamental part of modern React development. Here are some of the most commonly used React Hooks:

1. **useState:** `useState` allows you to add state management to functional components. It returns an array with two values: the current state and a function to update it.

   ```jsx
   import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

2. **useEffect:** `useEffect` lets you perform side effects in your components, such as data fetching, DOM manipulation, or subscribing to a data source. It replaces lifecycle methods like `componentDidMount` and `componentDidUpdate` in class components.

   ```jsx
   import React, { useEffect } from 'react';

   function Example() {
     useEffect(() => {
       // Your side effect code here
       console.log('Component did mount or update');
     }, []); // Empty dependency array means it runs once (on mount)

     return <div>Example Component</div>;
   }
   ```
#### Q4. Why do we need a useState Hook?

The `useState` Hook in React is used to introduce and manage local state within functional components. It's necessary because without state management, functional components would be limited in their ability to handle dynamic data, respond to user interactions, and update the UI in response to changes. Here are some reasons why the `useState` Hook is crucial:

1. **State Management:** In many web applications, you need to keep track of and manage state data that can change over time. This could include user input, UI elements' visibility, form data, and more. `useState` allows you to create and update state variables, ensuring that your components respond to changing data.

2. **Reactivity:** When the state of a component changes, React automatically re-renders the component, updating the user interface to reflect the new state. `useState` makes it easy to handle state changes and reactivity without needing to write complex code.

3. **Functional Components:** Before the introduction of Hooks, state management was primarily done in class components. With `useState`, you can use functional components exclusively, simplifying your component structure and making them more concise and easier to reason about.

4. **Encapsulation:** `useState` promotes encapsulation of state within individual components. Each component can have its own state, making it self-contained and reducing the chances of conflicts or side effects with other components.

5. **Performance Optimization:** React can optimize updates to state variables created with `useState` by batching multiple state changes together. This optimization helps improve the performance of your application.

Here's a basic example of how `useState` is used to manage a simple counter in a functional component:

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0.
  // 'setCount' is a function to update the 'count' state.
  const [count, setCount] = useState(0);

  // Event handler to increment the count.
  const handleIncrement = () => {
    setCount(count + 1); // Update the 'count' state.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

In this example, `useState` allows us to create and manage the `count` state variable, which is displayed in the UI and updated when the "Increment" button is clicked. Without `useState`, handling this kind of dynamic behavior in a functional component would be challenging and less efficient.
 