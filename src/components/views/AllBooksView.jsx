import React from "react";

const AllBooksView = (props) => {
  return (
    <div>
      {props.books.map(book => (
        <div key={book.id}>
          <h1>{book.title}</h1>
        </div>
      ))}
    </div>
  )
}

export default AllBooksView;