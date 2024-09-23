import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
    const { id } = useParams(); // Get the id from the URL parameters
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/details/${id}`);
            setProductDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch product details", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, [id]);

    // Status change API
    const handleStatusChange = async (orderId) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/orders/${orderId}/status`);
            console.log("Order status updated:", response.data);
            // Optionally, fetch details again after updating status
            fetchDetails(); // Uncomment this line if you want to refresh the details after status change
        } catch (error) {
            console.error("Failed to update order status", error.response?.data || error.message);
        }
    };
    const handleDeliveryDone = async (orderId) => {
        try {
            const response = await axios.put(`http://localhost:5000/api/delivery-done/${orderId}/status`);
            console.log("Order status updated:", response.data);
            // Optionally, fetch details again after updating status
            fetchDetails(); // Uncomment this line if you want to refresh the details after status change
        } catch (error) {
            console.error("Failed to update order status", error.response?.data || error.message);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!productDetails) {
        return <p>No details found for this product.</p>;
    }

    const { customerName, phone, address, shippingMethod, coupon, paymentMethod, paymentMobileNumber, screenshotUrl, cod, createAt, product, _id, status } = productDetails;

    return (
        <div className="min-h-screen p-4 bg-gray-100 flex w-[90%] justify-center mx-auto">
            <div className="p-6 w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">Product Details</h1>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border border-gray-300">Field</th>
                            <th className="py-2 px-4 border border-gray-300">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Customer Name</td>
                            <td className="py-2 px-4 border border-gray-300">{customerName}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Phone</td>
                            <td className="py-2 px-4 border border-gray-300">{phone}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Address</td>
                            <td className="py-2 px-4 border border-gray-300">{address}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Shipping Method</td>
                            <td className="py-2 px-4 border border-gray-300">{shippingMethod}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Coupon</td>
                            <td className="py-2 px-4 border border-gray-300">{coupon}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Payment Method</td>
                            <td className="py-2 px-4 border border-gray-300">{paymentMethod}</td>
                        </tr>
                        {paymentMethod === "bkash" || paymentMethod === "nagad" ? (
                            <>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300">Payment Mobile Number</td>
                                    <td className="py-2 px-4 border border-gray-300">{paymentMobileNumber}</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border border-gray-300">Screenshot</td>
                                    <td className="py-2 px-4 border border-gray-300">
                                        <img src={screenshotUrl} alt="Screenshot" className="w-[40%]" />
                                    </td>
                                </tr>
                            </>
                        ) : (
                            cod && <tr>
                                <td className="py-2 px-4 border border-gray-300">Payment Option</td>
                                <td className="py-2 px-4 border border-gray-300">Cash on Delivery</td>
                            </tr>
                        )}
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Created At</td>
                            <td className="py-2 px-4 border border-gray-300">{createAt.split("T")[0]}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Product Name</td>
                            <td className="py-2 px-4 border border-gray-300">{product.name}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Product Color</td>
                            <td className="py-2 px-4 border border-gray-300">{product.color}</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border border-gray-300">Product Image</td>
                            <td className="py-2 px-4 border border-gray-300">
                                <img src={product.image} alt="" className="w-[30%]" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="md:p-16 p-3">
                {status === 'pending' ? (
                    <button onClick={() => handleStatusChange(_id)} className="btn btn-secondary">Order Confirm</button>
                ) : (
                    <button onClick={() => handleDeliveryDone(_id)} className={`btn btn-warning ${status === "Done" && 'hidden'}`}>Delivery Done</button>
                )}
            </div>
        </div>
    );
};

export default OrderDetails;
