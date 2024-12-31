import { CustomerTable } from "../Components/CustomerTable";

import Fab from "@mui/material/Fab";
import { BasicModal } from "../Components/Modal";
import { useGetCustomer } from "../Components/useCustomer";
import { LoadingContainer } from "../Components/LoadingContainer";


export function CustomerList() {

  const {isLoading, isPending, data, error} = useGetCustomer()



  if (!data || isLoading) return <LoadingContainer />;
  if (error) return <h1>Data Cant Be Loaded, Try Again Later</h1>;
  return (
    <div className="py-5 px-7">
      <CustomerTable header={["name", "email", "phone"]} data={data} />
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
