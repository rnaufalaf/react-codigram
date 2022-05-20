import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostsByUserId } from "../redux/actions/postActions";
import { PostCard } from "../components";

import { useNavigate } from "react-router-dom";

const MyPostsPage = () => {
  const {
    getPostsByUserIdResult,
    getPostsByUserIdLoading,
    getPostsByUserIdError,
  } = useSelector((state) => state.PostsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsByUserId(localStorage.getItem("accessToken")));
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div class="px-5 py-4">
      <div class="row">
        <div class="col col-md-7 ">
          <h5 style={{ marginLeft: "30rem" }}>My Posts</h5>
        </div>
        <div class="col col-md-5 ">
          <div align="right">
            <button
              class="btn btn-primary"
              onClick={() => navigate("/home/add")}
            >
              + Add Post
            </button>
          </div>
        </div>
      </div>
      <div class="row py-2 ">
        {getPostsByUserIdResult ? (
          getPostsByUserIdResult.map((post) => {
            return <PostCard data={post} />;
          })
        ) : getPostsByUserIdLoading ? (
          <p>Loading...</p>
        ) : getPostsByUserIdError ? (
          <p>
            {getPostsByUserIdError ? getPostsByUserIdError : "Posts List Empty"}
          </p>
        ) : (
          console.log("get to reducers")
        )}
      </div>
    </div>
  );
};

export default MyPostsPage;
