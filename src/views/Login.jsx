import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useRef } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

    const {setToken} = useAuth();


    const emailRef = useRef();
    const passwordRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload ={
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post('/login', payload)
        .then(({data})=>{
            // console.log(data.access_token);
            // setId(data.user.id)
            // setUser(data.user.name)
            setToken(data.access_token)
        })

    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">
                    Login Into Your Account
                </h1>
                <form onSubmit={onSubmit}>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Register ? <Link to="/signup">Create New Account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;