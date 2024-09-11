const ServiceOverview = () => {
    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="relative w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url("path/to/your/image.jpg")' }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">Nail Extension</h1>
                        <div className="flex items-center justify-center mt-2 space-x-2">
                            <span className="px-2 py-1 text-sm bg-green-600 rounded-md">5.00 out of 5</span>
                            <span>(ratings on 1 services)</span>
                        </div>
                        <div className="mt-4 px-3 py-1 bg-green-500 text-xs font-semibold rounded-md">
                            SAFETY ENSURED
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto p-4 md:p-8">
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 bg-gray-100 p-4">
                        <ul className="space-y-4">
                            <li className="font-bold border-l-4 border-teal-500 pl-2">
                                Service Overview
                            </li>
                            <li className="hover:bg-gray-200 p-2 cursor-pointer">FAQ</li>
                            <li className="hover:bg-gray-200 p-2 cursor-pointer">Details</li>
                        </ul>
                    </div>

                    {/* Main Content */}
                    <div className="w-full md:w-3/4 p-4">
                        <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                        <div className="text-gray-700 space-y-4">
                            <p className="font-semibold">Know your service</p>
                            <ul className="list-disc list-inside">
                                <li>Don’t Overload the Brush: Avoid picking up too much acrylic powder or liquid...</li>
                                <li>Don’t Skip the Dehydrator: Using a nail dehydrator can help remove excess moisture...</li>
                                <li>Don’t Rush the Process: Allow adequate time for each step, including drying times...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOverview;