import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import AllItem from '../AllItem/AllItem';
import Loading from '../Loading/Loading';


const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItem] = useState([]);
  
  
  
  
  useEffect(() => { 
    
    const getItems = async () => { 
      const email = user?.email;
      
      const url = `https://quiet-harbor-16613.herokuapp.com/book?email=${email}`; 
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('user')}`
        }
      });
    

      setItem(data);
     
      
      
      
    }
    getItems();

  }, [user]);
 
 
  
  const handleDeleteBtn = (id) => {
    const confirm = window.confirm("Want to delete this item");
    if (confirm) {
      const url = `https://quiet-harbor-16613.herokuapp.com/books/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const rest = items.filter((item) => item._id !== id);
          setItem(rest);
        });
    }
  };
    
  
  
  return (
    <div>
      
      
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

export default MyItems;