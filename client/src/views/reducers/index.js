import { combineReducers } from "redux";
import postReducer from "./signReducer";
// import signinReducer from './signinReducer';

export default combineReducers({
  posts: postReducer,
});
