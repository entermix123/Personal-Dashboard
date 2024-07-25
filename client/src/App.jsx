import { Routes, Route } from "react-router-dom";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import Dashboard from "./components/dashboard/DashBoard";
import Login from "./components/user/Login";
import "./index.css";

function App() {
    return (
        <div className="app-container">
            <HeaderNavbar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
