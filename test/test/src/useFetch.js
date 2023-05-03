import React from 'react';
import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setblogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
        useEffect(()=>{
            const aboutCont = new AbortController();
    
            setTimeout(() =>{
                fetch(url)
                .then(res =>{
                    if(!res.ok){
                        throw Error('No Data Found')
                    }      
                    return res.json();
                })
                .then(data =>{
                    setblogs(data);
                    setLoading(false);
                    setError(null);
                })
                .catch(err =>{
                    if(err.name === 'AboutError'){
                        console.log('done');
                    }else{
                        setLoading(false);
                        setError(err.message);
                    }
                });
            },1); 
            return () => aboutCont.abort()
            
        },[url])
        return{data, loading, error}
}
export default useFetch;