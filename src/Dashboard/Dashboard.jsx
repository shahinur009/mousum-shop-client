import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Online Sales",
        data: [12000, 19000, 3000, 5000, 2000, 3000, 4000],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Offline Sales",
        data: [3000, 4000, 5000, 2000, 3000, 4000, 5000],
        backgroundColor: "#FF6384",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Last Month",
        data: [12000, 15000, 20000, 30000, 25000, 20000, 35000],
        fill: false,
        borderColor: "#36A2EB",
      },
      {
        label: "This Month",
        data: [30000, 25000, 20000, 15000, 10000, 5000, 10000],
        fill: false,
        borderColor: "#FF6384",
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-300 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-1/6 bg-[#9ae17b] p-5 flex md:flex-col flex-row gap-4">
        {/* <Link className="text-xl font-bold" to="/dashboard">Dashboard</Link> */}
        <Link className="text-xl font-bold bg-white rounded-md p-2" to={'/'}>Back Home</Link>
        {/* Add Products Route */}
        <div className="flex  items-center gap-3 bg-orange-400 rounded-md p-2">
          <Link className="text-md font-bold " to={'/dashboard/add-product'}>Add Product</Link>
          <FaArrowRight />
        </div>
        {/* amount route */}
        <div className="flex items-center gap-3 bg-orange-400 rounded-md p-2">
          <Link className="text-md font-bold" to={'/dashboard/payment'}>Amount Page</Link>
          <FaArrowRight />
        </div>
        {/* Order List route */}
        <div className="flex items-center gap-3 bg-orange-400 rounded-md p-2">
          <Link className="text-md font-bold" to={'/dashboard/order-list'}>Order List</Link>
          <FaArrowRight />
        </div>
        {/* Stocks Route */}
        <div className="flex items-center gap-3 bg-orange-400 rounded-md p-2">
          <Link className="text-md font-bold" to={'/dashboard/stock'}>Stock</Link>
          <FaArrowRight />
        </div>
        {/* Order List Route */}
        <div className="flex items-center gap-3 bg-orange-400 rounded-md p-2">
          <Link className="text-md font-bold" to={'/dashboard/order-list'}>Order List</Link>
          <FaArrowRight />
        </div>
        {/* Service over view Route */}
        <div className="flex items-center gap-3 bg-orange-400 rounded-md p-2">
          <Link className="text-md font-bold" to={'/dashboard/service-over-view'}>Service Over View</Link>
          <FaArrowRight />
        </div>
        {/* Sidebar items */}
      </aside>

      {/* Main content */}
      <main className="flex-1 md:p-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold mb-4 md:mb-0">Dashboard</h2>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
          />
        </header>

        {/* Cards section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Sales</h3>
            <p className="text-3xl font-bold">$1k</p>
            <p className="text-green-500 mt-1">+15% from yesterday</p>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Service</h3>
            <p className="text-3xl font-bold">1000+</p>
            <p className="text-green-500 mt-1">+15 from yesterday</p>
          </div>
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Total Member</h3>
            <p className="text-3xl font-bold">200+</p>
            <p className="text-green-500 mt-1">+1 from yesterday</p>
          </div>
          {/* Add more cards similarly */}
        </section>

        {/* Charts section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
            <div className="w-full">
              <Bar data={barData} />
            </div>
          </div>

          <div className="bg-white shadow-lg p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
            <div className="w-full">
              <Line data={lineData} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;