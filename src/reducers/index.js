import { combineReducers } from "redux";

import postReducer from "./postReducer";

// this is the root reducer
export default combineReducers({
  posts: postReducer
});
