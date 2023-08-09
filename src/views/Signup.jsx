import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Signup = () => {

    const {setUser, settoken} = useStateContext();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload ={
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }


        axiosClient.post('/signup', payload)
        .then(({data})=>{
            setUser(data.user)
            settoken(data.token)
        })
        .catch(error => {
            const response = error.response;
            if(response && response.ststus === 422){
                console.log(response.data.error);
            }
            else if (response && response.status === 419){
                console.log(response.data.message);
            }
        })
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">
                    Signup For Free
                </h1>
                <form onSubmit={onSubmit}>
                    <input ref={nameRef} type="text" placeholder="Full Name" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <input ref={passwordConfirmationRef} type="password" placeholder="Password Confermation" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        All Ready Have Account ? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;