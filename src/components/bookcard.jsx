// write the book component code here
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white flex flex-col items-center">
      <img
        src={book.image}
        alt={book.name}
        className="w-32 h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{book.name}</h2>
      <p className="text-gray-600">Genre: {book.genre}</p>
      <p className="text-gray-500">Author: {book.author}</p>
    </div>
  );
};

export default BookCard;