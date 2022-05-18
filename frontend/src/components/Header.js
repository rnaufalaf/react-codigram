import React from "react";
import { BsSearch } from "react-icons/bs";
import "../App.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <h2 class="header-title text-white" href="#">
            Codigram
          </h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2 bg-opacity-25"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-primary border border-light" type="submit">
              <BsSearch />
            </button>
          </form>
          <div class="header-menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  My Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  My Posts
                </a>
              </li>
              <li class="nav-item px-4">
                <button class="btn btn-primary">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
