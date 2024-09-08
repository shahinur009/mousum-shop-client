import React, { useState } from 'react';

const AmountPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const ordersData = [
    { id: 1, totalAmount: '$200', productName: 'Product 1', price: '$50', status: 'Pending', customerName: 'John Doe' },
    { id: 2, totalAmount: '$500', productName: 'Product 2', price: '$150', status: 'Processed', customerName: 'Jane Smith' },
    { id: 3, totalAmount: '$100', productName: 'Product 3', price: '$25', status: 'Done', customerName: 'Emily Davis' },
    { id: 4, totalAmount: '$700', productName: 'Product 4', price: '$200', status: 'Pending', customerName: 'James Brown' },
    { id: 5, totalAmount: '$300', productName: 'Product 5', price: '$75', status: 'Done', customerName: 'Michael Scott' },
    { id: 6, totalAmount: '$400', productName: 'Product 6', price: '$100', status: 'Processed', customerName: 'Dwight Schrute' },
    // Add more orders here
  ];

  // Calculate total pages
  const totalPages = Math.ceil(ordersData.length / itemsPerPage);

  // Get current orders for the page
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = ordersData.slice(indexOfFirstOrder, indexOfLastOrder);

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
    <section className="px-4 mx-auto">
      <div className="flex flex-col mb-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Serial</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Total Amount</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Product Name</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Price</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Status</th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">Customer Name</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {currentOrders.map((order, index) => (
                    <tr key={order.id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        #{indexOfFirstOrder + index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {order.totalAmount}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {order.productName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {order.price}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-white ${order.status === 'Pending' ? 'bg-yellow-500' : order.status === 'Processed' ? 'bg-blue-500' : 'bg-green-500'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {order.customerName}
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

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

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

export default AmountPage;
