import React from "react";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-author">👨‍🏫 المؤلف: {book.author}</p>
      <p className="book-isbn">📘 ISBN: {book.isbn}</p>
    </div>
  );
};

export default BookCard;
