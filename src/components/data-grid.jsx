import { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";

const flattenObject = (obj, prefix = "") => {
  return Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    const prefixedKey = prefix ? `${prefix}_${key}` : key;
    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenObject(value, prefixedKey));
    } else {
      acc[prefixedKey] = value;
    }
    return acc;
  }, {});
};

export default function DataGrid({ loading, errorMessage, data }) {
  const rowData = useMemo(() => data.map((item) => flattenObject(item)), [data]);

  // Generate column definitions from keys of first row
  const colDefs = useMemo(() => {
    if (!rowData.length) return [];
    return Object.keys(rowData[0]).map((key) => ({
      field: key,
      headerName: key.replace(/_/g, " ").toUpperCase(),
      sortable: true,
      filter: true,
      resizable: true,
    }));
  }, [rowData]);

  if (loading) return <p>Loading...</p>;
  if (errorMessage) return <p className="text-red-500">{errorMessage}</p>;
  if (!data.length) return <p>No data available</p>;

  return (
    <div className="h-[80vh] w-full overflow-auto">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 20, 30, 40, 50]}
      />
    </div>
  );
}
