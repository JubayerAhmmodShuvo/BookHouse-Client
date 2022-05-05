import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleItem = ({ item}) => {
  const { _id, description, book, img, price, supplier, quantity } = item;
   const navigate=useNavigate();
  const navigateToBookDetail = id => {
    navigate(`/books/${id}`);
  }
  return (
    <div>
      <div className="card border rounded h-full   w-96 mx-auto   	 ">
        <img
          src={img}
          alt="stew"
          className="w-full lg:h-96  md:h-72 object-cover"
        />
        <div className="m-4 ">
          <span className="font-bold text-2xl">{book}</span>
          <p className="text-lg p-1 ">
            Supplier : <span className="font-bold">{supplier}</span>
          </p>
          <p className="text-lg p-1">{description}</p>
          <span className="block text-gray-500 text-sm p-1">
            Price : ${price}
          </span>
          <span className="block text-gray-500 text-sm p-1">
            Quantity : {quantity}
          </span>
        </div  >
        <button onClick={()=>navigateToBookDetail(_id)} className="btn btn-primary rounded-none  ">Update</button>
      </div>
    </div>
  );
};

export default SingleItem;