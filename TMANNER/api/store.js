import axios from "axios";
import { BASE_URL } from "./data";
import apiInstance from "./apiInstance";
//import { STORE_CODE } from "./stocks";

export async function getStoreList() {
  try {
    const response = await apiInstance.get(`${BASE_URL}/order/store/list`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function AddStore({STORE_CODE, StoreName, StoreStatus}) {
  const Store = {
    store_code: STORE_CODE,
    store_name: StoreName,
    store_status: StoreStatus,
    total_price: 0,
  };
  try {
    const response = await apiInstance.post(
      `${BASE_URL}/order/store/add`,
      Store
    );
    console.log("응답결과",response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function updateStore(store) {
  try {
    const response = await axios.put(`${BASE_URL}/store`, store, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    console.log(response);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
