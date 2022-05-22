import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "../App.css";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const handleLogout = () => {
    Swal.fire({
      icon: "question",
      title: "Do you want to Logout?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "YES",
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Logout Success!",
          text: `See you again!`,
        });
        localStorage.clear();
        navigate("/login");
      }
    });
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <button
            class="header-title text-black"
            onClick={() => navigate("/home/posts")}
          >
            Codigram
          </button>
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
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button
              class="btn btn-outline-primary border border-1"
              type="button"
              onClick={() => navigate(`/home/search/${searchQuery}`)}
            >
              <BsSearch />
            </button>
          </form>
          <div class="header-menu">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-2">
                <button
                  class="btn btn-outline-primary border-light"
                  onClick={() => navigate("/home/account")}
                >
                  My Account
                </button>
              </li>
              <li class="nav-item px-2">
                <button
                  class="btn btn-outline-primary border-light"
                  onClick={() => navigate("/home/myPosts")}
                >
                  My Posts
                </button>
              </li>
              <li class="nav-item px-4">
                <button
                  class="btn btn-outline-primary border-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
