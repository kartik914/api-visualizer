import React from "react";
import DataGrid from "./data-grid";

export default function ApiVisualizer() {
  const [apiValue, setApiValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorMessage, setError] = React.useState(null);
  const [data, setData] = React.useState([]);

  const handleGenerate = async () => {
    setLoading(true);
    await fetchData();
    setLoading(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(apiValue);
      console.log("Response:", response);
      if (!response.ok) {
        setError("Failed to fetch data");
        setData([]);
        return;
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        setError("Data is not in array format");
        setData([]);
        return;
      }
      setData(data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Invalid API URL");
      setData([]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <label htmlFor="api" className="font-bold">
          Source:
        </label>
        <input
          className="p-1 border-2 w-full border-gray-300 rounded-md"
          id="api"
          type="url"
          value={apiValue}
          onChange={(e) => {
            setApiValue(e.target.value);
          }}
        />
      </div>
      <button className="px-2 py-1 border-2 border-gray-300 rounded-md w-fit" onClick={handleGenerate}>
        Generate
      </button>
      <DataGrid loading={loading} errorMessage={errorMessage} data={data} />
    </div>
  );
}
