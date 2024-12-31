import axios from "axios";

const URL = import.meta.env.VITE_URL;
const KEY = import.meta.env.VITE_API_KEY;

export async function AddCustomer(data) {
  const response = await axios.post(
    URL,data,
    {headers: {
        Authorization: KEY,
      },
    }
  );
  const respData=response.data
  return {respData}
}


export async function GetCustomer() {
  const response = await axios.get(URL, {
    headers: {
      Authorization: KEY,
    },
  });
  const respData=response.data
  return respData
}
