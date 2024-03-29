import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPendding, setIsPendding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if (!res.ok) {
                throw Error("couldn't fetch the data");
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPendding(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted');
            }else {
                setIsPendding(false);
                setError(err.message);
            }
        })

        return () => abortCont.abort();

    }, [url]);

    return { data, isPendding, error }

}

export default useFetch;