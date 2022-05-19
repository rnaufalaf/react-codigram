import React from "react";
import "../App.css";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
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
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control" id="password" />
                </div>
                <div align="center">
                  <button
                    type="button"
                    class="login-button"
                    onClick={() => navigate("/home/posts")}
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
