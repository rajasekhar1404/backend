### 1. How does React work
```
React creates a virtual DOM. When state changes in a component it firstly runs a "diffing" algorithm, which identifies what has changed in the virtual DOM. The second step is reconciliation, where it updates the DOM with the results of diff.
```
### 2. What is props in React
```
Props are inputs to a React component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes. i.e, They are data passed down from a parent component to a child component. The primary purpose of props in React is to provide following component functionality: Pass custom data to your React component, Trigger state changes and Use via this.props.reactProp inside component's render() method.
```
### 3. What Is Replication In MongoDB
```
Replication is the process of synchronizing data across multiple servers. Replication provides redundancy and increases data availability. With multiple copies of data on different database servers, replication protects a database from the loss of a single server. Replication also allows you to recover from hardware failure and service interruptions.
```
### 4. What are Higher-Order components
```
A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it’s a pattern that is derived from React’s compositional nature We call them as “pure’ components” because they can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components.
```
### 5. What do you mean by Asynchronous API
```
All APIs of Node.js library are aynchronous that is non-blocking. It essentially means a Node.js based server never waits for a API to return data. Server moves to next API after calling it and a notification mechanism of Events of Node.js helps server to get response from the previous API call.
```
### 6. What is Callback Hell
```
The asynchronous function requires callbacks as a return parameter. When multiple asynchronous functions are chained together then callback hell situation comes up.
```
### 7. What is Reconciliation
```
When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation.
```
### 8. Does Mongodb Support Foreign Key Constraints
```
No. MongoDB does not support such relationships. The database does not apply any constraints to the system (i.e.: foreign key constraints), so there are no "cascading deletes" or "cascading updates". Basically, in a NoSQL database it is up to you to decide how to organise the data and its relations if there are any.
```
### 9. How Node prevents blocking code
```
By providing callback function. Callback function gets called whenever corresponding event triggered.
```
### 10. How can you achieve transaction and locking in MongoDB
```
To achieve concepts of transaction and locking in MongoDB, we can use the nesting of documents, also called embedded (or sub) documents. MongoDB supports atomic operations within a single document.
```
### 11. How does Node.js handle child threads
```
Node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. Technically, Node.js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop. If threading support is desired in a Node.js application, there are tools available to enable it, such as the ChildProcess module.
```
### 12. How to avoid Callback Hell in Node.js
```
Node.js internally uses a single-threaded event loop to process queued events. But this approach may lead to blocking the entire process if there is a task running longer than expected. Node.js addresses this problem by incorporating callbacks also known as higher-order functions. So whenever a long-running process finishes its execution, it triggers the callback associated. Sometimes, it could lead to complex and unreadable code. More the no. of callbacks, longer the chain of returning callbacks would be. There are four solutions which can address the callback hell problem: Make your program modular, Use async/await mechanism, Use promises mechanism and Use generators
```
### 13. If Node.js is single threaded then how it handles concurrency
```
Node provides a single thread to programmers so that code can be written easily and without bottleneck. Node internally uses multiple POSIX threads for various I/O operations such as File, DNS, Network calls etc. When Node gets I/O request it creates or uses a thread to perform that I/O operation and once the operation is done, it pushes the result to the event queue. On each such event, event loop runs and checks the queue and if the execution stack of Node is empty then it adds the queue result to execution stack.
```
### 14. What are Pure Components
```
PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component, on the other hand, won’t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.
```
### 15. What are React Hooks
```
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.
```
### 16. What is Aggregation in MongoDB
```
Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function and single purpose aggregation methods and commands.
```
### 17. What is JSX
```
JSX is a syntax extension to JavaScript and comes with the full power of JavaScript. JSX produces React elements. You can embed any JavaScript expression in JSX by wrapping it in curly braces. After compilation, JSX expressions become regular JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:
```
### 18. What is ReactDOM
```
It's a top-level React API to render a React element into the DOM, via the ReactDOM.render method.
```
### 19. What is Sharding in MongoDB
```
Sharding is a method for storing data across multiple machines. MongoDB uses sharding to support deployments with very large data sets and high throughput operations.
```
### 20. What is Stream and what are types of Streams available in Node.js
```
Streams are a collection of data that might not be available all at once and don’t have to fit in memory. Streams provide chunks of data in a continuous manner. It is useful to read a large set of data and process it. There is four fundamental type of streams: Readable, Writeable, Duplex and Transform
```
### 21. What is prop drilling
```
When building a React application, there is often the need for a deeply nested component to use data provided by another component that is much higher in the hierarchy. The simplest approach is to simply pass a prop from each component to the next in the hierarchy from the source component to the deeply nested component. This is called prop drilling.
```
### 22. What is Key
```
A key is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.
```
### 23. What is a Blocking Code
```
If application has to wait for some I/O operation in order to complete its execution any further then the code responsible for waiting is known as blocking code.
```
### 24. What is the difference between ShadowDOM and VirtualDOM
```
Virtual DOM is about avoiding unnecessary changes to the DOM, which are expensive performance-wise, because changes to the DOM usually cause re-rendering of the page. Virtual DOM also allows to collect several changes to be applied at once, so not every single change causes a re-render, but instead re-rendering only happens once after a set of changes was applied to the DOM. Shadow DOM is mostly about encapsulation of the implementation. A single custom element can implement more-or-less complex logic combined with more-or-less complex DOM. An entire web application of arbitrary complexity can be added to a page by an import and but also simpler reusable and composable components can be implemented as custom elements where the internal representation is hidden in the shadow DOM like .
```
### 25. What's the Event Loop
```
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible. Every I/O requires a callback - once they are done they are pushed onto the event loop for execution. Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background. When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.
```
### 26. What's the difference between a "smart" component and a "dumb" component
```
Smart components manage their state or in a Redux environment are connected to the Redux store. Dumb components are driven completely by their props passed in from their parent and maintain no state of their own.
```
### 27. What is Mongoose
```
Mongoose is an Object Document Mapper (ODM), which means that by using Mongoose, you can define objects with a strongly-typed schema that can be further mapped to a MongoDB document. It offers a schema-based solution for modeling application data. Mongoose comes with built-in typecasting, validation, query building, business logic hooks, and many more out-of-the-box features.
```
### 28. What is REPL In Node.Js
```
REPL or “Read Eval Print Loop” is a simple program that can accept commands, evaluate them, and prints the results. What REPL does is to create an environment that is similar to a Unix/Linux shell or a Window console, wherein you can enter command and system, and it will respond with the output. Here are the functions that REPL performs: READ (This reads the input provided by the user, parses it into JavaScript data structure, and stores it in the memory.), EVAL (This executes the data structure), PRINT (This prints the outcome generated after evaluating the command.) and LOOP (This loops the above command until the user presses Ctrl+C twice.)
```
### 29. How to check if an object is an array or not in JavaScript
```
The best way to find whether an object is instance of a particular class or not using toString method from Object.prototype
```
### 30. List down the two arguments that async.queue takes as input in Node.js
```
Task functions and Concurrency value
```
### 31. What is the purpose of module.exports in Node.js
```
This is used to expose functions of a particular module or file to be used elsewhere in the project. This can be used to encapsulate all similar functions in a file which further improves the project structure.
```
### 32. What is node.js streams
```
Streams are instances of EventEmitter which can be used to work with streaming data in Node.js. They can be used for handling and manipulating streaming large files(videos, mp3, etc) over the network. They use buffers as their temporary storage.
```
### 33. What are node.js buffers
```
In general, buffers is a temporary memory that is mainly used by stream to hold on to some data until consumed. Buffers are introduced with additional use cases than JavaScript’s Unit8Array and are mainly used to represent a fixed-length sequence of bytes. This also supports legacy encodings like ASCII, utf-8, etc. It is a fixed(non-resizable) allocated memory outside the v8.
```
### 34. Explain the concept of stub in Node.js
```
Stubs are used in writing tests which are an important part of development. It replaces the whole function which is getting tested.
```
### 35. What is a thread pool and which library handles it in Node.js
```
The Thread pool is handled by the libuv library. libuv is a multi-platform C library that provides support for asynchronous I/O-based operations such as file systems, networking, and concurrency.
```
### 36. How to make node modules available externally
```
module.export
```
### 37. What is the default scope of Node.js application
```
Local
```
### 38. Which module is used to serve static files in Node.js
```
node-static
```
### 39. What is a Document in MongoDB
```
A Document in MongoDB is an ordered set of keys with associated values. It is represented by a map, hash, or dictionary.
```
### 40. What is the Mongo Shell
```
It is a JavaScript shell that allows interaction with a MongoDB instance from the command line. With that one can perform administrative functions, inspecting an instance, or exploring MongoDB.
```
### 41. How do you Delete a Document in MongoDB
```
The CRUD API in MongoDB provides deleteOne and deleteMany for this purpose. Both of these methods take a filter document as their first parameter. The filter specifies a set of criteria to match against in removing documents.
```
### 42. Explain the process of Sharding.
```
Sharding is the process of splitting data up across machines. We also use the term “partitioning” sometimes to describe this concept. We can store more data and handle more load without requiring larger or more powerful machines, by putting a subset of data on each machine.
```
### 43. What is a Replica Set in MongoDB
```
To keep identical copies of your data on multiple servers, we use replication. It is recommended for all production deployments. Use replication to keep your application running and your data safe, even if something happens to one or more of your servers. Such replication can be created by a replica set with MongoDB. A replica set is a group of servers with one primary, the server taking writes, and multiple secondaries, servers that keep copies of the primary’s data. If the primary crashes, the secondaries can elect a new primary from amongst themselves.
```
### 44. What is Scaffolding in Express.js
```
Scaffolding is creating the skeleton structure of application. There are 2 way to do this: Express application generator and Yeoman
```
### 45. What is routing and how routing works in Express.js
```
Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). Each route can have one or more handler functions, which are executed when the route is matched.
```
### 46. What is Middleware in Express.js
```
Middleware is a function that is invoked by the Express routing layer before the final request handler.
```
### 47. What Function Arguments Are Available To Express.js Route Handlers
```
The arguments available to an Express.js route handler function are: req (the request object), res (the response object) and next (optional, a function to pass control to one of the subsequent route handlers)
```
### 48. How Can I Authenticate Users in Express
```
Authentication is another opinionated area that Express does not venture into. You may use any authentication scheme you wish.
```
### 49. Which Template Engines Does Express Support
```
Express supports any template engine that conforms with the (path, locals, callback) signature.
```
### 50. How Do I Render Plain Html in Express
```
There’s no need to “render” HTML with the res.render() function. If you have a specific file, use the res.sendFile() function. If you are serving many assets from a directory, use the express.static() middleware function.
```