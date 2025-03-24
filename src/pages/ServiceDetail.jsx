import { useNavigate, useParams } from "react-router";
import { useDelService, useGetService } from "../Components/useCustomer";
import { LoadingContainer } from "../Components/LoadingContainer";

export function ServiceDetail() {
  const { id } = useParams();
  const { isLoading, isPending, data, error } = useGetService(id);
  const { DeleteService, isDeleting } = useDelService();
  const navigate = useNavigate();

  function handleDelete() {
    DeleteService(id, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  }

  if (isLoading || isPending) return <LoadingContainer />;
  if (error)
    return (
      <div>
        <span>there is error please try again later</span>
      </div>
    );
  return (
    <div className="w-full gap-3 py-5 px-8">
      <div className="flex flex-row justify-between">
        <span className="text-2xl">Service Detail</span>
        <div className="flex flex-row gap-2">
          <div className="bg-yellow-500 px-5 rounded flex items-center cursor-pointer hover:opacity-80">
            Edit
          </div>
          <div className="bg-red-600 px-5 rounded flex items-center cursor-pointer hover:opacity-80"
          onClick={handleDelete}
          aria-disabled={isDeleting}
          >
            {isDeleting?"Loading":"Delete"}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="font-semibold text-sm border-b-2">Keluhan</span>
        </div>
        <span>{data.data.keluhan}</span>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="font-semibold text-sm border-b-2">Tindakan</span>
        </div>
        <span>{data.data.tindakan}</span>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="font-semibold text-sm border-b-2">Hasil</span>
        </div>
        <span>{data.data.hasil}</span>
      </div>
    </div>
  );
}
