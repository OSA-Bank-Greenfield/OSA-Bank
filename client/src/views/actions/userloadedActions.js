import { USER_LOADED } from "./types";
import axios from "axios";
// check token & load user

export const loadUser = (getData) => (dispatch, getState) => {
  // call the user loading changes the value of loading from false to true
  axios
    .get("http://localhost:5000/auth/user", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED, // we define it in the authReducer with the switchs
        payload: res.data, // we will send an object the user object and the token itself
      })
    )
    .catch((err) => {
      throw err;
    });
};

//Setup config/headers and token

export const tokenConfig = (getState) => {
  // get the token from the local storage
  const token = getState().auth.token; // get the token from the authReducer file

  //add the token to the headers
  const config = {
    headers: {
      "Content-type": "application/json", //we're sending json object
    },
  };
  // check the token ( if token then added to headers)

  if (token) {
    config.headers["x-auth-token"] = token; // we set that to our token from the localstorage
  }
  return config;
};
