import React from 'react';

const Blogs = () => {
  return (
    <div className="lg:m-20 m-4  ">
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 1: Difference between Javascript and Node.js?
        </h1>
        <p className=" text-lg mb-6 text-justify "></p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 2: When should you use node.js and when should you use
          mongodb?
        </h1>
        <p className=" text-lg mb-6 text-justify"></p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 3: Differences between sql and nosql databases?
        </h1>
        <p className=" text-lg mb-6 text-justify"></p>
      </div>
      <div className=" bg-violet-200 rounded p-5 mb-4">
        <h1 className="text-left text-3xl font-semibold mb-4  ">
          Question 4: What is the purpose of jwt and how does it work?
        </h1>
        <p className=" text-lg mb-6 text-justify"></p>
      </div>
    </div>
  );
};

export default Blogs;