import axios from "axios";
import { BASE_URL } from "./data";

export async function getUserList() {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/user/list`, {
        })
        console.log(response);
        return true;
    } catch (error) {
        console.error("유저 받아오기 실패:", error);
        return false;
    }
}


export async function loginUser({ user_id, user_pw }) {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/user/login`, {
            params: {
                id: user_id,
                pw: user_pw
            }
        })
        console.log(response);
        if (response.data.access_token) {
            sessionStorage.setItem('token', response.data.access_token);
            sessionStorage.setItem('user_id', user_id);

            return true;
        } else if (response.data.message) {
            return false;
        }
    } catch (error) {
        console.error("로그인 실패:", error);
        return false;
    }
}

export async function checkUser() {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/user/check`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        console.log(response);
        console.log("Check 성공");
        return true;
    } catch (error) {
        console.error("유저 체크 실패:", error);
        return false;
    }
}


export async function UpdateUser(email) {
    try {
        const response = await axios.put(`${BASE_URL}/user/update`, {
            "user_id": "string",
            "user_pw": "string",
            "user_name": "string",
            "user_phone": "string",
            "user_email": email,
            "is_valid": true,
        });
        console.log(response);
        console.log("UpdateUser 성공");
        return true;
    } catch (error) {
        console.error("UpdateUser 실패:", error);
        return false;
    }
}

export async function RegisterUser({ user_id, user_pw, user_name, user_phone, user_email }) {
    try {
        const response = await axios.post(`${BASE_URL}/user/register`, {
            "user_id": user_id,
            "user_pw": user_pw,
            "user_name": user_name,
            "user_phone": user_phone,
            "user_email": user_email,
            "is_valid": true,
        });
        console.log(response);
        console.log("RegisterUser 성공");
        return true;
    } catch (error) {
        console.error("RegisterUser 실패:", error);
        return false;
    }
}