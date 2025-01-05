import axios from "axios";

const URL = import.meta.env.VITE_URL;
const KEY = import.meta.env.VITE_API_KEY;

export async function AddCustomer(data) {
  const response = await axios.post(URL, data, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return { respData };
}

export async function GetCustomer() {
  try {
    const response = await axios.get(URL, {
      headers: {
        Authorization: KEY,
      },
    });
    const respData = response.data;
    return respData;
  } catch (error) {
    console.log(error.message)
    throw new Error(error.message)
  }
}

export async function GetCustomerDetail(id) {
  console.log(id)
  const response = await axios.get(`${URL}${id}/`, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}

export async function DelCustomer(id) {
  const response = await axios.delete(`${URL}${id}/`, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}
