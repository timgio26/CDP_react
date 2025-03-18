import { useNavigate } from "react-router";

export function AddressCard({ data }) {
    const navigate = useNavigate()
    function handleClick() {
    //   console.log("go to address details");
      navigate(`/address/${data.id}`)
    }
  
    return (
      <div className="bg-white border border-gray-300 rounded-lg mb-6 shadow-md p-4 space-y-4 flex flex-row gap-3">
        <div className="h-28 w-28">
          <img
            src="https://reviveyouthandfamily.org/wp-content/uploads/2016/11/house-placeholder.jpg"
            alt="House Placeholder"
            className="object-cover h-28 w-28 rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div onClick={handleClick} className="cursor-pointer">
            <span className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
              {data.category}
            </span>
          </div>
          <span className="text-gray-600">{data.address}</span>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-opacity duration-300 hover:opacity-75">
            Get Direction
          </button>
        </div>
      </div>
    );
  }
  