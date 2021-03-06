import React from "react";
import { Link } from "react-router-dom";
import book from "../../images/book.png";

import Delivery from "../Delivery/Delivery";
import UserItems from "../hooks/UserItems";
import SingleItem from "../SingleItem/SingleItem";
import Loading from "../Loading/Loading";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
  const [items, setItems] = UserItems();
  if (!items.length) { 
    return <Loading />
  }

  return (
    <div className="">
      {/* Banner section */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:my-14 ">
        <div className=" lg:h-1/3 lg:w-1/2   mx-auto my-6 ">
          <img className="rounded  " src={book} alt="" />
        </div>
        <div className="mx-auto my-auto">
          <h1 className="text-4xl font-extrabold text-red-400 my-6 text-center	">
            Meet Your Next Favourite Books
          </h1>
          <p className="text-xl text-justify mx-4 p-3 ">
            Book is one's best friend. A good book is compared to hundred of
            friend. The 100 Most Iconic Book Quotes By Melissa Flandreau. April
            28, 2020. 11 min read From a stunning first sentence to a perfect
            string of dialogue, there are certain parts of books that feel
            particularly memorable. And whether they make us laugh, cry, or
            simply reflect, these quotable lines have a habit of sticking with
            us long after we turn the final page. And we store books in our
            warehouse for business and you can stock it here or we can sell it
            from here for your business.
          </p>
        </div>
      </div>

      {/* Inventory section */}

      <div className=" mb-20">
        <h1 className="text-4xl font-extrabold text-center my-8  ">
          <span className="border-b-2 p-2 border-sky-700 text-indigo-900">
            Inventory
          </span>
        </h1>
        <div className="mt-12  lg:mt-24 grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mx-14  mb-2 ">
          {items.slice(0, 6).map((item) => (
            <SingleItem key={item._id} item={item} />
          ))}
        </div>
        <Link className=" grid w-52 mx-auto my-12" to="/manageitems">
          <button className="btn btn-primary">Manage Inventory</button>
        </Link>
      </div>
      {/* Extra -1 */}
      <Delivery />
      {/* Extra -2 */}

      <WhyUs />
    </div>
  );
};

export default Home;
