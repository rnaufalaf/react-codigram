import {
  GET_POST,
  GET_POSTS,
  GET_POSTS_BY_USER_ID,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from "../../actions/postActions";
const initialState = {
  getPostResult: false,
  getPostLoading: false,
  getPostError: false,

  getPostsResult: false,
  getPostsLoading: false,
  getPostsError: false,

  getPostsByUserIdResult: false,
  getPostsByUserIdLoading: false,
  getPostsByUserIdError: false,

  addPostResult: false,
  addPostLoading: false,
  addPostError: false,

  editPostResult: false,
  editPostLoading: false,
  editPostError: false,

  deletePostResult: false,
  deletePostLoading: false,
  deletePostError: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        getPostResult: action.payload.data,
        getPostLoading: action.payload.loading,
        getPostError: action.payload.errorMessage,
      };
    case GET_POSTS:
      return {
        ...state,
        getPostsResult: action.payload.data,
        getPostsLoading: action.payload.loading,
        getPostsError: action.payload.errorMessage,
      };
    case GET_POSTS_BY_USER_ID:
      return {
        ...state,
        getPostsByUserIdResult: action.payload.data,
        getPostsByUserIdLoading: action.payload.loading,
        getPostsByUserIdError: action.payload.errorMessage,
      };
    case ADD_POST:
      return {
        ...state,
        addPostResult: action.payload.data,
        addPostLoading: action.payload.loading,
        addPostError: action.payload.errorMessage,
      };
    case EDIT_POST:
      return {
        ...state,
        editPostResult: action.payload.data,
        editPostLoading: action.payload.loading,
        editPostError: action.payload.errorMessage,
      };
    case DELETE_POST:
      return {
        ...state,
        deletePostResult: action.payload.data,
        deletePostLoading: action.payload.loading,
        deletePostError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default posts;
