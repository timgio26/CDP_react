export function CustomerTable({ header, data }) {
  // console.log(header);
  return (
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
      <thead>
        <tr>
          {header.map((each) => (
            <th
              key={each}
              className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200"
            >
              {each.toUpperCase()}
            </th>
          ))}
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 bg-gray-100 border-b border-gray-200">
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((each) => (
          <tr className="hover:bg-gray-50" key={each.id}>
            {header.map((eachkey) => (
              <td
                key={eachkey}
                className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200"
              >
                {each[eachkey]}
              </td>
            ))}

            <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
