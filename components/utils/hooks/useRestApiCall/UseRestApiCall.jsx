import { useState, useEffect } from "react";

export const useRestApiCall = (apiURL) => {
    const [url] = useState(apiURL)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) return
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }

            )
    }, [url]);
    return { data: data, isLoaded: isLoaded, error: error };
}
