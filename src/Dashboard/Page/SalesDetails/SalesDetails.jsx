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

    return (
        <div className="flex flex-col items-center min-h-screen bg-[#F8F8EC] p-4">
            <h1 className="text-xl md:text-3xl font-bold md:my-6 my-4 uppercase">Sales Details</h1>

            <form className="flex gap-4 mb-4 items-center" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-[#f57224]">Start Date</label>
                    <input
                        type="date"
                        className="px-4 py-2 rounded-lg border bg-[#f57224] text-white font-semibold"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-[#f57224]">End Date</label>
                    <input
                        type="date"
                        className="px-4 py-2 rounded-lg border bg-[#f57224] text-white font-semibold"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-4 py-2 rounded-lg border bg-[#eb1370] text-white font-semibold mt-5"
                >
                    Submit
                </button>
            </form>

            <div className="bg-white p-4 rounded-lg shadow-md w-full">
                <h2 className="text-xl font-semibold mb-4 text-center uppercase">Result</h2>

                {salesData?.length > 0 ? (
                    <ul>
                        {salesData?.map((sale) => (
                            <li key={sale._id} className="border-b p-2">
                                <p><strong>Customer Name:</strong> {sale.customerName}</p>
                                <p><strong>Item Name:</strong> {sale.product.name}</p>
                                <p><strong>Price:</strong> {sale.product.price}</p>
                                <p><strong>Delivery Done Date:</strong> {sale.deliveryDoneDate}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No sales found for the selected date range.</p>
                )}
            </div>
        </div>
    );
};

export default SalesDetails;
