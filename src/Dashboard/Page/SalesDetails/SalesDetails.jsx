import axios from 'axios';
import React, { useState } from 'react';

const SalesDetails = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [salesData, setSalesData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fetch sales data based on the date range
        const response = await axios.get(`http://localhost:5000/api/sales?start=${startDate}&end=${endDate}`);

        const SData = await response.data;

        // Update the state with the fetched sales data
        setSalesData(SData);
    };

    // Calculate the total price
    const totalPrice = salesData.reduce((acc, sale) => acc + parseInt(sale.product.price), 0);

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F8F8EC] p-4">
            

            <form className="flex flex-col md:flex-row gap-4 mb-4 items-center w-full md:w-auto" onSubmit={handleSubmit}>
                <div className="w-full md:w-auto">
                    <label className="block pb-2 text-sm md:text-base">Start Date</label>
                    <input
                        type="date"
                        className="px-4 py-2 rounded-lg border bg-[#f57224] text-white font-semibold w-full"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div className="w-full md:w-auto">
                    <label className="block pb-2 text-sm md:text-base">End Date</label>
                    <input
                        type="date"
                        className="px-4 py-2 rounded-lg border bg-[#f57224] text-white font-semibold w-full"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg border bg-[#eb1370] text-white font-semibold mt-4 md:mt-7 w-full md:w-auto"
                >
                    Submit
                </button>
            </form>

            {/* Summary data here */}
            <div className="bg-white p-4 rounded-lg shadow-md w-full overflow-x-auto">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center uppercase">Details Summary</h2>

                {salesData?.length > 0 ? (
                    <>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Customer Name
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Item Name
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Customer Mobile
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Payment Method
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Payment Number
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Order Date
                                    </th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                        Delivery Done Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {salesData?.map((sale) => (
                                    <tr key={sale._id} className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base font-medium text-gray-900">
                                            {sale.customerName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.product.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.product.price}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.phone}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.paymentMethod}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.paymentMobileNumber}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.createAt.split("T")[0]}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm md:text-base text-gray-500">
                                            {sale.deliveryDoneDate}
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>

                        {/* Total Price Summary */}
                        <div className="mt-4 text-start">
                            <h3 className="text-lg font-semibold">Total Price : <span className='text-[#eb1370] font-bold'>{totalPrice} </span> <span className='text-[#eb1370] '>Taka</span></h3>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-sm md:text-base">No sales found for the selected date range.</p>
                )}
            </div>
        </div>
    );
};

export default SalesDetails;
