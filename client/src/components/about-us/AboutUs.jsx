export default function AboutUs() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                    >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Our Mission
                    </h2>
                    <p className="leading-relaxed text-base">
                    We are dedicated to providing exceptional customer service and a loyal customer base that continues to grow.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    </a>
                </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Our Team
                    </h2>
                    <p className="leading-relaxed text-base">
                    Our Team has been dedicated to creating a loyal and customer-centric customer service experience.
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    </a>
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="sm:w-16 sm:h-16 w-10 h-10"
                    viewBox="0 0 24 24"
                    >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                    </svg>
                </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
                    
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                    Partners
                    </h2>
                    <p className="leading-relaxed text-base">
                    Our partners have helped us to grow and expand our customer base. 
                    </p>
                    <a className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    </a>
                </div>
                </div>
            </div>
        </section>
    );
}