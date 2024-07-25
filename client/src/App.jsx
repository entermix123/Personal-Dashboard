import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/navbar/SideBar";

import Dashboard from "./components/dashboard/DashBoard";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import Login from "./components/user/Login";

import "./index.css";

function App() {
    return (
        <div>
            <HeaderNavbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
