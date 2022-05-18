import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  PostsPage,
  AccountPage,
  AddPostPage,
  EditPostPage,
  MyPostsPage,
  PostDetailsPage,
} from "../pages";

const MainContent = () => {
  return (
    <Routes>
      <Route name="/posts" element={<PostsPage />} />
      <Route name="/account" element={<AccountPage />} />
      <Route name="/add" element={<AddPostPage />} />
      <Route name="/edit" element={<EditPostPage />} />
      <Route name="/myPosts" element={<MyPostsPage />} />
      <Route name="/details" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default MainContent;
