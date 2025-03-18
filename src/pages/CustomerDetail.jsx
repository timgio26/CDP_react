import { useParams } from "react-router";
import { useGetCustomerDetail, useUpdateCustomer } from "../Components/useCustomer";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { LoadingContainer } from "../Components/LoadingContainer";
import { BasicModal } from "../Components/MyModal";
import { TbHomePlus } from "react-icons/tb";
import { FormAlamat } from "../Components/FormAlamat";
import { AddressCard } from "../Components/AddressCard";
import { useState } from "react";

export function CustomerDetail() {
  const { id } = useParams();

  const {isLoading,isPending,data: { name, phone, email, addresses } = {},error} = useGetCustomerDetail(id);
 
  const [editMode,setEditMode] = useState(false)
  const {updateCustomer,isUpdating} =useUpdateCustomer()


  function handleDoubleClick(){
    setEditMode(true)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    const updateData = {
      id: id,
      data: {
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
      },
    };
    updateCustomer(updateData,{onSuccess:setEditMode(false)})
  }

  if (!name || isLoading) return <LoadingContainer/>;
  if (error) return <h1>Data Cant Be Loaded, Try Again Later</h1>;


  return (
    <div className="mx-3 my-3 w-full">
      <form onSubmit={handleFormSubmit}>
        <div className="flex flex-col p-2 gap-2">
          <div onDoubleClick={handleDoubleClick} className="flex align-middle">
            {!editMode ? (
              <h1 className="text-3xl">{name}</h1>
            ) : (
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={name}
                className="text-3xl"
              />
            )}
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiFillPhone />
            <div onDoubleClick={handleDoubleClick}>
              {!editMode ? (
                <h3>{phone}</h3>
              ) : (
                <input type="text" name="phone" id="phone" defaultValue={phone} />
              )}
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiFillMail />
            <div onDoubleClick={handleDoubleClick}>
              {!editMode ? (
                <h3>{email}</h3>
              ) : (
                <input type="email" name="email" id="email" defaultValue={email} />
              )}
            </div>
          </div>
        </div>
        {editMode && (
          <button className="px-5 py-1 border-slate-500 hover:opacity-50 border-2 rounded-md mx-2">
            Save
          </button>
        )}
      </form>

      <div>
        {!addresses?.length && (
          <div >
            <span>Belum ada alamat</span>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 mt-3">
          {addresses.map((each) => (
            <AddressCard key={each.id} data={each} />
          ))}
        </div>
      </div>

      <div className="fixed bottom-[5%] right-[5%]">
        <BasicModal
          icon={<TbHomePlus className="w-1/2 h-1/2" />}
          custId={id}
          renderitem={(props) => <FormAlamat {...props} />}
        />
      </div>
    </div>
  );
}
