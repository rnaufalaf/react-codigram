import React, { useEffect } from "react";
import { PostCard } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/postActions";

import { useParams } from "react-router-dom";

const SearchedPostsPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  const { getPostsResult, getPostsLoading, getPostsError } = useSelector(
    (state) => state.PostsReducer
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div class="px-5 py-4">
      <h5 align="center">Search Results</h5>
      <div class="row">
        {getPostsResult ? (
          getPostsResult
            .filter((post) =>
              post.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((post) => {
              return <PostCard data={post} />;
            })
        ) : getPostsLoading ? (
          <div>Loading...</div>
        ) : getPostsError ? (
          getPostsError
        ) : (
          <h1>Post not found</h1>
        )}
      </div>
    </div>
  );
};

export default SearchedPostsPage;
