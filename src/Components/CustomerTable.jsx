import { useEffect, useState } from "react";
import { IconButton } from "./IconButton";
import { MyDialog } from "./MyDialog";
import { useDeleteCustomer } from "./useCustomer";
import { IoMdEye, IoMdTrash } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router";

export function CustomerTable({ header = [], data = [] }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [delData, setDelData] = useState(null);
  const { DeleteCustomer, isDeleting } = useDeleteCustomer();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const curPage = Number(searchParams.get("page"))

  
  useEffect(()=>{
    if(!curPage){
      setSearchParams(`?${new URLSearchParams({ page: 1 })}`)
    }
  },[curPage,setSearchParams])



  const npage = Math.ceil(data.length/10)

  function openDialog(data) {
    setDelData(data);
    setDialogOpen(true);
  }
  function closeDialog() {
    setDelData(null);
    setDialogOpen(false);
  }

  function onConfirmDialog() {
    DeleteCustomer(delData.id);
    closeDialog();
  }

  function handleSeeCustomer(id) {
    navigate(`/customer/${id}/`);
  }

  function handleSeeAddress(id){
    navigate(`/address/${id}/`)
  }

  function handleNextPage(){
    // searchParams.set("page",curPage+1)
    if(curPage==npage)return
    setSearchParams(`?${new URLSearchParams({ page: curPage+1 })}`)
  }

  function handlePrefPage(){
    // searchParams.set("page",curPage-1)
    if(curPage==1)return
    setSearchParams(`?${new URLSearchParams({ page: curPage-1 })}`)
    
  }

  return (
    <>
      <div className="hidden sm:block">
        <table className=" bg-white border border-gray-200 rounded-lg shadow-md w-full">
          <thead className="w-full">
            <tr>
              {/* {header.map((each) => (
              <th
                key={each}
                className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200"
              >
                {each.toUpperCase()}
              </th>
            ))} */}
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200">
                Nama
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200">
                Kontak
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200">
                Alamat
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((each) => (
              <tr className="hover:bg-gray-50" key={each.id}>
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                  {each.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                  {each.email}
                  <br />
                  {each.phone}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                  <ul>
                    {each.addresses.map((eachAdd) => (
                      <li
                        key={eachAdd.id}
                        onClick={() => handleSeeAddress(eachAdd.id)}
                        className="cursor-pointer hover:opacity-80 list-disc"
                      >
                        {eachAdd.address}
                      </li>
                    ))}
                  </ul>
                </td>

                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                  <div className="flex flex-row gap-2">
                    <IconButton
                      onClick={() => handleSeeCustomer(each.id)}
                      color={"blue"}
                    >
                      <IoMdEye />
                    </IconButton>
                    <IconButton
                      onClick={() => openDialog((data = each))}
                      color={"red"}
                    >
                      <IoMdTrash />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row items-center gap-2 mt-2 ">
          <div className="bg-gray-300 px-4 py-1 rounded-full hover:opacity-75  cursor-pointer"
          onClick={handlePrefPage}>prev</div>
          <span>
            page {searchParams.get("page")} of {npage}
          </span>
          <div className="bg-gray-300 px-4 py-1 rounded-full hover:opacity-75 cursor-pointer"
          onClick={handleNextPage}>next</div>
        </div>
      </div>

      <div className="sm:hidden">
        {data.map((each) => (
          <div
            className="bg-gray-50 border-slate-200 border-1 rounded-lg mb-4 shadow-sm p-1 gap-3 flex flex-col"
            key={each.id}
          >
            <div>
              {header.map((eachkey) => (
                <p key={eachkey} className={`px-4 text-sm border-gray-200`}>
                  {eachkey}: {each[eachkey]}
                </p>
              ))}
            </div>

            <div className={`px-4`}>
              <div className="flex flex-row gap-2">
                <IconButton
                  onClick={() => handleSeeCustomer(each.id)}
                  color={"blue"}
                >
                  <IoMdEye />
                </IconButton>
                <IconButton
                  onClick={() => openDialog((data = each))}
                  color={"red"}
                >
                  <IoMdTrash />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MyDialog
        open={dialogOpen}
        close={closeDialog}
        onConfirm={onConfirmDialog}
        data={delData}
      />
    </>
  );
}
