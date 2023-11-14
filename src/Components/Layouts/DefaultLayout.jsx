import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";
import { useEffect, useState } from "react";
import Token from "../../token";


const DefaultLayout = () => {
    const {token, setToken} = useStateContext();
    const navigate = useNavigate();

    if (!token) {
        return <Navigate to="/login" />
    }

    const access_token = Token();
    const [user, setUser] = useState({});

    const split = JSON.stringify(access_token, null, 2)
    const {sub} = JSON.parse(split)

    useEffect(() =>{
        // const payload = {
        //     id: sub
        // }
        axiosClient.get(`/user/${sub}`)
        .then(({data}) => {
            // console.log(data);
            setUser(data)
        })
        
    },[setUser])
        
        

    

    const logOut = (e) => {
        e.preventDefault();
        // console.log(payload);
        axiosClient.post('/logout')
        .then(()=>{
            setToken(null);
            navigate('/login')
        })
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/users'>Users</Link>
                <Link to='/roles'>Roles</Link>
            </aside>
            <div className="content">
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                        {user.name}
                        <a href="#" onClick={logOut}>Logout</a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DefaultLayout;