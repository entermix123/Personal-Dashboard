import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Logout from "../src/components/user/logout/Logout";
import Register from "./components/user/register/Register";
import HeaderNavbar from "./components/navbar/HeaderNavbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/DashBoard";
import Login from "./components/user/login/Login";
import "./index.css";
import ContactUs from "./components/contact-us/ContactUs";

function App() {

    return (
        <AuthContextProvider>   {/* Wrap the app with AuthContext.Provider - pass the contextData */}

        <div className="app-container">
            <HeaderNavbar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path='/company' element={<CompanyList />} /> */}
                    {/* <Route path='/company/create' element={<CompanyCreate />} /> */}
                    {/* <Route path='/company/edit' element={<CompanyEdit />} /> */}
                    {/* <Route path='/company/:companyId/details' element={<CompanyDetails />} /> */}
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/logout' element={<Logout />} />

                </Routes>
            </div>
            <Footer />
        </div>
        </AuthContextProvider>
    );
}

export default App;
