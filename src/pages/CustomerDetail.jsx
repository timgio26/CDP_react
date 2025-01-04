import { useParams } from "react-router";
import { useGetCustomerDetail } from "../Components/useCustomer";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

export function CustomerDetail() {
  const { id } = useParams();

  const {
    isLoading,
    isPending,
    data: { name, phone, email, addresses } = {},
    error,
  } = useGetCustomerDetail(id);

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
    </div>
  );
}
