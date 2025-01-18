import { useParams } from "react-router";
import { useGetCustomerDetail } from "../Components/useCustomer";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { LoadingContainer } from "../Components/LoadingContainer";
import { BasicModal } from "../Components/MyModal";
import { TbHomePlus } from "react-icons/tb";
import { FormAlamat } from "../Components/FormAlamat";

export function CustomerDetail() {
  const { id } = useParams();

  const {
    isLoading,
    isPending,
    data: { name, phone, email, addresses } = {},
    error,
  } = useGetCustomerDetail(id);

  if (!name || isLoading) return <LoadingContainer/>;
  if (error) return <h1>Data Cant Be Loaded, Try Again Later</h1>;

  // console.log(data)

  function NoAddress() {
    return (
      <div>
        <span>Belum ada alamat</span>
      </div>
    );
  }

  return (
    <div className="mx-3 my-3">
      <div>
        <h1 className="text-3xl">{name}</h1>
        <div className="flex flex-row items-center gap-2">
          <AiFillPhone />
          <h3>{phone}</h3>
        </div>
        <div className="flex flex-row items-center gap-2">
          <AiFillMail />
          <h3>{email}</h3>
        </div>
      </div>

      <div>
        {!addresses?.length&&<NoAddress/>    }
      </div>
        <div className="fixed bottom-[5%] right-[5%]">
          <BasicModal icon={<TbHomePlus  className="w-1/2 h-1/2"/>} custId={id} renderitem={(props)=><FormAlamat {...props}/>}/>
        </div>
    </div>
  );
}
