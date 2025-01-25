import React from "react";
import "./Main.css";
import BookCard from "../BookCard/BookCard";

const Main = ({ books }) => {
  return (
    <main>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default Main;
