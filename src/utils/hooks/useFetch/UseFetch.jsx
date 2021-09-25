import { useCallback, useEffect } from "react";

export const useFetch = (url, initialValue = null, options) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(initialValue);

    const toggleLoading = () => setLoading(loading => !loading);

    const getData = useCallback(async () => {
        toggleLoading();
        const res = (await fetch(url, { ...options }));
        const json = await res.json();

        if (!res.ok) {
            setError(json)
            toggleLoading();
            return;
        }

        setData(json);
        toggleLoading();
    }, []);

    useEffect(() => {
        if (!loading) {
            getData();
        }
    }, [loading]);

    return { loading, data, error };
}
