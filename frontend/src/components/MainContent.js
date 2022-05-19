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
      <Route path="/searchResults" element={<SearchedPostsPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/add" element={<AddPostPage />} />
      <Route path="/editUser" element={<EditUserPage />} />
      <Route path="/editPost" element={<EditPostPage />} />
      <Route path="/myPosts" element={<MyPostsPage />} />
      <Route path="/details" element={<PostDetailsPage />} />
    </Routes>
  );
};

export default MainContent;
