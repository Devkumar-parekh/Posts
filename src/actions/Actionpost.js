export const getPosts = (payload) => {
  return {
    type: "getPosts",
    payload,
  };
};

export const getUsers = (payload) => {
  return {
    type: "getUsers",
    payload,
  };
};

export const getComments = (payload) => {
  return {
    type: "getComments",
    payload,
  };
};
