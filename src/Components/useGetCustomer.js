import { useEffect, useState } from "react";
import axios from 'axios'

const URL = import.meta.env.VITE_URL;

const KEY = import.meta.env.VITE_API_KEY;

export function useGetCustomer(){
    const [dataAPI, setDataAPI] = useState([]);
    const [isLoading, setIsLoading] = useState();
  
    useEffect(() => {
      setIsLoading(true);
      async function getdata() {
        try {
          const data = await axios.get(URL, {
            headers: {
              Authorization: KEY,
            },
          });
          setDataAPI(data.data);
        } catch (error) {
          console.log(error);
        }
      }
      getdata();
      setIsLoading(false);
    }, []);
  
    // console.log(isLoading);
    return({isLoading,dataAPI})
}