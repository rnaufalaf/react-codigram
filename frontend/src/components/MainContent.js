import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  PostsPage,
  AccountPage,
  EditUserPage,
  AddPostPage,
  EditPostPage,
  MyPostsPage,
  PostDetailsPage,
  SearchedPostsPage,
} from "../pages";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/search/:query" element={<SearchedPostsPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/add" element={<AddPostPage />} />
      <Route path="/editUser" element={<EditUserPage />} />
      <Route path="/editPost/:id" element={<EditPostPage />} />
      <Route path="/myPosts" element={<MyPostsPage />} />
      <Route path="/details/:id" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default MainContent;
