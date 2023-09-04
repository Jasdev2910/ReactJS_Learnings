## Assignment

#### Q1. What is Microservice

Microservices are a software architectural approach where an application is divided into a collection of small, independent, and loosely coupled services. Each of these services is responsible for a specific business capability and can be developed, deployed, and scaled independently. Microservices are a popular way to build and maintain complex applications, and they contrast with monolithic architectures where an entire application is developed as a single, tightly integrated unit.

Key characteristics of microservices include:

1. **Decomposition**: An application's functionality is broken down into small services, each focused on a specific task or feature. This decomposition makes it easier to understand, develop, and maintain each service.

2. **Independence**: Each microservice is developed and deployed independently of others. This means that teams can work on different services concurrently, using different technologies and release cycles.

3. **Loose Coupling**: Microservices communicate with each other through well-defined APIs (often over HTTP/REST or messaging systems). This loose coupling allows changes in one service to be made without affecting others.

4. **Scalability**: Individual microservices can be scaled independently based on their specific resource needs. This enables efficient resource utilization and the ability to handle varying loads.

5. **Resilience**: Microservices are designed to be fault-tolerant. If one service fails, it should not bring down the entire application. This is achieved through techniques like redundancy and graceful degradation.

6. **Polyglotism**: Microservices allow for the use of different programming languages, frameworks, and databases for each service, enabling teams to choose the best tools for each specific task.

7. **Continuous Deployment**: Microservices make it easier to implement continuous integration and continuous deployment (CI/CD) practices since each service can be built, tested, and deployed independently.

8. **Isolation**: Services often have their own data storage, reducing the risk of data contention and making it easier to manage data for each service.

Microservices architecture is commonly associated with modern software development practices and is often used in combination with containerization technologies like Docker and orchestration tools like Kubernetes to manage and deploy these services efficiently. While microservices offer many advantages, they also introduce complexities in terms of service coordination, monitoring, and managing the interactions between services. Therefore, adopting microservices should be done thoughtfully and may not be the best fit for all types of applications or organizations.

#### Q2. What is Monolith Architecture?

Monolithic architecture, in contrast to microservices architecture, is a traditional software design approach where an entire application is built as a single, self-contained unit. In a monolithic architecture, all the components and functionality of the application are tightly integrated and interdependent. Here are some key characteristics of monolithic architecture:

1. **Single Codebase**: In a monolithic application, all the code for various components, features, and modules resides in a single codebase or code repository.

2. **Tight Coupling**: Different parts of the application are tightly coupled, meaning changes to one part of the application can potentially affect other parts. This makes it challenging to isolate and update individual components.

3. **Development and Deployment**: In monolithic applications, development, testing, and deployment are typically done as a single, coordinated process. Changes to the application often require the entire monolith to be redeployed.

4. **Scaling**: Scaling a monolithic application can be challenging because you must scale the entire application, even if only a specific part of it experiences increased load.

5. **Technology Stack**: Monolithic applications often use a single technology stack, which may limit the choice of programming languages, frameworks, and tools.

6. **Resource Utilization**: Resource utilization can be less efficient because all components share the same resources, and it may be challenging to optimize resource allocation for specific parts of the application.

7. **Testing and Maintenance**: Testing and maintaining a monolithic application can become complex as it grows, and it may require extensive regression testing to ensure that changes do not introduce unexpected issues.

8. **Scalability Challenges**: Monolithic applications may struggle to scale horizontally (adding more servers) to handle increased load because they were not designed with scalability in mind.

Despite its drawbacks, monolithic architecture has been a common and practical choice for many applications, especially smaller ones or those in the early stages of development. It can be easier to develop and deploy initially since it requires less infrastructure and coordination.

However, as applications grow and evolve, they may face challenges related to scalability, maintainability, and agility. This has led to the rise of microservices architecture and other architectural approaches that offer greater flexibility and scalability by breaking applications into smaller, independently deployable components. Transitioning from a monolithic architecture to a microservices or modular architecture can be a complex but necessary step for applications that need to scale, adapt to changing requirements, and leverage modern development and deployment practices.

#### Q3. Differnce b/w Monolith & Microservice.

| Aspect                         | Monolithic Architecture                                   | Microservices Architecture                                         |
| ------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------ |
| **Architecture**               | Single, integrated application.                           | Collection of independent services.                                |
| **Size and Complexity**        | Large and complex.                                        | Smaller and more focused.                                          |
| **Coupling**                   | Tight coupling between components.                        | Loose coupling between services.                                   |
| **Development and Deployment** | Coordinated development, testing, and deployment.         | Independent development, testing, and deployment for each service. |
| **Scalability**                | Scaling involves the entire application.                  | Individual services can be scaled independently.                   |
| **Technology Stack**           | Typically uses a single technology stack.                 | Can use different technology stacks for each service.              |
| **Testing and Maintenance**    | Complex testing and maintenance due to interdependencies. | Simplified testing and maintenance as services are isolated.       |
| **Resource Utilization**       | May have less efficient resource utilization.             | Allows optimization of resource allocation for each service.       |

#### Q4. Why do we need a useEffect Hook?

The `useEffect` hook in React is essential for managing side effects, component lifecycle, and resource cleanup in functional components. It enables developers to execute tasks like data fetching, DOM manipulation, or subscriptions outside the regular rendering process. By mimicking the lifecycle methods available in class components, `useEffect` controls when side effects occur, ensuring they happen at the right time during the component's lifecycle. It also helps prevent memory leaks by allowing resource cleanup when the component unmounts. In summary, `useEffect` enhances the structure, predictability, and efficiency of React applications, making it a fundamental tool for handling side effects and maintaining clean code.

#### Q5. What is Optional Chaining?

Optional chaining is a feature introduced in modern JavaScript (ES11/ES2020) that allows you to access properties or call methods on an object without explicitly checking if each level of the nested structure exists. It helps avoid "TypeError" errors that occur when trying to access properties or call methods on undefined or null values.

The optional chaining operator is represented by the question mark (`?.`) and is used as follows:

- When accessing a property: `object?.property`
- When calling a method: `object?.method()`
- When accessing properties on nested objects: `object?.nestedObject?.nestedProperty`
- When calling methods on nested objects: `object?.nestedObject?.nestedMethod()`

Here's an example of optional chaining in action:

```javascript
const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

const city = person.address?.city; // No error, city = "New York"
const country = person.address?.country; // No error, country = undefined
```

In the above code, `person.address?.city` safely accesses the `city` property, even though `country` doesn't exist within the `address` object. This avoids a "TypeError" and returns `undefined` if the property or method doesn't exist at any level of the chain.

Optional chaining simplifies code and makes it more robust, especially when working with complex data structures, APIs, or dealing with data that may be missing or incomplete. It is a valuable addition to modern JavaScript, improving code readability and reducing the need for conditional checks.

#### Q6. What is Shimmer UI?

Shimmer UI, also known as a shimmer effect or content placeholder, is a user interface design technique used to provide users with visual feedback while content is loading or being fetched asynchronously. Instead of leaving a blank or empty space while waiting for data to load, developers implement a shimmering animation that simulates the appearance of content gradually filling in.

Shimmer UI is commonly used in mobile and web applications to enhance the user experience during loading times, especially when dealing with slow network connections or when fetching data from remote servers. It provides a more visually appealing and engaging alternative to static loading indicators, helping to reduce user frustration and perceived wait times.

#### Q7. What is the difference b/w JS Expression & JS Statement.

In JavaScript, expressions and statements are two fundamental building blocks of code, each serving a distinct purpose:

1. **JavaScript Expression**:

   - An expression is a piece of code that produces a value. It can be a single value, a variable, an operation, or a combination of these.
   - Expressions can be as simple as a single variable or constant, like `5` or `x`, or they can be more complex, such as mathematical operations like `5 + 3`, function calls like `Math.sqrt(16)`, or even ternary conditional expressions like `x > 0 ? 'Positive' : 'Negative'`.
   - Expressions can appear anywhere in JavaScript code where a value is expected, such as in assignments, function arguments, or within other expressions.

2. **JavaScript Statement**:
   - A statement is a complete line of code that performs an action. Unlike expressions, statements do not produce a value; they have a side effect or control the flow of the program.
   - Common statements include variable declarations (`var x;`), assignments (`x = 5;`), function declarations (`function myFunction() { /* ... */ }`), conditional statements (`if`, `else`, `switch`), loops (`for`, `while`, `do-while`), and more.
   - Statements typically end with a semicolon `;`, although in many cases, JavaScript allows semicolons to be optional due to automatic semicolon insertion (ASI).

Here's a simple example to illustrate the difference:

```javascript
// Expression: Produces a value
var sum = 5 + 3; // sum is assigned the value 8

// Statement: Performs an action (assignment)
if (sum > 10) {
  console.log("Sum is greater than 10."); // Logs a message
}
```

In this example, `5 + 3` is an expression that results in the value `8`, while the `if` statement controls the flow of the program and logs a message based on a condition.

In summary, expressions produce values, while statements perform actions or control the program's flow. Understanding the distinction between them is crucial for writing effective and readable JavaScript code.

#### Q8. What is Conditional Rendering?

Conditional rendering is a concept in web and application development that involves displaying different user interface elements or content based on certain conditions or criteria. It allows developers to control what is shown to the user depending on various factors, such as user input, application state, or data from an external source.

Conditional rendering is commonly used to create dynamic and responsive user interfaces. Here are some scenarios where it is frequently applied:

1. **User Authentication**: Displaying login forms when a user is not logged in and showing user-specific content once they have successfully logged in.

2. **Form Validation**: Showing error messages or success messages based on the validation status of user inputs in a form.

3. **Data Loading**: Displaying loading spinners or placeholders while data is being fetched from a server, and then rendering the fetched data when it becomes available.

4. **User Permissions**: Showing or hiding certain features or options in an application based on the user's permissions or roles.

5. **Conditional Styling**: Applying different styles to elements based on conditions, such as highlighting an input field with an error message in red when there is an input validation error.

6. **Responsive Design**: Adapting the layout or content of a web page or application based on the screen size or device type, ensuring a better user experience on various devices.

In JavaScript frameworks and libraries like React, Vue.js, and Angular, conditional rendering is achieved through the use of conditional statements (e.g., `if`, `else if`, `else`), ternary operators (`? :`).These tools allow developers to express the logic for displaying or hiding elements in a declarative manner.

```javascript
import React from "react";

function ConditionalRenderingExample({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please log in to access your account.</p>
      )}
    </div>
  );
}
```

In this React component, the `isLoggedIn` prop determines whether to render a welcome message or a login prompt based on the condition provided within curly braces `{}`.

#### Q9. What is CORS?

CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers that controls how web pages in one domain can request and interact with resources hosted on another domain. CORS is an essential mechanism for maintaining security on the web while allowing for cross-origin (cross-domain) data requests.

Here's how CORS works and why it's important:

1. **Same-Origin Policy**: By default, web browsers enforce a security policy known as the Same-Origin Policy (SOP). This policy prevents web pages from making requests to a different domain than the one from which they were loaded. This restriction is in place to prevent potential security vulnerabilities, such as cross-site request forgery (CSRF) and data theft.

2. **Cross-Origin Requests**: Sometimes, web applications need to make requests to APIs, services, or resources hosted on a different domain. This is where CORS comes into play. CORS is a set of HTTP headers that allow servers to specify which origins (domains) are permitted to access their resources. When a web page from one origin makes a cross-origin request, the browser checks the server's CORS headers to determine if the request is allowed.

3. **CORS Headers**: Servers can respond to cross-origin requests with CORS headers that specify which origins are allowed to access their resources. These headers include:
   - `Access-Control-Allow-Origin`: Specifies the allowed origins.
   - `Access-Control-Allow-Methods`: Specifies the allowed HTTP methods (e.g., GET, POST, PUT).
   - `Access-Control-Allow-Headers`: Specifies the allowed HTTP headers.
   - `Access-Control-Expose-Headers`: Specifies which headers are exposed to the requesting origin.
   - `Access-Control-Allow-Credentials`: Indicates whether credentials (like cookies or HTTP authentication) are allowed.
   - `Access-Control-Max-Age`: Specifies how long the results of a preflight request (an initial, non-standard HTTP request) can be cached.

CORS is essential because it allows web applications to fetch and interact with data from different domains, enabling features like embedding third-party content (e.g., social media widgets) and consuming APIs. However, it also helps maintain security by preventing unauthorized access to sensitive resources.

Developers must configure their server's CORS settings correctly to ensure that cross-origin requests are handled securely and that only trusted domains can access their resources. Improper CORS configuration can lead to security vulnerabilities, such as data exposure or unauthorized data modifications.

#### Q10. What is asyn await?

`async/await` is a feature in modern JavaScript (introduced in ECMAScript 2017, ES8) that simplifies asynchronous programming and makes it more readable and intuitive. It's built on top of Promises, which are a way to work with asynchronous operations in JavaScript.

Here's an explanation of `async` and `await`:

1. **`async` Function**:

   - When you declare a function with the `async` keyword, it becomes an asynchronous function. An asynchronous function always returns a Promise implicitly.
   - Within an `async` function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved or rejected.

2. **`await` Operator**:
   - The `await` keyword can only be used inside an `async` function.
   - It's used to wait for a Promise to resolve. While waiting, the rest of the code outside the `await` expression continues to execute.
   - When the awaited Promise resolves, the result is returned. If the Promise rejects, an exception is thrown, and you can catch it using a `try...catch` block.

Here's an example of `async/await` in action:

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data"); // Pause until the fetch Promise resolves.
    const data = await response.json(); // Pause again until JSON parsing is complete.
    return data; // Return the data when all asynchronous operations are done.
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for further handling.
  }
}

// Using the async function
fetchData()
  .then((result) => {
    console.log("Fetched data:", result);
  })
  .catch((error) => {
    console.error("Failed to fetch data:", error);
  });
```

In this example, the `fetchData` function is asynchronous and uses `await` to pause execution until the Promise returned by `fetch` resolves. This makes the code appear more linear and easier to follow than using traditional callback-based or Promise-based code.

`async/await` is particularly useful for handling asynchronous operations like fetching data from servers, reading files, or making database queries, as it reduces callback nesting and makes error handling more straightforward. It has become the preferred way to work with asynchronous code in modern JavaScript.

#### Q11. What is the use of 'const json = await data.json()' in getRestaraunt()

.json() is a method available on the Response object returned by the fetch API. It is used to extract and parse the response body as JSON.

- When you make a network request using fetch, the response you receive typically contains data in the form of a JSON string.
- The .json() method is called on the response object to parse this JSON string and convert it into a JavaScript object.
- Parsing JSON can be an asynchronous operation because it may involve reading and converting a potentially large string of data. Asynchronous operations are handled using Promises.
- When you call .json(), it returns a Promise that resolves to the parsed JSON data once the parsing is complete.
