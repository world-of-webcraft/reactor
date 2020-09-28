import { useState, useEffect, useCallback } from "react";

export constuseRestApiCall = (url, method, headers = { 'Content-Type': 'application/json' }, body) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const requestData = {
        url: url,
        method: method,
        headers: headers,
        body: body
    }

    const fetchData = useCallback(() => {
        const requestOptions = {
            method: requestData.method,
            headers: requestData.headers,
            body: JSON.stringify(requestData.body)
        }
        if (!requestData.url) {
            return
        }
        fetch(requestData.url, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [requestData])

    useEffect(() => {
        if (!isLoaded) {
            fetchData()
        }
    }, [isLoaded, fetchData])

    return { data: data, isLoaded: isLoaded, error: error };
}
