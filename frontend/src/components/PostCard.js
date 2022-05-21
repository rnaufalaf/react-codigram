import React from "react";
import { useNavigate } from "react-router-dom";

const PostCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  return (
    <div class="card my-2 shadow-sm" style={{ width: "30rem" }}>
      <div style={{ flexDirection: "column", height: "2rem" }}>
        <img class="avatar" src={require(`../images/${data.User.image}`)} />
        <strong>
          <medium class="px-2">{data.User.username}</medium>
        </strong>
      </div>
      <hr />
      <img
        class="card-img-top"
        src={require(`../images/${data.image}`)}
        alt="Card image cap"
      />
      <hr />
      <div class="card-body">
        <h5 class="card-title">{data.title}</h5>
        <p class="card-text">{data.content.substring(0, 200)}...</p>
        <button
          style={{
            position: "absolute",
            right: 10,
            bottom: 5,
            border: 0,
            color: "#0d6efd",
            backgroundColor: "transparent",
          }}
          onClick={() => navigate(`/home/details/${data.id}`)}
        >
          Click here to see details
        </button>
      </div>
    </div>
  );
};

export default PostCard;
