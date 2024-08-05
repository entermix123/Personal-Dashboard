import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CompanyListItem({
    _id,
    name,
    category,
    summary,
    _createdOn,
    employees,
    ravenue,
}) {   
    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(new Date(_createdOn));
    
    return (
        <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700">
                        Type: {category}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">Created: {formattedDate}</span>
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                        {name}
                    </h2>
                    <p className="leading-relaxed">
                        {summary}
                    </p>
                    <Link to={`/company/${_id}/details`} className="text-indigo-500 inline-flex items-center mt-4">
                        Company Details
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}