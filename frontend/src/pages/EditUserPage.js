import React from "react";
import { useNavigate } from "react-router-dom";

const EditUserPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container py-4">
      <h5 align="center">Edit User</h5>
      <form>
        <div class="form-group py-3">
          <label for="email">Email</label>
          <input class="form-control" type="email" id="email" />
        </div>
        <div class="form-group py-3">
          <label for="username">Username</label>
          <input class="form-control" type="text" id="username" />
        </div>
        <div class="form-group py-3">
          <label for="password">Password</label>
          <input class="form-control" type="password" id="password" />
        </div>
        <div class="form-group py-3">
          <label for="phone">Phone</label>
          <input class="form-control" type="number" id="phone" />
        </div>
        <div class="form-group py-3">
          <label for="country">Country</label>
          <input class="form-control" type="text" id="country" />
        </div>
        <div class="form-group py-3">
          <label for="image">Upload Photo</label>
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
            onClick={() => navigate("/home/account")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserPage;
