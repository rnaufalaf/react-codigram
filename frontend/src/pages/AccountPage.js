import React from "react";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();
  return (
    <div class="py-3">
      <h5 align="center">My Account</h5>
      <div class="row py-3">
        <div class="col">
          <div style={{ height: "50vh", width: "25vw" }}>
            <img
              src="https://www.w3schools.com/howto/img_avatar2.png"
              style={{ height: "16rem" }}
            />
          </div>
        </div>
        <div class="col">
          <div style={{ height: "50vh", width: "50vw" }}>
            <h5>Personal Informations</h5>
            <hr />
            <div class="row">
              <div class="col-sm-2">
                <h6>Email : </h6>
              </div>
              <div class="col-sm-4">
                <p>someemail@gmail.com</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <h6>Username : </h6>
              </div>
              <div class="col-sm-4">
                <p>some_username</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <h6>Phone : </h6>
              </div>
              <div class="col-sm-4">
                <p>081234567890</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <h6>Country : </h6>
              </div>
              <div class="col-sm-4">
                <p>Ostania</p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-2">
                <button
                  class="btn btn-primary"
                  onClick={() => navigate("/home/editUser")}
                >
                  Edit
                </button>
              </div>
              <div class="col-sm-4">
                <button class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
