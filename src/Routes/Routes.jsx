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
import ProductStock from "../Pages/ProductStock/ProductStock";
import AddProduct from "../Pages/AddProduct/AddProduct";
import OrderList from "../Pages/OrderList/OrderList";
import AmountPage from "../Pages/AmountPage/AmountPage";

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
                path: '/product-stock',
                element: <ProductStock />
            },
            {
                path: '/add-product',
                element: <AddProduct />
            }
            ,
            {
                path: '/order-list',
                element: <OrderList />
            }
            ,
            {
                path: '/payment',
                element: <AmountPage />
            }
        ]
    },
]);

