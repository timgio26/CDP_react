import { useNavigate, useParams } from "react-router";
import { useDelService, useGetService, useUpdateService } from "../Components/useCustomer";
import { LoadingContainer } from "../Components/LoadingContainer";
import { useState } from "react";

import { GiCancel } from "react-icons/gi";

export function ServiceDetail() {
  const { id } = useParams();
  const { isLoading, isPending, data, error } = useGetService(id);
  const { DeleteService, isDeleting } = useDelService();
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const {UpdateService,isUpdating} = useUpdateService()
  const [showDeleteModal,setShowDeleteModal] = useState(false)

  const [updateData, setUpdateData] = useState({
    keluhan: "",
    tindakan: "",
    hasil: "",
  });

  function handleEdit() {
    setUpdateData((curstate) => ({
      ...curstate,
      keluhan: data.data.keluhan,
      tindakan: data.data.tindakan,
      hasil: data.data.hasil,
    }));
    setIsEdit(true);
  }

  function handleDelete() {
    DeleteService(id, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  }

  function handleSubmit(){
    // console.log(updateData)
    UpdateService({id,data:updateData},
      {onSuccess:()=>{
        // console.log("update success")
        setIsEdit(false)
      }}
    )
  }

  if (isLoading || isPending) return <LoadingContainer />;
  if (error)
    return (
      <div>
        <span>there is error please try again later</span>
      </div>
    );
  return (
    <div className="w-full gap-3 py-5 px-8 relative">
      <div className={showDeleteModal && "blur-sm"}>
        <div className="flex flex-row justify-between">
          <span className="text-2xl">Service Detail</span>
          <div className={`${isEdit ? "hidden" : "flex flex-row"} gap-2`}>
            <div
              className="bg-yellow-500 px-5 rounded flex items-center cursor-pointer hover:opacity-80"
              onClick={handleEdit}
            >
              Edit
            </div>
            <div
              className="bg-red-600 px-5 rounded flex items-center cursor-pointer hover:opacity-80"
              onClick={() => setShowDeleteModal(true)}
              // aria-disabled={isDeleting}
            >
              {/* {isDeleting ? "Loading" : "Delete"} */}
              Delete
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <span className="font-semibold text-sm border-b-2">Keluhan</span>
          </div>
          {isEdit ? (
            <textarea
              name="keluhan"
              id="keluhan"
              value={updateData.keluhan}
              onChange={(e) =>
                setUpdateData((curstate) => ({
                  ...curstate,
                  keluhan: e.target.value,
                }))
              }
            />
          ) : (
            <span>{data.data.keluhan}</span>
          )}
        </div>
        <div className="flex flex-col">
          <div>
            <span className="font-semibold text-sm border-b-2">Tindakan</span>
          </div>
          {isEdit ? (
            <textarea
              name="tindakan"
              id="tindakan"
              value={updateData.tindakan}
              onChange={(e) =>
                setUpdateData((curstate) => ({
                  ...curstate,
                  tindakan: e.target.value,
                }))
              }
            />
          ) : (
            <span>{data.data.tindakan}</span>
          )}
        </div>
        <div className="flex flex-col">
          <div>
            <span className="font-semibold text-sm border-b-2">Hasil</span>
          </div>
          {isEdit ? (
            <textarea
              name="hasil"
              id="hasil"
              value={updateData.hasil}
              onChange={(e) =>
                setUpdateData((curstate) => ({
                  ...curstate,
                  hasil: e.target.value,
                }))
              }
            />
          ) : (
            <span>{data.data.hasil}</span>
          )}
        </div>
        <div className={`${isEdit ? "flex" : "hidden"} gap-2 my-3`}>
          <div
            className="bg-gray-400 px-4 py-1 rounded-full cursor-pointer hover:opacity-75 text-sm"
            onClick={() => setIsEdit(false)}
          >
            cancel
          </div>
          <div
            className="bg-green-500 px-4 py-1 rounded-full cursor-pointer hover:opacity-75 text-sm"
            onClick={handleSubmit}
          >
            {isUpdating ? "updating" : "save"}
            {/* save */}
          </div>
        </div>
      </div>

      <div
        className={`${
          showDeleteModal ? "flex" : "hidden"
        } z-10 border rounded shadow flex-col items-center bg-white p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <GiCancel size={50} color="#dc2626" />
        <span>Konfimasi hapus data service</span>
        <div className="flex flex-row gap-2 mt-3">
          <div
            className="bg-gray-300 px-5 rounded flex items-center cursor-pointer hover:opacity-80"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </div>
          <div
            className="bg-red-600 px-5 rounded flex items-center cursor-pointer hover:opacity-80"
            onClick={handleDelete}
          >
            {isDeleting ? "Loading" : "Delete"}
          </div>
        </div>
      </div>

      
    </div>
  );
}
