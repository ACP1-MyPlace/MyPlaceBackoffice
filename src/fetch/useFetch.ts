import { useEffect, useRef, useState } from "react";

export const useFetch = <K extends Object>(url: string) => {
    interface Response {
        data: K | null;
        loading: boolean;
        error: boolean;
    }

    const initialState: Response = { data: null, loading: true, error: false };
    const isMounted = useRef(true);
    const [state, setState] = useState<Response>(initialState);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setState(initialState);
        fetch(url)
            .then((resp) => resp.json())
            .then((data: K) => {
                setState({
                    error: false,
                    loading: false,
                    data,
                });
            })
            .catch(() => {
                setState({
                    loading: false,
                    data: null,
                    error: true,
                });
            });
    }, [url]);

    return state;
};
