import { combineReducers } from "redux";

import postReducer from "./postReducer";

// this is the root reducer
// the root reducer takes in other reducers i.e the postReducer and names  them accordingly so that the
// can be referenced in other components easily
export default combineReducers({
  posts: postReducer
});
