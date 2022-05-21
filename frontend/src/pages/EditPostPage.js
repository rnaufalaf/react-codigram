import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { editPost, getPost } from "../redux/actions/postActions";

import { uploadImage } from "../fetchs/userFetch";
import Swal from "sweetalert2";

const EditPostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const { getPostResult, getPostLoading, getPostError } = useSelector(
    (state) => state.PostsReducer
  );

  useEffect(() => {
    dispatch(getPost(id, accessToken));
  }, [dispatch]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageData, setImageData] = useState({});

  const handleItemUpload = (event) => {
    setImageData(event.target.files[0]);
  };

  const submitPost = (imageName) => {
    const postObj = {
      title,
      content,
      image: Math.round(new Date() / 1000) + "--" + imageName,
    };
    dispatch(editPost(postObj, accessToken, id));
    Swal.fire({
      icon: "success",
      title: "Edit Post Success!",
      text: `You've successfully edited your post!`,
    });
    navigate("/home/myPosts");
  };

  const submitPostHandler = () => {
    const data = new FormData();
    data.append("image", imageData);
    uploadImage(data);
    submitPost(imageData.name);
  };

  return (
    <div className="container py-4">
      <h5 align="center">Edit Post</h5>
      {getPostResult ? (
        <form>
          <div class="form-group py-3">
            <label for="title">Title</label>
            <input
              class="form-control"
              type="title"
              id="title"
              defaultValue={getPostResult.post.title}
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
              defaultValue={getPostResult.post.content}
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
      ) : getPostLoading ? (
        <div>Loading...</div>
      ) : getPostError ? (
        getPostError
      ) : (
        "Post data empty"
      )}
    </div>
  );
};
export default EditPostPage;
