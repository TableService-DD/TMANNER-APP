import axios from "axios";
import { BASE_URL } from "./data";

//상점 추가
export async function AddStore({store_code, store_name, store_status = true}) {
    try {
        const response = await axios.get(`${BASE_URL}/order/store/add`, {
            params : {
                store_code : store_code,
                store_name : store_name,
                store_status : store_status
            }
        })
        console.log(response);
        return true;
    } catch (error) {
        console.error("상점 등록 실패:", error);
        return false;
    }
}


//상점 리스트 받아오기
export async function getStoreList({store_code, store_status}) {
    try {
        const response = await axios.get(`${BASE_URL}/order/store/list`, {
        params : {
            store_code : store_code, 
            store_status : store_status
            }
        })
        console.log(response);
        return true;
        
    } catch (error) {
        console.error("상점 리스트 받아오기 실패:", error);
        return false;
    }
}

export async function getStoreUserList(store_code, user_id) {
    try{
        const response = await axios.get(`${BASE_URL}/order/store/user/list`, {
            params : {
                store_code : store_code, 
                store_status : store_status
                }
            })
            console.log(response);
            return true;
    } catch (error) {
        console.error("상점 유저 정보 받아오기 실패:", error);
        return false;
    }
}