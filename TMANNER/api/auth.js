import axios from "axios";
import { BASE_URL } from "./data";

// 로그인 API 호출 함수
export async function getLogin(userInfo) {
  try {
    // 서버에 로그인 정보를 기반으로 GET 요청
    const response = await axios.get(`${BASE_URL}/user/login`, {
      params: userInfo,
    });

    // 응답이 올바른 경우 (200 상태 코드, 데이터가 있고, 토큰이 포함되어 있을 때)
    if (
      response.status === 200 &&
      response.data &&
      response.data.data &&
      "access_token" in response.data.data
    ) {
      console.log("Login Success:", response.data);
      // 로컬 스토리지에 access_token과 refresh_token 저장
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

// 회원가입 API 호출 함수
export async function signUp(userInfo) {
  try {
    // 서버에 회원가입 정보를 기반으로 POST 요청
    const response = await axios.post(`${BASE_URL}/user/register`, userInfo);
    console.log("SignUp Success:", response.data);
    return true;
  } catch (error) {
    console.error("SignUp Error:", error);
    console.error(userInfo);
    return false;
  }
}

// 토큰 재발급 API 호출 함수
export async function getRefresh() {
  try {
    // 로컬 스토리지에서 refresh_token을 가져와서 서버에 재발급 요청
    const response = await axios.post(
      `${BASE_URL}/user/refresh`,
      {},
      {
        params: {
          refresh_token: localStorage.getItem("refresh_token"),
        },
      }
    );

    // 응답이 올바른 경우 (200 상태 코드와 데이터가 있는 경우)
    if (response.status === 200 && response.data) {
      // 로컬 스토리지에 새로운 access_token 저장
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
