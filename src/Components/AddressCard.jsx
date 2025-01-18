export function AddressCard({data}) {
    // console.log(data.address)
  return (
<div className="bg-white border border-gray-300 rounded-lg mb-6 shadow-md p-4 space-y-4 flex flex-col">
  <img src="" alt="" className="w-full h-auto rounded-t-lg" />
  <div className="flex flex-col space-y-2">
    <span className="text-lg font-semibold text-gray-800">Rumah</span>
    <span className="text-gray-600">{data.address}</span>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded transition-opacity duration-300 hover:opacity-75">Get Direction</button>
  </div>
</div>

  );
}
