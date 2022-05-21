import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { editUser, getUserDetails } from "../redux/actions/userActions";

import { uploadImage } from "../fetchs/userFetch";
import Swal from "sweetalert2";

const EditUserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { getUserDetailsResult, getUserDetailsLoading, getUserDetailsError } =
    useSelector((state) => state.UsersReducer);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(getUserDetails(accessToken));
  }, [dispatch]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [imageData, setImageData] = useState({});

  const handleItemUpload = (event) => {
    setImageData(event.target.files[0]);
  };

  const submitUser = (imageName) => {
    const userObj = {
      email,
      username,
      password,
      phone,
      country,
      image: Math.round(new Date() / 1000) + "--" + imageName,
    };
    dispatch(editUser(userObj, accessToken));
    Swal.fire({
      icon: "success",
      title: "Edit User Success!",
      text: `You've successfully edited your profile!`,
    });
    navigate("/home/account");
  };

  const submitUserHandler = () => {
    const data = new FormData();
    data.append("image", imageData);
    uploadImage(data);
    submitUser(imageData.name);
  };
  return (
    <div className="container py-4">
      <h5 align="center">Edit User</h5>
      {getUserDetailsResult ? (
        <form>
          <div class="form-group py-3">
            <label for="email">Email</label>
            <input
              class="form-control"
              type="email"
              id="email"
              defaultValue={getUserDetailsResult.email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div class="form-group py-3">
            <label for="username">Username</label>
            <input
              class="form-control"
              type="text"
              id="username"
              defaultValue={getUserDetailsResult.username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div class="form-group py-3">
            <label for="password">Password</label>
            <input
              class="form-control"
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div class="form-group py-3">
            <label for="phone">Phone</label>
            <input
              class="form-control"
              type="number"
              id="phone"
              defaultValue={getUserDetailsResult.phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div class="form-group py-3">
            <label for="country">Country</label>
            <input
              class="form-control"
              type="text"
              id="country"
              defaultValue={getUserDetailsResult.country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
          <div class="form-group py-3">
            <label for="image">Upload Photo</label>
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
              onClick={submitUserHandler}
            >
              Submit
            </button>
          </div>
        </form>
      ) : getUserDetailsLoading ? (
        <div>Loading...</div>
      ) : getUserDetailsError ? (
        getUserDetailsError
      ) : (
        "User data empty"
      )}
    </div>
  );
};

export default EditUserPage;
