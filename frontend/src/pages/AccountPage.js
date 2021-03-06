import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilSquare } from "react-icons/bs";
import { getUserDetails } from "../redux/actions/userActions";

import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();

  const { getUserDetailsResult, getUserDetailsLoading, getUserDetailsError } =
    useSelector((state) => state.UsersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails(localStorage.getItem("accessToken")));
  }, [dispatch]);

  return (
    <div class="py-3">
      <h5 align="center">My Account</h5>
      {getUserDetailsResult ? (
        <div class="row py-3">
          <div class="col">
            <div style={{ height: "50vh", width: "25vw" }}>
              <img
                src={require(`../images/${getUserDetailsResult.image}`)}
                style={{ height: "16rem" }}
              />
            </div>
          </div>
          <div class="col">
            <div style={{ height: "50vh", width: "50vw" }}>
              <div class="row">
                <div class="col-4">
                  <h5>Personal Informations</h5>
                </div>
                <div class="col">
                  <button
                    style={{
                      border: 0,
                      backgroundColor: "transparent",
                    }}
                    onClick={() => navigate("/home/editUser")}
                  >
                    <BsPencilSquare />
                  </button>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-2">
                  <h6>Email : </h6>
                </div>
                <div class="col-sm-4">
                  <p>{getUserDetailsResult.email}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2">
                  <h6>Username : </h6>
                </div>
                <div class="col-sm-4">
                  <p>{getUserDetailsResult.username}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2">
                  <h6>Phone : </h6>
                </div>
                <div class="col-sm-4">
                  <p>{getUserDetailsResult.phone}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2">
                  <h6>Country : </h6>
                </div>
                <div class="col-sm-4">
                  <p>{getUserDetailsResult.country}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2"></div>
              </div>
            </div>
          </div>
        </div>
      ) : getUserDetailsLoading ? (
        <p>Loading...</p>
      ) : getUserDetailsError ? (
        <p>{getUserDetailsError ? getUserDetailsError : "User is Empty"}</p>
      ) : (
        console.log("get to reducers")
      )}
    </div>
  );
};

export default AccountPage;
