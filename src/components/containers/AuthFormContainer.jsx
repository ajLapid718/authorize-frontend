import React, { Component } from "react";
import { connect } from "react-redux";
import { auth } from "../../thunks";
import { AuthFormView } from "../views";

// Smart container;
class AuthFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup(this.state.email, this.state.password, formName);
  }

  render() {
    return (
      <AuthFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        isLoggedIn={this.props.isLoggedIn}
        userEmail={this.props.userEmail}
      />
    );
  }
};

// Map state to props;
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email
  };
};

// Map state to props;
const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (email, password, formName) => dispatch(auth(email, password, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(AuthFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(AuthFormContainer);