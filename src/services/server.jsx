import React, { useState, useEffect, useReducer } from 'react';

const host = 'https://jsonplaceholder.typicode.com/';
const useDataApi = (initialUrl, initialData) => {
    const [url, setUrl] = useState(host + initialUrl);


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

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    })

    useEffect(() => {
        let didCancel = false;

        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await fetch(url).then(res => res.json());
                if (!didCancel) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: result });
                }
            } catch (error) {
                if (!didCancel) {
                    dispatch({ type: 'FETCH_FAILURE' });
                }
            }
        }
        fetchData();
        return () => {
            didCancel = true;
        }
    }, [url]);

    const doFetch = (url) => setUrl(host + url);
    return { ...state, doFetch };
}

export { useDataApi };