import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { useCallback, useEffect, useState } from "react"
import useToggle from "./useToggle";

axios.defaults.baseURL = "http://localhost:5000";

type useAxiosTypes = {
    response: AxiosResponse | undefined,
    error: boolean,
    loading: boolean
}

export default function useAxios(axiosParams: AxiosRequestConfig<any>): useAxiosTypes {
    const [response, setResponse] = useState<AxiosResponse>();
    const [error, toggleError] = useToggle(false);
    const [loading, toggleLoading] = useToggle(true);

    async function getData(params: AxiosRequestConfig) {
        try {
            const result = await axios.request(params);
            console.log(result);
            setResponse(result);
        } catch (error) {
            console.log("Error", error);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }
    useEffect(() => {
        getData(axiosParams);
    }, []);
    return {
        response, error, loading
    }
}
