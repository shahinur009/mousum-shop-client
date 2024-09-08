import { useState } from 'react';

const ProductStock = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const productsData = [
    { id: 1, productName: 'Product 1', category: 'Electronics', stock: 50 },
    { id: 2, productName: 'Product 2', category: 'Clothing', stock: 30 },
    { id: 3, productName: 'Product 3', category: 'Electronics', stock: 70 },
    { id: 4, productName: 'Product 4', category: 'Furniture', stock: 20 },
    { id: 5, productName: 'Product 5', category: 'Clothing', stock: 45 },
    { id: 6, productName: 'Product 6', category: 'Electronics', stock: 10 },
    { id: 7, productName: 'Product 7', category: 'Furniture', stock: 5 },
    // Add more product entries as necessary
  ];

  const categories = ['All', 'Electronics', 'Clothing', 'Furniture'];

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mb-6">
        {/* Filter by Category */}
        <div className="mb-4">
          <label className="mr-2 font-medium text-gray-700">Filter by Category:</label>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // Reset to first page when category changes
            }}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Serial
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Product Name
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Category
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                      Stock
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {currentProducts.map((product, index) => (
                    <tr key={product.id}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                        #{indexOfFirstProduct + index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {product.productName}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {product.category}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {product.stock}
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
            className={`px-4 py-2 text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
            }`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className={`px-4 py-2 text-sm font-medium text-gray-700 capitalize bg-white border border-gray-300 rounded-md hover:bg-gray-100 ${
              currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
            }`}
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

export default ProductStock;