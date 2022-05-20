import { GET_USER_DETAILS, EDIT_USER } from "../../actions/userActions";
const initialState = {
  getUserDetailsResult: false,
  getUserDetailsLoading: false,
  getUserDetailsError: false,

  editUserResult: false,
  editUserLoading: false,
  editUserError: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        getUserDetailsResult: action.payload.data,
        getUserDetailsLoading: action.payload.loading,
        getUserDetailsError: action.payload.errorMessage,
      };
    case EDIT_USER:
      return {
        ...state,
        editUserResult: action.payload.data,
        editUserLoading: action.payload.loading,
        editUserError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
