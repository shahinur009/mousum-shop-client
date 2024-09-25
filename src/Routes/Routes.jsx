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
import DashboardLayout from "../Dashboard/DashboardLayout";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import CheckoutAndPaymentForm from "../Pages/PaymentCheckOut/CheckoutAndPaymentForm ";
import Update from "../Dashboard/Page/ProductStock/Update";
import OrderDetails from "../Dashboard/Page/Orderlist/OrderDetails";
import SalesDetails from "../Dashboard/Page/SalesDetails/SalesDetails";
import AdminBannerHome from "../Dashboard/Page/Banner/AdminBannerHome";
import CreateBanner from "../Dashboard/Page/Banner/CreateBanner";


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
                path: '/detail/:id',
                element: <DetailsPage />

            },
            {
                path: '/payment/:id',
                element: <CheckoutAndPaymentForm />

            },
            {
                path: '/all-products',

                // element: <AllProducts />
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
                path: 'update/:id',
                element: <Update />
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
                path: 'order-details/:id',
                element: <OrderDetails />
            },
            {
                path: 'sales-details',
                element: <SalesDetails />
            },
            {
                path: 'banner',
                element: <AdminBannerHome/>
            },
            {
                path: 'banner/create-banner',
                element: <CreateBanner/>
            },


        ]

    }
]);

