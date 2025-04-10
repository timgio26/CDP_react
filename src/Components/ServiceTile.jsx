import { useNavigate } from "react-router";

export function ServiceTile({data}){
  const navigate = useNavigate()
  function seeDetails(){
    navigate('/service/'+data.id)
  }
    return (
      <div key={data.id} className="border p-2 rounded-md shadow my-2 bg-white">
        <div className="flex justify-between">
            {/* <div> */}

          <span className="text-sm font-semibold">
            service date : {data.service_date}
          </span>
          

            {/* </div> */}
          <div className="opacity-50 cursor-pointer hover:opacity-100 transition-opacity" onClick={seeDetails}>
            details
          </div>
        </div>
        <div className="grid grid-cols-3 justify-evenly border-t">
          <div>
            <span className="text-xs">Keluhan</span>
            <p>{data.keluhan}</p>
          </div>
          <div>
            <span className="text-xs">Tindakan</span>
            <p>{data.tindakan}</p>
          </div>
          <div>
            <span className="text-xs">Hasil</span>
            <p>{data.hasil}</p>
          </div>
        </div>
      </div>
    );
}