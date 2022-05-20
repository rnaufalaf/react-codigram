import axios from "axios";

const url = "http://localhost:3000";

export const GET_POST = "GET_POST";
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_BY_USER_ID = "GET_POSTS_BY_USER_ID";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const getPost = (postId) => {
  return (dispatch) => {
    dispatch({
      type: GET_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${url}/posts/details/${postId}`,
    })
      .then((res) => {
        dispatch({
          type: GET_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const getPosts = () => {
  return (dispatch) => {
    dispatch({
      type: GET_POSTS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${url}/posts`,
    })
      .then((res) => {
        dispatch({
          type: GET_POSTS,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_POSTS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const getPostsByUserId = (accessToken) => {
  return (dispatch) => {
    dispatch({
      type: GET_POSTS_BY_USER_ID,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${url}/posts/userPosts`,
      headers: {
        accesstoken: accessToken,
      },
    })
      .then((res) => {
        dispatch({
          type: GET_POSTS_BY_USER_ID,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_POSTS_BY_USER_ID,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addPost = (data, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: ADD_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: `${url}/posts/add`,
      data: data,
      headers: {
        accesstoken: accessToken,
      },
    })
      .then((res) => {
        dispatch({
          type: ADD_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const editPost = (data, accessToken, postId) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: `${url}/posts/edit/${postId}`,
      data: data,
      headers: {
        accesstoken: accessToken,
      },
    })
      .then((res) => {
        dispatch({
          type: EDIT_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const deletePost = (accessToken, postId) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_POST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "DELETE",
      url: `${url}/posts/delete/${postId}`,
      headers: {
        accesstoken: accessToken,
      },
    })
      .then((res) => {
        dispatch({
          type: DELETE_POST,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_POST,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
