import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllBooksThunk, logout } from "../../thunks";
import { AllBooksView } from "../views";

class AllBooksContainer extends Component {
  componentDidMount() {
    this.props.fetchAllBooks();
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    return <AllBooksView books={this.props.books} handleLogout={this.props.logout}/>
  }
}

const mapState = (state) => {
  return {
    books: state.books
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooksThunk()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapState, mapDispatch)(AllBooksContainer);