import { useState,useEffect } from "react";
import { fetchImages } from "../services/api/imageService";

function useFetch(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try{
            const result = await fetchImages();
            setData(result);
        }catch (error){
            setError(error.message || 'An error occurred');
        }finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return {
        data,
        loading,
        error,
        fetchData,
    };
}

export default useFetch;