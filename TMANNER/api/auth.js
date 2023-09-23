import axios from "axios";
import { BASE_URL } from ".";

export async function getLogin(userInfo) {
  try {
    const response = await axios.get(`${BASE_URL}/user/login`, {
      params: userInfo,
    });

    if (
      response.status === 200 &&
      response.data &&
      response.data.data &&
      "access_token" in response.data.data
    ) {
      console.log("Login Success:", response.data);
      localStorage.setItem("access_token", response.data.data.access_token);
      localStorage.setItem("refresh_token", response.data.data.refresh_token);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Login Error:", error);
    return false;
  }
}

export async function signUp(userInfo) {
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, userInfo);
    console.log("SignUp Success:", response.data);
    return true;
  } catch (error) {
    console.error("SignUp Error:", error);
    return false;
  }
}

// The commented-out code for `signUp` using hard-coded values is kept as-is.
// If you need to use this function, simply uncomment it.

/*
export async function signUp() {
  const userInfo = {
    user_name: "testman",
    user_id: "testuser",
    user_pw: "a123",
    user_email: "bishoe01@kakao.com",
    user_type: 1,
    user_phone: "01012341234",
    is_valid: true,
  };
  try {
    const response = await axios.post(`${BASE_URL}/user/register`, userInfo);
    console.log("SignUp Success:", response.data);
    return true;
  } catch (error) {
    console.error("SignUp Error:", error);
    return false;
  }
}
*/

export async function getRefresh() {
  try {
    const response = await axios.post(
      `${BASE_URL}/user/refresh`,
      {},
      {
        params: {
          refresh_token: localStorage.getItem("refresh_token"),
        },
      }
    );

    if (response.status === 200 && response.data) {
      localStorage.setItem("access_token", response.data.access_token);
      console.log("Refresh Success:");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Refresh Error:", error);
    return false;
  }
}
