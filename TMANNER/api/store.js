import axios from "axios";
import { BASE_URL } from "./data";

export async function AddStoreName() {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz//api/v1/order/store/add`, {
        })
        console.log(response);
        return true;
    } catch (error) {
        console.error("상점 등록 실패:", error);
        return false;
    }
}

export async function getStoreList({store_code, store_status}) {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz//api/v1/order/store/list`, {
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
        const response = await axios.get(`http://hoshi-kirby.xyz//api/v1/order/store/user/list`, {
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