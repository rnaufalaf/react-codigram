import React from "react";
import { useNavigate } from "react-router-dom";
import { BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

const PostDetailsPage = () => {
  const navigate = useNavigate();
  return (
    <div class="py-3">
      <h5 align="center" class="py-1">
        Post Details
      </h5>
      <div class="card p-3 shadow-sm">
        <div class="row py-3">
          <div class="col">
            <div
              style={{ height: "80vh", width: "38vw", backgroundColor: "red" }}
            >
              <img
                src="https://www.w3schools.com/howto/img_avatar2.png"
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
                        <h5>The Future of Mobile Development</h5>
                      </strong>
                    </div>
                    <div class="col-md-1 mx-5">
                      <button class="btn btn-danger">
                        <BsFillTrashFill />
                      </button>
                    </div>
                    <div class="col-md-1">
                      <button
                        class="btn btn-primary"
                        onClick={() => navigate("/home/editPost")}
                      >
                        <BsPencilSquare />
                      </button>
                    </div>
                  </div>
                  <textarea
                    class="form-control"
                    rows={16}
                    cols={50}
                    disabled
                    style={{ backgroundColor: "transparent" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    a sollicitudin elit. Aenean eget ipsum orci. Vestibulum nec
                    pharetra magna, nec consequat lorem. Proin at ante ut lacus
                    finibus tristique. Phasellus vitae sodales felis, ut
                    fringilla leo. Aliquam egestas vitae lectus id bibendum.
                    Cras vel ipsum id ex imperdiet dignissim id nec nunc. Ut
                    lacus dui, dignissim ut tellus ut, maximus posuere urna.
                    Donec euismod, felis sed vestibulum accumsan, ex nunc
                    imperdiet arcu, non lacinia purus ligula eget lacus.
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsPage;
