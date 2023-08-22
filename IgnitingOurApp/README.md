
## Questions & Answer

#### What is NPM

• It is a package manager for JavaScript programming language and is primarily used to manage and share open-source packages of code, also known as packages or modules. These packages can include libraries, frameworks, tools, and other code components that developers can use to build applications more efficiently.

• NPM enables developers to easily install, update, and manage dependencies (third-party libraries and tools) required for their projects.

• It also provides a platform for developers to publish their own packages, making them available for others to use.

#### What is Parcel

* Parcel is a popular open-source web application bundler. A bundler is a tool that takes various source files from your web application, such as JavaScript, CSS, HTML, and images, and bundles them together into optimized files for deployment. 

* The primary purpose of a bundler is to improve the performance and efficiency of web applications by reducing the number of HTTP requests and optimizing the size of the files sent to the browser.

* Parcel is known for its simplicity and zero-config setup. It requires minimal configuration and automatically handles many tasks, such as transforming and bundling your code, handling various file types, and optimizing assets for production.

#### What is ".parcel-cache"

The .parcel-cache directory is a folder created by the Parcel bundler during the build process. It's used to store cached data and artifacts to improve the speed and efficiency of subsequent builds. This cache directory helps Parcel avoid reprocessing and rebuilding files that haven't changed since the last build, which can significantly speed up development iterations.

Here's how the .parcel-cache directory works:

* Caching Dependencies: When you run Parcel to build your project, it analyzes your source code and its dependencies, then performs transformations, bundling, and optimization. The results of these operations are stored in the cache.

* Incremental Builds: If you make changes to your code and run Parcel again, it compares the modified files with the ones in the cache. It will only reprocess and rebuild the files that have changed, using the cached results for the unchanged parts. This incremental build process can save a lot of time during development.

* Faster Development: By utilizing the .parcel-cache directory, Parcel minimizes the amount of work it needs to do during each build, leading to faster build times and quicker feedback as you develop and iterate on your project.

The .parcel-cache directory is generally located in the root directory of your project alongside your source files. While the cache is incredibly helpful for speeding up builds, there might be cases where you encounter issues related to cached data, especially when dependencies change in certain ways. In such cases, you might need to clear the cache to ensure accurate builds.

#### What is 'npx'

NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

#### What is the difference between npm and NPX?

The Npm stands for Node Package Manager. Npm is a package installation tool. Npx is a tool for executing packages. NPX is a npm package runner whose job it is to execute a package from the registry without ever installing it.

#### Which is better npx vs npm?
If the package in issue is only to be used once or twice, rather than every time the project runs, it is preferable to utilize NPX, which will execute the package without installing it. NPM is used to install packages, which we should do if our project requires dependencies or packages.

#### Is NPX installed with npm?
That depends on the version of the NPM. For NPM version 5.2.0, NPX will be installed automatically. For lower versions, you will need to install it separately. 

#### Why we use NPX instead of npm?
NPX stand for  Node Package Execute. With the aid of NPX, we may run packages in a clear and simple manner while avoiding versioning, dependency problems, and installing extra packages that we just need to test.

Conclusion

Now you must have gained familiarity with the tools of NPM and NPX. NPM is a package manager used to install, update or remove packages and dependencies your project requires. NPX is an NPM package used to execute any package on the NPM registry directly without installing it. 

#### dependencies vs devDependencies

Dependencies:

Regular dependencies, often referred to simply as "dependencies," are packages that your project relies on in its runtime or production environment. These packages are required for your application to work correctly and are typically used for functionality that is part of the final product. When users or other developers install your project, these dependencies will be installed as well.

Development Dependencies:

Development dependencies, also known as "dev dependencies," are packages that are only needed during the development and build process of your project. These packages provide tools, utilities, testing frameworks, build scripts, and other resources that help you develop and maintain your codebase but are not necessary for the functioning of your deployed application.

For example, testing libraries like Jest, development server tools, build tools like Babel or Webpack, and linters fall into the category of development dependencies. When you distribute your project, these dependencies are not required and are typically excluded from the installation process.

#### What is Tree Shaking

Tree shaking is a technique used in modern JavaScript build processes to eliminate or "shake off" dead code or unused modules from your application's codebase. The goal of tree shaking is to reduce the size of the final bundle that gets sent to the user's browser, thus improving the application's performance and loading times.

Tree shaking involves analyzing your code to determine which parts of the imported modules are actually used and necessary for your application's functionality. Any code that is not used, or "dead" code, is then safely removed during the build process.

#### What is Hot Module Replacement

Hot Module Replacement (HMR) is a development feature that allows you to update parts of your application in real-time without requiring a full page reload. It's commonly used in conjunction with development servers and build tools to enhance the developer experience by speeding up the feedback loop during the development process.

It's important to note that while HMR is incredibly helpful during development, it's generally not meant for production use. In a production environment, you'd typically bundle and optimize your code, and you wouldn't use HMR due to potential security and performance concerns.

#### What is .gitignore? What should we add and not add to it

The .gitignore file is a configuration file used by the version control system Git to specify which files and directories should be excluded from being tracked and committed in a Git repository. It's especially useful for excluding files that are generated during the development process, contain sensitive information, or are simply not relevant to the version history of the project.

* Files containing passwords, API keys, private credentials, and other sensitive data that should not be exposed in the repository.

* Log files, debugging outputs, and temporary files generated by your development environment.

* Files generated during the build process, including compiled code, bundles, and assets.

#### Why should i not modify package-lock.json

* If you're working on a team or sharing your project with others, modifying package-lock.json could lead to difficulties in recreating the exact environment needed to run the project.

* Manually editing package-lock.json can result in conflicts when merging changes from collaborators, especially in team projects using version control systems like Git.

* By relying on the information in package-lock.json, you can achieve deterministic builds, meaning that anyone who installs the same dependencies will get exactly the same versions. This is crucial for reproducibility and debugging.

#### what is node_modules


node_modules is a directory that's automatically created in a Node.js project when you install dependencies using a package manager like npm (Node Package Manager) or Yarn. It's the default location where these package managers install the packages your project depends on.

Here's how it works:

* You define the dependencies your project needs in the dependencies and devDependencies sections of your package.json file.

* When you run a command like npm install or yarn install, the package manager reads the package.json file and installs the specified packages into the node_modules directory.

* The node_modules directory contains subdirectories for each package, along with their dependencies. This directory structure ensures that different packages don't clash with each other.

#### What is a 'dist' folder


A "dist" folder is often used to store the "distribution" or "build" version of your web application. It's a common practice to organize your project's files during development and then prepare a streamlined, optimized version for deployment. The "dist" folder contains these optimized files.

Here's how it generally works:

* During development, you work with source code, which might include multiple files, assets, styles, scripts, and templates.

* When you're ready to deploy your application, you typically want to minimize the size of the files, optimize assets, and bundle everything together for improved performance.

* This process of creating an optimized version of your application is often referred to as "building" or "compiling." The result is a set of files that are ready to be deployed to a production server.

* The "dist" folder, short for "distribution," is where you place the output of the build process. It contains the optimized and bundled files that your application needs to run efficiently in a production environment.

The contents of the "dist" folder may include:

* Minified and bundled JavaScript files.
* Minified and concatenated CSS files.
* Optimized image files.
* HTML files that reference the minified assets.
* Any other assets required for the application to run.

#### What is a 'Browserlist'

A "Browserslist" is a configuration file and query syntax used by various front-end development tools to specify which browser versions your project's CSS and JavaScript should be compatible with. This helps you define a targeted set of browsers that you want your web application to support. The goal is to optimize your code for the browsers your users are most likely to be using while avoiding unnecessary compatibility work for outdated or less popular browsers.

By using Browserslist, you can automate and centralize the process of determining browser compatibility for your project. This way, you can ensure that your CSS and JavaScript are written to work well across the browsers that matter most to your users, without having to manually maintain compatibility information for each tool you use.
