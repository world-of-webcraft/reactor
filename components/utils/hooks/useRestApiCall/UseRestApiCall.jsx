import { useState, useEffect } from "react";

export const useRestApiCall = (apiURL) => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData(apiURL) {
    const res = await fetch(apiURL);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });
  if (hasError) {
    return JSON.stringify(hasError);
  }
  return JSON.stringify(data);
}
