import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_BOOKS = "FETCH_ALL_BOOKS";

// ACTION CREATORS;
const fetchAllBooks = (books) => {
  return {
    type: FETCH_ALL_BOOKS,
    payload: books
  }
}

// THUNK CREATORS;
export const fetchAllBooksThunk = () => async dispatch => {
  try {
    const { data } = await axios.get("/api/books");
    dispatch(fetchAllBooks(data));
  }
  catch (err) {
    console.log(err);
  }
}

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_BOOKS:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;