const initialState = {};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getPosts":
      return { ...state, posts: action.payload };
    case "getUsers":
      return { ...state, users: action.payload };
    case "getComments":
      return { ...state, comments: action.payload };
    // return { ...state, comments: action.payload };
    default:
      return state;
  }
};
