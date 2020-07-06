import { SIGN_UP, SIGN_IN, USER_LOADED } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}
