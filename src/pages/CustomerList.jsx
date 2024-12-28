import { useEffect, useState } from "react";
import { CustomerTable } from "../Components/CustomerTable";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
// import AddIcon from '@mui/icons-material/Add';

const URL = import.meta.env.VITE_URL

const KEY = import.meta.env.VITE_API_KEY

export function CustomerList() {
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

  console.log(isLoading);
  if (isLoading) return <CircularProgress />;
  return (
    <div className="py-5 px-7">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CustomerTable header={["name", "email", "phone"]} data={dataAPI} />
      )}
      <div className="fixed bottom-[5%] right-[5%]">
        <Fab color="primary" aria-label="add">
          +
        </Fab>
      </div>
    </div>
  );
}
