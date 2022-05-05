import React, { useEffect, useState } from 'react';

const UserItems = () =>  {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
}

export default UserItems;