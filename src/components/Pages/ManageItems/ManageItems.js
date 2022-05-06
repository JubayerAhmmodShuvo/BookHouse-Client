import React from 'react';
import AllItem from '../AllItem/AllItem';
import UserItems from '../hooks/UserItems';

const ManageItems = () => {
   const [items, setItems] = UserItems();
  return (
    <div>
      <div className="mt-12  lg:mt-24 grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mx-14  mb-2 ">
        {items.map((item) => (
          <AllItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ManageItems;