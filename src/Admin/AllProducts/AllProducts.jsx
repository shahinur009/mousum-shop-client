import React, { useState } from 'react';
import img from '../../../public/logo2.avif';

const AllProducts = () => {
    const initialOrders = [
        { id: 1, name: 'Shoe', category: 'shoe', details: 'China smart shoe', price: '1500', stock: '10', image: img },
        { id: 2, name: 'Bag', category: 'bag', details: 'Leather Bag', price: '2500', stock: '5', image: img },
        { id: 3, name: 'Watch', category: 'watch', details: 'Smart Watch', price: '3000', stock: '7', image: img },
        { id: 4, name: 'Laptop', category: 'laptop', details: 'Gaming Laptop', price: '50000', stock: '2', image: img },
        { id: 5, name: 'Phone', category: 'phone', details: 'Smart Phone', price: '20000', stock: '4', image: img },
        { id: 6, name: 'Headphones', category: 'headphone', details: 'Noise Cancelling Headphones', price: '4000', stock: '8', image: img },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const itemsPerPage = 5;

    // Extract unique categories from orders
    const uniqueCategories = ['All Category', ...new Set(initialOrders.map(order => order.category))];

    // Filter orders based on selected category
    const filteredOrders = selectedCategory === 'All Category'
        ? initialOrders
        : initialOrders.filter(order => order.category === selectedCategory);

    // Calculate total pages
    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

    // Get current orders
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className="min-h-screen w-full p-5">
            <h1 className="text-3xl font-bold text-center py-5">Products List</h1>
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-y-auto overflow-x-auto border border-gray-200 dark:border-gray-700 md:rounded-lg max-h-96">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">SL</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Name</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <select
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="px-4 py-2 border border-gray-300 rounded-md"
                                            >
                                                {uniqueCategories.map(category => (
                                                    <option key={category} value={category}>
                                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                                    </option>
                                                ))}
                                            </select>
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Details</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Price</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Stock Qty</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Image</th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {currentOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{order.id}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{order.name}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{order.category}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap max-w-xs truncate">{order.details}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{order.price}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{order.stock}</td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                <img src={order.image} alt={order.name} className="w-16 h-16 object-cover" />
                                            </td>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                <div className='flex justify-center items-center space-x-2'>
                                                    <button className='btn btn-warning'>Read</button>
                                                    <button className='btn btn-success'>Edit</button>
                                                    <button className='btn btn-error'>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        className={`px-4 py-2 text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>

                    <button
                        className={`px-4 py-2 text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AllProducts;
