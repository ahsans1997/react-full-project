import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Outlet />
            Dashboard
        </div>
    );
};

export default Dashboard;