import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setblogs] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);


    useEffect(()=>{
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal})
            .then(res => {
                
                if(!res.ok){
                    throw Error('could not fetch the data for that resource');
                }

                return res.json();
            })
            .then((data)=>{
                // console.log(data);
                setblogs(data);
                setisPending(false);
                seterror(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    seterror(err.message);
                    setisPending(false);
                }
            });

            return ()=> abortCont.abort();
    },[url]);

    return {data, isPending, error}
}


export default useFetch;