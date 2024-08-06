import { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Sidebar } from "../navbar/SideBar";
import { useAuthContext } from "../../context/AuthContext";
import "./dashboard..css";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";

export default function Dashboard() {
    const { email } = useAuthContext();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { isAuthenticated } = useAuthContext();

    return (
        <div className={`dashboard-container ${isDrawerOpen ? "shifted" : ""}`}>
            {isAuthenticated && (
                <IconButton
                    variant="text"
                    size="lg"
                    onClick={() => setIsDrawerOpen(true)}
                    className={`sidebar-toggle ${isDrawerOpen ? "hidden" : ""}`}
                >
                    <Bars3Icon className="h-8 w-8 stroke-2" />
                </IconButton>
            )}
            <Sidebar
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
            />
            <section className="dashboard-content">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            Welcome, {email}!
                        </h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            This is your dashboard. You can view your recent activity, view your company statistics and take action.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                {/* Uncomment the image below if needed */}
                                {/* <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/500x300"
                                /> */}
                                <div className="h-full w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="text-indigo-500 w-12 h-12 mb-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 17l4 4 4-4m-4-5v9" />
                                            <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">$274.7K</h2>
                                        <p className="leading-relaxed">Revenue</p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:p-2 p-1 w-1/2">
                                {/* <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/501x301"
                                /> */}
                                <div className="h-full w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="text-indigo-500 w-12 h-12 mb-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx={9} cy={7} r={4} />
                                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">274</h2>
                                        <p className="leading-relaxed">Employees</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                {/* <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://dummyimage.com/600x360"
                                /> */}
                                <BarChart />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                {/* <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block"
                                    src="https://dummyimage.com/601x361"
                                /> */}
                                <LineChart />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                {/* <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/502x302"
                                /> */}
                                <div className="h-full w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="text-indigo-500 w-12 h-12 mb-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M3 18v-6a9 9 0 0118 0v6" />
                                            <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">95</h2>
                                        <p className="leading-relaxed">Customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                {/* <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block"
                                    src="https://dummyimage.com/503x303"
                                /> */}
                                <div className="h-full w-full">
                                    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg flex flex-col items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            className="text-indigo-500 w-12 h-12 mb-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                        <h2 className="title-font font-medium text-3xl text-gray-900">61</h2>
                                        <p className="leading-relaxed">Products/Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
