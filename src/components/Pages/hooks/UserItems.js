import React, { useEffect, useState } from 'react';

const UserItems = () =>  {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://quiet-harbor-16613.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
}

export default UserItems;