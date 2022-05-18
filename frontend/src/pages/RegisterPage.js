import React from "react";
import "../App.css";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
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
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input type="text" class="form-control" id="username" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="password" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone
                </label>
                <input type="text" class="form-control" id="phone" />
              </div>
              <div class="mb-3">
                <label for="country" class="form-label">
                  Country
                </label>
                <input type="text" class="form-control" id="country" />
              </div>
              <div align="center">
                <button type="submit" class="login-button">
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
