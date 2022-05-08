import React from "react";
import { Link, useParams } from "react-router-dom";
import UseBookDetails from "../hooks/UseBookDetails";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = UseBookDetails(bookId);

  const updateQuantity = (e) => {
    const quantity = book.quantity - 1;
    const sold=book.sold+1;
    const url = `https://quiet-harbor-16613.herokuapp.com/books/${bookId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: quantity, sold: sold }),
    }).then(() => {
      setBook({ ...book, quantity: quantity,sold:sold });
    });
  };

  const reStockQuantity = (e) => { 
    e.preventDefault();
    const quantity = parseInt(book.quantity);
    const reStock = parseInt(e.target.number.value);
    const total = quantity + reStock;
    const url = `https://quiet-harbor-16613.herokuapp.com/books/${bookId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: total }),
    }).then(() => {
      setBook({ ...book, quantity: total });
      e.target.reset();

    })
  }

  return (
    <div>
      <div className="grid lg:grid-cols-2 h-full w-screen mb-16 container">
        <div className="mx-auto my-28">
          <img className=" lg:w-full sm:w-screen h-96" src={book.img} alt="" />
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
          <p>
            <span className="font-bold">Sold </span> : {book.sold}
          </p>

          {book.quantity === 0 ? (
            <button
              onClick={() => updateQuantity(book.quantity)}
              className="btn btn-outline-danger my-4 disabled"
            >
              SoldOut
            </button>
          ) : (
            <button
              onClick={() => updateQuantity(book.quantity, book.sold)}
              className="btn btn-outline-primary my-4"
            >
              Delivered
            </button>
          )}

          <form className="flex " onSubmit={reStockQuantity}>
            <input
              className="border-2  mr-4 rounded border-purple-500 p-2"
              type="number"
              name="number"
              id="number"
            />
            <button className="btn btn-outline-primary p-2">Restock</button>
          </form>
        </div>
      </div>
      <Link className=" grid w-52 mx-auto my-12" to="/manageitems">
        <button className="btn btn-primary">Manage Inventory</button>
      </Link>
    </div>
  );
};

export default BookDetails;
