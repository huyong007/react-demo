import React, { useState, useEffect, useReducer } from 'react';

const host = 'https://jsonplaceholder.typicode.com/';
const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(host + initialUrl);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const dataFetchReducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_INIT':
                return {
                    ...state,
                    isLoading: true,
                    isError: false
                };
            case 'FETCH_SUCCESS':
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload,
                };
            case 'FETCH_FAILURE':
                return {
                    ...state,
                    isLoading: false,
                    isError: true,
                }
            default:
                throw new Error();
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const result = await fetch(url).then(res => res.json());
                setIsLoading(false);
                setData(result);
            } catch (error) {
                setIsError(true);
            }
        }
        fetchData();
    }, [url]);

    const doFetch = (url) => setUrl(host + url);
    return { data, isLoading, isError, doFetch };
}

export { useDataApi };