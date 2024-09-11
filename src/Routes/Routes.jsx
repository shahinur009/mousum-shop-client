import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Navbar from "../Pages/Navbar/Navbar";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Admin/AllProducts/AllProducts";
// import ProductStock from "../Pages/ProductStock/ProductStock";
// import AddProduct from "../Pages/AddProduct/AddProduct";
// import OrderList from "../Pages/OrderList/OrderList";
// import AmountPage from "../Pages/AmountPage/AmountPage";
import Dashboard from "../Dashboard/Dashboard";
import ServiceOverview from "../Dashboard/Page/ServiceOverView/ServiceOverView";
import AddProduct from "../Dashboard/Page/AddProduct/AddProduct";
import ProductsStock from "../Dashboard/Page/ProductStock/ProductsStock";
import OrderList from "../Dashboard/Page/Orderlist/OrderList";
import AmountPage from "../Dashboard/Page/AmountPage/AmountPage";
import DashboardLayout from "../Dashboard/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/all-products',
                element: <AllProducts />
            },
            {
                path: '/contact',
                element: <AmountPage />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'stock',
                element: <ProductsStock />
            },
            {
                path: 'add-product',
                element: <AddProduct />
            },
            {
                path: 'order-list',
                element: <OrderList />
            },
            {
                path: 'payment',
                element: <AmountPage />
            },
            {
                path: 'service-over-view',
                element: <ServiceOverview />
            },

        ]

    }
]);

