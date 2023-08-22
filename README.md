# React & React DOM

**React:**

*Purpose:* 

React is a JavaScript library for building user interfaces. It provides a way to define and manage UI components, manage state and props, and handle the rendering of components.

*Components:* 

React allows you to define components using either JavaScript classes or functional components. Components are reusable building blocks that encapsulate a piece of UI and its behavior.

*Virtual DOM:* 

React introduces a virtual DOM, a lightweight representation of the actual DOM. It efficiently updates and renders changes to the UI by comparing the virtual DOM with the real DOM and applying only the necessary updates.

*JSX:* 

React uses JSX (JavaScript XML) syntax to define components. JSX allows you to write HTML-like code within your JavaScript, making it easier to visualize and create UI structures.

**ReactDOM:**

*Purpose:* 

ReactDOM is a package that provides methods specifically for interacting with the actual DOM (Document Object Model) of a web page.

*Rendering:*

The main function of ReactDOM is to render React components into the actual DOM. It bridges the gap between the virtual DOM managed by React and the real DOM in the browser.

*ReactDOM.render():*

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

* npm (Node Package Manager): Used for JavaScript and Node.js projects.
* Yarn: Another package manager for JavaScript and Node.js, developed as an alternative to npm.

Two types of Dependencies:
* Runtime Dependencies:Runtime dependencies are the components that your application relies on to function properly when it's running or deployed in a live environment. These dependencies are essential for the core functionality of your application. They are required for the application to operate as intended and provide the desired features to users. For example, if you're building a web application, runtime dependencies might include a front-end framework like React or a back-end framework like Express.js.

* Development Dependencies:Development dependencies are components that are necessary during the development and testing phases but are not required for the application to run in a production environment. These dependencies include tools, libraries, and utilities that help with tasks like testing, code linting, bundling, and development server setup. They facilitate the development process but are not included in the final deployment. An example of a development dependency is a testing library like Jest or a build tool like Webpack.

Separating runtime and development dependencies serves several purposes:

* Efficiency: It reduces the size of the final deployment package by excluding development-specific tools and dependencies that aren't needed in a live environment.

* Security: By not including development dependencies in the deployed application, potential vulnerabilities in those tools don't affect the production environment.

* Speed: The separation allows deployment to be faster since only the essential runtime dependencies need to be transferred to the production server.

* Clarity: Clearly distinguishing between the two types of dependencies helps developers understand the roles of different components in the project.

#### what is a Bundler

A bundler is a tool used in web development to combine and package multiple files, such as JavaScript, CSS, and other assets, into a single file (or sometimes multiple files) for more efficient delivery to web browsers. Bundlers play a crucial role in optimizing the performance of web applications by reducing the number of requests made to the server and minimizing the size of the transferred data.

In modern web development, where applications are often built using modular and component-based architectures, developers create code in multiple files to organize and manage their projects. However, when these projects are ready for deployment, it's more efficient to deliver a smaller number of optimized files to the browser, as each additional HTTP request can introduce latency and slow down page loading.

Bundlers typically do the following:

* Dependency Resolution: Bundlers analyze the codebase to determine which files depend on each other. This includes handling imports, requires, and other module loading mechanisms.

* Code Transformation: Bundlers can perform transformations on the code using tools like Babel, which allows developers to use the latest JavaScript features while ensuring compatibility with older browsers.

* Minification: Bundlers can remove unnecessary whitespace, comments, and perform other optimizations to reduce the size of the code.

* Bundle Generation: The bundler combines all the relevant files into a single (or sometimes multiple) bundle(s). This bundle contains the entire application logic and dependencies, reducing the number of requests needed to load the application.

* Asset Management: Bundlers can also handle other types of assets, like images, fonts, and stylesheets, optimizing them for delivery.

Some popular bundlers in the JavaScript ecosystem include:

* Webpack: One of the most widely used bundlers, Webpack is highly configurable and supports a wide range of features beyond bundling, such as code splitting, hot module replacement, and more.

* Parcel: Known for its zero-config setup, Parcel offers a simple and fast way to bundle projects without requiring extensive configuration.

#### package.json & package-lock.json

package.json and package-lock.json are two important files used in Node.js projects to manage dependencies, specify project metadata, and ensure consistent and reproducible builds. They work together to define the project's dependencies and their versions.

package.json:

package.json is a configuration file in JSON format that contains information about your project, including its name, version, author, description, entry points, scripts, and most importantly, its dependencies. It serves as a central source of information and instructions for your project.

Key purposes of package.json:

* Dependency Listing: The "dependencies" and "devDependencies" sections list the runtime and development dependencies respectively. Dependencies are listed along with their version ranges or specific versions.

* Scripts: You can define custom scripts that automate common tasks, such as running tests, building the project, starting a development server, and more.

* Project Metadata: Information about the project, its license, author, description, repository, and other metadata can be included.

* Version Management: package.json helps manage the versions of dependencies used in your project, ensuring consistent behavior across different environments and builds.

package-lock.json:

package-lock.json is a file generated by npm when you install or update dependencies. It's designed to provide a detailed, deterministic snapshot of the exact versions and resolved dependencies of your project at a given point in time.

Key purposes of package-lock.json:

* Dependency Locking: It prevents unexpected changes to dependencies by locking their exact versions. This ensures that the same versions are used across different development and deployment environments.

* Reproducible Builds: Developers and teams can achieve consistent builds, regardless of the time when dependencies were initially installed.

* Dependency Tree: It provides a complete, nested view of the resolved dependency tree, showing how different packages depend on each other.

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

