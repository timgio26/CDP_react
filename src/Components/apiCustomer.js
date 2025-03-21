import axios from "axios";

const URL = import.meta.env.VITE_URL;
const KEY = import.meta.env.VITE_API_KEY;

export async function AddCustomer(data) {
  const response = await axios.post(URL+'customer/', data, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return { respData };
}

export async function GetCustomer() {
  try {
    const response = await axios.get(URL+'customer/', {
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
  const response = await axios.get(`${URL}customer/${id}/`, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}

export async function UpdateCustomer({id,data}) {
  console.log(id,data)
  const response = await axios.patch(`${URL}customer/${id}/`,data, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}

export async function DelCustomer(id) {
  const response = await axios.delete(`${URL}customer/${id}/`, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}

export async function AddAddress(data){
  console.log(data)
  const response = await axios.post(URL + "address/", data, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}

export async function GetAddDetail(id) {
  console.log(id)
  const response = await axios.get(`${URL}address/${id}/`, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}

export async function AddService(data){
  const response = await axios.post(URL + "service/", data, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData = response.data;
  return respData;
}