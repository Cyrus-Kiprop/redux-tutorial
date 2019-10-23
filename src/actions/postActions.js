import { FETCH_POSTS, NEW_POST } from "./types";

// an action is like an handler function that the user triggers

// an actions always returns a response and its type
export const fetchPosts = () => dispatch => {
  console.log("fetching");
  // nested arrow functions
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const newPost = postData => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: { "content-type": "application/JSON" },
    body: JSON.stringify(postData)
  })
    .then(response => response.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
