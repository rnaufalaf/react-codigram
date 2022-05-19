import React from "react";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <h5 align="center">Add Post</h5>
      <form>
        <div class="form-group py-3">
          <label for="title">Title</label>
          <input class="form-control" type="title" id="title" />
        </div>
        <div class="form-group py-3">
          <label for="content">Content</label>
          <textarea
            class="form-control"
            type="text"
            id="content"
            rows={6}
            cols={50}
          />
        </div>
        <div class="form-group py-3">
          <label for="image">Upload Image</label>
          <input
            class="form-control"
            type="file"
            name="image"
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        <div align="center">
          <button
            type="button"
            class="btn btn-primary my-5"
            onClick={() => navigate("/home/myPosts")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddPostPage;
