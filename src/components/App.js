import React, { useState, useEffect, useMemo } from "react";
import "./../styles/App.css";
import { fetchData } from "./api";
import "regenerator-runtime/runtime";

function App({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const cachedData = useMemo(() => {
    return fetchData(id);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    setData(null);

    const fetchDataAsync = async () => {
      const result = await cachedData;
      setData(result);
      setIsLoading(false);
    };

    fetchDataAsync();
  }, [id, cachedData]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            {data.map((data) => (
              <li key={data.id}>
                <h4>{data.title}</h4>
                <p>{data.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
