import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Dashboard from "./views/Dashboard";
import Users from "./views/Users";
import DefaultLayout from "./Components/Layouts/DefaultLayout";
import GuestLayout from "./Components/Layouts/GuestLayout";
import Error from "./views/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/users",
                element: <Users />
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ],
    },
    // {
    //     path: "*",
    //     element: <Error />
    // }
]);

export default router;