import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../fetchs/userFetch";
import "../App.css";
import Swal from "sweetalert2";

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async () => {
    const res = await loginUser(form);
    if (res === "success") {
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        text: `You've logged in to your acoount!`,
        footer: "Happy Surfing!",
      });
      navigate("/home/posts");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops....",
        text: `Login Failed!`,
        footer:
          "It seems like you've entered the wrong credentials. Please try again!",
      });
    }
  };

  return (
    <div class="login-container">
      <div class="row">
        <div class="col">
          <div class="login-form-container">
            <div class="login-form-content">
              <h3 align="center" class="mt-3">
                Login
              </h3>
              <h6 align="center">Please login to your account</h6>
              <form class="px-3 mt-4">
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
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
                    onChange={(event) =>
                      setForm({ ...form, password: event.target.value })
                    }
                  />
                </div>
                <div align="center">
                  <button
                    type="button"
                    class="login-button"
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                  <p class="py-3">
                    Don't have an account? click
                    <button
                      class="redirect-register"
                      onClick={() => navigate("/register")}
                    >
                      here
                    </button>
                    to register!
                  </p>
                </div>
              </form>
            </div>
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

export default LoginPage;
