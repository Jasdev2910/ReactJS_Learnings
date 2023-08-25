## Assignment Screenshots

![App Screenshot](./src/assets/Screenshot.png)

#### What is JSX

JSX (JavaScript XML) is an extension to the JavaScript language that allows you to write HTML-like code within your JavaScript code. It's commonly used with libraries like React to describe the structure and appearance of user interfaces. JSX provides a more readable and concise way to create and manipulate the DOM elements compared to using JavaScript methods directly.

**{Title()} vs <Title /> vs <Title></Title>**

It looks like you've provided three different ways of using a component named `Title` in JSX syntax. Let's break down each of them:

1. **Function Call:**

```jsx
{Title()}
```

In this case, you are directly calling the `Title` function within curly braces `{}`. However, if `Title` is a component (React component), it's generally used with JSX syntax and should be treated as a JSX element. If `Title` is a function returning JSX, you should use it as a JSX element, not as a function call.

2. **Self-Closing JSX Element:**

```jsx
<Title />
```

This is a typical way to use a JSX component. You're using the `<Title />` syntax to create and render an instance of the `Title` component. If `Title` is a valid React component, this is the correct way to render it.

3. **Opening and Closing JSX Tags:**

```jsx
<Title></Title>
```

This is equivalent to the self-closing JSX element above. Both `<Title />` and `<Title></Title>` create instances of the `Title` component. The self-closing form (`<Title />`) is often preferred for components that don't have any children, as it's more concise.


 **The role of type attribute in script tag**

In the context of HTML, the `type` attribute in the `<script>` tag specifies the MIME type of the content within the script element. It tells the browser what type of content is being used in the script so that it can be properly interpreted and executed. Here's how the `type` attribute works:

```html
<script type="text/javascript">
  // JavaScript code here
</script>
```

The `type` attribute is used to indicate that the content within the `<script>` tag is JavaScript code. However, in modern HTML5, the `type` attribute is not strictly necessary when using JavaScript, as `text/javascript` is the default value for the `type` attribute.

***MIME (Multipurpose Internet Mail Extensions)*** type is a label used to identify the type of data contained in a file or transmitted over a network. MIME types were originally developed for email purposes to identify the types of files attached to email messages, but they are now widely used in other contexts, such as web development and HTTP communication.

Each MIME type consists of a primary type and a subtype, separated by a slash (/). For example, the MIME type for plain text is text/plain, where text is the primary type and plain is the subtype.

MIME types play a crucial role in various scenarios:

Web Development: When a web browser requests a resource from a server, the server responds with a MIME type in the Content-Type header. This informs the browser about the type of content it's receiving, allowing the browser to handle and display it appropriately. For example, a server might send an HTML file with the text/html MIME type.