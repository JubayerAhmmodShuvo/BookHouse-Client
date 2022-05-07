import React from 'react';
import UserItems from '../hooks/UserItems';
import AllItem from '../AllItem/AllItem';

const ManageItems = () => {
  const [items, setItems] = UserItems();
    const handleDeleteBtn = id => {
        const confirm = window.confirm('Want to delete this item');
        if (confirm) {
            const url = `http://localhost:5000/books/${id}`;
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
        <div className="mt-12  lg:mt-24 grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mx-14  mb-2 ">
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