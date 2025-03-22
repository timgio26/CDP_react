import { useParams } from "react-router";
import { useState } from "react";

import { useGetAddressDetail } from "../Components/useCustomer";
import { LoadingContainer } from "../Components/LoadingContainer";
import { FormService } from "../Components/FormService";

import { z } from "zod";
import { ServiceTile } from "../Components/ServiceTile";

import { FaEdit } from "react-icons/fa";

const ServiceSchema = z.object({
  hasil: z.string(), // Expects a string
  id: z.number(), // Expects a number
  img_url: z.nullable(z.string()), // Can be null or a string
  keluhan: z.string(), // Expects a string
  service_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Validates date in "YYYY-MM-DD" format
  tindakan: z.string(), // Expects a string
});

const AddressDetailsSchema = z.object({
  customer_data:z.string(),
  address: z.string(), // Expects a string
  category: z.string(), // Expects a string
  id: z.number(), // Expects a number
  img_url: z.nullable(z.string()), // Can be null or a string
  lat: z.union([z.string(), z.literal("null")]), // Expects a string, including the string "null"
  lng: z.union([z.string(), z.literal("null")]),
  services: z.array(ServiceSchema).nullable(), // Expects a string, including the string "null"
});

export function AddressDetail() {
  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
  const { isLoading, isPending, data, error } = useGetAddressDetail(id);

  const parseResult = AddressDetailsSchema.safeParse(data);

  console.log(parseResult);
  // console.log(data, error);

  if (isLoading || isPending) return <LoadingContainer />;
  if (error) return <div>something wrong please try again later</div>;

  return (
    <div className="w-full p-5 overflow-y-scroll">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Service <b>{parseResult.data.customer_data}</b></span>
          <div className="flex flex-row gap-5 items-center">

          <span>
            {parseResult.data.address} | {parseResult.data.category}
          </span>
          <FaEdit className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity"/>
          </div>
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
        <FormService setShowForm={setShowForm} showForm={showForm} />
      </div>
      <div>
        {/* service list */}
        {parseResult.data.services.map((each) => {
          return (
            <ServiceTile data={each} key={each.id}/>
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
