import axios from "axios";
import { BASE_URL } from "./data";

export async function getProductList(){
    try{
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/stocks/list`, {  
        })
        console.log(response);
        return true;
    } catch (error) {
        console.error("상품 받아오기 실패:", error);
        return false;
    }
}