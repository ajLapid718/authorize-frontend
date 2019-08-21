import axios from "axios";

// ACTION TYPES
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

// ACTION CREATORS
const getUser = user => { 
  return {
    type: GET_USER,
    payload: user
  }
}

const removeUser = () => { 
  return { 
    type: REMOVE_USER 
  }
}

// THUNK CREATORS
export const me = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:5000/auth/me", { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

export const auth = (email, password, method) => async dispatch => {
  let res;
  try {
    res = await axios.post(`http://localhost:5000/auth/${method}`, { email, password }, { withCredentials: true });
  }
  catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  }
  catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.delete("http://localhost:5000/auth/logout", { withCredentials: true });
    dispatch(removeUser());
  }
  catch (err) {
    console.error(err);
  }
};

// REDUCER
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
}

export default reducer;