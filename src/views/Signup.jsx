import { Link } from "react-router-dom";

const Signup = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">
                    Signup For Free
                </h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password Confermation" />
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