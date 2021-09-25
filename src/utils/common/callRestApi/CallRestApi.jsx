export const callRestApi = (url, method, body, headers = { 'Content-Type': 'application/json' }) => {
    let isLoaded = false
    let error = null
    const requestData = {
        url: url,
        method: method,
        headers: headers,
        body: body
    }
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
                return { data: result, isLoaded: true };
            },
            (error) => {
                return { isLoaded: true, error: error };
            }
        )
}
