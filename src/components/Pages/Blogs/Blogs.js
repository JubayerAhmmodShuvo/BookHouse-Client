import React from 'react';

const Blogs = () => {
  return (
    <div className="lg:m-20 m-4  ">
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 1: Difference between Javascript and Node.js?
        </h1>
        <p className=" text-lg mb-6 text-justify ">
          Javascript is a lightweight, object-oriented scripting language that
          is used to build dynamic HTML pages with interactive effects on a
          webpage. JavaScript is also commonly used in game development and
          mobile app development. It is an interpreted scripting language, and
          the code can only be executed and run in a web browser. Mainly using
          for any client side activity foraweb application, like possíble
          attribute validation or refreshing the page inaspecific interval or
          provide some dynamic changes in web pages without refreshing the page.
          Java Script running any engine like Spider monkey (Fire Fox, Java
          Script Core Safari), V8 (Coogle Chrome). Node.js is a cross-platform,
          open-source JavaScript runtime environment that enables JavaScript to
          be run on the server. Node.js enables JavaScript code to run outside
          of the browser. It mainly using for accessing or performing any
          non-blocking operation of any operating system, like creating or
          executing shell script or accessing any hardware specific information
          or running any backend job. Node JS only run in V8 engine which mainly
          using by google chrome. Ánd javascript program which will be written
          under this Node JS will be always run in V8 Engine.
        </p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 2: When should you use node.js and when should you use
          mongodb?
        </h1>
        <p className=" text-lg mb-6 text-justify">
          Node.js is a runtime environment that executes JavaScript code on the
          server-side. (A runtime environment is the infrastructure that
          supports building and running software applications.) Node.js is built
          on top of Google’s Chrome V8 JavaScript engine, which is one of the
          fastest JavaScript engines. Node’s main advantage is that one
          JavaScript developer can work on the whole web application instead of
          two developers working on the frontend and backend side. Furthermore,
          frontend and backend applications can share the JS code. Code
          reusability makes application development costs less.Node.js is a free
          open-source environment which is fast, cost effective and a great
          solution back-end programming. Node.js creates powerful and adaptable
          applications. Because of its speed and multi-tasking abilities,
          Node.js is one of the tools used widely for building applications, web
          servers or networking tools. MongoDB is Object-Oriented, simple,
          dynamic and scalable NoSQL database. It is based on the NoSQL document
          store model, in which data objects are stored as separate documents
          inside a collection instead of storing the data into columns and rows
          of a traditional relational database. Storing data in mongodb provides
          high performance, high availability, and automatic scaling. MongoDB is
          an extremely simple and easy Install/Implement. The core of MongoDB
          storage is documents and it’s stored as JSON or BSON objects. General
          distributions of MongoDB support Windows, Linux, Mac OS X, and
          Solaris. As one of the leading NoSQL databases, MongoDB offers a
          number of advantages. With fast scalability and flexibility in the
          handling of data, it is helping businesses streamline their data
          services, manage applications better and also improve on user
          experience.
        </p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 3: Differences between sql and nosql databases?
        </h1>
        <p className=" text-lg mb-6 text-justify">
          SQL is the default language for relational databases. A relational
          database stores data points that are related to each other and are
          represented in tables. Basic operations like insert, search, update,
          and delete can be performed among more complex tasks like optimizing
          and maintenance. In order to manage this each developer had to have a
          good understanding of the unique structure. This was inefficient and
          hard to maintain. The relational model was created to give a
          standardized approach to databases that could be used by any
          application. Over time SQL was developed as a way to write and query
          data in relational databases and for many years was the most widely
          used language. NoSQL was developed in the early 2000’s with the
          intention of focusing on scaling and allowing frequent application
          changes. Instead of a tabular schema it opts to use a method that is
          optimized for the type of data that is being stored. Examples can be
          key-value pairs, JSON documents, or a graph. Non-relational databases
          do not have a standard language used to query data. Technically SQL
          could be used but it may not be efficient.
        </p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 4: What is the purpose of jwt and how does it work?
        </h1>
        <p className=" text-lg mb-6 text-justify">
          JWT stands for “JSON web token” it is an open standard (RFC 7519)
          that defines a compact and self-contained way for securely
          transmitting information between parties as a JSON object. JWT is
          simply a token that is written in JSON format. It is really safe to
          use because it can be signed in using a secret (with the HMAC
          algorithm) or a public/private key pair using RSA or ECDSA. Instead of
          storing information on the server after authentication, JWT creates a
          JSON web token and encodes, sterilizes, and adds a signature with a
          secret key that cannot be tampered with. This key is then sent back to
          the browser. Each time a request is sent, it verifies and sends the
          response back. The main difference here is that the user’s state is
          not stored on the server, as the state is instead stored inside the
          token on the client-side. JWT also allows us to use the same JSON Web
          Token in multiple servers that you can run without running into
          problems where one server has a certain session, and the other server
          doesn’t. When a server receives a JWT, it can guarantee the data it
          contains can be trusted because it's signed by the source.
        </p>
      </div>
    </div>
  );
};

export default Blogs;