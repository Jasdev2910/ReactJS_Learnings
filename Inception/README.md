
# Questions & Answers

#### Q1. Difference between library and framework.

Library:

A library is a collection of pre-written code, functions, and classes that you can use to perform specific tasks. Libraries are generally focused on providing a set of tools or utilities that can be used independently within your application. You include a library in your code and call its functions when you need specific functionality.

Key characteristics of a library:

Modularity: Libraries are typically modular, meaning you can choose which specific components you want to use without being forced to adopt the entire library.

Control: You have more control over your application's architecture and flow since you decide when and how to use the library's components.

Flexibility: You can combine multiple libraries together to build a customized solution that suits your application's needs.

Framework:

A framework, on the other hand, is a more comprehensive solution that provides a structured foundation for building applications. It dictates the architecture and flow of your application and often requires you to follow certain conventions and patterns. Instead of calling functions from a library, you build your application by extending and customizing the framework's components.



Key characteristics of a framework:

Inversion of Control: The framework controls the overall flow of your application.

#### Q2. What is CDN? Why we use it?

It's a network of servers that deliver web content (like images, scripts, styles) to users based on their geographic locations.
Used for faster content delivery, reducing server load, and improving user experience.

#### Q3. why is React known as React?

React is known as "React" because its core concept is the reactive updating of user interfaces. It reacts to changes in data or state and efficiently updates the user interface by rendering only the necessary changes. This approach helps create dynamic and responsive user interfaces, which is the primary focus and reason behind the name "React."

#### Q4. What is crossorigin in script tag?

The crossorigin attribute in a <script> tag is used to specify how the browser should handle cross-origin requests when loading external scripts. Cross-origin requests occur when a web page tries to fetch resources (like scripts, stylesheets, images) from a different domain than the one the page is hosted on. This attribute is mainly used for security purposes.

When you include a script from an external domain using a <script> tag, adding the crossorigin attribute helps prevent potential security risks, like certain types of cross-site scripting (XSS) attacks. It also allows you to control how the browser handles cross-origin requests and ensures a safer loading process for external resources.

```javascript
<script src="https://example.com/my-script.js" crossorigin="anonymous"></script>

```

In this example, the external script from https://example.com is loaded with the crossorigin attribute set to "anonymous," indicating that the request should not include credentials.

#### Q5. what is difference between react.production .js and react.development.js files via CDN?

react.production.js:

This file is optimized for production environments.
It's smaller in size due to various optimizations, like minification and removal of development-specific checks and warnings.
Performance is prioritized over debugging and development convenience.
It's suitable for use in the final version of your application that will be deployed to users.

react.development.js:

This file is meant for development and debugging purposes.
It includes additional checks, warnings, and development-related features that assist developers in identifying issues and debugging code.
It's larger in size compared to the production version because of the extra development features.
It's helpful when you're actively working on your application and need detailed error messages and warnings to aid in development.

#### Q6. What is async and Defer?

async Attribute:

When you include the async attribute in a <script> tag, it indicates that the script can be downloaded asynchronously while the HTML parsing and rendering continue.
The script is executed as soon as it's downloaded, even if the rest of the page's content isn't fully loaded yet.

```javascript
<script src="script.js" async></script>

```

defer Attribute:

When you include the defer attribute in a <script> tag, it indicates that the script should be downloaded in the background while the HTML parsing continues.
The script is executed after the HTML parsing is complete, right before the DOMContentLoaded event. This ensures that the script execution doesn't block the rendering of the rest of the page.

```javascript
<script src="script.js" defer></script>

```