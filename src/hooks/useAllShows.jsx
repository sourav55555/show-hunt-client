import { useEffect, useState } from "react";


const useAllShows = () => {

    const [allShow, setAllShow] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch("https://show-hunt-backend.onrender.com/allShow")
        .then(res => res.json())
        .then(data => {
            setAllShow(data);
            setLoading(false)
        })

    },[])

    return {allShow, loading};
};

export default useAllShows;