import { useEffect, useState } from "react";


const useAllShows = () => {

    const [allShow, setAllShow] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        fetch("http://localhost:5000/allShow")
        .then(res => res.json())
        .then(data => {
            setAllShow(data);
            setLoading(false)
        })

    },[])

    return {allShow, loading};
};

export default useAllShows;