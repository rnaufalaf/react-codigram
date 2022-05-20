import axios from "axios";

const url = "http://localhost:3000";

export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const EDIT_USER = "EDIT_USER";

export const getUserDetails = (accessToken) => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAILS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: `${url}/users/details`,
      headers: {
        accesstoken: accessToken,
      },
    })
      .then((res) => {
        dispatch({
          type: GET_USER_DETAILS,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_DETAILS,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const editUser = (data, accessToken) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: `${url}/users/edit`,
      data: data,
      headers: {
        accesstoken: accessToken,
      },
    })
      .then((res) => {
        dispatch({
          type: EDIT_USER,
          payload: {
            loading: false,
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: EDIT_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
