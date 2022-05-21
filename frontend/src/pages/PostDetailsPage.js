import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";
import { getPost, deletePost } from "../redux/actions/postActions";

const PostDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getPostResult, getPostLoading, getPostError } = useSelector(
    (state) => state.PostsReducer
  );
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(getPost(+id, accessToken));
  }, [dispatch]);

  return (
    <div class="py-3">
      <h5 align="center" class="py-1">
        Post Details
      </h5>
      {getPostResult ? (
        <div class="card p-3 shadow-sm">
          <div class="row py-3">
            <div class="col">
              <div style={{ height: "80vh", width: "38vw" }}>
                <img
                  src={require(`../images/${getPostResult.post.image}`)}
                  style={{ height: "33rem" }}
                />
              </div>
            </div>
            <div class="col overflow-scroll">
              <div style={{ height: "50vh", width: "30vw" }}>
                <div>
                  <div class="row">
                    <div class="row py-2">
                      <div class="col">
                        <strong>
                          <h5>{getPostResult.post.title}</h5>
                        </strong>
                      </div>
                      {getPostResult.post.UserId === getPostResult.userId ? (
                        <>
                          <div class="col-md-1 mx-5">
                            <button
                              class="btn btn-danger"
                              onClick={() => {
                                dispatch(
                                  deletePost(accessToken, getPostResult.post.id)
                                );
                                Swal.fire({
                                  icon: "success",
                                  title: "Delete Post Success!",
                                  text: `You've successfully deleted this post!`,
                                });
                                navigate("/home/myPosts");
                              }}
                            >
                              <BsFillTrashFill />
                            </button>
                          </div>
                          <div class="col-md-1">
                            <button
                              class="btn btn-primary"
                              onClick={() => navigate(`/home/editPost/${id}`)}
                            >
                              <BsPencilSquare />
                            </button>
                          </div>
                        </>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <textarea
                      class="form-control"
                      rows={16}
                      cols={50}
                      disabled
                      style={{ backgroundColor: "transparent" }}
                    >
                      {getPostResult.post.content}
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : getPostLoading ? (
        <div>Loading...</div>
      ) : getPostError ? (
        getPostError
      ) : (
        "Details are Empty"
      )}
    </div>
  );
};

export default PostDetailsPage;
