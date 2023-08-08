import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const DefaultLayout = () => {
    const {user, token} = useStateContext();
    const navigate = useNavigate();

    if (!token) {
        return <Navigate to="/login" />
    }

    const logOut = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }

    return (
        <div id="defaultLayout">
            <aside>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/users'>Users</Link>
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