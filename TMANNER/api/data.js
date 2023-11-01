import axios from "axios";

export const BASE_URL = 'http://223.130.137.39:3030/api';

export async function fetchMenuData() {
    try {
        const response = await axios.get("/data/menu.json");
        return response.data;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        return null;
    }
}
