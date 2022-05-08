import React, { useEffect, useState } from 'react';

const UseBookDetails = bookId => {
  const [book, setBook] = useState({});
  useEffect(() => {
    const url = `https://quiet-harbor-16613.herokuapp.com/books/${bookId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [bookId]);
  return [book,setBook];
}

export default UseBookDetails;