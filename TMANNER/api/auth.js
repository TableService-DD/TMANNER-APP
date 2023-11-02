import axios from "axios";
import { BASE_URL } from "./data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CryptoJS from "crypto-js";

const TIMEOUT = 5000; // 5 seconds
const headers = {
  "Content-Type": "application/json",
};

// 데이터를 MD5로 해싱하는 함수
function md5Hash(data) {
  return CryptoJS.MD5(data).toString();
}

// 회원가입 API 호출 함수
export async function signUp(data) {
  const apiURL = `${BASE_URL}/biz/user`;

  // 패스워드를 MD5로 해싱하고, 데이터 객체를 복사하여 수정
  const hashedData = {
    ...data,
    password: md5Hash(data.password)
  };
  console.log("Hash1", hashedData.password)

  try {
    // 서버에 회원가입 정보를 기반으로 POST 요청
    const response = await axios.put(apiURL, hashedData, { headers : headers, timeout: TIMEOUT });
    console.log("SignUp Success:", response.data);
    return true;
  } catch (error) {
    if(error.code === 'ECONNABORTED') {
      console.log("TimeOut Error:", error);
    }
    console.error("SignUp Error:", error);
    return false;
  }
}

// 로그인 API 호출 함수
export async function getLogin(data) {
  // 패스워드를 MD5로 해싱하고, 데이터 객체를 복사하여 수정
  const hashedData = {
    ...data,
    password: md5Hash(data.password)
  };
  console.log("Hash2", hashedData.password)

  try {
    // 서버에 로그인 정보를 기반으로 GET 요청
    const response = await axios.get(`${BASE_URL}/biz/user`, {
      params: hashedData,
      timeout: TIMEOUT,
    },{
      headers: {
          'Content-Type': 'application/json'
      }
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
      console.log("access_token", response.data.data.access_token);
      console.log("refresh_token", response.data.data.refresh_token);
      AsyncStorage.setItem("access_token", response.data.data.access_token);
      AsyncStorage.setItem("refresh_token", response.data.data.refresh_token);
      return true;
    }
    return false;

  } catch (error) {
    if(error.code === 'ECONNABORTED') {
      console.log("TimeOut Error:", error);
    }
    console.error("Login Error:", error);
    return false;
  }
}
