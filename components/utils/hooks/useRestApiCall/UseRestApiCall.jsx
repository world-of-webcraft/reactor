import { useState, useEffect } from "react";

export const useRestApiCall = (apiURL) => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  const fetchData = async (apiURL) => {
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
    hasError;
  }
  return data;
}
