import React, { useEffect, useState } from 'react';
import bg from '../../../../public/Login-background.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;

  const getProducts = async (page) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/orderList`, {
        params: {
          page: page,
          limit: itemsPerPage
        }
      });
      setProducts(res.data.products);
      setTotalPages(res.data.totalPages); // Set the total pages
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

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
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="px-4 mx-auto bg-cover bg-center min-h-screen w-full bg-white"
    >
      <h1 className="text-3xl font-bold text-center py-5 uppercase">Order List</h1>
      <div>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Serial Number</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Customer Name</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Product Name</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Date</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Delivery Status</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {products.map((order, index) => (
                      <tr key={order._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">{index + 1}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{order.customerName}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{order.product.name}</td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{order.createAt.split("T")[0]}</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${order.status === 'pending' ? 'text-yellow-500 bg-yellow-100' : order.status === 'process' ? 'text-blue-500 bg-blue-100' : order.status === 'Done' ? 'text-red-500 bg-red-100 font-bold' : 'text-emerald-500 bg-emerald-100'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <Link to={`/dashboard/order-details/${order._id}`} className="btn btn-secondary">Order Details</Link>
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
      </div>
    </section>
  );
};

export default OrderList;
