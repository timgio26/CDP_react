import axios from "axios";

const URL = import.meta.env.VITE_URL;
const KEY = import.meta.env.VITE_API_KEY;

export async function AddCustomer(data) {
//   const [isLoading] = useState();

  const response = await axios.post(
    URL,data,
    {headers: {
        Authorization: KEY,
      },
    }
  );
//   console.log(response)
  const respData=response.data

  return {respData}
}
