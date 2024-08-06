import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import Logout from "../src/components/user/logout/Logout";
import Register from "./components/user/register/Register";
import Dashboard from "./components/dashboard/DashBoard";
import Login from "./components/user/login/Login";
import ContactUs from "./components/contact-us/ContactUs";
import CompanyCreate from "./components/company/company-create/CompanyCreate";
import CompanyList from "./components/company/company-list/CompanyList";
import CompanyDetails from "./components/company/company-details/CompanyDetails";
import MyCompanyList from "./components/company/company-list/MyCompanyList";
import AboutUs from "./components/about-us/AboutUs";
import Layout from "./components/layout/Layout";
import CompanyEdit from "./components/company/company-edit/CompanyEdit";
import UserDetails from "./components/user/details/UserDetails";
import UserEdit from "./components/user/edit/UserEdit";
import "./index.css";

function App() {

    return (
        <AuthContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<CompanyList />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/company/:companyId/details' element={<CompanyDetails />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/aboutus' element={<AboutUs />} />

            <Route path='/users/:userId/details' element={<UserDetails />} />
            <Route path='/users/:userId/edit' element={<UserEdit />} />
            <Route path='/company/create' element={<CompanyCreate />} />
            <Route path='/mycompanies' element={<MyCompanyList />} />
            <Route path='/company/:companyId/edit' element={<CompanyEdit />} />
            <Route path='/logout' element={<Logout />} />
            
          </Route>
        </Routes>
      </AuthContextProvider>
    );
}

export default App;
