import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { useGetOwnedCompanies } from "../../../hooks/useCompanies";
import { Button } from "@material-tailwind/react";
import { remove } from "../../../api/auth-api";

export default function UserDetails() {
    const navigate = useNavigate();
    const { userId, email } = useAuthContext();
    const [ ownedCompanies ] = useGetOwnedCompanies(userId);

    const companies = Object.values(ownedCompanies);

    const totalRevenue = companies.reduce((sum, company) => {
        return sum + (parseFloat(company.revenue) || 0); 
    }, 0);

    const totalEmployees = companies.reduce((sum, company) => {
        return sum + (parseInt(company.employees, 10) || 0); // Convert employees to number
    }, 0);

    const userDeleteHandler = async () => {     // set user delete functionality

        const isConfirmed = confirm(`Are you sure you want to delete your Profile?`);

        // TODO: implement Modal dialog
        if (!isConfirmed) {     // check if user confirmed the deletion
            return;
        }

        try {
            await remove(userId)                    // delete user

            navigate('/logout');
        } catch (err) {                             // check for error
            console.error(err.message);
        }
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                    Hello, {email}
                    
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Bellow You can see the current statistics of your companies.
                </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                        Total companies: {companies.length}
                    </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                        Total Employees: {totalEmployees}
                    </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">
                        Total Ravenue: $ {totalRevenue}
                    </span>
                    </div>
                </div>
                <div className="p-2 sm:w-1/2 w-full">
                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                        viewBox="0 0 24 24"
                    >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                        <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                    <span className="title-font font-medium">Additional field</span>
                    </div>
                </div>
                </div>
                <div className="flex justify-center gap-4 mt-16">
                    <Link to={`/users/${userId}/edit`}>
                        <Button
                            size="lg"
                            variant="outlined"
                            color="blue-gray"
                            className="flex items-center gap-3"
                            >
                            Edit User Info
                        </Button>
                    </Link>

                    <Button
                        size="lg"
                        variant="outlined"
                        color="blue-gray"
                        className="flex items-center gap-3"
                        onClick={userDeleteHandler}
                        style={{ backgroundColor: 'rgba(255, 0, 0, 0.1)' }} // transparent red
                    >
                        Delete User
                    </Button>

                    </div>
            </div>
        </section>

    );
}