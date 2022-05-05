import React from 'react';
import book from "../../images/book.png";


const Home = () => {
  return (
    <div>
      {/* Banner section */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 ">
        <div className=" lg:h-1/3 lg:w-1/2  mx-auto my-6 ">
          <img className="rounded  " src={book} alt="" />
        </div>
        <div className="mx-auto my-auto">
          <h1 className="text-4xl font-extrabold text-red-400 my-6 text-center	">
            Meet Your Next Favourite Book
          </h1>
          <p className="text-lg text-justify mx-4 p-4">
            Book is one's best friend. A good book is compared to hundred of
            friend. The 100 Most Iconic Book Quotes By Melissa Flandreau. April
            28, 2020. 11 min read From a stunning first sentence to a perfect
            string of dialogue, there are certain parts of books that feel
            particularly memorable. And whether they make us laugh, cry, or
            simply reflect, these quotable lines have a habit of sticking with
            us long after we turn the final page.
          </p>
        </div>
      </div>

      {/* Inventory section */}

      <div className="">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 ">
          
        </div>
      </div>
    </div>
  );
};

export default Home;