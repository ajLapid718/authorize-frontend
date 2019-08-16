import React from "react";

const AllBooksView = (props) => {
  const { handleLogout } = props;
  return (
    <div>
      <h1><button onClick={handleLogout}>Logout</button></h1>
      {props.books.map(book => (
        <div key={book.id}>
          <h3>- {book.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default AllBooksView;