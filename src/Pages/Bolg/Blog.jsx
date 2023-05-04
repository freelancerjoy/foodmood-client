import React from "react";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="w-10/12 mx-auto my-14">
      <div className="border p-5">
        <h1 className="text-2xl font-bold mb-2">
          Differences between uncontrolled and controlled components.
        </h1>
        <p className="my-5">
          <span className="font-bold ">Uncontrolled Components</span> An
          uncontrolled component is a component that renders form elements,
          where the form element's data is handled by the DOM default DOM
          behavior. To access the input's DOM node and extract its value you can
          use a ref.
        </p>
        <p>
          <span className="font-bold">Controlled Components </span> Controlled
          Components A controlled component is a component that renders form
          elements and controls them by keeping the form data in the component's
          state. In a controlled component, the form element's data is handled
          by the React component not DOM and kept in the component's state. A
          controlled component basically overrides the default behavior of the
          HTML form elements.
        </p>
      </div>

      <div className="border p-5">
        <h1 className="text-2xl font-bold mb-2">
          How to validate React props using PropTypes?
        </h1>
        <p className="my-5">
          <span className="font-bold "> PropTypes</span> Properties validation
          is a useful way to force the correct usage of the components. This
          will help during development to avoid future bugs and problems, once
          the app becomes larger. It also makes the code more readable, since we
          can see how each component should be used. App.propTypes is used for
          props validation. If some of the props aren't using the correct type
          that we assigned, we will get a console warning. After we specify
          validation patterns, we will set App.defaultProps.
        </p>
      </div>
      <div className="border p-5">
        <h1 className="text-2xl font-bold mb-2">
          Difference between nodejs and express js.
        </h1>
        <p className="my-5">
          <span className="font-bold "> Node.js</span> Node.js is a free,
          cross-platform runtime environment and library for running web
          applications outside the client’s browser. Although it was first
          created with real-time, push-based architectures in mind, it is
          utilized for server-side programming and is generally deployed for
          non-blocking, event-driven servers, such as conventional web pages and
          backend API services. Every browser has a unique JavaScript engine,
          and node.js is based on the V8 JavaScript engine found in Google
          Chrome.
        </p>
        <p className="my-5">
          <span className="font-bold "> Express.js</span>One of the best Node.js
          web application frameworks is Express.js. It is extremely lightweight
          and adaptable and has powerful features for the creation of websites
          and mobile applications. Without hiding Node.js functionalities, the
          Express.js framework offers a layer of basic web application features.
          On Express.js, many well-known frameworks are built. Express is a
          straightforward, extensible, and open-source Node.js web application
          framework designed to make building websites, web applications, and
          APIs much easier. Express is ranked fourth among the top 5 backend
          frameworks for 2021, according to a survey by Statistics & Data. In
          order to write responses to specified URLs, it enables you to respond
          to requests with route support. Express.js supports a wide range of
          templating engines for easily generating HTML. The fact that
          Express.js is open-source and quite straightforward is its major
          feature. Express.js was provided as part of a Node.js open-source
          framework. It conveys a silly application creation UI.
        </p>
      </div>
      <div className="border p-5">
        <h1 className="text-2xl font-bold mb-2">
          What is a custom hook, and why will you create a custom hook ?
        </h1>
        <p>
          <span className="font-bold">Custom Hooks </span> Custom React JS hooks
          are reusable functions that a React JS software developer can use to
          add special and unique functionality to the React applications.
          Usually, if there is a requirement to add a feature, one can install a
          third-party library and solve the problem. But what if there is no
          such library with hooks that can be used? This problem is solved by
          using custom React JS hooks.
        </p>
        <p className="my-5">
          <span className="font-bold ">Why use React Cusotm hooks</span> Custom
          React JS hooks offer three major benefits over standard library hooks:
          Reusability, readability, and testability. If you have one or multiple
          React hooks that will be used at multiple locations in a code, you
          should use custom React JS hooks. This helps in making the code more
          readable and make the code clean.
        </p>
      </div>
    </div>
  );
};

export default Blog;
