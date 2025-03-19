import { useParams } from "react-router";
import { useGetAddressDetail } from "../Components/useCustomer";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { LoadingContainer } from "../Components/LoadingContainer";


export function AddressDetail() {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const { isLoading, isPending, data, error } = useGetAddressDetail(id);

  const [formData,setFormData] = useState({
    tanggalService:"",
    keluhan:"",
    tindakan:"",
    hasil:"",
  })

  function handleSubmimt(e){
    e.preventDefault()
    console.log('submit')
  }

  console.log(data, error);

  if (isLoading || isPending) return <LoadingContainer />;

  return (
    <div className="w-full p-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Service Customer Name</span>
          <span>
            {data?.address} | {data?.category}
          </span>
        </div>

        <div className="flex items-center">
          <div className="px-5">
            <div
              className="px-5 py-1 bg-blue-400 rounded hover:opacity-50 cursor-pointer"
              hidden={showForm}
              onClick={() => setShowForm(true)}
            >
              Add Service
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <form
          // action=""
          onSubmit={handleSubmimt}
          className={`${
            showForm ? "flex" : "hidden"
          } flex-col gap-1 p-5 sm:w-1/2 border bg-slate-50 rounded shadow`}
        >
          <div className="flex justify-end">
            <div
              className="bg-white border rounded-full p-1 cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              <IoMdClose />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="tglService" className="text-sm">
              Tanggal Service
            </label>
            <input type="date" name="tglService" id="tglService" value={formData.tanggalService} onChange={(e)=>setFormData((state)=>({...state,tanggalService:e.target.value}))}/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="Keluhan" className="text-sm">
              Keluhan
            </label>
            <textarea name="Keluhan" id="Keluhan" value={formData.keluhan} onChange={(e)=>setFormData((state)=>({...state,keluhan:e.target.value}))}/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="tindakan" className="text-sm">
              Tindakan
            </label>
            <textarea name="tindakan" id="tindakan" value={formData.tindakan} onChange={(e)=>setFormData((state)=>({...state,tindakan:e.target.value}))}/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="hasil" className="text-sm">
              Hasil
            </label>
            <textarea name="hasil" id="hasil" value={formData.hasil} onChange={(e)=>setFormData((state)=>({...state,hasil:e.target.value}))}/>
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

      <div></div>
    </div>
  );
}
