import { CustomerTable } from "../Components/CustomerTable";
import { TbUserPlus } from "react-icons/tb";
import { BasicModal } from "../Components/MyModal";
import { useGetCustomer } from "../Components/useCustomer";
import { LoadingContainer } from "../Components/LoadingContainer";
import { FormCust } from "../Components/FormCust";


export function CustomerList() {

  const {isLoading, isPending, data, error} = useGetCustomer()


  if (error) return <h1>Data Cant Be Loaded, Try Again Later</h1>;
  if (!data || isLoading) return <LoadingContainer />;
  
  return (
    <div className="py-5 px-7 w-full">
      <h1 className="text-2xl mb-5 font-bold font-mono">Customer</h1>
      <CustomerTable header={["name", "email", "phone"]} data={data}/>
      <div className="fixed bottom-[5%] right-[5%]">
        <BasicModal icon={<TbUserPlus className="w-1/2 h-1/2"/>} renderitem={(props)=><FormCust {...props} />}/>
      </div>
    </div>
  );
}
