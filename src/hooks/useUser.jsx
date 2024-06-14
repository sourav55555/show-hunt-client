import { useEffect, useState } from "react";
import useAuth from "./useAuth";


const useUser = () => {

    const {user} = useAuth();
    // const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [reload, setReload] = useState(true);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`,{
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        .then(res => res.json())
        .then(data => {
            setEmail(data.email);
            setName(data.name)
            setLoader(false)
        });
    },[user, reload])

    return { name, email,reload, setReload, loader};
};

export default useUser;