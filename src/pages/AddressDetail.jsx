import { useParams } from "react-router";
import { useState } from "react";

import { useGetAddressDetail, useUpdateAddress } from "../Components/useCustomer";
import { LoadingContainer } from "../Components/LoadingContainer";
import { FormService } from "../Components/FormService";

import { z } from "zod";
import { ServiceTile } from "../Components/ServiceTile";

import { FaEdit } from "react-icons/fa";
// import { UpdateAddress } from "../Components/apiCustomer";

const ServiceSchema = z.object({
  hasil: z.string(), // Expects a string
  id: z.number(), // Expects a number
  img_url: z.nullable(z.string()), // Can be null or a string
  keluhan: z.string(), // Expects a string
  service_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Validates date in "YYYY-MM-DD" format
  tindakan: z.string(), // Expects a string
});

const AddressDetailsSchema = z.object({
  customer_data: z.string(),
  address: z.string(), // Expects a string
  category: z.string(), // Expects a string
  id: z.number(), // Expects a number
  img_url: z.nullable(z.string()), // Can be null or a string
  lat: z.union([z.string(), z.literal("null")]).nullable(), // Expects a string, including the string "null"
  lng: z.union([z.string(), z.literal("null")]).nullable(),
  services: z.array(ServiceSchema).nullable(), // Expects a string, including the string "null"
});

export function AddressDetail() {
  const { id } = useParams();
  const { isLoading, isPending, data, error } = useGetAddressDetail(id);

  const [showForm, setShowForm] = useState(false);
  const [isEditAdd, setIsEditAdd] = useState(false);
  const parseResult = AddressDetailsSchema.safeParse(data);
  const [formUpdate, setFormUpdate] = useState({
    address: "",
    category: "",
  });



  const {UpdateAddress,isUpdating} = useUpdateAddress()

  function handleFormAddress(e){
    setFormUpdate((state)=>({...state,address:e.target.value}))
  }

  function handleFormKategori(e){
    setFormUpdate((state)=>({...state,category:e.target.value}))
  }

  function handleUpdateAlamat() {
    console.log(formUpdate);
    UpdateAddress(
      { id: id, data: formUpdate },
      { onSuccess: () => setIsEditAdd(false) }
    );
  }

  if (isLoading || isPending) return <LoadingContainer />;
  if (error || !parseResult.success) return <div>something wrong please try again later</div>;

  console.log(data)
  console.log(parseResult)

  return (
    <div className="w-full p-5 overflow-y-scroll">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-xl">
            Service <b>{parseResult.data.customer_data}</b>
          </span>
          {isEditAdd ? (
            <div>
              <form
                action=""
                className="flex flex-row gap-1 "
              >
                {/* <label htmlFor="alamat" className="text-sm">
                  Alamat
                </label> */}
                <input name="alamat" id="alamat" className="px-2" value={formUpdate?.address} onChange={handleFormAddress}/>
                {/* <input type="text" id="alamat" name="alamat" /> */}
                {/* <label htmlFor="kategori" className="text-sm">
                  Kategori
                </label> */}
                <span>|</span>
                <input type="text" id="kategori" name="kategori" className="px-2" value={formUpdate?.category} onChange={handleFormKategori}/>
                <div className="flex flex-row justify-end gap-1">
                  <div
                    className="bg-gray-400 px-4 py-1 rounded-full cursor-pointer hover:opacity-75 text-sm"
                    onClick={() => setIsEditAdd(false)}
                  >
                    cancel
                  </div>
                  <div className="bg-green-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-75 text-sm"
                  onClick={handleUpdateAlamat}>
                    submit
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-row gap-5 items-center">
              <div>
                <span>
                  {parseResult.data.address} | {parseResult.data.category}
                </span>
              </div>
              <div onClick={() =>{ 
                setFormUpdate((state)=>({...state,address:parseResult.data.address,category:parseResult.data.category}))
                setIsEditAdd(true)
                }}>
                <FaEdit className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity" />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex flex-row gap-2">
            <div className="px-5 py-1 bg-red-400 rounded hover:opacity-50 cursor-pointer transition-opacity ease-out"
              hidden={showForm}>
              Delete Address
            </div>
            <div
              className="px-5 py-1 bg-blue-400 rounded hover:opacity-50 cursor-pointer transition-opacity ease-out"
              hidden={showForm}
              onClick={() => setShowForm(true)}
            >
              Add Service
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <FormService setShowForm={setShowForm} showForm={showForm} />
      </div>
      <div>
        {/* service list */}
        {parseResult.data.services.map((each) => {
          return (
            <ServiceTile data={each} key={each.id} />
            // <div key={each.id} className="border p-2 rounded-md shadow my-2">
            //   <span className="text-sm font-semibold">
            //     service date : {each.service_date}
            //   </span>
            //   <div className="grid grid-cols-3 justify-evenly border-t">
            //     <div>
            //       <span className="text-xs">Keluhan</span>
            //       <p>{each.keluhan}</p>
            //     </div>
            //     <div>
            //       <span className="text-xs">Tindakan</span>
            //       <p>{each.tindakan}</p>
            //     </div>
            //     <div>
            //       <span className="text-xs">Hasil</span>
            //       <p>{each.hasil}</p>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
      {/* <p>{data?.address}</p> */}
    </div>
  );
}
