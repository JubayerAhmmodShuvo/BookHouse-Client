import React, { useEffect, useState } from 'react';

const UserItems = () =>  {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
}

export default UserItems;