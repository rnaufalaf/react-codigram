import React from "react";
import { PostCard } from "../components";

const SearchedPostsPage = () => {
  const dummyPost = [
    {
      title: "JavaScript for dummies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin elit. Aenean eget ipsum orci. ",
      image:
        "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
      username: "john123",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      title: "JavaScript for dummies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin elit. Aenean eget ipsum orci. ",
      image:
        "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
      username: "john123",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      title: "JavaScript for dummies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin elit. Aenean eget ipsum orci. ",
      image:
        "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
      username: "john123",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      title: "JavaScript for dummies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin elit. Aenean eget ipsum orci. ",
      image:
        "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
      username: "john123",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      title: "JavaScript for dummies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin elit. Aenean eget ipsum orci. ",
      image:
        "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
      username: "john123",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
    {
      title: "JavaScript for dummies",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin elit. Aenean eget ipsum orci. ",
      image:
        "https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png",
      username: "john123",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ];
  return (
    <div class="px-5 py-4">
      <h5 align="center">Search Results</h5>
      <div class="row">
        {dummyPost.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </div>
  );
};

export default SearchedPostsPage;
