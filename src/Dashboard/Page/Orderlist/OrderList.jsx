import React, { useEffect, useState } from 'react';
import bg from '../../../../public/Login-background.jpg'
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false)
  const [totalProduct, setTotalProducts] = useState([])
  const itemsPerPage = 5;
  const orders = [
    { id: 1, date: '2024-09-01', status: 'Pending' },
    { id: 2, date: '2024-09-02', status: 'Process' },
    { id: 3, date: '2024-09-03', status: 'Done' },
    { id: 4, date: '2024-09-04', status: 'Pending' },
    { id: 5, date: '2024-09-05', status: 'Done' },
    { id: 6, date: '2024-09-06', status: 'Process' },
    { id: 7, date: '2024-09-07', status: 'Pending' },
    { id: 8, date: '2024-09-08', status: 'Done' },
    { id: 9, date: '2024-09-09', status: 'Process' },
    { id: 10, date: '2024-09-10', status: 'Pending' },
  ];





  // Calculate total pages
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Get current order
  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

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
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/orderList`, {
        // params: {
        //   category: selectedCategory === 'All' ? '' : selectedCategory,
        //   page: currentPage,
        //   limit: productsPerPage,
        // },
      });
      setProducts(res.data.products);
      console.log(res.data)
      setTotalProducts(res.data.totalCount); // Assuming your API returns total product count
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section style={{ backgroundImage: `url(${bg})` }} className="px-4 mx-auto bg-cover bg-center min-h-screen w-full bg-white">
      <h1 className="text-3xl font-bold text-center py-5 uppercase">Order List</h1>
      <div>
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Serial Number
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Customer Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Delivery Status
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {products.map((order, index) => (
                      <tr key={order._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {order.customerName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {order.product.name}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {order.createAt.split("T")[0]}

                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${order.status === 'pending'
                              ? 'text-yellow-500 bg-yellow-100'
                              : order.status === 'process'
                                ? 'text-blue-500 bg-blue-100'
                                : 'text-emerald-500 bg-emerald-100'
                              }`}
                          >
                            {order.status}
                          </span>
                          
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <Link to={`/dashboard/order-details/${order._id}`} className="btn btn-secondary">
                            Order Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* pagination this */}
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
      </div>
    </section>
  );
};

export default OrderList;
