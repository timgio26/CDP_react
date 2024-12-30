import { CustomerTable } from "../Components/CustomerTable";
import CircularProgress from "@mui/material/CircularProgress";
import Fab from "@mui/material/Fab";
import { BasicModal } from "../Components/Modal";
import { useGetCustomer } from "../Components/useGetCustomer";
// import AddIcon from '@mui/icons-material/Add';



export function CustomerList() {

  const {isLoading,dataAPI} = useGetCustomer()

  

  if (isLoading) return <CircularProgress />;
  return (
    <div className="py-5 px-7">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <CustomerTable header={["name", "email", "phone"]} data={dataAPI} />
      )}
      <div className="fixed bottom-[5%] right-[5%]">
        <BasicModal>
          <Fab color="primary" aria-label="add">
            +
          </Fab>
        </BasicModal>
      </div>
    </div>
  );
}
