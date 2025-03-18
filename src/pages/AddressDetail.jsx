import { useParams } from "react-router";
import { useGetAddressDetail } from "../Components/useCustomer";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
 
export function AddressDetail() {
  const { id } = useParams();
  const [showForm,setShowForm] =  useState(false)
  const { isLoading, isPending, data, error } = useGetAddressDetail(id);
  console.log(data);

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <span>Service Customer Name</span>
        <span>
          {data.address} | {data.category}
        </span>
      </div>
      <div className="flex justify-end px-5">
        <div className="px-5 py-1 bg-blue-400 rounded hover:opacity-50 cursor-pointer" hidden={showForm} onClick={()=>setShowForm(true)}>Add Service</div>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className={`${showForm?'flex':'hidden'} flex-col gap-1 p-5 w-1/2 border bg-slate-50 rounded shadow`}
          
        >
          <div className="flex justify-end">
            <div className="bg-white border rounded-full p-1 cursor-pointer" onClick={()=>setShowForm(false)}>
              <IoMdClose />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm">
              Tanggal Service
            </label>
            <input type="date" name="" id="" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-sm">
              Keluhan
            </label>
            <textarea name="" id=""></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-sm">
              Tindakan
            </label>
            <textarea name="" id=""></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-sm">
              Hasil
            </label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-sm">
              Dokumentasi
            </label>
            <input type="file" name="" id="" />
          </div>
          <input
            type="submit"
            value="Add Service"
            className="bg-[#7989ff] rounded hover:opacity-50 py-1 my-2"
          />
        </form>
      </div>
      {/* <p>{data?.address}</p> */}

      <div>
        
      </div>
    </div>
  );
}
