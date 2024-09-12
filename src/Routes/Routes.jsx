import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../Dashboard/Page/AddProduct/AddProduct";
import ProductsStock from "../Dashboard/Page/ProductStock/ProductsStock";
import OrderList from "../Dashboard/Page/Orderlist/OrderList";
import AmountPage from "../Dashboard/Page/AmountPage/AmountPage";
import DashboardLayout from "../Dashboard/DashboardLayout";
import AllProducts from "../Pages/AllProducts/AllProducts";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import Payment from "../Pages/Payment/Payment";

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
                path: '/detail',
                element: <DetailsPage />

            },
            {
                path: '/payment',
                element: <Payment />

            },
            {
                path: '/all-products',
                element: <AllProducts />
            },
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
            

        ]

    }
]);

