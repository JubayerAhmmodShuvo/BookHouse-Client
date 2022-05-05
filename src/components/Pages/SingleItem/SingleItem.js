import React from 'react';

const SingleItem = ({ item}) => {
  const { description,book, img, price,supplier,quantity } = item;
  return (
    <div>
      <div className="card border rounded h-full 	 ">
        <img
          src={img}
          alt="stew"
          class="w-full lg:h-96  md:h-72 object-cover"
        />
        <div className="m-4 ">
          <span class="font-bold text-2xl">{book}</span>
          <p class="text-lg p-1 ">
            Supplier : <span className="font-bold">{supplier}</span>
          </p>
          <p class="text-lg p-1">{description}</p>
          <span className="block text-gray-500 text-sm p-1">
            Price : ${price}
          </span>
          <span className="block text-gray-500 text-sm p-1">
            Quantity : {quantity}
          </span>
        </div>
        <button className="btn btn-primary rounded-none ">Update</button>
      </div>
    </div>
  );
};

export default SingleItem;