import React, { useState } from "react";
import Swal from "sweetalert2";
import "../App.css";

import { useNavigate } from "react-router-dom";
import { uploadImage, registerUser } from "../fetchs/userFetch";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [imageData, setImageData] = useState({});

  const handleItemUpload = (event) => {
    setImageData(event.target.files[0]);
  };

  const register = (imageName) => {
    const postObj = {
      email,
      username,
      password,
      phone,
      country,
      image: Math.round(new Date() / 1000) + "--" + imageName,
    };
    registerUser(postObj);
    Swal.fire({
      icon: "success",
      title: "Register User Success!",
      text: `You've successfully created an account!`,
      footer: "Please continue login process in the Login Page",
    });
    navigate("/login");
  };

  const submitDataHandler = () => {
    const data = new FormData();
    data.append("image", imageData);
    uploadImage(data);
    register(imageData.name);
  };
  return (
    <div class="register-container">
      <div class="row">
        <div class="col">
          <div class="register-form-container">
            <h3 align="center" class="py-2">
              Register
            </h3>
            <h6 align="center">Please input your credentials below</h6>
            <form class="px-3">
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div class="mb-3">
                <label for="country" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
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
                  class="login-button"
                  onClick={submitDataHandler}
                >
                  Submit
                </button>
                <p class="py-3">
                  Already have an account? click
                  <button
                    class="redirect-login"
                    onClick={() => navigate("/login")}
                  >
                    here
                  </button>
                  to login!
                </p>
              </div>
            </form>
          </div>
        </div>
        <div class="col">
          <div class="login-form-content">
            <div align="center">
              <h1 class="app-title">Codigram</h1>
              <h6 class="text-white py-3">A Social Media for Developers</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
