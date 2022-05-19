import React from "react";
import { PostCard } from "../components";
import "../App.css";
import { useNavigate } from "react-router-dom";

const MyPostsPage = () => {
  const navigate = useNavigate();
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
        {dummyPost.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </div>
  );
};

export default MyPostsPage;
