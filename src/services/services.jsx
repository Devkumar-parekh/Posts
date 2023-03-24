import axios from "axios";
import { getPosts, getComments, getUsers } from "../actions/Actionpost";
export const setpostData = (searchq, pageNum, postpg) => {
  return function (dispatch) {
    axios
      .get(
        // `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${postpg}`
        `https://jsonplaceholder.typicode.com/posts`
        // `https://jsonplaceholder.typicode.com/posts?_page=${pageNum}&_limit=${postpg}`
      )
      .then((response) => {
        console.log(response.data);
        const temp = response.data.filter(
          (val) => val.body.includes(searchq) || val.title.includes(searchq)
        );
        console.log(temp);
        dispatch(getPosts(temp));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export const setuserData = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        dispatch(getUsers(response.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const setCommentData = () => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        dispatch(getComments(response.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
