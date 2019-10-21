import { FETCH_POSTS, NEW_POST } from "./types";

// an action is like an handler function that the user triggers

export function fetchPosts() {
  return function(dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(result => result.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts
        })
      );
  };
}

// implementing the above action using the es6 way

// an actions always returns a response and its type
// export const fetchPosts = () => dispatch => {
//   console.log("fetching");
//   // nested arrow functions
//   fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };
