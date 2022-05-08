import React from 'react';
import UserItems from '../hooks/UserItems';
import AllItem from '../AllItem/AllItem';
import { Link } from "react-router-dom";
import Loading from '../Loading/Loading';

const ManageItems = () => {
  const [items, setItems] = UserItems();
  if (!items.length) {
    return <Loading />
  }
    const handleDeleteBtn = id => {
        const confirm = window.confirm('Want to delete this item');
        if (confirm) {
            const url = `https://quiet-harbor-16613.herokuapp.com/books/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const rest = items.filter(item => item._id !== id);
                    setItems(rest);
                })
        }
    }
    return (
      <div className="">
        <div className="flex align-center justify-center mt-10">
          <Link to="/additems">
            <button className="btn btn-primary mx-auto ">Add New Item</button>
          </Link>
        </div>
        <div className="mt-8  lg:mt-24 grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mx-14  mb-2 ">
          {items.map((item) => (
            <AllItem
              key={item._id}
              item={item}
              handleDeleteBtn={handleDeleteBtn}
            />
          ))}
        </div>
      </div>
    );
};


export default ManageItems;