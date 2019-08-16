import React from "react";

const AllBooksView = (props) => {
  return (
    <div>
      {props.books.map(book => (
        <div id={book.id}>
          <h1>{book.title}</h1>
        </div>
      ))}
    </div>
  )
}