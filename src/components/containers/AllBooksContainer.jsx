import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBooksThunk } from "../../thunks";
import { AllBooksView } from "../views";

class AllBooksContainer extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  render() {
    return <AllBooksView books={this.props.books}/>
  }
}

const mapState = (state) => {
  return {
    books: state.books
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooksThunk())
  }
}

export default connect(mapState, mapDispatch)(AllBooksContainer);