import React, { useState } from 'react';
import { ToastContainer,toast } from "react-toastify";
import Loading from "../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import UserItems from '../hooks/UserItems';

const AllItem = ({ item }) => {
  const [loading, setLoading] = useState(false);
const   [items, setItems]=UserItems();
  
  const { _id, description, book, img, price, supplier, quantity } = item;

  const deleteItem = id => {
    const url = `http://localhost:5000/books/${id}`;
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      toast.success('Item Deleted Successfully');
      setTimeout(() => {
        window.location.reload();
      }
      , 1000);
      
      
    });
  }
  if (loading) {
    return <Loading />;
  }
    

  
  return (
    <div>
      <div className="card border rounded h-full   w-full mx-auto   	 ">
        <img
          src={img}
          alt="stew"
          className="w-full lg:h-96  md:h-72 object-cover"
        />
        <ToastContainer />
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
          <button
            onClick={()=>deleteItem(_id)}
            
            className="btn btn-danger rounded grid mt-3 w-50 mx-auto "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllItem;