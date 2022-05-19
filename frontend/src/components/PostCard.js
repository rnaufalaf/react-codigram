import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const PostCard = (props) => {
  const { post } = props;
  const navigate = useNavigate();
  return (
    <div class="col-sm">
      <div class="card my-2 shadow-sm" style={{ width: "18rem" }}>
        <div style={{ flexDirection: "column", height: "2rem" }}>
          <img class="avatar" src={post.avatar} />
          <strong>
            <medium class="px-2">{post.username}</medium>
          </strong>
        </div>
        <hr />
        <img class="card-img-top" src={post.image} alt="Card image cap" />
        <hr />
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.content}</p>
          <button
            style={{
              position: "absolute",
              right: 10,
              bottom: 5,
              border: 0,
              color: "#0d6efd",
              backgroundColor: "transparent",
            }}
            onClick={() => navigate("/home/details")}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
