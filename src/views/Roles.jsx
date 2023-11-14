import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

const Roles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(()=>{
        axiosClient.get('/roles')
        .then(({data})=>{
            console.log(data);
        })
    },[])
    return (
        <div>
            Roles
        </div>
    );
};

export default Roles;