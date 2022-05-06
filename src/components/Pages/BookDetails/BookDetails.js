import React from "react";
import { useParams } from "react-router-dom";
import UseBookDetails from "../hooks/UseBookDetails";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = UseBookDetails(bookId);

  const updateQuantity = (e) => {
    const quantity = book.quantity - 1;
    const url = `http://localhost:5000/books/${bookId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity }),
    }).then(() => {
      setBook({ ...book, quantity: quantity });
    });
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 h-full w-full">
        <div className="mx-auto my-28">
          <img className=" w-96 h-96" src={book.img} alt="" />
        </div>
        <div className="mx-auto my-auto text-lg space-y-4 px-4 text-justify">
          <h1 className="font-bold text-2xl">
            Book Name : <span className="text-emerald-900">{book.book}</span>
          </h1>
          <p>
            <span className="font-bold">Supplier</span> : {book.supplier}
          </p>
          <p>
            <span className="font-bold">Description</span> : {book.description}
          </p>
          <p>
            <span className="font-bold">Price</span> : ${book.price}
          </p>
          <p>
            <span className="font-bold">Quantity </span> : {book.quantity}
          </p>

          <button
            onClick={() => updateQuantity(book.quantity)}
            className="btn btn-primary my-4"
          >
            Delivered
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
