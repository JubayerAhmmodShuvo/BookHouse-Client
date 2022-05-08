import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../Loading/Loading";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const navigate= useNavigate();
 
  const onSubmit = (data) => {
    const url = `https://quiet-harbor-16613.herokuapp.com/books`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      toast.success("Item Added Successfully");
      
     navigate("/myitems");
    }
    );
 
  }
  
  return (
    <div className="my-16">
      <h1 className="text-2xl font-bold text-center my-10 ">
        <span className="border-b-4 border-sky-700 p-2">Add New Item</span>
      </h1>
      <form
        className=" flex flex-column flex-center space-y-6 w-96 mx-auto "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border-2 border-sky-700 rounded p-2"
          placeholder="Book Name"
          {...register("book", { required: true, maxLength: 50 })}
        />
        <input
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Supplier Name"
          {...register("supplier", { required: true, maxLength: 50 })}
        />
        <input
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Email"
          {...register("email", { required: true, maxLength: 50 })}
          value={user?.email}
         readOnly
        />
       
        <textarea
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <input
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Price"
          type="text"
          {...register("price")}
        />
        <input
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <input
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Sold"
          type="number"
          {...register("sold")}
          disabled
          value={0}
        />
        <input
          className="border-2 border-sky-700 rounded p-2 "
          placeholder="Image URL"
          {...register("img", { required: true })}
        />

        <input
          className="btn btn-outline-primary"
          type="submit"
          value="Add Item"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItems;