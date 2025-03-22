import { useState } from "react";
import { useParams } from "react-router";
import { useQueryClient } from '@tanstack/react-query'

import { IoMdClose } from "react-icons/io";
import { useAddService } from "../Components/useCustomer";

export function FormService({setShowForm,showForm}) {
  const queryClient = useQueryClient()
  
  const { AddService, isAddingService } = useAddService();
  const { id } = useParams();
  

  const initialStateForm = {
    service_date: "",
    keluhan: "",
    tindakan: "",
    hasil: "",
    address_id: id,
  };

  const [formData, setFormData] = useState(initialStateForm);

  function handleSubmimt(e) {
    e.preventDefault();
    console.log(formData);
    AddService(formData, {
      onSuccess: () => {
        setFormData(initialStateForm);
        setShowForm(false);
        queryClient.invalidateQueries({ queryKey: ['address'] })
      },
    });
    // console.log('submit')
  }
  return (
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
        <input
          type="date"
          name="tglService"
          id="tglService"
          value={formData.service_date}
          onChange={(e) =>
            setFormData((state) => ({ ...state, service_date: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Keluhan" className="text-sm">
          Keluhan
        </label>
        <textarea
          name="Keluhan"
          id="Keluhan"
          value={formData.keluhan}
          onChange={(e) =>
            setFormData((state) => ({ ...state, keluhan: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="tindakan" className="text-sm">
          Tindakan
        </label>
        <textarea
          name="tindakan"
          id="tindakan"
          value={formData.tindakan}
          onChange={(e) =>
            setFormData((state) => ({ ...state, tindakan: e.target.value }))
          }
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="hasil" className="text-sm">
          Hasil
        </label>
        <textarea
          name="hasil"
          id="hasil"
          value={formData.hasil}
          onChange={(e) =>
            setFormData((state) => ({ ...state, hasil: e.target.value }))
          }
        />
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
        className="bg-[#7989ff] rounded hover:opacity-50 py-1 my-2 cursor-pointer"
        disabled={isAddingService}
      />
    </form>
  );
}
