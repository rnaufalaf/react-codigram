import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../redux/actions/postActions";
import { getUserDetails } from "../redux/actions/userActions";
import { PostCard } from "../components";

import { useNavigate } from "react-router-dom";

const PostsPage = () => {
  const { getPostsResult, getPostsLoading, getPostsError } = useSelector(
    (state) => state.PostsReducer
  );
  const { getUserDetailsResult, getUserDetailsLoading, getUserDetailsError } =
    useSelector((state) => state.UsersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserDetails(localStorage.getItem("accessToken")));
  }, [dispatch]);

  return (
    <div class="px-5 py-4 ">
      <h5 align="center">Timeline</h5>
      <div class="row ">
        <div class="col">
          {getPostsResult ? (
            getPostsResult.map((post) => {
              return <PostCard data={post} />;
            })
          ) : getPostsLoading ? (
            <p>Loading...</p>
          ) : getPostsError ? (
            <p>{getPostsError ? getPostsError : "Posts List Empty"}</p>
          ) : (
            console.log("get to reducers")
          )}
        </div>
        <div class="col py-3">
          <div class="card" style={{ position: "sticky", top: 10 }}>
            <h5 class="p-3">Logged User</h5>
            <hr />
            {getUserDetailsResult ? (
              <div class="row">
                <div class="col-sm-2">
                  <img class="avatar" src={getUserDetailsResult.image} />
                </div>
                <div class="col-sm-6">
                  <strong>
                    <p class="p-2">{getUserDetailsResult.username}</p>
                  </strong>
                  <p style={{ paddingLeft: "7px" }}>
                    {getUserDetailsResult.email}
                  </p>
                  <p style={{ paddingLeft: "7px" }}>
                    {getUserDetailsResult.phone}
                  </p>
                </div>
              </div>
            ) : getUserDetailsLoading ? (
              <p>Loading...</p>
            ) : getUserDetailsError ? (
              <p>
                {getUserDetailsError ? getUserDetailsError : "User is Empty"}
              </p>
            ) : (
              console.log("get to reducers")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsPage;
