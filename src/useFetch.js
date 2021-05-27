import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [Blog, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    const [NoBlog ,setNoBlog] = useState(false)
    // const [any, setany] = useState();
    
    useEffect(()=>{
        const abortCont = new AbortController();//assc this ith a fetch and then we use it to control the fetch


        fetch(url, {signal: abortCont.signal})
            .then(res => { 
                if(!res.ok){
                    throw Error('could not fetch the data');
                }

                return res.json();
            })
            .then((data)=>{
                // console.log(data.length)
                if(data.length === 0){
                    setNoBlog(true)
                }
                setBlog(data) 
                setIsPending(false)
                setError(null)
            })

            .catch((err)=>{
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else{
                    setError(err.message)
                    setIsPending(false)  
                }
            })
            return () => abortCont.abort();
        },[url]);
        return {Blog, isPending, error, NoBlog}
}
 
export default useFetch;