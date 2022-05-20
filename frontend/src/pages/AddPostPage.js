import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { uploadImage } from "../fetchs/userFetch";
import { addPost } from "../redux/actions/postActions";

const AddPostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("accessToken");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageData, setImageData] = useState({});

  const handleItemUpload = (event) => {
    setImageData(event.target.files[0]);
  };

  const submitData = (imageName) => {
    const postObj = {
      title,
      content,
      image: Math.round(new Date() / 1000) + "--" + imageName,
    };
    dispatch(addPost(postObj, token));
    Swal.fire({
      icon: "success",
      title: "Add Post Success!",
      text: `You've successfully created an post!`,
    });
    navigate("/home/myPosts");
  };

  const submitPostHandler = () => {
    const data = new FormData();
    data.append("image", imageData);
    uploadImage(data);
    submitData(imageData.name);
  };

  return (
    <div className="container py-4">
      <h5 align="center">Add Post</h5>
      <form>
        <div class="form-group py-3">
          <label for="title">Title</label>
          <input
            class="form-control"
            type="title"
            id="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="content">Content</label>
          <textarea
            class="form-control"
            type="text"
            id="content"
            rows={6}
            cols={50}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div class="form-group py-3">
          <label for="image">Upload Image</label>
          <input
            class="form-control"
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleItemUpload}
          />
        </div>
        <div align="center">
          <button
            type="button"
            class="btn btn-primary my-5"
            onClick={submitPostHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPostPage;
