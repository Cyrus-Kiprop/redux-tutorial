import { FETCH_POSTS, NEW_POST } from "../actions/types";
import { bindActionCreators } from "redux";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer"); // this will show after the action postActions is tripped during the compoenent will mount
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
