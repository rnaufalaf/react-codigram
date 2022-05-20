import axios from "axios";

const url = "http://localhost:3000";

const loginUser = async (form) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${url}/users/login`,
      data: form,
    });

    const accessToken = result.data.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return "success";
  } catch (err) {
    console.log(err);
    return "error";
  }
};

const registerUser = async (form) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${url}/users/register`,
      data: form,
    });
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
};

const uploadImage = async (data) => {
  try {
    let result = await axios({
      method: "POST",
      url: `${url}/single`,
      data: data,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export { loginUser, registerUser, uploadImage };
